# Scan Report: https://ufo50.miraheze.org

- Issue: https://github.com/mgifford/open-scans/issues/266
- Submitted by: mgifford
- Scanned at: 2026-04-20T18:33:50.725Z
- Engines used: AXE, QUALWEB
- Scan duration: 25.3 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 100 of 100 URLs (100%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 100 of 100 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 36 of 100 URLs (36%) support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 31 of 100 URLs (31%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 88885 passed, 3619 failed, 11754 cantTell, 11548 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 20079 passed, 3021 failed, 19473 cantTell, 96 inapplicable
- Duplicate findings caught by later scanners: 2640

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://ufo50.miraheze.org/wiki/Campanella_2) | 517 | 294 | **811** | Campanella 2 - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Star_Waspir) | 381 | 226 | **607** | Star Waspir - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Grimstone) | 221 | 146 | **367** | Grimstone - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Lords_of_Diskonia) | 177 | 123 | **300** | Lords of Diskonia - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Barbuta) | 173 | 121 | **294** | Barbuta - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Avianos) | 167 | 114 | **281** | Avianos - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Quibble_Race) | 135 | 103 | **238** | Quibble Race - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Kick_Club) | 127 | 99 | **226** | Kick Club - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Special:NewFiles) | 107 | 88 | **195** | Gallery of new files - UFO 50 Wiki |
| [View Page](https://ufo50.miraheze.org/wiki/Caramel_Caramel) | 105 | 87 | **192** | Caramel Caramel - UFO 50 Wiki |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| link-name | **88** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| page-has-heading-one | **65** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| empty-heading | **65** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| meta-refresh | **64** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |
| color-contrast | **35** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| landmark-unique | **35** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| region | **30** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| image-alt | **23** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| empty-table-header | **21** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-table-header) |
| button-name | **19** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 64 page(s) - 128 occurrence(s)

**Scanner**: axe
**Rule**: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor
**Issue**: Headings should not be empty

**HTML Pattern**:
```html
<h2 id="quOO3"></h2>
```

**XPath** (use in browser DevTools):
```
#quOO3
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#quOO3')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Devilition
- https://ufo50.miraheze.org/wiki/List_of_Games
- https://ufo50.miraheze.org/wiki/Special:ListUsers
- https://ufo50.miraheze.org/wiki/Garden
- https://ufo50.miraheze.org/wiki/Main_Page
- *...and 59 more page(s)*

---

#### Pattern 2: Affects 64 page(s) - 128 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="https://miraheze.org">
```

**XPath** (use in browser DevTools):
```
a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Devilition
- https://ufo50.miraheze.org/wiki/List_of_Games
- https://ufo50.miraheze.org/wiki/Special:ListUsers
- https://ufo50.miraheze.org/wiki/Garden
- https://ufo50.miraheze.org/wiki/Main_Page
- *...and 59 more page(s)*

---

#### Pattern 3: Affects 64 page(s) - 128 occurrence(s)

**Scanner**: axe
**Rule**: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**Issue**: Delayed refresh under 20 hours must not be used

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360">
```

**XPath** (use in browser DevTools):
```
meta[http-equiv="refresh"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[http-equiv="refresh"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Devilition
- https://ufo50.miraheze.org/wiki/List_of_Games
- https://ufo50.miraheze.org/wiki/Special:ListUsers
- https://ufo50.miraheze.org/wiki/Garden
- https://ufo50.miraheze.org/wiki/Main_Page
- *...and 59 more page(s)*

---

#### Pattern 4: Affects 64 page(s) - 128 occurrence(s)

**Scanner**: axe
**Rule**: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate
**Issue**: Page should contain a level-one heading

**HTML Pattern**:
```html
<html lang="en" dir="ltr">
```

**XPath** (use in browser DevTools):
```
html
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('html')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Devilition
- https://ufo50.miraheze.org/wiki/List_of_Games
- https://ufo50.miraheze.org/wiki/Special:ListUsers
- https://ufo50.miraheze.org/wiki/Garden
- https://ufo50.miraheze.org/wiki/Main_Page
- *...and 59 more page(s)*

---

#### Pattern 5: Affects 32 page(s) - 64 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">
```

**XPath** (use in browser DevTools):
```
#p-views
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#p-views')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/
- https://ufo50.miraheze.org/wiki/Adventure
- https://ufo50.miraheze.org/wiki/Arcade
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- *...and 27 more page(s)*

---

#### Pattern 6: Affects 32 page(s) - 32 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<span>Edit</span>
```

**XPath** (use in browser DevTools):
```
a[href="/wiki/Main_Page?veaction=edit"] > span:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href="/wiki/Main_Page?veaction=edit"] > span:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/
- https://ufo50.miraheze.org/wiki/Adventure
- https://ufo50.miraheze.org/wiki/Arcade
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- *...and 27 more page(s)*

---

#### Pattern 7: Affects 30 page(s) - 60 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>
```

**XPath** (use in browser DevTools):
```
.mw-cookiewarning-text
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.mw-cookiewarning-text')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Arcade
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- *...and 25 more page(s)*

---

#### Pattern 8: Affects 30 page(s) - 31 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<span class="oo-ui-labelElement-label">OK</span>
```

**XPath** (use in browser DevTools):
```
.oo-ui-inputWidget-input > .oo-ui-labelElement-label
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.oo-ui-inputWidget-input > .oo-ui-labelElement-label')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Arcade
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- *...and 25 more page(s)*

---

#### Pattern 9: Affects 30 page(s) - 30 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<span class="oo-ui-labelElement-label">More information</span>
```

**XPath** (use in browser DevTools):
```
.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Arcade
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- *...and 25 more page(s)*

---

#### Pattern 10: Affects 21 page(s) - 42 occurrence(s)

**Scanner**: axe
**Rule**: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor
**Issue**: Table header text should not be empty

**HTML Pattern**:
```html
<th colspan="2">
```

**XPath** (use in browser DevTools):
```
tr:nth-child(2) > th[colspan="2"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('tr:nth-child(2) > th[colspan="2"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- https://ufo50.miraheze.org/wiki/Bug_Hunter
- *...and 16 more page(s)*

---

#### Pattern 11: Affects 19 page(s) - 56 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">
```

**XPath** (use in browser DevTools):
```
a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- https://ufo50.miraheze.org/wiki/Bug_Hunter
- *...and 14 more page(s)*

---

#### Pattern 12: Affects 19 page(s) - 56 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>
```

**XPath** (use in browser DevTools):
```
a[href$="File:Button1.png"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="File:Button1.png"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- https://ufo50.miraheze.org/wiki/Bug_Hunter
- *...and 14 more page(s)*

---

#### Pattern 13: Affects 19 page(s) - 52 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="//static.wikitide.net/ufo50wiki/8/8f/Button2.png" decoding="async" width="16" height="16" class="mw-file-element">
```

**XPath** (use in browser DevTools):
```
a[href$="File:Button2.png"] > .mw-file-element[width="16"][height="16"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="File:Button2.png"] > .mw-file-element[width="16"][height="16"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- https://ufo50.miraheze.org/wiki/Bug_Hunter
- *...and 14 more page(s)*

---

#### Pattern 14: Affects 19 page(s) - 52 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/wiki/File:Button2.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/8/8f/Button2.png" decoding="async" width="16" height="16" class="mw-file-element"></a>
```

**XPath** (use in browser DevTools):
```
a[href$="File:Button2.png"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="File:Button2.png"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- https://ufo50.miraheze.org/wiki/Bug_Hunter
- *...and 14 more page(s)*

---

#### Pattern 15: Affects 19 page(s) - 48 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">
```

**XPath** (use in browser DevTools):
```
img[width="300"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('img[width="300"]')`
5. The element will be highlighted

**Affected Pages**:
- https://ufo50.miraheze.org/wiki/Attactics
- https://ufo50.miraheze.org/wiki/Avianos
- https://ufo50.miraheze.org/wiki/Barbuta
- https://ufo50.miraheze.org/wiki/Block_Koala
- https://ufo50.miraheze.org/wiki/Bug_Hunter
- *...and 14 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://ufo50.miraheze.org/ | https://ufo50.miraheze.org/wiki/Main_Page | OK | 200 | yes | 11168 | 9 | 0 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-unique, link-name, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Adventure | https://ufo50.miraheze.org/wiki/Adventure | OK | 200 | no | 8396 | 3 | 0 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique |
| https://ufo50.miraheze.org/wiki/Arcade | https://ufo50.miraheze.org/wiki/Arcade | OK | 200 | no | 10186 | 43 | 0 | 0 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Attactics | https://ufo50.miraheze.org/wiki/Attactics | OK | 200 | no | 11867 | 101 | 0 | 0 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Avianos | https://ufo50.miraheze.org/wiki/Avianos | OK | 200 | no | 12669 | 167 | 0 | 0 | 0 | 109 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Barbuta | https://ufo50.miraheze.org/wiki/Barbuta | OK | 200 | no | 10979 | 173 | 0 | 0 | 0 | 116 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, list, region |
| https://ufo50.miraheze.org/wiki/Block_Koala | https://ufo50.miraheze.org/wiki/Block_Koala | OK | 200 | no | 9807 | 51 | 0 | 0 | 0 | 56 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Bug_Hunter | https://ufo50.miraheze.org/wiki/Bug_Hunter | OK | 200 | no | 11880 | 59 | 0 | 0 | 0 | 121 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Bushido_Ball | https://ufo50.miraheze.org/wiki/Bushido_Ball | OK | 200 | no | 11073 | 97 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Camouflage | https://ufo50.miraheze.org/wiki/Camouflage | OK | 200 | no | 10262 | 75 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Campanella | https://ufo50.miraheze.org/wiki/Campanella | OK | 200 | no | 11324 | 65 | 0 | 0 | 0 | 63 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Overbold | https://ufo50.miraheze.org/wiki/Overbold | OK | 200 | no | 9339 | 41 | 0 | 0 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Cheats | https://ufo50.miraheze.org/wiki/Cheats | OK | 200 | no | 10316 | 7 | 0 | 0 | 0 | 120 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Shooter | https://ufo50.miraheze.org/wiki/Shooter | OK | 200 | no | 8039 | 7 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Special:NewFiles | https://ufo50.miraheze.org/wiki/Special:NewFiles | OK | 200 | no | 12043 | 107 | 0 | 0 | 0 | 84 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Star_Waspir | https://ufo50.miraheze.org/wiki/Star_Waspir | OK | 200 | no | 10683 | 381 | 0 | 0 | 0 | 221 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, image-alt, landmark-unique, link-name |
| https://ufo50.miraheze.org/wiki/Valbrace | https://ufo50.miraheze.org/wiki/Valbrace | OK | 200 | no | 10059 | 99 | 0 | 0 | 0 | 80 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Kick_Club | https://ufo50.miraheze.org/wiki/Kick_Club | OK | 200 | no | 10794 | 127 | 0 | 0 | 0 | 94 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Grimstone | https://ufo50.miraheze.org/wiki/Grimstone | OK | 200 | no | 10387 | 221 | 0 | 0 | 0 | 142 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Mooncat | https://ufo50.miraheze.org/wiki/Mooncat | OK | 200 | no | 9903 | 71 | 0 | 0 | 0 | 64 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name |
| https://ufo50.miraheze.org/wiki/Credits | https://ufo50.miraheze.org/wiki/Credits | OK | 200 | no | 16599 | 7 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=2 | https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=2 | OK | 200 | no | 12337 | 0 | 0 | 0 | 0 | 41 | Skipped (not requested) |
| https://ufo50.miraheze.org/wiki/Campanella_2 | https://ufo50.miraheze.org/wiki/Campanella_2 | OK | 200 | no | 13374 | 517 | 0 | 0 | 0 | 288 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-heading, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Puzzle | https://ufo50.miraheze.org/wiki/Puzzle | OK | 200 | no | 8123 | 7 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Special:UploadWizard | https://ufo50.miraheze.org/wiki/Special:UploadWizard | OK | 200 | no | 8513 | 6 | 0 | 0 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Caramel_Caramel | https://ufo50.miraheze.org/wiki/Caramel_Caramel | OK | 200 | no | 10529 | 105 | 0 | 0 | 0 | 82 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Main_Page?action=purge | https://ufo50.miraheze.org/wiki/Main_Page?action=purge | OK | 200 | no | 8900 | 8 | 0 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Thinky_Play | https://ufo50.miraheze.org/wiki/Thinky_Play | OK | 200 | no | 8406 | 7 | 0 | 0 | 0 | 38 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Platform | https://ufo50.miraheze.org/wiki/Platform | OK | 200 | no | 8988 | 7 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Lords_of_Diskonia | https://ufo50.miraheze.org/wiki/Lords_of_Diskonia | OK | 200 | no | 11719 | 177 | 0 | 0 | 0 | 118 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/RPG | https://ufo50.miraheze.org/wiki/RPG | OK | 200 | no | 7774 | 7 | 0 | 0 | 0 | 37 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Night_Manor | https://ufo50.miraheze.org/wiki/Night_Manor | OK | 200 | no | 10212 | 43 | 0 | 0 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/The_Big_Bell_Race | https://ufo50.miraheze.org/wiki/The_Big_Bell_Race | OK | 200 | no | 9902 | 89 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name |
| https://ufo50.miraheze.org/wiki/Special:CiteThisPage?page=Main_Page&amp;id=6306&amp;wpFormIdentifier=titleform | https://ufo50.miraheze.org/wiki/Special:CiteThisPage?page=Main_Page&amp;id=6306&amp;wpFormIdentifier=titleform | FAIL | 403 | no | 8309 | 7 | 0 | 0 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique, region |
| https://ufo50.miraheze.org/wiki/Quibble_Race | https://ufo50.miraheze.org/wiki/Quibble_Race | OK | 200 | no | 11107 | 135 | 0 | 0 | 0 | 98 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Mini_%26_Max | https://ufo50.miraheze.org/wiki/Mini_%26_Max | OK | 200 | no | 11175 | 81 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, empty-table-header, heading-order, image-alt, landmark-unique, link-name, region |
| https://ufo50.miraheze.org/wiki/Devilition | https://ufo50.miraheze.org/wiki/Devilition | FAIL | 403 | no | 17765 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/List_of_Games | https://ufo50.miraheze.org/wiki/List_of_Games | FAIL | 403 | no | 16672 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:ListUsers | https://ufo50.miraheze.org/wiki/Special:ListUsers | FAIL | 403 | no | 17538 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Garden | https://ufo50.miraheze.org/wiki/Garden | FAIL | 403 | no | 17818 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page | https://ufo50.miraheze.org/wiki/Main_Page | FAIL | 403 | no | 17350 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Singleplayer | https://ufo50.miraheze.org/wiki/Singleplayer | FAIL | 403 | no | 17748 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Divers | https://ufo50.miraheze.org/wiki/Divers | FAIL | 403 | no | 17543 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Onion_Delivery | https://ufo50.miraheze.org/wiki/Onion_Delivery | FAIL | 403 | no | 17798 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Wikipages_most_in_need_of_work | https://ufo50.miraheze.org/wiki/Wikipages_most_in_need_of_work | FAIL | 403 | no | 17465 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Simulation | https://ufo50.miraheze.org/wiki/Simulation | FAIL | 403 | no | 17685 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Magic_Garden | https://ufo50.miraheze.org/wiki/Magic_Garden | FAIL | 403 | no | 17984 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:Statistics | https://ufo50.miraheze.org/wiki/Special:Statistics | FAIL | 403 | no | 17993 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=4 | https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=4 | FAIL | 403 | no | 18078 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Rail_Heist | https://ufo50.miraheze.org/wiki/Rail_Heist | FAIL | 403 | no | 17616 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Rock_On!_Island | https://ufo50.miraheze.org/wiki/Rock_On!_Island | FAIL | 403 | no | 18447 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Party_House | https://ufo50.miraheze.org/wiki/Party_House | FAIL | 403 | no | 17567 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Campanella_3 | https://ufo50.miraheze.org/wiki/Campanella_3 | FAIL | 403 | no | 17621 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Hot_Foot | https://ufo50.miraheze.org/wiki/Hot_Foot | FAIL | 403 | no | 17618 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Epic_Play | https://ufo50.miraheze.org/wiki/Epic_Play | FAIL | 403 | no | 16978 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=1 | https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=1 | FAIL | 403 | no | 17900 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Quick_Play | https://ufo50.miraheze.org/wiki/Quick_Play | FAIL | 403 | no | 18200 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Paint_Chase | https://ufo50.miraheze.org/wiki/Paint_Chase | FAIL | 403 | no | 18483 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=2 | https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=2 | FAIL | 403 | no | 18457 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:UserLogin?returnto=Main+Page | https://ufo50.miraheze.org/wiki/Special:UserLogin?returnto=Main+Page | FAIL | 403 | no | 18145 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:MyContributions | https://ufo50.miraheze.org/wiki/Special:MyContributions | FAIL | 403 | no | 17303 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Combatants | https://ufo50.miraheze.org/wiki/Combatants | FAIL | 403 | no | 18009 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Planet_Zoldath | https://ufo50.miraheze.org/wiki/Planet_Zoldath | FAIL | 403 | no | 18269 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Multiplayer | https://ufo50.miraheze.org/wiki/Multiplayer | FAIL | 403 | no | 18165 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Strategy | https://ufo50.miraheze.org/wiki/Strategy | FAIL | 403 | no | 17959 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/UFO_Soft | https://ufo50.miraheze.org/wiki/UFO_Soft | FAIL | 403 | no | 17344 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Warptank | https://ufo50.miraheze.org/wiki/Warptank | FAIL | 403 | no | 17982 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/MediaWiki:Citizen-footer-desc | https://ufo50.miraheze.org/wiki/MediaWiki:Citizen-footer-desc | FAIL | 403 | no | 17938 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Milestones | https://ufo50.miraheze.org/wiki/Milestones | FAIL | 403 | no | 18037 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Sport | https://ufo50.miraheze.org/wiki/Sport | FAIL | 403 | no | 18298 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:AllPages | https://ufo50.miraheze.org/wiki/Special:AllPages | FAIL | 403 | no | 17739 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Ninpek | https://ufo50.miraheze.org/wiki/Ninpek | FAIL | 403 | no | 17955 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Porgy | https://ufo50.miraheze.org/wiki/Porgy | FAIL | 403 | no | 17852 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?action=history | https://ufo50.miraheze.org/wiki/Main_Page?action=history | FAIL | 403 | no | 17992 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:WhatLinksHere/Main_Page | https://ufo50.miraheze.org/wiki/Special:WhatLinksHere/Main_Page | FAIL | 403 | no | 18189 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Vainger | https://ufo50.miraheze.org/wiki/Vainger | FAIL | 403 | no | 17959 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?action=info | https://ufo50.miraheze.org/wiki/Main_Page?action=info | FAIL | 403 | no | 18153 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Mortol | https://ufo50.miraheze.org/wiki/Mortol | FAIL | 403 | no | 17867 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/MediaWiki:Citizen-footer-tagline | https://ufo50.miraheze.org/wiki/MediaWiki:Citizen-footer-tagline | FAIL | 403 | no | 18111 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:UrlShortener?url=https%3A%2F%2Fufo50.miraheze.org%2Fwiki%2FMain_Page | https://ufo50.miraheze.org/wiki/Special:UrlShortener?url=https%3A%2F%2Fufo50.miraheze.org%2Fwiki%2FMain_Page | FAIL | 403 | no | 17156 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?action=edit | https://ufo50.miraheze.org/wiki/Main_Page?action=edit | FAIL | 403 | no | 18139 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=4 | https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=4 | FAIL | 403 | no | 17735 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:SpecialPages | https://ufo50.miraheze.org/wiki/Special:SpecialPages | FAIL | 403 | no | 17814 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:RecentChangesLinked/Main_Page | https://ufo50.miraheze.org/wiki/Special:RecentChangesLinked/Main_Page | FAIL | 403 | no | 18051 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Meta_Messages | https://ufo50.miraheze.org/wiki/Meta_Messages | FAIL | 403 | no | 18171 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Golfaria | https://ufo50.miraheze.org/wiki/Golfaria | FAIL | 403 | no | 18183 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Fist_Hell | https://ufo50.miraheze.org/wiki/Fist_Hell | FAIL | 403 | no | 17820 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Hyper_Contender | https://ufo50.miraheze.org/wiki/Hyper_Contender | FAIL | 403 | no | 18090 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=3 | https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=3 | FAIL | 403 | no | 17179 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Seaside_Drive | https://ufo50.miraheze.org/wiki/Seaside_Drive | FAIL | 403 | no | 18081 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:Random | https://ufo50.miraheze.org/wiki/Special:Random | FAIL | 403 | no | 16773 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=3 | https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=3 | FAIL | 403 | no | 17499 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Special:RecentChanges | https://ufo50.miraheze.org/wiki/Special:RecentChanges | FAIL | 403 | no | 17642 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?oldid=6306 | https://ufo50.miraheze.org/wiki/Main_Page?oldid=6306 | FAIL | 403 | no | 17663 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Talk:Main_Page?action=edit&amp;redlink=1 | https://ufo50.miraheze.org/wiki/Talk:Main_Page?action=edit&amp;redlink=1 | FAIL | 403 | no | 17548 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Rakshasa | https://ufo50.miraheze.org/wiki/Rakshasa | FAIL | 403 | no | 17928 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit | https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit | FAIL | 403 | no | 17613 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Cyber_Owls | https://ufo50.miraheze.org/wiki/Cyber_Owls | FAIL | 403 | no | 17916 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/UFO50:About | https://ufo50.miraheze.org/wiki/UFO50:About | FAIL | 403 | no | 17529 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |
| https://ufo50.miraheze.org/wiki/Mortol_II | https://ufo50.miraheze.org/wiki/Mortol_II | FAIL | 403 | no | 17799 | 8 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-name, meta-refresh, page-has-heading-one |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://ufo50.miraheze.org/

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/thumb/5/5f/Hero_Capsule.jpg/300px-Hero_Capsule.jpg" decoding="async" width="300" height="359" class="mw-file-element" srcset="//static.wikitide.net/ufo50wiki/5/5f/Hero_Capsule.jpg 1.5x">`
- XPath: `img[width="300"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/thumb/5/5f/Hero_Capsule.jpg/300px-Hero_Capsule.jpg" decoding="async" width="300" height="359" class="mw-file-element" srcset="//static.wikitide.net/ufo50wiki/5/5f/Hero_Capsule.jpg 1.5x">`
- XPath: `img[width="300"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Hero_Capsule.jpg" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/thumb/5/5f/Hero_Capsule.jpg/300px-Hero_Capsule.jpg" decoding="async" width="300" height="359" class="mw-file-element" srcset="//static.wikitide.net/ufo50wiki/5/5f/Hero_Capsule.jpg 1.5x"></a>`
- XPath: `.mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Hero_Capsule.jpg" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/thumb/5/5f/Hero_Capsule.jpg/300px-Hero_Capsule.jpg" decoding="async" width="300" height="359" class="mw-file-element" srcset="//static.wikitide.net/ufo50wiki/5/5f/Hero_Capsule.jpg 1.5x"></a>`
- XPath: `.mw-file-description`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html class="client-js skin-theme..." lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html class="client-js skin-theme..." lang="en" dir="ltr">`
- XPath: `html`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Main_Page?veaction=edit"] > span:nth-child(2)`

### https://ufo50.miraheze.org/wiki/Adventure

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Adventure?veaction=edit"] > span:nth-child(2)`

### https://ufo50.miraheze.org/wiki/Arcade

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Arcade?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="337" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[height="337"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="330" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `td:nth-child(2) > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description > .mw-file-element[height="330"][width="300"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="332" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[height="332"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="330" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `td:nth-child(1) > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description > .mw-file-element[height="330"][width="300"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="331" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[height="331"]`

*... and 13 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Ninpek_High_Scores.png" class="mw-file-description">`
- XPath: `tr:nth-child(1) > td:nth-child(1) > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Paint_Chase_High_Scores.png" class="mw-file-description">`
- XPath: `tr:nth-child(1) > td:nth-child(2) > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Magic_Garden_High_Scores.png" class="mw-file-description">`
- XPath: `tr:nth-child(1) > td:nth-child(3) > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Kick_Club_High_Scores.png" class="mw-file-description">`
- XPath: `tr:nth-child(2) > td:nth-child(1) > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Campanella.png" class="mw-file-description">`
- XPath: `a[href$="File:Campanella.png"]`

*... and 13 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Attactics

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Modes-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Modes-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Modes-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Modes-sublist"]`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[rel="nofollow"][role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Attactics?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Cheats"><a href="/wiki/Cheats" title="Cheats">Cheats</a></h4>`
- XPath: `#Cheats`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Cheats"><a href="/wiki/Cheats" title="Cheats">Cheats</a></h4>`
- XPath: `#Cheats`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="173" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 37 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Attactics.png" class="mw-file-description">`
- XPath: `a[href$="File:Attactics.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 37 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Avianos

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Ancestors-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Ancestors-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Ancestors-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Ancestors-sublist"]`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Avianos?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th>`
- XPath: `.citizen-overflow-wrapper:nth-child(6) > .citizen-overflow-content > .wikitable > tbody > tr:nth-child(1) > th:nth-child(1)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th>`
- XPath: `.citizen-overflow-wrapper:nth-child(9) > .citizen-overflow-content > .wikitable > tbody > tr:nth-child(1) > th:nth-child(1)`

**Failure 4:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th>`
- XPath: `.citizen-overflow-wrapper:nth-child(12) > .citizen-overflow-content > .wikitable > tbody > tr:nth-child(1) > th:nth-child(1)`

**Failure 5:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th>`
- XPath: `#citizen-section-2 > .citizen-overflow-wrapper:nth-child(15) > .citizen-overflow-content > .wikitable > tbody > tr:nth-child(1) > th:nth-child(1)`

*... and 7 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 65 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Avianos_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 65 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Barbuta

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Barbuta?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 73 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Barbuta_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 73 more failures for this rule*

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(6)`

**Failure 2:**
- First identified: 2026-04-20
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(6)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Block_Koala

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Levels-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Levels-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Levels-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Levels-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[accesskey="v"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="173" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 13 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Block_Koala.png" class="mw-file-description">`
- XPath: `a[href$="File:Block_Koala.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 13 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Bug_Hunter

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Bugs-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Bugs-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Modules-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Modules-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

*... and 3 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Bug_Hunter?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Terrain_and_Holes">Terrain and Holes</h4>`
- XPath: `#Terrain_and_Holes`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Movement_Modules"><big>Movement Modules</big></h4>`
- XPath: `#Movement_Modules`

**Failure 3:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 4:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Terrain_and_Holes">Terrain and Holes</h4>`
- XPath: `#Terrain_and_Holes`

**Failure 5:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Movement_Modules"><big>Movement Modules</big></h4>`
- XPath: `#Movement_Modules`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 13 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Bug_Hunter_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 13 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Bushido_Ball

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Character_Tips-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Character_Tips-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Character_Tips-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Character_Tips-sublist"]`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Striking_&amp;_Rolling"><span id="Striking_.26_Rolling"></span>Striking &amp; Rolling</h4>`
- XPath: `#Striking_\&_Rolling`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h6 id="Kotaro">Kotaro</h6>`
- XPath: `#Kotaro`

**Failure 3:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Cheats"><a href="/wiki/Cheats" title="Cheats">Cheats</a></h4>`
- XPath: `#Cheats`

**Failure 4:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Striking_&amp;_Rolling"><span id="Striking_.26_Rolling"></span>Striking &amp; Rolling</h4>`
- XPath: `#Striking_\&_Rolling`

**Failure 5:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h6 id="Kotaro">Kotaro</h6>`
- XPath: `#Kotaro`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="173" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `td > .mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 33 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Bushido_Ball.png" class="mw-file-description">`
- XPath: `a[href$="File:Bushido_Ball.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `td > .mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 33 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Camouflage

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Level_Layouts-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Level_Layouts-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Level_Layouts-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Level_Layouts-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[rel="nofollow"][role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Camouflage?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 25 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Camouflage_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 25 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Campanella

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Stage_Layouts_&amp;_Coffee_Locations-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `#toc-Stage_Layouts_\&_Coffee_Locations > .citizen-toc-toggle`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Stage_Layouts_&amp;_Coffee_Locations-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `#toc-Stage_Layouts_\&_Coffee_Locations > .citizen-toc-toggle`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[rel="nofollow"][role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Campanella?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 19 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Campanella_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 19 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Overbold

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Overbold?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="300"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/de/ButtonLeft.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:ButtonLeft.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/9/9b/ButtonUp.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:ButtonUp.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/a/ab/ButtonRight.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:ButtonRight.png"] > .mw-file-element[width="16"][height="16"]`

*... and 11 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Overbold_Menu.png" class="mw-file-description">`
- XPath: `a[href$="File:Overbold_Menu.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Overbold_Gameplay.png" class="mw-file-description">`
- XPath: `.mw-halign-right > .mw-file-description`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:ButtonLeft.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/de/ButtonLeft.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:ButtonLeft.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:ButtonUp.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/9/9b/ButtonUp.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:ButtonUp.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:ButtonRight.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/a/ab/ButtonRight.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:ButtonRight.png"]`

*... and 11 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Cheats

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `a[role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Cheats?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Shooter

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Shooter?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Special:NewFiles

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `a[role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">Search</span>`
- XPath: `button[value="Search"] > .oo-ui-labelElement-label`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `button[name="disablecookiewarning"] > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="footer-places">`
- XPath: `#footer-places`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="footer-places">`
- XPath: `#footer-places`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:S38_DoorFairy_0.png" class="mw-file-description"><img alt="" src="//static.wikitide.net/ufo50wiki/4/4e/S38_DoorFairy_0.png" decoding="async" loading="lazy" width="120" height="120"></a>`
- XPath: `.mw-file-description[href$="File:S38_DoorFairy_0.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:S38_DoorShop_0.png" class="mw-file-description"><img alt="" src="//static.wikitide.net/ufo50wiki/5/57/S38_DoorShop_0.png" decoding="async" loading="lazy" width="120" height="113"></a>`
- XPath: `.mw-file-description[href$="File:S38_DoorShop_0.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:S38_Door_0.png" class="mw-file-description"><img alt="" src="//static.wikitide.net/ufo50wiki/5/51/S38_Door_0.png" decoding="async" loading="lazy" width="120" height="120"></a>`
- XPath: `.mw-file-description[href$="File:S38_Door_0.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Hero_Capsule.jpg" class="mw-file-description">`
- XPath: `.mw-file-description[href$="File:Hero_Capsule.jpg"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Library_Hero.jpg" class="mw-file-description">`
- XPath: `.mw-file-description[href$="File:Library_Hero.jpg"]`

*... and 95 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Star_Waspir

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-General_Strategy-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-General_Strategy-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-General_Strategy-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-General_Strategy-sublist"]`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 181 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Waspir-title.png" class="mw-file-description">`
- XPath: `a[href$="File:Waspir-title.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 181 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

### https://ufo50.miraheze.org/wiki/Valbrace

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Spells-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Spells-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Valbrace?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 39 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Valbracetitle.png" class="mw-file-description">`
- XPath: `a[href$="File:Valbracetitle.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 39 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Kick_Club

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Scoring-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Scoring-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Enemy_List-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Enemy_List-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

*... and 3 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Kick_Club?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `#citizen-section-0 > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description > .mw-file-element[width="300"][height="169"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/f/ff/S26_cFood_0.png" decoding="async" width="32" height="32" class="mw-file-element">`
- XPath: `a[href$="File:S26_cFood_0.png"] > .mw-file-element[width="32"][height="32"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/6/6a/S26_cFood_1.png" decoding="async" width="32" height="32" class="mw-file-element">`
- XPath: `a[href$="File:S26_cFood_1.png"] > .mw-file-element[width="32"][height="32"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/0/00/S26_cFood_2.png" decoding="async" width="32" height="32" class="mw-file-element">`
- XPath: `a[href$="File:S26_cFood_2.png"] > .mw-file-element[width="32"][height="32"]`

*... and 49 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Kick-club.png" class="mw-file-description">`
- XPath: `a[href$="File:Kick-club.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Kick_club_gameplay.png" class="mw-file-description">`
- XPath: `#citizen-section-0 > .mw-default-size[typeof="mw:File/Thumb"] > .mw-file-description`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:S26_cFood_0.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/f/ff/S26_cFood_0.png" decoding="async" width="32" height="32" class="mw-file-element"></a>`
- XPath: `a[href$="File:S26_cFood_0.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:S26_cFood_1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/6/6a/S26_cFood_1.png" decoding="async" width="32" height="32" class="mw-file-element"></a>`
- XPath: `a[href$="File:S26_cFood_1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:S26_cFood_2.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/0/00/S26_cFood_2.png" decoding="async" width="32" height="32" class="mw-file-element"></a>`
- XPath: `a[href$="File:S26_cFood_2.png"]`

*... and 49 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Grimstone

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Grimstone?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 101 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Grimstone_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 101 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Mooncat

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Endings-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Endings-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Endings-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Endings-sublist"]`

*... and 1 more failures for this rule*

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Controls">Controls</h4>`
- XPath: `#Controls`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 3:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Controls">Controls</h4>`
- XPath: `#Controls`

**Failure 4:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="173" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="300"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

*... and 23 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Mooncat.png" class="mw-file-description">`
- XPath: `a[href$="File:Mooncat.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Mooncat_gameplay.png" class="mw-file-description">`
- XPath: `figure[typeof="mw:File/Thumb"] > .mw-file-description`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `.mw-default-size[typeof="mw:File"]:nth-child(4) > .mw-file-description[href$="File:Button1.png"]`

*... and 23 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Mooncat?veaction=edit"] > span:nth-child(2)`

### https://ufo50.miraheze.org/wiki/Credits

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[rel="nofollow"][role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Credits?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Campanella_2

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Upgrades_and_Items-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Upgrades_and_Items-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Bosses-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Bosses-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Strategy-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Strategy-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

*... and 3 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[rel="nofollow"][role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h3 id=""><span class="mw-default-size" typeof="mw:File"><a href="/wiki/File:S38_eeRotondo_0.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/8/8f/S38_eeRotondo_0.png" decoding="async" width="48" height="32" class="mw-file-element"></a></span></h3>`
- XPath: `#citizen-section-3 > .mw-heading3.mw-heading:nth-child(2) > h3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h3 id=""><span class="mw-default-size" typeof="mw:File"><a href="/wiki/File:S38_eeRotondo_0.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/8/8f/S38_eeRotondo_0.png" decoding="async" width="48" height="32" class="mw-file-element"></a></span></h3>`
- XPath: `#citizen-section-3 > .mw-heading3.mw-heading:nth-child(2) > h3`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[height="16"][width="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[height="16"][width="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[height="16"][width="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[height="16"][width="16"]`

*... and 243 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Campanella_2_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 245 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Puzzle

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Puzzle?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Special:UploadWizard

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `a[role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `button > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="footer-places">`
- XPath: `#footer-places`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="footer-places">`
- XPath: `#footer-places`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Caramel_Caramel

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Stage_Overviews_and_Enemies-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `#toc-Stage_Overviews_and_Enemies > .citizen-toc-toggle`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-The_True_Boss-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-The_True_Boss-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Stage_Overviews_and_Enemies-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `#toc-Stage_Overviews_and_Enemies > .citizen-toc-toggle`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Extra_Lives">Extra Lives</h4>`
- XPath: `#Extra_Lives`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Extra_Lives">Extra Lives</h4>`
- XPath: `#Extra_Lives`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 39 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Caramel-title.png" class="mw-file-description">`
- XPath: `a[href$="File:Caramel-title.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 39 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Main_Page?action=purge

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `a[role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Main_Page?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `#ooui-php-3 > .oo-ui-inputWidget-input[type="submit"][value="OK"] > .oo-ui-labelElement-label`

**Failure 4:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `button[name="disablecookiewarning"] > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Thinky_Play

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `a[role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Platform

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/Platform?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Lords_of_Diskonia

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th> </th>`
- XPath: `.citizen-overflow-content > .mw-collapsible.mw-collapsed.mw-made-collapsible > tbody > tr:nth-child(1) > th:nth-child(1)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th> </th>`
- XPath: `.citizen-overflow-content > .mw-collapsible.mw-collapsed.mw-made-collapsible > tbody > tr:nth-child(1) > th:nth-child(1)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 77 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Lords_of_Diskonia.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 77 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/RPG

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[href="/wiki/RPG?veaction=edit"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Night_Manor

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [alt-v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 11 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Manor-title.png" class="mw-file-description">`
- XPath: `a[href$="File:Manor-title.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 11 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/The_Big_Bell_Race

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Courses-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Courses-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Secrets_&amp;_Trivia-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Secrets_&_Trivia-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Gameplay-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Courses-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Courses-sublist"]`

*... and 1 more failures for this rule*

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Game_Connections">Game Connections</h4>`
- XPath: `#Game_Connections`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Keyboard_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:XIconsXBox_X.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:Button1.png"] > .mw-file-element[width="16"][height="16"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:SKeyIcons_Z.png"] > .mw-file-element[width="16"][height="16"]`

*... and 33 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:The_Big_Bell_Race_-_Title_-_Screen.png" class="mw-file-description">`
- XPath: `th[colspan="2"] > span[typeof="mw:File"] > .mw-file-description`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Keyboard_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/d5/Keyboard_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Keyboard_X.png"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:XIconsXBox_X.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/e/e5/XIconsXBox_X.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:XIconsXBox_X.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Button1.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/1/19/Button1.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:Button1.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:SKeyIcons_Z.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/2/24/SKeyIcons_Z.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:SKeyIcons_Z.png"]`

*... and 33 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[accesskey="v"] > span:nth-child(2)`

### https://ufo50.miraheze.org/wiki/Special:CiteThisPage?page=Main_Page&amp;id=6306&amp;wpFormIdentifier=titleform

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `a[role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">Submit</span>`
- XPath: `button[value="Submit"] > .oo-ui-labelElement-label`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `button[name="disablecookiewarning"] > .oo-ui-labelElement-label`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="footer-places">`
- XPath: `#footer-places`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="footer-places">`
- XPath: `#footer-places`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Quibble_Race

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Gameplay-sublist" class="citizen-toc-toggle" aria-expanded="false"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `.citizen-toc-toggle`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[role="button"][rel="nofollow"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[accesskey="v"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `.mw-default-size[typeof="mw:File/Thumb"]:nth-child(3) > .mw-file-description > .mw-file-element[width="300"][height="169"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `.mw-default-size[typeof="mw:File/Thumb"]:nth-child(4) > .mw-file-description > .mw-file-element[width="300"][height="169"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="44" height="41" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `a[href$="File:Qr-research.png"] > .mw-file-element[width="44"][height="41"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="44" height="41" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `a[href$="File:Qr-thug.png"] > .mw-file-element[width="44"][height="41"]`

*... and 57 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Quibble-title.png" class="mw-file-description">`
- XPath: `a[href$="File:Quibble-title.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Quibble_race_gambling.png" class="mw-file-description">`
- XPath: `.mw-default-size[typeof="mw:File/Thumb"]:nth-child(3) > .mw-file-description`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Quibble_race_gameplay.png" class="mw-file-description">`
- XPath: `.mw-default-size[typeof="mw:File/Thumb"]:nth-child(4) > .mw-file-description`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Qr-research.png" class="mw-file-description">`
- XPath: `a[href$="File:Qr-research.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Qr-thug.png" class="mw-file-description">`
- XPath: `a[href$="File:Qr-thug.png"]`

*... and 57 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Mini_%26_Max

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Quests-sublist" class="citizen-toc-toggle"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Quests-sublist"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Upgrades-sublist" class="citizen-toc-toggle"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Upgrades-sublist"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Items_&amp;_Blocks-sublist" class="citizen-toc-toggle"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Items_&_Blocks-sublist"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Characters-sublist" class="citizen-toc-toggle"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Characters-sublist"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Buttons must have discernible text
- HTML: `<button aria-controls="toc-Meta_Secrets-sublist" class="citizen-toc-toggle"> 				<span class="citizen-ui-icon mw-ui-icon-wikimedia-collapse"></span> 				<span></span> 			</button>`
- XPath: `button[aria-controls="toc-Meta_Secrets-sublist"]`

*... and 5 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">More information</span>`
- XPath: `.oo-ui-buttonElement-button[rel="nofollow"][role="button"] > .oo-ui-labelElement-label`

**Failure 2:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Edit</span>`
- XPath: `a[title="Edit this page [v]"] > span:nth-child(2)`

**Failure 3:**
- First identified: 2026-04-20
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oo-ui-labelElement-label">OK</span>`
- XPath: `.oo-ui-inputWidget-input > .oo-ui-labelElement-label`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Table header text should not be empty
- HTML: `<th colspan="2">`
- XPath: `tr:nth-child(2) > th[colspan="2"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Alternate_Appearances">Alternate Appearances</h4>`
- XPath: `#Alternate_Appearances`

**Failure 2:**
- First identified: 2026-04-20
- Message: Heading levels should only increase by one
- HTML: `<h4 id="Alternate_Appearances">Alternate Appearances</h4>`
- XPath: `#Alternate_Appearances`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/thumb/c/ca/Mini_%26_Max.png/260px-Mini_%26_Max.png" decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.net/ufo50wiki/c/ca/Mini_%26_Max.png 1.5x">`
- XPath: `img[width="260"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.ne..." decoding="async" width="300" height="169" class="mw-file-element" srcset="//static.wikitide.ne...">`
- XPath: `img[width="300"]`

**Failure 3:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/d/de/ButtonLeft.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:ButtonLeft.png"] > img[width="16"][height="16"][decoding="async"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/9/9b/ButtonUp.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:ButtonUp.png"] > img[width="16"][height="16"][decoding="async"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Images must have alternative text
- HTML: `<img src="//static.wikitide.net/ufo50wiki/a/ab/ButtonRight.png" decoding="async" width="16" height="16" class="mw-file-element">`
- XPath: `a[href$="File:ButtonRight.png"] > img[width="16"][height="16"][decoding="async"]`

*... and 25 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

**Failure 2:**
- First identified: 2026-04-20
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="p-views" class="citizen-menu mw-portlet mw-portlet-views">`
- XPath: `#p-views`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Mini_%26_Max.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/thumb/c/ca/Mini_%26_Max.png/260px-Mini_%26_Max.png" decoding="async" width="260" height="146" class="mw-file-element" srcset="//static.wikitide.net/ufo50wiki/c/ca/Mini_%26_Max.png 1.5x"></a>`
- XPath: `a[href$="File:Mini_%26_Max.png"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:Mini_n_max_gameplay.png" class="mw-file-description">`
- XPath: `.mw-halign-right > .mw-file-description`

**Failure 3:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:ButtonLeft.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/d/de/ButtonLeft.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:ButtonLeft.png"]`

**Failure 4:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:ButtonUp.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/9/9b/ButtonUp.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:ButtonUp.png"]`

**Failure 5:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="/wiki/File:ButtonRight.png" class="mw-file-description"><img src="//static.wikitide.net/ufo50wiki/a/ab/ButtonRight.png" decoding="async" width="16" height="16" class="mw-file-element"></a>`
- XPath: `a[href$="File:ButtonRight.png"]`

*... and 25 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

**Failure 2:**
- First identified: 2026-04-20
- Message: All page content should be contained by landmarks
- HTML: `<div class="mw-cookiewarning-text"><span>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span></div>`
- XPath: `.mw-cookiewarning-text`

### https://ufo50.miraheze.org/wiki/Devilition

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/List_of_Games

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:ListUsers

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Garden

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Singleplayer

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Divers

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Onion_Delivery

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Wikipages_most_in_need_of_work

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Simulation

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Magic_Garden

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:Statistics

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=4

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Rail_Heist

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Rock_On!_Island

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Party_House

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Campanella_3

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Hot_Foot

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Epic_Play

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=1

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Quick_Play

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Paint_Chase

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=2

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:UserLogin?returnto=Main+Page

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:MyContributions

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Combatants

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Planet_Zoldath

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Multiplayer

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Strategy

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/UFO_Soft

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Warptank

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/MediaWiki:Citizen-footer-desc

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Milestones

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Sport

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:AllPages

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Ninpek

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Porgy

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?action=history

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:WhatLinksHere/Main_Page

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Vainger

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?action=info

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Mortol

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/MediaWiki:Citizen-footer-tagline

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:UrlShortener?url=https%3A%2F%2Fufo50.miraheze.org%2Fwiki%2FMain_Page

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?action=edit

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=4

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:SpecialPages

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:RecentChangesLinked/Main_Page

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Meta_Messages

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Golfaria

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Fist_Hell

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Hyper_Contender

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?action=edit&amp;section=3

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Seaside_Drive

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:Random

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit&amp;section=3

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Special:RecentChanges

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?oldid=6306

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Talk:Main_Page?action=edit&amp;redlink=1

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Rakshasa

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Main_Page?veaction=edit

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Cyber_Owls

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/UFO50:About

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

### https://ufo50.miraheze.org/wiki/Mortol_II

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

**Failure 2:**
- First identified: 2026-04-20
- Message: Headings should not be empty
- HTML: `<h2 id="quOO3"></h2>`
- XPath: `#quOO3`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

**Failure 2:**
- First identified: 2026-04-20
- Message: Links must have discernible text
- HTML: `<a href="https://miraheze.org">`
- XPath: `a`

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-20
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-20
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr">`
- XPath: `html`

