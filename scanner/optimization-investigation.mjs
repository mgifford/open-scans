import { readFileSync } from "node:fs";
import { redactStringsDeep } from "./redact-secrets.mjs";

export const OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION = "optimization-investigation/1";
export const OPTIMIZATION_REQUEST_SCHEMA_VERSION = "optimization-investigation-request/1";

const SCHEMA_PATH = new URL("./schemas/optimization-investigation.schema.json", import.meta.url);
const REQUEST_SCHEMA_PATH = new URL("./schemas/optimization-investigation-request.schema.json", import.meta.url);
const investigationSchema = JSON.parse(readFileSync(SCHEMA_PATH, "utf8"));
const requestSchema = JSON.parse(readFileSync(REQUEST_SCHEMA_PATH, "utf8"));

const SEVERITY_LABELS = {
  new: "New automated finding — potential regression",
  persistent: "Persistent automated finding",
  "details-changed": "Changed automated finding",
  "not-observed": "No longer observed — not proof of remediation",
  "not-evaluated": "Not evaluated — coverage gap"
};

const CONCERNS = {
  "accessible-names": {
    title: "Accessible names and descriptions",
    description: "Controls, links, images, frames and regions keep names and descriptions that make sense out of context.",
    wcag: ["1.1.1", "2.4.4", "2.4.6", "4.1.2"],
    rules: [/name/i, /image-alt/i, /frame-title/i, /label/i, /aria-.*name/i, /link-name/i, /button-name/i, /area-alt/i, /document-title/i],
    manualChecks: [
      "Read each changed control, link and image with a screen reader and confirm the name is meaningful in context.",
      "Confirm icon-only controls retain visible or programmatic names after the optimization."
    ]
  },
  "keyboard-operation": {
    title: "Keyboard operation",
    description: "Every interactive control remains reachable and operable without a pointer.",
    wcag: ["2.1.1", "2.1.2"],
    rules: [/keyboard/i, /nested-interactive/i, /scrollable-region-focusable/i, /frame-focusable-content/i, /focusable/i, /tabindex/i, /aria-hidden-focus/i],
    manualChecks: [
      "Complete the changed task using only Tab, Shift+Tab, Enter, Space, arrow keys and Escape.",
      "Check for keyboard traps, unreachable controls and focus moving to unexpected places."
    ]
  },
  "focus-management": {
    title: "Focus management and visible focus",
    description: "Focus order, focus visibility and focus restoration remain predictable.",
    wcag: ["2.4.3", "2.4.7", "2.4.11"],
    rules: [/focus/i, /tabindex/i, /scrollable-region-focusable/i, /aria-hidden-focus/i],
    manualChecks: [
      "Tab through the changed component and confirm a visible focus indicator on every control.",
      "Open and close menus/dialogs and confirm focus moves somewhere predictable and returns when dismissed."
    ]
  },
  "heading-hierarchy": {
    title: "Heading hierarchy",
    description: "Headings remain descriptive and ordered so the page outline is still usable.",
    wcag: ["1.3.1", "2.4.6"],
    rules: [/heading/i, /page-has-heading-one/i],
    manualChecks: [
      "Review the heading outline with a screen reader or accessibility tree inspector.",
      "Confirm removed or replaced components did not remove the page's main heading or create skipped levels."
    ]
  },
  "landmarks-regions": {
    title: "Landmarks and semantic regions",
    description: "Navigation, main, banner, contentinfo, complementary and search regions remain identifiable.",
    wcag: ["1.3.1", "2.4.1", "3.2.3"],
    rules: [/landmark/i, /region/i, /^main$/i, /banner/i, /contentinfo/i, /complementary/i, /navigation/i, /search/i],
    manualChecks: [
      "Navigate by landmark and confirm the changed regions are still present and uniquely named.",
      "Confirm content was not moved outside a region in a way that removes its structural meaning."
    ]
  },
  "form-labels-instructions": {
    title: "Form labels and instructions",
    description: "Inputs, selects, textareas and custom controls keep labels, instructions and error associations.",
    wcag: ["1.3.1", "3.3.1", "3.3.2", "4.1.2"],
    rules: [/label/i, /form-field/i, /autocomplete/i, /aria-input-field-name/i, /select-name/i, /input-button-name/i],
    manualChecks: [
      "Complete each changed form control with a screen reader and confirm its label, instructions and error message are announced.",
      "Confirm lazy-loading or progressive enhancement did not remove a visible label or its programmatic association."
    ]
  },
  "live-regions-status": {
    title: "Live regions and status messages",
    description: "Status, alert and log messages remain available and are announced at the right time.",
    wcag: ["4.1.3"],
    rules: [/aria-live/i, /aria-atomic/i, /aria-relevant/i, /aria-busy/i, /status/i, /alert/i, /log/i, /aria-invalid/i],
    manualChecks: [
      "Trigger each changed status/error path and confirm it is announced without moving focus unexpectedly.",
      "Confirm a lazy-loaded or deferred component did not create a silent update."
    ]
  },
  "aria-states": {
    title: "ARIA roles, states and properties",
    description: "Custom widgets keep required roles, states and properties after replacement or simplification.",
    wcag: ["4.1.2"],
    rules: [/^aria-/i, /role/i, /presentation-role-conflict/i],
    manualChecks: [
      "Inspect the changed widget's role, name, state and value in the accessibility tree.",
      "Operate expand/collapse, checked, selected, current and disabled states with keyboard and screen reader."
    ]
  },
  "dynamic-content": {
    title: "Dynamic content availability",
    description: "Deferred, lazy-loaded or removed content remains discoverable and does not become hidden from assistive technology.",
    wcag: ["1.3.1", "4.1.2", "4.1.3"],
    rules: [/aria-hidden/i, /hidden-content/i, /presentation-role-conflict/i, /aria-hidden-focus/i],
    manualChecks: [
      "Confirm lazy-loaded content is present in the accessibility tree when it becomes visible.",
      "Confirm content that was hidden, deferred or removed is not essential to the task."
    ]
  },
  "important-content": {
    title: "Important content that may disappear",
    description: "Content removed with scripts, CSS or a lighter component is either redundant or still available another way.",
    wcag: ["1.3.1", "2.4.4", "3.2.3"],
    rules: [/link-name/i, /button-name/i, /heading/i, /region/i, /list/i, /table/i, /td-headers/i, /th-has-data/i, /frame-title/i, /image-alt/i],
    manualChecks: [
      "Compare the baseline and optimized pages visually and with a screen reader; confirm no essential content disappeared.",
      "Confirm content moved off-screen, behind a disclosure or into a lazy region is still reachable."
    ]
  },
  "reading-order": {
    title: "Reading and focus order",
    description: "Visual order, DOM order and focus order still communicate the same sequence.",
    wcag: ["1.3.2", "2.4.3"],
    rules: [/tabindex/i, /focus-order/i, /presentation-role-conflict/i, /heading/i, /landmark/i, /list/i, /table/i],
    manualChecks: [
      "Read the changed page linearly and compare it with the visual order.",
      "Confirm CSS removal or DOM simplification did not reorder content ahead of its visual position."
    ]
  },
  "contrast-forced-colours": {
    title: "Contrast, forced colours and colour schemes",
    description: "Text, controls and focus indicators remain distinguishable in light, dark and forced-colours modes.",
    wcag: ["1.4.3", "1.4.11", "1.4.1"],
    rules: [/color-contrast/i, /contrast/i, /focus/i, /forced-colors/i],
    manualChecks: [
      "Review the changed component in light, dark, high-contrast and forced-colours modes.",
      "Confirm removed CSS did not remove focus indicators, borders or other non-text contrast cues."
    ]
  },
  "reduced-motion": {
    title: "Reduced-motion preference",
    description: "Animation removal or replacement respects prefers-reduced-motion and does not remove necessary feedback.",
    wcag: ["2.3.1", "2.3.3"],
    rules: [],
    manualChecks: [
      "Enable prefers-reduced-motion and confirm animation stops or is replaced without hiding status or content.",
      "Confirm removing animation did not make a state change or error message imperceptible."
    ]
  },
  "reflow": {
    title: "Reflow and responsive layout",
    description: "The optimized layout still works at narrow widths and high zoom without losing content or controls.",
    wcag: ["1.4.10", "1.4.4"],
    rules: [/reflow/i, /target-size/i, /meta-viewport/i],
    manualChecks: [
      "Test the changed page at 320 CSS pixels and at 200%/400% zoom.",
      "Confirm content and controls do not overlap, clip or disappear after CSS or component removal."
    ]
  },
  "consistent-navigation": {
    title: "Consistent navigation and identification",
    description: "Repeated navigation and help mechanisms remain in a consistent order and are identified consistently.",
    wcag: ["3.2.3", "3.2.4"],
    rules: [/landmark/i, /region/i, /link-name/i, /button-name/i, /heading/i],
    manualChecks: [
      "Compare the changed navigation across pages and confirm order and labels remain consistent.",
      "Confirm a replaced component is still identifiable by the same name or purpose."
    ]
  }
};

const SCENARIOS = {
  "removing-unused-javascript": {
    label: "Removing unused JavaScript",
    description: "JavaScript was removed to reduce execution or transfer.",
    concerns: ["accessible-names", "keyboard-operation", "focus-management", "dynamic-content", "live-regions-status", "heading-hierarchy", "landmarks-regions", "important-content"]
  },
  "deferring-script-execution": {
    label: "Deferring script execution",
    description: "Scripts were deferred, split or loaded later to reduce blocking work.",
    concerns: ["accessible-names", "keyboard-operation", "focus-management", "dynamic-content", "live-regions-status", "form-labels-instructions", "important-content"]
  },
  "replacing-navigation": {
    label: "Replacing a heavy navigation component",
    description: "Navigation markup, scripting or styling was replaced with a lighter implementation.",
    concerns: ["accessible-names", "keyboard-operation", "focus-management", "heading-hierarchy", "landmarks-regions", "aria-states", "important-content", "consistent-navigation"],
    overrides: {
      "accessible-names": { rules: [/link-name/i, /button-name/i, /aria-.*name/i, /label/i, /frame-title/i], rulesOnly: true },
      "important-content": { rules: [/link-name/i, /button-name/i, /heading/i, /region/i], rulesOnly: true }
    }
  },
  "lazy-loading-images-or-embeds": {
    label: "Lazy-loading images or embedded content",
    description: "Images, iframes or other embedded content were deferred until needed.",
    concerns: ["accessible-names", "dynamic-content", "important-content", "form-labels-instructions", "reflow"],
    overrides: {
      "accessible-names": { rules: [/image-alt/i, /frame-title/i, /aria-.*name/i, /label/i], rulesOnly: true },
      "important-content": { rules: [/image-alt/i, /frame-title/i, /heading/i, /region/i], rulesOnly: true }
    }
  },
  "reducing-or-removing-animation": {
    label: "Reducing or removing animation",
    description: "Animation, video, autoplay or motion was reduced or removed.",
    concerns: ["reduced-motion", "focus-management", "dynamic-content", "live-regions-status", "important-content"],
    overrides: {
      "important-content": { manualOnly: true }
    }
  },
  "replacing-third-party-widgets": {
    label: "Replacing a third-party widget",
    description: "A third-party script, widget or embed was replaced with a lighter or first-party implementation.",
    concerns: ["accessible-names", "keyboard-operation", "focus-management", "landmarks-regions", "live-regions-status", "aria-states", "dynamic-content", "important-content"]
  },
  "simplifying-dom": {
    label: "Simplifying complex DOM structures",
    description: "DOM depth, wrappers, lists, tables or landmark structure were simplified.",
    concerns: ["heading-hierarchy", "landmarks-regions", "form-labels-instructions", "reading-order", "important-content", "accessible-names", "keyboard-operation"]
  },
  "removing-unnecessary-css": {
    label: "Removing unnecessary CSS",
    description: "CSS was removed to reduce transfer or rendering work.",
    concerns: ["contrast-forced-colours", "focus-management", "reflow", "reduced-motion", "reading-order", "important-content"],
    overrides: {
      "important-content": { manualOnly: true }
    }
  },
  "changing-progressive-enhancement": {
    label: "Changing progressive enhancement",
    description: "Content or behaviour now depends on JavaScript, CSS or a later loading phase.",
    concerns: ["keyboard-operation", "dynamic-content", "live-regions-status", "form-labels-instructions", "important-content", "accessible-names"]
  },
  "replacing-component-with-lighter-alternative": {
    label: "Replacing a component with a lighter alternative",
    description: "A component or widget was replaced with a lighter implementation.",
    concerns: ["accessible-names", "keyboard-operation", "focus-management", "heading-hierarchy", "landmarks-regions", "aria-states", "important-content", "consistent-navigation"]
  }
};

const ALIASES = {
  "unused-javascript": "removing-unused-javascript",
  "script-removal": "removing-unused-javascript",
  "script-deferral": "deferring-script-execution",
  "navigation-replacement": "replacing-navigation",
  "lazy-loading": "lazy-loading-images-or-embeds",
  "lazy-images": "lazy-loading-images-or-embeds",
  "animation-reduction": "reducing-or-removing-animation",
  "reducing-animation": "reducing-or-removing-animation",
  "third-party-replacement": "replacing-third-party-widgets",
  "dom-simplification": "simplifying-dom",
  "css-removal": "removing-unnecessary-css",
  "progressive-enhancement": "changing-progressive-enhancement",
  "lighter-component": "replacing-component-with-lighter-alternative"
};

function text(value) {
  return String(value ?? "").trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeScenarioKind(kind) {
  const raw = text(kind).toLowerCase();
  return SCENARIOS[raw] ? raw : ALIASES[raw] ?? null;
}

function normalizeRequest(request) {
  if (!request || typeof request !== "object") return { error: "Optimization request must be an object." };
  if (request.schema !== OPTIMIZATION_REQUEST_SCHEMA_VERSION) {
    return { error: `Request schema must be '${OPTIMIZATION_REQUEST_SCHEMA_VERSION}'.` };
  }
  if (!Array.isArray(request.scenarios) || request.scenarios.length === 0) {
    return { error: "Request must contain at least one scenario." };
  }
  const scenarios = [];
  for (const [index, scenario] of request.scenarios.entries()) {
    if (!scenario || typeof scenario !== "object") return { error: `Scenario ${index + 1} must be an object.` };
    const kind = normalizeScenarioKind(scenario.kind);
    if (!kind) return { error: `Unknown optimization scenario '${scenario.kind}'.` };
    scenarios.push({
      kind,
      description: text(scenario.description) || SCENARIOS[kind].description,
      components: Array.isArray(scenario.components) ? scenario.components.map(text).filter(Boolean) : [],
      pages: Array.isArray(scenario.pages) ? scenario.pages.map(text).filter(Boolean) : [],
      notes: text(scenario.notes) || null
    });
  }
  return { scenarios, reviewer: text(request.reviewer) || null, notes: text(request.notes) || null };
}

function findingMatchesConcern(finding, concern, override = null) {
  const rule = text(finding.ruleId).toLowerCase();
  const scs = (finding.wcagSc ?? []).map((sc) => String(sc).replace(/^wcag/i, ""));
  const rules = override?.rules ?? concern.rules;
  if (rules.some((pattern) => pattern.test(rule))) return true;
  if (override?.rulesOnly) return false;
  return concern.wcag.some((sc) => scs.includes(sc));
}

function findingSummary(finding) {
  return {
    classification: finding.classification,
    engine: finding.engine,
    engineLabel: finding.engineLabel,
    ruleId: finding.ruleId,
    title: finding.title,
    message: finding.message,
    page: {
      logicalPageId: finding.page.logicalPageId,
      baselineUrl: finding.page.baselineUrl,
      comparisonUrl: finding.page.comparisonUrl
    },
    confidence: finding.confidence,
    confirmedRemediation: finding.confirmedRemediation,
    qualification: finding.qualification,
    componentContext: finding.componentContext ?? null,
    actRuleIds: finding.actRuleIds ?? [],
    baselineOccurrenceId: finding.baseline?.occurrenceId ?? null,
    comparisonOccurrenceId: finding.comparison?.occurrenceId ?? null,
    evidence: {
      baseline: finding.baseline?.evidenceRef ?? null,
      comparison: finding.comparison?.evidenceRef ?? null
    }
  };
}

function mergeStatus(findings, automated) {
  if (findings.some((finding) => finding.classification === "new")) return "new-finding";
  if (findings.some((finding) => finding.classification === "details-changed")) return "details-changed";
  if (findings.some((finding) => finding.classification === "persistent")) return "persistent-finding";
  if (findings.some((finding) => finding.classification === "not-evaluated")) return "not-evaluated";
  if (findings.some((finding) => finding.classification === "not-observed")) return "not-observed";
  return automated ? "no-matching-automated-finding" : "manual-only";
}

function statusLabel(status) {
  return {
    "new-finding": SEVERITY_LABELS.new,
    "persistent-finding": SEVERITY_LABELS.persistent,
    "details-changed": SEVERITY_LABELS["details-changed"],
    "not-observed": SEVERITY_LABELS["not-observed"],
    "not-evaluated": SEVERITY_LABELS["not-evaluated"],
    "no-matching-automated-finding": "No matching automated finding — not a pass",
    "manual-only": "Manual verification required — automated rules do not cover this"
  }[status];
}

function pageCoverageFor(findings, comparison) {
  const ids = unique(findings.map((finding) => finding.page.logicalPageId));
  return {
    pagesWithEvidence: ids,
    pagesCompared: comparison.summary.pagesCompared,
    pagesNotCompared: comparison.summary.pagesBaselineOnly + comparison.summary.pagesComparisonOnly
  };
}

function buildConcern(concernId, findings, comparison, override = null) {
  const concern = CONCERNS[concernId];
  const automated = !override?.manualOnly && (override?.rules ?? concern.rules).length > 0;
  const relevant = automated
    ? findings.filter((finding) => findingMatchesConcern(finding, concern, override))
    : [];
  const status = mergeStatus(relevant, automated);
  return {
    id: concernId,
    title: concern.title,
    description: concern.description,
    wcag: concern.wcag,
    automated,
    status,
    statusLabel: statusLabel(status),
    findings: relevant.map(findingSummary),
    pageCoverage: pageCoverageFor(relevant, comparison),
    manualChecks: concern.manualChecks,
    qualification: status === "not-observed"
      ? "No longer observed does not mean fixed. Confirm with the same page, engine and test conditions."
      : status === "no-matching-automated-finding"
        ? "No matching automated finding is not evidence that the concern is safe."
        : null
  };
}

function samePage(url, candidate) {
  return text(url).replace(/\/$/, "") === text(candidate).replace(/\/$/, "");
}

function buildScenario(scenario, comparison) {
  const definition = SCENARIOS[scenario.kind];
  const allFindings = Object.values(comparison.findings).flat();
  const scopedFindings = scenario.pages.length === 0
    ? allFindings
    : allFindings.filter((finding) => scenario.pages.some((page) => (
      samePage(page, finding.page.baselineUrl) || samePage(page, finding.page.comparisonUrl)
    )));
  const concerns = definition.concerns.map((concernId) => buildConcern(
    concernId,
    scopedFindings,
    comparison,
    definition.overrides?.[concernId] ?? null
  ));
  const findingIds = new Set(concerns.flatMap((concern) => concern.findings.map((finding) => `${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}:${finding.title}`)));
  const summary = {
    concerns: concerns.length,
    newFindings: unique(concerns.flatMap((concern) => concern.findings.filter((finding) => finding.classification === "new").map((finding) => `${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}`))).length,
    persistentFindings: unique(concerns.flatMap((concern) => concern.findings.filter((finding) => finding.classification === "persistent").map((finding) => `${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}`))).length,
    changedFindings: unique(concerns.flatMap((concern) => concern.findings.filter((finding) => finding.classification === "details-changed").map((finding) => `${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}`))).length,
    notObservedFindings: unique(concerns.flatMap((concern) => concern.findings.filter((finding) => finding.classification === "not-observed").map((finding) => `${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}`))).length,
    notEvaluatedFindings: unique(concerns.flatMap((concern) => concern.findings.filter((finding) => finding.classification === "not-evaluated").map((finding) => `${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}`))).length,
    manualChecks: concerns.reduce((total, concern) => total + concern.manualChecks.length, 0),
    noAutomatedEvidenceConcerns: concerns.filter((concern) => concern.status === "no-matching-automated-finding" || concern.status === "manual-only").length,
    uniqueFindings: findingIds.size
  };
  return {
    kind: scenario.kind,
    label: definition.label,
    description: scenario.description,
    components: scenario.components,
    pages: scenario.pages,
    notes: scenario.notes,
    concerns,
    summary,
    humanReviewRequired: true,
    conformanceClaim: false,
    functionalEquivalenceClaim: false
  };
}

export function validateOptimizationRequest(request) {
  const normalized = normalizeRequest(request);
  if (normalized.error) return { ok: false, errors: [normalized.error], warnings: [] };
  return { ok: true, errors: [], warnings: [], value: normalized };
}

export function buildOptimizationInvestigation(comparison, request, { generatedAt = new Date().toISOString() } = {}) {
  const errors = [];
  if (!comparison || comparison.schema !== "accessibility-comparison/1") {
    return { ok: false, errors: ["Input must be an accessibility-comparison/1 report."], value: null };
  }
  if (Number.isNaN(new Date(generatedAt).getTime())) {
    return { ok: false, errors: ["generatedAt must be an ISO 8601 date-time."], value: null };
  }
  const normalized = normalizeRequest(request);
  if (normalized.error) return { ok: false, errors: [normalized.error], value: null };
  const scenarios = normalized.scenarios.map((scenario) => buildScenario(scenario, comparison));
  const manualVerification = [];
  const seen = new Set();
  for (const scenario of scenarios) {
    for (const concern of scenario.concerns) {
      for (const task of concern.manualChecks) {
        const key = `${scenario.kind}:${concern.id}:${task}`;
        if (seen.has(key)) continue;
        seen.add(key);
        manualVerification.push({ scenario: scenario.kind, concern: concern.id, task });
      }
    }
  }
  const uniqueFindings = new Map();
  for (const scenario of scenarios) {
    for (const concern of scenario.concerns) {
      for (const finding of concern.findings) {
        uniqueFindings.set(`${finding.page.logicalPageId}:${finding.engine}:${finding.ruleId}:${finding.title}`, finding);
      }
    }
  }
  const value = {
    schema: OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION,
    generatedAt,
    comparison: {
      schema: comparison.schema,
      generatedAt: comparison.generatedAt,
      baseline: comparison.baseline,
      comparison: comparison.comparison,
      conditions: comparison.conditions,
      engines: comparison.engines,
      summary: comparison.summary,
      coverageGaps: comparison.coverageGaps,
      externalInvestigations: comparison.externalInvestigations ?? [],
      limitations: comparison.limitations
    },
    request: {
      schema: OPTIMIZATION_REQUEST_SCHEMA_VERSION,
      reviewer: normalized.reviewer,
      notes: normalized.notes,
      scenarios: normalized.scenarios
    },
    scenarios,
    summary: {
      scenarios: scenarios.length,
      concerns: unique(scenarios.flatMap((scenario) => scenario.concerns.map((concern) => concern.id))).length,
      newFindings: [...uniqueFindings.values()].filter((finding) => finding.classification === "new").length,
      persistentFindings: [...uniqueFindings.values()].filter((finding) => finding.classification === "persistent").length,
      changedFindings: [...uniqueFindings.values()].filter((finding) => finding.classification === "details-changed").length,
      notObservedFindings: [...uniqueFindings.values()].filter((finding) => finding.classification === "not-observed").length,
      notEvaluatedFindings: [...uniqueFindings.values()].filter((finding) => finding.classification === "not-evaluated").length,
      manualVerificationTasks: manualVerification.length,
      conformanceClaim: false,
      functionalEquivalenceClaim: false,
      humanReviewRequired: true
    },
    externalInvestigations: comparison.externalInvestigations ?? [],
    manualVerification,
    limitations: unique([
      ...comparison.limitations,
      "Passing automated checks does not establish WCAG conformance or functional equivalence.",
      "Each optimization scenario requires human review with keyboard and assistive-technology testing.",
      "No energy, carbon or performance saving is claimed by this report."
    ])
  };
  const redaction = { changed: 0 };
  redactStringsDeep(value, redaction);
  if (redaction.changed > 0) value.limitations.push(`Redacted ${redaction.changed} credential-shaped string(s) from the optimization report.`);
  const validation = validateOptimizationInvestigation(value);
  if (!validation.ok) return { ok: false, errors: validation.errors, value: null };
  return { ok: true, errors: [], warnings: [], value };
}

export function validateOptimizationInvestigation(value) {
  const errors = [];
  if (!value || typeof value !== "object" || Array.isArray(value)) return { ok: false, errors: ["Optimization investigation must be an object."] };
  for (const key of investigationSchema.required) {
    if (value[key] === undefined || value[key] === null) errors.push(`Missing required field: ${key}`);
  }
  if (value.schema !== OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION) errors.push(`schema must be '${OPTIMIZATION_INVESTIGATION_SCHEMA_VERSION}'.`);
  if (!Array.isArray(value.scenarios) || value.scenarios.length === 0) errors.push("scenarios must be a non-empty array.");
  if (!Array.isArray(value.manualVerification)) errors.push("manualVerification must be an array.");
  if (value.summary?.conformanceClaim !== false) errors.push("summary.conformanceClaim must be false.");
  if (value.summary?.functionalEquivalenceClaim !== false) errors.push("summary.functionalEquivalenceClaim must be false.");
  for (const scenario of value.scenarios ?? []) {
    if (!SCENARIOS[scenario.kind]) errors.push(`Unknown scenario '${scenario.kind}'.`);
    if (!Array.isArray(scenario.concerns) || scenario.concerns.length === 0) errors.push(`Scenario '${scenario.kind}' has no concerns.`);
    if (scenario.humanReviewRequired !== true) errors.push(`Scenario '${scenario.kind}' must require human review.`);
    if (scenario.conformanceClaim !== false) errors.push(`Scenario '${scenario.kind}' must not claim conformance.`);
    for (const concern of scenario.concerns ?? []) {
      if (!CONCERNS[concern.id]) errors.push(`Unknown concern '${concern.id}'.`);
      if (!Array.isArray(concern.findings)) errors.push(`Concern '${concern.id}' findings must be an array.`);
      if (!Array.isArray(concern.manualChecks) || concern.manualChecks.length === 0) errors.push(`Concern '${concern.id}' must include manual checks.`);
    }
  }
  return { ok: errors.length === 0, errors };
}

export function summarizeOptimizationInvestigation(value) {
  return {
    schema: value.schema,
    scenarios: value.scenarios.map((scenario) => ({
      kind: scenario.kind,
      label: scenario.label,
      summary: scenario.summary
    })),
    summary: value.summary,
    limitations: value.limitations
  };
}
