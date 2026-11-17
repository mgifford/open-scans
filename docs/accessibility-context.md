# Accessibility context handoff for Firefox Energy Scanner

**Schema:** [`a11y-accessibility-context/1`](../scanner/schemas/a11y-accessibility-context.schema.json)
**Artifacts:** `accessibility-context.json`, `accessibility-context.csv`
**Module:** [`scanner/accessibility-context.mjs`](../scanner/accessibility-context.mjs)

---

## 1. Purpose

This is the compact, occurrence-level handoff from Open Scans to an external component graph. It is designed for Firefox Energy Scanner (FES) to join accessibility evidence to pages and component instances without importing a 2 MB report or recreating a component graph.

It is **accessibility evidence only**. It contains no energy, performance, Lighthouse, Sitespeed, CO2 or component-ownership claim.

## 2. Shape

```json
{
  "schema": "a11y-accessibility-context/1",
  "generatedAt": "2026-11-17T15:35:12.598Z",
  "site": { "origin": "https://fosdem.org", "host": "fosdem.org" },
  "scan": { "issueNumber": 389, "scanTitle": "https://fosdem.org", "scannedAt": "...", "engines": ["equalaccess", "axe"], "scanContext": {} },
  "summary": {
    "observations": 813,
    "pages": 19,
    "patterns": 294,
    "withSelector": 289,
    "htmlOnly": 5,
    "withoutLocator": 0,
    "byCategory": { "navigation": 80, "link": 150 },
    "ownershipEstablished": false
  },
  "observations": [
    {
      "observationId": "a11y-obs-…",
      "patternId": "23c6d260…",
      "patternDisplayId": "A11Y-PAT-23C6D2602700",
      "rule": "landmark-unique",
      "engine": "axe",
      "wcagSc": ["131"],
      "actRuleIds": ["…"],
      "pageUrl": "https://fosdem.org/2027/",
      "selector": ".topnav",
      "locator": ".topnav",
      "locatorSource": "selector",
      "container": {
        "category": "navigation",
        "label": "Navigation",
        "element": "navigation",
        "basis": "selector-token",
        "confidence": "low",
        "ownershipEstablished": false
      },
      "sourceRef": "results[0].axe.failures[0]"
    }
  ]
}
```

## 3. Join contract for FES

FES owns the component graph. Open Scans supplies the accessibility observations.

Suggested join order:

1. Normalize and match `pageUrl` to `graph.pages[].url`.
2. Within that page, match `selector` to `graph.instances[].selector`:
   - exact match first;
   - a component instance selector that is an ancestor of the observation selector second;
   - otherwise keep the observation page-level and unmatched.
3. If both sides carry an explicit component id, use it; never match by label.
4. Keep matched and unmatched observations visible; do not drop unmatched accessibility evidence.
5. Preserve `locatorSource` and `container.ownershipEstablished: false`.

FES can use its own browser DOM to validate ancestor relationships where a string-only match is uncertain. Open Scans does not claim that a selector-derived container is the component that caused the finding.

## 4. Boundaries

- No energy/performance attribution.
- No WCAG conformance claim.
- No component ownership claim.
- No Lighthouse/Sitespeed/CO2 data in this artifact.
- No live API or MCP dependency.
- No automatic FES scan.
- No component graph duplication.

## 5. Current limitations

- `selector` is absent for some findings (`locatorSource: "html"` or `"none"`).
- Container candidates are selector/HTML-derived.
- A pattern can occur on multiple pages; this artifact uses one record per occurrence.
- The artifact is generated per scan; it does not yet provide a cross-scan trend store.
- FES importing this file is not implemented in Open Scans; it is the next cross-repository step.

## 6. Tests

`tests/unit/accessibility-context.test.mjs` covers occurrence grouping, selector/container fields, HTML-only/page-level evidence, CSV and schema. Run-scan tests verify the artifacts are generated.

Full suite: 843 tests, 838 pass, 1 pre-existing timezone failure, 4 skipped.

## 7. Example use

```text
Open Scans:  accessibility-context.json
                    │
                    ▼
FES:  page URL ──► graph.pages[].url
      selector ──► graph.instances[].selector
                    │
                    ▼
      "Related accessibility evidence" section
      (accessibility evidence, not energy/ownership)
```
