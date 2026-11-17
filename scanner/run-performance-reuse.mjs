import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { adaptSource, ADAPTER_VERSIONS } from "./adapters/index.mjs";
import {
  PERFORMANCE_EVIDENCE_SCHEMA_VERSION,
  assemblePerformanceEvidence,
  summarizePerformanceEvidence
} from "./performance-evidence.mjs";
import { parsePerformanceIssue, validatePerformanceRequest } from "./parse-performance-issue.mjs";
import { loadEvidenceSource } from "./performance-source-loader.mjs";

/** PR 2 deliberately supports reuse only; light/deep/combined arrive later. */
export const REUSE_RUNNER_VERSION = "1.0.0";

function normalizeRequest(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: ["Performance request must be a JSON object."], value: null };
  }
  if (input.schemaVersion === "performance-request/1") {
    const validation = validatePerformanceRequest(input);
    return validation.ok
      ? { ok: true, errors: [], value: input }
      : { ok: false, errors: validation.errors, value: null };
  }
  if (input.issue) {
    const parsed = parsePerformanceIssue(input);
    return parsed.ok
      ? { ok: true, errors: [], value: parsed.value }
      : { ok: false, errors: parsed.errors, value: null };
  }
  if (input.ok === true && input.value?.schemaVersion === "performance-request/1") {
    return { ok: true, errors: [], value: input.value };
  }
  if (input.ok === false && Array.isArray(input.errors)) {
    return { ok: false, errors: input.errors.map((error) => String(error)), value: null };
  }
  return {
    ok: false,
    errors: ["Input is not a validated performance-request/1 payload or parser result."],
    value: null
  };
}

function sourceWithOverride(source, override) {
  if (!override) return source;
  return {
    ...source,
    location: override.location,
    locationKind: override.locationKind
  };
}

/**
 * Run a reuse-only investigation.
 * @param {object} input
 * @param {object} input.request - performance-request/1 object or parser result
 * @param {string} [input.repoRoot]
 * @param {Array<{type: string, location: string, locationKind?: string}>} [input.sourceOverrides]
 * @param {boolean} [input.allowLocal]
 * @param {string} [input.generatedAt]
 * @returns {Promise<object>}
 */
export async function runReuseInvestigation({
  request: requestInput,
  repoRoot = process.cwd(),
  sourceOverrides = [],
  allowLocal = false,
  generatedAt = new Date().toISOString()
}) {
  if (Number.isNaN(new Date(generatedAt).getTime())) {
    return { ok: false, errors: ["generatedAt must be an ISO 8601 date-time."], warnings: [], evidence: null, stats: null };
  }
  const normalized = normalizeRequest(requestInput);
  if (!normalized.ok) {
    return { ok: false, errors: normalized.errors, warnings: [], evidence: null, stats: null };
  }
  const request = normalized.value;
  if (request.mode !== "reuse") {
    return {
      ok: false,
      errors: [`PR 2 supports reuse mode only. This request mode is '${request.mode}'. Use a reuse request or wait for the provider PRs.`],
      warnings: [],
      evidence: null,
      stats: null
    };
  }

  const overrides = sourceOverrides.map((override) => ({
    type: override.type,
    location: override.location,
    locationKind: override.locationKind
      ?? (/^reports\//.test(override.location) ? "repo-path" : "local-file")
  }));
  const usedByType = new Map();

  const planned = [];
  const consumedOverrides = new Set();
  for (const source of request.evidenceSources) {
    const overridesForType = overrides.filter((override) => override.type === source.type && !consumedOverrides.has(override));
    const used = usedByType.get(source.type) ?? 0;
    const override = overridesForType[used] ?? null;
    if (override) {
      usedByType.set(source.type, used + 1);
      consumedOverrides.add(override);
    }
    planned.push({ source: sourceWithOverride(source, override), override });
  }
  for (const override of overrides) {
    if (consumedOverrides.has(override)) continue;
    planned.push({
      source: {
        type: override.type,
        location: override.location,
        locationKind: override.locationKind
      },
      override
    });
  }

  if (planned.length === 0) {
    return {
      ok: false,
      errors: [
        "Reuse mode needs at least one existing evidence source. "
        + "Declare one in the request or pass --source <type>=<location>."
      ],
      warnings: [],
      evidence: null,
      stats: null
    };
  }

  const startedAt = Date.now();
  const inputs = [];
  const failures = [];
  const warnings = [];
  let networkFetches = 0;
  let browserLaunches = 0;

  for (const { source, override } of planned) {
    let loaded;
    try {
      loaded = await loadEvidenceSource({
        source,
        repoRoot,
        localOverride: override?.locationKind === "https" || override?.locationKind === "repo-path"
          ? null
          : override?.location ?? null,
        allowLocal,
        requestHost: request.site.host,
        importedAt: generatedAt
      });
      networkFetches += loaded.networkFetches ?? 0;
    } catch (error) {
      failures.push(`${source.type}: ${error.message}`);
      continue;
    }

    const adapted = adaptSource({ type: source.type, data: loaded.data, source: loaded.source });
    if (!adapted.ok) {
      failures.push(`${source.type} (${loaded.source.location}): ${adapted.errors.join(" ")}`);
      continue;
    }
    inputs.push({ source: loaded.source, fragment: adapted.fragment });
  }

  if (inputs.length === 0) {
    return {
      ok: false,
      errors: failures.length > 0 ? failures : ["No evidence source could be adapted."],
      warnings,
      evidence: null,
      stats: null
    };
  }

  const assembled = assemblePerformanceEvidence({ request, inputs, generatedAt });
  if (failures.length > 0) {
    assembled.warnings.push(...failures.map((failure) => `Source omitted: ${failure}`));
  }
  if (!assembled.ok) {
    return {
      ok: false,
      errors: assembled.errors,
      warnings: [...warnings, ...assembled.warnings, ...failures],
      evidence: null,
      stats: null
    };
  }

  // Failures are explicit limitations, not silent omissions.
  for (const failure of failures) {
    assembled.value.limitations.push(`Source omitted: ${failure}`);
  }

  const stats = {
    browserLaunches,
    networkFetches,
    pagesInspected: assembled.value.pages.length,
    durationMs: Date.now() - startedAt,
    sourceCount: assembled.value.sources.length,
    adapterVersions: { ...ADAPTER_VERSIONS },
    runnerVersion: REUSE_RUNNER_VERSION,
    schema: PERFORMANCE_EVIDENCE_SCHEMA_VERSION
  };

  return {
    ok: true,
    errors: [],
    warnings: [...warnings, ...assembled.warnings],
    evidence: assembled.value,
    stats
  };
}

function markdownSummary(result) {
  const lines = ["## Performance reuse investigation", ""];
  if (!result.ok) {
    lines.push("**Status:** failed. No browser was launched.", "");
    lines.push("### Errors", "");
    for (const error of result.errors) lines.push(`- ${error}`);
    if (result.warnings?.length) {
      lines.push("", "### Warnings", "");
      for (const warning of result.warnings) lines.push(`- ${warning}`);
    }
    return `${lines.join("\n")}\n`;
  }

  const summary = summarizePerformanceEvidence(result.evidence);
  lines.push("**Status:** assembled from existing evidence. No browser was launched.", "");
  lines.push(`- **Site:** ${summary.site}`);
  lines.push(`- **Request mode:** \`${summary.mode}\``);
  lines.push(`- **Sources:** ${summary.sources.length}`);
  for (const source of summary.sources) {
    lines.push(`  - \`${source.type}\`: \`${source.location}\``);
  }
  lines.push(`- **Pages:** ${summary.pages}`);
  lines.push(`- **Page families:** ${summary.pageFamilies}`);
  lines.push(`- **Component types:** ${summary.componentTypes}`);
  lines.push(`- **Component instances:** ${summary.componentInstances}`);
  lines.push(`- **Resources:** ${summary.resources}`);
  lines.push(`- **Findings:** ${summary.findings}`);
  lines.push(`- **Experiments:** ${summary.experiments}`);
  lines.push(`- **Investigation queue items:** ${summary.investigation}`);
  lines.push(`- **Coverage:** ${summary.coverage.inspectedPages ?? "unknown"} inspected; ${summary.coverage.discoveredPages ?? "unknown"} discovered/reported`);
  lines.push(`- **Merge decisions:** ${summary.mergeDecisions}`);
  lines.push(`- **Browser launches:** ${result.stats.browserLaunches}`);
  lines.push(`- **Network evidence fetches:** ${result.stats.networkFetches}`);
  lines.push(`- **Duration:** ${result.stats.durationMs} ms`);
  if (result.warnings?.length) {
    lines.push("", "### Warnings", "");
    for (const warning of result.warnings) lines.push(`- ${warning}`);
  }
  lines.push("", "### Boundaries", "");
  for (const limitation of summary.limitations) lines.push(`- ${limitation}`);
  return `${lines.join("\n")}\n`;
}

function parseArgs(argv) {
  const sources = [];
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--source") {
      const value = argv[index + 1];
      if (!value) throw new Error("--source requires <type>=<location>.");
      const eq = value.indexOf("=");
      if (eq <= 0) throw new Error("--source requires <type>=<location>.");
      sources.push({ type: value.slice(0, eq), location: value.slice(eq + 1) });
      index += 1;
      continue;
    }
    if (arg === "--out" || arg === "--summary" || arg === "--repo-root" || arg === "--now") {
      const value = argv[index + 1];
      if (!value) throw new Error(`${arg} requires a value.`);
      if (arg === "--out") positional.out = value;
      if (arg === "--summary") positional.summary = value;
      if (arg === "--repo-root") positional.repoRoot = value;
      if (arg === "--now") positional.now = value;
      index += 1;
      continue;
    }
    if (arg === "--allow-local") {
      positional.allowLocal = true;
      continue;
    }
    if (arg.startsWith("--")) throw new Error(`Unknown option '${arg}'.`);
    positional.push(arg);
  }
  return {
    inputPath: positional[0] ?? null,
    outPath: positional.out ?? null,
    summaryPath: positional.summary ?? null,
    repoRoot: positional.repoRoot ?? process.cwd(),
    generatedAt: positional.now ?? new Date().toISOString(),
    allowLocal: positional.allowLocal ?? false,
    sources
  };
}

async function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 2;
    return;
  }
  if (!args.inputPath) {
    console.error("Usage: node scanner/run-performance-reuse.mjs <performance-request.json> [--source <type>=<location>] [--out <file>] [--summary <file>] [--repo-root <dir>] [--allow-local] [--now <iso>]");
    process.exitCode = 2;
    return;
  }

  let requestInput;
  try {
    requestInput = JSON.parse(readFileSync(args.inputPath, "utf8"));
  } catch (error) {
    console.error(`Could not read request JSON: ${error.message}`);
    process.exitCode = 2;
    return;
  }

  const result = await runReuseInvestigation({
    request: requestInput,
    repoRoot: resolve(args.repoRoot),
    sourceOverrides: args.sources,
    allowLocal: args.allowLocal,
    generatedAt: args.generatedAt
  });

  if (args.outPath && result.evidence) {
    writeFileSync(args.outPath, `${JSON.stringify(result.evidence, null, 2)}\n`, "utf8");
  } else if (result.evidence) {
    process.stdout.write(`${JSON.stringify(result.evidence, null, 2)}\n`);
  }
  if (args.summaryPath) {
    writeFileSync(args.summaryPath, markdownSummary(result), "utf8");
  }
  if (!result.ok) {
    for (const error of result.errors) console.error(`Error: ${error}`);
    for (const warning of result.warnings ?? []) console.error(`Warning: ${warning}`);
    process.exitCode = 1;
  } else {
    for (const warning of result.warnings ?? []) console.error(`Warning: ${warning}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
