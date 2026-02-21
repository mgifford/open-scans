# alfa-scan

Issue-driven accessibility scanning prototype using GitHub Pages and GitHub Actions.

## What it is

- Accepts URL batches from a GitHub Pages form
- Creates scan-request GitHub issues
- Runs accessibility scans in GitHub Actions
- Publishes comparison-ready results to GitHub Pages

## Scanning Triggers

Scans can be triggered in three ways:

1. **On Issue Creation/Edit**: When an issue with a title starting with "SCAN:" is created or edited, it automatically triggers a scan
2. **Daily Schedule**: All open "SCAN:" issues are automatically scanned daily at midnight UTC
3. **Manual Trigger**: You can manually trigger a scan of all open "SCAN:" issues by:
   - Going to the Actions tab
   - Selecting "Scan Issue Queue" workflow
   - Clicking "Run workflow"

## Current status

- Planning artifacts and work packages are generated under `kitty-specs/001-issue-driven-accessibility-scanner/`
- WP01 (foundation and guardrails) is implemented and moved to `for_review`

## Next workflow steps

1. Review WP01
2. Implement WP02 and WP03
3. Continue through reporting, hardening, and end-to-end validation WPs