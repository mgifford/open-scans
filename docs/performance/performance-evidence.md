# `performance-evidence/1` common evidence model

**Schema:** [`scanner/schemas/performance-evidence.schema.json`](../../scanner/schemas/performance-evidence.schema.json)
**Assembler/validator:** [`scanner/performance-evidence.mjs`](../../scanner/performance-evidence.mjs)
**Adapters:** [`scanner/adapters/`](../../scanner/adapters/)
**Reuse runner:** [`scanner/run-performance-reuse.mjs`](../../scanner/run-performance-reuse.mjs)

---

## 1. Purpose

`performance-evidence/1` is an **adapter layer**. It lets Open Scans reason over evidence from several tools without pretending those tools measured the same thing. It is deliberately not:

- a new accessibility format;
- a replacement for the Firefox Energy Scanner component graph;
- a new measurement engine;
- an aggregate performance, energy or carbon score.

Each record keeps its source tool, version, browser, method, boundary, scope, units, confidence and limitations. A figure that a source did not provide stays `null` or absent; it is never defaulted to zero.

## 2. Entities

| Entity | What it preserves |
| :--- | :--- |
| Site | Origin, host, source ids, coverage and coverage limitations |
| Source | Evidence file/API location, content digest, adapter and version, tool/version, collected/imported time, schema version, limitations |
| Measurement source | The source tool's own boundary declaration (for example `firefox-dom`, `firefox-network`, `lighthouse`) |
| Page | Original/normalized URL, family, browser/viewport contexts, metrics, source refs, limitations |
| Page family | Label, source, basis (`measured-structure`, `configured-route`, `imported`), page ids |
| Component type | Stable id, source component id, signature, identification method, confidence, family/instance/resource/finding links, possible duplicates |
| Component instance | Page, type, selector, parent/children, resources, findings, source refs |
| Resource | URL, kind, third-party state, size/statistic, timing, pages/instances, direct/inferred/page-level attribution |
| Performance finding | Exact observation, target, optional metric, evidence class, confidence, evidence ref, limitations |
| Experiment | Hypothesis, intervention, workload, baseline/variant, validation checks, recorded results, physical-energy status |
| Investigation item | A source-provided queue item, preserving rank, order and separate workload indicators |
| Merge decision | Which identity was kept, which was merged, why, and what differed |
| Coverage | Discovered/inspected page counts and their basis |

Every metric has `name`, `value`, `unit`, `scope`, `sourceId`, `measurementSourceId`, `tool`, `toolVersion`, `browser`, `method`, `boundary`, `evidenceRef`, `confidence` and `limitations`.

## 3. Identity rules

### Firefox Energy Scanner

The adapter preserves these IDs exactly:

- pages `pg-…`
- component types `ct-…`
- component instances `ci-…`
- resources `rs-…`
- findings `fd-…`

The source component id is also stored in `sourceComponentId`. Graph source names (`firefox-dom`, `firefox-network`, `lighthouse`, `chromium-trace`, `co2js`, …) are kept as measurement-source names and namespaced by evidence source id only where needed to avoid collisions.

### Vital Core

- `finding_ref` (`VFR-…`), `occurrence_id` (`VO-…`) and `observation_id` (`VOB-…`) are preserved as finding ids and evidence references.
- Vital Core has no page/component graph id in the public payload, so Open Scans generates deterministic, clearly prefixed ids (`vc-pg-…`, `vc-pf-…`, `vc-ct-…`). The original configured component key is kept in `sourceComponentId` (for example `component:site-navigation`).
- CO2.js figures are imported from Vital Core with `tool: "vital-core"` and a `modelled-transfer` boundary. They are not recalculated and no second CO2.js figure is produced.

### Open Scans reports and Open Site Review

These sources have no stable page/component identity for performance, so deterministic ids are generated with `os-pg-…` and `osr-pg-…` prefixes. Their finding `sourceFindingId` keeps the original rule id where one exists.

## 4. Merge rules

### Pages

Pages merge by **normalized URL**: lowercase host, default ports removed, fragment removed, query parameters sorted but retained. Query variants therefore stay distinct.

When two sources describe the same page:

- the higher-trust source keeps the page id, in this order: Firefox Energy Scanner → Vital Core → Open Scans → Open Site Review;
- source ids, contexts, metrics, source refs and limitations are merged;
- metrics are deduplicated only when source, measurement source, name, unit, scope, browser, method and value all match;
- a different family id is recorded as a `mergeDecision.differences` entry; families are not overwritten;
- the other page id is recorded as an alias and in `mergeDecisions`.

### Resources

Resources merge by normalized URL. The higher-trust source keeps the resource id. Page/instance links and source refs merge. If two sizes differ, the kept size is retained and the difference is recorded; sizes are **never averaged**. If a resource has a loader it is `direct`; if only a page-level script/style has no loader it is `page-level`; a source-inferred relation stays `inferred`.

### Component types

Component types are **never merged by label**. A shared label such as "navigation" or "dialog" is not proof of a shared implementation.

- The same id with the same signature is merged as one type across runs; its references and limitations merge.
- The same id with a different signature is kept separate under a suffixed id.
- Different ids with the same label are cross-referenced in `possibleDuplicateOf`; this is a hint, not a merge and not ownership.

### Findings and metrics

Findings are not merged across sources. If two sources report the same finding id, both are retained; the later one receives a suffix and a limitation. Metrics from different browsers, throttling configurations, methods or versions remain separate records. No metric is summed or averaged with another.

### Sources

Duplicate source records (same content digest/type/location) are ignored with a warning. Each source keeps its own limitations.

## 5. Measurement boundaries

The format keeps these separate and provides no field that combines them:

- Lighthouse lab metrics (Chromium, simulated throttling usually);
- Chromium CPU/trace observations;
- Sitespeed/Browsertime observations (PR 4);
- network transfer/resource observations;
- CO2.js modelled emissions (`gCO2e`, `modelled-transfer`);
- Firefox observed client energy (`mWh`, `Firefox observed client energy`);
- webNRG measurements;
- accessibility findings (`context-only`).

Validation rejects:

- `mWh` metrics attributed to Lighthouse, CO2.js or Open Site Review;
- CO2.js metrics whose boundary is not labelled `modelled`;
- `gCO2e` metrics that claim an observed-energy boundary;
- broken page/type/instance/resource/source references;
- duplicate entity ids;
- synthetic or unknown top-level/entity fields.

The validator does not require every page to have a metric. A page with no measurement has an empty metric list, not a zero.

## 6. Evidence classes

| Class | Meaning |
| :--- | :--- |
| `observed` | Direct observation by the source (DOM, network, trace, node) |
| `associated` | An evidence-backed association, not ownership |
| `inferred` | A structural heuristic or inferred relation |
| `tested` | A recorded experiment result |
| `confirmed` | A result confirmed under the source's stated protocol |
| `context-only` | Accessibility context; never a performance conclusion |
| `candidate-explanation` | Static CSS/compatibility explanation; no demonstrated runtime cost |

## 7. Adapters

### A. Open Scans report

Imports page URLs, final URLs, titles, HTTP status, redirect state and recorded browser/viewport. Imports **no performance metric**. Accessibility findings become one `context-only` finding per page. `elapsedMs` is explicitly not imported as a performance metric because it includes audit time.

### B. Firefox Energy Scanner

Imports the component graph, page families, component types/instances, resources, findings, Lighthouse summary, investigation queue and experiment records. Supports result `schemaVersion` 1 and 2 and graph `component-graph/1`. Unknown versions fail clearly. Energy timelines are recorded as a limitation in PR 2, not silently imported.

### C. Vital Core

Imports a domain snapshot or weekly findings payload:

- pages from representative URL samples (bounded);
- page families and configured shared components with their basis and ownership caveats;
- accessibility findings as context-only, preserving `VFR`/`VO` ids;
- latest Lighthouse medians and recommendations;
- sustainability metrics already computed by Vital Core (`medianBytes`, `medianRequests`, `meanCo2g`, `totalCo2g`, `meanEnergyWh`, `totalEnergyWh`) with `modelled-transfer` boundaries.

A domain index alone is rejected with an instruction to point at the domain snapshot, so no site is silently scanned. When the loader receives a Vital Core index, it resolves the requested domain to its `snapshot_url` and records that the index itself is not evidence.

### D. Open Site Review

Imports compatibility findings and Project Wallace CSS quality/complexity as `candidate-explanation` records. None is presented as a measured runtime cost.

## 8. Reuse-only investigation

```bash
node scanner/run-performance-reuse.mjs <performance-request.json> \
  --source firefox-energy-scanner=/path/to/result.json \
  --source vital-core=/path/to/snapshot.json \
  --allow-local \
  --out evidence.json \
  --summary evidence.md
```

- Only `mode: reuse` is accepted in PR 2.
- Local paths require an explicit `--source` override and `--allow-local`.
- `repo-path` sources must resolve inside `reports/`; symlinks are checked.
- Remote evidence must be `https://`, DNS-checked, redirect-checked, size-limited and JSON.
- No browser is launched; the runner records `browserLaunches: 0`.
- A failed source is omitted with a visible warning/limitation; successful sources still produce a package. It never falls back to a new scan.
- The request may be a validated `performance-request/1` object, a parser result, or the original issue event.

## 9. Coverage

Coverage is not a score. `discoveredPages` is the maximum count reported by a source (sources may overlap and inventory estimates are not authoritative); `inspectedPages` is the number of unique pages present in the package. The basis and every limitation are recorded. A source that does not state a count leaves it `null`.

## 10. Versioning

- `schema` is `performance-evidence/1`.
- Additive optional fields may stay in version 1.
- A breaking change to required fields, identity/merge semantics or measurement boundaries requires `performance-evidence/2` and a migration note.
- The format must not absorb provider-specific fields. Provider-specific details stay in the source artifact and in `limitations` until a versioned adapter field is justified.

## 11. Known limitations in PR 2

- No Sitespeed adapter.
- No direct CO2.js computation (correct: reuse first).
- No full Firefox timeline/spike adaptation.
- No cross-page hotspot ranking yet (PR 5).
- Vital Core per-page performance is not available in the public API; only aggregated Lighthouse medians and sampled URLs.
- Remote evidence fetch checks DNS before the request but does not yet pin the resolved address at connect time. This is recorded and must be hardened in PR 3/4.
- Component instances are not merged across sources; only page/resource identity and identical component types are merged.
