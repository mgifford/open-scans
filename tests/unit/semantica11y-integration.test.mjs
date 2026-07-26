import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { toMarkdownReport } from "../../scanner/run-scan.mjs";
import { runSemantica11yAudit } from "../../scanner/semantica11y-audit.mjs";

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
    reflowRisk: { executed: false, result: null, description: null, overflowAmountPx: null, helpUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html", error: "Skipped" },
    semantica11y: { executed: true, summary: { total: 0, errors: 0, warnings: 0, suggestions: 0 }, issues: [], error: null },
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

describe("Semantica11y audit", () => {
  it("returns a not-executed result when no HTML is available", async () => {
    const result = await runSemantica11yAudit(null, "https://example.com");
    assert.equal(result.executed, false);
    assert.match(result.error, /No rendered HTML/);
  });

  it("analyzes rendered HTML and returns severity-tagged issues", async () => {
    const html = "<html><body><img src=\"logo.png\" /></body></html>";
    const result = await runSemantica11yAudit(html, "https://example.com");
    assert.equal(result.executed, true);
    assert.equal(result.error, null);
    assert.ok(result.summary.total > 0);
    assert.ok(result.issues.some((issue) => issue.rule === "image-alt"));
  });
});

describe("Semantica11y report integration", () => {
  it("markdown report includes a clean-scan message when no issues are found", () => {
    const summary = buildSummary([buildResult()]);
    const markdown = toMarkdownReport(summary);
    assert.match(markdown, /## 🏷️ Semantic HTML & ARIA \(Semantica11y\)/);
    assert.match(markdown, /No semantic HTML\/ARIA errors or warnings detected on any scanned page/);
  });

  it("markdown report lists pages with semantica11y errors or warnings", () => {
    const flagged = buildResult({
      finalUrl: "https://example.com/no-alt",
      pageTitle: "Missing alt text",
      semantica11y: {
        executed: true,
        summary: { total: 1, errors: 1, warnings: 0, suggestions: 0 },
        issues: [
          {
            severity: "error",
            rule: "image-alt",
            element: "<img>",
            message: "Image is missing an alt attribute",
            suggestion: "Add an alt attribute",
            line: 0
          }
        ],
        error: null
      }
    });
    const summary = buildSummary([buildResult(), flagged]);
    const markdown = toMarkdownReport(summary);
    assert.match(markdown, /https:\/\/example\.com\/no-alt/);
    assert.doesNotMatch(markdown, /No semantic HTML\/ARIA errors or warnings detected on any scanned page/);
  });

  it("keeps semantica11y totals separate from WCAG violation counts", () => {
    const flagged = buildResult({
      semantica11y: {
        executed: true,
        summary: { total: 2, errors: 1, warnings: 1, suggestions: 0 },
        issues: [],
        error: null
      }
    });
    const summary = buildSummary([flagged]);
    summary.semantica11yTotals = { errors: 1, warnings: 1, suggestions: 0, notExecuted: 0 };
    const markdown = toMarkdownReport(summary);
    assert.match(markdown, /Semantica11y outcomes .*kept separate from WCAG violation counts.*1 errors, 1 warnings/);
  });

  it("markdown report handles a URL where semantica11y was skipped (non-HTML content)", () => {
    const skipped = buildResult({
      contentType: "application/pdf",
      semantica11y: { executed: false, summary: null, issues: [], error: "Skipped (non-HTML content type: application/pdf)" }
    });
    const summary = buildSummary([skipped]);
    assert.doesNotThrow(() => toMarkdownReport(summary));
  });
});
