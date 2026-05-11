import test from "node:test";
import assert from "node:assert/strict";

async function analyzeHtmlWithAxeRule(t, html, ruleId) {
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
  const result = await analyzeHtmlWithAxeRule(
    t,
    "<!doctype html><html lang='en'><body><img src='logo.png'></body></html>",
    "image-alt"
  );

  if (!result) return;
  const imageAltViolation = result.violations.find((violation) => violation.id === "image-alt");
  assert.ok(imageAltViolation);
  assert.ok(imageAltViolation.nodes.some((node) => node.target?.includes("img")));
});

test("generic Playwright accessibility test passes image-alt when alt text is present", async (t) => {
  const result = await analyzeHtmlWithAxeRule(
    t,
    "<!doctype html><html lang='en'><body><img src='logo.png' alt='Company logo'></body></html>",
    "image-alt"
  );

  if (!result) return;
  assert.equal(result.violations.length, 0);
  assert.ok(result.passes.some((pass) => pass.id === "image-alt"));
});

test("generic Playwright accessibility test finds unnamed button controls", async (t) => {
  const result = await analyzeHtmlWithAxeRule(
    t,
    "<!doctype html><html lang='en'><body><button><svg aria-hidden='true'></svg></button></body></html>",
    "button-name"
  );

  if (!result) return;
  const buttonNameViolation = result.violations.find((violation) => violation.id === "button-name");
  assert.ok(buttonNameViolation);
  assert.ok(buttonNameViolation.nodes.some((node) => node.target?.includes("button")));
});

test("generic Playwright accessibility test passes button-name when aria-label is present", async (t) => {
  const result = await analyzeHtmlWithAxeRule(
    t,
    "<!doctype html><html lang='en'><body><button aria-label='Open menu'><svg aria-hidden='true'></svg></button></body></html>",
    "button-name"
  );

  if (!result) return;
  assert.equal(result.violations.length, 0);
  assert.ok(result.passes.some((pass) => pass.id === "button-name"));
});
