import test from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadAllTrends,
  aggregateSystemicPatterns,
  renderTrendSparkline,
  generateTrendsHtml,
} from "../../scanner/generate-trends-html.mjs";

const tmpDir = fileURLToPath(new URL("../../.tmp/test-trends-html", import.meta.url));

function makeTrendsJson(overrides = {}) {
  return {
    scansAnalysed: 3,
    overallTrend: "improving",
    improvingCount: 2,
    worseningCount: 1,
    baselineTotals: { combined: 100, scannedAt: "2026-01-01T00:00:00.000Z", alfa: 50, axe: 30, equalAccess: 20, qualweb: 0, accesslint: 0 },
    latestTotals: { combined: 70, scannedAt: "2026-01-15T00:00:00.000Z", alfa: 35, axe: 20, equalAccess: 15, qualweb: 0, accesslint: 0 },
    latestDiff: { change: -10, trend: "improving", from: { scannedAt: "2026-01-08T00:00:00.000Z", totals: { combined: 80 } }, to: { scannedAt: "2026-01-15T00:00:00.000Z", totals: { combined: 70 } } },
    diffs: [
      { change: -20, trend: "improving", from: { scannedAt: "2026-01-01T00:00:00.000Z", totals: { combined: 100 } }, to: { scannedAt: "2026-01-08T00:00:00.000Z", totals: { combined: 80 } } },
      { change: -10, trend: "improving", from: { scannedAt: "2026-01-08T00:00:00.000Z", totals: { combined: 80 } }, to: { scannedAt: "2026-01-15T00:00:00.000Z", totals: { combined: 70 } } },
    ],
    latestSystemicPatterns: [
      { ruleId: "axe:color-contrast", pageCount: 12, pages: [] },
      { ruleId: "https://alfa.siteimprove.com/rules/sia-r56", pageCount: 8, pages: [] },
    ],
    ...overrides,
  };
}

function writeIssue(issueNumber, trendsData, reportData = null) {
  const dir = join(tmpDir, "issues", `issue-${issueNumber}`);
  const stamp = "2026-01-15T00-00-00-000Z";
  const scanDir = join(dir, stamp);
  mkdirSync(scanDir, { recursive: true });
  writeFileSync(join(dir, "trends.json"), JSON.stringify(trendsData));
  if (reportData) {
    writeFileSync(join(scanDir, "report.json"), JSON.stringify(reportData));
  }
}

// ---------------------------------------------------------------------------
// loadAllTrends
// ---------------------------------------------------------------------------

test("loadAllTrends returns empty for non-existent directory", () => {
  const result = loadAllTrends("/nonexistent/path/xyz");
  assert.deepEqual(result, []);
});

test("loadAllTrends loads trends.json files from issue directories", () => {
  try {
    const trends = makeTrendsJson();
    const reportData = { issueNumber: 10, scanTitle: "Test Site", scannedAt: "2026-01-15T00:00:00.000Z" };
    writeIssue(10, trends, reportData);

    const result = loadAllTrends(tmpDir);
    assert.ok(result.length >= 1, "Should find at least one issue");
    const item = result.find((t) => t.issueNumber === 10);
    assert.ok(item, "Should find issue 10");
    assert.equal(item.scanTitle, "Test Site");
    assert.equal(item.analysis.overallTrend, "improving");
  } finally {
    rmSync(join(tmpDir, "issues", "issue-10"), { recursive: true, force: true });
  }
});

test("loadAllTrends skips directories without trends.json", () => {
  try {
    // Create an issue dir with no trends.json
    const dir = join(tmpDir, "issues", "issue-99");
    const stamp = "2026-01-15T00-00-00-000Z";
    mkdirSync(join(dir, stamp), { recursive: true });

    const result = loadAllTrends(tmpDir);
    const item = result.find((t) => t.issueNumber === 99);
    assert.equal(item, undefined, "Should not include issue without trends.json");
  } finally {
    rmSync(join(tmpDir, "issues", "issue-99"), { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------
// aggregateSystemicPatterns
// ---------------------------------------------------------------------------

test("aggregateSystemicPatterns sums page counts across issues", () => {
  const trendItems = [
    { analysis: { latestSystemicPatterns: [{ ruleId: "axe:color-contrast", pageCount: 5 }, { ruleId: "axe:aria-label", pageCount: 3 }] } },
    { analysis: { latestSystemicPatterns: [{ ruleId: "axe:color-contrast", pageCount: 7 }] } },
  ];
  const patterns = aggregateSystemicPatterns(trendItems);
  const cc = patterns.find((p) => p.ruleId === "axe:color-contrast");
  assert.ok(cc, "Should include color-contrast");
  assert.equal(cc.issueCount, 2);
  assert.equal(cc.totalPageCount, 12);
});

test("aggregateSystemicPatterns returns empty for no data", () => {
  assert.deepEqual(aggregateSystemicPatterns([]), []);
});

test("aggregateSystemicPatterns sorts by total page count descending", () => {
  const trendItems = [
    { analysis: { latestSystemicPatterns: [{ ruleId: "rule-a", pageCount: 3 }, { ruleId: "rule-b", pageCount: 10 }] } },
  ];
  const patterns = aggregateSystemicPatterns(trendItems);
  assert.equal(patterns[0].ruleId, "rule-b", "Highest page count should be first");
});

// ---------------------------------------------------------------------------
// renderTrendSparkline
// ---------------------------------------------------------------------------

test("renderTrendSparkline returns message for insufficient data", () => {
  const analysis = { error: "Insufficient history", latestTotals: { combined: 50 }, baselineTotals: null, diffs: [] };
  const result = renderTrendSparkline(analysis);
  assert.ok(typeof result === "string");
  assert.ok(result.length > 0);
});

test("renderTrendSparkline produces SVG for analysis with history", () => {
  const analysis = makeTrendsJson();
  const result = renderTrendSparkline(analysis);
  assert.ok(result.includes("<svg"), "Should produce SVG");
  assert.ok(result.includes("rect"), "Should include bar rects");
});

// ---------------------------------------------------------------------------
// generateTrendsHtml
// ---------------------------------------------------------------------------

test("generateTrendsHtml produces valid HTML structure", () => {
  const trendItems = [
    {
      issueNumber: 5,
      scanTitle: "Example Site",
      reportPath: "reports/issues/issue-5/2026-01-15T00-00-00-000Z",
      analysis: makeTrendsJson(),
    },
  ];
  const html = generateTrendsHtml(trendItems);
  assert.ok(html.includes("<!DOCTYPE html>"), "Should include DOCTYPE");
  assert.ok(html.includes("<html lang=\"en\">"), "Should include html[lang]");
  assert.ok(html.includes("Accessibility Trends"), "Should include page title");
  assert.ok(html.includes("Example Site"), "Should include scan title");
  assert.ok(html.includes("improving"), "Should show trend direction");
  assert.ok(html.includes("color-contrast"), "Should show systemic patterns");
});

test("generateTrendsHtml shows no-data message when empty", () => {
  const html = generateTrendsHtml([]);
  assert.ok(html.includes("No trend data available"), "Should show no data message");
});

test("generateTrendsHtml includes nav links", () => {
  const html = generateTrendsHtml([]);
  assert.ok(html.includes("reports.html"), "Should link to reports.html");
  assert.ok(html.includes("index.html"), "Should link to index.html");
  assert.ok(html.includes('aria-current="page"'), "Should mark trends as current page");
});

test("generateTrendsHtml includes stats summary cards", () => {
  const html = generateTrendsHtml([
    { issueNumber: 1, scanTitle: "S1", reportPath: "p1", analysis: makeTrendsJson() },
    { issueNumber: 2, scanTitle: "S2", reportPath: "p2", analysis: makeTrendsJson({ overallTrend: "worsening", worseningCount: 2, improvingCount: 1 }) },
  ]);
  assert.ok(html.includes("Issues tracked"), "Should show issues tracked");
  assert.ok(html.includes("Improving"), "Should show improving count");
  assert.ok(html.includes("Worsening"), "Should show worsening count");
});
