# `performance-investigation/1` cross-page investigation model

**Schema:** [`scanner/schemas/performance-investigation.schema.json`](../../scanner/schemas/performance-investigation.schema.json)
**Engine:** [`scanner/performance-investigation.mjs`](../../scanner/performance-investigation.mjs)
**CLI:** [`scanner/run-performance-investigation.mjs`](../../scanner/run-performance-investigation.mjs)

---

## 1. Purpose

`performance-investigation/1` turns a `performance-evidence/1` package into ranked, cross-page investigation candidates. It groups evidence; it does not measure anything and it does not produce an overall performance, energy or carbon score.

A candidate answers:

- how many sampled pages contain this component or resource;
- which page families are affected;
- which observations support it, and in which phase;
- which resources are implicated;
- what remains uncertain;
- which realistic interventions are candidates;
- whether an experiment already exists.

## 2. Candidate kinds

| Kind | Identity |
| :--- | :--- |
| `component` | A Firefox Energy Scanner component type (`ct-…`), with its instances across pages |
| `resource` | A shared or notable resource, with the pages and component instances that load or declare it |
| `page` | Page-level evidence that has no component locator (for example a Lighthouse audit) |

There is no `family` candidate: families are coverage/index dimensions, not performance causes. `byFamily` links candidates to the page families they touch.

## 3. Grouping rules

- Component findings are grouped by **component type id**, never by a class name or label.
- Shared navigation on two pages is one component candidate because it is one source component type with instances on both pages.
- A sidebar navigation is a different type and remains a different candidate even when both are labelled "navigation".
- Findings that target a page remain page-level; they are not reassigned to a nearby component.
- Findings that target a resource remain resource-level; they are not credited to a component that happens to load the resource.
- Component candidates may list `resourceFindingIds`; those are explicitly not component-owned costs.
- Accessibility `context-only` findings are excluded.
- Static/CSS `candidate-explanation` findings are included at the lowest evidence tier and are not presented as runtime costs.
- Vital Core configured accessibility components are not turned into performance candidates.
- Site-level findings that cannot be tied to a page/component/resource are not turned into candidates.

## 4. Observation deduplication

Findings are grouped into observations by:

`kind + phase + evidenceClass + metric name + unit + source id + tool + browser + boundary`

This means:

- the same failure mechanism repeated on five pages becomes one observation with five occurrences;
- distinct mechanisms on the same component (an endless animation and a long task) remain separate observations;
- metrics from different browsers, tools or boundaries remain separate observations;
- all original finding IDs are kept in `findingIds`;
- each measurement keeps its own `findingId`, page, unit, tool, browser and boundary.

`occurrences` is the number of findings in that observation group. It is not a score.

## 5. Phases

Each observation has `load`, `interaction`, `idle` or `unknown`, taken from the source where stated and otherwise classified from the observation kind. `unknown` is not a claim that the problem occurs in every phase.

## 6. Coverage and confidence

`coverage.pages` is the number of sampled evidence pages with the candidate; `of` is the number of sampled pages in the package. `coverage.families` is the number of affected families. The basis explicitly says the result is not extrapolated.

`ownershipEstablished` is always `false`. Component type identification method, source confidence and observation uncertainty are recorded. Structural or inferred component identification adds a limitation; class/structure alone never establishes ownership.

## 7. Interventions

Interventions are candidate actions, not predicted savings:

- pause/reduce animation;
- split or defer interaction work;
- third-party facade or consent gate;
- defer render-blocking resources;
- reduce main-thread work;
- reduce/split/defer a resource;
- no autoplay;
- defer/code-split JavaScript;
- reduce transfer (with an explicit warning not to claim energy savings from bytes);
- review a static/CSS candidate explanation;
- collect more evidence.

`experimentKindCandidate` names a possible Firefox Energy Scanner experiment kind (for example `pause-animations`), but PR 5 does not validate it against an installed runner and does not export or execute anything. `diagnosticOnly` marks blocking/removal-style upper bounds when used.

Existing experiments on affected pages are listed in `existingExperimentIds`, with an uncertainty note that the experiment may test a different intervention.

## 8. Ranking

Candidates are sorted by separate, explicit keys, not a summed score:

1. evidence tier: `tested`/`confirmed` → `observed` → `associated` → `inferred` → `candidate-explanation` → `structure`;
2. observation occurrence count;
3. affected page count;
4. affected family count;
5. maximum DOM nodes, maximum resource bytes (separate tie-breakers);
6. stable id.

`priority.workload` keeps observations, max DOM nodes, max transfer bytes, max main-thread evidence and max resource bytes in their own units. `rankReason` states the keys used. Nothing is weighted or added.

## 9. Bidirectional indexes

- `byComponentType`: component type → candidate ids.
- `byPage`: page → candidate ids.
- `byFamily`: family → candidate ids.
- `byResource`: resource → candidate ids.

This supports component → pages/resources and resource → components/pages/families navigation without rerunning analysis.

## 10. CLI

```bash
node scanner/run-performance-investigation.mjs evidence.json \
  --out investigation.json --summary investigation.md
```

- Reads `performance-evidence/1` (raw or wrapped as `{ evidence }`).
- Performs no browser, network or LLM call.
- Refuses invalid evidence.
- Deterministic grouping apart from candidate ids; evidence is not modified.

## 11. Boundaries

- Page/component/family coverage is within sampled evidence; it is not a site-wide extrapolation.
- Resource co-occurrence is not component ownership.
- CSS quality and compatibility findings have no demonstrated runtime cost.
- A Lighthouse audit without a component locator is page-level evidence.
- The package contains no aggregate energy or carbon score.
- The package does not schedule physical measurement or execute experiments.
