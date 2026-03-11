# Scan Report: Fel website

- Issue: https://github.com/mgifford/open-scans/issues/93
- Submitted by: JayNiker
- Scanned at: 2026-03-11T00:23:56.193Z
- Engines used: ALFA
- Scan duration: 0.8 minutes
- Total URLs submitted: 11
- Accepted public URLs: 11
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 7645 passed, 417 failed, 108 cantTell, 463 inapplicable
- axe outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 226

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.flightemissions.eu/en/cookie-policy) | 0 | 25 | 0 | 0 | 0 | **25** | Cookie Policy \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en) | 0 | 24 | 0 | 0 | 0 | **24** | EU Flight Emissions Label (FEL) \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en) | 0 | 24 | 0 | 0 | 0 | **24** | EU Flight Emissions Label (FEL) \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en/participating-airlines) | 0 | 24 | 0 | 0 | 0 | **24** | Participating Airlines \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en) | 0 | 24 | 0 | 0 | 0 | **24** | EU Flight Emissions Label (FEL) \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en/accessibility-statement) | 0 | 23 | 0 | 0 | 0 | **23** | Accessibility statement \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en/frequently-asked-questions) | 0 | 22 | 0 | 0 | 0 | **22** | Frequently asked questions \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en/data-aggregators) | 0 | 21 | 0 | 0 | 0 | **21** | Data Aggregators \| EU Flight Emissions Label (FEL) |
| [View Page](https://www.flightemissions.eu/en/download/44) | 0 | 4 | 0 | 0 | 0 | **4** | https://www.flightemissions.eu/en/download/44 |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **8** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **8** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **8** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R69](https://alfa.siteimprove.com/rules/sia-r69): Text has sufficient contrast with its background | **8** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r69) |
| [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61) | **6** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r61) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **5** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |
| [SIA-R64](https://alfa.siteimprove.com/rules/sia-r64) | **1** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r64) |
| [SIA-R1](https://alfa.siteimprove.com/rules/sia-r1): id attributes are unique within the document | **1** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r1) |
| [SIA-R4](https://alfa.siteimprove.com/rules/sia-r4): Page has a descriptive title | **1** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r4) |
| [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59) | **1** of 11 | [View Rule](https://alfa.siteimprove.com/rules/sia-r59) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

✅ No axe failed rules detected!

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 8 page(s) - 24 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>
```

**XPath** (use in browser DevTools):
```
/title[@id="website-logo-title"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/title[@id="website-logo-title"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 2: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>
```

**XPath** (use in browser DevTools):
```
/g[@id="EASA_Logo"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/g[@id="EASA_Logo"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 3: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<g id="Group 3">...</g>
```

**XPath** (use in browser DevTools):
```
/g[@id="Group 3"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/g[@id="Group 3"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 4: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="blue square"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="blue square"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 5: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<g id="EU stars">...</g>
```

**XPath** (use in browser DevTools):
```
/g[@id="EU stars"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/g[@id="EU stars"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 6: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector" d="M9.11998 28.748L8.09342 28.195L6.62782 28.7467L7.4355 27.8083L6.49982 27.2105L7.99742 27.1828L8.86526 26.2616L8.9971 27.1841L10.4729 27.2118L9.0611 27.8083L9.11998 28.748Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 7: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_2" d="M14.8492 29.7457L13.7792 29.194L12.334 29.7457L13.0905 28.8074L12.11 28.2109L13.6204 28.1831L14.4396 27.2633L14.6291 28.1831L16.1216 28.2122L14.7328 28.8087L14.8492 29.7457Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_2"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_2"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 8: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_3" d="M21.2121 28.7203L20.1229 28.1686L18.7213 28.719L19.4201 27.782L18.4166 27.1868L19.9117 27.159L20.6733 26.2405L20.9101 27.159L22.3885 27.1881L21.0457 27.7833L21.2121 28.7203Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_3"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_3"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 9: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_4" d="M26.2848 25.9607L25.207 25.4091L23.8605 25.9594L24.5081 25.0237L23.5123 24.4272L24.9664 24.4008L25.6755 23.4823L25.9379 24.4008L27.3779 24.4312L26.0915 25.0251L26.2848 25.9607Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_4"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_4"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 10: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_5" d="M28.6554 22.2523L27.6122 21.7007L26.3181 22.2497L26.9363 21.314L25.9725 20.7175L27.3728 20.6911L28.0499 19.7739L28.3098 20.6938L29.6973 20.7241L28.4621 21.3167L28.6554 22.2523Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_5"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_5"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 11: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_6" d="M27.8809 18.5096L26.8915 17.9567L25.632 18.5043L26.2515 17.57L25.3401 16.9708L26.688 16.9471L27.3625 16.0299L27.5878 16.9497L28.9216 16.9814L27.7184 17.5739L27.8809 18.5096Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_6"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_6"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 12: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="EASA bird" d="M1.79199 5.46819C1.79199 5.46819 8.30847 6.33524 14.967 7.46228C18.8928 8.12741 19.9053 9.63189 20.7501 11.9348C20.928 12.4205 21.7318 12.3663 22.5242 11.5798C23.5046 10.6045 24.3776 9.61341 25.143 9.10004C27.3446 7.62592 29.2595 8.07726 31.3638 7.94265C31.7683 7.91758 31.9833 7.88327 31.9833 7.9321C31.9833 7.9994 31.7862 8.06011 31.3638 8.23563C30.2835 8.68565 28.7795 9.42865 28.0115 10.3379C26.7085 11.8886 26.1542 15.9177 20.6656 19.7264C15.9552 22.994 13.1494 23.0033 9.85599 24.3309C5.27743 26.1772 2.80575 28.7797 2.80575 28.7797C2.80575 28.7797 4.32255 24.6793 6.85951 22.3381C9.53343 19.8716 11.6736 18.4845 12.0538 16.2278C12.6797 12.5089 1.79199 5.46819 1.79199 5.46819Z" fill="#FBBC39" />
```

**XPath** (use in browser DevTools):
```
/path[@id="EASA bird"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="EASA bird"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 13: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<g id="EASA">...</g>
```

**XPath** (use in browser DevTools):
```
/g[@id="EASA"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/g[@id="EASA"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 14: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_7" d="M37.3005 33.1505V2.06464H53.1968V6.47381H42.6573V14.8474H51.7286V19.2117H42.6573V28.7427H53.3274V33.1519H37.3018L37.3005 33.1505Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_7"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_7"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

#### Pattern 15: Affects 8 page(s) - 16 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)
**Issue**: The element does not have a unique ID

**HTML Pattern**:
```html
<path id="Vector_8" d="M75.2666 33.1506C74.7482 30.8345 74.144 28.162 73.4963 25.7126H63.2589C62.6112 28.2069 62.0058 30.7896 61.4451 33.1506H56.0461C58.7238 22.3724 61.7907 12.2621 65.3325 2.06332H71.8989C75.5712 12.4851 78.7238 22.9953 81.2301 33.1506H75.2678H75.2666ZM72.5018 21.3483C71.5085 17.7402 70.3846 13.9553 69.2621 10.2139C68.96 9.32308 68.6566 8.25411 68.3981 7.31843H68.3546C68.0525 8.25411 67.7504 9.32308 67.4906 10.2139C66.368 13.8655 65.2442 17.7402 64.2509 21.3483H72.5018Z" fill="white" />
```

**XPath** (use in browser DevTools):
```
/path[@id="Vector_8"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/path[@id="Vector_8"]')`
5. The element will be highlighted

**Affected Pages**:
- https://flightemissions.eu
- https://flightemissions.eu/en/accessibility-statement
- https://flightemissions.eu/en
- https://flightemissions.eu/en/cookie-policy
- https://flightemissions.eu/en/data-aggregators
- *...and 3 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://flightemissions.eu | https://www.flightemissions.eu/en | OK | 200 | yes | 8410 | 0 | 24 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R78 (Headings of same level have text content between them) |
| https://flightemissions.eu/en/accessibility-statement | https://www.flightemissions.eu/en/accessibility-statement | OK | 200 | yes | 3678 | 0 | 23 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
| https://flightemissions.eu/en | https://www.flightemissions.eu/en | OK | 200 | yes | 4732 | 0 | 24 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R78 (Headings of same level have text content between them) |
| https://flightemissions.eu/en/cookie-policy | https://www.flightemissions.eu/en/cookie-policy | OK | 200 | yes | 3792 | 0 | 25 | 0 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R64, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R78 (Headings of same level have text content between them) |
| https://flightemissions.eu/en/data-aggregators | https://www.flightemissions.eu/en/data-aggregators | OK | 200 | yes | 4736 | 0 | 21 | 0 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
| https://flightemissions.eu/en/frequently-asked-questions | https://www.flightemissions.eu/en/frequently-asked-questions | OK | 200 | yes | 4005 | 0 | 22 | 0 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
| https://flightemissions.eu/en/participating-airlines | https://www.flightemissions.eu/en/participating-airlines | OK | 200 | yes | 5694 | 0 | 24 | 0 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R78 (Headings of same level have text content between them) |
| https://flightemissions.eu/en/eu-flight-emissions-label-fel | https://www.flightemissions.eu/en | OK | 200 | yes | 5202 | 0 | 24 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R3 (lang attribute has a valid language code), SIA-R53 (Headings follow a logical hierarchy), SIA-R61, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background), SIA-R78 (Headings of same level have text content between them) |
| https://flightemissions.eu/en/download/44 | https://www.flightemissions.eu/en/download/44 | OK | 200 | yes | 5098 | 0 | 4 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R87 (First focusable element is a skip link) |
| https://flightemissions.eu/en/download/57 | https://www.flightemissions.eu/en/download/57 | OK | 200 | yes | 1209 | 0 | 0 | 0 | 0 | 0 | No request found in response |
| https://flightemissions.eu/en/download/58 | https://www.flightemissions.eu/en/download/58 | OK | 200 | yes | 1156 | 0 | 0 | 0 | 0 | 0 | No request found in response |

## Detailed Failure Information (ALFA)

### https://flightemissions.eu

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 14 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="heading">European Commission endorses Air France-KLM’s coop...</h3>`
- XPath: `/h3[@class="heading"]`

### https://flightemissions.eu/en/accessibility-statement

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 13 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3>Compliance status</h3>`
- XPath: `/h3`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

### https://flightemissions.eu/en

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 14 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="heading">European Commission endorses Air France-KLM’s coop...</h3>`
- XPath: `/h3[@class="heading"]`

### https://flightemissions.eu/en/cookie-policy

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 13 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3> </h3>`
- XPath: `/h3`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--active menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--active menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R64](https://alfa.siteimprove.com/rules/sia-r64)

**Failure 1:**
- Message: The heading does not have an accessible name
- HTML: `<h3> </h3>`
- XPath: `/h3`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3> </h3>`
- XPath: `/h3`

### https://flightemissions.eu/en/data-aggregators

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 13 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--active menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--active menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

### https://flightemissions.eu/en/frequently-asked-questions

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 13 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3 class="heading">FAQs for Airlines and data integrators</h3>`
- XPath: `/h3[@class="heading"]`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

### https://flightemissions.eu/en/participating-airlines

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 13 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5>...</h5>`
- XPath: `/h5`

**Failure 2:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--active menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--active menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="heading">European Commission endorses Air France-KLM’s coop...</h3>`
- XPath: `/h3[@class="heading"]`

### https://flightemissions.eu/en/eu-flight-emissions-label-fel

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<title id="website-logo-title">EASA (European Union Aviation Safety Agency)</title>`
- XPath: `/title[@id="website-logo-title"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<g id="EASA_Logo" clip-path="url(#clip0_2148_7664)">...</g>`
- XPath: `/g[@id="EASA_Logo"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<g id="Group 3">...</g>`
- XPath: `/g[@id="Group 3"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<path id="blue square" d="M3.58272 34.5166H3.58239C1.8966 34.5178 0.5 33.1012 0.5 31.3254V3.88981C0.5 2.1126 1.89672 0.695923 3.58272 0.695923H30.1926C31.8797 0.695923 33.2741 2.11236 33.2741 3.88849V31.3241C33.2741 33.1013 31.8786 34.5166 30.1926 34.5166H3.58272Z" fill="#222F64" stroke="white" />`
- XPath: `/path[@id="blue square"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<g id="EU stars">...</g>`
- XPath: `/g[@id="EU stars"]`

*... and 14 more failures for this rule*

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h5 class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"> Sitemap</h5>`
- XPath: `/h5[@class="menu__link menu__link--footer menu__link--with-sub menu__link--empty"]`

#### Rule: [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61)

**Failure 1:**
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 1:1 which is         below the required contrast of 4.5:1

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="heading">European Commission endorses Air France-KLM’s coop...</h3>`
- XPath: `/h3[@class="heading"]`

### https://flightemissions.eu/en/download/44

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html>...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R87: First focusable element is a skip link](https://alfa.siteimprove.com/rules/sia-r87)

**Failure 1:**
- Message: The document has no tabbable descendants

## Detailed Failure Information (axe)

