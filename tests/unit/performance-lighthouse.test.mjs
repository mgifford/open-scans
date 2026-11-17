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
  discoverPerformanceUrls,
  orderPerformanceCandidates,
  planLighthouseRuns,
  reusableLighthouseEvidence
} from "../../scanner/performance-page-selection.mjs";
import {
  normalizeLighthouseResult,
  summarizeLighthouseResult
} from "../../scanner/performance-lighthouse.mjs";
import { runLightweightPerformance } from "../../scanner/run-performance-light.mjs";

const fixture = (name) => JSON.parse(readFileSync(new URL(`../fixtures/performance-evidence/${name}`, import.meta.url), "utf8"));
const lighthouseFixture = () => fixture("lighthouse-result.json");

function makeSource(type, location = `${type}.json`, digestChar = "a") {
  return createSourceRecord({
    type,
    adapter: type,
    tool: type,
    location,
    locationKind: type === "lighthouse" ? "artifact" : "local-file",
    importedAt: "2026-11-16T12:00:00.000Z",
    contentDigest: `sha256:${digestChar.repeat(64)}`
  });
}

function lightRequest(overrides = {}) {
  const parsed = parsePerformanceIssue(JSON.parse(
    readFileSync(new URL("../fixtures/performance-issue-light.json", import.meta.url), "utf8")
  ));
  assert.equal(parsed.ok, true, parsed.errors.join("\n"));
  return {
    ...parsed.value,
    mode: "light",
    evidenceSources: [],
    site: { ...parsed.value.site, urls: ["https://example.gov/"] },
    priorityUrls: [],
    topTaskUrls: [],
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 2, maxSitespeedPages: 0 },
    maxEvidenceAgeDays: 30,
    ...overrides
  };
}

function fesInput() {
  const source = makeSource("firefox-energy-scanner", "fes.json", "b");
  const data = fixture("firefox-energy-scanner-main.json");
  // Adapter is tested separately; use the real adapter through the runner path.
  return { source, data };
}

function lighthouseSource() {
  return makeSource("lighthouse", "lighthouse/result.json", "c");
}

function normalizedLighthouse() {
  const data = lighthouseFixture();
  const source = lighthouseSource();
  const request = lightRequest();
  const fragment = normalizeLighthouseResult({
    data,
    source,
    request,
    pageId: null,
    rawPath: source.location
  });
  return { source, fragment };
}

function assembleLighthouse() {
  const { source, fragment } = normalizedLighthouse();
  const result = assemblePerformanceEvidence({
    request: lightRequest(),
    inputs: [{ source, fragment }],
    generatedAt: "2026-11-16T12:00:00.000Z"
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

function baseFesEvidence() {
  const { source, data } = fesInput();
  // Reuse the adapter directly so the base package has the real graph IDs.
  const adapterSource = { ...source };
  return import("../../scanner/adapters/firefox-energy-scanner.mjs").then(({ adaptFirefoxEnergyScanner }) => {
    const fragment = adaptFirefoxEnergyScanner({ data, source: adapterSource });
    const result = assemblePerformanceEvidence({
      request: lightRequest({ site: { origin: "https://example.gov", host: "example.gov", urls: [] } }),
      inputs: [{ source: adapterSource, fragment }],
      generatedAt: "2026-11-10T12:00:00.000Z"
    });
    assert.equal(result.ok, true, result.errors.join("\n"));
    return { evidence: result.value, source: adapterSource, fragment };
  });
}

test("Lighthouse normalization produces source-linked page metrics", () => {
  const { source, fragment } = normalizedLighthouse();
  const page = fragment.pages[0];
  assert.equal(page.url, "https://example.gov/");
  assert.equal(page.familyId, null);
  assert.equal(page.contexts[0].profile, "desktop");
  assert.equal(page.metrics.find((metric) => metric.name === "lcp").value, 2600);
  assert.equal(page.metrics.find((metric) => metric.name === "tbt").value, 310);
  assert.equal(page.metrics.find((metric) => metric.name === "cls").value, 0.08);
  assert.equal(page.metrics.find((metric) => metric.name === "performance-score").value, 0.62);
  assert.equal(page.metrics.every((metric) => metric.tool === "lighthouse"), true);
  assert.equal(page.metrics.every((metric) => metric.boundary.includes("simulated")), true);
  assert.equal(fragment.resources.length, 3);
  assert.equal(fragment.resources.find((resource) => resource.url.includes("chat.js")).thirdParty, true);
  assert.equal(fragment.resources.find((resource) => resource.url.includes("site.js")).thirdParty, false);
  assert.ok(fragment.findings.some((finding) => finding.kind === "lighthouse-audit"));
  assert.ok(fragment.findings.some((finding) => finding.kind === "lighthouse-opportunity"));
  assert.ok(fragment.findings.some((finding) => finding.kind === "lighthouse-node"));
  assert.equal(fragment.findings.every((finding) => finding.target.type === "page"), true);
  assert.ok(fragment.limitations.some((limitation) => limitation.includes("not a Firefox energy")));
  assert.equal(fragment.measurementSources[0].tool, "lighthouse");
  assert.equal(fragment.sourceMeta.toolVersion, "13.6.0");
  assert.equal(source.locationKind, "artifact");
});

test("normalized Lighthouse evidence validates in the common format", () => {
  const evidence = assembleLighthouse();
  assert.equal(evidence.pages.length, 1);
  assert.equal(evidence.sources[0].type, "lighthouse");
  assert.equal(evidence.sources[0].locationKind, "artifact");
  assert.ok(evidence.findings.some((finding) => finding.kind === "lighthouse-audit"));
  assert.equal(evidence.pages[0].metrics.length >= 9, true);
  assert.equal(summarizeLighthouseResult(lighthouseFixture()).lcp, 2600);
});

test("page selection puts nominated top tasks first and records reasons", () => {
  const request = lightRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: ["https://example.gov/"] },
    priorityUrls: ["https://example.gov/contact"],
    topTaskUrls: ["https://example.gov/apply"]
  });
  const collected = collectPerformanceCandidates({ request, evidence: null, discoveredUrls: [] });
  assert.ok(collected.candidates.some((candidate) => candidate.url === "https://example.gov/apply"));
  const ordered = orderPerformanceCandidates({ request, evidence: null, candidates: collected.candidates });
  assert.equal(ordered.ordered[0].url, "https://example.gov/apply");
  assert.ok(ordered.ordered[0].selectionReasons.some((reason) => reason.includes("top task")));
  assert.equal(ordered.ordered[1].url, "https://example.gov/contact");
});

test("page selection includes a representative per page family and unusual pages", () => {
  const request = lightRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: [] },
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 5, maxSitespeedPages: 0 }
  });
  return baseFesEvidence().then(({ evidence }) => {
    const collected = collectPerformanceCandidates({ request, evidence, discoveredUrls: [] });
    const ordered = orderPerformanceCandidates({ request, evidence, candidates: collected.candidates });
    assert.equal(ordered.familyCount, 1);
    assert.equal(ordered.coveredFamilies.length, 1);
    assert.ok(ordered.ordered.some((candidate) => candidate.familyId === "pf-nav"));
    assert.ok(ordered.ordered.some((candidate) => candidate.unusualScore > 0));
    assert.ok(ordered.ordered.every((candidate) => candidate.selectionReasons.length > 0));
  });
});

test("transfer size alone does not outrank an unusual task page", () => {
  const request = lightRequest();
  const candidates = [
    {
      url: "https://example.gov/assets",
      normalizedUrl: "https://example.gov/assets",
      priority: 2,
      sourceKinds: ["explicit"],
      reasons: ["Explicit URL from the request"],
      familyId: null,
      pageId: null,
      metrics: { transferBytes: 9_000_000 },
      order: 0
    },
    {
      url: "https://example.gov/search?q=benefits",
      normalizedUrl: "https://example.gov/search?q=benefits",
      priority: 2,
      sourceKinds: ["explicit"],
      reasons: ["Explicit URL from the request"],
      familyId: null,
      pageId: null,
      metrics: { transferBytes: 1000 },
      order: 1
    }
  ];
  const ordered = orderPerformanceCandidates({ request, evidence: null, candidates });
  assert.equal(ordered.ordered[0].url, "https://example.gov/search?q=benefits");
  assert.ok(ordered.ordered[0].unusualReasons.some((reason) => reason.includes("query")));
});

test("compatible Lighthouse evidence is reused and stale or incomplete evidence is not", () => {
  return baseFesEvidence().then(({ evidence }) => {
    const request = lightRequest({
      site: { origin: "https://example.gov", host: "example.gov", urls: [] },
      maxEvidenceAgeDays: 30
    });
    const home = evidence.pages.find((page) => page.id === "pg-home");
    const reusable = reusableLighthouseEvidence({
      page: home,
      evidence,
      request,
      now: new Date("2026-11-10T12:00:00.000Z").getTime()
    });
    assert.equal(reusable.reusable, true, reusable.reason);

    const stale = reusableLighthouseEvidence({
      page: home,
      evidence,
      request: { ...request, maxEvidenceAgeDays: 1 },
      now: new Date("2026-11-10T12:00:00.000Z").getTime()
    });
    assert.equal(stale.reusable, false);
    assert.match(stale.reason, /older than/);

    const services = evidence.pages.find((page) => page.id === "pg-services");
    const incomplete = reusableLighthouseEvidence({
      page: services,
      evidence,
      request,
      now: new Date("2026-11-10T12:00:00.000Z").getTime()
    });
    assert.equal(incomplete.reusable, false);
    assert.match(incomplete.reason, /missing/);
  });
});

test("run planning reuses one page and schedules the missing page", () => {
  return baseFesEvidence().then(({ evidence }) => {
    const request = lightRequest({
      site: { origin: "https://example.gov", host: "example.gov", urls: [] },
      maxEvidenceAgeDays: 30,
      limits: { maxPagesToInspect: 10, maxLighthouseAudits: 1, maxSitespeedPages: 0 }
    });
    const collected = collectPerformanceCandidates({ request, evidence, discoveredUrls: [] });
    const ordered = orderPerformanceCandidates({ request, evidence, candidates: collected.candidates });
    const plan = planLighthouseRuns({
      request,
      evidence,
      orderedCandidates: ordered.ordered,
      now: new Date("2026-11-10T12:00:00.000Z").getTime()
    });
    assert.equal(plan.reused.length, 1);
    assert.equal(plan.reused[0].pageId, "pg-home");
    assert.equal(plan.runs.length, 1);
    assert.equal(plan.runs[0].pageId, "pg-services");
    assert.equal(plan.skipped.length, 0);
  });
});

test("bounded discovery includes the origin and rejects off-site URLs", async () => {
  const request = lightRequest({ site: { origin: "https://example.gov", host: "example.gov", urls: [] } });
  const discovery = await discoverPerformanceUrls({
    request,
    maxUrls: 5,
    fetchSitemap: async () => [
      "https://example.gov/about",
      "https://example.gov/",
      "https://example.gov/services",
      "https://other.example.org/out"
    ],
    crawlLinks: async () => []
  });
  assert.equal(discovery.method, "sitemap");
  assert.equal(discovery.urls[0], "https://example.gov/");
  assert.equal(discovery.urls.some((url) => url.includes("other.example.org")), false);
  assert.equal(discovery.urls.length, 3);
});

test("bounded discovery falls back to homepage links when the sitemap is empty", async () => {
  const request = lightRequest({ site: { origin: "https://example.gov", host: "example.gov", urls: [] } });
  const discovery = await discoverPerformanceUrls({
    request,
    maxUrls: 2,
    fetchSitemap: async () => [],
    crawlLinks: async () => ["https://example.gov/apply", "https://example.gov/"]
  });
  assert.equal(discovery.method, "homepage-links");
  assert.deepEqual(discovery.urls, ["https://example.gov/", "https://example.gov/apply"]);
});

function fakePreflight(url) {
  return Promise.resolve({ finalUrl: url, status: 200, redirected: false });
}

function fakeLighthouse({ url, runId }) {
  const data = structuredClone(lighthouseFixture());
  data.initialUrl = url;
  data.requestedUrl = url;
  data.finalUrl = url;
  data.finalDisplayedUrl = url;
  return Promise.resolve({
    data,
    rawPath: `/tmp/${runId}.json`,
    relativePath: `${runId}.json`,
    digest: `sha256:${"d".repeat(64)}`,
    durationMs: 5
  });
}

test("light runner records a bounded Lighthouse run and reusable browser artifact", async () => {
  const run = await runLightweightPerformance({
    request: lightRequest({
      site: { origin: "https://example.gov", host: "example.gov", urls: ["https://example.gov/"] },
      limits: { maxPagesToInspect: 5, maxLighthouseAudits: 1, maxSitespeedPages: 0 }
    }),
    artifactsDir: join(tmpdir(), "open-scans-lighthouse-fixture"),
    generatedAt: "2026-11-16T12:00:00.000Z",
    chromePath: "/fake/chrome",
    lighthouseRunner: fakeLighthouse,
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] })
  });
  assert.equal(run.ok, true, run.errors.join("\n"));
  assert.equal(run.runReport.cost.browserLaunches, 1);
  assert.equal(run.runReport.cost.lighthouseAudits, 1);
  assert.equal(run.evidence.sources[0].type, "lighthouse");
  assert.equal(run.evidence.sources[0].locationKind, "artifact");
  assert.equal(run.evidence.pages[0].metrics.find((metric) => metric.name === "lcp").value, 2600);
  assert.equal(run.runReport.runs[0].status, "completed");
});

test("light runner reuses a compatible page and only audits the gap", async () => {
  const { source } = await baseFesEvidence();
  const requested = lightRequest({
    site: { origin: "https://example.gov", host: "example.gov", urls: [] },
    evidenceSources: [{
      type: "firefox-energy-scanner",
      location: "https://evidence.example.gov/fes.json",
      locationKind: "https"
    }],
    maxEvidenceAgeDays: 30,
    limits: { maxPagesToInspect: 10, maxLighthouseAudits: 1, maxSitespeedPages: 0 }
  });
  const run = await runLightweightPerformance({
    request: requested,
    sourceOverrides: [{
      type: "firefox-energy-scanner",
      location: new URL("../fixtures/performance-evidence/firefox-energy-scanner-main.json", import.meta.url).pathname
    }],
    allowLocal: true,
    artifactsDir: join(tmpdir(), "open-scans-lighthouse-reuse"),
    generatedAt: "2026-11-10T12:00:00.000Z",
    chromePath: "/fake/chrome",
    lighthouseRunner: fakeLighthouse,
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] })
  });
  assert.equal(run.ok, true, run.errors.join("\n"));
  assert.equal(run.runReport.cost.reusedPages, 1);
  assert.equal(run.runReport.cost.browserLaunches, 1);
  assert.equal(run.runReport.selection.reusable[0].pageId, "pg-home");
  assert.equal(run.runReport.selection.scheduled[0].url, "https://example.gov/services");
  assert.ok(source);
});

test("light runner returns an explicit failure when every run fails", async () => {
  const run = await runLightweightPerformance({
    request: lightRequest({
      site: { origin: "https://example.gov", host: "example.gov", urls: ["https://example.gov/"] },
      limits: { maxPagesToInspect: 5, maxLighthouseAudits: 1, maxSitespeedPages: 0 }
    }),
    artifactsDir: join(tmpdir(), "open-scans-lighthouse-fail"),
    generatedAt: "2026-11-16T12:00:00.000Z",
    chromePath: "/fake/chrome",
    lighthouseRunner: async () => { throw new Error("simulated browser failure"); },
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] })
  });
  assert.equal(run.ok, false);
  assert.match(run.errors[0], /No evidence could be produced/);
});

test("light runner keeps partial results when one page fails", async () => {
  let calls = 0;
  const run = await runLightweightPerformance({
    request: lightRequest({
      site: { origin: "https://example.gov", host: "example.gov", urls: ["https://example.gov/", "https://example.gov/services"] },
      limits: { maxPagesToInspect: 5, maxLighthouseAudits: 2, maxSitespeedPages: 0 }
    }),
    artifactsDir: join(tmpdir(), "open-scans-lighthouse-partial"),
    generatedAt: "2026-11-16T12:00:00.000Z",
    chromePath: "/fake/chrome",
    preflightUrl: fakePreflight,
    lighthouseRunner: async (input) => {
      calls += 1;
      if (calls === 2) throw new Error("second page failed");
      return fakeLighthouse(input);
    },
    discovery: async () => ({ urls: [], method: "none", limitations: [] })
  });
  assert.equal(run.ok, true, run.errors.join("\n"));
  assert.equal(run.runReport.cost.browserLaunches, 2);
  assert.equal(run.runReport.failures.length, 1);
  assert.equal(run.evidence.pages.length, 1);
});

test("light runner redacts credential-shaped resource URLs before writing evidence", async () => {
  const run = await runLightweightPerformance({
    request: lightRequest({
      site: { origin: "https://example.gov", host: "example.gov", urls: ["https://example.gov/"] },
      limits: { maxPagesToInspect: 5, maxLighthouseAudits: 1, maxSitespeedPages: 0 }
    }),
    artifactsDir: join(tmpdir(), "open-scans-lighthouse-redaction"),
    generatedAt: "2026-11-16T12:00:00.000Z",
    chromePath: "/fake/chrome",
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] }),
    lighthouseRunner: async (input) => {
      const data = structuredClone(lighthouseFixture());
      data.finalUrl = input.url;
      data.finalDisplayedUrl = input.url;
      data.requestedUrl = input.url;
      data.audits["network-requests"].details.items.push({
        url: "https://example.gov/app.js?token=secret-value",
        resourceType: "Script",
        transferSize: 100,
        networkRequestTime: 1,
        networkEndTime: 10
      });
      return {
        data,
        rawPath: `/tmp/${input.runId}.json`,
        relativePath: `${input.runId}.json`,
        digest: `sha256:${"e".repeat(64)}`,
        durationMs: 5
      };
    }
  });
  assert.equal(run.ok, true, run.errors.join("\n"));
  assert.ok(run.evidence.resources.some((resource) => resource.url.includes("[REDACTED:query-token]")));
  assert.ok(run.runReport.redaction.changed >= 1);
});

test("light runner refuses non-light modes", async () => {
  const run = await runLightweightPerformance({
    request: lightRequest({ mode: "reuse", limits: { maxPagesToInspect: 10, maxLighthouseAudits: 0, maxSitespeedPages: 0 } }),
    chromePath: "/fake/chrome",
    lighthouseRunner: fakeLighthouse,
    preflightUrl: fakePreflight,
    discovery: async () => ({ urls: [], method: "none", limitations: [] })
  });
  assert.equal(run.ok, false);
  assert.match(run.errors[0], /supports light mode only/);
});
