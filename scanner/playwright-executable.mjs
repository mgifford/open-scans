/**
 * Resolve an optional explicit Playwright browser executable.
 *
 * The scan workflows set `PUPPETEER_EXECUTABLE_PATH` so ALFA's Puppeteer uses
 * the installed Chromium. That variable is not a Playwright override: handing a
 * Chromium binary to Playwright's WebKit or Firefox launcher makes the browser
 * close immediately ("Target page, context or browser has been closed"), which
 * silently drops axe and Sa11y from those scans. `PUPPETEER_EXECUTABLE_PATH` is
 * therefore honoured only for Chromium.
 *
 * `PLAYWRIGHT_EXECUTABLE_PATH` remains an explicit override for any browser,
 * because the caller chose it for Playwright rather than for Puppeteer.
 *
 * @param {string} browser - `chromium`, `firefox` or `webkit`.
 * @param {NodeJS.ProcessEnv} [env] - Environment to read; injectable for tests.
 * @returns {string|undefined} Explicit executable path, or undefined to use the
 *   Playwright-managed browser.
 */
export function resolvePlaywrightExecutable(browser, env = process.env) {
  if (env.PLAYWRIGHT_EXECUTABLE_PATH) return env.PLAYWRIGHT_EXECUTABLE_PATH;
  if (browser === "chromium" && env.PUPPETEER_EXECUTABLE_PATH) {
    return env.PUPPETEER_EXECUTABLE_PATH;
  }
  return undefined;
}
