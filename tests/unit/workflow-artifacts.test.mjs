import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const WORKFLOWS = [
  "../../.github/workflows/scan-request.yml",
  "../../.github/workflows/scan-issue-queue.yml",
  "../../.github/workflows/scheduled-scan-queue.yml"
];

/**
 * The normalized evidence artifacts are only useful if the scan workflows
 * persist them. They were generated but silently dropped until this guard.
 */
for (const relative of WORKFLOWS) {
  test(`${relative} persists observations.json and correlation.json`, () => {
    const workflow = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.match(workflow, /observations\.json/, "observations.json must be copied into the report directory");
    assert.match(workflow, /correlation\.json/, "correlation.json must be copied into the report directory");
    assert.match(workflow, /act-coverage\.json/, "act-coverage.json must be copied into the report directory");
  });
}

test("ACT laboratory summarises from report.json, not run-scan stdout", () => {
  const workflow = readFileSync(new URL("../../.github/workflows/act-lab-weekly.yml", import.meta.url), "utf8");
  assert.match(workflow, /summarise\.mjs[\s\S]{0,400}report\.json/, "summarise must read report.json");
  assert.doesNotMatch(workflow, /summarise\.mjs[\s\S]{0,200}meta\.json/, "summarise must not read the stdout summary");
});

test("browser installs cannot hang the queue indefinitely", () => {
  const fs = readFileSync;
  const workflows = [
    "../../.github/workflows/act-lab-weekly.yml",
    "../../.github/workflows/bdd-acceptance-tests.yml",
    "../../.github/workflows/performance-scan.yml",
    "../../.github/workflows/scan-github-pages.yml",
    "../../.github/workflows/scan-issue-queue.yml",
    "../../.github/workflows/scan-request.yml",
    "../../.github/workflows/scheduled-scan-queue.yml"
  ];
  for (const relative of workflows) {
    const workflow = fs(new URL(relative, import.meta.url), "utf8");
    assert.match(workflow, /Install Chromium[\s\S]{0,200}timeout-minutes: 10/, `${relative} needs an install timeout`);
    assert.match(workflow, /PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT/, `${relative} needs a download timeout`);
  }
});
