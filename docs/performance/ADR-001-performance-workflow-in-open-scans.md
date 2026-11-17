# ADR-001: The performance investigation workflow lives in Open Scans

- **Status:** Proposed (accepted for PR 1 scope)
- **Date:** 2026-11-16
- **Deciders:** Open Scans maintainers
- **Related:** `docs/performance/PHASE-0-ASSESSMENT.md`, `scanner/schemas/performance-request.schema.json`

---

## Context

The brief asks for an entry point that turns a public domain and, optionally, existing evidence into a reproducible investigation: identify pages, page families, components and resources with performance problems; form falsifiable hypotheses; export them to Firefox Energy Scanner; and attach later experimental results.

The capabilities and infrastructure already exist, but they are split:

- **Open Scans** already has public, issue-driven intake, strict public-URL validation, GitHub Actions orchestration, GitHub Pages publication, a corpus of historical scan reports, and a no-login workflow.
- **Vital Core** already produces Lighthouse recommendations, page-family and shared-component groupings, and CO2.js Sustainable Web Design estimates as a static JSON API.
- **Firefox Energy Scanner** already produces a component graph, page families, an investigation queue, and isolated energy experiments — but it is local-first and, on capable hosts, physical-energy measurement oriented.
- **Sitespeed.io** can answer deeper waterfall/CPU questions but is expensive and must be targeted.
- **Top Task Finder** can supply prioritized URLs.
- **Open Site Review** can supply static CSS/JS compatibility and quality candidates.

Re-running any of these inside a new tool would duplicate measurements, spend the same energy twice, and produce figures with incompatible boundaries.

## Decision

Open Scans becomes the **workflow and evidence-integration entry point** for performance investigation, while the measurement tools remain authoritative in their own domains.

Open Scans will:

1. Accept a separate `PERF:` request contract (`performance-request/1`), independent of `SCAN:`.
2. Normalize imported evidence into a versioned adapter format (`performance-evidence/1`) that preserves each source's identifiers, units, browser/configuration and limitations.
3. Reuse existing evidence before requesting new collection, and only run bounded Lighthouse/Sitespeed collection when a specific gap justifies it.
4. Publish read-only static evidence (JSON/HTML) and AI-ready packages without requiring an LLM.
5. Export a human-reviewable `energy-hypothesis/1` and, only for supported interventions, a Firefox Energy Scanner experiment file.
6. Leave physical measurement to Firefox Energy Scanner on an approved runner. Open Scans must never execute a physical-energy experiment automatically.

The accessibility workflow remains unchanged and independently selectable. `SCAN:` never becomes a performance scan; `PERF:` never runs axe/ALFA/IBM Equal Access/AccessLint unless `mode: combined` explicitly names the engines.

## Why Open Scans rather than another repository

| Option | Why it was rejected |
| :--- | :--- |
| A new performance-only repository | Duplicates the public intake form, URL safety policy, Actions orchestration, Pages publishing, report index and issue-driven UX. It also splits the user's mental model between two scanners on the same URLs. |
| Extend Vital Core | Vital Core is a static reporting API for its own scan corpus and audience. Adding arbitrary public intake, browser budgets and experiment export would broaden its security and cost surface significantly, and would couple consumers to a different release cycle. It remains the evidence provider. |
| Extend Firefox Energy Scanner | Its value is precise local/browser energy measurement, including physical hardware runners. Making it the public intake and hosting layer would mix measurement integrity with untrusted public scheduling, and it already has a different deployment model. It remains the experiment and physical-measurement authority. |
| A Sitespeed/Lighthouse aggregator with a new score | Repeats the failure mode the brief explicitly rejects: an opaque aggregate that hides provenance and encourages untargeted scanning. |

## Consequences

### Positive

- One public intake path with an existing security posture and a familiar GitHub Issues workflow.
- Existing evidence can be reused immediately; the first useful investigation can run with no browser.
- Historical Open Scans reports become a page-inventory and context source.
- The published JSON contract can serve the browser UI, a CLI, an AI assistant and a future read-only MCP wrapper from the same data.
- Cost is bounded per request and visible in the workflow (pages, Lighthouse audits, Sitespeed pages, browser launches, duration).
- Accessibility and performance remain separate products that can later be combined only on request.

### Negative / costs

- Open Scans must take on new providers, schemas and artifact storage without regressing accessibility scanning.
- Two workflows (`SCAN:` and `PERF:`) share repository infrastructure but must not share execution defaults; this requires explicit tests.
- Imported evidence quality varies; the common format must carry uncertainty and must not normalize it away.
- The public GitHub Actions model needs careful budget and retention limits for browser-based providers.
- Sitespeed/Lighthouse versions must be pinned and re-verified; their output formats change between releases.

### Neutral

- Vital Core stays the source of truth for its own Lighthouse/CO2/component data; Open Scans does not rewrite it.
- Firefox Energy Scanner stays the source of truth for component IDs, investigation queue items, experiments and measured energy.
- CO2.js results remain modelled emissions, never measured energy, wherever they are displayed.

## Compliance with the measurement boundaries

Open Scans will keep separate, explicitly labelled records for:

- Lighthouse lab metrics (Chromium, simulated throttling by default);
- Chromium CPU/trace observations;
- Sitespeed/Browsertime observations;
- network transfer and resource measurements;
- CO2.js modelled emissions;
- Firefox observed client energy;
- webNRG measurements;
- accessibility findings.

No synthetic total-energy or total-carbon score will be produced. Missing measurements stay missing, not zero. Attribution confidence is recorded per finding, and component co-occurrence is never presented as ownership.

## Follow-up decisions

- PR 2: exact merge keys and conflict rules for `performance-evidence/1`; adapter version support policy.
- PR 3: Lighthouse page-selection algorithm and throttling configuration.
- PR 4: Sitespeed version/config pin and raw-artifact retention policy.
- PR 6: static API path layout, MCP trust policy and browser-AI consent handling.
- PR 7: supported experiment-kind allowlist derived from the installed Firefox Energy Scanner version.
