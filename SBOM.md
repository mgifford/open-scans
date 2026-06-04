# Software Bill of Materials (SBOM)

This document tracks primary software components used by `open-scans`, including version and license data, to support legal and security risk management.

## Scope and source of truth

- **Repository snapshot**: `a4b29e9`
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
| `@accesslint/core` | `^0.8.7` | `0.8.7` | MIT |
| `@axe-core/playwright` | `^4.11.1` | `4.11.1` | MPL-2.0 |
| `@cucumber/cucumber` | `^12.9.0` | `12.9.0` | MIT |
| `@qualweb/act-rules` | `^0.7.6` | `0.7.6` | ISC |
| `@qualweb/core` | `^0.8.7` | `0.8.7` | ISC |
| `@siteimprove/alfa-cli` | `^0.81.3` | `0.81.3` | MIT |
| `@siteimprove/alfa-formatter-earl` | `^0.81.3` | `0.81.3` | MIT |
| `@siteimprove/alfa-formatter-json` | `^0.81.3` | `0.81.3` | MIT |
| `accessibility-checker` | `^4.0.12` | `4.0.12` | Apache-2.0 |
| `playwright` | `^1.60.0` | `1.60.0` | Apache-2.0 |

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
