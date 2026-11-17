# PR 2 — Common evidence model and existing-source adapters

**Status:** implemented
**Branch:** `feat/performance-evidence-adapters`
**Contract:** `performance-evidence/1`

---

## 1. What was implemented

- `scanner/schemas/performance-evidence.schema.json` — versioned common format with site, source, measurement source, page, page family, component type, component instance, resource, finding, experiment, investigation-item, merge-decision and coverage entities.
- `scanner/performance-evidence.mjs` — assembler, identity/merge rules, reverse-link derivation, validation and summary.
- `scanner/performance-source-loader.mjs` — repo-path/local/https source loading; DNS-aware and redirect-aware remote JSON fetch; size and timeout limits; Vital Core index → domain snapshot resolution.
- `scanner/adapters/open-scans-report.mjs` — Adapter A.
- `scanner/adapters/firefox-energy-scanner.mjs` — Adapter B, schema versions 1–2, graph `component-graph/1`.
- `scanner/adapters/vital-core.mjs` — Adapter C, snapshots and weekly findings.
- `scanner/adapters/open-site-review.mjs` — Adapter D.
- `scanner/adapters/index.mjs` — explicit allowlist, no heuristic or MCP fallback.
- `scanner/run-performance-reuse.mjs` — reuse-only investigation runner and CLI.
- Fixtures for all four adapters, an alternate Firefox result (incompatible measurements), an experiment result, and a Vital Core findings payload.
- `tests/unit/performance-evidence.test.mjs`.

## 2. What existing code was reused

- `performance-request/1` parser and validator for request intake.
- `validate-targets.mjs` host policy for remote evidence (private/loopback/link-local blocking).
- Existing Open Scans report JSON shape; no new accessibility scan.
- Existing Open Scans browser/viewport scan context.
- The documented Vital Core `/api/v1/` snapshot and findings shapes.
- The existing Firefox Energy Scanner `component-graph/1`, `energy-finding` and experiment result shapes.
- No new runtime dependency was added. The loader uses Node built-ins and global `fetch`.

## 3. What was deliberately omitted

- Lighthouse, Sitespeed, direct CO2.js computation and browser collection (PR 3/4).
- Cross-page hotspot ranking/deduplication (PR 5).
- Public API/UI/AI prompt package (PR 6).
- `energy-hypothesis/1` export (PR 7).
- Full Firefox Energy Scanner timeline, spike and evidence-record adaptation. Presence of `timelines` is recorded as a limitation instead of being silently dropped or half-imported.
- DNS address pinning at connect time. The loader validates before connecting and records the residual DNS-rebinding limitation.
- Merging component instances across sources. Only page/resource identity and identical component types merge; different implementations remain separate.

## 4. Tests and actual results

```text
node --test tests/unit/performance-evidence.test.mjs
# tests 28
# pass 28
# fail 0

npm run lint
# exit 0
```

Coverage includes:

- ID preservation for Firefox Energy Scanner and Vital Core.
- Reuse of Vital Core CO2.js/Lighthouse figures without recalculation.
- Open Scans accessibility context never becoming performance evidence.
- Open Site Review CSS quality kept as a candidate explanation.
- Same-page merge across sources with both incompatible LCP measurements retained.
- Missing measurements remaining missing, not zero.
- Distinct navigation implementations remaining separate; same-label types cross-referenced only.
- Experiment import as tested mWh evidence with no predicted saving.
- Validation rejecting synthetic mWh, unlabelled CO2 and broken references.
- Unsupported versions, malformed payloads and unsupported source types.
- Reuse runner with four local sources: zero browser launches, zero network fetches.
- Partial source failure producing a usable package with an explicit limitation.
- Non-reuse mode and empty source list refusal.
- Private-address blocking, repo-path traversal and local-path policy.
- CLI output and summary generation.
- Schema/module constant consistency.
- No browser automation imports in evidence/adapters.

Full suite: **728 tests, 723 pass, 1 pre-existing failure, 4 skipped** (with a Puppeteer browser configured, as CI does). The one failure is the pre-existing `computeWeeklyStats` timezone failure documented in Phase 0; it is unrelated to PR 2.

## 5. Known limitations

- Vital Core public data is aggregated/sample-based; there is no complete URL inventory or per-page Lighthouse record in the snapshot.
- Firefox Energy Scanner graph pages do not carry a browser/viewport per page; the adapter uses the result environment context and records that.
- A component instance/type ID collision across sources with different semantics is kept separate under a suffixed ID; child links for that rare case are not fully re-aliased.
- Remote evidence fetch does not pin the resolved IP at connect time.
- Local source paths appear in the generated source metadata; the CLI is intended for local/reuse runs, not as a public report path.

## 6. Data format and published URL changes

- Adds `performance-evidence/1` as a new format. No existing `scan-request/1` or accessibility report format changed.
- Adds no public HTTP path yet; PR 6 will publish the static API.
- Adds new CLI `npm run run:performance-reuse`.
- No existing report URL changed.

## 7. Next smallest useful step

PR 3: bounded Lighthouse provider with page selection, using the existing page inventory and component/family evidence from this package, while preserving the no-browser `reuse` path.
