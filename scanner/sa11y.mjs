/**
 * Sa11y accessibility engine adapter.
 *
 * Sa11y and Editoria11y share the same checking engine and rules. Open Scans
 * runs the published Sa11y browser bundle in headless mode against ordinary
 * public pages; it does not require Drupal, a CMS, or Editoria11y's reporting
 * layer. Only one adapter is needed for that shared checking technology.
 *
 * The adapter keeps native test keys and native classifications (`error`,
 * `warning`, `good`). It does not translate a native check into a WCAG or ACT
 * claim; mappings are applied later by the existing observation pipeline.
 *
 * @module sa11y
 */
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { resolvePlaywrightExecutable } from "./playwright-executable.mjs";

const require = createRequire(import.meta.url);

const DEFAULT_SA11Y_TIMEOUT_MS = Number(process.env.SA11Y_TIMEOUT_MS || "30000");
const NAV_TIMEOUT_MS = Number(
  process.env.BROWSER_NAV_TIMEOUT_MS || process.env.PLAYWRIGHT_NAV_TIMEOUT_MS || "30000"
);
const NETWORK_IDLE_TIMEOUT_MS = Number(process.env.NETWORK_IDLE_TIMEOUT_MS || "10000");
const LAUNCH_TIMEOUT_MS = Number(process.env.PLAYWRIGHT_LAUNCH_TIMEOUT_MS || "30000");

/** Default Sa11y options for whole-page, headless, non-developer scanning. */
export const SA11Y_DEFAULT_OPTIONS = Object.freeze({
  headless: true,
  checkRoot: "body",
  // Sa11y 5.1.0 hides several ACT-mapped checks (for example BTN_EMPTY for
  // 97a4e1) behind developerChecksOnByDefault. The upstream conformance suite
  // enables it, so the comparison runs the same surface it reports on.
  developerChecksOnByDefault: true,
  readabilityPlugin: false
});

const ENGINE_LABEL = "Sa11y";

/**
 * Resolve the pinned Sa11y distribution that ships in node_modules.
 *
 * @returns {{version: string|null, bundlePath: string, langPath: string}}
 */
export function resolveSa11yAssets() {
  const packagePath = require.resolve("sa11y/package.json");
  const root = dirname(packagePath);
  const { version } = JSON.parse(readFileSync(packagePath, "utf8"));
  return {
    version: typeof version === "string" ? version : null,
    bundlePath: join(root, "dist", "js", "sa11y.umd.js"),
    langPath: join(root, "dist", "js", "lang", "en.umd.js")
  };
}

function createBaseResult(errorMessage = null) {
  return {
    engine: "sa11y",
    label: ENGINE_LABEL,
    executed: false,
    error: errorMessage,
    version: null,
    counts: {
      passed: 0,
      failed: 0,
      cantTell: 0,
      inapplicable: 0,
      warnings: 0
    },
    failedRules: [],
    passedRules: [],
    failures: [],
    warnings: [],
    outcomeCount: 0,
    uniqueFailedCount: 0,
    duplicateFailedCount: 0
  };
}

function toEvidence(entry) {
  return {
    rule: entry.test,
    type: entry.type ?? null,
    message: entry.message ?? null,
    tagName: entry.tagName ?? null,
    elementId: entry.elementId ?? null,
    xpath: entry.xpath ?? null,
    selector: entry.selector || null,
    html: entry.html ?? null,
    developer: entry.developer === true
  };
}

/**
 * Turn the in-page completion payload into the scanner result shape.
 *
 * Separated from browser execution so the classification rules can be tested
 * without launching a browser.
 *
 * @param {{results?: object[], timedOut?: boolean, error?: string|null}} outcome
 * @param {{version?: string|null, configuration?: object, timedOut?: boolean}} meta
 * @returns {object} scanner result
 */
export function normalizeSa11yOutcome(outcome, meta = {}) {
  const base = createBaseResult(null);
  const version = meta.version ?? null;
  const configuration = meta.configuration ?? { ...SA11Y_DEFAULT_OPTIONS };

  if (outcome?.error) {
    return { ...base, version, error: outcome.error, configuration };
  }
  if (outcome?.timedOut || meta.timedOut) {
    const timeoutMs = meta.timeoutMs ?? DEFAULT_SA11Y_TIMEOUT_MS;
    return {
      ...base,
      version,
      error: `Sa11y did not complete within ${timeoutMs}ms`,
      configuration
    };
  }

  const results = Array.isArray(outcome?.results) ? outcome.results : [];
  const failures = results
    .filter((entry) => entry.type === "error" && entry.test)
    .map(toEvidence);
  const warnings = results
    .filter((entry) => entry.type === "warning" && entry.test)
    .map(toEvidence);
  const passes = results.filter((entry) => entry.type === "good" && entry.test && entry.elementId !== null);

  return {
    ...base,
    executed: true,
    version,
    configuration,
    counts: {
      passed: passes.length,
      failed: failures.length,
      cantTell: 0,
      inapplicable: 0,
      warnings: warnings.length
    },
    failedRules: [...new Set(failures.map((failure) => failure.rule))].sort(),
    passedRules: [...new Set(passes.map((pass) => pass.test))].sort(),
    failures,
    warnings,
    outcomeCount: results.length,
    uniqueFailedCount: failures.length,
    duplicateFailedCount: 0
  };
}

/**
 * Run Sa11y against a URL with the pinned bundle.
 *
 * @param {string} url
 * @param {{pageLoadDelayMs?: number, scanContext?: object}} [options]
 * @returns {Promise<object>} scanner result
 */
export async function runSa11yAudit(url, { pageLoadDelayMs = 2000, scanContext = {} } = {}) {
  const base = createBaseResult(null);
  const timings = { navigationMs: 0, settleDelayMs: 0, auditMs: 0, totalMs: 0 };
  const started = Date.now();

  let assets;
  try {
    assets = resolveSa11yAssets();
  } catch (error) {
    return {
      ...base,
      error: `Sa11y package is not installed: ${error instanceof Error ? error.message : String(error)}`
    };
  }

  let browser;
  try {
    const playwright = await import("playwright");
    const browserType = playwright[scanContext.browser] ?? playwright.chromium;
    if (!browserType?.launch) {
      return { ...base, version: assets.version, error: `Playwright browser '${scanContext.browser ?? "chromium"}' is not available` };
    }

    const executablePath =
      process.env.SA11Y_BROWSER_EXECUTABLE_PATH ||
      resolvePlaywrightExecutable(scanContext.browser);

    browser = await browserType.launch({
      headless: true,
      timeout: LAUNCH_TIMEOUT_MS,
      ...(executablePath ? { executablePath } : {})
    });
  } catch (error) {
    return {
      ...base,
      version: assets.version,
      error: `Sa11y browser could not be launched: ${error instanceof Error ? error.message : String(error)}`
    };
  }

  try {
    const context = await browser.newContext({
      viewport: scanContext.viewport ?? { width: 1280, height: 800 },
      colorScheme: scanContext.colorScheme === "dark" ? "dark" : "light"
    });
    const page = await context.newPage();

    const navigationStarted = Date.now();
    await page.goto(url, { waitUntil: "load", timeout: NAV_TIMEOUT_MS });
    await page
      .waitForLoadState("networkidle", { timeout: NETWORK_IDLE_TIMEOUT_MS })
      .catch(() => {});
    if (pageLoadDelayMs > 0) await page.waitForTimeout(pageLoadDelayMs);
    timings.navigationMs = Date.now() - navigationStarted;
    timings.settleDelayMs = pageLoadDelayMs;

    const auditStarted = Date.now();
    try {
      await page.addScriptTag({ path: assets.bundlePath });
      await page.addScriptTag({ path: assets.langPath });
    } catch (error) {
      return {
        ...base,
        version: assets.version,
        configuration: { ...SA11Y_DEFAULT_OPTIONS },
        timings,
        error: `Sa11y bundle could not be loaded: ${error instanceof Error ? error.message : String(error)}`
      };
    }

    const outcome = await page.evaluate(
      async ({ timeoutMs, options }) => {
        if (typeof Sa11y === "undefined") {
          return { error: "Sa11y bundle did not expose the Sa11y global" };
        }

        const serialize = (result) => {
          const element = result?.element ?? null;
          let xpath = null;
          if (element && element.nodeType === 1) {
            const parts = [];
            let node = element;
            while (node && node.nodeType === 1) {
              const tag = node.tagName.toLowerCase();
              let index = 1;
              let sibling = node.previousElementSibling;
              while (sibling) {
                if (sibling.tagName === node.tagName) index += 1;
                sibling = sibling.previousElementSibling;
              }
              parts.unshift(`${tag}[${index}]`);
              node = node.parentElement;
            }
            xpath = `/${parts.join("/")}`;
          }
          return {
            test: result?.test ?? null,
            type: result?.type ?? null,
            message: result?.issueLabel ?? null,
            developer: result?.developer === true,
            text: (element?.textContent ?? "").trim().slice(0, 200),
            tagName: element?.tagName ?? null,
            elementId: element?.id ?? null,
            selector: result?.cssPath || null,
            xpath,
            html: typeof result?.htmlPath === "string" ? result.htmlPath.slice(0, 800) : null
          };
        };

        return await new Promise((resolve) => {
          const timer = setTimeout(() => resolve({ timedOut: true, results: [] }), timeoutMs);
          document.addEventListener(
            "sa11y-check-complete",
            (event) => {
              clearTimeout(timer);
              const results = Array.isArray(event?.detail?.results) ? event.detail.results : [];
              resolve({ timedOut: false, results: results.map(serialize) });
            },
            { once: true }
          );
          try {
            if (typeof Sa11yLangEn !== "undefined") Sa11y.Lang.addI18n(Sa11yLangEn.strings);
            new Sa11y.Sa11y(options);
          } catch (error) {
            clearTimeout(timer);
            resolve({ error: error instanceof Error ? error.message : String(error) });
          }
        });
      },
      { timeoutMs: DEFAULT_SA11Y_TIMEOUT_MS, options: { ...SA11Y_DEFAULT_OPTIONS } }
    );

    timings.auditMs = Date.now() - auditStarted;
    timings.totalMs = Date.now() - started;

    const normalized = normalizeSa11yOutcome(outcome, {
      version: assets.version,
      configuration: { ...SA11Y_DEFAULT_OPTIONS },
      timeoutMs: DEFAULT_SA11Y_TIMEOUT_MS,
      timedOut: outcome?.timedOut === true
    });

    return { ...normalized, timings };
  } catch (error) {
    return {
      ...base,
      version: assets.version,
      configuration: { ...SA11Y_DEFAULT_OPTIONS },
      timings,
      error: `Sa11y scan failed: ${error instanceof Error ? error.message : String(error)}`
    };
  } finally {
    try {
      await browser?.close();
    } catch {
      // Closing is best effort; the scan result is already determined.
    }
  }
}
