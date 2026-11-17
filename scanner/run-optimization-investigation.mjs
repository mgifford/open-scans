import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";
import {
  OPTIMIZATION_REQUEST_SCHEMA_VERSION,
  buildOptimizationInvestigation,
  summarizeOptimizationInvestigation,
  validateOptimizationRequest
} from "./optimization-investigation.mjs";

export const OPTIMIZATION_RUNNER_VERSION = "1.0.0";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeMarkdown(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function buildRequest({ requestFile, scenarios, reviewer, notes }) {
  const request = requestFile
    ? readJson(requestFile)
    : { schema: OPTIMIZATION_REQUEST_SCHEMA_VERSION, scenarios: [] };
  if (!request.scenarios) request.scenarios = [];
  for (const kind of scenarios) request.scenarios.push({ kind });
  if (reviewer) request.reviewer = reviewer;
  if (notes) request.notes = notes;
  return request;
}

function concernRows(scenario) {
  return scenario.concerns.map((concern) => ({
    id: concern.id,
    title: concern.title,
    automated: concern.automated ? "yes" : "no",
    status: concern.statusLabel,
    findings: concern.findings.length,
    manualChecks: concern.manualChecks.length
  }));
}

export function formatOptimizationMarkdown(value) {
  if (!value || value.schema !== "optimization-investigation/1") return "# Optimization accessibility investigation\n\n_No investigation data._\n";
  const lines = [
    "# Optimization accessibility investigation",
    "",
    "> **Human review required.** No automated result in this report establishes WCAG conformance or functional equivalence.",
    "",
    "## Summary",
    "",
    `- Scenarios: ${value.summary.scenarios}`,
    `- Concerns: ${value.summary.concerns}`,
    `- New automated findings: ${value.summary.newFindings}`,
    `- Persistent automated findings: ${value.summary.persistentFindings}`,
    `- Changed automated findings: ${value.summary.changedFindings}`,
    `- No longer observed (not fixed): ${value.summary.notObservedFindings}`,
    `- Not evaluated: ${value.summary.notEvaluatedFindings}`,
    `- Manual verification tasks: ${value.summary.manualVerificationTasks}`,
    `- Conformance claimed: ${value.summary.conformanceClaim ? "yes" : "no"}`,
    `- Functional equivalence claimed: ${value.summary.functionalEquivalenceClaim ? "yes" : "no"}`,
    "",
    "## Comparison conditions",
    "",
    `- Baseline: ${value.comparison.baseline.scanTitle ?? "untitled"} (${value.comparison.baseline.scannedAt ?? "date not recorded"})`,
    `- Comparison: ${value.comparison.comparison.scanTitle ?? "untitled"} (${value.comparison.comparison.scannedAt ?? "date not recorded"})`,
    `- Conditions compatible: ${value.comparison.conditions.compatible ? "yes" : "no"}`,
    `- Baseline engines: ${value.comparison.engines.baseline.join(", ") || "none recorded"}`,
    `- Comparison engines: ${value.comparison.engines.comparison.join(", ") || "none recorded"}`,
    ""
  ];
  for (const scenario of value.scenarios) {
    lines.push(`## ${scenario.label}`, "", scenario.description, "");
    if (scenario.components.length) lines.push(`- Components or resources named: ${scenario.components.join(", ")}`);
    if (scenario.pages.length) lines.push(`- Pages named: ${scenario.pages.join(", ")}`);
    if (scenario.notes) lines.push(`- Notes: ${scenario.notes}`);
    lines.push("", "| Concern | Automated | Status | Findings | Manual checks |", "| :--- | :--- | :--- | :--- | :--- |");
    for (const row of concernRows(scenario)) {
      lines.push(`| ${escapeMarkdown(row.title)} | ${row.automated} | ${escapeMarkdown(row.status)} | ${row.findings} | ${row.manualChecks} |`);
    }
    lines.push("");
    for (const concern of scenario.concerns) {
      lines.push(`### ${concern.title}`, "", concern.description, "");
      lines.push(`**Status:** ${concern.statusLabel}`, "");
      if (concern.qualification) lines.push(`> ${concern.qualification}`, "");
      if (concern.findings.length) {
        lines.push("| Page | Engine | Rule | Finding | Confidence |", "| :--- | :--- | :--- | :--- | :--- |");
        for (const finding of concern.findings) {
          lines.push(`| ${escapeMarkdown(finding.page.comparisonUrl ?? finding.page.baselineUrl)} | ${escapeMarkdown(finding.engineLabel)} | ${escapeMarkdown(finding.ruleId)} | ${escapeMarkdown(finding.title)} | ${finding.confidence} |`);
        }
        lines.push("");
      } else {
        lines.push("_No matching automated finding. This is not a pass._", "");
      }
      lines.push("**Manual checks:**", "");
      for (const task of concern.manualChecks) lines.push(`- ${task}`);
      lines.push("");
    }
  }
  lines.push("## Coverage gaps", "");
  if (!value.comparison.coverageGaps?.length) lines.push("_None recorded._");
  for (const gap of value.comparison.coverageGaps ?? []) {
    lines.push(`- ${escapeMarkdown(gap.kind)}: ${escapeMarkdown(gap.url ?? gap.logicalPageId ?? "")} ${escapeMarkdown(gap.reason ?? gap.baselineError ?? gap.comparisonError ?? "")}`);
  }
  lines.push("", "## Limitations", "");
  for (const limitation of value.limitations) lines.push(`- ${limitation}`);
  return `${lines.join("\n")}\n`;
}

export function formatOptimizationHtml(value) {
  if (!value || value.schema !== "optimization-investigation/1") {
    return "<!doctype html><html lang=\"en\"><title>Optimization accessibility investigation</title><body><p>No investigation data.</p></body></html>";
  }
  const scenarioSections = value.scenarios.map((scenario) => {
    const concernRows = scenario.concerns.map((concern) => `<tr><th scope="row">${escapeHtml(concern.title)}</th><td>${concern.automated ? "yes" : "no"}</td><td>${escapeHtml(concern.statusLabel)}</td><td>${concern.findings.length}</td><td>${concern.manualChecks.length}</td></tr>`).join("");
    const concernSections = scenario.concerns.map((concern) => {
      const findings = concern.findings.length
        ? `<table><caption>Relevant automated findings for ${escapeHtml(concern.title)}</caption><thead><tr><th scope="col">Page</th><th scope="col">Engine</th><th scope="col">Rule</th><th scope="col">Finding</th><th scope="col">Confidence</th></tr></thead><tbody>${concern.findings.map((finding) => `<tr><th scope="row">${escapeHtml(finding.page.comparisonUrl ?? finding.page.baselineUrl)}</th><td>${escapeHtml(finding.engineLabel)}</td><td>${escapeHtml(finding.ruleId)}</td><td>${escapeHtml(finding.title)}</td><td>${escapeHtml(finding.confidence)}</td></tr>`).join("")}</tbody></table>`
        : "<p><strong>No matching automated finding.</strong> This is not a pass.</p>";
      return `<section aria-labelledby="concern-${escapeHtml(scenario.kind)}-${escapeHtml(concern.id)}"><h3 id="concern-${escapeHtml(scenario.kind)}-${escapeHtml(concern.id)}">${escapeHtml(concern.title)}</h3><p>${escapeHtml(concern.description)}</p><p><strong>Status:</strong> ${escapeHtml(concern.statusLabel)}</p>${concern.qualification ? `<p class="notice">${escapeHtml(concern.qualification)}</p>` : ""}${findings}<h4>Manual checks</h4><ul>${concern.manualChecks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul></section>`;
    }).join("");
    return `<section aria-labelledby="scenario-${escapeHtml(scenario.kind)}"><h2 id="scenario-${escapeHtml(scenario.kind)}">${escapeHtml(scenario.label)}</h2><p>${escapeHtml(scenario.description)}</p>${scenario.components.length ? `<p><strong>Components or resources named:</strong> ${escapeHtml(scenario.components.join(", "))}</p>` : ""}${scenario.pages.length ? `<p><strong>Pages named:</strong> ${escapeHtml(scenario.pages.join(", "))}</p>` : ""}${scenario.notes ? `<p><strong>Notes:</strong> ${escapeHtml(scenario.notes)}</p>` : ""}<table><caption>Accessibility concerns for ${escapeHtml(scenario.label)}</caption><thead><tr><th scope="col">Concern</th><th scope="col">Automated</th><th scope="col">Status</th><th scope="col">Findings</th><th scope="col">Manual checks</th></tr></thead><tbody>${concernRows}</tbody></table>${concernSections}</section>`;
  }).join("");
  const gaps = value.comparison.coverageGaps?.length
    ? `<ul>${value.comparison.coverageGaps.map((gap) => `<li>${escapeHtml(gap.kind)}: ${escapeHtml(gap.url ?? gap.logicalPageId ?? "")} ${escapeHtml(gap.reason ?? gap.baselineError ?? gap.comparisonError ?? "")}</li>`).join("")}</ul>`
    : "<p>None recorded.</p>";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>Optimization accessibility investigation</title>
<style>
:root{color-scheme:light dark;--bg:#fff;--fg:#1f2328;--muted:#57606a;--border:#d0d7de;--accent:#0969da;--surface:#f6f8fa}
@media (prefers-color-scheme:dark){:root{--bg:#0d1117;--fg:#e6edf3;--muted:#8b949e;--border:#30363d;--accent:#58a6ff;--surface:#161b22}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.5 system-ui,sans-serif}
.skip-link{position:absolute;left:-999px;top:0;background:var(--surface);color:var(--fg);padding:.75rem;z-index:10}.skip-link:focus{left:0}
header,main{max-width:70rem;margin:0 auto;padding:1rem}header{border-bottom:1px solid var(--border)}h1,h2,h3,h4{line-height:1.2}
table{width:100%;border-collapse:collapse;margin:1rem 0}caption{text-align:left;font-weight:700;margin-bottom:.5rem}
th,td{border:1px solid var(--border);padding:.5rem;text-align:left;vertical-align:top}th{background:var(--surface)}
.notice{border-left:4px solid var(--accent);padding:.75rem 1rem;background:var(--surface)}a{color:var(--accent)}
@media (forced-colors:active){th,td{border:1px solid CanvasText}.notice{border:2px solid CanvasText}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
</style>
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header><h1>Optimization accessibility investigation</h1><p class="notice"><strong>Human review required.</strong> Passing automated checks does not establish WCAG conformance or functional equivalence. No energy, carbon or performance saving is claimed.</p></header>
<main id="main-content">
<section aria-labelledby="summary-heading"><h2 id="summary-heading">Summary</h2><ul>
<li>Scenarios: ${value.summary.scenarios}</li>
<li>Concerns: ${value.summary.concerns}</li>
<li>New automated findings: ${value.summary.newFindings}</li>
<li>Persistent automated findings: ${value.summary.persistentFindings}</li>
<li>Changed automated findings: ${value.summary.changedFindings}</li>
<li>No longer observed (not fixed): ${value.summary.notObservedFindings}</li>
<li>Not evaluated: ${value.summary.notEvaluatedFindings}</li>
<li>Manual verification tasks: ${value.summary.manualVerificationTasks}</li>
<li>Conformance claimed: no</li>
<li>Functional equivalence claimed: no</li>
</ul></section>
<section aria-labelledby="conditions-heading"><h2 id="conditions-heading">Comparison conditions</h2><table><caption>Baseline and comparison conditions</caption><thead><tr><th scope="col">Field</th><th scope="col">Baseline</th><th scope="col">Comparison</th></tr></thead><tbody>
<tr><th scope="row">Scan</th><td>${escapeHtml(value.comparison.baseline.scanId)}</td><td>${escapeHtml(value.comparison.comparison.scanId)}</td></tr>
<tr><th scope="row">Release</th><td>${escapeHtml(value.comparison.baseline.release ?? "not supplied")}</td><td>${escapeHtml(value.comparison.comparison.release ?? "not supplied")}</td></tr>
<tr><th scope="row">Conditions compatible</th><td colspan="2">${value.comparison.conditions.compatible ? "yes" : "no"}</td></tr>
<tr><th scope="row">Engines</th><td>${escapeHtml(value.comparison.engines.baseline.join(", "))}</td><td>${escapeHtml(value.comparison.engines.comparison.join(", "))}</td></tr>
</tbody></table></section>
${scenarioSections}
<section aria-labelledby="gaps-heading"><h2 id="gaps-heading">Coverage gaps</h2>${gaps}</section>
<section aria-labelledby="limitations-heading"><h2 id="limitations-heading">Limitations</h2><ul>${value.limitations.map((limitation) => `<li>${escapeHtml(limitation)}</li>`).join("")}</ul></section>
</main>
</body>
</html>
`;
}

function parseArgs(argv) {
  const options = { scenarios: [] };
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (["--scenario", "--request", "--out", "--summary", "--html", "--reviewer", "--notes", "--now"].includes(arg)) {
      const value = argv[index + 1];
      if (!value) throw new Error(`${arg} requires a value.`);
      index += 1;
      if (arg === "--scenario") options.scenarios.push(value);
      else options[arg.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
      continue;
    }
    if (arg.startsWith("--")) throw new Error(`Unknown option '${arg}'.`);
    positional.push(arg);
  }
  if (positional.length !== 1) throw new Error("Usage: node scanner/run-optimization-investigation.mjs <comparison.json> [--scenario <kind>] [--request <json>] [options]");
  options.comparisonPath = positional[0];
  return options;
}

function writeOutput(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 2;
    return;
  }
  let comparison;
  try {
    comparison = JSON.parse(readFileSync(args.comparisonPath, "utf8"));
  } catch (error) {
    console.error(`Could not read comparison JSON: ${error.message}`);
    process.exitCode = 2;
    return;
  }
  let request;
  try {
    request = buildRequest({
      requestFile: args.request,
      scenarios: args.scenarios,
      reviewer: args.reviewer,
      notes: args.notes
    });
  } catch (error) {
    console.error(`Could not read optimization request: ${error.message}`);
    process.exitCode = 2;
    return;
  }
  const validation = validateOptimizationRequest(request);
  if (!validation.ok) {
    for (const error of validation.errors) console.error(`Error: ${error}`);
    process.exitCode = 1;
    return;
  }
  const result = buildOptimizationInvestigation(comparison, request, {
    generatedAt: args.now ?? new Date().toISOString()
  });
  if (!result.ok) {
    for (const error of result.errors) console.error(`Error: ${error}`);
    process.exitCode = 1;
    return;
  }
  if (args.out) writeOutput(args.out, `${JSON.stringify(result.value, null, 2)}\n`);
  else process.stdout.write(`${JSON.stringify(result.value, null, 2)}\n`);
  if (args.summary) writeOutput(args.summary, formatOptimizationMarkdown(result.value));
  if (args.html) writeOutput(args.html, formatOptimizationHtml(result.value));
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
