import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import {
  ACCESSIBILITY_COMPARISON_SCHEMA_VERSION,
  compareScanReports,
  formatComparisonMarkdown,
  formatComparisonHtml,
  comparisonToCsv
} from "../../scanner/compare-scans.mjs";

const fixture = (name) => JSON.parse(readFileSync(new URL(`../fixtures/comparison/${name}`, import.meta.url), "utf8"));
const baseline = fixture("baseline-report.json");
const optimized = fixture("optimized-report.json");
const noRegression = fixture("no-regression-report.json");

function compare(comparison = optimized, options = {}) {
  const result = compareScanReports(baseline, comparison, {
    generatedAt: "2026-11-16T12:00:00.000Z",
    baselineRelease: "v1.0.0",
    comparisonRelease: "v1.1.0",
    ...options
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

test("fixture comparison classifies new, persistent, changed, absent and unevaluated findings", () => {
  const result = compare();
  assert.equal(result.schema, ACCESSIBILITY_COMPARISON_SCHEMA_VERSION);
  assert.equal(result.summary.pagesCompared, 2);
  assert.equal(result.summary.pagesBaselineOnly, 1);
  assert.equal(result.summary.pagesComparisonOnly, 1);
  assert.equal(result.summary.newCount, 1);
  assert.equal(result.summary.persistentCount, 2);
  assert.equal(result.summary.detailsChangedCount, 1);
  assert.equal(result.summary.notObservedCount, 1);
  assert.equal(result.summary.notEvaluatedCount, 1);
  assert.equal(result.summary.confirmedRemediations, 0);
  assert.equal(result.findings.new[0].ruleId, "button-name");
  assert.equal(result.findings.new[0].confidence, "high");
  assert.equal(result.findings["not-observed"][0].ruleId, "SIA-R2");
  assert.equal(result.findings["not-evaluated"][0].ruleId, "heading-order");
  assert.ok(result.coverageGaps.some((gap) => gap.kind === "baseline-only-page"));
  assert.ok(result.coverageGaps.some((gap) => gap.kind === "comparison-only-page"));
});

test("a no-longer-observed finding is explicitly not a confirmed remediation", () => {
  const result = compare();
  const absent = result.findings["not-observed"][0];
  assert.equal(absent.classification, "not-observed");
  assert.equal(absent.confirmedRemediation, false);
  assert.match(absent.qualification, /not proof of remediation/i);
  assert.equal(result.summary.confirmedRemediations, 0);
  const markdown = formatComparisonMarkdown(result);
  assert.match(markdown, /No longer observed does not mean fixed/i);
  assert.match(markdown, /not proof of remediation/i);
});

test("a persistent finding keeps its original identities and evidence references", () => {
  const result = compare();
  const persistent = result.findings.persistent.find((finding) => finding.page.baselineUrl.endsWith("/services"));
  assert.ok(persistent);
  assert.equal(persistent.baseline.occurrenceId, "dddddddddddd");
  assert.equal(persistent.comparison.occurrenceId, "dddddddddddd");
  assert.equal(persistent.baseline.evidenceRef.includes("results[1]"), true);
  assert.equal(persistent.matchBasis, "exact");
  assert.equal(persistent.confidence, "high");
});

test("changed details are reported with the before and after values", () => {
  const result = compare();
  const changed = result.findings["details-changed"][0];
  assert.equal(changed.ruleId, "image-alt");
  const htmlChange = changed.detailsChanged.find((difference) => difference.field === "html");
  assert.ok(htmlChange);
  assert.match(htmlChange.baseline, /hero\.jpg/);
  assert.match(htmlChange.comparison, /hero-optimized\.jpg/);
});

test("no-detected-regression fixture is persistent only and still states automated limits", () => {
  const result = compare(noRegression);
  assert.equal(result.summary.newCount, 0);
  assert.equal(result.summary.persistentCount, 5);
  assert.equal(result.summary.detailsChangedCount, 0);
  assert.equal(result.summary.notObservedCount, 0);
  assert.equal(result.summary.confirmedRemediations, 0);
  assert.ok(result.limitations.some((limitation) => /cannot establish WCAG conformance/i.test(limitation)));
  assert.ok(result.limitations.some((limitation) => /functional equivalence/i.test(limitation)));
});

test("different production and staging URLs require an explicit reviewed mapping", () => {
  const staging = structuredClone(optimized);
  for (const result of staging.results) {
    result.submittedUrl = result.submittedUrl.replace("example.gov", "staging.example.gov");
    result.finalUrl = result.finalUrl.replace("example.gov", "staging.example.gov");
  }

  const unmapped = compare(staging);
  assert.equal(unmapped.summary.pagesCompared, 0);
  assert.equal(unmapped.summary.newCount, 0);
  assert.equal(unmapped.summary.notObservedCount, 0);
  assert.equal(unmapped.summary.notEvaluatedCount, 9);
  assert.equal(unmapped.coverageGaps.length, 6);

  const mapped = compare(staging, {
    pageMappings: [
      "https://example.gov/=https://staging.example.gov/",
      "https://example.gov/services=https://staging.example.gov/services"
    ]
  });
  assert.equal(mapped.summary.pagesCompared, 2);
  assert.equal(mapped.summary.newCount, 1);
  assert.equal(mapped.pageMappings[0].mapping, "explicit");
  assert.equal(mapped.pageMappings[0].comparisonUrl, "https://staging.example.gov/");
});

test("invalid page mappings fail instead of silently comparing the wrong pages", () => {
  const result = compareScanReports(baseline, optimized, {
    pageMappings: ["https://example.gov/=https://staging.example.gov/missing"],
    generatedAt: "2026-11-16T12:00:00.000Z"
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /not found/i);
});

test("testing-condition differences are visible and lower confidence", () => {
  const different = structuredClone(optimized);
  different.scanContext.viewport = { width: 390, height: 844 };
  for (const result of different.results) result.scanContext.viewport = { width: 390, height: 844 };
  const result = compare(different);
  assert.equal(result.conditions.compatible, false);
  assert.ok(result.conditions.differences.some((difference) => difference.field === "viewport"));
  assert.ok(result.limitations.some((limitation) => /differs between scans/i.test(limitation)));
  assert.equal(result.findings.new[0].confidence, "low");
  assert.equal(result.findings["not-observed"][0].confidence, "low");
});

test("an engine absent from the comparison is not treated as a remediation", () => {
  const different = structuredClone(optimized);
  different.engines = ["axe"];
  for (const result of different.results) {
    if (result.alfa) {
      result.alfa.executed = false;
      result.alfa.failures = [];
    }
  }
  const result = compare(different);
  assert.equal(result.engines.onlyBaseline.includes("alfa"), true);
  assert.equal(result.summary.enginesChanged, true);
  assert.equal(result.summary.notObservedCount, 0);
  const alfa = result.findings["not-evaluated"].find((finding) => finding.engine === "alfa");
  assert.ok(alfa);
  assert.equal(alfa.matchBasis, "coverage-or-engine-gap");
});

test("a failed page produces coverage gaps, not new or absent findings", () => {
  const failed = structuredClone(optimized);
  failed.results[0].ok = false;
  failed.results[0].error = "net::ERR_ABORTED";
  const result = compare(failed);
  assert.equal(result.summary.newCount, 0);
  assert.equal(result.summary.notObservedCount, 0);
  assert.ok(result.coverageGaps.some((gap) => gap.kind === "page-not-evaluated"));
  assert.ok(result.findings["not-evaluated"].some((finding) => finding.page.comparisonUrl === "https://example.gov/"));
});

test("derived identities are used when fingerprints are missing and are disclosed", () => {
  const oldBaseline = structuredClone(baseline);
  const oldComparison = structuredClone(optimized);
  for (const report of [oldBaseline, oldComparison]) {
    for (const result of report.results) {
      for (const engine of ["axe", "alfa"]) {
        for (const failure of result[engine]?.failures ?? []) {
          delete failure.fingerprint;
          delete failure.patternId;
        }
      }
    }
  }
  const result = compareScanReports(oldBaseline, oldComparison, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.ok(result.value.summary.identityFallbackCount > 0);
  const persistent = result.value.findings.persistent.find((finding) => finding.ruleId === "link-name");
  assert.equal(persistent.baseline.identitySource, "derived");
});

test("comparison output redacts credential-shaped strings", () => {
  const secret = "ghp_0123456789abcdefghijklmnopqrstuvwxyz";
  const unsafe = structuredClone(optimized);
  unsafe.results[0].axe.failures[2].message = `Button name missing; token=${secret}`;
  const result = compare(unsafe);
  const serialized = JSON.stringify(result);
  assert.equal(serialized.includes(secret), false);
  assert.ok(serialized.includes("[REDACTED:"));
});

test("Markdown, CSV and HTML exports retain qualifications and accessible structure", () => {
  const result = compare();
  const markdown = formatComparisonMarkdown(result);
  assert.match(markdown, /## Testing conditions/);
  assert.match(markdown, /## Page coverage/);
  assert.match(markdown, /Confirmed remediations: 0/);
  assert.match(markdown, /Absence from the comparison scan is not proof of remediation/);

  const csv = comparisonToCsv(result);
  assert.match(csv, /"classification"/);
  assert.match(csv, /"not-observed"/);

  const html = formatComparisonHtml(result);
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<h1>Accessibility comparison<\/h1>/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /<caption>/);
  assert.match(html, /scope="col"/);
  assert.match(html, /Testing conditions/);
  assert.match(html, /Page coverage/);
  assert.match(html, /colour scheme/i);
  assert.equal(html.includes("<script"), false);
  assert.equal(/combined score|performance score/i.test(html), false);
});

test("the comparison CLI writes reproducible JSON, Markdown, CSV and HTML", () => {
  const dir = mkdtempSync(join(tmpdir(), "open-scans-comparison-"));
  const out = join(dir, "comparison.json");
  const summary = join(dir, "comparison.md");
  const csv = join(dir, "comparison.csv");
  const html = join(dir, "comparison.html");
  const run = spawnSync(process.execPath, [
    "scanner/compare-scans.mjs",
    "tests/fixtures/comparison/baseline-report.json",
    "tests/fixtures/comparison/optimized-report.json",
    "--baseline-release", "v1.0.0",
    "--comparison-release", "v1.1.0",
    "--out", out,
    "--summary", summary,
    "--csv", csv,
    "--html", html,
    "--now", "2026-11-16T12:00:00.000Z"
  ], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const value = JSON.parse(readFileSync(out, "utf8"));
  assert.equal(value.schema, ACCESSIBILITY_COMPARISON_SCHEMA_VERSION);
  assert.equal(value.summary.newCount, 1);
  assert.match(readFileSync(summary, "utf8"), /No longer observed does not mean fixed/);
  assert.match(readFileSync(csv, "utf8"), /"classification"/);
  assert.match(readFileSync(html, "utf8"), /<main id="main-content">/);
});

test("comparison schema pins the no-remediation and classification rules", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/accessibility-comparison.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, ACCESSIBILITY_COMPARISON_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual(schema.properties.findings.required, ["new", "persistent", "details-changed", "not-observed", "not-evaluated"]);
  assert.equal(schema.properties.summary.properties.confirmedRemediations.const, 0);
  assert.equal(schema.$defs.finding.properties.confirmedRemediation.const, false);
});

function historicalReport({ title, scannedAt, overview }) {
  return {
    issueNumber: 9010,
    issueUrl: "https://github.com/mgifford/open-scans/issues/9010",
    scanTitle: title,
    engines: ["axe", "qualweb"],
    scanContext: { browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
    scannedAt,
    totalSubmitted: 1,
    acceptedCount: 1,
    scannedCount: 1,
    results: [
      {
        submittedUrl: "https://legacy.example/",
        finalUrl: "https://legacy.example/",
        ok: true,
        scanContext: { browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
        axe: { executed: true, counts: { failed: 0 }, failures: [] },
        qualweb: {
          executed: true,
          counts: { failed: 1 },
          failures: [
            {
              rule: "QW-ACT-R30",
              description: "Accessible name does not contain visible text",
              message: "The complete visible text content is not in the accessible name",
              selector: null,
              xpath: null,
              html: null,
              colorScheme: "light",
              isDuplicate: false,
              fingerprint: "123456789abc",
              patternId: "A11Y-12345678"
            }
          ]
        },
        reflowRisk: {
          executed: true,
          result: overview ? "failed" : "passed",
          description: overview ? "Horizontal overflow detected" : "No horizontal overflow",
          overflowAmountPx: overview ? 12 : 0,
          fingerprint: "6461935e06df",
          patternId: "A11Y-cca881cf"
        },
        semantica11y: {
          executed: true,
          issues: overview ? [{
            severity: "warning",
            rule: "aria-landmarks",
            element: "<div role=\"main\">",
            message: "Element appears to be used for main content",
            fingerprint: "7a99a7bd133c",
            patternId: "A11Y-4e4ec252"
          }] : []
        }
      }
    ]
  };
}

test("historical reports with legacy QualWeb, reflow and Semantica11y data remain comparable", () => {
  const before = historicalReport({ title: "Legacy baseline", scannedAt: "2026-08-01T00:00:00.000Z", overview: true });
  const after = historicalReport({ title: "Legacy comparison", scannedAt: "2026-08-08T00:00:00.000Z", overview: true });
  const result = compareScanReports(before, after, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.value.summary.persistentCount, 3);
  assert.equal(result.value.findings.persistent.every((finding) => finding.baseline.identitySource !== "unknown"), true);
  assert.ok(result.value.engines.baseline.includes("qualweb"));
  assert.ok(result.value.engines.baseline.includes("reflowRisk"));
  assert.ok(result.value.engines.baseline.includes("semantica11y"));
  assert.equal(result.value.findings.persistent.some((finding) => finding.engine === "qualweb"), true);
});

test("the selected-engine spelling equalaccess is normalized for comparison", () => {
  const report = historicalReport({ title: "Equal Access", scannedAt: "2026-08-01T00:00:00.000Z", overview: false });
  report.engines = ["equalaccess"];
  report.results[0].equalAccess = {
    executed: true,
    counts: { failed: 1 },
    failures: [{
      rule: "WCAG20_Html_HasLang",
      description: "HTML has lang",
      message: "The html element does not have a lang attribute",
      xpath: "html",
      isDuplicate: false,
      fingerprint: "abcdef123456",
      patternId: "A11Y-abcdef12"
    }]
  };
  const result = compareScanReports(report, structuredClone(report), { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.ok(result.value.engines.baseline.includes("equalAccess"));
  assert.ok(result.value.findings.persistent.some((finding) => finding.engine === "equalAccess"));
});

test("a 403 page with engine results is evaluated but carries an HTTP-error caveat", () => {
  const withErrorStatus = structuredClone(optimized);
  withErrorStatus.results[0].ok = false;
  withErrorStatus.results[0].statusCode = 403;
  const result = compare(withErrorStatus);
  assert.equal(result.summary.pagesCompared, 2);
  assert.ok(result.coverageGaps.some((gap) => gap.kind === "http-error-page" && gap.statusCode === 403));
  assert.ok(result.limitations.some((limitation) => /HTTP error status/i.test(limitation)));
  assert.equal(result.pageMappings[0].baselineEvaluated, true);
  assert.equal(result.pageMappings[0].comparisonEvaluated, true);
  assert.equal(result.summary.newCount, 1);
});

test("the CLI accepts explicit page maps for staging reports", () => {
  const staging = structuredClone(optimized);
  for (const result of staging.results) {
    result.submittedUrl = result.submittedUrl.replace("example.gov", "staging.example.gov");
    result.finalUrl = result.finalUrl.replace("example.gov", "staging.example.gov");
  }
  const dir = mkdtempSync(join(tmpdir(), "open-scans-mapping-"));
  const baselinePath = join(dir, "baseline.json");
  const stagingPath = join(dir, "staging.json");
  const out = join(dir, "comparison.json");
  writeFileSync(baselinePath, JSON.stringify(baseline), "utf8");
  writeFileSync(stagingPath, JSON.stringify(staging), "utf8");
  const run = spawnSync(process.execPath, [
    "scanner/compare-scans.mjs", baselinePath, stagingPath,
    "--page-map", "https://example.gov/=https://staging.example.gov/",
    "--page-map", "https://example.gov/services=https://staging.example.gov/services",
    "--out", out,
    "--now", "2026-11-16T12:00:00.000Z"
  ], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const value = JSON.parse(readFileSync(out, "utf8"));
  assert.equal(value.summary.pagesCompared, 2);
  assert.equal(value.pageMappings.every((page) => page.mapping === "explicit"), true);
});
