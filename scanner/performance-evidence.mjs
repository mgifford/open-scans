import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const schemaPath = new URL("./schemas/performance-evidence.schema.json", import.meta.url);
const evidenceSchema = JSON.parse(readFileSync(schemaPath, "utf8"));

/** The common adapter format. It does not replace any source tool's own schema. */
export const PERFORMANCE_EVIDENCE_SCHEMA_VERSION = "performance-evidence/1";
export const PERFORMANCE_EVIDENCE_ADAPTER_VERSION = "1.0.0";

const SOURCE_PRIORITY = Object.freeze({
  "firefox-energy-scanner": 0,
  "vital-core": 1,
  "open-scans-report": 2,
  "open-site-review": 3
});

/**
 * Normalize a URL for identity comparisons. Fragments are dropped; query
 * parameters are sorted but not removed, so distinct query variants remain
 * distinct (matching Vital Core's page-identity rule).
 * @param {string} rawUrl
 * @returns {string}
 */
export function normalizeUrl(rawUrl) {
  const parsed = new URL(String(rawUrl));
  parsed.hash = "";
  parsed.hostname = parsed.hostname.toLowerCase();
  const sorted = [...parsed.searchParams.entries()].sort(([a, av], [b, bv]) => (a === b ? av.localeCompare(bv) : a.localeCompare(b)));
  parsed.search = "";
  for (const [key, value] of sorted) parsed.searchParams.append(key, value);
  if ((parsed.protocol === "http:" && parsed.port === "80") || (parsed.protocol === "https:" && parsed.port === "443")) {
    parsed.port = "";
  }
  return parsed.toString();
}

export function sha256(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

/** A deterministic identifier for records that have no source-provided ID. */
export function stableId(prefix, value, length = 8) {
  return `${prefix}-${sha256(value).slice(0, length)}`;
}

export function createSourceRecord({
  id,
  type,
  adapter,
  adapterVersion = PERFORMANCE_EVIDENCE_ADAPTER_VERSION,
  tool,
  toolVersion = null,
  location,
  locationKind,
  collectedAt = null,
  importedAt,
  contentDigest,
  schemaVersion = null,
  limitations = []
}) {
  return {
    id: id ?? `src-${sha256(`${type}\u0000${location}\u0000${contentDigest}`).slice(0, 12)}`,
    type,
    adapter,
    adapterVersion,
    tool,
    toolVersion,
    location,
    locationKind,
    collectedAt,
    importedAt,
    contentDigest,
    schemaVersion,
    limitations: [...limitations]
  };
}

export function createMetric({
  name,
  value,
  unit,
  scope,
  sourceId,
  measurementSourceId = null,
  tool,
  toolVersion = null,
  browser = null,
  method,
  boundary,
  evidenceRef = null,
  confidence = "unknown",
  limitations = []
}) {
  return {
    name,
    value: value === undefined ? null : value,
    unit,
    scope,
    sourceId,
    measurementSourceId,
    tool,
    toolVersion,
    browser,
    method,
    boundary,
    evidenceRef,
    confidence,
    limitations: [...limitations]
  };
}

export function createSourceRef(sourceId, ref) {
  return { sourceId, ref: String(ref) };
}

function emptyFragment() {
  return {
    sourceMeta: null,
    pages: [],
    pageFamilies: [],
    componentTypes: [],
    componentInstances: [],
    resources: [],
    findings: [],
    experiments: [],
    investigation: [],
    measurementSources: [],
    coverage: null,
    limitations: []
  };
}

function uniqueBy(items, key) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const value = key(item);
    if (seen.has(value)) continue;
    seen.add(value);
    out.push(item);
  }
  return out;
}

function metricKey(metric) {
  return [
    metric.sourceId,
    metric.measurementSourceId,
    metric.name,
    metric.unit,
    metric.scope,
    metric.browser,
    metric.method,
    metric.value
  ].join("\u0000");
}

function mergePage(existing, incoming, decision) {
  existing.sourceIds = [...new Set([...existing.sourceIds, ...incoming.sourceIds])];
  existing.contexts = uniqueBy([...existing.contexts, ...incoming.contexts], (context) => (
    `${context.sourceId}\u0000${context.browser}\u0000${context.profile}\u0000${context.method}`
  ));
  existing.metrics = uniqueBy([...existing.metrics, ...incoming.metrics], metricKey);
  existing.sourceRefs = uniqueBy([...existing.sourceRefs, ...incoming.sourceRefs], (ref) => `${ref.sourceId}\u0000${ref.ref}`);
  existing.limitations = [...new Set([...existing.limitations, ...incoming.limitations])];
  if (!existing.familyId && incoming.familyId) {
    existing.familyId = incoming.familyId;
  } else if (existing.familyId && incoming.familyId && existing.familyId !== incoming.familyId) {
    decision.differences.push(
      `Page family differs: kept '${existing.familyId}', other source reported '${incoming.familyId}'. Both families remain as separate records.`
    );
  }
  if (existing.url !== incoming.url) {
    decision.differences.push(`Original URLs differ: kept '${existing.url}', other source reported '${incoming.url}'.`);
  }
}

function mergeResource(existing, incoming, decision) {
  existing.pageIds = [...new Set([...existing.pageIds, ...incoming.pageIds])];
  existing.instanceIds = [...new Set([...existing.instanceIds, ...incoming.instanceIds])];
  existing.sourceRefs = uniqueBy([...existing.sourceRefs, ...incoming.sourceRefs], (ref) => `${ref.sourceId}\u0000${ref.ref}`);
  existing.limitations = [...new Set([...existing.limitations, ...incoming.limitations])];
  if (existing.attribution === "inferred" && incoming.attribution === "direct") existing.attribution = "direct";
  if (existing.sizeBytes === null && incoming.sizeBytes !== null) {
    existing.sizeBytes = incoming.sizeBytes;
    existing.sizeStatistic = incoming.sizeStatistic;
  } else if (existing.sizeBytes !== null && incoming.sizeBytes !== null && existing.sizeBytes !== incoming.sizeBytes) {
    decision.differences.push(
      `Resource size differs: kept ${existing.sizeBytes} (${existing.sizeStatistic}), other source reported ${incoming.sizeBytes}. Not averaged.`
    );
  }
  if (existing.timingMs === null && incoming.timingMs !== null) existing.timingMs = incoming.timingMs;
}

/**
 * Assemble adapter fragments into one validated performance-evidence package.
 * @param {object} input
 * @param {object} input.request - A validated performance-request/1 object
 * @param {Array<{source: object, fragment: object}>} input.inputs
 * @param {string} [input.generatedAt]
 * @returns {{ok: boolean, errors: string[], warnings: string[], value: object|null}}
 */
export function assemblePerformanceEvidence({ request, inputs, generatedAt = new Date().toISOString() }) {
  const warnings = [];
  const errors = [];
  const now = generatedAt;
  const seenSourceIds = new Set();
  const normalizedInputs = (inputs ?? [])
    .filter(({ source }) => {
      if (!source?.id) return true;
      if (seenSourceIds.has(source.id)) {
        warnings.push(`Duplicate evidence source '${source.id}' was supplied more than once; the extra copy was ignored.`);
        return false;
      }
      seenSourceIds.add(source.id);
      return true;
    })
    .map(({ source, fragment }) => ({
      source,
      fragment: { ...emptyFragment(), ...(fragment ?? {}) }
    }));

  const sources = uniqueBy(normalizedInputs.map(({ source }) => source).filter(Boolean), (source) => source.id);
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const pageIdAliases = new Map();
  const resourceIdAliases = new Map();
  const typeIdAliasesBySource = new Map();
  const instanceIdAliasesBySource = new Map();
  const mergeDecisions = [];

  const site = {
    id: stableId("site", request.site.host, 12),
    origin: request.site.origin,
    host: request.site.host,
    sourceIds: sources.map((source) => source.id),
    coverage: {
      discoveredPages: null,
      inspectedPages: null,
      basis: "No source reported a page inventory.",
      limitations: []
    }
  };

  const evidence = {
    schema: PERFORMANCE_EVIDENCE_SCHEMA_VERSION,
    generatedAt: now,
    request: {
      requestId: request.requestId,
      mode: request.mode,
      contractVersion: request.schemaVersion
    },
    site,
    sources,
    measurementSources: [],
    pages: [],
    pageFamilies: [],
    componentTypes: [],
    componentInstances: [],
    resources: [],
    findings: [],
    experiments: [],
    investigation: [],
    mergeDecisions,
    limitations: []
  };

  // Process higher-trust sources first so a Firefox Energy Scanner page keeps
  // its canonical ID when the same URL also appears in another report.
  const ordered = [...normalizedInputs].sort((a, b) => (
    (SOURCE_PRIORITY[a.source?.type] ?? 9) - (SOURCE_PRIORITY[b.source?.type] ?? 9)
  ));

  for (const { source, fragment } of ordered) {
    if (!source) {
      warnings.push("An adapter returned no source descriptor; its records were ignored.");
      continue;
    }

    evidence.limitations.push(...(fragment.limitations ?? []));

    if (fragment.sourceMeta) {
      const existing = sourceById.get(source.id);
      if (existing) {
        existing.toolVersion = fragment.sourceMeta.toolVersion ?? existing.toolVersion;
        existing.collectedAt = fragment.sourceMeta.collectedAt ?? existing.collectedAt;
        existing.schemaVersion = fragment.sourceMeta.schemaVersion ?? existing.schemaVersion;
        existing.limitations = [...new Set([...(existing.limitations ?? []), ...(fragment.sourceMeta.limitations ?? [])])];
      }
    }

    if (fragment.coverage) {
      const discovered = Number.isInteger(fragment.coverage.discoveredPages) ? fragment.coverage.discoveredPages : null;
      if (discovered !== null) {
        site.coverage.discoveredPages = site.coverage.discoveredPages === null
          ? discovered
          : Math.max(site.coverage.discoveredPages, discovered);
      }
      if (fragment.coverage.basis) {
        site.coverage.limitations.push(`Source coverage basis: ${fragment.coverage.basis}`);
      }
      site.coverage.limitations.push(...(fragment.coverage.limitations ?? []));
    }

    for (const page of fragment.pages ?? []) {
      const normalizedUrl = normalizeUrl(page.normalizedUrl || page.url);
      const candidate = {
        ...page,
        normalizedUrl,
        sourceIds: [...new Set([...(page.sourceIds ?? []), source.id])],
        contexts: page.contexts ?? [],
        metrics: page.metrics ?? [],
        sourceRefs: page.sourceRefs ?? [],
        limitations: page.limitations ?? [],
        familyId: page.familyId ?? null
      };

      const existing = evidence.pages.find((entry) => entry.normalizedUrl === normalizedUrl);
      if (!existing) {
        evidence.pages.push(candidate);
        pageIdAliases.set(candidate.id, candidate.id);
        continue;
      }

      const decision = {
        entity: "page",
        keptId: existing.id,
        mergedIds: [],
        aliases: [],
        reason: "Same normalized URL; the higher-trust source's page ID is kept.",
        sourceIds: [...new Set([...existing.sourceIds, ...candidate.sourceIds])],
        differences: []
      };
      if (candidate.id !== existing.id) {
        decision.mergedIds.push(candidate.id);
        decision.aliases.push(candidate.id);
        pageIdAliases.set(candidate.id, existing.id);
      }
      mergePage(existing, candidate, decision);
      mergeDecisions.push(decision);
    }

    for (const family of fragment.pageFamilies ?? []) {
      const existing = evidence.pageFamilies.find((entry) => entry.id === family.id);
      if (!existing) {
        evidence.pageFamilies.push({
          ...family,
          pageIds: [...new Set(family.pageIds ?? [])],
          limitations: family.limitations ?? []
        });
      } else {
        existing.pageIds = [...new Set([...existing.pageIds, ...(family.pageIds ?? [])])];
        existing.limitations = [...new Set([...existing.limitations, ...(family.limitations ?? [])])];
      }
    }

    for (const type of fragment.componentTypes ?? []) {
      const existingType = evidence.componentTypes.find((entry) => entry.id === type.id);
      if (existingType) {
        const aliasKey = `${source.id}\u0000${type.id}`;
        if (existingType.signature === type.signature) {
          // The same source component appearing in another run is one type.
          // Merge its references but keep the canonical ID.
          existingType.pageFamilyIds = [...new Set([...existingType.pageFamilyIds, ...(type.pageFamilyIds ?? [])])];
          existingType.instanceIds = [...new Set([...existingType.instanceIds, ...(type.instanceIds ?? [])])];
          existingType.resourceIds = [...new Set([...existingType.resourceIds, ...(type.resourceIds ?? [])])];
          existingType.findingIds = [...new Set([...existingType.findingIds, ...(type.findingIds ?? [])])];
          existingType.limitations = [...new Set([...existingType.limitations, ...(type.limitations ?? [])])];
          typeIdAliasesBySource.set(aliasKey, existingType.id);
        } else {
          const suffixedId = `${type.id}-dup-${sha256(source.id).slice(0, 4)}`;
          warnings.push(
            `Component type ID '${type.id}' has different signatures in two sources; the later record is kept as '${suffixedId}'.`
          );
          evidence.componentTypes.push({
            ...type,
            id: suffixedId,
            pageFamilyIds: [...new Set(type.pageFamilyIds ?? [])],
            instanceIds: [],
            resourceIds: [],
            findingIds: [],
            possibleDuplicateOf: [...new Set(type.possibleDuplicateOf ?? [])],
            limitations: [...(type.limitations ?? []), "Same source ID as another component type with a different signature; kept separate."]
          });
          typeIdAliasesBySource.set(aliasKey, suffixedId);
        }
        continue;
      }
      evidence.componentTypes.push({
        ...type,
        pageFamilyIds: [...new Set(type.pageFamilyIds ?? [])],
        instanceIds: [...new Set(type.instanceIds ?? [])],
        resourceIds: [...new Set(type.resourceIds ?? [])],
        findingIds: [...new Set(type.findingIds ?? [])],
        possibleDuplicateOf: [...new Set(type.possibleDuplicateOf ?? [])],
        limitations: type.limitations ?? []
      });
      typeIdAliasesBySource.set(`${source.id}\u0000${type.id}`, type.id);
    }

    for (const instance of fragment.componentInstances ?? []) {
      const pageId = pageIdAliases.get(instance.pageId) ?? instance.pageId;
      const typeId = typeIdAliasesBySource.get(`${source.id}\u0000${instance.typeId}`) ?? instance.typeId;
      if (!evidence.pages.some((page) => page.id === pageId)) {
        warnings.push(`Component instance '${instance.id}' referenced unknown page '${instance.pageId}'; it was omitted.`);
        continue;
      }
      if (!evidence.componentTypes.some((type) => type.id === typeId)) {
        warnings.push(`Component instance '${instance.id}' referenced unknown component type '${instance.typeId}'; it was omitted.`);
        continue;
      }
      const existingInstance = evidence.componentInstances.find((entry) => entry.id === instance.id);
      if (existingInstance) {
        if (existingInstance.pageId === pageId && existingInstance.typeId === typeId) {
          existingInstance.childIds = [...new Set([...existingInstance.childIds, ...(instance.childIds ?? [])])];
          existingInstance.resourceIds = [...new Set([...existingInstance.resourceIds, ...(instance.resourceIds ?? [])])];
          existingInstance.findingIds = [...new Set([...existingInstance.findingIds, ...(instance.findingIds ?? [])])];
          existingInstance.limitations = [...new Set([...existingInstance.limitations, ...(instance.limitations ?? [])])];
          instanceIdAliasesBySource.set(`${source.id}\u0000${instance.id}`, existingInstance.id);
        } else {
          const suffixedId = `${instance.id}-dup-${sha256(source.id).slice(0, 4)}`;
          warnings.push(`Component instance ID '${instance.id}' refers to a different page/type in another source; kept as '${suffixedId}'.`);
          evidence.componentInstances.push({
            ...instance,
            id: suffixedId,
            pageId,
            typeId,
            parentId: instance.parentId ?? null,
            childIds: [...new Set(instance.childIds ?? [])],
            resourceIds: [...new Set(instance.resourceIds ?? [])],
            findingIds: [...new Set(instance.findingIds ?? [])],
            sourceRefs: instance.sourceRefs ?? [],
            limitations: [...(instance.limitations ?? []), "Same source ID as another component instance with a different page/type; kept separate."]
          });
          instanceIdAliasesBySource.set(`${source.id}\u0000${instance.id}`, suffixedId);
        }
        continue;
      }
      evidence.componentInstances.push({
        ...instance,
        pageId,
        typeId,
        parentId: instance.parentId ?? null,
        childIds: [...new Set(instance.childIds ?? [])],
        resourceIds: [...new Set(instance.resourceIds ?? [])],
        findingIds: [...new Set(instance.findingIds ?? [])],
        sourceRefs: instance.sourceRefs ?? [],
        limitations: instance.limitations ?? []
      });
      instanceIdAliasesBySource.set(`${source.id}\u0000${instance.id}`, instance.id);
    }

    for (const resource of fragment.resources ?? []) {
      const normalizedUrl = normalizeUrl(resource.normalizedUrl || resource.url);
      const candidate = {
        ...resource,
        normalizedUrl,
        pageIds: (resource.pageIds ?? []).map((id) => pageIdAliases.get(id) ?? id),
        instanceIds: [...new Set(resource.instanceIds ?? [])],
        sourceRefs: resource.sourceRefs ?? [],
        limitations: resource.limitations ?? []
      };
      const existing = evidence.resources.find((entry) => entry.normalizedUrl === normalizedUrl);
      if (!existing) {
        const idCollision = evidence.resources.find((entry) => entry.id === candidate.id);
        if (idCollision) {
          const suffixedId = `${candidate.id}-dup-${sha256(source.id).slice(0, 4)}`;
          warnings.push(`Resource ID '${candidate.id}' refers to a different URL in another source; kept as '${suffixedId}'.`);
          candidate.id = suffixedId;
        }
        evidence.resources.push(candidate);
        resourceIdAliases.set(candidate.id, candidate.id);
        continue;
      }
      const decision = {
        entity: "resource",
        keptId: existing.id,
        mergedIds: [],
        aliases: [],
        reason: "Same normalized resource URL; the higher-trust source's resource ID is kept.",
        sourceIds: [...new Set([existing.sourceId, candidate.sourceId])],
        differences: []
      };
      if (candidate.id !== existing.id) {
        decision.mergedIds.push(candidate.id);
        decision.aliases.push(candidate.id);
        resourceIdAliases.set(candidate.id, existing.id);
      }
      mergeResource(existing, candidate, decision);
      mergeDecisions.push(decision);
    }

    for (const finding of fragment.findings ?? []) {
      const targetId = finding.target.type === "page"
        ? (pageIdAliases.get(finding.target.id) ?? finding.target.id)
        : finding.target.type === "resource"
          ? (resourceIdAliases.get(finding.target.id) ?? finding.target.id)
          : finding.target.type === "component-type"
            ? (typeIdAliasesBySource.get(`${source.id}\u0000${finding.target.id}`) ?? finding.target.id)
            : finding.target.type === "component-instance"
              ? (instanceIdAliasesBySource.get(`${source.id}\u0000${finding.target.id}`) ?? finding.target.id)
              : finding.target.id;
      const duplicate = evidence.findings.some((entry) => entry.id === finding.id);
      evidence.findings.push({
        ...finding,
        id: duplicate ? `${finding.id}-dup-${sha256(source.id).slice(0, 4)}` : finding.id,
        target: { ...finding.target, id: targetId },
        limitations: [
          ...(finding.limitations ?? []),
          ...(duplicate ? ["Same source finding ID appeared in another evidence source; both records are retained."] : [])
        ]
      });
    }

    for (const experiment of fragment.experiments ?? []) {
      const pageId = experiment.workload?.pageId
        ? (pageIdAliases.get(experiment.workload.pageId) ?? experiment.workload.pageId)
        : null;
      evidence.experiments.push({
        ...experiment,
        workload: { ...experiment.workload, pageId },
        sourceRefs: experiment.sourceRefs ?? []
      });
    }

    for (const item of fragment.investigation ?? []) {
      evidence.investigation.push({ ...item, sourceId: source.id });
    }

    for (const measurement of fragment.measurementSources ?? []) {
      evidence.measurementSources.push({
        ...measurement,
        id: `${source.id}:${measurement.id}`,
        sourceId: source.id
      });
    }
  }

  // Derive reverse links after all sources are present. Nothing is merged
  // across component types: a shared label is only a possible-duplicate hint.
  const instanceById = new Map(evidence.componentInstances.map((instance) => [instance.id, instance]));
  const pageById = new Map(evidence.pages.map((page) => [page.id, page]));
  for (const instance of evidence.componentInstances) {
    const parent = evidence.componentInstances.find((candidate) => (candidate.childIds ?? []).includes(instance.id));
    if (parent) instance.parentId = parent.id;
    const type = evidence.componentTypes.find((candidate) => candidate.id === instance.typeId);
    if (type) {
      type.instanceIds.push(instance.id);
      type.resourceIds.push(...instance.resourceIds);
      const page = pageById.get(instance.pageId);
      if (page?.familyId) type.pageFamilyIds.push(page.familyId);
    }
  }
  for (const resource of evidence.resources) {
    for (const instanceId of resource.instanceIds) {
      const instance = instanceById.get(instanceId);
      if (!instance) continue;
      instance.resourceIds.push(resource.id);
    }
  }
  for (const finding of evidence.findings) {
    if (finding.target.type === "component-instance") {
      const instance = instanceById.get(finding.target.id);
      if (instance) instance.findingIds.push(finding.id);
      const type = evidence.componentTypes.find((candidate) => candidate.id === instance?.typeId);
      if (type) type.findingIds.push(finding.id);
    } else if (finding.target.type === "component-type") {
      const type = evidence.componentTypes.find((candidate) => candidate.id === finding.target.id);
      if (type) type.findingIds.push(finding.id);
    }
  }

  for (const instance of evidence.componentInstances) {
    instance.resourceIds = [...new Set(instance.resourceIds)];
    instance.findingIds = [...new Set(instance.findingIds)];
    const type = evidence.componentTypes.find((candidate) => candidate.id === instance.typeId);
    if (type) type.resourceIds.push(...instance.resourceIds);
  }
  for (const type of evidence.componentTypes) {
    type.instanceIds = [...new Set(type.instanceIds)];
    type.resourceIds = [...new Set(type.resourceIds)];
    type.findingIds = [...new Set(type.findingIds)];
    type.pageFamilyIds = [...new Set(type.pageFamilyIds)];
    type.possibleDuplicateOf = [...new Set(type.possibleDuplicateOf)];
  }

  const typeGroups = new Map();
  for (const type of evidence.componentTypes) {
    const key = `${(type.label || type.signature).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()}`;
    if (!key) continue;
    const group = typeGroups.get(key) ?? [];
    group.push(type);
    typeGroups.set(key, group);
  }
  for (const group of typeGroups.values()) {
    if (group.length < 2) continue;
    for (const type of group) {
      const others = group.filter((candidate) => candidate.id !== type.id).map((candidate) => candidate.id);
      if (others.length > 0) {
        type.possibleDuplicateOf = [...new Set([...type.possibleDuplicateOf, ...others])].slice(0, 10);
      }
    }
  }
  if ([...typeGroups.values()].some((group) => group.length > 1)) {
    evidence.limitations.push(
      "Component types with the same label are cross-referenced via possibleDuplicateOf only. A shared label is not proof of a shared implementation or ownership."
    );
  }

  // Apply page/resource aliases to references that were created before a
  // later source introduced the same URL under a different ID.
  for (const family of evidence.pageFamilies) {
    family.pageIds = [...new Set(family.pageIds.map((id) => pageIdAliases.get(id) ?? id))];
  }
  for (const resource of evidence.resources) {
    resource.pageIds = [...new Set(resource.pageIds.map((id) => pageIdAliases.get(id) ?? id))];
  }
  for (const finding of evidence.findings) {
    if (finding.target.type === "page") finding.target.id = pageIdAliases.get(finding.target.id) ?? finding.target.id;
    if (finding.target.type === "resource") finding.target.id = resourceIdAliases.get(finding.target.id) ?? finding.target.id;
    if (finding.target.type === "site") finding.target.id = evidence.site.id;
  }
  for (const experiment of evidence.experiments) {
    if (experiment.workload?.pageId) {
      experiment.workload.pageId = pageIdAliases.get(experiment.workload.pageId) ?? experiment.workload.pageId;
    }
  }

  evidence.site.coverage.inspectedPages = evidence.pages.length;
  evidence.site.coverage.basis = "Maximum source-reported discovered count; inspectedPages counts the unique pages present in this evidence package. Sources may overlap.";
  evidence.site.coverage.limitations = [...new Set(evidence.site.coverage.limitations)];
  evidence.limitations = [...new Set(evidence.limitations)];

  const validation = validatePerformanceEvidence(evidence);
  const allErrors = [...new Set([...errors, ...validation.errors])];
  return {
    ok: allErrors.length === 0,
    errors: allErrors,
    warnings: [...new Set([...warnings, ...validation.warnings])],
    value: allErrors.length === 0 ? evidence : null
  };
}

/**
 * Validate a performance-evidence object against the published contract plus
 * cross-reference and measurement-boundary rules.
 * @param {object} evidence
 * @returns {{ok: boolean, errors: string[], warnings: string[]}}
 */
export function validatePerformanceEvidence(evidence) {
  const errors = [];
  const warnings = [];

  if (!evidence || typeof evidence !== "object" || Array.isArray(evidence)) {
    return { ok: false, errors: ["Performance evidence must be an object."], warnings };
  }

  for (const key of evidenceSchema.required) {
    if (evidence[key] === undefined || evidence[key] === null) errors.push(`Missing required field: ${key}`);
  }
  const knownKeys = new Set(Object.keys(evidenceSchema.properties));
  for (const key of Object.keys(evidence)) {
    if (!knownKeys.has(key)) errors.push(`Unexpected field: ${key}`);
  }
  if (evidence.schema !== PERFORMANCE_EVIDENCE_SCHEMA_VERSION) {
    errors.push(`schema must be '${PERFORMANCE_EVIDENCE_SCHEMA_VERSION}'.`);
  }

  for (const key of [
    "sources",
    "measurementSources",
    "pages",
    "pageFamilies",
    "componentTypes",
    "componentInstances",
    "resources",
    "findings",
    "experiments",
    "investigation",
    "mergeDecisions",
    "limitations"
  ]) {
    if (!Array.isArray(evidence[key])) errors.push(`${key} must be an array.`);
  }
  if (errors.length > 0) return { ok: false, errors, warnings };

  const ids = (items) => new Set(items.map((item) => item?.id).filter(Boolean));
  const sourceIds = ids(evidence.sources);
  const pageIds = ids(evidence.pages);
  const familyIds = ids(evidence.pageFamilies);
  const typeIds = ids(evidence.componentTypes);
  const instanceIds = ids(evidence.componentInstances);
  const resourceIds = ids(evidence.resources);
  const findingIds = ids(evidence.findings);

  const duplicateCheck = (items, label) => {
    const seen = new Set();
    for (const item of items) {
      if (!item?.id) {
        errors.push(`${label} contains a record without an id.`);
        continue;
      }
      if (seen.has(item.id)) errors.push(`${label} contains duplicate id '${item.id}'.`);
      seen.add(item.id);
    }
  };
  duplicateCheck(evidence.sources, "sources");
  duplicateCheck(evidence.measurementSources, "measurementSources");
  duplicateCheck(evidence.pages, "pages");
  duplicateCheck(evidence.pageFamilies, "pageFamilies");
  duplicateCheck(evidence.componentTypes, "componentTypes");
  duplicateCheck(evidence.componentInstances, "componentInstances");
  duplicateCheck(evidence.resources, "resources");
  duplicateCheck(evidence.findings, "findings");
  duplicateCheck(evidence.experiments, "experiments");

  const checkRef = (id, set, label) => {
    if (id === null || id === undefined) return;
    if (!set.has(id)) errors.push(`${label} references unknown id '${id}'.`);
  };

  for (const source of evidence.sources) {
    for (const key of ["id", "type", "adapter", "adapterVersion", "tool", "location", "locationKind", "importedAt", "contentDigest"]) {
      if (source[key] === undefined || source[key] === null || source[key] === "") errors.push(`Source '${source.id ?? "?"}' is missing ${key}.`);
    }
    if (!["open-scans-report", "firefox-energy-scanner", "vital-core", "open-site-review"].includes(source.type)) {
      errors.push(`Source '${source.id}' has unsupported type '${source.type}'.`);
    }
  }

  const allMetrics = [];
  for (const page of evidence.pages) {
    checkRef(page.familyId, familyIds, `Page '${page.id}'.familyId`);
    for (const sourceId of page.sourceIds ?? []) checkRef(sourceId, sourceIds, `Page '${page.id}'.sourceIds`);
    allMetrics.push(...(page.metrics ?? []).map((metric) => ({ metric, where: `Page '${page.id}'` })));
  }
  for (const family of evidence.pageFamilies) {
    checkRef(family.sourceId, sourceIds, `Page family '${family.id}'.sourceId`);
    for (const pageId of family.pageIds ?? []) checkRef(pageId, pageIds, `Page family '${family.id}'.pageIds`);
  }
  for (const type of evidence.componentTypes) {
    checkRef(type.sourceId, sourceIds, `Component type '${type.id}'.sourceId`);
    for (const id of type.pageFamilyIds ?? []) checkRef(id, familyIds, `Component type '${type.id}'.pageFamilyIds`);
    for (const id of type.instanceIds ?? []) checkRef(id, instanceIds, `Component type '${type.id}'.instanceIds`);
    for (const id of type.resourceIds ?? []) checkRef(id, resourceIds, `Component type '${type.id}'.resourceIds`);
    for (const id of type.findingIds ?? []) checkRef(id, findingIds, `Component type '${type.id}'.findingIds`);
    for (const id of type.possibleDuplicateOf ?? []) checkRef(id, typeIds, `Component type '${type.id}'.possibleDuplicateOf`);
  }
  for (const instance of evidence.componentInstances) {
    checkRef(instance.sourceId, sourceIds, `Component instance '${instance.id}'.sourceId`);
    checkRef(instance.pageId, pageIds, `Component instance '${instance.id}'.pageId`);
    checkRef(instance.typeId, typeIds, `Component instance '${instance.id}'.typeId`);
    checkRef(instance.parentId, instanceIds, `Component instance '${instance.id}'.parentId`);
    for (const id of instance.childIds ?? []) checkRef(id, instanceIds, `Component instance '${instance.id}'.childIds`);
    for (const id of instance.resourceIds ?? []) checkRef(id, resourceIds, `Component instance '${instance.id}'.resourceIds`);
    for (const id of instance.findingIds ?? []) checkRef(id, findingIds, `Component instance '${instance.id}'.findingIds`);
  }
  for (const resource of evidence.resources) {
    checkRef(resource.sourceId, sourceIds, `Resource '${resource.id}'.sourceId`);
    for (const id of resource.pageIds ?? []) checkRef(id, pageIds, `Resource '${resource.id}'.pageIds`);
    for (const id of resource.instanceIds ?? []) checkRef(id, instanceIds, `Resource '${resource.id}'.instanceIds`);
  }
  for (const finding of evidence.findings) {
    checkRef(finding.sourceId, sourceIds, `Finding '${finding.id}'.sourceId`);
    const targetSet = {
      page: pageIds,
      "component-type": typeIds,
      "component-instance": instanceIds,
      resource: resourceIds,
      site: new Set([evidence.site?.id])
    }[finding.target?.type];
    if (!targetSet) {
      errors.push(`Finding '${finding.id}' has unsupported target type '${finding.target?.type}'.`);
    } else {
      checkRef(finding.target.id, targetSet, `Finding '${finding.id}'.target`);
    }
    if (finding.metric) allMetrics.push({ metric: finding.metric, where: `Finding '${finding.id}'` });
  }
  for (const experiment of evidence.experiments) {
    checkRef(experiment.sourceId, sourceIds, `Experiment '${experiment.id}'.sourceId`);
    if (experiment.workload?.pageId) checkRef(experiment.workload.pageId, pageIds, `Experiment '${experiment.id}'.workload.pageId`);
    if (experiment.results?.status === "completed" && experiment.results.delta !== null && experiment.results.runs === null) {
      warnings.push(`Experiment '${experiment.id}' reports a completed delta without a run count.`);
    }
  }
  for (const item of evidence.investigation) {
    checkRef(item.sourceId, sourceIds, `Investigation item '${item.id}'.sourceId`);
  }
  for (const decision of evidence.mergeDecisions) {
    checkRef(decision.keptId, decision.entity === "page" ? pageIds : resourceIds, `mergeDecision '${decision.keptId}'.keptId`);
  }

  for (const { metric, where } of allMetrics) {
    checkRef(metric.sourceId, sourceIds, `${where}.metric.sourceId`);
    if (metric.value !== null && !Number.isFinite(metric.value)) {
      errors.push(`${where}.metric '${metric.name}' has a non-finite value.`);
    }
    if (metric.unit === "mWh" && !["firefox-energy-scanner", "webnrg"].includes(metric.tool)) {
      errors.push(`${where}.metric '${metric.name}' uses mWh from '${metric.tool}', which does not measure client energy.`);
    }
    if (metric.unit === "mWh" && metric.tool === "firefox-energy-scanner" && !/observed|measured|experiment/i.test(metric.boundary)) {
      errors.push(`${where}.metric '${metric.name}' claims mWh without an observed-energy boundary.`);
    }
    if (["gCO2e", "ugCO2e"].includes(metric.unit) && !/modelled|grid-derived/i.test(metric.boundary)) {
      errors.push(`${where}.metric '${metric.name}' reports modelled emissions without a modelled or grid-derived boundary.`);
    }
    if (metric.tool === "co2js" && !/modelled/i.test(metric.boundary)) {
      errors.push(`${where}.metric '${metric.name}' is a CO2.js value but its boundary is not labelled modelled.`);
    }
    if (metric.unit === "gCO2e" && metric.tool === "firefox-energy-scanner" && /observed/i.test(metric.boundary)) {
      errors.push(`${where}.metric '${metric.name}' mixes modelled CO2e with an observed-energy boundary.`);
    }
  }

  if (evidence.site) {
    for (const sourceId of evidence.site.sourceIds ?? []) checkRef(sourceId, sourceIds, "site.sourceIds");
  }

  return { ok: errors.length === 0, errors, warnings };
}

export function summarizePerformanceEvidence(evidence) {
  return {
    schema: evidence.schema,
    requestId: evidence.request.requestId,
    mode: evidence.request.mode,
    site: evidence.site.origin,
    sources: evidence.sources.map((source) => ({
      type: source.type,
      location: source.location,
      collectedAt: source.collectedAt,
      toolVersion: source.toolVersion
    })),
    pages: evidence.pages.length,
    pageFamilies: evidence.pageFamilies.length,
    componentTypes: evidence.componentTypes.length,
    componentInstances: evidence.componentInstances.length,
    resources: evidence.resources.length,
    findings: evidence.findings.length,
    experiments: evidence.experiments.length,
    investigation: evidence.investigation.length,
    coverage: evidence.site.coverage,
    mergeDecisions: evidence.mergeDecisions.length,
    limitations: evidence.limitations
  };
}
