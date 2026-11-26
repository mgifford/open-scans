import test from "node:test";
import assert from "node:assert/strict";

import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";
import { composeBundle, renderAssessmentRuntimeScript, toInlineScript } from "../../scanner/assessment/bundle.mjs";
import { renderAssessmentCoverage, renderAssessmentWorkspace } from "../../scanner/assessment/render.mjs";
import { buildAssessmentCoverage } from "../../scanner/assessment/coverage.mjs";
import { loadCatalogue } from "../../scanner/assessment/catalogue.mjs";

const catalogue = loadCatalogue();

function makeSummary(overrides = {}) {
  return {
    issueNumber: 12,
    issueUrl: "https://github.com/example/repo/issues/12",
    scanTitle: "Example site",
    scannedAt: "2026-11-26T12:00:00.000Z",
    totalElapsedMs: 60000,
    totalSubmitted: 1,
    acceptedCount: 1,
    scannedCount: 1,
    engines: ["axe"],
    scanContext: { viewport: { width: 1280, height: 800 }, browser: "chromium" },
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        axe: {
          executed: true,
          counts: { passed: 10, failed: 0, cantTell: 0, inapplicable: 4 },
          passedRules: ["image-alt", "document-title"],
          failedRules: [],
          failures: []
        }
      }
    ],
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} },
    ...overrides
  };
}

test("an automated-only report contains the coverage section and the missing-evidence notice", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.match(html, /id="assessment-coverage"/);
  assert.match(html, /Accessibility assessment coverage/);
  assert.match(html, /No manual accessibility testing recorded/);
  assert.match(html, /Automated checks evaluate specific\s+technical conditions/);
  assert.match(html, /Manual testing may have been performed elsewhere/);
  assert.match(html, /Start guided manual assessment/);
  assert.match(html, /Review what automated testing misses/);
  assert.match(html, /Import an existing accessibility assessment/);
  assert.match(html, /Report a barrier experienced while using the website/);
  assert.match(html, /id="manual-assessment"/);
  assert.match(html, /Essential manual checks/);
  assert.match(html, /Comprehensive guided assessment/);
  assert.match(html, /Professional and experiential evaluation/);
});

test("the coverage table distinguishes observed, unknown and unmapped criteria", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.match(html, /data-evidence-state="observed"/);
  assert.match(html, /data-evidence-state="not-observed"/);
  assert.match(html, /data-evidence-state="no-automated-rules"/);
  assert.match(html, /Rule result observed/);
  assert.match(html, /Mapped rule, no result/);
  assert.match(html, /No mapped rule/);
  assert.match(html, /not evidence that the criterion is met/i);
});

test("the report never claims conformance or a percentage of accessibility", () => {
  const html = generateIntegrationReport();
  for (const forbidden of [
    /\bfully accessible\b/i,
    /\bWCAG compliant\b/i,
    /\b100% accessibility/i,
    /\ball accessibility tests passed\b/i,
    /\bmanual testing (is )?unnecessary\b/i
  ]) {
    assert.ok(!forbidden.test(html), `report contains a forbidden claim: ${forbidden}`);
  }
  assert.match(html, /No value here is a percentage of accessibility/);
});

function generateIntegrationReport() {
  return generateInteractiveHtml(makeSummary());
}

test("the report is self-contained: no external stylesheet or script is required", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.ok(!/<link[^>]+rel="stylesheet"/i.test(html), "no external stylesheet may be required");
  assert.ok(!/<script[^>]+src=/i.test(html), "no external script may be required");
  assert.match(html, /<script>[\s\S]*OpenScansAssessment[\s\S]*<\/script>/);
  assert.match(html, /id="assessment-context"/);
});

test("the inline runtime bundle parses and exposes its API", () => {
  const script = renderAssessmentRuntimeScript();
  const source = script.replace(/^<script>\n/, "").replace(/\n  <\/script>$/, "");
  const previous = globalThis.OpenScansAssessment;
  try {
    assert.doesNotThrow(() => new Function(source)());
    const api = globalThis.OpenScansAssessment;
    assert.ok(api);
    assert.equal(api.version, "assessment-runtime/1");
    assert.equal(typeof api.buildStorageKey, "function");
    assert.equal(typeof api.criterionReviewState, "function");
    assert.equal(api.MAX_IMPORT_BYTES, 2 * 1024 * 1024);
  } finally {
    if (previous === undefined) delete globalThis.OpenScansAssessment;
    else globalThis.OpenScansAssessment = previous;
  }
});

test("the inliner refuses module syntax it cannot inline safely", () => {
  assert.throws(() => toInlineScript('import x from "y";\n'), /import statement/);
  assert.throws(() => toInlineScript("export default 1;\n"), /export default/);
  assert.throws(() => toInlineScript("export { a };\nconst a = 1;\n"), /export syntax/);
  assert.equal(toInlineScript("export const a = 1;\nexport function b() {}\n"), "const a = 1;\nfunction b() {}\n");
});

test("the bundle composer rejects HTML-breaking sequences", () => {
  assert.throws(() => composeBundle({ records: 'const x = "</script>";', runtime: "" }), /cannot be inlined/);
  assert.throws(() => composeBundle({ records: "<!--", runtime: "" }), /cannot be inlined/);
});

test("hostile scan titles cannot break out of the embedded JSON or the document", () => {
  const html = generateInteractiveHtml(
    makeSummary({ scanTitle: "</script><img src=x onerror=alert(1)>" })
  );
  // The context payload escapes `<` so the JSON block cannot be closed early.
  const contextMatch = html.match(/<script type="application\/json" id="assessment-context">([\s\S]*?)<\/script>/);
  assert.ok(contextMatch, "expected the assessment context block");
  assert.ok(!contextMatch[1].includes("</script>"));
  assert.ok(!html.includes("<img src=x onerror=alert(1)>"));
});

test("hostile rule identifiers are escaped in the coverage table", () => {
  const coverage = buildAssessmentCoverage({ summary: makeSummary(), catalogue });
  // Catalogue data is trusted; engine and page data is not. Simulate a hostile
  // rule identifier reaching the renderer.
  const target = coverage.criteria.find((criterion) => criterion.id === "1.1.1");
  target.automated.observed.axe = ["<script>alert(1)</script>"];
  target.automated.state = "observed";
  const html = renderAssessmentCoverage(coverage);
  assert.ok(!html.includes("<script>alert(1)</script>"));
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
});

test("the workspace hides interactive controls until JavaScript runs, and keeps guidance readable", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.match(html, /html\.js \.js-only|html:not\(\.js\) \.js-only/);
  assert.match(html, /JavaScript is disabled\. The accessibility coverage table and manual testing guidance/);
  assert.match(html, /Importing needs JavaScript/);
  assert.match(html, /<noscript>/);
  // Guidance is present without JavaScript.
  assert.match(html, /Press Tab repeatedly from the top of the page/);
  assert.match(html, /Limitations of this procedure/);
});

test("procedure guidance and coverage are produced without any summary field beyond existing evidence", () => {
  const summary = makeSummary();
  assert.equal(summary.assessmentCoverage, undefined);
  const html = generateInteractiveHtml(summary);
  assert.match(html, /data-criterion-row/);
  // The generated report does not mutate or add evidence to the summary.
  assert.equal(summary.assessmentCoverage, undefined);
  assert.equal(summary.results[0].axe.counts.passed, 10);
});

test("the workspace renders every pathway and a manual finding form", () => {
  const coverage = buildAssessmentCoverage({ summary: makeSummary(), catalogue });
  const html = renderAssessmentWorkspace({
    coverage,
    report: { reportId: "open-scans/issue-12/x", pages: ["https://example.com/"] },
    pages: ["https://example.com/"]
  });
  assert.match(html, /id="procedure-record-form"/);
  assert.match(html, /id="report-barrier"/);
  assert.match(html, /id="experiential-evaluation"/);
  assert.match(html, /id="assessment-import-file"/);
  assert.match(html, /id="assessment-export"/);
  assert.match(html, /id="assessment-status"/);
  assert.match(html, /compensating disabled participants/);
  // No drag-and-drop-only import.
  assert.ok(!/ondrop=|dragover/i.test(html));
});

test("the report has exactly one main landmark and no external assets", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.match(html, /<main class="container" id="main-content"/);
  assert.equal((html.match(/<main[\s>]/g) ?? []).length, 1);
  assert.match(html, /<\/main>/);
});

test("existing report sections are unchanged in the assembled document", () => {
  const html = generateInteractiveHtml(makeSummary());
  assert.match(html, /id="section-summary"/);
  assert.match(html, /id="section-issues"/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /id="theme-toggle"/);
});
