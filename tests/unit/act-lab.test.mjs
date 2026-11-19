import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

import {
  canonicalize,
  compareCohorts,
  computeCohort,
  fixtureCohortHash,
  fixtureUrl,
  loadInstalledEngineVersions,
  normalizeSiteRoot,
  sha256,
  validateFixtureManifest
} from "../../scanner/act-lab/lib.mjs";
import { summarise } from "../../scanner/act-lab/summarise.mjs";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const SITE = "https://mgifford.github.io/record-a-goose-sighting/";

function manifest() {
  return {
    schemaVersion: "act-lab-fixture/2",
    cases: [
      {
        id: "role-valid",
        urlPath: "lab/aria/role-valid/",
        act: { ruleId: "674b10" },
        expected: "passed",
        review: "unreviewed",
        target: { scope: "light-dom", selector: "#test-target" },
        readySelector: "[data-test-ready='true']"
      },
      {
        id: "role-invalid",
        urlPath: "lab/aria/role-invalid/",
        act: { ruleId: "674b10" },
        expected: "failed",
        review: "unreviewed",
        target: { scope: "light-dom", selector: "#test-target" },
        readySelector: "[data-test-ready='true']"
      },
      {
        id: "closed",
        urlPath: "paca/?role=invalid&shadow=closed",
        act: { ruleId: "674b10" },
        expected: null,
        review: "unreviewed",
        target: { scope: "closed-shadow", host: "#test-host", selector: null },
        readySelector: "#test-host[data-test-ready='true']"
      }
    ]
  };
}

test("canonicalize is stable regardless of key order", () => {
  assert.strictEqual(
    JSON.stringify(canonicalize({ b: 1, a: { d: 2, c: 3 } })),
    JSON.stringify({ a: { c: 3, d: 2 }, b: 1 })
  );
  assert.strictEqual(
    sha256(JSON.stringify(canonicalize({ b: 1, a: 2 }))),
    sha256(JSON.stringify(canonicalize({ a: 2, b: 1 })))
  );
});

test("site roots are normalised and private hosts are rejected", () => {
  assert.strictEqual(normalizeSiteRoot("https://example.com/repo"), "https://example.com/repo/");
  assert.throws(() => normalizeSiteRoot("http://example.com/"), /https/);
  assert.throws(() => normalizeSiteRoot("https://127.0.0.1/"), /private/);
});

test("fixture URLs preserve query strings", () => {
  assert.strictEqual(
    fixtureUrl(SITE, "paca/?role=invalid&shadow=open"),
    `${SITE}paca/?role=invalid&shadow=open`
  );
});

test("a valid manifest produces no errors", () => {
  assert.deepEqual(validateFixtureManifest(manifest(), SITE), []);
});

test("manifests that escape the site root or use unknown outcomes are rejected", () => {
  const bad = manifest();
  bad.cases[0].urlPath = "https://evil.example/lab/";
  bad.cases[1].expected = "unknown";
  const errors = validateFixtureManifest(bad, SITE);
  assert.ok(errors.some((error) => error.includes("outside the configured site root")));
  assert.ok(errors.some((error) => error.includes("invalid expected outcome")));
});

test("fixture hash changes when a case changes", () => {
  const first = manifest();
  const second = manifest();
  second.cases[1].readySelector = "#other";

  assert.notStrictEqual(fixtureCohortHash(first), fixtureCohortHash(second));
});

test("cohort comparison reports each changed component", () => {
  const base = computeCohort({
    fixtureHash: "a",
    engineVersions: { axe: "1.0.0" },
    actMappingHash: "b",
    actRulesHash: "c"
  });

  assert.deepEqual(compareCohorts(null, base), ["no-previous-state"]);
  assert.deepEqual(compareCohorts(base, base), []);

  const engineChange = computeCohort({
    fixtureHash: "a",
    engineVersions: { axe: "1.1.0" },
    actMappingHash: "b",
    actRulesHash: "c"
  });
  assert.deepEqual(compareCohorts(base, engineChange), ["engine-versions-changed"]);

  const rulesChange = computeCohort({
    fixtureHash: "a",
    engineVersions: { axe: "1.0.0" },
    actMappingHash: "b",
    actRulesHash: "d"
  });
  assert.deepEqual(compareCohorts(base, rulesChange), ["act-rules-changed"]);
});

test("installed engine versions come from the lockfile", () => {
  const versions = loadInstalledEngineVersions(ROOT);
  for (const name of Object.keys(versions)) {
    assert.match(String(versions[name]), /^\d+\.\d+\.\d+/, name);
  }
});

test("observations separate execution from outcomes and never infer a pass", () => {
  const prepared = {
    siteRoot: SITE,
    manifestUrl: `${SITE}lab/fixtures.json`,
    cohort: { key: "cohort" },
    cases: [
      { id: "role-valid", url: fixtureUrl(SITE, "lab/aria/role-valid/"), ruleId: "674b10", expected: "passed", review: "unreviewed", target: { scope: "light-dom" } },
      { id: "role-invalid", url: fixtureUrl(SITE, "lab/aria/role-invalid/"), ruleId: "674b10", expected: "failed", review: "unreviewed", target: { scope: "light-dom" } },
      { id: "closed", url: fixtureUrl(SITE, "paca/?role=invalid&shadow=closed"), ruleId: "674b10", expected: null, review: "unreviewed", target: { scope: "closed-shadow" } }
    ]
  };

  const meta = {
    results: [
      { submittedUrl: prepared.cases[0].url, axe: { failures: [] }, alfa: { failures: [] }, equalAccess: { failures: [] } },
      { submittedUrl: prepared.cases[1].url, axe: { failures: [{ rule: "aria-roles" }] }, alfa: { failures: [] } },
      { submittedUrl: prepared.cases[2].url, axe: { failures: [] } }
    ]
  };

  const summary = summarise(prepared, meta);
  const find = (fixtureId, engine) =>
    summary.results.find((entry) => entry.fixtureId === fixtureId && entry.engine === engine);

  assert.equal(find("role-valid", "axe").outcome, null);
  assert.equal(find("role-valid", "axe").status, "notReported");
  assert.equal(find("role-valid", "equalAccess").status, "unmapped");
  assert.equal(find("role-invalid", "axe").outcome, "failed");
  assert.equal(find("role-invalid", "axe").status, "failed");
  assert.equal(find("closed", "axe").execution, "unsupported");
  assert.equal(find("closed", "axe").outcome, null);
  assert.equal(summary.counts.failed, 1);
  assert.ok(summary.counts.notReported >= 1);
  assert.ok(summary.counts.unsupported >= 1);
});
