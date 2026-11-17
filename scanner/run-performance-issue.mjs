import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parsePerformanceIssue } from "./parse-performance-issue.mjs";
import { runReuseInvestigation } from "./run-performance-reuse.mjs";
import { runLightweightPerformance } from "./run-performance-light.mjs";
import { runDeepInvestigation } from "./run-performance-deep.mjs";
import { summarizePerformanceEvidence } from "./performance-evidence.mjs";
import { redactStringsDeep } from "./redact-secrets.mjs";

export const PERFORMANCE_ISSUE_RUNNER_VERSION = "1.0.0";

function unwrapRequest(input) {
  if (input?.schemaVersion === "performance-request/1") return input;
  if (input?.ok === true && input.value?.schemaVersion === "performance-request/1") return input.value;
  if (input?.issue) {
    const parsed = parsePerformanceIssue(input);
    return parsed.ok ? parsed.value : null;
  }
  return null;
}

function summaryFor({ request, mode, evidence, runReport, stats, error }) {
  const lines = ["## Performance investigation", ""];
  if (error) {
    lines.push("**Status:** failed.", "", `- ${error}`, "", "No performance report was published.");
    return `${lines.join("\n")}\n`;
  }
  const summary = summarizePerformanceEvidence(evidence);
  lines.push(`**Status:** completed (${mode} mode).`, "");
  lines.push(`- **Site:** ${summary.site}`);
  lines.push(`- **Pages:** ${summary.pages}`);
  lines.push(`- **Findings:** ${summary.findings}`);
  lines.push(`- **Sources:** ${summary.sources.length}`);
  if (runReport?.cost) {
    lines.push(`- **Browser launches:** ${runReport.cost.browserLaunches}`);
    lines.push(`- **Lighthouse audits:** ${runReport.cost.lighthouseAudits}`);
    lines.push(`- **Docker runs:** ${runReport.cost.dockerRuns ?? 0}`);
    lines.push(`- **Duration:** ${runReport.cost.durationMs} ms`);
  }
  if (stats) {
    lines.push(`- **Source count:** ${stats.sourceCount}`);
    lines.push(`- **Pages inspected:** ${stats.pagesInspected}`);
    lines.push(`- **Duration:** ${stats.durationMs} ms`);
  }
  lines.push("", "### Boundaries", "");
  for (const limitation of evidence.limitations) lines.push(`- ${limitation}`);
  return `${lines.join("\n")}\n`;
}

/**
 * Execute a validated PERF: request with the appropriate bounded runner.
 * This function is injectable for tests; no browser is launched unless a
 * runner is invoked.
 *
 * @param {object} input - performance-request/1, parser result, or issue event
 * @param {object} [options]
 * @returns {Promise<object>}
 */
export async function runPerformanceIssue(input, {
  repoRoot = process.cwd(),
  outputDir = resolve(".scan-output/performance"),
  artifactsDir = resolve(".scan-output/performance/artifacts"),
  generatedAt = new Date().toISOString(),
  reuseRunner = runReuseInvestigation,
  lightRunner = runLightweightPerformance,
  deepRunner = runDeepInvestigation
} = {}) {
  const request = unwrapRequest(input);
  if (!request) {
    return {
      ok: false,
      errors: ["Input is not a valid performance-request/1 or PERF: issue event."],
      request: null,
      evidence: null,
      runReport: null,
      stats: null,
      summary: null
    };
  }
  mkdirSync(outputDir, { recursive: true });
  mkdirSync(artifactsDir, { recursive: true });
  let result;
  try {
    if (request.mode === "reuse") {
      result = await reuseRunner({
        request,
        repoRoot,
        sourceOverrides: request.evidenceSources ?? [],
        allowLocal: false,
        generatedAt
      });
    } else if (request.mode === "light") {
      result = await lightRunner({
        request,
        repoRoot,
        artifactsDir,
        generatedAt
      });
    } else if (request.mode === "deep") {
      result = await deepRunner({
        request,
        repoRoot,
        artifactsDir,
        generatedAt
      });
    } else {
      result = {
        ok: false,
        errors: [`Mode '${request.mode}' is not executable yet. Use reuse, light or deep.`],
        warnings: [],
        evidence: null,
        runReport: null,
        stats: null
      };
    }
  } catch (error) {
    result = {
      ok: false,
      errors: [error instanceof Error ? error.message : String(error)],
      warnings: [],
      evidence: null,
      runReport: null,
      stats: null
    };
  }

  const evidence = result.evidence ?? null;
  const runReport = result.runReport ?? null;
  const stats = result.stats ?? null;
  const error = result.ok ? null : (result.errors ?? []).join(" ");
  const summary = summaryFor({ request, mode: request.mode, evidence, runReport, stats, error });

  const resultObject = {
    schema: "performance-issue-run/1",
    runnerVersion: PERFORMANCE_ISSUE_RUNNER_VERSION,
    requestId: request.requestId,
    mode: request.mode,
    ok: result.ok === true,
    errors: result.errors ?? [],
    warnings: result.warnings ?? [],
    evidencePath: evidence ? "performance-evidence.json" : null,
    runReportPath: runReport ? "performance-run.json" : null,
    summaryPath: "performance-summary.md"
  };
  const redaction = { changed: 0 };
  redactStringsDeep(resultObject, redaction);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "performance-result.json"), `${JSON.stringify(resultObject, null, 2)}\n`, "utf8");
  writeFileSync(join(outputDir, "performance-summary.md"), summary, "utf8");
  if (evidence) writeFileSync(join(outputDir, "performance-evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
  if (runReport) writeFileSync(join(outputDir, "performance-run.json"), `${JSON.stringify(runReport, null, 2)}\n`, "utf8");

  return {
    ok: result.ok === true,
    errors: result.errors ?? [],
    warnings: result.warnings ?? [],
    request,
    evidence,
    runReport,
    stats,
    summary,
    result: resultObject,
    outputDir
  };
}

function parseArgs(argv) {
  const options = {};
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (["--repo-root", "--out", "--artifacts-dir", "--now"].includes(arg)) {
      const value = argv[index + 1];
      if (!value) throw new Error(`${arg} requires a value.`);
      options[arg.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
      index += 1;
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
    console.error("Usage: node scanner/run-performance-issue.mjs <request-or-issue.json> [--out <dir>] [--artifacts-dir <dir>] [--repo-root <dir>]");
    process.exitCode = 2;
    return;
  }
  let input;
  try {
    input = JSON.parse(readFileSync(args.inputPath, "utf8"));
  } catch (error) {
    console.error(`Could not read performance input: ${error.message}`);
    process.exitCode = 2;
    return;
  }
  const result = await runPerformanceIssue(input, {
    repoRoot: resolve(args.repoRoot ?? process.cwd()),
    outputDir: resolve(args.out ?? ".scan-output/performance"),
    artifactsDir: resolve(args.artifactsDir ?? ".scan-output/performance/artifacts"),
    generatedAt: args.now ?? new Date().toISOString()
  });
  if (!result.ok) {
    for (const error of result.errors) console.error(`Error: ${error}`);
    process.exitCode = 1;
  } else {
    for (const warning of result.warnings) console.error(`Warning: ${warning}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
