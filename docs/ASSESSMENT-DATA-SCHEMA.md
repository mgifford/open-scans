# Assessment data schema

**Version:** document `a11y-assessment-document/1`, record `a11y-assessment-record/1`,
coverage `a11y-assessment-coverage/1`.
**Machine-readable:** [`scanner/schemas/a11y-assessment-document.schema.json`](../scanner/schemas/a11y-assessment-document.schema.json),
[`scanner/schemas/a11y-assessment-coverage.schema.json`](../scanner/schemas/a11y-assessment-coverage.schema.json).
**Validator:** [`scanner/assessment/records.mjs`](../scanner/assessment/records.mjs) — the
JavaScript validator is authoritative; the JSON Schema is the published contract.

---

## 1. Three artifacts, three lifetimes

| Artifact | Written by | Lifetime |
| :--- | :--- | :--- |
| `report.json` + evidence artifacts | the scan | immutable |
| `assessment-coverage.json` | the scan, derived from the above | immutable per scan |
| Assessment document | a human, in a browser | user-owned, exportable |

An assessment document never contains automated findings. It references them by
report identity and, optionally, by finding fingerprint.

---

## 2. Assessment document

```json
{
  "schema": "a11y-assessment-document/1",
  "schemaVersion": 1,
  "documentId": "doc_open-scans-issue-398-2026-11-23T21-03-45-397Z",
  "createdAt": "2026-11-26T15:00:00.000Z",
  "updatedAt": "2026-11-26T15:10:00.000Z",
  "exportedAt": null,
  "importedAt": null,
  "reportAssociation": {
    "reportId": "open-scans/issue-398/2026-11-23T21-03-45-397Z",
    "issueNumber": 398,
    "issueUrl": "https://github.com/mgifford/open-scans/issues/398",
    "scanTitle": "Complete Audit - Record a Goose",
    "scannedAt": "2026-11-23T21:03:45.397Z"
  },
  "catalogue": {
    "catalogueVersion": "wcag-spine-2.2-2026-11-26",
    "contentSha256": "0fa9693e…"
  },
  "records": [],
  "notes": ""
}
```

### `reportAssociation.reportId`

The stable report identity: `open-scans/issue-<n>/<scannedAt>`. It is deliberately not
a URL and not a file name. Renaming or moving a downloaded report does not change its
identity, and two reports served from the same URL do not collide.

### Versioning

`schemaVersion` is an integer. A reader accepts only the version it implements and
rejects everything else with an explicit message. Adding a field is a minor change;
changing a field's meaning or removing it is a new `schemaVersion`.

Unknown fields in a record are dropped by normalisation, not carried forward. This is
intentional: an imported document must not be able to smuggle state the reader does
not understand.

---

## 3. Record

One record is one observation by one reviewer at one time. It is not a verdict on a
success criterion.

```json
{
  "schemaVersion": 1,
  "recordId": "rec_6ec2…",
  "kind": "finding",
  "assessmentDefinitionId": "manual-keyboard-access",
  "assessmentCatalogueVersion": "wcag-spine-2.2-2026-11-26",
  "upstreamSource": null,
  "title": "Skip link does not move focus",
  "testedUrl": "https://example.com/checkout",
  "pageState": "after submitting an invalid card number",
  "component": "Checkout form",
  "semanticRegion": "main",
  "elementIdentity": {
    "locator": "#skip-to-form",
    "locatorType": "css",
    "accessibleName": "Skip to form",
    "htmlSnippet": "<a id=\"skip-to-form\" href=\"#payment\">Skip to form</a>"
  },
  "occurrenceId": null,
  "method": "assistive-technology",
  "scope": "One participant using NVDA 2026.1 on Firefox 145; keyboard only.",
  "wcag": ["2.4.1"],
  "act": [],
  "arrmRoles": ["Front-End Development"],
  "functionalPerformance": [],
  "outcome": "failed",
  "reviewerNotes": "Activating the link scrolls but focus stays on the banner.",
  "reproductionSteps": "1. Load checkout\n2. Tab to the skip link\n3. Press Enter",
  "expectedBehaviour": "Focus moves to the payment fieldset.",
  "actualBehaviour": "Focus remains on the skip link.",
  "userImpact": "A screen reader user must tab through the whole header again.",
  "applicabilityEvidence": "",
  "environment": {
    "browser": "Firefox",
    "browserVersion": "145",
    "os": "Windows 11",
    "assistiveTechnology": "NVDA",
    "assistiveTechnologyVersion": "2026.1",
    "viewport": "1280x800",
    "zoom": "100%",
    "preferences": { "colorScheme": "light", "forcedColors": "none", "reducedMotion": "no-preference" }
  },
  "evidence": [
    { "type": "note", "description": "Focus outline stayed on the banner", "ref": "" }
  ],
  "testingDate": "2026-11-26",
  "recordedAt": "2026-11-26T15:10:00.000Z",
  "importedAt": null,
  "reviewerRole": "Accessibility specialist",
  "verification": "self-attested",
  "provenance": { "source": "open-scans-report", "sourceAssessmentFormat": null, "sourceRecordId": null },
  "severity": "serious",
  "relationToAutomated": "none",
  "automatedFinding": null,
  "conflictsWith": [],
  "staleSource": false,
  "requiresRevalidation": false,
  "journey": null
}
```

### Kinds

| `kind` | Meaning |
| :--- | :--- |
| `procedure` | A guided manual procedure was performed |
| `finding` | A barrier no automated engine identified |
| `evaluation` | A professional or experiential evaluation |
| `journey` | A task-level observation across steps or pages |

### Outcomes

`not-evaluated`, `in-progress`, `passed`, `failed`, `not-applicable`, `inconclusive`,
`requires-professional-review`, `requires-experiential-evaluation`.

- **Passed** means "passed within the scope recorded on this record". It is never a
  conformance claim.
- **Not applicable** requires `applicabilityEvidence` or a reviewer explanation.
- **Failed** requires `actualBehaviour` or a reviewer note.
- A missing instance is never recorded as a pass.

### Methods

`guided-manual`, `professional-evaluation`, `assistive-technology`, `lived-experience`,
`user-research`, `automated-review`, `ai-assisted`.

Methods are not interchangeable. `automated-review` means a person reviewed automated
evidence; it is not new human testing. `ai-assisted` is unverified assistance and may
not be presented as professional expertise or lived experience.

### Verification and freshness

- `verification`: `unreviewed`, `self-attested`, `independently-reviewed`, `disputed`.
- `requiresRevalidation` + `staleSource`: the record came from a different scan and
  must be rechecked against the current page.

Verification and freshness are separate fields. Neither is encoded in `outcome`.

### Conflict preservation

Two records for the same requirement with different outcomes both survive. The later
import adds `conflictsWith: ["<existing recordId>"]` and the existing record is updated
to link back. Nothing is overwritten.

### Privacy

- No real name is required. `reviewerRole` is a role, not an identity.
- Do not record medical information or disability status.
- Do not record passwords, tokens, cookies, authentication headers or sensitive form
  values.
- Exported files may contain page URLs and the notes written about them. Local browser
  storage is not encrypted and is not a confidential store.

---

## 4. Coverage artifact

See the JSON Schema for the full shape. The important invariants:

- `criteria` has one entry per criterion in the catalogue, sorted numerically.
- `automated.state` is one of `observed`, `not-observed`, `no-automated-rules`.
- `counts.withRecordedHumanReview` is always `0` in a scan artifact, because a scan
  cannot contain human records. The report's runtime updates the displayed value from
  local or imported records.
- Every count that describes a subset names the denominator, for example
  `withAutomatedRuleObserved` alongside `criteriaTotal`.
- `manifest` carries the engine execution detail and the rule-granularity limitation.

---

## 5. Storage key

```
open-scans:assessment:v1:<reportId>
```

Example:

```
open-scans:assessment:v1:open-scans/issue-398/2026-11-23T21-03-45-397Z
```

The schema version is part of the key, so a future version cannot read a previous
version's data under the same key. The value is the document JSON above.

---

## 6. Merge algorithm

```
for each incoming record:
  if no local record with the same recordId:
      add (normalised, importedAt set, revalidation flags applied)
  else if identical after removing importedAt/conflictsWith:
      skip
  else:
      copy with a new recordId, conflictsWith = [existing id], provenance.sourceRecordId = old id
      link the existing record back to the copy
```

`describeAssociation()` classifies the import before any state changes:

| Situation | Result |
| :--- | :--- |
| Same `reportId` | compatible; merge allowed |
| Same issue, different scan | merge allowed; records marked for revalidation |
| Different issue | `foreignReport`; merge and replace blocked |

---

## 7. Stability and compatibility commitments

1. `schemaVersion` changes only when a reader must behave differently.
2. New optional fields do not bump the version, but a strict consumer will still see
   them. Additive fields are announced in the handoff before consumers upgrade.
3. `reportId` format is stable: `open-scans/issue-<n>/<scannedAt>`.
4. Record ids are opaque. Never derive meaning from them.
5. The Markdown issue report is a projection of a record; changing it does not change
   the record.

---

## 8. Migration notes for consumers (including VITAL)

- Consume `assessment-coverage.json` for coverage; do not recompute from
  `report.json` and call it the same thing.
- Consume `a11y-assessment-document/1` for human records.
- Treat `withRecordedHumanReview: 0` in a scan artifact as "no records in this
  artifact", not "no testing was done".
- Never merge records across reports automatically.
- Preserve `verification`, `requiresRevalidation`, `staleSource` and `conflictsWith`
  when storing a record elsewhere.
