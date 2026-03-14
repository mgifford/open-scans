# Scan Report: Commerce Maryland WCAG Scan – Top Task Finder URLs

- Issue: https://github.com/mgifford/open-scans/issues/155
- Submitted by: emilyan0810
- Scanned at: 2026-03-14T18:59:43.456Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 15.2 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 41921 passed, 1651 failed, 1573 cantTell, 5575 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 7802 passed, 1417 failed (1378 unique, 39 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 60

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://commerce.maryland.gov/about/rankings-and-statistics/data-explorer) | 164 | 93 | **257** | Maryland Business Climate \| Data Explorer \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/start/the-process/statewide-licenses) | 55 | 164 | **219** | Start a Business                                       Licensing |
| [View Page](https://commerce.maryland.gov/fund/programs-for-businesses/research-and-development-tax-credit) | 71 | 19 | **90** | Business Tax Credits \| Research and Development \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/commerce/boards-and-commissions/manufacturing-commission) | 31 | 55 | **86** | Manufacturing Commission \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/about/taxes) | 58 | 26 | **84** | Maryland Business Climate \| Business Taxes \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/commerce) | 34 | 47 | **81** | About Commerce |
| [View Page](https://commerce.maryland.gov/fund/programs-for-businesses/bio-tax-credit) | 47 | 31 | **78** | Bio Tax Credit \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/fund/programs-for-businesses/cellulosic-ethanol-technology-tax-credit) | 40 | 28 | **68** | Maryland Business Tax Credits \| Cellulosic Ethanol \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/fund/programs-for-businesses/cyber-tax-credit) | 40 | 28 | **68** | Maryland Cyber Tax Credit \| Maryland Department of Commerce |
| [View Page](https://commerce.maryland.gov/commerce/boards-and-commissions) | 31 | 36 | **67** | Commerce Boards &amp; Commissions \| Maryland Department of Commerce |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **98** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| landmark-one-main | **67** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| color-contrast | **36** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| meta-viewport | **36** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-viewport) |
| aria-command-name | **34** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-command-name) |
| page-has-heading-one | **34** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| list | **32** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| html-has-lang | **30** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| aria-prohibited-attr | **30** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| document-title | **29** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/document-title) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**Issue**: ARIA commands must have an accessible name

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(4)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(4)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 2: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**Issue**: ARIA commands must have an accessible name

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(6)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(6)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 3: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">
```

**XPath** (use in browser DevTools):
```
#searchInputBox
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#searchInputBox')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 4: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**Issue**: Zooming and scaling must not be disabled

**HTML Pattern**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
```

**XPath** (use in browser DevTools):
```
meta[name="viewport"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[name="viewport"]')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 5: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">
```

**XPath** (use in browser DevTools):
```
#TurnOnAccessibility
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#TurnOnAccessibility')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 6: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="skipNav">
                        <a href="#primary_content_Block">Skip to Main Content
                        
                        
                        
                        
                        
                        </a>
                    </div>
```

**XPath** (use in browser DevTools):
```
.skipNav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.skipNav')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 7: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div id="mdgov_sliverRight">
```

**XPath** (use in browser DevTools):
```
#mdgov_sliverRight
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#mdgov_sliverRight')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 8: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="hidden-accessible">
```

**XPath** (use in browser DevTools):
```
a[href$="maryland.gov/"] > .hidden-accessible
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="maryland.gov/"] > .hidden-accessible')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 9: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div id="mdgov_agencyName" class="span5">
```

**XPath** (use in browser DevTools):
```
#mdgov_agencyName
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#mdgov_agencyName')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 10: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="span6 pull-rigth" id="mdgov_dbed_searchInput">
```

**XPath** (use in browser DevTools):
```
#mdgov_dbed_searchInput
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#mdgov_dbed_searchInput')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- *...and 28 more page(s)*

---

#### Pattern 11: Affects 32 page(s) - 32 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level1 static level0" accesskey="1" href="/commerce" tabindex="0">About Commerce</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- http://commerce.maryland.gov/news
- *...and 27 more page(s)*

---

#### Pattern 12: Affects 32 page(s) - 32 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level1 static level0" href="/media" tabindex="0">News, Events &amp; Documents</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(3)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(3)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/news
- *...and 27 more page(s)*

---

#### Pattern 13: Affects 32 page(s) - 32 occurrence(s)

**Scanner**: axe
**Rule**: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**Issue**: ARIA commands must have an accessible name

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(5)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(5)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- http://commerce.maryland.gov/news
- *...and 27 more page(s)*

---

#### Pattern 14: Affects 32 page(s) - 32 occurrence(s)

**Scanner**: axe
**Rule**: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**Issue**: ARIA commands must have an accessible name

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(7)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(7)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- http://commerce.maryland.gov/news
- *...and 27 more page(s)*

---

#### Pattern 15: Affects 32 page(s) - 32 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<li role="menuitem" class="level0"><a class="level1 static level0" href="https://open.maryland.gov:443/why-maryland/" tabindex="0">Why Maryland</a></li>
```

**XPath** (use in browser DevTools):
```
.level0[role="menuitem"]:nth-child(8)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.level0[role="menuitem"]:nth-child(8)')`
5. The element will be highlighted

**Affected Pages**:
- http://commerce.maryland.gov/about/taxes
- http://commerce.maryland.gov/dbed
- http://commerce.maryland.gov/fund
- http://commerce.maryland.gov/media
- http://commerce.maryland.gov/news
- *...and 27 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| http://commerce.maryland.gov/ | https://commerce.maryland.gov/ | OK | 200 | yes | 10070 | 20 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, color-contrast, landmark-one-main, meta-viewport, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/page-has-heading-one, navigable/skip-link |
| http://commerce.maryland.gov/dbed/accessibility | https://commerce.maryland.gov/dbed/accessibility | FAIL | 404 | yes | 6967 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/move/find-a-location | https://commerce.maryland.gov/move/find-a-location | OK | 200 | yes | 13530 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/move/find-a-location/property-search | https://commerce.maryland.gov/move/find-a-location/property-search | OK | 200 | yes | 12458 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/move/find-a-location/research-parks | https://commerce.maryland.gov/move/find-a-location/research-parks | OK | 200 | yes | 12340 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/about | https://commerce.maryland.gov/about | OK | 200 | yes | 12905 | 4 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, navigable/empty-heading, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/about/business-community | https://commerce.maryland.gov/about/business-community | FAIL | 404 | yes | 6791 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/about/data-explorer | https://commerce.maryland.gov/about/rankings-and-statistics/data-explorer | OK | 200 | yes | 13330 | 164 | 0 | 0 | 93 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, aria/presentational-children-focusable, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, keyboard-accessible/nested-interactive, labels-and-names/aria-command-name, labels-and-names/button-name, landmarks/landmark-main, navigable/link-name, text-alternatives/img-alt |
| http://commerce.maryland.gov/about/key-industries | https://commerce.maryland.gov/about/key-industries | OK | 200 | yes | 12853 | 1 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading |
| http://commerce.maryland.gov/about/maryland-economy | https://commerce.maryland.gov/about/maryland-economy | OK | 200 | yes | 12589 | 4 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, navigable/empty-heading, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/about/quality-of-life | https://commerce.maryland.gov/about/quality-of-life | OK | 200 | yes | 12325 | 1 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading |
| http://commerce.maryland.gov/about/rankings-and-statistics | https://commerce.maryland.gov/about/rankings-and-statistics | OK | 200 | yes | 12754 | 1 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading |
| http://commerce.maryland.gov/about/taxes | https://commerce.maryland.gov/about/taxes | OK | 200 | yes | 8090 | 58 | 0 | 0 | 26 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, frame-title, heading-order, landmark-one-main, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/skip-link |
| http://commerce.maryland.gov/about/transportation | https://commerce.maryland.gov/about/transportation | OK | 200 | yes | 13173 | 1 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading |
| http://commerce.maryland.gov/about/why-maryland | https://commerce.maryland.gov/about/why-maryland | FAIL | 404 | yes | 6521 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/start/resources | https://commerce.maryland.gov/start/resources | OK | 200 | yes | 10555 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/dbed | https://commerce.maryland.gov/commerce | OK | 200 | yes | 8368 | 34 | 0 | 0 | 47 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, empty-heading, heading-order, landmark-one-main, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/empty-heading, navigable/heading-order, navigable/skip-link |
| http://commerce.maryland.gov/fund | https://commerce.maryland.gov/fund | OK | 200 | yes | 7957 | 35 | 0 | 0 | 28 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, frame-title, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/skip-link |
| http://commerce.maryland.gov/grow | https://commerce.maryland.gov/grow | OK | 200 | yes | 13558 | 4 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, navigable/empty-heading, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/media | https://commerce.maryland.gov/media | OK | 200 | yes | 8106 | 35 | 0 | 0 | 21 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-in-text-block, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/move | https://commerce.maryland.gov/move | OK | 200 | yes | 12650 | 1 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/empty-heading |
| http://commerce.maryland.gov/mvf | https://commerce.maryland.gov/mvf | OK | 200 | yes | 8522 | 3 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/label-content-mismatch, landmarks/landmark-unique |
| http://commerce.maryland.gov/news | https://commerce.maryland.gov/news | OK | 200 | yes | 7689 | 27 | 0 | 0 | 13 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/skip-link |
| http://commerce.maryland.gov/start | https://commerce.maryland.gov/start | OK | 200 | yes | 10353 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/dbed/boards-and-commissions | https://commerce.maryland.gov/commerce/boards-and-commissions | OK | 200 | yes | 7905 | 31 | 0 | 0 | 36 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/dbed/contact-us | https://commerce.maryland.gov/commerce/contact-us | OK | 200 | yes | 8180 | 39 | 0 | 0 | 26 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, empty-heading, frame-title, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/empty-heading, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/dbed/dominick-murray | https://commerce.maryland.gov/dbed/dominick-murray | FAIL | 404 | yes | 6510 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/dbed/employee-directory | https://commerce.maryland.gov/commerce/employee-directory | OK | 200 | yes | 9073 | 36 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, html-has-lang, landmark-no-duplicate-banner, landmark-unique, link-in-text-block, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, landmarks/landmark-main, landmarks/no-duplicate-banner, landmarks/region, navigable/heading-order, readable/html-has-lang |
| http://commerce.maryland.gov/dbed/hannah-byron | https://commerce.maryland.gov/dbed/hannah-byron | FAIL | 404 | yes | 6654 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/dbed/privacy | https://commerce.maryland.gov/dbed/privacy | FAIL | 404 | yes | 6685 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/dbed/raquel-guillory | https://commerce.maryland.gov/dbed/raquel-guillory | FAIL | 404 | yes | 6662 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/dbed/robert-walker | https://commerce.maryland.gov/dbed/robert-walker | FAIL | 404 | yes | 6773 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/fund/maryland-finance-tracker | https://commerce.maryland.gov/fund/maryland-finance-tracker | OK | 200 | yes | 8462 | 9 | 0 | 0 | 10 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-contentinfo-is-top-level, landmark-one-main, meta-viewport, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/meta-viewport, keyboard-accessible/focus-order, landmarks/contentinfo-is-top-level, landmarks/landmark-main, landmarks/region, navigable/page-has-heading-one, text-alternatives/img-alt |
| http://commerce.maryland.gov/fund/programs-for-businesses | https://commerce.maryland.gov/fund/programs-for-businesses | OK | 200 | yes | 12716 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-economic-development-partners | https://commerce.maryland.gov/fund/programs-for-economic-development-partners | OK | 200 | yes | 12415 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-lending-institutions | https://commerce.maryland.gov/fund/programs-for-lending-institutions | OK | 200 | yes | 12250 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-startups | https://commerce.maryland.gov/fund/programs-for-startups | OK | 200 | yes | 12431 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/grow/business-to-government | https://commerce.maryland.gov/grow/business-to-government | OK | 200 | yes | 8779 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/banner-is-top-level, landmarks/region |
| http://commerce.maryland.gov/grow/commercial-product-development | https://commerce.maryland.gov/grow/commercial-product-development | OK | 200 | yes | 10601 | 1 | 0 | 0 | 50 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-viewport |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/meta-viewport, landmarks/landmark-main, landmarks/region, navigable/page-has-heading-one, text-alternatives/img-alt |
| http://commerce.maryland.gov/grow/expand-to-international-markets | https://commerce.maryland.gov/grow/expand-to-international-markets | OK | 200 | yes | 13145 | 4 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, navigable/empty-heading, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/grow/local-economic-development | https://commerce.maryland.gov/grow/local-economic-development | OK | 200 | yes | 13449 | 4 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, navigable/empty-heading, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/grow/networking | https://commerce.maryland.gov/grow/networking | FAIL | 404 | yes | 6792 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/grow/recruitment-and-training | https://commerce.maryland.gov/grow/recruitment-and-training | OK | 200 | yes | 13426 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/media/document-library | https://commerce.maryland.gov/media/document-library | OK | 200 | yes | 8555 | 45 | 0 | 0 | 21 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, frame-title, heading-order, label, landmark-one-main, link-name, list, meta-viewport, region, select-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, adaptable/th-has-data-cells, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/form-label, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/media/press-release-(2) | https://commerce.maryland.gov/media/press-room | OK | 200 | yes | 7768 | 31 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/media/press-room | https://commerce.maryland.gov/media/press-room | OK | 200 | yes | 7591 | 31 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/move/international-business-in-maryland | https://commerce.maryland.gov/move/international-business-in-maryland | OK | 200 | yes | 14229 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/mvf/contact-mvf | https://commerce.maryland.gov/mvf/contact-mvf | FAIL | 404 | yes | 6535 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/entrepreneur-resources | https://commerce.maryland.gov/mvf/entrepreneur-resources | OK | 200 | yes | 11090 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/mvf/how-to-pitch | https://commerce.maryland.gov/mvf/how-to-pitch | FAIL | 404 | yes | 6611 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/investmaryland-challenge | https://commerce.maryland.gov/mvf/investmaryland-challenge | FAIL | 404 | yes | 6506 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/investment-criteria | https://commerce.maryland.gov/mvf/investment-criteria | FAIL | 404 | yes | 6541 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/maryland-israel-development-partnership | https://commerce.maryland.gov/mvf/maryland-israel-development-partnership | FAIL | 404 | yes | 6543 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/portfolio | https://commerce.maryland.gov/mvf/portfolio | FAIL | 404 | yes | 6522 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/team | https://commerce.maryland.gov/mvf/team | FAIL | 404 | yes | 6505 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/the-maryland-cybersecurity-fund | https://commerce.maryland.gov/mvf/the-maryland-cybersecurity-fund | FAIL | 404 | yes | 6578 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/Pages/3rdPartyLayoutTest.aspx | https://commerce.maryland.gov/Pages/3rdPartyLayoutTest.aspx | OK | 200 | yes | 7590 | 30 | 0 | 0 | 16 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/Pages/Blog-Feed.aspx | https://commerce.maryland.gov/Pages/Blog-Feed.aspx | OK | 200 | yes | 7639 | 27 | 0 | 0 | 13 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/skip-link |
| http://commerce.maryland.gov/Pages/FAQ.aspx | https://commerce.maryland.gov/Pages/FAQ.aspx | OK | 200 | yes | 7885 | 30 | 0 | 0 | 14 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/Pages/HP2.aspx | https://commerce.maryland.gov/Pages/HP2.aspx | FAIL | 404 | yes | 6580 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/Pages/Interior-Page.aspx | https://commerce.maryland.gov/Pages/Interior-Page.aspx | OK | 200 | yes | 7687 | 37 | 0 | 0 | 21 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/Pages/Media.aspx | https://commerce.maryland.gov/Pages/Media.aspx | OK | 200 | yes | 7714 | 22 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, color-contrast, landmark-one-main, link-name, list, meta-viewport, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/page-has-heading-one, navigable/skip-link, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/Pages/MediaPage.aspx | https://commerce.maryland.gov/Pages/MediaPage.aspx | OK | 200 | yes | 7538 | 22 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, color-contrast, landmark-one-main, link-name, list, meta-viewport, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/page-has-heading-one, navigable/skip-link, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/Pages/Section-Intro.aspx | https://commerce.maryland.gov/Pages/Section-Intro.aspx | FAIL | 404 | yes | 6509 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/Pages/section-test.aspx | https://commerce.maryland.gov/Pages/section-test.aspx | FAIL | 404 | yes | 6519 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/start/faqs | https://commerce.maryland.gov/start/faqs | OK | 200 | yes | 10366 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/start/the-process | https://commerce.maryland.gov/start/the-process | OK | 200 | yes | 12404 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/empty-heading, navigable/heading-order |
| http://commerce.maryland.gov/fund/programs-for-businesses/advance-maryland | https://commerce.maryland.gov/fund/programs-for-businesses/advance-maryland | OK | 200 | yes | 9117 | 37 | 0 | 0 | 28 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, frame-title, landmark-one-main, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/skip-link |
| http://commerce.maryland.gov/fund/programs-for-businesses/bio-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/bio-tax-credit | OK | 200 | yes | 8355 | 47 | 0 | 0 | 31 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/fund/programs-for-businesses/brownsfields-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/brownsfields-tax-credit | OK | 200 | yes | 7952 | 37 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/fund/programs-for-businesses/cellulosic-ethanol-technology-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/cellulosic-ethanol-technology-tax-credit | OK | 200 | yes | 9171 | 40 | 0 | 0 | 28 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, frame-title, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-one-main, landmark-unique, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/skip-link |
| http://commerce.maryland.gov/start/the-process/blis | https://commerce.maryland.gov/start/the-process/statewide-licenses | OK | 200 | yes | 9091 | 55 | 0 | 0 | 164 | 38 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-one-main, link-name, meta-viewport, page-has-heading-one, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, distinguishable/meta-viewport, labels-and-names/label-content-mismatch, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/page-has-heading-one, navigable/skip-link, text-alternatives/image-redundant-alt |
| http://commerce.maryland.gov/dbed/boards-and-commissions/federal-facility-advisory-board | https://commerce.maryland.gov/commerce/boards-and-commissions | OK | 200 | yes | 8083 | 31 | 0 | 0 | 36 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/dbed/boards-and-commissions/economic-development-commission | https://commerce.maryland.gov/commerce/boards-and-commissions/economic-development-commission | OK | 200 | yes | 8817 | 32 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/dbed/ursula-powidzki | https://commerce.maryland.gov/dbed/ursula-powidzki | FAIL | 404 | yes | 6545 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/fund/programs-for-businesses/employer-security-clearance-costs-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/employer-security-clearance-costs-tax-credit | OK | 200 | yes | 8555 | 48 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/fund/programs-for-businesses/research-and-development-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/research-and-development-tax-credit | OK | 200 | yes | 8771 | 71 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/fund/programs-for-lending-institutions/midfa | https://commerce.maryland.gov/fund/programs-for-lending-institutions/midfa | OK | 200 | yes | 7618 | 31 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/fund/programs-for-businesses/cyber-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/cyber-tax-credit | OK | 200 | yes | 9117 | 40 | 0 | 0 | 28 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, frame-title, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-one-main, landmark-unique, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/skip-link |
| http://commerce.maryland.gov/about/why-maryland/japanese | https://commerce.maryland.gov/about/why-maryland/japanese | OK | 200 | yes | 13752 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-businesses/wineries-and-vineyards-tax-credit | https://commerce.maryland.gov/fund/programs-for-businesses/wineries-and-vineyards-tax-credit | FAIL | 404 | yes | 6533 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/about/key-industries/aerospace-and-defense | https://commerce.maryland.gov/about/key-industries/aerospace-and-defense | FAIL | 404 | yes | 6515 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/fund/programs-for-economic-development-partners/sunny-day | https://commerce.maryland.gov/fund/programs-for-businesses/sunny-day | OK | 200 | yes | 7712 | 31 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/about/why-maryland/hebrew | https://commerce.maryland.gov/about/why-maryland/hebrew | OK | 200 | yes | 13620 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-lending-institutions/credit-connections | https://commerce.maryland.gov/fund/programs-for-lending-institutions/credit-connections | OK | 200 | yes | 7693 | 31 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/about/key-industries/it-and-cybersecurity | https://commerce.maryland.gov/about/key-industries/it-and-cybersecurity | FAIL | 404 | yes | 6505 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/about/key-industries/manufacturing | https://commerce.maryland.gov/manufacturing | OK | 200 | yes | 13841 | 4 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, landmarks/region, navigable/empty-heading, text-alternatives/image-alt-words |
| http://commerce.maryland.gov/dbed/boards-and-commissions/international-advisory-council | https://commerce.maryland.gov/dbed/boards-and-commissions/international-advisory-council | FAIL | 404 | yes | 6535 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/mvf/venture-captial-limited-partnerships | https://commerce.maryland.gov/mvf/venture-capital-limited-partnerships | FAIL | 404 | yes | 6690 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/fund/programs-for-businesses/vlt | https://commerce.maryland.gov/fund/programs-for-businesses/vlt | OK | 200 | yes | 7682 | 31 | 0 | 0 | 26 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/about/why-maryland/french | https://commerce.maryland.gov/about/why-maryland/french | OK | 200 | yes | 13901 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-businesses/msbdfa | https://commerce.maryland.gov/fund/programs-for-businesses/msbdfa | OK | 200 | yes | 7992 | 32 | 0 | 0 | 26 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, button-name, color-contrast, frame-title, heading-order, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, labels-and-names/frame-title, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/about/why-maryland/russian | https://commerce.maryland.gov/about/why-maryland/russian | OK | 200 | yes | 14063 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/dbed/boards-and-commissions/manufacturing-commission | https://commerce.maryland.gov/commerce/boards-and-commissions/manufacturing-commission | OK | 200 | yes | 8885 | 31 | 0 | 0 | 55 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/about/workforce | https://commerce.maryland.gov/about/workforce | FAIL | 404 | yes | 6594 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/about/why-maryland/chinese | https://commerce.maryland.gov/about/why-maryland/chinese | OK | 200 | yes | 13968 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, navigable/empty-heading |
| http://commerce.maryland.gov/fund/programs-for-businesses/medaaf | https://commerce.maryland.gov/fund/programs-for-businesses/medaaf | OK | 200 | yes | 7748 | 32 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, aria-prohibited-attr, color-contrast, heading-order, landmark-one-main, link-name, list, meta-viewport, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, distinguishable/meta-viewport, keyboard-accessible/focus-order, labels-and-names/aria-command-name, landmarks/landmark-main, landmarks/region, navigable/heading-order, navigable/link-name, navigable/skip-link |
| http://commerce.maryland.gov/dbed/Pages/Forms/DispForm.aspx?ID=39 | https://commerce.maryland.gov/dbed/Pages/Forms/DispForm.aspx?ID=39 | FAIL | 403 | yes | 189 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| http://commerce.maryland.gov/fund/programs-for-businesses/ssbci | https://commerce.maryland.gov/fund/programs-for-businesses/ssbci | FAIL | 404 | yes | 6705 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| http://commerce.maryland.gov/about/key-industries/life-sciences | https://commerce.maryland.gov/about/key-industries/biohealth-technology | FAIL | 404 | yes | 6623 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: document-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### http://commerce.maryland.gov/

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0" rel="noopener noreferrer" target="_blank">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0" rel="noopener noreferrer" target="_blank">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 7 more failures for this rule*

### http://commerce.maryland.gov/dbed/accessibility

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/move/find-a-location

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/move/find-a-location/property-search

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/move/find-a-location/research-parks

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-active is-visible" data-splide-hash="slide1" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible is-next" data-splide-hash="slide2" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide02`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible" data-splide-hash="slide3" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide03`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about/business-community

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/about/data-explorer

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="0" style="width: 35px; height: 35px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 81px; top: -98px; z-index: -63;">`
- XPath: `div[title=""][role="button"]:nth-child(3)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="-1" style="width: 35px; height: 35px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 84px; top: -93px; z-index: -58;">`
- XPath: `div[title=""][role="button"]:nth-child(4)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="-1" style="width: 35px; height: 35px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -206px; top: -111px; z-index: -76;">`
- XPath: `div[title=""][role="button"]:nth-child(5)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="-1" style="width: 35px; height: 35px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 4px; top: 0px; z-index: 35;">`
- XPath: `div[title=""][role="button"]:nth-child(6)`

**Failure 5:**
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="-1" style="width: 35px; height: 35px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 9px; top: -38px; z-index: -3;">`
- XPath: `div[title=""][role="button"]:nth-child(7)`

*... and 25 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="ui header" style="display: inline; color: rgba(255, 255, 255, 0.75); cursor: pointer; vertical-align: sub;">Maryland Commerce</h3>`
- XPath: `.jsx-ed47ca6d1c2e09e1 > .equal.width.padded > .column > div:nth-child(1) > a[href="#"] > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://images.zoomprospector.com/shared/resimplifi.png">`
- XPath: `a[href$="resimplifi.com/"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img id="t_36_49_7" src="https://tiles.zoomprospector.com/LocalLayerTiles.ashx?SST=maryland&amp;Z=7&amp;X=36&amp;Y=49&amp;T=SUBSETBOUNDARY" style="width: 256px; height: 256px; opacity: 1;">`
- XPath: `#t_36_49_7`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img id="t_35_49_7" src="https://tiles.zoomprospector.com/LocalLayerTiles.ashx?SST=maryland&amp;Z=7&amp;X=35&amp;Y=49&amp;T=SUBSETBOUNDARY" style="width: 256px; height: 256px; opacity: 1;">`
- XPath: `#t_35_49_7`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img id="t_35_48_7" src="https://tiles.zoomprospector.com/LocalLayerTiles.ashx?SST=maryland&amp;Z=7&amp;X=35&amp;Y=48&amp;T=SUBSETBOUNDARY" style="width: 256px; height: 256px; opacity: 1;">`
- XPath: `#t_35_48_7`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img id="t_36_48_7" src="https://tiles.zoomprospector.com/LocalLayerTiles.ashx?SST=maryland&amp;Z=7&amp;X=36&amp;Y=48&amp;T=SUBSETBOUNDARY" style="width: 256px; height: 256px; opacity: 1;">`
- XPath: `#t_36_48_7`

*... and 8 more failures for this rule*

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://resimplifi.com/" target="_blank"><img src="https://images.zoomprospector.com/shared/resimplifi.png"></a>`
- XPath: `a[href$="resimplifi.com/"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<menu style="margin:0" class="jsx-d9d17c6676ce0ec1">`
- XPath: `.test > menu`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div style="padding:0;padding-right:14px" class="column">`
- XPath: `.jsx-ed47ca6d1c2e09e1 > .equal.width.padded > .column`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<a id="sidebar-icon" href="#" style="color:#fff;padding-left:5px" aria-label="Menu" aria-expanded="false"><i style="float:right;cursor:pointer;line-height:53px" aria-hidden="true" class="sidebar large icon"></i></a>`
- XPath: `#sidebar-icon`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<a id="settings-icon" href="#" style="color:#fff;padding-left:5px" aria-label="Menu" aria-expanded="false"><i style="float:right;cursor:pointer;line-height:53px" aria-hidden="true" class="setting large icon"></i></a>`
- XPath: `a[aria-label="Menu"][href="#"]:nth-child(4)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="jsx-28511122 menuItem clear_search"><a href="#" class="jsx-28511122">New Search</a></div>`
- XPath: `.clear_search`

*... and 114 more failures for this rule*

### http://commerce.maryland.gov/about/key-industries

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about/maryland-economy

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-active is-visible" data-splide-hash="slide1" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible is-next" data-splide-hash="slide2" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide02`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible" data-splide-hash="slide3" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide03`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about/quality-of-life

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about/rankings-and-statistics

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about/taxes

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="400" height="330" frameborder="0" src="https://apps.esrgc.org/dashboards/countycomparison/#embed/compare/states/code/13344312/geo/20,4,7,13,30,32,38,46,48"></iframe>`
- XPath: `iframe[height="330"]`

**Failure 2:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="400" height="600" frameborder="0" src="https://apps.esrgc.org/dashboards/countycomparison/#embed/compare/counties/code/13449398"></iframe>`
- XPath: `iframe[height="600"]`

**Failure 3:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="400" height="620" frameborder="0" src="https://apps.esrgc.org/dashboards/countycomparison/#embed/compare/counties/code/13449400"></iframe>`
- XPath: `#ctl00_ctl48_g_8eb7d7ae_27d9_458b_9e5b_802469324ea8 > .ms-rte-embedcode.ms-rte-embedwp > iframe[height="620"][width="400"]`

**Failure 4:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="400" height="620" frameborder="0" src="https://apps.esrgc.org/dashboards/countycomparison/#embed/compare/counties/code/13449402"></iframe>`
- XPath: `#ctl00_ctl48_g_d2e0993b_782f_4bf4_abb4_eb0bde52bcde > .ms-rte-embedcode.ms-rte-embedwp > iframe[height="620"][width="400"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Apportionment</h3>`
- XPath: `h3:nth-child(9)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Business Personal Property</h3>`
- XPath: `h3:nth-child(20)`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `iframe[height="330"]`

**Failure 3:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `iframe[height="600"]`

**Failure 4:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#ctl00_ctl48_g_8eb7d7ae_27d9_458b_9e5b_802469324ea8 > .ms-rte-embedcode.ms-rte-embedwp > iframe[height="620"][width="400"]`

**Failure 5:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `#ctl00_ctl48_g_d2e0993b_782f_4bf4_abb4_eb0bde52bcde > .ms-rte-embedcode.ms-rte-embedwp > iframe[height="620"][width="400"]`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(10)`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 34 more failures for this rule*

### http://commerce.maryland.gov/about/transportation

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/about/why-maryland

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/start/resources

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" style="--scrollbar-width: 0px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="wp-block-heading has-contrast-color has-text-color">Page Not Found</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="has-contrast-color has-text-color">Sorry, the page you’re looking for couldn’t be found. <br>Please return to the&nbsp;<strong><a href="/">Homepage</a> </strong>or use the search bar to find what you’re looking for.</p>`
- XPath: `.has-contrast-color.has-text-color:nth-child(2)`

### http://commerce.maryland.gov/dbed

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         About Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(12)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h4><span style="text-align:right;"><img src="/commerce/SiteAssets/harry-coker-jr/Harry%20Coker%20Jr%20%281%29.jpg" class="ms-rtePosition-2" alt="" style="margin:5px;width:150px;height:188px;"></span></h4>`
- XPath: `h4:nth-child(13)`

**Failure 3:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(17)`

**Failure 4:**
- Message: Headings should not be empty
- HTML: `<h4><br></h4>`
- XPath: `h4:nth-child(7)`

**Failure 5:**
- Message: Headings should not be empty
- HTML: `<h3><br></h3>`
- XPath: `div:nth-child(5) > h3`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(12)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4><strong>Staff Leadership&nbsp;</strong><br></h4>`
- XPath: `h4:nth-child(3)`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 10 more failures for this rule*

### http://commerce.maryland.gov/fund

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maryland.maps.arcgis.com/apps/instant/lookup/index.html?appid=7d28e49c55b74945bf79c8fd576acd3c"></iframe>`
- XPath: `iframe[width="600"]`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 19 more failures for this rule*

### http://commerce.maryland.gov/grow

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-active is-visible" data-splide-hash="slide1" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible is-next" data-splide-hash="slide2" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide02`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible" data-splide-hash="slide3" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide03`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/media

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         News, Events &amp; Documents                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://us3.list-manage.com/subscribe?u=4e4b0dc66c39c7d7cbe2f9641&amp;id=cb497dabcb" abp="1014" target="_blank">Business Pulse​</a>`
- XPath: `a[abp="1014"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/media/_layouts/15/listform.aspx?ListId=%7B470884F7%2DB031%2D41DD%2D899D%2D67A128199E5A%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 15 more failures for this rule*

### http://commerce.maryland.gov/move

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/mvf

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="navbar navbar-expand-lg navbar-default container-fluid">`
- XPath: `.navbar`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="topbar-left">`
- XPath: `.topbar-left`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<select class="gt_selector notranslate" aria-label="Select Language">`
- XPath: `#block-tedco-gtranslate > .gtranslate_wrapper.gt_container--wz96ug > select`

### http://commerce.maryland.gov/news

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field">&nbsp;</div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"><img alt="" src="/SiteCollectionImages/banners53.jpg" style="BORDER:0px solid;"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         News                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 10 more failures for this rule*

### http://commerce.maryland.gov/start

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" style="--scrollbar-width: 0px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="wp-block-heading has-contrast-color has-text-color">Page Not Found</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="has-contrast-color has-text-color">Sorry, the page you’re looking for couldn’t be found. <br>Please return to the&nbsp;<strong><a href="/">Homepage</a> </strong>or use the search bar to find what you’re looking for.</p>`
- XPath: `.has-contrast-color.has-text-color:nth-child(2)`

### http://commerce.maryland.gov/dbed/boards-and-commissions

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         About Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/commerce/_layouts/15/listform.aspx?ListId=%7BC4BAD108%2D05A8%2D46BF%2D9CBF%2DBD7F7960A20C%7D&amp;PageType=0&amp;RootFolder=%2Fcommerce" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/dbed/contact-us

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         About Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3><span></span></h3>`
- XPath: `span > h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h2><span class="ms-rteThemeForeColor-2-0"><br></span></h2>`
- XPath: `h2:nth-child(8)`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="620" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google....">`
- XPath: `iframe[width="620"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `iframe[width="620"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/commerce/_layouts/15/listform.aspx?ListId=%7BC4BAD108%2D05A8%2D46BF%2D9CBF%2DBD7F7960A20C%7D&amp;PageType=0&amp;RootFolder=%2Fcommerce" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 16 more failures for this rule*

### http://commerce.maryland.gov/dbed/dominick-murray

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/dbed/employee-directory

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input type="text" id="mdgov_searchInputBox" name="q" class="fp_megaInput" value="Find information, services and more" onblur="if(this.value=='')this.value='Find information, services and more';" onfocus="if(this.value=='Find information, services and more')this.value='';">`
- XPath: `#mdgov_searchInputBox`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>401 East Pratt Street<br>Baltimore, MD 21202</h3>`
- XPath: `h3`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="yui3-js-enabled">`
- XPath: `html`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="mdgov_header" class="clearfix">`
- XPath: `#mdgov_header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="mdgov_header" class="clearfix">`
- XPath: `#mdgov_header`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="orglisting.asp">list of all agencies</a>`
- XPath: `p:nth-child(2) > a[href$="orglisting.asp"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_accessibility" class="hidden-phone">`
- XPath: `#mdgov_accessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_TopSliverBar" class="clearfix">`
- XPath: `#mdgov_TopSliverBar`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="span3">                         <h2><div id="mdgov_pageParentLink">Other Links</div></h2>                     </div>`
- XPath: `#mdgov_pageParent > .span3`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div>`
- XPath: `#mdgov_iaNav > div:nth-child(1)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div style="margin-bottom:20px;">`
- XPath: `#mdgov_searchLeftCol > div`

*... and 25 more failures for this rule*

### http://commerce.maryland.gov/dbed/hannah-byron

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/dbed/privacy

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/dbed/raquel-guillory

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/dbed/robert-walker

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/fund/maryland-finance-tracker

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<article role="contentinfo" qva-radial-context-menu="openContextMenu($event)" qva-context-menu="openContextMenu($event)" id="content" ng-class="{'selections-disabled' : options.noSelections, 'reduce-top-padding': reduceTopPadding}" ng-keydown="keyDown($event)"></article>`
- XPath: `#content`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img ng-src="{{sheetHiddenSvg}}">`
- XPath: `img`

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<article role="contentinfo" qva-radial-context-menu="openContextMenu($event)" qva-context-menu="openContextMenu($event)" id="content" ng-class="{'selections-disabled' : options.noSelections, 'reduce-top-padding': reduceTopPadding}" ng-keydown="keyDown($event)"></article>`
- XPath: `#content`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" qva-bootstrap="false" class="single-full-height" ng-controller="singleObjectCtrl" ng-class="{'no-scroll': loading}">`
- XPath: `html`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">`
- XPath: `meta[name="viewport"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" qva-bootstrap="false" class="single-full-height" ng-controller="singleObjectCtrl" ng-class="{'no-scroll': loading}">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="qv-preload-icons" style="opacity: 0">.</div>`
- XPath: `.qv-preload-icons`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="qv-preload-font" style="opacity: 0">.ὰ</div>`
- XPath: `.qv-preload-font`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="qv-preload-font-bold" style="opacity: 0">.ὰ</div>`
- XPath: `.qv-preload-font-bold`

### http://commerce.maryland.gov/fund/programs-for-businesses

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-economic-development-partners

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-lending-institutions

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-startups

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/grow/business-to-government

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="mdg-entNav">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" class="mdg-breadcrumbs">`
- XPath: `.mdg-breadcrumbs`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="p-3 bg-white border-top">`
- XPath: `.p-3`

### http://commerce.maryland.gov/grow/commercial-product-development

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width,initial-scale=1.0, user-scalable=no, minimal-ui">`
- XPath: `meta[name="viewport"]`

### http://commerce.maryland.gov/grow/expand-to-international-markets

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-active is-visible" data-splide-hash="slide1" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible is-next" data-splide-hash="slide2" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide02`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible" data-splide-hash="slide3" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide03`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/grow/local-economic-development

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-active is-visible" data-splide-hash="slide1" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible is-next" data-splide-hash="slide2" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide02`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible" data-splide-hash="slide3" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide03`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/grow/networking

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/grow/recruitment-and-training

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/media/document-library

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         News, Events &amp; Documents                                                                              </span>`
- XPath: `strong > span`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="dynatable-sort-header" href="#">Title</a>`
- XPath: `th[data-dynatable-column="title"] > .dynatable-sort-header[href="#"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="dynatable-sort-header" href="#">Document Type</a>`
- XPath: `th[data-dynatable-column="documentType"] > .dynatable-sort-header[href="#"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="dynatable-sort-header" href="#">Sub-category</a>`
- XPath: `th[data-dynatable-column="subCategory"] > .dynatable-sort-header[href="#"]`

*... and 1 more failures for this rule*

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="dociframe" src="/media/sitepages/dociframe.aspx" onload="setHeight()" style="width: 100%; max-width: 620px; height: 656px;" frameborder="0" align="center" scrolling="no"></iframe>`
- XPath: `#dociframe`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">`
- XPath: `#dociframe`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/media/_layouts/15/listform.aspx?ListId=%7B470884F7%2DB031%2D41DD%2D899D%2D67A128199E5A%7D&amp;PageType=0&amp;RootFolder=%2Fmedia" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="#"></a>`
- XPath: `#dociframe`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 17 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select id="dynatable-per-page-dociTable" class="dynatable-per-page-select"><option value="10">10</option><option value="20">20</option><option value="50" selected="selected">50</option><option value="100">100</option></select>`
- XPath: `#dynatable-per-page-dociTable`

### http://commerce.maryland.gov/media/press-release-(2)

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         News, Events &amp; Documents                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/media/_layouts/15/listform.aspx?ListId=%7B470884F7%2DB031%2D41DD%2D899D%2D67A128199E5A%7D&amp;PageType=0&amp;RootFolder=%2Fmedia" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/media/press-room

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         News, Events &amp; Documents                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/media/_layouts/15/listform.aspx?ListId=%7B470884F7%2DB031%2D41DD%2D899D%2D67A128199E5A%7D&amp;PageType=0&amp;RootFolder=%2Fmedia" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/move/international-business-in-maryland

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/mvf/contact-mvf

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/entrepreneur-resources

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" style="--scrollbar-width: 0px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="wp-block-heading has-contrast-color has-text-color">Page Not Found</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="has-contrast-color has-text-color">Sorry, the page you’re looking for couldn’t be found. <br>Please return to the&nbsp;<strong><a href="/">Homepage</a> </strong>or use the search bar to find what you’re looking for.</p>`
- XPath: `.has-contrast-color.has-text-color:nth-child(2)`

### http://commerce.maryland.gov/mvf/how-to-pitch

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/investmaryland-challenge

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/investment-criteria

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/maryland-israel-development-partnership

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/portfolio

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/team

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/the-maryland-cybersecurity-fund

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/Pages/3rdPartyLayoutTest.aspx

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field">&nbsp;</div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Maryland Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/_layouts/15/listform.aspx?ListId=%7B2E3A06B3%2DC160%2D407A%2DBB2C%2D2750504F0CE3%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/Pages/Blog-Feed.aspx

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field">&nbsp;</div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Maryland Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 10 more failures for this rule*

### http://commerce.maryland.gov/Pages/FAQ.aspx

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field">&nbsp;</div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl06__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl06_label"></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl06__ControlWrapper_RichHtmlField`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Maryland Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/_layouts/15/listform.aspx?ListId=%7B2E3A06B3%2DC160%2D407A%2DBB2C%2D2750504F0CE3%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 10 more failures for this rule*

### http://commerce.maryland.gov/Pages/HP2.aspx

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/Pages/Interior-Page.aspx

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field">&nbsp;</div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"><img alt="" src="/SiteCollectionImages/RSA.png" style="BORDER:0px solid;"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Maryland Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h6>Header 6&nbsp;</h6>`
- XPath: `h6`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/_layouts/15/listform.aspx?ListId=%7B2E3A06B3%2DC160%2D407A%2DBB2C%2D2750504F0CE3%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 18 more failures for this rule*

### http://commerce.maryland.gov/Pages/Media.aspx

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/_layouts/15/listform.aspx?ListId=%7B2E3A06B3%2DC160%2D407A%2DBB2C%2D2750504F0CE3%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 7 more failures for this rule*

### http://commerce.maryland.gov/Pages/MediaPage.aspx

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/_layouts/15/listform.aspx?ListId=%7B2E3A06B3%2DC160%2D407A%2DBB2C%2D2750504F0CE3%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 7 more failures for this rule*

### http://commerce.maryland.gov/Pages/Section-Intro.aspx

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/Pages/section-test.aspx

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/start/faqs

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" style="--scrollbar-width: 0px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="wp-block-heading has-contrast-color has-text-color">Page Not Found</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="has-contrast-color has-text-color">Sorry, the page you’re looking for couldn’t be found. <br>Please return to the&nbsp;<strong><a href="/">Homepage</a> </strong>or use the search bar to find what you’re looking for.</p>`
- XPath: `.has-contrast-color.has-text-color:nth-child(2)`

### http://commerce.maryland.gov/start/the-process

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" style="--scrollbar-width: 0px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="wp-block-heading has-contrast-color has-text-color">Page Not Found</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="has-contrast-color has-text-color">Sorry, the page you’re looking for couldn’t be found. <br>Please return to the&nbsp;<strong><a href="/">Homepage</a> </strong>or use the search bar to find what you’re looking for.</p>`
- XPath: `.has-contrast-color.has-text-color:nth-child(2)`

### http://commerce.maryland.gov/fund/programs-for-businesses/advance-maryland

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maryland.maps.arcgis.com/apps/instant/lookup/index.html?appid=7d28e49c55b74945bf79c8fd576acd3c"></iframe>`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" dir="ltr">`
- XPath: `iframe[width="600"]`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 19 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-businesses/bio-tax-credit

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ol>`
- XPath: `ol`

**Failure 5:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ol > ul`

*... and 3 more failures for this rule*

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 22 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-businesses/brownsfields-tax-credit

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

**Failure 4:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ol>`
- XPath: `ol`

**Failure 5:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ol > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 15 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-businesses/cellulosic-ethanol-technology-tax-credit

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maryland.maps.arcgis.com/apps/instant/lookup/index.html?appid=7d28e49c55b74945bf79c8fd576acd3c"></iframe>`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class=" header " style="background-color:#323232;font-family:var(--calcite-sans-family);;">`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header default-header light" role="banner">`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" dir="ltr">`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header default-header light" role="banner">`
- XPath: `iframe[width="600"]`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 19 more failures for this rule*

### http://commerce.maryland.gov/start/the-process/blis

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="btn btn-pink free_trial_link d-none d-sm-block" aria-label="Start Building for Free Button" target="_blank" href="https://dashboard.knack.com/sign-up"> 								Start Building for Free                            </a>`
- XPath: `.free_trial_link`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>The best no-code platform for building custom online databases and applications.</p>`
- XPath: `.footer-description > p`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.knack.com/tour/database/">No-Code Database</a>`
- XPath: `#menu-item-7016 > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.knack.com/tour/ecommerce/">E-commerce</a>`
- XPath: `#menu-item-7017 > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.knack.com/tour/interface/">Interface</a>`
- XPath: `#menu-item-7018 > a`

*... and 36 more failures for this rule*

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en-US" class="">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.knack.com/wp-content/uploads/2025/07/banned.webp" class="fancybox image">`
- XPath: `.fancybox`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.knack.com/" class="logo-footer d-inline-block"> 					                        <img src="https://www.knack.com/uploads/2023/06/knack-header-logo.svg" alt="" title="Knack: No-Code Application Development Platform"> 					                </a>`
- XPath: `.footer-logo-wrp.col-md-12.col-lg-3:nth-child(1) > .logo-footer.d-inline-block[href$="knack.com/"]`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
- XPath: `meta[name="viewport"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US" class="">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" href="#content"> 	Skip to content</a>`
- XPath: `.skip-link`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wp-block-columns are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">`
- XPath: `.wp-block-columns`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wp-block-group container">`
- XPath: `.wp-block-group.container`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="footer-logo-wrp col-md-12 col-lg-3 mb-4 mb-lg-0 d-none d-md-block">`
- XPath: `.footer-logo-wrp.col-md-12.col-lg-3:nth-child(1)`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-6 col-lg-8 footer-menu-wrap d-flex align-items-start justify-content-between column5 flex-wrap">`
- XPath: `.col-md-6`

*... and 3 more failures for this rule*

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="skip-link screen-reader-text" href="#content"> 	Skip to content</a>`
- XPath: `.skip-link`

### http://commerce.maryland.gov/dbed/boards-and-commissions/federal-facility-advisory-board

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         About Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `._about > h3`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/commerce/_layouts/15/listform.aspx?ListId=%7BC4BAD108%2D05A8%2D46BF%2D9CBF%2DBD7F7960A20C%7D&amp;PageType=0&amp;RootFolder=%2Fcommerce" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/dbed/boards-and-commissions/economic-development-commission

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         About Commerce                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/commerce/_layouts/15/listform.aspx?ListId=%7BC4BAD108%2D05A8%2D46BF%2D9CBF%2DBD7F7960A20C%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/commerce/_layouts/15/listform.aspx?ListId=%7BC4BAD108%2D05A8%2D46BF%2D9CBF%2DBD7F7960A20C%7D&amp;PageType=0&amp;RootFolder=%2Fcommerce%2Fboards%2Dand%2Dcommissions" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="mailto:timothy.mcgowan1@maryland.gov"></a>`
- XPath: `p:nth-child(8) > a:nth-child(1)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/dbed/ursula-powidzki

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/fund/programs-for-businesses/employer-security-clearance-costs-tax-credit

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 28 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-businesses/research-and-development-tax-credit

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 51 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-lending-institutions/midfa

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dlending%2Dinstitutions" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-businesses/cyber-tax-credit

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl02_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl02__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl03_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl03__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maryland.maps.arcgis.com/apps/instant/lookup/index.html?appid=7d28e49c55b74945bf79c8fd576acd3c"></iframe>`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<header class=" header " style="background-color:#323232;font-family:var(--calcite-sans-family);;">`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header default-header light" role="banner">`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" dir="ltr">`
- XPath: `iframe[width="600"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header default-header light" role="banner">`
- XPath: `iframe[width="600"]`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 19 more failures for this rule*

### http://commerce.maryland.gov/about/why-maryland/japanese

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-businesses/wineries-and-vineyards-tax-credit

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/about/key-industries/aerospace-and-defense

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/fund/programs-for-economic-development-partners/sunny-day

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/about/why-maryland/hebrew

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-lending-institutions/credit-connections

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dlending%2Dinstitutions" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/about/key-industries/it-and-cybersecurity

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/about/key-industries/manufacturing

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-active is-visible" data-splide-hash="slide1" id="splide01-slide01" role="group" aria-roledescription="slide" aria-label="1 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible is-next" data-splide-hash="slide2" id="splide01-slide02" role="group" aria-roledescription="slide" aria-label="2 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide02`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide grid is-visible" data-splide-hash="slide3" id="splide01-slide03" role="group" aria-roledescription="slide" aria-label="3 of 10" style="margin-right: 10px; width: calc(33.3333% - 6.66667px);">`
- XPath: `#splide01-slide03`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/dbed/boards-and-commissions/international-advisory-council

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/mvf/venture-captial-limited-partnerships

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/fund/programs-for-businesses/vlt

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/about/why-maryland/french

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-businesses/msbdfa

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/74edf1a3/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe[width="600"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><em>SSBCI Funding Available through MSBDFA&nbsp;</em><br></h4>`
- XPath: `#ctl00_PlaceHolderMain_ctl06__ControlWrapper_RichHtmlField > h4`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/about/why-maryland/russian

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/dbed/boards-and-commissions/manufacturing-commission

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         About Commerce                                                                              </span>`
- XPath: `h4 > strong > span`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/commerce/_layouts/15/listform.aspx?ListId=%7BC4BAD108%2D05A8%2D46BF%2D9CBF%2DBD7F7960A20C%7D&amp;PageType=0&amp;RootFolder=%2Fcommerce" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/Documents/MMAB%20Agenda%204%2026%20Final.pdf" target="_blank"><img class="ms-asset-icon ms-rtePosition-4" src="/_layouts/images/icpdf.png" alt="" style="margin:5px;"></a>`
- XPath: `li:nth-child(17) > a[target="_blank"]:nth-child(1)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/about/workforce

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/about/why-maryland/chinese

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Skip to content</a>`
- XPath: `#wp-skip-link`

### http://commerce.maryland.gov/fund/programs-for-businesses/medaaf

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/press-room" tabindex="0">Press Room</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(4)`

**Failure 2:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="https://go.activecalendar.com:443/doit-md/page/quicklinks/?id=bcdabd80-de40-41f2-b81e-93d1e7806ec2" tabindex="0">Events Calendar</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(5)`

**Failure 3:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="/media/document-library" tabindex="0">Document Library</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(6)`

**Failure 4:**
- Message: ARIA commands must have an accessible name
- HTML: `<li role="menuitem" class="level0"><a class="level2 static" href="http://mdbiznews.business.maryland.gov/" tabindex="0">MDBIZ News Blog</a></li>`
- XPath: `.level0[role="menuitem"]:nth-child(7)`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl04_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl04__ControlWrapper_RichImageField`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div id="ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl07_label"><div class="ms-rtestate-field"></div></div>`
- XPath: `#ctl00_PlaceHolderMain_ctl07__ControlWrapper_RichImageField`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input id="searchInputBox" name="q" class="mdgov_dbed_searchInputBox" type="text" data-placeholder="Find Information Services and more" onkeypress="return onEnter(event)">`
- XPath: `#searchInputBox`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>                                         Funding &amp; Incentives                                                                              </span>`
- XPath: `strong > span`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><strong>Electronic Funds Transfer (EFT) Program</strong></h4>`
- XPath: `div:nth-child(14) > h4`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html dir="ltr" lang="en-US" class="yui3-js-enabled responsejs ">`
- XPath: `html`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="my-breadcrumbNode" href="https://commerce.maryland.gov/fund/_layouts/15/listform.aspx?ListId=%7BAF930B35%2D7298%2D4B39%2D922E%2D8C6E3A2E6B07%7D&amp;PageType=0&amp;RootFolder=%2Ffund%2Fprograms%2Dfor%2Dbusinesses" style="margin-left: -20px;"></a>`
- XPath: `.my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbRootNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3)`

**Failure 2:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="my-breadcrumbNode">`
- XPath: `.my-breadcrumbRootNode:nth-child(3) > .my-breadcrumbNode > .my-breadcrumbNode:nth-child(3)`

**Failure 3:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `.widget > ul`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">`
- XPath: `meta[name="viewport"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="TurnOnAccessibility" style="" class="s4-notdlg noindex">`
- XPath: `#TurnOnAccessibility`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="skipNav">                         <a href="#primary_content_Block">Skip to Main Content                                                                                                                                                      </a>                     </div>`
- XPath: `.skipNav`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_sliverRight">`
- XPath: `#mdgov_sliverRight`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<span class="hidden-accessible">`
- XPath: `a[href$="maryland.gov/"] > .hidden-accessible`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="mdgov_agencyName" class="span5">`
- XPath: `#mdgov_agencyName`

*... and 11 more failures for this rule*

### http://commerce.maryland.gov/fund/programs-for-businesses/ssbci

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

### http://commerce.maryland.gov/about/key-industries/life-sciences

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) (Level A)

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre></body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<pre style="word-wrap: break-word; white-space: pre-wrap;">404 NOT FOUND</pre>`
- XPath: `pre`

