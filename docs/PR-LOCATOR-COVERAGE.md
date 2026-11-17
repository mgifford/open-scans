# Equal Access locators and locator coverage

**Status:** implemented
**Scope:** close the largest locator gap and make remaining gaps measurable.

---

## 1. Root cause

Equal Access reports a DOM path as `path.dom`. The scanner was reading only `path.xpath`, which is absent for many issues, so findings such as `element_attribute_deprecated` became HTML-only and could not be assigned a container.

## 2. Fix

`extractEqualAccessXPath()` now reads:

1. `issue.path.dom`;
2. `issue.path.xpath`;
3. legacy `issue.xpath`.

The pattern inventory now uses a stable `id` from the recorded HTML when no engine selector exists, and uses an explicit ARIA role (for example `role="button"` on an `<a>`) before the element's default role.

The pattern inventory now reports locator coverage:

- `selector` — all occurrences have a selector/XPath;
- `mixed` — some do;
- `html-only` — only the HTML snippet is available;
- `none` — no element evidence.

This is shown in JSON, Markdown, HTML and `patterns.csv`.

## 3. Playwright MCP

Playwright MCP is useful for **manual or agent-assisted locator recovery**:

- open the page;
- inspect the accessibility tree, DOM and bounding box;
- find a stable selector/container for a specific finding;
- record it for a reviewed mapping or a follow-up rule.

It is **not** a scan-time dependency:

- it would require an MCP client/server around ordinary scans;
- it does not automatically map an engine finding to a locator;
- it adds non-determinism and operational cost;
- ordinary Open Scans runs must remain independent of AI/MCP availability.

The runtime fix is to retain the locators the engines already return and to use the existing Playwright page where a browser-level lookup is genuinely needed. MCP can help investigate the remaining gap; it should not be inserted into every scan.

## 4. Tests

```text
node --test tests/unit/engine-locators.test.mjs
2 tests, 2 pass

node --test tests/unit/pattern-inventory.test.mjs
10 tests, 10 pass
```

Full suite:

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 730 tests, 725 pass, 1 pre-existing timezone failure, 4 skipped
```

## 5. Scan comment links

The scan-completion comments now include `patterns.csv` Pages and GitHub fallback links, in both the issue-request and scheduled queue workflows.

## 6. Next

- Re-scan selected reports so Equal Access `path.dom` values populate the inventory.
- Review `locator_coverage=html-only/none` rows in `patterns.csv`.
- Use Playwright MCP manually for the unresolved pages; do not add it to the scan runtime without a separate design review.
- If reviewed selector overrides are needed, add them as explicit metadata with provenance rather than inferring ownership.
