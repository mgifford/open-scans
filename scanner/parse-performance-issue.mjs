import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { parseViewportSpec, normalizeBrowser, VIEWPORT_PRESETS } from "../scan-context.js";
import { extractNamedValue, extractSection, validateUriLike } from "./parse-issue.mjs";
import { reasonForBlockedHost, validateTarget } from "./validate-targets.mjs";

const schemaPath = new URL("./schemas/performance-request.schema.json", import.meta.url);
const performanceRequestSchema = JSON.parse(readFileSync(schemaPath, "utf8"));

/** The contract version carried by this request type. */
export const PERFORMANCE_REQUEST_SCHEMA_VERSION = "performance-request/1";
/** Issue-title prefix for a performance investigation. Never reused for accessibility scans. */
export const PERFORMANCE_TRIGGER = "PERF";
/** Parser implementation version, recorded in provenance. */
export const PARSER_VERSION = "1.0.0";

export const PERFORMANCE_MODES = Object.freeze(["reuse", "light", "deep", "combined"]);
export const EVIDENCE_SOURCE_TYPES = Object.freeze([
  "open-scans-report",
  "firefox-energy-scanner",
  "vital-core",
  "open-site-review"
]);
export const ACCESSIBILITY_ENGINES = Object.freeze(["all", "axe", "alfa", "accesslint", "equalaccess"]);
export const CONSENT_STATES = Object.freeze(["not-configured", "not-needed", "accepted", "rejected"]);

/**
 * Proposed initial defaults, not permanent policy.
 * `reuse` performs no browser measurement at all.
 */
export const PERFORMANCE_LIMIT_DEFAULTS = Object.freeze({
  reuse: Object.freeze({ maxPagesToInspect: 20, maxLighthouseAudits: 0, maxSitespeedPages: 0 }),
  light: Object.freeze({ maxPagesToInspect: 20, maxLighthouseAudits: 5, maxSitespeedPages: 0 }),
  deep: Object.freeze({ maxPagesToInspect: 20, maxLighthouseAudits: 5, maxSitespeedPages: 3 }),
  combined: Object.freeze({ maxPagesToInspect: 20, maxLighthouseAudits: 5, maxSitespeedPages: 3 })
});

const MODE_ALIASES = Object.freeze({
  reuse: "reuse",
  "reuse-only": "reuse",
  "reuse only": "reuse",
  evidence: "reuse",
  "evidence-only": "reuse",
  light: "light",
  lightweight: "light",
  "light-weight": "light",
  shallow: "light",
  deep: "deep",
  detailed: "deep",
  sitespeed: "deep",
  combined: "combined",
  both: "combined",
  "accessibility-and-performance": "combined"
});

const SOURCE_TYPE_ALIASES = Object.freeze({
  "open-scans-report": "open-scans-report",
  "open-scans": "open-scans-report",
  openscans: "open-scans-report",
  "open-scans-json": "open-scans-report",
  "firefox-energy-scanner": "firefox-energy-scanner",
  "firefox-energy": "firefox-energy-scanner",
  fes: "firefox-energy-scanner",
  energy: "firefox-energy-scanner",
  "vital-core": "vital-core",
  vitalcore: "vital-core",
  vital: "vital-core",
  "open-site-review": "open-site-review",
  "site-review": "open-site-review",
  opensitereview: "open-site-review"
});

const CONSENT_ALIASES = Object.freeze({
  "not-configured": "not-configured",
  "not configured": "not-configured",
  unknown: "not-configured",
  none: "not-configured",
  "not-needed": "not-needed",
  "not needed": "not-needed",
  "not required": "not-needed",
  "no consent required": "not-needed",
  accepted: "accepted",
  granted: "accepted",
  yes: "accepted",
  rejected: "rejected",
  declined: "rejected",
  no: "rejected"
});

const BROWSER_ALIASES = Object.freeze({
  chrome: "chromium",
  ff: "firefox",
  "mozilla firefox": "firefox"
});

const PROFILE_ALIASES = Object.freeze({
  mobile: "mobile",
  phone: "mobile",
  smartphone: "mobile",
  desktop: "desktop",
  laptop: "desktop"
});

const TRUTHY = new Set(["true", "yes", "y", "always", "allow", "allowed"]);
const FALSY = new Set(["false", "no", "n", "never", "deny", "denied"]);

// Query parameters that usually carry a credential. A public issue and its
// published request must not preserve them, so the request is refused instead
// of silently publishing a secret.
const SENSITIVE_QUERY_KEY = /(^|[._-])(token|secret|password|passwd|api[._-]?key|access[._-]?key|private[._-]?key|client[._-]?secret|authorization|auth|session|sessionid|credential|signature|sig|key)($|[._-])/i;

const DATE_TIME_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
const DIGEST_RE = /^sha256:[0-9a-f]{64}$/;
const REQUEST_ID_RE = /^[0-9]+-perf-[0-9a-f]{12}$/;
const MAX_URL_LENGTH = 2048;

function text(value) {
  return String(value ?? "").trim();
}

function normalizeMode(value) {
  const normalized = text(value).toLowerCase();
  return MODE_ALIASES[normalized] ?? null;
}

function normalizeSourceType(value) {
  return SOURCE_TYPE_ALIASES[text(value).toLowerCase()] ?? null;
}

function normalizeConsentState(value) {
  return CONSENT_ALIASES[text(value).toLowerCase()] ?? null;
}

function normalizeProfile(value) {
  return PROFILE_ALIASES[text(value).toLowerCase()] ?? null;
}

function normalizeBrowserChoice(value) {
  const normalized = text(value).toLowerCase();
  if (!normalized) return null;
  const aliased = BROWSER_ALIASES[normalized];
  if (aliased) return aliased;
  const resolved = normalizeBrowser(normalized);
  return resolved ?? null;
}

function parseBooleanValue(value) {
  const normalized = text(value).toLowerCase();
  if (TRUTHY.has(normalized)) return true;
  if (FALSY.has(normalized)) return false;
  return null;
}

function parseIntegerValue(value) {
  const normalized = text(value);
  if (!/^\d+$/.test(normalized)) return null;
  return Number.parseInt(normalized, 10);
}

function splitLines(value) {
  return text(value)
    .split(/\r?\n/g)
    .map((line) => line.trim().replace(/^[-*+]\s+/, ""))
    .filter(Boolean);
}

function splitUrlList(value) {
  return text(value)
    .split(/[\n,]/g)
    .map((line) => line.trim().replace(/^[-*+]\s+/, ""))
    .filter(Boolean);
}

function baseHost(hostname) {
  return text(hostname).toLowerCase().replace(/^www\./, "");
}

/** A page URL is in scope when its host is the site host or a subdomain of it. */
export function isSameSiteHost(hostname, siteHostname) {
  const host = baseHost(hostname);
  const base = baseHost(siteHostname);
  if (!host || !base) return false;
  return host === base || host.endsWith(`.${base}`);
}

function hasSensitiveQuery(parsedUrl) {
  for (const key of parsedUrl.searchParams.keys()) {
    if (SENSITIVE_QUERY_KEY.test(key)) return key;
  }
  return null;
}

function isRepoRelativeReportPath(location) {
  return !/^[a-z][a-z0-9+.-]*:/i.test(location);
}

function validateReportRepoPath(location) {
  if (location.includes("\\")) return "must use forward slashes";
  if (location.startsWith("/")) return "must be relative to the repository root";
  if (location.split("/").includes("..")) return "must not contain '..'";
  if (!location.startsWith("reports/")) return "must start with 'reports/'";
  if (!location.endsWith(".json")) return "must point to a .json report";
  if (location.includes("//")) return "must not contain empty path segments";
  if (!/^reports\/[A-Za-z0-9._/-]+\.json$/.test(location)) {
    return "may only contain letters, digits, dot, underscore, dash and slash";
  }
  return null;
}

function normalizeEvidenceSource(rawType, rawLocation) {
  const errors = [];
  const warnings = [];
  const type = normalizeSourceType(rawType);
  if (!type) {
    if (text(rawType).toLowerCase().includes("mcp")) {
      errors.push(
        "MCP sources are not supported. This request type never invokes tools from a user-supplied MCP server. "
        + `Supported evidence sources: ${EVIDENCE_SOURCE_TYPES.join(", ")}.`
      );
    } else {
      errors.push(
        `Unsupported evidence source type '${text(rawType).slice(0, 60)}'. `
        + `Supported evidence sources: ${EVIDENCE_SOURCE_TYPES.join(", ")}.`
      );
    }
    return { value: null, errors, warnings };
  }

  const location = text(rawLocation);
  if (!location) {
    errors.push(`Evidence source '${type}' is missing a location.`);
    return { value: null, errors, warnings };
  }
  if (location.length > MAX_URL_LENGTH) {
    errors.push(`Evidence source location is longer than ${MAX_URL_LENGTH} characters.`);
    return { value: null, errors, warnings };
  }

  if (type === "open-scans-report" && isRepoRelativeReportPath(location)) {
    const problem = validateReportRepoPath(location);
    if (problem) {
      errors.push(`Open Scans report path '${location}' ${problem}.`);
      return { value: null, errors, warnings };
    }
    return {
      value: { type, location, locationKind: "repo-path" },
      errors,
      warnings
    };
  }

  if (!/^https:\/\//i.test(location)) {
    errors.push(
      `Evidence source '${type}' requires an https:// location`
      + (type === "open-scans-report" ? " (or a repository path under reports/)" : "")
      + `. Received '${location.slice(0, 120)}'.`
    );
    return { value: null, errors, warnings };
  }

  let parsed;
  try {
    parsed = new URL(location);
  } catch {
    errors.push(`Evidence source location is not a valid URL: '${location.slice(0, 120)}'.`);
    return { value: null, errors, warnings };
  }

  if (parsed.protocol !== "https:") {
    errors.push(`Evidence source '${type}' requires https; '${parsed.protocol}' is not accepted.`);
    return { value: null, errors, warnings };
  }
  if (parsed.username || parsed.password) {
    errors.push("Evidence source URLs must not contain a username or password.");
    return { value: null, errors, warnings };
  }

  const blocked = reasonForBlockedHost(parsed.hostname);
  if (blocked) {
    errors.push(`Evidence source host '${parsed.hostname}' is blocked: ${blocked}.`);
    return { value: null, errors, warnings };
  }

  const sensitiveKey = hasSensitiveQuery(parsed);
  if (sensitiveKey) {
    errors.push(
      `Evidence source URL contains a credential-like query parameter '${sensitiveKey}'. `
      + "Use a public URL without secrets; request fields are published in the workflow artifact."
    );
    return { value: null, errors, warnings };
  }

  if (parsed.hash) {
    warnings.push(`Evidence source '${parsed.hostname}' fragment was removed; fragments are not sent to servers.`);
    parsed.hash = "";
  }

  return {
    value: { type, location: parsed.toString(), locationKind: "https" },
    errors,
    warnings
  };
}

function parseEvidenceSources(sectionText) {
  const sources = [];
  const errors = [];
  const warnings = [];
  const seen = new Set();

  for (const [index, line] of splitLines(sectionText).entries()) {
    if (/^(none|n\/a|no sources?)$/i.test(line)) continue;

    const match = line.match(/^([a-z0-9][a-z0-9 _.-]*?)\s*(?::|\||\s{1,})\s*(\S.*)$/i);
    if (!match) {
      errors.push(
        `Evidence sources line ${index + 1} must be '<type>: <location>'. `
        + `Supported types: ${EVIDENCE_SOURCE_TYPES.join(", ")}.`
      );
      continue;
    }

    const result = normalizeEvidenceSource(match[1], match[2]);
    errors.push(...result.errors);
    warnings.push(...result.warnings);
    if (!result.value) continue;

    const key = `${result.value.type}\u0000${result.value.location}`;
    if (seen.has(key)) {
      warnings.push(`Duplicate evidence source ignored: ${result.value.type} at ${result.value.location}.`);
      continue;
    }
    seen.add(key);
    sources.push(result.value);
  }

  return { sources, errors, warnings };
}

function translateTargetReason(reason, kind) {
  if (kind === "page" && reason === "non-web document URLs cannot be accessibility-scanned") {
    return "non-web document URLs cannot be performance-inspected";
  }
  return reason;
}

function parsePageUrlList(rawText, site, label) {
  const urls = [];
  const errors = [];
  const warnings = [];
  const seen = new Set();
  let currentSite = site;

  for (const [index, raw] of splitUrlList(rawText).entries()) {
    if (/^page:\s*\d+$/i.test(raw)) {
      errors.push(`${label} line ${index + 1} uses the accessibility crawl placeholder 'Page: N'; enter exact public URLs instead.`);
      continue;
    }
    if (raw.length > MAX_URL_LENGTH) {
      errors.push(`${label} line ${index + 1} is longer than ${MAX_URL_LENGTH} characters.`);
      continue;
    }

    const result = validateTarget(raw);
    if (!result.accepted) {
      errors.push(`${label} line ${index + 1} was rejected: ${translateTargetReason(result.reason, "page")}.`);
      continue;
    }

    let parsed;
    try {
      parsed = new URL(result.normalizedUrl);
    } catch {
      errors.push(`${label} line ${index + 1} is not a valid http/https URL.`);
      continue;
    }

    if (parsed.username || parsed.password) {
      errors.push(`${label} line ${index + 1} must not contain a username or password.`);
      continue;
    }

    if (!currentSite) {
      currentSite = {
        origin: parsed.origin,
        host: parsed.hostname.toLowerCase(),
        urls: []
      };
      warnings.push(`Site origin '${currentSite.origin}' was derived from the first URL because no Domain was given.`);
    }

    if (!isSameSiteHost(parsed.hostname, currentSite.host)) {
      errors.push(
        `${label} line ${index + 1} ('${parsed.hostname}') is outside the requested site '${currentSite.host}'. `
        + "Submit a separate PERF request for a different site."
      );
      continue;
    }

    const sensitiveKey = hasSensitiveQuery(parsed);
    if (sensitiveKey) {
      errors.push(
        `${label} line ${index + 1} contains a credential-like query parameter '${sensitiveKey}'. `
        + "Remove the secret before submitting; request fields are published."
      );
      continue;
    }

    if (seen.has(parsed.toString())) continue;
    seen.add(parsed.toString());
    urls.push(parsed.toString());
  }

  return { urls, site: currentSite, errors, warnings };
}

function parseDomain(rawDomain) {
  const errors = [];
  const warnings = [];
  const raw = text(rawDomain);
  if (!raw) return { site: null, extraUrl: null, errors, warnings };

  let candidate = raw;
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(candidate)) {
    candidate = `https://${candidate}`;
  }

  let parsed;
  try {
    parsed = new URL(candidate);
  } catch {
    errors.push(`Domain '${raw.slice(0, 120)}' is not a valid domain or URL.`);
    return { site: null, extraUrl: null, errors, warnings };
  }

  if (!["http:", "https:"].includes(parsed.protocol)) {
    errors.push("Domain must use http:// or https://.");
    return { site: null, extraUrl: null, errors, warnings };
  }
  if (parsed.username || parsed.password) {
    errors.push("Domain must not contain a username or password.");
    return { site: null, extraUrl: null, errors, warnings };
  }
  if (parsed.search || parsed.hash) {
    errors.push("Domain must not contain a query string or fragment; put exact page URLs under URLs.");
    return { site: null, extraUrl: null, errors, warnings };
  }

  const hostCheck = validateTarget(parsed.origin);
  if (!hostCheck.accepted) {
    errors.push(`Domain '${parsed.hostname}' was rejected: ${hostCheck.reason}.`);
    return { site: null, extraUrl: null, errors, warnings };
  }

  const origin = parsed.origin;
  const site = {
    origin,
    host: parsed.hostname.toLowerCase(),
    urls: []
  };

  let extraUrl = null;
  if (parsed.pathname && parsed.pathname !== "/") {
    extraUrl = parsed.toString();
    warnings.push(`Domain included a path; '${extraUrl}' is treated as an exact URL.`);
  }

  return { site, extraUrl, errors, warnings };
}

function parseLimits(body, mode) {
  const defaults = PERFORMANCE_LIMIT_DEFAULTS[mode] ?? PERFORMANCE_LIMIT_DEFAULTS.light;
  const explicit = {};
  const errors = [];
  const warnings = [];
  const defaulted = [];

  const setLimit = (key, value, label) => {
    if (value === null) {
      errors.push(`${label} must be a whole number.`);
      return;
    }
    if (explicit[key] !== undefined && explicit[key] !== value) {
      errors.push(`Conflicting values for ${label}: ${explicit[key]} and ${value}. Keep one value.`);
      return;
    }
    explicit[key] = value;
  };

  const limitPatterns = [
    { key: "maxPagesToInspect", pattern: /^(?:max(?:imum)?\s+)?pages?(?:\s+to\s+inspect)?\s*[:=]\s*(\S+)$/i, label: "Max pages to inspect" },
    { key: "maxLighthouseAudits", pattern: /^(?:max(?:imum)?\s+)?lighthouse\s+audits?\s*[:=]\s*(\S+)$/i, label: "Max Lighthouse audits" },
    { key: "maxSitespeedPages", pattern: /^(?:max(?:imum)?\s+)?sitespeed(?:\s+io)?\s+pages?\s*[:=]\s*(\S+)$/i, label: "Max Sitespeed pages" }
  ];

  const limitsSection = extractSection(body, "Limits");
  for (const line of splitLines(limitsSection)) {
    for (const { key, pattern, label } of limitPatterns) {
      const match = line.match(pattern);
      if (match) {
        setLimit(key, parseIntegerValue(match[1]), label);
        break;
      }
    }
  }

  const named = [
    { key: "maxPagesToInspect", labels: ["Max pages to inspect", "Max pages", "Maximum pages"], label: "Max pages to inspect" },
    { key: "maxLighthouseAudits", labels: ["Max Lighthouse audits", "Maximum Lighthouse audits", "Lighthouse audits"], label: "Max Lighthouse audits" },
    { key: "maxSitespeedPages", labels: ["Max Sitespeed pages", "Maximum Sitespeed pages", "Sitespeed pages"], label: "Max Sitespeed pages" }
  ];
  for (const { key, labels, label } of named) {
    for (const candidateLabel of labels) {
      const raw = extractNamedValue(body, candidateLabel);
      if (raw !== null) {
        setLimit(key, parseIntegerValue(raw), label);
        break;
      }
    }
  }

  const limits = {};
  for (const key of ["maxPagesToInspect", "maxLighthouseAudits", "maxSitespeedPages"]) {
    if (explicit[key] === undefined) {
      limits[key] = defaults[key];
      defaulted.push(key);
    } else {
      limits[key] = explicit[key];
    }
  }

  return { limits, errors, warnings, defaulted };
}

function parseMeasurement(body) {
  const errors = [];
  const warnings = [];
  const defaulted = [];

  const rawProfile = extractSection(body, "Profile")
    || extractSection(body, "Device profile")
    || extractNamedValue(body, "Profile")
    || extractNamedValue(body, "Device profile");
  let profile = rawProfile ? normalizeProfile(rawProfile) : null;
  if (rawProfile && !profile) {
    errors.push("Profile must be 'mobile' or 'desktop'.");
  }

  const rawViewport = extractSection(body, "Viewport") || extractNamedValue(body, "Viewport");
  let viewportSpec = rawViewport ? parseViewportSpec(rawViewport) : null;
  if (rawViewport && !viewportSpec) {
    errors.push("Viewport must be a preset (desktop, mobile-portrait, tablet-portrait, ...) or a size such as 1280x800.");
  }

  const rawBrowser = extractSection(body, "Browser") || extractNamedValue(body, "Browser");
  let browser = rawBrowser ? normalizeBrowserChoice(rawBrowser) : null;
  if (rawBrowser && !browser) {
    errors.push("Browser must be 'chromium' or 'firefox' for a performance request.");
  } else if (browser === "webkit") {
    errors.push("WebKit is not a supported performance-measurement browser in this contract; use chromium or firefox.");
    browser = null;
  } else if (browser === "random") {
    errors.push("A random browser makes measurements incomparable between runs; choose chromium or firefox.");
    browser = null;
  }

  if (!browser) {
    browser = "chromium";
    defaulted.push("browser");
  }

  if (!profile) {
    profile = viewportSpec?.preset?.startsWith("mobile") ? "mobile" : "desktop";
    defaulted.push("profile");
  }
  if (rawProfile && viewportSpec) {
    const presetIsMobile = viewportSpec.preset.startsWith("mobile");
    if ((profile === "mobile") !== presetIsMobile) {
      warnings.push(`Profile '${profile}' and viewport preset '${viewportSpec.preset}' describe different device classes; the explicit viewport is used.`);
    }
  }

  let viewport = viewportSpec;
  if (!viewport) {
    const presetName = profile === "mobile" ? "mobile-portrait" : "desktop";
    viewport = { ...VIEWPORT_PRESETS[presetName], preset: presetName };
    defaulted.push("viewport");
  }

  if (viewport.width < 200 || viewport.width > 10000 || viewport.height < 200 || viewport.height > 10000) {
    errors.push("Viewport width and height must be between 200 and 10000 CSS pixels.");
  }

  return {
    measurement: {
      browser,
      profile,
      viewport: { width: viewport.width, height: viewport.height },
      viewportPreset: viewport.preset
    },
    errors,
    warnings,
    defaulted
  };
}

function parseAccessibilityEngines(body) {
  const errors = [];
  const firstLine = text(body).split(/\r?\n/)[0] ?? "";
  const firstLineMatch = firstLine.match(/^Engine:\s*(.+)$/i);
  const section = extractSection(body, "Accessibility engines");
  const raw = firstLineMatch ? firstLineMatch[1] : section;
  if (!text(raw)) return { engines: null, errors };
  if (/^(none|n\/a|no engines?|performance only|performance-only)\b/i.test(text(raw))) {
    return { engines: null, errors };
  }

  const engines = [];
  for (const token of text(raw).split(/[\s,]+/).filter(Boolean)) {
    const normalized = token.toLowerCase();
    if (normalized === "qualweb") {
      errors.push("QualWeb is not a supported accessibility engine in this scanner; use axe, alfa, accesslint, equalaccess or all.");
      continue;
    }
    if (!ACCESSIBILITY_ENGINES.includes(normalized)) {
      errors.push(
        `Unsupported accessibility engine '${token.slice(0, 40)}'. `
        + "Use axe, alfa, accesslint, equalaccess or all; combined mode requires an explicit, reproducible list."
      );
      continue;
    }
    if (!engines.includes(normalized)) engines.push(normalized);
  }

  return { engines: engines.length > 0 ? engines : null, errors };
}

function buildProvenance({ title, body, issueNumber }) {
  const normalizedTitle = text(title);
  const normalizedBody = text(body).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const inputDigest = `sha256:${createHash("sha256").update(`${normalizedTitle}\n---\n${normalizedBody}`).digest("hex")}`;
  const requestHash = createHash("sha256").update(`${issueNumber}\n${inputDigest}`).digest("hex").slice(0, 12);
  return {
    requestId: `${issueNumber}-perf-${requestHash}`,
    inputDigest
  };
}

/**
 * Parse a `PERF:` issue event into a validated performance request.
 * This function performs no network access and launches no browser.
 * @param {object} issueEvent - GitHub issue event payload
 * @returns {object} Parse result with value, errors and warnings
 */
export function parsePerformanceIssue(issueEvent) {
  if (!issueEvent?.issue) {
    return {
      ok: false,
      errors: ["Missing issue payload."],
      warnings: [],
      value: null,
      isPerformanceIssue: false,
      triggerType: null,
      mode: null,
      modeSource: null,
      requiresBrowserMeasurements: false,
      requiresAccessibility: false,
      requiresSitespeed: false
    };
  }

  const issue = issueEvent.issue;
  const issueTitle = text(issue.title);
  const body = String(issue.body ?? "");
  const titleMatch = issueTitle.match(/^\s*PERF\s*:\s*(.*)$/i);

  if (!titleMatch) {
    return {
      ok: false,
      errors: [`Not a PERF: issue. Open Scans performance requests must start with '${PERFORMANCE_TRIGGER}:'.`],
      warnings: [],
      value: null,
      isPerformanceIssue: false,
      triggerType: null,
      mode: null,
      modeSource: null,
      requiresBrowserMeasurements: false,
      requiresAccessibility: false,
      requiresSitespeed: false
    };
  }

  const errors = [];
  const warnings = [];
  const defaultedFields = [];
  const scanTitle = titleMatch[1].trim();
  if (!scanTitle) {
    errors.push("PERF: issues need a short description after the prefix, for example 'PERF: example.gov'.");
  }

  const issueNumber = issue.number;
  if (!Number.isInteger(issueNumber) || issueNumber < 1) {
    errors.push("issueNumber must be an integer >= 1.");
  }

  const domainSection = extractSection(body, "Domain") || extractSection(body, "Site");
  const domainResult = parseDomain(domainSection);
  errors.push(...domainResult.errors);
  warnings.push(...domainResult.warnings);

  const urlsText = extractSection(body, "URLs");
  const urlSeedText = [domainResult.extraUrl, urlsText].filter(Boolean).join("\n");
  const pageResult = parsePageUrlList(urlSeedText, domainResult.site, "URLs");
  errors.push(...pageResult.errors);
  warnings.push(...pageResult.warnings);

  let site = pageResult.site ?? domainResult.site;
  if (!site) {
    errors.push("A PERF: request needs a public Domain and/or at least one exact URL.");
    site = { origin: "", host: "", urls: [] };
  }
  site = { ...site, urls: pageResult.urls };

  const priorityResult = parsePageUrlList(
    extractSection(body, "Priority URLs") || extractNamedValue(body, "Priority URLs"),
    site,
    "Priority URLs"
  );
  errors.push(...priorityResult.errors);
  warnings.push(...priorityResult.warnings);

  const topTaskResult = parsePageUrlList(
    extractSection(body, "Top task URLs") || extractSection(body, "Top-task URLs") || extractNamedValue(body, "Top task URLs"),
    site,
    "Top task URLs"
  );
  errors.push(...topTaskResult.errors);
  warnings.push(...topTaskResult.warnings);

  const sourcesResult = parseEvidenceSources(
    extractSection(body, "Evidence sources") || extractSection(body, "Evidence source")
  );
  errors.push(...sourcesResult.errors);
  warnings.push(...sourcesResult.warnings);

  const rawMode = extractSection(body, "Performance mode")
    || extractSection(body, "Mode")
    || extractNamedValue(body, "Performance mode")
    || extractNamedValue(body, "Mode");
  let mode = rawMode ? normalizeMode(rawMode) : null;
  let modeSource = "body";
  if (!rawMode) {
    mode = sourcesResult.sources.length > 0 ? "reuse" : "light";
    modeSource = "default";
    defaultedFields.push("mode");
    warnings.push(
      mode === "reuse"
        ? "No performance mode was given; 'reuse' is the default when an evidence source is provided (no browser will be launched)."
        : "No performance mode was given; 'light' is the default when no evidence source is provided."
    );
  } else if (!mode) {
    errors.push(`Performance mode '${text(rawMode).slice(0, 40)}' is not supported. Use reuse, light, deep or combined.`);
  }

  const effectiveMode = mode ?? "light";
  if (effectiveMode === "reuse" && sourcesResult.sources.length === 0) {
    warnings.push(
      "Reuse mode has no explicit evidence source. The investigation must discover existing Open Scans reports for this site; "
      + "it must still not launch a browser."
    );
  }

  const limitsResult = parseLimits(body, effectiveMode);
  errors.push(...limitsResult.errors);
  warnings.push(...limitsResult.warnings);
  defaultedFields.push(...limitsResult.defaulted);

  const measurementResult = parseMeasurement(body);
  errors.push(...measurementResult.errors);
  warnings.push(...measurementResult.warnings);
  defaultedFields.push(...measurementResult.defaulted);

  const rawConsent = extractSection(body, "Consent state")
    || extractSection(body, "Consent")
    || extractNamedValue(body, "Consent state")
    || extractNamedValue(body, "Consent");
  let consentState = rawConsent ? normalizeConsentState(rawConsent) : null;
  if (rawConsent && !consentState) {
    errors.push("Consent state must be not-configured, not-needed, accepted or rejected.");
  }
  if (!consentState) {
    consentState = "not-configured";
    defaultedFields.push("consent");
  }

  const rawReuse = extractSection(body, "Reuse source reports") || extractNamedValue(body, "Reuse source reports");
  let reuseSourceReports = rawReuse ? parseBooleanValue(rawReuse) : null;
  if (rawReuse && reuseSourceReports === null) {
    errors.push("Reuse source reports must be yes or no.");
  }
  if (reuseSourceReports === null) {
    reuseSourceReports = true;
    defaultedFields.push("reuseSourceReports");
  }

  const rawAge = extractSection(body, "Max evidence age (days)")
    || extractSection(body, "Max evidence age")
    || extractNamedValue(body, "Max evidence age (days)")
    || extractNamedValue(body, "Max evidence age");
  let maxEvidenceAgeDays = null;
  if (rawAge !== null) {
    maxEvidenceAgeDays = parseIntegerValue(rawAge);
    if (maxEvidenceAgeDays === null) {
      errors.push("Max evidence age (days) must be a whole number between 1 and 3650.");
    }
  }
  if (maxEvidenceAgeDays === null) {
    maxEvidenceAgeDays = 30;
    defaultedFields.push("maxEvidenceAgeDays");
  }

  const enginesResult = parseAccessibilityEngines(body);
  errors.push(...enginesResult.errors);
  let accessibility = null;
  if (effectiveMode === "combined") {
    if (!enginesResult.engines) {
      errors.push(
        "Combined mode requires an explicit 'Accessibility engines' selection so it cannot silently run an accessibility scanner. "
        + "Use axe, alfa, accesslint, equalaccess or all."
      );
    } else {
      accessibility = { engines: enginesResult.engines };
    }
  } else if (enginesResult.engines) {
    errors.push(
      "Accessibility engines are only valid in combined mode. A performance request must not trigger an accessibility scanner; "
      + "use SCAN: for accessibility."
    );
  }

  const requestLabel = extractSection(body, "Request Label") || "performance-request";
  if (!extractSection(body, "Request Label")) defaultedFields.push("requestLabel");

  const submittedAt = issue.created_at || issue.updated_at || new Date().toISOString();
  if (!issue.created_at && !issue.updated_at) defaultedFields.push("submittedAt");

  const provenanceIds = buildProvenance({
    title: issueTitle,
    body,
    issueNumber
  });

  const request = {
    schemaVersion: PERFORMANCE_REQUEST_SCHEMA_VERSION,
    requestId: provenanceIds.requestId,
    issueNumber,
    issueUrl: issue.html_url ?? "",
    submittedBy: issue.user?.login ?? "unknown",
    submittedAt,
    issueTitle,
    requestLabel,
    mode: effectiveMode,
    site,
    evidenceSources: sourcesResult.sources,
    limits: limitsResult.limits,
    measurement: measurementResult.measurement,
    consent: { state: consentState },
    reuseSourceReports,
    maxEvidenceAgeDays,
    priorityUrls: priorityResult.urls,
    topTaskUrls: topTaskResult.urls,
    ...(accessibility ? { accessibility } : {}),
    provenance: {
      requestOrigin: "github-issue",
      parser: "scanner/parse-performance-issue.mjs",
      parserVersion: PARSER_VERSION,
      contractVersion: PERFORMANCE_REQUEST_SCHEMA_VERSION,
      inputDigest: provenanceIds.inputDigest,
      modeSource,
      defaultedFields: [...new Set(defaultedFields)].sort()
    }
  };

  const validation = validatePerformanceRequest(request);
  const allErrors = [...new Set([...errors, ...validation.errors])];

  return {
    ok: allErrors.length === 0,
    errors: allErrors,
    warnings: [...new Set(warnings)],
    value: allErrors.length === 0 ? request : null,
    isPerformanceIssue: true,
    triggerType: PERFORMANCE_TRIGGER,
    mode: effectiveMode,
    modeSource,
    scanTitle,
    requiresBrowserMeasurements: request.limits.maxLighthouseAudits > 0 || request.limits.maxSitespeedPages > 0,
    requiresAccessibility: effectiveMode === "combined",
    requiresSitespeed: request.limits.maxSitespeedPages > 0
  };
}

/**
 * Validate an already-built performance request object. Shared by the parser and
 * by consumers that load a request from an artifact.
 * @param {object} candidate
 * @returns {{ok: boolean, errors: string[]}}
 */
export function validatePerformanceRequest(candidate) {
  const errors = [];

  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
    return { ok: false, errors: ["Performance request must be an object."] };
  }

  for (const key of performanceRequestSchema.required) {
    if (candidate[key] === undefined || candidate[key] === null || candidate[key] === "") {
      errors.push(`Missing required field: ${key}`);
    }
  }

  const knownKeys = new Set(Object.keys(performanceRequestSchema.properties));
  for (const key of Object.keys(candidate)) {
    if (!knownKeys.has(key)) errors.push(`Unexpected field: ${key}`);
  }

  if (candidate.schemaVersion !== PERFORMANCE_REQUEST_SCHEMA_VERSION) {
    errors.push(`schemaVersion must be '${PERFORMANCE_REQUEST_SCHEMA_VERSION}'.`);
  }
  if (!REQUEST_ID_RE.test(String(candidate.requestId ?? ""))) {
    errors.push("requestId must match '<issueNumber>-perf-<12 hex characters>'.");
  }
  if (!Number.isInteger(candidate.issueNumber) || candidate.issueNumber < 1) {
    errors.push("issueNumber must be an integer >= 1.");
  }
  if (!validateUriLike(candidate.issueUrl)) {
    errors.push("issueUrl must be a valid http/https URL.");
  }
  if (!text(candidate.submittedBy) || text(candidate.submittedBy).length > 100) {
    errors.push("submittedBy must be 1-100 characters.");
  }
  if (!text(candidate.issueTitle) || text(candidate.issueTitle).length > 300) {
    errors.push("issueTitle must be 1-300 characters.");
  }
  if (!DATE_TIME_RE.test(String(candidate.submittedAt ?? "")) || Number.isNaN(new Date(candidate.submittedAt).getTime())) {
    errors.push("submittedAt must be an ISO 8601 date-time.");
  }
  if (!PERFORMANCE_MODES.includes(candidate.mode)) {
    errors.push(`mode must be one of: ${PERFORMANCE_MODES.join(", ")}.`);
  }
  if (!text(candidate.requestLabel) || text(candidate.requestLabel).length > 100) {
    errors.push("requestLabel must be 1-100 characters.");
  }

  const site = candidate.site;
  if (!site || typeof site !== "object" || Array.isArray(site)) {
    errors.push("site must be an object.");
  } else {
    checkKnownKeys(site, ["origin", "host", "urls"], "site", errors);
    const origin = String(site.origin ?? "");
    if (!validateUriLike(origin)) {
      errors.push("site.origin must be a valid http/https URL.");
    }
    let originHost = null;
    try {
      originHost = new URL(origin).hostname.toLowerCase();
    } catch {
      originHost = null;
    }
    if (!text(site.host) || text(site.host).length > 253) {
      errors.push("site.host must be 1-253 characters.");
    } else if (originHost && text(site.host).toLowerCase() !== originHost) {
      errors.push("site.host must match the hostname in site.origin.");
    }
    if (!Array.isArray(site.urls)) {
      errors.push("site.urls must be an array.");
    } else {
      if (site.urls.length > 500) errors.push("site.urls must contain at most 500 URLs.");
      for (const [index, url] of site.urls.entries()) {
        validateRequestPageUrl(url, `site.urls[${index}]`, site.host, errors);
      }
    }
  }

  if (!Array.isArray(candidate.evidenceSources)) {
    errors.push("evidenceSources must be an array.");
  } else {
    if (candidate.evidenceSources.length > 10) errors.push("evidenceSources must contain at most 10 sources.");
    const seenSources = new Set();
    for (const [index, source] of candidate.evidenceSources.entries()) {
      if (!source || typeof source !== "object" || Array.isArray(source)) {
        errors.push(`evidenceSources[${index}] must be an object.`);
        continue;
      }
      checkKnownKeys(source, ["type", "location", "locationKind"], `evidenceSources[${index}]`, errors);
      const normalized = normalizeEvidenceSource(source.type, source.location);
      errors.push(...normalized.errors.map((message) => `evidenceSources[${index}]: ${message}`));
      if (normalized.value) {
        if (normalized.value.locationKind !== source.locationKind) {
          errors.push(`evidenceSources[${index}].locationKind must be '${normalized.value.locationKind}'.`);
        }
        const key = `${normalized.value.type}\u0000${normalized.value.location}`;
        if (seenSources.has(key)) errors.push(`evidenceSources[${index}] duplicates an earlier source.`);
        seenSources.add(key);
      }
    }
  }

  const limits = candidate.limits;
  if (!limits || typeof limits !== "object" || Array.isArray(limits)) {
    errors.push("limits must be an object.");
  } else {
    checkKnownKeys(limits, ["maxPagesToInspect", "maxLighthouseAudits", "maxSitespeedPages"], "limits", errors);
    for (const [key, max] of [["maxPagesToInspect", 500], ["maxLighthouseAudits", 50], ["maxSitespeedPages", 10]]) {
      if (!Number.isInteger(limits[key]) || limits[key] < 0 || limits[key] > max) {
        errors.push(`limits.${key} must be an integer between 0 and ${max}.`);
      }
    }
    if (Number.isInteger(limits.maxPagesToInspect) && limits.maxPagesToInspect < 1) {
      errors.push("limits.maxPagesToInspect must be at least 1.");
    }
    if (Number.isInteger(limits.maxLighthouseAudits) && Number.isInteger(limits.maxPagesToInspect)
      && limits.maxLighthouseAudits > limits.maxPagesToInspect) {
      errors.push("limits.maxLighthouseAudits must not exceed limits.maxPagesToInspect.");
    }
    if (Number.isInteger(limits.maxSitespeedPages) && Number.isInteger(limits.maxPagesToInspect)
      && limits.maxSitespeedPages > limits.maxPagesToInspect) {
      errors.push("limits.maxSitespeedPages must not exceed limits.maxPagesToInspect.");
    }

    if (candidate.mode === "reuse") {
      if (limits.maxLighthouseAudits !== 0) errors.push("reuse mode cannot request Lighthouse audits; no browser may be launched.");
      if (limits.maxSitespeedPages !== 0) errors.push("reuse mode cannot request Sitespeed pages; no browser may be launched.");
      if (candidate.reuseSourceReports !== true) errors.push("reuse mode requires reuseSourceReports to be true.");
    }
    if (candidate.mode === "light" && limits.maxSitespeedPages !== 0) {
      errors.push("light mode cannot request Sitespeed pages; use deep mode for Sitespeed.");
    }
    if (["deep", "combined"].includes(candidate.mode) && Number.isInteger(limits.maxSitespeedPages) && limits.maxSitespeedPages < 1) {
      errors.push(`${candidate.mode} mode requires at least one Sitespeed page; use light mode for a Lighthouse-only run.`);
    }
    if (candidate.mode === "combined" && Number.isInteger(limits.maxLighthouseAudits) && Number.isInteger(limits.maxSitespeedPages)
      && limits.maxLighthouseAudits === 0 && limits.maxSitespeedPages === 0) {
      errors.push("combined mode must include at least one performance measurement; use SCAN: for an accessibility-only scan.");
    }
  }

  const measurement = candidate.measurement;
  if (!measurement || typeof measurement !== "object" || Array.isArray(measurement)) {
    errors.push("measurement must be an object.");
  } else {
    checkKnownKeys(measurement, ["browser", "profile", "viewport", "viewportPreset"], "measurement", errors);
    checkKnownKeys(measurement.viewport, ["width", "height"], "measurement.viewport", errors);
    if (!["chromium", "firefox"].includes(measurement.browser)) {
      errors.push("measurement.browser must be chromium or firefox.");
    }
    if (!["mobile", "desktop"].includes(measurement.profile)) {
      errors.push("measurement.profile must be mobile or desktop.");
    }
    const width = measurement.viewport?.width;
    const height = measurement.viewport?.height;
    if (!Number.isInteger(width) || width < 200 || width > 10000 || !Number.isInteger(height) || height < 200 || height > 10000) {
      errors.push("measurement.viewport must have integer width and height between 200 and 10000.");
    }
    if (!text(measurement.viewportPreset) || text(measurement.viewportPreset).length > 40) {
      errors.push("measurement.viewportPreset must be 1-40 characters.");
    }
    if (measurement.browser === "firefox" && Number.isInteger(limits?.maxLighthouseAudits) && limits.maxLighthouseAudits > 0) {
      errors.push("Lighthouse is Chromium-only under this contract; set Max Lighthouse audits to 0 or choose chromium.");
    }
  }

  if (!candidate.consent || !CONSENT_STATES.includes(candidate.consent.state)) {
    errors.push(`consent.state must be one of: ${CONSENT_STATES.join(", ")}.`);
  } else {
    checkKnownKeys(candidate.consent, ["state"], "consent", errors);
  }
  if (typeof candidate.reuseSourceReports !== "boolean") {
    errors.push("reuseSourceReports must be a boolean.");
  }
  if (!Number.isInteger(candidate.maxEvidenceAgeDays) || candidate.maxEvidenceAgeDays < 1 || candidate.maxEvidenceAgeDays > 3650) {
    errors.push("maxEvidenceAgeDays must be an integer between 1 and 3650.");
  }

  for (const key of ["priorityUrls", "topTaskUrls"]) {
    const list = candidate[key];
    if (!Array.isArray(list)) {
      errors.push(`${key} must be an array.`);
      continue;
    }
    if (list.length > 50) errors.push(`${key} must contain at most 50 URLs.`);
    for (const [index, url] of list.entries()) {
      validateRequestPageUrl(url, `${key}[${index}]`, site?.host, errors);
    }
  }

  if (candidate.accessibility !== undefined) {
    if (candidate.mode !== "combined") {
      errors.push("accessibility is only valid in combined mode.");
    } else if (!Array.isArray(candidate.accessibility?.engines) || candidate.accessibility.engines.length < 1) {
      errors.push("accessibility.engines must be a non-empty array in combined mode.");
    } else {
      checkKnownKeys(candidate.accessibility, ["engines"], "accessibility", errors);
      if (candidate.accessibility.engines.length > 5) {
        errors.push("accessibility.engines must contain at most 5 engines.");
      }
      const seen = new Set();
      for (const engine of candidate.accessibility.engines) {
        if (!ACCESSIBILITY_ENGINES.includes(engine)) {
          errors.push(`accessibility.engines contains unsupported engine '${engine}'.`);
        }
        if (seen.has(engine)) errors.push(`accessibility.engines contains duplicate engine '${engine}'.`);
        seen.add(engine);
      }
    }
  }
  if (candidate.mode === "combined" && candidate.accessibility === undefined) {
    errors.push("combined mode requires an explicit accessibility.engines selection.");
  }

  const provenance = candidate.provenance;
  if (!provenance || typeof provenance !== "object" || Array.isArray(provenance)) {
    errors.push("provenance must be an object.");
  } else {
    checkKnownKeys(
      provenance,
      ["requestOrigin", "parser", "parserVersion", "contractVersion", "inputDigest", "modeSource", "defaultedFields"],
      "provenance",
      errors
    );
    if (provenance.requestOrigin !== "github-issue") errors.push("provenance.requestOrigin must be 'github-issue'.");
    if (provenance.parser !== "scanner/parse-performance-issue.mjs") errors.push("provenance.parser must be 'scanner/parse-performance-issue.mjs'.");
    if (!text(provenance.parserVersion)) errors.push("provenance.parserVersion is required.");
    if (provenance.contractVersion !== PERFORMANCE_REQUEST_SCHEMA_VERSION) {
      errors.push(`provenance.contractVersion must be '${PERFORMANCE_REQUEST_SCHEMA_VERSION}'.`);
    }
    if (!DIGEST_RE.test(String(provenance.inputDigest ?? ""))) errors.push("provenance.inputDigest must be a sha256 digest.");
    if (!["body", "default"].includes(provenance.modeSource)) errors.push("provenance.modeSource must be body or default.");
    if (!Array.isArray(provenance.defaultedFields)) {
      errors.push("provenance.defaultedFields must be an array.");
    } else {
      const allowedDefaultedFields = new Set(
        performanceRequestSchema.properties.provenance.properties.defaultedFields.items.enum
      );
      for (const field of provenance.defaultedFields) {
        if (!allowedDefaultedFields.has(field)) errors.push(`provenance.defaultedFields contains unknown field '${field}'.`);
      }
      if (new Set(provenance.defaultedFields).size !== provenance.defaultedFields.length) {
        errors.push("provenance.defaultedFields must not contain duplicates.");
      }
    }
  }

  return { ok: errors.length === 0, errors };
}

function validateRequestPageUrl(url, label, siteHost, errors) {
  if (String(url ?? "").length > MAX_URL_LENGTH) {
    errors.push(`${label} is longer than ${MAX_URL_LENGTH} characters.`);
    return;
  }
  const result = validateTarget(url);
  if (!result.accepted) {
    errors.push(`${label} was rejected: ${translateTargetReason(result.reason, "page")}.`);
    return;
  }
  let parsed;
  try {
    parsed = new URL(result.normalizedUrl);
  } catch {
    errors.push(`${label} is not a valid http/https URL.`);
    return;
  }
  if (parsed.username || parsed.password) {
    errors.push(`${label} must not contain a username or password.`);
    return;
  }
  if (siteHost && !isSameSiteHost(parsed.hostname, siteHost)) {
    errors.push(`${label} is outside the requested site '${siteHost}'.`);
  }
  const sensitiveKey = hasSensitiveQuery(parsed);
  if (sensitiveKey) {
    errors.push(`${label} contains a credential-like query parameter '${sensitiveKey}'.`);
  }
}

function checkKnownKeys(value, allowed, label, errors) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return;
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) errors.push(`${label} has unexpected field: ${key}.`);
  }
}

function markdownCode(value) {
  return `\`${String(value ?? "").replace(/`/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;")}\``;
}

/**
 * Render a step-summary-friendly Markdown report of a parse result.
 * @param {object} result - Return value of parsePerformanceIssue
 * @returns {string}
 */
export function formatPerformanceParseSummary(result) {
  const lines = ["## Performance request validation", ""];
  if (!result?.ok) {
    lines.push("**Status:** rejected. No scan was started and no browser was launched.", "");
    lines.push("### Errors", "");
    for (const error of result?.errors ?? ["Unknown parse error."]) lines.push(`- ${error}`);
    if (result?.warnings?.length) {
      lines.push("", "### Warnings", "");
      for (const warning of result.warnings) lines.push(`- ${warning}`);
    }
    return `${lines.join("\n")}\n`;
  }

  const request = result.value;
  lines.push("**Status:** validated. This workflow performs no measurement.", "");
  lines.push(`- **Mode:** ${markdownCode(request.mode)} (${request.provenance.modeSource})`);
  lines.push(`- **Site:** ${markdownCode(request.site.origin)}`);
  lines.push(`- **Exact URLs:** ${request.site.urls.length}`);
  lines.push(`- **Priority URLs:** ${request.priorityUrls.length}`);
  lines.push(`- **Top-task URLs:** ${request.topTaskUrls.length}`);
  lines.push(`- **Evidence sources:** ${request.evidenceSources.length || "none supplied"}`);
  for (const source of request.evidenceSources) {
    lines.push(`  - ${markdownCode(source.type)}: ${markdownCode(source.location)}`);
  }
  lines.push(
    `- **Limits:** ${request.limits.maxPagesToInspect} pages, `
    + `${request.limits.maxLighthouseAudits} Lighthouse audits, `
    + `${request.limits.maxSitespeedPages} Sitespeed pages`
  );
  lines.push(
    `- **Measurement:** ${markdownCode(request.measurement.browser)}, `
    + `${markdownCode(request.measurement.profile)}, `
    + `${markdownCode(`${request.measurement.viewport.width}x${request.measurement.viewport.height}`)}`
  );
  lines.push(`- **Accessibility engines:** ${request.accessibility ? request.accessibility.engines.join(", ") : "none (performance only)"}`);
  lines.push(`- **Max evidence age:** ${request.maxEvidenceAgeDays} days`);
  lines.push("");
  lines.push("**New browser measurements required:** " + (result.requiresBrowserMeasurements ? "yes, within the limits above" : "no"));
  if (result.warnings.length) {
    lines.push("", "### Warnings", "");
    for (const warning of result.warnings) lines.push(`- ${warning}`);
  }
  return `${lines.join("\n")}\n`;
}

function parseArgs(argv) {
  const args = [...argv];
  const valueOf = (flag) => {
    const index = args.indexOf(flag);
    if (index === -1) return null;
    const value = args[index + 1];
    if (!value || value.startsWith("--")) return null;
    return value;
  };
  const positional = args.filter((arg, index) => {
    if (arg.startsWith("--")) return false;
    const previous = args[index - 1];
    return !["--out", "--summary"].includes(previous);
  });
  return {
    inputPath: positional[0] ?? null,
    outPath: valueOf("--out"),
    summaryPath: valueOf("--summary"),
    allowInvalid: args.includes("--allow-invalid")
  };
}

function main() {
  const { inputPath, outPath, summaryPath, allowInvalid } = parseArgs(process.argv.slice(2));
  if (!inputPath) {
    console.error("Usage: node scanner/parse-performance-issue.mjs <issue-event-json-file> [--out <file>] [--summary <file>] [--allow-invalid]");
    process.exitCode = 2;
    return;
  }

  let payload;
  try {
    payload = JSON.parse(readFileSync(inputPath, "utf8"));
  } catch (error) {
    console.error(`Could not read issue event JSON: ${error.message}`);
    process.exitCode = 2;
    return;
  }

  const result = parsePerformanceIssue(payload);
  const json = JSON.stringify(result, null, 2);
  if (outPath) {
    writeFileSync(outPath, `${json}\n`, "utf8");
  } else {
    process.stdout.write(`${json}\n`);
  }
  if (summaryPath) {
    writeFileSync(summaryPath, formatPerformanceParseSummary(result), "utf8");
  }
  if (!result.ok && !allowInvalid) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
