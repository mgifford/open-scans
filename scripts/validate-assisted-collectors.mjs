#!/usr/bin/env node
/**
 * Validate the assisted collector contract, or capture the local fixtures in a
 * real browser.
 *
 * Usage:
 *   node scripts/validate-assisted-collectors.mjs <assessment-collectors.json>
 *   node scripts/validate-assisted-collectors.mjs <fixture-dir> [--browser=chromium|firefox|webkit]
 *
 * The first form checks a written artifact against `a11y-assisted-collectors/1`
 * without a browser. The second form runs the real capture pass over local HTML
 * fixtures, asserts names and signals, checks that item ids are stable across two
 * runs, and validates the artifact. It needs an installed Playwright browser and
 * is not part of `npm test`.
 *
 * Exit code 0 means every checked invariant held. A `not-run` capture (for
 * example a missing browser) is a failure here, even though a scan treats it as
 * a warning: local verification must not pass silently.
 *
 * @module validate-assisted-collectors
 */
import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { loadCatalogue } from "../scanner/assessment/catalogue.mjs";
import { runAssistedCapture } from "../scanner/assessment/collectors/capture.mjs";
import {
  COLLECTOR_LIMITATIONS,
  validateCollectorArtifact
} from "../scanner/assessment/collectors/model.mjs";

const BROWSERS = new Set(["chromium", "firefox", "webkit"]);

function parseArgs(argv) {
  const args = { target: null, browser: "chromium" };
  for (const raw of argv) {
    const value = String(raw);
    if (value.startsWith("--browser=")) {
      const browser = value.slice("--browser=".length);
      if (!BROWSERS.has(browser)) throw new Error(`Unknown browser: ${browser}`);
      args.browser = browser;
    } else if (value.startsWith("--")) {
      throw new Error(`Unknown option: ${value}`);
    } else if (args.target) {
      throw new Error(`Unexpected extra argument: ${value}`);
    } else {
      args.target = value;
    }
  }
  if (!args.target) {
    throw new Error(
      "Usage: node scripts/validate-assisted-collectors.mjs <assessment-collectors.json | fixture-dir> [--browser=chromium|firefox|webkit]"
    );
  }
  return args;
}

function validateFile(path) {
  const artifact = JSON.parse(readFileSync(path, "utf8"));
  validateCollectorArtifact(artifact);
  const capture = artifact.capture;
  const counts = artifact.pages.reduce(
    (totals, page) => ({
      headings: totals.headings + page.counts.headings,
      images: totals.images + page.counts.images,
      links: totals.links + page.counts.links,
      signals: totals.signals + page.counts.signals
    }),
    { headings: 0, images: 0, links: 0, signals: 0 }
  );
  console.log(`✓ ${path} is a valid ${artifact.schema} artifact`);
  console.log(
    `  capture: ${capture.status} | ${capture.pagesCaptured}/${capture.pagesRequested} pages captured, ${capture.pagesFailed} failed | ${capture.browser}`
  );
  console.log(
    `  items: ${counts.headings} headings, ${counts.images} images, ${counts.links} links, ${counts.signals} signals`
  );
  const truncated = artifact.pages.filter(
    (page) => page.truncated.headings || page.truncated.images || page.truncated.links
  );
  if (truncated.length > 0) {
    console.log(`  truncated pages: ${truncated.length} (see each page's truncated flags)`);
  }
  console.log(`  limitations stated in the artifact: ${COLLECTOR_LIMITATIONS.length}`);
  return 0;
}

function findItems(page, kind, predicate) {
  return (page?.[kind] ?? []).filter(predicate);
}

function signalIds(item) {
  return (item?.signals ?? []).map((signal) => signal.id);
}

function captureFixtures({ directory, browser }) {
  const files = readdirSync(directory)
    .filter((name) => name.endsWith(".html"))
    .sort();
  if (files.length === 0) throw new Error(`No .html fixtures found in ${directory}`);
  return files.map((name) => ({
    url: pathToFileURL(join(directory, name)).href,
    finalUrl: pathToFileURL(join(directory, name)).href,
    title: basename(name)
  }));
}

async function captureOnce({ pages, browser, catalogue, outputDir }) {
  return runAssistedCapture({
    pages,
    scanContext: { browser, viewport: { width: 1280, height: 800 }, colorScheme: "light" },
    catalogue,
    reportAssociation: {
      reportId: "open-scans/fixture/collectors",
      issueNumber: null,
      scannedAt: new Date().toISOString()
    },
    outputDir,
    pageLoadDelayMs: 0,
    caps: { maxPages: 10, maxItemsPerKindPerPage: 300 }
  });
}

function assertFixtureBehaviour(artifact, failures) {
  const check = (condition, message) => {
    if (!condition) failures.push(message);
  };

  const pages = artifact.pages;
  check(pages.length === 3, `expected 3 fixture pages, got ${pages.length}`);
  const pageA = pages.find((page) => page.url.includes("page-a.html"));
  const pageB = pages.find((page) => page.url.includes("page-b.html"));
  const pageC = pages.find((page) => page.url.includes("page-c.html"));
  check(Boolean(pageA), "page-a.html was not captured");
  check(Boolean(pageB), "page-b.html was not captured");
  check(Boolean(pageC), "page-c.html was not captured");
  if (!pageA || !pageB || !pageC) return;

  check(pageC.links.length === 250, `page C captured ${pageC.links.length} links, expected 250`);
  check(
    pageC.links[249]?.accessibleName.value === "Link 250",
    `page C's 250th link name was "${pageC.links[249]?.accessibleName.value}"`
  );
  check(pageC.nameGraphCapped === false, "page C unexpectedly hit the referenced-name node cap");
  check(
    !pageC.links.some((item) => signalIds(item).includes("link-name-empty")),
    "page C produced a false link-name-empty signal after item 200"
  );

  check(artifact.capture.status === "complete", `capture status was ${artifact.capture.status}, expected complete`);
  check(pageA.iframesSkipped === 1, `page A iframe count was ${pageA.iframesSkipped}, expected 1`);
  check(pageA.shadowRootsSkipped === 1, `page A open shadow root count was ${pageA.shadowRootsSkipped}, expected 1`);

  const jumped = findItems(pageA, "headings", (item) => item.accessibleName.value === "Jumped level")[0];
  check(Boolean(jumped), "the jumped heading was not captured");
  check(Boolean(jumped && signalIds(jumped).includes("heading-level-skip")), "h2 → h4 did not record heading-level-skip");

  const labelled = findItems(pageA, "headings", (item) => item.text.normalised === "Visible fallback")[0];
  check(Boolean(labelled), "the aria-labelledby heading was not captured");
  check(labelled?.accessibleName.value === "Labelled heading", `aria-labelledby name was "${labelled?.accessibleName.value}"`);
  check(labelled?.accessibleName.source === "aria-labelledby", "aria-labelledby was not recorded as the name source");

  const cycle = findItems(pageA, "headings", (item) => item.text.normalised === "Cycle heading")[0];
  check(Boolean(cycle), "the cycle heading was not captured");
  check(Boolean(cycle && cycle.accessibleName.value.length > 0), "the aria-labelledby cycle resolved to no name at all");

  const filename = findItems(pageA, "images", (item) => item.image.src === "rates.png")[0];
  check(Boolean(filename && signalIds(filename).includes("image-alt-filename-like")), "filename-like alt was not signalled");
  const emptyAlt = findItems(pageA, "images", (item) => item.image.src === "decorative.png")[0];
  check(Boolean(emptyAlt && signalIds(emptyAlt).includes("image-alt-empty")), "empty alt was not signalled");
  const missingAlt = findItems(pageA, "images", (item) => item.image.src === "no-alt.png")[0];
  check(Boolean(missingAlt && signalIds(missingAlt).includes("image-alt-missing")), "missing alt was not signalled");
  const repeated = findItems(pageA, "images", (item) => item.image.src === "caption.png")[0];
  check(Boolean(repeated && signalIds(repeated).includes("image-alt-repeats-caption")), "alt/caption repetition was not signalled");

  const generic = findItems(pageA, "links", (item) => item.text.normalised === "Read more")[0];
  check(Boolean(generic && signalIds(generic).includes("link-text-generic")), "generic link text was not signalled");

  const icon = findItems(pageA, "links", (item) => item.link.imageOnly)[0];
  check(Boolean(icon), "the image-only link was not captured");
  check(icon?.accessibleName.value === "Icon label", `image-only link name was "${icon?.accessibleName.value}"`);
  check(icon?.accessibleName.source === "img-alt-descendant", "the image-only link name source was not img-alt-descendant");
  check(Boolean(icon && signalIds(icon).includes("link-image-only")), "image-only link was not signalled");

  const download = findItems(pageA, "links", (item) => item.text.normalised === "Download")[0];
  check(Boolean(download && signalIds(download).includes("link-new-window-unannounced")), "target=_blank was not signalled");

  const docs = findItems(pageA, "links", (item) => item.text.normalised === "Docs")[0];
  check(
    Boolean(docs && signalIds(docs).includes("aria-label-overrides-visible-text")),
    "the aria-label/visible-text mismatch was not signalled"
  );

  const emptyLink = findItems(pageA, "links", (item) => item.accessibleName.empty)[0];
  check(Boolean(emptyLink), "the empty link name was not captured");
  check(Boolean(emptyLink && signalIds(emptyLink).includes("link-name-empty")), "the empty link name was not signalled");

  const emptyHeading = pageB.headings.find((item) => signalIds(item).includes("heading-empty"));
  check(Boolean(emptyHeading), "the empty heading on page B was not signalled");

  const announced = findItems(pageB, "links", (item) => item.text.normalised.includes("opens in a new tab"))[0];
  check(Boolean(announced), "the announced new-window link was not captured");
  check(
    Boolean(announced) && !signalIds(announced).includes("link-new-window-unannounced"),
    "announced new-window wording still produced the signal"
  );

  const presentation = findItems(pageB, "images", (item) => item.image.src === "purely-decorative.png")[0];
  check(Boolean(presentation), "the presentation image was not captured");
  check(
    Boolean(presentation) && !signalIds(presentation).includes("image-alt-missing"),
    "role=presentation image still produced image-alt-missing"
  );

  for (const page of pages) {
    for (const kind of ["headings", "images", "links"]) {
      for (const item of page[kind]) {
        check(!item.itemId.includes("undefined"), `item id contains undefined on ${page.url}`);
        check(item.accessibleName.captured !== false, `a name was not captured on ${page.url} (${kind})`);
        if (kind !== "image" && item.text.normalised && !item.accessibleName.value) {
          check(false, `${kind} with text has an empty name on ${page.url}: ${item.text.normalised}`);
        }
      }
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const target = resolve(args.target);
  const stats = statSync(target);

  if (stats.isFile()) {
    return validateFile(target);
  }

  const catalogue = loadCatalogue();
  const pages = captureFixtures({ directory: target, browser: args.browser });
  const failures = [];
  const dirA = mkdtempSync(join(tmpdir(), "open-scans-collectors-a-"));
  const dirB = mkdtempSync(join(tmpdir(), "open-scans-collectors-b-"));

  try {
    const first = await captureOnce({ pages, browser: args.browser, catalogue, outputDir: dirA });
    if (first.status === "not-run") {
      console.error(`✗ capture did not run: ${first.artifact.capture.reason}`);
      console.error("  Install a Playwright browser, for example:");
      console.error(`  PLAYWRIGHT_BROWSERS_PATH=.tmp/pw-browsers npx playwright install ${args.browser}`);
      return 1;
    }
    validateCollectorArtifact(first.artifact);
    assertFixtureBehaviour(first.artifact, failures);

    const second = await captureOnce({ pages, browser: args.browser, catalogue, outputDir: dirB });
    const idsOf = (artifact) =>
      artifact.pages.flatMap((page) => [
        ...page.headings.map((item) => item.itemId),
        ...page.images.map((item) => item.itemId),
        ...page.links.map((item) => item.itemId)
      ]);
    const firstIds = idsOf(first.artifact);
    const secondIds = idsOf(second.artifact);
    if (JSON.stringify(firstIds) !== JSON.stringify(secondIds)) {
      failures.push("item ids were not stable across two captures of the same fixtures");
    }

    for (const failure of failures) console.error(`✗ ${failure}`);
    if (failures.length > 0) return 1;

    const totals = first.artifact.pages.reduce(
      (sum, page) => ({
        headings: sum.headings + page.counts.headings,
        images: sum.images + page.counts.images,
        links: sum.links + page.counts.links,
        signals: sum.signals + page.counts.signals
      }),
      { headings: 0, images: 0, links: 0, signals: 0 }
    );
    console.log(`✓ ${pages.length} fixture pages captured with ${args.browser}`);
    console.log(
      `  ${totals.headings} headings, ${totals.images} images, ${totals.links} links, ${totals.signals} signals`
    );
    console.log("  names, signals, caps and item-id stability held; artifact validated");
    return 0;
  } finally {
    rmSync(dirA, { recursive: true, force: true });
    rmSync(dirB, { recursive: true, force: true });
  }
}

main()
  .then((code) => process.exit(code ?? 0))
  .catch((error) => {
    console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  });
