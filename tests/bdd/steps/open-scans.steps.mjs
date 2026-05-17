import { Before, After, Given, When, Then } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const repoRoot = "/home/runner/work/open-scans/open-scans";
const workflowPath = path.join(repoRoot, ".github/workflows/scan-request.yml");

const MIME_BY_EXT = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".svg", "image/svg+xml"]
]);

function resolveRepoPathFromRequestUrl(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname;

  if (pathname === "/") pathname = "/index.html";
  if (pathname.startsWith("/open-scans/")) pathname = pathname.slice("/open-scans".length);

  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!decoded || decoded.includes("..")) {
    return path.join(repoRoot, "index.html");
  }

  return path.join(repoRoot, decoded);
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

Before({ tags: "@browser" }, async function () {
  try {
    this.browser = await chromium.launch({ headless: true });
  } catch (error) {
    this.attach(`Skipping browser scenario: ${error.message}`);
    return "skipped";
  }
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  await this.page.route("https://mgifford.github.io/**", async (route) => {
    const requestUrl = route.request().url();
    const filePath = resolveRepoPathFromRequestUrl(requestUrl);

    if (!(await fileExists(filePath))) {
      await route.fulfill({ status: 404, body: "Not found" });
      return;
    }

    const body = await readFile(filePath);
    const contentType = MIME_BY_EXT.get(path.extname(filePath)) ?? "text/plain; charset=utf-8";
    await route.fulfill({ status: 200, body, contentType });
  });
});

After({ tags: "@browser" }, async function () {
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});

Given("the open-scans submission form is loaded", async function () {
  await this.page.goto("https://mgifford.github.io/open-scans/index.html", { waitUntil: "domcontentloaded" });
  await this.page.waitForSelector("#scan-form");
});

When("I enter {string} into the scan title field", async function (title) {
  await this.page.fill("#scan-title", title);
});

When("I enter these URLs into the URL field:", async function (docString) {
  await this.page.fill("#urls", docString.trim());
});

When("I choose {string} for viewport", async function (optionText) {
  await this.page.selectOption("#scan-viewport", { label: optionText });
});

When("I choose {string} for color scheme", async function (optionText) {
  await this.page.selectOption("#scan-color-scheme", { label: optionText });
});

When("I choose {string} for browser", async function (optionText) {
  await this.page.selectOption("#scan-browser", { label: optionText });
});

When("I submit the scan form", async function () {
  await this.page.click("#submit-button");
});

Then("I should see a redirect message for creating a GitHub scan request", async function () {
  await this.page.waitForSelector("#success-message.visible");
  const message = await this.page.locator("#success-message").innerText();
  assert.match(message, /Redirecting to GitHub/i);
});

Then("the URL preview count should mention {string}", async function (snippet) {
  await this.page.waitForSelector("#preview.visible");
  const countText = await this.page.locator("#url-count").innerText();
  assert.match(countText, new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
});

Then("the preview should list accepted URL {string}", async function (url) {
  const text = await this.page.locator("#url-list").innerText();
  assert.match(text, new RegExp(`✓\\s+${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
});

Then("the preview should list rejected URL {string}", async function (url) {
  const text = await this.page.locator("#url-list").innerText();
  assert.match(text, new RegExp(`✗\\s+${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
});

Then("the preview should show rejection reason containing {string}", async function (reason) {
  const text = await this.page.locator("#url-list").innerText();
  assert.match(text, new RegExp(reason.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
});

Then("the GitHub issue link should include a SCAN-prefixed title {string}", async function (scanTitle) {
  const href = await this.page.locator("#success-message a").getAttribute("href");
  assert.ok(href, "Expected success message link to exist");
  const issueUrl = new URL(href);
  assert.equal(issueUrl.searchParams.get("title"), `SCAN: ${scanTitle}`);
});

Then("the GitHub issue link body should include scan context values:", async function (table) {
  const href = await this.page.locator("#success-message a").getAttribute("href");
  assert.ok(href, "Expected success message link to exist");
  const issueUrl = new URL(href);
  const body = issueUrl.searchParams.get("body") ?? "";

  for (const { key, value } of table.hashes()) {
    assert.match(body, new RegExp(`${key}:\\s*${value}`, "i"));
  }
});

Then("the page should expose key accessible form structure", async function () {
  const mainCount = await this.page.locator("main").count();
  assert.ok(mainCount >= 1, "Expected at least one main landmark");

  const controlSelectors = [
    "#scan-title",
    "#urls",
    "#scan-viewport",
    "#scan-color-scheme",
    "#scan-browser"
  ];

  for (const selector of controlSelectors) {
    const controlId = selector.slice(1);
    const labelCount = await this.page.locator(`label[for="${controlId}"]`).count();
    assert.ok(labelCount >= 1, `Expected an associated label for ${selector}`);
  }

  const submitText = await this.page.locator("#submit-button").innerText();
  assert.match(submitText.trim(), /create scan request/i);
});

Given("the scan request workflow file", async function () {
  this.scanRequestWorkflow = await readFile(workflowPath, "utf8");
});

Then('it should require the issue title to start with "SCAN:" and the issue to be open', function () {
  assert.match(
    this.scanRequestWorkflow,
    /if:\s*startsWith\(github\.event\.issue\.title,\s*'SCAN:'\)\s*&&\s*github\.event\.issue\.state\s*==\s*'open'/
  );
});

Then("it should include a dedicated step named {string}", function (stepName) {
  assert.match(this.scanRequestWorkflow, new RegExp(`- name:\\s*${stepName}`));
});

Then("the BDD acceptance step should run {string}", function (command) {
  assert.match(this.scanRequestWorkflow, new RegExp(`run:\\s*${command.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
});
