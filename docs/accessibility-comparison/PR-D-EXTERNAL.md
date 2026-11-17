# PR D — Optional external investigation references

**Status:** implemented
**Request format:** `external-investigation-references/1`
**Attachment:** optional `externalInvestigations` on comparison and optimization reports

---

## 1. What changed

- Added a versioned external-reference request schema.
- Added public-URL/ID/date validation without fetching any URL.
- Added `externalInvestigations` metadata to `accessibility-comparison/1`.
- Carried references into `optimization-investigation/1`.
- Added page, explicit-component and accessibility-finding linkage.
- Added Markdown and accessible HTML sections with the evidence boundary.
- Added JSON schema support and tests.
- Documented the metadata-only FES/Vital Core relationship.

No scan engine, report ID, component graph or FES schema was copied or changed.

## 2. Boundaries enforced

- External performance investigation ≠ accessibility failure.
- Energy finding ≠ WCAG nonconformance.
- Accessibility finding ≠ excessive energy use.
- References are optional; ordinary Open Scans runs do not require FES or Vital Core.
- URLs are validated but not fetched.
- Component labels are not identity.
- Resource URLs are metadata-only.
- Unmatched references remain visible at low confidence.
- `ownershipEstablished: false`.

## 3. Tests

```text
node --test tests/unit/external-investigations.test.mjs
# 8 tests, 8 pass
```

Coverage includes valid FES/Vital Core references, page/finding/component linkage, label-only warnings, private URL rejection, missing/unknown fields, unmatched references, redaction, Markdown/HTML boundaries, CLI attachment and schema versioning.

The optimization test suite also verifies references are carried into its Markdown/HTML.

Full suite:

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 707 tests, 702 pass, 1 pre-existing timezone failure, 4 skipped
```

`npm run lint` and `npm run test:bdd` pass; the BDD suite reports 1 passed and 3 browser-dependent skipped scenarios.

## 4. Deliberate omissions

- No live external API.
- No automatic cross-repository scan.
- No FES `component-graph/1`, `energy-timeline/1` or `energy-finding/1` import.
- No energy/CO2 calculation or combined score.
- No external data treated as accessibility evidence.

## 5. Next step

Phase E: make the comparison/optimization evidence easier to use in the report interface, including component/region grouping, manual verification and related-investigation links, while preserving the no-JavaScript baseline.
