# Performance execution workflow

**Validation workflow:** `.github/workflows/performance-request.yml`
**Execution workflow:** `.github/workflows/performance-scan.yml`
**Dispatcher:** `scanner/run-performance-issue.mjs`

---

## 1. Why there are two workflows

`performance-request.yml` validates a `PERF:` request only. It launches no browser and commits nothing.

`performance-scan.yml` executes a validated request. It is separate so that:

- validation stays cheap and reviewable;
- browser and Docker providers are explicit;
- a validation failure cannot start an expensive provider;
- the raw artifacts and committed compact evidence have different retention.

## 2. Trigger

An open issue whose title starts with `PERF:`.

The issue template supplies mode, domain, URLs, limits, browser/profile and optional evidence sources.

## 3. Modes

| Mode | Provider | Current workflow |
| :--- | :--- | :--- |
| `reuse` | Existing Open Scans / FES / Vital Core / Open Site Review evidence | Supported |
| `light` | Existing evidence plus bounded Lighthouse | Supported |
| `deep` | Targeted Sitespeed Docker investigation | Supported |
| `combined` | Light + deep | Validated but not executable yet; fails with a clear message |

The dispatcher deliberately refuses to silently run one provider for `combined`.

## 4. Published artifacts

On success, the workflow commits:

```text
reports/performance/issue-<n>/<timestamp>/
  performance-result.json
  performance-evidence.json
  performance-run.json
  performance-summary.md
```

Raw Lighthouse/Sitespeed artifacts are uploaded as a 14-day Actions artifact and are **not committed**.

The issue comment links to the Pages summary/evidence and the GitHub run report, then closes the issue.

## 5. Local equivalent

```bash
node scanner/parse-performance-issue.mjs issue-event.json --out request.json

node scanner/run-performance-issue.mjs request.json \
  --out .scan-output/performance \
  --artifacts-dir .scan-output/performance/artifacts
```

Chrome for Lighthouse must be available through `CHROME_PATH` or the Playwright Chromium install. Sitespeed requires Docker.

## 6. Boundaries

- No accessibility engine runs in reuse/light/deep performance modes.
- Lighthouse is Chromium lab evidence with simulated throttling.
- Sitespeed figures are targeted deep evidence; CO2.js output is modelled transfer emissions, not measured energy.
- No Firefox physical-energy experiment is run.
- No aggregate performance, energy or carbon score is produced.
- A `PERF:` issue never becomes a `SCAN:`.

## 7. Troubleshooting

- **No workflow run:** verify the issue title starts with `PERF:` and the issue is open.
- **Validation fails:** read the validation job summary and the failure comment.
- **Light fails with no Chrome:** the workflow installs Playwright Chromium; local runs need `CHROME_PATH`.
- **Deep fails:** confirm Docker can pull `sitespeedio/sitespeed.io:43.0.0` and the runner has enough time.
- **Combined fails:** run `light` and `deep` separately until combined execution is implemented.
