import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { compareScanReports } from "../../scanner/compare-scans.mjs";
import {
  OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION,
  OPTIMIZATION_REQUEST_SCHEMA_VERSION,
  buildOptimizationInvestigation,
  validateOptimizationInvestigation,
  validateOptimizationRequest
} from "../../scanner/optimization-investigation.mjs";
import {
  formatOptimizationMarkdown,
  formatOptimizationHtml
} from "../../scanner/run-optimization-investigation.mjs";

const fixture = (name) => JSON.parse(readFileSync(new URL(`../fixtures/comparison/${name}`, import.meta.url), "utf8"));
const baseline = fixture("baseline-report.json");
const optimized = fixture("optimized-report.json");
const noRegression = fixture("no-regression-report.json");
const requestFile = JSON.parse(readFileSync(new URL("../fixtures/optimization/request.json", import.meta.url), "utf8"));

function comparison(comparisonReport = optimized, options = {}) {
  const result = compareScanReports(baseline, comparisonReport, {
    generatedAt: "2026-11-16T12:00:00.000Z",
    ...options
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

function request(kinds = ["replacing-navigation"]) {
  return {
    schema: OPTIMIZATION_REQUEST_SCHEMA_VERSION,
    scenarios: kinds.map((kind) => ({ kind }))
  };
}

function investigate(kinds = ["replacing-navigation"], comparisonValue = comparison(), options = {}) {
  const result = buildOptimizationInvestigation(comparisonValue, request(kinds), {
    generatedAt: "2026-11-16T12:00:00.000Z",
    ...options
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

test("navigation replacement surfaces the new icon-only button as a potential regression and requires manual checks", () => {
  const value = investigate(["replacing-navigation"]);
  const names = value.scenarios[0].concerns.find((concern) => concern.id === "accessible-names");
  assert.ok(names.findings.some((finding) => finding.ruleId === "button-name" && finding.classification === "new"));
  assert.equal(names.findings.some((finding) => finding.ruleId === "image-alt"), false);
  assert.equal(names.findings.some((finding) => finding.ruleId === "link-name"), true);
  assert.equal(value.summary.newFindings, 1);
  assert.equal(names.findings.find((finding) => finding.ruleId === "link-name").componentContext.semanticRegion, "navigation");
  assert.equal(names.findings.find((finding) => finding.ruleId === "link-name").componentContext.ownershipEstablished, false);
  assert.ok(names.findings.find((finding) => finding.ruleId === "link-name").actRuleIds.includes("c487ae"));
  assert.equal(value.scenarios[0].humanReviewRequired, true);
  assert.equal(value.scenarios[0].conformanceClaim, false);
  assert.equal(value.summary.conformanceClaim, false);
  assert.equal(value.summary.functionalEquivalenceClaim, false);
  assert.ok(names.manualChecks.some((task) => /screen reader/i.test(task)));
  assert.ok(value.scenarios[0].concerns.find((concern) => concern.id === "keyboard-operation").manualChecks.length > 0);
  assert.ok(value.comparison.coverageGaps.length >= 2);
  assert.match(formatOptimizationMarkdown(value), /baseline-only-page/);
});

test("animation reduction is manual-only and never presented as a pass", () => {
  const value = investigate(["reducing-or-removing-animation"]);
  const scenario = value.scenarios[0];
  assert.equal(scenario.summary.newFindings, 0);
  assert.equal(scenario.summary.noAutomatedEvidenceConcerns, scenario.concerns.length);
  const motion = scenario.concerns.find((concern) => concern.id === "reduced-motion");
  assert.equal(motion.automated, false);
  assert.equal(motion.status, "manual-only");
  assert.equal(motion.findings.length, 0);
  assert.ok(motion.manualChecks.some((task) => /prefers-reduced-motion/i.test(task)));
  assert.ok(value.limitations.some((limitation) => /Passing automated checks does not establish WCAG conformance/i.test(limitation)));
  assert.equal(value.summary.conformanceClaim, false);
});

test("lazy-loading reports changed image details without attributing unrelated navigation findings", () => {
  const value = investigate(["lazy-loading-images-or-embeds"]);
  const names = value.scenarios[0].concerns.find((concern) => concern.id === "accessible-names");
  assert.ok(names.findings.some((finding) => finding.ruleId === "image-alt" && finding.classification === "details-changed"));
  assert.equal(names.findings.some((finding) => finding.ruleId === "button-name"), false);
  assert.equal(names.findings.some((finding) => finding.ruleId === "link-name"), false);
  assert.equal(value.summary.changedFindings, 1);
});

test("CSS removal keeps important content and motion as manual review, not a clean bill of health", () => {
  const value = investigate(["removing-unnecessary-css"]);
  const scenario = value.scenarios[0];
  const content = scenario.concerns.find((concern) => concern.id === "important-content");
  assert.equal(content.status, "manual-only");
  assert.equal(content.automated, false);
  assert.equal(content.findings.length, 0);
  assert.ok(scenario.concerns.find((concern) => concern.id === "contrast-forced-colours").manualChecks.some((task) => /forced-colours/i.test(task)));
  assert.ok(value.limitations.some((limitation) => /human review/i.test(limitation)));
});

test("a no-detected-regression comparison still requires manual verification", () => {
  const value = investigate(["replacing-navigation"], comparison(noRegression));
  assert.equal(value.summary.newFindings, 0);
  assert.equal(value.scenarios[0].summary.noAutomatedEvidenceConcerns > 0, true);
  const concern = value.scenarios[0].concerns.find((entry) => entry.id === "keyboard-operation");
  assert.equal(concern.status, "no-matching-automated-finding");
  assert.match(concern.statusLabel, /not a pass/i);
  assert.ok(concern.manualChecks.length > 0);
  assert.equal(value.summary.conformanceClaim, false);
});

test("incompatible conditions and engine changes remain visible in the optimization report", () => {
  const different = structuredClone(optimized);
  different.scanContext.viewport = { width: 390, height: 844 };
  for (const result of different.results) result.scanContext.viewport = { width: 390, height: 844 };
  const comparisonValue = comparison(different);
  const value = investigate(["replacing-navigation"], comparisonValue);
  assert.equal(value.comparison.conditions.compatible, false);
  assert.equal(value.comparison.engines.onlyBaseline.length, 0);
  assert.ok(value.comparison.limitations.some((limitation) => /differs between scans/i.test(limitation)));
  assert.equal(value.summary.conformanceClaim, false);
});

test("scenario page scoping excludes findings from unlisted pages", () => {
  const scoped = investigate(["replacing-navigation"]);
  const requestWithPage = {
    schema: OPTIMIZATION_REQUEST_SCHEMA_VERSION,
    scenarios: [{ kind: "replacing-navigation", pages: ["https://example.gov/"] }]
  };
  const result = buildOptimizationInvestigation(comparison(), requestWithPage, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.value.scenarios[0].summary.notEvaluatedFindings, 0);
  assert.equal(result.value.scenarios[0].concerns.find((concern) => concern.id === "heading-hierarchy").findings.length, 0);
  assert.ok(scoped);
});

test("unknown scenarios and invalid requests are rejected", () => {
  const unknown = buildOptimizationInvestigation(comparison(), request(["not-a-scenario"]), { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(unknown.ok, false);
  assert.match(unknown.errors.join(" "), /Unknown optimization scenario/i);

  const invalid = validateOptimizationRequest({ schema: OPTIMIZATION_REQUEST_SCHEMA_VERSION, scenarios: [] });
  assert.equal(invalid.ok, false);
  assert.match(invalid.errors.join(" "), /at least one scenario/i);

  const noComparison = buildOptimizationInvestigation({}, request(), { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(noComparison.ok, false);
  assert.match(noComparison.errors.join(" "), /accessibility-comparison\/1/);
});

test("aliases resolve to canonical scenario kinds", () => {
  const value = investigate(["navigation-replacement", "css-removal"]);
  assert.deepEqual(value.scenarios.map((scenario) => scenario.kind), ["replacing-navigation", "removing-unnecessary-css"]);
});

test("optimization output redacts credential-shaped request text", () => {
  const secret = "ghp_0123456789abcdefghijklmnopqrstuvwxyz";
  const requestWithSecret = request();
  requestWithSecret.notes = `Reviewer token=${secret}`;
  const result = buildOptimizationInvestigation(comparison(), requestWithSecret, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(JSON.stringify(result.value).includes(secret), false);
  assert.ok(JSON.stringify(result.value).includes("[REDACTED:"));
});

test("Markdown and HTML exports are accessible, qualify absence, and never claim conformance", () => {
  const value = investigate(["replacing-navigation", "reducing-or-removing-animation"]);
  const markdown = formatOptimizationMarkdown(value);
  assert.match(markdown, /Human review required/);
  assert.match(markdown, /Passing automated checks does not establish WCAG conformance/);
  assert.match(markdown, /No matching automated finding\. This is not a pass\./);
  assert.match(markdown, /Conformance claimed: no/);

  const html = formatOptimizationHtml(value);
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<h1>Optimization accessibility investigation<\/h1>/);
  assert.match(html, /class="skip-link"/);
  assert.match(html, /<caption>/);
  assert.match(html, /scope="col"/);
  assert.match(html, /scope="row"/);
  assert.equal(html.includes("<script"), false);
  assert.equal(/performance score|combined score/i.test(html), false);
  assert.equal(/conformance claimed: yes/i.test(html), false);
});

test("the optimization CLI writes JSON, Markdown and HTML from a request file", () => {
  const dir = mkdtempSync(join(tmpdir(), "open-scans-optimization-"));
  const comparisonPath = join(dir, "comparison.json");
  const requestPath = join(dir, "request.json");
  const out = join(dir, "optimization.json");
  const summary = join(dir, "optimization.md");
  const html = join(dir, "optimization.html");
  writeFileSync(comparisonPath, JSON.stringify(comparison()), "utf8");
  writeFileSync(requestPath, JSON.stringify(requestFile), "utf8");
  const run = spawnSync(process.execPath, [
    "scanner/run-optimization-investigation.mjs",
    comparisonPath,
    "--request", requestPath,
    "--out", out,
    "--summary", summary,
    "--html", html,
    "--now", "2026-11-16T12:00:00.000Z"
  ], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const value = JSON.parse(readFileSync(out, "utf8"));
  assert.equal(value.schema, OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION);
  assert.equal(value.summary.scenarios, 2);
  assert.match(readFileSync(summary, "utf8"), /Human review required/);
  assert.match(readFileSync(html, "utf8"), /<main id="main-content">/);
});

test("the optimization schema pins human review and no-conformance rules", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/optimization-investigation.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.equal(schema.properties.summary.properties.conformanceClaim.const, false);
  assert.equal(schema.properties.summary.properties.functionalEquivalenceClaim.const, false);
  assert.equal(schema.properties.summary.properties.humanReviewRequired.const, true);
  assert.equal(schema.$defs.scenario.properties.humanReviewRequired.const, true);
  assert.equal(schema.$defs.findingSummary.properties.confirmedRemediation.const, false);
});

test("validation rejects a forged conformance claim", () => {
  const value = investigate();
  const forged = structuredClone(value);
  forged.summary.conformanceClaim = true;
  assert.equal(validateOptimizationInvestigation(forged).ok, false);
  const forgedScenario = structuredClone(value);
  forgedScenario.scenarios[0].conformanceClaim = true;
  assert.equal(validateOptimizationInvestigation(forgedScenario).ok, false);
});
