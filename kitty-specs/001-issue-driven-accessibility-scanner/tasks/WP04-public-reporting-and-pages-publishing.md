---
work_package_id: "WP04"
subtasks:
  - "T017"
  - "T018"
  - "T019"
  - "T020"
  - "T021"
title: "Public Reporting and Pages Publishing"
phase: "Phase 4 - Reporting"
lane: "planned"
dependencies:
  - "WP03"
assignee: ""
agent: ""
shell_pid: ""
review_status: ""
reviewed_by: ""
history:
  - timestamp: "2026-02-20T20:28:38Z"
    lane: "planned"
    agent: "system"
    shell_pid: ""
    action: "Prompt generated via /spec-kitty.tasks"
---

# Work Package Prompt: WP04 - Public Reporting and Pages Publishing

## Review Feedback

*[This section is empty initially. Reviewers will populate it if work is returned.]*

## Objectives & Success Criteria

- Produce human-readable and machine-readable comparison outputs per run.
- Publish reports publicly via GitHub Pages.
- Provide historical run index with issue traceability.

## Context & Constraints

- Report outputs must include ALFA-vs-axe comparison and redirect fields.
- Reports are public: avoid leaking sensitive metadata.
- Keep output schema stable and versioned.

## Implementation Command

- `spec-kitty implement WP04 --base WP03`

## Subtasks & Detailed Guidance

### Subtask T017 - Implement comparison aggregation

- **Purpose**: Transform tool outputs into usable comparison deltas.
- **Steps**:
  1. Build per-URL comparison model (`alfa` vs `axe`).
  2. Compute aggregate summary metrics.
  3. Include scanner failures/skips in totals.
- **Files**: `scanner/compare-results.mjs`.
- **Parallel?**: No.
- **Notes**: Keep deterministic key ordering for diffs.

### Subtask T018 - Generate markdown + json artifacts

- **Purpose**: Support stakeholders and automation consumers.
- **Steps**:
  1. Output run-level JSON summary in `reports/runs/<runId>/`.
  2. Output human-readable markdown summary with links to raw tool data.
  3. Include redirect fields and source issue metadata.
- **Files**: `scanner/compare-results.mjs`, `reports/runs/`.
- **Parallel?**: No.
- **Notes**: Ensure paths are Pages-compatible.

### Subtask T019 - Implement Pages publish workflow

- **Purpose**: Make report artifacts publicly accessible.
- **Steps**:
  1. Add publishing workflow or extend existing pipeline.
  2. Push report outputs to configured Pages source.
  3. Surface published report URL in issue update/comment.
- **Files**: `.github/workflows/publish-pages.yml`, `.github/workflows/scan-request.yml`.
- **Parallel?**: No.
- **Notes**: Maintain least-privilege publish permissions.

### Subtask T020 - Maintain historical index

- **Purpose**: Allow discovery of previous runs.
- **Steps**:
  1. Append/update `reports/index.json` per completed run.
  2. Include run timestamp, issue number, and report URL.
  3. Keep ordering by most recent run.
- **Files**: `reports/index.json`, report generator logic.
- **Parallel?**: Yes.
- **Notes**: Keep index update idempotent.

### Subtask T021 - Add schema/link validation tests

- **Purpose**: Prevent report regression in CI.
- **Steps**:
  1. Validate generated report JSON against expected schema.
  2. Validate markdown includes required sections and links.
  3. Validate index entries resolve to generated run paths.
- **Files**: `tests/integration/report-output.test.mjs`.
- **Parallel?**: Yes.
- **Notes**: Use fixture runs for repeatable assertions.

## Test Strategy

- Schema validation for JSON outputs.
- Snapshot/assertion tests for markdown summary.
- Publish workflow smoke run in non-production branch.

## Risks & Mitigations

- Risk: report format drift breaks consumers.
  - Mitigation: schema validation in CI.
- Risk: broken pages publication path.
  - Mitigation: pre-publish path checks and post-publish URL verification.

## Review Guidance

- Confirm artifacts include both machine and human-readable outputs.
- Confirm public links and issue traceability are present.
- Confirm redirect data is visible in both output forms.

## Activity Log

- 2026-02-20T20:28:38Z - system - lane=planned - Prompt created.
