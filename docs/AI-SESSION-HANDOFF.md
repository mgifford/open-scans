# AI session handoff and learnings

**Last updated:** 2026-11-18
**Open Scans main:** `bb8dc2a` (this handoff)
**Firefox Energy Scanner main:** `241e79d`

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
- issue-driven performance execution workflow.

Latest merged PRs:

- #392 — accessibility context for FES;
- #393 — performance execution;
- #395 — corrected PERF issue-template text;
- #396 — explicit selector type.

### Firefox Energy Scanner

FES has already merged:

- optional `--accessibility-context`;
- `fes-accessibility-join/1` sidecar;
- accessible “Related accessibility evidence” section;
- real #391 artifact regression;
- selector type consumption and report URL support (PR #59);
- report site map and run/viewport pairing (PR #60).

Its CI is green. Do not describe FES as “not yet integrated”.

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
- No component ownership from a selector-derived container.
- No accessibility engines in FES.
- No Open Scans API or MCP in the scan runtime.
- No automatic cross-project scan.
- No label-based component matching.
- No CSS/XPath text comparison.
- No claiming a merged provider is running without checking the workflow and an issue.

---

## 5. Selector type and component matching

`selectorType` exists so consumers do not infer CSS/XPath from the engine name.

FES currently:

- matches pages reliably;
- matches components only on exact CSS selectors;
- keeps XPath, HTML-only, unknown and non-exact observations page-level;
- does not do ancestor/descendant matching without DOM validation;
- has low exact-match coverage on the real artifact (8 of 5,486 observations).

Do not widen component attribution without one of:

1. a shared explicit component id; or
2. DOM-validated ancestor matching under a known `selectorType`.

Open Scans and FES real-artifact checks also used different runs/viewports.
Page-level evidence is reliable across runs; component-level conclusions are not.

---

## 6. Test baseline

Last full run:

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
   DOM validation.
8. **Cross-run artifacts are not same-condition evidence.** Record browser,
   viewport and run differences.
9. **Large contexts are large reports.** The real artifact produced multi-MB
   sidecar and HTML output; keep per-page summaries and consider pagination.
10. **Keep local branches short-lived.** All merged local feature branches were
    deleted after this handoff. Only stale unmerged work remains remote.
11. **Do not add a score to make a report look decisive.** Preserve uncertainty.
12. **No model calls in measurement loops.** Models can help review, not measure
    or silently adjudicate findings.

---

## 8. Safe next steps

1. Run a new accessibility scan after the selector type merge to produce the
   first context containing `selectorType`.
2. Run a real `PERF:` issue and review the committed report plus raw artifact.
3. In FES, confirm explicit `selectorType` is preferred over inference and add
   DOM-validated ancestor matching only if needed.
4. Use the new FES site map and run/viewport pairing; define a same-run/same-viewport
   protocol before claiming component-level accessibility/energy relationships.
5. Keep `combined` performance mode blocked until a merge layer exists.
6. Do not claim release readiness until the P0/P1 FES evidence work is complete.

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
```

Use issue-driven workflows for published evidence; use local commands only for
bounded validation.
