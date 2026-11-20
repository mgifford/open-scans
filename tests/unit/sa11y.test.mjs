import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";

import {
  SA11Y_DEFAULT_OPTIONS,
  normalizeSa11yOutcome,
  resolveSa11yAssets
} from "../../scanner/sa11y.mjs";
import { determineScannersToRun } from "../../scanner/run-scan.mjs";
import { parseScanIssue } from "../../scanner/parse-issue.mjs";
import { buildObservationArtifact } from "../../scanner/observations.mjs";
import { getRuleSemantics } from "../../scanner/rule-semantics.mjs";
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";
import { correlateObservations } from "../../scanner/correlation.mjs";

const correlateForTest = (artifact) => correlateObservations(artifact);

const IMAGE_PAGE = '<!DOCTYPE html><html lang="en"><head><title>t</title></head><body><main><img id="missing" src="goose.png"></main></body></html>';

test("the pinned Sa11y distribution is installed and versioned", () => {
  const assets = resolveSa11yAssets();
  assert.equal(assets.version, "5.1.0");
  assert.ok(existsSync(assets.bundlePath), "UMD bundle must exist");
  assert.ok(existsSync(assets.langPath), "language bundle must exist");
});

test("native errors and warnings stay distinct", () => {
  const result = normalizeSa11yOutcome({
    results: [
      { test: "MISSING_ALT", type: "error", message: "Error", elementId: "missing", xpath: "/html[1]/body[1]/main[1]/img[1]", html: "<img id=\"missing\">" },
      { test: "SOME_WARNING", type: "warning", message: "Warning", elementId: "warn", xpath: "/html[1]/body[1]/main[1]/p[1]" },
      { test: "IMAGE_PASS", type: "good", elementId: "named" }
    ]
  }, { version: "5.1.0" });

  assert.equal(result.executed, true);
  assert.equal(result.version, "5.1.0");
  assert.deepEqual(result.failedRules, ["MISSING_ALT"]);
  assert.equal(result.failures.length, 1);
  assert.equal(result.failures[0].rule, "MISSING_ALT");
  assert.equal(result.failures[0].type, "error");
  assert.equal(result.warnings.length, 1);
  assert.equal(result.warnings[0].rule, "SOME_WARNING");
  assert.equal(result.counts.failed, 1);
  assert.equal(result.counts.warnings, 1);
  assert.equal(result.counts.passed, 1);
});

test("a successful empty result is distinct from a failure", () => {
  const empty = normalizeSa11yOutcome({ results: [] }, { version: "5.1.0" });
  assert.equal(empty.executed, true);
  assert.equal(empty.error, null);
  assert.equal(empty.counts.failed, 0);

  const failed = normalizeSa11yOutcome({ error: "Sa11y bundle did not expose the Sa11y global" }, { version: "5.1.0" });
  assert.equal(failed.executed, false);
  assert.match(failed.error, /did not expose/);
});

test("a timeout is reported as an execution error, not an empty scan", () => {
  const result = normalizeSa11yOutcome({ timedOut: true, results: [] }, { version: "5.1.0", timeoutMs: 1234, timedOut: true });
  assert.equal(result.executed, false);
  assert.match(result.error, /1234ms/);
});

test("Sa11y findings flow through the observation pipeline with native ids", () => {
  const summary = {
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        scanContext: { contextKey: "chromium|1280x800|light", browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
        axe: { executed: true, failures: [], renderedHtml: IMAGE_PAGE },
        alfa: { executed: true, failures: [] },
        equalAccess: { executed: true, failures: [] },
        accesslint: { executed: true, failures: [] },
        sa11y: {
          executed: true,
          failures: [
            { rule: "MISSING_ALT", type: "error", message: "Error", xpath: "/html[1]/body[1]/main[1]/img[1]", selector: null, html: '<img id="missing">' }
          ]
        }
      }
    ]
  };

  const artifact = buildObservationArtifact(summary);
  const observation = artifact.observations.find((entry) => entry.engine.name === "sa11y");
  assert.ok(observation, "Sa11y observation must be retained");
  assert.equal(observation.engine.ruleId, "MISSING_ALT");
  assert.equal(observation.target.resolution, "resolved");
  assert.deepEqual(observation.actRuleIds, ["23a2a8"]);
  assert.equal(artifact.counts.unknownRuleObservations, 0);
});

test("Sa11y is selectable and does not change the historical default", () => {
  assert.equal(determineScannersToRun(undefined).runSa11y, false);
  assert.equal(determineScannersToRun([]).runSa11y, false);
  assert.equal(determineScannersToRun(["all"]).runSa11y, true);
  assert.equal(determineScannersToRun(["sa11y"]).runSa11y, true);
  assert.equal(determineScannersToRun(["axe", "alfa", "sa11y"]).runSa11y, true);
});

test("issue bodies can request Sa11y and reject unknown engines", () => {
  const parsed = parseScanIssue({ issue: {
    number: 1,
    html_url: "https://github.com/example/repo/issues/1",
    title: "SCAN: Sa11y example",
    body: "Engine: axe, sa11y\n\n### URLs\n- https://example.com/\n",
    user: { login: "local" },
    created_at: "2026-11-20T00:00:00Z"
  } });
  assert.equal(parsed.ok, true);
  assert.ok(parsed.engines.includes("sa11y"));

  const invalid = parseScanIssue({ issue: {
    number: 2,
    html_url: "https://github.com/example/repo/issues/2",
    title: "SCAN: unknown engine",
    body: "Engine: axe, editoria11y\n\n### URLs\n- https://example.com/\n",
    user: { login: "local" },
    created_at: "2026-11-20T00:00:00Z"
  } });
  assert.equal(invalid.engines.includes("editoria11y"), false, "no separate Editoria11y engine identifier");
});

test("Sa11y ACT mappings come from the upstream mapping file", () => {
  const semantics = getRuleSemantics("sa11y", "MISSING_ALT");
  assert.deepEqual(semantics.actRuleIds, ["23a2a8"]);
  assert.equal(semantics.mappingEvidence, "verified");
  assert.equal(semantics.versionAligned, false, "mapping provenance is not a version-aligned conformance claim");
});

test("reports show Sa11y as an engine without inventing a pass", () => {
  const summary = {
    issueNumber: 1,
    issueUrl: "https://github.com/example/repo/issues/1",
    scanTitle: "Sa11y report test",
    scannedAt: "2026-11-20T00:00:00.000Z",
    totalElapsedMs: 1,
    totalSubmitted: 1,
    acceptedCount: 1,
    scannedCount: 1,
    engines: ["axe", "sa11y"],
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        statusCode: 200,
        ok: true,
        pageTitle: "Example",
        elapsedMs: 1,
        alfa: { executed: false, error: "Skipped (not requested)", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failures: [], failedRules: [] },
        axe: { executed: true, error: null, counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 }, failures: [], failedRules: ["image-alt"] },
        equalAccess: { executed: false, error: "Skipped (not requested)", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failures: [], failedRules: [] },
        accesslint: { executed: false, error: "Skipped (not requested)", counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failures: [], failedRules: [] },
        sa11y: { executed: true, error: null, counts: { passed: 0, failed: 1, cantTell: 0, inapplicable: 0 }, failures: [], failedRules: ["MISSING_ALT"] }
      }
    ],
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} }
  };

  const html = generateInteractiveHtml(summary);
  assert.ok(html.includes("Sa11y"), "Sa11y must appear as an engine");
  assert.equal(SA11Y_DEFAULT_OPTIONS.headless, true);
});

test("Sa11y and axe observations correlate on the same resolved image", () => {
  const summary = {
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        scanContext: { contextKey: "chromium|1280x800|light", browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
        axe: {
          executed: true,
          renderedHtml: IMAGE_PAGE,
          failures: [{ rule: "image-alt", selector: "#missing", html: '<img id="missing">', message: "alt" }]
        },
        alfa: { executed: true, failures: [] },
        equalAccess: { executed: true, failures: [] },
        accesslint: { executed: true, failures: [] },
        sa11y: {
          executed: true,
          failures: [{ rule: "MISSING_ALT", type: "error", message: "Error", xpath: "/html[1]/body[1]/main[1]/img[1]", html: '<img id="missing">' }]
        }
      }
    ],
    scan: { engineExecution: { axe: { status: "executed" }, sa11y: { status: "executed" } } }
  };

  const artifact = buildObservationArtifact(summary);
  const correlation = correlateForTest(artifact);
  const issue = correlation.issues.find((entry) => entry.family === "act:23a2a8");
  assert.ok(issue, "the shared ACT rule should form one issue");
  assert.deepEqual(issue.engines, ["axe", "sa11y"]);
  assert.equal(correlation.reconciliation.complete, true);
});

test("browser integration: Sa11y runs headless against a public fixture", { skip: !process.env.SA11Y_BROWSER_TEST }, async () => {
  const { runSa11yAudit } = await import("../../scanner/sa11y.mjs");
  // Sa11y uses sessionStorage, so a data: URL (opaque origin) cannot run it.
  // The default fixture is a small page with two images missing a text
  // alternative; set SA11Y_BROWSER_TEST_URL to use another one.
  const url = process.env.SA11Y_BROWSER_TEST_URL ??
    "https://mgifford.github.io/record-a-goose-sighting/lab/correlation/two-images/";
  const result = await runSa11yAudit(url, {
    pageLoadDelayMs: 300,
    scanContext: { browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" }
  });
  assert.equal(result.executed, true, result.error ?? "expected Sa11y to execute");
  assert.ok(result.failedRules.includes("MISSING_ALT"), "the fixture has two images without alternative text");
  assert.ok(result.failures.every((failure) => failure.xpath), "Sa11y findings carry a DOM locator");
});

test("native warnings are visible in the report without becoming failures", () => {
  const summary = {
    issueNumber: 1,
    issueUrl: "https://github.com/example/repo/issues/1",
    scanTitle: "Warning report test",
    scannedAt: "2026-11-20T00:00:00.000Z",
    totalElapsedMs: 1,
    totalSubmitted: 1,
    acceptedCount: 1,
    scannedCount: 1,
    engines: ["axe", "sa11y"],
    results: [
      {
        submittedUrl: "https://example.com/",
        finalUrl: "https://example.com/",
        statusCode: 200,
        ok: true,
        pageTitle: "Example",
        elapsedMs: 1,
        axe: { executed: true, error: null, counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }, failures: [], failedRules: [] },
        sa11y: {
          executed: true,
          error: null,
          counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0, warnings: 2 },
          failures: [],
          failedRules: [],
          warnings: [
            { rule: "LINK_IDENTICAL_NAME", type: "warning", message: "Warning", xpath: "/html[1]/body[1]/main[1]/a[1]" },
            { rule: "LINK_IDENTICAL_NAME", type: "warning", message: "Warning", xpath: "/html[1]/body[1]/main[1]/a[2]" }
          ]
        }
      }
    ],
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} }
  };

  const html = generateInteractiveHtml(summary);
  assert.ok(html.includes("Native warnings (not counted as failures)"));
  assert.ok(html.includes("LINK_IDENTICAL_NAME"));
  assert.ok(html.includes("not treated as WCAG failures") || html.includes("do not take part in cross-engine correlation"));
  assert.ok(html.includes('href="#engine-warnings"'), "the table of contents links to the warnings section");
});
