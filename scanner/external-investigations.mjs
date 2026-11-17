import { reasonForBlockedHost } from "./validate-targets.mjs";
import { redactStringsDeep } from "./redact-secrets.mjs";

export const EXTERNAL_REFERENCES_SCHEMA_VERSION = "external-investigation-references/1";

const ALLOWED_REFERENCE_KEYS = new Set([
  "sourceProject", "sourceResultUrl", "investigationId", "relatedPageUrl",
  "relatedResourceUrl", "relatedComponent", "relatedAccessibilityFindingIds",
  "description", "observedAt", "referencedAt", "source"
]);

const SOURCE_PROJECTS = new Set(["firefox-energy-scanner", "vital-core", "other"]);

export const EXTERNAL_INVESTIGATION_BOUNDARY =
  "An external performance or energy investigation is linked metadata, not an accessibility failure. An energy finding does not establish WCAG nonconformance, and an accessibility finding does not establish excessive energy use.";

function text(value) {
  return String(value ?? "").trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeUrl(rawUrl) {
  try {
    const url = new URL(String(rawUrl));
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

function sameUrl(a, b) {
  const left = normalizeUrl(a);
  const right = normalizeUrl(b);
  return Boolean(left && right && left.replace(/\/$/, "") === right.replace(/\/$/, ""));
}

function validatePublicUrl(rawUrl, field, errors) {
  if (!rawUrl) return null;
  let url;
  try {
    url = new URL(String(rawUrl));
  } catch {
    errors.push(`${field} must be a valid URL.`);
    return null;
  }
  if (!["http:", "https:"].includes(url.protocol)) {
    errors.push(`${field} must use http or https.`);
    return null;
  }
  if (url.username || url.password) {
    errors.push(`${field} must not contain credentials.`);
    return null;
  }
  const blocked = reasonForBlockedHost(url.hostname);
  if (blocked) {
    errors.push(`${field} must be a public URL; ${blocked}.`);
    return null;
  }
  url.hash = "";
  return url.toString();
}

function validateDate(value, field, errors) {
  if (!value) return null;
  const parsed = Date.parse(String(value));
  if (Number.isNaN(parsed)) {
    errors.push(`${field} must be an ISO 8601 date or date-time.`);
    return null;
  }
  return new Date(parsed).toISOString();
}

function normalizeComponent(component, errors, index) {
  if (!component || typeof component !== "object" || Array.isArray(component)) {
    errors.push(`references[${index}].relatedComponent must be an object.`);
    return null;
  }
  for (const key of Object.keys(component)) {
    if (!["componentId", "componentTypeId", "componentLabel"].includes(key)) {
      errors.push(`references[${index}].relatedComponent.${key} is not supported.`);
    }
  }
  const normalized = {
    componentId: component.componentId ? text(component.componentId) : null,
    componentTypeId: component.componentTypeId ? text(component.componentTypeId) : null,
    componentLabel: component.componentLabel ? text(component.componentLabel) : null
  };
  if (!normalized.componentId && !normalized.componentTypeId && !normalized.componentLabel) {
    errors.push(`references[${index}].relatedComponent must contain an id, type id or label.`);
    return null;
  }
  return normalized;
}

/**
 * Validate and normalize an external reference file. URLs are validated but
 * never fetched.
 *
 * @param {object} input
 * @returns {{ok: boolean, errors: string[], warnings: string[], references: object[]}}
 */
export function validateExternalReferences(input) {
  const errors = [];
  const warnings = [];
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: ["External references must be an object."], warnings, references: [] };
  }
  if (input.schema !== EXTERNAL_REFERENCES_SCHEMA_VERSION) {
    return { ok: false, errors: [`schema must be '${EXTERNAL_REFERENCES_SCHEMA_VERSION}'.`], warnings, references: [] };
  }
  if (!Array.isArray(input.references)) {
    return { ok: false, errors: ["references must be an array."], warnings, references: [] };
  }
  if (input.references.length > 100) {
    return { ok: false, errors: ["references must contain at most 100 items."], warnings, references: [] };
  }

  const references = [];
  for (const [index, raw] of input.references.entries()) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      errors.push(`references[${index}] must be an object.`);
      continue;
    }
    for (const key of Object.keys(raw)) {
      if (!ALLOWED_REFERENCE_KEYS.has(key)) errors.push(`references[${index}].${key} is not supported.`);
    }
    const sourceProject = text(raw.sourceProject);
    if (!SOURCE_PROJECTS.has(sourceProject)) {
      errors.push(`references[${index}].sourceProject must be firefox-energy-scanner, vital-core or other.`);
    }
    const sourceResultUrl = validatePublicUrl(raw.sourceResultUrl, `references[${index}].sourceResultUrl`, errors);
    if (!sourceResultUrl) errors.push(`references[${index}].sourceResultUrl is required.`);
    const investigationId = text(raw.investigationId);
    if (!investigationId) errors.push(`references[${index}].investigationId is required.`);
    if (investigationId && !/^[A-Za-z0-9][A-Za-z0-9:._/@#-]{0,199}$/.test(investigationId)) {
      errors.push(`references[${index}].investigationId contains unsupported characters.`);
    }
    const description = text(raw.description);
    if (!description) errors.push(`references[${index}].description is required.`);
    if (description.length > 500) errors.push(`references[${index}].description must be at most 500 characters.`);
    const referencedAt = validateDate(raw.referencedAt, `references[${index}].referencedAt`, errors);
    if (!referencedAt) errors.push(`references[${index}].referencedAt is required.`);
    const observedAt = validateDate(raw.observedAt, `references[${index}].observedAt`, errors);
    const relatedPageUrl = validatePublicUrl(raw.relatedPageUrl, `references[${index}].relatedPageUrl`, errors);
    const relatedResourceUrl = validatePublicUrl(raw.relatedResourceUrl, `references[${index}].relatedResourceUrl`, errors);
    const relatedComponent = raw.relatedComponent
      ? normalizeComponent(raw.relatedComponent, errors, index)
      : null;
    const relatedAccessibilityFindingIds = Array.isArray(raw.relatedAccessibilityFindingIds)
      ? raw.relatedAccessibilityFindingIds.map(text).filter(Boolean)
      : [];
    for (const id of relatedAccessibilityFindingIds) {
      if (!/^[A-Za-z0-9][A-Za-z0-9:._-]{2,199}$/.test(id)) {
        errors.push(`references[${index}].relatedAccessibilityFindingIds contains an invalid identifier.`);
      }
    }
    if (!relatedPageUrl && !relatedResourceUrl && !relatedComponent) {
      errors.push(`references[${index}] must include relatedPageUrl, relatedResourceUrl or relatedComponent.`);
    }
    if (relatedComponent?.componentLabel && !relatedComponent.componentId && !relatedComponent.componentTypeId) {
      warnings.push(`references[${index}] has only a component label; labels are not used as identity, so no component linkage is attempted.`);
    }
    references.push({
      sourceProject,
      sourceResultUrl,
      investigationId,
      relatedPageUrl,
      relatedResourceUrl,
      relatedComponent,
      relatedAccessibilityFindingIds,
      description,
      observedAt,
      referencedAt,
      source: raw.source ? text(raw.source) : null
    });
  }

  return { ok: errors.length === 0, errors, warnings, references: errors.length === 0 ? references : [] };
}

function evidenceTypeFor(sourceProject) {
  if (sourceProject === "firefox-energy-scanner") return "performance-investigation";
  if (sourceProject === "vital-core") return "sustainability-investigation";
  return "external-investigation";
}

function attachLinkage(reference, comparison) {
  const pageIds = unique((comparison.pageMappings ?? [])
    .filter((page) => (
      (reference.relatedPageUrl && (sameUrl(page.baselineUrl, reference.relatedPageUrl) || sameUrl(page.comparisonUrl, reference.relatedPageUrl)))
    ))
    .map((page) => page.logicalPageId));
  const allFindings = Object.values(comparison.findings ?? {}).flat();
  const componentFindingIds = unique(allFindings
    .filter((finding) => {
      const context = finding.componentContext;
      if (!context || !reference.relatedComponent) return false;
      return Boolean(
        (reference.relatedComponent.componentId && context.componentId === reference.relatedComponent.componentId)
        || (reference.relatedComponent.componentTypeId && context.componentTypeId === reference.relatedComponent.componentTypeId)
      );
    })
    .map((finding) => finding.comparisonId));
  const matchedFindingIds = [];
  const unmatchedAccessibilityFindingIds = [];
  for (const id of reference.relatedAccessibilityFindingIds) {
    const matches = allFindings.filter((finding) => (
      finding.baseline?.occurrenceId === id
      || finding.comparison?.occurrenceId === id
      || finding.baseline?.displayId === id
      || finding.comparison?.displayId === id
      || finding.baseline?.patternId === id
      || finding.comparison?.patternId === id
    ));
    if (matches.length) matchedFindingIds.push(...matches.map((finding) => finding.comparisonId));
    else unmatchedAccessibilityFindingIds.push(id);
  }
  const basis = unique([
    pageIds.length ? "page-url" : null,
    componentFindingIds.length ? "component-id" : null,
    matchedFindingIds.length ? "accessibility-finding-id" : null
  ]);
  const confidence = matchedFindingIds.length || componentFindingIds.length ? "high" : pageIds.length ? "medium" : "low";
  return {
    pageIds,
    componentFindingIds,
    accessibilityFindingIds: unique(matchedFindingIds),
    unmatchedAccessibilityFindingIds,
    resourceLinkage: reference.relatedResourceUrl ? "metadata-only" : "none",
    basis,
    confidence,
    ownershipEstablished: false
  };
}

function normalizeReferenceForComparison(reference, comparison) {
  const linkage = attachLinkage(reference, comparison);
  return {
    ...reference,
    evidenceType: evidenceTypeFor(reference.sourceProject),
    metadataOnly: true,
    sourceFetched: false,
    linkage,
    boundary: EXTERNAL_INVESTIGATION_BOUNDARY
  };
}

/**
 * Attach optional external investigation metadata to a comparison. No URL is
 * fetched and no external scan is triggered.
 *
 * @param {object} comparison - accessibility-comparison/1
 * @param {object} input - external-investigation-references/1
 * @returns {{ok: boolean, errors: string[], warnings: string[], value: object|null}}
 */
export function attachExternalInvestigations(comparison, input) {
  if (!comparison || comparison.schema !== "accessibility-comparison/1") {
    return { ok: false, errors: ["Input must be an accessibility-comparison/1 report."], warnings: [], value: null };
  }
  const validation = validateExternalReferences(input);
  if (!validation.ok) return { ok: false, errors: validation.errors, warnings: validation.warnings, value: null };
  const externalInvestigations = validation.references.map((reference) => normalizeReferenceForComparison(reference, comparison));
  const limitations = unique([
    ...(comparison.limitations ?? []),
    EXTERNAL_INVESTIGATION_BOUNDARY,
    "External references are metadata-only; their URLs were validated but not fetched.",
    "A linked external investigation does not establish component ownership or accessibility impact."
  ]);
  const value = structuredClone(comparison);
  value.externalInvestigations = externalInvestigations;
  value.limitations = limitations;
  const redaction = { changed: 0 };
  redactStringsDeep(value, redaction);
  if (redaction.changed > 0) value.limitations.push(`Redacted ${redaction.changed} credential-shaped string(s) from the external reference metadata.`);
  return {
    ok: true,
    errors: [],
    warnings: validation.warnings,
    value
  };
}
