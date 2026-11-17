# PR 4 — Targeted Sitespeed.io deep investigation and sustainability evidence

**Status:** implemented
**Provider:** Docker image `sitespeedio/sitespeed.io:43.0.0`
**Entry point:** `scanner/run-performance-deep.mjs`

---

## 1. What was implemented

- `scanner/performance-sitespeed.mjs`
  - pinned Docker image and explicit CLI configuration;
  - `--plugins.add analysisstorer`, `--sustainable.enable`, `--sustainable.model swd`, `--sustainable.modelVersion 4`;
  - Chrome/Browsertime, 3 iterations, native connectivity, visual metrics, CPU long tasks, no video retention;
  - HTML/HAR storage removed to bound artifacts;
  - output-only volume mount, `--shm-size=1g`, memory/CPU/PID limits, `no-new-privileges`, network bridge;
  - analysisstorer parsing for Browsertime, PageXray and Sustainable Web output;
  - LCP/FCP/TBT/CLS/Speed Index/visual timings/transfer/requests, resources, CPU long-task and CO2 findings;
  - raw artifact directory + content digest.
- `scanner/performance-page-selection.mjs`
  - `selectSitespeedPages`: initial cap of three pages, nominated tasks first, then pages with existing performance findings, then family representatives and unusual pages.
- `scanner/run-performance-deep.mjs`
  - load/reuse existing evidence;
  - bounded discovery only when no inventory exists;
  - execution-time DNS/redirect preflight;
  - one isolated Sitespeed Docker run over the approved shortlist;
  - partial/incomplete output handling;
  - `performance-deep-run/1` cost report and credential redaction.
- `package.json`: `npm run run:performance-deep`.

## 2. Existing code reused

- `performance-request/1` parser and validator.
- `performance-evidence/1` assembler/validator and merge rules.
- Adapters A–D and the safe evidence loader.
- Page candidate collection and ordering from PR 3.
- Public-host and redirect preflight.
- Credential redaction.

## 3. Configuration and provenance

| Item | Value |
| :--- | :--- |
| Image | `sitespeedio/sitespeed.io:43.0.0` (tag + Docker image ID recorded) |
| Browser | Chrome (`--browser chrome`) |
| Iterations | 3 per page |
| Connectivity | `native` (no simulated Lighthouse throttling) |
| Visual metrics | enabled |
| CPU long tasks | enabled |
| Video retention | disabled |
| HTML/HAR storage | removed |
| CO2 model | CO2.js Sustainable Web Design v4 |
| CO2 library version | from `sustainable.pageSummary.co2Version` (0.19.0 in the demonstration) |
| Green hosting | explicitly disabled (`--sustainable.disableHosting true`) so every host is modelled as grid-powered |
| Transfer definition | PageXray request `transferSize` (response body/transfer size), page scope |
| Grid assumption | CO2.js global average; no country/region override |
| Units | `gCO2e` for modelled emissions; `ms`, `bytes`, `count`, `score` for performance |
| Maximum pages | initial cap of 3, even when the request allows more |
| Runs per invocation | one Docker invocation for the approved URL list |

Every metric records `tool: sitespeed`, `toolVersion: 43.0.0`, browser, method, boundary, source id and evidence reference. CO2 metrics are `boundary: modelled-transfer`, never `mWh` and never observed client energy.

## 4. Safety and bounded execution

- Docker must be available; the provider fails with an actionable error otherwise.
- Only an output directory is mounted (`/sitespeed.io`); no source or credentials.
- Container limits: 2 GB memory, 2 CPUs, 512 PIDs, 1 GB shared memory, no-new-privileges, bridge network.
- Per-run client timeout and forced container removal on failure.
- No forms are submitted and no public service is mutated.
- The Sitespeed browser session is entirely separate from Playwright.
- Raw artifacts stay outside Git.
- Credential-shaped strings are redacted from compact evidence and the run report.

## 5. Outputs

- `performance-evidence/1` evidence with a `sitespeed` source per Docker run.
- `performance-deep-run/1` run report with:
  - selected pages and reasons;
  - skipped pages and cap;
  - discovery/preflight failures;
  - Docker image and image ID;
  - iterations, JSON file count, duration;
  - expected browser launches (`pages × iterations`);
  - Lighthouse budget not run, when present;
  - redaction count.
- Human-readable summary.

## 6. Tests

```text
node --test tests/unit/performance-sitespeed.test.mjs
# 9 tests, 9 pass

PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 752 tests, 747 pass, 1 pre-existing timezone failure, 4 skipped
```

Coverage includes:

- pinned image and explicit plugin/sustainable flags;
- real analysisstorer fixture normalization (LCP 416 ms, Speed Index 319 ms, 2 requests, 2,001 bytes);
- CO2.js SWD v4 provenance, 0.19.0, `gCO2e`, modelled boundary;
- resource and third-party/first-party observations;
- common-format validation and absence of `mWh` from Sitespeed;
- three-page cap and evidence-based shortlist ordering;
- nominated top-task preservation;
- deterministic output digest and missing-output error;
- deep runner with an injected fake Sitespeed provider (no Docker/browser);
- non-deep mode refusal;
- base evidence retained when Sitespeed produces no deep evidence.

A real one-page Sitespeed Docker run against `https://example.com/` was used to verify the analysisstorer layout, metric paths and sustainable payload before the parser was finalized.

Final real run (pinned image `43.0.0`, image ID `sha256:ab1bf5fec86b…`):

- 1 page, 3 iterations, one Docker run, 3 expected browser launches, 53.7 s;
- 28 analysisstorer JSON files; raw artifacts ~3.8 MB including screenshots (screenshot retention is disabled in the final code);
- LCP 212 ms, Speed Index 174 ms, TBT 0 ms, CLS 0.0023, 2 requests, 2,145 bytes;
- 7 normalized findings including modelled emissions, resource, long-task and render-blocking evidence;
- CO2.js 0.19.0 SWD v4, `0.0003 gCO2e`, `modelled-transfer`, hosting matching disabled;
- Browsertime reported a 1280×713 window against the requested 1280×800, recorded as a limitation;
- no HTML/HAR storage, no shared Playwright session.

## 7. Deliberately omitted

- Running Sitespeed over every discovered page.
- Importing a generated `performance-evidence/1` Lighthouse package into the deep runner. PR 4 consumes request-declared provider sources and URLs; the package-to-package merge is part of PR 5.
- Combining Sitespeed and Lighthouse into one aggregate score.
- Comparing Sitespeed native-connectivity metrics directly with Lighthouse simulated throttling.
- Green Web Foundation online lookup or green-hosting claims; hosting modelling is disabled for this release.
- Country/region grid intensity selection.
- Firefox physical-energy measurement.
- Cross-page hotspot ranking (PR 5).
- Public API/UI (PR 6).
- Hypothesis export (PR 7).
- A dedicated GitHub Actions deep-run workflow.

## 8. Known limitations

- Sitespeed/Browsertime uses native connectivity in Docker; results are not field data and not comparable to Lighthouse's simulated throttling.
- The Docker image is large (~3.2 GB) and the run is comparatively expensive; the first invocation pulls it. A future workflow should cache/pre-pull the pinned image before enabling scheduled runs.
- It is deliberately limited to a small shortlist.
- The image's local green-hosting database may be missing; this release disables hosting matching so no false green claim is made.
- CO2.js values are modelled emissions from transferred bytes; they are not measured client energy and must not be added to Firefox energy.
- The `co2FirstParty`/`co2ThirdParty` labels are source-declared; Sitespeed's party regex can surprise, so they are recorded without reassignment.
- CPU long-task/trace detail depends on the image's Chrome and Browsertime version.
- Incomplete runs are normalized only when usable analysisstorer JSON exists; otherwise the deep result is explicitly absent.
- DNS address pinning at Chrome connect time is still not implemented; the preflight validates the page URL and redirects.

## 9. Data format and URL changes

- Adds the `sitespeed` source type and `artifact` location kind to `performance-evidence/1`.
- Adds `performance-deep-run/1` as a run-report format.
- No existing accessibility report or public URL changed.
- Raw Sitespeed artifacts are not committed.

## 10. Next smallest useful step

PR 5: cross-page component investigation, deduplication and prioritization over the combined reusable, Lighthouse and Sitespeed evidence, still without inventing an overall energy score.
