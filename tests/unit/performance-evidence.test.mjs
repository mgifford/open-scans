import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { parsePerformanceIssue } from "../../scanner/parse-performance-issue.mjs";
import {
  PERFORMANCE_EVIDENCE_SCHEMA_VERSION,
  assemblePerformanceEvidence,
  createSourceRecord,
  normalizeUrl,
  validatePerformanceEvidence
} from "../../scanner/performance-evidence.mjs";
import { adaptSource } from "../../scanner/adapters/index.mjs";
import { adaptFirefoxEnergyScanner } from "../../scanner/adapters/firefox-energy-scanner.mjs";
import { adaptVitalCore } from "../../scanner/adapters/vital-core.mjs";
import { adaptOpenScansReport } from "../../scanner/adapters/open-scans-report.mjs";
import { adaptOpenSiteReview } from "../../scanner/adapters/open-site-review.mjs";
import { runReuseInvestigation } from "../../scanner/run-performance-reuse.mjs";
import {
  assertPublicHostname,
  fetchJsonEvidence,
  loadEvidenceSource
} from "../../scanner/performance-source-loader.mjs";

const fixturePath = (name) => new URL(`../fixtures/performance-evidence/${name}`, import.meta.url);
const fixture = (name) => JSON.parse(readFileSync(fixturePath(name), "utf8"));

function makeSource(type, location = `${type}.json`, digestChar = "a") {
  return createSourceRecord({
    type,
    adapter: type,
    tool: type,
    location,
    locationKind: "local-file",
    importedAt: "2026-11-16T12:00:00.000Z",
    contentDigest: `sha256:${digestChar.repeat(64)}`
  });
}

function requestFromFixture() {
  const parsed = parsePerformanceIssue(JSON.parse(
    readFileSync(new URL("../fixtures/performance-issue-reuse.json", import.meta.url), "utf8")
  ));
  assert.equal(parsed.ok, true, parsed.errors.join("\n"));
  return parsed.value;
}

function adaptFixture(type, name, digestChar = "b") {
  const source = makeSource(type, name, digestChar);
  const result = adaptSource({ type, data: fixture(name), source });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return { source, fragment: result.fragment };
}

function assemble(inputs, request = requestFromFixture()) {
  const result = assemblePerformanceEvidence({
    request,
    inputs,
    generatedAt: "2026-11-16T12:00:00.000Z"
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

test("Firefox Energy Scanner adapter preserves its graph IDs and measurement sources", () => {
  const { fragment } = adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json");
  const pages = fragment.pages.map((page) => page.id);
  assert.deepEqual(pages, ["pg-home", "pg-services"]);
  assert.deepEqual(fragment.componentTypes.map((type) => type.id), ["ct-nav", "ct-sidebar-nav", "ct-dialog"]);
  assert.deepEqual(fragment.componentInstances.map((instance) => instance.id), ["ci-nav", "ci-dialog", "ci-nav-2", "ci-sidebar"]);
  assert.equal(fragment.resources[0].id, "rs-hero");
  assert.equal(fragment.findings[0].id, "fd-render");
  assert.equal(fragment.findings[0].evidenceClass, "observed");
  assert.equal(fragment.findings[1].evidenceClass, "inferred");
  assert.ok(fragment.measurementSources.some((source) => source.id === "lighthouse" && source.tool === "lighthouse"));
  assert.equal(fragment.investigation[0].id, "cmp-nav");
  assert.match(fragment.investigation[0].remediation[0], /reduce-dom/);
  assert.equal(fragment.sourceMeta.schemaVersion, "2");
});

test("Firefox Energy Scanner adapter keeps distinct navigation implementations separate", () => {
  const { fragment } = adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json");
  const navigation = fragment.componentTypes.filter((type) => type.signature.includes("nav"));
  assert.equal(navigation.length, 2);
  assert.deepEqual(navigation.map((type) => type.signature).sort(), ["component:sidebar-nav", "component:site-nav"]);
});

test("Firefox Energy Scanner adapter imports an experiment as tested mWh evidence", () => {
  const { fragment } = adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-experiment.json");
  assert.equal(fragment.experiments.length, 1);
  const experiment = fragment.experiments[0];
  assert.equal(experiment.results.status, "completed");
  assert.equal(experiment.results.delta, null);
  assert.equal(experiment.physicalEnergyStatus, "measured");
  const tested = fragment.findings.find((finding) => finding.kind === "experiment-energy-difference");
  assert.ok(tested);
  assert.equal(tested.metric.value, -0.0334);
  assert.equal(tested.metric.unit, "mWh");
  assert.equal(tested.evidenceClass, "tested");
  assert.ok(tested.limitations.some((limitation) => limitation.includes("not generalised site-wide")));
});

test("Vital Core snapshot imports modelled and Lighthouse figures without recalculating them", () => {
  const { fragment } = adaptFixture("vital-core", "vital-core-snapshot.json");
  const co2 = fragment.findings.find((finding) => finding.metric?.name === "co2e-mean-per-page");
  assert.ok(co2);
  assert.equal(co2.metric.value, 0.2282);
  assert.equal(co2.metric.unit, "gCO2e");
  assert.equal(co2.metric.tool, "vital-core");
  assert.match(co2.metric.boundary, /modelled/);
  assert.ok(co2.limitations.some((limitation) => limitation.includes("not physically measured")));

  const modelledEnergy = fragment.findings.find((finding) => finding.metric?.name === "modelled-energy-mean-per-page");
  assert.ok(modelledEnergy);
  assert.equal(modelledEnergy.metric.unit, "Wh");
  assert.ok(modelledEnergy.limitations.some((limitation) => limitation.includes("not observed client energy")));

  const lcp = fragment.findings.find((finding) => finding.metric?.name === "lcp");
  assert.ok(lcp);
  assert.equal(lcp.metric.value, 5028);
  assert.equal(lcp.metric.tool, "vital-core");
  assert.match(lcp.metric.method, /Lighthouse/);
  assert.equal(fragment.findings.filter((finding) => finding.metric?.tool === "co2js").length, 0);
  assert.equal(fragment.sourceMeta.toolVersion, null);
  assert.equal(fragment.sourceMeta.schemaVersion, "1");
});

test("Vital Core findings import accessibility context and configured components without ownership", () => {
  const { fragment } = adaptFixture("vital-core", "vital-core-findings.json");
  assert.equal(fragment.pageFamilies.length, 1);
  assert.equal(fragment.pageFamilies[0].label, "Service pages");
  assert.equal(fragment.componentTypes.length, 1);
  assert.equal(fragment.componentTypes[0].identificationMethod, "configured-signature");
  assert.equal(fragment.componentTypes[0].sourceComponentId, "component:site-navigation");
  const context = fragment.findings.find((finding) => finding.sourceFindingId === "VFR-22222222");
  assert.ok(context);
  assert.equal(context.evidenceClass, "context-only");
  assert.equal(context.target.type, "page");
  assert.ok(context.limitations.some((limitation) => limitation.includes("ownership established: false")));
});

test("Vital Core domain index alone is rejected with an actionable message", () => {
  assert.throws(
    () => adaptVitalCore({
      data: { domains: [{ domain: "example.gov", key: "example.gov" }] },
      source: makeSource("vital-core")
    }),
    /domain index/
  );
});

test("Open Scans adapter imports pages and browser context but no performance metric", () => {
  const { fragment } = adaptFixture("open-scans-report", "open-scans-report.json");
  assert.equal(fragment.pages.length, 2);
  assert.match(fragment.pages[0].id, /^os-pg-[0-9a-f]{8}$/);
  assert.deepEqual(fragment.pages[0].contexts[0].viewport, { width: 1280, height: 800 });
  assert.equal(fragment.pages[0].contexts[0].browser, "chromium");
  assert.deepEqual(fragment.pages[0].metrics, []);
  assert.equal(fragment.findings.every((finding) => finding.evidenceClass === "context-only"), true);
  assert.equal(fragment.findings.every((finding) => finding.metric === null), true);
  assert.ok(fragment.pages[0].limitations.some((limitation) => limitation.includes("elapsedMs")));
});

test("Open Site Review adapter keeps CSS quality as a candidate explanation", () => {
  const { fragment } = adaptFixture("open-site-review", "open-site-review.json");
  assert.equal(fragment.findings.every((finding) => finding.evidenceClass === "candidate-explanation"), true);
  assert.ok(fragment.findings.some((finding) => finding.kind === "css-quality" && finding.metric?.value === 42));
  assert.ok(fragment.findings.some((finding) => finding.kind === "compatibility-candidate"));
  assert.equal(fragment.pages.length, 1);
  assert.equal(fragment.pages[0].url, "https://example.gov/services");
  assert.ok(fragment.limitations.some((limitation) => limitation.includes("does not measure page performance")));
});

test("assembly merges the same page across sources while preserving source measurements", () => {
  const inputs = [
    adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json"),
    adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-alt.json", "c"),
    adaptFixture("vital-core", "vital-core-findings.json", "d"),
    adaptFixture("open-scans-report", "open-scans-report.json", "e")
  ];
  const evidence = assemble(inputs);
  const home = evidence.pages.find((page) => page.normalizedUrl === "https://example.gov/");
  assert.ok(home);
  assert.equal(home.id, "pg-home");
  const lcp = home.metrics.filter((metric) => metric.name === "lcp");
  assert.equal(lcp.length, 2);
  assert.deepEqual(lcp.map((metric) => metric.value).sort((a, b) => a - b), [2600, 3600]);
  assert.deepEqual(lcp.map((metric) => metric.toolVersion).sort(), ["13.5.0", "13.6.0"]);
  assert.ok(evidence.mergeDecisions.some((decision) => decision.entity === "page" && decision.keptId === "pg-home"));
});

test("resources merge by URL without averaging two different sizes", () => {
  const base = adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json");
  const other = adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json", "f");
  const resource = {
    ...other.fragment.resources[0],
    id: "rs-hero-alt",
    sizeBytes: 500000,
    pageIds: [],
    instanceIds: [],
    sourceRefs: []
  };
  const fragment = {
    sourceMeta: other.fragment.sourceMeta,
    pages: [],
    pageFamilies: [],
    componentTypes: [],
    componentInstances: [],
    resources: [resource],
    findings: [],
    experiments: [],
    investigation: [],
    measurementSources: [],
    coverage: null,
    limitations: []
  };
  const evidence = assemble([base, { source: other.source, fragment }]);
  assert.equal(evidence.resources.length, 1);
  assert.equal(evidence.resources[0].id, "rs-hero");
  assert.equal(evidence.resources[0].sizeBytes, 480000);
  const decision = evidence.mergeDecisions.find((entry) => entry.entity === "resource");
  assert.ok(decision.differences.some((difference) => difference.includes("Not averaged")));
});

test("Firefox Energy Scanner adapter accepts schemaVersion 1 and records unadapted timelines", () => {
  const data = structuredClone(fixture("firefox-energy-scanner-main.json"));
  data.schemaVersion = 1;
  data.timelines = { intervals: [] };
  const source = makeSource("firefox-energy-scanner", "v1.json", "e");
  const result = adaptSource({ type: "firefox-energy-scanner", data, source });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.fragment.sourceMeta.schemaVersion, "1");
  assert.ok(result.fragment.limitations.some((limitation) => limitation.includes("timeline")));
});

test("Firefox Energy Scanner adapter accepts a Lighthouse-only result", () => {
  const data = {
    schemaVersion: 2,
    environment: { timestamp: "2026-11-06T10:00:00.000Z", firefoxVersion: "153.0" },
    target: { url: "https://example.gov/" },
    lighthouse: {
      tool: "lighthouse",
      version: "13.6.0",
      browser: "HeadlessChrome/158.0.0.0",
      formFactor: "desktop",
      throttling: "simulate",
      results: [{
        finalUrl: "https://example.gov/",
        metrics: { lcpMs: 2400 },
        scores: { performance: 70 },
        recommendations: [],
        work: {},
        evidence: { nodes: [] }
      }]
    }
  };
  const source = makeSource("firefox-energy-scanner", "lh-only.json", "d");
  const result = adaptSource({ type: "firefox-energy-scanner", data, source });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.fragment.pages.length, 1);
  assert.ok(result.fragment.pages[0].metrics.some((metric) => metric.name === "lcp" && metric.value === 2400));
});

test("distinct component implementations are never merged by label alone", () => {
  const inputs = [
    adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json"),
    adaptFixture("vital-core", "vital-core-findings.json", "d")
  ];
  const evidence = assemble(inputs);
  assert.equal(evidence.componentTypes.length, 4);
  assert.equal(evidence.componentTypes.filter((type) => /nav/i.test(type.signature) || /nav/i.test(type.label)).length, 3);
});

test("a missing measurement stays missing and is not filled with zero", () => {
  const inputs = [adaptFixture("open-scans-report", "open-scans-report.json")];
  const evidence = assemble(inputs);
  const services = evidence.pages.find((page) => page.url === "https://example.gov/services");
  assert.ok(services);
  assert.equal(services.metrics.length, 0);
  assert.equal(services.metrics.some((metric) => metric.name === "lcp"), false);
});

test("accessibility context never becomes a performance measurement", () => {
  const inputs = [
    adaptFixture("open-scans-report", "open-scans-report.json"),
    adaptFixture("vital-core", "vital-core-findings.json", "d")
  ];
  const evidence = assemble(inputs);
  const context = evidence.findings.filter((finding) => finding.kind === "accessibility-context");
  assert.ok(context.length >= 3);
  assert.equal(context.every((finding) => finding.metric === null), true);
  assert.equal(context.every((finding) => finding.evidenceClass === "context-only"), true);
  assert.equal(context.some((finding) => finding.metric?.unit === "mWh"), false);
});

test("cross-source component types with the same label are cross-referenced, not merged", () => {
  const base = adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json");
  const template = base.fragment.componentTypes[0];
  const fragment = {
    sourceMeta: base.fragment.sourceMeta,
    pages: [],
    pageFamilies: [],
    componentTypes: [
      { ...template, id: "ct-nav-a", signature: "component:nav-a", label: "Navigation", instanceIds: [], resourceIds: [], findingIds: [], pageFamilyIds: [] },
      { ...template, id: "ct-nav-b", signature: "component:nav-b", label: "Navigation", instanceIds: [], resourceIds: [], findingIds: [], pageFamilyIds: [] }
    ],
    componentInstances: [],
    resources: [],
    findings: [],
    experiments: [],
    investigation: [],
    measurementSources: [],
    coverage: null,
    limitations: []
  };
  const evidence = assemble([{ source: base.source, fragment }]);
  assert.equal(evidence.componentTypes.length, 2);
  const other = evidence.componentTypes.find((type) => type.id === "ct-nav-b");
  assert.ok(other.possibleDuplicateOf.includes("ct-nav-a"));
  assert.ok(evidence.limitations.some((limitation) => limitation.includes("not proof of a shared implementation")));
});

test("validation rejects synthetic mWh, unlabelled CO2 and broken references", () => {
  const evidence = assemble([adaptFixture("firefox-energy-scanner", "firefox-energy-scanner-main.json")]);

  const synthetic = structuredClone(evidence);
  synthetic.pages[0].metrics.push({
    ...synthetic.pages[0].metrics[0],
    name: "component-energy",
    value: 1,
    unit: "mWh",
    tool: "lighthouse",
    boundary: "chromium-lab"
  });
  const synthResult = validatePerformanceEvidence(synthetic);
  assert.equal(synthResult.ok, false);
  assert.ok(synthResult.errors.some((error) => error.includes("does not measure client energy")));

  const unlabelled = structuredClone(evidence);
  unlabelled.findings[0].metric = {
    ...unlabelled.pages[0].metrics[0],
    name: "co2",
    value: 1,
    unit: "gCO2e",
    tool: "co2js",
    boundary: "observed client energy"
  };
  const co2Result = validatePerformanceEvidence(unlabelled);
  assert.equal(co2Result.ok, false);
  assert.ok(co2Result.errors.some((error) => error.includes("not labelled modelled")));

  const broken = structuredClone(evidence);
  broken.findings[0].target = { type: "page", id: "missing-page" };
  const brokenResult = validatePerformanceEvidence(broken);
  assert.equal(brokenResult.ok, false);
  assert.ok(brokenResult.errors.some((error) => error.includes("unknown id 'missing-page'")));
});

test("unsupported versions and malformed sources fail clearly", () => {
  const fes = adaptSource({
    type: "firefox-energy-scanner",
    data: { schemaVersion: 99, graph: { schema: "component-graph/1" } },
    source: makeSource("firefox-energy-scanner")
  });
  assert.equal(fes.ok, false);
  assert.match(fes.errors[0], /Unsupported Firefox Energy Scanner result schemaVersion/);

  const osr = adaptSource({
    type: "open-site-review",
    data: { report: {} },
    source: makeSource("open-site-review")
  });
  assert.equal(osr.ok, false);
  assert.match(osr.errors[0], /no report\.findings array/);

  const unsupported = adaptSource({
    type: "mcp",
    data: {},
    source: makeSource("mcp")
  });
  assert.equal(unsupported.ok, false);
  assert.match(unsupported.errors[0], /Unsupported evidence source type/);
});

test("reuse runner assembles existing evidence with zero browser launches and zero network fetches", async () => {
  const result = await runReuseInvestigation({
    request: requestFromFixture(),
    repoRoot: process.cwd(),
    allowLocal: true,
    generatedAt: "2026-11-16T12:00:00.000Z",
    sourceOverrides: [
      { type: "firefox-energy-scanner", location: fixturePath("firefox-energy-scanner-main.json").pathname },
      { type: "vital-core", location: fixturePath("vital-core-snapshot.json").pathname },
      { type: "open-scans-report", location: fixturePath("open-scans-report.json").pathname },
      { type: "open-site-review", location: fixturePath("open-site-review.json").pathname }
    ]
  });
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.stats.browserLaunches, 0);
  assert.equal(result.stats.networkFetches, 0);
  assert.equal(result.stats.sourceCount, 4);
  assert.equal(result.evidence.schema, PERFORMANCE_EVIDENCE_SCHEMA_VERSION);
  assert.ok(result.evidence.pages.length >= 2);
  assert.equal(result.evidence.site.coverage.discoveredPages, 1200);
});

test("reuse runner reports partial source failure without inventing evidence", async () => {
  const result = await runReuseInvestigation({
    request: requestFromFixture(),
    repoRoot: process.cwd(),
    allowLocal: true,
    generatedAt: "2026-11-16T12:00:00.000Z",
    sourceOverrides: [
      { type: "firefox-energy-scanner", location: join(tmpdir(), "does-not-exist-fes.json") },
      { type: "vital-core", location: fixturePath("vital-core-snapshot.json").pathname }
    ]
  });
  assert.equal(result.ok, true);
  assert.ok(result.warnings.some((warning) => warning.includes("Source omitted")));
  assert.ok(result.evidence.limitations.some((limitation) => limitation.includes("Source omitted")));
  assert.equal(result.evidence.findings.some((finding) => finding.kind === "experiment-energy-difference"), false);
});

test("reuse runner refuses non-reuse modes and empty source lists", async () => {
  const request = requestFromFixture();
  const lightRequest = { ...request, mode: "light" };
  const modeResult = await runReuseInvestigation({ request: lightRequest, allowLocal: true });
  assert.equal(modeResult.ok, false);
  assert.match(modeResult.errors[0], /supports reuse mode only/);

  const emptyRequest = { ...request, evidenceSources: [] };
  const emptyResult = await runReuseInvestigation({ request: emptyRequest, allowLocal: true });
  assert.equal(emptyResult.ok, false);
  assert.match(emptyResult.errors[0], /at least one existing evidence source/);
});

test("source loader blocks private addresses and repo path traversal", async () => {
  await assert.rejects(() => assertPublicHostname("127.0.0.1"), /private|blocked/);
  await assert.rejects(() => assertPublicHostname("localhost"), /blocked/);
  await assert.rejects(() => assertPublicHostname("[::1]"), /private|blocked/);
  await assert.rejects(
    () => loadEvidenceSource({
      source: { type: "open-scans-report", location: "reports/../package.json", locationKind: "repo-path" },
      repoRoot: process.cwd()
    }),
    /escapes the reports/
  );
});

test("remote evidence fetcher rejects unsafe schemes, credentials and private hosts before fetching", async () => {
  await assert.rejects(() => fetchJsonEvidence("http://example.gov/snapshot.json"), /https/);
  await assert.rejects(() => fetchJsonEvidence("https://user:pass@example.gov/snapshot.json"), /username or password/);
  await assert.rejects(() => fetchJsonEvidence("https://127.0.0.1/snapshot.json"), /private|blocked/);
});

test("source loader refuses local files without an explicit override policy", async () => {
  await assert.rejects(
    () => loadEvidenceSource({
      source: { type: "vital-core", location: "https://example.gov/snapshot.json", locationKind: "https" },
      repoRoot: process.cwd(),
      localOverride: fixturePath("vital-core-snapshot.json").pathname,
      allowLocal: false
    }),
    /explicit --source override/
  );
});

test("reuse CLI writes a machine-readable package and a summary", () => {
  const dir = mkdtempSync(join(tmpdir(), "open-scans-perf-"));
  const outPath = join(dir, "evidence.json");
  const summaryPath = join(dir, "summary.md");
  const result = spawnSync(process.execPath, [
    "scanner/run-performance-reuse.mjs",
    "tests/fixtures/performance-issue-reuse.json",
    "--source", `firefox-energy-scanner=${fixturePath("firefox-energy-scanner-main.json").pathname}`,
    "--source", `vital-core=${fixturePath("vital-core-snapshot.json").pathname}`,
    "--allow-local",
    "--now", "2026-11-16T12:00:00.000Z",
    "--out", outPath,
    "--summary", summaryPath
  ], {
    cwd: process.cwd(),
    encoding: "utf8"
  });
  assert.equal(result.status, 0, result.stderr);
  assert.ok(existsSync(outPath));
  assert.ok(existsSync(summaryPath));
  const evidence = JSON.parse(readFileSync(outPath, "utf8"));
  assert.equal(evidence.schema, "performance-evidence/1");
  assert.ok(readFileSync(summaryPath, "utf8").includes("No browser was launched"));
});

test("the evidence schema and module constants agree", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/performance-evidence.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, PERFORMANCE_EVIDENCE_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.ok(schema.required.includes("pages"));
  assert.ok(schema.required.includes("findings"));
  assert.ok(schema.required.includes("experiments"));
  assert.ok(schema.required.includes("mergeDecisions"));
  assert.ok(schema.$defs.unit.enum.includes("mWh"));
  assert.ok(schema.$defs.finding.properties.evidenceClass.enum.includes("context-only"));
  assert.ok(schema.$defs.finding.properties.evidenceClass.enum.includes("tested"));
  assert.equal(schema.$defs.resource.properties.attribution.enum.includes("direct"), true);
});

test("evidence modules contain no browser automation or external fetch in adapters", () => {
  for (const path of [
    "../../scanner/performance-evidence.mjs",
    "../../scanner/adapters/firefox-energy-scanner.mjs",
    "../../scanner/adapters/vital-core.mjs",
    "../../scanner/adapters/open-scans-report.mjs",
    "../../scanner/adapters/open-site-review.mjs"
  ]) {
    const source = readFileSync(new URL(path, import.meta.url), "utf8");
    assert.equal(/playwright|puppeteer|child_process|execSync|spawnSync/.test(source), false, path);
  }
});

test("normalizeUrl keeps query variants distinct and removes fragments", () => {
  assert.equal(normalizeUrl("https://EXAMPLE.gov/a?b=2&a=1#x"), "https://example.gov/a?a=1&b=2");
  assert.notEqual(
    normalizeUrl("https://example.gov/a?b=2"),
    normalizeUrl("https://example.gov/a?b=3")
  );
});
