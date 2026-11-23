#!/usr/bin/env node
/**
 * Refresh the report-derived verifiedMappings in
 * scanner/data/act-registry-overlays.json from the W3C ACT implementation
 * reports for Alfa, AccessLint and Equal Access.
 *
 * Why this exists
 * ---------------
 * The first version of these mappings was extracted by hand. Hand extraction is
 * not reproducible: nobody can rerun it, and a typo is indistinguishable from a
 * report change. This script fetches the same three published reports, applies
 * the same patterns, and writes the same data shape so the registry can be
 * rebuilt from evidence.
 *
 * Guarantees
 * ----------
 * - A failed fetch, or a report with no recognisable mappings, writes nothing
 *   and exits non-zero. A W3C markup change must not erase verified data.
 * - Sa11y mappings (a different source) are preserved untouched.
 * - Existing entries keep their source, reported engine version, verifiedAt
 *   date and versionAligned:false.
 * - Keys and mapping lists are sorted, so the same pages produce the same file.
 * - The diff is printed as added/removed/unchanged counts per engine.
 *
 * Usage
 * -----
 *   node scanner/build-act-mappings-from-reports.mjs [--dry-run] [--timeout <ms>]
 *   node scanner/build-act-registry.mjs
 *
 * The extractor takes the first procedure named for each ACT rule. That matches
 * the committed data. Some W3C reports list more than one procedure for a rule
 * (AccessLint currently does for 23a2a8); recording every procedure would change
 * the registry counts and is a data decision, not an extraction default.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { parse } from "parse5";

const OVERLAY_PATH = new URL("./data/act-registry-overlays.json", import.meta.url);
const MAPPING_PATH = new URL("./data/act-mapping.json", import.meta.url);

export const DEFAULT_TIMEOUT_MS = 30_000;

/**
 * The three reports this script owns. Sa11y is deliberately absent: its
 * mappings come from the upstream package and must survive a refresh.
 */
export const REPORT_SOURCES = [
  {
    engine: "alfa",
    url: "https://www.w3.org/WAI/standards-guidelines/act/implementations/alfa/",
    label: "Alfa",
    // The generated axe/ALFA mapping file already lists most Alfa procedures.
    // The report only contributes the procedures that file does not list.
    includeOnlyMissingFromMapping: true
  },
  {
    engine: "accesslint",
    url: "https://www.w3.org/WAI/standards-guidelines/act/implementations/accesslint-core/",
    label: "AccessLint"
  },
  {
    engine: "equalAccess",
    url: "https://www.w3.org/WAI/standards-guidelines/act/implementations/equal-access/",
    label: "Equal Access",
    // Equal Access names a procedure and a test list, e.g.
    // aria_role_allowed:Pass_0,Fail_2,Potential_1. The suffix is not part of
    // the engine rule id.
    stripTestSuffix: true
  }
];

export const MANAGED_ENGINES = REPORT_SOURCES.map((source) => source.engine);

function compareStrings(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function nodeText(node) {
  if (node.nodeName === "#text") return node.value;
  if (node.nodeName === "#comment") return "";
  let text = "";
  for (const child of node.childNodes ?? []) text += nodeText(child);
  return text;
}

function* walk(node) {
  yield node;
  for (const child of node.childNodes ?? []) yield* walk(child);
}

function attribute(node, name) {
  return (node.attrs ?? []).find((entry) => entry.name === name)?.value ?? null;
}

function firstProcedure(text) {
  const match = /using the\s+(.+?)\s+procedures?\b/i.exec(text);
  return match ? match[1].trim() : null;
}

function normalizeEngineRuleId(rawRuleId, source) {
  if (source.stripTestSuffix) return rawRuleId.split(":")[0].trim();
  // A rule can list several procedures ("a, and b procedures"); the committed
  // mapping records the first.
  return rawRuleId.split(/\s*,\s*(?:and\s+)?/i)[0].trim();
}

function sortAndDedupe(mappings) {
  const seen = new Set();
  return mappings
    .filter(({ actRuleId, ruleId }) => {
      if (!actRuleId || !ruleId) return false;
      const key = `${actRuleId}|${ruleId}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort(
      (left, right) =>
        compareStrings(left.actRuleId, right.actRuleId) || compareStrings(left.ruleId, right.ruleId)
    );
}

/**
 * Extract ACT rule id -> engine rule id pairs from one implementation report.
 *
 * The reports put each ACT rule in an `<h3 id="breakdown-<actRuleId>">`
 * followed by a paragraph of the form:
 *
 *   This rule is implemented by <engine> using the <code>procedure</code> procedure.
 *
 * Parsing the document text rather than matching raw markup keeps multiline
 * markup working: attributes, text and `<code>` contents can span lines and the
 * whitespace is normalised before the pattern is applied.
 */
export function extractReportMappings(html, source = {}) {
  const document = parse(html);
  const mappings = [];
  let actRuleId = null;
  let ruleFound = false;

  for (const node of walk(document)) {
    if (node.nodeName === "h3") {
      const match = /^breakdown-(.+)$/.exec(attribute(node, "id") ?? "");
      actRuleId = match ? match[1].trim() : null;
      ruleFound = false;
      continue;
    }

    if (!actRuleId || ruleFound || node.nodeName !== "p") continue;

    const text = nodeText(node).replace(/\s+/g, " ").trim();
    if (!/\bimplemented by\b/i.test(text) || !/\busing the\b/i.test(text)) continue;

    const procedure = firstProcedure(text);
    if (!procedure) continue;

    mappings.push({
      actRuleId,
      ruleId: normalizeEngineRuleId(procedure, source)
    });
    ruleFound = true;
  }

  return sortAndDedupe(mappings);
}

/**
 * Read the engine version the report covers from its Implementation Summary
 * box. Returns null instead of guessing when the box is absent.
 */
export function extractReportedVersion(html) {
  const document = parse(html);

  for (const node of walk(document)) {
    if (node.nodeName !== "aside") continue;
    const classes = (attribute(node, "class") ?? "").split(/\s+/);
    if (!classes.includes("box")) continue;
    const text = nodeText(node).replace(/\s+/g, " ").trim();
    if (!/implementation summary/i.test(text)) continue;
    const match = /version\s+v?([0-9][0-9A-Za-z.+-]*)/i.exec(text);
    if (match) return match[1];
  }

  const fallback = /\bversion\s+v?([0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.]+)?)/i.exec(html);
  return fallback ? fallback[1] : null;
}

function describeFetchError(error, timeoutMs) {
  if (error?.name === "TimeoutError" || error?.name === "AbortError") {
    return `timed out after ${timeoutMs}ms`;
  }
  return error?.message ?? String(error);
}

/**
 * Fetch one report with a bounded wait. Errors name the URL and the reason.
 */
export async function fetchReport(url, { fetchImpl = globalThis.fetch, timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
  const signal = AbortSignal.timeout(timeoutMs);
  let response;

  try {
    response = await fetchImpl(url, {
      headers: {
        accept: "text/html",
        "user-agent": "open-scans-act-mapping-builder/1.0 (+https://github.com/mgifford/open-scans)"
      },
      redirect: "follow",
      signal
    });
  } catch (error) {
    throw new Error(`could not fetch ${url}: ${describeFetchError(error, timeoutMs)}`);
  }

  if (!response.ok) {
    const statusText = response.statusText ? ` ${response.statusText}` : "";
    throw new Error(`could not fetch ${url}: HTTP ${response.status}${statusText}`);
  }

  try {
    return await response.text();
  } catch (error) {
    throw new Error(`could not read ${url}: ${error?.message ?? String(error)}`);
  }
}

/**
 * Fetch and parse all managed reports. Throws before the caller writes
 * anything, so a partial refresh can never delete existing mappings.
 */
export async function loadReportData({
  fetchImpl = globalThis.fetch,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  onWarning = (message) => console.warn(message)
} = {}) {
  const reports = {};

  for (const source of REPORT_SOURCES) {
    const html = await fetchReport(source.url, { fetchImpl, timeoutMs });
    const mappings = extractReportMappings(html, source);

    if (mappings.length === 0) {
      throw new Error(
        `no ACT mappings were found in ${source.url}; the report markup may have changed`
      );
    }

    const reportedEngineVersion = extractReportedVersion(html);
    if (!reportedEngineVersion) {
      onWarning(
        `could not read the reported engine version from ${source.url}; new mappings will record null`
      );
    }

    reports[source.engine] = { ...source, mappings, reportedEngineVersion };
  }

  return reports;
}

function noteFor(source, reportedEngineVersion, engineVersion) {
  if (source.engine === "alfa") {
    return `W3C Alfa implementation report states this ACT rule is implemented by Alfa using this procedure; the report covers Alfa ${reportedEngineVersion ?? "an unknown version"} while ${engineVersion ?? "an unknown version"} runs.`;
  }
  return "W3C ACT implementation report lists this mapping; the report covers a different engine version.";
}

function newMappingEntry({ source, report, ruleId, verifiedAt, scannedVersion }) {
  return {
    ruleId,
    source: source.url,
    verifiedAt,
    engineVersion: scannedVersion ?? null,
    reportedEngineVersion: report.reportedEngineVersion ?? null,
    versionAligned: false,
    notes: noteFor(source, report.reportedEngineVersion, scannedVersion)
  };
}

function isAlreadyInGeneratedMapping(mapping, engine, actRuleId, ruleId) {
  return (mapping.byActRuleId?.[actRuleId]?.[engine] ?? []).includes(ruleId);
}

function mappingKeys(verifiedMappings, engine) {
  const keys = new Set();
  for (const [actRuleId, engineMap] of Object.entries(verifiedMappings ?? {})) {
    for (const entry of engineMap?.[engine] ?? []) {
      keys.add(`${actRuleId}|${entry.ruleId}`);
    }
  }
  return keys;
}

function formatMappingKey(key) {
  const [actRuleId, ruleId] = key.split("|");
  return `${actRuleId} -> ${ruleId}`;
}

/**
 * Build the next overlays object. Pure: the input objects are not mutated.
 * Unmanaged engines are copied through; managed engines are replaced by the
 * report extraction, preserving provenance for mappings that already existed.
 */
export function buildUpdatedOverlays({
  overlays,
  mapping,
  reports,
  verifiedAt
}) {
  const previous = overlays.verifiedMappings ?? {};
  const next = {};

  // Keep engines this script does not own (currently Sa11y).
  for (const [actRuleId, engineMap] of Object.entries(previous)) {
    for (const [engine, entries] of Object.entries(engineMap ?? {})) {
      if (MANAGED_ENGINES.includes(engine)) continue;
      next[actRuleId] ??= {};
      next[actRuleId][engine] = entries;
    }
  }

  for (const source of REPORT_SOURCES) {
    const report = reports?.[source.engine];
    if (!report) throw new Error(`missing report data for ${source.engine}`);

    const scannedVersion = mapping.engineVersions?.[source.engine]?.scannedVersion ?? null;
    const existingByRuleId = new Map(
      Object.entries(previous).flatMap(([actRuleId, engineMap]) =>
        (engineMap?.[source.engine] ?? []).map((entry) => [
          `${actRuleId}|${entry.ruleId}`,
          entry
        ])
      )
    );

    for (const { actRuleId, ruleId } of report.mappings) {
      if (source.includeOnlyMissingFromMapping && isAlreadyInGeneratedMapping(mapping, source.engine, actRuleId, ruleId)) {
        continue;
      }

      // Preserve the existing object, including its verifiedAt date and any
      // fields a later change adds that this script does not know about.
      const existing = existingByRuleId.get(`${actRuleId}|${ruleId}`);
      next[actRuleId] ??= {};
      next[actRuleId][source.engine] ??= [];
      next[actRuleId][source.engine].push(
        existing
          ? { ...existing }
          : newMappingEntry({ source, report, ruleId, verifiedAt, scannedVersion })
      );
    }
  }

  const sorted = {};
  for (const actRuleId of Object.keys(next).sort(compareStrings)) {
    const engineMap = next[actRuleId];
    const sortedEngines = {};
    for (const engine of Object.keys(engineMap).sort(compareStrings)) {
      sortedEngines[engine] = [...engineMap[engine]].sort((left, right) =>
        compareStrings(left.ruleId, right.ruleId)
      );
    }
    sorted[actRuleId] = sortedEngines;
  }

  return { ...overlays, verifiedMappings: sorted };
}

/**
 * Compare the mapping sets, ignoring key order. Returns added and removed
 * pairs per managed engine plus the unchanged count.
 */
export function diffVerifiedMappings(previous = {}, next = {}) {
  const diff = {};

  for (const engine of MANAGED_ENGINES) {
    const before = mappingKeys(previous, engine);
    const after = mappingKeys(next, engine);
    diff[engine] = {
      added: [...after].filter((key) => !before.has(key)).sort(compareStrings),
      removed: [...before].filter((key) => !after.has(key)).sort(compareStrings),
      unchanged: [...after].filter((key) => before.has(key)).length
    };
  }

  return diff;
}

export function formatDiff(diff) {
  const lines = [];

  for (const engine of MANAGED_ENGINES) {
    const entry = diff[engine];
    lines.push(
      `${engine}: ${entry.added.length} added, ${entry.removed.length} removed, ${entry.unchanged} unchanged`
    );
    for (const key of entry.added) lines.push(`  + ${formatMappingKey(key)}`);
    for (const key of entry.removed) lines.push(`  - ${formatMappingKey(key)}`);
  }

  return lines.join("\n");
}

function parseArgs(argv) {
  const options = { dryRun: false, timeoutMs: DEFAULT_TIMEOUT_MS, help: false };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === "--dry-run") {
      options.dryRun = true;
    } else if (argument === "--help" || argument === "-h") {
      options.help = true;
    } else if (argument === "--timeout" || argument.startsWith("--timeout=")) {
      const rawValue = argument === "--timeout" ? argv[++index] : argument.slice("--timeout=".length);
      const value = Number(rawValue);
      if (!Number.isFinite(value) || value <= 0) {
        throw new Error("--timeout must be a positive number of milliseconds");
      }
      options.timeoutMs = value;
    } else {
      throw new Error(`unknown argument: ${argument}`);
    }
  }

  return options;
}

function usage() {
  return [
    "Usage: node scanner/build-act-mappings-from-reports.mjs [--dry-run] [--timeout <ms>]",
    "",
    "Fetches the W3C ACT implementation reports for Alfa, AccessLint and Equal",
    "Access and updates verifiedMappings in scanner/data/act-registry-overlays.json.",
    "Fails closed: if a report cannot be fetched or parsed, nothing is written.",
    "",
    "  --dry-run       print the diff without writing",
    "  --timeout <ms>  per-request timeout (default 30000)",
    "  --help          show this message"
  ].join("\n");
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  if (options.help) {
    console.log(usage());
    return;
  }

  const overlays = JSON.parse(readFileSync(OVERLAY_PATH, "utf8"));
  const mapping = JSON.parse(readFileSync(MAPPING_PATH, "utf8"));

  let reports;
  try {
    reports = await loadReportData({ timeoutMs: options.timeoutMs });
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    console.error("No files were written; existing verified mappings were kept.");
    process.exitCode = 1;
    return;
  }

  const updated = buildUpdatedOverlays({
    overlays,
    mapping,
    reports,
    verifiedAt: todayIsoDate()
  });
  const diff = diffVerifiedMappings(overlays.verifiedMappings ?? {}, updated.verifiedMappings);

  console.log(`Fetched ${REPORT_SOURCES.length} W3C ACT implementation reports.`);
  console.log(formatDiff(diff));

  const nextText = JSON.stringify(updated, null, 2) + "\n";
  if (options.dryRun) {
    console.log("Dry run: no files were written.");
    return;
  }

  const currentText = readFileSync(OVERLAY_PATH, "utf8");
  if (nextText === currentText) {
    console.log(`No changes; ${OVERLAY_PATH.pathname} is up to date.`);
    return;
  }

  writeFileSync(OVERLAY_PATH, nextText, "utf8");
  console.log(`Wrote ${OVERLAY_PATH.pathname}`);
  console.log("Next: node scanner/build-act-registry.mjs");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`ERROR: ${error?.message ?? String(error)}`);
    process.exitCode = 1;
  });
}
