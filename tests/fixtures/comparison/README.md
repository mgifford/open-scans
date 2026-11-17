# Accessibility comparison fixtures

- `baseline-report.json` — production baseline with navigation, image and title findings.
- `optimized-report.json` — optimized variant that reduces markup but introduces an icon-only
  button with no accessible name (`button-name`) and changes image details. It also removes the
  baseline ALFA title finding, which is reported as **no longer observed**, not as fixed.
- `no-regression-report.json` — same findings as the baseline, demonstrating a comparison with
  no newly detected accessibility findings. This does **not** prove functional equivalence.
- `pages/nav-*.html` — small source fixtures showing the accessible baseline, the regression, and
  a variant that keeps accessible names. They are demonstration sources; the comparison runs on
  stored Open Scans reports, not by scanning these pages.
