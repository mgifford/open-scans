import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { parsePerformanceIssue } from "../../scanner/parse-performance-issue.mjs";
import {
  assemblePerformanceEvidence,
  createSourceRecord
} from "../../scanner/performance-evidence.mjs";
import { adaptFirefoxEnergyScanner } from "../../scanner/adapters/firefox-energy-scanner.mjs";
import { adaptOpenSiteReview } from "../../scanner/adapters/open-site-review.mjs";
import {
  PERFORMANCE_INVESTIGATION_SCHEMA_VERSION,
  buildPerformanceInvestigation,
  validatePerformanceInvestigation
} from "../../scanner/performance-investigation.mjs";
import { runInvestigationFromEvidence } from "../../scanner/run-performance-investigation.mjs";

const fixture = (name) => JSON.parse(readFileSync(new URL(`../fixtures/performance-evidence/${name}`, import.meta.url), "utf8"));

function makeSource(type, digestChar = "a") {
  return createSourceRecord({
    type,
    adapter: type,
    tool: type,
    location: `${type}.json`,
    locationKind: type === "lighthouse" ? "artifact" : "local-file",
    importedAt: "2026-11-16T12:00:00.000Z",
    contentDigest: `sha256:${digestChar.repeat(64)}`
  });
}

function request() {
  const parsed = parsePerformanceIssue({
    issue: {
      number: 960,
      html_url: "https://github.com/mgifford/open-scans/issues/960",
      title: "PERF: example.gov investigation",
      created_at: "2026-11-16T12:00:00Z",
      user: { login: "octocat" },
      body: "### Performance mode\ndeep\n\n### Domain\nexample.gov\n\n### URLs\nhttps://example.gov/\n\n### Limits\nMax pages to inspect: 20\nMax Lighthouse audits: 0\nMax Sitespeed pages: 3\n"
    }
  });
  assert.equal(parsed.ok, true, parsed.errors.join("\n"));
  return parsed.value;
}

function fesData() {
  const data = structuredClone(fixture("firefox-energy-scanner-main.json"));
  data.graph.pages[0].resources.push("rs-shared-css", "rs-chat");
  data.graph.pages[1].resources.push("rs-shared-css", "rs-chat");
  data.graph.types.push({
    id: "ct-chart",
    signature: "component:live-chart",
    method: "annotation",
    identification: "explicit",
    confidence: "high",
    matchedBy: ["signature", "tag"],
    tag: "figure",
    role: "figure",
    families: ["pf-nav"],
    instances: 1,
    ownNodes: { median: 80, max: 80, estimated: false },
    inclusiveNodes: { median: 80, max: 80 },
    container: false,
    variants: 1,
    notes: []
  });
  data.graph.instances.push({
    id: "ci-chart",
    type: "ct-chart",
    page: "pg-services",
    occurrence: 0,
    children: [],
    selector: "[data-component-id=\"live-chart\"]",
    tag: "figure",
    role: "figure",
    inclusiveNodes: 80,
    own: { nodes: 80 },
    ownEstimated: false,
    resources: [],
    ref: { scenario: 0, instance: 3 }
  });
  data.graph.resources.push(
    {
      id: "rs-shared-css",
      key: "https://example.gov/assets/site.css",
      host: "example.gov",
      kind: "stylesheet",
      thirdParty: false,
      pages: 2,
      families: ["pf-nav"],
      scope: "site-wide",
      transferBytes: { median: 300000, max: 300000 },
      loadedBy: []
    },
    {
      id: "rs-chat",
      key: "https://cdn.thirdparty.example/chat.js",
      host: "cdn.thirdparty.example",
      kind: "script",
      thirdParty: true,
      pages: 2,
      families: ["pf-nav"],
      scope: "site-wide",
      transferBytes: { median: 80000, max: 80000 },
      loadedBy: []
    }
  );
  data.graph.findings.push(
    {
      id: "fd-chart",
      kind: "endless-animation",
      title: "Chart animation never stops",
      page: "pg-services",
      target: { type: "instance", id: "ci-chart" },
      evidenceClass: "direct-observation",
      role: "finding",
      evidence: [{ source: "firefox-dom", ref: "graph.instances[4]", detail: "animation with infinite iterations" }],
      metric: { value: 1, unit: "count", source: "firefox-dom", scope: "instance-own" },
      phase: "idle",
      energy: { status: "not-measured", measuredWorkloadDeltaMwh: null }
    },
    {
      id: "fd-form",
      kind: "interaction-work",
      title: "Navigation search interaction does expensive work",
      page: "pg-services",
      target: { type: "instance", id: "ci-sidebar" },
      evidenceClass: "direct-observation",
      role: "finding",
      evidence: [{ source: "chromium-trace", ref: "trace:interaction-work", detail: "long task after click" }],
      metric: { value: 420, unit: "ms", source: "chromium-trace", scope: "instance-own" },
      phase: "interaction",
      energy: { status: "not-measured", measuredWorkloadDeltaMwh: null }
    },
    {
      id: "fd-nav-long",
      kind: "long-task",
      title: "Navigation script long task",
      page: "pg-home",
      target: { type: "type", id: "ct-nav" },
      evidenceClass: "trace-supported",
      role: "finding",
      evidence: [{ source: "chromium-trace", ref: "trace:long-task", detail: "310 ms long task" }],
      metric: { value: 310, unit: "ms", source: "chromium-trace", scope: "component-type" },
      phase: "load",
      energy: { status: "not-measured", measuredWorkloadDeltaMwh: null }
    }
  );
  return data;
}

function evidencePackage() {
  const requestValue = request();
  const fesSource = makeSource("firefox-energy-scanner", "b");
  const fesFragment = adaptFirefoxEnergyScanner({ data: fesData(), source: fesSource });
  const osrSource = makeSource("open-site-review", "c");
  const osrFragment = adaptOpenSiteReview({ data: fixture("open-site-review.json"), source: osrSource });
  const result = assemblePerformanceEvidence({
    request: requestValue,
    inputs: [
      { source: fesSource, fragment: fesFragment },
      { source: osrSource, fragment: osrFragment }
    ],
    generatedAt: "2026-11-16T12:00:00.000Z"
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

function investigation(evidence = evidencePackage()) {
  const result = buildPerformanceInvestigation(evidence, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

test("shared navigation on two pages becomes one candidate; sidebar navigation stays separate", () => {
  const result = investigation();
  const nav = result.candidates.find((candidate) => candidate.kind === "component" && candidate.componentTypeIds.includes("ct-nav"));
  const sidebar = result.candidates.find((candidate) => candidate.kind === "component" && candidate.componentTypeIds.includes("ct-sidebar-nav"));
  assert.ok(nav);
  assert.ok(sidebar);
  assert.equal(nav.pageIds.length, 2);
  assert.deepEqual(nav.pageIds.sort(), ["pg-home", "pg-services"]);
  assert.equal(sidebar.pageIds.length, 1);
  assert.notEqual(nav.id, sidebar.id);
  assert.ok(nav.observations.some((observation) => observation.kind === "endless-animation" && observation.phase === "idle"));
  assert.ok(sidebar.observations.some((observation) => observation.kind === "interaction-work" && observation.phase === "interaction"));
});

test("distinct mechanisms on the same shared component are not collapsed", () => {
  const result = investigation();
  const nav = result.candidates.find((candidate) => candidate.kind === "component" && candidate.componentTypeIds.includes("ct-nav"));
  assert.equal(nav.observations.length, 2);
  assert.deepEqual(nav.observations.map((observation) => observation.kind).sort(), ["endless-animation", "long-task"]);
  assert.equal(nav.observations.find((observation) => observation.kind === "long-task").phase, "load");
  assert.equal(nav.observations.find((observation) => observation.kind === "endless-animation").phase, "idle");
});

test("shared resources appear as resource candidates without component ownership", () => {
  const result = investigation();
  const css = result.candidates.find((candidate) => candidate.kind === "resource" && candidate.resourceIds.includes("rs-shared-css"));
  const chat = result.candidates.find((candidate) => candidate.kind === "resource" && candidate.resourceIds.includes("rs-chat"));
  assert.ok(css);
  assert.ok(chat);
  assert.equal(css.ownershipEstablished, false);
  assert.equal(css.pageIds.length, 2);
  assert.equal(chat.thirdParty, true);
  assert.ok(css.uncertainty.some((uncertainty) => uncertainty.includes("not component-owned")));
  assert.ok(chat.interventions.some((intervention) => intervention.kind.includes("third-party")));
});

test("Lighthouse page evidence without a component locator becomes a page candidate", () => {
  const result = investigation();
  const pageCandidate = result.candidates.find((candidate) => candidate.kind === "page" && candidate.pageIds.includes("pg-home"));
  assert.ok(pageCandidate);
  assert.equal(pageCandidate.ownershipEstablished, false);
  assert.ok(pageCandidate.uncertainty.some((uncertainty) => uncertainty.includes("no component ownership")));
  assert.ok(pageCandidate.findingIds.some((id) => id.startsWith("fes-lh")));
});

test("CSS candidate explanations are present but ranked below observed findings", () => {
  const result = investigation();
  const cssCandidate = result.candidates.find((candidate) => candidate.priority.evidenceTier === "candidate-explanation");
  assert.ok(cssCandidate);
  assert.ok(cssCandidate.interventions.some((intervention) => intervention.kind === "review-candidate-explanation"));
  assert.ok(result.candidates[0].priority.evidenceTier === "observed" || result.candidates[0].priority.evidenceTier === "tested");
  assert.ok(result.candidates.indexOf(cssCandidate) > 0);
});

test("both directions are indexed: component to pages/resources and resource to components/families", () => {
  const result = investigation();
  const nav = result.candidates.find((candidate) => candidate.kind === "component" && candidate.componentTypeIds.includes("ct-nav"));
  assert.ok(result.byComponentType["ct-nav"].includes(nav.id));
  assert.ok(result.byPage["pg-home"].includes(nav.id));
  assert.ok(result.byFamily["pf-nav"].includes(nav.id));
  const css = result.candidates.find((candidate) => candidate.kind === "resource" && candidate.resourceIds.includes("rs-shared-css"));
  assert.ok(result.byResource["rs-shared-css"].includes(css.id));
  assert.ok(result.byPage["pg-services"].includes(css.id));
});

test("ranking states its reasons and never invents an aggregate score", () => {
  const result = investigation();
  for (const candidate of result.candidates) {
    assert.equal(candidate.ownershipEstablished, false);
    assert.equal(typeof candidate.priority.rankReason, "string");
    assert.equal(Object.hasOwn(candidate, "score"), false);
    assert.equal(Object.hasOwn(result, "score"), false);
  }
  const ranks = result.candidates.map((candidate) => candidate.rank);
  assert.deepEqual(ranks, ranks.map((_, index) => index + 1));
  assert.ok(result.candidates[0].priority.rankReason.includes("evidence:"));
});

test("empty or context-only evidence produces no invented candidates", () => {
  const evidence = evidencePackage();
  const empty = {
    ...evidence,
    componentTypes: [],
    componentInstances: [],
    resources: [],
    findings: evidence.findings.filter((finding) => finding.evidenceClass === "context-only")
  };
  const result = buildPerformanceInvestigation(empty, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.value.candidates.length, 0);
});

test("investigation validation rejects ownership claims, duplicate ids and dangling indexes", () => {
  const value = investigation();
  const ownership = structuredClone(value);
  ownership.candidates[0].ownershipEstablished = true;
  assert.ok(validatePerformanceInvestigation(ownership).errors.some((error) => error.includes("must not claim established ownership")));

  const duplicate = structuredClone(value);
  duplicate.candidates[1].id = duplicate.candidates[0].id;
  assert.ok(validatePerformanceInvestigation(duplicate).errors.some((error) => error.includes("Duplicate candidate id")));

  const dangling = structuredClone(value);
  dangling.byPage["pg-home"].push("inv-missing");
  assert.ok(validatePerformanceInvestigation(dangling).errors.some((error) => error.includes("unknown candidate")));
});

test("the investigation schema and module constants agree", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/performance-investigation.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, PERFORMANCE_INVESTIGATION_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.ok(schema.required.includes("candidates"));
  assert.ok(schema.required.includes("byResource"));
  assert.ok(schema.$defs.candidate.properties.ownershipEstablished);
  assert.equal(schema.$defs.candidate.properties.ownershipEstablished.type, "boolean");
});

test("investigation CLI reads evidence and writes a package and summary", () => {
  const evidence = evidencePackage();
  const dir = mkdtempSync(join(tmpdir(), "open-scans-investigation-"));
  const evidencePath = join(dir, "evidence.json");
  const outPath = join(dir, "investigation.json");
  const summaryPath = join(dir, "summary.md");
  writeFileSync(evidencePath, JSON.stringify(evidence), "utf8");
  const result = spawnSync(process.execPath, [
    "scanner/run-performance-investigation.mjs",
    evidencePath,
    "--out", outPath,
    "--summary", summaryPath,
    "--now", "2026-11-16T12:00:00.000Z"
  ], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const out = JSON.parse(readFileSync(outPath, "utf8"));
  assert.equal(out.schema, "performance-investigation/1");
  assert.ok(out.candidates.length > 0);
  assert.ok(readFileSync(summaryPath, "utf8").includes("No browser or network access"));
});

test("runInvestigationFromEvidence accepts an evidence wrapper", () => {
  const evidence = evidencePackage();
  const result = runInvestigationFromEvidence({ evidence }, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.value.schema, PERFORMANCE_INVESTIGATION_SCHEMA_VERSION);
});
