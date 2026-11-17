import {
  crawlPageLinks,
  fetchSitemapUrls,
  filterSameOriginUrls
} from "./crawl-urls.mjs";
import { validateTarget } from "./validate-targets.mjs";
import { normalizeUrl, stableId } from "./performance-evidence.mjs";

const SOURCE_PRIORITY = Object.freeze({
  "top-task": 0,
  priority: 1,
  explicit: 2,
  evidence: 3,
  discovery: 4
});

const SOURCE_LABEL = Object.freeze({
  "top-task": "Top Task Finder URL",
  priority: "User-priority URL",
  explicit: "Explicit site URL",
  evidence: "Existing evidence page",
  discovery: "Bounded discovery"
});

const UNUSUAL_PATH_KEYWORDS = Object.freeze([
  "search",
  "apply",
  "application",
  "login",
  "signin",
  "account",
  "dashboard",
  "chart",
  "report",
  "form",
  "video",
  "media",
  "checkout",
  "payment",
  "renew",
  "claim"
]);

const REUSABLE_LIGHTHOUSE_METRICS = Object.freeze([
  "lcp",
  "tbt",
  "cls",
  "fcp",
  "speed-index",
  "main-thread-work",
  "js-execution"
]);

function text(value) {
  return String(value ?? "").trim();
}

function metricValues(page) {
  const values = {};
  for (const metric of page.metrics ?? []) {
    if (metric.value === null || metric.value === undefined) continue;
    const current = values[metric.name];
    if (current === undefined || metric.value > current) values[metric.name] = metric.value;
  }
  return values;
}

function median(values) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
}

function percentileThreshold(values, percentile = 0.75) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * percentile))];
}

function isSameSite(url, siteHost) {
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    const base = text(siteHost).toLowerCase().replace(/^www\./, "");
    return host === base || host.endsWith(`.${base}`);
  } catch {
    return false;
  }
}

function addCandidate(map, candidate) {
  const existing = map.get(candidate.normalizedUrl);
  if (!existing) {
    map.set(candidate.normalizedUrl, candidate);
    return;
  }
  const priority = Math.min(existing.priority, candidate.priority);
  existing.priority = priority;
  existing.sourceKinds = [...new Set([...existing.sourceKinds, ...candidate.sourceKinds])];
  existing.reasons = [...new Set([...existing.reasons, ...candidate.reasons])];
  if (!existing.familyId && candidate.familyId) existing.familyId = candidate.familyId;
  if (!existing.pageId && candidate.pageId) existing.pageId = candidate.pageId;
  existing.order = Math.min(existing.order, candidate.order);
}

/**
 * Build the bounded candidate list from explicit URLs, priority/top-task URLs,
 * and reusable evidence pages. Discovery URLs are added by the caller.
 * @param {object} input
 * @param {object} input.request
 * @param {object} input.evidence
 * @param {string[]} [input.discoveredUrls]
 * @returns {object}
 */
export function collectPerformanceCandidates({ request, evidence, discoveredUrls = [] }) {
  const candidates = new Map();
  const rejected = [];
  const maxPages = request.limits.maxPagesToInspect;
  let order = 0;

  const addUrl = (url, sourceKind, reason, page = null) => {
    const check = validateTarget(url);
    if (!check.accepted) {
      rejected.push({ url, source: sourceKind, reason: check.reason });
      return;
    }
    if (!isSameSite(check.normalizedUrl, request.site.host)) {
      rejected.push({ url, source: sourceKind, reason: "outside the requested site" });
      return;
    }
    addCandidate(candidates, {
      url: check.normalizedUrl,
      normalizedUrl: normalizeUrl(check.normalizedUrl),
      priority: SOURCE_PRIORITY[sourceKind],
      sourceKinds: [sourceKind],
      reasons: [reason],
      familyId: page?.familyId ?? null,
      pageId: page?.id ?? null,
      metrics: page ? metricValues(page) : {},
      order
    });
    order += 1;
  };

  for (const url of request.topTaskUrls ?? []) {
    addUrl(url, "top-task", "Explicitly nominated top-task page");
  }
  for (const url of request.priorityUrls ?? []) {
    addUrl(url, "priority", "Explicitly nominated priority page");
  }
  for (const url of request.site.urls ?? []) {
    addUrl(url, "explicit", "Explicit URL from the request");
  }
  for (const page of evidence?.pages ?? []) {
    addUrl(page.url, "evidence", "Page already present in reusable evidence", page);
  }
  for (const url of discoveredUrls) {
    addUrl(url, "discovery", "Discovered within the bounded polite crawl");
  }

  const all = [...candidates.values()].sort((a, b) => (
    a.priority - b.priority || a.order - b.order || a.url.localeCompare(b.url)
  ));
  const kept = all.slice(0, maxPages);
  const excluded = all.slice(maxPages).map((candidate) => ({
    url: candidate.url,
    source: candidate.sourceKinds.join(","),
    familyId: candidate.familyId ?? null,
    reason: `Outside maxPagesToInspect (${maxPages})`
  }));

  return {
    candidates: kept,
    excluded,
    rejected,
    discovered: discoveredUrls.length,
    totalCandidates: all.length
  };
}

/**
 * Decide whether a page already has a compatible Lighthouse measurement that
 * can be reused instead of launching Chromium again.
 * @param {object} input
 * @returns {{reusable: boolean, reason: string, sourceId?: string, ageDays?: number}}
 */
export function reusableLighthouseEvidence({ page, evidence, request, now = Date.now() }) {
  if (!page || !evidence) return { reusable: false, reason: "Page is not in existing evidence." };
  const byName = new Map((page.metrics ?? []).map((metric) => [metric.name, metric]));
  const missing = REUSABLE_LIGHTHOUSE_METRICS.filter((name) => {
    const metric = byName.get(name);
    return !metric || metric.value === null || metric.value === undefined;
  });
  if (missing.length > 0) {
    return { reusable: false, reason: `Existing evidence is missing ${missing.join(", ")}.` };
  }

  const lighthouseMetrics = REUSABLE_LIGHTHOUSE_METRICS.map((name) => byName.get(name));
  if (!lighthouseMetrics.every((metric) => metric.tool === "lighthouse")) {
    return { reusable: false, reason: "Required metrics are not all Lighthouse measurements." };
  }
  if (!lighthouseMetrics.every((metric) => /chrome|chromium/i.test(String(metric.browser ?? "")))) {
    return { reusable: false, reason: "Lighthouse metrics are not from a Chromium browser." };
  }

  const lighthouseContext = (page.contexts ?? []).find((context) => (
    /lighthouse/i.test(context.method ?? "") && context.profile === request.measurement.profile
  ));
  if (!lighthouseContext) {
    return { reusable: false, reason: `No Lighthouse context matches the requested '${request.measurement.profile}' profile.` };
  }

  const sourceId = lighthouseMetrics[0].sourceId;
  const source = (evidence.sources ?? []).find((entry) => entry.id === sourceId);
  if (!source) return { reusable: false, reason: "Lighthouse source provenance is missing." };
  if (!source.collectedAt) return { reusable: false, reason: "Lighthouse source has no collection timestamp." };
  const ageDays = (now - new Date(source.collectedAt).getTime()) / 86_400_000;
  if (!Number.isFinite(ageDays) || ageDays > request.maxEvidenceAgeDays) {
    return { reusable: false, reason: `Lighthouse evidence is older than ${request.maxEvidenceAgeDays} days.` };
  }

  return {
    reusable: true,
    reason: `Reused compatible Lighthouse evidence from ${source.collectedAt} (${Math.max(0, Math.round(ageDays))} days old).`,
    sourceId,
    ageDays
  };
}

function candidateStructuralScores(candidates) {
  const dom = candidates.map((candidate) => candidate.metrics.domNodes).filter(Number.isFinite);
  const requests = candidates.map((candidate) => candidate.metrics.requests).filter(Number.isFinite);
  const transfer = candidates.map((candidate) => candidate.metrics.transferBytes).filter(Number.isFinite);
  return {
    domMedian: median(dom),
    requestMedian: median(requests),
    transferMedian: median(transfer),
    domHigh: percentileThreshold(dom),
    requestHigh: percentileThreshold(requests),
    transferHigh: percentileThreshold(transfer)
  };
}

function representativeScore(candidate, scores) {
  let score = 0;
  let parts = 0;
  for (const [value, center] of [
    [candidate.metrics.domNodes, scores.domMedian],
    [candidate.metrics.requests, scores.requestMedian],
    [candidate.metrics.transferBytes, scores.transferMedian]
  ]) {
    if (!Number.isFinite(value) || !Number.isFinite(center) || center <= 0) continue;
    score -= Math.abs(value - center) / center;
    parts += 1;
  }
  return parts === 0 ? 0 : score / parts;
}

function unusualScore(candidate, scores) {
  let score = 0;
  const reasons = [];
  let parsed;
  try {
    parsed = new URL(candidate.url);
  } catch {
    parsed = null;
  }
  if (parsed && parsed.search) {
    score += 3;
    reasons.push("has query parameters");
  }
  const path = parsed?.pathname?.toLowerCase() ?? "";
  const keyword = UNUSUAL_PATH_KEYWORDS.find((word) => path.includes(word));
  if (keyword) {
    score += 3;
    reasons.push(`unusual task path ('${keyword}')`);
  }
  const depth = path.split("/").filter(Boolean).length;
  if (depth >= 3) {
    score += 2;
    reasons.push("deep path");
  }
  if (Number.isFinite(candidate.metrics.domNodes) && Number.isFinite(scores.domHigh) && candidate.metrics.domNodes >= scores.domHigh) {
    score += 2;
    reasons.push(`large DOM (${candidate.metrics.domNodes} nodes)`);
  }
  if (Number.isFinite(candidate.metrics.requests) && Number.isFinite(scores.requestHigh) && candidate.metrics.requests >= scores.requestHigh) {
    score += 2;
    reasons.push(`many requests (${candidate.metrics.requests})`);
  }
  if (Number.isFinite(candidate.metrics.transferBytes) && Number.isFinite(scores.transferHigh) && candidate.metrics.transferBytes >= scores.transferHigh) {
    score += 1;
    reasons.push(`high transfer (${candidate.metrics.transferBytes} bytes)`);
  }
  return { score, reasons };
}

/**
 * Order the candidate set for bounded Lighthouse investigation.
 *
 * The order is a selection policy, not a performance score. It puts nominated
 * top tasks and priority pages first, then one representative per page family,
 * then structurally unusual pages. Transfer size is only one weak signal.
 *
 * @param {object} input
 * @param {object} input.request
 * @param {object} input.evidence
 * @param {Array} input.candidates
 * @returns {object}
 */
export function orderPerformanceCandidates({ request, evidence, candidates }) {
  const scores = candidateStructuralScores(candidates);
  const enriched = candidates.map((candidate) => {
    const unusual = unusualScore(candidate, scores);
    return {
      ...candidate,
      unusualScore: unusual.score,
      unusualReasons: unusual.reasons,
      representativeScore: representativeScore(candidate, scores)
    };
  });

  const ordered = [];
  const seen = new Set();
  const add = (candidate, reason) => {
    if (!candidate || seen.has(candidate.normalizedUrl)) return;
    seen.add(candidate.normalizedUrl);
    ordered.push({ ...candidate, selectionReasons: [...new Set([...(candidate.reasons ?? []), reason])] });
  };

  const byPriority = [...enriched].sort((a, b) => (
    a.priority - b.priority || a.order - b.order || a.url.localeCompare(b.url)
  ));
  for (const candidate of byPriority) {
    if (candidate.priority <= SOURCE_PRIORITY.priority) {
      add(candidate, candidate.priority === SOURCE_PRIORITY["top-task"] ? "Nominated top task" : "Nominated priority page");
    }
  }

  const families = new Map();
  for (const candidate of enriched) {
    if (!candidate.familyId) continue;
    const group = families.get(candidate.familyId) ?? [];
    group.push(candidate);
    families.set(candidate.familyId, group);
  }
  const familyOrder = [...families.entries()].sort(([aKey, aGroup], [bKey, bGroup]) => {
    const aPriority = Math.min(...aGroup.map((item) => item.priority));
    const bPriority = Math.min(...bGroup.map((item) => item.priority));
    return aPriority - bPriority || bGroup.length - aGroup.length || aKey.localeCompare(bKey);
  });
  const coveredFamilies = new Set();
  for (const [familyId, group] of familyOrder) {
    if (coveredFamilies.has(familyId)) continue;
    const representative = [...group].sort((a, b) => (
      a.priority - b.priority
      || b.representativeScore - a.representativeScore
      || b.unusualScore - a.unusualScore
      || a.url.localeCompare(b.url)
    ))[0];
    add(representative, `Representative page for family '${familyId}'`);
    coveredFamilies.add(familyId);
  }

  const remaining = [...enriched].sort((a, b) => (
    b.unusualScore - a.unusualScore
    || a.priority - b.priority
    || a.url.localeCompare(b.url)
  ));
  for (const candidate of remaining) {
    add(candidate, candidate.unusualReasons.length > 0
      ? `Unusual page: ${candidate.unusualReasons.join(", ")}`
      : "Fills the bounded investigation budget");
  }

  const omittedFamilies = [...families.keys()].filter((familyId) => !coveredFamilies.has(familyId));
  return {
    ordered,
    familyCount: families.size,
    coveredFamilies: [...coveredFamilies],
    omittedFamilies,
    thresholds: scores
  };
}

/**
 * Assign each ordered candidate to reuse or a bounded Lighthouse run.
 * @param {object} input
 * @returns {object}
 */
export function planLighthouseRuns({ request, evidence, orderedCandidates, now = Date.now() }) {
  const runs = [];
  const reused = [];
  const skipped = [];
  let runBudget = request.limits.maxLighthouseAudits;
  const pageByUrl = new Map((evidence?.pages ?? []).map((page) => [page.normalizedUrl, page]));

  for (const candidate of orderedCandidates) {
    const page = pageByUrl.get(candidate.normalizedUrl) ?? (candidate.pageId
      ? (evidence?.pages ?? []).find((entry) => entry.id === candidate.pageId)
      : null);
    const reuse = reusableLighthouseEvidence({ page, evidence, request, now });
    if (reuse.reusable) {
      reused.push({ ...candidate, pageId: page.id, reason: reuse.reason });
      continue;
    }
    if (runBudget <= 0) {
      skipped.push({ ...candidate, reason: `Lighthouse budget of ${request.limits.maxLighthouseAudits} reached. ${reuse.reason}` });
      continue;
    }
    runBudget -= 1;
    runs.push({ ...candidate, reason: reuse.reason });
  }

  return {
    runs,
    reused,
    skipped,
    runBudget,
    requestedAudits: request.limits.maxLighthouseAudits
  };
}

function discoverySort(origin, urls) {
  return [...new Set(urls)].sort((a, b) => {
    if (a === origin) return -1;
    if (b === origin) return 1;
    const aPath = new URL(a).pathname;
    const bPath = new URL(b).pathname;
    const aKeyword = UNUSUAL_PATH_KEYWORDS.some((word) => aPath.toLowerCase().includes(word)) ? 0 : 1;
    const bKeyword = UNUSUAL_PATH_KEYWORDS.some((word) => bPath.toLowerCase().includes(word)) ? 0 : 1;
    return aKeyword - bKeyword || aPath.localeCompare(bPath) || a.localeCompare(b);
  });
}

/**
 * Bounded, polite URL discovery when no inventory exists. Uses the existing
 * sitemap and same-origin link helpers; it does not crawl every page.
 * @param {object} input
 * @returns {Promise<{urls: string[], method: string, limitations: string[]}>}
 */
export async function discoverPerformanceUrls({
  request,
  maxUrls = request.limits.maxPagesToInspect,
  timeoutMs = 30_000,
  fetchSitemap = fetchSitemapUrls,
  crawlLinks = crawlPageLinks
}) {
  const origin = request.site.origin;
  const limitations = [];
  let urls = [];
  let method = "none";
  try {
    urls = await fetchSitemap(origin, timeoutMs);
    if (urls.length > 0) method = "sitemap";
  } catch (error) {
    limitations.push(`Sitemap discovery failed: ${error.message}`);
  }
  if (urls.length === 0) {
    try {
      urls = await crawlLinks(origin, timeoutMs);
      if (urls.length > 0) method = "homepage-links";
    } catch (error) {
      limitations.push(`Homepage link discovery failed: ${error.message}`);
    }
  }

  const filtered = filterSameOriginUrls(urls, origin);
  const accepted = [];
  const rootCheck = validateTarget(origin);
  if (rootCheck.accepted && isSameSite(rootCheck.normalizedUrl, request.site.host)) {
    accepted.push(rootCheck.normalizedUrl);
  }
  for (const url of discoverySort(origin, filtered)) {
    if (accepted.length >= maxUrls) break;
    const check = validateTarget(url);
    if (check.accepted && isSameSite(check.normalizedUrl, request.site.host) && !accepted.includes(check.normalizedUrl)) {
      accepted.push(check.normalizedUrl);
    }
  }
  if (accepted.length === 0) {
    limitations.push("No same-origin HTML URLs were discovered; only explicitly supplied URLs can be inspected.");
  } else {
    limitations.push(`Discovery used ${method}; selection is deterministic and bounded to ${maxUrls} URLs.`);
  }
  return { urls: accepted, method, limitations };
}

export function summarizeSelection(plan, discovery = null) {
  return {
    candidates: plan.candidates.length,
    ordered: plan.ordered.length,
    runs: plan.runs.length,
    reused: plan.reused.length,
    skipped: plan.skipped.length,
    familyCount: plan.familyCount,
    coveredFamilies: plan.coveredFamilies,
    omittedFamilies: plan.omittedFamilies,
    discovery: discovery ? { method: discovery.method, urls: discovery.urls.length, limitations: discovery.limitations } : null
  };
}

const MAX_INITIAL_SITESPEED_PAGES = 3;

/**
 * Count performance findings that can be tied to a page without inventing
 * ownership. Context-only and static candidate explanations are excluded.
 * @param {object} evidence
 * @returns {Map<string, {total: number, observed: number, resourceIds: Set<string>}>}
 */
export function pageFindingIndex(evidence) {
  const index = new Map();
  const ensure = (pageId) => {
    if (!pageId) return null;
    const entry = index.get(pageId) ?? { total: 0, observed: 0, resourceIds: new Set() };
    index.set(pageId, entry);
    return entry;
  };
  const pageIdsForTarget = (target) => {
    if (!target) return [];
    if (target.type === "page") return [target.id];
    if (target.type === "component-instance") {
      const instance = (evidence?.componentInstances ?? []).find((entry) => entry.id === target.id);
      return instance ? [instance.pageId] : [];
    }
    if (target.type === "component-type") {
      return (evidence?.componentInstances ?? [])
        .filter((instance) => instance.typeId === target.id)
        .map((instance) => instance.pageId);
    }
    if (target.type === "resource") {
      const resource = (evidence?.resources ?? []).find((entry) => entry.id === target.id);
      return resource?.pageIds ?? [];
    }
    return [];
  };

  for (const finding of evidence?.findings ?? []) {
    if (["context-only", "candidate-explanation"].includes(finding.evidenceClass)) continue;
    for (const pageId of pageIdsForTarget(finding.target)) {
      const entry = ensure(pageId);
      if (!entry) continue;
      entry.total += 1;
      if (finding.evidenceClass === "observed" || finding.evidenceClass === "tested") entry.observed += 1;
      if (finding.target.type === "resource") entry.resourceIds.add(finding.target.id);
    }
  }
  return index;
}

/**
 * Select a small Sitespeed deep-investigation shortlist. This deliberately
 * caps the initial run at three pages and prioritises pages with existing
 * performance findings over pages with only a large transfer size.
 * @param {object} input
 * @returns {object}
 */
export function selectSitespeedPages({ request, evidence, orderedCandidates }) {
  const cap = Math.min(request.limits.maxSitespeedPages, MAX_INITIAL_SITESPEED_PAGES);
  const findingIndex = pageFindingIndex(evidence);
  const enriched = orderedCandidates.map((candidate) => {
    const findings = candidate.pageId ? findingIndex.get(candidate.pageId) : null;
    return {
      ...candidate,
      findingCount: findings?.total ?? 0,
      observedFindingCount: findings?.observed ?? 0,
      resourceFindingCount: findings?.resourceIds.size ?? 0
    };
  });

  const ordered = [];
  const seen = new Set();
  const add = (candidate, reason) => {
    if (!candidate || seen.has(candidate.normalizedUrl) || ordered.length >= cap) return;
    seen.add(candidate.normalizedUrl);
    ordered.push({ ...candidate, sitespeedReasons: [...new Set([...(candidate.selectionReasons ?? []), reason])] });
  };

  // Preserve nominated tasks even when the existing evidence is thin.
  const nominated = enriched
    .filter((candidate) => candidate.priority <= SOURCE_PRIORITY.priority)
    .sort((a, b) => a.priority - b.priority || a.order - b.order || a.url.localeCompare(b.url));
  for (const candidate of nominated) {
    add(candidate, candidate.priority === SOURCE_PRIORITY["top-task"] ? "Nominated top task" : "Nominated priority page");
  }

  // Existing findings are the next strongest reason to spend a deep run.
  const withFindings = enriched
    .filter((candidate) => candidate.findingCount > 0)
    .sort((a, b) => (
      b.observedFindingCount - a.observedFindingCount
      || b.findingCount - a.findingCount
      || a.priority - b.priority
      || b.unusualScore - a.unusualScore
      || a.url.localeCompare(b.url)
    ));
  for (const candidate of withFindings) {
    add(candidate, `Existing performance finding(s): ${candidate.findingCount} (${candidate.observedFindingCount} observed)`);
  }

  // One representative per family, then unusual pages.
  const families = new Map();
  for (const candidate of enriched) {
    if (!candidate.familyId) continue;
    const group = families.get(candidate.familyId) ?? [];
    group.push(candidate);
    families.set(candidate.familyId, group);
  }
  for (const [familyId, group] of [...families.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const representative = [...group].sort((a, b) => (
      b.representativeScore - a.representativeScore
      || b.findingCount - a.findingCount
      || a.priority - b.priority
      || a.url.localeCompare(b.url)
    ))[0];
    add(representative, `Representative page for family '${familyId}'`);
  }

  for (const candidate of enriched) {
    add(candidate, candidate.unusualReasons?.length
      ? `Unusual page: ${candidate.unusualReasons.join(", ")}`
      : "Fills the deep-investigation shortlist");
  }

  const selectedUrls = new Set(ordered.map((candidate) => candidate.normalizedUrl));
  const skipped = enriched
    .filter((candidate) => !selectedUrls.has(candidate.normalizedUrl))
    .map((candidate) => ({
      url: candidate.url,
      pageId: candidate.pageId,
      familyId: candidate.familyId,
      reason: ordered.length >= cap
        ? `Initial Sitespeed cap of ${MAX_INITIAL_SITESPEED_PAGES} page(s) reached.`
        : "Not selected by the evidence/family/unusual order."
    }));

  return {
    selected: ordered,
    skipped,
    cap,
    requested: request.limits.maxSitespeedPages,
    capped: request.limits.maxSitespeedPages > MAX_INITIAL_SITESPEED_PAGES,
    findingIndex: Object.fromEntries([...findingIndex.entries()].map(([pageId, entry]) => [pageId, {
      total: entry.total,
      observed: entry.observed,
      resourceFindings: entry.resourceIds.size
    }]))
  };
}
