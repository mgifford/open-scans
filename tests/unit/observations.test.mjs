import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import {
  OBSERVATION_SCHEMA_VERSION,
  buildObservationArtifact,
  classifyLocator,
  isSpecificLocator
} from "../../scanner/observations.mjs";

const ISSUE_398_REPORT = new URL(
  "../../reports/issues/issue-398/2026-11-19T11-41-22-579Z/report.json",
  import.meta.url
);

function makeResult(overrides = {}) {
  return {
    submittedUrl: overrides.finalUrl || "https://example.org/page/",
    finalUrl: "https://example.org/page/",
    scanContext: { browser: "firefox", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
    axe: { failures: [] },
    alfa: { failures: [] },
    equalAccess: { failures: [] },
    accesslint: { failures: [] },
    qualweb: { failures: [] },
    ...overrides
  };
}

const R111 = "https://alfa.siteimprove.com/rules/sia-r111";
const R66 = "https://alfa.siteimprove.com/rules/sia-r66";
const R73 = "https://alfa.siteimprove.com/rules/sia-r73";

test("classifyLocator separates xpath, css, html and missing locators", () => {
  assert.equal(classifyLocator({ xpath: "/a[@class='x']" }).locatorType, "xpath");
  assert.equal(classifyLocator({ selector: "#main" }).locatorType, "css");
  assert.equal(classifyLocator({ html: "<p>x</p>" }).locatorType, "html");
  assert.equal(classifyLocator({}).locatorType, "none");
  assert.equal(classifyLocator({ xpath: "/p", selector: "#p" }).nativeLocator, "/p");
});

test("isSpecificLocator accepts ids and indexed paths only", () => {
  assert.equal(isSpecificLocator("css", "#main"), true);
  assert.equal(isSpecificLocator("css", "div.govuk-width-container"), false);
  assert.equal(isSpecificLocator("xpath", "/html[1]/body[1]/main[1]"), true);
  assert.equal(isSpecificLocator("xpath", "/a[@class=\"govuk-link\"]"), false);
  assert.equal(isSpecificLocator("xpath", "//*[@id=\"hint\"]"), true);
  assert.equal(isSpecificLocator("html", "<p>x</p>"), false);
});

test("distinct links that share one XPath stay distinct observations", () => {
  const failures = Array.from({ length: 18 }, (_, index) => ({
    rule: R111,
    xpath: "/a[@class=\"govuk-link\"]",
    html: `<a class="govuk-link" href="/link-${index}/">Link ${index}</a>`,
    message: "Target has insufficient size"
  }));

  const artifact = buildObservationArtifact({ results: [makeResult({ alfa: { failures } })] });

  assert.equal(artifact.counts.rawFailures, 18);
  assert.equal(artifact.observations.length, 18);
  assert.equal(artifact.counts.repeatedWithinEngine, 0);
  assert.equal(new Set(artifact.observations.map((entry) => entry.observationId)).size, 18);
});

test("failures with no locator are never merged into one page-level target", () => {
  const failures = Array.from({ length: 20 }, () => ({
    rule: R66,
    xpath: null,
    selector: null,
    html: null,
    message: "The highest possible contrast of the text is 6.14:1"
  }));

  const artifact = buildObservationArtifact({ results: [makeResult({ alfa: { failures } })] });

  assert.equal(artifact.counts.observations, 20);
  assert.equal(artifact.counts.repeatedWithinEngine, 0);
  assert.equal(artifact.counts.unresolvedTargets, 20);
  for (const observation of artifact.observations) {
    assert.equal(observation.target.resolution, "unresolved");
    assert.equal(observation.target.ambiguity, "missing-locator");
  }
});

test("a repeated observation needs a specific locator, not just an equal locator", () => {
  const specific = [
    { rule: R73, selector: "#intro", html: "<p id=\"intro\">x</p>", message: "line height" },
    { rule: R73, selector: "#intro", html: "<p id=\"intro\">x</p>", message: "line height" }
  ];
  const ambiguous = [
    { rule: R73, xpath: "/p", html: "<p>x</p>", message: "line height" },
    { rule: R73, xpath: "/p", html: "<p>x</p>", message: "line height" }
  ];

  const specificArtifact = buildObservationArtifact({ results: [makeResult({ alfa: { failures: specific } })] });
  assert.equal(specificArtifact.counts.repeatedWithinEngine, 1);
  assert.equal(specificArtifact.observations[1].repeatOf, specificArtifact.observations[0].observationId);

  const ambiguousArtifact = buildObservationArtifact({ results: [makeResult({ alfa: { failures: ambiguous } })] });
  assert.equal(ambiguousArtifact.counts.repeatedWithinEngine, 0);
});

test("no cross-engine equivalent is claimed without resolved targets", () => {
  const axeFailure = {
    rule: "image-alt",
    selector: "#goose-photo",
    html: "<img id=\"goose-photo\" src=\"goose.jpg\">",
    message: "Images must have alternative text"
  };
  const alfaFailure = {
    rule: "https://alfa.siteimprove.com/rules/sia-r2",
    selector: "#goose-photo",
    html: "<img id=\"goose-photo\" src=\"goose.jpg\">",
    message: "Image has no accessible name"
  };

  const artifact = buildObservationArtifact({
    results: [makeResult({ axe: { failures: [axeFailure] }, alfa: { failures: [alfaFailure] } })]
  });

  assert.equal(artifact.counts.observations, 2);
  assert.equal(artifact.counts.crossEngineEquivalent, 0);
  assert.equal(artifact.counts.provisionalIssues, 2);
  assert.equal(artifact.observations[0].actRuleIds.length > 0, true);
});

test("engine order does not change observation identity", () => {
  const axeFailure = { rule: "image-alt", selector: "#goose-photo", html: "<img id=\"goose-photo\">", message: "alt" };
  const alfaFailure = { rule: "https://alfa.siteimprove.com/rules/sia-r2", selector: "#goose-photo", html: "<img id=\"goose-photo\">", message: "alt" };

  const first = buildObservationArtifact({ results: [makeResult({ axe: { failures: [axeFailure] }, alfa: { failures: [alfaFailure] } })] });
  const second = buildObservationArtifact({ results: [makeResult({ alfa: { failures: [alfaFailure] }, axe: { failures: [axeFailure] } })] });

  const ids = (artifact) => artifact.observations.map((entry) => entry.observationId).sort();
  assert.deepEqual(ids(first), ids(second));
  assert.equal(first.counts.provisionalIssues, second.counts.provisionalIssues);
});

test("reprocessing the same evidence is deterministic", () => {
  const results = [makeResult({ alfa: { failures: [{ rule: R73, xpath: "/p", html: "<p>x</p>", message: "m" }] } })];
  const a = buildObservationArtifact({ results });
  const b = buildObservationArtifact({ results });

  const strip = (artifact) => ({ ...artifact, generatedAt: null });
  assert.deepEqual(strip(a), strip(b));
});

test("issue #398: all 237 failures are retained and the 105 legacy duplicates survive", () => {
  const report = JSON.parse(readFileSync(ISSUE_398_REPORT, "utf8"));
  const artifact = buildObservationArtifact(report);

  const raw = { axe: 0, alfa: 0, equalAccess: 0, accesslint: 0 };
  let legacyDuplicates = 0;
  for (const result of report.results) {
    for (const engine of Object.keys(raw)) {
      for (const failure of result[engine]?.failures ?? []) {
        raw[engine] += 1;
        if (failure.isDuplicate) legacyDuplicates += 1;
      }
    }
  }

  assert.deepEqual(raw, { axe: 6, alfa: 140, equalAccess: 86, accesslint: 5 });
  assert.equal(legacyDuplicates, 105);
  assert.equal(artifact.counts.rawFailures, 237);
  assert.equal(artifact.counts.observations, 237);
  assert.equal(artifact.counts.byEngine.alfa, 140);
  assert.equal(artifact.counts.repeatedWithinEngine, 0, "locator-only matches must not be repeats");
  assert.equal(artifact.counts.reconciliation ?? artifact.reconciliation.rawFailuresEqualObservations, true);
  assert.equal(artifact.reconciliation.rawFailuresEqualObservations, true);
  assert.equal(artifact.reconciliation.groupingPreservesObservations, true);
});

test("issue #398: blind-spots keeps 18 separate sia-r111 observations", () => {
  const report = JSON.parse(readFileSync(ISSUE_398_REPORT, "utf8"));
  const artifact = buildObservationArtifact(report);

  const r111 = artifact.observations.filter(
    (entry) =>
      entry.url.includes("/blind-spots/") &&
      entry.engine.name === "alfa" &&
      entry.engine.ruleId === R111 &&
      entry.target.nativeLocator === "/a[@class=\"govuk-link\"]"
  );

  assert.equal(r111.length, 18);
  assert.equal(new Set(r111.map((entry) => entry.observationId)).size, 18);
  assert.equal(new Set(r111.map((entry) => entry.htmlEvidence)).size, 18);
});

test("observation records carry provenance and resolution state", () => {
  const artifact = buildObservationArtifact({
    issueNumber: 398,
    scanTitle: "test",
    results: [makeResult({ alfa: { failures: [{ rule: R73, selector: "#intro", html: "<p id=\"intro\">x</p>", message: "m" }] } })]
  });
  const observation = artifact.observations[0];

  assert.equal(observation.schemaVersion, OBSERVATION_SCHEMA_VERSION);
  assert.match(observation.observationId, /^[a-f0-9]{64}$/);
  assert.equal(observation.rawEvidenceRef, "report.json#/results/0/alfa/failures/0");
  assert.equal(observation.target.resolution, "unverified");
  assert.equal(observation.target.resolutionMethod, "none");
  assert.equal(observation.target.resolvedTargetId, null);
  assert.equal(observation.document.available, false);
  assert.equal(observation.engine.name, "alfa");
  assert.equal(observation.outcome, "failed");
});

test("observations resolve targets when the scan captured rendered HTML", () => {
  const html = `<!doctype html><html><body><main><img id="goose-photo" src="goose.jpg"><a class="govuk-link" href="/a/">A</a><a class="govuk-link" href="/b/">B</a></main></body></html>`;

  const result = makeResult({
    axe: {
      failures: [
        { rule: "image-alt", selector: "#goose-photo", html: "<img id=\"goose-photo\">", message: "alt" }
      ],
      renderedHtml: html
    },
    alfa: {
      failures: [
        {
          rule: "https://alfa.siteimprove.com/rules/sia-r2",
          xpath: "/html[1]/body[1]/main[1]/img[1]",
          html: "<img id=\"goose-photo\">",
          message: "image name"
        },
        {
          rule: "https://alfa.siteimprove.com/rules/sia-r111",
          xpath: "/a[@class=\"govuk-link\"]",
          html: "<a class=\"govuk-link\" href=\"/a/\">A</a>",
          message: "target size"
        }
      ]
    }
  });

  const artifact = buildObservationArtifact({ results: [result] });
  const byEngine = (name) => artifact.observations.filter((entry) => entry.engine.name === name);

  const axeImage = byEngine("axe")[0];
  const alfaImage = byEngine("alfa")[0];
  const alfaLinks = byEngine("alfa")[1];

  assert.equal(axeImage.target.resolution, "resolved");
  assert.equal(alfaImage.target.resolution, "resolved");
  assert.equal(axeImage.target.resolvedTargetId, alfaImage.target.resolvedTargetId);

  assert.equal(alfaLinks.target.resolution, "ambiguous");
  assert.equal(alfaLinks.target.matchedElements, 2);
  assert.equal(alfaLinks.target.resolvedTargetId, null);

  assert.equal(artifact.counts.resolvedObservations, 2);
  assert.equal(artifact.counts.distinctResolvedTargets, 1);
  assert.equal(artifact.documents[0].available, true);
  assert.match(artifact.documents[0].documentHash, /^[a-f0-9]{64}$/);
});

test("issue #398: the four-engine missing-alt image resolves to one target", () => {
  const report = JSON.parse(readFileSync(ISSUE_398_REPORT, "utf8"));
  const artifact = buildObservationArtifact(report);

  const endPage = artifact.observations.filter(
    (entry) => entry.url.includes("/steps/end/") && entry.target.resolvedTargetId
  );

  const byRule = {
    axe: "image-alt",
    alfa: "https://alfa.siteimprove.com/rules/sia-r2",
    equalAccess: "img_alt_valid",
    accesslint: "text-alternatives/img-alt"
  };

  const imageObservations = endPage.filter((entry) => entry.engine.ruleId === byRule[entry.engine.name]);
  assert.equal(imageObservations.length, 4, "one observation per engine is retained");

  const targetIds = new Set(imageObservations.map((entry) => entry.target.resolvedTargetId));
  assert.equal(targetIds.size, 1, "all four locators resolve to the same DOM node");

  // Different locator dialects, one target.
  const locators = imageObservations.map((entry) => entry.target.nativeLocator);
  assert.equal(new Set(locators).size, 4);
  assert.equal(new Set(imageObservations.map((entry) => entry.target.locatorType)).size >= 1, true);

  // Four observations, still four correlated issues: correlation is P2.
  assert.equal(artifact.counts.crossEngineEquivalent, 0);
});
