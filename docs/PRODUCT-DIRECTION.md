# Product direction: on-demand quality evidence

Open Scans is not intended to become a second Vital Core or a second Firefox Energy Scanner.

## Roles

| Project | Role |
| :--- | :--- |
| **Vital Core** | Continuous monitoring of a known domain list; recurring problems over time |
| **Open Scans** | On-demand scanning and comparison of a supplied URL set against common quality indicators |
| **Firefox Energy Scanner (FES)** | Deep performance, browser-activity, component and measured-energy investigation |

Open Scans should be the place a developer or reviewer goes when they need a reproducible accessibility/quality evidence package for a chosen set of URLs, and a comparison between two implementations. It should not silently become a continuous monitor.

## What Open Scans can provide

- Multiple accessibility engines and cross-engine comparison.
- On-demand crawl or explicit URL list.
- Baseline-versus-modified accessibility comparison.
- Optional, opt-in performance evidence providers.
- Human-readable HTML/Markdown and machine-readable JSON/CSV.
- Pattern and container-aware summaries.
- A compact accessibility context for FES.

## What it should not provide

- A single combined accessibility/performance/energy score.
- A duplicate FES component graph.
- A duplicate Vital Core continuous-monitoring product.
- Measurements presented as energy when they are modelled bytes.
- Automatic FES runs or live cross-project APIs.

## FES handoff

Open Scans publishes `accessibility-context.json`, keyed by page URL and selector. FES can join it to `component-graph/1` and show accessibility evidence beside component/energy evidence, while preserving separate evidence classes and boundaries.

The join is optional. Neither project should require the other for ordinary operation.
