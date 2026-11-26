/**
 * Portable assessment records.
 *
 * One module defines the record vocabulary, validation, merge semantics and the
 * issue-report projection that both the browser runtime and the Node tests use.
 * The browser never re-implements these rules: the report inlines this module.
 *
 * Boundaries that the model enforces:
 * - automated evidence is immutable and never stored in an assessment record;
 * - a record describes one reviewer's observation at one time, not a verdict on
 *   a success criterion or on the website;
 * - contradictory records are preserved rather than overwritten;
 * - imported documents are data, never code.
 *
 * @module assessment/records
 */

export const RECORD_SCHEMA = "a11y-assessment-record/1";
export const DOCUMENT_SCHEMA = "a11y-assessment-document/1";
export const ASSESSMENT_SCHEMA_VERSION = 1;
export const STORAGE_NAMESPACE = "open-scans:assessment";

export const RECORD_KINDS = Object.freeze([
  { id: "procedure", label: "Procedure outcome", description: "A guided manual procedure was performed." },
  { id: "finding", label: "Manually discovered barrier", description: "A barrier no automated engine identified." },
  { id: "evaluation", label: "Professional or experiential evaluation", description: "An evaluator or assistive technology user recorded an observation." },
  { id: "journey", label: "User journey observation", description: "A task-level observation across steps or pages." }
]);

export const RELATIONS_TO_AUTOMATED = Object.freeze([
  { id: "none", label: "Not related to an automated finding" },
  { id: "confirms", label: "Confirms an automated finding" },
  { id: "disputes", label: "Disputes an automated finding" },
  { id: "extends", label: "Adds context to an automated finding" }
]);

export const OUTCOME_IDS = Object.freeze([
  "not-evaluated",
  "in-progress",
  "passed",
  "failed",
  "not-applicable",
  "inconclusive",
  "requires-professional-review",
  "requires-experiential-evaluation"
]);

export const METHOD_IDS = Object.freeze([
  "guided-manual",
  "professional-evaluation",
  "assistive-technology",
  "lived-experience",
  "user-research",
  "automated-review",
  "ai-assisted"
]);

export const VERIFICATION_IDS = Object.freeze([
  "unreviewed",
  "self-attested",
  "independently-reviewed",
  "disputed"
]);

export const SEVERITY_IDS = Object.freeze(["critical", "serious", "moderate", "minor", "unspecified"]);

/**
 * Outcome vocabulary. Verification and freshness are separate fields, never
 * encoded into the outcome.
 */
export const OUTCOMES = Object.freeze([
  { id: "not-evaluated", label: "Not evaluated", description: "No judgement has been recorded." },
  { id: "in-progress", label: "In progress", description: "Review started; outcome not decided." },
  { id: "passed", label: "Passed within evaluated scope", description: "The procedure succeeded for the scope recorded on this record." },
  { id: "failed", label: "Failed within evaluated scope", description: "A barrier was observed for the scope recorded on this record." },
  { id: "not-applicable", label: "Not applicable", description: "The requirement does not apply; an explanation or applicability evidence is required." },
  { id: "inconclusive", label: "Inconclusive", description: "The evidence does not support a pass or a fail." },
  { id: "requires-professional-review", label: "Requires professional review", description: "The observation needs accessibility expertise." },
  { id: "requires-experiential-evaluation", label: "Requires experiential evaluation", description: "The observation needs testing by people with disabilities." }
]);

/** Assessment methods. These are not interchangeable. */
export const METHODS = Object.freeze([
  {
    id: "guided-manual",
    label: "Guided manual review",
    description: "A maintainer or content author followed a written procedure in a browser."
  },
  {
    id: "professional-evaluation",
    label: "Professional accessibility evaluation",
    description: "An accessibility specialist performed an expert review."
  },
  {
    id: "assistive-technology",
    label: "Assistive technology testing",
    description: "Someone who regularly uses assistive technology operated the page with it."
  },
  {
    id: "lived-experience",
    label: "Lived-experience evidence",
    description: "A person with a disability described their own experience of the barrier."
  },
  {
    id: "user-research",
    label: "User research",
    description: "A facilitated research session with participants with disabilities."
  },
  {
    id: "automated-review",
    label: "Review of automated evidence",
    description: "A person reviewed an automated finding; this is not new human testing of the page."
  },
  {
    id: "ai-assisted",
    label: "AI-assisted interpretation",
    description: "A model suggested an interpretation. Unverified assistance — never a substitute for expertise or lived experience."
  }
]);

/** Verification is independent of the outcome and of freshness. */
export const VERIFICATION_STATES = Object.freeze([
  { id: "unreviewed", label: "Unreviewed submission" },
  { id: "self-attested", label: "Self-attested" },
  { id: "independently-reviewed", label: "Independently reviewed" },
  { id: "disputed", label: "Disputed" }
]);


const LIMITS = Object.freeze({
  recordsPerDocument: 2000,
  shortText: 300,
  text: 4000,
  longText: 20000,
  evidenceItems: 20,
  tags: 25
});

const WCAG_ID_RE = /^\d\.\d\.\d+$/;
const CONTROL_CHARS_RE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;

/**
 * Validate a URL for storage in a record. Only http(s) is accepted, so an
 * imported document cannot cause a `javascript:` or `data:` link to be rendered.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSafeHttpUrl(value) {
  if (typeof value !== "string" || value.length === 0 || value.length > LIMITS.longText) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/** Generate an opaque record id. Injectable randomness keeps tests deterministic. */
export function createRecordId(random) {
  const source = random ?? globalThis.crypto;
  if (source && typeof source.randomUUID === "function") return `rec_${source.randomUUID()}`;
  if (source && typeof source.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    source.getRandomValues(bytes);
    return `rec_${[...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
  }
  return `rec_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

function cleanString(value, limit = LIMITS.text) {
  if (value === null || value === undefined) return "";
  return String(value).replace(CONTROL_CHARS_RE, "").slice(0, limit);
}

function cleanStringArray(value, { limit = LIMITS.shortText, max = LIMITS.tags } = {}) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => cleanString(item, limit))
    .filter((item) => item.length > 0)
    .slice(0, max);
}

/**
 * Build a record with the current schema version and safe defaults.
 *
 * @param {object} input
 * @param {{now?: () => string, random?: object}} [options]
 * @returns {object}
 */
export function createRecord(input = {}, options = {}) {
  const now = options.now?.() ?? new Date().toISOString();
  return normalizeRecord({
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    recordId: createRecordId(options.random),
    recordedAt: now,
    testingDate: now.slice(0, 10),
    ...input
  });
}

/**
 * Normalise untrusted input into a record shape. Normalisation does not make an
 * invalid record valid: `validateRecord` must still be run.
 *
 * @param {object} input
 * @returns {object}
 */
export function normalizeRecord(input = {}) {
  const source = input && typeof input === "object" ? input : {};
  const automationRef = source.automatedFinding && typeof source.automatedFinding === "object"
    ? {
        engine: cleanString(source.automatedFinding.engine, 40),
        ruleId: cleanString(source.automatedFinding.ruleId, 200),
        instanceId: cleanString(source.automatedFinding.instanceId, 60),
        patternId: cleanString(source.automatedFinding.patternId, 60),
        message: cleanString(source.automatedFinding.message, LIMITS.text)
      }
    : null;

  return {
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    recordId: cleanString(source.recordId, 80),
    kind: RECORD_KINDS.some((kind) => kind.id === source.kind) ? source.kind : "finding",
    assessmentDefinitionId: source.assessmentDefinitionId ? cleanString(source.assessmentDefinitionId, 120) : null,
    assessmentCatalogueVersion: source.assessmentCatalogueVersion
      ? cleanString(source.assessmentCatalogueVersion, 120)
      : null,
    upstreamSource: source.upstreamSource ? cleanString(source.upstreamSource, 200) : null,
    title: cleanString(source.title, LIMITS.shortText),
    testedUrl: cleanString(source.testedUrl, LIMITS.longText),
    pageState: cleanString(source.pageState, LIMITS.shortText),
    component: cleanString(source.component, LIMITS.shortText),
    semanticRegion: cleanString(source.semanticRegion, LIMITS.shortText),
    elementIdentity: source.elementIdentity && typeof source.elementIdentity === "object"
      ? {
          locator: cleanString(source.elementIdentity.locator, LIMITS.longText),
          locatorType: ["css", "xpath", "html", "none", "unknown"].includes(source.elementIdentity.locatorType)
            ? source.elementIdentity.locatorType
            : "unknown",
          accessibleName: cleanString(source.elementIdentity.accessibleName, LIMITS.shortText),
          htmlSnippet: cleanString(source.elementIdentity.htmlSnippet, LIMITS.text)
        }
      : null,
    occurrenceId: source.occurrenceId ? cleanString(source.occurrenceId, 80) : null,
    method: METHOD_IDS.includes(source.method) ? source.method : "guided-manual",
    scope: cleanString(source.scope, LIMITS.text),
    wcag: cleanStringArray(source.wcag, { limit: 12, max: 20 }).filter((id) => WCAG_ID_RE.test(id)),
    act: cleanStringArray(source.act, { limit: 40, max: 20 }),
    arrmRoles: cleanStringArray(source.arrmRoles, { limit: 80, max: 12 }),
    functionalPerformance: cleanStringArray(source.functionalPerformance, { limit: 80, max: 12 }),
    outcome: OUTCOME_IDS.includes(source.outcome) ? source.outcome : "not-evaluated",
    reviewerNotes: cleanString(source.reviewerNotes, LIMITS.longText),
    reproductionSteps: cleanString(source.reproductionSteps, LIMITS.longText),
    expectedBehaviour: cleanString(source.expectedBehaviour, LIMITS.longText),
    actualBehaviour: cleanString(source.actualBehaviour, LIMITS.longText),
    userImpact: cleanString(source.userImpact, LIMITS.longText),
    applicabilityEvidence: cleanString(source.applicabilityEvidence, LIMITS.text),
    environment: {
      browser: cleanString(source.environment?.browser, 80),
      browserVersion: cleanString(source.environment?.browserVersion, 40),
      os: cleanString(source.environment?.os, 80),
      assistiveTechnology: cleanString(source.environment?.assistiveTechnology, 120),
      assistiveTechnologyVersion: cleanString(source.environment?.assistiveTechnologyVersion, 40),
      viewport: cleanString(source.environment?.viewport, 40),
      zoom: cleanString(source.environment?.zoom, 20),
      preferences: {
        colorScheme: cleanString(source.environment?.preferences?.colorScheme, 40),
        forcedColors: cleanString(source.environment?.preferences?.forcedColors, 40),
        reducedMotion: cleanString(source.environment?.preferences?.reducedMotion, 40)
      }
    },
    evidence: Array.isArray(source.evidence)
      ? source.evidence
          .slice(0, LIMITS.evidenceItems)
          .map((item) => ({
            type: cleanString(item?.type, 40) || "note",
            description: cleanString(item?.description, LIMITS.text),
            ref: cleanString(item?.ref, LIMITS.longText)
          }))
      : [],
    testingDate: cleanString(source.testingDate, 10),
    recordedAt: cleanString(source.recordedAt, 40),
    importedAt: source.importedAt ? cleanString(source.importedAt, 40) : null,
    reviewerRole: cleanString(source.reviewerRole, 120),
    verification: VERIFICATION_IDS.includes(source.verification) ? source.verification : "unreviewed",
    provenance: {
      source: cleanString(source.provenance?.source, 80) || "open-scans",
      sourceAssessmentFormat: cleanString(source.provenance?.sourceAssessmentFormat, 120),
      sourceRecordId: cleanString(source.provenance?.sourceRecordId, 120)
    },
    severity: SEVERITY_IDS.includes(source.severity) ? source.severity : "unspecified",
    relationToAutomated: RELATIONS_TO_AUTOMATED.some((relation) => relation.id === source.relationToAutomated)
      ? source.relationToAutomated
      : "none",
    automatedFinding: automationRef,
    conflictsWith: cleanStringArray(source.conflictsWith, { limit: 80, max: 10 }),
    staleSource: source.staleSource === true,
    requiresRevalidation: source.requiresRevalidation === true,
    journey: source.journey && typeof source.journey === "object"
      ? {
          taskDescription: cleanString(source.journey.taskDescription, LIMITS.text),
          startingUrl: cleanString(source.journey.startingUrl, LIMITS.longText),
          intendedOutcome: cleanString(source.journey.intendedOutcome, LIMITS.text),
          steps: cleanStringArray(source.journey.steps, { limit: LIMITS.text, max: 40 }),
          assistiveTechnology: cleanString(source.journey.assistiveTechnology, 160),
          interactionMethod: cleanString(source.journey.interactionMethod, 80),
          completionStatus: ["completed", "completed-with-difficulty", "abandoned", "not-attempted"].includes(
            source.journey.completionStatus
          )
            ? source.journey.completionStatus
            : "not-attempted",
          tabPresses: Number.isFinite(Number(source.journey.tabPresses)) ? Number(source.journey.tabPresses) : null,
          interactions: Number.isFinite(Number(source.journey.interactions)) ? Number(source.journey.interactions) : null,
          durationSeconds: Number.isFinite(Number(source.journey.durationSeconds))
            ? Number(source.journey.durationSeconds)
            : null,
          barriers: cleanStringArray(source.journey.barriers, { limit: LIMITS.text, max: 20 }),
          assistanceRequired: source.journey.assistanceRequired === true
        }
      : null
  };
}

/**
 * Validate a normalised record.
 *
 * @param {object} record
 * @returns {{ok: boolean, errors: string[]}}
 */
export function validateRecord(record) {
  const errors = [];
  if (!record || typeof record !== "object") return { ok: false, errors: ["Record is not an object."] };
  if (record.schemaVersion !== ASSESSMENT_SCHEMA_VERSION) {
    errors.push(`Unsupported record schemaVersion: ${record.schemaVersion ?? "(missing)"}.`);
  }
  if (!record.recordId) errors.push("Record is missing recordId.");
  if (!RECORD_KINDS.some((kind) => kind.id === record.kind)) errors.push(`Unsupported record kind: ${record.kind}.`);
  if (!OUTCOME_IDS.includes(record.outcome)) errors.push(`Unsupported outcome: ${record.outcome}.`);
  if (!METHOD_IDS.includes(record.method)) errors.push(`Unsupported assessment method: ${record.method}.`);
  if (!record.testingDate) errors.push("Record is missing the date testing was performed.");
  if (!record.recordedAt) errors.push("Record is missing the date the record was created.");
  if (record.testedUrl && !isSafeHttpUrl(record.testedUrl)) {
    errors.push("testedUrl must be an absolute http(s) URL.");
  }
  if (record.journey?.startingUrl && !isSafeHttpUrl(record.journey.startingUrl)) {
    errors.push("journey.startingUrl must be an absolute http(s) URL.");
  }
  if (record.outcome === "not-applicable" && !record.applicabilityEvidence && !record.reviewerNotes) {
    errors.push("A not-applicable outcome requires applicability evidence or a reviewer explanation.");
  }
  if (record.outcome === "failed" && !record.actualBehaviour && !record.reviewerNotes) {
    errors.push("A failed outcome requires what was observed or a reviewer note.");
  }
  for (const ruleId of record.conflictsWith ?? []) {
    if (ruleId === record.recordId) errors.push("A record cannot conflict with itself.");
  }
  return { ok: errors.length === 0, errors };
}

/**
 * Create an empty assessment document bound to a specific report.
 *
 * @param {{report: object, catalogue?: object, now?: () => string}} options
 */
export function createAssessmentDocument({ report, catalogue, now = () => new Date().toISOString() }) {
  const createdAt = now();
  return {
    schema: DOCUMENT_SCHEMA,
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    documentId: `doc_${String(report?.reportId ?? "unknown").replace(/[^a-zA-Z0-9]+/g, "-")}`,
    createdAt,
    updatedAt: createdAt,
    exportedAt: null,
    reportAssociation: {
      reportId: String(report?.reportId ?? ""),
      issueNumber: report?.issueNumber ?? null,
      issueUrl: report?.issueUrl ?? null,
      scanTitle: report?.scanTitle ?? null,
      scannedAt: report?.scannedAt ?? null
    },
    catalogue: catalogue
      ? { catalogueVersion: catalogue.catalogueVersion ?? null, contentSha256: catalogue.contentSha256 ?? null }
      : null,
    records: [],
    notes: ""
  };
}

/**
 * Validate an untrusted assessment document before it can change local state.
 *
 * @param {unknown} input parsed JSON (never evaluated)
 * @param {{maxBytes?: number, byteLength?: number}} [options]
 * @returns {{ok: boolean, errors: string[], warnings: string[], document: object|null}}
 */
export function validateAssessmentDocument(input, options = {}) {
  const errors = [];
  const warnings = [];
  if (options.maxBytes && options.byteLength && options.byteLength > options.maxBytes) {
    return { ok: false, errors: [`Assessment file is larger than ${options.maxBytes} bytes.`], warnings, document: null };
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: ["Assessment file must contain a JSON object."], warnings, document: null };
  }
  if (input.schema !== DOCUMENT_SCHEMA) {
    return {
      ok: false,
      errors: [`Unrecognised assessment document schema: ${input.schema ?? "(missing)"}.`],
      warnings,
      document: null
    };
  }
  if (input.schemaVersion !== ASSESSMENT_SCHEMA_VERSION) {
    return {
      ok: false,
      errors: [
        `Assessment schemaVersion ${input.schemaVersion ?? "(missing)"} is not supported by this report ` +
          `(this report reads version ${ASSESSMENT_SCHEMA_VERSION}).`
      ],
      warnings,
      document: null
    };
  }
  if (!input.reportAssociation || typeof input.reportAssociation.reportId !== "string" || !input.reportAssociation.reportId) {
    errors.push("Assessment document has no report association.");
  }
  if (!Array.isArray(input.records)) {
    errors.push("Assessment document has no records array.");
  } else if (input.records.length > LIMITS.recordsPerDocument) {
    errors.push(`Assessment document has more than ${LIMITS.recordsPerDocument} records.`);
  }

  const records = [];
  if (Array.isArray(input.records)) {
    input.records.forEach((raw, index) => {
      const record = normalizeRecord(raw);
      const result = validateRecord(record);
      if (!result.ok) {
        errors.push(`Record ${index + 1}: ${result.errors.join(" ")}`);
        return;
      }
      records.push(record);
    });
  }

  if (errors.length > 0) return { ok: false, errors, warnings, document: null };

  const document = {
    schema: DOCUMENT_SCHEMA,
    schemaVersion: ASSESSMENT_SCHEMA_VERSION,
    documentId: cleanString(input.documentId, 200) || "doc_imported",
    createdAt: cleanString(input.createdAt, 40),
    updatedAt: cleanString(input.updatedAt, 40),
    exportedAt: input.exportedAt ? cleanString(input.exportedAt, 40) : null,
    reportAssociation: {
      reportId: cleanString(input.reportAssociation.reportId, 300),
      issueNumber: Number.isFinite(Number(input.reportAssociation.issueNumber))
        ? Number(input.reportAssociation.issueNumber)
        : null,
      issueUrl: isSafeHttpUrl(input.reportAssociation.issueUrl) ? input.reportAssociation.issueUrl : null,
      scanTitle: cleanString(input.reportAssociation.scanTitle, LIMITS.shortText),
      scannedAt: cleanString(input.reportAssociation.scannedAt, 40)
    },
    catalogue: input.catalogue
      ? {
          catalogueVersion: cleanString(input.catalogue.catalogueVersion, 120),
          contentSha256: cleanString(input.catalogue.contentSha256, 64)
        }
      : null,
    records,
    notes: cleanString(input.notes, LIMITS.longText)
  };

  if (document.catalogue?.catalogueVersion && input.catalogue?.catalogueVersion === undefined) {
    warnings.push("Imported document has no catalogue version; requirement references may be ambiguous.");
  }
  return { ok: true, errors, warnings, document };
}

/** Describe how an imported document relates to the open report. */
export function describeAssociation(localReport, incomingDocument) {
  const localId = String(localReport?.reportId ?? "");
  const incomingId = String(incomingDocument?.reportAssociation?.reportId ?? "");
  if (!incomingId) return { compatible: false, sameReport: false, reason: "The imported file does not identify a source report." };
  if (incomingId === localId) {
    return { compatible: true, sameReport: true, reason: "Imported assessment belongs to this report." };
  }
  const sameIssue =
    localReport?.issueNumber != null &&
    String(localReport.issueNumber) === String(incomingDocument?.reportAssociation?.issueNumber ?? "");
  if (sameIssue) {
    return {
      compatible: false,
      sameReport: false,
      reason:
        "Imported assessment belongs to a different scan of the same issue. " +
        "Records will be marked as needing revalidation against this scan.",
      requiresRevalidation: true
    };
  }
  return {
    compatible: false,
    sameReport: false,
    reason: "Imported assessment belongs to a different report. Import is possible only as related evidence, not as results for this scan.",
    foreignReport: true
  };
}

/**
 * Merge an imported document into the local document without discarding either
 * side. Records with the same id and identical content are skipped; records with
 * the same id but different content are preserved as conflict-linked copies.
 *
 * @param {object} local
 * @param {object} incoming
 * @param {{now?: () => string, random?: object, importedAt?: string, requiresRevalidation?: boolean}} [options]
 * @returns {{document: object, summary: object}}
 */
export function mergeAssessmentDocuments(local, incoming, options = {}) {
  const now = options.now?.() ?? new Date().toISOString();
  const importedAt = options.importedAt ?? now;
  const base = local && local.schema === DOCUMENT_SCHEMA ? local : createAssessmentDocument({ report: {} });
  const records = [...(base.records ?? [])];
  const index = new Map(records.map((record) => [record.recordId, record]));
  const summary = { added: 0, skippedIdentical: 0, conflicts: 0, revalidationRequired: 0, perRecord: [] };

  for (const incomingRecord of incoming?.records ?? []) {
    const existing = index.get(incomingRecord.recordId);
    if (!existing) {
      const record = {
        ...incomingRecord,
        importedAt,
        staleSource: options.requiresRevalidation === true ? true : incomingRecord.staleSource,
        requiresRevalidation: options.requiresRevalidation === true ? true : incomingRecord.requiresRevalidation
      };
      records.push(record);
      index.set(record.recordId, record);
      summary.added += 1;
      summary.perRecord.push({ recordId: record.recordId, action: "added" });
      if (record.requiresRevalidation) summary.revalidationRequired += 1;
      continue;
    }
    if (sameRecord(existing, incomingRecord)) {
      summary.skippedIdentical += 1;
      summary.perRecord.push({ recordId: existing.recordId, action: "identical" });
      continue;
    }
    const conflictCopy = {
      ...incomingRecord,
      recordId: createRecordId(options.random),
      conflictsWith: [...new Set([...(incomingRecord.conflictsWith ?? []), existing.recordId])],
      importedAt,
      staleSource: options.requiresRevalidation === true ? true : incomingRecord.staleSource,
      requiresRevalidation: options.requiresRevalidation === true ? true : incomingRecord.requiresRevalidation,
      provenance: { ...incomingRecord.provenance, sourceRecordId: incomingRecord.recordId }
    };
    const originalIndex = records.findIndex((record) => record.recordId === existing.recordId);
    if (originalIndex >= 0 && !records[originalIndex].conflictsWith?.includes(conflictCopy.recordId)) {
      records[originalIndex] = {
        ...records[originalIndex],
        conflictsWith: [...new Set([...(records[originalIndex].conflictsWith ?? []), conflictCopy.recordId])]
      };
    }
    records.push(conflictCopy);
    index.set(conflictCopy.recordId, conflictCopy);
    summary.conflicts += 1;
    summary.perRecord.push({ recordId: conflictCopy.recordId, action: "conflict", conflictsWith: existing.recordId });
  }

  return {
    document: { ...base, records, updatedAt: now, importedAt, notes: base.notes ?? "" },
    summary
  };
}

function sameRecord(a, b) {
  const comparable = (record) => {
    const { importedAt, conflictsWith, ...rest } = record;
    return JSON.stringify(sortKeys(rest));
  };
  return comparable(a) === comparable(b);
}

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortKeys(value[key])]));
  }
  return value;
}

/** Summarise a document for an import preview. Never renders raw markup. */
export function summariseDocument(document) {
  const records = document?.records ?? [];
  const urls = [...new Set(records.map((record) => record.testedUrl).filter(Boolean))];
  const outcomes = {};
  const methods = {};
  for (const record of records) {
    outcomes[record.outcome] = (outcomes[record.outcome] ?? 0) + 1;
    methods[record.method] = (methods[record.method] ?? 0) + 1;
  }
  const testingDates = records.map((record) => record.testingDate).filter(Boolean).sort();
  return {
    documentId: document?.documentId ?? null,
    reportAssociation: document?.reportAssociation ?? null,
    recordCount: records.length,
    urls: urls.slice(0, 20),
    urlCount: urls.length,
    outcomes,
    methods,
    earliestTestingDate: testingDates[0] ?? null,
    latestTestingDate: testingDates[testingDates.length - 1] ?? null,
    exportedAt: document?.exportedAt ?? null,
    catalogueVersion: document?.catalogue?.catalogueVersion ?? null,
    conflictCount: records.filter((record) => (record.conflictsWith ?? []).length > 0).length,
    revalidationRequiredCount: records.filter((record) => record.requiresRevalidation).length
  };
}

/** Storage key for one report and schema version. Never based on file name or URL. */
export function buildStorageKey(reportId, schemaVersion = ASSESSMENT_SCHEMA_VERSION) {
  const safeId = String(reportId ?? "unknown").replace(/[^a-zA-Z0-9/_.:-]/g, "-");
  return `${STORAGE_NAMESPACE}:v${schemaVersion}:${safeId}`;
}

const PLACEHOLDER = "_[Not recorded — add before filing]_";

function mdText(value) {
  if (!value) return PLACEHOLDER;
  return String(value).replace(/\r\n/g, "\n").replace(CONTROL_CHARS_RE, "").trim() || PLACEHOLDER;
}

function mdInline(value) {
  if (!value) return PLACEHOLDER;
  return mdText(value).replace(/[<>]/g, (character) => (character === "<" ? "&lt;" : "&gt;")).replace(/\n+/g, " ");
}

/**
 * Build a developer-facing issue report from an assessment record.
 *
 * The output is Markdown plus a JSON evidence object. Placeholders are explicit
 * so a reporter can see what is missing instead of reading invented detail.
 *
 * @param {object} record
 * @param {object} context `{report, procedure, catalogue}`
 * @returns {{title: string, markdown: string, json: object}}
 */
export function buildIssueReport(record, context = {}) {
  const report = context.report ?? {};
  const procedure = context.procedure ?? null;
  const criterion = (record.wcag ?? [])[0] ?? null;
  const shortBarrier = firstSentence(record.actualBehaviour || record.title || record.reviewerNotes) || "Accessibility barrier";
  const page = pageLabel(record.testedUrl || report.issueUrl || "");
  const title = `[A11y] ${truncate(shortBarrier, 80)} — ${page}`;
  const environment = record.environment ?? {};

  const lines = [];
  lines.push(`## Accessibility barrier: ${mdInline(shortBarrier)}`);
  lines.push("");
  lines.push(`**Affected page:** ${record.testedUrl ? `<${record.testedUrl}>` : PLACEHOLDER}`);
  lines.push(`**Component:** ${mdInline(record.component || record.semanticRegion)}`);
  lines.push(`**Detection method:** ${record.method}`);
  lines.push(`**Review status:** ${record.verification}`);
  lines.push(`**Outcome:** ${record.outcome}`);
  if (criterion) lines.push(`**WCAG success criterion:** ${criterion}`);
  if ((record.act ?? []).length > 0) lines.push(`**ACT rule references:** ${record.act.join(", ")}`);
  if (record.automatedFinding) {
    lines.push(
      `**Automated finding:** ${record.automatedFinding.engine || "unknown"} — ${record.automatedFinding.ruleId || "unknown"}` +
        (record.automatedFinding.instanceId ? ` (instance ${record.automatedFinding.instanceId})` : "")
    );
  }
  lines.push("");
  lines.push("### User impact");
  lines.push("");
  lines.push(mdText(record.userImpact));
  lines.push("");
  lines.push("### Steps to reproduce");
  lines.push("");
  if (record.reproductionSteps) {
    lines.push(mdText(record.reproductionSteps));
  } else if (procedure) {
    lines.push("Procedure followed:");
    lines.push("");
    for (const step of procedure.steps ?? []) lines.push(`1. ${step}`);
    lines.push("");
    lines.push(`${PLACEHOLDER} Confirm the exact steps in your environment.`);
  } else {
    lines.push(PLACEHOLDER);
  }
  lines.push("");
  lines.push("### Actual behaviour");
  lines.push("");
  lines.push(mdText(record.actualBehaviour));
  lines.push("");
  lines.push("### Expected behaviour");
  lines.push("");
  lines.push(mdText(record.expectedBehaviour || procedure?.expected));
  lines.push("");
  lines.push("### Testing environment");
  lines.push("");
  lines.push("| Item | Value |");
  lines.push("| --- | --- |");
  lines.push(`| Browser | ${mdInline([environment.browser, environment.browserVersion].filter(Boolean).join(" "))} |`);
  lines.push(`| Operating system | ${mdInline(environment.os)} |`);
  lines.push(
    `| Assistive technology | ${mdInline([environment.assistiveTechnology, environment.assistiveTechnologyVersion].filter(Boolean).join(" "))} |`
  );
  lines.push(`| Viewport | ${mdInline(environment.viewport)} |`);
  lines.push(`| Zoom | ${mdInline(environment.zoom)} |`);
  lines.push(`| Colour scheme | ${mdInline(environment.preferences?.colorScheme)} |`);
  lines.push(`| Forced colours | ${mdInline(environment.preferences?.forcedColors)} |`);
  lines.push(`| Reduced motion | ${mdInline(environment.preferences?.reducedMotion)} |`);
  lines.push(`| Date tested | ${mdInline(record.testingDate)} |`);
  lines.push("");
  if (record.elementIdentity?.locator) {
    lines.push("### Element identity");
    lines.push("");
    lines.push(`Locator type: ${record.elementIdentity.locatorType}`);
    lines.push("");
    lines.push("```text");
    lines.push(truncate(record.elementIdentity.locator, 2000));
    lines.push("```");
    lines.push("");
  }
  if (record.elementIdentity?.htmlSnippet) {
    lines.push("### HTML snippet");
    lines.push("");
    lines.push("```html");
    lines.push(redactSnippet(record.elementIdentity.htmlSnippet));
    lines.push("```");
    lines.push("");
  }
  lines.push("### Reviewer notes");
  lines.push("");
  lines.push(mdText(record.reviewerNotes));
  lines.push("");
  lines.push("### Source");
  lines.push("");
  lines.push(`- Open Scans report: ${report.reportId ?? "unknown"}`);
  lines.push(`- Report scan time: ${report.scannedAt ?? "unknown"}`);
  lines.push(`- Record id: ${record.recordId}`);
  if (record.assessmentDefinitionId) lines.push(`- Assessment procedure: ${record.assessmentDefinitionId}`);
  if (record.assessmentCatalogueVersion) lines.push(`- Assessment catalogue: ${record.assessmentCatalogueVersion}`);
  lines.push("");
  lines.push("### Known limitations of this report");
  lines.push("");
  lines.push("- The outcome describes one reviewer's observation within a documented scope.");
  lines.push("- It is not a conformance claim about the website or the success criterion.");
  lines.push(`- Recorded with method: ${record.method}; verification: ${record.verification}.`);
  if (record.requiresRevalidation) {
    lines.push("- The evidence was imported from a different scan and needs revalidation against the current page.");
  }
  lines.push("");

  return {
    title,
    markdown: `${lines.join("\n")}\n`,
    json: {
      schema: RECORD_SCHEMA,
      report: {
        reportId: report.reportId ?? null,
        issueNumber: report.issueNumber ?? null,
        scannedAt: report.scannedAt ?? null,
        scanTitle: report.scanTitle ?? null
      },
      record
    }
  };
}

/** Short one-line summary used by copy actions. */
export function buildIssueSummary(record) {
  const barrier = firstSentence(record.actualBehaviour || record.title || record.reviewerNotes) || "Accessibility barrier";
  return [
    `[A11y] ${truncate(barrier, 120)}`,
    `Page: ${record.testedUrl || "(not recorded)"}`,
    `Outcome: ${record.outcome}`,
    `Method: ${record.method}`,
    `Record: ${record.recordId}`
  ].join("\n");
}

function firstSentence(value) {
  if (!value) return "";
  const text = String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const match = text.match(/^(.{0,160}?[.!?])(\s|$)/);
  return (match ? match[1] : text).trim();
}

function truncate(value, max) {
  const text = String(value ?? "");
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function pageLabel(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.hostname}${parsed.pathname === "/" ? "" : parsed.pathname}`;
  } catch {
    return "page not recorded";
  }
}

/** Strip obvious secrets from a snippet included in a public issue. */
function redactSnippet(snippet) {
  return String(snippet ?? "")
    .replace(/\b(api[_-]?key|token|secret|password|passwd|pwd|authorization)\b(\s*[:=]\s*)("[^"]*"|'[^']*'|[^\s>]+)/gi, "$1$2[redacted]")
    .replace(/\bBearer\s+[A-Za-z0-9._-]+/g, "Bearer [redacted]")
    .slice(0, 4000);
}

/** Count records by outcome, used by the report status area. */
export function countRecords(records = []) {
  const byOutcome = {};
  const byMethod = {};
  const reviewedInstances = new Set();
  for (const record of records) {
    byOutcome[record.outcome] = (byOutcome[record.outcome] ?? 0) + 1;
    byMethod[record.method] = (byMethod[record.method] ?? 0) + 1;
    if (record.occurrenceId) reviewedInstances.add(record.occurrenceId);
  }
  const dates = records.map((record) => record.testingDate).filter(Boolean).sort();
  return {
    total: records.length,
    byOutcome,
    byMethod,
    reviewedInstances: reviewedInstances.size,
    earliestTestingDate: dates[0] ?? null,
    latestTestingDate: dates[dates.length - 1] ?? null,
    conflictRecords: records.filter((record) => (record.conflictsWith ?? []).length > 0).length,
    revalidationRecords: records.filter((record) => record.requiresRevalidation).length
  };
}
