/**
 * Assisted collector orchestration: the opt-in gate, the browser capture pass and
 * the artifact write.
 *
 * The gate is the only thing `run-scan.mjs` calls. When collection is not
 * requested, no browser is imported, nothing is navigated and no file is
 * written; a unit test proves that.
 *
 * @module assessment/collectors/capture
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { resolvePlaywrightExecutable } from "../../playwright-executable.mjs";
import {
  ARTIFACT_FILE,
  buildCollectorArtifact,
  buildFailedPage,
  buildNotCapturedPage,
  buildPageInventory,
  resolveCaps,
  trimPageToTotal
} from "./model.mjs";
import { collectPageFacts } from "./extract.mjs";

const TRUTHY = new Set(["1", "true", "yes", "on"]);

/**
 * Parse the scan CLI without disturbing the positional arguments.
 *
 * `run-scan.mjs` reads the issue event at argv[2] and the output directory at
 * argv[3]. The assisted flag may appear anywhere; unknown flags are reported and
 * ignored rather than reordering the positional inputs.
 */
export function resolveScanArgs(argv = process.argv.slice(2), env = process.env) {
  const positional = [];
  const warnings = [];
  let assistedFlag = false;

  for (const raw of argv ?? []) {
    const value = String(raw);
    if (value === "--assisted") {
      assistedFlag = true;
    } else if (value.startsWith("--")) {
      warnings.push(`Unknown flag ignored: ${value}`);
    } else {
      positional.push(value);
    }
  }

  const envValue = String(env?.OPEN_SCANS_ASSISTED ?? "").trim().toLowerCase();
  const assistedEnv = TRUTHY.has(envValue);

  return {
    issueEventPath: positional[0] ?? null,
    outputDir: positional[1] ?? ".scan-output",
    assisted: assistedFlag || assistedEnv,
    assistedSource: assistedFlag ? "flag" : assistedEnv ? "env" : null,
    warnings
  };
}

/**
 * Run the collector pass only when it was requested.
 *
 * This is the default-scan boundary: with `requested: false` the injected or
 * real capture is never called, so no browser, navigation or artifact can
 * appear in an automated-only scan.
 */
export async function maybeRunAssistedCollectors(options = {}, deps = {}) {
  if (!options.requested) {
    return { skipped: true, status: "not-run", reason: "not requested" };
  }
  const capture = deps.capture ?? runAssistedCapture;
  return capture(options);
}

function viewportOf(scanContext) {
  const width = Number(scanContext?.viewport?.width);
  const height = Number(scanContext?.viewport?.height);
  return {
    width: Number.isFinite(width) && width > 0 ? width : 1280,
    height: Number.isFinite(height) && height > 0 ? height : 800
  };
}

function timeoutMs(env) {
  const parsed = Number(env?.BROWSER_NAV_TIMEOUT_MS ?? env?.PLAYWRIGHT_NAV_TIMEOUT_MS);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 30000;
}

function writeArtifact(outputDir, artifact) {
  const directory = outputDir || ".scan-output";
  mkdirSync(directory, { recursive: true });
  const path = join(directory, ARTIFACT_FILE);
  writeFileSync(path, JSON.stringify(artifact, null, 2) + "\n", "utf8");
  return path;
}

function notRunCapture({ startedAt, finishedAt, durationMs, caps, browser, browserVersion, viewport, colorScheme, pagesRequested, reason }) {
  return {
    status: "not-run",
    browser: browser ?? "unknown",
    browserVersion: browserVersion ?? null,
    viewport: viewport ?? { width: 0, height: 0 },
    colorScheme: colorScheme ?? "light",
    startedAt,
    finishedAt,
    durationMs,
    navigationCount: 0,
    pagesRequested,
    pagesCaptured: 0,
    pagesFailed: 0,
    caps,
    reason
  };
}

/**
 * Capture the requested pages and write `assessment-collectors.json`.
 *
 * Failures are recorded, never smoothed over: a launch failure produces a
 * `not-run` artifact with a reason; a page failure produces a failed page; caps
 * produce truncated flags. The function does not throw for browser failures, so
 * a valid automated scan is never unpublised by the assisted pass. It throws
 * only for its own contract violation (an invalid artifact).
 */
export async function runAssistedCapture({
  pages = [],
  scanContext = {},
  catalogue = null,
  reportAssociation = {},
  outputDir,
  pageLoadDelayMs = 2000,
  caps: capOverrides,
  env = process.env,
  redact = null,
  deps = {}
} = {}) {
  const caps = resolveCaps({ ...(capOverrides ?? {}) });
  const requested = Array.isArray(pages) ? pages : [];
  const browser = String(scanContext?.browser ?? "chromium");
  const viewport = viewportOf(scanContext);
  const colorScheme = scanContext?.colorScheme === "dark" ? "dark" : "light";
  const startedAtMs = Date.now();
  const now = deps.now ?? (() => new Date());
  const startedAt = now().toISOString();

  const finish = (capture, inventory) => {
    const finishedAt = now().toISOString();
    const artifact = buildCollectorArtifact({
      reportAssociation,
      catalogue,
      capture: {
        ...capture,
        startedAt,
        finishedAt,
        durationMs: Date.now() - startedAtMs
      },
      pages: inventory,
      generatedAt: finishedAt
    });
    // Redact before the artifact reaches disk: page titles, names and snippets
    // can contain credentials, and this file is published beside the report.
    if (typeof redact === "function") redact(artifact);
    const artifactPath = writeArtifact(outputDir, artifact);
    return { status: artifact.capture.status, artifact, artifactPath };
  };

  const base = {
    caps,
    browser,
    viewport,
    colorScheme,
    pagesRequested: requested.length
  };

  if (requested.length === 0) {
    return {
      skipped: true,
      ...finish(notRunCapture({ ...base, reason: "no scanned pages to capture" }), [])
    };
  }

  let playwright;
  try {
    playwright = deps.playwright ?? (await import("playwright"));
  } catch (error) {
    return finish(
      notRunCapture({ ...base, reason: `Playwright is not available: ${error instanceof Error ? error.message : String(error)}` }),
      []
    );
  }

  const launchTimeout = timeoutMs(env);
  const browserType = playwright?.[browser] ?? playwright?.chromium;
  let launched;
  try {
    if (!browserType?.launch) throw new Error(`Playwright browser '${browser}' is not available`);
    const executablePath = resolvePlaywrightExecutable(browser, env);
    launched = await browserType.launch({
      headless: true,
      timeout: launchTimeout,
      ...(executablePath ? { executablePath } : {})
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return finish(
      notRunCapture({ ...base, reason: `browser '${browser}' could not be launched: ${message}` }),
      []
    );
  }

  const inventory = [];
  let navigationCount = 0;
  let totalItems = 0;
  let browserVersion = null;

  let context;
  let page;
  try {
    browserVersion = typeof launched.version === "function" ? await launched.version() : null;
    context = await launched.newContext({ viewport, colorScheme });
    page = await context.newPage();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    try {
      await launched.close();
    } catch {
      // ignore close failure after a context failure
    }
    return finish(
      notRunCapture({ ...base, browserVersion, reason: `browser context could not be created: ${message}` }),
      []
    );
  }

  try {

    const seenFinalUrls = new Set();

    const captureOne = async (target) => {
      const targetUrl = String(target?.finalUrl || target?.url || "");
      if (!targetUrl) {
        inventory.push(buildFailedPage({ url: "", error: "page has no URL" }));
        return;
      }
      if (seenFinalUrls.has(targetUrl)) {
        inventory.push(
          buildNotCapturedPage({
            url: targetUrl,
            reason: "duplicate final URL already captured; its elements are in the earlier page"
          })
        );
        return;
      }
      seenFinalUrls.add(targetUrl);
      navigationCount += 1;
      try {
        await page.goto(targetUrl, { waitUntil: "load", timeout: launchTimeout });
        const settleMs = Number.isFinite(target?.pageLoadDelayMs) ? target.pageLoadDelayMs : pageLoadDelayMs;
        if (settleMs > 0) await page.waitForTimeout(settleMs);
        const facts = await page.evaluate(collectPageFacts, {
          maxSnippetChars: caps.maxSnippetChars,
          maxNameChars: caps.maxNameChars,
          maxGraphNodes: 200
        });
        facts.finalUrl = facts.url;
        facts.url = String(target?.url ?? facts.url);
        facts.httpStatus = Number.isFinite(target?.statusCode) ? target.statusCode : null;
        const built = buildPageInventory(facts, { reportId: reportAssociation?.reportId ?? null, caps });
        const itemCount = built.counts.headings + built.counts.images + built.counts.links;
        const remaining = Math.max(0, caps.maxItemsTotal - totalItems);
        const trimmed = itemCount > remaining ? trimPageToTotal(built, remaining) : built;
        totalItems += trimmed.counts.headings + trimmed.counts.images + trimmed.counts.links;
        inventory.push(trimmed);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        inventory.push(buildFailedPage({ url: targetUrl, error: message, capturedAt: now().toISOString() }));
      }
    };

    const withinPageCap = requested.slice(0, caps.maxPages);
    for (const target of withinPageCap) {
      if (totalItems >= caps.maxItemsTotal) {
        inventory.push(
          buildNotCapturedPage({
            url: String(target?.finalUrl || target?.url || ""),
            reason: "total item cap reached"
          })
        );
        continue;
      }
      // Sequential by design: one navigation at a time, deterministic order.
      await captureOne(target);
    }
    for (const target of requested.slice(caps.maxPages)) {
      inventory.push(
        buildNotCapturedPage({
          url: String(target?.finalUrl || target?.url || ""),
          reason: `page cap reached (${caps.maxPages})`
        })
      );
    }
  } finally {
    try {
      await launched.close();
    } catch {
      // Closing a crashed browser is not itself an evidence failure.
    }
  }

  const failed = inventory.filter((page) => page.status === "failed").length;
  const notCaptured = inventory.filter((page) => page.status === "not-captured").length;
  const status = failed + notCaptured > 0 ? "partial" : "complete";

  const result = finish(
    {
      status,
      browser,
      browserVersion,
      viewport,
      colorScheme,
      caps,
      pagesRequested: requested.length,
      pagesCaptured: inventory.length - failed - notCaptured,
      pagesFailed: failed,
      navigationCount,
      reason:
        notCaptured > 0
          ? `${notCaptured} page(s) were not captured because a cap was reached`
          : failed > 0
            ? `${failed} page(s) failed to capture`
            : null
    },
    inventory
  );

  return result;
}
