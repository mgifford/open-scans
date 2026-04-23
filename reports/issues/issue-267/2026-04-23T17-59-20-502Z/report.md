# Scan Report: AB Test

- Issue: https://github.com/mgifford/open-scans/issues/267
- Submitted by: mackh
- Scanned at: 2026-04-23T17:58:24.789Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 1.5 minutes
- Total URLs submitted: 20
- Accepted public URLs: 20
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 200 passed, 100 failed, 0 cantTell, 1580 inapplicable
- Equal Access outcomes: 580 passed, 60 failed (60 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://affinitybridge.com/) | 5 | 3 | **8** | Home \| Affinity Bridge |
| [View Page](https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together) | 5 | 3 | **8** | Wilderness Committee: Defending Nature Together \| Affinity Bridge |
| [View Page](https://affinitybridge.com/about/our-team/robb-davis) | 5 | 3 | **8** | Robb Davis \| Affinity Bridge |
| [View Page](https://affinitybridge.com/work/case-study/belonging-network-creating-community-online) | 5 | 3 | **8** | Belonging Network: Creating a Community Online \| Affinity Bridge |
| [View Page](https://affinitybridge.com/blog/development/drupal-7-end-of-life) | 5 | 3 | **8** | Drupal 7 End-of-life \| Affinity Bridge |
| [View Page](https://affinitybridge.com/work/case-study/musqueam-indian-band-building-vibrant-community) | 5 | 3 | **8** | Musqueam Indian Band: Building a Vibrant Community \| Affinity Bridge |
| [View Page](https://affinitybridge.com/blog/insights/tips-writing-effective-alt-text) | 5 | 3 | **8** | Tips for Writing Effective Alt Text \| Affinity Bridge |
| [View Page](https://affinitybridge.com/blog/culture-community/our-journey-becoming-b-corp) | 5 | 3 | **8** | Our Journey to Becoming a B Corp \| Affinity Bridge |
| [View Page](https://affinitybridge.com/about/our-team/mack-hardy) | 5 | 3 | **8** | Mack Hardy \| Affinity Bridge |
| [View Page](https://affinitybridge.com/blog/insights/matching-process-your-project) | 5 | 3 | **8** | Matching the Process to Your Project \| Affinity Bridge |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| html-has-lang | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| landmark-one-main | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html><head>
<title>403 Forbidden</title>
</head><body>
<h1>Forbidden</h1>
<p>You don't have permission to access this resource.</p>
<hr>
<address>Apache Server at affinitybridge.com Port 443</address>

</body></html>
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
- https://affinitybridge.com
- https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together
- https://affinitybridge.com/about/our-team/robb-davis
- https://affinitybridge.com/work/case-study/belonging-network-creating-community-online
- https://affinitybridge.com/blog/development/drupal-7-end-of-life
- *...and 15 more page(s)*

---

#### Pattern 2: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html><head>
<title>403 Forbidden</title>
</head><body>
<h1>Forbidden</h1>
<p>You don't have permission to access this resource.</p>
<hr>
<address>Apache Server at affinitybridge.com Port 443</address>

</body></html>
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
- https://affinitybridge.com
- https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together
- https://affinitybridge.com/about/our-team/robb-davis
- https://affinitybridge.com/work/case-study/belonging-network-creating-community-online
- https://affinitybridge.com/blog/development/drupal-7-end-of-life
- *...and 15 more page(s)*

---

#### Pattern 3: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h1>Forbidden</h1>
```

**XPath** (use in browser DevTools):
```
h1
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h1')`
5. The element will be highlighted

**Affected Pages**:
- https://affinitybridge.com
- https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together
- https://affinitybridge.com/about/our-team/robb-davis
- https://affinitybridge.com/work/case-study/belonging-network-creating-community-online
- https://affinitybridge.com/blog/development/drupal-7-end-of-life
- *...and 15 more page(s)*

---

#### Pattern 4: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p>You don't have permission to access this resource.</p>
```

**XPath** (use in browser DevTools):
```
p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('p')`
5. The element will be highlighted

**Affected Pages**:
- https://affinitybridge.com
- https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together
- https://affinitybridge.com/about/our-team/robb-davis
- https://affinitybridge.com/work/case-study/belonging-network-creating-community-online
- https://affinitybridge.com/blog/development/drupal-7-end-of-life
- *...and 15 more page(s)*

---

#### Pattern 5: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<address>Apache Server at affinitybridge.com Port 443</address>
```

**XPath** (use in browser DevTools):
```
address
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('address')`
5. The element will be highlighted

**Affected Pages**:
- https://affinitybridge.com
- https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together
- https://affinitybridge.com/about/our-team/robb-davis
- https://affinitybridge.com/work/case-study/belonging-network-creating-community-online
- https://affinitybridge.com/blog/development/drupal-7-end-of-life
- *...and 15 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://affinitybridge.com | https://affinitybridge.com/ | OK | 200 | no | 6868 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together | https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together | OK | 200 | no | 4379 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/about/our-team/robb-davis | https://affinitybridge.com/about/our-team/robb-davis | OK | 200 | no | 4361 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/work/case-study/belonging-network-creating-community-online | https://affinitybridge.com/work/case-study/belonging-network-creating-community-online | OK | 200 | no | 4413 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/blog/development/drupal-7-end-of-life | https://affinitybridge.com/blog/development/drupal-7-end-of-life | OK | 200 | no | 4319 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/work/case-study/musqueam-indian-band-building-vibrant-community | https://affinitybridge.com/work/case-study/musqueam-indian-band-building-vibrant-community | OK | 200 | no | 4352 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/blog/insights/tips-writing-effective-alt-text | https://affinitybridge.com/blog/insights/tips-writing-effective-alt-text | OK | 200 | no | 4304 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/blog/culture-community/our-journey-becoming-b-corp | https://affinitybridge.com/blog/culture-community/our-journey-becoming-b-corp | OK | 200 | no | 4298 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/about/our-team/mack-hardy | https://affinitybridge.com/about/our-team/mack-hardy | OK | 200 | no | 4294 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/blog/insights/matching-process-your-project | https://affinitybridge.com/blog/insights/matching-process-your-project | OK | 200 | no | 4367 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/services/maintenance-growth | https://affinitybridge.com/services/maintenance-growth | OK | 200 | no | 4388 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/about/b-corp | https://affinitybridge.com/about/b-corp | OK | 200 | no | 4345 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/about/equity-diversity-interdependence-justice | https://affinitybridge.com/about/equity-diversity-interdependence-justice | OK | 200 | no | 4341 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/work/case-study/vancouver-mural-festival-app-connecting-through-art | https://affinitybridge.com/work/case-study/vancouver-mural-festival-app-connecting-through-art | OK | 200 | no | 4428 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/blog/strategy-ux-design/continuous-investment-product-centred-approach | https://affinitybridge.com/blog/strategy-ux-design/continuous-investment-product-centred-approach | OK | 200 | no | 4300 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/about/our-team/clayton-thomas-muller | https://affinitybridge.com/about/our-team/clayton-thomas-muller | OK | 200 | no | 4291 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/about/our-team/zoe-neill-st-clair | https://affinitybridge.com/about/our-team/zoe-neill-st-clair | OK | 200 | no | 4285 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/blog/insights/amplifying-messaging-through-online-education | https://affinitybridge.com/blog/insights/amplifying-messaging-through-online-education | OK | 200 | no | 4315 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/work/case-study/access-pro-bono-streamlining-access-legal-help | https://affinitybridge.com/work/case-study/access-pro-bono-streamlining-access-legal-help | OK | 200 | no | 4390 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |
| https://affinitybridge.com/work/case-study/kids-boost-immunity-donating-vaccines-worldwide | https://affinitybridge.com/work/case-study/kids-boost-immunity-donating-vaccines-worldwide | OK | 200 | no | 4350 | 5 | 0 | 3 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, skip_main_exists |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://affinitybridge.com

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/work/case-study/wilderness-committee-defending-nature-together

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/about/our-team/robb-davis

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/work/case-study/belonging-network-creating-community-online

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/blog/development/drupal-7-end-of-life

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/work/case-study/musqueam-indian-band-building-vibrant-community

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/blog/insights/tips-writing-effective-alt-text

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/blog/culture-community/our-journey-becoming-b-corp

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/about/our-team/mack-hardy

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/blog/insights/matching-process-your-project

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/services/maintenance-growth

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/about/b-corp

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/about/equity-diversity-interdependence-justice

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/work/case-study/vancouver-mural-festival-app-connecting-through-art

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/blog/strategy-ux-design/continuous-investment-product-centred-approach

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/about/our-team/clayton-thomas-muller

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/about/our-team/zoe-neill-st-clair

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/blog/insights/amplifying-messaging-through-online-education

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/work/case-study/access-pro-bono-streamlining-access-legal-help

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

### https://affinitybridge.com/work/case-study/kids-boost-immunity-donating-vaccines-worldwide

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-23
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: Document should have one main landmark
- HTML: `<html><head> <title>403 Forbidden</title> </head><body> <h1>Forbidden</h1> <p>You don't have permission to access this resource.</p> <hr> <address>Apache Server at affinitybridge.com Port 443</address>  </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<h1>Forbidden</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<p>You don't have permission to access this resource.</p>`
- XPath: `p`

**Failure 3:**
- First identified: 2026-04-23
- Message: All page content should be contained by landmarks
- HTML: `<address>Apache Server at affinitybridge.com Port 443</address>`
- XPath: `address`

