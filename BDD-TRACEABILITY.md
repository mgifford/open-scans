# BDD Traceability Map

This map links a focused subset of `FEATURES.md` to executable Gherkin acceptance scenarios and existing tests.

## Scope

- Issue creation from the web form
- URL validation preview behavior
- Scan-request workflow guardrails

## Traceability Table

| FEATURES.md reference | Gherkin scenario | Existing test coverage | Gap status |
|---|---|---|---|
| §3.1 Creating a Scan; §15.1 index.html form; §15.2 submit.js GitHub integration | `tests/bdd/features/issue-creation.feature` → “Generated issue link includes SCAN title and selected scan context” | `tests/unit/submit.test.mjs` covers title/body construction and context formatting logic | **Closed** with browser-level acceptance coverage |
| §4.1 Client-Side Validation (`submit.js`) | `tests/bdd/features/url-validation.feature` → “Preview separates accepted and rejected URLs with reasons” | `tests/unit/submit.test.mjs` covers parsing and validation functions | **Closed** with live UI preview behavior coverage |
| §7.7 Accessibility of the Report (pattern reference), §15.1 Frontend form accessibility expectations | `tests/bdd/features/issue-creation.feature` → “Submission page keeps key accessibility structure” | `tests/unit/playwright-accessibility.test.mjs` covers generic axe rules on sample HTML | **Partially closed**; now includes form-level landmark/label checks |
| §3.3 Issue Lifecycle; §14.1 `scan-request.yml` issue-triggered scan behavior | `tests/bdd/features/scan-request-workflow.feature` → “Scan request workflow only runs for open SCAN issues and includes BDD quality gate” | Workflow behavior historically validated through runtime Actions execution | **Closed** with executable workflow guardrail assertions |

## Notes

- `FEATURES.md` remains the technical reference.
- `tests/bdd/features/*.feature` is the living acceptance contract for user-facing behavior in this scope.
