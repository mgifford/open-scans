import test from "node:test";
import assert from "node:assert/strict";

import { DEFAULT_CAPS, buildCollectorArtifact, buildPageInventory } from "../../scanner/assessment/collectors/model.mjs";
import { renderAssessmentWorkspace, renderCollectorInventory } from "../../scanner/assessment/render.mjs";
import { buildAssessmentCoverage } from "../../scanner/assessment/coverage.mjs";
import { loadCatalogue } from "../../scanner/assessment/catalogue.mjs";
import { createRecord, normalizeRecord, validateRecord } from "../../scanner/assessment/records.mjs";
import { generateInteractiveHtml } from "../../scanner/interactive-report.mjs";

const catalogue = loadCatalogue();
const REPORT_ID = "open-scans/issue-42/2026-11-26T12:00:00.000Z";

function makeRawPage(overrides = {}) {
  return {
    url: "https://example.com/",
    finalUrl: "https://example.com/",
    title: "Example page",
    status: "captured",
    httpStatus: 200,
    capturedAt: "2026-11-26T12:00:01.000Z",
    iframesSkipped: 1,
    shadowRootsSkipped: 0,
    nameGraph: [
      { id: "n0", ariaLabel: null, title: null, alt: null, text: "Welcome", labelledBy: [] },
      { id: "n1", ariaLabel: null, title: null, alt: null, text: "", labelledBy: [] },
      { id: "n2", ariaLabel: null, title: null, alt: null, text: "Read more", labelledBy: [] }
    ],
    headings: [
      {
        ordinal: 0,
        locator: "html > body > h1",
        htmlSnippet: "<h1>Welcome</h1>",
        level: 1,
        text: "Welcome",
        nameNodeId: "n0",
        attributes: { role: null, ariaHidden: false, ariaLabel: null, displayNone: false, visibilityHidden: false, tabIndex: null }
      }
    ],
    images: [
      {
        ordinal: 0,
        locator: "html > body > img",
        htmlSnippet: '<img src="logo.png">',
        src: "logo.png",
        alt: null,
        renderedWidth: 120,
        renderedHeight: 40,
        captionText: "",
        text: "",
        nameNodeId: "n1",
        attributes: { role: null, ariaHidden: false, ariaLabel: null, displayNone: false, visibilityHidden: false, tabIndex: null }
      }
    ],
    links: [
      {
        ordinal: 0,
        locator: "html > body > p > a",
        htmlSnippet: '<a href="https://example.com/more">Read more</a>',
        href: "https://example.com/more",
        target: null,
        rel: null,
        imageOnly: false,
        nativeAlt: null,
        text: "Read more",
        nameNodeId: "n2",
        attributes: { role: null, ariaHidden: false, ariaLabel: null, displayNone: false, visibilityHidden: false, tabIndex: null }
      }
    ],
    ...overrides
  };
}

function makeArtifact({ status = "complete", pages = null, captureOverrides = {} } = {}) {
  const reportId = REPORT_ID;
  const inventory = pages ?? [buildPageInventory(makeRawPage(), { reportId, caps: DEFAULT_CAPS })];
  return buildCollectorArtifact({
    reportAssociation: { reportId, issueNumber: 42, scannedAt: "2026-11-26T12:00:00.000Z" },
    catalogue,
    capture: {
      status,
      browser: "chromium",
      browserVersion: "999",
      viewport: { width: 1280, height: 800 },
      colorScheme: "light",
      startedAt: "2026-11-26T12:00:00.000Z",
      finishedAt: "2026-11-26T12:00:02.000Z",
      durationMs: 2000,
      navigationCount: inventory.length,
      pagesRequested: inventory.length,
      pagesCaptured: inventory.filter((page) => page.status === "captured").length,
      pagesFailed: inventory.filter((page) => page.status === "failed").length,
      caps: DEFAULT_CAPS,
      reason: null,
      ...captureOverrides
    },
    pages: inventory,
    generatedAt: "2026-11-26T12:00:02.000Z"
  });
}

function makeSummary(overrides = {}) {
  return {
    issueNumber: 42,
    issueUrl: "https://github.com/example/repo/issues/42",
    scanTitle: "Example site",
    scannedAt: "2026-11-26T12:00:00.000Z",
    totalElapsedMs: 60000,
    totalSubmitted: 1,
    acceptedCount: 1,
    scannedCount: 1,
    engines: ["axe"],
    scanContext: { viewport: { width: 1280, height: 800 }, browser: "chromium" },
    results: [{ submittedUrl: "https://example.com/", finalUrl: "https://example.com/", axe: { executed: true, counts: { passed: 1, failed: 0, cantTell: 0, inapplicable: 0 }, passedRules: ["image-alt"], failedRules: [], failures: [] } }],
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} },
    ...overrides
  };
}

test("the inventory renders captured headings, images and links as evidence", () => {
  const artifact = makeArtifact();
  const html = renderCollectorInventory(artifact);
  assert.match(html, /Assisted element inventory/);
  assert.match(html, /1 headings, 1 images, 1 links/);
  assert.match(html, /Welcome/);
  assert.match(html, /logo\.png/);
  assert.match(html, /Read more/);
  assert.match(html, /https:\/\/example\.com\/more/);
  assert.match(html, /data-collector-item="col_[a-f0-9]{16}"/);
  assert.match(html, /Image has no alt attribute/);
  assert.match(html, /Link text is generic/);
  assert.match(html, /Top document only/);
  assert.match(html, /Skipped: 1 iframe/);
});

test("the inventory states that a signal is not a finding and shows no verdict", () => {
  const html = renderCollectorInventory(makeArtifact());
  assert.match(html, /not findings/i);
  assert.match(html, /does not mean the element fails/i);
  assert.ok(!/\boutcome\b/i.test(html));
  assert.ok(!/\bseverity\b/i.test(html));
  assert.ok(!/>\s*(pass|fail|violation)\s*</i.test(html));
});

test("a missing or not-run capture is one sentence with the reason, not an empty table", () => {
  const none = renderCollectorInventory(null);
  assert.match(none, /No assisted inventory was captured in this scan/);
  assert.ok(!/<table/.test(none));

  const notRun = makeArtifact({
    status: "not-run",
    pages: [],
    captureOverrides: { reason: "browser missing" }
  });
  const html = renderCollectorInventory(notRun);
  assert.match(html, /No assisted inventory was captured in this scan\. browser missing/);
  assert.ok(!/<table/.test(html));
});

test("a partial capture states the shortfall", () => {
  const failed = buildPageInventory(
    makeRawPage({ url: "https://example.com/broken", finalUrl: "https://example.com/broken", status: "failed", error: "Navigation timeout" }),
    { reportId: REPORT_ID, caps: DEFAULT_CAPS }
  );
  const artifact = makeArtifact({ status: "partial", pages: [buildPageInventory(makeRawPage(), { reportId: REPORT_ID }), failed] });
  const html = renderCollectorInventory(artifact);
  assert.match(html, /Capture was partial: 1 of 2 requested pages/);
  assert.match(html, /no inventory: Navigation timeout/);
});

test("hostile collector text is escaped in tables and prefill attributes", () => {
  const raw = makeRawPage({
    headings: [
      {
        ordinal: 0,
        locator: 'html > body > h1',
        htmlSnippet: '<h1><script>alert(1)</script></h1>',
        level: 1,
        text: '<script>alert(1)</script>',
        nameNodeId: null,
        attributes: {}
      }
    ]
  });
  const artifact = makeArtifact({ pages: [buildPageInventory(raw, { reportId: REPORT_ID })] });
  const html = renderCollectorInventory(artifact);
  assert.ok(!html.includes("<script>alert(1)</script>"));
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
});

test("an uncomputed name is labelled, not presented as empty", () => {
  const raw = makeRawPage({
    links: [
      {
        ordinal: 0,
        locator: "html > body > p > a",
        htmlSnippet: '<a href="https://example.com/more">Real link text</a>',
        href: "https://example.com/more",
        target: null,
        rel: null,
        imageOnly: false,
        nativeAlt: null,
        text: "Real link text",
        nameNodeId: null,
        attributes: { role: null, ariaHidden: false, ariaLabel: null, displayNone: false, visibilityHidden: false, tabIndex: null }
      }
    ]
  });
  const artifact = makeArtifact({ pages: [buildPageInventory(raw, { reportId: REPORT_ID, caps: DEFAULT_CAPS })] });
  const html = renderCollectorInventory(artifact);
  assert.match(html, /name not captured/);
  assert.ok(!html.includes("Link has no computed name"), "an uncomputed name must not be shown as an empty-name signal");
});

test("the inventory does not change coverage counts", () => {
  const summary = makeSummary();
  const coverage = buildAssessmentCoverage({ summary, catalogue });
  const before = JSON.stringify(coverage.counts);
  const artifact = makeArtifact();
  const withInventory = renderAssessmentWorkspace({
    coverage,
    report: { reportId: REPORT_ID, pages: ["https://example.com/"] },
    pages: ["https://example.com/"],
    collectors: artifact
  });
  assert.equal(JSON.stringify(buildAssessmentCoverage({ summary, catalogue }).counts), before);
  assert.match(withInventory, /data-collector-item/);
  // The notice wording is owned by the notice, not the inventory.
  assert.match(renderAssessmentWorkspace({ coverage, report: {}, pages: [] }), /No assisted inventory was captured in this scan/);
});

test("the full report embeds the inventory only when a capture is supplied", () => {
  const summary = makeSummary();
  const withInventory = generateInteractiveHtml(summary, null, null, null, makeArtifact());
  assert.match(withInventory, /Assisted element inventory/);
  assert.match(withInventory, /data-collector-prefill="col_/);

  const without = generateInteractiveHtml(summary);
  assert.match(without, /No assisted inventory was captured in this scan/);
  // The inline runtime mentions the selector; only a real row/button uses an id.
  assert.ok(!without.includes('data-collector-item="col_'));
  assert.ok(!without.includes('data-collector-prefill="col_'));
});

test("collectorItemId is optional, validated and preserved", () => {
  const base = {
    kind: "finding",
    title: "Image alternative is a file name",
    outcome: "failed",
    method: "guided-manual",
    testingDate: "2026-11-26",
    actualBehaviour: "The alternative reads rates.png.",
    elementIdentity: {
      locator: "main > figure > img",
      locatorType: "css",
      accessibleName: "rates.png",
      htmlSnippet: "<img alt='rates.png'>",
      collectorItemId: "col_0123456789abcdef"
    }
  };
  const record = createRecord(base, { now: () => "2026-11-26T12:00:00.000Z", random: { randomUUID: () => "id" } });
  assert.equal(validateRecord(record).ok, true);
  assert.equal(record.elementIdentity.collectorItemId, "col_0123456789abcdef");

  const malformed = normalizeRecord({ ...base, elementIdentity: { ...base.elementIdentity, collectorItemId: "col_NOTHEX" } });
  const result = validateRecord(malformed);
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /collectorItemId/);

  const without = createRecord({ ...base, elementIdentity: { locator: "#x", locatorType: "css" } });
  assert.equal(without.elementIdentity.collectorItemId, null);
  assert.equal(validateRecord(without).ok, true);
});

test("the finding form carries the element identity fields used by prefill", () => {
  const html = generateInteractiveHtml(makeSummary());
  for (const id of [
    "finding-element-locator",
    "finding-element-locator-type",
    "finding-element-name",
    "finding-element-snippet",
    "finding-collector-item",
    "finding-procedure",
    "finding-element-summary"
  ]) {
    assert.ok(html.includes(`id="${id}"`), `expected #${id} in the finding form`);
  }
});
