import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import { buildObservationArtifact } from "../../scanner/observations.mjs";
import { correlateObservations } from "../../scanner/correlation.mjs";

const ISSUE_398_REPORT = new URL(
  "../../reports/issues/issue-398/2026-11-19T11-41-22-579Z/report.json",
  import.meta.url
);

let observationCounter = 0;

function observation({
  engine,
  rule,
  url = "https://example.org/page/",
  targetId = "dom:v1:hash:/html[1]/body[1]/img[1]",
  resolution = "resolved",
  contextKey = "chromium|1280x800|light",
  repeatOf = null,
  locator = "img"
} = {}) {
  observationCounter += 1;
  return {
    schemaVersion: "a11y-observation/1",
    observationId: `obs-${String(observationCounter).padStart(4, "0")}`,
    engine: { name: engine, label: engine, version: "1.0.0", ruleId: rule },
    outcome: "failed",
    nativeOutcome: "failed",
    url,
    testContext: {
      browser: contextKey.split("|")[0],
      viewport: { width: 1280, height: 800 },
      colorScheme: contextKey.split("|")[2] ?? "light",
      contextKey
    },
    target: {
      nativeLocator: locator,
      nativeLocatorField: "xpath",
      locatorType: "css",
      specificLocator: true,
      resolution,
      resolutionMethod: "css",
      matchedElements: resolution === "resolved" ? 1 : 18,
      resolvedTargetId: resolution === "resolved" ? targetId : null,
      candidates: [],
      confidence: "high",
      ambiguity: resolution === "resolved" ? null : "ambiguous-or-shared-locator",
      note: null
    },
    document: { hash: "hash", available: true, source: "axe.renderedHtml", comparableAcrossEngines: "unverified" },
    htmlEvidence: "<img>",
    message: "m",
    actRuleIds: [],
    mapping: { source: "s", status: "mapped", verified: false },
    wcagSc: [],
    severity: null,
    rawEvidenceRef: "report.json#/results/0/axe/failures/0",
    executionStatus: "executed",
    fixtureId: null,
    repeatOf,
    relations: []
  };
}

function artifactOf(observations, engineExecution = { axe: { status: "executed" }, alfa: { status: "executed" } }) {
  return {
    schemaVersion: "a11y-observation/1",
    issueNumber: 1,
    scan: { engineExecution },
    observations
  };
}

test("four engines on one image become one correlated issue with four observations", () => {
  const artifact = artifactOf([
    observation({ engine: "axe", rule: "image-alt", locator: "img" }),
    observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r2", locator: "/img" }),
    observation({ engine: "equalAccess", rule: "img_alt_valid", locator: "/html[1]/body[1]/img[1]" }),
    observation({ engine: "accesslint", rule: "text-alternatives/img-alt", locator: "div > img" })
  ]);

  const correlation = correlateObservations(artifact);

  assert.equal(correlation.issues.length, 1);
  const [issue] = correlation.issues;
  assert.equal(issue.family, "text-alternative");
  assert.deepEqual(issue.engines, ["accesslint", "alfa", "axe", "equalAccess"]);
  assert.equal(issue.observationIds.length, 4);
  assert.equal(issue.observations.length, 4);
  assert.equal(issue.classification, "agreement-fail");
  assert.equal(issue.mappingStatus, "act-verified-different-version");
  assert.deepEqual(issue.actRuleIds, ["23a2a8"]);
  assert.equal(issue.actVerified, false);
  assert.equal(correlation.counts.correlatedIssues, 1);
  assert.equal(correlation.counts.verifiedEquivalentFindings, 0);
  assert.equal(correlation.counts.versionMismatchedFindings, 1);
  assert.equal(correlation.counts.inferredEquivalentFindings, 0);
});

test("correlated issue identity does not depend on engine order", () => {
  const make = (order) => artifactOf(order.map((engine) => observation({
    engine,
    rule: engine === "axe" ? "image-alt" : "https://alfa.siteimprove.com/rules/sia-r2"
  })));

  const forward = correlateObservations(make(["axe", "alfa"]));
  const reverse = correlateObservations(make(["alfa", "axe"]));

  assert.equal(forward.issues[0].correlatedIssueId, reverse.issues[0].correlatedIssueId);
  assert.deepEqual(forward.issues[0].engines, reverse.issues[0].engines);
});

test("no engine owns a correlated issue", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "image-alt" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r2" })
    ])
  );

  const issue = correlation.issues[0];
  assert.equal("owner" in issue, false);
  assert.equal("primaryEngine" in issue, false);
  assert.deepEqual(issue.engines, ["alfa", "axe"]);
});

test("a shared WCAG criterion on different targets is not equivalence", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "image-alt", targetId: "dom:v1:h:/img[1]" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r2", targetId: "dom:v1:h:/img[2]" })
    ])
  );

  assert.equal(correlation.issues.length, 0);
  assert.equal(correlation.counts.singleEngineFindings, 2);
  assert.equal(correlation.counts.targetDisagreements, 1);
});

test("a shared ACT rule alone does not merge different targets", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "color-contrast", targetId: "dom:v1:h:/p[1]" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r69", targetId: "dom:v1:h:/p[9]" })
    ])
  );

  assert.equal(correlation.issues.length, 0);
});

test("ambiguous targets stay insufficient evidence, never merged", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r111", resolution: "ambiguous" }),
      observation({ engine: "axe", rule: "image-alt", resolution: "ambiguous" })
    ])
  );

  assert.equal(correlation.issues.length, 0);
  assert.equal(correlation.counts.insufficientEvidenceObservations, 2);
});

test("different test conditions are not comparable", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "image-alt", contextKey: "chromium|1280x800|light" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r2", contextKey: "firefox|1280x800|light" })
    ])
  );

  assert.equal(correlation.issues.length, 0);
  assert.equal(correlation.counts.notComparableObservations, 2);
  assert.equal(correlation.notComparable.length, 1);
  assert.deepEqual(correlation.notComparable[0].contexts, ["chromium|1280x800|light", "firefox|1280x800|light"]);
});

test("unmapped rule semantics are insufficient evidence, but retained", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "image-alt" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r9999" })
    ])
  );

  assert.equal(correlation.issues.length, 0);
  assert.equal(correlation.counts.insufficientEvidenceObservations, 1);
  assert.equal(correlation.counts.singleEngineFindings, 1);
});

test("engine silence is detection asymmetry, not a pass", () => {
  const correlation = correlateObservations(
    artifactOf(
      [observation({ engine: "axe", rule: "image-alt" })],
      { axe: { status: "executed" }, alfa: { status: "executed" }, accesslint: { status: "executed" } }
    )
  );

  const single = correlation.singles[0];
  assert.equal(single.classification, "detection-asymmetry");
  assert.match(single.rationale, /silence is not a pass/);
});

test("related findings share a target but not a failure mechanism", () => {
  const targetId = "dom:v1:h:/img[1]";
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "image-alt", targetId }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r2", targetId }),
      observation({ engine: "axe", rule: "document-title", targetId }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r1", targetId })
    ])
  );

  assert.equal(correlation.issues.length, 2);
  assert.equal(correlation.related.length, 1);
  assert.equal(correlation.related[0].families.length, 2);
  assert.match(correlation.related[0].note, /never merged/);
});

test("counts reconcile and no observation is lost", () => {
  const correlation = correlateObservations(
    artifactOf([
      observation({ engine: "axe", rule: "image-alt" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r2" }),
      observation({ engine: "axe", rule: "image-alt", targetId: "dom:v1:h:/img[2]" }),
      observation({ engine: "alfa", rule: "https://alfa.siteimprove.com/rules/sia-r111", resolution: "ambiguous" }),
      observation({ engine: "axe", rule: "image-alt", repeatOf: "obs-0001" })
    ])
  );

  assert.equal(correlation.reconciliation.complete, true);
  assert.equal(correlation.counts.rawObservations, 5);
  assert.equal(correlation.reconciliation.observationsAccountedFor, 5);
  assert.equal(
    correlation.counts.repeatedObservations +
      correlation.counts.correlatedObservations +
      correlation.counts.singleEngineObservations +
      correlation.counts.insufficientEvidenceObservations +
      correlation.counts.notComparableObservations,
    correlation.counts.rawObservations
  );
});

test("issue #398: the four-engine image correlates without losing raw evidence", () => {
  const report = JSON.parse(readFileSync(ISSUE_398_REPORT, "utf8"));
  const observations = buildObservationArtifact(report);
  const correlation = correlateObservations(observations);

  const imageIssue = correlation.issues.find(
    (issue) => issue.url.includes("/steps/end/") && issue.family === "text-alternative"
  );

  assert.ok(imageIssue, "the image issue is correlated");
  assert.equal(imageIssue.observationIds.length, 4);
  assert.deepEqual(imageIssue.engines, ["accesslint", "alfa", "axe", "equalAccess"]);
  assert.equal(imageIssue.actVerified, false);
  assert.deepEqual(imageIssue.actRuleIds, ["23a2a8"]);

  // The observations themselves are still all present.
  assert.equal(observations.observations.length, 237);
  assert.equal(correlation.reconciliation.complete, true);
  assert.equal(correlation.counts.rawObservations, 237);
});
