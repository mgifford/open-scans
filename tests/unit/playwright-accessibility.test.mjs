import test from "node:test";
import assert from "node:assert/strict";

async function runAxeForRule(t, html, ruleId) {
  let chromium;
  let AxeBuilder;

  try {
    const [playwrightModule, axePlaywrightModule] = await Promise.all([
      import("playwright"),
      import("@axe-core/playwright")
    ]);
    chromium = playwrightModule.chromium;
    AxeBuilder = axePlaywrightModule.default;
  } catch (error) {
    t.skip(`Skipping Playwright accessibility test: ${error.message}`);
    return null;
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (error) {
    t.skip(`Skipping Playwright accessibility test: ${error.message}`);
    return null;
  }

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    return await new AxeBuilder({ page }).withRules([ruleId]).analyze();
  } finally {
    await browser.close();
  }
}

test("generic Playwright accessibility test finds missing image alt text", async (t) => {
  const result = await runAxeForRule(
    t,
    "<!doctype html><html lang='en'><body><img src='logo.png'></body></html>",
    "image-alt"
  );

  if (!result) return;
  assert.ok(result.violations.some((violation) => violation.id === "image-alt"));
});

test("generic Playwright accessibility test passes image-alt when alt text is present", async (t) => {
  const result = await runAxeForRule(
    t,
    "<!doctype html><html lang='en'><body><img src='logo.png' alt='Company logo'></body></html>",
    "image-alt"
  );

  if (!result) return;
  assert.equal(result.violations.length, 0);
});
