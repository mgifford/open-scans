# Manual review decisions

Automated correlation cannot always establish that two engine observations are
the same target or the same failure. This directory records those human
decisions, in version control, reviewed through pull requests.

Reviews are **separate from engine evidence**. They never modify
`observations.json`, `correlation.json` or `report.json`; they produce a
separate `review-status.json` that says what a person concluded and why.

## Format

`reviews/decisions.json`:

```json
{
  "schemaVersion": "a11y-review-decisions/1",
  "decisions": [
    {
      "reviewId": "RV-0001",
      "target": { "kind": "correlated-issue", "id": "<correlatedIssueId>" },
      "decision": "confirmed-equivalent",
      "rationale": "Both engines point at the same image and describe the same missing alt text.",
      "author": "github-handle",
      "date": "2026-11-19",
      "evidenceRefs": ["report.json#/results/3/axe/failures/0"],
      "supersedes": null
    }
  ]
}
```

| Field | Required | Notes |
| :--- | :--- | :--- |
| `reviewId` | yes | Unique within the file |
| `target.kind` | yes | `correlated-issue` or `observation` |
| `target.id` | yes | `correlatedIssueId` or `observationId` from the artifacts |
| `decision` | yes | One of the values below |
| `rationale` | yes | At least 10 characters; say what you checked |
| `author` | yes | GitHub handle or name |
| `date` | yes | `YYYY-MM-DD` |
| `evidenceRefs` | no | Pointers into `report.json` or other artifacts |
| `supersedes` | no | `reviewId` this decision replaces |

### Decisions

| Decision | Meaning |
| :--- | :--- |
| `confirmed-same-target` | Two locators identify the same element |
| `confirmed-equivalent` | Two engine observations describe the same failure |
| `confirmed-separate` | Similar-looking findings are distinct problems |
| `incorrect-observation` | The engine observation is wrong; the evidence still stands |
| `insufficient-evidence` | Cannot decide from the available evidence |
| `reviewed-expectation` | A fixture expectation has been reviewed and is authoritative |

## Applying reviews

```bash
# Review a correlation artifact produced by a scan or by reprocess-evidence
node scanner/apply-reviews.mjs path/to/correlation.json \
  --reviews reviews/decisions.json \
  --out path/to/output
```

Output `review-status.json` (`a11y-review-status/1`) contains:

- `statuses`: every matched review with its decision, rationale, author, date and evidence refs;
- `unreviewed`: correlated issues with no decision;
- `unmatched`: decisions that matched nothing — reported, never silently dropped;
- `summary.byDecision`: counts per decision.

Ids embed the document hash, so a decision written for one scan will not match
a later scan of a changed page. That is intentional: the review applies to that
evidence, and the unmatched report tells you the evidence has moved.

## Reviewing in a pull request

1. Run a scan or `node scanner/reprocess-evidence.mjs <report.json>`.
2. Open `correlation.json` and find the `correlatedIssueId` (or an
   `observationId`) you want to judge.
3. Add a decision to `reviews/decisions.json` with a rationale.
4. Run `apply-reviews.mjs` and check `unmatched` is empty.
5. Open a pull request containing only the decisions change.
