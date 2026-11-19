import test from "node:test";
import assert from "node:assert/strict";

import { formatEngineExecution, getEngineExecution } from "../../scanner/engine-execution.mjs";

const summary = {
  engines: ["all"],
  results: [
    { axe: { executed: false, error: "Playwright browser 'firefox' could not be launched" } },
    { axe: { executed: false, error: "Playwright browser 'firefox' could not be launched" } },
    { alfa: { executed: true, error: null } },
    { equalAccess: { executed: true, error: null } },
    { accesslint: { executed: false, error: "Executable doesn't exist" } }
  ]
};

test("reports failed engines instead of counting them as clean", () => {
  const execution = getEngineExecution(summary);
  assert.equal(execution.axe.status, "failed");
  assert.match(execution.axe.error, /firefox/);
  assert.equal(execution.accesslint.status, "failed");
  assert.equal(execution.alfa.status, "executed");
  assert.equal(execution.equalAccess.status, "executed");
  assert.equal(execution.qualweb.status, "notRun");
});

test("markdown lists only engines that executed and warns about failures", () => {
  const lines = formatEngineExecution(summary).join("\n");
  assert.match(lines, /Engines requested: all supported engines/);
  assert.match(lines, /Engines executed: ALFA, Equal Access/);
  assert.match(lines, /axe did not run: Playwright browser 'firefox'/);
  assert.match(lines, /AccessLint did not run/);
  assert.doesNotMatch(lines, /All engines \(AXE/);
});

test("partial engine runs are distinguished from complete runs", () => {
  const partial = getEngineExecution({
    engines: ["all"],
    results: [
      { axe: { executed: true } },
      { axe: { executed: false, error: "navigation timeout" } },
      { alfa: { executed: true } }
    ]
  });

  assert.equal(partial.axe.status, "partial");
  assert.equal(partial.axe.executedRuns, 1);
  assert.equal(partial.axe.failedRuns, 1);
});
