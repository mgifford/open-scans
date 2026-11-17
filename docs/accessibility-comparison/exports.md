# Comparison JSON and CSV exports

**JSON schema:** [`accessibility-comparison/1`](../../scanner/schemas/accessibility-comparison.schema.json)
**CSV generator:** `comparisonToCsv()` in [`scanner/compare-scans.mjs`](../../scanner/compare-scans.mjs)
**CLI:** `--out comparison.json --csv comparison.csv`

---

## 1. JSON

The JSON export is the canonical comparison record and keeps:

- baseline and comparison scan ids, issue URLs, titles, timestamps, releases, source report paths, engines, scan contexts and coverage;
- page mappings, including explicit/url pairing and per-page counts/status codes;
- conditions and differences;
- every finding, grouped by classification, with:
  - occurrence, pattern, display and canonical identity fields;
  - engine, rule, WCAG and ACT Rule ids;
  - locator, HTML, message and evidence reference;
  - component/semantic-region context and ownership flag;
  - details-changed fields;
  - baseline/comparison evidence objects;
- component/region indexes;
- optional external investigation references and linkage;
- manual verification tasks;
- coverage gaps;
- limitations.

No existing field was removed or renamed. Phase C/D/E/F fields are additive and optional for older consumers.

## 2. CSV

The CSV export is one row per finding. The original Phase A columns remain first and in the same order. New metadata columns are appended.

### 2.1 Original columns

`logical_page_id`, `baseline_url`, `comparison_url`, `classification`, `engine`, `rule_id`, `title`, `confidence`, `confirmed_remediation`, `qualification`, `baseline_occurrence_id`, `comparison_occurrence_id`.

### 2.2 Phase C/D/F appended columns

| Column | Meaning |
| :--- | :--- |
| `semantic_region` | Selector-derived region candidate |
| `component_id` | Explicit component id, when present |
| `association_basis` | `explicit-component`, `selector-token` or `none` |
| `association_confidence` | `high`, `low` or `unknown` |
| `act_rule_ids` | ACT Rule ids, semicolon-separated |
| `wcag_sc` | WCAG SC numbers, semicolon-separated |
| `wcag_level` | Raw level tag from the source, when present |
| `impact` | Source severity/impact |
| `match_basis` | How the finding was matched |
| `page_mapping` | `url` or `explicit` |
| `baseline_scan_id` | Baseline scan identity |
| `comparison_scan_id` | Comparison scan identity |
| `baseline_issue_url` | Baseline issue URL |
| `comparison_issue_url` | Comparison issue URL |
| `baseline_release` | Baseline release identifier |
| `comparison_release` | Comparison release identifier |
| `baseline_source_report` | Baseline report path |
| `comparison_source_report` | Comparison report path |
| `baseline_browser` | Baseline browser |
| `comparison_browser` | Comparison browser |
| `baseline_viewport` | Baseline viewport, e.g. `1280x800` |
| `comparison_viewport` | Comparison viewport |
| `baseline_colour_scheme` | Baseline colour scheme |
| `comparison_colour_scheme` | Comparison colour scheme |
| `external_investigation_ids` | Linked investigation ids, semicolon-separated |
| `coverage_gap_kinds` | Unique coverage-gap kinds, semicolon-separated |
| `limitations` | Comparison limitations, joined with ` \| ` |
| `baseline_pattern_id` | Baseline pattern id |
| `comparison_pattern_id` | Comparison pattern id |
| `display_id` | Human-readable occurrence display id |
| `identity_source` | `canonical`, `legacy` or `derived` |
| `baseline_evidence_ref` | Baseline report evidence reference |
| `comparison_evidence_ref` | Comparison report evidence reference |
| `component_label` | Explicit component label, when present; not used as identity |

## 3. Compatibility

- Existing columns keep their names and order.
- New columns are appended.
- Older comparison JSON without component, external or manual fields still exports.
- The JSON schema remains `accessibility-comparison/1`; Phase C/D/E/F changes are additive.
- Existing report formats are untouched.

## 4. Sanitization

- JSON/CSV are derived from the already-redacted comparison.
- External reference metadata is redacted before attachment.
- CSV cells are quoted and double quotes are escaped.
- Cells beginning with a formula-like character (`=`, `+`, `-`, `@`, optionally after whitespace) are prefixed with `'` to reduce spreadsheet formula injection risk.

## 5. Boundaries

The exports contain no combined accessibility/performance/carbon score and no conformance claim. External investigations remain metadata-only. No-longer-observed findings remain `confirmedRemediation: false`.
