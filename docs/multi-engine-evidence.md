# Multi-engine evidence: assessment, model and plan

Status: P0–P7 shipped. The ACT laboratory now compares per declared target
instead of attributing page-level findings.

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

## 3b. Target resolution (P1, shipped)

`scanner/dom-index.mjs` + `scanner/target-resolution.mjs` build a deterministic
index over one HTML snapshot and answer: does this locator identify exactly one
element, several, or none?

- Structural paths such as `/html[1]/body[1]/div[1]/main[1]/img[1]`, with
  same-tag sibling indices.
- CSS subset: tag, `*`, `#id`, `.class`, `[attr]`, `[attr=v]`, `~=`, `^=`, `$=`,
  `*=`, descendant and `>` combinators.
- XPath subset: absolute paths, descendant `//`, positional `[n]`, `[@attr]`,
  `[@attr="v"]`, `contains()`.
- Engine paths like `/a[@class="govuk-link"]` are not valid absolute paths; they
  are evaluated as a descendant search and the method says so
  (`xpath-descendant-search`, confidence `medium`).
- Dialect is detected from the string, not the field name. AccessLint writes
  `div > img` into its `xpath` field; treating that as XPath silently failed to
  resolve the image target.
- `documentHash` makes DOM-state comparability checkable. Two snapshots with
  different hashes never share a target id.
- Shadow-root locators are reported `unsupported` with a reason — never as a
  WCAG failure. Static HTML cannot reach inside a shadow root.

Resolution outcomes: `resolved` (one match, target id), `ambiguous` (several
matches, candidate ids, no target id), `unresolved` (no match or no snapshot),
`unsupported` (shadow root). Confidence: `high`, `medium`, `low`, `none`.

On the #398 evidence, 237 observations now yield 107 resolved observations over
82 distinct targets, with 73 ambiguous or unresolved. All four engines report
the missing `alt` image on `/steps/end/` through four different locator
dialects (`img`, `/img`, an absolute XPath, `div > img`) and all four resolve to
the **same** target id. They remain four observations until correlation (P2).

## 3c. Cross-engine correlation (P2, shipped)

`scanner/rule-semantics.mjs` states what a rule *means*, with two evidence
levels that are never conflated: `act-verified` (a W3C ACT mapping exists in
`scanner/data/act-mapping.json`) and `inferred-semantics` (the rule is placed in
a failure-mechanism family by inspection, which makes it comparable but does
not create an ACT mapping). Unknown rules get no family and cannot be
correlated.

`scanner/correlation.mjs` gives every observation exactly one disposition:

| Disposition | Meaning |
| :--- | :--- |
| `repeated-observation` | proven repeat within one engine |
| `correlated` | 2+ engines, same resolved target, compatible failure mechanism |
| `single-engine` | one engine only → `detection-asymmetry` when others executed, silence is not a pass |
| `insufficient-evidence` | unresolved/ambiguous target, or unmapped rule semantics |
| `not-comparable` | same target but different test conditions |

Correlated issue identity is a hash of `(url, family, resolvedTargetId)` — no
engine owns it and scan order cannot change it. `target-disagreement` records
when engines report the same mechanism on different elements. `related` records
different mechanisms on one target and never merges them.

On the #398 evidence:

```
raw observations                 237
correlated observations            4   (1 issue: the four-engine image)
single-engine observations         2   (2 findings, detection asymmetry)
insufficient evidence            231   (mostly unmapped ALFA/EA rule semantics)
not comparable                     0
reconciliation                  complete
```

The single correlated issue lists all four engines, both ACT-mapped rules
(`23a2a8` via axe `image-alt` and ALFA `sia-r2`) and the two inferred ones
(Equal Access `img_alt_valid`, AccessLint `text-alternatives/img-alt`), with
`mappingStatus: inferred-semantics` and every original observation id.

That 231 figure is the next bottleneck: most ALFA and Equal Access rules in
this scan have no semantic family, so they cannot be compared yet. Closing it
is P3 (ACT registry audit), not a correlation bug.

## 3d. ACT registry (P3, shipped)

`scanner/data/act-registry.json` is generated by
`node scanner/build-act-registry.mjs` from the existing ACT mapping plus
`scanner/data/act-registry-overlays.json`. Per ACT rule it records the id, W3C
URL, title, rule type (atomic/composite), WCAG criteria, rule status, revision
and the metadata source/verification date — with `null` wherever nothing has
been verified. Nothing is invented to fill a table.

Per engine mapping it records the engine, engine rule id, evidence level,
source, verification date, the engine version we run, the version the report
covers, and whether they align:

| Evidence | Meaning |
| :--- | :--- |
| `verified` | a published implementation report lists the mapping |
| `candidate` | plausible semantic alignment; comparable, never ACT support |
| `unmapped` | no mapping in the registry — not a statement that the engine lacks support |

Coverage today: 53 ACT rules, 9 with curated titles/rule types, 96 verified
engine mappings (axe, ALFA), 2 candidate mappings (Equal Access
`img_alt_valid` and AccessLint `text-alternatives/img-alt` → `23a2a8`).

Version alignment is explicit. The axe implementation report covers 4.10.2
while 4.12.1 runs, and the ALFA report covers 0.111.0 while 0.84.2 runs, so
`versionAligned` is `false` for those mappings. A correlated issue whose
participants are all mapped but not version-aligned is reported as
`act-verified-different-version`, not as verified equivalence.

ACT consensus is now derived from correlation (`collectActConsensusOverlaps(results,
{ correlation })`): only `actVerified` issues produce entries, so candidate
mappings can never manufacture consensus, and locator-string equality no longer
acts as proof.

On the #398 evidence the observation mapping evidence splits as 5 verified,
2 candidate and 230 unmapped — which is why only one issue correlates. That gap
is the registry's honest state, not a correlation failure, and it is the next
data-entry task.

## 3e. Reporting and exports (P4, shipped)

`scanner/correlation-report.mjs` renders the multi-engine section for both
outputs, from `observations.json` + `correlation.json`:

- **Markdown**: counts, page × engine matrix, correlated findings with a
  per-engine evidence table (native rule, locator, resolution method,
  `rawEvidenceRef`), target disagreements, related-but-distinct list.
- **HTML**: a `<section aria-labelledby>` with `<h2>`/`<h3>` structure,
  `<dl>` counts (no colour or position encoding), tables with `<caption>` and
  scoped `<th>`, native `<details>/<summary>` per finding, and a `<fieldset>`
  filter (radio buttons + `role="status" aria-live="polite"` count) that only
  hides rows — it never changes the counts.
- **Explicit empty states**: "no two engines reported the same failure
  mechanism" and "no engine reported the same mechanism on different targets"
  are stated, not left blank.
- **Escaping**: engine-supplied URLs, rule ids, locators and messages are
  HTML-escaped in the HTML fragment and Markdown-escaped in the Markdown
  fragment, so a scanned page cannot inject markup.

Exports stay static and versioned: `observations.json`
(`a11y-observation/1`), `correlation.json` (`a11y-correlation/1`), plus the
existing `report.json`/`.md`/`.html`/`.csv`, `patterns.csv` and
`accessibility-context.json`. Every correlated issue carries the observation
ids and `rawEvidenceRef` pointers back into `report.json`.

## 3f. Historical comparison (P5, shipped)

`scanner/history-compare.mjs` compares two correlation artifacts.

A correlated issue id embeds the document hash, on purpose: the same finding on
a page that changed is not the same evidence. So comparison uses two identities:

- `correlatedIssueId` — exact evidence identity;
- continuity key `(url, failure family, DOM path)` — the same element,
  independent of the document version.

Every change is attributed before it is named: `correlation-logic-change`,
`mapping-data-change`, `engine-version-change`, `execution-condition-change`,
`source-page-change`. A finding that is absent is reported as **`not-observed`**
with the note that this is not evidence the problem was fixed — a rule can stop
reporting because an engine changed, not because the page improved.

`report.json` gains `historyComparison` counts and the run writes
`history-comparison.json` next to the other artifacts when a previous
`correlation.json` exists. `reprocess-evidence.mjs --previous <correlation.json>`
does the same offline.

The weekly ACT laboratory cohort now includes `act-registry.json`, the
target-resolution version, the correlation version and the rule-semantics
version, with distinct change reasons, so an analysis change cannot be mistaken
for a page change.

## 3g. Manual review (P6, shipped)

`reviews/decisions.json` (`a11y-review-decisions/1`) records human decisions
about correlation that automation cannot settle: same target, equivalent
failure, separate failures, incorrect observation, insufficient evidence, or a
reviewed fixture expectation. Each decision needs an id, a target
(`correlated-issue` or `observation`), a decision value, a rationale of at
least 10 characters, an author and a date.

Reviews are separate from evidence. `node scanner/apply-reviews.mjs
<correlation.json> [--reviews reviews/decisions.json]` writes
`review-status.json` (`a11y-review-status/1`) and never modifies the
correlation artifact. The status lists matched decisions, unreviewed issues
and — importantly — decisions that matched nothing, because ids embed the
document hash and evidence moves. A stale decision is reported, not dropped.

The format is plain JSON in version control, so a review is a pull request.
See [reviews/README.md](../reviews/README.md) for the workflow.

## 3h. ACT laboratory per-target outcomes (P7, shipped)

`scanner/act-lab/target-outcomes.mjs` resolves the fixture's declared target
(`target.selector`) against the captured rendered HTML and classifies each
mapped engine failure as on-target, off-target or unknown-target by resolving
its own locator to the same canonical `dom:v1:<hash>:<path>` id.

`scanner/act-lab/summarise.mjs` (now `act-lab-observations/2`) therefore:

- attributes a failure to the fixture target only when it resolves to that
  exact node;
- reports mapped failures elsewhere on the page as `page-level-only` and
  counts them in `pageLevelFindings` — never as the fixture's result;
- reports `target-ambiguous` / `target-unresolved` instead of guessing;
- reports iframe and shadow-root targets as `unsupported` with a reason,
  because the top-level static snapshot cannot reach them;
- never turns a page-level pass list into a target pass (`pass-not-attributed`).

Expectation comparison is separate from execution. `compareExpectation()`
returns `matches-expected` / `unexpected-failure` only when the expectation is
`reviewed`; an `unreviewed` expectation yields `provisional-*` statuses, and a
passing expectation with no failure observed yields `cannot-confirm-pass`
because no engine publishes explicit per-target pass evidence.

Per-viewport merging keeps every comparison and sums `pageLevelFindings`, so
the merged report answers "what did this fixture actually show?" per target.

## 4. Reprocessing historical evidence

```bash
node scanner/reprocess-evidence.mjs reports/issues/issue-398/2026-11-19T11-41-22-579Z/report.json --out /tmp/derived
```

Writes `observations.json` and `correlation.json`; the source report is never modified. On the
#398 evidence: 237 raw failures → 237 observations, 0 repeats, 0 verified
cross-engine equivalents, 237 correlated issues (one per observation), 107
resolved observations over 82 targets, 73 targets ambiguous or unresolved.
Saved reports already contain the captured `renderedHtml`, so historical
evidence resolves without rerunning a browser.

## 5. Remaining plan

| Phase | Work | Depends on |
| :--- | :--- | :--- |
| **P0 ✅** | Observation model, conservative duplicates, real ACT inputs, honest counts | — |
| **P1 ✅** | Target resolution: deterministic DOM index, CSS/XPath/HTML, document hashing, ambiguity and unsupported-context reporting | P0 |
| **P2 ✅** | Correlation: rule-semantics families, agreement/related/uncertain dispositions, target disagreements, order-independent issue identity | P1 |
| **P3 ✅** | ACT registry: verified vs candidate mappings, version alignment, metadata provenance, correlation-derived consensus | P2 |
| **P4 ✅** | Reporting: multi-engine evidence section in Markdown and HTML, page/engine matrix, per-engine evidence disclosures, accessible filter, explicit empty states | P2 |
| **P5 ✅** | Historical comparison with change attribution, `not-observed` instead of "fixed", ACT lab cohort tracks analysis versions | P3, P4 |
| **P6 ✅** | Manual review format, validation, application CLI and unmatched-decision reporting | P4 |
| **P7 ✅** | ACT laboratory per-target outcomes: target resolution, no page-level attribution, expectation comparison, browser-context limits | P3, P5 |

| P6 | Manual review format, unresolved-match UX | P4 |

## 6. Boundaries

- Record a Goose owns fixtures and expectations; Open Scans consumes
  `lab/fixtures.json` as external data and hardcodes nothing about it.
- No AI decides equivalence. Correlation must be deterministic and traceable.
- QualWeb stays disabled until a security review.
- Counts are never collapsed into an accessibility score.
