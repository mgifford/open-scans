import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  PERFORMANCE_ISSUE_RUNNER_VERSION,
  runPerformanceIssue
} from "../../scanner/run-performance-issue.mjs";

const request = {
  schemaVersion: "performance-request/1",
  requestId: "perf-test",
  mode: "light",
  site: { origin: "https://example.gov", host: "example.gov", urls: ["https://example.gov/"] },
  evidenceSources: [],
  limits: { maxPagesToInspect: 1, maxLighthouseAudits: 1, maxSitespeedPages: 0 },
  measurement: { browser: "chromium", profile: "desktop" }
};

const evidence = {
  schema: "performance-evidence/1",
  generatedAt: "2026-11-17T12:00:00.000Z",
  request: { requestId: "perf-test" },
  site: { origin: "https://example.gov", host: "example.gov", coverage: null },
  pages: [],
  pageFamilies: [],
  componentTypes: [],
  componentInstances: [],
  resources: [],
  findings: [],
  experiments: [],
  investigation: [],
  mergeDecisions: [],
  sources: [],
  limitations: ["Test evidence."]
};

function fakeRunner(calls, key) {
  return async (input) => {
    calls.push({ key, input });
    return {
      ok: true,
      errors: [],
      warnings: [],
      evidence,
      runReport: key === "reuse" ? null : { cost: { browserLaunches: 1, lighthouseAudits: 1, dockerRuns: 0, durationMs: 10 } },
      stats: key === "reuse" ? { sourceCount: 1, pagesInspected: 0, durationMs: 5 } : null
    };
  };
}

test("the driver dispatches light mode and writes the expected artifacts", async () => {
  const dir = mkdtempSync(join(tmpdir(), "perf-driver-"));
  const calls = [];
  const result = await runPerformanceIssue(request, {
    outputDir: dir,
    artifactsDir: join(dir, "artifacts"),
    generatedAt: "2026-11-17T12:00:00.000Z",
    lightRunner: fakeRunner(calls, "light"),
    deepRunner: fakeRunner(calls, "deep"),
    reuseRunner: fakeRunner(calls, "reuse")
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(calls.length, 1);
  assert.equal(calls[0].key, "light");
  assert.equal(result.result.schema, "performance-issue-run/1");
  assert.equal(result.result.runnerVersion, PERFORMANCE_ISSUE_RUNNER_VERSION);
  assert.ok(existsSync(join(dir, "performance-evidence.json")));
  assert.ok(existsSync(join(dir, "performance-run.json")));
  assert.ok(existsSync(join(dir, "performance-summary.md")));
  assert.match(readFileSync(join(dir, "performance-summary.md"), "utf8"), /completed/i);
});

test("reuse and deep modes dispatch to their respective runners", async () => {
  const calls = [];
  const reuseDir = mkdtempSync(join(tmpdir(), "perf-driver-reuse-"));
  const deepDir = mkdtempSync(join(tmpdir(), "perf-driver-deep-"));
  const reuse = await runPerformanceIssue({ ...request, mode: "reuse" }, {
    outputDir: reuseDir,
    artifactsDir: join(reuseDir, "artifacts"),
    reuseRunner: fakeRunner(calls, "reuse"),
    lightRunner: fakeRunner(calls, "light"),
    deepRunner: fakeRunner(calls, "deep")
  });
  assert.equal(reuse.ok, true);
  assert.equal(calls[0].key, "reuse");
  calls.length = 0;
  const deep = await runPerformanceIssue({ ...request, mode: "deep" }, {
    outputDir: deepDir,
    artifactsDir: join(deepDir, "artifacts"),
    reuseRunner: fakeRunner(calls, "reuse"),
    lightRunner: fakeRunner(calls, "light"),
    deepRunner: fakeRunner(calls, "deep")
  });
  assert.equal(deep.ok, true);
  assert.equal(calls[0].key, "deep");
});

test("combined mode is rejected instead of silently running the wrong provider", async () => {
  const dir = mkdtempSync(join(tmpdir(), "perf-driver-combined-"));
  const result = await runPerformanceIssue({ ...request, mode: "combined" }, {
    outputDir: dir,
    artifactsDir: join(dir, "artifacts"),
    reuseRunner: fakeRunner([], "reuse"),
    lightRunner: fakeRunner([], "light"),
    deepRunner: fakeRunner([], "deep")
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /not executable/i);
  assert.match(readFileSync(join(dir, "performance-summary.md"), "utf8"), /failed/i);
});

test("invalid input is rejected without invoking a runner", async () => {
  const result = await runPerformanceIssue({ nope: true }, {
    outputDir: mkdtempSync(join(tmpdir(), "perf-driver-invalid-")),
    artifactsDir: mkdtempSync(join(tmpdir(), "perf-driver-invalid-artifacts-")),
    reuseRunner: fakeRunner([], "reuse"),
    lightRunner: fakeRunner([], "light"),
    deepRunner: fakeRunner([], "deep")
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /valid performance-request/i);
});
