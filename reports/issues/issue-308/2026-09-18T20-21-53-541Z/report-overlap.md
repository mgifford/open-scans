# Scanner Overlap Report: CMS.gov —

- Generated at: 2026-09-18T20:21:41.582Z
- Overlap entries: 0
- Duplicate findings in later scanners: 3161

## Scanner Summary

| Scanner | Failed | Unique Failed | Duplicates |
|---|---:|---:|---:|
| axe | 8 | 8 | 0 |
| ALFA | 3450 | 3450 | 0 |
| Equal Access | 1279 | 1078 | 201 |
| AccessLint | 290 | 290 | 0 |
| QualWeb | 197 | 197 | 0 |

## Overlap Matrix (shared findings by scanner pair)

| Scanner | axe | ALFA | Equal Access | AccessLint | QualWeb |
| ---: | ---: | ---: | ---: | ---: | ---: |
| axe | 8 | 0 | 0 | 0 | 0 |
| ALFA | 0 | 626 | 0 | 0 | 0 |
| Equal Access | 0 | 0 | 1078 | 0 | 0 |
| AccessLint | 0 | 0 | 0 | 290 | 0 |
| QualWeb | 0 | 0 | 0 | 0 | 61 |

## Top Shared Findings

No cross-scanner overlaps were detected.
## ACT Consensus Overlaps (axe + ALFA)

These findings map to the same ACT rule in both axe and ALFA on the same page and locator, so they are strong dedupe candidates.

| ACT Rule | URL | Scanners | Locator | Rule IDs | Occurrences | Example |
|---|---|---|---|---|---:|---|
| de46e4 | https://www.cms.gov/data-research/monitoring-programs/improper-payment-measurement-programs/exchange-improper-payment-measurement-eipm/improper-payment-findings | alfa, qualweb | (no-locator) | alfa: https://alfa.siteimprove.com/rules/sia-r7 \| qualweb: QW-ACT-R22 | 2 | alfa: https://alfa.siteimprove.com/rules/sia-r7 |

