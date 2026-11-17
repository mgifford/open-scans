# PR C — Component and semantic-region evidence

**Status:** implemented
**Format:** additive `component-association/1` inside `accessibility-comparison/1`
**Module:** `scanner/component-association.mjs`

---

## 1. What changed

- Added `componentContext` to every comparison finding.
- Added top-level `componentAssociations` indexes by semantic region, explicit component id and page.
- Preserved explicit component ids/type ids/labels already present in source findings.
- Added conservative semantic-region candidates from stable selector/element evidence.
- Added ACT Rule ids to comparison findings and optimization finding summaries.
- Added component/region evidence to Markdown, HTML and CSV exports.
- Added semantic-region columns to optimization investigation finding tables.
- Added tests and documentation.

No component graph was created, no FES schema was copied, and no ownership was inferred.

## 2. Design decisions

- **Explicit ids beat selectors.** If a source finding carries a component id, it is preserved at high confidence. Open Scans still does not verify ownership.
- **Selectors are low-confidence.** A `nav` element or `role="navigation"` supports a navigation region candidate, not component ownership.
- **Class names are not semantics.** `.nav-link` does not become navigation.
- **Labels are not identity.** Component ids are the only component index keys; two same-labelled components remain separate.
- **Unassociated findings stay visible.** They are counted, not dropped or forced into a region.
- **ACT mappings are preserved.** Existing `getActRuleIds` output is attached to comparison and optimization findings.

## 3. Tests

```text
node --test tests/unit/component-association.test.mjs
# 5 tests, 5 pass

node --test tests/unit/compare-scans.test.mjs tests/unit/optimization-investigation.test.mjs
# 36 tests, 36 pass
```

Full suite:

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 698 tests, 693 pass, 1 pre-existing timezone failure, 4 skipped
```

## 4. Deliberate omissions

- No FES `component-graph/1` import or copy.
- No visual-proximity or DOM-neighbour ownership.
- No component label matching.
- No automatic external investigation link (Phase D).
- No new scanner, crawler or dependency.

## 5. Next step

Phase D: optional, validated external investigation references (Firefox Energy Scanner/Vital Core) attached to reports or comparisons without making them required for ordinary scans.
