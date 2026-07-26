import test from "node:test";
import assert from "node:assert/strict";
import { computeLocatorCorroboration, toMarkdownReport } from "../../scanner/run-scan.mjs";

function makeResult(overrides = {}) {
  const noopScanner = { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } };
  return {
    finalUrl: "https://example.com/",
    axe: { ...noopScanner },
    alfa: { ...noopScanner },
    equalAccess: { ...noopScanner },
    accesslint: { ...noopScanner },
    qualweb: { ...noopScanner },
    semantica11y: { executed: true, summary: { total: 0, errors: 0, warnings: 0, suggestions: 0 }, issues: [] },
    ...overrides
  };
}

test("computeLocatorCorroboration flags findings on the same locator from two different engines", () => {
  const axeFailure = { rule: "image-alt", xpath: "//img[1]", isDuplicate: false };
  const alfaFailure = { rule: "sia-r13", xpath: "//img[1]", isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
    alfa: { failures: [alfaFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } }
  });

  computeLocatorCorroboration(result);

  assert.deepEqual(axeFailure.corroboratedBy, ["alfa"]);
  assert.deepEqual(alfaFailure.corroboratedBy, ["axe"]);
});

test("computeLocatorCorroboration does not flag a finding alone on its locator", () => {
  const axeFailure = { rule: "image-alt", xpath: "//img[1]", isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } }
  });

  computeLocatorCorroboration(result);

  assert.equal(axeFailure.corroboratedBy, undefined);
});

test("computeLocatorCorroboration matches a Semantica11y issue with an axe finding on the same element", () => {
  const axeFailure = { rule: "image-alt", html: "<img>", isDuplicate: false };
  const semanticaIssue = { rule: "image-alt", element: "<img>", severity: "error" };
  const result = makeResult({
    axe: { failures: [axeFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
    semantica11y: { executed: true, summary: { total: 1, errors: 1, warnings: 0, suggestions: 0 }, issues: [semanticaIssue] }
  });

  computeLocatorCorroboration(result);

  assert.deepEqual(axeFailure.corroboratedBy, ["semantica11y"]);
  assert.deepEqual(semanticaIssue.corroboratedBy, ["axe"]);
});

test("computeLocatorCorroboration ignores duplicate findings", () => {
  const axeFailure = { rule: "image-alt", xpath: "//img[1]", isDuplicate: false };
  const dupFailure = { rule: "sia-r13", xpath: "//img[1]", isDuplicate: true };
  const result = makeResult({
    axe: { failures: [axeFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
    alfa: { failures: [dupFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } }
  });

  computeLocatorCorroboration(result);

  assert.equal(axeFailure.corroboratedBy, undefined, "should not corroborate against a duplicate");
});

test("computeLocatorCorroboration ignores Semantica11y document-level issues (no real element locator)", () => {
  const axeFailure = { rule: "page-has-heading-one", xpath: "//body", isDuplicate: false };
  const semanticaIssue = { rule: "heading-hierarchy", element: "document", severity: "warning" };
  const result = makeResult({
    axe: { failures: [axeFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
    semantica11y: { executed: true, summary: { total: 1, errors: 0, warnings: 1, suggestions: 0 }, issues: [semanticaIssue] }
  });

  computeLocatorCorroboration(result);

  assert.equal(semanticaIssue.corroboratedBy, undefined);
  assert.equal(axeFailure.corroboratedBy, undefined);
});

test("computeLocatorCorroboration lists all other scanners when three or more agree", () => {
  const axeFailure = { rule: "image-alt", xpath: "//img[1]", isDuplicate: false };
  const alfaFailure = { rule: "sia-r13", xpath: "//img[1]", isDuplicate: false };
  const semanticaIssue = { rule: "image-alt", element: "//img[1]", severity: "error" };
  const result = makeResult({
    axe: { failures: [axeFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
    alfa: { failures: [alfaFailure], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
    semantica11y: { executed: true, summary: { total: 1, errors: 1, warnings: 0, suggestions: 0 }, issues: [semanticaIssue] }
  });

  computeLocatorCorroboration(result);

  assert.deepEqual([...axeFailure.corroboratedBy].sort(), ["alfa", "semantica11y"]);
  assert.deepEqual([...alfaFailure.corroboratedBy].sort(), ["axe", "semantica11y"]);
  assert.deepEqual([...semanticaIssue.corroboratedBy].sort(), ["alfa", "axe"]);
});

// ── Markdown report rendering ───────────────────────────────────────────────

function buildSummaryForMarkdown(axeFailure) {
  return {
    issueNumber: 1,
    issueUrl: "https://github.com/example/repo/issues/1",
    issueTitle: "Test scan",
    scanTitle: "Test scan",
    submittedBy: "tester",
    scannedAt: new Date().toISOString(),
    totalSubmitted: 1,
    acceptedCount: 1,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
    axeTotals: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 },
    results: [
      {
        submittedUrl: "https://example.com",
        finalUrl: "https://example.com",
        pageTitle: "Example",
        alfa: { executed: false, failures: [], failedRules: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
        axe: { executed: true, failures: [axeFailure], failedRules: [axeFailure.rule], counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 } },
        equalAccess: { executed: false, failures: [], failedRules: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
        accesslint: { executed: false, failures: [], failedRules: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
        qualweb: { executed: false, failures: [], failedRules: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
        semantica11y: { executed: true, summary: { total: 0, errors: 0, warnings: 0, suggestions: 0 }, issues: [] }
      }
    ]
  };
}

test("toMarkdownReport shows a corroboration line for a corroborated axe failure", () => {
  const axeFailure = { rule: "image-alt", xpath: "//img[1]", isDuplicate: false, corroboratedBy: ["semantica11y"] };
  const summary = buildSummaryForMarkdown(axeFailure);
  const markdown = toMarkdownReport(summary);
  assert.match(markdown, /Corroborated by Semantica11y/);
  assert.match(markdown, /independent tools, a stronger signal/);
});

test("toMarkdownReport omits the corroboration line when a failure is not corroborated", () => {
  const axeFailure = { rule: "image-alt", xpath: "//img[1]", isDuplicate: false };
  const summary = buildSummaryForMarkdown(axeFailure);
  const markdown = toMarkdownReport(summary);
  assert.doesNotMatch(markdown, /Corroborated by/);
});
