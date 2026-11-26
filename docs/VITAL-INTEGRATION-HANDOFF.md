# VITAL Core integration handoff

**Status:** design contract only. VITAL Core does not consume these artifacts yet, and
Open Scans does not implement VITAL's continuous monitoring.

This document tells a future VITAL or WCAG Spine maintainer what exists, what is stable,
what must not be assumed, and what would be needed to reuse it.

---

## 1. What Open Scans publishes today (Phase 1)

Per scan directory (`reports/issues/issue-<n>/<timestamp>/`):

| File | Schema | Stability |
| :--- | :--- | :--- |
| `report.json` | existing scan summary, plus additive `assessmentCoverage` | existing fields unchanged |
| `assessment-coverage.json` | `a11y-assessment-coverage/1` | new in Phase 1 |
| `observations.json`, `correlation.json`, `act-coverage.json` | existing | unchanged |
| `report.html` | self-contained report with the local assessment workspace | new sections are additive |

Assessment documents are **not** published by the scan. They are produced by a person
using a downloaded report, stored in the browser, and exported as
`a11y-assessment-document/1`.

---

## 2. Contracts VITAL could consume

### 2.1 Coverage (read-only, per scan)

```
GET assessment-coverage.json
```

Answers: which WCAG criteria had a mapped rule, which rules actually produced a result,
which produced a violation, what automation cannot establish, and which catalogue version
and hash were used.

Do not recompute this from `report.json` and present it as the same artifact. The
manifest carries engine execution status and rule granularity that a naïve recomputation
will lose.

### 2.2 Assessment documents (human records)

```
a11y-assessment-document/1
```

Answers: who recorded what, by which method, on what date, for what scope, with what
verification and freshness.

Non-negotiable when storing these elsewhere:

- keep `recordId` (or record `provenance.sourceRecordId`);
- keep `verification` and `outcome` separate;
- keep `requiresRevalidation` and `staleSource`;
- keep `conflictsWith` and never collapse a conflict into one result;
- keep `reportAssociation.reportId` so a record can be traced to a scan;
- never infer a pass from the absence of a record.

### 2.3 Catalogue identity

Every coverage artifact and assessment document carries:

```json
{ "catalogueVersion": "wcag-spine-2.2-2026-11-26", "contentSha256": "0fa9693e…" }
```

A record interpreted against a different catalogue version is a different claim. Preserve
the version with the record and flag mismatches rather than silently reinterpreting.

---

## 3. What VITAL would need to add

VITAL's operational model is continuous monitoring. Open Scans deliberately does not
implement any of this:

| Capability | Why it is VITAL's, not Open Scans' |
| :--- | :--- |
| Longitudinal assessment records | requires a durable store, not a downloaded file |
| Review intervals and due dates | requires scheduling and ownership |
| Assessment freshness scoring | requires policy, not a scan |
| Component-level revalidation | requires a component registry |
| Open manual finding tracking | requires an issue lifecycle |
| Remediation evidence | requires change history |
| Historical comparison of assessments | requires a stable multi-scan store |
| Accessibility Maturity Model evidence | requires organisational context |

### Suggested mapping

| VITAL concept | Open Scans source |
| :--- | :--- |
| Assessment coverage snapshot | `assessment-coverage.json` |
| Human review evidence | exported `a11y-assessment-document/1` |
| Revalidation candidate | records with `requiresRevalidation` or `staleSource` |
| Open manual finding | record with `kind: "finding"` and outcome `failed` / `inconclusive` |
| Remediation evidence | a later record for the same requirement with a different outcome and a later `testingDate` |
| Accessibility statement evidence | not implemented (Phase 7 candidate) |

### Identity to carry

- `reportAssociation.reportId` — `open-scans/issue-<n>/<scannedAt>`
- `recordId`
- `assessmentDefinitionId` (a procedure id, when the record came from a procedure)
- `occurrenceId` (when a record is tied to a specific observed instance)
- `wcag[]` and `act[]`

---

## 4. Interoperability rules

1. **No automatic transfer of passing results between scans.** A record belongs to the
   scan it was recorded against. Reuse only with `requiresRevalidation` set and a new
   testing date after revalidation.
2. **No automatic merge across reports.** `describeAssociation()` in
   `scanner/assessment/records.mjs` is the reference classification.
3. **No conformance claims.** Do not derive "WCAG compliant" from records or coverage.
4. **Preserve contradictions.** A disputed record and its counterpart both survive.
5. **No runtime AI.** If a future VITAL feature interprets records with a model, label it
   `ai-assisted` and treat it as unverified.

---

## 5. WCAG Spine data contract (what Open Scans needs)

Open Scans currently vendors a snapshot and documents it as transitional. The fields it
depends on:

| Field | Use |
| :--- | :--- |
| `meta.wcag_version`, `meta.generated` | catalogue identity |
| `meta.act_implementations[actRuleId].{axe,alfa}` | relating an observed engine rule to an ACT rule |
| `success_criteria[id].{title,level,principle,url}` | coverage rows |
| `success_criteria[id].automation.{act,axe,alfa}` | potential automated evidence |
| `success_criteria[id].manual.{roles,tt_steps,arrm_tasks}` | responsibilities and references |
| `success_criteria[id].fpc` | functional performance criteria |

A stable contract would add:

- explicit determinism classification per rule (`deterministic`, `assisted`, `manual`);
- mapping quality per engine rule, not only per ACT rule;
- an explicit "known evaluation gap" field per criterion;
- a stable `catalogueVersion` and content hash published by WCAG Spine itself;
- a documented deprecation policy.

Until then Open Scans' vendored snapshot is the source of truth for its own reports, and
the provenance file records exactly which bytes were used.

---

## 6. Known limitations to carry into any integration

- Rule-level execution is unknown for Equal Access, AccessLint and Sa11y unless the rule
  failed (failure-only granularity).
- Frames and shadow roots are bounded by each engine's traversal; findings inside frames
  may be attributed to the frame element.
- `withRecordedHumanReview` is always `0` in a scan artifact; the report's runtime fills
  the displayed value from local records.
- Assessment documents are not encrypted and may contain URLs and notes.
- No automated tests yet cover a real `file://` storage or clipboard scenario.
- The conformance target defaults to WCAG 2.2 AA unless the scan context supplies one.

---

## 7. Next safe steps for a VITAL integration

1. Read `docs/ASSESSMENT-DATA-SCHEMA.md` and `scanner/schemas/a11y-assessment-document.schema.json`.
2. Write a converter from `a11y-assessment-document/1` into VITAL's storage without
   dropping verification, freshness or conflicts.
3. Add a contract test with a fixture document from `tests/unit/assessment-records.test.mjs`.
4. Decide review intervals and freshness policy in VITAL, not in Open Scans.
5. Coordinate any new required field with Open Scans before making it required — a strict
   consumer breaks on additive fields (see the existing handoff's pitfall 5).
