# PR B — Optimization accessibility investigation

**Status:** implemented
**Input:** `accessibility-comparison/1`
**Output:** `optimization-investigation/1`
**CLI:** `npm run investigate:optimization`

---

## 1. What changed

- Added an opt-in investigation layer over the Phase A comparison.
- Added request and result schemas.
- Added ten optimization scenarios and fifteen accessibility concerns.
- Reused existing comparison findings; no scanner, crawler or new rule engine.
- Added scenario-specific rule filters so unrelated findings are not attributed to an optimization.
- Added page scoping and manual-verification task lists.
- Added Markdown and accessible static HTML exports.
- Added JSON/Markdown/HTML CLI and tests.
- Added explicit `humanReviewRequired: true`, `conformanceClaim: false` and `functionalEquivalenceClaim: false`.

No existing scan, report or fingerprint format changed.

## 2. Design decisions

- **Reuse rather than rescan.** The investigation consumes existing comparison findings and preserves their IDs and evidence.
- **No new automated check was necessary.** Existing engines and behavioral indicators provide the automated evidence; reduced motion, forced colours, keyboard and screen-reader behaviour require human testing.
- **Absence is not a pass.** Concerns with no matching finding say so explicitly; `not-observed` remains qualified.
- **Scenario filters are narrow.** A navigation replacement excludes unrelated image and page-title findings; a lazy-loading scenario excludes unrelated navigation findings.
- **Components are context, not ownership.** Component names are recorded but not used to infer that a finding belongs to a component.
- **No claims.** The report does not claim WCAG conformance, functional equivalence or performance/energy savings.

## 3. Tests

```text
node --test tests/unit/optimization-investigation.test.mjs
# 14 tests, 14 pass
```

Coverage includes:

- navigation replacement finding the new icon-only button;
- excluding unrelated image/navigation findings;
- animation reduction as manual-only;
- lazy-loading image-detail changes;
- CSS removal requiring manual content/forced-colours checks;
- no-regression comparison still requiring manual review;
- incompatible conditions and engine changes;
- aliases and invalid scenarios;
- request redaction;
- accessible Markdown/HTML;
- CLI request-file flow;
- schema enforcement of no-conformance/no-equivalence claims.

## 4. Full-suite result

```text
npm test
# 690 tests, 685 pass, 1 pre-existing timezone failure, 4 skipped
```

(The count includes 13 new optimization tests. The pre-existing failure is the `generate-reports-html` timezone test.)

## 5. Deliberate omissions

- No component graph or ownership inference (Phase C).
- No external investigation references (Phase D).
- No comparison UI beyond static exports (Phase E).
- No new source-level checks for reduced motion or forced colours; these remain manual in this phase.
- No energy measurement or savings claim.
- No automatic trigger.

## 6. Next step

Phase C: associate comparison findings with components or semantic regions only where existing evidence supports it, preserving uncertainty and avoiding visual-proximity attribution.
