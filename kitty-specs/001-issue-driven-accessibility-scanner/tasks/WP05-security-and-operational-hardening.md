---
work_package_id: "WP05"
subtasks:
  - "T022"
  - "T023"
  - "T024"
  - "T025"
  - "T026"
title: "Security and Operational Hardening"
phase: "Phase 5 - Hardening"
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

# Work Package Prompt: WP05 - Security and Operational Hardening

## Review Feedback

*[This section is empty initially. Reviewers will populate it if work is returned.]*

## Objectives & Success Criteria

- Enforce authenticated submitter and eligible issue constraints.
- Protect workflow from unsafe/internal URL targeting and abuse patterns.
- Improve operational transparency through structured diagnostics and issue feedback.

## Context & Constraints

- Must support public reporting while minimizing sensitive metadata exposure.
- Runtime validations are required even when frontend checks pass.
- Least-privilege workflow permissions are mandatory.

## Implementation Command

- `spec-kitty implement WP05 --base WP03`

## Subtasks & Detailed Guidance

### Subtask T022 - Enforce authenticated requester gating

- **Purpose**: Ensure only authenticated GitHub users trigger scans.
- **Steps**:
  1. Validate issue author context for scan-eligible events.
  2. Reject malformed or unauthorized request patterns.
  3. Add clear issue comments when requests are rejected.
- **Files**: `.github/workflows/scan-request.yml`, `scanner/parse-issue.mjs`.
- **Parallel?**: No.
- **Notes**: Align messaging with spec clarification.

### Subtask T023 - Enforce public URL policy at runtime

- **Purpose**: Block internal/private network targets from workflow execution.
- **Steps**:
  1. Apply validator to all targets before scanner invocation.
  2. Record rejection reasons in run outputs.
  3. Ensure blocked targets never reach adapters.
- **Files**: `scanner/run-scan.mjs`, `scanner/validate-targets.mjs`.
- **Parallel?**: No.
- **Notes**: Include loopback/link-local/private CIDR checks.

### Subtask T024 - Add abuse controls and deduping strategy

- **Purpose**: Reduce accidental duplicate or excessive scan workload.
- **Steps**:
  1. Add workflow concurrency grouping by issue/request.
  2. Detect duplicate active requests and annotate behavior.
  3. Define cancellation or skip behavior for redundant runs.
- **Files**: `.github/workflows/scan-request.yml`, orchestration helpers.
- **Parallel?**: Yes.
- **Notes**: Keep behavior deterministic and documented.

### Subtask T025 - Harden workflow permissions and tokens

- **Purpose**: Minimize security exposure in CI/CD execution.
- **Steps**:
  1. Restrict permissions block for each workflow.
  2. Remove unneeded scopes and write operations.
  3. Document rationale for each elevated permission if required.
- **Files**: `.github/workflows/scan-request.yml`, `.github/workflows/publish-pages.yml`.
- **Parallel?**: Yes.
- **Notes**: Verify no secrets are logged in debug output.

### Subtask T026 - Add structured diagnostics and status updates

- **Purpose**: Improve operability and troubleshooting.
- **Steps**:
  1. Emit structured logs per target and per tool.
  2. Update source issue with run status transitions and report links.
  3. Capture terminal failure reasons for review.
- **Files**: `scanner/run-scan.mjs`, workflow steps for issue comments.
- **Parallel?**: No.
- **Notes**: Keep logs informative but non-sensitive.

## Test Strategy

- Negative tests for unauthorized/invalid requests.
- Runtime tests confirming blocked internal URLs never scan.
- Workflow tests for concurrency/duplicate request behavior.

## Risks & Mitigations

- Risk: over-restrictive gating rejects valid requests.
  - Mitigation: explicit rejection diagnostics and test coverage.
- Risk: permissive tokens create avoidable exposure.
  - Mitigation: least-privilege audit checklist in reviews.

## Review Guidance

- Confirm runtime URL policy enforcement is mandatory and tested.
- Confirm concurrency and dedupe behavior is explicit.
- Confirm logs and issue comments avoid sensitive data leakage.

## Activity Log

- 2026-02-20T20:28:38Z - system - lane=planned - Prompt created.
