# PR 5 — Cross-page component and resource investigation

**Status:** implemented
**Contract:** `performance-investigation/1`
**Entry point:** `scanner/run-performance-investigation.mjs`

---

## 1. What was implemented

- `scanner/performance-investigation.mjs`
  - groups component findings by component type id, resource findings by resource, and unlocated findings by page;
  - deduplicates repeated observations by mechanism/source/browser/method while keeping all finding ids;
  - keeps distinct mechanisms on the same component separate;
  - records phase, coverage, confidence, uncertainty, interventions and existing experiments;
  - ranks with explicit separate keys and no aggregate score;
  - builds bidirectional indexes.
- `scanner/schemas/performance-investigation.schema.json`
  - versioned candidate, observation, measurement, intervention, priority and index contract;
  - `ownershipEstablished` is required and must be false.
- `scanner/run-performance-investigation.mjs`
  - reads `performance-evidence/1`, validates it, writes JSON and a summary;
  - no browser, network or LLM access.
- Added optional `phase` to `performance-evidence/1` findings and populated it in the Firefox Energy Scanner, Lighthouse and Sitespeed adapters where the source states it.

## 2. What existing code was reused

- `performance-evidence/1` assembler/validator and its IDs.
- Firefox Energy Scanner component types/instances and finding phases.
- Lighthouse and Sitespeed findings/metrics.
- Vital Core page families as coverage dimensions (not as performance ownership).
- Open Scans report context only where it is already performance evidence.
- Existing page/resource indexes and source provenance.

## 3. What was deliberately omitted

- A single performance/energy/carbon score.
- Extrapolating sampled component cost to the whole site.
- Treating class names, co-occurrence or accessibility component groups as ownership.
- Exporting or executing Firefox experiments (PR 7).
- UI/API publication (PR 6).
- Any new measurement or browser run.

## 4. Tests

```text
node --test tests/unit/performance-investigation.test.mjs
# 12 tests, 12 pass

PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 764 tests, 759 pass, 1 pre-existing timezone failure, 4 skipped
```

Coverage includes:

- shared navigation on two pages becomes one candidate;
- unrelated sidebar navigation remains separate;
- distinct mechanisms on one component remain separate observations;
- shared CSS and third-party resources become resource candidates without ownership;
- Lighthouse page evidence without a component locator becomes a page candidate;
- CSS candidate explanations rank below observed findings and recommend more evidence;
- bidirectional indexes;
- no score field and false ownership everywhere;
- empty/context-only evidence produces no candidates;
- validation rejects ownership claims, duplicate ids and dangling indexes;
- CLI output and evidence-wrapper input.

A real W3C Lighthouse evidence package produced 11 candidates (5 page-level and 6 shared-resource candidates) with 41 resource index entries, showing that an investigation can run over actual evidence with no browser or LLM. Component-level grouping was verified with the Firefox Energy Scanner fixture: one shared navigation candidate across two pages, a separate sidebar navigation candidate, and separate observations for the navigation animation and long task.

## 5. Known limitations

- Component grouping is only as good as the source component graph. Lighthouse-only evidence produces page/resource candidates, not invented components.
- Page families are coverage metadata; the format does not yet import Vital Core regions.
- Existing experiments are listed by affected page, not by a precise selector match; PR 7 must validate the intervention and selector.
- The intervention list is candidate guidance, not a claim that the installed Firefox Energy Scanner supports every experiment kind.
- A resource shared by pages is not proof that it costs the same or is owned by a component.
- No aggregate score, no site-wide extrapolation and no physical-energy measurement.

## 6. Data format and URL changes

- Adds `performance-investigation/1` and its schema.
- Adds optional `phase` to `performance-evidence/1` findings.
- Adds `npm run run:performance-investigation`.
- No existing report URL, accessibility report or public page changed.
- No new runtime dependency.

## 7. Next smallest useful step

PR 6: publish the investigation package as a static JSON API and build the accessible Performance Explorer, including the AI-ready evidence package and "Copy AI investigation prompt" action.
