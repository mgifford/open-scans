import { readFileSync } from "node:fs";
import { stableId } from "./performance-evidence.mjs";

const schemaPath = new URL("./schemas/performance-investigation.schema.json", import.meta.url);
const investigationSchema = JSON.parse(readFileSync(schemaPath, "utf8"));

export const PERFORMANCE_INVESTIGATION_SCHEMA_VERSION = "performance-investigation/1";
export const PERFORMANCE_INVESTIGATION_ENGINE_VERSION = "1.0.0";

const TIER_ORDER = Object.freeze({
  tested: 0,
  confirmed: 0,
  observed: 1,
  associated: 2,
  inferred: 3,
  "candidate-explanation": 4,
  structure: 5
});

const TIER_LABEL = Object.freeze({
  tested: "tested",
  confirmed: "confirmed",
  observed: "observed",
  associated: "associated",
  inferred: "inferred",
  "candidate-explanation": "candidate-explanation",
  structure: "structure"
});

const PHASES = new Set(["load", "interaction", "idle", "unknown"]);

function text(value) {
  return String(value ?? "").trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function phaseOf(finding) {
  if (PHASES.has(finding?.phase)) return finding.phase;
  const kind = text(finding?.kind).toLowerCase();
  if (/idle|animation|timer|scroll-linked/.test(kind)) return "idle";
  if (/interaction|click|input|form/.test(kind)) return "interaction";
  if (/load|render|lcp|fcp|tbt|resource|third-party|long-task|emission/.test(kind)) return "load";
  return "unknown";
}

function tierOfFinding(finding) {
  if (finding?.evidenceClass === "tested" || finding?.evidenceClass === "confirmed") return "tested";
  if (finding?.evidenceClass === "observed") return "observed";
  if (finding?.evidenceClass === "associated") return "associated";
  if (finding?.evidenceClass === "inferred") return "inferred";
  if (finding?.evidenceClass === "candidate-explanation") return "candidate-explanation";
  return "structure";
}

function confidenceRank(confidence) {
  return { high: 0, medium: 1, low: 2, unknown: 3 }[confidence] ?? 3;
}

function categorizeCandidate(candidate, resource = null) {
  if (candidate.kind === "page") {
    return { category: "page-evidence", categoryBasis: "page-level evidence without a component locator" };
  }
  if (candidate.kind === "resource") {
    if (resource?.thirdParty === true) {
      return { category: "shared-third-party", categoryBasis: "resource is source-declared third-party" };
    }
    return { category: "resource", categoryBasis: `resource kind: ${resource?.kind ?? "unknown"}` };
  }
  const text = `${candidate.label ?? ""} ${candidate.signature ?? ""}`.toLowerCase();
  const rules = [
    [/cookie|consent|gdpr|privacy/, "cookie-consent"],
    [/sidebar/, "sidebar-navigation"],
    [/\bnav\b|navigation|menu/, "primary-navigation"],
    [/header|banner/, "site-header"],
    [/footer|contentinfo/, "footer"],
    [/search/, "search-form"],
    [/chart|graph|plot/, "chart"],
    [/dashboard/, "dashboard"],
    [/iframe|embed|widget/, "embedded-application"],
    [/video|player|media/, "video-media"],
    [/\btable\b|datagrid/, "table"],
    [/result|listing|\blist\b/, "result-list"]
  ];
  const match = rules.find(([pattern]) => pattern.test(text));
  return match
    ? { category: match[1], categoryBasis: `component signature/label: ${text.trim()}` }
    : { category: "other", categoryBasis: `component signature/label did not match a known category: ${text.trim()}` };
}

function highestConfidence(findings, fallback = "unknown") {
  if (!findings.length) return fallback;
  return [...findings].sort((a, b) => confidenceRank(a.confidence) - confidenceRank(b.confidence))[0].confidence ?? fallback;
}

function pageIdsForTarget(target, maps) {
  if (!target) return { pageIds: [], instanceIds: [] };
  if (target.type === "page") return { pageIds: [target.id], instanceIds: [] };
  if (target.type === "component-instance") {
    const instance = maps.instanceById.get(target.id);
    return { pageIds: instance ? [instance.pageId] : [], instanceIds: [target.id] };
  }
  if (target.type === "component-type") {
    const instances = (maps.evidence.componentInstances ?? []).filter((entry) => entry.typeId === target.id);
    return { pageIds: unique(instances.map((entry) => entry.pageId)), instanceIds: instances.map((entry) => entry.id) };
  }
  if (target.type === "resource") {
    const resource = maps.resourceById.get(target.id);
    return { pageIds: resource?.pageIds ?? [], instanceIds: [] };
  }
  return { pageIds: [], instanceIds: [] };
}

function familyIdsForPages(pageIds, maps) {
  return unique(pageIds.map((pageId) => maps.pageById.get(pageId)?.familyId).filter(Boolean));
}

function measurementFor(finding, fallbackPageId, maps) {
  const metric = finding.metric;
  if (!metric || typeof metric.value !== "number" || !metric.unit) return null;
  const targetPages = pageIdsForTarget(finding.target, maps);
  const pageId = targetPages.pageIds[0] ?? fallbackPageId;
  if (!pageId) return null;
  return {
    findingId: finding.id,
    pageId,
    value: metric.value,
    unit: metric.unit,
    tool: metric.tool ?? "unknown",
    browser: metric.browser ?? null,
    boundary: text(metric.boundary ?? "not stated").slice(0, 200)
  };
}

function observationKey(finding) {
  const metric = finding.metric;
  return [
    finding.kind,
    phaseOf(finding),
    finding.evidenceClass,
    metric?.name ?? "",
    metric?.unit ?? "",
    metric?.sourceId ?? "",
    metric?.tool ?? "",
    metric?.browser ?? "",
    metric?.boundary ?? ""
  ].join("\u0000");
}

function buildObservations(findings, maps, fallbackPageId = null) {
  const groups = new Map();
  for (const finding of findings) {
    const key = observationKey(finding);
    const group = groups.get(key) ?? { findings: [], key };
    group.findings.push(finding);
    groups.set(key, group);
  }
  return [...groups.values()].map(({ findings: groupFindings }) => {
    const representative = groupFindings[0];
    const pageIds = unique([
      ...groupFindings.flatMap((finding) => pageIdsForTarget(finding.target, maps).pageIds),
      ...(fallbackPageId ? [fallbackPageId] : [])
    ]);
    const instanceIds = unique(groupFindings.flatMap((finding) => pageIdsForTarget(finding.target, maps).instanceIds));
    const measurements = groupFindings
      .map((finding) => measurementFor(finding, pageIds[0] ?? fallbackPageId, maps))
      .filter(Boolean);
    const observations = {
      id: stableId("obs", `${observationKey(representative)}:${groupFindings.map((finding) => finding.id).sort().join(",")}`, 12),
      kind: text(representative.kind).slice(0, 120),
      title: text(representative.title).slice(0, 300),
      phase: phaseOf(representative),
      evidenceClass: representative.evidenceClass,
      confidence: highestConfidence(groupFindings),
      occurrences: groupFindings.length,
      pageIds,
      instanceIds,
      findingIds: groupFindings.map((finding) => finding.id),
      measurements,
      uncertainty: unique(groupFindings.flatMap((finding) => finding.limitations ?? []))
    };
    return observations;
  });
}

function strongestTier(observations) {
  return [...observations]
    .map((observation) => tierOfFinding({ evidenceClass: observation.evidenceClass }))
    .sort((a, b) => TIER_ORDER[a] - TIER_ORDER[b])[0] ?? "structure";
}

function maxMetric(pageIds, namePattern, unit, maps) {
  const values = [];
  for (const pageId of pageIds) {
    const page = maps.pageById.get(pageId);
    for (const metric of page?.metrics ?? []) {
      if (typeof metric.value !== "number") continue;
      if (metric.unit !== unit) continue;
      if (namePattern.test(metric.name)) values.push(metric.value);
    }
  }
  return values.length ? Math.max(...values) : null;
}

function resourceBytes(resourceIds, maps) {
  const values = resourceIds.map((id) => maps.resourceById.get(id)?.sizeBytes).filter((value) => typeof value === "number");
  return values.length ? Math.max(...values) : null;
}

function interventionFor(observation, candidate) {
  const kind = text(observation.kind).toLowerCase();
  const phase = observation.phase;
  if (/animation|timer|scroll-linked/.test(kind) || phase === "idle" && /animation|timer/.test(kind)) {
    return {
      kind: "pause-or-reduce-motion",
      description: "Pause the continuous animation and provide a reduced-motion path; verify the page still communicates the same content.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "pause-animations",
      basis: `${observation.title} (${observation.kind})`
    };
  }
  if (/interaction/.test(kind) || phase === "interaction") {
    return {
      kind: "split-or-defer-interaction-work",
      description: "Break the interaction handler into smaller tasks or defer work until after the next paint; preserve the interaction's behaviour.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "block",
      basis: `${observation.title} (${observation.kind})`
    };
  }
  if (/third-party/.test(kind) || candidate.thirdParty) {
    return {
      kind: "third-party-facade-or-consent-gate",
      description: "Load the third party only when needed (facade or consent-gated); blocking is a diagnostic upper bound, not a production recommendation.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "block",
      basis: `${observation.title}${candidate.thirdParty ? " (third-party resource)" : ""}`
    };
  }
  if (/render-blocking/.test(kind)) {
    return {
      kind: "defer-render-blocking-resource",
      description: "Defer or inline-critical the render-blocking resource, preserving first-paint content; verify layout and functionality.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "block",
      basis: observation.title
    };
  }
  if (/long-task|main-thread/.test(kind)) {
    return {
      kind: "reduce-main-thread-work",
      description: "Split long tasks, defer non-critical scripts, or reduce the work performed during load; verify the page still works.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "block",
      basis: observation.title
    };
  }
  if (/resource-observation|large-asset|bytes/.test(kind) || /resource/.test(candidate.kind)) {
    return {
      kind: "reduce-or-defer-resource",
      description: "Reduce, split or defer the resource; request blocking is a diagnostic upper bound, not a production recommendation.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "block",
      basis: observation.title
    };
  }
  if (/video|media|autoplay/.test(kind) || candidate.media) {
    return {
      kind: "no-autoplay",
      description: "Replace autoplay with a poster and a user-activated play control.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "no-autoplay",
      basis: observation.title
    };
  }
  if (/unused|javascript|script/.test(kind)) {
    return {
      kind: "defer-or-code-split",
      description: "Defer non-critical JavaScript or split it by route; blocking is a diagnostic upper bound.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: "block",
      basis: observation.title
    };
  }
  if (/emission|co2/.test(kind)) {
    return {
      kind: "reduce-transfer",
      description: "Reduce transferred bytes through smaller assets or fewer requests; do not claim energy savings from bytes alone.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: null,
      basis: observation.title
    };
  }
  if (/candidate-explanation|css-quality|compatibility/.test(kind) || observation.evidenceClass === "candidate-explanation") {
    return {
      kind: "review-candidate-explanation",
      description: "Review the static/CSS finding and obtain runtime evidence before treating it as a performance cause.",
      realistic: true,
      diagnosticOnly: false,
      experimentKindCandidate: null,
      basis: observation.title
    };
  }
  return {
    kind: "collect-more-evidence",
    description: "The observation is not specific enough for an intervention; collect targeted runtime evidence first.",
    realistic: false,
    diagnosticOnly: false,
    experimentKindCandidate: null,
    basis: observation.title
  };
}

function interventionsFor(candidate, observations) {
  const byKind = new Map();
  for (const observation of observations) {
    const intervention = interventionFor(observation, candidate);
    if (!byKind.has(intervention.kind)) byKind.set(intervention.kind, intervention);
  }
  return [...byKind.values()];
}

function candidateConfidence(candidate, observations) {
  if (candidate.identificationMethod === "structural" || candidate.identificationMethod === "inferred") {
    return observations.some((observation) => observation.evidenceClass === "observed") ? "medium" : "low";
  }
  if (candidate.identificationMethod === "configured-signature") return "low";
  return highestConfidence(observations, candidate.confidence ?? "unknown");
}

function uncertaintyFor(candidate, observations) {
  const out = [...(candidate.uncertainty ?? [])];
  if (candidate.identificationMethod === "structural" || candidate.identificationMethod === "inferred") {
    out.push("Component type was identified structurally or inferred; a class/structure match alone does not establish component ownership.");
  }
  if (candidate.kind === "component" && candidate.resourceFindingIds?.length) {
    out.push("Resource findings are linked to this component's resources but are not component-owned costs.");
  }
  if (candidate.kind === "resource") {
    out.push("A resource is page-level evidence; it does not establish which component caused its cost.");
  }
  if ((candidate.pageIds ?? []).length === 1) {
    out.push("Observed on one sampled page; this is not extrapolated to the site.");
  }
  for (const observation of observations) {
    if (observation.evidenceClass === "candidate-explanation") {
      out.push("A static/CSS candidate explanation has no demonstrated runtime cost.");
    }
    out.push(...(observation.uncertainty ?? []));
  }
  return unique(out).slice(0, 12);
}

function candidatePriority(candidate, observations, maps) {
  const tier = strongestTier(observations);
  const pageIds = candidate.pageIds ?? [];
  const familyIds = candidate.familyIds ?? [];
  const workload = {
    observations: observations.reduce((total, observation) => total + observation.occurrences, 0),
    domNodesMax: maxMetric(pageIds, /^domNodes$|^dom-elements$/, "count", maps),
    transferBytesMax: maxMetric(pageIds, /transfer-bytes$|^transferBytes$/, "bytes", maps),
    mainThreadMsMax: maxMetric(pageIds, /main-thread|tbt$|js-execution/, "ms", maps),
    resourceBytesMax: resourceBytes(candidate.resourceIds ?? [], maps)
  };
  const rankReason = [
    `evidence: ${tier}`,
    `reach: ${pageIds.length} page(s) / ${familyIds.length} family(ies)`,
    `observations: ${workload.observations}`,
    ...(workload.domNodesMax !== null ? [`max DOM nodes: ${workload.domNodesMax}`] : []),
    ...(workload.transferBytesMax !== null ? [`max transfer: ${workload.transferBytesMax} B`] : []),
    ...(workload.mainThreadMsMax !== null ? [`max main-thread evidence: ${workload.mainThreadMsMax} ms`] : []),
    ...(workload.resourceBytesMax !== null ? [`max resource size: ${workload.resourceBytesMax} B`] : [])
  ].join("; ").slice(0, 500);
  return {
    priority: {
      evidenceTier: TIER_LABEL[tier],
      reachPages: pageIds.length,
      reachFamilies: familyIds.length,
      workload,
      rankReason
    },
    tier
  };
}

function matchesExperiment(experiment, candidate) {
  return Boolean(experiment?.workload?.pageId && (candidate.pageIds ?? []).includes(experiment.workload.pageId));
}

function finalizeCandidate(candidate, observations, maps, experiments) {
  for (const experiment of experiments) {
    if (experiment?.workload?.pageId && (candidate.pageIds ?? []).includes(experiment.workload.pageId)) {
      candidate.uncertainty = [
        ...(candidate.uncertainty ?? []),
        "An existing experiment on this page may test a different intervention; verify its selector and workload."
      ];
      break;
    }
  }
  const { priority, tier } = candidatePriority(candidate, observations, maps);
  const existingExperimentIds = experiments.filter((experiment) => matchesExperiment(experiment, candidate)).map((experiment) => experiment.id);
  return {
    ...candidate,
    observations,
    confidence: candidateConfidence(candidate, observations),
    ownershipEstablished: false,
    uncertainty: uncertaintyFor(candidate, observations),
    interventions: interventionsFor(candidate, observations),
    existingExperimentIds,
    priority,
    __tier: tier
  };
}

/**
 * Build cross-page component/resource/page investigations from common evidence.
 * This function is deterministic apart from the generated candidate ids.
 * @param {object} evidence - performance-evidence/1
 * @param {{generatedAt?: string}} [options]
 * @returns {{ok: boolean, errors: string[], warnings: string[], value: object|null}}
 */
export function buildPerformanceInvestigation(evidence, { generatedAt = new Date().toISOString() } = {}) {
  const errors = [];
  const warnings = [];
  if (!evidence || typeof evidence !== "object" || evidence.schema !== "performance-evidence/1") {
    return { ok: false, errors: ["Input is not a performance-evidence/1 object."], warnings, value: null };
  }
  if (Number.isNaN(new Date(generatedAt).getTime())) {
    return { ok: false, errors: ["generatedAt must be an ISO 8601 date-time."], warnings, value: null };
  }

  const maps = {
    evidence,
    pageById: new Map((evidence.pages ?? []).map((page) => [page.id, page])),
    familyById: new Map((evidence.pageFamilies ?? []).map((family) => [family.id, family])),
    typeById: new Map((evidence.componentTypes ?? []).map((type) => [type.id, type])),
    instanceById: new Map((evidence.componentInstances ?? []).map((instance) => [instance.id, instance])),
    resourceById: new Map((evidence.resources ?? []).map((resource) => [resource.id, resource])),
    sourceById: new Map((evidence.sources ?? []).map((source) => [source.id, source]))
  };
  const allFindings = evidence.findings ?? [];
  const usableFindings = allFindings.filter((finding) => !["context-only"].includes(finding.evidenceClass));
  const findingsByTarget = new Map();
  for (const finding of usableFindings) {
    const key = `${finding.target?.type}:${finding.target?.id}`;
    const group = findingsByTarget.get(key) ?? [];
    group.push(finding);
    findingsByTarget.set(key, group);
  }
  const directTypeFindings = (typeId) => findingsByTarget.get(`component-type:${typeId}`) ?? [];
  const directInstanceFindings = (instanceId) => findingsByTarget.get(`component-instance:${instanceId}`) ?? [];
  const directResourceFindings = (resourceId) => findingsByTarget.get(`resource:${resourceId}`) ?? [];
  const directPageFindings = (pageId) => findingsByTarget.get(`page:${pageId}`) ?? [];

  const candidates = [];

  for (const type of evidence.componentTypes ?? []) {
    if (maps.sourceById.get(type.sourceId)?.type === "vital-core") continue;
    const instances = (evidence.componentInstances ?? []).filter((instance) => instance.typeId === type.id);
    const pageIds = unique(instances.map((instance) => instance.pageId));
    const familyIds = familyIdsForPages(pageIds, maps);
    const instanceFindings = instances.flatMap((instance) => directInstanceFindings(instance.id));
    const typeFindings = directTypeFindings(type.id);
    const directFindings = [...typeFindings, ...instanceFindings];
    const resourceFindings = unique(
      instances.flatMap((instance) => (instance.resourceIds ?? []).flatMap((resourceId) => directResourceFindings(resourceId)))
    );
    if (directFindings.length === 0 && resourceFindings.length === 0) continue;

    const observations = buildObservations(directFindings, maps, pageIds[0] ?? null);
    if (observations.length === 0 && resourceFindings.length > 0) {
      // A component with only resource associations is not a component-cost
      // candidate; the resource candidate carries that evidence.
      continue;
    }
    const candidate = finalizeCandidate({
      id: stableId("inv-ct", type.id, 12),
      kind: "component",
      title: text(type.label || type.signature).slice(0, 300),
      label: type.label ? text(type.label).slice(0, 300) : null,
      signature: type.signature ? text(type.signature).slice(0, 300) : null,
      identificationMethod: type.identificationMethod ?? null,
      ...categorizeCandidate({ kind: "component", label: type.label, signature: type.signature }),
      componentTypeIds: [type.id],
      pageIds,
      familyIds,
      instanceIds: instances.map((instance) => instance.id),
      resourceIds: unique([...(type.resourceIds ?? []), ...instances.flatMap((instance) => instance.resourceIds ?? [])]).filter((id) => maps.resourceById.has(id)),
      findingIds: directFindings.map((finding) => finding.id),
      resourceFindingIds: resourceFindings.map((finding) => finding.id),
      coverage: {
        pages: pageIds.length,
        of: evidence.pages?.length ?? 0,
        families: familyIds.length,
        basis: "sampled evidence pages; not extrapolated"
      },
      confidence: type.confidence ?? "unknown",
      uncertainty: [
        ...(type.limitations ?? []),
        ...(type.container ? ["Container: it owns little of what it holds; not credited with its contents."] : [])
      ],
      possibleDuplicateOf: (type.possibleDuplicateOf ?? []).map((id) => stableId("inv-ct", id, 12))
    }, observations, maps, evidence.experiments ?? []);
    candidates.push(candidate);

  }

  for (const resource of evidence.resources ?? []) {
    const findings = directResourceFindings(resource.id);
    const shared = (resource.pageIds ?? []).length >= 2;
    const notableShared = shared && (resource.thirdParty === true || (typeof resource.sizeBytes === "number" && resource.sizeBytes >= 100_000) || ["script", "stylesheet"].includes(resource.kind));
    if (findings.length === 0 && !notableShared) continue;
    const observations = buildObservations(findings, maps, (resource.pageIds ?? [])[0] ?? null);
    if (observations.length === 0) {
      observations.push({
        id: stableId("obs-rs", `${resource.id}:shared`, 12),
        kind: "shared-resource",
        title: `Resource observed on ${(resource.pageIds ?? []).length} pages`,
        phase: "load",
        evidenceClass: "associated",
        confidence: "medium",
        occurrences: 1,
        pageIds: resource.pageIds ?? [],
        instanceIds: resource.instanceIds ?? [],
        findingIds: [],
        measurements: [],
        uncertainty: [
          "Resource co-occurrence is not component ownership.",
          ...(resource.thirdParty ? ["Third-party resource; source classification is preserved."] : [])
        ]
      });
    }
    const componentTypeIds = unique((resource.instanceIds ?? [])
      .map((instanceId) => maps.instanceById.get(instanceId)?.typeId)
      .filter(Boolean));
    const pageIds = resource.pageIds ?? [];
    const candidate = finalizeCandidate({
      id: stableId("inv-rs", resource.id, 12),
      kind: "resource",
      title: `Resource: ${resource.url}`.slice(0, 300),
      label: text(resource.kind).slice(0, 300),
      signature: text(resource.normalizedUrl).slice(0, 300),
      identificationMethod: resource.attribution === "direct" ? "direct-resource" : resource.attribution === "inferred" ? "inferred" : "page-level",
      ...categorizeCandidate({ kind: "resource" }, resource),
      componentTypeIds,
      pageIds,
      familyIds: familyIdsForPages(pageIds, maps),
      instanceIds: resource.instanceIds ?? [],
      resourceIds: [resource.id],
      findingIds: findings.map((finding) => finding.id),
      resourceFindingIds: [],
      coverage: {
        pages: pageIds.length,
        of: evidence.pages?.length ?? 0,
        families: familyIdsForPages(pageIds, maps).length,
        basis: "resource pages in sampled evidence; not extrapolated"
      },
      confidence: resource.attribution === "direct" ? "medium" : "low",
      uncertainty: [
        ...(resource.limitations ?? []),
        "A page-level resource is not component-owned evidence."
      ],
      possibleDuplicateOf: [],
      thirdParty: resource.thirdParty === true,
      media: resource.kind === "media"
    }, observations, maps, evidence.experiments ?? []);
    candidates.push(candidate);
  }

  for (const page of evidence.pages ?? []) {
    const findings = directPageFindings(page.id);
    if (findings.length === 0) continue;
    const observations = buildObservations(findings, maps, page.id);
    const candidate = finalizeCandidate({
      id: stableId("inv-pg", page.id, 12),
      kind: "page",
      title: `Page-level evidence: ${page.url}`.slice(0, 300),
      label: text(page.url).slice(0, 300),
      signature: text(page.normalizedUrl).slice(0, 300),
      identificationMethod: "page-level",
      ...categorizeCandidate({ kind: "page" }),
      componentTypeIds: unique((evidence.componentInstances ?? []).filter((instance) => instance.pageId === page.id).map((instance) => instance.typeId)),
      pageIds: [page.id],
      familyIds: page.familyId ? [page.familyId] : [],
      instanceIds: (evidence.componentInstances ?? []).filter((instance) => instance.pageId === page.id).map((instance) => instance.id),
      resourceIds: (evidence.resources ?? []).filter((resource) => (resource.pageIds ?? []).includes(page.id)).map((resource) => resource.id),
      findingIds: findings.map((finding) => finding.id),
      resourceFindingIds: [],
      coverage: {
        pages: 1,
        of: evidence.pages?.length ?? 0,
        families: page.familyId ? 1 : 0,
        basis: "one sampled page; not extrapolated"
      },
      confidence: highestConfidence(findings),
      uncertainty: [
        "Page-level evidence may include audits without a component locator; no component ownership is inferred.",
        ...(page.limitations ?? [])
      ],
      possibleDuplicateOf: []
    }, observations, maps, evidence.experiments ?? []);
    candidates.push(candidate);
  }

  // Sort by separate, explicit keys. No keys are added or weighted.
  candidates.sort((a, b) => (
    TIER_ORDER[a.__tier] - TIER_ORDER[b.__tier]
    || b.priority.workload.observations - a.priority.workload.observations
    || b.priority.reachPages - a.priority.reachPages
    || b.priority.reachFamilies - a.priority.reachFamilies
    || (b.priority.workload.domNodesMax ?? -1) - (a.priority.workload.domNodesMax ?? -1)
    || (b.priority.workload.resourceBytesMax ?? -1) - (a.priority.workload.resourceBytesMax ?? -1)
    || a.id.localeCompare(b.id)
  ));
  const ranked = candidates.map((candidate, index) => {
    const { __tier, ...clean } = candidate;
    return { ...clean, rank: index + 1 };
  });

  const byComponentType = {};
  const byPage = {};
  const byFamily = {};
  const byResource = {};
  const add = (index, key, candidateId) => {
    if (!key) return;
    const list = index[key] ?? [];
    if (!list.includes(candidateId)) list.push(candidateId);
    index[key] = list;
  };
  const knownCandidateIds = new Set(ranked.map((candidate) => candidate.id));
  for (const candidate of ranked) {
    candidate.possibleDuplicateOf = (candidate.possibleDuplicateOf ?? []).filter((id) => knownCandidateIds.has(id));
    for (const id of candidate.componentTypeIds) add(byComponentType, id, candidate.id);
    for (const id of candidate.pageIds) add(byPage, id, candidate.id);
    for (const id of candidate.familyIds) add(byFamily, id, candidate.id);
    for (const id of candidate.resourceIds) add(byResource, id, candidate.id);
  }

  const value = {
    schema: PERFORMANCE_INVESTIGATION_SCHEMA_VERSION,
    generatedAt,
    evidence: {
      schema: evidence.schema,
      generatedAt: evidence.generatedAt,
      requestId: evidence.request?.requestId ?? "unknown"
    },
    site: {
      origin: evidence.site?.origin ?? "",
      host: evidence.site?.host ?? ""
    },
    candidates: ranked,
    byComponentType,
    byPage,
    byFamily,
    byResource,
    limitations: [
      "This is a grouping of evidence, not a component ownership claim or an energy/carbon score.",
      "Accessibility context-only findings are excluded from performance candidates.",
      "CSS/static candidate explanations are not measured runtime costs.",
      "Page and family coverage describe the sampled evidence only and are not extrapolated.",
      "Component types with a shared label remain separate unless their source identity is the same.",
      "Site-level findings that cannot be tied to a page, component or resource are not turned into candidates."
    ]
  };

  const validation = validatePerformanceInvestigation(value);
  errors.push(...validation.errors);
  warnings.push(...validation.warnings);
  return {
    ok: errors.length === 0,
    errors: [...new Set(errors)],
    warnings: [...new Set(warnings)],
    value: errors.length === 0 ? value : null
  };
}

/**
 * Validate a performance-investigation/1 package and its references.
 * @param {object} investigation
 * @returns {{ok: boolean, errors: string[], warnings: string[]}}
 */
export function validatePerformanceInvestigation(investigation) {
  const errors = [];
  const warnings = [];
  if (!investigation || typeof investigation !== "object" || Array.isArray(investigation)) {
    return { ok: false, errors: ["Performance investigation must be an object."], warnings };
  }
  for (const key of investigationSchema.required) {
    if (investigation[key] === undefined || investigation[key] === null) errors.push(`Missing required field: ${key}`);
  }
  const knownKeys = new Set(Object.keys(investigationSchema.properties));
  for (const key of Object.keys(investigation)) {
    if (!knownKeys.has(key)) errors.push(`Unexpected field: ${key}`);
  }
  if (investigation.schema !== PERFORMANCE_INVESTIGATION_SCHEMA_VERSION) {
    errors.push(`schema must be '${PERFORMANCE_INVESTIGATION_SCHEMA_VERSION}'.`);
  }
  for (const key of ["candidates", "limitations"]) {
    if (!Array.isArray(investigation[key])) errors.push(`${key} must be an array.`);
  }
  for (const key of ["byComponentType", "byPage", "byFamily", "byResource"]) {
    if (!investigation[key] || typeof investigation[key] !== "object" || Array.isArray(investigation[key])) {
      errors.push(`${key} must be an object index.`);
    }
  }
  if (errors.length > 0) return { ok: false, errors, warnings };

  const candidateIds = new Set();
  for (const [index, candidate] of investigation.candidates.entries()) {
    if (!candidate?.id) {
      errors.push(`Candidate ${index} has no id.`);
      continue;
    }
    if (candidateIds.has(candidate.id)) errors.push(`Duplicate candidate id '${candidate.id}'.`);
    candidateIds.add(candidate.id);
    if (candidate.rank !== index + 1) warnings.push(`Candidate '${candidate.id}' has rank ${candidate.rank}; expected ${index + 1}.`);
    if (candidate.ownershipEstablished !== false) {
      errors.push(`Candidate '${candidate.id}' must not claim established ownership in PR 5.`);
    }
    if (!Array.isArray(candidate.observations) || candidate.observations.length === 0) {
      errors.push(`Candidate '${candidate.id}' must have at least one observation.`);
    }
    for (const observation of candidate.observations ?? []) {
      if (!observation.id || !observation.kind || !observation.title) errors.push(`Candidate '${candidate.id}' has an incomplete observation.`);
      if (!Array.isArray(observation.findingIds)) errors.push(`Observation '${observation.id}' findingIds must be an array.`);
      for (const measurement of observation.measurements ?? []) {
        if (!measurement.findingId) errors.push(`Observation '${observation.id}' has a measurement without a findingId.`);
      }
    }
    if (candidate.kind === "component" && candidate.componentTypeIds.length === 0) {
      errors.push(`Component candidate '${candidate.id}' has no component type.`);
    }
    if (candidate.kind === "resource" && candidate.resourceIds.length === 0) {
      errors.push(`Resource candidate '${candidate.id}' has no resource.`);
    }
  }
  for (const [key, values] of Object.entries(investigation)) {
    if (!["byComponentType", "byPage", "byFamily", "byResource"].includes(key)) continue;
    for (const [indexKey, ids] of Object.entries(values)) {
      if (!Array.isArray(ids)) {
        errors.push(`${key}.${indexKey} must be an array.`);
        continue;
      }
      for (const id of ids) {
        if (!candidateIds.has(id)) errors.push(`${key}.${indexKey} references unknown candidate '${id}'.`);
      }
    }
  }
  return { ok: errors.length === 0, errors, warnings };
}

export function summarizeInvestigation(investigation) {
  return {
    schema: investigation.schema,
    site: investigation.site.origin,
    candidates: investigation.candidates.length,
    top: investigation.candidates.slice(0, 10).map((candidate) => ({
      rank: candidate.rank,
      kind: candidate.kind,
      title: candidate.title,
      evidenceTier: candidate.priority.evidenceTier,
      pages: candidate.coverage.pages,
      families: candidate.coverage.families,
      observations: candidate.observations.length,
      interventions: candidate.interventions.length
    })),
    byPage: Object.keys(investigation.byPage).length,
    byFamily: Object.keys(investigation.byFamily).length,
    byResource: Object.keys(investigation.byResource).length,
    byComponentType: Object.keys(investigation.byComponentType).length,
    limitations: investigation.limitations
  };
}
