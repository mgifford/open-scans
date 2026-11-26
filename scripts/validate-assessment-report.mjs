#!/usr/bin/env node
/**
 * Validate a generated accessibility report in a real browser from file://.
 *
 * The report is generated from an existing report.json, written to a temporary
 * directory, opened with `file://`, exercised through its assessment workspace,
 * and scanned with axe-core. It is a development/verification tool, not a unit
 * test: it needs a Playwright browser installed.
 *
 * Usage:
 *   node scripts/validate-assessment-report.mjs <path/to/report.json> [--browser=chromium|firefox|webkit]
 *
 * Example with a workspace-local browser install:
 *   PLAYWRIGHT_BROWSERS_PATH=.tmp/pw-browsers \
 *     node scripts/validate-assessment-report.mjs reports/issues/issue-398/<ts>/report.json --browser=webkit
 *
 * Exit code 0 means: no console errors, no axe violations, and the assessment
 * record survived a file:// reload. Incomplete axe results are reported, not
 * treated as passes.
 *
 * @module validate-assessment-report
 */
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { chromium, firefox, webkit } from "playwright";

import { generateInteractiveHtml } from "../scanner/interactive-report.mjs";

const BROWSERS = { chromium, firefox, webkit };
const AXE_PATH = resolve("node_modules/axe-core/axe.min.js");

function parseArgs(argv) {
  const args = { reportPath: null, browser: "chromium" };
  for (const arg of argv) {
    if (arg.startsWith("--browser=")) args.browser = arg.slice("--browser=".length);
    else if (!arg.startsWith("--")) args.reportPath = arg;
  }
  if (!args.reportPath) {
    throw new Error("Usage: node scripts/validate-assessment-report.mjs <report.json> [--browser=chromium|firefox|webkit]");
  }
  if (!BROWSERS[args.browser]) {
    throw new Error(`Unsupported browser "${args.browser}". Choose one of: ${Object.keys(BROWSERS).join(", ")}`);
  }
  return args;
}

export function buildReportFile(reportPath) {
  const summary = JSON.parse(readFileSync(reportPath, "utf8"));
  const html = generateInteractiveHtml(summary);
  const outputDir = mkdtempSync(join(tmpdir(), "open-scans-assessment-"));
  const htmlPath = join(outputDir, "report.html");
  writeFileSync(htmlPath, html);
  // The page is opened from file://, so axe is injected by this validator, not by the report.
  return { htmlPath, bytes: Buffer.byteLength(html, "utf8"), outputDir };
}

async function runValidation({ htmlPath, browserName }) {
  const browserType = BROWSERS[browserName];
  const browser = await browserType.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("favicon")) consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(`pageerror: ${error.message}`));

  const results = { browser: browserName, fileUrl: `file://${htmlPath}` };
  await page.goto(results.fileUrl, { waitUntil: "load" });
  await page.waitForTimeout(400);
  results.title = await page.title();

  results.initial = await page.evaluate(() => {
    let storageAvailable = true;
    let storageError = null;
    try {
      localStorage.setItem("__probe", "1");
      if (localStorage.getItem("__probe") !== "1") storageAvailable = false;
      localStorage.removeItem("__probe");
    } catch (error) {
      storageAvailable = false;
      storageError = `${error.name}: ${error.message}`;
    }
    return {
      htmlClass: document.documentElement.className,
      coverageRows: document.querySelectorAll("[data-criterion-row]").length,
      procedureCards: document.querySelectorAll("[data-procedure-id]").length,
      status: document.getElementById("assessment-status")?.textContent?.trim(),
      notice: document.querySelector("#assessment-human-notice h3")?.textContent,
      runtime: !!window.OpenScansAssessment,
      storageAvailable,
      storageError,
      clipboardApi: !!navigator.clipboard?.writeText
    };
  });

  await page.selectOption("#procedure-select", "manual-heading-structure");
  await page.selectOption("#procedure-outcome", "inconclusive");
  await page.fill("#procedure-notes", "Automated validation record. Not a real assessment.");
  await page.click("#procedure-record-form button[type=submit]");
  await page.waitForTimeout(300);
  results.afterSave = await page.evaluate(() => ({
    status: document.getElementById("assessment-status")?.textContent?.trim(),
    saveTimes: document.getElementById("assessment-save-times")?.textContent?.trim(),
    records: document.querySelectorAll("#assessment-records tbody tr").length,
    coverageCellUpdated: (document.querySelector('[data-review-cell="1.3.1"]')?.textContent ?? "").includes("record")
  }));

  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(400);
  results.afterReload = await page.evaluate(() => ({
    status: document.getElementById("assessment-status")?.textContent?.trim(),
    records: document.querySelectorAll("#assessment-records tbody tr").length
  }));

  results.noJsContract = await page.evaluate(() => {
    document.documentElement.classList.remove("js");
    const form = document.getElementById("procedure-record-form");
    const guidance = document.getElementById("procedure-manual-keyboard-access");
    return {
      formHidden: form ? getComputedStyle(form).display === "none" : null,
      guidanceVisible: guidance ? getComputedStyle(guidance).display !== "none" : null
    };
  });
  await page.evaluate(() => document.documentElement.classList.add("js"));

  await page.addScriptTag({ path: AXE_PATH });
  results.axe = await page.evaluate(async () => {
    const run = await window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] }
    });
    return {
      violations: run.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.length,
        targets: violation.nodes.slice(0, 3).map((node) => node.target.join(" "))
      })),
      incomplete: run.incomplete.map((entry) => ({ id: entry.id, nodes: entry.nodes.length })),
      passCount: run.passes.length
    };
  });

  results.consoleErrors = consoleErrors;
  await browser.close();
  return results;
}

function assessResult(results) {
  const problems = [];
  if (results.consoleErrors.length > 0) problems.push(`${results.consoleErrors.length} console error(s)`);
  if (results.axe.violations.length > 0) problems.push(`${results.axe.violations.length} axe violation(s)`);
  if (!results.initial.runtime) problems.push("assessment runtime did not initialise");
  if (results.afterSave.records !== 1) problems.push("record was not saved");
  if (!results.afterSave.coverageCellUpdated) problems.push("coverage cell was not updated");
  if (results.initial.storageAvailable && results.afterReload.records !== 1) {
    problems.push("record did not survive a file:// reload");
  }
  if (!results.noJsContract.formHidden) problems.push("interactive form is visible without JavaScript");
  if (!results.noJsContract.guidanceVisible) problems.push("guidance is hidden without JavaScript");
  return problems;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = buildReportFile(args.reportPath);
  const results = await runValidation({ htmlPath: report.htmlPath, browserName: args.browser });
  const problems = assessResult(results);
  const output = { ok: problems.length === 0, reportBytes: report.bytes, problems, results };
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
  if (problems.length > 0) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(`[validate-assessment-report] ${error.message}`);
    process.exitCode = 1;
  });
}
