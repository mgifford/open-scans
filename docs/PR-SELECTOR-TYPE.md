# PR — explicit selector type in accessibility evidence

**Status:** implemented; requires coordinated FES parser acceptance before merge
**Fields:** `selectorType` on observations and pattern inventory rows

---

## 1. Problem

The context and pattern inventory carried a `selector` string but not its
language. Consumers had to infer CSS versus XPath from the engine name. That is
unsafe:

- axe targets are CSS;
- AccessLint selectors are CSS;
- Equal Access DOM paths are XPath;
- Alfa may expose a CSS selector or only an XPath;
- HTML-only and page-level findings have no selector at all.

FES correctly refused broad selector matching while this was ambiguous.

## 2. Change

Add `selectorType`:

| Value | Meaning |
| :--- | :--- |
| `css` | CSS selector, including a recovered HTML `id` selector |
| `xpath` | XPath expression |
| `html` | HTML snippet only; no selector |
| `none` | Page-level finding; no element locator |
| `unknown` | Engine/locator combination that cannot be classified safely |

Pattern inventory rows aggregate to `css`, `xpath`, `html`, `mixed`, `none` or
`unknown`.

## 3. Engine mapping

| Source | Type |
| :--- | :--- |
| axe target | `css` |
| AccessLint selector | `css` |
| HTML `id` recovery | `css` |
| Equal Access `path.dom` / XPath | `xpath` |
| Alfa `location.selector` | `css` |
| Alfa `location.xpath` only | `xpath` |
| Semantica11y HTML | `html` |
| Reflow/page-level | `none` |
| Unrecognised engine with an XPath-ish field | `unknown` |

## 4. Compatibility

`selectorType` is additive and optional in the JSON schemas so older artifacts
remain schema-valid.

**FES compatibility requirement:** the current FES `a11y-accessibility-context/1`
parser is strict. It must accept an optional `selectorType` field before this
Open Scans change is merged, or new Open Scans artifacts will fail FES
validation.

Recommended FES change:

```ts
selectorType: z.enum(['css', 'xpath', 'html', 'none', 'unknown']).optional()
```

and prefer the explicit field over engine inference:

```ts
const type = observation.selectorType ?? selectorTypeOf(observation);
```

Only compare CSS text with FES component selectors. Never compare XPath text.

## 5. Tests

```text
node --test tests/unit/pattern-inventory.test.mjs tests/unit/accessibility-context.test.mjs
18 tests, 18 pass

node --test tests/unit/run-scan-output.test.mjs
2 tests, 2 pass (with PUPPETEER_CACHE_DIR)
```

Real report check:

```text
issue 391: css 5123, html 362, none 1
issue 389: css 558, xpath 489, html 8
```

The issue 389 result confirms Equal Access XPath is no longer silently treated
as CSS.

## 6. Merge order

1. FES accepts optional `selectorType`.
2. Merge this Open Scans change.
3. FES prefers the explicit field; update its docs to remove inference where
   the field is present.

Do not merge this before step 1.
