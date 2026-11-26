import test from "node:test";
import assert from "node:assert/strict";

import {
  ASSESSMENT_SCHEMA_VERSION,
  DOCUMENT_SCHEMA,
  buildIssueReport,
  buildStorageKey,
  countRecords,
  createAssessmentDocument,
  createRecord,
  describeAssociation,
  isSafeHttpUrl,
  mergeAssessmentDocuments,
  normalizeRecord,
  summariseDocument,
  validateAssessmentDocument,
  validateRecord
} from "../../scanner/assessment/records.mjs";

const REPORT = Object.freeze({
  reportId: "open-scans/issue-77/2026-11-26T12:00:00.000Z",
  issueNumber: 77,
  issueUrl: "https://github.com/example/repo/issues/77",
  scanTitle: "Example site",
  scannedAt: "2026-11-26T12:00:00.000Z"
});

const NOW = "2026-11-26T15:00:00.000Z";

function makeRecord(overrides = {}) {
  return createRecord(
    {
      kind: "finding",
      title: "Focus indicator disappears on the search button",
      testedUrl: "https://example.com/search",
      component: "Site search",
      outcome: "failed",
      method: "guided-manual",
      actualBehaviour: "The search button shows no focus indicator when tabbed to.",
      expectedBehaviour: "A visible focus indicator should surround the button.",
      reviewerNotes: "Tested in Firefox with the default theme.",
      verification: "self-attested",
      wcag: ["2.4.7", "not-a-criterion"],
      ...overrides
    },
    { now: () => NOW, random: { randomUUID: () => "test-uuid" } }
  );
}

test("createRecord applies the current schema and defaults", () => {
  const record = makeRecord();
  assert.equal(record.schemaVersion, ASSESSMENT_SCHEMA_VERSION);
  assert.equal(record.recordId, "rec_test-uuid");
  assert.equal(record.testingDate, "2026-11-26");
  assert.equal(record.recordedAt, NOW);
  assert.equal(record.verification, "self-attested");
  // Malformed criteria are dropped rather than stored.
  assert.deepEqual(record.wcag, ["2.4.7"]);
  assert.equal(validateRecord(record).ok, true);
});

test("a passed outcome with no evidence is still a pass within scope, not conformance", () => {
  const record = makeRecord({ outcome: "passed" });
  assert.equal(validateRecord(record).ok, true);
  assert.equal(record.outcome, "passed");
});

test("a not-applicable outcome requires evidence or an explanation", () => {
  const record = makeRecord({ outcome: "not-applicable", actualBehaviour: "", reviewerNotes: "" });
  const result = validateRecord(record);
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /not-applicable/);

  const explained = makeRecord({ outcome: "not-applicable", reviewerNotes: "The page has no images at all." });
  assert.equal(validateRecord(explained).ok, true);
});

test("a failed outcome requires an observation or a note", () => {
  const record = makeRecord({ actualBehaviour: "", reviewerNotes: "" });
  const result = validateRecord(record);
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /failed outcome/);
});

test("unsafe or relative URLs are rejected", () => {
  assert.equal(isSafeHttpUrl("https://example.com/a"), true);
  assert.equal(isSafeHttpUrl("javascript:alert(1)"), false);
  assert.equal(isSafeHttpUrl("data:text/html,<script>"), false);
  assert.equal(isSafeHttpUrl("/relative"), false);
  assert.equal(isSafeHttpUrl(""), false);

  const record = makeRecord({ testedUrl: "javascript:alert(1)" });
  assert.equal(validateRecord(record).ok, false);
});

test("unknown outcomes and methods fall back to safe values", () => {
  const record = normalizeRecord({ outcome: "totally-accessible", method: "vibes" });
  assert.equal(record.outcome, "not-evaluated");
  assert.equal(record.method, "guided-manual");
});

test("control characters and extremely long text are bounded", () => {
  const record = makeRecord({ reviewerNotes: `${"a".repeat(50000)}\u0000\u0007` });
  assert.ok(record.reviewerNotes.length <= 20000);
  assert.ok(!record.reviewerNotes.includes("\u0000"));
});

test("documents validate their schema, version and records", () => {
  const document = createAssessmentDocument({ report: REPORT });
  assert.equal(document.schema, DOCUMENT_SCHEMA);
  assert.equal(document.schemaVersion, ASSESSMENT_SCHEMA_VERSION);
  assert.deepEqual(document.records, []);

  document.records.push(makeRecord());
  const ok = validateAssessmentDocument(JSON.parse(JSON.stringify(document)));
  assert.equal(ok.ok, true);
  assert.equal(ok.document.records.length, 1);
});

test("an incompatible schema version is rejected with a clear error", () => {
  const document = createAssessmentDocument({ report: REPORT });
  document.schemaVersion = 99;
  const result = validateAssessmentDocument(document);
  assert.equal(result.ok, false);
  assert.match(result.errors[0], /schemaVersion 99 is not supported/);
});

test("a non-Open-Scans document is rejected", () => {
  const result = validateAssessmentDocument({ schema: "some-other-tool", records: [] });
  assert.equal(result.ok, false);
  assert.match(result.errors[0], /Unrecognised assessment document schema/);
});

test("oversized documents are rejected before parsing records", () => {
  const result = validateAssessmentDocument({ schema: DOCUMENT_SCHEMA }, { maxBytes: 10, byteLength: 11 });
  assert.equal(result.ok, false);
  assert.match(result.errors[0], /larger than 10 bytes/);
});

test("an invalid record rejects the whole document", () => {
  const document = createAssessmentDocument({ report: REPORT });
  document.records.push(makeRecord({ outcome: "not-applicable", reviewerNotes: "", applicabilityEvidence: "" }));
  const result = validateAssessmentDocument(document);
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /Record 1/);
});

test("association detection distinguishes the same report, another scan, and another report", () => {
  const same = describeAssociation(REPORT, createAssessmentDocument({ report: REPORT }));
  assert.equal(same.sameReport, true);
  assert.equal(same.compatible, true);

  const otherScan = describeAssociation(REPORT, createAssessmentDocument({
    report: { ...REPORT, reportId: "open-scans/issue-77/2026-10-01T00:00:00.000Z" }
  }));
  assert.equal(otherScan.sameReport, false);
  assert.equal(otherScan.requiresRevalidation, true);

  const foreign = describeAssociation(REPORT, createAssessmentDocument({
    report: { reportId: "open-scans/issue-99/x", issueNumber: 99 }
  }));
  assert.equal(foreign.foreignReport, true);
  assert.equal(foreign.compatible, false);
});

test("merging adds new records, skips identical ones and preserves conflicts", () => {
  const local = createAssessmentDocument({ report: REPORT });
  const base = makeRecord({ recordId: "rec_fixed", actualBehaviour: "Original observation." });
  local.records.push(base);

  const incoming = createAssessmentDocument({ report: REPORT });
  incoming.records.push({ ...base });
  incoming.records.push(makeRecord({ recordId: "rec_new" }));
  incoming.records.push({ ...base, actualBehaviour: "A different reviewer observed something else." });

  const { document, summary } = mergeAssessmentDocuments(local, incoming, {
    now: () => NOW,
    random: { randomUUID: () => "conflict-uuid" }
  });

  assert.equal(summary.skippedIdentical, 1);
  assert.equal(summary.added, 1);
  assert.equal(summary.conflicts, 1);
  assert.equal(document.records.length, 3);

  const conflict = document.records.find((record) => record.recordId === "rec_conflict-uuid");
  assert.ok(conflict);
  assert.deepEqual(conflict.conflictsWith, ["rec_fixed"]);
  assert.equal(conflict.provenance.sourceRecordId, "rec_fixed");
  // The original record is preserved and linked, not overwritten.
  const original = document.records.find((record) => record.recordId === "rec_fixed");
  assert.equal(original.actualBehaviour, "Original observation.");
  assert.deepEqual(original.conflictsWith, ["rec_conflict-uuid"]);
});

test("merging from another scan marks imported records as needing revalidation", () => {
  const local = createAssessmentDocument({ report: REPORT });
  const incoming = createAssessmentDocument({
    report: { ...REPORT, reportId: "open-scans/issue-77/2026-10-01T00:00:00.000Z" }
  });
  incoming.records.push(makeRecord());
  const { document, summary } = mergeAssessmentDocuments(local, incoming, {
    now: () => NOW,
    requiresRevalidation: true
  });
  assert.equal(summary.revalidationRequired, 1);
  assert.equal(document.records[0].requiresRevalidation, true);
});

test("the storage key is stable, versioned and not based on a file name", () => {
  const key = buildStorageKey(REPORT.reportId, 1);
  assert.equal(key, "open-scans:assessment:v1:open-scans/issue-77/2026-11-26T12:00:00.000Z");
  assert.equal(buildStorageKey(REPORT.reportId, 1), key);
  assert.equal(buildStorageKey(REPORT.reportId, 2).includes(":v2:"), true);
  assert.ok(!key.includes(".html"));
});

test("the issue report is Markdown with explicit placeholders and escaped raw HTML", () => {
  const record = makeRecord({
    userImpact: "",
    elementIdentity: {
      locator: "#search",
      locatorType: "css",
      htmlSnippet: '<button onclick="alert(1)"><script>bad()</script></button>'
    }
  });
  const issue = buildIssueReport(record, { report: REPORT });
  assert.match(issue.title, /^\[A11y\]/);
  assert.match(issue.markdown, /### User impact/);
  assert.match(issue.markdown, /\[Not recorded — add before filing\]/);
  // The snippet stays inside a code fence and no active markup is introduced.
  assert.match(issue.markdown, /```html/);
  assert.ok(issue.markdown.includes("<script>bad()</script>"));
  assert.ok(!issue.markdown.includes("\u0000"));
  assert.equal(issue.json.schema, "a11y-assessment-record/1");
  assert.equal(issue.json.report.reportId, REPORT.reportId);
});

test("the issue report redacts obvious credentials in snippets", () => {
  const record = makeRecord({
    elementIdentity: {
      locator: "#x",
      locatorType: "css",
      htmlSnippet: '<div data-api-key="sk-live-1234567890">Bearer abc.def.ghi</div>'
    }
  });
  const issue = buildIssueReport(record, { report: REPORT });
  assert.ok(!issue.markdown.includes("sk-live-1234567890"));
  assert.ok(!issue.markdown.includes("Bearer abc.def.ghi"));
  assert.match(issue.markdown, /\[redacted\]/);
});

test("a record with no WCAG mapping still produces a useful issue report", () => {
  const record = makeRecord({ wcag: [], actualBehaviour: "The carousel auto-advances while I am reading." });
  const issue = buildIssueReport(record, { report: REPORT });
  assert.ok(!issue.markdown.includes("WCAG success criterion"));
  assert.match(issue.markdown, /auto-advances/);
  assert.match(issue.markdown, /Known limitations/);
});

test("document summaries never expose raw record content", () => {
  const document = createAssessmentDocument({ report: REPORT });
  document.records.push(makeRecord(), makeRecord({ recordId: "rec_two", outcome: "passed" }));
  const summary = summariseDocument(document);
  assert.equal(summary.recordCount, 2);
  assert.deepEqual(summary.outcomes, { failed: 1, passed: 1 });
  assert.equal(summary.urlCount, 1);
  assert.equal(summary.earliestTestingDate, "2026-11-26");
  assert.ok(!JSON.stringify(summary).includes("Focus indicator disappears"));
});

test("countRecords reports reviewed instances and conflicts", () => {
  const records = [
    makeRecord({ occurrenceId: "occ-1" }),
    makeRecord({ recordId: "rec_b", occurrenceId: "occ-1", outcome: "passed" }),
    makeRecord({ recordId: "rec_c", conflictsWith: ["rec_b"], requiresRevalidation: true })
  ];
  const counts = countRecords(records);
  assert.equal(counts.total, 3);
  assert.equal(counts.reviewedInstances, 1);
  assert.equal(counts.conflictRecords, 1);
  assert.equal(counts.revalidationRecords, 1);
});
