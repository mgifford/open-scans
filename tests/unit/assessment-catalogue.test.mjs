import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

import {
  CATALOGUE_SCHEMA,
  buildCatalogue,
  compareCriterionIds,
  loadCatalogue,
  projectCatalogue,
  resetCatalogueCache,
  validateCatalogue
} from "../../scanner/assessment/catalogue.mjs";

const SNAPSHOT_PATH = new URL("../../scanner/data/wcag-spine/master_spine.json", import.meta.url);
const PROVENANCE_PATH = new URL("../../scanner/data/wcag-spine/PROVENANCE.json", import.meta.url);

function readSnapshot() {
  return JSON.parse(readFileSync(SNAPSHOT_PATH, "utf8"));
}

function readProvenance() {
  return JSON.parse(readFileSync(PROVENANCE_PATH, "utf8"));
}

test("the vendored catalogue loads and carries verifiable provenance", () => {
  resetCatalogueCache();
  const catalogue = loadCatalogue();
  assert.equal(catalogue.schema, CATALOGUE_SCHEMA);
  assert.ok(catalogue.criteria.size >= 80, "expected the full WCAG 2.2 criterion set");
  assert.match(catalogue.identity.contentSha256, /^[a-f0-9]{64}$/);
  assert.equal(catalogue.identity.wcagVersion, "2.2");
  assert.ok(catalogue.identity.catalogueVersion.startsWith("wcag-spine-"));
  assert.equal(catalogue.identity.transitional, true);
});

test("the snapshot hash matches the vendored bytes", () => {
  const bytes = readFileSync(SNAPSHOT_PATH);
  const hash = createHash("sha256").update(bytes).digest("hex");
  assert.equal(hash, readProvenance().contentSha256);
});

test("a tampered snapshot is rejected by the hash check", () => {
  const spine = readSnapshot();
  const provenance = readProvenance();
  assert.throws(
    () => validateCatalogue(spine, provenance, { contentSha256: "0".repeat(64) }),
    /content hash does not match/
  );
});

test("a snapshot with an unsupported level is rejected", () => {
  const spine = readSnapshot();
  const provenance = readProvenance();
  spine.success_criteria["9.9.9"] = { title: "Broken", level: "AAAA", url: "https://example.com" };
  assert.throws(() => validateCatalogue(spine, provenance), /unsupported level/);
});

test("a snapshot with a missing title is rejected", () => {
  const spine = readSnapshot();
  const provenance = readProvenance();
  spine.success_criteria["1.1.1"].title = "";
  assert.throws(() => validateCatalogue(spine, provenance), /has no title/);
});

test("provenance with a bad schema is rejected", () => {
  assert.throws(() => validateCatalogue(readSnapshot(), { schema: "something-else" }), /Unsupported catalogue provenance/);
});

test("catalogue values are frozen", () => {
  const catalogue = loadCatalogue();
  const criterion = catalogue.criteria.get("1.1.1");
  assert.throws(() => {
    criterion.title = "changed";
  }, TypeError);
});

test("projection keeps identity for every criterion and drops AAA detail", () => {
  const catalogue = loadCatalogue();
  const projection = projectCatalogue(catalogue);
  assert.equal(projection.criteria.length, catalogue.criteria.size);
  for (const criterion of projection.criteria) {
    assert.ok(criterion.id);
    assert.ok(criterion.title);
    assert.ok(criterion.url);
    assert.ok(["A", "AA", "AAA"].includes(criterion.level));
  }
  const aaa = projection.criteria.filter((criterion) => criterion.level === "AAA");
  assert.ok(aaa.length > 0);
  for (const criterion of aaa) {
    assert.deepEqual(criterion.automation, { act: [], axe: [], alfa: [] });
    assert.deepEqual(criterion.arrm, []);
  }

  const withDetail = projectCatalogue(catalogue, { includeAaaDetail: true });
  const aaaDetail = withDetail.criteria.filter((criterion) => criterion.level === "AAA");
  assert.ok(aaaDetail.some((criterion) => criterion.arrm.length > 0 || criterion.automation.axe.length > 0));
});

test("projection is sorted numerically, not lexically", () => {
  const catalogue = loadCatalogue();
  const ids = projectCatalogue(catalogue).criteria.map((criterion) => criterion.id);
  assert.ok(ids.indexOf("1.4.10") < ids.indexOf("1.4.11"));
  assert.ok(ids.indexOf("2.4.7") < ids.indexOf("2.4.11"));
  assert.ok(ids.indexOf("1.3.1") < ids.indexOf("1.4.1"));
});

test("compareCriterionIds handles malformed input without throwing", () => {
  assert.ok(compareCriterionIds("1.2.3", "1.10.1") < 0);
  assert.equal(compareCriterionIds("1.1.1", "1.1.1"), 0);
  assert.doesNotThrow(() => compareCriterionIds("a.b.c", "1.1.1"));
});

test("the ACT implementation index is exposed for relationship checks", () => {
  const catalogue = loadCatalogue();
  const entry = catalogue.implementationIndex["3ea0c8"];
  assert.ok(entry, "expected the image-alt ACT implementation to be indexed");
  assert.ok(entry.axe.includes("image-alt"));
});

test("buildCatalogue works without a provenance file for tests", () => {
  const spine = readSnapshot();
  const catalogue = buildCatalogue(spine, { schema: "wcag-spine-snapshot/1", catalogueVersion: "test" }, {});
  assert.equal(catalogue.identity.catalogueVersion, "test");
  assert.ok(catalogue.criteria.get("2.1.1"));
});
