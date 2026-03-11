# Scan Report: Barcelona.cat

- Issue: https://github.com/mgifford/open-scans/issues/62
- Submitted by: mgifford
- Scanned at: 2026-03-11T00:59:07.382Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 7.4 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 75605 passed, 2503 failed, 1937 cantTell, 4811 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 8592 passed, 608 failed (608 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 68

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/festes-majors) | 74 | 0 | 0 | 4 | 0 | **78** | https://www.barcelona.cat/en/what-to-do-in-bcn/festes-majors |
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films) | 74 | 0 | 0 | 4 | 0 | **78** | https://www.barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films |
| [View Page](https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list) | 74 | 0 | 0 | 4 | 0 | **78** | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list |
| [View Page](https://www.barcelona.cat/ca/que-pots-fer-a-bcn/llistat) | 74 | 0 | 0 | 4 | 0 | **78** | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/llistat |
| [View Page](https://www.barcelona.cat/ca/implicat) | 29 | 0 | 0 | 41 | 0 | **70** | Implica&#039;t \| Barcelona.cat \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/ca/treball-i-empresa) | 27 | 0 | 0 | 41 | 0 | **68** | Treball i empresa \| Barcelona.cat \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/ca/que-pots-fer-a-bcn) | 33 | 0 | 0 | 23 | 0 | **56** | Què es pot fer a Barcelona \| Barcelona.cat \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/ca) | 35 | 0 | 0 | 18 | 0 | **53** | El portal web oficial de Barcelona \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/ca) | 35 | 0 | 0 | 18 | 0 | **53** | El portal web oficial de Barcelona \| Ajuntament de Barcelona |
| [View Page](https://www.barcelona.cat/en) | 35 | 0 | 0 | 18 | 0 | **53** | The official Barcelona website \| Barcelona City Council |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-no-duplicate-banner | **89** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| region | **89** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| tabindex | **89** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/tabindex) |
| image-alt | **69** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| aria-required-children | **20** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-required-children) |
| color-contrast | **19** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| landmark-one-main | **11** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| page-has-heading-one | **11** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| frame-title | **8** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |
| aria-allowed-role | **8** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 89 page(s) - 267 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<li>
```

**XPath** (use in browser DevTools):
```
#ajuntament--prefooter > .container > ul > li:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ajuntament--prefooter > .container > ul > li:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca
- *...and 84 more page(s)*

---

#### Pattern 2: Affects 89 page(s) - 89 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">
```

**XPath** (use in browser DevTools):
```
#brand
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#brand')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca
- *...and 84 more page(s)*

---

#### Pattern 3: Affects 78 page(s) - 78 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > .llistat > li > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > .llistat > li > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca
- *...and 73 more page(s)*

---

#### Pattern 4: Affects 39 page(s) - 39 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">
```

**XPath** (use in browser DevTools):
```
.menu-2 > .icona > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.menu-2 > .icona > img')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/ca/que-pots-fer-a-bcn
- https://barcelona.cat/es/que-hacer-en-bcn
- https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados
- *...and 34 more page(s)*

---

#### Pattern 5: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Addresses</h2>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 6: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Contact</h2>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 7: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p><a href="https://atencioenlinia.ajuntament.barcelona.cat/en/fitxa/resultat-busqueda?origen=WEB_BARCELONA_CAT&amp;tema=7&amp;element=1121">Contact form</a></p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > .llistat > li:nth-child(1) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > .llistat > li:nth-child(1) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 8: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p><a href="tel: 010">010</a> (administrative procedures and information for the public)</p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 9: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p><a href="tel: 934 027 000">934 027 000</a> (call centre)</p>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > p
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > p')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 10: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Follow us on:</h2>
```

**XPath** (use in browser DevTools):
```
.ajuntament-xarxes-socials > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ajuntament-xarxes-socials > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 11: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Instagram. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(1) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(1) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 12: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Tik tok. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(2) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(2) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 13: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Youtube. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 14: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Telegram. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
a[href$="BcnAjuntament"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="BcnAjuntament"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

#### Pattern 15: Affects 33 page(s) - 33 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="sr-only">Whatsapp. Open in a new window</span>
```

**XPath** (use in browser DevTools):
```
li:nth-child(5) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(5) > a[title="Open in a new window"][target="_blank"] > .sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://barcelona.cat/en/living-in-bcn/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility
- https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council
- https://barcelona.cat/en
- https://barcelona.cat/en/catalan-national-day-2022
- *...and 28 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://barcelona.cat/ | https://www.barcelona.cat/ca | OK | 200 | yes | 10862 | 35 | 0 | 0 | 18 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, keyboard-accessible/focus-order, keyboard-accessible/tabindex, labels-and-names/frame-title, labels-and-names/label-title-only, landmarks/landmark-unique, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/en/living-in-bcn/accessibility | https://www.barcelona.cat/en/living-in-bcn/accessibility | OK | 200 | yes | 5087 | 24 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, aria/presentation-role-conflict, distinguishable/color-contrast, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility | OK | 200 | yes | 4630 | 24 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council | OK | 200 | yes | 6305 | 24 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca | https://www.barcelona.cat/ca | OK | 200 | yes | 5640 | 35 | 0 | 0 | 18 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, keyboard-accessible/focus-order, keyboard-accessible/tabindex, labels-and-names/frame-title, labels-and-names/label-title-only, landmarks/landmark-unique, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/en | https://www.barcelona.cat/en | OK | 200 | yes | 7677 | 35 | 0 | 0 | 18 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, keyboard-accessible/focus-order, keyboard-accessible/tabindex, labels-and-names/frame-title, labels-and-names/label-title-only, landmarks/landmark-unique, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/es | https://www.barcelona.cat/es | OK | 200 | yes | 7793 | 35 | 0 | 0 | 18 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-progressbar-name, aria-prohibited-attr, button-name, color-contrast, frame-title, html-lang-valid, image-alt, landmark-no-duplicate-banner, landmark-unique, link-name, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, keyboard-accessible/focus-order, keyboard-accessible/tabindex, labels-and-names/frame-title, labels-and-names/label-title-only, landmarks/landmark-unique, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/canelons | https://www.barcelona.cat/ca/canelons | OK | 200 | yes | 4932 | 23 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/coneixbcn | https://www.barcelona.cat/ca/coneixbcn | OK | 200 | yes | 4750 | 25 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-children, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/diada-nacional-de-catalunya-2022 | https://www.barcelona.cat/ca/diada-nacional-de-catalunya-2022 | OK | 200 | yes | 4824 | 23 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/implicat | https://www.barcelona.cat/ca/implicat | OK | 200 | yes | 5002 | 29 | 0 | 0 | 41 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, keyboard-accessible/focus-order, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/pagina-imatge-promocional | https://www.barcelona.cat/ca/pagina-imatge-promocional | OK | 200 | yes | 4159 | 23 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/prova-video | https://www.barcelona.cat/ca/prova-video | OK | 200 | yes | 4596 | 24 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/que-pots-fer-a-bcn | https://www.barcelona.cat/ca/que-pots-fer-a-bcn | OK | 200 | yes | 5704 | 33 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, color-contrast, image-alt, image-redundant-alt, landmark-no-duplicate-banner, listitem, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-children, adaptable/list-children, adaptable/listitem-parent, aria/aria-allowed-role, keyboard-accessible/focus-order, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, navigable/empty-heading, text-alternatives/img-alt |
| https://barcelona.cat/ca/treball-i-empresa | https://www.barcelona.cat/ca/treball-i-empresa | OK | 200 | yes | 9946 | 27 | 0 | 0 | 41 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, aria/presentation-role-conflict, distinguishable/color-contrast, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/ca/viure-a-bcn | https://www.barcelona.cat/ca/viure-a-bcn | OK | 200 | yes | 4522 | 31 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-children, keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/en/catalan-national-day-2022 | https://www.barcelona.cat/en/catalan-national-day-2022 | OK | 200 | yes | 4340 | 23 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner, text-alternatives/img-alt |
| https://barcelona.cat/en/discoverbcn | https://www.barcelona.cat/en/discoverbcn | OK | 200 | yes | 4709 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/getinvolved | https://www.barcelona.cat/en/getinvolved | OK | 202 | yes | 4561 | 28 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/living-in-bcn | https://www.barcelona.cat/en/living-in-bcn | OK | 202 | yes | 4199 | 28 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/pagina-exemple-mapa-sant-jordi | https://www.barcelona.cat/en/pagina-exemple-mapa-sant-jordi | OK | 202 | yes | 3492 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: frame-title, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn | https://www.barcelona.cat/en/what-to-do-in-bcn | OK | 202 | yes | 4068 | 19 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn | https://www.barcelona.cat/es/conocebcn | OK | 202 | yes | 3954 | 19 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/diada-nacional-de-cataluna-2022 | https://www.barcelona.cat/es/diada-nacional-de-cataluna-2022 | OK | 202 | yes | 3150 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/implicate | https://www.barcelona.cat/es/implicate | OK | 202 | yes | 3834 | 18 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn | https://www.barcelona.cat/es/que-hacer-en-bcn | OK | 202 | yes | 3625 | 27 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/trabajo-y-empresa | https://www.barcelona.cat/es/trabajo-y-empresa | OK | 202 | yes | 4024 | 42 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn | https://www.barcelona.cat/es/vivir-en-bcn | OK | 202 | yes | 3876 | 28 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/aviso-legal/banoasistido | https://www.barcelona.cat/es/aviso-legal/banoasistido | OK | 202 | yes | 3786 | 23 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/blogoteca/condiciones-uso | https://www.barcelona.cat/es/blogoteca/condiciones-uso | OK | 202 | yes | 3456 | 23 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento | https://www.barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento | OK | 202 | yes | 3993 | 18 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados | OK | 202 | yes | 3864 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/news | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/news | OK | 202 | yes | 4602 | 20 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/belvederes | https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/belvederes | OK | 202 | yes | 4331 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/discoverbcn/pics | https://www.barcelona.cat/en/discoverbcn/pics | OK | 202 | yes | 4020 | 21 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-no-duplicate-banner, link-name, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn/vive-el-barrio | https://www.barcelona.cat/es/vivir-en-bcn/vive-el-barrio | OK | 202 | yes | 3784 | 29 | 0 | 0 | 4 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: area-alt, aria-allowed-role, aria-command-name, frame-title, image-alt, image-redundant-alt, landmark-no-duplicate-banner, list, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/viure-a-bcn/diada/transports-publics-durant-la-diada-2024 | https://www.barcelona.cat/ca/viure-a-bcn/diada/transports-publics-durant-la-diada-2024 | OK | 202 | yes | 4647 | 26 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, frame-title, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/history | https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain/history | OK | 202 | yes | 4105 | 19 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/biblioteca-central | https://www.barcelona.cat/es/conocebcn/ciutadelladelconocimiento/biblioteca-central | OK | 202 | yes | 3732 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/festes-majors | https://www.barcelona.cat/en/what-to-do-in-bcn/festes-majors | OK | 202 | yes | 4825 | 74 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes/lleure/llistat-de-ludotecas | https://www.barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes/lleure/llistat-de-ludotecas | OK | 202 | yes | 4109 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/childrens-play-areas | https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/childrens-play-areas | OK | 202 | yes | 4050 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/refrescat-a-les-piscines-municipals | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/estiu/refrescat-a-les-piscines-municipals | OK | 202 | yes | 4733 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-sant-miquel | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-sant-miquel | OK | 202 | yes | 4171 | 18 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parcs-forestals | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parcs-forestals | OK | 202 | yes | 3891 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films | https://www.barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films | OK | 202 | yes | 4752 | 74 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/zona-de-banos-del-forum | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/zona-de-banos-del-forum | OK | 202 | yes | 4041 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/heritage-and-science-hub | https://www.barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/heritage-and-science-hub | OK | 202 | yes | 3865 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/cultura/teatros | https://www.barcelona.cat/es/que-hacer-en-bcn/cultura/teatros | OK | 202 | yes | 4210 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/capdesetmana/ca/ | https://www.barcelona.cat/capdesetmana/ca/ | OK | 202 | yes | 4186 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn/diada | https://www.barcelona.cat/es/vivir-en-bcn/diada | OK | 202 | yes | 3764 | 18 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/living-in-bcn/pets | https://www.barcelona.cat/en/living-in-bcn/pets | OK | 202 | yes | 4090 | 28 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-hidden-focus, color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/deporte-en-las-playas/pesca | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/deporte-en-las-playas/pesca | OK | 202 | yes | 3347 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities | https://www.barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities | OK | 202 | yes | 5822 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/esport-les-platges | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/esport-les-platges | OK | 202 | yes | 4049 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/cultura | OK | 202 | yes | 4408 | 33 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, link-name, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn/con-accesibilidad | https://www.barcelona.cat/es/vivir-en-bcn/con-accesibilidad | OK | 202 | yes | 3863 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list | https://www.barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list | OK | 202 | yes | 4702 | 74 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn/medio-ambiente-y-sostenibilidad | https://www.barcelona.cat/es/vivir-en-bcn/medio-ambiente-y-sostenibilidad | OK | 202 | yes | 3424 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/dogs-area | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/dogs-area | OK | 202 | yes | 3824 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/living-in-bcn/diada | https://www.barcelona.cat/en/living-in-bcn/diada | OK | 202 | yes | 2918 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn/la-historia/la-barcino-romana | https://www.barcelona.cat/es/conocebcn/la-historia/la-barcino-romana | OK | 202 | yes | 3009 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/culture/cinemas | https://www.barcelona.cat/en/what-to-do-in-bcn/culture/cinemas | OK | 202 | yes | 4207 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/choreographies-magic-fountain | https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain/choreographies-magic-fountain | OK | 202 | yes | 4234 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn/con-ninos-y-ninas | https://www.barcelona.cat/es/vivir-en-bcn/con-ninos-y-ninas | OK | 202 | yes | 3785 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/discoverbcn/la-ciutadella-knowledge-hub/news | https://www.barcelona.cat/en/discoverbcn/la-ciutadella-knowledge-hub/news | OK | 202 | yes | 4223 | 26 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges | OK | 202 | yes | 3629 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/platges-sense-residus | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/platges-sense-residus | OK | 202 | yes | 3801 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/noticias | https://www.barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/noticias | OK | 202 | yes | 3858 | 20 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/zona-de-banys-del-forum | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/zona-de-banys-del-forum | OK | 202 | yes | 3389 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubs-asociaciones-y-penas | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubs-asociaciones-y-penas | OK | 202 | yes | 4376 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sant-sebastia-beach | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sant-sebastia-beach | OK | 202 | yes | 3943 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/how-it-works | https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain/how-it-works | OK | 202 | yes | 3529 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/historia-de-les-platges | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/historia-de-les-platges | OK | 202 | yes | 3721 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/fuente-magica/horarios-de-la-fuente-magica | https://www.barcelona.cat/es/que-hacer-en-bcn/fuente-magica/horarios-de-la-fuente-magica | OK | 202 | yes | 3648 | 26 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-table-header, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/culture/theatres | https://www.barcelona.cat/en/what-to-do-in-bcn/culture/theatres | OK | 202 | yes | 4241 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura/auditoris | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/cultura/auditoris | OK | 202 | yes | 4865 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sports-activities-organised-federated-athletes-entities | https://www.barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sports-activities-organised-federated-athletes-entities | OK | 202 | yes | 4577 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento/noticias | https://www.barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento/noticias | OK | 202 | yes | 3705 | 26 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/oficines-de-tramitacio-del-dni-i-passaport | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/estiu/oficines-de-tramitacio-del-dni-i-passaport | OK | 202 | yes | 4039 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-somorrostro | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-somorrostro | OK | 202 | yes | 3920 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/federaciones | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/federaciones | OK | 202 | yes | 4272 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/activitats-esportives-organitzades-amb-anim-de-lucre | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/activitats-esportives-organitzades-amb-anim-de-lucre | OK | 202 | yes | 4876 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/greenhouse/history | https://www.barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/greenhouse/history | OK | 202 | yes | 4056 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives | OK | 202 | yes | 5410 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/llistat | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/llistat | OK | 202 | yes | 5669 | 74 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/summer/municipal-tax-office | https://www.barcelona.cat/en/what-to-do-in-bcn/summer/municipal-tax-office | OK | 202 | yes | 4836 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/living-in-bcn/environment-and-sustainability/list-containers | https://www.barcelona.cat/en/living-in-bcn/environment-and-sustainability/list-containers | OK | 202 | yes | 4685 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/living-in-bcn/catalan-national-day-2019/public-transport-11-september-2022-catalan-national-day | https://www.barcelona.cat/en/living-in-bcn/catalan-national-day-2019/public-transport-11-september-2022-catalan-national-day | OK | 202 | yes | 5083 | 24 | 0 | 0 | 4 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, frame-title, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/barcelona-platja-platja | https://www.barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/barcelona-platja-platja | OK | 202 | yes | 3477 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/historia-de-las-playas | https://www.barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/historia-de-las-playas | OK | 202 | yes | 4029 | 19 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/parques-y-jardines/parques-forestales | https://www.barcelona.cat/es/que-hacer-en-bcn/parques-y-jardines/parques-forestales | OK | 202 | yes | 4592 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/vivir-en-bcn/con-personas-mayores/vivir-con-tranquilidad | https://www.barcelona.cat/es/vivir-en-bcn/con-personas-mayores/vivir-con-tranquilidad | OK | 202 | yes | 3988 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes | https://www.barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes | OK | 202 | yes | 5579 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/history | https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/history | OK | 202 | yes | 4224 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/conoce-el-consejo-del-parque-de-montjuic | https://www.barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/conoce-el-consejo-del-parque-de-montjuic | OK | 202 | yes | 4101 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes | https://www.barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes | OK | 202 | yes | 3653 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn/la-historia/la-barcelona-contemporanea | https://www.barcelona.cat/es/conocebcn/la-historia/la-barcelona-contemporanea | OK | 202 | yes | 3434 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/transformation-park | https://www.barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/transformation-park | OK | 202 | yes | 4493 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-children, image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |
| https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/polo-de-biociencia-del-csic | https://www.barcelona.cat/es/conocebcn/ciutadelladelconocimiento/polo-de-biociencia-del-csic | OK | 202 | yes | 4398 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, landmark-no-duplicate-banner, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, navigable/bypass, navigable/document-title, navigable/page-has-heading-one |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://barcelona.cat/

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" style="background-size: 25% 100%;">           <span class="slider__label sr-only">25% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Anterior">                 <i aria-hidden="true" title="Anterior" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#iframe-planol`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../ca/">Plànol</a>`
- XPath: `#iframe-planol`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=ca" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/ca/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#iframe-planol`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#iframe-planol`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#iframe-planol`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/accessibility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/accessibility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/find-out-about-montjuic-park-council

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" style="background-size: 25% 100%;">           <span class="slider__label sr-only">25% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Anterior">                 <i aria-hidden="true" title="Anterior" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#iframe-planol`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../ca/">Plànol</a>`
- XPath: `#iframe-planol`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=ca" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/ca/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#iframe-planol`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#iframe-planol`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#iframe-planol`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" style="background-size: 25% 100%;">           <span class="slider__label sr-only">25% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Previous">                 <i aria-hidden="true" title="Previous" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#planol-screen > iframe`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../en/">Barcelona map</a>`
- XPath: `#planol-screen > iframe`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=en" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/en/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#planol-screen > iframe`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#planol-screen > iframe`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#planol-screen > iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es

#### Rule: [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA progressbar nodes must have an accessible name
- HTML: `<div id="progressbar-carousel-capcalera" class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25" style="background-size: 25% 100%;">           <span class="slider__label sr-only">25% completed</span>         </div>`
- XPath: `#progressbar-carousel-capcalera`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<span tabindex="0" class="qualitat-aire-anterior bcn-disabled" aria-label="Previo">                 <i aria-hidden="true" title="Previo" class="bcn-disabled"></i>             </span>`
- XPath: `#qualitat-aire-i`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="geoLocation"></button>`
- XPath: `#planol-screen > iframe`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a target="_blank" href="../es/">Plano</a>`
- XPath: `#planol-screen > iframe`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="88px" src="https://ajuntament.barcelona.cat/widgets/temps/v3/?lang=es" width="142px" id="i-temps"></iframe>`
- XPath: `#i-temps`

**Failure 2:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" height="410px" src="https://com-shi-va.barcelona.cat/es/api/widget/route" width="100%"></iframe>`
- XPath: `iframe[height="410px"]`

#### Rule: [html-lang-valid](https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a valid value for the lang attribute
- HTML: `<html lang="cat" class=" js no-touch geolocation borderimage borderradius textshadow opacity cssgradients svg svgclippaths">`
- XPath: `#planol-screen > iframe`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/images/icons/marker.svg" class="img-marker">`
- XPath: `iframe[height="410px"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="llistat-bg-promos slick-initialized slick-slider slick-dotted" role="region" aria-label="carousel">`
- XPath: `.llistat-bg-promos`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main id="main-content" role="main">`
- XPath: `#main-content`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="js-main-search">`
- XPath: `#planol-screen > iframe`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a id="lupaCerca" href="javascript:void(0);" class="js_search_icon"></a>`
- XPath: `#planol-screen > iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#carousel-capcalera" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/canelons

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/coneixbcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/diada-nacional-de-catalunya-2022

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/implicat

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Informa’t i participa en les iniciatives i entitats que contribueixen a construir una economia social i solidària a Barcelona. Estigues al dia de tota l’actualitat!</p>`
- XPath: `.item-destacat.img_petita.col-md-3:nth-child(6) > .box-destacat > .content-box > .box-info > p`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.domini.barcelona/" target="_blank" title="Obre en una finestra nova">Domini .barcelona<span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `a[href$="domini.barcelona/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Implica’t en la teva ciutat amb el domini .barcelona. Associa la teva identitat digital als valors de Barcelona.</p>`
- XPath: `.item-destacat.img_petita.col-md-3:nth-child(7) > .box-destacat > .content-box > .box-info > p`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ajuntament.barcelona.cat/agenda2030/ca" target="_blank" title="Obre en una finestra nova">Compromís amb l’Agenda 2030<span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `.item-destacat.img_petita.col-md-3:nth-child(8) > .box-destacat > .content-box > .box-info > h3 > a[title="Obre en una finestra nova"][target="_blank"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Informa’t dels objectius de desenvolupament sostenible de les Nacions Unides en els àmbits ambiental, social, econòmic i institucional i implica-t’hi.</p>`
- XPath: `.item-destacat.img_petita.col-md-3:nth-child(8) > .box-destacat > .content-box > .box-info > p`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_5.png">`
- XPath: `.menu-4 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/pagina-imatge-promocional

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/prova-video

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>           Video 1       <span>       </span></span>`
- XPath: `.faq-question > span`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<ul class="banners-paginats-list slick-initialized slick-slider" role="region" aria-label="carousel">`
- XPath: `.banners-paginats-list`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://guia.barcelona.cat/" target="_blank" title="Obre en una finestra nova">Descobreix la Guia BCN<span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `a[href$="guia.barcelona.cat/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Totes les activitats de la ciutat que&nbsp;et puguis imaginar estan al teu abast en la Guia BCN: música, espectacles, festes, cursos, tallers i molt més.</p>`
- XPath: `.img_petita.col-md-3[data-value="1"]:nth-child(7) > .box-destacat > .content-box > .box-info > p`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/distribuidora_banner_paginat/public/vedebcn_250x250.jpg?itok=sI_-hMsI" width="250" height="250" alt="ve de barcelona">`
- XPath: `img[alt="ve de barcelona"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="banner-item box-banner" style="width: 100%; display: inline-block;">`
- XPath: `.slick-current > div > .banner-item.box-banner`

**Failure 2:**
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="banner-item box-banner" style="width: 100%; display: inline-block;">`
- XPath: `div[data-slick-index="1"] > div > .banner-item.box-banner`

**Failure 3:**
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="banner-item box-banner" style="width: 100%; display: inline-block;">`
- XPath: `div[data-slick-index="2"] > div > .banner-item.box-banner`

**Failure 4:**
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li class="banner-item box-banner" style="width: 100%; display: inline-block;">`
- XPath: `div[data-slick-index="3"] > div > .banner-item.box-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/treball-i-empresa

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Si busques feina, registra’t a la plataforma Empresa-Ocupació de Barcelona Activa. Rebràs les ofertes de feina que s’ajustin al teu perfil.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(7) > .box-destacat > .content-box > .box-info > p`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://empreses.barcelonactiva.cat/ca/web/es/financament-empresarial" target="_blank" title="Obre en una finestra nova">Finançament empresarial<span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(8) > .box-destacat > .content-box > .box-info > h3 > a[title="Obre en una finestra nova"][target="_blank"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Barcelona Activa disposa d’un servei de suport i acompanyament financer per a treballadors autònoms, empreses i entitats en la cerca de recursos econòmics necessaris o específics.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(8) > .box-destacat > .content-box > .box-info > p`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_2.png">`
- XPath: `.menu-1 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/viure-a-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3>Ajuts per al lloguer</h3>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(7) > .box-destacat > .content-box > .box-info > h3`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Informa’t de les prestacions i els ajuts que ofereixen l’Ajuntament de Barcelona i la Generalitat de Catalunya per atendre el pagament del lloguer. Coneix també la Borsa d'Habitatge de Lloguer.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(7) > .box-destacat > .content-box > .box-info > p`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://habitatge.barcelona/ca/serveis-ajuts/lloguer" target="_blank" title="Obre en una finestra nova">Ajuts al lloguer. Habitatge <span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(7) > .box-destacat > .content-box > .box-info > ul > .enllac:nth-child(1) > a[title="Obre en una finestra nova"][target="_blank"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.bcn.cat/consorcihabitatge/ca/borsa-habitatge.html" target="_blank" title="Obre en una finestra nova">Borsa d’Habitatge de Lloguer. Consorci de l'Habitatge<span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(7) > .box-destacat > .content-box > .box-info > ul > .enllac:nth-child(2) > a[title="Obre en una finestra nova"][target="_blank"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ajuntament.barcelona.cat/pla-accio-govern2023-2027/ca" target="_blank" title="Obre en una finestra nova">Pla d'acció de govern<span class="sr-only"> Obre en una finestra nova</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(8) > .box-destacat > .content-box > .box-info > h3 > a[title="Obre en una finestra nova"][target="_blank"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/catalan-national-day-2022

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/getinvolved

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.decidim.barcelona/" target="_blank" title="Open in a new window">Participatory budgets 2024-2027<span class="sr-only"> Open in a new window</span></a>`
- XPath: `a[href$="decidim.barcelona/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>The second edition of the participatory budgets is under way, with members of the public able to decide which projects in the districts to invest 30 million euros of the municipal budget in.</span>`
- XPath: `.MsoNormal:nth-child(2) > span`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://pladebarris.barcelona/es/" target="_blank" title="Open in a new window">Neighbourhood Plan<span class="sr-only"> Open in a new window</span></a>`
- XPath: `.crea-la.item-destacat[data-cat="crea-la"]:nth-child(2) > .box-destacat > .content-box > .box-info > h3 > a[target="_blank"][title="Open in a new window"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Programme aimed at reducing inequalities between Barcelona neighbourhoods, backing access to income, services, urban quality and welfare.</p>`
- XPath: `.crea-la.item-destacat[data-cat="crea-la"]:nth-child(2) > .box-destacat > .content-box > .box-info > p`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_5.png">`
- XPath: `.menu-4 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Consult the pre-enrolment&nbsp;&nbsp;and enrollment calendar for the 2026-2027 school year for second-year infants, primary, secondary and post-compulsory school education.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(1) > .box-destacat > .content-box > .box-info > p`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ajuntament.barcelona.cat/comerc/en/european-capital-of-small-retail" target="_blank" title="Open in a new window">European Capital of Small Retail<span class="sr-only"> Open in a new window</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(2) > .box-destacat > .content-box > .box-info > h3 > a[target="_blank"][title="Open in a new window"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>In 2026, Barcelona is inspiring Europe, having been recognised by the European Union for its innovative and sustainable model of local high-street trade.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(2) > .box-destacat > .content-box > .box-info > p`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/pagina-exemple-mapa-sant-jordi

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe frameborder="0" id="frame_home" src="http://lameva.barcelona.cat/sites/all/static/stjordi/map/mapa_sang_EN.html" width="100%"></iframe>`
- XPath: `#frame_home`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/en/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/diada-nacional-de-cataluna-2022

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="es" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="es" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/es/implicate

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://tibidabo.cat/es" target="_blank" title="Abrir en una ventana nueva">125 años del Tibidabo<span class="sr-only"> Abrir en una ventana nueva</span></a>`
- XPath: `a[href="https://tibidabo.cat/es"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Vive una temporada histórica en la cima más mágica. Disfruta de las mejores vistas de Barcelona en el nuevo mirador y de más de 35 atracciones para todas las edades.</span>`
- XPath: `.img_petita.col-md-3[data-value="1"]:nth-child(1) > .box-destacat > .content-box > .box-info > p > span`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/trabajo-y-empresa

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://treball.barcelonactiva.cat/index_es.html" target="_blank" title="Abrir en una ventana nueva">Barcelona Trabajo<span class="sr-only"> Abrir en una ventana nueva</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(1) > .box-destacat > .content-box > .box-info > h3 > a[target="_blank"][title="Abrir en una ventana nueva"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Descubre el nuevo web de Barcelona Activa, que te ofrece servicios y recursos personalizados para ayudarte a encontrar trabajo y mejorar profesionalmente.</span>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(1) > .box-destacat > .content-box > .box-info > p > span`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="descripcio">¿Estás buscando trabajo? ¿Tienes que prepararte una entrevista? ¿Quieres mejorar tu currículum? El equipo de Barcelona Activa está a tu disposición para dar respuestas a tus dudas profesionales. </div>`
- XPath: `#buscas-trabajo > .slider-multi-element-3 > .row > .device > .item-literal-1.item-literal > .paragraph--type--slide-pano-small.paragraph.paragraph--view-mode--full > .descripcio`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="descripcio">Busca e identifica aquellas salidas profesionales que mejor se adecuan a tu perfil y accede a las ofertas de trabajo actualizadas en tiempo real de las principales bolsas de empleo.</div>`
- XPath: `#buscas-trabajo > .slider-multi-element-3 > .row > .device > .item-literal-2.item-literal > .paragraph--type--slide-pano-small.paragraph.paragraph--view-mode--full > .descripcio`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="descripcio">Identifica las fases de un proceso de selección y aprovecha las herramientas y recursos que Barcelona Trabajo pone a tu alcance para prepararte y superarlo con éxito.</div>`
- XPath: `#buscas-trabajo > .slider-multi-element-3 > .row > .device > .item-literal-3.item-literal > .paragraph--type--slide-pano-small.paragraph.paragraph--view-mode--full > .descripcio`

*... and 13 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_2.png">`
- XPath: `.menu-1 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div role="menu" class="container list-pano-rollover">`
- XPath: `.list-pano-rollover`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Consulta el calendario de preinscripción y matriculación para el curso 2026-2027 del segundo ciclo de infantil, primaria, secundaria y enseñanzas posobligatorias.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(1) > .box-destacat > .content-box > .box-info > p`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ajuntament.barcelona.cat/comerc/es/capital-europea-del-comercio-local-2026" target="_blank" title="Abrir en una ventana nueva">Capital Europea del Comercio Local<span class="sr-only"> Abrir en una ventana nueva</span></a>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(2) > .box-destacat > .content-box > .box-info > h3 > a[target="_blank"][title="Abrir en una ventana nueva"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Este 2026, Barcelona inspira a Europa y recibe el reconocimiento de la Unión Europea por su modelo de comercio de proximidad, innovador y sostenible.</p>`
- XPath: `.item-destacat.img_petita.col-12:nth-child(2) > .box-destacat > .content-box > .box-info > p`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/aviso-legal/banoasistido

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/blogoteca/condiciones-uso

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/actividades-deportivas-organizadas-por-deportistas-federados

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/news

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="News list dates and number of results per page control" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Showing <span>10</span> results.</h3>`
- XPath: `h3`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/en/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/belvederes

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/pics

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="false" role="button" tabindex="0" class="ajuntament-maps-legend">Districts                           <span aria-hidden="true" title="Desplegar districtes" class="icobcn-fletxa-baix2-l"></span>                         </legend>`
- XPath: `fieldset:nth-child(1) > legend`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="false" role="button" tabindex="0" class="ajuntament-maps-legend">Categories                           <span aria-hidden="true" title="Desplegar grup" class="icobcn-fletxa-baix2-l"></span>                         </legend>`
- XPath: `fieldset:nth-child(2) > legend`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="#" id="ajuntament-maps-popup-closer" class="ol-popup-closer"></a>`
- XPath: `#ajuntament-maps-popup-closer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/en/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/vive-el-barrio

#### Rule: [area-alt](https://dequeuniversity.com/rules/axe/4.11/area-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Active <area> elements must have alternative text
- HTML: `<area shape="poly" alt="" coords="1157,999, 1166,1000,..." href="#" districte="1">`
- XPath: `#fembarri`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li districte="1" data-url="https://ajuntament.barcelona.cat/ciutatvella/es/" tabindex="0" role="button"><img src="img/districte_1.jpg" alt="Ciutat Vella"><div class="label"><p class="name">Ciutat Vella</p><p class="barris">4 barrios</p></div></li>`
- XPath: `#fembarri`

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<div class="title" tabindex="-1" role="button"></div>`
- XPath: `#fembarri`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="img/districte_1.jpg" alt="Ciutat Vella">`
- XPath: `#fembarri`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="districtes_menu">`
- XPath: `#fembarri`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/viure-a-bcn/diada/transports-publics-durant-la-diada-2024

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3 dir="ltr">&nbsp;</h3>`
- XPath: `h3:nth-child(3)`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe class="modal--image u-image--responsive" frameborder="0" height="330" src="https://www.google.com/maps/d/embed?mid=1VaSGODz5xqqjcZGSbOu42wrfhJo0ulA&amp;ehbc=2E312F" width="640"></iframe>`
- XPath: `.modal--image`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/history

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/en/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/biblioteca-central

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/festes-majors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Previous month</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Next month</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes/lleure/llistat-de-ludotecas

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/childrens-play-areas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/refrescat-a-les-piscines-municipals

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-sant-miquel

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parcs-forestals

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/summer/outdoor-films

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Previous month</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Next month</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/zona-de-banos-del-forum

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/heritage-and-science-hub

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/cultura/teatros

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/capdesetmana/ca/

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/es/vivir-en-bcn/diada

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/pets

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="false" role="button" tabindex="0" class="ajuntament-maps-legend">Districts                           <span aria-hidden="true" title="Desplegar districtes" class="icobcn-fletxa-baix2-l"></span>                         </legend>`
- XPath: `.ajuntament-maps-fieldset:nth-child(1) > legend`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<legend aria-expanded="true" role="button" tabindex="0" class="ajuntament-maps-legend ajuntament-maps-slided">`
- XPath: `.ajuntament-maps-slided`

#### Rule: [aria-hidden-focus](https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA hidden element must not be focusable or contain focusable elements
- HTML: `<div aria-hidden="true" id="ajuntament-maps" data-lat="41.3850640" data-lon="2.1734030" data-zoom="13" aria-live="polite" role="region" aria-label="Map of entities">`
- XPath: `#ajuntament-maps`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button tabindex="0" type="submit" style="background: rgb(255, 71, 72); overflow: hidden; height: 18.8479px; padding-top: 4.71198px; margin-top: 0px; padding-bottom: 4.71198px; margin-bottom: 0px;" class="ajuntament-maps-aplicar-filtres">                     Apply                   </button>`
- XPath: `.ajuntament-maps-aplicar-filtres`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/deporte-en-las-playas/pesca

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/get-fit/sports-facilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/esport-les-platges

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/arxius-i-centres-de-documentacio"><img src="/themes/barcelonacat_theme/images/espais-cultura/arxius.jpg" alt=""><span>Arxius i centres de documentació</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(1) > a`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/auditoris"><img src="/themes/barcelonacat_theme/images/espais-cultura/audicions.jpg" alt=""><span>Auditoris</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(2) > a`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/biblioteques"><img src="/themes/barcelonacat_theme/images/espais-cultura/biblioteques.jpg" alt=""><span>Biblioteques</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(3) > a`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/cinemes"><img src="/themes/barcelonacat_theme/images/espais-cultura/cinemes.jpg" alt=""><span>Cinemes</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(4) > a`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/ca/que-pots-fer-a-bcn/cultura/espais-dexposicions"><img src="/themes/barcelonacat_theme/images/espais-cultura/exposicions.jpg" alt=""><span>Espais d'exposicions</span></a>`
- XPath: `.banners-circles > ul > li:nth-child(5) > a`

*... and 4 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/con-accesibilidad

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/montjuic-park/activities/list

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Previous month</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Next month</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/es/vivir-en-bcn/medio-ambiente-y-sostenibilidad

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="es" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="es" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/dogs-area

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/diada

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/es/conocebcn/la-historia/la-barcino-romana

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="es" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="es" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/en/what-to-do-in-bcn/culture/cinemas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/choreographies-magic-fountain

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/es/vivir-en-bcn/con-ninos-y-ninas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/la-ciutadella-knowledge-hub/news

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="News list dates and number of results per page control" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Showing <span>10</span> results.</h3>`
- XPath: `.ajuntament-actualitat-node-1 > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/platges-sense-residus

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/noticias

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="Control de fechas y número de resultados por página del listado de noticias" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Mostrando <span>10</span> resultados.</h3>`
- XPath: `h3`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/zona-de-banys-del-forum

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubs-asociaciones-y-penas

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sant-sebastia-beach

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/en/what-to-do-in-bcn/magic-fountain/how-it-works

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/historia-de-les-platges

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/fuente-magica/horarios-de-la-fuente-magica

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Table header text should not be empty
- HTML: `<th scope="col"></th>`
- XPath: `th:nth-child(1)`

**Failure 2:**
- Message: Table header text should not be empty
- HTML: `<th scope="col"></th>`
- XPath: `th:nth-child(4)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/culture/theatres

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/cultura/auditoris

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/bathing-and-beaches/sports-activities-organised-federated-athletes-entities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-ciutadella-del-conocimiento/noticias

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<form class="d-flex justify-content-md-between align-items-md-center ajuntament-actualitat-filtres" role="region" aria-label="Control de fechas y número de resultados por página del listado de noticias" aria-controls="ajuntament-actualitat-noticies">`
- XPath: `.justify-content-md-between`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h3 class="sr-only" role="status">Mostrando <span>10</span> resultados.</h3>`
- XPath: `.ajuntament-actualitat-node-1 > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `#ajuntament--prefooter > .container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/estiu/oficines-de-tramitacio-del-dni-i-passaport

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/playa-de-somorrostro

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/federaciones

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/activitats-esportives-organitzades-amb-anim-de-lucre

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/greenhouse/history

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/posat-en-forma/installacions-esportives

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/llistat

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1771977600000" tabindex="2">25</div>`
- XPath: `div[data-time="1771977600000"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772064000000" tabindex="2">26</div>`
- XPath: `div[data-time="1772064000000"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="day-item is-previous-month" data-time="1772150400000" tabindex="2">27</div>`
- XPath: `div[data-time="1772150400000"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-previous-month" tabindex="1">←<span class="sr-only">Mes anterior</span></button>`
- XPath: `.button-previous-month`

**Failure 3:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<button type="button" class="button-next-month" tabindex="1">→<span class="sr-only">Mes següent</span></button>`
- XPath: `.button-next-month`

**Failure 4:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771804800000" tabindex="2">23</div>`
- XPath: `div[data-time="1771804800000"]`

**Failure 5:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="day-item is-previous-month" data-time="1771891200000" tabindex="2">24</div>`
- XPath: `div[data-time="1771891200000"]`

*... and 40 more failures for this rule*

### https://barcelona.cat/en/what-to-do-in-bcn/summer/municipal-tax-office

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/environment-and-sustainability/list-containers

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/living-in-bcn/catalan-national-day-2019/public-transport-11-september-2022-catalan-national-day

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: ARIA commands must have an accessible name
- HTML: `<div title="" role="button" tabindex="0" style="width: 31.7193px; height: 32px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -78px; top: 24px; z-index: 0;">`
- XPath: `iframe[frameborder="0"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/que-pots-fer-a-bcn/banys-i-platges/barcelona-platja-platja

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="ca" dir="ltr" prefix="og: https://ogp.me/ns#">`
- XPath: `html`

### https://barcelona.cat/es/que-hacer-en-bcn/banos-y-playas/historia-de-las-playas

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p><a href="https://com-shi-va.barcelona.cat/es/planifica_la_teva_ruta?desde=&amp;hasta=41.38254105123274,2.177172350140966&amp;hasta_txt=Ajuntament+de+Barcelona" target="_blank">Pl. Sant Jaume, 1, 08002 Barcelona  </a></p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 11 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/parques-y-jardines/parques-forestales

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/vivir-en-bcn/con-personas-mayores/vivir-con-tranquilidad

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/ponte-en-forma/clubes

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/history

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/que-hacer-en-bcn/parque-montjuic/conoce-el-consejo-del-parque-de-montjuic

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_3.png">`
- XPath: `.menu-2 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/ca/viure-a-bcn/amb-nens-i-nenes

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_1.png">`
- XPath: `.menu-0 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Adreces</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacte</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Vés al contingut     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/la-historia/la-barcelona-contemporanea

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

### https://barcelona.cat/en/discoverbcn/ciutadella-knowledge-hub/transformation-park

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="galeria-internanav" role="tablist" aria-label="Gallery controls">`
- XPath: `.galeria-internanav`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Addresses</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contact</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

### https://barcelona.cat/es/conocebcn/ciutadelladelconocimiento/polo-de-biociencia-del-csic

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/themes/barcelonacat_theme/images/menu/fletxa_4.png">`
- XPath: `.menu-3 > .icona > img`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="brand" alias="barcelonacat" brand="barcelonacat_2025-12..." class="v2025 bcnbrand-legac..." data-lwid="19e3126d-e1c9-4f40-9..." data-plausible="bcn0657" data-matomo="beOBY9ep" data-avisos="auto" data-web-cerca="https%3A%2F%2Fwww.ba..." data-web-nom="Barcelona" data-cercador="false">`
- XPath: `#brand`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<li>`
- XPath: `.container > ul > li:nth-child(1)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Dirección</h2>`
- XPath: `li:nth-child(2) > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<p>`
- XPath: `li:nth-child(2) > .llistat > li > p`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Contacto</h2>`
- XPath: `li:nth-child(3) > h2`

*... and 16 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable to-main-content" tabindex="1">       Pasar al contenido principal     </a>`
- XPath: `.focusable`

