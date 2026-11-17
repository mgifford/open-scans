# External performance and energy investigation references

**Request schema:** [`external-investigation-references/1`](../../scanner/schemas/external-investigation-references.schema.json)
**Module:** [`scanner/external-investigations.mjs`](../../scanner/external-investigations.mjs)
**Attachment:** optional `externalInvestigations` on `accessibility-comparison/1` and `optimization-investigation/1`

---

## 1. Purpose

Allow a baseline/comparison accessibility report to point at a related performance or energy investigation without making Firefox Energy Scanner or Vital Core required for ordinary Open Scans operation.

The reference is **metadata only**:

- no external URL is fetched;
- no external schema is copied;
- no external scan or experiment is triggered;
- accessibility finding identities are not changed;
- the access scan remains independently useful.

## 2. Usage

Create a reference file:

```json
{
  "schema": "external-investigation-references/1",
  "references": [
    {
      "sourceProject": "firefox-energy-scanner",
      "sourceResultUrl": "https://mgifford.github.io/firefox-energy-scanner/",
      "investigationId": "fes-nav-2026-11-01",
      "relatedPageUrl": "https://example.gov/",
      "relatedComponent": {
        "componentId": "cmp-primary-nav",
        "componentTypeId": "type-primary-nav",
        "componentLabel": "Primary navigation"
      },
      "relatedAccessibilityFindingIds": ["A11Y-1234ABCD"],
      "description": "Navigation animation experiment on the primary navigation.",
      "observedAt": "2026-11-01",
      "referencedAt": "2026-11-17T12:00:00Z",
      "source": "Firefox Energy Scanner investigation"
    }
  ]
}
```

Attach it when comparing:

```bash
npm run compare:scans -- baseline.json optimized.json \
  --external-references references.json \
  --out comparison.json --summary comparison.md --html comparison.html
```

The optimization CLI reads the attached references from the comparison and carries them into `optimization-investigation/1`.

## 3. Fields

| Field | Required | Notes |
| :--- | :--- | :--- |
| `sourceProject` | yes | `firefox-energy-scanner`, `vital-core` or `other` |
| `sourceResultUrl` | yes | Public HTTP(S) result link; validated, not fetched |
| `investigationId` | yes | Source investigation identifier |
| `relatedPageUrl` | one relation required | Page URL in the comparison |
| `relatedResourceUrl` | one relation required | Resource link; metadata-only, not matched by string co-occurrence |
| `relatedComponent` | one relation required | `componentId`, `componentTypeId` and/or `componentLabel` |
| `relatedAccessibilityFindingIds` | no | Original A11Y occurrence/display/pattern identifiers |
| `description` | yes | Short description of the investigation |
| `observedAt` | no | ISO date/date-time when the investigation was observed |
| `referencedAt` | yes | ISO date/date-time when the reference was recorded |
| `source` | no | Free-text source label |

At least one of `relatedPageUrl`, `relatedResourceUrl` or `relatedComponent` is required.

## 4. Validation

- Maximum 100 references.
- URLs must be HTTP(S), public, and must not contain credentials. Localhost, private ranges and local hostnames are rejected.
- `sourceResultUrl` is validated but never fetched.
- IDs and descriptions have bounded lengths and safe characters.
- Unknown fields are rejected.
- A component label alone is allowed but produces a warning: labels are not used as identity and no component linkage is inferred.
- Invalid files fail the comparison before output is written.

## 5. Linkage

Linkage is evidence-based and conservative:

| Basis | What it links |
| :--- | :--- |
| `page-url` | The reference page URL matches a paired baseline/comparison page |
| `component-id` | An explicit `componentId` or `componentTypeId` matches a comparison finding's explicit component context |
| `accessibility-finding-id` | A supplied original A11Y occurrence/display/pattern id matches a comparison finding |

- Component **labels** are never used as identity.
- Resource URLs are recorded but not used to infer that a finding belongs to a resource.
- Unmatched references and accessibility IDs are preserved with low-confidence linkage, not dropped.
- `ownershipEstablished` is always `false`.

## 6. Evidence boundaries

An external performance investigation is **not** an accessibility failure.

An energy finding is **not** evidence of WCAG nonconformance.

An accessibility finding does **not** establish that a component consumes excessive energy.

The report prints this boundary in JSON, Markdown and HTML. The reference is a navigational association through shared pages, resources or explicitly identified components, not a combined score or conformance claim.

## 7. Relationship to Firefox Energy Scanner contracts

The published FES documentation defines component-graph, energy-timeline, evidence/energy-finding and related report contracts. Phase D deliberately does **not** copy or implement those schemas. It consumes only a small, optional reference record and does not depend on FES being available.

The FES documentation was reviewed for this metadata-only integration. A deeper JSON import would require a demonstrated user need, a stable published schema and a separate review.

## 8. Output

`externalInvestigations` entries contain:

- source project, result URL, investigation id, description, observed/referenced dates, source;
- related page/resource/component and accessibility finding ids;
- `evidenceType`: `performance-investigation`, `sustainability-investigation` or `external-investigation`;
- `metadataOnly: true`, `sourceFetched: false`;
- `linkage` with page ids, component finding ids, matched accessibility ids, unmatched ids, basis, confidence and `ownershipEstablished: false`;
- the evidence boundary text.

Markdown and HTML add a **Related performance and energy investigations** section with accessible links, captions and the same boundary. Optimization reports carry the references forward.

## 9. Deliberate omissions

- No live FES/Vital Core API.
- No automatic cross-repository trigger.
- No FES component-graph import.
- No energy measurement, CO2 calculation or combined score.
- No claim that a linked performance investigation changes an accessibility result.
- No change to existing accessibility finding IDs.
