import {
  createMetric,
  createSourceRef,
  normalizeUrl,
  stableId
} from "../performance-evidence.mjs";
import { EvidenceAdapterError } from "./errors.mjs";

export const VITAL_CORE_ADAPTER_VERSION = "1.0.0";

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function domainFrom(data) {
  return data.key ?? data.domain ?? null;
}

function pageFamilyEntries(scope) {
  const container = scope?.page_families ?? scope?.pageFamilies;
  if (!container) return [];
  if (Array.isArray(container)) return container;
  if (Array.isArray(container.families)) return container.families;
  if (isObject(container.families)) {
    return Object.entries(container.families)
      .filter(([, value]) => isObject(value))
      .map(([key, value]) => ({ id: key, ...value }));
  }
  if (isObject(container)) {
    const entries = Object.entries(container).filter(([, value]) => isObject(value));
    const looksLikeFamilyMap = entries.length > 0 && entries.every(([key, value]) => (
      key.startsWith("pf-")
      || "label" in value
      || "name" in value
      || "urls" in value
      || "url_count" in value
    ));
    if (looksLikeFamilyMap) return entries.map(([key, value]) => ({ id: key, ...value }));
  }
  return [];
}

function asEntryList(container) {
  if (Array.isArray(container)) return container;
  if (isObject(container)) {
    return Object.entries(container)
      .filter(([, value]) => isObject(value))
      .map(([key, value]) => ({ id: key, ...value }));
  }
  return [];
}

function componentEntries(scope) {
  const out = [];
  const shared = scope?.shared_components ?? scope?.sharedComponents;
  out.push(...asEntryList(shared?.components));
  const groups = scope?.component_groups ?? scope?.componentGroups;
  out.push(...asEntryList(groups?.groups));
  return out;
}

function representativeUrls(finding, limit = 2) {
  const urls = [];
  const sample = finding?.reporting?.distinct_urls?.sample;
  if (Array.isArray(sample)) urls.push(...sample);
  const representative = finding?.reporting?.representative_evidence;
  if (Array.isArray(representative)) {
    for (const item of representative) {
      if (typeof item?.url === "string") urls.push(item.url);
    }
  }
  if (typeof finding?.url === "string") urls.push(finding.url);
  if (typeof finding?.evidence_reference?.url === "string") urls.push(finding.evidence_reference.url);
  return [...new Set(urls)].slice(0, limit);
}

function confidenceFrom(value) {
  if (value === "high" || value === "medium" || value === "low") return value;
  return "unknown";
}

function latestSeries(data) {
  const series = data?.weekly?.series;
  return Array.isArray(series) && series.length > 0 ? series.at(-1) : null;
}

/**
 * Adapter C: import a Vital Core snapshot or weekly findings payload.
 *
 * Vital Core already computes CO2.js Sustainable Web Design figures. Those
 * figures are imported with their aggregation scope and model version noted;
 * they are never recalculated, summed with Firefox energy, or presented as a
 * component measurement.
 *
 * @param {{data: unknown, source: object}} input
 * @returns {object} Adapter fragment
 */
export function adaptVitalCore({ data, source }) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new EvidenceAdapterError("Vital Core evidence must be a JSON object.", "invalid-payload");
  }
  if (Array.isArray(data.domains) && !data.key && !data.findings) {
    throw new EvidenceAdapterError(
      "This is the Vital Core domain index, not a domain snapshot. "
      + "Point the source at the domain's snapshot.json or weekly findings.json.",
      "index-only"
    );
  }

  const domain = domainFrom(data);
  if (!domain) {
    throw new EvidenceAdapterError("Vital Core payload has no domain/key field.", "missing-domain");
  }
  const series = latestSeries(data);
  const scope = data.scope_of_analysis ?? series ?? null;
  const pages = [];
  const pagesByUrl = new Map();
  const pageFamilies = [];
  const familyByKey = new Map();
  const componentTypes = [];
  const componentByKey = new Map();
  const findings = [];
  const metrics = [];
  const limitations = [];
  const seenFindingIds = new Set();

  const ensurePage = (url, familyKey = null) => {
    let normalizedUrl;
    try {
      normalizedUrl = normalizeUrl(url);
    } catch {
      return null;
    }
    const existing = pagesByUrl.get(normalizedUrl);
    if (existing) {
      if (familyKey && !existing.familyId) existing.familyId = familyKey;
      return existing;
    }
    const page = {
      id: stableId("vc-pg", normalizedUrl),
      url,
      normalizedUrl,
      familyId: familyKey,
      sourceIds: [source.id],
      contexts: [{
        browser: null,
        viewport: null,
        profile: null,
        method: "vital-core-scan",
        sourceId: source.id
      }],
      metrics: [],
      sourceRefs: [createSourceRef(source.id, "reporting.distinct_urls.sample")],
      limitations: [
        "Vital Core publishes a sample of stored URLs, not a complete page inventory.",
        "Per-page browser and viewport are not present in this payload."
      ]
    };
    pages.push(page);
    pagesByUrl.set(normalizedUrl, page);
    return page;
  };

  const ensureFamily = (key, label, basis = "configured-route") => {
    if (!key) return null;
    if (familyByKey.has(key)) return familyByKey.get(key);
    const id = stableId("vc-pf", key);
    const family = {
      id,
      label: label ?? key,
      sourceId: source.id,
      basis,
      pageIds: [],
      limitations: [
        "Vital Core page families are configured route groups; they are not a measured structural clustering."
      ]
    };
    familyByKey.set(key, id);
    pageFamilies.push(family);
    return id;
  };

  for (const family of pageFamilyEntries(scope)) {
    const key = family.id ?? family.key ?? family.name;
    if (!key) continue;
    const familyId = ensureFamily(key, family.label ?? family.name ?? key);
    const urls = Array.isArray(family.urls) ? family.urls : [];
    for (const url of urls) {
      const page = ensurePage(url, familyId);
      if (page && !page.familyId) page.familyId = familyId;
      const familyRecord = pageFamilies.find((entry) => entry.id === familyId);
      if (page && familyRecord && !familyRecord.pageIds.includes(page.id)) familyRecord.pageIds.push(page.id);
    }
    const record = pageFamilies.find((entry) => entry.id === familyId);
    if (record) {
      record.limitations.push(
        `Vital Core reports ${family.url_count ?? family.urls ?? "an unstated number of"} URL(s); only explicit URL samples are imported as pages.`
      );
    }
  }

  for (const component of componentEntries(scope)) {
    const key = component.id ?? component.key ?? component.component ?? component.label;
    if (!key) continue;
    // shared_components uses `site-nav`; component_groups uses
    // `component:site-nav` for the same configured component. Normalize the
    // prefix so one configured component does not become two types.
    const componentKey = String(key).replace(/^component:/, "");
    if (componentByKey.has(componentKey)) continue;
    const typeId = stableId("vc-ct", componentKey);
    componentByKey.set(componentKey, typeId);
    componentTypes.push({
      id: typeId,
      sourceId: source.id,
      sourceComponentId: componentKey.startsWith("component:") ? componentKey : `component:${componentKey}`,
      signature: `configured:${componentKey}`,
      label: component.label ?? component.name ?? componentKey,
      identificationMethod: "configured-signature",
      confidence: confidenceFrom(component.confidence),
      pageFamilyIds: [],
      instanceIds: [],
      resourceIds: [],
      findingIds: [],
      possibleDuplicateOf: [],
      limitations: [
        "Vital Core shared components are configured accessibility signatures or bounded examples, not proven performance attribution.",
        "A configured component group does not establish ownership of a performance problem."
      ]
    });
  }

  const sourceFindings = Array.isArray(data.findings)
    ? data.findings
    : isObject(data.findings) ? Object.values(data.findings) : [];
  const findingLimit = 25;
  for (const [index, finding] of sourceFindings.slice(0, findingLimit).entries()) {
    const familyKey = typeof finding?.reporting?.page_family === "string"
      ? finding.reporting.page_family
      : finding?.reporting?.page_family?.key ?? finding?.reporting?.page_family?.id ?? null;
    const familyId = familyKey ? ensureFamily(familyKey, finding.reporting?.page_family?.label ?? familyKey) : null;
    const urls = representativeUrls(finding);
    let target = { type: "site", id: stableId("site", domain, 12) };
    for (const url of urls) {
      const page = ensurePage(url, familyId);
      if (page && target.type === "site") target = { type: "page", id: page.id };
    }

    const baseId = finding.finding_ref ?? stableId("vc-fnd", `${index}:${finding.finding_id ?? finding.rule_id ?? "finding"}`);
    let id = baseId;
    if (seenFindingIds.has(id)) id = `${baseId}-${finding.occurrence_id ?? index}`;
    seenFindingIds.add(id);

    const componentScope = finding.reporting?.component_scope ?? null;
    const limitationNotes = [
      "Accessibility finding retained as context only; it is not a performance defect.",
      "Vital Core component scope is derived from accessibility evidence, configured signatures or bounded examples."
    ];
    if (componentScope?.classification) {
      limitationNotes.push(`Component scope classification: ${componentScope.classification}; ownership established: ${componentScope.ownership_established === true}.`);
    }
    findings.push({
      id,
      sourceId: source.id,
      sourceFindingId: finding.finding_ref ?? finding.finding_id ?? null,
      kind: "accessibility-context",
      title: finding.rule_label ?? finding.rule_id ?? "Vital Core accessibility finding",
      target,
      metric: null,
      evidenceClass: "context-only",
      confidence: confidenceFrom(finding.reporting?.remediation_priority?.conformance_tier),
      evidenceRef: finding.occurrence_id ?? finding.finding_ref ?? `findings[${index}]`,
      limitations: limitationNotes
    });
  }
  if (sourceFindings.length > findingLimit) {
    limitations.push(
      `Vital Core payload contained ${sourceFindings.length} findings; only the first ${findingLimit} are imported as accessibility context. The source remains the complete record.`
    );
  }

  const addSiteMetric = ({ name, value, unit, scope: metricScope = "site", method, boundary, evidenceClass = "associated", tool = "vital-core", limitations: metricLimitations = [] }) => {
    if (typeof value !== "number" || !Number.isFinite(value)) return;
    metrics.push({
      name,
      metric: createMetric({
        name,
        value,
        unit,
        scope: metricScope,
        sourceId: source.id,
        measurementSourceId: null,
        tool,
        toolVersion: null,
        browser: null,
        method,
        boundary,
        evidenceRef: data.week ? `weekly.findings.${data.week}` : "weekly.series",
        confidence: "medium",
        limitations: metricLimitations
      }),
      evidenceClass
    });
  };

  const sustainability = series?.sustainability ?? data.sustainability ?? null;
  if (isObject(sustainability)) {
    addSiteMetric({
      name: "transfer-bytes-median",
      value: sustainability.medianBytes,
      unit: "bytes",
      scope: "median-over-pages",
      method: "Vital Core sustainability collector, decoded body sizes",
      boundary: "modelled-transfer",
      limitations: [
        "Bytes are decoded body sizes observed by the source browser, not on-wire transfer sizes."
      ]
    });
    addSiteMetric({
      name: "requests-median",
      value: sustainability.medianRequests,
      unit: "requests",
      scope: "median-over-pages",
      method: "Vital Core sustainability collector",
      boundary: "modelled-transfer"
    });
    addSiteMetric({
      name: "co2e-mean-per-page",
      value: sustainability.meanCo2g,
      unit: "gCO2e",
      scope: "median-over-pages",
      method: `CO2.js ${series?.environment?.co2jsVersion ?? data?.environment?.co2jsVersion ?? "version not stated"} Sustainable Web Design v4, imported from Vital Core`,
      boundary: "modelled-transfer",
      limitations: [
        "Modelled emissions from transferred bytes; not physically measured client energy.",
        "Imported from Vital Core; not recalculated by Open Scans."
      ]
    });
    addSiteMetric({
      name: "co2e-total",
      value: sustainability.totalCo2g,
      unit: "gCO2e",
      scope: "site",
      method: "CO2.js Sustainable Web Design v4, imported from Vital Core",
      boundary: "modelled-transfer",
      limitations: [
        "A source-reported total across its sampled pages, not an annual site-wide emissions claim."
      ]
    });
    addSiteMetric({
      name: "modelled-energy-mean-per-page",
      value: sustainability.meanEnergyWh,
      unit: "Wh",
      scope: "median-over-pages",
      method: "CO2.js Sustainable Web Design v4 energy segment, imported from Vital Core",
      boundary: "modelled-transfer",
      limitations: [
        "Modelled energy derived from transferred bytes; not observed client energy and not a Firefox measurement."
      ]
    });
    addSiteMetric({
      name: "modelled-energy-total",
      value: sustainability.totalEnergyWh,
      unit: "Wh",
      scope: "site",
      method: "CO2.js Sustainable Web Design v4 energy segment, imported from Vital Core",
      boundary: "modelled-transfer",
      limitations: [
        "A source-reported modelled total, not a measurement and not an annual site-wide claim."
      ]
    });
  }

  const lighthouse = series?.lighthouse ?? data.lighthouse ?? null;
  if (isObject(lighthouse)) {
    const lhMetrics = lighthouse.metrics ?? {};
    const lhMethod = "Vital Core weekly Lighthouse sample median";
    const lhBoundary = "Chromium lab, aggregated across sampled pages";
    for (const [name, key] of [
      ["fcp", "firstContentfulPaintMs"],
      ["lcp", "largestContentfulPaintMs"],
      ["speed-index", "speedIndexMs"],
      ["tbt", "totalBlockingTimeMs"],
      ["cls", "cumulativeLayoutShift"]
    ]) {
      addSiteMetric({
        name,
        value: lhMetrics[key],
        unit: name === "cls" ? "score" : "ms",
        scope: "median-over-pages",
        method: lhMethod,
        boundary: lhBoundary,
        limitations: [
          "Aggregated median across a source sample; not a per-page measurement.",
          "Vital Core does not publish the Lighthouse version or throttling configuration in this payload."
        ]
      });
    }
    addSiteMetric({
      name: "performance-score",
      value: lighthouse.medianPerformance,
      unit: "score",
      scope: "median-over-pages",
      method: lhMethod,
      boundary: lhBoundary,
      limitations: ["Aggregated median; not a page score."]
    });
    for (const [index, recommendation] of (lighthouse.recommendations ?? []).entries()) {
      findings.push({
        id: stableId("vc-lh-rec", `${domain}:${recommendation.id ?? index}`),
        sourceId: source.id,
        sourceFindingId: recommendation.id ?? null,
        kind: "lighthouse-recommendation",
        title: recommendation.title ?? recommendation.id ?? "Lighthouse recommendation",
        target: { type: "site", id: stableId("site", domain, 12) },
        metric: typeof recommendation.savingsBytes === "number"
          ? createMetric({
            name: "lighthouse-savings",
            value: recommendation.savingsBytes,
            unit: "bytes",
            scope: "site",
            sourceId: source.id,
            measurementSourceId: null,
            tool: "lighthouse",
            toolVersion: null,
            browser: null,
            method: lhMethod,
            boundary: "Chromium lab, modelled savings",
            evidenceRef: `lighthouse.recommendations[${index}]`,
            confidence: "medium",
            limitations: ["Estimated savings, not a measured outcome."]
          })
          : null,
        evidenceClass: "associated",
        confidence: "medium",
        evidenceRef: `lighthouse.recommendations[${index}]`,
        limitations: [
          "Vital Core recommendation; preserve its sample totals and per-page distribution when available.",
          "Do not present a Lighthouse saving as a guaranteed improvement."
        ]
      });
    }
  }

  for (const entry of metrics) {
    findings.push({
      id: stableId("vc-metric", `${domain}:${entry.name}:${entry.metric.scope}`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: entry.metric.tool === "lighthouse" ? "lighthouse-summary-metric" : "sustainability-metric",
      title: entry.name,
      target: { type: "site", id: stableId("site", domain, 12) },
      metric: entry.metric,
      evidenceClass: entry.evidenceClass,
      confidence: "medium",
      evidenceRef: entry.metric.evidenceRef,
      limitations: entry.metric.limitations
    });
  }

  const coverage = data.coverage ?? series?.coverage ?? null;
  const inventory = data.inventory ?? series?.inventory ?? null;
  const pageCount = Number.isInteger(data.pages_scanned) ? data.pages_scanned : null;

  return {
    sourceMeta: {
      tool: "vital-core",
      toolVersion: null,
      collectedAt: data.generated_at ?? series?.generatedAt ?? null,
      schemaVersion: data.schema_version != null ? String(data.schema_version) : null,
      limitations: [
        "Vital Core figures are aggregated or sample-based, not per-page performance ownership.",
        ...limitations
      ]
    },
    pages,
    pageFamilies,
    componentTypes,
    componentInstances: [],
    resources: [],
    findings,
    experiments: [],
    investigation: [],
    measurementSources: [],
    coverage: {
      discoveredPages: Number.isInteger(inventory?.totalKnownPages) ? inventory.totalKnownPages : null,
      inspectedPages: Number.isInteger(coverage?.pages_scanned) ? coverage.pages_scanned : pageCount,
      basis: "Vital Core coverage fields; known_urls_estimate is an inventory estimate, not an authoritative crawl.",
      limitations: [
        coverage?.known_urls_note ?? "The source's page inventory is an estimate where stated.",
        "Vital Core does not publish a complete URL inventory in this payload."
      ]
    },
    limitations: [
      "Vital Core shared-component and page-family groupings are not performance measurements.",
      "CO2.js figures imported from Vital Core are modelled transfer emissions, never observed client energy."
    ]
  };
}
