import { createHash } from "node:crypto";
import { promises as dns } from "node:dns";
import { readFile, realpath as realpathFs, stat } from "node:fs/promises";
import { isIP } from "node:net";
import { resolve, sep } from "node:path";
import { reasonForBlockedHost } from "./validate-targets.mjs";
import { createSourceRecord } from "./performance-evidence.mjs";

const MAX_BYTES = 20 * 1024 * 1024;
const MAX_REPO_BYTES = 50 * 1024 * 1024;
const DEFAULT_TIMEOUT_MS = 20_000;
const MAX_REDIRECTS = 3;

const TOOL_FOR_TYPE = Object.freeze({
  "open-scans-report": "open-scans",
  "firefox-energy-scanner": "firefox-energy-scanner",
  "vital-core": "vital-core",
  "open-site-review": "open-site-review"
});

/** A source read failed in a way the user can act on. */
export class EvidenceSourceError extends Error {
  constructor(message, code = "source-error", details = {}) {
    super(message);
    this.name = "EvidenceSourceError";
    this.code = code;
    this.details = details;
  }
}

function stripBrackets(hostname) {
  return String(hostname).replace(/^\[|\]$/g, "");
}

function isPrivateIPv4(address) {
  const parts = address.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return true;
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a >= 224) return true;
  return false;
}

function isPrivateIPv6(address) {
  const value = stripBrackets(address).toLowerCase();
  if (value === "::1" || value === "::") return true;
  if (value.startsWith("fc") || value.startsWith("fd")) return true;
  if (/^fe[89ab]/.test(value)) return true;
  if (value.startsWith("2001:db8:")) return true;
  const mapped = value.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) return isPrivateIPv4(mapped[1]);
  return false;
}

/**
 * Resolve a hostname and refuse it when any returned address is private,
 * loopback, link-local, multicast or a documentation/benchmark range.
 * @param {string} hostname
 * @param {number} timeoutMs
 * @returns {Promise<string[]>}
 */
export async function assertPublicHostname(hostname, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const bare = stripBrackets(hostname).toLowerCase();
  const blockedReason = reasonForBlockedHost(hostname);
  if (blockedReason) {
    throw new EvidenceSourceError(`Host '${hostname}' is blocked: ${blockedReason}.`, "blocked-host");
  }

  const literal = isIP(bare);
  if (literal) {
    const isPrivate = literal === 4 ? isPrivateIPv4(bare) : isPrivateIPv6(bare);
    if (isPrivate) {
      throw new EvidenceSourceError(`Address '${hostname}' is private, loopback or non-public.`, "blocked-address");
    }
    return [bare];
  }

  let records;
  try {
    records = await Promise.race([
      dns.lookup(bare, { all: true, verbatim: true }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("DNS lookup timed out")), timeoutMs))
    ]);
  } catch (error) {
    throw new EvidenceSourceError(`Could not resolve '${hostname}': ${error.message}.`, "dns-error");
  }

  if (!Array.isArray(records) || records.length === 0) {
    throw new EvidenceSourceError(`Could not resolve '${hostname}' to a public address.`, "dns-error");
  }

  for (const record of records) {
    const address = stripBrackets(record.address);
    const version = isIP(address);
    const isPrivate = version === 4 ? isPrivateIPv4(address) : version === 6 ? isPrivateIPv6(address) : true;
    if (isPrivate) {
      throw new EvidenceSourceError(
        `Host '${hostname}' resolves to a private or non-public address (${address}).`,
        "blocked-address"
      );
    }
  }

  return records.map((record) => stripBrackets(record.address));
}

function digest(text) {
  return `sha256:${createHash("sha256").update(text).digest("hex")}`;
}

async function readBoundedBody(response, maxBytes) {
  if (!response.body) {
    return "";
  }
  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel();
      throw new EvidenceSourceError(`Evidence response exceeded ${maxBytes} bytes.`, "too-large");
    }
    chunks.push(Buffer.from(value));
  }
  return Buffer.concat(chunks).toString("utf8");
}

/**
 * Fetch a public JSON evidence URL with DNS-aware and redirect-aware checks.
 * Residual risk: the HTTP client can re-resolve between the check and the
 * connection (DNS rebinding). PR 3/4 must pin the address at connect time for
 * any new remote collection path; this loader also records the limitation.
 * @param {string} rawUrl
 * @param {{timeoutMs?: number, maxBytes?: number}} [options]
 * @returns {Promise<{data: unknown, finalUrl: string, digest: string, createdAt: string|null}>}
 */
export async function fetchJsonEvidence(rawUrl, options = {}) {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxBytes = options.maxBytes ?? MAX_BYTES;
  let current;
  try {
    current = new URL(rawUrl);
  } catch {
    throw new EvidenceSourceError("Evidence URL is not a valid URL.", "invalid-url");
  }

  for (let redirect = 0; redirect <= MAX_REDIRECTS; redirect += 1) {
    if (current.protocol !== "https:") {
      throw new EvidenceSourceError("Remote evidence must use https://.", "unsafe-scheme");
    }
    if (current.username || current.password) {
      throw new EvidenceSourceError("Evidence URLs must not contain a username or password.", "credentials");
    }
    if (current.hash) current.hash = "";
    await assertPublicHostname(current.hostname, timeoutMs);

    let response;
    try {
      response = await fetch(current, {
        redirect: "manual",
        signal: AbortSignal.timeout(timeoutMs),
        headers: {
          accept: "application/json, application/*+json;q=0.9, */*;q=0.1",
          "user-agent": "open-scans-performance-investigation/1.0 (+https://github.com/mgifford/open-scans)"
        }
      });
    } catch (error) {
      throw new EvidenceSourceError(`Could not fetch evidence from '${current.origin}': ${error.message}.`, "fetch-error");
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) {
        throw new EvidenceSourceError(`Evidence URL redirected without a Location header (HTTP ${response.status}).`, "redirect-error");
      }
      if (redirect >= MAX_REDIRECTS) {
        throw new EvidenceSourceError(`Evidence URL exceeded ${MAX_REDIRECTS} redirects.`, "redirect-limit");
      }
      try {
        current = new URL(location, current);
      } catch {
        throw new EvidenceSourceError(`Evidence URL redirected to an invalid location '${location}'.`, "redirect-error");
      }
      continue;
    }

    if (!response.ok) {
      throw new EvidenceSourceError(`Evidence URL returned HTTP ${response.status}.`, "http-error");
    }

    const declaredLength = Number(response.headers.get("content-length") ?? 0);
    if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
      throw new EvidenceSourceError(`Evidence response declares ${declaredLength} bytes, above the ${maxBytes} limit.`, "too-large");
    }

    const text = await readBoundedBody(response, maxBytes);
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      throw new EvidenceSourceError(`Evidence response is not valid JSON: ${error.message}.`, "invalid-json");
    }

    return {
      data,
      finalUrl: current.toString(),
      digest: digest(text),
      createdAt: (() => {
        const header = response.headers.get("date");
        if (!header) return null;
        const parsed = new Date(header);
        return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
      })()
    };
  }

  throw new EvidenceSourceError("Evidence URL could not be fetched.", "fetch-error");
}

async function readJsonFile(path, maxBytes) {
  let info;
  try {
    info = await stat(path);
  } catch (error) {
    throw new EvidenceSourceError(`Could not read evidence file '${path}': ${error.message}.`, "file-error");
  }
  if (!info.isFile()) throw new EvidenceSourceError(`Evidence path '${path}' is not a file.`, "file-error");
  if (info.size > maxBytes) {
    throw new EvidenceSourceError(`Evidence file '${path}' is ${info.size} bytes, above the ${maxBytes} limit.`, "too-large");
  }
  let text;
  try {
    text = await readFile(path, "utf8");
  } catch (error) {
    throw new EvidenceSourceError(`Could not read evidence file '${path}': ${error.message}.`, "file-error");
  }
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    throw new EvidenceSourceError(`Evidence file '${path}' is not valid JSON: ${error.message}.`, "invalid-json");
  }
  return { data, digest: digest(text) };
}

async function assertWithinReports(repoRoot, location) {
  const reportsRoot = await realpathFs(resolve(repoRoot, "reports"));
  const absolute = resolve(repoRoot, location);
  const prefix = reportsRoot.endsWith(sep) ? reportsRoot : `${reportsRoot}${sep}`;
  if (!absolute.startsWith(prefix)) {
    throw new EvidenceSourceError(
      `Repository report path '${location}' escapes the reports/ directory.`,
      "unsafe-path"
    );
  }
  let real;
  try {
    real = await realpathFs(absolute);
  } catch (error) {
    throw new EvidenceSourceError(`Could not resolve report path '${location}': ${error.message}.`, "file-error");
  }
  if (!real.startsWith(prefix)) {
    throw new EvidenceSourceError(
      `Repository report path '${location}' resolves outside the reports/ directory.`,
      "unsafe-path"
    );
  }
  return real;
}

/**
 * Load one declared evidence source. No browser is involved.
 * @param {object} input
 * @param {object} input.source - A performance-request evidence source
 * @param {string} input.repoRoot
 * @param {string} [input.localOverride] - CLI-only local path for a source type
 * @param {boolean} [input.allowLocal]
 * @param {string} [input.requestHost]
 * @param {string} [input.importedAt]
 * @returns {Promise<{source: object, data: unknown, finalLocation: string}>}
 */
export async function loadEvidenceSource({ source, repoRoot, localOverride = null, allowLocal = false, requestHost = null, importedAt = new Date().toISOString() }) {
  const locationKind = localOverride ? "local-file" : source.locationKind;
  let data;
  let contentDigest;
  let finalLocation = localOverride ?? source.location;
  let networkFetches = 0;

  if (locationKind === "repo-path") {
    const absolute = await assertWithinReports(repoRoot, source.location);
    const file = await readJsonFile(absolute, MAX_REPO_BYTES);
    data = file.data;
    contentDigest = file.digest;
  } else if (locationKind === "local-file") {
    if (!allowLocal) {
      throw new EvidenceSourceError(
        "Local evidence paths are only accepted through an explicit --source override with --allow-local.",
        "local-not-allowed"
      );
    }
    const absolute = resolve(localOverride);
    const file = await readJsonFile(absolute, MAX_REPO_BYTES);
    data = file.data;
    contentDigest = file.digest;
    finalLocation = absolute;
  } else if (locationKind === "https") {
    const fetched = await fetchJsonEvidence(source.location);
    data = fetched.data;
    contentDigest = fetched.digest;
    finalLocation = fetched.finalUrl;
    networkFetches += 1;
  } else {
    throw new EvidenceSourceError(`Unsupported source location kind '${locationKind}'.`, "unsupported-location");
  }

  let limitations = locationKind === "https"
    ? ["Fetched as existing evidence; DNS was checked before the request. Address pinning at connect time is a PR 3/4 hardening item."]
    : [];

  // A Vital Core index is a directory, not evidence. Resolve the requested
  // domain to its snapshot before the adapter sees it, without launching a
  // browser or silently scanning the site.
  if (source.type === "vital-core" && Array.isArray(data?.domains) && !data.key && !data.findings) {
    if (locationKind !== "https") {
      throw new EvidenceSourceError(
        "A Vital Core index must be loaded over https so its snapshot_url can be resolved. Point the source at snapshot.json instead.",
        "index-needs-https"
      );
    }
    const baseHost = (value) => String(value ?? "").toLowerCase().replace(/^www\./, "");
    const requested = baseHost(requestHost);
    const entry = data.domains.find((domain) => baseHost(domain.domain ?? domain.key) === requested);
    if (!entry) {
      const available = data.domains.slice(0, 10).map((domain) => domain.domain ?? domain.key).filter(Boolean);
      throw new EvidenceSourceError(
        `Vital Core index has no entry for '${requestHost ?? "the requested domain"}'.`
        + (available.length ? ` Available examples: ${available.join(", ")}.` : ""),
        "domain-not-indexed"
      );
    }
    const snapshotUrl = new URL(entry.snapshot_url, finalLocation).toString();
    const snapshot = await fetchJsonEvidence(snapshotUrl);
    data = snapshot.data;
    contentDigest = snapshot.digest;
    finalLocation = snapshot.finalUrl;
    networkFetches += 1;
    limitations = [...limitations, "The Vital Core domain index was resolved to its snapshot.json; the index itself is not treated as evidence."];
  }

  const record = createSourceRecord({
    type: source.type,
    adapter: source.type,
    tool: TOOL_FOR_TYPE[source.type] ?? "unknown",
    location: finalLocation,
    locationKind,
    importedAt,
    contentDigest,
    limitations
  });

  return { source: record, data, finalLocation, networkFetches };
}

/**
 * Validate a page URL at execution time and follow redirects with a public-host
 * check at every hop. This is a preflight for browser providers; Chrome can
 * still issue third-party subresource requests, which remain a documented
 * browser-scan boundary.
 *
 * @param {string} rawUrl
 * @param {{timeoutMs?: number}} [options]
 * @returns {Promise<{finalUrl: string, status: number, redirected: boolean}>}
 */
export async function preflightPublicUrl(rawUrl, options = {}) {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  let current;
  try {
    current = new URL(rawUrl);
  } catch {
    throw new EvidenceSourceError("Page URL is not a valid URL.", "invalid-url");
  }

  for (let redirect = 0; redirect <= 5; redirect += 1) {
    if (!["http:", "https:"].includes(current.protocol)) {
      throw new EvidenceSourceError("Page URLs must use http:// or https://.", "unsafe-scheme");
    }
    if (current.username || current.password) {
      throw new EvidenceSourceError("Page URLs must not contain a username or password.", "credentials");
    }
    if (current.hash) current.hash = "";
    await assertPublicHostname(current.hostname, timeoutMs);

    let response;
    try {
      response = await fetch(current, {
        redirect: "manual",
        signal: AbortSignal.timeout(timeoutMs),
        headers: {
          accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.1",
          "user-agent": "open-scans-performance-investigation/1.0 (+https://github.com/mgifford/open-scans)"
        }
      });
    } catch (error) {
      throw new EvidenceSourceError(`Preflight failed for '${current.origin}': ${error.message}.`, "preflight-error");
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) throw new EvidenceSourceError("Page redirect had no Location header.", "redirect-error");
      if (redirect >= 5) throw new EvidenceSourceError("Page URL exceeded 5 redirects.", "redirect-limit");
      try {
        current = new URL(location, current);
      } catch {
        throw new EvidenceSourceError(`Page redirected to an invalid location '${location}'.`, "redirect-error");
      }
      continue;
    }

    const redirected = current.toString() !== new URL(rawUrl).toString();
    if (!response.ok) {
      await response.body?.cancel().catch(() => {});
      throw new EvidenceSourceError(`Page URL returned HTTP ${response.status}.`, "http-error");
    }
    await response.body?.cancel().catch(() => {});
    return { finalUrl: current.toString(), status: response.status, redirected };
  }

  throw new EvidenceSourceError("Page URL could not be validated.", "preflight-error");
}
