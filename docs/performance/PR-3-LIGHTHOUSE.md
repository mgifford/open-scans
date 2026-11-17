# PR 3 — Bounded Lighthouse provider and lightweight performance evidence

**Status:** implemented
**Dependency:** `lighthouse` pinned to `13.6.0`
**Entry point:** `scanner/run-performance-light.mjs`

---

## 1. What was implemented

- `scanner/performance-page-selection.mjs`
  - candidate collection from request URLs, priority URLs, top-task URLs, reusable evidence pages and bounded discovery;
  - deterministic ordering: nominated tasks → one representative per page family → structurally unusual pages;
  - `maxPagesToInspect` and `maxLighthouseAudits` enforcement;
  - explicit reuse of compatible existing Lighthouse evidence instead of rerunning;
  - recorded selection reasons, skipped pages, omitted families, rejected URLs and thresholds.
- `scanner/performance-lighthouse.mjs`
  - pinned Lighthouse CLI runner with `CHROME_PATH` resolution;
  - simulated-throttling, Chromium-only configuration with explicit form factor, screen emulation, blocked private URL patterns, no telemetry and no full-page screenshot;
  - raw JSON retention under an artifacts directory;
  - normalization to `performance-evidence/1`: LCP, FCP, TBT, CLS, Speed Index, main-thread work, JS execution, total bytes, DOM size, performance category score, network resources, audit findings, opportunities and element evidence.
- `scanner/run-performance-light.mjs`
  - reuse existing sources first;
  - bounded discovery only when no inventory exists;
  - execution-time URL revalidation and redirect/DNS preflight;
  - sequential Lighthouse runs with per-run and pipeline time limits;
  - partial results, explicit failures and a machine-readable `performance-light-run/1` run report with cost accounting.
- `package.json`: exact Lighthouse dependency and `npm run run:performance-light`.
- `SBOM.md`: added Lighthouse and refreshed direct dependency versions.

## 2. Existing code reused

- `performance-request/1` parser and validator.
- `performance-evidence/1` assembler, merge rules and validator.
- Existing adapters A–D and the reuse-only loading path.
- `crawl-urls.mjs` sitemap, same-origin filtering and homepage-link helpers.
- `validate-targets.mjs` public URL policy.
- `assertPublicHostname` and the manual redirect checks from the evidence loader.
- Existing Open Scans report fixtures/browser context.

## 3. Defaults and selection policy

| Setting | Default |
| :--- | :--- |
| `maxPagesToInspect` | 20 |
| `maxLighthouseAudits` | 5 |
| Lighthouse runs | sequential, one browser launch per run |
| Per-run timeout | 180 s |
| Pipeline time budget | 15 min |
| Throttling | Lighthouse `simulate` |
| Browser | Chromium only |
| Profile/viewport | request profile + viewport, recorded from Lighthouse's `configSettings` |

Selection is a **bounded investigation policy**, not a performance score:

1. nominated top-task URLs, in request order;
2. priority URLs;
3. one representative page per family (median structural metrics where available);
4. remaining pages by unusual signals: query parameters, task-like paths, deep paths, large DOM, many requests, high transfer (one signal among several).

Transfer size alone cannot promote a page to the front. Pages beyond the page or Lighthouse budget are recorded with reasons.

## 4. Reuse before new collection

A page is reused only when all of the following hold:

- metrics `lcp`, `tbt`, `cls`, `fcp`, `speed-index`, `main-thread-work` and `js-execution` are present and non-null;
- every required metric is from `tool: lighthouse`;
- the browser is Chromium;
- a page context records a Lighthouse method for the requested mobile/desktop profile;
- the source has a collection timestamp within `maxEvidenceAgeDays`.

Otherwise the page is scheduled for a new run. Missing metrics are not treated as zero and partial evidence is not falsely promoted to complete.

## 5. Outputs

- `<out>.json` — `performance-evidence/1` evidence, with one Lighthouse source per run and `evidenceRef` anchors into the raw JSON.
- `<run-report>.json` — `performance-light-run/1` with selection, discovery, runs, failures, artifacts and cost.
- `<summary>.md` — human-readable run and boundary summary.
- Raw Lighthouse JSON — in the bounded artifacts directory (`--artifacts-dir`), not Git history.

Run-report cost fields include `browserLaunches`, `lighthouseAudits`, `reusedPages`, `pagesInspected`, artifact paths, network evidence fetches and duration.

## 6. Security and public-site behaviour

- Request URLs are validated again at execution time and restricted to the requested site.
- Preflight resolves DNS and follows redirects manually with a public-host check at each hop.
- Lighthouse receives repeated `--blocked-url-patterns` entries for common private/loopback ranges.
- Redirects outside the requested site are refused.
- No forms are submitted and no public service is mutated.
- Compact evidence and the run report pass through the existing credential redaction layer; raw Lighthouse JSON remains in the bounded artifact directory.
- Address pinning at Chrome connect time is not implemented; Chrome can still issue page-controlled third-party subresource requests. This is recorded in the run report and is the remaining hardening item.

## 7. Tests

```text
node --test tests/unit/performance-lighthouse.test.mjs
# 15 tests, 15 pass

PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 743 tests, 738 pass, 1 pre-existing timezone failure, 4 skipped
```

The one failure is the pre-existing `computeWeeklyStats` timezone failure documented in Phase 0.

Coverage includes:

- source-linked Lighthouse normalization and evidence validation;
- metric/unit/boundary preservation and simulated-throttling labelling;
- page-selection ordering, family representation and unusual-page reasons;
- reuse of compatible evidence and rejection of stale/incomplete evidence;
- bounded discovery origin handling and off-site rejection;
- runner with an injected fake Lighthouse runner (no browser), cost accounting;
- reuse + gap-filling run planning;
- all-runs-failed and partial-failure behaviour;
- non-light mode refusal.

Real public demonstration: a five-page run against `https://www.w3.org/` (home, standards, participate, Consortium, TR) with Lighthouse 13.6.0 and Chromium 157 completed in 36.1 s:

- 5 pages, 5 browser launches, 5 audits;
- 5 Lighthouse sources and 5 raw JSON artifacts (about 2 MB total, kept in the bounded artifacts directory, not Git);
- 41 resources and 137 source-linked findings;
- two redirects resolved and recorded (`/Consortium/` → `/about/`, `/participate/` → `/get-involved/`);
- no skipped candidates, no failures;
- the run is reproducible from the request plus the runner; no AI is involved.

Raw artifacts were retained locally under `.tmp/lighthouse-demo/` for verification and are intentionally not committed. The compact evidence and run report were inspected; the evidence package kept each page's final URL and separate Lighthouse source rather than merging the redirecting URLs silently.

## 8. Deliberately omitted

- Sitespeed and CO2.js provider work (PR 4).
- Cross-page hotspot ranking and deduplication (PR 5).
- Performance Explorer/static API (PR 6).
- Hypothesis export (PR 7).
- A public GitHub Actions performance-run workflow. The runner is ready; scheduling/publication belongs with the Explorer/API and cost controls.
- Address pinning at Chrome connect time.
- Full-page screenshots and trace artifacts; they are deliberately disabled to bound storage.

## 9. Known limitations

- Lighthouse values are lab measurements under simulated throttling, not field data and not Firefox energy.
- A category score is a Lighthouse score for one page, not a site-wide performance score.
- Element/node references from Lighthouse do not establish component ownership.
- `--blocked-url-patterns` reduces but does not eliminate private-network subresource requests.
- The Lighthouse CLI and Chrome version are recorded, but browser resolution depends on the workflow installing a browser and setting `CHROME_PATH`.
- The pipeline time budget can leave selected pages unmeasured; they are recorded, not silently dropped.

## 10. Next smallest useful step

PR 4: targeted Sitespeed.io runs for a small shortlist from this evidence, with `analysisstorer`, Sustainable Web/CO2.js provenance, raw-artifact retention and no shared Playwright/Browsertime session.
