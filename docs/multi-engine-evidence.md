# Multi-engine evidence: assessment, model and plan

Status: P0 shipped (observation model + duplicate correction). Target resolution
and cross-engine correlation are next.

## 1. What exists today

Open Scans already runs four engines per URL (`axe`, `ALFA`, IBM Equal Access,
AccessLint; QualWeb is intentionally disabled), stores per-engine failures in
`report.json`, and derives several downstream artifacts:

| Capability | Location | State |
| :--- | :--- | :--- |
| Engine execution + per-URL results | `scanner/run-scan.mjs` | works |
| Engine execution status | `scanner/engine-execution.mjs` | works (header + JSON) |
| Fingerprints / A11Y ids | `scanner/fingerprint-core.mjs` | works, unchanged |
| Pattern inventory | `scanner/pattern-inventory.mjs` | works |
| Occurrence context for FES | `scanner/accessibility-context.mjs` | works |
| ACT mapping registry | `scanner/act-mapping.mjs`, `scanner/data/act-mapping.json` | partial (axe + ALFA only) |
| ACT laboratory | `scanner/act-lab/`, `act-lab-weekly.yml` | works, page-level assumption |
| Overlap report | `buildOverlapReport()` in `run-scan.mjs` | broken counting (see §2) |
| Report UI | `scanner/run-scan.mjs`, `scanner/interactive-report.mjs` | works, no evidence table |

Reused deliberately: report artifacts and their names, fingerprint semantics,
pattern/context modules, ACT mapping file format, ACT lab workflow, QualWeb
restriction.

## 2. Confirmed defects (reproduced on issue #398, 2026-11-19T11-41-22-579Z)

Raw failures: axe 6, ALFA 140, Equal Access 86, AccessLint 5 = **237**.

1. **105 false duplicates, all within ALFA.** `addDuplicateMetadata()` keyed on
   `url | normalized locator | rule key`, where the rule key fell back from ACT
   rule to WCAG criterion to native rule and the locator fell back from XPath to
   selector to HTML. Every one of the 105 flags carries `duplicateOf: "alfa"`,
   so they were never cross-engine duplicates.
2. **Twenty-one collision groups caused them**, all from unproven identity:
   - 20 × `sia-r66` with **no locator** → treated as one page-level target;
   - 18 × `sia-r111` on `/a[@class="govuk-link"]` → 18 distinct links collapsed;
   - 18 × `sia-r73` on one paragraph XPath, 9 more on `/p`, and so on.
   The HTML snippets differ in every case, so the engine did supply the evidence
   needed to keep them apart.
3. **Downstream hiding.** Reports skipped `isDuplicate` failures, so the 105
   records disappeared from ACT comparisons and overlap analysis.
4. **Irreconcilable summaries.** The report header said "105 duplicate findings"
   while the per-engine table said ALFA 140 failed / 140 unique / 0 duplicates.
   Two different accounting paths never met.
5. **Synthetic ACT records.** `collectActConsensusOverlaps()` fabricated
   `{ rule: "eq-access-rule" }` / `{ rule: "accesslint-rule" }` entries from
   counts instead of reading the real failures, so Equal Access and AccessLint
   could never contribute a genuine ACT observation.
6. **ACT registry gaps.** `act-mapping.json` (generated 2026-06-01) has 53 rules,
   34 shared axe+ALFA, and no Equal Access or AccessLint entries. Absence of a
   mapping is a registry gap, not proof that an engine lacks ACT support.

## 3. Observation model (shipped)

`scanner/observations.mjs` produces `observations.json` beside `report.json`:

- one record per failed native observation, with a full SHA-256 digest as
  `observationId` (never the short A11Y ids);
- engine name, installed package version, native rule id, native outcome;
- URL and test context (browser, viewport, colour scheme) as a `contextKey`;
- native locator, locator type, `specificLocator`, resolution state and method;
- HTML evidence, message, severity, WCAG SC, ACT rule ids and mapping status;
- `rawEvidenceRef` pointing back into the untouched `report.json`;
- `relations[]` (currently only proven within-engine repeats).

Repeats are only flagged when the locator is *specific* (id selector, `@id`, or
an indexed XPath) **and** rule, HTML evidence and context match. An ambiguous
locator or a missing locator can never produce a repeat.

Cross-engine equivalence is reported as `0` by construction, with
`reconciliation.crossEngineEquivalentVerified: false`, until target resolution
lands. That is honest, not a regression: the previous number was wrong.

## 4. Reprocessing historical evidence

```bash
node scanner/reprocess-evidence.mjs reports/issues/issue-398/2026-11-19T11-41-22-579Z/report.json --out /tmp/derived
```

Writes `observations.json` only; the source report is never modified. On the
#398 evidence: 237 raw failures → 237 observations, 0 repeats, 0 verified
cross-engine equivalents, 237 correlated issues (one per observation), 151
targets unresolved or ambiguous.

## 5. Remaining plan

| Phase | Work | Depends on |
| :--- | :--- | :--- |
| P0 (done) | Observation model, conservative duplicates, real ACT inputs, honest counts | — |
| P1 | Target resolution (DOM snapshot, node indexing, CSS/XPath/HTML/iframe/shadow, ambiguity reporting) | P0 |
| P2 | Correlation layer (`agreement-fail`, `direct-disagreement`, `target-disagreement`, `insufficient-evidence`, …) and the four-engine image regression | P1 |
| P3 | ACT registry audit: verified vs candidate mappings, ACT 1.1 atomic/composite metadata, Equal Access + AccessLint entries | P2 |
| P4 | Reporting: evidence tables, disagreement view, accessible filters, versioned exports | P2 |
| P5 | Historical comparison + ACT lab target-specific outcomes, algorithm/schema versions in cohorts | P3, P4 |
| P6 | Manual review format, unresolved-match UX | P4 |

## 6. Boundaries

- Record a Goose owns fixtures and expectations; Open Scans consumes
  `lab/fixtures.json` as external data and hardcodes nothing about it.
- No AI decides equivalence. Correlation must be deterministic and traceable.
- QualWeb stays disabled until a security review.
- Counts are never collapsed into an accessibility score.
