#!/usr/bin/env node
/**
 * Reprocess a saved scan report into normalized observation evidence.
 *
 * This never rewrites the original report: it writes `observations.json`
 * beside it (or to --out) so historical evidence keeps its provenance while
 * new derived artifacts can be reviewed and diffed.
 *
 * Usage:
 *   node scanner/reprocess-evidence.mjs reports/issues/issue-398/<stamp>/report.json
 *   node scanner/reprocess-evidence.mjs report.json --out /tmp/derived
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

import { buildObservationArtifact } from "./observations.mjs";
import { correlateObservations } from "./correlation.mjs";
import { redactStringsDeep } from "./redact-secrets.mjs";

function parseArgs(argv) {
  const args = { input: null, out: null };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--out") {
      args.out = argv[index + 1];
      index += 1;
    } else if (!args.input) {
      args.input = value;
    }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.input) {
    console.error("Usage: node scanner/reprocess-evidence.mjs <report.json> [--out <dir>]");
    process.exit(2);
  }

  const inputPath = resolve(args.input);
  const report = JSON.parse(readFileSync(inputPath, "utf8"));
  const artifact = buildObservationArtifact(report);

  const redaction = { changed: 0 };
  redactStringsDeep(artifact, redaction);
  if (redaction.changed > 0) {
    console.error(`[redact] Sanitized ${redaction.changed} string(s) in derived observations`);
  }

  const correlation = correlateObservations(artifact);
  const correlationRedaction = { changed: 0 };
  redactStringsDeep(correlation, correlationRedaction);
  if (correlationRedaction.changed > 0) {
    console.error(`[redact] Sanitized ${correlationRedaction.changed} string(s) in derived correlation`);
  }

  const outDir = args.out ? resolve(args.out) : dirname(inputPath);
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "observations.json");
  const correlationPath = join(outDir, "correlation.json");
  writeFileSync(outPath, JSON.stringify(artifact, null, 2) + "\n", "utf8");
  writeFileSync(correlationPath, JSON.stringify(correlation, null, 2) + "\n", "utf8");

  const { counts } = artifact;
  console.log(`Wrote ${outPath}`);
  console.log(`- raw failures: ${counts.rawFailures}`);
  console.log(`- observations: ${counts.observations}`);
  console.log(`- repeated within one engine: ${counts.repeatedWithinEngine}`);
  console.log(`- cross-engine equivalents (verified): ${counts.crossEngineEquivalent}`);
  console.log(`- provisional issues (no correlation yet): ${counts.provisionalIssues}`);
  console.log(`- unresolved or ambiguous targets: ${counts.ambiguousLocators}`);
  console.log(`- by engine: ${JSON.stringify(counts.byEngine)}`);
  console.log(`Wrote ${correlationPath}`);
  console.log(`- correlated issues: ${correlation.counts.correlatedIssues}`);
  console.log(`- single-engine findings: ${correlation.counts.singleEngineFindings}`);
  console.log(`- target disagreements: ${correlation.counts.targetDisagreements}`);
  console.log(`- reconciliation complete: ${correlation.reconciliation.complete}`);
  console.log(`- source report unchanged: ${inputPath}`);
}

main();
