import test from "node:test";
import assert from "node:assert/strict";

import { buildObservationArtifact } from "../../scanner/observations.mjs";
import { correlateObservations } from "../../scanner/correlation.mjs";
import {
  buildPageMatrix,
  correlationCountRows,
  renderCorrelationHtml,
  renderCorrelationMarkdown
} from "../../scanner/correlation-report.mjs";
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";

const PAGE = `<html><body><main><img id="goose-photo" src="goose.jpg"><a class="govuk-link" href="/a/">A</a><a class="govuk-link" href="/b/">B</a></main></body></html>`;

function evidence() {
  const observations = buildObservationArtifact({
    issueNumber: 7,
    scanTitle: "Fixture",
    results: [
      {
        finalUrl: "https://example.org/page/",
        scanContext: { browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
        axe: {
          failures: [
            { rule: "image-alt", selector: "#goose-photo", html: "<img id=\"goose-photo\">", message: "alt" }
          ],
          renderedHtml: PAGE
        },
        alfa: {
          failures: [
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r2",
              selector: "#goose-photo",
              html: "<img id=\"goose-photo\">",
              message: "alt"
            },
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r111",
              xpath: "/a[@class=\"govuk-link\"]",
              html: "<a class=\"govuk-link\" href=\"/a/\">A</a>",
              message: "target size"
            }
          ]
        },
        equalAccess: { failures: [] },
        accesslint: { failures: [] },
        qualweb: { failures: [] }
      }
    ]
  });
  return { observations, correlation: correlateObservations(observations) };
}

function makeSummary(overrides = {}) {
  return {
    issueNumber: 7,
    issueUrl: "https://github.com/example/repo/issues/7",
    scanTitle: "Fixture",
    scannedAt: "2026-11-19T00:00:00.000Z",
    totalElapsedMs: 1000,
    totalSubmitted: 1,
    acceptedCount: 1,
    scannedCount: 1,
    engines: ["all"],
    scanContext: {
      viewport: { width: 1280, height: 800 },
      viewportPreset: "desktop",
      colorScheme: "light",
      browser: "chromium"
    },
    results: [],
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} },
    axeTotals: { cantTell: 0 },
    ...overrides
  };
}

test("counts are reported as labelled rows, not a score", () => {
  const { correlation } = evidence();
  const rows = correlationCountRows(correlation);
  const labels = rows.map(([label]) => label);

  assert.ok(labels.includes("Raw engine observations"));
  assert.ok(labels.includes("Correlated issues (2+ engines, same resolved target)"));
  assert.ok(labels.includes("Insufficient evidence (unresolved target or unmapped rule)"));
  assert.equal(rows.some(([label]) => /score/i.test(label)), false);
});

test("page matrix counts observations per engine", () => {
  const { observations, correlation } = evidence();
  const matrix = buildPageMatrix(observations, correlation);

  assert.equal(matrix.length, 1);
  assert.equal(matrix[0].counts.get("axe"), 1);
  assert.equal(matrix[0].counts.get("alfa"), 2);
  assert.equal(matrix[0].total, 3);
});

test("Markdown renders correlated findings with per-engine evidence", () => {
  const { observations, correlation } = evidence();
  const markdown = renderCorrelationMarkdown({ correlation, observations });

  assert.match(markdown, /## 🔗 Multi-engine evidence/);
  assert.match(markdown, /### Observations per page and engine/);
  assert.match(markdown, /### Correlated findings/);
  assert.match(markdown, /Missing|text alternative|text-alternative/i);
  assert.match(markdown, /Raw evidence/);
  assert.match(markdown, /report\.json#\/results\/0\/axe\/failures\/0/);
  assert.match(markdown, /### Target disagreements/);
});

test("HTML uses landmarks, captions, scoped headers and disclosures", () => {
  const { observations, correlation } = evidence();
  const html = renderCorrelationHtml({ correlation, observations });

  assert.match(html, /<section id="multi-engine-evidence" aria-labelledby="multi-engine-heading"/);
  assert.match(html, /<h2 id="multi-engine-heading">/);
  assert.match(html, /<table class="corr-table" aria-labelledby="corr-matrix-heading">/);
  assert.match(html, /<caption>/);
  assert.match(html, /scope="col"/);
  assert.match(html, /scope="row"/);
  assert.match(html, /<details>/);
  assert.match(html, /<summary>/);
  assert.match(html, /<fieldset class="corr-filter">/);
  assert.match(html, /<legend>Filter correlated findings<\/legend>/);
  assert.match(html, /role="status" aria-live="polite"/);
  assert.match(html, /data-mapping="/);
  assert.match(html, /<div class="table-scroll">/);
});

test("the filter is keyboard native and works without colour", () => {
  const { observations, correlation } = evidence();
  const html = renderCorrelationHtml({ correlation, observations });

  assert.match(html, /<input type="radio" name="corr-filter"/);
  assert.match(html, /<label><input/);
  assert.equal(/style="[^"]*(color|background)/i.test(html), false, "no inline colour encoding");
  assert.match(html, /status\.textContent = 'Showing '/);
});

test("engine-supplied text is escaped in both renderers", () => {
  const observations = { observations: [] };
  const correlation = {
    counts: {
      rawObservations: 1,
      correlatedIssues: 1,
      verifiedEquivalentFindings: 0,
      versionMismatchedFindings: 0,
      inferredEquivalentFindings: 0,
      singleEngineFindings: 0,
      relatedFindings: 0,
      targetDisagreements: 0,
      notComparableObservations: 0,
      insufficientEvidenceObservations: 0
    },
    issues: [
      {
        correlatedIssueId: "x".repeat(64),
        url: "https://example.org/\"><script>alert(1)</script>",
        family: "text-alternative",
        familyLabel: "<script>alert(2)</script>",
        targetId: "dom:v1:h:/img[1]",
        engines: ["axe", "alfa"],
        actRuleIds: [],
        actVerified: false,
        mappingStatus: "inferred-semantics",
        rationale: "same target",
        observations: [
          {
            engine: "axe",
            ruleId: "<img onerror=alert(3)>",
            nativeLocator: "\"><script>alert(4)</script>",
            resolutionMethod: "css",
            rawEvidenceRef: "report.json#/x"
          }
        ]
      }
    ],
    disagreements: [],
    related: []
  };

  const html = renderCorrelationHtml({ correlation, observations });
  assert.equal(html.includes("<script>alert"), false);
  assert.equal(html.includes("<img onerror"), false);
  assert.match(html, /&lt;script&gt;alert\(1\)/);
  assert.match(html, /&lt;img onerror=alert\(3\)&gt;/);

  const markdown = renderCorrelationMarkdown({ correlation, observations });
  assert.equal(markdown.includes("<script>alert(1)"), false);
  assert.match(markdown, /&lt;script&gt;alert\(1\)/);
});

test("interactive report includes the section only when a correlation report is supplied", () => {
  const { observations, correlation } = evidence();
  const summary = makeSummary();

  const without = generateInteractiveHtml(summary);
  assert.equal(without.includes('id="multi-engine-evidence"'), false);

  const withSection = generateInteractiveHtml(summary, null, null, { correlation, observations });
  assert.match(withSection, /id="multi-engine-evidence"/);
  assert.match(withSection, /Multi-engine evidence/);
});

test("empty correlation states are explicit rather than silent", () => {
  const { observations } = evidence();
  const empty = {
    issues: [],
    disagreements: [],
    related: [],
    counts: {
      rawObservations: 3,
      correlatedIssues: 0,
      verifiedEquivalentFindings: 0,
      versionMismatchedFindings: 0,
      inferredEquivalentFindings: 0,
      singleEngineFindings: 3,
      relatedFindings: 0,
      targetDisagreements: 0,
      notComparableObservations: 0,
      insufficientEvidenceObservations: 0
    }
  };

  const html = renderCorrelationHtml({ correlation: empty, observations });
  assert.match(html, /No two engines reported the same failure mechanism/);
  assert.match(html, /No engine reported the same failure mechanism on different targets/);
});

test("single-engine findings name the engines that map the rule but stayed silent", () => {
  const correlation = {
    counts: {
      rawObservations: 1, correlatedIssues: 0, correlatedObservations: 0,
      singleEngineFindings: 1, singleEngineObservations: 1, insufficientEvidenceObservations: 0,
      repeatedObservations: 0, notComparableObservations: 0, targetDisagreements: 0,
      relatedFindings: 0, verifiedEquivalentFindings: 0, versionMismatchedFindings: 0,
      inferredEquivalentFindings: 0
    },
    issues: [],
    singles: [
      {
        family: "act:97a4e1",
        familyLabel: "ACT 97a4e1",
        url: "https://example.org/frame/",
        targetId: "dom:v1:abc:/html[1]/body[1]/main[1]/iframe[1]",
        engines: ["axe"],
        actRuleIds: ["97a4e1"],
        mappingStatus: "act-verified-different-version",
        classification: "detection-asymmetry",
        rationale: "Only one engine reported this failure on this target.",
        observations: [
          {
            engine: "axe",
            ruleId: "button-name",
            nativeLocator: "iframe",
            resolutionMethod: "css",
            framePath: ["iframe", "#target"],
            rawEvidenceRef: "report.json#/results/0/axe/failures/0"
          }
        ]
      }
    ],
    disagreements: [],
    related: []
  };
  const observations = {
    scan: {
      engineExecution: {
        axe: { status: "executed" },
        alfa: { status: "executed" },
        equalAccess: { status: "executed" },
        accesslint: { status: "executed" },
        sa11y: { status: "executed" }
      }
    },
    observations: []
  };

  const markdown = renderCorrelationMarkdown({ correlation, observations });
  assert.match(markdown, /### Single-engine findings/);
  assert.match(markdown, /Mapped to the same ACT rule but silent here: ALFA, Equal Access, AccessLint, Sa11y/);
  assert.match(markdown, /candidate for review/);
  assert.match(markdown, /Frame-scoped: reported inside a nested document/);

  const html = renderCorrelationHtml({ correlation, observations });
  assert.match(html, /corr-singles-heading/);
  assert.match(html, /Mapped to the same ACT rule but silent here:/);
  assert.match(html, /Frame-scoped:/);
});

test("unmapped native rules are listed so silence is not read as a pass", () => {
  const correlation = {
    counts: {
      rawObservations: 2, correlatedIssues: 0, correlatedObservations: 0,
      singleEngineFindings: 0, singleEngineObservations: 0, insufficientEvidenceObservations: 2,
      repeatedObservations: 0, notComparableObservations: 0, targetDisagreements: 0,
      relatedFindings: 0, verifiedEquivalentFindings: 0, versionMismatchedFindings: 0,
      inferredEquivalentFindings: 0
    },
    issues: [],
    singles: [],
    disagreements: [],
    related: []
  };
  const observations = {
    scan: { engineExecution: { alfa: { status: "executed" }, axe: { status: "executed" } } },
    observations: [
      { engine: { name: "alfa", ruleId: "https://alfa.siteimprove.com/rules/sia-r66" }, actRuleIds: [] },
      { engine: { name: "alfa", ruleId: "https://alfa.siteimprove.com/rules/sia-r66" }, actRuleIds: [] }
    ]
  };

  const markdown = renderCorrelationMarkdown({ correlation, observations });
  assert.match(markdown, /### Native rules without an ACT mapping/);
  assert.match(markdown, /sia-r66/);

  const html = renderCorrelationHtml({ correlation, observations });
  assert.match(html, /corr-unmapped-heading/);
});
