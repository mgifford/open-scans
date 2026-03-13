# Scan Report: welcometofrance.com —

- Issue: https://github.com/mgifford/open-scans/issues/145
- Submitted by: mgifford
- Scanned at: 2026-03-13T19:28:37.824Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 20.1 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 **Dark mode tested: 100 of 100 URLs (100%) support `prefers-color-scheme: dark`**
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 69498 passed, 4860 failed, 876 cantTell, 8876 inapplicable
- Equal Access outcomes: 114109 passed, 7276 failed (5722 unique, 1554 duplicate), 5240 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 1554

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.welcometofrance.com/mediatheque) | 76 | 107 | **183** | Médiathèque, toutes les informations sur la France - Welcome to France |
| [View Page](https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=480) | 76 | 105 | **181** | Médiathèque, toutes les informations sur la France - Welcome to France |
| [View Page](https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=486) | 76 | 105 | **181** | Médiathèque, toutes les informations sur la France - Welcome to France |
| [View Page](https://www.welcometofrance.com/article-2-2) | 64 | 105 | **169** | Brexit : Je vais ou j’envisage de m’installer en France - Welcome to France |
| [View Page](https://www.welcometofrance.com/article-2-4) | 66 | 94 | **160** | Brexit : où se renseigner ? - Welcome to France |
| [View Page](https://www.welcometofrance.com/nouvelles-dispositions-en-matiere-de-detachement-de-travailleurs) | 64 | 91 | **155** | Nouvelles dispositions en matière de détachement de travailleurs - Welcome to France |
| [View Page](https://www.welcometofrance.com/) | 52 | 98 | **150** | Welcome to France : tous les conseils pour vous installer en France |
| [View Page](https://www.welcometofrance.com/wefr_survey_subject/prestations-de-services) | 52 | 98 | **150** | Welcome to France : tous les conseils pour vous installer en France |
| [View Page](https://www.welcometofrance.com/page-welcome-to-la-french-tech) | 64 | 83 | **147** | Welcome to la French Tech: Bienvenue aux talents de la Tech |
| [View Page](https://www.welcometofrance.com/doing-business-accueil-des-talents) | 60 | 86 | **146** | Doing Business : Accueil des talents - Welcome to France |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-allowed-role | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| button-name | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| color-contrast | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| landmark-banner-is-top-level | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-banner-is-top-level) |
| landmark-no-duplicate-banner | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| link-name | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| select-name | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/select-name) |
| image-alt | **81** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| empty-heading | **31** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 100 page(s) - 400 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="footer-item" href="javascript:Didomi.preferences.show()" target="">
        </a>
```

**XPath** (use in browser DevTools):
```
.footer-content > .footer-item[target=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.footer-content > .footer-item[target=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 2: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button class="search-open bump">
              <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">
            </button>
```

**XPath** (use in browser DevTools):
```
.search-open
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.search-open')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 3: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header class="header">
```

**XPath** (use in browser DevTools):
```
header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('header')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 4: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header class="header">
```

**XPath** (use in browser DevTools):
```
header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('header')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 5: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="icon-fb bump" href="" target="_blank"></a>
```

**XPath** (use in browser DevTools):
```
.icon-fb
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.icon-fb')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 6: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>
```

**XPath** (use in browser DevTools):
```
.icon-ln
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.icon-ln')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 7: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>
```

**XPath** (use in browser DevTools):
```
.icon-tw
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.icon-tw')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 8: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="footer-item" href="javascript:Didomi.preferences.show()" target="">
    </a>
```

**XPath** (use in browser DevTools):
```
.footer-main-wrapper > .footer-item[target=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.footer-main-wrapper > .footer-item[target=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 9: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="footer-item" href="javascript:Didomi.preferences.show()" target="">

    </a>
```

**XPath** (use in browser DevTools):
```
.footer-wrapper > .footer-item[target=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.footer-wrapper > .footer-item[target=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 10: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="" target="">
            <img src="" alt="">
        </a>
```

**XPath** (use in browser DevTools):
```
a[href=""][target=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href=""][target=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- *...and 95 more page(s)*

---

#### Pattern 11: Affects 98 page(s) - 392 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate
**Issue**: Banner landmark should not be contained in another landmark

**HTML Pattern**:
```html
<div class="hdr-logo" role="banner">
```

**XPath** (use in browser DevTools):
```
.hdr-logos.rel.aic > .hdr-logo[role="banner"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.hdr-logos.rel.aic > .hdr-logo[role="banner"]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers
- *...and 93 more page(s)*

---

#### Pattern 12: Affects 98 page(s) - 196 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">
```

**XPath** (use in browser DevTools):
```
.hdr-logo[rel="home"][role="banner"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.hdr-logo[rel="home"][role="banner"]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers
- *...and 93 more page(s)*

---

#### Pattern 13: Affects 98 page(s) - 196 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate
**Issue**: Banner landmark should not be contained in another landmark

**HTML Pattern**:
```html
<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">
```

**XPath** (use in browser DevTools):
```
.hdr-logo[rel="home"][role="banner"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.hdr-logo[rel="home"][role="banner"]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers
- *...and 93 more page(s)*

---

#### Pattern 14: Affects 98 page(s) - 196 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>
```

**XPath** (use in browser DevTools):
```
.hdr-logos.rel.aic > .link-over[rel="home"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.hdr-logos.rel.aic > .link-over[rel="home"]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers
- *...and 93 more page(s)*

---

#### Pattern 15: Affects 98 page(s) - 196 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">
```

**XPath** (use in browser DevTools):
```
.hdr-logo[rel="home"][role="banner"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.hdr-logo[rel="home"][role="banner"]')`
5. The element will be highlighted

**Affected Pages**:
- https://welcometofrance.com/?page_id=614
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480
- https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486
- https://welcometofrance.com/accessibilite
- https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers
- *...and 93 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://welcometofrance.com/ | https://www.welcometofrance.com/ | OK | 200 | yes | 17595 | 52 | 0 | 98 | 0 | 26 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_required, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, caption_track_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, media_keyboard_controllable, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/?page_id=614 | https://www.welcometofrance.com/?page_id=614 | FAIL | 404 | yes | 11602 | 38 | 0 | 39 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480 | https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=480 | OK | 200 | yes | 13072 | 76 | 0 | 105 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_exists, input_label_visible, input_onchange_review, script_select_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486 | https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=486 | OK | 200 | yes | 12969 | 76 | 0 | 105 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_exists, input_label_visible, input_onchange_review, script_select_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/accessibilite | https://www.welcometofrance.com/accessibilite | OK | 200 | yes | 11718 | 40 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers | https://www.welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers | OK | 200 | yes | 11797 | 44 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/ouverture-dun-service-en-ligne-de-demande-dautorisation-de-travail | https://www.welcometofrance.com/ouverture-dun-service-en-ligne-de-demande-dautorisation-de-travail | OK | 200 | yes | 12365 | 46 | 0 | 55 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, text_contrast_sufficient |
| https://welcometofrance.com/referencement-de-prestataires-offrant-des-services-bancaires | https://www.welcometofrance.com/referencement-de-prestataires-offrant-des-services-bancaires | OK | 200 | yes | 11346 | 44 | 0 | 44 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/region/pays-de-la-loire | https://www.welcometofrance.com/region/pays-de-la-loire | OK | 200 | yes | 12276 | 52 | 0 | 56 | 0 | 19 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/wefr_survey_subject/prestations-de-services | https://www.welcometofrance.com/wefr_survey_subject/prestations-de-services | OK | 200 | yes | 12723 | 52 | 0 | 98 | 0 | 26 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_required, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, caption_track_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, media_keyboard_controllable, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/fiche/welcome-to-la-french-tech-faq | https://www.welcometofrance.com/fiche/welcome-to-la-french-tech-faq | OK | 200 | yes | 12376 | 56 | 0 | 84 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/1603 | https://www.welcometofrance.com/1603 | OK | 200 | yes | 11716 | 46 | 0 | 48 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/7997 | https://www.welcometofrance.com/7997 | OK | 200 | yes | 11363 | 44 | 0 | 44 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/a-propos | https://www.welcometofrance.com/a-propos | OK | 200 | yes | 12187 | 48 | 0 | 72 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/accord-france-etats-unis%e2%80%af-un-dispositif-visa-simplifie-pour-les-investisseurs | https://www.welcometofrance.com/accord-france-etats-unis%e2%80%af-un-dispositif-visa-simplifie-pour-les-investisseurs | OK | 200 | yes | 11522 | 44 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/accueil-des-citoyens-ukrainiens-en-france | https://www.welcometofrance.com/accueil-des-citoyens-ukrainiens-en-france | OK | 200 | yes | 12307 | 48 | 0 | 63 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-1 | https://www.welcometofrance.com/article-1 | OK | 200 | yes | 11250 | 46 | 0 | 44 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_markup_misuse, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-1-2 | https://www.welcometofrance.com/article-1-2 | OK | 200 | yes | 12415 | 56 | 0 | 81 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, text_contrast_sufficient |
| https://welcometofrance.com/article-1-3 | https://www.welcometofrance.com/article-1-3 | OK | 200 | yes | 12232 | 52 | 0 | 58 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-1-4 | https://www.welcometofrance.com/article-1-4 | OK | 200 | yes | 11765 | 46 | 0 | 49 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-2 | https://www.welcometofrance.com/article-2 | OK | 200 | yes | 11879 | 50 | 0 | 61 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-2-2 | https://www.welcometofrance.com/article-2-2 | OK | 200 | yes | 13146 | 64 | 0 | 105 | 0 | 39 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, heading_markup_misuse, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient, widget_tabbable_exists |
| https://welcometofrance.com/article-2-3 | https://www.welcometofrance.com/article-2-3 | OK | 200 | yes | 11876 | 48 | 0 | 59 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-2-4 | https://www.welcometofrance.com/article-2-4 | OK | 200 | yes | 12569 | 66 | 0 | 94 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/article-4 | https://www.welcometofrance.com/article-4 | OK | 200 | yes | 11368 | 48 | 0 | 45 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-4-3 | https://www.welcometofrance.com/article-4-3 | OK | 200 | yes | 11766 | 52 | 0 | 57 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/article-4-4 | https://www.welcometofrance.com/article-4-4 | OK | 200 | yes | 11844 | 52 | 0 | 58 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_markup_misuse, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/attractivite%e2%80%af-la-france-confirme-son-leadership-en-europe | https://www.welcometofrance.com/attractivite%e2%80%af-la-france-confirme-son-leadership-en-europe | OK | 200 | yes | 13125 | 46 | 0 | 46 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/attributions-gratuites-dactions-aga | https://www.welcometofrance.com/attributions-gratuites-dactions-aga | OK | 200 | yes | 11718 | 46 | 0 | 53 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient, text_sensory_misuse |
| https://welcometofrance.com/baisse-du-cout-de-la-taxe-sur-les-titres-de-sejour | https://www.welcometofrance.com/baisse-du-cout-de-la-taxe-sur-les-titres-de-sejour | OK | 200 | yes | 11820 | 46 | 0 | 47 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/bilan-2020-des-investissements-internationaux-en-france | https://www.welcometofrance.com/bilan-2020-des-investissements-internationaux-en-france | OK | 200 | yes | 11943 | 44 | 0 | 54 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/bilan-2021-des-investissements-internationaux-en-france | https://www.welcometofrance.com/bilan-2021-des-investissements-internationaux-en-france | OK | 200 | yes | 12038 | 46 | 0 | 59 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/bilan-2022-des-investissements-internationaux-en-france | https://www.welcometofrance.com/bilan-2022-des-investissements-internationaux-en-france | OK | 200 | yes | 11392 | 44 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/bonjour-tout-le-monde | https://www.welcometofrance.com/bonjour-tout-le-monde | OK | 200 | yes | 11918 | 46 | 0 | 53 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/bonjour-tout-le-monde-2 | https://www.welcometofrance.com/bonjour-tout-le-monde-2 | OK | 200 | yes | 11460 | 44 | 0 | 46 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/bonjour-tout-le-monde-3 | https://www.welcometofrance.com/bonjour-tout-le-monde-3 | OK | 200 | yes | 11903 | 52 | 0 | 72 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/bonjour-tout-le-monde-4 | https://www.welcometofrance.com/bonjour-tout-le-monde-4 | OK | 200 | yes | 11637 | 50 | 0 | 50 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/bons-de-souscription-pour-creation-dentreprise-bspce | https://www.welcometofrance.com/bons-de-souscription-pour-creation-dentreprise-bspce | OK | 200 | yes | 11442 | 46 | 0 | 51 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/brexit-je-reside-actuellement-en-france | https://www.welcometofrance.com/brexit-je-reside-actuellement-en-france | OK | 200 | yes | 13021 | 58 | 0 | 86 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, text_contrast_sufficient |
| https://welcometofrance.com/business-france-publie-le-doing-business-2017 | https://www.welcometofrance.com/business-france-publie-le-doing-business-2017 | OK | 200 | yes | 11560 | 44 | 0 | 44 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/covid-19-entree-et-sejour-des-talents-etrangers-en-france | https://www.welcometofrance.com/covid-19-entree-et-sejour-des-talents-etrangers-en-france | OK | 200 | yes | 11558 | 44 | 0 | 51 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/de-nouvelles-mesures-en-faveur-des-startups-et-de-leurs-talents | https://www.welcometofrance.com/de-nouvelles-mesures-en-faveur-des-startups-et-de-leurs-talents | OK | 200 | yes | 11375 | 46 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/dematerialisation-de-procedure-de-demande-et-renouvellement-de-carte-de-resident | https://www.welcometofrance.com/dematerialisation-de-procedure-de-demande-et-renouvellement-de-carte-de-resident | OK | 200 | yes | 11463 | 44 | 0 | 43 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/detachement-de-travailleurs-revision-de-la-directive-europeenne | https://www.welcometofrance.com/detachement-de-travailleurs-revision-de-la-directive-europeenne | OK | 200 | yes | 11987 | 52 | 0 | 66 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/doing-business-accueil-des-talents | https://www.welcometofrance.com/doing-business-accueil-des-talents | OK | 200 | yes | 12485 | 60 | 0 | 86 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/doing-business-aides-et-financements | https://www.welcometofrance.com/doing-business-aides-et-financements | OK | 200 | yes | 11624 | 44 | 0 | 44 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/fd-talent-europe-is-a-great-place-to-work | https://www.welcometofrance.com/fd-talent-europe-is-a-great-place-to-work | OK | 200 | yes | 11863 | 48 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/french-tech-green20-la-nouvelle-promotion-annoncee | https://www.welcometofrance.com/french-tech-green20-la-nouvelle-promotion-annoncee | OK | 200 | yes | 11348 | 44 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/french-tech-visa | https://www.welcometofrance.com/french-tech-visa | OK | 200 | yes | 11764 | 54 | 0 | 61 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/guide-make-a-french-start-livret-3 | https://www.welcometofrance.com/guide-make-a-french-start-livret-3 | OK | 200 | yes | 11906 | 52 | 0 | 67 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/ils-ont-choisi-la-france | https://www.welcometofrance.com/ils-ont-choisi-la-france | OK | 200 | yes | 11984 | 48 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/information-relative-au-coronavirus-covid-19-17-mars | https://www.welcometofrance.com/information-relative-au-coronavirus-covid-19-17-mars | OK | 200 | yes | 11764 | 44 | 0 | 48 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/integration-des-simulateurs-du-code-du-travail-numerique | https://www.welcometofrance.com/integration-des-simulateurs-du-code-du-travail-numerique | OK | 200 | yes | 11311 | 44 | 0 | 47 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/join-la-french-tech | https://www.welcometofrance.com/join-la-french-tech | OK | 200 | yes | 11836 | 48 | 0 | 47 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/join-the-french-tech-revolution | https://www.welcometofrance.com/join-the-french-tech-revolution | OK | 200 | yes | 11932 | 48 | 0 | 51 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-france-accueille-les-talents-2 | https://www.welcometofrance.com/la-france-accueille-les-talents-2 | OK | 200 | yes | 14582 | 56 | 0 | 84 | 0 | 81 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, frame-title, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, frame_src_valid, frame_title_exists, heading_content_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/la-france-attire-les-chercheurs-etrangers | https://www.welcometofrance.com/la-france-attire-les-chercheurs-etrangers | OK | 200 | yes | 12267 | 48 | 0 | 53 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-france-attire-les-talents-etrangers | https://www.welcometofrance.com/la-france-attire-les-talents-etrangers | OK | 200 | yes | 12164 | 44 | 0 | 48 | 0 | 32 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, text_contrast_sufficient |
| https://welcometofrance.com/la-france-demeure-a-la-premiere-place-du-classement-2024-de-lesna | https://www.welcometofrance.com/la-france-demeure-a-la-premiere-place-du-classement-2024-de-lesna | OK | 200 | yes | 11848 | 46 | 0 | 45 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-france-gagne-en-attractivite-aupres-des-investisseurs-etrangers | https://www.welcometofrance.com/la-france-gagne-en-attractivite-aupres-des-investisseurs-etrangers | OK | 200 | yes | 12368 | 44 | 0 | 47 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient, text_quoted_correctly |
| https://welcometofrance.com/la-france-maintient-sa-premiere-place-dans-le-classement-2025-de-lesna | https://www.welcometofrance.com/la-france-maintient-sa-premiere-place-dans-le-classement-2025-de-lesna | OK | 200 | yes | 11406 | 44 | 0 | 44 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-french-tech-fete-ses-10-ans | https://www.welcometofrance.com/la-french-tech-fete-ses-10-ans | OK | 200 | yes | 11309 | 44 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-french-tech-survival-guide | https://www.welcometofrance.com/la-french-tech-survival-guide | OK | 200 | yes | 12131 | 48 | 0 | 51 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-nouvelle-promotion-french-tech-2030-annoncee | https://www.welcometofrance.com/la-nouvelle-promotion-french-tech-2030-annoncee | OK | 200 | yes | 11587 | 44 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-nouvelle-promotion-french-tech-next40-120-annoncee | https://www.welcometofrance.com/la-nouvelle-promotion-french-tech-next40-120-annoncee | OK | 200 | yes | 11602 | 44 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-nouvelle-promotion-next40-ft120-annoncee | https://www.welcometofrance.com/la-nouvelle-promotion-next40-ft120-annoncee | OK | 200 | yes | 11581 | 44 | 0 | 51 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/la-procedure-de-demande-de-titre-de-sejour-passeport-talent-createur-dentreprise-evolue | https://www.welcometofrance.com/la-procedure-de-demande-de-titre-de-sejour-passeport-talent-createur-dentreprise-evolue | OK | 200 | yes | 11432 | 44 | 0 | 43 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/lancement-de-la-campagne-make-it-iconic | https://www.welcometofrance.com/lancement-de-la-campagne-make-it-iconic | OK | 200 | yes | 11476 | 44 | 0 | 51 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/lancement-du-chatbot-welcome-to-france | https://www.welcometofrance.com/lancement-du-chatbot-welcome-to-france | OK | 200 | yes | 11457 | 44 | 0 | 42 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/lancement-du-site-welcometofrance-com | https://www.welcometofrance.com/lancement-du-site-welcometofrance-com | OK | 200 | yes | 12246 | 48 | 0 | 54 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/le-classement-international-des-universites-vient-detre-publie-par-le-shanghai-ranking-consultancy | https://www.welcometofrance.com/le-classement-international-des-universites-vient-detre-publie-par-le-shanghai-ranking-consultancy | OK | 200 | yes | 11453 | 44 | 0 | 44 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient, text_sensory_misuse |
| https://welcometofrance.com/le-dernier-rapport-sur-linternationalisation-de-leconomie-francaise-est-sorti | https://www.welcometofrance.com/le-dernier-rapport-sur-linternationalisation-de-leconomie-francaise-est-sorti | OK | 200 | yes | 12063 | 48 | 0 | 54 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/le-detachement-des-travailleurs-etrangers-en-france | https://www.welcometofrance.com/le-detachement-des-travailleurs-etrangers-en-france | OK | 200 | yes | 12236 | 52 | 0 | 61 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, heading_markup_misuse, img_alt_valid, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/le-prelevement-a-la-source-dans-le-contexte-de-la-mobilite-internationale | https://www.welcometofrance.com/le-prelevement-a-la-source-dans-le-contexte-de-la-mobilite-internationale | OK | 200 | yes | 12997 | 60 | 0 | 85 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, heading_markup_misuse, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/le-welcome-to-france-fait-peau-neuve | https://www.welcometofrance.com/le-welcome-to-france-fait-peau-neuve | OK | 200 | yes | 11994 | 46 | 0 | 54 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/liens-utiles | https://www.welcometofrance.com/liens-utiles | OK | 200 | yes | 12024 | 40 | 0 | 64 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/linsead-publie-son-etude-talents | https://www.welcometofrance.com/linsead-publie-son-etude-talents | OK | 200 | yes | 12331 | 52 | 0 | 61 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/loi-pour-controler-limmigration-et-ameliorer-lintegration | https://www.welcometofrance.com/loi-pour-controler-limmigration-et-ameliorer-lintegration | OK | 200 | yes | 11961 | 46 | 0 | 47 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/make-a-french-start-simplanter-en-france | https://www.welcometofrance.com/make-a-french-start-simplanter-en-france | OK | 200 | yes | 11773 | 50 | 0 | 62 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/make-our-planet-great-again | https://www.welcometofrance.com/make-our-planet-great-again | OK | 200 | yes | 12208 | 46 | 0 | 53 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/masterclass-welcome-to-france-startupers | https://www.welcometofrance.com/masterclass-welcome-to-france-startupers | OK | 200 | yes | 11582 | 48 | 0 | 55 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/mediatheque | https://www.welcometofrance.com/mediatheque | OK | 200 | yes | 12902 | 76 | 0 | 107 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_exists, input_label_visible, input_onchange_review, script_select_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/mentions-legales | https://www.welcometofrance.com/mentions-legales | OK | 200 | yes | 12149 | 40 | 0 | 52 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://welcometofrance.com/mesures-daccompagnement-des-entreprises-et-des-salaries-impactes-par-le-covid-19esures-daccompagnement-des-entreprises-et-des-salaries-impactes-par-le-covid-19 | https://www.welcometofrance.com/mesures-daccompagnement-des-entreprises-et-des-salaries-impactes-par-le-covid-19esures-daccompagnement-des-entreprises-et-des-salaries-impactes-par-le-covid-19 | OK | 200 | yes | 13738 | 44 | 0 | 52 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/mise-a-jour-des-seuils-de-remuneration-des-titres-de-sejour-talent | https://www.welcometofrance.com/mise-a-jour-des-seuils-de-remuneration-des-titres-de-sejour-talent | OK | 200 | yes | 11488 | 44 | 0 | 46 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient, text_quoted_correctly |
| https://welcometofrance.com/nos-regions | https://www.welcometofrance.com/nos-regions | OK | 200 | yes | 12310 | 40 | 0 | 60 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient |
| https://welcometofrance.com/nos-rubriques | https://www.welcometofrance.com/nos-rubriques | OK | 200 | yes | 11803 | 50 | 0 | 49 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/nous-contacter | https://www.welcometofrance.com/nous-contacter | OK | 200 | yes | 11468 | 56 | 0 | 61 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/nouveautes-a-venir-pour-entrer-et-sortir-de-lespace-schengen | https://www.welcometofrance.com/nouveautes-a-venir-pour-entrer-et-sortir-de-lespace-schengen | OK | 200 | yes | 11685 | 50 | 0 | 47 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/nouvelle-demarche | https://www.welcometofrance.com/nouvelle-demarche | OK | 200 | yes | 11388 | 40 | 0 | 39 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/nouvelles-dispositions-en-matiere-de-detachement-de-travailleurs | https://www.welcometofrance.com/nouvelles-dispositions-en-matiere-de-detachement-de-travailleurs | OK | 200 | yes | 13288 | 64 | 0 | 91 | 0 | 25 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/page-welcome-to-la-french-tech | https://www.welcometofrance.com/page-welcome-to-la-french-tech | OK | 200 | yes | 16453 | 64 | 0 | 83 | 0 | 30 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, caption_track_exists, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, frame_src_valid, heading_content_exists, heading_markup_misuse, html_lang_exists, html_skipnav_exists, input_label_visible, media_keyboard_controllable, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/paris-accueillera-les-jeux-olympiques-de-2024 | https://www.welcometofrance.com/paris-accueillera-les-jeux-olympiques-de-2024 | OK | 200 | yes | 12033 | 44 | 0 | 42 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/paris-sur-le-podium-du-classement-ft-1000-pour-son-nombre-dentreprises-a-forte-croissance | https://www.welcometofrance.com/paris-sur-le-podium-du-classement-ft-1000-pour-son-nombre-dentreprises-a-forte-croissance | OK | 200 | yes | 11610 | 44 | 0 | 46 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient, text_sensory_misuse |
| https://welcometofrance.com/passeport-talent-dematerialisation | https://www.welcometofrance.com/passeport-talent-dematerialisation | OK | 200 | yes | 11557 | 44 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/politique-de-confidentialite | https://www.welcometofrance.com/politique-de-confidentialite | OK | 200 | yes | 11294 | 40 | 0 | 39 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/pour-la-6%e1%b5%89-annee-consecutive-la-france-est-en-2024-la-1ere-destination-des-investisseurs-etrangers-en-europe | https://www.welcometofrance.com/pour-la-6%e1%b5%89-annee-consecutive-la-france-est-en-2024-la-1ere-destination-des-investisseurs-etrangers-en-europe | OK | 200 | yes | 11424 | 44 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/precisions-sur-les-modalites-de-fixation-de-prix-des-bons-de-souscription-des-parts-de-createur-dentreprise-bspce | https://www.welcometofrance.com/precisions-sur-les-modalites-de-fixation-de-prix-des-bons-de-souscription-des-parts-de-createur-dentreprise-bspce | OK | 200 | yes | 11476 | 44 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/prelevement-a-la-source | https://www.welcometofrance.com/prelevement-a-la-source | OK | 200 | yes | 12028 | 52 | 0 | 60 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, empty-heading, heading-order, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_accessiblename_exists, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_content_exists, html_lang_exists, html_skipnav_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |
| https://welcometofrance.com/projet-daccord-de-retrait-du-royaume-uni-de-lunion-europeenne | https://www.welcometofrance.com/projet-daccord-de-retrait-du-royaume-uni-de-lunion-europeenne | OK | 200 | yes | 11534 | 44 | 0 | 43 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, button-name, color-contrast, image-alt, landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique, link-name, select-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_content_in_landmark, aria_id_unique, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_contrast_sufficient |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://welcometofrance.com/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/visa-sejour-travail"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(6) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(1) > .link-over[target=""]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/protection-sociale"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(6) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(2) > .link-over[target=""]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/fiscalite"></a>`
- XPath: `.reassurance-card.rel:nth-child(3) > .link-over[target=""]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/travail"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(7) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(1) > .link-over[target=""]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/vie-quotidienne"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(7) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(2) > .link-over[target=""]`

*... and 29 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/?page_id=614

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/?post_type=wefr_fiche&amp;p=480

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.first > button`

**Failure 3:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.prev > button`

**Failure 4:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 5:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.first > button`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Cartes de séjour temporaires «&nbsp;Travailleur temporaire&nbsp;» et «&nbsp;Salarié&nbsp;»</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Médiathèque</span>`
- XPath: `span:nth-child(4)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Cartes de séjour temporaires «&nbsp;Travailleur temporaire&nbsp;» et «&nbsp;Salarié&nbsp;»</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav-main" class="nav-main" role="navigation">`
- XPath: `#nav-main`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 4:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav-main" class="nav-main" role="navigation">`
- XPath: `#nav-main`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.flex > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/cst-travailleur-temporaire-et-salarie" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/salaries-detaches-ict" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/french-tech-visa-for-employees" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/french-tech-visa-for-investor" class="link-over"></a>`
- XPath: `article:nth-child(4) > .link-over`

*... and 43 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

### https://welcometofrance.com/?post_type=wefr_fiche&amp;p=486

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.first > button`

**Failure 3:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.prev > button`

**Failure 4:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 5:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.first > button`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Cartes de séjour temporaires «&nbsp;Travailleur temporaire&nbsp;» et «&nbsp;Salarié&nbsp;»</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Médiathèque</span>`
- XPath: `span:nth-child(4)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Cartes de séjour temporaires «&nbsp;Travailleur temporaire&nbsp;» et «&nbsp;Salarié&nbsp;»</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav-main" class="nav-main" role="navigation">`
- XPath: `#nav-main`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 4:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav-main" class="nav-main" role="navigation">`
- XPath: `#nav-main`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.flex > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/cst-travailleur-temporaire-et-salarie" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/salaries-detaches-ict" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/french-tech-visa-for-employees" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/fiche/french-tech-visa-for-investor" class="link-over"></a>`
- XPath: `article:nth-child(4) > .link-over`

*... and 43 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `.lang_selector_select`

### https://welcometofrance.com/accessibilite

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/accessibility">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Accessibilité</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/accessibility">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Accessibilité</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/accessibility">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/accessibility">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/la-france-pays-le-plus-attractif-deurope-pour-les-investissements-etrangers

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France, championne d’Europe pour l’attractivité pour la 5ème année consécutive</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">2 mai 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France, championne d’Europe pour l’attractivité pour la 5ème année consécutive</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `.header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `.header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `.header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `.header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/ouverture-dun-service-en-ligne-de-demande-dautorisation-de-travail

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Ouverture d’un service en ligne de demande d’autorisation de travail</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">2 avril 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Ouverture d’un service en ligne de demande d’autorisation de travail</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4><b>Procédure&nbsp;</b></h4>`
- XPath: `h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4><b>Procédure&nbsp;</b></h4>`
- XPath: `h4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/referencement-de-prestataires-offrant-des-services-bancaires

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Référencement de prestataires offrant des services bancaires</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 avril 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Référencement de prestataires offrant des services bancaires</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/region/pays-de-la-loire

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/region/pays-de-la-loire">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Pays de la Loire</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>106,7 Md€</p>`
- XPath: `.details:nth-child(1) > p:nth-child(2)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>5 %</p>`
- XPath: `.details:nth-child(2) > p:nth-child(2)`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>3,8 millions </p>`
- XPath: `.details:nth-child(3) > p:nth-child(2)`

*... and 9 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="" target="_blank">           <img src="" alt="">         </a>`
- XPath: `.image-container > a[href=""][target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

*... and 17 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/region/pays-de-la-loire">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/region/pays-de-la-loire">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/wefr_survey_subject/prestations-de-services

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<h1 class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/visa-sejour-travail"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(6) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(1) > .link-over[target=""]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/protection-sociale"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(6) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(2) > .link-over[target=""]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/fiscalite"></a>`
- XPath: `.reassurance-card.rel:nth-child(3) > .link-over[target=""]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/travail"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(7) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(1) > .link-over[target=""]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="" href="https://www.welcometofrance.com/rubrique/vie-quotidienne"></a>`
- XPath: `.blade--wrapper.aos-init[data-aos="fade-up"]:nth-child(7) > .extra-large > .blade--content > .jcc.fdc-m.flex > .reassurance-card.rel:nth-child(2) > .link-over[target=""]`

*... and 29 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/fiche/welcome-to-la-french-tech-faq

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Welcome to La French Tech – FAQ</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<time datetime="2021-07-06">06/07/2021</time>`
- XPath: `time`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Welcome to La French Tech – FAQ</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Vous souhaitez vous installer en France pour mener à bien un projet de création de startup, investir dans la Tech française ou être embauché par une startup française ?</h3>`
- XPath: `.wys > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Vous souhaitez vous installer en France pour mener à bien un projet de création de startup, investir dans la Tech française ou être embauché par une startup française ?</h3>`
- XPath: `.wys > h3`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/je-veux-lancer-ma-startup-en-france" target="_blank"></a>`
- XPath: `.tease-card.w33.big:nth-child(1) > .link-over[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href=" https://www.welcometofrance.com/fiche/faq-french-tech-visa-for-employees" target="_blank"></a>`
- XPath: `.tease-card.w33.big:nth-child(2) > .link-over[target="_blank"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href=" https://www.welcometofrance.com/fiche/faq-french-tech-for-investor" target="_blank"></a>`
- XPath: `.tease-card.w33.big:nth-child(3) > .link-over[target="_blank"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/french-tech-visa-for-founders"></a>`
- XPath: `.related-card.fdc.box:nth-child(1) > .link-over`

*... and 27 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/1603

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/1603">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Venir en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">10 janvier 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/1603">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Venir en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/1603">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/1603">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/7997

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Demandes de titres de séjour pour les britanniques installés en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">30 septembre 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Demandes de titres de séjour pour les britanniques installés en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/a-propos

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/about-us">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>A propos</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/about-us">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>A propos</span>`
- XPath: `span:nth-child(3)`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-accueil-des-talents" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-aides-et-financements" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/?p=1334" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/about-us">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/about-us">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/accord-france-etats-unis%e2%80%af-un-dispositif-visa-simplifie-pour-les-investisseurs

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Accord France/Etats-Unis : Un dispositif visa simplifié pour les investisseurs</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 décembre 2023</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Accord France/Etats-Unis : Un dispositif visa simplifié pour les investisseurs</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/accueil-des-citoyens-ukrainiens-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Accueil en France des personnes déplacées d’Ukraine</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">5 octobre 2022</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Accueil en France des personnes déplacées d’Ukraine</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h1></h1>`
- XPath: `.wys > h1`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h1></h1>`
- XPath: `.wys > h1`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5>Mise en place d’une protection temporaire pour les personnes déplacées d’Ukraine</h5>`
- XPath: `h5`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5>Mise en place d’une protection temporaire pour les personnes déplacées d’Ukraine</h5>`
- XPath: `h5`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/article-1

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Startuppers, Choose France : le Welcome Office à Viva Tech !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 mai 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Startuppers, Choose France : le Welcome Office à Viva Tech !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Business France était présent au salon Viva Technology, événement incontournable de l’innovation qui s’est tenu les 24, 25 et 26 mai 2018.</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Business France était présent au salon Viva Technology, événement incontournable de l’innovation qui s’est tenu les 24, 25 et 26 mai 2018.</h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-1-2

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : je vis au Royaume-Uni et je voyage souvent en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 janvier 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-2">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : je vis au Royaume-Uni et je voyage souvent en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/brexit-je-reside-actuellement-en-france" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-2" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-4" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/citoyens-de-lue-eee-suisse"></a>`
- XPath: `.related-card.fdc.box:nth-child(1) > .link-over`

*... and 27 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-2">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-1-3

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le French Tech Visa for Employees étendu !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">1 mars 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-3">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le French Tech Visa for Employees étendu !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/french-tech-visa-for-employees"></a>`
- XPath: `.related-card.box.fdc:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-recrutes-par-une-entreprise-en-france"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/french-tech-visa-for-founders"></a>`
- XPath: `.related-card.box.fdc:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-start-upers"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(4) > .link-over`

*... and 23 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-3">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-1-4

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Masterclass – Welcome to France Startupers!</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">10 octobre 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-4">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Masterclass – Welcome to France Startupers!</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Agenda.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Agenda.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-1-4">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-2

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make A French Start – L’environnement fiscal français</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">9 octobre 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make A French Start – L’environnement fiscal français</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/guide-make-a-french-start-livret-3" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/?p=1334" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-accueil-des-talents" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-2-2

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : Je vais ou j’envisage de m’installer en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 janvier 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-2">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : Je vais ou j’envisage de m’installer en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(20)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(20)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-recrutes-par-une-entreprise-en-france"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-detaches"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-diriger-une-societe-en-france"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/procedure-simplifiee-famille-accompagnante"></a>`
- XPath: `.related-card.fdc.box:nth-child(4) > .link-over`

*... and 33 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-2">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-2-3

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mycompanyinfrance.fr, nouveau site pour accompagner les entrepreneurs étrangers</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">9 janvier 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-3">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mycompanyinfrance.fr, nouveau site pour accompagner les entrepreneurs étrangers</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/?p=1334" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

*... and 19 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-3">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-2-4

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : où se renseigner ?</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">9 décembre 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-4">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : où se renseigner ?</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(1) > .text-wrapper > .wys > h4`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(7) > .text-wrapper > .wys > h4`

**Failure 3:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(1) > .text-wrapper > .wys > h4`

**Failure 4:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(7) > .text-wrapper > .wys > h4`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(1) > .text-wrapper > .wys > h4`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(7) > .text-wrapper > .wys > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(1) > .text-wrapper > .wys > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `.medium.text-wrapper:nth-child(7) > .text-wrapper > .wys > h4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/brexit-je-reside-actuellement-en-france" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-2" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-1-2" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/citoyens-de-lue-eee-suisse"></a>`
- XPath: `.related-card.fdc.box:nth-child(1) > .link-over`

*... and 29 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-2-4">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-4

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France, un pays qui attire les travailleurs</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">29 novembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France, un pays qui attire les travailleurs</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(3)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(3)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(3)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(3)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-4-3

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Validez votre VLS-TS en ligne !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">12 mars 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-3">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Validez votre VLS-TS en ligne !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">`
- XPath: `.wys > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">`
- XPath: `.wys > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=488"></a>`
- XPath: `.related-card.box.fdc:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=480"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-titre-de-sejour"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-3">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/article-4-4

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Attirer les talents internationaux et compétences recherchées</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">9 décembre 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-4">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Attirer les talents internationaux et compétences recherchées</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Le gouvernement français a annoncé le 6 novembre 2019 de nouvelles orientations prises pour améliorer la politique d’immigration, d’asile et d’intégration française.</h3>`
- XPath: `.wys > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Le gouvernement français a annoncé le 6 novembre 2019 de nouvelles orientations prises pour améliorer la politique d’immigration, d’asile et d’intégration française.</h3>`
- XPath: `.wys > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-recrutes-par-une-entreprise-en-france"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-diriger-une-societe-en-france"></a>`
- XPath: `.pinned.bg-pink.related-card:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/?post_type=wefr_fiche&amp;p=515"></a>`
- XPath: `.related-card.box.fdc:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/article-4-4">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/attractivite%e2%80%af-la-france-confirme-son-leadership-en-europe

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Attractivité : la France confirme son leadership en Europe</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">31 mai 2022</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Attractivité : la France confirme son leadership en Europe</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h1></h1>`
- XPath: `.wys > h1`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h1></h1>`
- XPath: `.wys > h1`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/attributions-gratuites-dactions-aga

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Attributions gratuites d’actions (AGA)</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 août 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Attributions gratuites d’actions (AGA)</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>Exemple</strong></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>Exemple</strong></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/baisse-du-cout-de-la-taxe-sur-les-titres-de-sejour

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Baisse du coût de la taxe sur les titres de séjour !</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">21 février 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Baisse du coût de la taxe sur les titres de séjour !</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/bilan-2020-des-investissements-internationaux-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bilan 2020 des investissements internationaux en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">31 mars 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bilan 2020 des investissements internationaux en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/bilan-2021-des-investissements-internationaux-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bilan 2021 des investissements internationaux en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">29 mars 2022</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bilan 2021 des investissements internationaux en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/bilan-2022-des-investissements-internationaux-en-france" class="link-over"></a>`
- XPath: `article > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

*... and 17 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/bilan-2022-des-investissements-internationaux-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bilan 2022 des investissements internationaux en France</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">11 mai 2023</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bilan 2022 des investissements internationaux en France</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/bonjour-tout-le-monde

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Suivez le projet de loi PACTE</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">18 juin 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Suivez le projet de loi PACTE</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/bonjour-tout-le-monde-2

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>JOIN THE GAME! France, the best place to create</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">2 décembre 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-2">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>JOIN THE GAME! France, the best place to create</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-2">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-2">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/bonjour-tout-le-monde-3

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : ce qui va changer pour les citoyens britanniques</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 janvier 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-3">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : ce qui va changer pour les citoyens britanniques</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/brexit-je-reside-actuellement-en-france" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-2" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-1-2" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-4" class="link-over"></a>`
- XPath: `article:nth-child(4) > .link-over`

*... and 23 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-3">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-3">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/bonjour-tout-le-monde-4

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Ce qui change au mois de mars</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">1 mars 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-4">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Ce qui change au mois de mars</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(5)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(5)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(5)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4><strong>Des changements relatifs à la prestation de services internationale interviendront en 2020</strong></h4>`
- XPath: `h4:nth-child(11)`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4></h4>`
- XPath: `h4:nth-child(5)`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h4><strong>Des changements relatifs à la prestation de services internationale interviendront en 2020</strong></h4>`
- XPath: `h4:nth-child(11)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-4">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/bonjour-tout-le-monde-4">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/bons-de-souscription-pour-creation-dentreprise-bspce

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bons de souscription pour création d’entreprise (BSPCE)</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 août 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Bons de souscription pour création d’entreprise (BSPCE)</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Exemple :</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Exemple :</h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/brexit-je-reside-actuellement-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : je réside actuellement en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">26 janvier 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Brexit : je réside actuellement en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-2" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-1-2" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2-4" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/citoyens-de-lue-eee-suisse"></a>`
- XPath: `.related-card.fdc.box:nth-child(1) > .link-over`

*... and 29 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/business-france-publie-le-doing-business-2017

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Business France publie le Doing Business 2017</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2017</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Business France publie le Doing Business 2017</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/covid-19-entree-et-sejour-des-talents-etrangers-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>COVID-19 : Entrée et séjour des talents étrangers en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">16 février 2023</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>COVID-19 : Entrée et séjour des talents étrangers en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/de-nouvelles-mesures-en-faveur-des-startups-et-de-leurs-talents

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>De nouvelles mesures en faveur des startups et de leurs talents</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 mars 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>De nouvelles mesures en faveur des startups et de leurs talents</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;"><span style="color: #000000;">Assouplissement du régime des BSPCE</span></h3>`
- XPath: `h3:nth-child(5)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;"><span style="color: #000000;">Assouplissement du régime des BSPCE</span></h3>`
- XPath: `h3:nth-child(5)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/dematerialisation-de-procedure-de-demande-et-renouvellement-de-carte-de-resident

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Dématérialisation de procédure de demande et renouvellement de carte de résident</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">16 juillet 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Dématérialisation de procédure de demande et renouvellement de carte de résident</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/detachement-de-travailleurs-revision-de-la-directive-europeenne

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Détachement de travailleurs : révision de la directive Européenne</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Détachement de travailleurs : révision de la directive Européenne</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-detaches"></a>`
- XPath: `.pinned > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/salaries-detaches-intracommunautaires"></a>`
- XPath: `.related-card.fdc.box:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-accueil-des-talents" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/guide-make-a-french-start-livret-3" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

*... and 23 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/doing-business-accueil-des-talents

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Doing Business : Accueil des talents</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 avril 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Doing Business : Accueil des talents</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-diriger-une-societe-en-france"></a>`
- XPath: `.bg-pink.related-card.fdc:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-recrutes-par-une-entreprise-en-france"></a>`
- XPath: `.bg-pink.related-card.fdc:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-le-systeme-de-securite-sociale-francais"></a>`
- XPath: `.bg-fuchsia > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-determination-de-la-residence-fiscale"></a>`
- XPath: `.bg-yellow > .link-over`

*... and 31 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/doing-business-aides-et-financements

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Doing Business : Aides et financements</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 mars 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Doing Business : Aides et financements</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/fd-talent-europe-is-a-great-place-to-work

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>FD Talent – Europe is a great place to work!</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">13 janvier 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>FD Talent – Europe is a great place to work!</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/french-tech-green20-la-nouvelle-promotion-annoncee

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>French Tech Green20, la nouvelle promotion annoncée</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">23 juin 2022</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>French Tech Green20, la nouvelle promotion annoncée</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/french-tech-visa

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/french-tech-visa">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>French Tech Visa</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">30 septembre 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/french-tech-visa">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>French Tech Visa</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(3)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(3)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(3)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(3)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/french-tech-visa-for-employees"></a>`
- XPath: `.related-card.box.fdc:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/french-tech-visa-for-founders"></a>`
- XPath: `.related-card.box.fdc:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/passeport-talent-investisseur"></a>`
- XPath: `.related-card.box.fdc:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/french-tech-visa">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/french-tech-visa">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/guide-make-a-french-start-livret-3

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make A French Start – &nbsp;La législation sociale en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">9 octobre 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make A French Start – &nbsp;La législation sociale en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-accueil-des-talents" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/article-2" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/make-a-french-start-simplanter-en-france" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-aides-et-financements" class="link-over"></a>`
- XPath: `article:nth-child(4) > .link-over`

*... and 23 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/ils-ont-choisi-la-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/they-chose-france">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Ils ont choisi la France !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">20 janvier 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/they-chose-france">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Ils ont choisi la France !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/they-chose-france">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/they-chose-france">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/information-relative-au-coronavirus-covid-19-17-mars

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Information relative au Coronavirus COVID-19  – 17 mars</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">17 mars 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Information relative au Coronavirus COVID-19  – 17 mars</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/integration-des-simulateurs-du-code-du-travail-numerique

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Intégration des simulateurs du Code du travail numérique</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">3 janvier 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Intégration des simulateurs du Code du travail numérique</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/join-la-french-tech

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/join-la-french-tech">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Join la French Tech!</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">10 janvier 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/join-la-french-tech">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Join la French Tech!</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/join-la-french-tech">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/join-la-french-tech">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/join-the-french-tech-revolution

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Join the French Tech Revolution!</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">8 juillet 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Join the French Tech Revolution!</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-france-accueille-les-talents-2

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/france-welcomes-talent">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France accueille les talents</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="PoweredByStonly__PoweredByStonlyCustomText-sc-8743039c-2 hoqEbV ston-powered-by-stonly-custom-text">Powered by Stonly</span>`
- XPath: `#ston-pBNf6xJSt9`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/france-welcomes-talent">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France accueille les talents</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="block-title"></h2>`
- XPath: `.blade-image-links-content > .block-title`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h2 class="block-title"></h2>`
- XPath: `.blade-image-links-content > .block-title`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="ston-pBNf6xJSt9" src="https://stonly.com/embed/en/pBNf6xJSt9/view/" name="StonlyExplanation" width="100%" height="815" frameborder="0" allowfullscreen="allowfullscreen"> </iframe>`
- XPath: `#ston-pBNf6xJSt9`

**Failure 2:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="ston-pBNf6xJSt9" src="https://stonly.com/embed/en/pBNf6xJSt9/view/" name="StonlyExplanation" width="100%" height="815" frameborder="0" allowfullscreen="allowfullscreen"> </iframe>`
- XPath: `#ston-pBNf6xJSt9`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="full-link" href="https://www.welcometofrance.com/bilan-2022-des-investissements-internationaux-en-france" target="_blank"></a>`
- XPath: `.link:nth-child(1) > .full-link[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="full-link" href="https://www.businessfrance.fr/procom-mediatheque-bilan-des-investissements-internationaux-en-france-2021" target="_blank"></a>`
- XPath: `.link:nth-child(2) > .full-link[target="_blank"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-accueil-des-talents" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-aides-et-financements" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

*... and 25 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/france-welcomes-talent">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/france-welcomes-talent">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/la-france-attire-les-chercheurs-etrangers

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France attire les chercheurs étrangers</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">7 mai 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France attire les chercheurs étrangers</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-france-attire-les-talents-etrangers

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France attire les talents étrangers</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">29 mars 2017</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France attire les talents étrangers</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-france-demeure-a-la-premiere-place-du-classement-2024-de-lesna

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France demeure à la première place du classement 2024 de l’ESNA</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">24 février 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<figcaption class="wp-caption-text">https://www.linkedin.com/posts/dgentreprises_european-startup-nation-alliance-activity-7299718212265361409-QMDs/</figcaption>`
- XPath: `figcaption`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

*... and 3 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-france-gagne-en-attractivite-aupres-des-investisseurs-etrangers

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France gagne en attractivité auprès des investisseurs étrangers</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">11 décembre 2017</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France gagne en attractivité auprès des investisseurs étrangers</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-france-maintient-sa-premiere-place-dans-le-classement-2025-de-lesna

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France maintient sa première place dans le classement 2025 de l’ESNA</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 février 2026</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France maintient sa première place dans le classement 2025 de l’ESNA</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-french-tech-fete-ses-10-ans

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La French Tech fête ses 10 ans !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">20 octobre 2023</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La French Tech fête ses 10 ans !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-french-tech-survival-guide

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La French Tech – Survival Guide</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">8 décembre 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La French Tech – Survival Guide</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Video.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-nouvelle-promotion-french-tech-2030-annoncee

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La nouvelle promotion French Tech 2030 annoncée</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">6 novembre 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La nouvelle promotion French Tech 2030 annoncée</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-nouvelle-promotion-french-tech-next40-120-annoncee

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La nouvelle promotion French Tech Next40/120 annoncée</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">24 mai 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La nouvelle promotion French Tech Next40/120 annoncée</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-nouvelle-promotion-next40-ft120-annoncee

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La nouvelle promotion NEXT40 /FT120 annoncée</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">21 février 2023</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La nouvelle promotion NEXT40 /FT120 annoncée</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/la-procedure-de-demande-de-titre-de-sejour-passeport-talent-createur-dentreprise-evolue

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/8054">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La procédure de demande de titre de séjour Passeport talent – Créateur d’entreprise évolue</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">30 septembre 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/8054">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La procédure de demande de titre de séjour Passeport talent – Créateur d’entreprise évolue</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/8054">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/8054">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/lancement-de-la-campagne-make-it-iconic

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Lancement de la campagne Make It Iconic</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 novembre 2023</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Lancement de la campagne Make It Iconic</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/lancement-du-chatbot-welcome-to-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Lancement du chatbot Welcome to France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">7 novembre 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Lancement du chatbot Welcome to France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/lancement-du-site-welcometofrance-com

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Lancement du site welcometofrance.com</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">24 avril 2017</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Lancement du site welcometofrance.com</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/le-classement-international-des-universites-vient-detre-publie-par-le-shanghai-ranking-consultancy

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Classement de Shanghai 2024 : le succès des universités françaises</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">30 août 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Classement de Shanghai 2024 : le succès des universités françaises</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/le-dernier-rapport-sur-linternationalisation-de-leconomie-francaise-est-sorti

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le dernier Rapport sur l’internationalisation de l’économie française est sorti !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le dernier Rapport sur l’internationalisation de l’économie française est sorti !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/le-detachement-des-travailleurs-etrangers-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le détachement des salariés étrangers en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">30 juin 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le détachement des salariés étrangers en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4>La déclaration préalable de détachement</h4>`
- XPath: `.medium.text-wrapper:nth-child(5) > .text-wrapper > .wys > h4`

**Failure 3:**
- Message: Heading levels should only increase by one
- HTML: `<h4>L’aménagement des exigences administratives</h4>`
- XPath: `.medium.text-wrapper:nth-child(11) > .text-wrapper > .wys > h4`

**Failure 4:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

**Failure 5:**
- Message: Heading levels should only increase by one
- HTML: `<h4>La déclaration préalable de détachement</h4>`
- XPath: `.medium.text-wrapper:nth-child(5) > .text-wrapper > .wys > h4`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/le-prelevement-a-la-source-dans-le-contexte-de-la-mobilite-internationale

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le prélèvement à la source dans le contexte de la mobilité internationale</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">12 mars 2019</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Le prélèvement à la source dans le contexte de la mobilité internationale</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(1)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(1)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(1)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `.wys > h3:nth-child(1)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/paroles.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-determination-de-la-residence-fiscale"></a>`
- XPath: `.pinned.bg-yellow.related-card:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/prelevement-a-la-source"></a>`
- XPath: `.related-card.fdc.box:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-resident-fiscal-francais"></a>`
- XPath: `.pinned.bg-yellow.related-card:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-non-resident-fiscal"></a>`
- XPath: `.pinned.bg-yellow.related-card:nth-child(4) > .link-over`

*... and 27 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/le-welcome-to-france-fait-peau-neuve

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Welcome to France fait peau neuve&nbsp;!</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">27 janvier 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Welcome to France fait peau neuve&nbsp;!</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/liens-utiles

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/liens-utiles">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Liens utiles</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/liens-utiles">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Liens utiles</span>`
- XPath: `span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/liens-utiles">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/liens-utiles">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/linsead-publie-son-etude-talents

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>L’INSEAD publie son étude «&nbsp;Talents&nbsp;»</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 mars 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>L’INSEAD publie son étude «&nbsp;Talents&nbsp;»</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-content > h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-content > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/etudiants"></a>`
- XPath: `.related-card.box.fdc:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/talent-salarie-qualifie"></a>`
- XPath: `.related-card.box.fdc:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-recrutes-par-une-entreprise-en-france"></a>`
- XPath: `.pinned > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/loi-pour-controler-limmigration-et-ameliorer-lintegration

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Loi pour contrôler l’immigration et améliorer l’intégration</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 janvier 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Loi pour contrôler l’immigration et améliorer l’intégration</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Quels changements ?</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Quels changements ?</h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/make-a-french-start-simplanter-en-france

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make a French Start – S’implanter en France</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">9 octobre 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make a French Start – S’implanter en France</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Publication.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-aides-et-financements" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/guide-make-a-french-start-livret-3" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/doing-business-accueil-des-talents" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

*... and 21 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/make-our-planet-great-again

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make our planet great again</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">11 décembre 2017</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Make our planet great again</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/masterclass-welcome-to-france-startupers

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Masterclass – Welcome to France Startuppers!</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">14 janvier 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Masterclass – Welcome to France Startuppers!</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3></h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Agenda.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Agenda.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/mediatheque

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.first > button`

**Failure 3:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.prev > button`

**Failure 4:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 5:**
- Message: Buttons must have discernible text
- HTML: `<button disabled=""></button>`
- XPath: `.first > button`

*... and 1 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="/en/news">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France maintient sa première place dans le classement 2025 de l’ESNA</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Médiathèque</span>`
- XPath: `span:nth-child(4)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="/en/news">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>La France maintient sa première place dans le classement 2025 de l’ESNA</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav-main" class="nav-main" role="navigation">`
- XPath: `#nav-main`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 4:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav-main" class="nav-main" role="navigation">`
- XPath: `#nav-main`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.flex > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/la-france-maintient-sa-premiere-place-dans-le-classement-2025-de-lesna" class="link-over"></a>`
- XPath: `article:nth-child(1) > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/lancement-du-chatbot-welcome-to-france" class="link-over"></a>`
- XPath: `article:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/la-nouvelle-promotion-french-tech-2030-annoncee" class="link-over"></a>`
- XPath: `article:nth-child(3) > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/make-a-french-start-simplanter-en-france" class="link-over"></a>`
- XPath: `article:nth-child(4) > .link-over`

*... and 43 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="/en/news">EN</option></select>`
- XPath: `.lang_selector_select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="/en/news">EN</option></select>`
- XPath: `.lang_selector_select`

### https://welcometofrance.com/mentions-legales

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/mentions-legales">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mentions légales</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/mentions-legales">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mentions légales</span>`
- XPath: `span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/mentions-legales">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/mentions-legales">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/mesures-daccompagnement-des-entreprises-et-des-salaries-impactes-par-le-covid-19esures-daccompagnement-des-entreprises-et-des-salaries-impactes-par-le-covid-19

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mesures d’accompagnement des entreprises et des salariés impactés par le Covid-19</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 avril 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mesures d’accompagnement des entreprises et des salariés impactés par le Covid-19</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/mise-a-jour-des-seuils-de-remuneration-des-titres-de-sejour-talent

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mise à jour des seuils de rémunération des titres de séjour «&nbsp;Talent&nbsp;»</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">3 septembre 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mise à jour des seuils de rémunération des titres de séjour «&nbsp;Talent&nbsp;»</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/nos-regions

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/our-regions">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nos régions</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/our-regions">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nos régions</span>`
- XPath: `span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/our-regions">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/our-regions">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/nos-rubriques

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nos-rubriques">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nos rubriques</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nos-rubriques">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nos rubriques</span>`
- XPath: `span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="/rubrique/visa-sejour-travail"></a>`
- XPath: `.link-over[href$="visa-sejour-travail"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="/rubrique/travail"></a>`
- XPath: `.category-card-wrapper.box.rel:nth-child(2) > .link-over[href$="travail"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="/rubrique/protection-sociale"></a>`
- XPath: `.link-over[href$="protection-sociale"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="/rubrique/fiscalite"></a>`
- XPath: `.link-over[href$="fiscalite"]`

*... and 25 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nos-rubriques">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nos-rubriques">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/nous-contacter

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/contact-us">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/contact-us">EN</option></select>`
- XPath: `select`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.flex > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.flex > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://helpy.easyvista.com/index.php?timestamp=1672754920943&amp;name=com.france365.639b340573752&amp;page=6202498f69a4f&amp;forcelogin" target=""></a>`
- XPath: `.aos-animate.tease-card.w33:nth-child(1) > .link-over[target=""]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://helpy.easyvista.com/s/index.php?timestamp=1672751569515&amp;name=com.france365.639b340573752&amp;page=62027c1544532&amp;forcelogin" target=""></a>`
- XPath: `.aos-animate.tease-card.w33:nth-child(2) > .link-over[target=""]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://helpy.easyvista.com/index.php?timestamp=1672754994179&amp;name=com.france365.639b340573752&amp;page=62027e9d117f8&amp;forcelogin" target=""></a>`
- XPath: `.aos-animate.tease-card.w33:nth-child(3) > .link-over[target=""]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://helpy.easyvista.com/index.php?timestamp=1672754994179&amp;name=com.france365.639b340573752&amp;page=62027e9d117f8&amp;forcelogin" target=""></a>`
- XPath: `.tease-card.w33.big:nth-child(4) > .link-over[target=""]`

*... and 33 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/contact-us">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/contact-us">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/nouveautes-a-venir-pour-entrer-et-sortir-de-lespace-schengen

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nouveautés à venir pour entrer et sortir de l’espace Schengen</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">4 août 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<figcaption>Source : https://travel-europe.europa.eu/ees_en</figcaption>`
- XPath: `figcaption`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

*... and 3 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.medium.text-wrapper:nth-child(2) > .text-wrapper > .wys > h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.medium.text-wrapper:nth-child(3) > .text-wrapper > .wys > h3`

**Failure 3:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.medium.text-wrapper:nth-child(2) > .text-wrapper > .wys > h3`

**Failure 4:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.medium.text-wrapper:nth-child(3) > .text-wrapper > .wys > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/nouvelle-demarche

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nouvelle-demarche">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mon parcours</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nouvelle-demarche">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Mon parcours</span>`
- XPath: `span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nouvelle-demarche">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/nouvelle-demarche">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/nouvelles-dispositions-en-matiere-de-detachement-de-travailleurs

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nouvelles dispositions en matière de détachement de travailleurs</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">31 juillet 2020</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Nouvelles dispositions en matière de détachement de travailleurs</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-content > h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-content > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/le-detachement-des-travailleurs-etrangers-en-france" class="link-over"></a>`
- XPath: `article > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-salaries-detaches"></a>`
- XPath: `.bg-pink > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-la-protection-sociale-dans-le-cadre-dune-mobilite-internationale"></a>`
- XPath: `.bg-fuchsia > .link-over`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/salaries-detaches-ict"></a>`
- XPath: `.related-card.fdc.box:nth-child(3) > .link-over`

*... and 33 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/page-welcome-to-la-french-tech

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Welcome to la French Tech</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Welcome to la French Tech</span>`
- XPath: `span:nth-child(3)`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3 style="text-align: center;"></h3>`
- XPath: `h3:nth-child(6)`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.reassurance-card.rel:nth-child(1) > h3`

**Failure 3:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.reassurance-card.rel:nth-child(2) > h3`

**Failure 4:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.reassurance-card.rel:nth-child(3) > h3`

**Failure 5:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-wrapper.aos-init[data-aos="fade-up"]:nth-child(4) > .medium > .blade-video-content > h3`

*... and 9 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;"><strong>Votre prochain emploi pourrait se trouver en France, l’un des pôles de startups les plus dynamiques au monde.&nbsp;</strong></h3>`
- XPath: `.text-wrapper > .wys > h3:nth-child(2)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;"><strong>Votre prochain emploi pourrait se trouver en France, l’un des pôles de startups les plus dynamiques au monde.&nbsp;</strong></h3>`
- XPath: `.text-wrapper > .wys > h3:nth-child(2)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.aic.rel > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.aic.rel > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="_blank" href="https://www.welcometofrance.com/fiche/welcome-to-la-french-tech-faq"></a>`
- XPath: `.reassurance-card.rel:nth-child(1) > .link-over[target="_blank"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="_blank" href="https://www.welcometofrance.com/fiche/ecosysteme"></a>`
- XPath: `.reassurance-card.rel:nth-child(2) > .link-over[target="_blank"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" target="_blank" href="https://www.service-public.fr/particuliers/vosdroits/F32823"></a>`
- XPath: `.reassurance-card.rel:nth-child(3) > .link-over[target="_blank"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="https://www.welcometofrance.com/app/uploads/2019/10/20210614-Calculateur-de-revenus-VF-finale.png" target="_blank" rel="noopener">`
- XPath: `p:nth-child(3) > a[rel="noopener"][target="_blank"]`

*... and 23 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/paris-accueillera-les-jeux-olympiques-de-2024

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Paris accueillera les Jeux Olympiques de 2024 !</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Paris accueillera les Jeux Olympiques de 2024 !</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/paris-sur-le-podium-du-classement-ft-1000-pour-son-nombre-dentreprises-a-forte-croissance

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Paris sur le podium du classement FT 1000 pour son nombre d’entreprises à forte croissance</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Paris sur le podium du classement FT 1000 pour son nombre d’entreprises à forte croissance</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/passeport-talent-dematerialisation

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Dématérialisation des demandes de titres de séjour « Passeport Talent »</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 mai 2021</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Dématérialisation des demandes de titres de séjour « Passeport Talent »</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/politique-de-confidentialite

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Politique de confidentialité</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Politique de confidentialité</span>`
- XPath: `span:nth-child(3)`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/pour-la-6%e1%b5%89-annee-consecutive-la-france-est-en-2024-la-1ere-destination-des-investisseurs-etrangers-en-europe

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Pour la 6ᵉ année consécutive, la France est en 2024 la 1ère destination des investisseurs étrangers en Europe</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">15 mai 2025</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Pour la 6ᵉ année consécutive, la France est en 2024 la 1ère destination des investisseurs étrangers en Europe</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/precisions-sur-les-modalites-de-fixation-de-prix-des-bons-de-souscription-des-parts-de-createur-dentreprise-bspce

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Précisions sur les modalités de fixation de prix des bons de souscription des parts de créateur d’entreprise (BSPCE)</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">21 juin 2024</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Précisions sur les modalités de fixation de prix des bons de souscription des parts de créateur d’entreprise (BSPCE)</span>`
- XPath: `.breadcrumb > span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

### https://welcometofrance.com/prelevement-a-la-source

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/prelevement-a-la-source">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Prélèvement à la source</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/prelevement-a-la-source">EN</option></select>`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Prélèvement à la source</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-content > h3`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h3></h3>`
- XPath: `.blade-video-content > h3`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Report à 2019 du prélèvement à la source de l’impôt sur les revenus.</h3>`
- XPath: `.wys > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h3 style="text-align: center;">Report à 2019 du prélèvement à la source de l’impôt sur les revenus.</h3>`
- XPath: `.wys > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/fiche-synthese-resident-fiscal-francais"></a>`
- XPath: `.pinned > .link-over`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com/fiche/prelevement-a-la-source"></a>`
- XPath: `.related-card.box.fdc:nth-child(2) > .link-over`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

*... and 19 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/prelevement-a-la-source">EN</option></select>`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value &amp;&amp; (window.location = this.options[this.selectedIndex].value);"><option class="active" selected="">FR</option><option value="https://www.welcometofrance.com/en/prelevement-a-la-source">EN</option></select>`
- XPath: `select`

### https://welcometofrance.com/projet-daccord-de-retrait-du-royaume-uni-de-lunion-europeenne

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

**Failure 2:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-open bump">               <img src="https://www.welcometofrance.com/app/themes/welcome-to-france/src/img/search.svg" alt="">             </button>`
- XPath: `.search-open`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Projet d’accord de retrait du Royaume-Uni de l’Union-Européenne</span>`
- XPath: `span:nth-child(3)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="post-date">28 septembre 2018</span>`
- XPath: `.post-date`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Projet d’accord de retrait du Royaume-Uni de l’Union-Européenne</span>`
- XPath: `span:nth-child(3)`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://www.welcometofrance.com/app/uploads/2019/10/Actu.svg">`
- XPath: `.post-category > a > img`

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 2:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

**Failure 3:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 4:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.hdr-logos.rel.aic > .hdr-logo[role="banner"]`

**Failure 5:**
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="hdr-logo" role="banner">`
- XPath: `.footer-logos > .hdr-logo[role="banner"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header">`
- XPath: `header`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a class="link-over" href="https://www.welcometofrance.com" rel="home"></a>`
- XPath: `.hdr-logos.rel.aic > .link-over[rel="home"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a class="hdr-logo" href="https://www.welcometofrance.com" rel="home" role="banner">`
- XPath: `.hdr-logo[rel="home"][role="banner"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a class="icon-fb bump" href="" target="_blank"></a>`
- XPath: `.icon-fb`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="icon-ln bump" href="https://www.linkedin.com/company/business-france-invest" target="_blank"></a>`
- XPath: `.icon-ln`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="icon-tw bump" href="https://twitter.com/BF_TFI" target="_blank"></a>`
- XPath: `.icon-tw`

*... and 15 more failures for this rule*

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

**Failure 2:**
- Message: Select element must have an accessible name
- HTML: `<select class="lang_selector_select" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">`
- XPath: `select`

