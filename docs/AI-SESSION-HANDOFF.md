# AI session handoff and learnings

**Last updated:** 2026-11-19
**Open Scans integration checkpoint:** `7cf2884` (engine execution reporting; browser pin lifted next)
**Firefox Energy Scanner main:** `34a1f65` (same-viewport DOM gate and honest ancestor reporting)

This is the short handoff for a future AI session. It records current behaviour,
known pitfalls and the next safe steps. It is not a substitute for the code,
schemas or tests.

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

Last full run (unchanged; the recent work is documentation only):

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
853 tests, 848 pass, 1 pre-existing failure, 4 skipped
```

The one failure is the existing timezone-dependent `generate-reports-html`
test. Do not describe it as a regression unless the failure changes.

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
