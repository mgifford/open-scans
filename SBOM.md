# Software Bill of Materials (SBOM)

This document tracks primary software components used by `open-scans`, including version and license data, to support legal and security risk management.

## Scope and source of truth

- **Repository snapshot**: `415806c` (PR 2; Lighthouse added in PR 3)
- **NPM inventory source**: `package.json` + `package-lock.json` (direct dependencies)
- **Python tooling source**: `pyproject.toml`
- **Project license**: [AGPL-3.0](./LICENSE)

## Runtime and toolchain components

| Component | Version / Constraint | Purpose | License | Source |
|---|---|---|---|---|
| Node.js | `>=24` | JavaScript runtime for scanner and tests | Node.js license terms | `package.json` |
| Python | `>=3.11` | Tooling runtime for `.kittify/scripts` | PSF license terms | `pyproject.toml` |
| uv | current (installer-managed) | Python dependency management | Apache-2.0 / MIT | `README.md`, `pyproject.toml` |

## Direct npm dependencies

| Package | Requested | Resolved | License |
|---|---|---|---|
| `@accesslint/core` | `^0.17.0` | `0.17.0` | MIT |
| `@axe-core/playwright` | `^4.14.0` | `4.14.0` | MPL-2.0 |
| `@cucumber/cucumber` | `^13.3.0` | `13.3.0` | MIT |
| `@siteimprove/alfa-cli` | `^0.84.2` | `0.84.2` | MIT |
| `@siteimprove/alfa-formatter-earl` | `^0.84.2` | `0.84.2` | MIT |
| `@siteimprove/alfa-formatter-json` | `^0.84.2` | `0.84.2` | MIT |
| `accessibility-checker` | `^4.0.30` | `4.0.30` | Apache-2.0 |
| `lighthouse` | `13.6.0` (exact) | `13.6.0` | Apache-2.0 |
| `playwright` | `^1.64.1` | `1.64.1` | Apache-2.0 |
| `semantica11y` | `^1.0.1` | `1.0.1` | MIT |
| `@playwright/test` | `^1.64.1` | `1.64.1` | Apache-2.0 |

`lighthouse` is pinned exactly because its audit set, metric names and configuration
flags change between releases; performance evidence records its version with every
measurement.

## External runtime images

| Image | Tag | Purpose | License | Notes |
|---|---|---|---|---|
| `sitespeedio/sitespeed.io` | `43.0.0` (pinned) | Optional targeted Sitespeed/Browsertime deep investigation | MIT | Docker image pulled at run time; image ID recorded in the run report; output-only volume mount and resource limits |

## Python dependencies

| Package | Requested | Resolved | License |
|---|---|---|---|
| `spec-kitty-cli` | unpinned (`pyproject.toml`) | managed by `uv lock` when synced | Check upstream package metadata |

## Version-control and update process

When dependencies change:

1. Update `package.json`, `package-lock.json`, and/or `pyproject.toml`.
2. Update this `SBOM.md` in the same commit or PR.
3. Note newly introduced licenses and verify compatibility with AGPL-3.0 distribution.
4. Re-run repository checks (`npm test`, `npm run lint`) and relevant CI workflows.

For stronger supply-chain traceability, future automation can generate CycloneDX/SPDX artifacts in CI and attach them to releases.
