/**
 * Manual review decisions.
 *
 * Automated correlation cannot always establish that two observations are the
 * same target or the same failure. A review record is a human decision about
 * that ambiguity. Reviews are stored in version control, reviewed in pull
 * requests, and applied *on top of* engine evidence:
 *
 * - they never modify observations or correlation artifacts;
 * - unknown or stale ids are reported, never silently dropped;
 * - a decision without a rationale, author and date is invalid.
 *
 * @module reviews
 */
import { readFileSync } from "node:fs";

export const REVIEW_DECISIONS_SCHEMA_VERSION = "a11y-review-decisions/1";
export const REVIEW_STATUS_SCHEMA_VERSION = "a11y-review-status/1";

/** Decisions a reviewer may record. */
export const REVIEW_DECISIONS = Object.freeze([
  "confirmed-same-target",
  "confirmed-equivalent",
  "confirmed-separate",
  "incorrect-observation",
  "insufficient-evidence",
  "reviewed-expectation"
]);

const TARGET_KINDS = Object.freeze(["correlated-issue", "observation"]);

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Validate a review-decisions document.
 *
 * @param {object} document
 * @returns {{ok: boolean, errors: string[]}}
 */
export function validateReviewDecisions(document) {
  const errors = [];

  if (!document || typeof document !== "object" || Array.isArray(document)) {
    return { ok: false, errors: ["document must be an object"] };
  }
  if (document.schemaVersion !== REVIEW_DECISIONS_SCHEMA_VERSION) {
    errors.push(`schemaVersion must be ${REVIEW_DECISIONS_SCHEMA_VERSION}`);
  }
  if (!Array.isArray(document.decisions)) {
    return { ok: false, errors: [...errors, "decisions must be an array"] };
  }

  const seenIds = new Set();

  document.decisions.forEach((decision, index) => {
    const where = `decisions[${index}]`;
    if (!decision || typeof decision !== "object") {
      errors.push(`${where}: must be an object`);
      return;
    }

    if (typeof decision.reviewId !== "string" || decision.reviewId.trim() === "") {
      errors.push(`${where}: reviewId is required`);
    } else if (seenIds.has(decision.reviewId)) {
      errors.push(`${where}: duplicate reviewId ${decision.reviewId}`);
    } else {
      seenIds.add(decision.reviewId);
    }

    if (!decision.target || typeof decision.target !== "object") {
      errors.push(`${where}: target is required`);
    } else {
      if (!TARGET_KINDS.includes(decision.target.kind)) {
        errors.push(`${where}: target.kind must be one of ${TARGET_KINDS.join(", ")}`);
      }
      if (typeof decision.target.id !== "string" || decision.target.id.trim() === "") {
        errors.push(`${where}: target.id is required`);
      }
    }

    if (!REVIEW_DECISIONS.includes(decision.decision)) {
      errors.push(`${where}: decision must be one of ${REVIEW_DECISIONS.join(", ")}`);
    }

    if (typeof decision.rationale !== "string" || decision.rationale.trim().length < 10) {
      errors.push(`${where}: rationale is required (at least 10 characters)`);
    }
    if (typeof decision.author !== "string" || decision.author.trim() === "") {
      errors.push(`${where}: author is required`);
    }
    if (typeof decision.date !== "string" || !DATE_RE.test(decision.date)) {
      errors.push(`${where}: date must be YYYY-MM-DD`);
    }
    if (decision.evidenceRefs !== undefined && !Array.isArray(decision.evidenceRefs)) {
      errors.push(`${where}: evidenceRefs must be an array when present`);
    }
    if (decision.supersedes !== undefined && typeof decision.supersedes !== "string") {
      errors.push(`${where}: supersedes must be a string when present`);
    }
  });

  // An empty decisions file is valid: a repository starts with no reviews.

  return { ok: errors.length === 0, errors };
}

/** Load and validate a review-decisions file. */
export function loadReviewDecisions(path) {
  const document = JSON.parse(readFileSync(path, "utf8"));
  const validation = validateReviewDecisions(document);
  if (!validation.ok) {
    const error = new Error(`Invalid review decisions:\n${validation.errors.join("\n")}`);
    error.errors = validation.errors;
    throw error;
  }
  return document;
}

/**
 * Apply review decisions to a correlation artifact.
 *
 * @param {object} correlation - a11y-correlation/1 artifact
 * @param {object} decisions - a11y-review-decisions/1 document
 * @returns {object} a11y-review-status/1 artifact
 */
export function applyReviews(correlation, decisions) {
  const validation = validateReviewDecisions(decisions);
  if (!validation.ok) {
    const error = new Error(`Invalid review decisions:\n${validation.errors.join("\n")}`);
    error.errors = validation.errors;
    throw error;
  }

  const issues = correlation?.issues ?? [];
  const singles = correlation?.singles ?? [];

  const byCorrelatedIssue = new Map(issues.map((issue) => [issue.correlatedIssueId, issue]));
  const observationsById = new Map(
    [...issues, ...singles].flatMap((entry) =>
      (entry.observations ?? []).map((observation) => [observation.observationId, entry])
    )
  );

  // Later decisions supersede earlier ones for the same target.
  const effective = new Map();
  for (const decision of decisions.decisions) {
    const key = `${decision.target.kind}:${decision.target.id}`;
    effective.set(key, decision);
  }

  const statuses = [];
  const unmatched = [];

  for (const [key, decision] of effective.entries()) {
    const [kind, id] = [decision.target.kind, decision.target.id];
    const issue = kind === "correlated-issue" ? byCorrelatedIssue.get(id) : observationsById.get(id);

    if (!issue) {
      unmatched.push({
        reviewId: decision.reviewId,
        target: decision.target,
        reason: "no matching issue or observation in this correlation artifact"
      });
      continue;
    }

    statuses.push({
      correlatedIssueId: issue.correlatedIssueId ?? null,
      url: issue.url ?? null,
      family: issue.family ?? null,
      targetId: issue.targetId ?? null,
      reviewStatus: "reviewed",
      decision: decision.decision,
      rationale: decision.rationale,
      author: decision.author,
      date: decision.date,
      evidenceRefs: decision.evidenceRefs ?? [],
      supersedes: decision.supersedes ?? null,
      reviewId: decision.reviewId
    });
  }

  const reviewedIds = new Set(statuses.map((status) => status.correlatedIssueId).filter(Boolean));
  const unreviewed = issues
    .filter((issue) => !reviewedIds.has(issue.correlatedIssueId))
    .map((issue) => ({
      correlatedIssueId: issue.correlatedIssueId,
      url: issue.url,
      family: issue.family,
      mappingStatus: issue.mappingStatus,
      reviewStatus: "unreviewed"
    }));

  const byDecision = {};
  for (const status of statuses) {
    byDecision[status.decision] = (byDecision[status.decision] || 0) + 1;
  }

  return {
    schemaVersion: REVIEW_STATUS_SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    summary: {
      correlatedIssues: issues.length,
      reviewed: statuses.length,
      unreviewed: unreviewed.length,
      unmatchedDecisions: unmatched.length,
      byDecision
    },
    statuses,
    unreviewed,
    unmatched,
    note:
      "Review decisions are recorded separately from engine evidence. They never modify observations " +
      "or correlation results, and an unmatched decision means the evidence moved, not that the review was wrong."
  };
}
