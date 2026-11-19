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
