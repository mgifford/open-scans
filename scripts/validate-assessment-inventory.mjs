#!/usr/bin/env node
/**
 * Real-browser check for the Phase 3b assisted element inventory.
 *
 * Builds a deterministic collector artifact from synthetic page facts, generates a
 * report that embeds it, opens the report from `file://`, and exercises the
 * inventory-to-record path: open a page, choose an element, prefill the barrier
 * form, save, and verify the stored record. Then scans the page with axe.
 *
 * This is a development/verification tool, not a unit test: it needs a Playwright
 * browser. `npm test` covers the rendering and record validation without one.
 *
 * Usage:
 *   PLAYWRIGHT_BROWSERS_PATH=.tmp/pw-browsers \
 *     npm run validate:assessment-inventory -- --browser=webkit
 *
 * Exit code 0 requires: no console errors, no axe violations, a prefilled record
 * with its collector item id, and the element summary cleared after saving.
 *
 * @module validate-assessment-inventory
 */
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { chromium, firefox, webkit } from "playwright";

import { generateInteractiveHtml } from "../scanner/interactive-report.mjs";
import { DEFAULT_CAPS, buildCollectorArtifact, buildPageInventory } from "../scanner/assessment/collectors/model.mjs";
import { loadCatalogue } from "../scanner/assessment/catalogue.mjs";

const BROWSERS = { chromium, firefox, webkit };
const AXE_PATH = resolve("node_modules/axe-core/axe.min.js");
const REPORT_ID = "open-scans/issue-42/2026-11-26T12:00:00.000Z";

export function buildFixtureSummary() {
  return {
    issueNumber: 42,
    issueUrl: "https://github.com/example/repo/issues/42",
    scanTitle: "Inventory fixture",
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
          counts: { passed: 1, failed: 0, cantTell: 0, inapplicable: 0 },
          passedRules: ["image-alt"],
          failedRules: [],
          failures: []
        }
      }
    ],
    enhanced: { consolidatedFailures: [], roleStats: {}, severityStats: {} }
  };
}

export function buildFixtureArtifact() {
  const rawPage = {
    url: "https://example.com/",
    finalUrl: "https://example.com/",
    title: "Example page",
    status: "captured",
    httpStatus: 200,
    capturedAt: "2026-11-26T12:00:01.000Z",
    iframesSkipped: 0,
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
        attributes: {}
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
        attributes: {}
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
        attributes: {}
      }
    ]
  };
  return buildCollectorArtifact({
    reportAssociation: { reportId: REPORT_ID, issueNumber: 42, scannedAt: "2026-11-26T12:00:00.000Z" },
    catalogue: loadCatalogue(),
    capture: {
      status: "complete",
      browser: "chromium",
      browserVersion: "fixture",
      viewport: { width: 1280, height: 800 },
      colorScheme: "light",
      startedAt: "2026-11-26T12:00:00.000Z",
      finishedAt: "2026-11-26T12:00:02.000Z",
      durationMs: 2000,
      navigationCount: 1,
      pagesRequested: 1,
      pagesCaptured: 1,
      pagesFailed: 0,
      caps: DEFAULT_CAPS,
      reason: null
    },
    pages: [buildPageInventory(rawPage, { reportId: REPORT_ID, caps: DEFAULT_CAPS })],
    generatedAt: "2026-11-26T12:00:02.000Z"
  });
}

function parseArgs(argv) {
  const args = { browser: "chromium" };
  for (const arg of argv) {
    if (arg.startsWith("--browser=")) args.browser = arg.slice("--browser=".length);
  }
  if (!BROWSERS[args.browser]) {
    throw new Error(`Unsupported browser "${args.browser}". Choose one of: ${Object.keys(BROWSERS).join(", ")}`);
  }
  return args;
}

function buildReportFile() {
  const directory = mkdtempSync(join(tmpdir(), "open-scans-inventory-"));
  const htmlPath = join(directory, "report.html");
  const html = generateInteractiveHtml(buildFixtureSummary(), null, null, null, buildFixtureArtifact());
  writeFileSync(htmlPath, html);
  return { htmlPath, bytes: Buffer.byteLength(html) };
}

async function run({ htmlPath, browserName }) {
  const browser = await BROWSERS[browserName].launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("favicon")) errors.push(message.text());
  });

  const result = { browser: browserName, fileUrl: `file://${htmlPath}` };
  await page.goto(result.fileUrl, { waitUntil: "load" });
  await page.waitForTimeout(300);
  result.rows = await page.locator("[data-collector-item]").count();
  result.buttons = await page.locator("[data-collector-prefill]").count();

  await page.locator("#assisted-inventory details.assessment-procedure > summary").first().click();
  await page.waitForTimeout(150);
  // Index 1 is the image row: headings, images, links.
  await page.locator("[data-collector-prefill]").nth(1).click();
  await page.waitForTimeout(150);

  result.prefill = await page.evaluate(() => ({
    activeId: document.activeElement?.id,
    url: document.getElementById("finding-url")?.value,
    locator: document.getElementById("finding-element-locator")?.value,
    collectorItemId: document.getElementById("finding-collector-item")?.value,
    procedure: document.getElementById("finding-procedure")?.value,
    summaryVisible: !document.getElementById("finding-element-summary")?.hidden
  }));

  await page.selectOption("#finding-outcome", "failed");
  await page.fill("#finding-actual", "The logo has no text alternative, so a screen reader user hears nothing.");
  await page.click("#report-barrier button[type=submit]");
  await page.waitForTimeout(300);

  result.saved = await page.evaluate(() => {
    const key = Object.keys(localStorage).find((entry) => entry.startsWith("open-scans"));
    const stored = key ? JSON.parse(localStorage.getItem(key)) : null;
    const record = stored?.records?.[0];
    return {
      records: stored?.records?.length ?? 0,
      collectorItemId: record?.elementIdentity?.collectorItemId ?? null,
      locator: record?.elementIdentity?.locator ?? null,
      procedure: record?.assessmentDefinitionId ?? null,
      summaryHidden: document.getElementById("finding-element-summary")?.hidden,
      status: document.getElementById("assessment-status")?.textContent?.trim()
    };
  });

  await page.addScriptTag({ path: AXE_PATH });
  result.axe = await page.evaluate(async () => {
    const run_ = await window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] }
    });
    return { violations: run_.violations.map((violation) => violation.id), incomplete: run_.incomplete.map((entry) => entry.id) };
  });
  result.consoleErrors = errors;
  await browser.close();
  return result;
}

function assess(result) {
  const problems = [];
  if (result.consoleErrors.length > 0) problems.push(`${result.consoleErrors.length} console error(s)`);
  if (result.rows !== 3) problems.push(`expected 3 inventory rows, found ${result.rows}`);
  if (result.buttons !== 3) problems.push(`expected 3 prefill buttons, found ${result.buttons}`);
  if (result.prefill.url !== "https://example.com/") problems.push("page URL was not prefilled");
  if (result.prefill.locator !== "html > body > img") problems.push("locator was not prefilled");
  if (!/^col_[a-f0-9]{16}$/.test(result.prefill.collectorItemId ?? "")) problems.push("collector item id was not prefilled");
  if (result.prefill.procedure !== "manual-alt-text-quality") problems.push("suggested procedure was not prefilled");
  if (!result.prefill.summaryVisible) problems.push("element summary was not shown");
  if (result.saved.records !== 1) problems.push("record was not saved");
  if (result.saved.collectorItemId !== result.prefill.collectorItemId) problems.push("saved record lost the collector item id");
  if (!result.saved.summaryHidden) problems.push("element summary was not cleared after saving");
  if (result.axe.violations.length > 0) problems.push(`${result.axe.violations.length} axe violation(s): ${result.axe.violations.join(", ")}`);
  return problems;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = buildReportFile();
  const result = await run({ htmlPath: report.htmlPath, browserName: args.browser });
  const problems = assess(result);
  process.stdout.write(`${JSON.stringify({ ok: problems.length === 0, reportBytes: report.bytes, problems, result }, null, 2)}\n`);
  if (problems.length > 0) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(`[validate-assessment-inventory] ${error.message}`);
    process.exitCode = 1;
  });
}
