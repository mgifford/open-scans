# ACT laboratory reports

This is a dedicated weekly workflow, not an issue-driven scan. It has no issue
title syntax and always runs every operational engine; do not use `SCAN:` or a
timed issue prefix to request it.

`state.json` is the cohort of the last successful weekly comparison. The
weekly workflow compares it with a freshly computed cohort and skips the scan
when every component is unchanged.

A cohort is the full set of inputs that can change a result:

- `fixtures` — hash of the fixture IDs, URLs, rules, expectations, targets and
  readiness selectors in the published `lab/fixtures.json`.
- `engines` — installed versions from `package-lock.json`, not declared ranges.
- `actMapping` — hash of `scanner/data/act-mapping.json`.
- `actRules` — SHA-256 of the upstream W3C ACT test-case dataset.
- `browser` — the browser used for the run.

`latest.json` holds the most recent observations. Each fixture/engine pair has:

- `execution` — `executed`, `notRun`, `unsupported` or `error`.
- `outcome` — an ACT outcome (`passed`, `failed`, `inapplicable`) or `null`.
- `status` — a reporting label that distinguishes between a real outcome, an
  engine that stayed silent (`notReported`), an engine with no rule mapping
  (`unmapped`), a closed shadow root (`unsupported`) and a failed run.

A missing finding is never converted into `passed`. Engine upgrades are not
applied automatically: a new engine version changes the cohort, triggers a
fresh comparison, and is reviewed separately.

This directory is deliberately outside `reports/` so that committing weekly
state does not trigger the Pages deployment or the Pages accessibility scan.

## Keeping engines and rules current

- **Installed engines:** the weekly job compares the versions actually resolved
  in `package-lock.json` against the latest npm release and reports any that are
  behind. It does not upgrade anything.
- **Updating engines:** run **Update accessibility engines (manual)**. It runs
  the unit tests, commits the new lockfile and leaves the change to be reviewed.
  The next weekly run detects the new versions as a new cohort.
- **ACT rules:** the SHA-256 of the upstream W3C ACT test-case dataset is part of
  the cohort. Any upstream change triggers a fresh comparison even when the
  engines have not moved. `scanner/data/act-mapping.json` is also hashed, so a
  mapping change is detected in the same way.
- **No change, no scan:** if fixtures, installed engines, mapping and upstream
  rule data all match the last successful run, the workflow skips the scan and
  says why in the job summary.

## Viewports and colour schemes

Every weekly run scans the fixtures at three viewports, each with
`colorScheme: both` (light and dark):

| Viewport | Size |
| :--- | :--- |
| `desktop` | 1280 × 800 |
| `tablet-portrait` | 768 × 1024 |
| `mobile-portrait` | 390 × 844 |

Per-viewport reports are stored as `latest-<viewport>.json`; `latest.json`
merges them and lists `viewports` plus a `viewport` field on every result.

## Using a different test bed

The workflow accepts two manual inputs:

- `site_root` — for example `https://example.org/my-lab/`
- `manifest_path` — relative to the root, default `lab/fixtures.json`

The fixture site must be public HTTPS and serve a manifest conforming to
`act-lab-fixture/2`, with fixtures on the same origin. Each case needs a stable
ID, a relative URL, a target scope and selector (or host for shadow roots), a
readiness selector, the ACT rule ID, an expected outcome and a review status.
A minimal manifest:

```json
{
  "schemaVersion": "act-lab-fixture/2",
  "cases": [{
    "id": "my-button",
    "urlPath": "fixtures/button/",
    "act": { "ruleId": "97a4e1" },
    "expected": "failed",
    "review": "unreviewed",
    "target": { "scope": "light-dom", "selector": "#target" },
    "readySelector": "[data-ready='true']"
  }]
}
```

Use `expected: null` plus `execution: "unsupported"` for a condition no engine
can expose (for example a closed shadow root). Expected outcomes remain
unreviewed hypotheses until a human records their evidence.

## ACT rules versus engine-specific rules

- `scanner/data/act-mapping.json` maps **engine rule IDs** to **ACT rule IDs**
  (many-to-many). ACT rule IDs are the six-character W3C identifiers
  (`674b10`, `97a4e1`); engine IDs are tool-specific (`aria-roles`,
  `sia-r21`).
- Each result records `mapping`:
  - `act-target` — a finding for the fixture's declared ACT rule.
  - `act-other` — a finding mapped to a different ACT rule
    (`otherActRules` lists them).
  - `engine-specific` — a finding whose engine rule has **no** ACT mapping
    (`engineSpecificRules` lists them).
  - `none` — no finding.
- `latest.json` reports `engineSpecificFindings` and `otherActFindings`
  separately from ACT outcomes. Engine-specific findings are useful evidence,
  but they are not ACT outcomes and must not be counted as rule coverage.

## Engine execution is part of the evidence

A null ACT outcome is only meaningful when the engine actually ran. Each
observation records `execution` (`executed`, `notRun`, `unsupported`, `error`)
and the workflow refuses to update `state.json` when an engine did not run or
errored. A later run retries the same cohort.

This matters because a multi-engine scan can silently lose an engine: for
example, a random browser that was not installed makes the Playwright-based
engines fail while the other engines still return results. A report or
comparison that counts those as clean results is invalid.
