import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { adaptSource } from "./adapters/index.mjs";
import {
  PERFORMANCE_EVIDENCE_SCHEMA_VERSION,
  assemblePerformanceEvidence,
  createSourceRecord,
  normalizeUrl,
  summarizePerformanceEvidence,
  validatePerformanceEvidence
} from "./performance-evidence.mjs";
import {
  collectPerformanceCandidates,
  discoverPerformanceUrls,
  orderPerformanceCandidates,
  planLighthouseRuns,
  summarizeSelection
} from "./performance-page-selection.mjs";
import {
  LIGHTHOUSE_ADAPTER_VERSION,
  LIGHTHOUSE_PROVIDER_VERSION,
  LighthouseRunError,
  normalizeLighthouseResult,
  resolveChromePath,
  runLighthouse,
  summarizeLighthouseResult
} from "./performance-lighthouse.mjs";
import { parsePerformanceIssue, validatePerformanceRequest } from "./parse-performance-issue.mjs";
import { loadEvidenceSource, preflightPublicUrl } from "./performance-source-loader.mjs";
import { redactStringsDeep } from "./redact-secrets.mjs";

export const LIGHT_RUNNER_VERSION = "1.0.0";
const DEFAULT_TIME_BUDGET_MS = 15 * 60 * 1000;

function normalizeRequest(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: ["Performance request must be a JSON object."], value: null };
  }
  if (input.schemaVersion === "performance-request/1") {
    const validation = validatePerformanceRequest(input);
    return validation.ok ? { ok: true, errors: [], value: input } : { ok: false, errors: validation.errors, value: null };
  }
  if (input.issue) {
    const parsed = parsePerformanceIssue(input);
    return parsed.ok ? { ok: true, errors: [], value: parsed.value } : { ok: false, errors: parsed.errors, value: null };
  }
  if (input.ok === true && input.value?.schemaVersion === "performance-request/1") {
    return { ok: true, errors: [], value: input.value };
  }
  if (input.ok === false && Array.isArray(input.errors)) {
    return { ok: false, errors: input.errors.map(String), value: null };
  }
  return { ok: false, errors: ["Input is not a performance-request/1 payload or parser result."], value: null };
}

function planSources({ request, sourceOverrides }) {
  const overrides = sourceOverrides.map((override) => ({
    type: override.type,
    location: override.location,
    locationKind: override.locationKind ?? (/^reports\//.test(override.location) ? "repo-path" : "local-file")
  }));
  const planned = [];
  const consumed = new Set();
  const usedByType = new Map();
  for (const source of request.evidenceSources) {
    const candidates = overrides.filter((override) => override.type === source.type && !consumed.has(override));
    const used = usedByType.get(source.type) ?? 0;
    const override = candidates[used] ?? null;
    if (override) {
      consumed.add(override);
      usedByType.set(source.type, used + 1);
    }
    planned.push({
      source: override
        ? { ...source, location: override.location, locationKind: override.locationKind }
        : source,
      override
    });
  }
  for (const override of overrides) {
    if (consumed.has(override)) continue;
    planned.push({
      source: { type: override.type, location: override.location, locationKind: override.locationKind },
      override
    });
  }
  return planned;
}

async function loadReusableInputs({ request, repoRoot, sourceOverrides, allowLocal, generatedAt }) {
  const inputs = [];
  const failures = [];
  let networkFetches = 0;
  for (const { source, override } of planSources({ request, sourceOverrides })) {
    let loaded;
    try {
      loaded = await loadEvidenceSource({
        source,
        repoRoot,
        localOverride: override?.locationKind === "local-file" ? override.location : null,
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
  return { inputs, failures, networkFetches };
}

function isValidGeneratedAt(value) {
  return !Number.isNaN(new Date(value).getTime());
}

/**
 * Run a bounded light performance investigation.
 * @param {object} input
 * @returns {Promise<object>}
 */
export async function runLightweightPerformance({
  request: requestInput,
  repoRoot = process.cwd(),
  sourceOverrides = [],
  allowLocal = false,
  artifactsDir = resolve(".scan-output/performance/lighthouse"),
  generatedAt = new Date().toISOString(),
  chromePath = resolveChromePath(),
  lighthouseRunner = runLighthouse,
  discovery = discoverPerformanceUrls,
  preflightUrl = preflightPublicUrl,
  timeBudgetMs = DEFAULT_TIME_BUDGET_MS
}) {
  const startedAt = Date.now();
  if (!isValidGeneratedAt(generatedAt)) {
    return { ok: false, errors: ["generatedAt must be an ISO 8601 date-time."], warnings: [], evidence: null, runReport: null };
  }
  const normalized = normalizeRequest(requestInput);
  if (!normalized.ok) {
    return { ok: false, errors: normalized.errors, warnings: [], evidence: null, runReport: null };
  }
  const request = normalized.value;
  if (request.mode !== "light") {
    return {
      ok: false,
      errors: [`PR 3 supports light mode only. This request mode is '${request.mode}'.`],
      warnings: [],
      evidence: null,
      runReport: null
    };
  }
  if (!chromePath && lighthouseRunner === runLighthouse) {
    return {
      ok: false,
      errors: ["No Chromium binary was found for Lighthouse. Set CHROME_PATH or install Playwright Chromium."],
      warnings: [],
      evidence: null,
      runReport: null
    };
  }

  const warnings = [];
  const failures = [];
  const loaded = await loadReusableInputs({ request, repoRoot, sourceOverrides, allowLocal, generatedAt });
  failures.push(...loaded.failures);

  const baseAssembly = assemblePerformanceEvidence({
    request,
    inputs: loaded.inputs,
    generatedAt
  });
  if (!baseAssembly.ok) {
    return { ok: false, errors: baseAssembly.errors, warnings: [...warnings, ...baseAssembly.warnings], evidence: null, runReport: null };
  }
  const baseEvidence = baseAssembly.value;

  const hasInventory = baseEvidence.pages.length > 0
    || request.site.urls.length > 0
    || request.priorityUrls.length > 0
    || request.topTaskUrls.length > 0;
  let discoveryResult = null;
  if (!hasInventory) {
    try {
      discoveryResult = await discovery({
        request,
        maxUrls: request.limits.maxPagesToInspect,
        timeoutMs: 30_000
      });
    } catch (error) {
      discoveryResult = { urls: [], method: "failed", limitations: [`Bounded discovery failed: ${error.message}`] };
      failures.push(`Discovery failed: ${error.message}`);
    }
  }
  const discoveredUrls = discoveryResult?.urls ?? [];
  const collected = collectPerformanceCandidates({
    request,
    evidence: baseEvidence,
    discoveredUrls
  });
  const ordered = orderPerformanceCandidates({
    request,
    evidence: baseEvidence,
    candidates: collected.candidates
  });
  const plan = planLighthouseRuns({
    request,
    evidence: baseEvidence,
    orderedCandidates: ordered.ordered,
    now: new Date(generatedAt).getTime()
  });

  const inputs = [...loaded.inputs];
  const runRecords = [];
  const runFailures = [];
  let browserLaunches = 0;
  let successfulAudits = 0;
  const deadline = startedAt + timeBudgetMs;

  for (const [index, candidate] of plan.runs.entries()) {
    if (Date.now() > deadline) {
      runFailures.push({ url: candidate.url, stage: "time-budget", reason: "Pipeline time budget reached." });
      continue;
    }

    let preflightResult;
    try {
      preflightResult = await preflightUrl(candidate.url);
    } catch (error) {
      runFailures.push({ url: candidate.url, stage: "preflight", reason: error.message });
      continue;
    }

    let finalCheck;
    try {
      finalCheck = new URL(preflightResult.finalUrl);
    } catch {
      runFailures.push({ url: candidate.url, stage: "preflight", reason: "Redirect target was not a valid URL." });
      continue;
    }
    if (finalCheck.hostname.toLowerCase().replace(/^www\./, "") !== request.site.host.toLowerCase().replace(/^www\./, "")
      && !finalCheck.hostname.toLowerCase().endsWith(`.${request.site.host.toLowerCase().replace(/^www\./, "")}`)) {
      runFailures.push({ url: candidate.url, stage: "preflight", reason: `Redirected outside the requested site to '${finalCheck.hostname}'.` });
      continue;
    }

    browserLaunches += 1;
    const runStartedAt = Date.now();
    let result;
    try {
      result = await lighthouseRunner({
        url: preflightResult.finalUrl,
        request,
        artifactsDir,
        chromePath,
        runId: `${index + 1}-${Date.now()}`
      });
      successfulAudits += 1;
    } catch (error) {
      const reason = error instanceof LighthouseRunError ? error.message : String(error);
      runFailures.push({ url: candidate.url, stage: "lighthouse", reason });
      runRecords.push({
        url: candidate.url,
        finalUrl: preflightResult.finalUrl,
        action: "failed",
        durationMs: Date.now() - runStartedAt,
        reason
      });
      continue;
    }

    const finalUrl = result.data?.finalDisplayedUrl ?? result.data?.finalUrl ?? preflightResult.finalUrl;
    const samePage = (() => {
      try {
        return normalizeUrl(finalUrl) === candidate.normalizedUrl;
      } catch {
        return false;
      }
    })();
    const source = createSourceRecord({
      type: "lighthouse",
      adapter: "lighthouse",
      adapterVersion: LIGHTHOUSE_ADAPTER_VERSION,
      tool: "lighthouse",
      toolVersion: result.data?.lighthouseVersion ?? null,
      location: `lighthouse/${result.relativePath}`,
      locationKind: "artifact",
      collectedAt: result.data?.fetchTime ?? null,
      importedAt: generatedAt,
      contentDigest: result.digest,
      schemaVersion: "lighthouse-json",
      limitations: [
        "Raw Lighthouse JSON is retained in the bounded workflow artifact directory, not in Git history.",
        "Lighthouse is Chromium-only lab evidence and is never Firefox energy."
      ]
    });
    let fragment;
    try {
      fragment = normalizeLighthouseResult({
        data: result.data,
        source,
        request,
        pageId: samePage && candidate.pageId ? candidate.pageId : null,
        rawPath: source.location
      });
    } catch (error) {
      const reason = `Lighthouse result could not be normalized: ${error.message}`;
      runFailures.push({ url: candidate.url, stage: "normalize", reason });
      runRecords.push({
        url: candidate.url,
        finalUrl,
        action: "failed",
        durationMs: Date.now() - runStartedAt,
        sourceId: source.id,
        artifact: source.location,
        reason
      });
      continue;
    }
    inputs.push({ source, fragment });
    runRecords.push({
      url: candidate.url,
      finalUrl,
      action: "run",
      status: "completed",
      sourceId: source.id,
      artifact: source.location,
      durationMs: Date.now() - runStartedAt,
      redirected: finalUrl !== candidate.url,
      summary: summarizeLighthouseResult(result.data)
    });
  }

  if (inputs.length === 0 && plan.reused.length === 0 && successfulAudits === 0) {
    return {
      ok: false,
      errors: [
        "No evidence could be produced: no reusable source was loaded and no Lighthouse run completed.",
        ...runFailures.map((entry) => `${entry.url}: ${entry.reason}`)
      ],
      warnings: [...warnings, ...runFailures.map((entry) => `${entry.url}: ${entry.reason}`)],
      evidence: null,
      runReport: null
    };
  }

  const finalAssembly = assemblePerformanceEvidence({
    request,
    inputs,
    generatedAt
  });
  if (!finalAssembly.ok) {
    return {
      ok: false,
      errors: finalAssembly.errors,
      warnings: [...warnings, ...baseAssembly.warnings, ...finalAssembly.warnings],
      evidence: null,
      runReport: null
    };
  }
  const evidence = finalAssembly.value;
  for (const failure of [...failures, ...runFailures.map((entry) => `${entry.url}: ${entry.reason}`)]) {
    evidence.limitations.push(`Source omitted: ${failure}`);
  }
  evidence.limitations.push(
    `Page selection: ${plan.reused.length} reused, ${plan.runs.length} scheduled, ${plan.skipped.length} skipped within the Lighthouse budget.`,
    "The page selection order is a bounded investigation policy, not a performance score."
  );
  evidence.limitations = [...new Set(evidence.limitations)];

  const validation = validatePerformanceEvidence(evidence);
  if (!validation.ok) {
    return {
      ok: false,
      errors: validation.errors,
      warnings: [...warnings, ...finalAssembly.warnings, ...validation.warnings],
      evidence: null,
      runReport: null
    };
  }

  const redactionStats = { changed: 0 };
  redactStringsDeep(evidence, redactionStats);
  if (redactionStats.changed > 0) {
    evidence.limitations.push(`Redacted ${redactionStats.changed} credential-shaped string(s) before writing evidence.`);
  }

  const plannedFamilyIds = new Set(
    [...plan.runs, ...plan.reused].map((candidate) => candidate.familyId).filter(Boolean)
  );
  const coveredFamilies = ordered.coveredFamilies.filter((familyId) => plannedFamilyIds.has(familyId));
  const omittedFamilies = ordered.coveredFamilies.filter((familyId) => !plannedFamilyIds.has(familyId));
  const selectionSummary = summarizeSelection({
    candidates: collected.candidates,
    ordered: ordered.ordered,
    runs: plan.runs,
    reused: plan.reused,
    skipped: plan.skipped,
    familyCount: ordered.familyCount,
    coveredFamilies,
    omittedFamilies
  }, discoveryResult);
  const runReport = {
    schema: "performance-light-run/1",
    runnerVersion: LIGHT_RUNNER_VERSION,
    lighthouseProviderVersion: LIGHTHOUSE_PROVIDER_VERSION,
    requestId: request.requestId,
    mode: request.mode,
    generatedAt,
    site: request.site.origin,
    selection: {
      ...selectionSummary,
      omittedFamilies,
      thresholds: ordered.thresholds,
      excluded: collected.excluded,
      rejected: collected.rejected,
      reusable: plan.reused.map((item) => ({ url: item.url, pageId: item.pageId, reason: item.reason })),
      skipped: plan.skipped.map((item) => ({ url: item.url, reason: item.reason })),
      scheduled: plan.runs.map((item) => ({ url: item.url, reasons: item.selectionReasons }))
    },
    discovery: discoveryResult
      ? { method: discoveryResult.method, urls: discoveryResult.urls, limitations: discoveryResult.limitations }
      : null,
    runs: runRecords,
    failures: runFailures,
    sourceLoadFailures: failures,
    cost: {
      browserLaunches,
      lighthouseAudits: successfulAudits,
      reusedPages: plan.reused.length,
      pagesInspected: evidence.pages.length,
      artifacts: runRecords.filter((record) => record.artifact).map((record) => record.artifact),
      networkEvidenceFetches: loaded.networkFetches,
      durationMs: Date.now() - startedAt,
      timeBudgetMs
    },
    limitations: [
      ...evidence.limitations,
      "Address pinning at Chrome connect time is not implemented; the preflight validates redirects and DNS for the page URL only.",
      ...(redactionStats.changed > 0 ? ["Credential-shaped strings were redacted in the compact evidence; raw Lighthouse JSON remains in the bounded artifact directory."] : [])
    ],
    redaction: { changed: redactionStats.changed }
  };

  const runReportRedaction = { changed: 0 };
  redactStringsDeep(runReport, runReportRedaction);
  if (runReportRedaction.changed > 0) {
    runReport.redaction = { changed: redactionStats.changed + runReportRedaction.changed };
  }

  return {
    ok: true,
    errors: [],
    warnings: [...warnings, ...baseAssembly.warnings, ...finalAssembly.warnings, ...runFailures.map((entry) => `${entry.url}: ${entry.reason}`)],
    evidence,
    runReport
  };
}

function markdownSummary(result) {
  const lines = ["## Bounded Lighthouse investigation", ""];
  if (!result.ok) {
    lines.push("**Status:** failed. Review the errors before retrying.", "");
    for (const error of result.errors) lines.push(`- ${error}`);
    return `${lines.join("\n")}\n`;
  }
  const summary = summarizePerformanceEvidence(result.evidence);
  const report = result.runReport;
  lines.push("**Status:** completed with bounded Lighthouse collection.", "");
  lines.push(`- **Site:** ${summary.site}`);
  lines.push(`- **Pages in evidence:** ${summary.pages}`);
  lines.push(`- **Lighthouse runs:** ${report.cost.lighthouseAudits} (${report.cost.browserLaunches} browser launch attempts)`);
  lines.push(`- **Reused compatible evidence:** ${report.cost.reusedPages}`);
  lines.push(`- **Candidates / ordered / skipped:** ${report.selection.candidates} / ${report.selection.ordered} / ${report.selection.skipped.length}`);
  lines.push(`- **Page families:** ${report.selection.familyCount} identified, ${report.selection.coveredFamilies.length} covered`);
  lines.push(`- **Findings:** ${summary.findings}`);
  lines.push(`- **Duration:** ${report.cost.durationMs} ms`);
  if (report.discovery) {
    lines.push(`- **Discovery:** ${report.discovery.method}, ${report.discovery.urls.length} URL(s)`);
  }
  lines.push("", "### Runs", "");
  if (report.runs.length === 0) lines.push("- No new Lighthouse runs.");
  for (const run of report.runs) {
    lines.push(`- ${run.status === "completed" ? "✅" : "❌"} ${run.url}${run.redirected ? ` → ${run.finalUrl}` : ""} — ${run.status}, ${run.durationMs} ms`);
  }
  if (report.selection.reusable.length) {
    lines.push("", "### Reused instead of rerun", "");
    for (const item of report.selection.reusable) lines.push(`- ${item.url}: ${item.reason}`);
  }
  if (report.selection.skipped.length) {
    lines.push("", "### Not audited", "");
    for (const item of report.selection.skipped) lines.push(`- ${item.url}: ${item.reason}`);
  }
  if (result.warnings.length) {
    lines.push("", "### Warnings", "");
    for (const warning of result.warnings) lines.push(`- ${warning}`);
  }
  lines.push("", "### Boundaries", "");
  for (const limitation of result.evidence.limitations) lines.push(`- ${limitation}`);
  return `${lines.join("\n")}\n`;
}

function parseArgs(argv) {
  const options = { sources: [] };
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--source") {
      const value = argv[index + 1];
      if (!value) throw new Error("--source requires <type>=<location>.");
      const eq = value.indexOf("=");
      if (eq <= 0) throw new Error("--source requires <type>=<location>.");
      options.sources.push({ type: value.slice(0, eq), location: value.slice(eq + 1) });
      index += 1;
      continue;
    }
    if (["--out", "--summary", "--run-report", "--repo-root", "--artifacts-dir", "--chrome-path", "--now"].includes(arg)) {
      const value = argv[index + 1];
      if (!value) throw new Error(`${arg} requires a value.`);
      options[arg.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
      index += 1;
      continue;
    }
    if (arg === "--allow-local") {
      options.allowLocal = true;
      continue;
    }
    if (arg.startsWith("--")) throw new Error(`Unknown option '${arg}'.`);
    positional.push(arg);
  }
  options.inputPath = positional[0] ?? null;
  return options;
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
    console.error("Usage: node scanner/run-performance-light.mjs <performance-request.json> [--source <type>=<location>] [--allow-local] [--out <file>] [--run-report <file>] [--summary <file>] [--artifacts-dir <dir>] [--chrome-path <file>]");
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

  const result = await runLightweightPerformance({
    request: requestInput,
    repoRoot: resolve(args.repoRoot ?? process.cwd()),
    sourceOverrides: args.sources,
    allowLocal: args.allowLocal ?? false,
    artifactsDir: resolve(args.artifactsDir ?? ".scan-output/performance/lighthouse"),
    generatedAt: args.now ?? new Date().toISOString(),
    chromePath: args.chromePath ? resolve(args.chromePath) : resolveChromePath()
  });

  if (args.out && result.evidence) writeFileSync(args.out, `${JSON.stringify(result.evidence, null, 2)}\n`, "utf8");
  else if (result.evidence) process.stdout.write(`${JSON.stringify(result.evidence, null, 2)}\n`);
  const runReportPath = args.runReport ?? (args.out ? `${args.out}.run.json` : null);
  if (runReportPath && result.runReport) writeFileSync(runReportPath, `${JSON.stringify(result.runReport, null, 2)}\n`, "utf8");
  if (args.summary) writeFileSync(args.summary, markdownSummary(result), "utf8");
  if (!result.ok) {
    for (const error of result.errors) console.error(`Error: ${error}`);
    process.exitCode = 1;
  } else {
    for (const warning of result.warnings ?? []) console.error(`Warning: ${warning}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
