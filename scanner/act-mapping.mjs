import { readFileSync } from "node:fs";

const ACT_MAPPING_PATH = new URL("./data/act-mapping.json", import.meta.url);
const QUALWEB_README_PATH = new URL("../node_modules/@qualweb/act-rules/README.md", import.meta.url);

let cachedMapping = null;
let cachedRuleIndex = null;

const SUPPORTED_ENGINES = new Set(["axe", "alfa", "equalAccess", "accesslint", "qualweb"]);
export { SUPPORTED_ENGINES };

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

export function getEngineVersionInfo(engine) {
  const mapping = loadActMapping();
  return mapping.engineVersions?.[engine] || null;
}

export function getActRuleConsistency(actRuleId, engine) {
  const mapping = loadActMapping();
  const ruleEntry = mapping.byActRuleId?.[actRuleId];
  if (!ruleEntry) return null;
  const engineData = ruleEntry[engine];
  if (!engineData || engineData.length === 0) return { consistency: "none", versionMatch: false };
  
  // Get the first rule ID from this engine's mapping
  const firstRuleId = engineData[0];
  const engineVersionInfo = mapping.engineVersions?.[engine];
  
  if (!engineVersionInfo) return { consistency: "unknown", versionMatch: false };
  
  // Check if the scanned version matches the published version
  const versionMatch = engineVersionInfo.versionMatch !== undefined 
    ? engineVersionInfo.versionMatch 
    : false;
  
  return {
    consistency: engineVersionInfo.consistency || "unknown",
    versionMatch
  };
}

export function getMappingStatus(engine, ruleId) {
  const actRuleIds = getActRuleIds(engine, ruleId);
  if (actRuleIds.length === 0) return "unmapped";
  if (actRuleIds.length === 1) return "mapped";
  return "multi-mapped";
}

export function computeActOutcomes(results) {
  const outcomes = {
    agreementFail: 0,
    agreementPass: 0,
    directDiscrepancy: 0,
    applicabilityDiscrepancy: 0,
    detectionAsymmetry: 0,
    targetDisagreement: 0,
    insufficientComparison: 0,
    executionUncertainty: 0,
    mappingUncertainty: 0,
    rules: new Map(),
    engineStatus: {}
  };

  // Collect all ACT-mapped findings per engine
  const engineFindings = new Map();

  for (const result of results ?? []) {
    const resultUrl = result.finalUrl || result.submittedUrl || "(unknown-url)";

    for (const scannerName of SUPPORTED_ENGINES) {
      const scanner = result?.[scannerName];
      if (!scanner || !Array.isArray(scanner.failures)) continue;

      engineFindings.set(scannerName, (engineFindings.get(scannerName) || 0) + scanner.failures.length);
    }
  }

  // For each ACT rule, collect outcomes across engines
  const actRules = new Map();

  for (const result of results ?? []) {
    const resultUrl = result.finalUrl || result.submittedUrl || "(unknown-url)";

    for (const scannerName of SUPPORTED_ENGINES) {
      const scanner = result?.[scannerName];
      if (!scanner || !Array.isArray(scanner.failures)) continue;

      for (const failure of scanner.failures) {
        if (failure.isDuplicate) continue;

        const actRuleIds = getActRuleIds(scannerName, failure.rule);
        if (actRuleIds.length === 0) continue;

        for (const actRuleId of actRuleIds) {
          if (!actRules.has(actRuleId)) {
            actRules.set(actRuleId, new Map());
          }
          const ruleEngineMap = actRules.get(actRuleId);

          if (!ruleEngineMap.has(scannerName)) {
            ruleEngineMap.set(scannerName, { failed: 0, passed: 0, cantTell: 0, inapplicable: 0, notReported: 0 });
          }
          const engineData = ruleEngineMap.get(scannerName);

          // Determine outcome
          if (failure.outcome === "failed" || (failure.outcome === undefined && !failure.wcagSc)) {
            engineData.failed++;
          } else if (failure.outcome === "passed") {
            engineData.passed++;
          } else if (failure.outcome === "cantTell") {
            engineData.cantTell++;
          } else if (failure.outcome === "inapplicable") {
            engineData.inapplicable++;
          } else if (failure.outcome === "notReported" || failure.outcome === undefined) {
            engineData.notReported++;
          }
        }
      }
    }
  }

  // Classify outcomes
  for (const [actRuleId, engineMap] of actRules.entries()) {
    const enginesWithResults = [...engineMap.entries()].filter(([_, data]) => 
      data.failed > 0 || data.passed > 0 || data.cantTell > 0 || data.inapplicable > 0 || data.notReported > 0
    );

    if (enginesWithResults.length < 2) {
      outcomes.insufficientComparison++;
      continue;
    }

    const hasFailed = enginesWithResults.some(([_, data]) => data.failed > 0);
    const hasPassed = enginesWithResults.some(([_, data]) => data.passed > 0);
    const hasInapplicable = enginesWithResults.some(([_, data]) => data.inapplicable > 0);
    const hasNotReported = enginesWithResults.some(([_, data]) => data.notReported > 0);

    // Direct discrepancy: at least one failed and one passed
    if (hasFailed && hasPassed) {
      outcomes.directDiscrepancy++;
    }
    // Agreement-fail: two or more engines report failed
    else if (hasFailed && !hasPassed && enginesWithResults.filter(([_, data]) => data.failed > 0).length >= 2) {
      outcomes.agreementFail++;
    }
    // Agreement-pass: two or more engines report passed
    else if (hasPassed && !hasFailed && enginesWithResults.filter(([_, data]) => data.passed > 0).length >= 2) {
      outcomes.agreementPass++;
    }
    // Applicability discrepancy: inapplicable conflicts with substantive result
    else if (hasInapplicable && (hasFailed || hasPassed)) {
      outcomes.applicabilityDiscrepancy++;
    }
    // Detection asymmetry: at least one failure and at least one notReported
    else if (hasFailed && hasNotReported) {
      outcomes.detectionAsymmetry++;
    }
    // Target disagreement: would need target matching, simplified here
    else {
      outcomes.targetDisagreement++;
    }
  }

  // Check for version mismatches
  for (const [actRuleId, engineMap] of actRules.entries()) {
    const versionChecks = [];
    for (const [engine, _] of engineMap.entries()) {
      const consistency = getActRuleConsistency(actRuleId, engine);
      if (consistency.versionMatch === false) {
        outcomes.mappingUncertainty++;
      }
    }
  }

  outcomes.rules = actRules;
  return outcomes;
}