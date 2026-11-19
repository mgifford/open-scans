import test from "node:test";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import assert from "node:assert/strict";

import { summarise } from "../../scanner/act-lab/summarise.mjs";
import {
  classifyFailureOnTarget,
  compareExpectation,
  resolveCaseTarget
} from "../../scanner/act-lab/target-outcomes.mjs";

const SITE = "https://example.org/";
const PAGE = `<html><body><main>
  <img id="missing-alt-a" src="a.png">
  <img id="named-image-control" src="c.png" alt="A goose">
  <img class="fixture-image" src="d.png">
  <img class="fixture-image" src="e.png">
  <button id="target">ok</button>
</main></body></html>`;

function caseEntry(overrides = {}) {
  return {
    id: "case",
    url: `${SITE}lab/case/`,
    ruleId: "23a2a8",
    expected: "failed",
    review: "unreviewed",
    target: { scope: "light-dom", selector: "#missing-alt-a" },
    ...overrides
  };
}

function result({ failures = [], passes = [], html = PAGE } = {}) {
  return {
    submittedUrl: `${SITE}lab/case/`,
    finalUrl: `${SITE}lab/case/`,
    axe: { failures, passes, renderedHtml: html },
    alfa: { failures: [] },
    equalAccess: { failures: [] },
    accesslint: { failures: [] }
  };
}

function summariseOne(caseOverrides, resultOverrides = {}, opts = {}) {
  return summarise(
    { siteRoot: SITE, manifestUrl: `${SITE}lab/fixtures.json`, cohort: { key: "c" }, cases: [caseEntry(caseOverrides)] },
    { results: [result(resultOverrides)] },
    opts.viewport ?? null
  );
}

test("declared light-DOM target resolves to a canonical target id", () => {
  const resolution = resolveCaseTarget(caseEntry(), result());
  assert.equal(resolution.status, "resolved");
  assert.match(resolution.targetId, /^dom:v1:[a-f0-9]{64}:\/html\[1\]/);
  assert.equal(resolution.matchedElements, 1);
});

test("a failure elsewhere on the page is not attributed to the target", () => {
  const summary = summariseOne({}, { failures: [{ rule: "image-alt", selector: "#named-image-control" }] });
  const axe = summary.results.find((entry) => entry.engine === "axe");

  assert.equal(axe.status, "page-level-only");
  assert.equal(axe.outcome, null);
  assert.equal(axe.onTargetFailures, 0);
  assert.equal(axe.pageLevelFailures, 1);
  assert.equal(summary.pageLevelFindings, 1);
  assert.equal(summary.counts.failed, undefined);
});

test("a failure on the target is attributed and compared with the expectation", () => {
  const summary = summariseOne({ expected: "failed", review: "reviewed" }, {
    failures: [{ rule: "image-alt", selector: "#missing-alt-a" }]
  });
  const axe = summary.results.find((entry) => entry.engine === "axe");
  const comparison = summary.comparisons.find((entry) => entry.fixtureId === "case");

  assert.equal(axe.status, "failed");
  assert.equal(axe.onTargetFailures, 1);
  assert.equal(comparison.status, "matches-expected");
  assert.equal(comparison.authoritative, true);
});

test("an unreviewed expectation makes a match provisional, never authoritative", () => {
  const summary = summariseOne({ expected: "failed", review: "unreviewed" }, {
    failures: [{ rule: "image-alt", selector: "#missing-alt-a" }]
  });
  const comparison = summary.comparisons[0];

  assert.equal(comparison.status, "provisional-match");
  assert.equal(comparison.authoritative, false);
  assert.match(comparison.note, /unreviewed/);
});

test("silence cannot confirm a passing expectation", () => {
  const summary = summariseOne({ expected: "passed", review: "reviewed" }, { failures: [] });
  const comparison = summary.comparisons[0];

  assert.equal(comparison.status, "cannot-confirm-pass");
  assert.match(comparison.note, /does not confirm/);
  assert.equal(summary.results.some((entry) => entry.outcome === "passed"), false);
});

test("a passing expectation contradicted by a target failure is unexpected", () => {
  const summary = summariseOne({ expected: "passed", review: "reviewed" }, {
    failures: [{ rule: "image-alt", selector: "#missing-alt-a" }]
  });
  assert.equal(summary.comparisons[0].status, "unexpected-failure");
});

test("ambiguous and unresolved selectors block attribution instead of guessing", () => {
  const ambiguous = summariseOne({ target: { scope: "light-dom", selector: ".fixture-image" } });
  assert.equal(ambiguous.targetStatuses.ambiguous, 1);
  assert.equal(ambiguous.results[0].status, "target-ambiguous");

  const unresolved = summariseOne({ target: { scope: "light-dom", selector: "#nope" } });
  assert.equal(unresolved.targetStatuses.unresolved, 1);
  assert.equal(unresolved.results[0].status, "target-unresolved");
});

test("browser-context targets are reported unsupported, not attributed", () => {
  const frame = summariseOne({ target: { scope: "light-dom", selector: "#target", frame: ["frame.html"] } });
  assert.equal(frame.results[0].status, "unsupported");
  assert.match(frame.results[0].evidence, /iframe/);

  const shadow = summariseOne({ target: { scope: "open-shadow", selector: "#target", hostPath: ["#host"] } });
  assert.equal(shadow.results[0].status, "unsupported");
  assert.match(shadow.results[0].evidence, /shadow/);
});

test("a pass list without a target locator is not a target-level pass", () => {
  const summary = summariseOne({ expected: "passed" }, { passes: [{ rule: "image-alt" }] });
  const axe = summary.results.find((entry) => entry.engine === "axe");
  assert.equal(axe.status, "pass-not-attributed");
  assert.equal(axe.outcome, null);
});

test("comparison helpers keep execution and expectation separate", () => {
  assert.equal(compareExpectation({ expected: null, review: "unreviewed" }).status, "no-expectation");
  assert.equal(
    compareExpectation({ expected: "failed", review: "unreviewed", failedEngines: [] }).status,
    "provisional-no-failure"
  );
  assert.equal(
    classifyFailureOnTarget(result(), { rule: "image-alt", selector: "#named-image-control" }, resolveCaseTarget(caseEntry(), result())),
    "off-target"
  );
});

test("observations record the analysis version and target status counts", () => {
  const summary = summariseOne();
  assert.equal(summary.schemaVersion, "act-lab-observations/2");
  assert.equal(summary.algorithm.targetOutcome, "act-lab-target-outcome/1");
  assert.deepEqual(summary.targetStatuses, { resolved: 1, unresolved: 0, ambiguous: 0, unsupported: 0 });
});

test("the summariser reads report.json, not run-scan's stdout summary", () => {
  const reportShaped = {
    issueNumber: 1,
    scanTitle: "lab",
    results: [result({ failures: [{ rule: "image-alt", selector: "#missing-alt-a" }] })]
  };
  const summary = summarise(
    { siteRoot: SITE, manifestUrl: `${SITE}lab/fixtures.json`, cohort: { key: "c" }, cases: [caseEntry()] },
    reportShaped
  );
  assert.equal(summary.results.find((entry) => entry.engine === "axe").status, "failed");

  // The CLI refuses a stdout-shaped artifact instead of recording nothing.
  const dir = mkdtempSync(join(tmpdir(), "act-lab-guard-"));
  const preparedPath = join(dir, "prepared.json");
  const metaPath = join(dir, "meta.json");
  writeFileSync(preparedPath, JSON.stringify({
    siteRoot: SITE,
    manifestUrl: `${SITE}lab/fixtures.json`,
    cohort: { key: "c" },
    cases: [caseEntry()]
  }));
  writeFileSync(metaPath, JSON.stringify({ skipped: false, acceptedCount: 1, scannedCount: 1 }));

  const run = spawnSync(process.execPath, [
    "scanner/act-lab/summarise.mjs",
    preparedPath,
    metaPath,
    join(dir, "latest.json"),
    join(dir, "state.json"),
    "desktop"
  ], { cwd: new URL("../..", import.meta.url).pathname, encoding: "utf8" });

  assert.equal(run.status, 1);
  assert.match(run.stderr, /Pass report\.json/);
});

test("candidate mappings count as mapped, not unmapped", () => {
  // 23a2a8 maps to Equal Access img_alt_valid and AccessLint
  // text-alternatives/img-alt as candidates in the ACT registry.
  const summary = summariseOne({}, { failures: [] });
  const equalAccess = summary.results.find((entry) => entry.engine === "equalAccess");
  const accesslint = summary.results.find((entry) => entry.engine === "accesslint");

  assert.equal(equalAccess.status, "notReported");
  assert.equal(accesslint.status, "notReported");
  assert.notEqual(equalAccess.status, "unmapped");
});
