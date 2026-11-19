import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import {
  REVIEW_DECISIONS_SCHEMA_VERSION,
  applyReviews,
  validateReviewDecisions
} from "../../scanner/reviews.mjs";

const correlation = {
  issues: [
    {
      correlatedIssueId: "issue-image",
      url: "https://example.org/",
      family: "text-alternative",
      targetId: "dom:v1:hash:/img[1]",
      mappingStatus: "inferred-semantics",
      observations: [
        { observationId: "obs-axe", engine: "axe", ruleId: "image-alt" },
        { observationId: "obs-alfa", engine: "alfa", ruleId: "sia-r2" }
      ]
    },
    {
      correlatedIssueId: "issue-title",
      url: "https://example.org/",
      family: "act:2779a5",
      targetId: "dom:v1:hash:/title[1]",
      mappingStatus: "act-verified",
      observations: [{ observationId: "obs-title", engine: "axe", ruleId: "document-title" }]
    }
  ],
  singles: []
};

function decision(overrides = {}) {
  return {
    reviewId: "RV-0001",
    target: { kind: "correlated-issue", id: "issue-image" },
    decision: "confirmed-equivalent",
    rationale: "Both engines point at the same image and describe the same missing alt text.",
    author: "reviewer",
    date: "2026-11-19",
    ...overrides
  };
}

function documentWith(decisions) {
  return { schemaVersion: REVIEW_DECISIONS_SCHEMA_VERSION, decisions };
}

test("the committed decisions file is valid", () => {
  const committed = JSON.parse(readFileSync(new URL("../../reviews/decisions.json", import.meta.url), "utf8"));
  assert.equal(validateReviewDecisions(committed).ok, true);
  assert.deepEqual(committed.decisions, []);
});

test("a complete decision validates", () => {
  assert.deepEqual(validateReviewDecisions(documentWith([decision()])).errors, []);
});

test("incomplete decisions are rejected with specific reasons", () => {
  const missingRationale = decision({ rationale: "" });
  const result = validateReviewDecisions(documentWith([missingRationale]));
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((error) => /rationale/.test(error)));

  const missingAuthor = decision({ author: "" });
  assert.ok(validateReviewDecisions(documentWith([missingAuthor])).errors.some((e) => /author/.test(e)));

  const badDate = decision({ date: "19/11/2026" });
  assert.ok(validateReviewDecisions(documentWith([badDate])).errors.some((e) => /date/.test(e)));

  const badDecision = decision({ decision: "looks-fine" });
  assert.ok(validateReviewDecisions(documentWith([badDecision])).errors.some((e) => /decision/.test(e)));

  const badTarget = decision({ target: { kind: "url", id: "x" } });
  assert.ok(validateReviewDecisions(documentWith([badTarget])).errors.some((e) => /target.kind/.test(e)));
});

test("duplicate review ids are rejected", () => {
  const result = validateReviewDecisions(documentWith([decision(), decision({ target: { kind: "correlated-issue", id: "issue-title" } })]));
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((error) => /duplicate reviewId/.test(error)));
});

test("reviews are applied without modifying the correlation artifact", () => {
  const before = JSON.stringify(correlation);
  const status = applyReviews(correlation, documentWith([decision()]));

  assert.equal(JSON.stringify(correlation), before, "correlation evidence is untouched");
  assert.equal(status.schemaVersion, "a11y-review-status/1");
  assert.equal(status.summary.reviewed, 1);
  assert.equal(status.summary.unreviewed, 1);
  assert.equal(status.statuses[0].decision, "confirmed-equivalent");
  assert.equal(status.statuses[0].author, "reviewer");
  assert.equal(status.unreviewed[0].correlatedIssueId, "issue-title");
});

test("observation-level decisions resolve to their correlated issue", () => {
  const status = applyReviews(
    correlation,
    documentWith([decision({ target: { kind: "observation", id: "obs-alfa" } })])
  );
  assert.equal(status.summary.reviewed, 1);
  assert.equal(status.statuses[0].correlatedIssueId, "issue-image");
});

test("stale ids are reported as unmatched, never dropped", () => {
  const status = applyReviews(
    correlation,
    documentWith([decision({ target: { kind: "correlated-issue", id: "issue-from-another-scan" } })])
  );

  assert.equal(status.summary.reviewed, 0);
  assert.equal(status.summary.unmatchedDecisions, 1);
  assert.match(status.unmatched[0].reason, /no matching issue or observation/);
});

test("a later decision supersedes an earlier one for the same target", () => {
  const status = applyReviews(
    correlation,
    documentWith([
      decision({ reviewId: "RV-0001", decision: "insufficient-evidence" }),
      decision({ reviewId: "RV-0002", decision: "confirmed-equivalent" })
    ])
  );

  assert.equal(status.summary.reviewed, 1);
  assert.equal(status.statuses[0].decision, "confirmed-equivalent");
  assert.equal(status.statuses[0].reviewId, "RV-0002");
});

test("invalid documents throw instead of producing a partial status", () => {
  assert.throws(() => applyReviews(correlation, documentWith([decision({ rationale: "short" })])), /Invalid review decisions/);
});
