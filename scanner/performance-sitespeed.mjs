import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { promisify } from "node:util";
import {
  createMetric,
  createSourceRef,
  normalizeUrl,
  stableId
} from "./performance-evidence.mjs";

const execFileAsync = promisify(execFile);

export const SITESPEED_IMAGE = "sitespeedio/sitespeed.io:43.0.0";
export const SITESPEED_VERSION = "43.0.0";
export const SITESPEED_RUNS = 3;
export const SITESPEED_ADAPTER_VERSION = "1.0.0";
export const SITESPEED_PROVIDER_VERSION = "1.0.0";
const SITESPEED_TIMEOUT_MS = 15 * 60 * 1000;
const MAX_OUTPUT_BYTES = 25 * 1024 * 1024;

export class SitespeedRunError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "SitespeedRunError";
    this.details = details;
  }
}

export function sitespeedContainerName(seed) {
  return `open-scans-sitespeed-${createHash("sha256").update(String(seed)).digest("hex").slice(0, 12)}`;
}

function firstPartyRegex(host) {
  const escaped = String(host).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return `.*${escaped}.*`;
}

/**
 * Build a pinned Sitespeed Docker invocation. The image, browser, iteration
 * count, sustainable model and analysisstorer plugin are all explicit.
 * @param {object} input
 * @returns {{args: string[], containerName: string}}
 */
export function buildSitespeedArgs({ urls, request, outputDir, runs = SITESPEED_RUNS, nameSeed }) {
  const containerName = sitespeedContainerName(nameSeed ?? urls.join("|"));
  const args = [
    "run",
    "--rm",
    "--name", containerName,
    "--shm-size=1g",
    "--security-opt=no-new-privileges",
    "--pids-limit=512",
    "--memory=2g",
    "--cpus=2",
    "--network=bridge",
    "-v", `${resolve(outputDir)}:/sitespeed.io`,
    "-w", "/sitespeed.io",
    SITESPEED_IMAGE,
    ...urls,
    "--browser", "chrome",
    "--iterations", String(runs),
    "--mobile", request.measurement.profile === "mobile" ? "true" : "false",
    "--viewPort", `${request.measurement.viewport.width}x${request.measurement.viewport.height}`,
    "--connectivity", "native",
    "--visualMetrics", "true",
    "--video", "false",
    "--screenshot", "false",
    "--screenshotLCP", "false",
    "--screenshotLS", "false",
    "--cpu", "true",
    "--plugins.add", "analysisstorer",
    "--plugins.remove", "html",
    "--plugins.remove", "harstorer",
    "--sustainable.enable",
    "--sustainable.model", "swd",
    "--sustainable.modelVersion", "4",
    "--sustainable.disableHosting", "true",
    "--firstParty", firstPartyRegex(request.site.host),
    "--outputFolder", "/sitespeed.io",
    "--maxLoadTime", "60000",
    "--logLevel", "warning"
  ];
  return { args, containerName };
}

async function dockerImageDigest(image) {
  try {
    const { stdout } = await execFileAsync("docker", ["image", "inspect", "--format", "{{.Id}}", image], {
      timeout: 15_000,
      maxBuffer: 1024 * 1024
    });
    return stdout.trim() || null;
  } catch {
    return null;
  }
}

async function ensureDocker() {
  try {
    await execFileAsync("docker", ["version", "--format", "{{.Server.Version}}"], {
      timeout: 15_000,
      maxBuffer: 1024 * 1024
    });
  } catch (error) {
    throw new SitespeedRunError(
      "Docker is not available. Sitespeed deep investigation requires a running Docker daemon.",
      { code: "docker-unavailable", cause: error.message }
    );
  }
}

/**
 * Run Sitespeed in an isolated Docker container. No Playwright or Browsertime
 * session is shared with the rest of Open Scans.
 * @param {object} input
 * @returns {Promise<object>}
 */
export async function runSitespeed({
  urls,
  request,
  artifactsDir,
  runs = SITESPEED_RUNS,
  timeoutMs = SITESPEED_TIMEOUT_MS
}) {
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new SitespeedRunError("Sitespeed needs at least one approved URL.", { code: "no-urls" });
  }
  await ensureDocker();
  const runId = `${Date.now()}-${createHash("sha256").update(urls.join("|")).digest("hex").slice(0, 8)}`;
  const outputDir = resolve(artifactsDir, `sitespeed-${runId}`);
  mkdirSync(outputDir, { recursive: true });
  const { args, containerName } = buildSitespeedArgs({
    urls,
    request,
    outputDir,
    runs,
    nameSeed: `${urls.join("|")}:${runId}`
  });
  const startedAt = Date.now();
  let failed = null;
  try {
    await execFileAsync("docker", args, {
      timeout: timeoutMs,
      maxBuffer: MAX_OUTPUT_BYTES
    });
  } catch (error) {
    failed = error;
    // The Docker client can be killed before the container exits. Make sure a
    // bounded run does not leave a browser container behind.
    try {
      await execFileAsync("docker", ["rm", "-f", containerName], { timeout: 30_000, maxBuffer: 1024 * 1024 });
    } catch {
      // Container may already be gone.
    }
  }

  const digest = await dockerImageDigest(SITESPEED_IMAGE);
  const jsonFiles = listJsonFiles(outputDir);
  const durationMs = Date.now() - startedAt;
  if (failed) {
    const timedOut = failed.killed === true || /timed out/i.test(failed.message);
    throw new SitespeedRunError(
      `Sitespeed run failed${timedOut ? " (timeout)" : ""}: ${failed.message}`
      + (jsonFiles.length > 0 ? ` Partial JSON remains at ${outputDir}.` : ""),
      {
        code: timedOut ? "timeout" : "run-failed",
        outputDir,
        jsonFiles,
        durationMs,
        imageDigest: digest
      }
    );
  }

  return {
    outputDir,
    relativeDir: relative(artifactsDir, outputDir),
    jsonFiles,
    durationMs,
    imageDigest: digest,
    runs,
    urls
  };
}

export function listJsonFiles(root) {
  const out = [];
  const visit = (dir) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) visit(full);
      else if (entry.isFile() && entry.name.endsWith(".json")) out.push(full);
    }
  };
  if (existsSync(root)) visit(root);
  return out;
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function collectGroups(root) {
  const groups = new Map();
  for (const file of listJsonFiles(root)) {
    const dir = dirname(file);
    const group = groups.get(dir) ?? { dir, files: {} };
    const name = basename(file);
    if (name.startsWith("browsertime.pageSummary")) group.summary = file;
    else if (name.startsWith("browsertime.run-")) {
      group.runs = group.runs ?? [];
      group.runs.push(file);
    } else if (name.startsWith("pagexray.run-")) {
      group.pageXray = group.pageXray ?? [];
      group.pageXray.push(file);
    } else if (name.startsWith("sustainable.pageSummary")) group.sustainableSummary = file;
    else if (name === "sustainable.run.json" || name.startsWith("sustainable.run-")) {
      group.sustainableRuns = group.sustainableRuns ?? [];
      group.sustainableRuns.push(file);
    } else if (name.startsWith("coach.pageSummary")) group.coach = file;
    groups.set(dir, group);
  }
  return [...groups.values()].filter((group) => (
    group.summary || group.runs || group.pageXray || group.sustainableSummary || group.sustainableRuns || group.coach
  ));
}

function statValue(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (value && typeof value === "object") {
    if (typeof value.median === "number" && Number.isFinite(value.median)) return value.median;
    if (typeof value.mean === "number" && Number.isFinite(value.mean)) return value.mean;
  }
  return null;
}

function getPath(object, path) {
  let current = object;
  for (const key of path) {
    if (!current || typeof current !== "object" || !(key in current)) return null;
    current = current[key];
  }
  return current;
}

function firstStat(object, paths) {
  for (const path of paths) {
    const value = statValue(getPath(object, path));
    if (value !== null) return value;
  }
  return null;
}

function metric({ name, value, unit, source, pageId, browser, method, boundary, evidenceRef, limitations = [] }) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  return createMetric({
    name,
    value,
    unit,
    scope: "page",
    sourceId: source.id,
    measurementSourceId: "sitespeed",
    tool: "sitespeed",
    toolVersion: SITESPEED_VERSION,
    browser,
    method,
    boundary,
    evidenceRef,
    confidence: "high",
    limitations
  });
}

function resourceKind(type) {
  const normalized = String(type ?? "").toLowerCase();
  if (normalized.includes("javascript") || normalized === "script") return "script";
  if (normalized.includes("css") || normalized === "stylesheet") return "stylesheet";
  if (normalized.includes("font")) return "font";
  if (normalized.includes("image")) return "image";
  if (normalized.includes("html") || normalized.includes("document")) return "iframe";
  if (normalized.includes("video") || normalized.includes("audio") || normalized.includes("media")) return "media";
  return "other";
}

function resourceThirdParty(url, baseDomain) {
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    const base = String(baseDomain ?? "").toLowerCase().replace(/^www\./, "");
    return !(host === base || host.endsWith(`.${base}`));
  } catch {
    return null;
  }
}

function normalizePageGroup({
  group,
  source,
  request,
  pageId,
  rawDir,
  expectedUrl
}) {
  const summary = group.summary ? readJson(group.summary) : null;
  const firstRun = group.runs?.length ? readJson(group.runs[0]) : null;
  const pageXray = group.pageXray?.length ? readJson(group.pageXray[0]) : null;
  const sustainableSummary = group.sustainableSummary ? readJson(group.sustainableSummary) : null;
  const url = summary?.url
    ?? summary?.info?.url
    ?? firstRun?.url
    ?? firstRun?.pageinfo?.url
    ?? pageXray?.url
    ?? sustainableSummary?.url
    ?? expectedUrl;
  if (!url) return { error: `Could not determine a URL for ${group.dir}` };
  const normalizedUrl = normalizeUrl(url);
  const id = pageId ?? stableId("ss-pg", normalizedUrl);
  const browserMeta = pageXray?.meta?.browser ?? summary?.meta?.browser ?? firstRun?.info?.browser ?? null;
  const browser = browserMeta
    ? `${browserMeta.name ?? "browser"} ${browserMeta.version ?? ""}`.trim()
    : null;
  const windowSize = String(firstRun?.browser?.windowSize ?? "");
  const actualViewportMatch = windowSize.match(/^(\d+)x(\d+)$/);
  const actualViewport = actualViewportMatch
    ? { width: Number(actualViewportMatch[1]), height: Number(actualViewportMatch[2]) }
    : { width: request.measurement.viewport.width, height: request.measurement.viewport.height };
  const method = `Sitespeed.io ${SITESPEED_VERSION} / Browsertime chrome, ${group.runs?.length ?? "unknown"} run(s), connectivity ${pageXray?.meta?.connectivity ?? "unknown"}`;
  const boundary = pageXray?.meta?.connectivity === "native"
    ? "Chromium lab, Sitespeed/Browsertime native connectivity (not simulated Lighthouse throttling)"
    : "Chromium lab, Sitespeed/Browsertime, source-declared connectivity";
  const statistics = summary?.statistics ?? {};
  const metrics = [];
  const pushMetric = (name, value, unit, evidenceRef, limitations = []) => {
    const entry = metric({
      name,
      value,
      unit,
      source,
      pageId: id,
      browser,
      method,
      boundary,
      evidenceRef,
      limitations
    });
    if (entry) metrics.push(entry);
  };
  pushMetric("first-paint", firstStat(statistics, [["timings", "firstPaint"]]), "ms", `${rawDir}#browsertime.pageSummary.statistics.timings.firstPaint`);
  pushMetric("fcp", firstStat(statistics, [
    ["timings", "paintTiming", "first-contentful-paint"],
    ["timings", "paintTiming", "firstContentfulPaint"]
  ]), "ms", `${rawDir}#browsertime.pageSummary.statistics.timings.paintTiming`);
  pushMetric("lcp", firstStat(statistics, [
    ["timings", "largestContentfulPaint", "renderTime"],
    ["timings", "largestContentfulPaint"]
  ]), "ms", `${rawDir}#browsertime.pageSummary.statistics.timings.largestContentfulPaint`);
  pushMetric("ttfb", firstStat(statistics, [["timings", "pageTimings", "backEndTime"]]), "ms", `${rawDir}#browsertime.pageSummary.statistics.timings.pageTimings.backEndTime`);
  pushMetric("dom-content-loaded", firstStat(statistics, [["timings", "pageTimings", "domContentLoadedTime"]]), "ms", `${rawDir}#browsertime.pageSummary.statistics.timings.pageTimings.domContentLoadedTime`);
  pushMetric("load", firstStat(statistics, [["timings", "pageTimings", "pageLoadTime"]]), "ms", `${rawDir}#browsertime.pageSummary.statistics.timings.pageTimings.pageLoadTime`);
  pushMetric("speed-index", firstStat(statistics, [
    ["visualMetrics", "SpeedIndex"],
    ["timings", "visualMetrics", "SpeedIndex"]
  ]), "ms", `${rawDir}#browsertime.pageSummary.statistics.visualMetrics.SpeedIndex`);
  pushMetric("first-visual-change", firstStat(statistics, [
    ["visualMetrics", "FirstVisualChange"],
    ["timings", "visualMetrics", "FirstVisualChange"]
  ]), "ms", `${rawDir}#browsertime.pageSummary.statistics.visualMetrics.FirstVisualChange`);
  pushMetric("last-visual-change", firstStat(statistics, [
    ["visualMetrics", "LastVisualChange"],
    ["timings", "visualMetrics", "LastVisualChange"]
  ]), "ms", `${rawDir}#browsertime.pageSummary.statistics.visualMetrics.LastVisualChange`);
  pushMetric("cls", firstStat(statistics, [["pageinfo", "cumulativeLayoutShift"]]), "score", `${rawDir}#browsertime.pageSummary.statistics.pageinfo.cumulativeLayoutShift`);
  pushMetric("tbt", firstStat(statistics, [["cpu", "longTasks", "totalBlockingTime"]]), "ms", `${rawDir}#browsertime.pageSummary.statistics.cpu.longTasks.totalBlockingTime`);
  pushMetric("transfer-bytes", firstStat(statistics, [["transferSize"]]) ?? pageXray?.statistics?.transferSize?.median ?? pageXray?.transferSize, "bytes", `${rawDir}#pagexray.run-1.transferSize`);
  pushMetric("requests", firstStat(statistics, [["requests"]]) ?? pageXray?.statistics?.requests?.median ?? pageXray?.requests, "count", `${rawDir}#pagexray.run-1.requests`);

  const resources = [];
  const assets = Array.isArray(pageXray?.assets) ? pageXray.assets : [];
  for (const [index, asset] of assets.slice(0, 300).entries()) {
    if (!asset?.url || !/^https?:\/\//i.test(asset.url)) continue;
    let assetNormalized;
    try {
      assetNormalized = normalizeUrl(asset.url);
    } catch {
      continue;
    }
    // The main document is the page itself, not a component/subresource.
    if (assetNormalized === normalizedUrl) continue;
    resources.push({
      id: stableId("ss-rs", `${id}:${assetNormalized}`, 12),
      sourceId: source.id,
      url: asset.url,
      normalizedUrl: assetNormalized,
      kind: resourceKind(asset.type),
      thirdParty: resourceThirdParty(asset.url, pageXray?.baseDomain ?? request.site.host),
      sizeBytes: typeof asset.transferSize === "number" ? asset.transferSize : null,
      sizeStatistic: typeof asset.transferSize === "number" ? "single" : null,
      timingMs: typeof asset.totalTime === "number" ? asset.totalTime : null,
      pageIds: [id],
      instanceIds: [],
      attribution: "page-level",
      sourceRefs: [createSourceRef(source.id, `${rawDir}#pagexray.run-1.assets[${index}]`)],
      limitations: [
        "Sitespeed page-level asset observation; it does not establish component ownership."
      ]
    });
  }
  const findings = [];

  const sustainable = sustainableSummary ?? (group.sustainableRuns?.length ? readJson(group.sustainableRuns[0]) : null);
  const co2Version = sustainableSummary?.co2Version ?? sustainable?.co2Version ?? null;
  if (sustainable) {
    const co2 = statValue(sustainable.co2PerPageView) ?? statValue(sustainable.totalCO2);
    const co2First = statValue(sustainable.co2FirstParty);
    const co2Third = statValue(sustainable.co2ThirdParty);
    const co2Ref = `${rawDir}#sustainable.pageSummary.co2PerPageView`;
    const co2Metric = co2 === null ? null : createMetric({
      name: "co2-per-page-view",
      value: co2,
      unit: "gCO2e",
      scope: "page",
      sourceId: source.id,
      measurementSourceId: "sitespeed",
      tool: "sitespeed",
      toolVersion: SITESPEED_VERSION,
      browser,
      method: `CO2.js ${co2Version ?? "version not stated"} Sustainable Web Design v4 through Sitespeed Sustainable Web`,
      boundary: "modelled-transfer",
      evidenceRef: co2Ref,
      confidence: "medium",
      limitations: [
        "Modelled emissions from transferred bytes; not physically measured client energy.",
        "Imported from Sitespeed's Sustainable Web plugin; not recalculated by Open Scans.",
        "Green-hosting lookup uses the source's local database; an unlisted host is treated as grid-powered, not proven grey."
      ]
    });
    if (co2Metric) {
      metrics.push(co2Metric);
      findings.push({
        id: stableId("ss-co2", `${id}:page`),
        sourceId: source.id,
        sourceFindingId: null,
        kind: "modelled-emissions",
        phase: "load",
        title: "Modelled CO2e per page view",
        target: { type: "page", id },
        metric: co2Metric,
        evidenceClass: "associated",
        confidence: "medium",
        evidenceRef: co2Ref,
        limitations: co2Metric.limitations
      });
    }
    if (co2First !== null || co2Third !== null) {
      findings.push({
        id: stableId("ss-co2-party", `${id}:party`),
        sourceId: source.id,
        sourceFindingId: null,
        kind: "modelled-emissions-by-party",
        phase: "load",
        title: "Modelled CO2e split by first/third party",
        target: { type: "page", id },
        metric: co2Third === null ? null : createMetric({
          name: "co2-third-party",
          value: co2Third,
          unit: "gCO2e",
          scope: "page",
          sourceId: source.id,
          measurementSourceId: "sitespeed",
          tool: "sitespeed",
          toolVersion: SITESPEED_VERSION,
          browser,
          method: `CO2.js ${co2Version ?? "version not stated"} SWD v4 through Sitespeed`,
          boundary: "modelled-transfer",
          evidenceRef: `${rawDir}#sustainable.pageSummary.co2ThirdParty`,
          confidence: "medium",
          limitations: [
            `First-party modelled value: ${co2First ?? "not stated"} gCO2e.`,
            "Do not add first- and third-party figures to an energy measurement."
          ]
        }),
        evidenceClass: "associated",
        confidence: "medium",
        evidenceRef: `${rawDir}#sustainable.pageSummary.co2ThirdParty`,
        limitations: [
          "Modelled transfer emissions by party; not measured client energy.",
          "Source party labels are preserved; Sitespeed's firstParty regex can classify counterintuitively. Do not infer ownership from the label."
        ]
      });
    }
  }

  const thirdParty = pageXray?.thirdParty;
  if (thirdParty && typeof thirdParty === "object") {
    const thirdPartyBytes = typeof thirdParty.transferSize === "number" ? thirdParty.transferSize : 0;
    findings.push({
      id: stableId("ss-third", `${id}:third-party`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: "third-party-transfer",
      phase: "load",
      title: "Third-party transfer",
      target: { type: "page", id },
      metric: createMetric({
        name: "third-party-transfer-bytes",
        value: thirdPartyBytes,
        unit: "bytes",
        scope: "page",
        sourceId: source.id,
        measurementSourceId: "sitespeed",
        tool: "sitespeed",
        toolVersion: SITESPEED_VERSION,
        browser,
        method,
        boundary,
        evidenceRef: `${rawDir}#pagexray.run-1.thirdParty.transferSize`,
        confidence: "high",
        limitations: ["Network transfer associated with third-party hosts; not a performance cause."]
      }),
      evidenceClass: "observed",
      confidence: "high",
      evidenceRef: `${rawDir}#pagexray.run-1.thirdParty`,
      limitations: ["Third-party transfer is a resource observation, not component ownership."]
    });
  }

  const topResources = [...resources]
    .filter((resource) => resource.sizeBytes !== null)
    .sort((a, b) => b.sizeBytes - a.sizeBytes)
    .slice(0, 5);
  for (const resource of topResources) {
    findings.push({
      id: stableId("ss-rs-fnd", `${id}:${resource.id}`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: "resource-observation",
      phase: "load",
      title: `Large resource: ${resource.url.split("/").pop() || resource.url}`,
      target: { type: "resource", id: resource.id },
      metric: createMetric({
        name: "resource-transfer-bytes",
        value: resource.sizeBytes,
        unit: "bytes",
        scope: "resource",
        sourceId: source.id,
        measurementSourceId: "sitespeed",
        tool: "sitespeed",
        toolVersion: SITESPEED_VERSION,
        browser,
        method,
        boundary,
        evidenceRef: resource.sourceRefs[0]?.ref ?? null,
        confidence: "high",
        limitations: ["Resource-level observation; attribution to a component requires separate evidence."]
      }),
      evidenceClass: "observed",
      confidence: "high",
      evidenceRef: resource.sourceRefs[0]?.ref ?? null,
      limitations: ["A large resource is a reason to investigate, not a confirmed cause."]
    });
  }

  const tbt = metrics.find((entry) => entry.name === "tbt");
  if (tbt) {
    findings.push({
      id: stableId("ss-long", `${id}:long-tasks`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: "long-task",
      phase: "load",
      title: "Total blocking time",
      target: { type: "page", id },
      metric: tbt,
      evidenceClass: "observed",
      confidence: "high",
      evidenceRef: tbt.evidenceRef,
      limitations: ["Chromium/Browsertime long-task observation; not Firefox energy."]
    });
  }

  const longTaskCount = pageXray?.cpu?.longTasks?.tasks;
  if (typeof longTaskCount === "number") {
    findings.push({
      id: stableId("ss-long-count", `${id}:long-task-count`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: "long-task-count",
      phase: "load",
      title: "Long tasks during load",
      target: { type: "page", id },
      metric: createMetric({
        name: "long-task-count",
        value: longTaskCount,
        unit: "count",
        scope: "page",
        sourceId: source.id,
        measurementSourceId: "sitespeed",
        tool: "sitespeed",
        toolVersion: SITESPEED_VERSION,
        browser,
        method,
        boundary,
        evidenceRef: `${rawDir}#pagexray.run-1.cpu.longTasks.tasks`,
        confidence: "high",
        limitations: ["A count of long tasks, not a per-script CPU attribution."]
      }),
      evidenceClass: "observed",
      confidence: "high",
      evidenceRef: `${rawDir}#pagexray.run-1.cpu.longTasks.tasks`,
      limitations: ["Per-script CPU attribution requires trace/source evidence not present in this payload."]
    });
  }

  const renderBlocking = pageXray?.renderBlocking;
  if (renderBlocking && typeof renderBlocking === "object") {
    const blocking = Number(renderBlocking.blocking ?? 0)
      + Number(renderBlocking.potentiallyBlocking ?? 0)
      + Number(renderBlocking.in_body_parser_blocking ?? 0);
    findings.push({
      id: stableId("ss-render", `${id}:render-blocking`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: "render-blocking",
      phase: "load",
      title: "Render-blocking resources",
      target: { type: "page", id },
      metric: createMetric({
        name: "render-blocking-count",
        value: blocking,
        unit: "count",
        scope: "page",
        sourceId: source.id,
        measurementSourceId: "sitespeed",
        tool: "sitespeed",
        toolVersion: SITESPEED_VERSION,
        browser,
        method,
        boundary,
        evidenceRef: `${rawDir}#pagexray.run-1.renderBlocking`,
        confidence: "high",
        limitations: ["A count of blocking/potentially blocking assets; not a measured delay."]
      }),
      evidenceClass: "observed",
      confidence: "high",
      evidenceRef: `${rawDir}#pagexray.run-1.renderBlocking`,
      limitations: ["Render-blocking classification is source-declared; it does not establish component ownership."]
    });
  }

  return {
    page: {
      id,
      url,
      normalizedUrl,
      familyId: null,
      sourceIds: [source.id],
      contexts: [{
        browser,
        viewport: actualViewport,
        profile: request.measurement.profile,
        method,
        sourceId: source.id
      }],
      metrics,
      sourceRefs: [createSourceRef(source.id, `${rawDir}#browsertime.pageSummary`)],
      limitations: [
        "Sitespeed/Browsertime Chromium lab evidence; not field data and not Firefox energy.",
        `Connectivity: ${pageXray?.meta?.connectivity ?? "not stated"}; do not compare directly with Lighthouse simulated throttling.`,
        ...(actualViewport.width !== request.measurement.viewport.width || actualViewport.height !== request.measurement.viewport.height
          ? [`Browsertime reported a ${actualViewport.width}x${actualViewport.height} window; the request asked for ${request.measurement.viewport.width}x${request.measurement.viewport.height}.`]
          : [])
      ]
    },
    resources,
    findings,
    browser,
    url
  };
}

/**
 * Normalize Sitespeed analysisstorer output into one evidence fragment.
 * @param {object} input
 * @returns {object}
 */
export function normalizeSitespeedOutput({ outputDir, relativeDir, source, request, pageIdByUrl = new Map() }) {
  const groups = collectGroups(outputDir);
  if (groups.length === 0) {
    throw new SitespeedRunError("Sitespeed produced no analysisstorer JSON files.", { code: "no-output", outputDir });
  }
  const pages = [];
  const resources = [];
  const findings = [];
  const limitations = [];
  let browser = null;
  const seenUrls = new Set();

  for (const group of groups) {
    const summary = group.summary ? readJson(group.summary) : null;
    const firstRun = group.runs?.[0] ? readJson(group.runs[0]) : null;
    const expectedUrl = summary?.url ?? summary?.info?.url
      ?? firstRun?.url ?? firstRun?.pageinfo?.url
      ?? (group.pageXray?.[0] ? readJson(group.pageXray[0])?.url : null)
      ?? (group.sustainableSummary ? readJson(group.sustainableSummary)?.url : null);
    let candidatePageId = null;
    if (expectedUrl) {
      try {
        candidatePageId = pageIdByUrl.get(normalizeUrl(expectedUrl)) ?? null;
      } catch {
        candidatePageId = null;
      }
    }
    const normalized = normalizePageGroup({
      group,
      source,
      request,
      pageId: candidatePageId,
      rawDir: relativeDir,
      expectedUrl
    });
    if (normalized.error) {
      limitations.push(normalized.error);
      continue;
    }
    if (seenUrls.has(normalized.page.normalizedUrl)) continue;
    seenUrls.add(normalized.page.normalizedUrl);
    pages.push(normalized.page);
    resources.push(...normalized.resources);
    findings.push(...normalized.findings);
    browser = normalized.browser ?? browser;
  }

  if (pages.length === 0) {
    throw new SitespeedRunError("Sitespeed output contained no usable page results.", { code: "no-pages", outputDir });
  }

  const context = {
    browser,
    viewport: { width: request.measurement.viewport.width, height: request.measurement.viewport.height },
    profile: request.measurement.profile,
    method: `Sitespeed.io ${SITESPEED_VERSION} / Browsertime chrome`,
    boundary: "Chromium lab, Sitespeed/Browsertime"
  };
  return {
    sourceMeta: {
      tool: "sitespeed",
      toolVersion: SITESPEED_VERSION,
      collectedAt: pagexrayTimestamp(groups) ?? new Date().toISOString(),
      schemaVersion: `analysisstorer/${SITESPEED_VERSION}`,
      limitations
    },
    pages,
    pageFamilies: [],
    componentTypes: [],
    componentInstances: [],
    resources,
    findings,
    experiments: [],
    investigation: [],
    measurementSources: [{
      id: "sitespeed",
      sourceId: source.id,
      browser: context.browser,
      tool: "sitespeed",
      toolVersion: SITESPEED_VERSION,
      timestamp: pagexrayTimestamp(groups),
      method: context.method,
      boundary: context.boundary
    }],
    coverage: {
      discoveredPages: null,
      inspectedPages: pages.length,
      basis: "Sitespeed analysisstorer pages",
      limitations: [
        "Sitespeed ran only the approved shortlist; this is not a site inventory.",
        "Raw Sitespeed artifacts remain in the bounded artifact directory, not Git."
      ]
    },
    limitations: [
      "Sitespeed/Browsertime Chromium lab evidence; not field data and not Firefox energy.",
      "CO2.js values from the Sitespeed Sustainable Web plugin are modelled transfer emissions, never observed client energy.",
      "Green-hosting matching is disabled for this release; every host is modelled as grid-powered using the CO2.js global average.",
      "Sitespeed and Lighthouse use different browsers, throttling and measurement boundaries; keep their metrics separate.",
      "The Docker container has its own Chrome/Browsertime session; it is not shared with Playwright.",
      ...limitations
    ]
  };
}

function pagexrayTimestamp(groups) {
  for (const group of groups) {
    const pagexray = group.pageXray?.length ? readJson(group.pageXray[0]) : null;
    if (pagexray?.meta?.startedDateTime) return pagexray.meta.startedDateTime;
  }
  return null;
}

export function summarizeSitespeedRun(run) {
  return {
    image: SITESPEED_IMAGE,
    imageDigest: run.imageDigest ?? null,
    urls: run.urls ?? [],
    runs: run.runs ?? SITESPEED_RUNS,
    jsonFiles: run.jsonFiles?.length ?? 0,
    durationMs: run.durationMs ?? null
  };
}

/** Content digest over the bounded analysisstorer JSON files. */
export function digestSitespeedOutput(jsonFiles) {
  // Hash file name + content, not the absolute artifact path, so the same
  // bounded output has the same provenance digest when it is moved.
  const parts = jsonFiles.map((file) => (
    `${basename(file)}:${createHash("sha256").update(readFileSync(file)).digest("hex")}`
  )).sort();
  return `sha256:${createHash("sha256").update(parts.join("\n")).digest("hex")}`;
}
