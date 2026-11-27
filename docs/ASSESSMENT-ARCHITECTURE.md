# Assessment architecture

**Status:** Phase 1 (coverage and local assessment) and Phase 3a (opt-in assisted
capture) are merged on `main`. Phase 2, Phase 3b/3c and Phases 4–7 are not implemented.

Section 11 is the authoritative list of unmet requirements, including several from the
brief that no code, schema or test points at. Section 12 records what is verified. Read
both before assuming a capability exists.

This document explains how Open Scans adds automated, assisted and human
accessibility assessment without changing the default automated scan, and where the
boundaries between evidence and conclusions sit.

---

## 1. The problem the architecture solves

A scan can report "0 violations" and still tell a reader nothing about whether a
person can use the site.

Automated rules evaluate defined conditions under specific circumstances. A rule
mapped to a WCAG success criterion does not evaluate the criterion. Several engines
evaluating the same condition do not broaden coverage. The absence of findings is
not evidence of conformance.

So the report has to answer four separate questions:

1. **What was tested?** Which rules ran, on which pages, in which engine, and what
   did each produce?
2. **What do those rules establish?** Their own conditions, nothing more.
3. **What was not evaluated?** Every criterion without evidence, every engine that
   did not run, every frame that was not traversed.
4. **What did a human conclude, and about what scope?** Separately recorded,
   versioned, portable, and never merged into the automated findings.

The architecture keeps those four answers in separate artifacts.

| Artifact | Answers | Mutable? |
| :--- | :--- | :--- |
| `report.json`, `observations.json`, `correlation.json`, `act-coverage.json` | What the engines produced | No — immutable evidence |
| `assessment-coverage.json` | What was and was not evaluated, per criterion | No — derived from evidence |
| Assessment document (browser storage or exported JSON) | What a human recorded | Yes — user-owned |

The downloaded report contains the first two. The third lives beside it, never inside
it.

---

## 2. Layering

```
scanner/run-scan.mjs
  └─ buildAssessmentCoverage()          scanner/assessment/coverage.mjs
       ├─ buildRuleExecutionManifest()  derived from report.json results
       └─ loadCatalogue()               scanner/assessment/catalogue.mjs
            └─ scanner/data/wcag-spine/{master_spine.json,PROVENANCE.json}

scanner/interactive-report.mjs
  ├─ renderAssessmentCoverage()         scanner/assessment/render.mjs
  ├─ renderAssessmentWorkspace()        scanner/assessment/render.mjs
  ├─ renderAssessmentContextScript()    identity only, not the catalogue
  └─ renderAssessmentRuntimeScript()    scanner/assessment/bundle.mjs
       └─ records.mjs + runtime.mjs, export-stripped and inlined

Browser (downloaded report, no server)
  └─ runtime.mjs
       ├─ storage adapter (localStorage, memory fallback)
       ├─ records.mjs (validation, merge, issue Markdown)
       └─ no network requests
```

### Rules the layering enforces

- **One direction.** The browser never writes back to the scan; the scan never
  contains a human record.
- **No second data path.** The report renders coverage from the scan model, and the
  runtime reads criteria and procedures from the rendered document. The catalogue is
  not duplicated into a JSON payload the runtime must keep in sync.
- **No parallel implementations.** The browser and the tests import the same
  `records.mjs`. The bundle is a mechanical transform of the same source, not a
  rewrite.
- **No runtime AI.** Nothing in the assessment path calls a model.

---

## 3. Automated-only scanning is unchanged

The default scan path is untouched:

- no additional browser launch;
- no additional navigation or page interaction;
- no additional screenshots;
- no additional LLM calls;
- no additional external service calls during report *use*;
- the existing engines, rule selection and configuration fingerprints are unchanged.

`buildAssessmentCoverage()` runs once per scan, after the existing artifacts are
built, and reads only data already in memory. It does not inspect the page.

The assessment additions are additive fields and files:

| Addition | Kind | Compatibility |
| :--- | :--- | :--- |
| `summary.assessmentCoverage` | new object in `report.json` | additive; old consumers ignore it |
| `assessment-coverage.json` | new artifact | additive; absent in older reports |
| `report.md` coverage summary | new Markdown section | additive; states denominators and limitations |
| report sections | new HTML | additive; existing sections keep their ids |
| assessment runtime | new inline script | independent of the existing report script |
| `assessment-context` JSON block | new | identity only |

Nothing in the existing report is renamed, reordered or removed. A report generated
before this feature still re-renders: `generateInteractiveHtml()` computes coverage
on the fly from the summary if `summary.assessmentCoverage` is absent.

### Why an old report renders differently now

Re-rendering a historical `report.json` now uses the **current** vendored catalogue.
That is a deliberate, visible behaviour: the report states the catalogue version and
content hash it was rendered with. The stored `assessment-coverage.json` from the
original run is the historical record and is not rewritten.

Do not silently re-render a published historical assessment with a newer catalogue
and present it as the original. If a re-render is necessary, publish it as a new
artifact and keep the old one.

---

## 4. Rule execution manifest

`scanner/assessment/coverage.mjs` builds `rule-execution-manifest/1` from the
results already in `report.json`:

- engine status (`executed`, `partial`, `failed`, `not-run`);
- pages executed and pages failed;
- first error per engine;
- outcome counts (`passed`, `failed`, `cantTell`, `inapplicable`);
- rule identifiers observed to produce a pass or a failure;
- rule identifiers that produced a failure;
- the engine's rule granularity;
- frame and resource limitations.

### Rule granularity, stated honestly

| Engine | Granularity | Consequence |
| :--- | :--- | :--- |
| axe | `rule-outcomes` | pass and fail rule ids are retained per page |
| ALFA | `rule-outcomes` | pass and fail rule ids are retained per page |
| Equal Access | `failure-only` | only failing rule ids are retained; rule execution is unknown unless it failed |
| AccessLint | `failure-only` | same |
| Sa11y | `failure-only` | same; warnings are counted but not normalised |

The manifest never infers that an absent rule was inapplicable. `executionUnknownNote`
says so in the artifact, and the report repeats it in the criterion rows.

This is a **Phase 1 manifest**. It is built from what the current engines already
retain. Per-rule `inapplicable` and error records would require engine-level changes
and are listed as outstanding work; they are not faked.

---

## 5. Coverage model

`a11y-assessment-coverage/1` has one entry per catalogue criterion:

- `automated.potential` — rules the catalogue maps to the criterion;
- `automated.observed` — mapped rules that produced a result;
- `automated.failed` — mapped rules that reported a violation;
- `automated.state` — `observed`, `not-observed` or `no-automated-rules`;
- `manual.procedures` — local manual procedures for the criterion;
- `manual.roles`, `manual.arrmTaskIds`, `manual.ttSteps` — responsibility references
  from the catalogue;
- `gaps` — what the observed evidence does not establish.

### What each state means

| State | Meaning | What it must not be read as |
| :--- | :--- | :--- |
| `observed` | At least one mapped rule produced a result | "The criterion was tested" |
| `not-observed` | Mapped rules exist but produced no result | "The criterion passed" or "the rules were inapplicable" |
| `no-automated-rules` | No rule in the catalogue maps to the criterion | "The criterion does not apply" |

### ACT rules

An ACT rule is counted as **observed** when an engine implementation the catalogue
maps to it produced a result. It is counted as **failed** only when the ACT coverage
artifact reports a finding. ACT is a rule format, not an execution engine; the report
never presents it as one.

### Counts

Every count has an explicit denominator, for example `18 of 86 criteria`. There is no
percentage of accessibility, no score, and no "coverage %". The report says so in the
section itself.

### What is deliberately not in the model

- No severity derived from a rule id.
- No "conformance" field.
- No per-criterion pass/fail derived from the absence of findings.
- No deduplication of a collector against a violation (collectors are Phase 3).

---

## 6. Report interface

Three surfaces, in order of prominence:

1. **Missing-evidence notice** — directly after the table of contents. Shown whenever
   no records exist. Not dismissible. The runtime rewrites it in place when records
   exist; it never removes it.
2. **Accessibility assessment coverage** — after the Summary. Counts, scan-level
   automation limitations, filters, and one row per target-level criterion. Rows for
   criteria outside the conformance target are listed in a collapsed block, not
   silently dropped.
3. **Manual assessment** — after the automated findings. One shared procedure form,
   the three pathways, the recorded-assessments table, the issue-report preview and
   the import/export controls.

Progressive enhancement:

- The document adds `js` to `<html>` before first paint. `.js-only` controls stay
  hidden until then, so a reader without JavaScript never sees a dead control.
- With JavaScript disabled, the coverage table, the notice, every procedure's steps
  and limitations, and the import guidance are still readable.
- No assessment section depends on the network.

---

## 7. Local persistence

- Storage key: `open-scans:assessment:v1:<reportId>`, where `reportId` is
  `open-scans/issue-<n>/<scannedAt>`. Not a file name, not a URL.
- The adapter probes `localStorage` with a write/read-back in a `try` block.
- On failure it falls back to memory and says so, prominently and permanently, until
  a successful save.
- A failed or quota-exceeded save returns an explicit failure; the UI never claims
  data was saved.
- A corrupt stored value is reported and left untouched; it is not silently
  discarded.
- Multi-tab: the `storage` event reloads state and announces the change.

`localStorage` was chosen over IndexedDB because the payload is small (records, not
evidence), synchronous access simplifies the save/status contract, and the fallback
behaviour is easier to explain. Revisit if records grow to include screenshots.

---

## 8. Import and merge

1. File is size-capped (2 MB) and read as text.
2. `JSON.parse` in a `try` block. Parse failure changes nothing.
3. `validateAssessmentDocument()` checks schema, version, association, and every
   record. Any invalid record rejects the file.
4. A preview shows source report, scan time, record count, pages, dates, catalogue and
   compatibility.
5. **Merge** adds new records, skips identical ones, and preserves conflicting records
   side by side with mutual `conflictsWith` links.
6. **Replace** is two-step, blocked for foreign reports, and prompts for a backup first.
7. Importing from a different scan of the same issue marks records
   `requiresRevalidation: true` and `staleSource: true`.

Passing results are never transferred between unrelated scans.

---

## 9. Security boundaries

- All dynamic text is written with `textContent` or escaped before interpolation.
- The embedded context JSON escapes `<` as `\u003c` so a scan title cannot close the
  `<script type="application/json">` block.
- The existing inline `SCAN_TITLE` was changed from `JSON.stringify` to a
  `<`-escaped variant for the same reason. This was a pre-existing injection path.
- URLs in records are validated as absolute `http(s)` before storage or rendering.
- Imported JSON is parsed, never evaluated.
- Record text is bounded in length and stripped of control characters.
- Issue snippets redact common credential patterns; the reporter can edit before
  copying.
- The report makes no network request when a record is saved, imported or exported.

---

## 10. What is deliberately deferred

| Capability | Phase | Why not now |
| :--- | :--- | :--- |
| Accessibility Insights JSON import | 2 | needs real sample exports and a documented version matrix |
| Heading, image and link collectors | 3b | Phase 3a capture is merged; the report inventory and record link are not. See §11 REQ-02/REQ-03 |
| Additional custom rules | 4 | needs the Phase 3 collector contract |
| Keyboard and focus interaction assessment | 5 | needs bounded interaction budgets and real key events |
| User journey records and UI | 6 | schema is ready (`journey`), UI and task definitions are not |
| VITAL continuous-monitoring integration | 7 | contracts only; see `VITAL-INTEGRATION-HANDOFF.md` |
| Per-page and per-component coverage filters | 2 | coverage is scan-level until observations are joined per page |
| Screenshot capture and redaction UI | 3 | would add scan cost and privacy handling |

This table lists work deferred by decision. It is not the full record: §11 also lists
unmet requirements that were simply not started.

---

## 11. Tracked backlog of unmet requirements

This is the authoritative list of requirements from the assessment brief that are not
met. The handoff records what was verified; this table records what is still owed. It
exists because several requirements have no code, schema or failing test to point at
them, and were absent from earlier status reporting.

**Rules for this table**

- Update `State` in the same change that moves it; never mark a row done because a
  related module exists.
- `Done` requires the "Done when" condition to be evidenced by a test or a documented
  manual check.
- Never delete a row. A dropped requirement is marked `Dropped` with the decision and
  date, so the omission stays visible.
- Target phases refer to the brief's Phase 0–7 plan.

| ID | Unmet requirement (brief section) | Target phase | State | Done when |
| :--- | :--- | :--- | :--- | :--- |
| REQ-01 | Accessibility Insights assessment JSON import (§17) | 2 | Not started | Supported export versions established from real sample files; mapping and provenance documented; invalid and partial imports rejected safely; round-trip tests; uncertainty preserved where the export does not say how a result was determined |
| REQ-02 | Collector context fields: semantic region, nearby text, accessible description, link/button context, repeated-name data (§12) | 3a.1 / 3b | Partial — 3a captures name, text, locator, role and caption only | The fields exist with caps and tests, or the collector contract explicitly removes them with a recorded rationale. The current design lists only judgement fields as excluded |
| REQ-03 | Collector inventory in the report, record prefill, `collectorItemId`, `report.md` line (§12, §18) | 3b | Not started | A browser check passes, coverage counts are unchanged when collectors run, and measured overhead is within the collector budget |
| REQ-04 | Workflow opt-in for assisted scans: issue field or trigger, cost note (§5) | 3c | Not started | Explicit opt-in exists; a human has reviewed the measured overhead and the rendered 3b text; the default scan is unaffected |
| REQ-05 | Evaluation profile visible in the scan configuration and the generated report (§5) | 1.1 | Not started | The report states automated-only vs automated-plus-assisted vs extended, and lists enabled collectors; `report.json` carries the same profile |
| REQ-06 | Rule execution manifest completeness: requested rules/tags, enabled and disabled rules with reasons, configuration fingerprint, frame/shadow coverage (§8) | 1.1 | Partial — engine status, outcome counts and observed/failing ids only | The manifest records these without inflating artifacts, and the report states when execution cannot be established |
| REQ-07 | Conformance target end to end: parse, preserve and report declared vs assumed (§9) | 1.1 | Partial — always default WCAG 2.2 AA; `buildScanContext` drops the field; the report says "declared target" | A target can be declared and survives into `scanContext` and the report; otherwise the report says "assumed default" and shows the source |
| REQ-08 | Coverage filters by page, component or region, and ARRM role (§9) | 2 / 3b | Partial — responsibility filter only; coverage is scan-level | Per-page and per-component evidence is joined and the filters reflect it without implying component ownership |
| REQ-09 | Page and component matching, unchanged-evidence detection and stale flags on earlier-scan import (§21) | 2 | Partial — revalidation flags only | Matching is evidence-based rather than URL equality, and stale evidence is identified without inheriting passes |
| REQ-10 | Pre-export redaction of screenshots, selectors, snippets and notes (§25) | 3 | Not started | A reviewer can redact before export; the export warns that files may contain site evidence |
| REQ-11 | Screenshots or recordings as record evidence (§19, §25) | 3 | Not started | Optional, bounded, redactable, and never captured by the default scan |
| REQ-12 | Optional GitHub issue preparation in a user-selected repository (§19) | 2 | Not started | A reviewer can prepare an issue; nothing is submitted automatically; no secrets or unsolicited content |
| REQ-13 | User journey recording and optional Top Task Finder import (§14) | 6 | Not started — schema field `journey` exists | Journeys can be defined and recorded with barriers, effort and environment; no universal thresholds; no real transactions |
| REQ-14 | Accessibility Maturity Model proof-point mappings (§22) | 7 | Not started | Optional mappings identify potential supporting evidence; no automatic maturity classification |
| REQ-15 | Accessibility statement, policy and feedback-channel discovery (§23) | 7 | Not started | Candidate vs retrieved vs reviewed is distinguished; no claim that a statement is absent because discovery failed; no unsolicited form submission |
| REQ-16 | The 14 contextual evaluation fixtures from §27 | 2 | Not started | Fixtures exist with automated observations and human expectations recorded separately, without changing expectations to make tests pass |
| REQ-17 | Keyboard and focus interaction assessment (§6.5, §13, §27) | 5 | Not started | Bounded sequences using real key events; traps and order changes are observations, not verdicts; budgets are enforced |
| REQ-18 | Remaining custom-rule audit and integration; additional collectors (§6.4, §13) | 4 | Partial — 23 modules classified provisionally by name only | Each module is read and classified; selected collectors land with tests; deterministic rules stay separate |
| REQ-19 | Axe configuration comparison, including whether omitting `wcag22aa` is a gap (§6.1) | 2 | Not started | Differences are documented with a configuration fingerprint; no silent rule-selection change |
| REQ-20 | CI quality gate: lint and unit tests on pull requests; resolve or quarantine the ISO-week failure (§28) | 1.1 | Done | `unit-tests.yml` runs `npm run lint` and `npm test` on every pull request and on `main`; the ISO-week failure was fixed by grouping on UTC and has a timezone-independence test |
| REQ-21 | Report browser matrix: Chromium, Firefox and WebKit from `file://`, including clipboard (§28) | 2 | Partial — WebKit storage verified; clipboard on `file://` not verified | The validator runs on all three engines or the gap is recorded per engine |
| REQ-22 | Report's own accessibility: resolve the two axe incomplete checks and complete a manual screen-reader, forced-colours and reflow pass (§26) | 1.1 | Partial — 0 axe violations in WebKit; two incomplete checks unresolved | The incomplete checks are resolved or explained, and a documented manual pass exists |
| REQ-23 | Longitudinally hosted assessment records, review intervals and freshness policy (§21) | 7 | Deferred by design — VITAL's responsibility | Documented contract exists; implementation belongs in VITAL, not Open Scans |

---

## 12. Status table

| Capability | Status | Verification |
| :--- | :--- | :--- |
| Automated-only scan unchanged | Implemented | unit tests; scan path untouched apart from one additive call |
| Rule execution manifest | Implemented (Phase 1 scope) | `assessment-coverage.test.mjs` |
| WCAG Spine snapshot, hash and provenance | Implemented | `assessment-catalogue.test.mjs` |
| Coverage section and counts | Implemented | `assessment-coverage.test.mjs`, `assessment-report.test.mjs` |
| Missing-evidence notice | Implemented | `assessment-report.test.mjs` |
| Manual procedures (20) | Implemented | rendered in report; catalogue references checked in tests |
| Local assessment records | Implemented | `assessment-records.test.mjs` |
| JSON export / import / merge / conflicts | Implemented | `assessment-records.test.mjs` |
| Issue report (copy, Markdown, JSON) | Implemented | `assessment-records.test.mjs` |
| Offline self-contained report | Implemented | no external `<script src>` or stylesheet in tests |
| Markdown coverage summary | Implemented | `formatAssessmentCoverageMarkdown()` in `coverage.mjs`; unit-tested |
| Reproducible `file://` browser check | Implemented | `npm run validate:assessment-report <report.json> --browser=webkit` (needs a Playwright browser) |
| CI quality gate (lint + unit tests) | Implemented | `.github/workflows/unit-tests.yml` runs `npm run lint` and `npm test` on pull requests and `main` (REQ-20) |
| `file://` storage behaviour | Verified (WebKit) | `validate-assessment-report.mjs` saves a record and restores it after reload |
| Clipboard on `file://` | **Not verified** | fallback is implemented but unexercised in a real `file://` browser; see REQ-21 |
| Accessibility Insights import | Not implemented | Phase 2 |
| Assistive collectors | Partially (Phase 3a, merged) | Opt-in `--assisted` capture and `assessment-collectors.json`; no report surface yet (REQ-03). Design: [ASSESSMENT-ASSISTED-COLLECTORS.md](ASSESSMENT-ASSISTED-COLLECTORS.md) |
| Keyboard/focus assessment | Not implemented | Phase 5 |
| User journey UI | Not implemented | Phase 6 |
| Automated accessibility test of the new UI | Implemented (WebKit) | `validate-assessment-report.mjs` runs axe on a generated report: 0 violations, 2 incomplete checks unresolved (REQ-22) |
