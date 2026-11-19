#!/usr/bin/env node
/**
 * Apply manual review decisions to a correlation artifact.
 *
 * Never modifies the correlation artifact: the result is a separate
 * review-status document.
 *
 * Usage:
 *   node scanner/apply-reviews.mjs <correlation.json> [--reviews reviews/decisions.json] [--out <dir>]
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

import { applyReviews, loadReviewDecisions } from "./reviews.mjs";

function parseArgs(argv) {
  const args = { correlation: null, reviews: "reviews/decisions.json", out: null };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--reviews") {
      args.reviews = argv[index + 1];
      index += 1;
    } else if (value === "--out") {
      args.out = argv[index + 1];
      index += 1;
    } else if (!args.correlation) {
      args.correlation = value;
    }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.correlation) {
    console.error("Usage: node scanner/apply-reviews.mjs <correlation.json> [--reviews reviews/decisions.json] [--out <dir>]");
    process.exit(2);
  }

  const correlationPath = resolve(args.correlation);
  const correlation = JSON.parse(readFileSync(correlationPath, "utf8"));
  const decisions = loadReviewDecisions(resolve(args.reviews));
  const status = applyReviews(correlation, decisions);

  const outDir = args.out ? resolve(args.out) : dirname(correlationPath);
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "review-status.json");
  writeFileSync(outPath, JSON.stringify(status, null, 2) + "\n", "utf8");

  console.log(`Wrote ${outPath}`);
  console.log(`- correlated issues: ${status.summary.correlatedIssues}`);
  console.log(`- reviewed: ${status.summary.reviewed}`);
  console.log(`- unreviewed: ${status.summary.unreviewed}`);
  console.log(`- unmatched decisions: ${status.summary.unmatchedDecisions}`);
  for (const entry of status.unmatched) {
    console.error(`  unmatched ${entry.reviewId}: ${entry.reason}`);
  }
}

main();
