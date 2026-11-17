import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const workflow = readFileSync(new URL("../../.github/workflows/performance-scan.yml", import.meta.url), "utf8");
const validation = readFileSync(new URL("../../.github/workflows/performance-request.yml", import.meta.url), "utf8");

test("the performance scan workflow is issue-driven and checks PERF titles", () => {
  assert.match(workflow, /name: Performance Scan/);
  assert.match(workflow, /issues:\s*\n\s*types: \[opened, edited, reopened\]/);
  assert.match(workflow, /startsWith\(github\.event\.issue\.title, 'PERF:'\)/);
  assert.match(workflow, /run-performance-issue\.mjs/);
});

test("the performance scan workflow covers reuse, light and deep providers explicitly", () => {
  assert.match(workflow, /steps\.parse\.outputs\.mode == 'light'/);
  assert.match(workflow, /npx playwright install --with-deps chromium/);
  assert.match(workflow, /docker pull sitespeedio\/sitespeed\.io:43\.0\.0/);
  assert.match(workflow, /performance-evidence\.json/);
  assert.match(workflow, /performance-run\.json/);
  assert.match(workflow, /performance-summary\.md/);
});

test("the validation workflow remains browser-free", () => {
  assert.match(validation, /Validate performance request/);
  assert.doesNotMatch(validation, /playwright install|docker pull|run-performance-issue/);
});
