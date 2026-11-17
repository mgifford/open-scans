import { readFileSync, writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";
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
  selectSitespeedPages
} from "./performance-page-selection.mjs";
import {
  SITESPEED_ADAPTER_VERSION,
  SITESPEED_PROVIDER_VERSION,
  SITESPEED_RUNS,
  SITESPEED_VERSION,
  SitespeedRunError,
  digestSitespeedOutput,
  normalizeSitespeedOutput,
  runSitespeed,
  summarizeSitespeedRun
} from "./performance-sitespeed.mjs";
import { parsePerformanceIssue, validatePerformanceRequest } from "./parse-performance-issue.mjs";
import { loadEvidenceSource, preflightPublicUrl } from "./performance-source-loader.mjs";
import { redactStringsDeep } from "./redact-secrets.mjs";

export const DEEP_RUNNER_VERSION = "1.0.0";

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
      source: override ? { ...source, location: override.location, locationKind: override.locationKind } : source,
      override
    });
  }
  for (const override of overrides) {
    if (consumed.has(override)) continue;
    planned.push({ source: { type: override.type, location: override.location, locationKind: override.locationKind }, override });
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

function sameSite(hostname, siteHost) {
  const host = String(hostname ?? "").toLowerCase().replace(/^www\./, "");
  const base = String(siteHost ?? "").toLowerCase().replace(/^www\./, "");
  return host === base || host.endsWith(`.${base}`);
}

/**
 * Run a targeted Sitespeed deep investigation. It never runs over the full
 * discovery crawl and never shares a Playwright/Browsertime session.
 * @param {object} input
 * @returns {Promise<object>}
 */
export async function runDeepInvestigation({
  request: requestInput,
  repoRoot = process.cwd(),
  sourceOverrides = [],
  allowLocal = false,
  artifactsDir = resolve(".scan-output/performance/sitespeed"),
  generatedAt = new Date().toISOString(),
  sitespeedRunner = runSitespeed,
  discovery = discoverPerformanceUrls,
  preflightUrl = preflightPublicUrl,
  runs = SITESPEED_RUNS
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
  if (request.mode !== "deep") {
    return {
      ok: false,
      errors: [`PR 4 supports deep mode only. This request mode is '${request.mode}'.`],
      warnings: [],
      evidence: null,
      runReport: null
    };
  }

  const warnings = [];
  const failures = [];
  const loaded = await loadReusableInputs({ request, repoRoot, sourceOverrides, allowLocal, generatedAt });
  failures.push(...loaded.failures);
  const baseAssembly = assemblePerformanceEvidence({ request, inputs: loaded.inputs, generatedAt });
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
      discoveryResult = await discovery({ request, maxUrls: request.limits.maxPagesToInspect, timeoutMs: 30_000 });
    } catch (error) {
      discoveryResult = { urls: [], method: "failed", limitations: [`Bounded discovery failed: ${error.message}`] };
      failures.push(`Discovery failed: ${error.message}`);
    }
  }
  const discoveredUrls = discoveryResult?.urls ?? [];
  const collected = collectPerformanceCandidates({ request, evidence: baseEvidence, discoveredUrls });
  const ordered = orderPerformanceCandidates({ request, evidence: baseEvidence, candidates: collected.candidates });
  const selection = selectSitespeedPages({ request, evidence: baseEvidence, orderedCandidates: ordered.ordered });

  if (selection.selected.length === 0) {
    return {
      ok: false,
      errors: ["No approved page could be selected for Sitespeed."],
      warnings: [...warnings, ...baseAssembly.warnings],
      evidence: null,
      runReport: null
    };
  }

  const approved = [];
  const preflightFailures = [];
  for (const candidate of selection.selected) {
    try {
      const preflight = await preflightUrl(candidate.url);
      const parsed = new URL(preflight.finalUrl);
      if (!sameSite(parsed.hostname, request.site.host)) {
        preflightFailures.push({ url: candidate.url, reason: `Redirected outside the requested site to '${parsed.hostname}'.` });
        continue;
      }
      approved.push({ candidate, finalUrl: preflight.finalUrl });
    } catch (error) {
      preflightFailures.push({ url: candidate.url, reason: error.message });
    }
  }
  const uniqueApproved = [];
  const seen = new Set();
  for (const entry of approved) {
    const normalizedUrl = normalizeUrl(entry.finalUrl);
    if (seen.has(normalizedUrl)) continue;
    seen.add(normalizedUrl);
    uniqueApproved.push({ ...entry, normalizedUrl });
  }
  if (uniqueApproved.length === 0) {
    return {
      ok: false,
      errors: ["Every selected page failed execution-time validation.", ...preflightFailures.map((failure) => `${failure.url}: ${failure.reason}`)],
      warnings: [...warnings, ...baseAssembly.warnings],
      evidence: null,
      runReport: null
    };
  }

  const pageIdByUrl = new Map(uniqueApproved.map((entry) => [entry.normalizedUrl, entry.candidate.pageId]));
  const inputs = [...loaded.inputs];
  let runResult = null;
  let sitespeedFailure = null;
  let partial = false;
  try {
    runResult = await sitespeedRunner({
      urls: uniqueApproved.map((entry) => entry.finalUrl),
      request,
      artifactsDir,
      runs
    });
  } catch (error) {
    sitespeedFailure = error instanceof SitespeedRunError ? error : new SitespeedRunError(String(error));
    const outputDir = sitespeedFailure.details?.outputDir;
    const jsonFiles = sitespeedFailure.details?.jsonFiles ?? [];
    if (outputDir && jsonFiles.length > 0) {
      partial = true;
      runResult = {
        outputDir,
        relativeDir: relative(artifactsDir, outputDir),
        jsonFiles,
        durationMs: sitespeedFailure.details?.durationMs ?? null,
        imageDigest: sitespeedFailure.details?.imageDigest ?? null,
        runs,
        urls: uniqueApproved.map((entry) => entry.finalUrl)
      };
    } else {
      failures.push(`Sitespeed: ${sitespeedFailure.message}`);
    }
  }

  let sitespeedSummary = null;
  if (runResult) {
    const digest = digestSitespeedOutput(runResult.jsonFiles);
    const source = createSourceRecord({
      type: "sitespeed",
      adapter: "sitespeed",
      adapterVersion: SITESPEED_ADAPTER_VERSION,
      tool: "sitespeed",
      toolVersion: SITESPEED_VERSION,
      location: `sitespeed/${runResult.relativeDir}`.replace(/\/\.\//g, "/"),
      locationKind: "artifact",
      collectedAt: null,
      importedAt: generatedAt,
      contentDigest: digest,
      schemaVersion: `analysisstorer/${SITESPEED_VERSION}`,
      limitations: [
        "Raw Sitespeed artifacts remain in the bounded artifact directory, not Git history.",
        "Sitespeed/Browsertime is a separate browser process; it is not shared with Playwright.",
        ...(partial ? ["Sitespeed exited non-zero; partial analysisstorer output was normalized."] : [])
      ]
    });
    try {
      const fragment = normalizeSitespeedOutput({
        outputDir: runResult.outputDir,
        relativeDir: source.location,
        source,
        request,
        pageIdByUrl
      });
      inputs.push({ source, fragment });
      sitespeedSummary = summarizeSitespeedRun(runResult);
      if (partial) {
        warnings.push(`Sitespeed exited non-zero but ${fragment.pages.length} page result(s) were usable.`);
        failures.push(`Sitespeed run incomplete: ${sitespeedFailure.message}`);
      }
    } catch (error) {
      failures.push(`Sitespeed output could not be normalized: ${error.message}`);
      if (!partial) {
        // No usable output and no base evidence means the investigation failed.
      }
    }
  }

  if (inputs.length === 0) {
    return {
      ok: false,
      errors: ["No evidence could be produced: Sitespeed produced no usable results and no reusable source was loaded.", ...failures],
      warnings,
      evidence: null,
      runReport: null
    };
  }

  const finalAssembly = assemblePerformanceEvidence({ request, inputs, generatedAt });
  if (!finalAssembly.ok) {
    return { ok: false, errors: finalAssembly.errors, warnings: [...warnings, ...finalAssembly.warnings], evidence: null, runReport: null };
  }
  const evidence = finalAssembly.value;
  for (const failure of failures) evidence.limitations.push(failure);
  evidence.limitations.push(
    `Deep shortlist: ${selection.selected.length} page(s) selected from ${selection.cap}-page initial cap; ${selection.skipped.length} skipped.`,
    "Sitespeed metrics are Chromium/Browsertime lab evidence and are kept separate from Lighthouse and Firefox energy."
  );
  evidence.limitations = [...new Set(evidence.limitations)];

  const validation = validatePerformanceEvidence(evidence);
  if (!validation.ok) {
    return { ok: false, errors: validation.errors, warnings: [...warnings, ...validation.warnings], evidence: null, runReport: null };
  }

  const redactionStats = { changed: 0 };
  redactStringsDeep(evidence, redactionStats);
  if (redactionStats.changed > 0) evidence.limitations.push(`Redacted ${redactionStats.changed} credential-shaped string(s).`);

  const co2Finding = evidence.findings.find((finding) => finding.kind === "modelled-emissions" && finding.metric);
  const co2LibraryVersion = /CO2\.js\s+([^\s]+)/.exec(co2Finding?.metric?.method ?? "")?.[1] ?? "unknown";
  const runReport = {
    schema: "performance-deep-run/1",
    runnerVersion: DEEP_RUNNER_VERSION,
    sitespeedProviderVersion: SITESPEED_PROVIDER_VERSION,
    requestId: request.requestId,
    mode: request.mode,
    generatedAt,
    site: request.site.origin,
    status: sitespeedSummary && !partial ? "completed" : sitespeedSummary && partial ? "partial" : "no-deep-evidence",
    selection: {
      candidates: collected.candidates.length,
      ordered: ordered.ordered.length,
      selected: selection.selected.map((candidate) => ({
        url: candidate.url,
        pageId: candidate.pageId,
        familyId: candidate.familyId,
        findingCount: candidate.findingCount,
        observedFindingCount: candidate.observedFindingCount,
        reasons: candidate.sitespeedReasons
      })),
      skipped: selection.skipped,
      cap: selection.cap,
      requested: selection.requested,
      capped: selection.capped,
      familyCount: ordered.familyCount,
      coveredFamilies: ordered.coveredFamilies,
      findingIndex: selection.findingIndex,
      excluded: collected.excluded,
      rejected: collected.rejected
    },
    discovery: discoveryResult
      ? { method: discoveryResult.method, urls: discoveryResult.urls, limitations: discoveryResult.limitations }
      : null,
    preflightFailures,
    run: sitespeedSummary
      ? {
        image: sitespeedSummary.image,
        imageDigest: sitespeedSummary.imageDigest,
        urls: sitespeedSummary.urls,
        iterations: sitespeedSummary.runs,
        jsonFiles: sitespeedSummary.jsonFiles,
        durationMs: sitespeedSummary.durationMs,
        partial
      }
      : null,
    sitespeedFailure: sitespeedFailure ? sitespeedFailure.message : null,
    sourceLoadFailures: failures.filter((failure) => !failure.startsWith("Sitespeed")),
    cost: {
      dockerRuns: runResult ? 1 : 0,
      sitespeedPageRuns: uniqueApproved.length * runs,
      browserLaunchesExpected: uniqueApproved.length * runs,
      pagesInspected: evidence.pages.length,
      networkEvidenceFetches: loaded.networkFetches,
      durationMs: Date.now() - startedAt,
      artifacts: runResult?.relativeDir ?? null
    },
    co2: co2Finding ? {
      model: "swd",
      modelVersion: 4,
      libraryVersion: co2LibraryVersion,
      hosting: "grid-only (green-hosting matching disabled)",
      boundary: "modelled-transfer",
      unit: "gCO2e",
      note: "Imported from Sitespeed's Sustainable Web plugin; not recalculated and not observed client energy."
    } : null,
    lighthouseBudgetNotRun: request.limits.maxLighthouseAudits > 0
      ? {
        budget: request.limits.maxLighthouseAudits,
        reason: "The PR 4 deep runner is Sitespeed-only. Run the light runner for Lighthouse evidence; importing a generated Lighthouse evidence package into the deep runner is deferred until the PR 5 merge layer."
      }
      : null,
    limitations: [
      ...evidence.limitations,
      "Sitespeed/Browsertime runs in a separate Docker browser process; no live Playwright session is shared.",
      "CO2.js figures from the Sustainable Web plugin are modelled transfer emissions, not measured client energy.",
      "The deep runner does not execute Firefox physical-energy experiments."
    ],
    redaction: { changed: redactionStats.changed }
  };
  const reportRedaction = { changed: 0 };
  redactStringsDeep(runReport, reportRedaction);
  if (reportRedaction.changed > 0) runReport.redaction.changed += reportRedaction.changed;

  return {
    ok: true,
    errors: [],
    warnings: [...warnings, ...baseAssembly.warnings, ...finalAssembly.warnings],
    evidence,
    runReport
  };
}

function markdownSummary(result) {
  const lines = ["## Targeted Sitespeed deep investigation", ""];
  if (!result.ok) {
    lines.push("**Status:** failed.", "");
    for (const error of result.errors) lines.push(`- ${error}`);
    return `${lines.join("\n")}\n`;
  }
  const summary = summarizePerformanceEvidence(result.evidence);
  const report = result.runReport;
  lines.push(`**Status:** ${report.status}.`, "");
  lines.push(`- **Site:** ${summary.site}`);
  lines.push(`- **Pages in evidence:** ${summary.pages}`);
  lines.push(`- **Sitespeed shortlist:** ${report.selection.selected.length} selected / ${report.selection.skipped.length} skipped`);
  lines.push(`- **Iterations per page:** ${report.run?.iterations ?? "not run"}`);
  lines.push(`- **Docker image:** ${report.run?.image ?? "not run"}`);
  lines.push(`- **Docker runs:** ${report.cost.dockerRuns}`);
  lines.push(`- **Expected browser launches:** ${report.cost.browserLaunchesExpected}`);
  lines.push(`- **Duration:** ${report.cost.durationMs} ms`);
  lines.push("", "### Selected pages", "");
  for (const item of report.selection.selected) {
    lines.push(`- ${item.url} — ${item.reasons.join("; ")}`);
  }
  if (report.selection.skipped.length) {
    lines.push("", "### Not selected", "");
    for (const item of report.selection.skipped) lines.push(`- ${item.url}: ${item.reason}`);
  }
  if (report.preflightFailures.length) {
    lines.push("", "### Preflight failures", "");
    for (const item of report.preflightFailures) lines.push(`- ${item.url}: ${item.reason}`);
  }
  if (report.sitespeedFailure) {
    lines.push("", "### Sitespeed failure", "");
    lines.push(`- ${report.sitespeedFailure}`);
  }
  if (report.lighthouseBudgetNotRun) {
    lines.push("", "### Lighthouse budget not run", "");
    lines.push(`- ${report.lighthouseBudgetNotRun.reason}`);
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
    if (["--out", "--summary", "--run-report", "--repo-root", "--artifacts-dir", "--now"].includes(arg)) {
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
    console.error("Usage: node scanner/run-performance-deep.mjs <performance-request.json> [--source <type>=<location>] [--allow-local] [--out <file>] [--run-report <file>] [--summary <file>] [--artifacts-dir <dir>]");
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

  const result = await runDeepInvestigation({
    request: requestInput,
    repoRoot: resolve(args.repoRoot ?? process.cwd()),
    sourceOverrides: args.sources,
    allowLocal: args.allowLocal ?? false,
    artifactsDir: resolve(args.artifactsDir ?? ".scan-output/performance/sitespeed"),
    generatedAt: args.now ?? new Date().toISOString()
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
