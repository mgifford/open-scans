# Scan Report: Energy.gov

- Issue: https://github.com/mgifford/open-scans/issues/61
- Submitted by: mgifford
- Scanned at: 2026-04-14T01:06:43.355Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 3.0 minutes
- Total URLs submitted: 69
- Accepted public URLs: 69
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 19 of 69 URLs (28%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 19 of 69 URLs (28%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 17799 passed, 26 failed, 160 cantTell, 823 inapplicable
- Equal Access outcomes: 44574 passed, 658 failed (458 unique, 200 duplicate), 416 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 204

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.energy.gov/internships-fellowships) | 0 | 48 | **48** | Internships &amp; Fellowships \| Department of Energy |
| [View Page](https://www.energy.gov/oe/funding-opportunities-and-requests-information) | 0 | 40 | **40** | Funding Opportunities and Requests for Information \| Department of Energy |
| [View Page](https://www.energy.gov/contact-us) | 1 | 37 | **38** | Contact Us \| Department of Energy |
| [View Page](https://www.energy.gov/) | 6 | 27 | **33** | Department of Energy |
| [View Page](https://www.energy.gov/budget-performance) | 2 | 31 | **33** | Budget &amp; Performance \| Department of Energy |
| [View Page](https://www.energy.gov/EDF) | 0 | 30 | **30** | Office of Energy Dominance Financing \| Department of Energy |
| [View Page](https://www.energy.gov/nnsa/national-nuclear-security-administration) | 6 | 24 | **30** | National Nuclear Security Administration \| Department of Energy |
| [View Page](https://www.energy.gov/hgeo/hgeo-solicitations-and-business-opportunities) | 1 | 25 | **26** | HGEO Solicitations and Business Opportunities \| Department of Energy |
| [View Page](https://www.energy.gov/topics/tribal-energy-access) | 1 | 21 | **22** | Tribal Energy Access \| Department of Energy |
| [View Page](https://www.energy.gov/topics/energy-workforce) | 1 | 20 | **21** | Energy Workforce \| Department of Energy |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| heading-order | **5** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| aria-prohibited-attr | **4** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **4** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| aria-allowed-role | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| presentation-role-conflict | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/presentation-role-conflict) |
| link-name | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img alt="thumbnail-image" class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill"></button>
```

**XPath** (use in browser DevTools):
```
#\35 07039808
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\35 07039808')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/
- https://energy.gov/state-american-energy-promises-made-promises-kept
- https://energy.gov/topics/energy-workforce
- https://energy.gov/topics/tribal-energy-access

---

#### Pattern 2: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**Issue**: Elements must only use permitted ARIA attributes

**HTML Pattern**:
```html
<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/041232d8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">
```

**XPath** (use in browser DevTools):
```
#\35 07039808
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\35 07039808')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/
- https://energy.gov/topics/energy-workforce
- https://energy.gov/topics/tribal-energy-access

---

#### Pattern 3: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3>Media Inquiries:</h3>
```

**XPath** (use in browser DevTools):
```
.group-section__item--start > h3
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.group-section__item--start > h3')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng
- https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://energy.gov/ | https://www.energy.gov/ | OK | 200 | yes | 11755 | 6 | 0 | 27 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/cio/accessibility-standard-statement | https://energy.gov/cio/accessibility-standard-statement | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gdo/funding-opportunities-and-requests-information | https://www.energy.gov/oe/funding-opportunities-and-requests-information | OK | 200 | yes | 10371 | 0 | 0 | 40 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/apprenticeships-workforce-development | https://energy.gov/apprenticeships-workforce-development | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/budget-performance | https://www.energy.gov/budget-performance | OK | 200 | yes | 9214 | 2 | 0 | 31 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/commercialization | https://energy.gov/commercialization | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/contact-us | https://www.energy.gov/contact-us | OK | 200 | yes | 8900 | 1 | 0 | 37 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: presentation-role-conflict |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, input_checkboxes_grouped, input_label_visible, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/design | https://energy.gov/design | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/digital-engagement-and-media | https://energy.gov/digital-engagement-and-media | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/EDF | https://www.energy.gov/EDF | OK | 200 | yes | 8388 | 0 | 0 | 30 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/funding-opportunities | https://energy.gov/funding-opportunities | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/genesis | https://energy.gov/genesis | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/internships-fellowships | https://www.energy.gov/internships-fellowships | OK | 200 | yes | 8762 | 0 | 0 | 48 | 0 | 62 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_related, text_block_heading, text_contrast_sufficient |
| https://energy.gov/mission | https://energy.gov/mission | FAIL | - | no | 283 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/newsroom | https://energy.gov/newsroom | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/notice-court-orders | https://energy.gov/notice-court-orders | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/open-government | https://www.energy.gov/open-government | OK | 200 | yes | 7795 | 1 | 0 | 19 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/our-leadership-offices | https://energy.gov/our-leadership-offices | FAIL | - | no | 266 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/power-marketing-administrations | https://energy.gov/power-marketing-administrations | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/save | https://energy.gov/save | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/state-american-energy-promises-made-promises-kept | https://www.energy.gov/state-american-energy-promises-made-promises-kept | OK | 200 | yes | 11763 | 1 | 0 | 19 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/topics | https://energy.gov/topics | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-department-energy-national-laboratories | https://energy.gov/us-department-energy-national-laboratories | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-energy-information-administration-eia | https://www.energy.gov/us-energy-information-administration-eia | OK | 200 | yes | 7248 | 0 | 0 | 15 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/web-policies | https://energy.gov/web-policies | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | https://www.energy.gov/whistleblower-protection-and-nondisclosure-agreements | OK | 200 | yes | 7323 | 0 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/work-us-department-energy | https://energy.gov/work-us-department-energy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | https://www.energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | OK | 200 | yes | 9145 | 1 | 0 | 17 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | https://www.energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | OK | 200 | yes | 8709 | 1 | 0 | 17 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/emergency-response-hub-0 | https://energy.gov/ceser/emergency-response-hub-0 | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/department-energy-information-quality-guidelines | https://energy.gov/cio/department-energy-information-quality-guidelines | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/privacy-program | https://www.energy.gov/cio/privacy-program | OK | 200 | yes | 7845 | 0 | 0 | 18 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/energysaver/energy-saver | https://energy.gov/energysaver/energy-saver | FAIL | - | no | 263 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/femp/federal-energy-management-program-funding-opportunities | https://energy.gov/femp/federal-energy-management-program-funding-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gc/freedom-information-act | https://energy.gov/gc/freedom-information-act | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | https://www.energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | OK | 200 | yes | 7952 | 1 | 0 | 25 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_single |
| https://energy.gov/ig/office-inspector-general | https://energy.gov/ig/office-inspector-general | FAIL | - | no | 280 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/lm/history | https://energy.gov/lm/history | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/mesc/funding | https://energy.gov/mesc/funding | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/nnsa/national-nuclear-security-administration | https://www.energy.gov/nnsa/national-nuclear-security-administration | OK | 200 | yes | 8844 | 6 | 0 | 24 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: link-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/department-energy-nobel-laureates | https://energy.gov/science/department-energy-nobel-laureates | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/office-science-funding-opportunities | https://energy.gov/science/office-science-funding-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/2025-doe-403-orders | https://energy.gov/topics/2025-doe-403-orders | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/american-manufacturing | https://energy.gov/topics/american-manufacturing | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/artificial-intelligence | https://energy.gov/topics/artificial-intelligence | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/cybersecurity | https://energy.gov/topics/cybersecurity | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/earth-systems-modeling | https://energy.gov/topics/earth-systems-modeling | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/energy-security | https://www.energy.gov/topics/energy-security | OK | 200 | yes | 7951 | 0 | 0 | 17 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/topics/energy-workforce | https://www.energy.gov/topics/energy-workforce | OK | 200 | yes | 9580 | 1 | 0 | 20 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/topics/environmental-and-legacy-management | https://energy.gov/topics/environmental-and-legacy-management | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/about-us/web-policies/privacy | https://energy.gov/about-us/web-policies/privacy | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/articles/vulnerability-disclosure-policy | https://energy.gov/cio/articles/vulnerability-disclosure-policy | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/eere/funding/eere-funding-opportunities | https://energy.gov/eere/funding/eere-funding-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/scep/wap/weatherization-assistance-program | https://energy.gov/scep/wap/weatherization-assistance-program | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/national-science-bowl | https://energy.gov/topics/national-science-bowl | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/grid-deployment-and-transmission | https://energy.gov/topics/grid-deployment-and-transmission | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | https://www.energy.gov/topics/puerto-rico-grid-resilience-and-modernization | OK | 200 | yes | 8212 | 0 | 0 | 17 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/topics/tribal-energy-access | https://www.energy.gov/topics/tribal-energy-access | OK | 200 | yes | 9273 | 1 | 0 | 21 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/topics/research-technology-and-economic-security | https://energy.gov/topics/research-technology-and-economic-security | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/extreme-weather-resiliency | https://energy.gov/topics/extreme-weather-resiliency | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/nuclear-security | https://energy.gov/topics/nuclear-security | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://energy.gov/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-14
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="field__item splide__slide is-active is-visible" id="main-carousel-slide01" role="group" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%);">`
- XPath: `#main-carousel-slide01`

**Failure 2:**
- First identified: 2026-04-14
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-active is-visible" id="thumbnail-carousel-slide01" role="button" aria-label="Go to slide 1" aria-current="true" tabindex="0" aria-controls="main-carousel-slide01">`
- XPath: `#thumbnail-carousel-slide01`

**Failure 3:**
- First identified: 2026-04-14
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible is-next" id="thumbnail-carousel-slide02" role="button" aria-label="Go to slide 2" tabindex="0" aria-controls="main-carousel-slide02">`
- XPath: `#thumbnail-carousel-slide02`

**Failure 4:**
- First identified: 2026-04-14
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide03" role="button" aria-label="Go to slide 3" tabindex="0" aria-controls="main-carousel-slide03">`
- XPath: `#thumbnail-carousel-slide03`

**Failure 5:**
- First identified: 2026-04-14
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide04" role="button" aria-label="Go to slide 4" tabindex="0" aria-controls="main-carousel-slide04">`
- XPath: `#thumbnail-carousel-slide04`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-14
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/041232d8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\35 07039808`

### https://energy.gov/budget-performance

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-14
- Message: Heading levels should only increase by one
- HTML: `<h3><a href="/cfo/listings/budget-justification-supporting-documents" data-once="links">More Budget Requests</a></h3>`
- XPath: `.layout-breakout.layout-float.layout-right > .field--text_default.field--body.field--name-body > h3`

**Failure 2:**
- First identified: 2026-04-14
- Message: Heading levels should only increase by one
- HTML: `<h4><a aria-label="Read more about More Annual Performance Reports" href="/cfo/listings/annual-performance-reports" title="Read more about More Annual Performance Reports" data-once="links">More Annual Performance Reports</a></h4>`
- XPath: `h4`

### https://energy.gov/contact-us

#### Rule: [presentation-role-conflict](https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-14
- Message: Elements marked as presentational should be consistently ignored
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-4jw1288kpxya" frameborder="0" scrolling="no" sandbox="allow-forms allow-po..." src="https://www.google.c..." aria-label="Contact Us iframe 1">`
- XPath: `iframe[title="reCAPTCHA"]`

### https://energy.gov/open-government

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-14
- Message: Heading levels should only increase by one
- HTML: `<h4>CUSTOMER SERVICE</h4>`
- XPath: `.tablet-lg\:grid-col-6:nth-child(1) > .block-layout-builder.block-inline-blockbasic.block > .field--text_default.field--body.field--name-body > h4:nth-child(1)`

### https://energy.gov/state-american-energy-promises-made-promises-kept

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-14
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/ee507a59/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\36 75383865`

### https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-14
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-14
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-14
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>HGEO Funding</strong></h3>`
- XPath: `h3`

### https://energy.gov/nnsa/national-nuclear-security-administration

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-14
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/NNSANews/" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(1) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 2:**
- First identified: 2026-04-14
- Message: Links must have discernible text
- HTML: `<a href="https://www.instagram.com/nnsanews/" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(2) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 3:**
- First identified: 2026-04-14
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/national-nuclear-security-administration/posts/?feedView=articles" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(3) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 4:**
- First identified: 2026-04-14
- Message: Links must have discernible text
- HTML: `<a href="https://www.youtube.com/nnsanews" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(4) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 5:**
- First identified: 2026-04-14
- Message: Links must have discernible text
- HTML: `<a href="https://www.x.com/NNSANews" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `a[href$="NNSANews"]`

*... and 1 more failures for this rule*

### https://energy.gov/topics/energy-workforce

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-14
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/041232d8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\35 8082541`

### https://energy.gov/topics/tribal-energy-access

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-14
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/041232d8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\32 79335217`

