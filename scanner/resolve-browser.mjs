import { readFileSync } from "node:fs";
import { parseScanIssue } from "./parse-issue.mjs";

export function resolveBrowserFromIssue(issueLike) {
  const parsed = parseScanIssue({ issue: issueLike });
  return parsed.browser || parsed.value?.browser || "chromium";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error("Usage: node scanner/resolve-browser.mjs <issue-event-json>");
    process.exit(1);
  }

  const event = JSON.parse(readFileSync(inputPath, "utf8"));
  process.stdout.write(`${resolveBrowserFromIssue(event.issue || event)}\n`);
}