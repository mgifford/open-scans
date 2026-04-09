# Scan Report: Accessibility scans

- Issue: https://github.com/mgifford/open-scans/issues/252
- Submitted by: solros44-a11y
- Scanned at: 2026-04-09T17:02:20.122Z
- Engines used: AXE, ALFA
- Scan duration: 10.7 minutes
- Total URLs submitted: 16
- Accepted public URLs: 16
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 9 of 16 URLs (56%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 38095 passed, 2781 failed, 179 cantTell, 648 inapplicable
- axe outcomes: 24528 passed, 48 failed, 392 cantTell, 573 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 2506

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring) | 6 | 22 | **28** | Bostadsrättsförsäkring \| Se pris & försäkra din bostadsrätt - If |
| [View Page](https://www.if.se/privat/forsakringar/hemforsakring/hyresratt) | 5 | 22 | **27** | Hemförsäkring hyresrätt \| Få pris för bostad du hyr - If |
| [View Page](https://www.if.se/privat/kundservice) | 6 | 21 | **27** | Kontakta If kundservice \| Få hjälp med försäkringsärenden - If |
| [View Page](https://www.if.se/privat/forsakringar/personforsakring/livforsakring) | 4 | 19 | **23** | Teckna livförsäkring \| Ekonomisk trygghet för din familj - If |
| [View Page](https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring) | 3 | 20 | **23** | Villaförsäkring \| Försäkra huset och sakerna \| Se ditt pris - If |
| [View Page](https://www.if.se/privat/forsakringar/personforsakring/barnforsakring) | 4 | 18 | **22** | Barnförsäkring \| Försäkring för barn vid sjukdom och olycksfall - If |
| [View Page](https://www.if.se/privat/forsakringar/bilforsakring) | 1 | 19 | **20** | Bilförsäkring med högt betyg \| Se ditt pris & teckna direkt - If |
| [View Page](https://www.if.se/privat/erbjudanden) | 2 | 17 | **19** | Aktuella erbjudanden \| Rabatt på försäkringar - If |
| [View Page](https://www.if.se/privat) | 2 | 16 | **18** | Välkommen till If - Nordens största försäkringsbolag - If |
| [View Page](https://www.if.se/privat/kundservice/fragor-svar) | 2 | 16 | **18** | Frågor & svar \| Vanliga frågor om försäkringar - If |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R14](https://alfa.siteimprove.com/rules/sia-r14): Images have an accessible name or are decorative | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r14) |
| [SIA-R42](https://alfa.siteimprove.com/rules/sia-r42): Elements with an explicit ARIA role have the required parent element | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r42) |
| [SIA-R56](https://alfa.siteimprove.com/rules/sia-r56): Landmarks with the same role are distinguishable | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r56) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R68](https://alfa.siteimprove.com/rules/sia-r68): Accessible name contains the visible label text | **16** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r68) |
| [SIA-R18](https://alfa.siteimprove.com/rules/sia-r18): ARIA states are consistent with element semantics | **12** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r18) |
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **9** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **8** of 16 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **16** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **8** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| aria-allowed-role | **7** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| aria-allowed-attr | **6** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-attr) |
| color-contrast | **4** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| image-alt | **1** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 16 page(s) - 32 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**Issue**: The element is not owned by an element of its required context role

**HTML Pattern**:
```html
<li>...</li>
```

**XPath** (use in browser DevTools):
```
/li
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/li')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- *...and 11 more page(s)*

---

#### Pattern 2: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**Issue**: The visible text content of the element is not included within its accessible name

**HTML Pattern**:
```html
<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>
```

**XPath** (use in browser DevTools):
```
/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- *...and 11 more page(s)*

---

#### Pattern 3: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**Issue**: The element is not owned by an element of its required context role

**HTML Pattern**:
```html
<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">
                                    Privat
      ...</button>
```

**XPath** (use in browser DevTools):
```
/button[@id="mobile-menu-tab-1"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@id="mobile-menu-tab-1"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- *...and 11 more page(s)*

---

#### Pattern 4: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**Issue**: The element is not owned by an element of its required context role

**HTML Pattern**:
```html
<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">
                                    Företag
     ...</button>
```

**XPath** (use in browser DevTools):
```
/button[@id="mobile-menu-tab-2"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@id="mobile-menu-tab-2"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- *...and 11 more page(s)*

---

#### Pattern 5: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**Issue**: The element owns no elements as required by its semantic role

**HTML Pattern**:
```html
<ul class="if tabs small gap-0" role="tablist">...</ul>
```

**XPath** (use in browser DevTools):
```
/ul[@class="if tabs small gap-0"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/ul[@class="if tabs small gap-0"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- *...and 11 more page(s)*

---

#### Pattern 6: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**Issue**: The element owns no elements as required by its semantic role

**HTML Pattern**:
```html
<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>
```

**XPath** (use in browser DevTools):
```
/div[@id="op-tertiary-menu-0"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/div[@id="op-tertiary-menu-0"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- *...and 11 more page(s)*

---

#### Pattern 7: Affects 15 page(s) - 15 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />
```

**XPath** (use in browser DevTools):
```
/a[@class="if logo small"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="if logo small"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/personforsakring/barnforsakring
- *...and 10 more page(s)*

---

#### Pattern 8: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/privat/forsakringar/kundfordelar">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 9: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/privat/kundservice/mina-sidor">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 10: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/foretag/kundservice" title="Kundservice för företagskunder">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 11: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/privat/forsakringar/djurforsakring/kattforsakring/tips-kattagare">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 12: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/om-if/jobba-hos-oss">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 13: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/om-if/nyhetsrummet">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 14: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/om-if/kontakta-oss">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

#### Pattern 15: Affects 14 page(s) - 14 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a class="op if link standalone icon" href="/om-if/hallbarhet">...</a>
```

**XPath** (use in browser DevTools):
```
/a[@class="op if link standalone icon"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a[@class="op if link standalone icon"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/bilforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- *...and 9 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.if.se/privat | https://www.if.se/privat | OK | 200 | no | 40336 | 2 | 16 | 0 | 0 | 162 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
| https://www.if.se/privat/forsakringar | https://www.if.se/privat/forsakringar | OK | 200 | no | 36082 | 2 | 11 | 0 | 0 | 115 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
| https://www.if.se/privat/forsakringar/hemforsakring | https://www.if.se/privat/forsakringar/hemforsakring | OK | 200 | no | 36627 | 2 | 14 | 0 | 0 | 153 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique |
| https://www.if.se/privat/forsakringar/personforsakring/livforsakring | https://www.if.se/privat/forsakringar/personforsakring/livforsakring | OK | 200 | no | 42475 | 4 | 19 | 0 | 0 | 126 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R69 (Text has sufficient contrast with its background), SIA-R8 (Form elements have accessible labels) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, color-contrast, heading-order, landmark-unique |
| https://www.if.se/privat/forsakringar/bilforsakring | https://www.if.se/privat/forsakringar/bilforsakring | OK | 200 | no | 41907 | 1 | 19 | 0 | 0 | 178 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://www.if.se/privat/forsakringar/personforsakring/barnforsakring | https://www.if.se/privat/forsakringar/personforsakring/barnforsakring | OK | 200 | no | 51801 | 4 | 18 | 0 | 0 | 128 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R113, SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, color-contrast, landmark-unique |
| https://www.if.se/privat/forsakringar/hemforsakring/hyresratt | https://www.if.se/privat/forsakringar/hemforsakring/hyresratt | OK | 200 | no | 46088 | 5 | 22 | 0 | 0 | 170 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, landmark-unique |
| https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring | https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring | OK | 200 | no | 45315 | 6 | 22 | 0 | 0 | 171 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, landmark-unique |
| https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring | https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring | OK | 200 | no | 50954 | 3 | 20 | 0 | 0 | 170 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
| https://www.if.se/privat/kundservice | https://www.if.se/privat/kundservice | OK | 200 | no | 39866 | 6 | 21 | 0 | 0 | 170 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R2 (HTML elements have a valid lang attribute), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, heading-order, image-alt, landmark-unique |
| https://www.if.se/privat/kundservice/fragor-svar | https://www.if.se/privat/kundservice/fragor-svar | OK | 200 | no | 30516 | 2 | 16 | 0 | 0 | 163 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique |
| https://www.if.se/privat/kundservice/guider/betalningsguide | https://www.if.se/privat/kundservice/guider/betalningsguide | OK | 200 | no | 39842 | 3 | 15 | 0 | 0 | 158 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-unique |
| https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen | https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen | OK | 200 | no | 39012 | 2 | 15 | 0 | 0 | 164 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, landmark-unique |
| https://www.if.se/privat/vid-skada | https://www.if.se/privat/vid-skada | OK | 200 | no | 36411 | 2 | 15 | 0 | 0 | 154 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, landmark-unique |
| https://www.if.se/privat/erbjudanden | https://www.if.se/privat/erbjudanden | OK | 200 | no | 34085 | 2 | 17 | 0 | 0 | 164 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
| https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring | https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring | OK | 200 | no | 32763 | 2 | 15 | 0 | 0 | 160 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R42 (Elements with an explicit ARIA role have the required parent element), SIA-R53 (Headings follow a logical hierarchy), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique |

## Detailed Failure Information (ALFA)

### https://www.if.se/privat

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/kundfordelar/ifs-formansprogram" title="Så får du rabatt" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/om-if/hallbarhet/miljorapporter" class="if shortcut light" target="_self">...</a>`
- XPath: `/a[@class="if shortcut light"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

### https://www.if.se/privat/forsakringar

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/kundfordelar">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

### https://www.if.se/privat/forsakringar/hemforsakring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram?itm-campaign=forsta-aret">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/skadeforebyggande/idkapning" title="Så skyddar du dig mot id-stöld" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

### https://www.if.se/privat/forsakringar/personforsakring/livforsakring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/globalassets/se/dokument/privat/livforsakring-villkor.pdf" title="Villkor Livförsäkring">Villkor livförsäkring (PDF)</a>`
- XPath: `/a`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/personforsakring/berattelser/erik" title="Läs berättelsen om Erik" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<input type="range" role="slider" id="slider-id" class="if slider has-progress" aria-valuemin="18" aria-valuemax="60" aria-valuenow="40" max="60" min="18" step="1" style="--min: 18; --max: 60; --val: 40;" />`
- XPath: `/input[@id="slider-id"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 4.14:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R8: Form elements have accessible labels](https://alfa.siteimprove.com/rules/sia-r8)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The form field does not have an accessible name
- HTML: `<input type="range" role="slider" id="slider-id" class="if slider has-progress" aria-valuemin="500000" aria-valuemax="5000000" aria-valuenow="1500000" max="5000000" min="500000" step="500000" style="--min: 500000; --max: 5000000; --val: 1500000;" />`
- XPath: `/input[@id="slider-id"]`

### https://www.if.se/privat/forsakringar/bilforsakring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button type="button" aria-expanded="false" class=" if flex align-items-center" aria-controls="e9dbf4a6-f804-4f67-8fa0-5d6517197a33">...</button>`
- XPath: `/button[@class=" if flex align-items-center"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a title="Villkor Motorfordonsförsäkring" class="bullettext" href="/globalassets/se/dokument/privat/motorforsakring-villkor.pdf" target="_blank" rel="noopener">Villkor för motorfordonsförsäkring (PDF)</a>`
- XPath: `/a[@class="bullettext"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice/guider/betalningsguide">Läs mer om våra olika betalningssätt</a>`
- XPath: `/a`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/bilforsakring/resa-med-bil/gront-kort-for-bil" title="Läs om grönt kort" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: There is no content between this heading and the next
- HTML: `<h4>Trafikskada - person och egendom</h4>`
- XPath: `/h4`

### https://www.if.se/privat/forsakringar/personforsakring/barnforsakring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/globalassets/se/dokument/privat/barnforsakring-villkor.pdf" title="Villkor Barnförsäkring">Villkor barnförsäkring (PDF)</a>`
- XPath: `/a`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button class="clickablecard op if typography ui medium line-height-24" onclick="openDialog('a6a433be-9dc5-430b-8b12-a75ebf88fcbd-overlay')" aria-controls="a6a433be-9dc5-430b-8b12-a75ebf88fcbd-overlay" aria-haspopup="dialog">Om ditt barn blir inlagt på sjukhus</button>`
- XPath: `/button[@class="clickablecard op if typography ui medium line-height-24"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/personforsakring/barnforsakring/barn-i-bil/hyra-bilbarnstol" title="Så hyr du bilbarnstol" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

#### Rule: [SIA-R113](https://alfa.siteimprove.com/rules/sia-r113)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size and spacing
- HTML: `<a href="/globalassets/se/dokument/privat/barnforsakring-villkor-old.pdf" title="Föregående version av barnförsäkringsvillkor">Föregående villkor barnförsäkring (PDF)</a>`
- XPath: `/a`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 4.45:1 which is         below the required contrast of 4.5:1

### https://www.if.se/privat/forsakringar/hemforsakring/hyresratt

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button type="button" aria-label="Open tooltip">...</button>`
- XPath: `/button`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram?itm-campaign=forsta-aret">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/hyresratt#innehall">Jämför innehållet i våra hemförsäkringar</a>`
- XPath: `/a`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button class="clickablecard op if typography ui medium line-height-24" onclick="openDialog('a5d13997-e214-467d-8a31-b50bef581ec0-overlay')" aria-controls="a5d13997-e214-467d-8a31-b50bef581ec0-overlay" aria-haspopup="dialog">Om du kraschar mobilen</button>`
- XPath: `/button[@class="clickablecard op if typography ui medium line-height-24"]`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/cykelforsakring" title="Läs om cykelförsäkring" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<section class="op if section product-table-container   product-table-container-background-BLUE blue" id="innehall">...</section>`
- XPath: `/section[@id="innehall"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<table class="product-table  background-BE5" id="innehall">...</table>`
- XPath: `/table[@id="innehall"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 4.45:1 which is         below the required contrast of 4.5:1

### https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button type="button" aria-label="Open tooltip">...</button>`
- XPath: `/button`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram?itm-campaign=forsta-aret">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/bostadsrattsforsakring#innehall">Jämför innehållet i våra hemförsäkringar</a>`
- XPath: `/a`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button class="clickablecard op if typography ui medium line-height-24" onclick="openDialog('a5d13997-e214-467d-8a31-b50bef581ec0-overlay')" aria-controls="a5d13997-e214-467d-8a31-b50bef581ec0-overlay" aria-haspopup="dialog">Om du kraschar mobilen</button>`
- XPath: `/button[@class="clickablecard op if typography ui medium line-height-24"]`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/skadeforebyggande/idkapning" title="Så skyddar du dig mot id-stöld" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<section class="op if section product-table-container   product-table-container-background-BLUE blue" id="innehall">...</section>`
- XPath: `/section[@id="innehall"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<table class="product-table  background-BE5" id="innehall">...</table>`
- XPath: `/table[@id="innehall"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 4.45:1 which is         below the required contrast of 4.5:1

### https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button type="button" aria-label="Open tooltip">...</button>`
- XPath: `/button`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/forsakringar/kundfordelar/ifs-formansprogram?itm-campaign=forsta-aret">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/villaforsakring/huskollen">Läs mer om hur Huskollen fungerar</a>`
- XPath: `/a`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/personforsakring/sjuk-olycksfallsforsakring" class="if shortcut light" target="_self">...</a>`
- XPath: `/a[@class="if shortcut light"]`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/hemforsakring/villaforsakring/vaxthus" title="Fler tips för dig med växthus" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<section class="op if section product-table-container   product-table-container-background-BLUE blue" id="innehall">...</section>`
- XPath: `/section[@id="innehall"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<table class="product-table  background-BE5" id="innehall">...</table>`
- XPath: `/table[@id="innehall"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

### https://www.if.se/privat/kundservice

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if breadcrumb medium is-link" href="/privat" itemprop="item">...</a>`
- XPath: `/a[@class="if breadcrumb medium is-link"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if link standalone icon" href="/privat/kundservice/guider/forsakringsbehov">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="https://apps.apple.com/se/app/if-forsakringar/id1624689010" title="Ladda ner i App Store">Ladda ner Ifs app i App Store</a>`
- XPath: `/a`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice/in-english" title="Customer service in English" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

*... and 1 more failures for this rule*

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R2: HTML elements have a valid lang attribute](https://alfa.siteimprove.com/rules/sia-r2)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The image does not have an accessible name
- HTML: `<img src="https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1500" loading="eager" srcset="https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1000 1000w, https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1500 1500w" sizes="(min-width: 1240px) 1160px, 95vw" class="border-radius-12" />`
- XPath: `/img[@class="border-radius-12"]`

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4>Försäkringsfrågor:</h4>`
- XPath: `/h4`

**Failure 2:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

### https://www.if.se/privat/kundservice/fragor-svar

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<button class="if global-menu-action search" aria-expanded="false" aria-controls="header-search-bar" id="header-open-search-button">                                 Sök              ...</button>`
- XPath: `/button[@id="header-open-search-button"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if breadcrumb medium is-link" href="/privat" itemprop="item">...</a>`
- XPath: `/a[@class="if breadcrumb medium is-link"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice/guider/betalningsguide" title="Svar på betalningsfrågor" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 5:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="op-responsive-paragraph if typography paragraph x-large">H​är har vi samlat svaren på några av de vanligast...</p>`
- XPath: `/p[@class="op-responsive-paragraph if typography paragraph x-large"]`

### https://www.if.se/privat/kundservice/guider/betalningsguide

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice/guider/saga-upp-forsakringen" title="Så fungerar uppsägning" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice#oppet" title="Våra öppettider" class="if link standalone icon" target="_self">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is not allowed for the element on which it is specified

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h3>Hur ändrar jag betalningssätt på min försäkring?</h3>`
- XPath: `/h3`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

### https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="https://minasidor.if.se/min-profil/" class="if link standalone icon">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice/guider/betalningsguide" title="Frågor & svar om betalning" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element does not have a unique ID
- HTML: `<span id="expandable-section-arrow" class="if expandable-section-arrow">...</span>`
- XPath: `/span[@id="expandable-section-arrow"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

### https://www.if.se/privat/vid-skada

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if breadcrumb medium is-link" href="/privat" itemprop="item">...</a>`
- XPath: `/a[@class="if breadcrumb medium is-link"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/vid-skada#valj" class="if link standalone icon" target="_self">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is not allowed for the element on which it is specified

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>...</p>`
- XPath: `/p`

### https://www.if.se/privat/erbjudanden

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/forsakringar/personforsakring/barnforsakring/barn-i-bil/hyra-bilbarnstol" class="if link standalone icon" target="">...</a>`
- XPath: `/a[@class="if link standalone icon"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="/privat/kundservice/guider/forsakringsbehov" title="Boka tid för rådgivning" target="" class="if link standalone icon pt-8 pb-8 main-link">...</a>`
- XPath: `/a[@class="if link standalone icon pt-8 pb-8 main-link"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 4:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The attribute is not allowed for the element on which it is specified

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="op if typography ui large">...</p>`
- XPath: `/p[@class="op if typography ui large"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="op if typography heading small">10 % rabatt</p>`
- XPath: `/p[@class="op if typography heading small"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p class="op if typography ui large weight-bold">En försäkring och digital betalning</p>`
- XPath: `/p[@class="op if typography ui large weight-bold"]`

### https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a href="https://www.if.se/privat/forsakringar/bilforsakring/dack/dackbyte" class="if link" aria-label="Däckbyte \| Datum, regler och tips från vår försäkringsspecialist - If">https://www.if.se/privat/forsakringar/bilforsakrin...</a>`
- XPath: `/a[@class="if link"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="if logo small" href="/privat" aria-label="Till startsidan" title="If – Nordens ledande försäkringsbolag" />`
- XPath: `/a[@class="if logo small"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: Target has insufficient size
- HTML: `<a class="op if link standalone icon" href="/privat/forsakringar/bilforsakring">...</a>`
- XPath: `/a[@class="op if link standalone icon"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button type="button" class="if mobile-menu-action mobile-menu button login typography ui x-small" aria-label="Inloggningsväljare" aria-expanded="false">...</button>`
- XPath: `/button[@class="if mobile-menu-action mobile-menu button login typography ui x-small"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<a href="https://www.if.se/privat/forsakringar/bilforsakring/dack/dackbyte" class="if link" aria-label="Däckbyte \| Datum, regler och tips från vår försäkringsspecialist - If">https://www.if.se/privat/forsakringar/bilforsakrin...</a>`
- XPath: `/a[@class="if link"]`

#### Rule: [SIA-R42: Elements with an explicit ARIA role have the required parent element](https://alfa.siteimprove.com/rules/sia-r42)
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<li>...</li>`
- XPath: `/li`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-1" class="if tab ba-selection ui typography medium is-selected" role="tab" aria-selected="true" aria-controls="mobile-menu-ba-1">                                     Privat       ...</button>`
- XPath: `/button[@id="mobile-menu-tab-1"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element is not owned by an element of its required context role
- HTML: `<button id="mobile-menu-tab-2" class="if tab ba-selection ui typography medium " role="tab" aria-selected="false" aria-controls="mobile-menu-ba-2">                                     Företag      ...</button>`
- XPath: `/button[@id="mobile-menu-tab-2"]`

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-09
- Message: The heading skips one or more levels
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `/h4[@class="if typography ui medium weight-medium"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The highest possible contrast of the text is 5.66:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if tabs small gap-0" role="tablist">...</ul>`
- XPath: `/ul[@class="if tabs small gap-0"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<div id="op-tertiary-menu-0" class="if tertiary" role="menu" aria-label="Undermeny">...</div>`
- XPath: `/div[@id="op-tertiary-menu-0"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="if global-menu-list global">                 </ul>`
- XPath: `/ul[@class="if global-menu-list global"]`

## Detailed Failure Information (axe)

### https://www.if.se/privat

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkringar för mam..." src="https://v.imgi.no/2d..." srcset="https://v.imgi.no/2d..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.image > .size-100p.object-cover[loading="lazy"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="485bbaf5a628494f879213f5fbdfddc1">`
- XPath: `#\34 85bbaf5a628494f879213f5fbdfddc1`

### https://www.if.se/privat/forsakringar

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkringar för mam..." src="https://v.imgi.no/2d..." srcset="https://v.imgi.no/2d..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.size-100p`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="55941a2b68b848809af8661664e0d71d">`
- XPath: `#\35 5941a2b68b848809af8661664e0d71d`

### https://www.if.se/privat/forsakringar/hemforsakring

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#f39c4fd0bd814ff7ba258e00d20f71bd > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="f39c4fd0bd814ff7ba258e00d20f71bd">`
- XPath: `#f39c4fd0bd814ff7ba258e00d20f71bd`

### https://www.if.se/privat/forsakringar/personforsakring/livforsakring

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="super-title">Försäkringsguiden</span>`
- XPath: `.super-title`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#af2d9eb8a6ee4a3bacf4b2e0c0b243d9 > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="af2d9eb8a6ee4a3bacf4b2e0c0b243d9">`
- XPath: `#af2d9eb8a6ee4a3bacf4b2e0c0b243d9`

### https://www.if.se/privat/forsakringar/bilforsakring

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="91129da3b91447869beef329de4597c3">`
- XPath: `#\39 1129da3b91447869beef329de4597c3`

### https://www.if.se/privat/forsakringar/personforsakring/barnforsakring

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/privat/vid-skada/personskador" class="if button tonal icon-right">`
- XPath: `#skadehandelse > .section-content.op > .icon-right.tonal[href$="personskador"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="super-title">Försäkringsguiden</span>`
- XPath: `.super-title`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="1204e70ed99e475c8a6d4da817504e7d">`
- XPath: `#\31 204e70ed99e475c8a6d4da817504e7d`

### https://www.if.se/privat/forsakringar/hemforsakring/hyresratt

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Uthyrningsförsäkring"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkring för speci..." src="https://v.imgi.no/5z..." srcset="https://v.imgi.no/5z..." sizes="(max-width: 300px) 3..." role="presentation">`
- XPath: `.op-addon.narrow.focusindication:nth-child(2) > .op-addon-media-size.card-media > .object-cover.size-100p[role="presentation"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/privat/vid-skada/hus-hem" class="if button tonal icon-right">`
- XPath: `#skadehandelse > .section-content.op > .icon-right.tonal[href$="hus-hem"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\34 12907118e8742b4a611c81812eeb95d > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="412907118e8742b4a611c81812eeb95d">`
- XPath: `#\34 12907118e8742b4a611c81812eeb95d`

### https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Bostadsrättstillägg" src="https://v.imgi.no/ancaqcvgz6-MOODBOARD/2042" srcset="https://v.imgi.no/ancaqcvgz6-MOODBOARD/300 300w, https://v.imgi.no/ancaqcvgz6-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Bostadsrättstillägg"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Uthyrningsförsäkring"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkring för speci..." src="https://v.imgi.no/5z..." srcset="https://v.imgi.no/5z..." sizes="(max-width: 300px) 3..." role="presentation">`
- XPath: `.op-addon.narrow.focusindication:nth-child(3) > .op-addon-media-size.card-media > .object-cover.size-100p[role="presentation"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/privat/vid-skada/hus-hem" class="if button tonal icon-right">`
- XPath: `#skadehandelse > .section-content.op > .icon-right.tonal[href$="hus-hem"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#d797baaba15e4ca4b5d2e20ff95ade56 > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="d797baaba15e4ca4b5d2e20ff95ade56">`
- XPath: `#d797baaba15e4ca4b5d2e20ff95ade56`

### https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Uthyrningsförsäkring"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Specialförsäkring" src="https://v.imgi.no/67sumetdpr-MOODBOARD/2042" srcset="https://v.imgi.no/67sumetdpr-MOODBOARD/300 300w, https://v.imgi.no/67sumetdpr-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Specialförsäkring"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="15ae9558a61b40b4b459552b85b51085">`
- XPath: `#\31 5ae9558a61b40b4b459552b85b51085`

### https://www.if.se/privat/kundservice

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="I appen har du allti..." src="https://v.imgi.no/yl..." srcset="https://v.imgi.no/yl..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.reverse > .gap-0.section-content.op > .image > .size-100p.object-cover[role="presentation"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Vill du mejla oss?" src="https://v.imgi.no/at..." srcset="https://v.imgi.no/at..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `img[alt="Vill du mejla oss?"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\36 10eb5714df64b2d97ffd1d7d4e3ad23 > .weight-medium`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Images must have alternative text
- HTML: `<img src="https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1500" loading="eager" srcset="https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1000 1000w, https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1500 1500w" sizes="(min-width: 1240px) 1160px, 95vw" class="border-radius-12">`
- XPath: `.border-radius-12`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="610eb5714df64b2d97ffd1d7d4e3ad23">`
- XPath: `#\36 10eb5714df64b2d97ffd1d7d4e3ad23`

### https://www.if.se/privat/kundservice/fragor-svar

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\38 6a20388f61f4a569f88ad0ffd1bcbb3 > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="86a20388f61f4a569f88ad0ffd1bcbb3">`
- XPath: `#\38 6a20388f61f4a569f88ad0ffd1bcbb3`

### https://www.if.se/privat/kundservice/guider/betalningsguide

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h3>Hur ändrar jag betalningssätt på min försäkring?</h3>`
- XPath: `#\33 6b292b7956e4e3a99457e060d728e98 > .faq-title[itemprop="name"] > h3`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="e333fbc5128140c5bda9e56a3eb0beaf">`
- XPath: `#e333fbc5128140c5bda9e56a3eb0beaf`

### https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="e23b1a2606b54b7b902b867560416172">`
- XPath: `#e23b1a2606b54b7b902b867560416172`

### https://www.if.se/privat/vid-skada

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="040b7f8062bb4efab3addf4e70723227">`
- XPath: `#\30 40b7f8062bb4efab3addf4e70723227`

### https://www.if.se/privat/erbjudanden

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Rabatt när du hyr bi..." src="https://v.imgi.no/bs..." srcset="https://v.imgi.no/bs..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.object-cover.size-100p[role="presentation"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="1ca2eace533f4eada2d3b5bb3d1aacae">`
- XPath: `#\31 ca2eace533f4eada2d3b5bb3d1aacae`

### https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\39 6de09f5307f40f7bdb0f25b0fad395f > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="96de09f5307f40f7bdb0f25b0fad395f">`
- XPath: `#\39 6de09f5307f40f7bdb0f25b0fad395f`

