import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import {
  buildPerformanceInvestigation,
  summarizeInvestigation
} from "./performance-investigation.mjs";
import { validatePerformanceEvidence } from "./performance-evidence.mjs";

export const INVESTIGATION_RUNNER_VERSION = "1.0.0";

function unwrapEvidence(input) {
  if (input?.schema === "performance-evidence/1") return input;
  if (input?.evidence?.schema === "performance-evidence/1") return input.evidence;
  if (input?.value?.schema === "performance-evidence/1") return input.value;
  return null;
}

/**
 * Build a cross-page investigation from an evidence file. No browser or
 * network access is performed.
 * @param {object} input
 * @returns {{ok: boolean, errors: string[], warnings: string[], value: object|null}}
 */
export function runInvestigationFromEvidence(input, { generatedAt = new Date().toISOString() } = {}) {
  const evidence = unwrapEvidence(input);
  if (!evidence) {
    return { ok: false, errors: ["Input is not a performance-evidence/1 package."], warnings: [], value: null };
  }
  const evidenceValidation = validatePerformanceEvidence(evidence);
  if (!evidenceValidation.ok) {
    return { ok: false, errors: evidenceValidation.errors, warnings: evidenceValidation.warnings, value: null };
  }
  return buildPerformanceInvestigation(evidence, { generatedAt });
}

function markdownSummary(result) {
  const lines = ["## Performance investigation", ""];
  if (!result.ok) {
    lines.push("**Status:** failed.", "");
    for (const error of result.errors) lines.push(`- ${error}`);
    return `${lines.join("\n")}\n`;
  }
  const summary = summarizeInvestigation(result.value);
  lines.push("**Status:** grouped from existing evidence. No browser or network access was used.", "");
  lines.push(`- **Site:** ${summary.site}`);
  lines.push(`- **Candidates:** ${summary.candidates}`);
  lines.push(`- **Indexed pages:** ${summary.byPage}`);
  lines.push(`- **Indexed families:** ${summary.byFamily}`);
  lines.push(`- **Indexed resources:** ${summary.byResource}`);
  lines.push(`- **Indexed component types:** ${summary.byComponentType}`);
  lines.push("", "### Ranked candidates", "");
  for (const candidate of summary.top) {
    lines.push(`#### ${candidate.rank}. ${candidate.title}`);
    lines.push("");
    lines.push(`- Kind: ${candidate.kind}`);
    lines.push(`- Evidence tier: ${candidate.evidenceTier}`);
    lines.push(`- Observed on ${candidate.pages} page(s), ${candidate.families} family(ies)`);
    lines.push(`- Observations: ${candidate.observations}`);
    lines.push(`- Candidate interventions: ${candidate.interventions}`);
    lines.push("");
  }
  if (result.value.limitations.length) {
    lines.push("### Boundaries", "");
    for (const limitation of result.value.limitations) lines.push(`- ${limitation}`);
  }
  return `${lines.join("\n")}\n`;
}

function parseArgs(argv) {
  const options = {};
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (["--out", "--summary", "--now"].includes(arg)) {
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

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 2;
    return;
  }
  if (!args.inputPath) {
    console.error("Usage: node scanner/run-performance-investigation.mjs <performance-evidence.json> [--out <file>] [--summary <file>] [--now <iso>]");
    process.exitCode = 2;
    return;
  }
  let input;
  try {
    input = JSON.parse(readFileSync(args.inputPath, "utf8"));
  } catch (error) {
    console.error(`Could not read evidence JSON: ${error.message}`);
    process.exitCode = 2;
    return;
  }
  const result = runInvestigationFromEvidence(input, {
    generatedAt: args.now ?? new Date().toISOString()
  });
  if (result.value) {
    if (args.out) writeFileSync(args.out, `${JSON.stringify(result.value, null, 2)}\n`, "utf8");
    else process.stdout.write(`${JSON.stringify(result.value, null, 2)}\n`);
  }
  if (args.summary) writeFileSync(args.summary, markdownSummary(result), "utf8");
  if (!result.ok) {
    for (const error of result.errors) console.error(`Error: ${error}`);
    process.exitCode = 1;
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
