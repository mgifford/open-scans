#!/usr/bin/env node
/**
 * Refresh the vendored WCAG Spine catalogue snapshot.
 *
 * Fail-closed: a failed fetch, an invalid payload or a hash mismatch writes
 * nothing and exits non-zero. The snapshot and its provenance are written
 * together so the content hash always describes the bytes on disk.
 *
 * Usage:
 *   node scanner/update-assessment-catalogue.mjs            # fetch and replace
 *   node scanner/update-assessment-catalogue.mjs --check    # verify the vendored copy only
 *
 * Stdout is structured JSON; progress and diagnostics go to stderr.
 *
 * @module update-assessment-catalogue
 */
import { createHash } from "node:crypto";
import { readFileSync, renameSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { SNAPSHOT_SCHEMA, validateCatalogue } from "./assessment/catalogue.mjs";

export const DEFAULT_SOURCE_URL = "https://mgifford.github.io/wcag-spine/data/master_spine.json";

const SNAPSHOT_PATH = fileURLToPath(new URL("./data/wcag-spine/master_spine.json", import.meta.url));
const PROVENANCE_PATH = fileURLToPath(new URL("./data/wcag-spine/PROVENANCE.json", import.meta.url));

export function hashBytes(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

/**
 * Build the provenance record for a snapshot payload.
 * Exported so tests can assert the shape without touching the network.
 */
export function buildProvenance(spine, { contentSha256, bytes, sourceUrl, now = () => new Date().toISOString() }) {
  const criteria = Object.keys(spine?.success_criteria ?? {});
  return {
    schema: SNAPSHOT_SCHEMA,
    sourceUrl,
    sourceRepository: "https://github.com/mgifford/wcag-spine",
    catalogueVersion: `wcag-spine-${spine?.meta?.wcag_version ?? "unknown"}-${spine?.meta?.generated ?? "unknown"}`,
    generated: spine?.meta?.generated ?? null,
    wcagVersion: spine?.meta?.wcag_version ?? null,
    axeVersion: spine?.meta?.axe_version ?? null,
    contentSha256,
    bytes,
    successCriteriaCount: criteria.length,
    vendoredAt: now(),
    vendoredBy: "scanner/update-assessment-catalogue.mjs",
    licenceNote:
      "Derived from W3C WCAG, ACT Rules, ARRM and implementation data. See docs/ACCESSIBILITY-INSIGHTS-ATTRIBUTION.md and the upstream repository for source attribution.",
    transitional: true
  };
}

/** Verify the vendored snapshot without network access. */
export function checkVendored() {
  const bytes = readFileSync(SNAPSHOT_PATH);
  const spine = JSON.parse(bytes.toString("utf8"));
  const provenance = JSON.parse(readFileSync(PROVENANCE_PATH, "utf8"));
  validateCatalogue(spine, provenance, { contentSha256: hashBytes(bytes) });
  return {
    ok: true,
    snapshotPath: SNAPSHOT_PATH,
    catalogueVersion: provenance.catalogueVersion,
    contentSha256: provenance.contentSha256,
    bytes: bytes.length,
    successCriteriaCount: provenance.successCriteriaCount
  };
}

/**
 * Fetch, validate and write a new snapshot. Nothing is written unless every
 * validation passes.
 */
export async function updateCatalogue({ sourceUrl = DEFAULT_SOURCE_URL, fetchImpl = globalThis.fetch } = {}) {
  if (typeof fetchImpl !== "function") throw new Error("fetch is not available in this Node runtime");

  console.error(`[assessment-catalogue] fetching ${sourceUrl}`);
  const response = await fetchImpl(sourceUrl, { redirect: "follow" });
  if (!response.ok) throw new Error(`Fetch failed with HTTP ${response.status} for ${sourceUrl}`);

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length === 0) throw new Error("Fetched snapshot is empty");

  let spine;
  try {
    spine = JSON.parse(bytes.toString("utf8"));
  } catch (error) {
    throw new Error(`Fetched snapshot is not valid JSON: ${error.message}`);
  }

  const contentSha256 = hashBytes(bytes);
  const provenance = buildProvenance(spine, { contentSha256, bytes: bytes.length, sourceUrl });
  // Throws on any structural problem, including a successCriteriaCount mismatch.
  validateCatalogue(spine, provenance, { contentSha256 });

  // Write to temporary files first, then rename, so an interrupted run cannot
  // leave a snapshot and provenance that disagree.
  mkdirSync(dirname(SNAPSHOT_PATH), { recursive: true });
  const snapshotTmp = `${SNAPSHOT_PATH}.tmp`;
  const provenanceTmp = `${PROVENANCE_PATH}.tmp`;
  writeFileSync(snapshotTmp, bytes);
  writeFileSync(provenanceTmp, `${JSON.stringify(provenance, null, 2)}\n`, "utf8");
  renameSync(snapshotTmp, SNAPSHOT_PATH);
  renameSync(provenanceTmp, PROVENANCE_PATH);

  console.error(
    `[assessment-catalogue] wrote ${provenance.successCriteriaCount} criteria, ` +
      `${provenance.catalogueVersion}, sha256 ${contentSha256.slice(0, 12)}…`
  );

  return {
    ok: true,
    catalogueVersion: provenance.catalogueVersion,
    contentSha256,
    bytes: bytes.length,
    successCriteriaCount: provenance.successCriteriaCount,
    snapshotPath: SNAPSHOT_PATH,
    provenancePath: PROVENANCE_PATH
  };
}

async function main() {
  const args = process.argv.slice(2);
  const check = args.includes("--check");
  const urlArg = args.find((arg) => arg.startsWith("--url="));
  const sourceUrl = urlArg ? urlArg.slice("--url=".length) : DEFAULT_SOURCE_URL;

  try {
    const result = check ? checkVendored() : await updateCatalogue({ sourceUrl });
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) {
    console.error(`[assessment-catalogue] FAILED: ${error.message}`);
    process.stdout.write(`${JSON.stringify({ ok: false, error: error.message }, null, 2)}\n`);
    process.exitCode = 1;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
