# ALFA Output

This page documents the object returned by ALFA in open-scans and shows a local scan result so the structure is concrete.

## Returned Object

`runAlfaAudit(url)` returns a plain object with this shape:

```json
{
  "executed": true,
  "error": null,
  "counts": {
    "passed": 541,
    "failed": 36,
    "cantTell": 0,
    "inapplicable": 52
  },
  "failedRules": ["https://alfa.siteimprove.com/rules/sia-r111"],
  "passedRules": ["https://alfa.siteimprove.com/rules/sia-r1"],
  "failures": [
    {
      "rule": "https://alfa.siteimprove.com/rules/sia-r111",
      "xpath": "/a",
      "html": "<a href=\"https://example.com\">Example</a>",
      "message": "Target has insufficient size",
      "isDuplicate": false,
      "duplicateOf": null,
      "fingerprint": "8f4bbd411f48",
      "firstSeenAt": "2026-06-04T19:21:56.773Z",
      "patternId": "A11Y-1a6c60d2"
    }
  ],
  "outcomeCount": 629
}
```

If ALFA fails to run, the same object shape is returned with `executed: false` and `error` populated.

## Field Summary

- `executed` indicates whether the ALFA scan completed successfully.
- `error` contains the failure message when the scan does not complete.
- `counts` holds the raw ALFA outcome totals.
- `failedRules` lists the unique failed rule URIs.
- `passedRules` lists the unique passed rule URIs.
- `failures` contains one entry per finding, including duplicates and example metadata.
- `outcomeCount` is the total number of ALFA outcomes processed.

## Failure Entry Structure

Each entry in `failures` contains:

- `rule` - the ALFA rule URI
- `xpath` - the target selector or XPath-like path
- `html` - the HTML snippet that triggered the finding
- `message` - the human-readable failure message
- `isDuplicate` - whether the finding is a duplicate of another finding on the same page
- `duplicateOf` - the scanner key that this finding duplicates, when applicable
- `fingerprint` - a stable fingerprint for the finding
- `firstSeenAt` - the first time this fingerprint appeared in the report history
- `patternId` - a cross-page pattern identifier

## How open-scans Uses The Object

open-scans stores the ALFA object on each scanned URL result as `result.alfa` in `report.json`. The report generator then uses:

- `counts` for the ALFA totals section
- `failedRules` for the per-page summary tables
- `failures` for the detailed ALFA failure section
- `fingerprint`, `firstSeenAt`, and `patternId` for historical tracking in the report UI

## Local Scan Outcome

I ran a local scan against `https://mgifford.github.io/open-scans/`.

Scan-level outcome:

- 7 URLs scanned
- ALFA totals: 6734 passed, 1031 failed, 6 cantTell, 368 inapplicable
- axe totals: 6922 passed, 2 failed, 107 cantTell, 596 inapplicable

First scanned page outcome:

- URL: `https://mgifford.github.io/open-scans/`
- ALFA counts: 541 passed, 36 failed, 0 cantTell, 52 inapplicable
- Unique failed rules: 4
- Top repeated ALFA rule: `SIA-R111` with 3 non-duplicate findings

Example first failure:

- Rule: `https://alfa.siteimprove.com/rules/sia-r111`
- Message: `Target has insufficient size`
- HTML: `<a href="https://mgifford.github.io/top-task-finder">Top Task Finder</a>`
- Fingerprint: `8f4bbd411f48`

## Notes

ALFA is one of the supported scanner engines in open-scans. It is useful when you want ACT-rules-based results alongside axe-core and the other engines supported by the pipeline.