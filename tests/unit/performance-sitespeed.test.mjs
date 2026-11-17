import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parsePerformanceIssue } from "../../scanner/parse-performance-issue.mjs";
import {
  assemblePerformanceEvidence,
  createSourceRecord
} from "../../scanner/performance-evidence.mjs";
import {
  collectPerformanceCandidates,
  orderPerformanceCandidates,
  selectSitespeedPages
} from "../../scanner/performance-page-selection.mjs";
import {
  SITESPEED_IMAGE,
  buildSitespeedArgs,
  digestSitespeedOutput,
  listJsonFiles,
  normalizeSitespeedOutput
} from "../../scanner/performance-sitespeed.mjs";
import { runDeepInvestigation } from "../../scanner/run-performance-deep.mjs";
import { adaptFirefoxEnergyScanner } from "../../scanner/adapters/firefox-energy-scanner.mjs";

const fixtureDir = new URL("../fixtures/performance-evidence/sitespeed-output", import.meta.url).pathname;
const fesFixture = JSON.parse(readFileSync(new URL("../fixtures/performance-evidence/firefox-energy-scanner-main.json", import.meta.url), "utf8"));

function makeSource(type, location = `${type}.json`, digestChar = "a") {
  return createSourceRecord({
    type,
    adapter: type,
    tool: type,
    location,
    locationKind: type === "sitespeed" ? "artifact" : "local-file",
    importedAt: "2026-11-16T12:00:00.000Z",
    contentDigest: `sha256:${digestChar.repeat(64)}`
  });
}

function deepRequest(overrides = {}) {
  const event = {
    issue: {
      number: 950,
      html_url: "https://github.com/mgifford/open-scans/issues/950",
      title: "PERF: example.com deep investigation",
      created_at: "2026-11-16T12:00:00Z",
      user: { login: "octocat" },
      body: "### Performance mode\ndeep\n\n### Domain\nexample.com\n\n### URLs\nhttps://example.com/\n\n### Limits\nMax pages to inspect: 3\nMax Lighthouse audits: 0\nMax Sitespeed pages: 1\n"
    }
  };
  const parsed = parsePerformanceIssue(event);
  assert.equal(parsed.ok, true, parsed.errors.join("\n"));
  return { ...parsed.value, ...overrides };
}

function sitespeedInput() {
  const source = makeSource("sitespeed", "sitespeed/fixture", "b");
  const fragment = normalizeSitespeedOutput({
    outputDir: fixtureDir,
    relativeDir: "sitespeed/fixture",
    source,
    request: deepRequest(),
    pageIdByUrl: new Map([["https://example.com/", "pg-demo"]])
  });
  return { source, fragment };
}

function fesEvidence() {
  const source = makeSource("firefox-energy-scanner", "fes.json", "c");
  const fragment = adaptFirefoxEnergyScanner({ data: fesFixture, source });
  const request = deepRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: [] },
    evidenceSources: [],
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 0, maxSitespeedPages: 3 }
  });
  const result = assemblePerformanceEvidence({
    request,
    inputs: [{ source, fragment }],
    generatedAt: "2026-11-10T12:00:00.000Z"
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

test("Sitespeed args pin the image and explicit plugin/model flags", () => {
  const request = deepRequest();
  const { args, containerName } = buildSitespeedArgs({
    urls: ["https://example.com/"],
    request,
    outputDir: "/tmp/sitespeed-out",
    runs: 3
  });
  assert.ok(args.includes(SITESPEED_IMAGE));
  assert.ok(args.includes("analysisstorer"));
  assert.ok(args.includes("--sustainable.enable"));
  assert.deepEqual(args.slice(args.indexOf("--sustainable.model"), args.indexOf("--sustainable.model") + 2), ["--sustainable.model", "swd"]);
  assert.deepEqual(args.slice(args.indexOf("--sustainable.modelVersion"), args.indexOf("--sustainable.modelVersion") + 2), ["--sustainable.modelVersion", "4"]);
  assert.deepEqual(args.slice(args.indexOf("--sustainable.disableHosting"), args.indexOf("--sustainable.disableHosting") + 2), ["--sustainable.disableHosting", "true"]);
  assert.ok(args.includes("--plugins.remove"));
  assert.ok(args.includes("--firstParty"));
  assert.ok(args.includes("--browser"));
  assert.ok(args.includes("chrome"));
  assert.ok(containerName.startsWith("open-scans-sitespeed-"));
  assert.equal(args[0], "run");
});

test("Sitespeed output normalizes page metrics, resources and CO2 provenance", () => {
  const { source, fragment } = sitespeedInput();
  const page = fragment.pages[0];
  assert.equal(page.id, "pg-demo");
  assert.equal(page.metrics.find((metric) => metric.name === "lcp").value, 416);
  assert.equal(page.metrics.find((metric) => metric.name === "speed-index").value, 319);
  assert.equal(page.metrics.find((metric) => metric.name === "tbt").value, 0);
  assert.equal(page.metrics.find((metric) => metric.name === "transfer-bytes").value, 2001);
  assert.equal(page.metrics.find((metric) => metric.name === "requests").value, 2);
  const co2 = page.metrics.find((metric) => metric.name === "co2-per-page-view");
  assert.ok(co2);
  assert.equal(co2.unit, "gCO2e");
  assert.equal(co2.tool, "sitespeed");
  assert.match(co2.boundary, /modelled/);
  assert.match(co2.method, /CO2\.js/);
  assert.ok(co2.limitations.some((limitation) => limitation.includes("not physically measured")));
  assert.equal(fragment.resources.length, 1);
  assert.ok(fragment.resources[0].url.endsWith("/s.js"));
  assert.ok(fragment.findings.some((finding) => finding.kind === "modelled-emissions"));
  assert.ok(fragment.findings.some((finding) => finding.kind === "resource-observation"));
  assert.ok(fragment.findings.some((finding) => finding.kind === "third-party-transfer"));
  assert.ok(fragment.findings.some((finding) => finding.kind === "long-task"));
  assert.equal(fragment.sourceMeta.toolVersion, "43.0.0");
  assert.equal(fragment.sourceMeta.schemaVersion, "analysisstorer/43.0.0");
  assert.ok(fragment.limitations.some((limitation) => limitation.includes("not Firefox energy")));
  assert.equal(source.locationKind, "artifact");
});

test("Sitespeed evidence validates in the common format and keeps CO2 out of energy", () => {
  const { source, fragment } = sitespeedInput();
  const result = assemblePerformanceEvidence({
    request: deepRequest(),
    inputs: [{ source, fragment }],
    generatedAt: "2026-11-16T12:00:00.000Z"
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.value.pages[0].metrics.some((metric) => metric.unit === "mWh"), false);
  assert.equal(result.value.findings.some((finding) => finding.metric?.unit === "gCO2e"), true);
  assert.equal(result.value.findings.find((finding) => finding.kind === "modelled-emissions").evidenceClass, "associated");
});

test("deep selection caps at three pages and prioritises pages with findings", () => {
  const evidence = fesEvidence();
  const request = deepRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: [] },
    evidenceSources: [],
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 0, maxSitespeedPages: 5 }
  });
  const collected = collectPerformanceCandidates({ request, evidence, discoveredUrls: [] });
  const ordered = orderPerformanceCandidates({ request, evidence, candidates: collected.candidates });
  const selection = selectSitespeedPages({ request, evidence, orderedCandidates: ordered.ordered });
  assert.equal(selection.cap, 3);
  assert.equal(selection.capped, true);
  assert.ok(selection.selected.length <= 3);
  assert.ok(selection.selected.some((candidate) => candidate.pageId === "pg-home"));
  assert.ok(selection.selected[0].sitespeedReasons.some((reason) => reason.includes("finding") || reason.includes("Representative")));
});

test("deep selection preserves nominated top tasks", () => {
  const request = deepRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: [] },
    topTaskUrls: ["https://example.gov/services"],
    evidenceSources: [],
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 0, maxSitespeedPages: 1 }
  });
  const collected = collectPerformanceCandidates({
    request,
    evidence: null,
    discoveredUrls: ["https://example.gov/", "https://example.gov/apply"]
  });
  const ordered = orderPerformanceCandidates({ request, evidence: null, candidates: collected.candidates });
  const selection = selectSitespeedPages({ request, evidence: null, orderedCandidates: ordered.ordered });
  assert.equal(selection.selected.length, 1);
  assert.equal(selection.selected[0].url, "https://example.gov/services");
  assert.ok(selection.selected[0].sitespeedReasons.some((reason) => reason.includes("top task")));
});

test("Sitespeed output digest is deterministic and missing output is rejected", () => {
  const files = listJsonFiles(fixtureDir);
  const first = digestSitespeedOutput(files);
  const second = digestSitespeedOutput([...files].reverse());
  assert.equal(first, second);
  assert.match(first, /^sha256:[0-9a-f]{64}$/);
  assert.throws(
    () => normalizeSitespeedOutput({
      outputDir: join(tmpdir(), "does-not-exist-sitespeed"),
      relativeDir: "missing",
      source: makeSource("sitespeed"),
      request: deepRequest()
    }),
    /no analysisstorer JSON/
  );
});

function fakePreflight(url) {
  return Promise.resolve({ finalUrl: url, status: 200, redirected: false });
}

test("deep runner records a bounded Sitespeed run without a shared browser session", async () => {
  const jsonFiles = listJsonFiles(fixtureDir);
  const run = await runDeepInvestigation({
    request: deepRequest(),
    artifactsDir: join(tmpdir(), "open-scans-sitespeed-fixture"),
    generatedAt: "2026-11-16T12:00:00.000Z",
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] }),
    sitespeedRunner: async ({ urls, runs }) => ({
      outputDir: fixtureDir,
      relativeDir: "fixture",
      jsonFiles,
      durationMs: 100,
      imageDigest: "sha256:image",
      runs,
      urls
    })
  });
  assert.equal(run.ok, true, run.errors.join("\n"));
  assert.equal(run.runReport.status, "completed");
  assert.equal(run.runReport.cost.dockerRuns, 1);
  assert.equal(run.runReport.cost.browserLaunchesExpected, 3);
  assert.equal(run.evidence.pages.length, 1);
  assert.equal(run.evidence.sources[0].type, "sitespeed");
  assert.equal(run.evidence.sources[0].locationKind, "artifact");
  assert.equal(run.evidence.pages[0].metrics.find((metric) => metric.name === "lcp").value, 416);
  assert.equal(run.evidence.pages[0].metrics.some((metric) => metric.unit === "mWh"), false);
  assert.equal(run.runReport.lighthouseBudgetNotRun, null);
  assert.equal(run.runReport.co2.libraryVersion, "0.19.0");
  assert.equal(run.runReport.co2.boundary, "modelled-transfer");
});

test("deep runner refuses non-deep modes", async () => {
  const request = deepRequest({ mode: "light", limits: { maxPagesToInspect: 10, maxLighthouseAudits: 5, maxSitespeedPages: 0 } });
  const run = await runDeepInvestigation({
    request,
    artifactsDir: join(tmpdir(), "open-scans-sitespeed-mode"),
    generatedAt: "2026-11-16T12:00:00.000Z",
    preflightUrl: fakePreflight,
    sitespeedRunner: async () => { throw new Error("must not run"); }
  });
  assert.equal(run.ok, false);
  assert.match(run.errors[0], /supports deep mode only/);
});

test("deep runner keeps a usable base package when Sitespeed has no output", async () => {
  const request = deepRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: [] },
    evidenceSources: [{ type: "firefox-energy-scanner", location: "https://evidence.example.gov/fes.json", locationKind: "https" }],
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 0, maxSitespeedPages: 1 }
  });
  const run = await runDeepInvestigation({
    request,
    sourceOverrides: [{ type: "firefox-energy-scanner", location: new URL("../fixtures/performance-evidence/firefox-energy-scanner-main.json", import.meta.url).pathname }],
    allowLocal: true,
    artifactsDir: join(tmpdir(), "open-scans-sitespeed-empty"),
    generatedAt: "2026-11-10T12:00:00.000Z",
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] }),
    sitespeedRunner: async () => { throw new Error("simulated Sitespeed failure"); }
  });
  assert.equal(run.ok, true, run.errors.join("\n"));
  assert.equal(run.runReport.status, "no-deep-evidence");
  assert.equal(run.evidence.pages.length, 2);
  assert.ok(run.evidence.limitations.some((limitation) => limitation.includes("Sitespeed")));
});
