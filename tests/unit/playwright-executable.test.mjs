import test from "node:test";
import assert from "node:assert/strict";

import { resolvePlaywrightExecutable } from "../../scanner/playwright-executable.mjs";

test("Chromium may use the Puppeteer executable path", () => {
  assert.equal(
    resolvePlaywrightExecutable("chromium", { PUPPETEER_EXECUTABLE_PATH: "/opt/chrome" }),
    "/opt/chrome"
  );
});

test("WebKit and Firefox never receive the Chromium Puppeteer path", () => {
  const env = { PUPPETEER_EXECUTABLE_PATH: "/opt/chrome" };

  assert.equal(resolvePlaywrightExecutable("webkit", env), undefined);
  assert.equal(resolvePlaywrightExecutable("firefox", env), undefined);
});

test("an explicit Playwright override applies to every browser", () => {
  const env = {
    PLAYWRIGHT_EXECUTABLE_PATH: "/opt/custom-browser",
    PUPPETEER_EXECUTABLE_PATH: "/opt/chrome"
  };

  assert.equal(resolvePlaywrightExecutable("webkit", env), "/opt/custom-browser");
  assert.equal(resolvePlaywrightExecutable("firefox", env), "/opt/custom-browser");
  assert.equal(resolvePlaywrightExecutable("chromium", env), "/opt/custom-browser");
});

test("no override leaves the browser to Playwright", () => {
  assert.equal(resolvePlaywrightExecutable("chromium", {}), undefined);
  assert.equal(resolvePlaywrightExecutable("webkit", {}), undefined);
});
