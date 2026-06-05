import { readFileSync } from "node:fs";

const ACT_MAPPING_PATH = new URL("./data/act-mapping.json", import.meta.url);
const QUALWEB_README_PATH = new URL("../node_modules/@qualweb/act-rules/README.md", import.meta.url);
const SUPPORTED_ENGINES = new Set(["axe", "alfa", "qualweb"]);

let cachedMapping = null;
let cachedRuleIndex = null;

function normalizeRuleKey(engine, ruleId) {
  const normalizedEngine = String(engine).trim().toLowerCase();
  const rawRuleId = String(ruleId).trim();
  const normalizedRuleId = normalizedEngine === "alfa"
    ? (rawRuleId.match(/sia-r(\d+)$/i)?.[0] || rawRuleId)
    : rawRuleId;
  return `${normalizedEngine}:${normalizedRuleId.toLowerCase()}`;
}

function normalizeLocator(value) {
  const text = String(value ?? "").trim();
  return text ? text.replace(/\s+/g, " ").toLowerCase() : "(no-locator)";
}

function parseQualWebMappings(readmeText) {
  const mappings = new Map();
  const tableRows = readmeText.split(/\r?\n/);

  for (const row of tableRows) {
    const match = row.match(/^\|\s*(QW-ACT-R\d+)\s*\|\s*\[([0-9a-z]+)\]/i);
    if (!match) continue;

    const ruleId = match[1].toUpperCase();
    const actRuleId = match[2].toLowerCase();
    if (!mappings.has(ruleId)) {
      mappings.set(ruleId, new Set());
    }
    mappings.get(ruleId).add(actRuleId);
  }

  return mappings;
}

export function loadActMapping() {
  if (!cachedMapping) {
    cachedMapping = JSON.parse(readFileSync(ACT_MAPPING_PATH, "utf8"));
  }
  return cachedMapping;
}

export function buildActRuleIndex() {
  if (cachedRuleIndex) {
    return cachedRuleIndex;
  }

  const mapping = loadActMapping();
  const index = new Map();

  for (const [actRuleId, perEngine] of Object.entries(mapping.byActRuleId || {})) {
    for (const [engine, ruleIds] of Object.entries(perEngine || {})) {
      if (!SUPPORTED_ENGINES.has(engine)) continue;
      for (const ruleId of ruleIds || []) {
        const key = normalizeRuleKey(engine, ruleId);
        if (!index.has(key)) {
          index.set(key, new Set());
        }
        index.get(key).add(actRuleId);
      }
    }
  }

  const qualwebReadme = readFileSync(QUALWEB_README_PATH, "utf8");
  const qualwebMappings = parseQualWebMappings(qualwebReadme);
  for (const [ruleId, actRuleIds] of qualwebMappings.entries()) {
    const key = normalizeRuleKey("qualweb", ruleId);
    if (!index.has(key)) {
      index.set(key, new Set());
    }
    for (const actRuleId of actRuleIds) {
      index.get(key).add(actRuleId);
    }
  }

  cachedRuleIndex = index;
  return cachedRuleIndex;
}

export function getActRuleIds(engine, ruleId) {
  return [...(buildActRuleIndex().get(normalizeRuleKey(engine, ruleId)) || [])];
}

export function collectActConsensusOverlaps(results) {
  const dedupeMap = new Map();
  const actCapableScanners = ["axe", "alfa", "qualweb"];

  for (const result of results ?? []) {
    const resultUrl = result.finalUrl || result.submittedUrl || "(unknown-url)";

    for (const scannerName of actCapableScanners) {
      const scanner = result?.[scannerName];
      if (!scanner || !Array.isArray(scanner.failures)) continue;

      for (const failure of scanner.failures) {
        if (failure.isDuplicate) continue;

        const actRuleIds = getActRuleIds(scannerName, failure.rule);
        if (actRuleIds.length === 0) continue;

        const locator = normalizeLocator(failure.xpath || failure.selector || failure.html);
        for (const actRuleId of actRuleIds) {
          const key = `${resultUrl}|${actRuleId}|${locator}`;
          if (!dedupeMap.has(key)) {
            dedupeMap.set(key, {
              key,
              actRuleId,
              url: resultUrl,
              locator,
              scanners: new Set(),
              scannerRules: new Map(),
              occurrences: 0,
              examples: []
            });
          }

          const entry = dedupeMap.get(key);
          entry.scanners.add(scannerName);
          if (!entry.scannerRules.has(scannerName)) {
            entry.scannerRules.set(scannerName, new Set());
          }
          entry.scannerRules.get(scannerName).add(failure.rule || "unknown-rule");
          entry.occurrences += 1;

          if (entry.examples.length < 3) {
            entry.examples.push({
              scanner: scannerName,
              rule: failure.rule || null,
              message: failure.message || null,
              xpath: failure.xpath || failure.selector || null
            });
          }
        }
      }
    }
  }

  const overlapEntries = [...dedupeMap.values()]
    .filter((entry) => entry.scanners.size > 1)
    .map((entry) => ({
      ...entry,
      scanners: [...entry.scanners],
      scannerRules: Object.fromEntries(
        [...entry.scannerRules.entries()].map(([scanner, rules]) => [scanner, [...rules]])
      )
    }))
    .sort((a, b) => {
      if (b.scanners.length !== a.scanners.length) {
        return b.scanners.length - a.scanners.length;
      }
      if (b.occurrences !== a.occurrences) {
        return b.occurrences - a.occurrences;
      }
      return a.actRuleId.localeCompare(b.actRuleId);
    });

  return {
    overlapEntryCount: overlapEntries.length,
    overlapEntries
  };
}