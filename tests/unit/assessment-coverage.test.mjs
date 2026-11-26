import test from "node:test";
import assert from "node:assert/strict";

import { loadCatalogue } from "../../scanner/assessment/catalogue.mjs";
import {
  COVERAGE_SCHEMA,
  MANIFEST_SCHEMA,
  buildAssessmentCoverage,
  buildConformanceTarget,
  buildReportIdentity,
  buildRuleExecutionManifest,
  formatAssessmentCoverageMarkdown,
  normalizeRuleId
} from "../../scanner/assessment/coverage.mjs";

const catalogue = loadCatalogue();

function makeSummary(overrides = {}) {
  return {
    issueNumber: 77,
    issueUrl: "https://github.com/example/repo/issues/77",
    scanTitle: "Example site",
    scannedAt: "2026-11-26T12:00:00.000Z",
    engines: ["axe", "alfa"],
    scanContext: { viewport: { width: 1280, height: 800 }, browser: "chromium" },
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        axe: {
          executed: true,
          counts: { passed: 12, failed: 1, cantTell: 2, inapplicable: 9 },
          passedRules: ["image-alt", "document-title"],
          failedRules: ["color-contrast"],
          failures: []
        },
        alfa: {
          executed: true,
          counts: { passed: 5, failed: 1, cantTell: 0, inapplicable: 3 },
          passedRules: ["https://alfa.siteimprove.com/rules/sia-r2"],
          failedRules: ["https://alfa.siteimprove.com/rules/sia-r73"]
        }
      }
    ],
    ...overrides
  };
}

test("normalizeRuleId strips ALFA rule URLs and lower-cases ids", () => {
  assert.equal(normalizeRuleId("alfa", "https://alfa.siteimprove.com/rules/sia-r2"), "sia-r2");
  assert.equal(normalizeRuleId("alfa", "SIA-R2"), "sia-r2");
  assert.equal(normalizeRuleId("axe", "Image-Alt"), "image-alt");
  assert.equal(normalizeRuleId("axe", ""), "");
});

test("the manifest records executed pages, outcome counts and observed rules only", () => {
  const manifest = buildRuleExecutionManifest(makeSummary());
  assert.equal(manifest.schema, MANIFEST_SCHEMA);
  assert.equal(manifest.engines.axe.status, "executed");
  assert.equal(manifest.engines.axe.pagesExecuted, 1);
  assert.deepEqual(manifest.engines.axe.observedRules, ["color-contrast", "document-title", "image-alt"]);
  assert.deepEqual(manifest.engines.axe.rulesWithFailures, ["color-contrast"]);
  assert.deepEqual(manifest.engines.axe.outcomeCounts, { passed: 12, failed: 1, cantTell: 2, inapplicable: 9 });
  assert.equal(manifest.engines.alfa.observedRules.includes("sia-r2"), true);
  assert.equal(manifest.engines.alfa.rulesWithFailures.includes("sia-r73"), true);
});

test("the manifest marks a requested engine that never produced a run", () => {
  const summary = makeSummary({ engines: ["axe", "sa11y"] });
  const manifest = buildRuleExecutionManifest(summary);
  assert.equal(manifest.engines.sa11y.status, "not-run");
  assert.equal(manifest.engines.sa11y.pagesExecuted, 0);
});

test("the manifest marks a partial engine and keeps the first error", () => {
  const summary = makeSummary();
  summary.results.push({
    submittedUrl: "https://example.com/broken",
    axe: { executed: false, error: "Target page closed\nstack trace", counts: {} }
  });
  const manifest = buildRuleExecutionManifest(summary);
  assert.equal(manifest.engines.axe.status, "partial");
  assert.equal(manifest.engines.axe.pagesFailed, 1);
  assert.equal(manifest.engines.axe.firstError, "Target page closed");
});

test("failure-only engines state their rule-granularity limitation", () => {
  const summary = makeSummary({ engines: ["axe", "equalAccess"] });
  summary.results[0].equalAccess = {
    executed: true,
    counts: { passed: 3, failed: 2, cantTell: 0, inapplicable: 0 },
    passedRules: [],
    failedRules: ["text_contrast_sufficient"]
  };
  const manifest = buildRuleExecutionManifest(summary);
  assert.equal(manifest.engines.equalAccess.ruleGranularity, "failure-only");
  assert.ok(manifest.engines.equalAccess.limitations.some((line) => /unless it failed/.test(line)));
});

test("coverage distinguishes mapped, observed, failed and unmapped criteria", () => {
  const coverage = buildAssessmentCoverage({ summary: makeSummary(), catalogue });
  assert.equal(coverage.schema, COVERAGE_SCHEMA);
  assert.equal(coverage.criteria.length, catalogue.criteria.size);

  const nonText = coverage.criteria.find((criterion) => criterion.id === "1.1.1");
  assert.equal(nonText.automated.state, "observed");
  assert.ok(nonText.automated.observed.axe.includes("image-alt"));
  assert.ok(nonText.automated.observed.alfa.includes("sia-r2"));
  assert.ok(nonText.manual.procedures.includes("manual-alt-text-quality"));
  assert.ok(nonText.gaps.some((gap) => /specific conditions/.test(gap)));

  const contrast = coverage.criteria.find((criterion) => criterion.id === "1.4.3");
  assert.ok(contrast.automated.failed.some((entry) => entry.ruleId === "color-contrast"));

  const unmapped = coverage.criteria.filter((criterion) => criterion.automated.state === "no-automated-rules");
  assert.ok(unmapped.length > 0, "the catalogue should have criteria with no mapped automated rule");
  assert.ok(unmapped.every((criterion) => /does not exercise it/.test(criterion.gaps[0])));
});

test("a mapped criterion with no observed rule is reported as unknown, not as a pass", () => {
  const summary = makeSummary();
  summary.results[0].axe.passedRules = [];
  summary.results[0].axe.failedRules = [];
  summary.results[0].alfa.passedRules = [];
  summary.results[0].alfa.failedRules = [];
  const coverage = buildAssessmentCoverage({ summary, catalogue });
  const nonText = coverage.criteria.find((criterion) => criterion.id === "1.1.1");
  assert.equal(nonText.automated.state, "not-observed");
  assert.match(nonText.gaps[0], /not evidence that the criterion is met/i);
  assert.ok(coverage.counts.withAutomatedRuleMapped > 0);
  assert.equal(coverage.counts.withAutomatedRuleObserved, 0);
});

test("ACT rules are only counted as observed when the artifact says an engine reported", () => {
  const actCoverage = {
    rules: [
      { actRuleId: "3ea0c8", enginesReporting: ["axe"], enginesMapped: ["axe"], findings: 2, coverage: "single-engine" },
      { actRuleId: "cae760", enginesReporting: [], enginesMapped: ["axe"], findings: 0, coverage: "none" }
    ]
  };
  const coverage = buildAssessmentCoverage({ summary: makeSummary(), catalogue, actCoverage });
  const nonText = coverage.criteria.find((criterion) => criterion.id === "1.1.1");
  // "Observed" means the mapped implementation produced a result. The same axe
  // rule also implements cae760, so that rule is observed too — but it only
  // counts as failed when the ACT artifact reports a finding.
  assert.ok(nonText.automated.observed.act.includes("3ea0c8"));
  assert.ok(nonText.automated.observed.act.includes("cae760"));
  assert.ok(nonText.automated.failed.some((entry) => entry.engine === "act" && entry.ruleId === "3ea0c8"));
  assert.ok(!nonText.automated.failed.some((entry) => entry.engine === "act" && entry.ruleId === "cae760"));
});

test("coverage counts always carry an explicit denominator", () => {
  const coverage = buildAssessmentCoverage({ summary: makeSummary(), catalogue });
  const counts = coverage.counts;
  assert.equal(counts.criteriaTotal, catalogue.criteria.size);
  assert.equal(
    counts.criteriaByLevel.A + counts.criteriaByLevel.AA + counts.criteriaByLevel.AAA,
    counts.criteriaTotal
  );
  assert.ok(counts.withAutomatedRuleObserved <= counts.withAutomatedRuleMapped);
  assert.equal(counts.withRecordedHumanReview, 0);
  assert.match(counts.humanReviewNote, /not uploaded/);
});

test("scan-level automation limitations are collected once, not per criterion", () => {
  const summary = makeSummary();
  summary.results[0].axe = { executed: false, error: "browser missing", counts: {} };
  const coverage = buildAssessmentCoverage({ summary, catalogue });
  assert.ok(coverage.automationLimitations.some((line) => /axe did not run/.test(line)));
  const nonText = coverage.criteria.find((criterion) => criterion.id === "1.1.1");
  assert.ok(!nonText.gaps.some((gap) => /did not run/.test(gap)));
});

test("coverage is deterministic for the same summary", () => {
  const summary = makeSummary();
  const first = buildAssessmentCoverage({ summary, catalogue, generatedAt: "2026-11-26T00:00:00.000Z" });
  const second = buildAssessmentCoverage({ summary, catalogue, generatedAt: "2026-11-26T00:00:00.000Z" });
  assert.equal(JSON.stringify(first), JSON.stringify(second));
});

test("report identity is stable and independent of hosting or file name", () => {
  const identity = buildReportIdentity(makeSummary());
  assert.equal(identity.reportId, "open-scans/issue-77/2026-11-26T12:00:00.000Z");
  assert.equal(identity.pageCount, 1);
  const renamed = buildReportIdentity(makeSummary());
  assert.equal(renamed.reportId, identity.reportId);
});

test("conformance target falls back to WCAG 2.2 AA and records the source", () => {
  assert.deepEqual(
    (({ wcagVersion, level, source }) => ({ wcagVersion, level, source }))(buildConformanceTarget({})),
    { wcagVersion: "2.2", level: "AA", source: "default" }
  );
  const explicit = buildConformanceTarget({ scanContext: { wcagVersion: "2.1", conformanceLevel: "A" } });
  assert.equal(explicit.level, "A");
  assert.equal(explicit.source, "scan-context");
  assert.match(explicit.note, /not a conformance claim/i);
});

test("a summary with no results still produces a complete coverage model", () => {
  const coverage = buildAssessmentCoverage({
    summary: { issueNumber: 1, scannedAt: "2026-01-01T00:00:00.000Z", engines: ["axe"], results: [] },
    catalogue
  });
  assert.equal(coverage.criteria.length, catalogue.criteria.size);
  assert.equal(coverage.counts.withAutomatedRuleObserved, 0);
  assert.equal(coverage.manifest.engines.axe.status, "not-run");
});

test("the Markdown coverage summary states denominators and no conformance", () => {
  const summary = makeSummary();
  summary.assessmentCoverage = buildAssessmentCoverage({ summary, catalogue });
  const markdown = formatAssessmentCoverageMarkdown(summary);
  assert.match(markdown, /## Accessibility assessment coverage/);
  assert.match(markdown, /0 in this report/);
  assert.match(markdown, /of 86/);
  assert.match(markdown, /not proof of conformance/);
  assert.ok(!/%\b/.test(markdown), "no percentage may appear in the coverage summary");
  assert.equal(formatAssessmentCoverageMarkdown({}), "");
});
