import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

import { collectWrapUpState, formatWrapUp } from "../../scripts/session-wrap-up.mjs";

const repoRoot = new URL("../..", import.meta.url).pathname;

function syntheticState(overrides = {}) {
  return {
    generatedAt: "2026-11-20T21:00:00.000Z",
    branch: "feat/example",
    lastCommit: "abc1234 A commit",
    uncommittedFiles: [],
    commitsAheadOfMain: 1,
    commitsBehindMain: 0,
    stashes: [],
    openPullRequests: [{ number: 7, title: "Example", branch: "feat/example" }],
    clean: true,
    ...overrides
  };
}

test("wrap-up report states branch, changes and pull requests", () => {
  const text = formatWrapUp(syntheticState());
  assert.match(text, /Branch: feat\/example/);
  assert.match(text, /Ahead of origin\/main: 1/);
  assert.match(text, /Open pull requests: 1/);
  assert.match(text, /#7 Example/);
});

test("wrap-up report lists uncommitted files and a finish checklist", () => {
  const text = formatWrapUp(syntheticState({ uncommittedFiles: ["M scanner/run-scan.mjs"], clean: false }));
  assert.match(text, /Uncommitted changes: 1/);
  assert.match(text, /M scanner\/run-scan\.mjs/);
  assert.match(text, /Finish checklist/);
  assert.match(text, /Never force-push main|never force-push main/);
  assert.match(text, /Handoff skeleton/);
  assert.match(text, /\*\*Last updated:\*\* 2026-11-20/);
});

test("state collection is read-only and returns the documented shape", () => {
  const state = collectWrapUpState();
  assert.equal(typeof state.branch, "string");
  assert.ok(Array.isArray(state.uncommittedFiles));
  assert.ok(Array.isArray(state.stashes));
  assert.ok(Array.isArray(state.openPullRequests));
  assert.equal(typeof state.commitsAheadOfMain, "number");
});

test("the CLI emits parseable JSON", () => {
  const run = spawnSync(process.execPath, ["scripts/session-wrap-up.mjs", "--json"], {
    cwd: repoRoot,
    encoding: "utf8"
  });
  assert.equal(run.status, 0, run.stderr);
  const parsed = JSON.parse(run.stdout);
  assert.ok(Array.isArray(parsed.uncommittedFiles));
  assert.equal(typeof parsed.generatedAt, "string");
});
