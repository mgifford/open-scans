import {
  createMetric,
  createSourceRef,
  normalizeUrl,
  stableId
} from "../performance-evidence.mjs";
import { EvidenceAdapterError } from "./errors.mjs";

export const FIREFOX_ENERGY_SCANNER_ADAPTER_VERSION = "1.0.0";

const SUPPORTED_RESULT_SCHEMA_VERSIONS = new Set([1, 2]);
const SUPPORTED_GRAPH_SCHEMA = "component-graph/1";

const EVIDENCE_CLASS = Object.freeze({
  "direct-observation": "observed",
  "direct-node": "observed",
  "trace-supported": "observed",
  "resource-association": "associated",
  "cross-page-correlation": "associated",
  "structural-heuristic": "inferred"
});

const RESOURCE_KIND = Object.freeze({
  script: "script",
  javascript: "script",
  stylesheet: "stylesheet",
  css: "stylesheet",
  font: "font",
  image: "image",
  img: "image",
  iframe: "iframe",
  document: "iframe",
  media: "media",
  video: "media",
  audio: "media",
  other: "other",
  xhr: "other",
  fetch: "other"
});

const TARGET_TYPE = Object.freeze({
  instance: "component-instance",
  page: "page",
  resource: "resource",
  type: "component-type",
  unattributed: "site"
});

const TOOL_FOR_SOURCE = Object.freeze({
  "firefox-dom": "firefox-energy-scanner",
  "firefox-network": "firefox-energy-scanner",
  "firefox-energy": "firefox-energy-scanner",
  "same-run-gecko": "firefox-energy-scanner",
  "script-source": "firefox-energy-scanner",
  lighthouse: "lighthouse",
  "chromium-trace": "chromium-trace",
  co2js: "co2js",
  webnrg: "webnrg"
});

function sourceTool(id) {
  return TOOL_FOR_SOURCE[id] ?? "unknown";
}

function resultPageUrl(data) {
  return data.target?.url ?? data.targets?.[0]?.url ?? null;
}

function firefoxBrowser(data) {
  return data.environment?.firefoxVersion ? `Firefox ${data.environment.firefoxVersion}` : null;
}

function profileFromViewport(viewport) {
  const width = Number(viewport?.width);
  if (!Number.isInteger(width)) return null;
  return width < 600 ? "mobile" : "desktop";
}

function collectedAt(data) {
  return data.environment?.timestamp ?? data.session?.startedAt ?? null;
}

function pageContext(data, sourceId) {
  const viewport = data.environment?.viewport;
  return {
    browser: firefoxBrowser(data),
    viewport: Number.isInteger(viewport?.width) && Number.isInteger(viewport?.height)
      ? { width: viewport.width, height: viewport.height }
      : null,
    profile: profileFromViewport(viewport),
    method: "firefox-measured",
    sourceId
  };
}

function measurementSourceMap(graph, data, sourceId) {
  const map = new Map();
  const out = [];
  for (const ms of graph?.sources ?? []) {
    const tool = sourceTool(ms.id);
    const toolVersion = tool === "lighthouse" ? (data.lighthouse?.version ?? null) : null;
    map.set(ms.id, { ...ms, tool, toolVersion });
    out.push({
      id: ms.id,
      sourceId,
      browser: ms.browser ?? null,
      tool,
      toolVersion,
      timestamp: ms.timestamp ?? null,
      method: ms.method ?? "not stated",
      boundary: ms.boundary ?? "not stated"
    });
  }
  if (data.lighthouse && !map.has("lighthouse")) {
    const tool = "lighthouse";
    const toolVersion = data.lighthouse.version ?? null;
    map.set("lighthouse", {
      id: "lighthouse",
      browser: data.lighthouse.browser ?? null,
      timestamp: collectedAt(data),
      method: `Lighthouse ${data.lighthouse.throttling ?? "configuration not stated"}`,
      boundary: "Chromium lab, simulated throttling",
      tool,
      toolVersion
    });
    out.push({
      id: "lighthouse",
      sourceId,
      browser: data.lighthouse.browser ?? null,
      tool,
      toolVersion,
      timestamp: collectedAt(data),
      method: `Lighthouse ${data.lighthouse.throttling ?? "configuration not stated"}`,
      boundary: "Chromium lab, simulated throttling"
    });
  }
  return { map, out };
}

function metricFromEntry({ name, entry, sourceId, measurements, evidenceRef, confidence = "high", limitations = [] }) {
  if (!entry || typeof entry !== "object") return null;
  const ms = measurements.get(entry.source);
  return createMetric({
    name,
    value: typeof entry.value === "number" ? entry.value : null,
    unit: entry.unit === "per-second" ? "ratio" : entry.unit,
    scope: entry.scope ?? "page",
    sourceId,
    measurementSourceId: entry.source ?? null,
    tool: ms?.tool ?? "firefox-energy-scanner",
    toolVersion: ms?.toolVersion ?? null,
    browser: ms?.browser ?? null,
    method: ms?.method ?? "Firefox Energy Scanner graph metric",
    boundary: ms?.boundary ?? "source-declared measurement boundary",
    evidenceRef,
    confidence,
    limitations: [
      ...(entry.unit === "per-second" ? ["Source reported a per-second rate; unit is recorded as a ratio in this adapter."] : []),
      ...limitations
    ]
  });
}

function familyRecords(data, graph, sourceId) {
  const records = new Map();
  const reported = data.families?.families ?? data.families?.groups ?? [];
  for (const family of Array.isArray(reported) ? reported : []) {
    const id = family.id ?? family.family ?? family.key;
    if (!id) continue;
    records.set(id, {
      id,
      label: family.label ?? family.name ?? id,
      sourceId,
      basis: "measured-structure",
      pageIds: [...new Set((family.pages ?? family.pageIds ?? []).filter((id) => typeof id === "string"))],
      limitations: []
    });
  }
  for (const page of graph?.pages ?? []) {
    if (!page.family) continue;
    if (!records.has(page.family)) {
      records.set(page.family, {
        id: page.family,
        label: page.family,
        sourceId,
        basis: "imported",
        pageIds: [],
        limitations: ["Family label was not present in this result; the source family ID is used as its label."]
      });
    }
    const family = records.get(page.family);
    if (!family.pageIds.includes(page.id)) family.pageIds.push(page.id);
  }
  for (const type of graph?.types ?? []) {
    for (const familyId of type.families ?? []) {
      if (!records.has(familyId)) {
        records.set(familyId, {
          id: familyId,
          label: familyId,
          sourceId,
          basis: "imported",
          pageIds: [],
          limitations: ["Family label was not present in this result; the source family ID is used as its label."]
        });
      }
    }
  }
  return [...records.values()];
}

function findingTarget(finding, data) {
  const type = TARGET_TYPE[finding.target?.type] ?? "site";
  if (type === "site") return { type, id: stableId("site", resultPageUrl(data) ?? "unknown", 12) };
  const id = finding.target?.id
    ?? (type === "page" ? finding.page : null);
  if (!id) return { type: "site", id: stableId("site", resultPageUrl(data) ?? "unknown", 12) };
  return { type, id };
}

function mapResourceUrl(resource, data) {
  const key = resource.key ?? resource.url ?? null;
  if (!key) return null;
  if (/^https?:\/\//i.test(key)) return key;
  const base = resultPageUrl(data);
  if (!base) return null;
  try {
    const origin = new URL(base).origin;
    return new URL(key.startsWith("/") ? key : `/${key}`, origin).toString();
  } catch {
    return null;
  }
}

function mapFinding({ finding, index, data, source, measurements, pageIdByUrl }) {
  const target = findingTarget(finding, data);
  const metric = finding.metric
    ? metricFromEntry({
      name: finding.kind ?? "finding",
      entry: finding.metric,
      sourceId: source.id,
      measurements,
      evidenceRef: `graph.findings[${index}].metric`,
      confidence: "medium",
      limitations: ["Metric belongs to the finding's declared measurement source; it is not a component energy value."]
    })
    : null;
  const evidenceClass = EVIDENCE_CLASS[finding.evidenceClass] ?? "associated";
  const evidenceRef = finding.evidence?.[0]?.ref ?? `graph.findings[${index}]`;
  const limitations = [];
  if (finding.energy?.status === "not-measured") {
    limitations.push("No energy measurement is attached; the finding is not an energy figure.");
  }
  if (finding.evidenceClass === "structural-heuristic") {
    limitations.push("Structural heuristic: a reason to investigate, not a measured cost.");
  }
  if (finding.role && finding.role !== "finding") {
    limitations.push(`Source role is '${finding.role}'.`);
  }
  return {
    id: finding.id,
    sourceId: source.id,
    sourceFindingId: finding.id,
    kind: finding.kind ?? "source-finding",
    title: finding.title ?? finding.kind ?? "Source finding",
    target,
    metric,
    evidenceClass,
    confidence: "unknown",
    evidenceRef,
    limitations
  };
}

function mapLighthouse({ data, source, pagesByUrl, measurements }) {
  const summary = data.lighthouse;
  if (!summary || !Array.isArray(summary.results)) return { pages: [], findings: [], limitations: [] };
  const pages = [];
  const findings = [];
  const limitations = [];
  const version = summary.version ?? null;
  const browser = summary.browser ?? "Chromium";
  const boundary = /simulate/i.test(summary.throttling ?? "") ? "Chromium lab, simulated throttling" : "Chromium lab";
  const method = `Lighthouse ${summary.throttling ?? "configuration not stated"}`;

  const ensurePage = (url) => {
    const normalizedUrl = normalizeUrl(url);
    const existing = pagesByUrl.get(normalizedUrl);
    if (existing) return existing;
    const page = {
      id: stableId("fes-lh-pg", normalizedUrl),
      url,
      normalizedUrl,
      familyId: null,
      sourceIds: [source.id],
      contexts: [{
        browser,
        viewport: null,
        profile: summary.formFactor === "mobile" ? "mobile" : summary.formFactor === "desktop" ? "desktop" : null,
        method,
        sourceId: source.id
      }],
      metrics: [],
      sourceRefs: [createSourceRef(source.id, "lighthouse.results")],
      limitations: ["Page was present in the Lighthouse summary but not in the component graph."]
    };
    pages.push(page);
    pagesByUrl.set(normalizedUrl, page);
    return page;
  };

  const addMetric = (page, name, value, unit, evidenceRef, scope = "page", confidence = "high") => {
    if (typeof value !== "number") return;
    page.metrics.push(createMetric({
      name,
      value,
      unit,
      scope,
      sourceId: source.id,
      measurementSourceId: "lighthouse",
      tool: "lighthouse",
      toolVersion: version,
      browser,
      method,
      boundary,
      evidenceRef,
      confidence,
      limitations: [
        "Lighthouse lab measurement; not field data and not Firefox energy."
      ]
    }));
  };

  for (const [index, result] of summary.results.entries()) {
    const url = result.finalUrl ?? result.requestedUrl;
    if (!url) continue;
    const page = ensurePage(url);
    const lighthouseProfile = summary.formFactor === "mobile"
      ? "mobile"
      : summary.formFactor === "desktop" ? "desktop" : null;
    if (!page.contexts.some((context) => context.method === method && context.profile === lighthouseProfile)) {
      page.contexts.push({
        browser,
        viewport: null,
        profile: lighthouseProfile,
        method,
        sourceId: source.id
      });
    }
    const metrics = result.metrics ?? {};
    addMetric(page, "fcp", metrics.fcpMs, "ms", `lighthouse.results[${index}].metrics.fcpMs`);
    addMetric(page, "lcp", metrics.lcpMs, "ms", `lighthouse.results[${index}].metrics.lcpMs`);
    addMetric(page, "tbt", metrics.tbtMs, "ms", `lighthouse.results[${index}].metrics.tbtMs`);
    addMetric(page, "speed-index", metrics.speedIndexMs, "ms", `lighthouse.results[${index}].metrics.speedIndexMs`);
    addMetric(page, "cls", metrics.cls, "score", `lighthouse.results[${index}].metrics.cls`);
    addMetric(page, "performance-score", result.scores?.performance, "score", `lighthouse.results[${index}].scores.performance`);
    addMetric(page, "main-thread-work", result.work?.mainThreadMs, "ms", `lighthouse.results[${index}].work.mainThreadMs`);
    addMetric(page, "js-execution", result.work?.jsExecutionMs, "ms", `lighthouse.results[${index}].work.jsExecutionMs`);
    addMetric(page, "transfer-bytes", result.work?.totalBytes, "bytes", `lighthouse.results[${index}].work.totalBytes`);
    addMetric(page, "dom-elements", result.work?.domElements, "count", `lighthouse.results[${index}].work.domElements`);
    for (const category of result.work?.mainThreadByCategory ?? []) {
      if (typeof category.ms === "number") {
        page.metrics.push(createMetric({
          name: `main-thread:${category.category}`,
          value: category.ms,
          unit: "ms",
          scope: "page",
          sourceId: source.id,
          measurementSourceId: "lighthouse",
          tool: "lighthouse",
          toolVersion: version,
          browser,
          method,
          boundary,
          evidenceRef: `lighthouse.results[${index}].work.mainThreadByCategory`,
          confidence: "medium",
          limitations: ["Chromium main-thread attribution; not Firefox energy."]
        }));
      }
    }

    for (const [recIndex, recommendation] of (result.recommendations ?? []).entries()) {
      const hasSavings = typeof recommendation.savingsBytes === "number" || typeof recommendation.savingsMs === "number";
      findings.push({
        id: stableId("fes-lh-rec", `${page.id}:${recommendation.id}:${recIndex}`),
        sourceId: source.id,
        sourceFindingId: recommendation.id ?? null,
        kind: "lighthouse-recommendation",
        title: recommendation.title ?? recommendation.id ?? "Lighthouse recommendation",
        target: { type: "page", id: page.id },
        metric: typeof recommendation.savingsBytes === "number"
          ? createMetric({
            name: "lighthouse-savings",
            value: recommendation.savingsBytes,
            unit: "bytes",
            scope: "page",
            sourceId: source.id,
            measurementSourceId: "lighthouse",
            tool: "lighthouse",
            toolVersion: version,
            browser,
            method,
            boundary: "Chromium lab, modelled savings",
            evidenceRef: `lighthouse.results[${index}].recommendations[${recIndex}]`,
            confidence: "medium",
            limitations: ["Estimated savings from a Lighthouse audit, not a measured outcome."]
          })
          : null,
        evidenceClass: hasSavings ? "associated" : "context-only",
        confidence: "medium",
        evidenceRef: `lighthouse.results[${index}].recommendations[${recIndex}]`,
        limitations: ["A Lighthouse recommendation is a candidate improvement, not a measured cost or a confirmed cause."]
      });
    }

    for (const [nodeIndex, node] of (result.evidence?.nodes ?? []).entries()) {
      findings.push({
        id: stableId("fes-lh-node", `${page.id}:${node.audit}:${nodeIndex}`),
        sourceId: source.id,
        sourceFindingId: null,
        kind: "lighthouse-node",
        title: node.title ?? node.audit ?? "Lighthouse node evidence",
        target: { type: "page", id: page.id },
        metric: null,
        evidenceClass: "associated",
        confidence: "low",
        evidenceRef: `lighthouse.results[${index}].evidence.nodes[${nodeIndex}]`,
        limitations: [
          "Lighthouse identified a DOM node; this does not establish component ownership.",
          "The node may not be on every page or in every browser."
        ]
      });
    }
  }

  if (summary.results.length > 0) {
    limitations.push(
      `Lighthouse summary contains ${summary.runsPerUrl ?? "an unknown number of"} run(s) per URL; the source reports per-page values, not a single user's experience.`
    );
  }
  return { pages, findings, limitations };
}

function mapExperiment({ data, source, pagesByUrl }) {
  const experiment = data.experiment;
  const createdPages = [];
  if (!experiment) return { pages: createdPages, experiments: [], findings: [], limitations: [] };
  const url = experiment.url ?? resultPageUrl(data);
  if (!url) return { pages: createdPages, experiments: [], findings: [], limitations: ["Experiment had no page URL."] };
  const normalizedUrl = normalizeUrl(url);
  let page = pagesByUrl.get(normalizedUrl);
  if (!page) {
    page = {
      id: stableId("fes-exp-pg", normalizedUrl),
      url,
      normalizedUrl,
      familyId: null,
      sourceIds: [source.id],
      contexts: [pageContext(data, source.id)],
      metrics: [],
      sourceRefs: [createSourceRef(source.id, "experiment.url")],
      limitations: ["Page was present in the experiment but not in the component graph."]
    };
    pagesByUrl.set(normalizedUrl, page);
    createdPages.push(page);
  }

  const stepNotes = [];
  const findings = [];
  let measured = false;
  let maxRuns = null;
  for (const [index, difference] of (experiment.differences ?? []).entries()) {
    const energy = difference.energy;
    const runs = Array.isArray(difference.runs) ? Math.max(...difference.runs.filter(Number.isInteger), 0) : null;
    if (runs !== null) maxRuns = maxRuns === null ? runs : Math.max(maxRuns, runs);
    if (typeof energy?.differenceMwh === "number") {
      measured = true;
      findings.push({
        id: stableId("fes-exp-result", `${page.id}:${experiment.name}:${difference.step}`),
        sourceId: source.id,
        sourceFindingId: null,
        kind: "experiment-energy-difference",
        title: `Measured energy difference (${difference.step})`,
        target: { type: "page", id: page.id },
        metric: createMetric({
          name: `experiment-delta:${difference.step}`,
          value: energy.differenceMwh,
          unit: "mWh",
          scope: "page",
          sourceId: source.id,
          measurementSourceId: "firefox-energy",
          tool: "firefox-energy-scanner",
          toolVersion: null,
          browser: firefoxBrowser(data),
          method: `experiment:${experiment.variant?.kind ?? experiment.name ?? "unknown"}`,
          boundary: "Firefox observed client energy, interleaved baseline/variant experiment",
          evidenceRef: `experiment.differences[${index}].energy.differenceMwh`,
          confidence: difference.verdict === "different" ? "medium" : "low",
          limitations: [
            difference.reading ?? "The source did not state a reading.",
            "A measured difference between two scenarios on this page; it is not a component energy value and is not generalised site-wide."
          ]
        }),
        evidenceClass: "tested",
        confidence: difference.verdict === "different" ? "medium" : "low",
        evidenceRef: `experiment.differences[${index}]`,
        limitations: [
          difference.reading ?? "The source did not state a reading.",
          "A measured difference between two scenarios on this page; it is not a component energy value and is not generalised site-wide.",
          "Physical energy measurement status is recorded on the experiment; do not convert this mWh difference into CO2e."
        ]
      });
    }
    stepNotes.push(
      `${difference.step}: ${difference.reading ?? difference.verdict ?? "no reading"}`
      + (typeof energy?.differenceMwh === "number" ? ` (${energy.differenceMwh} mWh)` : "")
    );
  }

  const experiments = [{
    id: stableId("fes-exp", `${url}:${experiment.name ?? experiment.variant?.kind ?? "experiment"}`),
    sourceId: source.id,
    hypothesis: null,
    intervention: {
      kind: experiment.variant?.kind ?? null,
      selector: experiment.variant?.selector ?? null,
      description: experiment.description ?? null
    },
    workload: {
      pageId: page.id,
      idleMs: Number.isInteger(data.configuration?.idleMs) ? data.configuration.idleMs : null,
      journey: data.configuration?.journey ?? null
    },
    baseline: experiment.sides?.baseline ?? null,
    variant: experiment.sides?.variant ?? null,
    validationChecks: Array.isArray(experiment.differences)
      ? [`Source applied: ${experiment.applied?.ok === true ? "yes" : "no"}`, `Assertion checks: ${experiment.assertions?.checked ?? "unknown"}`]
      : [],
    results: {
      status: experiment.applied?.ok === true ? "completed" : "failed",
      delta: null,
      unit: "mWh",
      runs: maxRuns,
      recordedAt: collectedAt(data),
      notes: stepNotes
    },
    physicalEnergyStatus: measured ? "measured" : "not-measured",
    sourceRefs: [createSourceRef(source.id, "experiment")]
  }];

  return {
    pages: createdPages,
    experiments,
    findings,
    limitations: [
      "The experiment adapter preserves measured step differences but does not select one step as the experiment's headline result.",
      "A negative difference means the variant measured lower; it is not a predicted saving."
    ]
  };
}

/**
 * Adapter B: import a Firefox Energy Scanner result.
 *
 * Preserves graph IDs (pages, component types, instances, resources, findings)
 * and source measurement boundaries. It does not convert structural counts,
 * Lighthouse values or Chromium trace evidence into Firefox energy.
 *
 * @param {{data: unknown, source: object}} input
 * @returns {object} Adapter fragment
 */
export function adaptFirefoxEnergyScanner({ data, source }) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new EvidenceAdapterError("Firefox Energy Scanner result must be a JSON object.", "invalid-result");
  }
  const version = data.schemaVersion;
  if (!SUPPORTED_RESULT_SCHEMA_VERSIONS.has(version)) {
    throw new EvidenceAdapterError(
      `Unsupported Firefox Energy Scanner result schemaVersion '${version}'. Supported: ${[...SUPPORTED_RESULT_SCHEMA_VERSIONS].join(", ")}.`,
      "unsupported-version"
    );
  }

  const graph = data.graph;
  if (graph && graph.schema !== SUPPORTED_GRAPH_SCHEMA) {
    throw new EvidenceAdapterError(
      `Unsupported component graph schema '${graph.schema}'. Expected '${SUPPORTED_GRAPH_SCHEMA}'.`,
      "unsupported-graph-version"
    );
  }
  if (!graph && !data.lighthouse) {
    throw new EvidenceAdapterError(
      "Firefox Energy Scanner result has no component graph and no Lighthouse summary. "
      + "Rebuild the graph with `web-energy graph <result.json>` or provide a result that contains evidence.",
      "missing-graph"
    );
  }

  const { map: measurements, out: measurementSources } = measurementSourceMap(graph, data, source.id);
  const pagesByUrl = new Map();
  const pages = [];
  const pageFamilies = familyRecords(data, graph, source.id);
  const familyIds = new Set(pageFamilies.map((family) => family.id));
  const componentTypes = [];
  const componentInstances = [];
  const resources = [];
  const findings = [];
  const limitations = [];

  for (const [index, page] of (graph?.pages ?? []).entries()) {
    if (!page.id || !page.url) {
      throw new EvidenceAdapterError(`Graph page ${index} is missing an id or URL.`, "missing-page");
    }
    const normalizedUrl = normalizeUrl(page.url);
    const metrics = [];
    for (const [name, entry] of Object.entries(page.metrics ?? {})) {
      const metric = metricFromEntry({
        name,
        entry,
        sourceId: source.id,
        measurements,
        evidenceRef: `graph.pages[${index}].metrics.${name}`
      });
      if (metric) metrics.push(metric);
    }
    const record = {
      id: page.id,
      url: page.url,
      normalizedUrl,
      familyId: page.family && familyIds.has(page.family) ? page.family : null,
      sourceIds: [source.id],
      contexts: [pageContext(data, source.id)],
      metrics,
      sourceRefs: [createSourceRef(source.id, `graph.pages[${index}]`)],
      limitations: page.family && !familyIds.has(page.family)
        ? [`Page family '${page.family}' was not described elsewhere in the result.`]
        : []
    };
    pages.push(record);
    pagesByUrl.set(normalizedUrl, record);
  }

  for (const [index, type] of (graph?.types ?? []).entries()) {
    if (!type.id || !type.signature) {
      throw new EvidenceAdapterError(`Graph component type ${index} is missing an id or signature.`, "missing-component-type");
    }
    componentTypes.push({
      id: type.id,
      sourceId: source.id,
      sourceComponentId: type.id,
      signature: type.signature,
      label: type.signature,
      identificationMethod: type.identification ?? (type.method === "annotation" ? "annotation" : "unknown"),
      confidence: type.confidence ?? "unknown",
      pageFamilyIds: (type.families ?? []).filter((id) => familyIds.has(id)),
      instanceIds: [...(type.instances ? [] : [])],
      resourceIds: [],
      findingIds: [],
      possibleDuplicateOf: [],
      limitations: [
        `Identification method: ${type.method ?? type.identification ?? "unknown"}; matched by ${(type.matchedBy ?? []).join(", ") || "source did not say"}.`,
        ...(type.container ? ["Container: owns a small share of the elements it holds; not credited with its contents."] : [])
      ]
    });
  }

  const typeIds = new Set(componentTypes.map((type) => type.id));
  const pageIds = new Set(pages.map((page) => page.id));
  for (const [index, instance] of (graph?.instances ?? []).entries()) {
    if (!instance.id || !instance.page || !instance.type) {
      throw new EvidenceAdapterError(`Graph component instance ${index} is missing an id, page or type.`, "missing-instance");
    }
    if (!pageIds.has(instance.page)) {
      limitations.push(`Component instance '${instance.id}' references missing page '${instance.page}'; it was omitted.`);
      continue;
    }
    if (!typeIds.has(instance.type)) {
      limitations.push(`Component instance '${instance.id}' references missing type '${instance.type}'; it was omitted.`);
      continue;
    }
    componentInstances.push({
      id: instance.id,
      sourceId: source.id,
      pageId: instance.page,
      typeId: instance.type,
      selector: instance.selector ?? null,
      parentId: null,
      childIds: [...(instance.children ?? [])],
      resourceIds: [...(instance.resources ?? [])],
      findingIds: [],
      sourceRefs: [createSourceRef(source.id, `graph.instances[${index}]`)],
      limitations: []
    });
  }

  for (const [index, resource] of (graph?.resources ?? []).entries()) {
    if (!resource.id) {
      throw new EvidenceAdapterError(`Graph resource ${index} is missing an id.`, "missing-resource");
    }
    const url = mapResourceUrl(resource, data);
    if (!url) {
      limitations.push(`Resource '${resource.id}' had no resolvable URL and was omitted.`);
      continue;
    }
    const pagesLoading = (graph.pages ?? []).filter((page) => (page.resources ?? []).includes(resource.id)).map((page) => page.id);
    resources.push({
      id: resource.id,
      sourceId: source.id,
      url,
      normalizedUrl: normalizeUrl(url),
      kind: RESOURCE_KIND[String(resource.kind ?? "").toLowerCase()] ?? "other",
      thirdParty: typeof resource.thirdParty === "boolean" ? resource.thirdParty : null,
      sizeBytes: typeof resource.transferBytes?.median === "number"
        ? resource.transferBytes.median
        : typeof resource.transferBytes === "number" ? resource.transferBytes : null,
      sizeStatistic: typeof resource.transferBytes?.median === "number" ? "median" : typeof resource.transferBytes === "number" ? "single" : null,
      timingMs: typeof resource.durationMs === "number" ? resource.durationMs : null,
      pageIds: pagesLoading,
      instanceIds: [...(resource.loadedBy ?? [])],
      attribution: (resource.loadedBy ?? []).length > 0 ? "direct" : "page-level",
      sourceRefs: [createSourceRef(source.id, `graph.resources[${index}]`)],
      limitations: [
        resource.scope ? `Source scope: ${resource.scope}.` : "Source scope not stated.",
        ...(typeof resource.transferBytes?.max === "number" && resource.transferBytes.max !== resource.transferBytes.median
          ? [`Source also reported a max transfer of ${resource.transferBytes.max} bytes; the median is retained.`]
          : [])
      ]
    });
  }

  for (const [index, finding] of (graph?.findings ?? []).entries()) {
    if (!finding.id) throw new EvidenceAdapterError(`Graph finding ${index} is missing an id.`, "missing-finding");
    findings.push(mapFinding({ finding, index, data, source, measurements, pageIdByUrl: pagesByUrl }));
    // A graph finding may target an unattributed item; represent it against the
    // site rather than inventing a component owner.
    if (TARGET_TYPE[finding.target?.type] === "site") {
      findings.at(-1).limitations.push("The source could not attribute this observation to a page or component.");
    }
  }

  const lighthouse = mapLighthouse({ data, source, pagesByUrl, measurements });
  pages.push(...lighthouse.pages);
  findings.push(...lighthouse.findings);
  limitations.push(...lighthouse.limitations);

  const experiment = mapExperiment({ data, source, pagesByUrl });
  pages.push(...experiment.pages ?? []);
  findings.push(...experiment.findings);
  limitations.push(...experiment.limitations);

  if (data.timelines) {
    limitations.push("Energy timeline data is present but not yet adapted in PR 2; raw timelines remain in the source artifact.");
  }
  if (data.capabilities?.unavailable) {
    for (const item of data.capabilities.unavailable) {
      limitations.push(`Source capability unavailable: ${item.metric} — ${item.reason}.`);
    }
  }
  for (const warning of data.warnings ?? []) limitations.push(`Source warning: ${warning}`);
  for (const limitation of graph?.limitations ?? []) limitations.push(limitation);

  return {
    sourceMeta: {
      tool: "firefox-energy-scanner",
      toolVersion: null,
      collectedAt: collectedAt(data),
      schemaVersion: String(version),
      limitations: [
        "Firefox Energy Scanner component, page, instance, resource and finding IDs are preserved.",
        ...(data.timelines ? ["Timeline records were not adapted in PR 2."] : [])
      ]
    },
    pages,
    pageFamilies,
    componentTypes,
    componentInstances,
    resources,
    findings,
    experiments: experiment.experiments,
    investigation: Array.isArray(data.investigation?.items)
      ? data.investigation.items.map((item, index) => ({
        rank: item.rank ?? index + 1,
        id: item.id ?? `fes-investigation-${index + 1}`,
        kind: item.kind ?? "item",
        title: item.title ?? item.id ?? `Investigation item ${index + 1}`,
        evidence: item.evidence ?? "unknown",
        because: item.because ?? [],
        reach: item.reach ?? { pages: 0, of: 0, families: 0 },
        workload: Object.fromEntries(
          Object.entries(item.workload ?? {}).filter(([key]) => [
            "elements",
            "shareOfPage",
            "endlessAnimations",
            "chromiumMainThreadMs",
            "transferBytes"
          ].includes(key))
        ),
        remediation: (item.remediation ?? []).map((remediation) => (
          typeof remediation === "string"
            ? remediation
            : `${remediation.id ?? "remediation"} — ${remediation.title ?? ""}: ${remediation.action ?? remediation.rationale ?? ""}`.trim()
        )),
        confidence: item.confidence ?? "unknown",
        where: (item.where ?? []).map((where) => ({
          page: where.page,
          selector: where.selector ?? null,
          rect: where.rect ?? null,
          belowFold: where.belowFold ?? null
        })),
        audits: item.audits ?? [],
        sourceId: source.id
      }))
      : [],
    measurementSources,
    coverage: graph
      ? {
        discoveredPages: null,
        inspectedPages: graph.pages?.length ?? null,
        basis: "Firefox Energy Scanner component graph pages",
        limitations: [
          "A crawl's graph contains the pages it measured, not the site's full inventory.",
          ...(data.sampling ? ["A sampling section is present; it is not adapted as a site-wide coverage claim."] : [])
        ]
      }
      : null,
    limitations
  };
}
