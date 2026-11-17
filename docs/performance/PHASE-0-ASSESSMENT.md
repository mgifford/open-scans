# Phase 0 — Repository assessment and preservation

**Date:** 2026-11-16
**Scope:** Open Scans and the evidence providers named in the performance-investigation brief.
**Status:** Assessment complete; informs PR 1 (performance request contract).
**No other repository was modified.**

---

## 1. What was inspected

| Repository | Revision inspected | Notes |
| :--- | :--- | :--- |
| `mgifford/open-scans` | `b07851a` on `main` (same as `origin/main`) | Local working tree; no open PRs reported by `gh pr list` at inspection time |
| `mgifford/vital-core` | `4698eb8` on `main` | Local checkout; API.md, SUSTAINABILITY.md, `src/engines/*` read |
| `mgifford/firefox-energy-scanner` | `c29ecbe` on `claude/energy-profiling-isolation-l9wx5h`; `main` is `d1aa05e` | Feature branch is 14 commits ahead of `main`; it was already checked out locally |
| `mgifford/open-site-review` | `main` README and `package.json` | Not checked out locally; reviewed from the public repository |
| `mgifford/top-task-finder` | `main` README | Not checked out locally; URL-list output only |

External facts verified:

- `sitespeed.io` current version: **43.0.0** (`npm view sitespeed.io version`).
- `lighthouse` current version: **13.6.0**; Vital Core pins `^13.5.0` and has 13.5.0 installed; Firefox Energy Scanner has optional `^13.5.0`.
- `@tgwf/co2` current version: **0.19.0**; Vital Core pins `^0.18.0` and has 0.18.0 installed; Firefox Energy Scanner pins `^0.19.0`.
- Sitespeed 43.0.0 documentation confirms `--sustainable.enable`, `--sustainable.model swd`, `--sustainable.modelVersion 4`, `--sustainable.country` and `--firstParty`. The `analysisstorer` plugin is documented as `--plugins.add analysisstorer`; its exact output must still be verified against 43.0.0 in PR 4.
- `open-site-review` 0.2.0 depends on `@projectwallace/css-analyzer` 9.3.x and `@projectwallace/css-code-quality` 3.1.x, and already emits JSON.
- Vital Core's static API root is published at `https://mgifford.github.io/vital-core/api/v1/` (`index.json` returns HTTP 200).

Commands used for the baseline are recorded in §9.

---

## 2. Current Open Scans behaviour

### 2.1 Intake and orchestration

- `.github/ISSUE_TEMPLATE/scan-request.yml` creates `SCAN:` issues from a form; `title: "SCAN: "`.
- `.github/workflows/scan-request.yml` triggers on issue `opened`, `edited`, `reopened`, but its job is gated with `startsWith(github.event.issue.title, 'SCAN:')`.
- `.github/workflows/scan-issue-queue.yml` runs daily at `00:00 UTC` and processes open `SCAN:` issues.
- `.github/workflows/scheduled-scan-queue.yml` runs daily at `00:15 UTC` and processes only `WEEKLY:`, `MONTHLY:`, `QUARTERLY:` and weekday-prefixed issues.
- `scanner/parse-issue.mjs` extracts the title prefix, engine keywords, `TIME:`, `VIEWPORT:`, `COLORSCHEME:`, `BROWSER:`, `REMEDIATE`, the `# URLs` section, optional `Page: N` crawl count, and the first-line `Engine:` override.
- `scanner/run-scan.mjs` re-validates accepted URLs, optionally crawls for more URLs, runs engines, writes `report.json`, `report.md`, `report.html`, `report.csv`, `report-overlap.json` and `report-overlap.md`.
- `.github/workflows/scan-request.yml` commits those files to `reports/issues/issue-<n>/<timestamp>/` on `main`, regenerates `reports.html`, `trends.html` and `stats.json`, then `.github/workflows/deploy-pages.yml` publishes the repository root to GitHub Pages.
- Reports are public. `scanner/redact-secrets.mjs` scans report data for credential-shaped strings before writing; the workflow also fails closed if GitHub secret scanning rejects the push.

### 2.2 Supported accessibility engines — actual state

The operational engine list comes from `scanner/parse-issue.mjs`:

```js
const KNOWN_ENGINES = new Set(["axe", "alfa", "equalaccess", "accesslint", "all"]);
export const NON_AXE_ENGINES = ["alfa", "equalaccess", "accesslint"];
```

- **Actually selectable:** `axe`, `alfa`, `equalaccess`, `accesslint`; `all` means all four.
- **Default:** `axe` plus one randomly selected engine from `alfa`, `equalaccess`, `accesslint`.
- **Always-on page indicators:** `reflowRisk` (WCAG 1.4.10 indicator) and `semantica11y` (semantic suggestions). These are not rule-engine pass/fail counts.
- **QualWeb is not selectable.** The parser filters it out and comments that it was removed. `run-scan.mjs` still contains QualWeb code and `SCANNER_ORDER` entries, and `package-lock.json` contains no `@qualweb/*` packages, so a path that somehow requested QualWeb would not have its dependencies installed.

This is a documentation/code discrepancy; see §7.

### 2.3 URL validation and crawling

`scanner/validate-targets.mjs`:

- accepts only `http:`/`https:`;
- blocks `localhost`, `*.localhost`, `*.local`;
- blocks private/loopback/link-local IPv4 ranges (10/8, 127/8, 0/8, 169.254/16, 172.16/12, 192.168/16);
- blocks `::1`, `::`, `fc00::/7`, `fe80::/10`;
- rejects non-web document extensions (PDF, images, media, archives, JSON/XML, fonts, …);
- removes fragments.

`run-scan.mjs` validates the request list before scanning again. Crawling is bounded by `Page: N` (default 20) and the existing crawl rules.

**Gap:** validation is host-name/URL-syntax based at request time. There is no DNS resolution check, no post-redirect target revalidation, and no resource-request interception in the accessibility path. The performance path must not copy that gap: redirect-aware and DNS-aware checks are required before any new host is fetched (PR 3/4).

### 2.4 Existing report shape

`report.json` is accessibility-oriented: request metadata, per-URL engine outcomes, counts, rule findings, WCAG mapping, overlap analysis, reflow indicators and semantic suggestions. It has no performance metrics, no component graph, no transfer model and no CO2 field.

Useful for a performance investigation without new collection:

- the normalized request and exact URL inventory;
- browser, viewport and colour-scheme context;
- page load timing from the scan;
- page structure already observed by the accessibility engines (locators, regions, elements).

Not useful as evidence of performance: violation counts, pass/fail totals, accessibility severity.

### 2.5 Web UI

`index.html` + `submit.js` provide the accessibility submission form and client-side URL preview. There is no performance entry point yet. PR 6 will add one; PR 1 deliberately does not change the UI.

---

## 3. Reusable functionality inventory

| Capability | Location | Reuse decision |
| :--- | :--- | :--- |
| Issue section extraction (`### Label`) | `scanner/parse-issue.mjs` | **Reused** by the new parser. Helpers were exported and their section-name regex was escaped, a behaviour-preserving fix. |
| `Label: value` extraction | `scanner/parse-issue.mjs` | **Reused** for limits, consent, profile and evidence age. |
| Public page URL policy | `scanner/validate-targets.mjs` | **Reused** for all page/priority/top-task URLs. `reasonForBlockedHost` is now exported so evidence API URLs (often `.json`) can use the same private-network policy without the non-web-document rule. |
| Viewport presets and parsing | `scan-context.js` | **Reused** (`parseViewportSpec`, `VIEWPORT_PRESETS`). |
| Browser normalization | `scan-context.js` | **Reused**, then narrowed to `chromium`/`firefox` for reproducible performance evidence. |
| Engine selection | `scanner/parse-issue.mjs` | **Not reused implicitly.** A performance request has no engine field unless `mode: combined`, where engines must be explicit. |
| Crawling | `scanner/crawl-urls.mjs` | **Later reuse** for bounded discovery (PR 3); not used by the parser. |
| Report persistence / Pages publication | `scan-request.yml`, `deploy-pages.yml` | **Later reuse** for investigation artifacts (PR 2/6), with separate paths and bounded retention for heavy artifacts. |
| Secret redaction | `scanner/redact-secrets.mjs` | **Must be reused** before publishing any imported remote evidence or AI prompt package. |
| Stable fingerprints | `scanner/fingerprint-core.mjs` | Context only; not a performance identity. Do not substitute for FES/Vital Core IDs. |
| Trend analysis | `scanner/analyse-trends.mjs` | Accessibility trends only; do not fold performance metrics into accessibility trends. |

---

## 4. Evidence providers

### 4.1 Adapter A — existing Open Scans reports

Available now:

- `reports/issues/issue-<n>/<timestamp>/report.json`
- public URL inventory and recorded scan context;
- accessibility findings as **context only**;
- no performance measurement.

Integration gap: the parser accepts a report URL or a bounded `reports/...json` repository path, but no adapter exists yet (PR 2). A missing performance field in a report must remain missing; it must not become zero.

### 4.2 Adapter B — Firefox Energy Scanner

Current branch state (verified, not assumed):

- `main` at `d1aa05e` already contains the component graph (`src/model/graph.ts`), page families (`src/analysis/families.ts`), investigation queue (`src/analysis/investigation.ts`) and experiments (`src/experiments/experiment.ts`).
- `claude/energy-profiling-isolation-l9wx5h` at `c29ecbe` adds 14 commits on top: energy timelines, spike analysis, `remove-before-load`, DOM removal, preload removal, evidence records and their schemas. Do not assume those additions are on `main`.
- Result schema version is `2`. `graph.schema` is `component-graph/1`; findings use `energy-finding/1`; timelines use `energy-timeline/1`.
- Graph entities: pages (`pg-…`), component types (`ct-…`), component instances (`ci-…`), resources (`rs-…`), findings (`fd-…`), sources, relations and limitations.
- Investigation queue: `queue-v1`, ordered by evidence → reach → opportunity → workload. The order is not a score and not an energy figure.
- Experiment kinds on the branch: `pause-animations`, `reduced-motion`, `lazy-images`, `no-autoplay`, `block`, `hide`, `remove`, `remove-before-load`.
- Experiment specs are YAML (`examples/experiments/*.yaml`) with `name`, `url`, `kind`, `selector`, `idle_ms`, optional `settle_ms`, `max_matches`, `assertions`, `runs`, `warmups`, `seed`.
- Energy results are separate from Lighthouse, Chromium trace, CO2.js and webNRG. The scanner does not emit a component energy value; experiments emit a measured difference in mWh.

Integration gaps:

- No HTTP-served static API; results are local JSON.
- The graph is the canonical model, not a common multi-source format. Open Scans must adapt to it and keep its IDs.
- Experiment specs are not the proposed `energy-hypothesis/1`; PR 7 needs a mapping layer and must only generate kinds the installed version supports.

### 4.3 Adapter C — Vital Core

Published API:

- `/api/v1/index.json` — all published domains;
- `/api/v1/<domain-key>/snapshot.json` — history, summary, findings ledger, weekly series, tech associations;
- `/api/v1/<domain-key>/<week>/findings.json` — normalized weekly findings;
- `/api/v1/schema/*.schema.json`.

Relevant additive fields:

- `summary.lighthouse.recommendations[]` with sample totals and per-page distributions (`savingsBytes`/`savingsMs` median and p75);
- `scope_of_analysis.page_families` (configured routes, not measured families);
- `scope_of_analysis.shared_components` and `component_groups` (accessibility-derived, configured signatures, capped examples, `ownership_established: false`);
- sustainability metrics from CO2.js Sustainable Web Design v4, computed from **decoded body sizes** (not on-wire transfer), with stated limitations;
- evidence coverage, occurrence IDs, reproduction state.

Integration gaps / cautions:

- A Vital Core “shared component” is an accessibility grouping, not proven performance attribution. It may seed a candidate but cannot be written up as measured component cost.
- Lighthouse savings are modelled/sample sums, not a guarantee for one visitor.
- Vital Core already computes CO2.js. Importing its figure must not trigger recalculation.
- Domain keys are host-based (`www.cms.gov`), so the adapter must handle www/apex matching explicitly.
- The API is static JSON with no query API for arbitrary performance questions; the adapter must map snapshot/findings fields into the common format.

### 4.4 Adapter D — static code analysis (`open-site-review`)

- Emits JSON and Markdown; includes Project Wallace CSS code quality, complexity and design tokens.
- Findings are **candidate explanations**: an oversized/duplicated stylesheet or an obsolete polyfill is not a measured runtime cost.
- Integration gap: no adapter yet; no runtime evidence; no component identity contract. PR 2 or a later PR must keep the `candidate-explanation` status explicit.

### 4.5 Top Task Finder

- Produces a prioritized URL list; no stable machine API contract was identified beyond its own site/worker implementation.
- Use: optional `topTaskUrls` in a request (already in PR 1). Do not depend on its internals.

### 4.6 Sitespeed.io

- Current release 43.0.0.
- `analysisstorer` is the machine-readable output plugin (`--plugins.add analysisstorer`); verify the exact emitted files and schema against 43.0.0 before coding the parser.
- Sustainable Web plugin (`--sustainable.enable`) uses CO2.js through `@tgwf/co2`; supports `swd` model version 4 and country/region grid intensity.
- `--firstParty` enables first/third-party categorisation; default behaviour must be recorded.
- Never share a live Playwright/Browsertime session; separate process, separate budget, separate browser config.
- Raw traces/videos belong in bounded-retention workflow artifacts, not Git history.

### 4.7 Lighthouse and CO2.js

- Lighthouse current 13.6.0; it is Chromium-only and uses simulated throttling by default. Every Lighthouse finding must record the throttling method.
- CO2.js current 0.19.0. Modelled emissions only; never physical client energy.

---

## 5. Duplicate-measurement map

| Measurement | Existing producers | Duplicate risk | Required precedence |
| :--- | :--- | :--- | :--- |
| Lighthouse lab metrics | Vital Core, Firefox Energy Scanner (optional), future Open Scans provider | High | Reuse a compatible, current imported result; only run Lighthouse for missing/incompatible pages, within budget |
| Page inventory / families | Open Scans crawl, Vital Core configured families, Firefox Energy Scanner crawl/families, Top Task Finder | High | Reuse an existing usable inventory; do not re-crawl for a page list that is already available |
| CO2.js modelled emissions | Vital Core (SWD v4), Firefox Energy Scanner, Sitespeed Sustainable Web, direct CO2.js | High | Imported compatible result → Sitespeed result → direct estimate; never sum or average sources |
| Chromium CPU/trace | Lighthouse, Sitespeed/Browsertime, Firefox Energy Scanner Chromium traces | Medium | Keep each source separate; no merged CPU total |
| Firefox observed client energy | Firefox Energy Scanner only | None | Preserve as-is; never derive from bytes or Lighthouse |
| webNRG | Firefox Energy Scanner (optional) | Low | Separate boundary; never combined |
| Accessibility findings | Open Scans only | None | Context only for performance; never evidence of slowness |
| CSS quality | `open-site-review` / Project Wallace | Low | Candidate explanation; not a measured cost |

---

## 6. Dependency decisions

**PR 1 adds no runtime dependency.** The request parser uses Node built-ins and existing modules only.

Decisions deferred to the PR that needs them, with versions verified today:

| Dependency | Candidate pin | Decision point | Rationale |
| :--- | :--- | :--- | :--- |
| `lighthouse` | `13.6.0` (exact) | PR 3 | Chromium-only; pin exactly and record throttling/config in evidence |
| `sitespeed.io` | `43.0.0` (exact) | PR 4 | Verify `analysisstorer` output and sustainable flags against the pinned version |
| `@tgwf/co2` | `0.19.0` (exact) | PR 6 only if direct estimate is needed | Last-resort estimate; imported/Sitespeed results take precedence |
| `@projectwallace/css-code-quality` | via `open-site-review` 0.2.0 | PR 2 (adapter D) | Do not reimplement Project Wallace; import its JSON |
| `ajv` | not planned | — | Keep the existing hand-rolled validation style to avoid a new dependency; the schema remains the published contract |

Notes:

- The repository declares Node `>=24`; the local baseline run used Node `22.20.0` and emitted an `EBADENGINE` warning. CI uses Node 24.
- Prefer the Sitespeed npm package or the pinned Docker image `sitespeedio/sitespeed.io:43.0.0`; do not float `latest`.
- Heavy artifacts: upload with `retention-days` set; store only compact normalized evidence in Git.
- No shared browser session between Playwright and Browsertime.

---

## 7. Discrepancies between documentation and current code

| Claim / surface | Actual state | Risk | Action |
| :--- | :--- | :--- | :--- |
| README lists QualWeb as an available engine and says `ALL` runs “all five” | `parse-issue.mjs` excludes QualWeb; four rule engines are selectable; QualWeb code remains in `run-scan.mjs` and no `@qualweb/*` packages are installed | Users may expect a QualWeb run; stale issue titles silently lose the keyword | Track separately; do not alter accessibility behaviour in PR 1 |
| `scanner/schemas/scan-request.schema.json` still allows `qualweb` | Parser never emits it | Contract drift | Keep for backward compatibility until a dedicated engine-contract change |
| `scanner/README.md` says every scan runs axe, ALFA, Equal Access, AccessLint and QualWeb | Default is axe + one random non-axe engine; `all` runs four | Misleading operator expectations | Document in a follow-up docs PR |
| `scanner/README.md` lists only `report.json`/`.md`/`.csv` | `run-scan` also writes `.html` and overlap reports | Minor doc drift | Follow-up |
| README says QualWeb is part of normal operation in the AI disclosure | QualWeb is not selectable | Stale disclosure text | Follow-up |
| `getISOWeekKey` in `generate-reports-html.mjs` uses local date components on UTC timestamps | Test `computeWeeklyStats` fails in `America/Toronto` (first week sums 25, not 37) but passes in UTC | Pre-existing, environment-dependent test failure | Recorded here; not changed in PR 1 |
| Brief implies Firefox Energy Scanner branch contains component graph/page families/investigation queues | Those are already on `main`; the feature branch adds timelines, spikes, removal-before-load and evidence records | Assuming branch-only would duplicate work | Use branch-aware adapters in PR 2 |
| Vital Core and Firefox Energy Scanner use the same CO2.js model version | Vital Core 0.18.0; FES 0.19.0; current 0.19.0 | Figures may differ by model version | Preserve model/version with every imported figure; never merge |
| Open Scans already has Lighthouse/CO2.js dependencies | It has neither | The brief's “current Lighthouse, CO2.js and component APIs in vital-core” applies to Vital Core, not Open Scans | Add providers in PR 3/4 |

---

## 8. Backward-compatibility risks and mitigations

| Risk | Mitigation in PR 1 |
| :--- | :--- |
| A `PERF:` issue is treated as `SCAN:` | New parser rejects non-`PERF:` titles; existing workflow remains gated on `SCAN:`; new workflow is gated on `PERF:` |
| A performance request triggers accessibility engines | No `engines` field is produced; engines only exist inside `accessibility` for explicit `combined` mode; `combined` without an explicit list is rejected |
| A `SCAN:` request triggers Sitespeed/Lighthouse | No provider code is called from PR 1; existing scan workflow is untouched |
| Existing `SCAN:` parsing changes | Only additive exports and regex escaping of section names. Existing tests must pass (see §9) |
| New workflow commits or publishes data | Workflow has `contents: read`, no `issues: write`, no commit step; artifact retention 14 days |
| Public issue text becomes executable input | Request fields are strict enums, bounded strings, URLs or report paths; no shell/MCP field; parser has no process execution |
| SSRF through evidence URLs | Reuses private-host blocking; https-only; no credentials; sensitive query parameters rejected |
| Unbounded scan cost | Explicit per-mode budgets; `reuse` forces zero browser work; light/deep limits bounded |
| Request identity changes on every parse | `requestId` and `inputDigest` are deterministic hashes of the issue number, title and body |
| New issue template interferes with accessibility form | Separate template file; title prefix `PERF:`; no changes to `scan-request.yml` template |
| Node version drift | CI uses Node 24; parser uses stable built-ins only |

---

## 9. Tests and baseline results

Baseline, before PR 1 changes, on Node `v22.20.0` (declared engine `>=24`):

```text
npm test
# tests 657
# pass 652
# fail 1
# skipped 4
# duration_ms ~61s
```

The single failure is pre-existing and environment-dependent:

```text
generate-reports-html > computeWeeklyStats > should group reports by ISO week
First week should sum 20+5+10+2=37 violations
25 !== 37
```

Cause: `getISOWeekKey` builds its date with local `getFullYear`/`getMonth`/`getDate` from a UTC timestamp. In `America/Toronto`, `2026-01-06T00:00:00Z` is local January 5, moving it into a different ISO week. In UTC CI it passes.

```text
npm run lint
# exit 0
```

After PR 1, using the same Puppeteer executable setting as the scan workflow:

```text
PUPPETEER_EXECUTABLE_PATH=/usr/local/bin/google-chrome npm test
# tests 700
# pass 695
# fail 1
# skipped 4
# duration_ms ~63s
```

The remaining failure is the same pre-existing `computeWeeklyStats` timezone failure described above.

Without that environment setting, a run may also hit an environment-dependent flake in `tests/unit/run-scan-output.test.mjs`: that test builds a default `SCAN:` request, so the engine is randomly axe + alfa/equalaccess/accesslint. When Equal Access is selected, `accessibility-checker`/Puppeteer cannot find `chrome-headless-shell` because this workstation has no Puppeteer browser cache and the test does not set `PUPPETEER_EXECUTABLE_PATH`. Three targeted reruns passed, and one full-suite run after PR 1 passed that test. This is pre-existing local-environment behaviour, not caused by PR 1; CI installs/points Puppeteer at a browser.

```text
npm run lint
# exit 0
```

`tests/unit/parse-issue.test.mjs`, `tests/unit/validate-targets.test.mjs` and `tests/unit/parse-performance-issue.test.mjs` together: **161 tests, 161 pass**.

PR 1-specific tests cover: valid reuse/light/combined fixtures (43 tests total), mode defaults, reuse performing no browser work, explicit combined engine selection, unsupported/MCP sources, credential rejection (including page URLs), private-network blocking, same-site enforcement, budget bounds, deterministic identity, schema/parser consistency, nested-field injection rejection, and absence of browser automation imports.

---

## 10. Integration gaps and next steps

| Gap | PR |
| :--- | :--- |
| Common `performance-evidence/1` model and merge rules | PR 2 |
| Adapters A–D, reuse-only investigation | PR 2 |
| Bounded Lighthouse provider + page selection | PR 3 |
| Sitespeed provider + `analysisstorer`/sustainable parsing + CO2 provenance | PR 4 |
| Cross-page component investigation and deduplication | PR 5 |
| Performance Explorer + static JSON API + AI prompt package | PR 6 |
| `energy-hypothesis/1` + Firefox experiment export | PR 7 |
| DNS/redirect-aware hardening for every new fetch path | PR 3/4 (before first remote collection) |
| Read-only MCP wrapper design | PR 6, optional |
| Pipeline cost accounting (browser launches, pages, duration) | PR 3 onward |
| Fix stale QualWeb documentation/schema | Separate accessibility change |

**PR 1 deliberately omits:** browser collection, provider adapters, evidence normalization, report publication, UI, AI calls, MCP, combined execution, and any change to `SCAN:` execution.

> **Update after PR 2:** the `performance-evidence/1` model, adapters A–D and the no-browser reuse runner are implemented. See [`PR-2-EVIDENCE-ADAPTERS.md`](./PR-2-EVIDENCE-ADAPTERS.md) and [`performance-evidence.md`](./performance-evidence.md). The next smallest useful step is PR 3: bounded Lighthouse collection for pages whose existing evidence is insufficient.

**Sustainability impact of PR 1:** neutral-to-positive. No new dependency, no browser launch, no external request, no LLM call and no committed artifact. The validation workflow runs a single Node process with a 5-minute ceiling and a 14-day artifact; `reuse` requests force both browser budgets to zero. The parser rejects unbounded page counts and source lists before any provider could spend compute.

---

## 11. Acceptance check

- [x] Current default branch, relevant feature branches, open PRs and workflows inspected.
- [x] Baseline tests and lint run; results and the one pre-existing failure documented.
- [x] Actual selectable accessibility engines identified (axe, alfa, equalaccess, accesslint).
- [x] URL validation, issue parsing, report persistence and redaction reviewed.
- [x] Public report commit/publication path confirmed.
- [x] Vital Core Lighthouse/CO2/component API surfaces reviewed.
- [x] Firefox Energy Scanner component graph and experiment specification reviewed on the actual branch.
- [x] Architecture decision record written (`ADR-001-performance-workflow-in-open-scans.md`).
- [x] README claims reconciled against code in §7.
- [x] No other repository modified.
