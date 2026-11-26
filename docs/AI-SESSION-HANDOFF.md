# AI session handoff and learnings

**Last updated:** 2026-11-26
**Open Scans checkpoint:** `6d8fbdc9` on `main` (PR #437 merged); Phase 3a assisted
collectors on `docs/assessment-phase-3-design` (PR #438, draft; opt-in only)
**Firefox Energy Scanner main:** `34a1f65` (same-viewport DOM gate and honest ancestor reporting)

This is the short handoff for a future AI session. It records current behaviour,
known pitfalls and the next safe steps. It is not a substitute for the code,
schemas or tests.

---

### 2026-11-26: Phase 3a assisted collectors (opt-in)

Implemented on `docs/assessment-phase-3-design` (PR #438, draft) on top of the
design entry below. The default scan still runs no collector:

- `scanner/assessment/collectors/model.mjs` — accessible-name subset, signals,
  stable `col_` ids, caps and total-cap trimming, artifact validation. The
  validator rejects verdict fields (`outcome`, `severity`, `wcag`, …), unknown
  signal ids, duplicate or malformed item ids, count mismatches and a false
  `complete` status.
- `scanner/assessment/collectors/extract.mjs` — browser-side facts (headings,
  images, links, name graph). Top document only: iframes and open shadow hosts
  are counted and skipped; closed shadow roots cannot be detected.
- `scanner/assessment/collectors/capture.mjs` — `--assisted` /
  `OPEN_SCANS_ASSISTED` gate, sequential capture with the per-page settle delay
  the engines used, duplicate final URLs recorded as not-captured, artifact
  written as `assessment-collectors.json`.
- `scanner/run-scan.mjs` — positional arguments preserved, unknown flags warned
  about, collectors run only after every automated artifact is written and never
  touch `report.json`.
- `scripts/validate-assisted-collectors.mjs` — validates an artifact file, or
  captures `tests/fixtures/assessment-collectors` and asserts names, signals and
  item-id stability.

Verified on 2026-11-26:

- `npm run lint` — exit 0.
- `node --test tests/unit/assessment-collectors.test.mjs` — 15 pass, 0 fail.
- `PLAYWRIGHT_BROWSERS_PATH=.tmp/pw-browsers npm run validate:assisted-collectors -- tests/fixtures/assessment-collectors --browser=webkit`
  — 2 pages, 7 headings, 6 images, 7 links, 13 signals; ids stable across two
  captures; artifact validated. The file mode also accepted a real `complete`
  artifact and a `not-run` artifact produced without the browser path.
- Full suite — 1109 tests, 1103 pass, 1 fail, 5 skipped. The failure is the known
  `generate-reports-html` "should group reports by ISO week" timezone case
  (25 !== 37); it is not a regression.

Not verified: no end-to-end `--assisted` scan against a live site; no Chromium
or Firefox fixture run; no measured overhead; nothing renders the inventory in a
report yet (3b), so the artifact is the only surface.

Next safe step: 3b — inventory section, record prefill and the optional
`collectorItemId` — then measure the assisted overhead on the 6-page reference
scan. Do not enable 3c before both.

---

### 2026-11-26: Phase 3 collector design (docs only)

`docs/ASSESSMENT-ASSISTED-COLLECTORS.md` (PR #438, draft) specifies the assisted
collector layer for headings, images and links, on `main` = `6d8fbdc9` after #437
merged. It fixes the non-negotiable rules before any code exists: a collector
inventories and never evaluates; no signal is a finding; no record is created
from a signal; coverage counts do not change when collectors run; the default
scan keeps its no-extra-browser, no-extra-navigation contract unless an operator
passes `--assisted` or `OPEN_SCANS_ASSISTED=1`.

It also defines `a11y-assisted-collectors/1` (caps, truncation flags, item ids,
banned outcome/severity fields), the AccName 1.2 subset with its stated
limitations, a starter signal catalogue with a "does not mean" line per signal,
the report surface and record prefill, budget targets to measure, the failure
and exit-code split, the test layers and a 3a/3b/3c rollout.

Verified at `b0ead947`: `npm run lint` exit 0. Not run: `npm test` — no scanner
source, schema or test changed. Nothing in the design is implemented or
measured; every row of its status table says so.

Next safe step: review the artifact contract (sections 5–7) and the accname
subset before writing 3a code, then build 3a with a test proving the default
scan still launches no collector and writes no artifact.

**Update, later on 2026-11-26:** 3a was implemented on the same branch; see the
entry above. The design note is no longer code-free.

---

### 2026-11-26 (later checkpoint): nothing uncommitted

The weekday wrap-up checkpoint ran at 21:30 local on `feat/assessment-phase-1`,
code head `7d1ab3f0` at check time; this note is the docs commit directly after
it. Working tree clean, no stashes, no rebase, merge or conflict markers. The
branch is 2 commits ahead of `main`. `main` later gained `ca5e9ef9`, which only
merges `8aa41595` (already in this branch), so no content is missing and no
rebase is needed.

Verified at this checkpoint: `npm run lint` exit 0; `node --test
tests/unit/assessment-catalogue.test.mjs tests/unit/assessment-coverage.test.mjs
tests/unit/assessment-records.test.mjs tests/unit/assessment-report.test.mjs` =
62 pass, 0 fail, 0 skipped. PR #437 checks at check time: `bdd-acceptance` and
`AccessLint` pass. No workflow runs the unit suite on pull requests, so the
full-suite figure in the Phase 1 entry below is a local run, not CI evidence.

Not run at this checkpoint: `npm test` — no code changed since that local run,
so that figure still stands. **Correction, 22:07Z:** PR #437 was merged by the
repository owner as `6d8fbdc9`; the "unmerged" statements above describe the
21:30 checkpoint only.

---

### 2026-11-26: assessment coverage and manual assessment (Phase 1)

Branch `feat/assessment-phase-1`, based on `main` = `a760fe8`, commit `ba0e343`, PR #437. Not merged.

**What exists now**

- Every generated report (including automated-only scans) has an **Accessibility
  assessment coverage** section, a non-dismissible **missing-evidence notice**, and a
  local **Manual assessment** workspace.
- Coverage is derived from artifacts the scan already produced. No extra browser
  launch, navigation, screenshot, network request or model call. `report.json` gains an
  additive `assessmentCoverage`, and `assessment-coverage.json` is written next to
  `act-coverage.json`.
- `report.md` gains a short coverage summary with the same denominators and no
  conformance claim.
- A per-criterion rule execution manifest states engine status, outcome counts,
  observed/failing rule ids, and — for Equal Access, AccessLint and Sa11y — that rule
  execution is unknown unless the rule failed.
- 20 independently authored manual procedures in three pathways. Records can be saved
  locally, exported, imported, merged (conflicts preserved), reset per report, and
  turned into Markdown/JSON developer issues.
- Catalogue: vendored WCAG Spine snapshot `wcag-spine-2.2-2026-11-26`, sha256
  `0fa9693e…bbf`, validated and hashed; refresh with `npm run build:assessment-catalogue`.

**Verified on 2026-11-26** (local, Node v22.20.0 while `engines` requires ≥24):

- `npm run lint` exit 0.
- Full suite: 1094 tests, 1088 pass, 1 fail, 5 skipped. The failure is the known
  `generate-reports-html` "should group reports by ISO week" timezone failure — it is
  not a regression from this branch.
- `node scripts/validate-assessment-report.mjs reports/issues/issue-398/2026-11-23T21-03-45-397Z/report.json --browser=webkit`
  with `PLAYWRIGHT_BROWSERS_PATH=.tmp/pw-browsers`: report opened from `file://`,
  assessment runtime initialised, localStorage available, record saved and restored after
  reload, no-JavaScript contract held, **0 axe violations**, 0 console errors.
- `npm run validate:assessment-report <report.json> --browser=webkit` is the committed,
  repeatable version of that check (`scripts/validate-assessment-report.mjs`).
- Manual Chromium check over `http://127.0.0.1`: record save, coverage cell update,
  review filter, issue preview and copy, export download, compatible import with
  conflict preservation, foreign import blocked, invalid import rejected, two-step reset
  that leaves unrelated storage alone.

**Measured overhead** (reference scan, 6 pages, 1,484 observations, 233,572 ms total)

- Report generation: 23.88 ms → 29.79 ms median (+5.91 ms ≈ 0.002% of the scan).
- Report size: 805,911 → 1,064,498 bytes (+258,587 raw, +45,363 gzip).
- See `docs/ASSESSMENT-RESOURCE-BUDGET.md`.

**Changed existing behaviour**

- The report container changed from `<div class="container" id="main-content">` to
  `<main class="container" id="main-content">`. This fixes the `landmark-one-main` and
  `region` axe violations the report had; no test asserted the old tag.
- `scanTitle` is now HTML-escaped in the page and `<`-escaped inside the inline JSON.
  The report previously embedded it with `JSON.stringify`, which let a `</script>` in a
  title break out of the script block. This was a pre-existing injection path, not a
  new feature.
- No rule selection, engine configuration or automated-only scan step was changed.

**Not done / not verified**

- Accessibility Insights assessment-definition and injected-keyboard code was **not**
  inspected; only the licence, axe-config package purpose and the 23 registered custom
  rule modules were reviewed. No upstream code was copied.
- The axe tag comparison (whether omitting `wcag22aa` is a real gap) was not performed.
- Chromium and Firefox were not validated for the assessment workspace from `file://`;
  only WebKit was.
- The report's own axe scan returns two *incomplete* checks that were not manually
  resolved: `aria-prohibited-attr` on `.span.stat-inline` and `color-contrast` on short
  count text.
- Assisted collectors (headings/images/links), keyboard/focus sequences, user journeys
  and Accessibility Insights JSON import are not implemented.
- Two counter-intuitive behaviours are documented rather than fixed: saving the default
  "Not evaluated" outcome is allowed, and coverage filters do not include page or
  component (coverage is scan-level in Phase 1).

**Next safe step**

Get a human review of `docs/ASSESSMENT-ARCHITECTURE.md` and
`docs/ACCESSIBILITY-INSIGHTS-ATTRIBUTION.md`, then start Phase 3 collector work behind
an explicit `--assisted` profile. Do not switch the default scan to assisted.

---

### 2026-11-23: reproducible ACT mapping step

PR #431 (`feat/act-mapping-build`, merged as `3b664c9`) adds
`scanner/build-act-mappings-from-reports.mjs`, which refetches the Alfa,
AccessLint and Equal Access W3C implementation reports and rewrites the
report-derived `verifiedMappings` in
`scanner/data/act-registry-overlays.json`. It is fail-closed: a failed fetch or
a report with no recognisable mappings writes nothing and exits non-zero.
Existing entries keep their provenance, Sa11y mappings are preserved, keys are
sorted, and the added/removed counts are printed. Refresh with
`npm run build:act-mappings` and then `npm run build:act-registry`.

Verified on 2026-11-23: `npm run lint` exit 0; the unit suite ran 1028 tests
with 1022 pass, 1 pre-existing `generate-reports-html` ISO-week failure and 5
skipped; the refresh reports 0 added / 0 removed for all three engines; the
registry has 59 ACT rules, 192 verified mappings and 0 candidates. The 58/166
figure quoted in older notes is the pre-Sa11y subset: Sa11y adds `5effbb` and 26
mappings.

Known gaps: the AccessLint report names two procedures for `23a2a8` and the
extractor records the first (`text-alternatives/img-alt`); the refresh needs
network access and is not run by CI, so counts can drift when W3C updates a
report.

A separate scan-request run failed after 10 minutes in the Playwright browser
install while apt downloads from the Ubuntu 26.04 mirror were slow. The failed
job was re-run and completed the scan; PR #432 (merged as `eb1d857`) raises the
install step timeout to 20 minutes in the three workflows that install
chromium, firefox and webkit.

A 2026-11-23T19-01 webkit scan lost axe and Sa11y: the workflow's Chromium
`PUPPETEER_EXECUTABLE_PATH` was handed to Playwright's webkit launcher, so the
launcher started the Chromium binary without Chromium's own sandbox flags and it
aborted with `No usable sandbox!`. The report did not hide it — it printed
`⚠️ axe did not run` and `⚠️ Sa11y did not run`, and every page carried the
launch error. Reflow risk and AccessLint, which pass no executable, ran on the
same webkit browser, so the browser itself worked. PR #433 (merged as
`f434535`) scopes that path to Chromium; `PLAYWRIGHT_EXECUTABLE_PATH` remains an
explicit override for any browser.

Next safe step: run a targeted `BROWSER: webkit` scan to confirm axe and Sa11y
are `executed` in production, then decide whether to record
`text-alternatives/role-img-alt` as a second verified mapping for `23a2a8`.

---

### 2026-11-24: post-merge review of the executable scoping

Reviewed #433 against `main` = `6dcf832`. Verified on 2026-11-24:

- `npm run lint` — exit 0;
- `node --test tests/unit/playwright-executable.test.mjs` — 4 pass;
- full suite — 1032 tests, 1026 pass, 1 pre-existing `generate-reports-html`
  ISO-week failure, 5 skipped. That is the 2026-11-23 run of 1028/1022 plus the
  four new helper tests;
- webkit end-to-end — Playwright webkit installed into `.tmp/pw-browsers`
  (`PLAYWRIGHT_BROWSERS_PATH`, because the file sandbox blocks
  `~/Library/Caches`), a local page served over `127.0.0.1`, then
  `runAxeAudit` and `runSa11yAudit` called with
  `PUPPETEER_EXECUTABLE_PATH=/nonexistent/chrome` and
  `scanContext.browser = "webkit"`: both returned `executed: true`. Control:
  `webkit.launch({ executablePath: "/nonexistent/chrome" })` still fails with
  `executable doesn't exist`, which is the pre-fix behaviour.

Corrections to the 2026-11-23 entry:

- the failure was reported, not silent — the engine-execution lines named axe and
  Sa11y as "did not run";
- the earlier "locally verified … both executed" claim could not be reproduced as
  written: Playwright's webkit build was not installed on this machine, so a
  webkit launch failed before any engine ran. The check above reproduces the fix
  honestly, with a browser install and an explicit `PLAYWRIGHT_BROWSERS_PATH`.

Open code nits from the review (not changed):

- `getPlaywrightBrowserType` and Sa11y both fall back to Chromium when the
  browser name is unknown, but `resolvePlaywrightExecutable` honours
  `PUPPETEER_EXECUTABLE_PATH` only for the exact string `"chromium"`, so the
  fallback launch ignores it;
- reflow risk and AccessLint never pass an executable path, so
  `PLAYWRIGHT_EXECUTABLE_PATH` is honoured by two of the four Playwright call
  sites;
- nothing stops a future call site from reading `PUPPETEER_EXECUTABLE_PATH`
  directly again. A guard test over `scanner/*.mjs` would.
- `npm test` dirties the tree: `.achecker.yml` sets `outputFolder: results`, so
  the Equal Access test writes `results/scan-*.json` and `results/summary_*.json`
  into a tracked directory. The two files from this run were removed; pointing
  the test at a gitignored folder would be the durable fix.
- Local Node is v22.20.0 while `engines` requires >= 24. The suite still ran
  here; CI uses 24, so do not draw conclusions from a local engine mismatch.



---

## 0. Session state (2026-11-20)

Merged this session, all on `main`:

- #424 — portable session wrap-up protocol (`docs/SESSION-WRAP-UP.md`, `npm run wrap-up`);
- #425 — unknown-rule regression guard in observation counts and reports;
- #426 — QualWeb removed from the Markdown table and execution summary;
- #427 — correlation compares engines per ACT rule, not per union of ids;
- #428 — Sa11y engine (`sa11y`) with native keys, classifications and ACT mapping provenance;
- #429 — history continuity across family renames and a native-warnings report section.

Pending review at this checkpoint: **#430** (`feat/silence-highlights`) — now
merged as `ee75ff6` — reports name mapped-but-silent engines, list single-engine
findings and unmapped native rules, and mark frame-scoped findings; axe frame
paths are preserved as `target.framePath`.

### Production evidence

The 2026-11-20T18:55:19Z #398 scan is the first with all five engines:

- 49 pages, 1172 observations, 634 resolved, 0 unresolved/ambiguous;
- 20 correlated issues, 86 correlated observations, 7 single-engine findings;
- 10 ACT rules observed (7 multiple-engine, 3 single-engine);
- history: 16 persisting, 4 changed, 0 new, 0 not observed after #429;
- Sa11y: 49/49 executed, 25 failures, 2 recorded passes, 85 native warnings.

### Known limitations to carry forward

- Frame-scoped axe findings resolve to the frame element in the top document,
  not the element inside the nested frame. #430 keeps the frame path and says
  so in the report; resolving inside frames needs a per-frame DOM index.
- Sa11y warnings are shown and counted but not normalised into observations.
- `formLabelsPlugin` is off, so Sa11y mappings that need it are omitted.
- The ACT laboratory now includes Sa11y in its engine list and cohort, but no
  lab run has executed it yet.
- Version alignment is still false for every engine, so no issue is
  `act-verified`; `verifiedEquivalentFindings` remains 0 by design.
- Record a Goose expectations remain unreviewed, so laboratory comparisons are
  provisional.

### Next safe steps

1. Merge #430, then run #398 once so the published report picks up the new
   evidence sections and the corrected history comparison.
2. Manually dispatch the ACT laboratory (or wait for the weekly run) to
   exercise Sa11y on the fixtures and see the new `unmapped` counts.
3. Curate non-ACT semantic families for the dominant unmapped rules:
   ALFA `sia-r66`, `sia-r111`, `sia-r73`; Equal Access `style_focus_visible`,
   `style_color_misuse`, `style_highcontrast_visible`.
4. Decide the version-alignment policy (exact / compatible / divergent).
5. Get Record a Goose expectations reviewed so lab comparisons stop being
   provisional.

Test baseline at this checkpoint: `npm run lint` exit 0;
`node --test tests/unit/*.test.mjs` = 1008 pass, 2 fail (ISO-week timezone;
network scan test flaky under parallel load, passes standalone), 5 skipped.

---

## 1. Current state

### Open Scans

Merged and on `main`:

- multi-engine accessibility scanning;
- baseline/comparison reports;
- optimization investigation;
- component/semantic-region evidence;
- external investigation references;
- static accessible comparison UI;
- complete JSON/CSV exports;
- pattern/container inventory;
- occurrence-level accessibility context for FES;
- explicit `selectorType` (`css`, `xpath`, `html`, `none`, `unknown`);
- optional performance request, evidence, Lighthouse, Sitespeed and investigation stack;
- issue-driven performance execution workflow;
- the pairing decisions for FES:
  [same-viewport protocol](same-viewport-protocol.md) and
  [component-attribution policy](component-attribution-policy.md).

Latest merged PRs:

- #392 — accessibility context for FES;
- #393 — performance execution;
- #395 — corrected PERF issue-template text;
- #396 — explicit selector type;
- #399 — browser workflows pinned to `ubuntu-24.04`;
- #400 — browser installs for every engine, engine execution status in reports.

### Firefox Energy Scanner

FES has already merged:

- optional `--accessibility-context`;
- `fes-accessibility-join/1` sidecar;
- accessible “Related accessibility evidence” section;
- real #391 artifact regression;
- selector type consumption and report URL support (PR #59, merged);
- report site map and run/viewport pairing (PR #60, merged);
- dispatch-only physical experiment workflow (PR #61, merged as `9642332`);
- opt-in DOM-validated ancestors (PR #62, merged as `3f204e7`);
- same-viewport gate for DOM ancestors (PR #63, merged as `8d0f913`);
- honest exact/ancestor reporting (PR #64, merged as `34a1f65`).

`34a1f65` is the verification point for the accessibility integration. Main CI
run `44419669422` passed `test`, `e2e` and `e2e-components` on that commit. The
`8d0f913` run was cancelled by the `tests-main` concurrency group when #64
merged; that is expected, not a failure.

No open PRs remain in either repository.

> **How #61 and #62 were merged matters.** A parallel review was in progress
> when the repository owner merged both. The review comments are on the PRs:
> #61 passes the dispatch-only checklist; #62 is accepted only as an opt-in
> preview. That review also found that the rendered accessibility section still
> said components were matched “only by exact CSS selector text” after a DOM
> pass; #64 fixes that text. Re-check PR state before merging anything a
> handoff lists as open — a handoff can go stale in minutes.

Do not describe FES as “not yet integrated”.

---

## 2. Contracts

| Contract | Purpose |
| :--- | :--- |
| `a11y-accessibility-context/1` | Occurrence-level accessibility handoff for FES |
| `a11y-pattern-inventory/1` | Unique patterns by container/category |
| `a11y/pattern/v1` and `a11y/occurrence/v1` | Canonical fingerprints |
| `performance-request/1` | Validated `PERF:` request |
| `performance-evidence/1` | Common performance evidence |
| `performance-issue-run/1` | Issue-driven performance execution result |
| `fes-accessibility-join/1` | FES read-only join sidecar |

`selectorType` is additive and optional in schemas so old artifacts remain
valid. New artifacts should still be rejected by a strict consumer until that
consumer accepts the field. FES now does.

The join sidecar gained `basis: ancestor-selector` and an optional
`domValidated` boolean, also additively. Do not add another required field to a
strict consumer without coordinating it first.

---

## 3. Workflow behaviour

### Accessibility

- `SCAN:` issues → `scan-request.yml` → accessibility only.
- `scan-issue-queue.yml` → queued scans.
- `scheduled-scan-queue.yml` → timed issues.
- No `SCAN:` path runs Lighthouse or Sitespeed.

### Performance

- `performance-request.yml` → validation only; no browser.
- `performance-scan.yml` → executes validated `PERF:` issues.
- Supported execution modes: `reuse`, `light`, `deep`.
- `combined` is validated but **not executable**; it fails with a clear message.
- Raw Lighthouse/Sitespeed artifacts are Actions artifacts, not committed.
- Committed outputs live under `reports/performance/issue-<n>/<timestamp>/`.
- No `PERF:` issue means no performance run. Do not assume a merged runner is running.

### Runner image

Browser workflows run on `ubuntu-latest`, which is Ubuntu 26.04 ("resolute").
Image build `20261111.82` was missing the font and xfont packages Playwright's
`install --with-deps` requests, which broke every browser install and skipped
the tests (#399 pinned to `ubuntu-24.04` in response). Build `20261111.196`
carries those packages again: chromium, firefox and webkit install and launch
on it, so the pin was lifted. Read the `Image:` line in the job log before
blaming a workflow for an apt failure. See pitfall 18.

### Accessibility context

New scans write:

```text
reports/issues/issue-<n>/<timestamp>/
  accessibility-context.json
  accessibility-context.csv
```

Older scans (FOSDEM/Hugging Face before the feature) do not contain it.
FES reads the JSON; it does not fetch it from Open Scans.

---

## 4. Hard boundaries

Keep these true:

- Accessibility, performance and energy evidence stay separate.
- No combined accessibility/performance/energy score.
- No WCAG conformance claim from automated evidence.
- No component ownership from a selector-derived container, even after DOM
  validation and even at the same viewport.
- No accessibility engines in FES.
- No Open Scans API or MCP in the scan runtime.
- No automatic cross-project scan.
- No label-based component matching.
- No CSS/XPath text comparison.
- No claiming a merged provider is running without checking the workflow and an issue.
- Rendered report text is part of the evidence claim. Audit the report, not only
  the docs, before calling a feature honest.

---

## 5. Selector type and component matching

`selectorType` exists so consumers do not infer CSS/XPath from the engine name.

FES currently:

- matches pages reliably;
- matches components only on exact CSS selectors by default;
- keeps XPath, HTML-only, unknown and non-exact observations page-level;
- refuses DOM ancestor matching when the source and FES viewports differ, unless
  `--dom-allow-different-viewport` is passed (PR #63);
- with `--validate-dom`, opens each FES page once at the FES viewport, resolves
  only a single-element selector, and walks to the nearest recorded ancestor
  with at least `--dom-min-own-nodes` owned nodes;
- records `basis: ancestor-selector`, `domValidated: true`, and confidence
  (`medium` only when the viewports match);
- keeps ambiguous, missing, invalid, page-load-failure and cap-exceeded
  observations page-level with a reason;
- splits exact and ancestor counts in the report (PR #64);
- covers 8 of 5,486 observations by exact CSS on the real #391 artifact.

The DOM pass on that artifact (with the different-viewport override) associated
4,838 observations at low confidence, mostly with structural class wrappers
(`class:relative`, `class:not-prose`, `class:blog-content`). That is a broad
association, not attribution. The rules and the route to a stronger claim are in
[component-attribution-policy.md](component-attribution-policy.md).

Open Scans and FES real-artifact checks also used different runs/viewports.
Page-level evidence is reliable across runs; component-level conclusions are not.
[Same-viewport protocol](same-viewport-protocol.md) defines the pair that would
remove that objection.

---

## 6. Test baseline

### Open Scans

Last full run (2026-11-24, `main` = `6dcf832`):

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
1032 tests, 1026 pass, 1 pre-existing failure, 5 skipped
```

The one failure is the existing timezone-dependent `generate-reports-html`
test. Do not describe it as a regression unless the failure changes. Older
notes quote 853 tests; that figure predates the Sa11y and evidence work and is
stale.

Other gates:

```text
npm run lint
npm run test:bdd
```

BDD: 4 scenarios, 1 passed, 3 browser-dependent skipped.

Performance issue driver:

```text
node --test tests/unit/run-performance-issue.test.mjs
node --test tests/unit/performance-workflow.test.mjs
```

Selector type:

```text
node --test tests/unit/pattern-inventory.test.mjs tests/unit/accessibility-context.test.mjs
```

### Firefox Energy Scanner

On `34a1f65`:

```text
npm ci
npm test
npm run typecheck
898 tests passed, 61 files; typecheck clean
```

The local run used `WEB_ENERGY_TEST_ENGINE=chromium` because Playwright's
Firefox cannot start inside a restricted file sandbox (`sandbox_init() failed`).
CI's `e2e` job still runs real Firefox. Known FES flake:
`tests/browser/dom-removal.test.ts` can hit its 5-second timeout, and the
Playwright Firefox install can hang. Rerun before calling it a regression.

---

## 7. Lessons and pitfalls

1. **Merging a runner is not the same as running it.** The performance stack
   merged before any execution workflow existed. Check for a trigger and an
   actual issue/run.
2. **A validation workflow can look like an execution workflow.** Read the
   steps, not only the workflow name.
3. **No `PERF:` issue means no `PERF:` run.** `SCAN:` issues correctly skip
   performance workflows.
4. **Stale issue templates mislead humans.** The PERF template once said no
   browser would launch after execution was merged.
5. **Strict schemas break on additive fields.** A new optional field is still a
   breaking change for a `.strict()` consumer. Coordinate the consumer first.
6. **CSS and XPath are not interchangeable.** Do not infer from engine names if
   an explicit `selectorType` is available.
7. **Exact CSS matching is a preview, not attribution.** Ancestor matching needs
   DOM validation, and DOM validation still does not create ownership.
8. **Cross-run artifacts are not same-condition evidence.** Record browser,
   viewport and run differences.
9. **Large contexts are large reports.** The real artifact produced multi-MB
   sidecar and HTML output; keep per-page summaries and consider pagination.
10. **Keep local branches short-lived.** All merged Open Scans feature branches
    were deleted after this handoff. Only the stale unmerged
    `copilot/fix-puppeteer-connection-error` reference remains remote; its PR
    #44 is closed and WIP.
11. **Do not add a score to make a report look decisive.** Preserve uncertainty.
12. **No model calls in measurement loops.** Models can help review, not measure
    or silently adjudicate findings.
13. **A handoff can go stale in minutes.** #61 and #62 were merged while an
    independent review was running. Re-check `gh pr list` and the PR state
    immediately before acting, and record who merged what.
14. **Audit the rendered text, not just the docs.** #62 documented the
    association boundary correctly but left the report asserting exact-CSS-only.
    The report is what readers act on; #64 fixed it.
15. **Concurrency cancels earlier main runs.** `tests-${github.ref}` cancelled
    the #61 push run when #62 merged. Verify the last run for the final `main`
    commit, not any intermediate one.
16. **A same-viewport gate removes a caveat, not a boundary.** It makes ancestor
    matching defensible as an association; it still does not make a component
    the owner of a finding.
17. **A restricted file sandbox can stop Firefox from launching.** Use
    `WEB_ENERGY_TEST_ENGINE=chromium` for local FES runs, and let CI run the
    Firefox e2e jobs.
18. **`--with-deps` can break on one build of a runner image, not the OS
    version.** Two builds of the same `ubuntu-26.04` image behaved differently:
    `20261111.82` had no `fonts-unifont`, `xfonts-cyrillic`, `xfonts-scalable`,
    `fonts-ipafont-gothic`, `fonts-wqy-zenhei`, `fonts-tlwg-loma-otf` or
    `fonts-freefont-ttf`, so apt exited 100, Playwright reported
    `Failed to install browsers` and the test step was **skipped** — the tests
    never ran, so the red job said nothing about the code. Build
    `20261111.196` carries the packages and installs cleanly. The signature is a
    failed "install browser" step followed by a skipped "run tests" step; check
    `Image:` in the log, and prefer installing the browser libraries without
    `--with-deps` over pinning the image permanently.
19. **Read the job log, not the run log.** `gh run view --log` writes its cache
    zip under `~/.cache/gh`, which a restricted sandbox blocks. Fetch the job
    directly instead:
    `gh api repos/mgifford/open-scans/actions/jobs/<job-id>/logs --allow-escape-sequences`.
    `gh run view <id> --json jobs` gives the step numbers that the GitHub UI
    `#step:N` anchor refers to.
20. **An engine that did not launch is reported, not silent.** A failed browser
    launch appears as `⚠️ <engine> did not run` in the report and in
    `engineStatus`. Read those lines before calling a scan complete; the
    2026-11-23 webkit scan reported the axe and Sa11y failures accurately even
    though two engines never ran.
21. **`PUPPETEER_EXECUTABLE_PATH` is not a Playwright override.** Playwright
    launchers read `PLAYWRIGHT_EXECUTABLE_PATH`; a Chromium binary handed to the
    webkit or firefox launcher aborts with `No usable sandbox!` before any page
    loads. Use `resolvePlaywrightExecutable` rather than reading either variable
    at a call site.
22. **A local browser check needs a browser.** Playwright's browsers were not in
    `~/Library/Caches/ms-playwright`, and the file sandbox blocks writing there.
    Install into the workspace with
    `PLAYWRIGHT_BROWSERS_PATH=.tmp/pw-browsers npx playwright install webkit`
    and pass the same variable when running the check.

---

## 8. Safe next steps

1. Run the [same-viewport protocol](same-viewport-protocol.md) once against a
   real site and record the pair. This is the highest-value outstanding
   accessibility evidence item.
2. Decide on an explicit shared component id. If Open Scans publishes one,
   FES can use `basis: component-id`; that is the only route to real ownership.
   Coordinate the additive field with the FES parser first.
3. Improve large-report usability: pagination, filtering or a smaller default
   view for multi-MB contexts and sidecars.
4. Keep `combined` performance mode blocked until a real merge layer exists;
   do not silently run only Lighthouse or only Sitespeed.
5. Complete the pending real-hardware measurements, replication and pilot
   experiment before any production-readiness claim.
6. Finish the `physical-energy` environment setup before using #61: register
   the `firefox-energy` runner label, require reviewers, and restrict the
   environment's deployment branches to `main`. A dispatch can select a branch,
   and the runner builds that branch's code.
7. Open Scans issues #360, #68 and #38 remain operations/trend work, not
   blockers for the accessibility handoff.
8. Do not delete the stale unmerged `copilot/fix-puppeteer-connection-error`
   branch without checking whether its work is still wanted.

---

## 9. Useful commands

```bash
# Accessibility
node scanner/run-scan.mjs .tmp/issue-event.json .scan-output
node scanner/accessibility-context.mjs # module, not a CLI
node scanner/compare-scans.mjs baseline.json comparison.json --out comparison.json

# Performance
node scanner/parse-performance-issue.mjs .tmp/issue-event.json --out request.json
node scanner/run-performance-issue.mjs request.json --out .scan-output/performance

# Tests
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
npm run lint
npm run test:bdd

# CI triage (sandbox-safe: skips the blocked ~/.cache/gh log cache)
gh run view <run-id> --json jobs # step numbers for the UI #step:N anchor
gh api repos/mgifford/open-scans/actions/jobs/<job-id>/logs --allow-escape-sequences
```

FES (in the FES checkout):

```bash
npm ci
npm test
npm run typecheck
WEB_ENERGY_TEST_ENGINE=chromium npm test   # local runs where Firefox cannot start

# The join (see same-viewport-protocol.md)
node dist/cli/index.js report results/<result>.json \
  --accessibility-context accessibility-context.json \
  --validate-dom --dom-semantic-only
```

Use issue-driven workflows for published evidence; use local commands only for
bounded validation.
