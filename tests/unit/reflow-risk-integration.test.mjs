import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { toMarkdownReport } from "../../scanner/run-scan.mjs";
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";

function buildResult(overrides = {}) {
  return {
    submittedUrl: "https://example.com",
    finalUrl: "https://example.com",
    redirected: false,
    statusCode: 200,
    ok: true,
    contentType: "text/html",
    pageTitle: "Example Domain",
    elapsedMs: 1000,
    error: null,
    scanContext: { browser: "chromium", colorScheme: "light", viewportPreset: "desktop", viewport: { width: 1280, height: 800 } },
    alfa: { executed: false, error: "Skipped", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failedRules: [], passedRules: [], failures: [], outcomeCount: 0 },
    axe: { executed: false, error: "Skipped", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failedRules: [], passedRules: [], failures: [], outcomeCount: 0 },
    equalAccess: { executed: false, error: "Skipped", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failedRules: [], passedRules: [], failures: [], outcomeCount: 0 },
    accesslint: { executed: false, error: "Skipped", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failedRules: [], passedRules: [], failures: [], outcomeCount: 0 },
    qualweb: { executed: false, error: "Skipped", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failedRules: [], passedRules: [], failures: [], outcomeCount: 0 },
    reflowRisk: { executed: true, result: "passed", description: "No horizontal overflow detected at 320px width", overflowAmountPx: 0, helpUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html", error: null },
    duplicateFindingCount: 0,
    ...overrides
  };
}

function buildSummary(results) {
  return {
    issueNumber: 1,
    issueUrl: "https://github.com/example/repo/issues/1",
    issueTitle: "Test scan",
    scanTitle: "Test scan",
    submittedBy: "tester",
    engines: ["all"],
    scanContext: { browser: "chromium", colorScheme: "light", viewportPreset: "desktop", viewport: { width: 1280, height: 800 } },
    scannedAt: new Date().toISOString(),
    totalElapsedMs: 1000,
    totalSubmitted: results.length,
    acceptedCount: results.length,
    scannedCount: results.length,
    skippedDueToTimeout: 0,
    skippedDueToErrAborted: 0,
    rejectedCount: 0,
    rejected: [],
    alfaTotals: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
    axeTotals: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
    qualwebTotals: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 },
    duplicateFindingTotals: 0,
    duplicateTitles: [],
    results,
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} },
    changeTracking: null
  };
}

describe("Reflow risk report integration", () => {
  it("markdown report includes a clean-scan message when no page has reflow risk", () => {
    const summary = buildSummary([buildResult()]);
    const markdown = toMarkdownReport(summary);
    assert.match(markdown, /## 🧭 Reflow Risk \(WCAG 1\.4\.10\)/);
    assert.match(markdown, /No horizontal overflow detected at 320px width on any scanned page/);
  });

  it("markdown report lists pages with a failed or potential reflow result", () => {
    const failing = buildResult({
      finalUrl: "https://example.com/narrow",
      pageTitle: "Narrow page",
      reflowRisk: {
        executed: true,
        result: "failed",
        description: "Horizontal overflow detected: 42px of content overflowed the viewport at 320px width",
        overflowAmountPx: 42,
        helpUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
        error: null
      }
    });
    const summary = buildSummary([buildResult(), failing]);
    const markdown = toMarkdownReport(summary);
    assert.match(markdown, /https:\/\/example\.com\/narrow/);
    assert.match(markdown, /42px of content overflowed/);
    assert.doesNotMatch(markdown, /No horizontal overflow detected at 320px width on any scanned page/);
  });

  it("markdown report does not add reflow risk as a rule-based engine column", () => {
    const summary = buildSummary([buildResult()]);
    const markdown = toMarkdownReport(summary);
    assert.doesNotMatch(markdown, /Reflow Errors/);
  });

  it("interactive HTML report includes a clean-scan message when no page has reflow risk", () => {
    const summary = buildSummary([buildResult()]);
    const html = generateInteractiveHtml(summary);
    assert.match(html, /Reflow Risk \(WCAG 1\.4\.10\)/);
    assert.match(html, /No horizontal overflow detected at 320px width on any scanned page/);
  });

  it("interactive HTML report lists pages with a failed or potential reflow result", () => {
    const failing = buildResult({
      finalUrl: "https://example.com/narrow",
      pageTitle: "Narrow page",
      reflowRisk: {
        executed: true,
        result: "failed",
        description: "Horizontal overflow detected: 42px of content overflowed the viewport at 320px width",
        overflowAmountPx: 42,
        helpUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
        error: null
      }
    });
    const summary = buildSummary([buildResult(), failing]);
    const html = generateInteractiveHtml(summary);
    assert.match(html, /Narrow page/);
    assert.match(html, /badge-reflow-failed/);
  });

  it("markdown report handles a URL where reflow risk was skipped (non-HTML content)", () => {
    const skipped = buildResult({
      contentType: "application/pdf",
      reflowRisk: {
        executed: false,
        result: null,
        description: null,
        overflowAmountPx: null,
        helpUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
        error: "Skipped (non-HTML content type: application/pdf)"
      }
    });
    const summary = buildSummary([skipped]);
    assert.doesNotThrow(() => toMarkdownReport(summary));
    assert.doesNotThrow(() => generateInteractiveHtml(summary));
  });
});
