import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { promisify } from "node:util";
import { chromium } from "playwright";
import {
  createMetric,
  createSourceRef,
  normalizeUrl,
  stableId
} from "./performance-evidence.mjs";

const execFileAsync = promisify(execFile);

export const LIGHTHOUSE_ADAPTER_VERSION = "1.0.0";
export const LIGHTHOUSE_PROVIDER_VERSION = "1.0.0";
const LIGHTHOUSE_CLI = fileURLToPath(new URL("../node_modules/lighthouse/cli/index.js", import.meta.url));
const LIGHTHOUSE_TIMEOUT_MS = 180_000;
const MAX_LIGHTHOUSE_BYTES = 25 * 1024 * 1024;

// These patterns reduce accidental private-network subresource requests, but
// they are not a network sandbox. The preflight check and the documented
// browser-scan boundary remain required.
const PRIVATE_URL_PATTERNS = Object.freeze([
  "http://localhost/*",
  "https://localhost/*",
  "http://127.0.0.1/*",
  "https://127.0.0.1/*",
  "http://10.*",
  "https://10.*",
  "http://192.168.*",
  "https://192.168.*",
  "http://169.254.*",
  "https://169.254.*",
  "http://172.16.*",
  "https://172.16.*",
  "http://172.17.*",
  "https://172.17.*",
  "http://172.18.*",
  "https://172.18.*",
  "http://172.19.*",
  "https://172.19.*",
  "http://172.2?.*",
  "https://172.2?.*",
  "http://172.30.*",
  "https://172.30.*",
  "http://172.31.*",
  "https://172.31.*"
]);

export class LighthouseRunError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "LighthouseRunError";
    this.details = details;
  }
}

/**
 * Resolve a Chromium binary for Lighthouse. CHROME_PATH wins, then common
 * system locations, then the Playwright-managed Chromium.
 * @param {NodeJS.ProcessEnv} env
 * @returns {string|null}
 */
export function resolveChromePath(env = process.env) {
  const candidates = [
    env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/local/bin/google-chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser"
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  try {
    const playwrightPath = chromium.executablePath();
    if (playwrightPath && existsSync(playwrightPath)) return playwrightPath;
  } catch {
    // Playwright may not have a browser installed.
  }
  return null;
}

function lighthouseArgs({ url, request, outputPath }) {
  const mobile = request.measurement.profile === "mobile";
  const args = [
    url,
    "--output=json",
    `--output-path=${outputPath}`,
    "--only-categories=performance",
    "--throttling-method=simulate",
    `--form-factor=${mobile ? "mobile" : "desktop"}`,
    `--screenEmulation.mobile=${mobile}`,
    `--screenEmulation.width=${request.measurement.viewport.width}`,
    `--screenEmulation.height=${request.measurement.viewport.height}`,
    "--screenEmulation.deviceScaleFactor=1",
    "--screenEmulation.disabled=false",
    "--max-wait-for-load=60000",
    "--disable-full-page-screenshot",
    "--no-enable-error-reporting",
    "--quiet",
    "--chrome-flags=--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage"
  ];
  if (!mobile) args.push("--preset=desktop");
  for (const pattern of PRIVATE_URL_PATTERNS) {
    args.push(`--blocked-url-patterns=${pattern}`);
  }
  return args;
}

/**
 * Run one Lighthouse performance audit and keep its machine-readable JSON in
 * the bounded artifacts directory.
 * @param {object} input
 * @param {string} input.url
 * @param {object} input.request
 * @param {string} input.artifactsDir
 * @param {string} [input.chromePath]
 * @param {string} [input.runId]
 * @returns {Promise<{data: object, rawPath: string, relativePath: string, digest: string, durationMs: number}>}
 */
export async function runLighthouse({
  url,
  request,
  artifactsDir,
  chromePath = resolveChromePath(),
  runId
}) {
  if (!chromePath) {
    throw new LighthouseRunError(
      "No Chromium binary was found for Lighthouse. Set CHROME_PATH or install Playwright Chromium.",
      { code: "missing-chrome" }
    );
  }
  if (!existsSync(LIGHTHOUSE_CLI)) {
    throw new LighthouseRunError(
      "Lighthouse CLI is not installed. Run `npm ci` after adding the pinned lighthouse dependency.",
      { code: "missing-lighthouse" }
    );
  }
  mkdirSync(artifactsDir, { recursive: true });
  const pageHash = stableId("lh", normalizeUrl(url), 12);
  const file = `${pageHash}-${runId ?? Date.now()}.json`;
  const rawPath = resolve(artifactsDir, file);
  const args = lighthouseArgs({ url, request, outputPath: rawPath });
  const startedAt = Date.now();

  try {
    await execFileAsync(process.execPath, [LIGHTHOUSE_CLI, ...args], {
      cwd: process.cwd(),
      env: { ...process.env, CHROME_PATH: chromePath },
      timeout: LIGHTHOUSE_TIMEOUT_MS,
      maxBuffer: 10 * 1024 * 1024
    });
  } catch (error) {
    const stderr = String(error.stderr ?? "").slice(-4000);
    throw new LighthouseRunError(
      `Lighthouse failed for ${url}: ${error.killed ? "timed out" : error.message}`
      + (stderr ? `\n${stderr}` : ""),
      { code: error.killed ? "timeout" : "run-failed", url, rawPath }
    );
  }

  if (!existsSync(rawPath)) {
    throw new LighthouseRunError("Lighthouse exited without writing its JSON result.", { code: "missing-output", url });
  }
  const size = statSync(rawPath).size;
  if (size > MAX_LIGHTHOUSE_BYTES) {
    throw new LighthouseRunError(`Lighthouse result is ${size} bytes, above the ${MAX_LIGHTHOUSE_BYTES} limit.`, {
      code: "too-large",
      url
    });
  }

  let data;
  try {
    data = JSON.parse(readFileSync(rawPath, "utf8"));
  } catch (error) {
    throw new LighthouseRunError(`Lighthouse result is not valid JSON: ${error.message}`, { code: "invalid-json", url });
  }
  if (data.runtimeError) {
    throw new LighthouseRunError(
      `Lighthouse reported a runtime error: ${data.runtimeError.code ?? "unknown"} ${data.runtimeError.message ?? ""}`.trim(),
      { code: "runtime-error", url, rawPath }
    );
  }

  const digest = `sha256:${createHash("sha256").update(readFileSync(rawPath)).digest("hex")}`;
  return {
    data,
    rawPath,
    relativePath: file,
    digest,
    durationMs: Date.now() - startedAt
  };
}

function auditNumeric(data, id) {
  const audit = data.audits?.[id];
  return typeof audit?.numericValue === "number" ? audit.numericValue : null;
}

function numericUnitToUnit(unit) {
  return {
    millisecond: "ms",
    byte: "bytes",
    bytes: "bytes",
    unitless: "score",
    element: "count",
    count: "count"
  }[unit] ?? null;
}

function throttlingLabel(data) {
  const settings = data.configSettings ?? {};
  if (settings.throttlingMethod === "provided") return "Chromium lab, no throttling (provided)";
  if (settings.throttlingMethod === "devtools") return "Chromium lab, DevTools throttling";
  return "Chromium lab, simulated throttling";
}

function methodLabel(data) {
  const settings = data.configSettings ?? {};
  return `Lighthouse ${data.lighthouseVersion ?? "version unknown"} ${settings.formFactor ?? "unknown form factor"}, ${settings.throttlingMethod ?? "unknown"} throttling`;
}

function networkResources(data, pageId, source, rawPath, siteHost) {
  const items = data.audits?.["network-requests"]?.details?.items;
  if (!Array.isArray(items)) return [];
  const resources = [];
  for (const [index, item] of items.slice(0, 200).entries()) {
    if (!item?.url || !/^https?:\/\//i.test(item.url)) continue;
    // The main document is the page itself, not a component/subresource.
    if (/document/i.test(String(item.resourceType ?? ""))) continue;
    let normalized;
    try {
      normalized = normalizeUrl(item.url);
    } catch {
      continue;
    }
    const transfer = typeof item.transferSize === "number" ? item.transferSize : null;
    const timing = typeof item.networkEndTime === "number" && typeof item.networkRequestTime === "number"
      ? item.networkEndTime - item.networkRequestTime
      : null;
    resources.push({
      id: stableId("lh-rs", `${pageId}:${normalized}:${index}`, 12),
      sourceId: source.id,
      url: item.url,
      normalizedUrl: normalized,
      kind: String(item.resourceType ?? "").toLowerCase().includes("script")
        ? "script"
        : String(item.resourceType ?? "").toLowerCase().includes("stylesheet")
          ? "stylesheet"
          : String(item.resourceType ?? "").toLowerCase().includes("font")
            ? "font"
            : String(item.resourceType ?? "").toLowerCase().includes("image")
              ? "image"
              : String(item.resourceType ?? "").toLowerCase().includes("document")
                ? "iframe"
                : String(item.resourceType ?? "").toLowerCase().includes("media")
                  ? "media"
                  : "other",
      thirdParty: item.url.includes("//") && !item.url.includes(`//${siteHost}/`),
      sizeBytes: transfer,
      sizeStatistic: transfer === null ? null : "single",
      timingMs: timing,
      pageIds: [pageId],
      instanceIds: [],
      attribution: "page-level",
      sourceRefs: [createSourceRef(source.id, `${rawPath}#audits.network-requests.details.items[${index}]`)],
      limitations: [
        "Lighthouse network request; it does not establish component ownership.",
        "Transfer size is a Lighthouse lab observation under the recorded throttling configuration."
      ]
    });
  }
  return resources;
}

function auditFindings(data, { pageId, source, rawPath, boundary }) {
  const findings = [];
  const audits = data.audits ?? {};
  const entries = Object.entries(audits);
  for (const [id, audit] of entries) {
    if (findings.length >= 40) break;
    if (!audit || typeof audit !== "object") continue;
    if (["notApplicable", "informative", "manual", "error"].includes(audit.scoreDisplayMode)) continue;
    if (typeof audit.score !== "number" || audit.score >= 1) continue;
    const unit = numericUnitToUnit(audit.numericUnit);
    const metric = typeof audit.numericValue === "number" && unit
      ? createMetric({
        name: `lighthouse:${id}`,
        value: audit.numericValue,
        unit,
        scope: "page",
        sourceId: source.id,
        measurementSourceId: "lighthouse",
        tool: "lighthouse",
        toolVersion: data.lighthouseVersion ?? null,
        browser: data.userAgent ?? data.environment?.hostUserAgent ?? null,
        method: methodLabel(data),
        boundary,
        evidenceRef: `${rawPath}#audits.${id}`,
        confidence: "medium",
        limitations: [
          "Lighthouse lab audit; not field data, not a component measurement and not Firefox energy."
        ]
      })
      : null;
    findings.push({
      id: stableId("lh-fnd", `${pageId}:${id}`),
      sourceId: source.id,
      sourceFindingId: id,
      kind: "lighthouse-audit",
      title: audit.title ?? id,
      target: { type: "page", id: pageId },
      metric,
      evidenceClass: "observed",
      confidence: "medium",
      evidenceRef: `${rawPath}#audits.${id}`,
      limitations: [
        audit.description ?? "Lighthouse performance audit.",
        "Lighthouse identifies work in Chromium under its recorded lab configuration; it does not establish component ownership."
      ]
    });
  }
  return findings;
}

function opportunityFindings(data, { pageId, source, rawPath, boundary }) {
  const findings = [];
  for (const [id, audit] of Object.entries(data.audits ?? {})) {
    if (findings.length >= 25) break;
    if (!audit?.details || audit.details.type !== "opportunity") continue;
    if (typeof audit.numericValue !== "number") continue;
    const unit = numericUnitToUnit(audit.numericUnit) ?? "ms";
    findings.push({
      id: stableId("lh-opp", `${pageId}:${id}`),
      sourceId: source.id,
      sourceFindingId: id,
      kind: "lighthouse-opportunity",
      title: audit.title ?? id,
      target: { type: "page", id: pageId },
      metric: createMetric({
        name: `lighthouse-opportunity:${id}`,
        value: audit.numericValue,
        unit,
        scope: "page",
        sourceId: source.id,
        measurementSourceId: "lighthouse",
        tool: "lighthouse",
        toolVersion: data.lighthouseVersion ?? null,
        browser: data.userAgent ?? null,
        method: methodLabel(data),
        boundary,
        evidenceRef: `${rawPath}#audits.${id}`,
        confidence: "medium",
        limitations: ["A modelled opportunity, not a measured saving."]
      }),
      evidenceClass: "associated",
      confidence: "medium",
      evidenceRef: `${rawPath}#audits.${id}`,
      limitations: [
        audit.description ?? "Lighthouse opportunity.",
        "Estimated opportunity under the recorded lab configuration; not a guaranteed improvement."
      ]
    });
  }
  return findings;
}

function elementFindings(data, { pageId, source, rawPath, boundary }) {
  const findings = [];
  for (const [auditId, audit] of Object.entries(data.audits ?? {})) {
    if (findings.length >= 25) break;
    const items = audit?.details?.items;
    if (!Array.isArray(items)) continue;
    for (const [index, item] of items.entries()) {
      const node = item?.node;
      const selector = node?.selector ?? item?.selector ?? null;
      if (!selector) continue;
      findings.push({
        id: stableId("lh-node", `${pageId}:${auditId}:${index}`),
        sourceId: source.id,
        sourceFindingId: null,
        kind: "lighthouse-node",
        title: node?.nodeLabel ?? audit.title ?? "Lighthouse element evidence",
        target: { type: "page", id: pageId },
        metric: null,
        evidenceClass: "associated",
        confidence: "low",
        evidenceRef: `${rawPath}#audits.${auditId}.details.items[${index}]`,
        limitations: [
          "Lighthouse node locator; this does not establish component ownership.",
          `Scope: ${boundary}.`
        ]
      });
      if (findings.length >= 25) break;
    }
  }
  return findings;
}

/**
 * Normalize one raw Lighthouse result into a performance-evidence fragment.
 * @param {object} input
 * @returns {object}
 */
export function normalizeLighthouseResult({ data, source, request, pageId, rawPath }) {
  if (!data || typeof data !== "object" || !data.audits) {
    throw new LighthouseRunError("Lighthouse result has no audits object.", { code: "invalid-result" });
  }
  const url = data.finalDisplayedUrl ?? data.finalUrl ?? data.requestedUrl;
  if (!url) throw new LighthouseRunError("Lighthouse result has no final URL.", { code: "missing-url" });
  const normalizedUrl = normalizeUrl(url);
  const id = pageId ?? stableId("lh-pg", normalizedUrl);
  const boundary = throttlingLabel(data);
  const method = methodLabel(data);
  const browser = data.userAgent ?? data.environment?.hostUserAgent ?? null;
  const profile = data.configSettings?.formFactor === "mobile"
    ? "mobile"
    : data.configSettings?.formFactor === "desktop" ? "desktop" : null;
  const viewport = data.configSettings?.screenEmulation?.width && data.configSettings?.screenEmulation?.height
    ? { width: data.configSettings.screenEmulation.width, height: data.configSettings.screenEmulation.height }
    : null;
  const sourceRef = (fragment) => createSourceRef(source.id, `${rawPath}#${fragment}`);

  const metrics = [];
  const addMetric = (name, auditId, unit = "ms", scope = "page") => {
    const value = auditNumeric(data, auditId);
    if (value === null) return;
    metrics.push(createMetric({
      name,
      value,
      unit,
      scope,
      sourceId: source.id,
      measurementSourceId: "lighthouse",
      tool: "lighthouse",
      toolVersion: data.lighthouseVersion ?? null,
      browser,
      method,
      boundary,
      evidenceRef: `${rawPath}#audits.${auditId}`,
      confidence: "high",
      limitations: [
        "Lighthouse lab measurement under the recorded configuration; not field data and not Firefox energy."
      ]
    }));
  };
  addMetric("lcp", "largest-contentful-paint");
  addMetric("fcp", "first-contentful-paint");
  addMetric("tbt", "total-blocking-time");
  addMetric("cls", "cumulative-layout-shift", "score");
  addMetric("speed-index", "speed-index");
  addMetric("main-thread-work", "mainthread-work-breakdown");
  addMetric("js-execution", "bootup-time");
  addMetric("total-bytes", "total-byte-weight", "bytes");
  addMetric("dom-elements", "dom-size", "count");
  const score = data.categories?.performance?.score;
  if (typeof score === "number") {
    metrics.push(createMetric({
      name: "performance-score",
      value: score,
      unit: "score",
      scope: "page",
      sourceId: source.id,
      measurementSourceId: "lighthouse",
      tool: "lighthouse",
      toolVersion: data.lighthouseVersion ?? null,
      browser,
      method,
      boundary,
      evidenceRef: `${rawPath}#categories.performance.score`,
      confidence: "high",
      limitations: ["A Lighthouse category score, not a site-wide score."]
    }));
  }

  const findings = [
    ...auditFindings(data, { pageId: id, source, rawPath, boundary }),
    ...opportunityFindings(data, { pageId: id, source, rawPath, boundary }),
    ...elementFindings(data, { pageId: id, source, rawPath, boundary })
  ];
  const resources = networkResources(data, id, source, rawPath, request.site.host);
  const limitations = [
    "Lighthouse is Chromium-only lab evidence; it is not a Firefox energy or real-user measurement.",
    `Throttling: ${boundary}.`,
    "Element/node evidence does not establish component ownership.",
    ...(Array.isArray(data.runWarnings) ? data.runWarnings.map((warning) => `Lighthouse warning: ${warning}`) : [])
  ];
  if (viewport && (viewport.width !== request.measurement.viewport.width || viewport.height !== request.measurement.viewport.height)) {
    limitations.push(
      `Lighthouse emulated ${viewport.width}x${viewport.height}; the request asked for `
      + `${request.measurement.viewport.width}x${request.measurement.viewport.height}.`
    );
  }
  if (data.requestedUrl && data.finalUrl && normalizeUrl(data.requestedUrl) !== normalizeUrl(data.finalUrl)) {
    limitations.push(`The requested URL redirected to '${data.finalUrl}'; the page is recorded under its final URL.`);
  }

  return {
    sourceMeta: {
      tool: "lighthouse",
      toolVersion: data.lighthouseVersion ?? null,
      collectedAt: data.fetchTime ?? null,
      schemaVersion: "lighthouse-json",
      limitations
    },
    pages: [{
      id,
      url,
      normalizedUrl,
      familyId: null,
      sourceIds: [source.id],
      contexts: [{
        browser,
        viewport,
        profile,
        method,
        sourceId: source.id
      }],
      metrics,
      sourceRefs: [sourceRef("")],
      limitations
    }],
    pageFamilies: [],
    componentTypes: [],
    componentInstances: [],
    resources,
    findings,
    experiments: [],
    investigation: [],
    measurementSources: [{
      id: "lighthouse",
      sourceId: source.id,
      browser,
      tool: "lighthouse",
      toolVersion: data.lighthouseVersion ?? null,
      timestamp: data.fetchTime ?? null,
      method,
      boundary
    }],
    coverage: {
      discoveredPages: null,
      inspectedPages: 1,
      basis: "One bounded Lighthouse lab run",
      limitations: ["A Lighthouse run measures one page in Chromium, not the site or a user population."]
    },
    limitations
  };
}

export function summarizeLighthouseResult(data) {
  const metrics = data?.audits ?? {};
  return {
    url: data?.finalDisplayedUrl ?? data?.finalUrl ?? data?.requestedUrl ?? null,
    lighthouseVersion: data?.lighthouseVersion ?? null,
    fetchTime: data?.fetchTime ?? null,
    formFactor: data?.configSettings?.formFactor ?? null,
    throttlingMethod: data?.configSettings?.throttlingMethod ?? null,
    performanceScore: data?.categories?.performance?.score ?? null,
    lcp: metrics["largest-contentful-paint"]?.numericValue ?? null,
    tbt: metrics["total-blocking-time"]?.numericValue ?? null,
    cls: metrics["cumulative-layout-shift"]?.numericValue ?? null,
    auditCount: Object.keys(metrics).length
  };
}
