# Scan Report: Energy.gov

- Issue: https://github.com/mgifford/open-scans/issues/61
- Submitted by: mgifford
- Scanned at: 2026-04-07T01:01:44.193Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 2.9 minutes
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
- axe outcomes: 18319 passed, 24 failed, 174 cantTell, 826 inapplicable
- Equal Access outcomes: 44629 passed, 915 failed (477 unique, 438 duplicate), 491 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 444

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.energy.gov/mesc/funding) | 2 | 49 | **51** | Funding \| Department of Energy |
| [View Page](https://www.energy.gov/internships-fellowships) | 0 | 48 | **48** | Internships &amp; Fellowships \| Department of Energy |
| [View Page](https://www.energy.gov/oe/funding-opportunities-and-requests-information) | 0 | 40 | **40** | Funding Opportunities and Requests for Information \| Department of Energy |
| [View Page](https://www.energy.gov/contact-us) | 1 | 37 | **38** | Contact Us \| Department of Energy |
| [View Page](https://www.energy.gov/) | 6 | 27 | **33** | Department of Energy |
| [View Page](https://www.energy.gov/cmei/femp/federal-energy-management-program-funding-opportunities) | 2 | 25 | **27** | Federal Energy Management Program Funding Opportunities \| Department of Energy |
| [View Page](https://www.energy.gov/topics/grid-deployment-and-transmission) | 3 | 23 | **26** | Grid Deployment and Transmission \| Department of Energy |
| [View Page](https://www.energy.gov/web-policies) | 0 | 25 | **25** | Web Policies \| Department of Energy |
| [View Page](https://www.energy.gov/cio/department-energy-information-quality-guidelines) | 0 | 23 | **23** | Department of Energy Information Quality Guidelines \| Department of Energy |
| [View Page](https://www.energy.gov/topics/earth-systems-modeling) | 1 | 21 | **22** | Earth Systems Modeling \| Department of Energy |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-prohibited-attr | **4** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **4** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| heading-order | **4** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| aria-allowed-role | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| presentation-role-conflict | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/presentation-role-conflict) |
| link-name | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 4 page(s) - 6 occurrence(s)

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
#\31 81137152
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\31 81137152')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/
- https://energy.gov/state-american-energy-promises-made-promises-kept
- https://energy.gov/topics/earth-systems-modeling
- https://energy.gov/topics/grid-deployment-and-transmission

---

#### Pattern 2: Affects 3 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**Issue**: Elements must only use permitted ARIA attributes

**HTML Pattern**:
```html
<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">
```

**XPath** (use in browser DevTools):
```
#\31 81137152
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\31 81137152')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/
- https://energy.gov/topics/earth-systems-modeling
- https://energy.gov/topics/grid-deployment-and-transmission

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://energy.gov/ | https://www.energy.gov/ | OK | 200 | yes | 11906 | 6 | 0 | 27 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/cio/accessibility-standard-statement | https://energy.gov/cio/accessibility-standard-statement | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gdo/funding-opportunities-and-requests-information | https://www.energy.gov/oe/funding-opportunities-and-requests-information | OK | 200 | yes | 11191 | 0 | 0 | 40 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/apprenticeships-workforce-development | https://energy.gov/apprenticeships-workforce-development | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/budget-performance | https://energy.gov/budget-performance | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/commercialization | https://www.energy.gov/commercialization | OK | 200 | yes | 7901 | 0 | 0 | 18 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/contact-us | https://www.energy.gov/contact-us | OK | 200 | yes | 8498 | 1 | 0 | 37 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: presentation-role-conflict |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, input_checkboxes_grouped, input_label_visible, label_ref_valid, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/design | https://energy.gov/design | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/digital-engagement-and-media | https://energy.gov/digital-engagement-and-media | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/EDF | https://energy.gov/EDF | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/funding-opportunities | https://www.energy.gov/funding-opportunities | OK | 200 | yes | 7239 | 0 | 0 | 15 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/genesis | https://energy.gov/genesis | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/internships-fellowships | https://www.energy.gov/internships-fellowships | OK | 200 | yes | 8221 | 0 | 0 | 48 | 0 | 62 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_related, text_block_heading, text_contrast_sufficient |
| https://energy.gov/mission | https://energy.gov/mission | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/newsroom | https://energy.gov/newsroom | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/notice-court-orders | https://energy.gov/notice-court-orders | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/open-government | https://energy.gov/open-government | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/our-leadership-offices | https://www.energy.gov/our-leadership-offices | OK | 200 | yes | 8990 | 0 | 0 | 19 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/power-marketing-administrations | https://energy.gov/power-marketing-administrations | FAIL | - | no | 263 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/save | https://energy.gov/save | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/state-american-energy-promises-made-promises-kept | https://www.energy.gov/state-american-energy-promises-made-promises-kept | OK | 200 | yes | 10270 | 1 | 0 | 19 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/topics | https://energy.gov/topics | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-department-energy-national-laboratories | https://energy.gov/us-department-energy-national-laboratories | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-energy-information-administration-eia | https://www.energy.gov/us-energy-information-administration-eia | OK | 200 | yes | 7066 | 0 | 0 | 15 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/web-policies | https://www.energy.gov/web-policies | OK | 200 | yes | 8214 | 0 | 0 | 25 | 0 | 49 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, input_label_visible, label_name_visible, list_markup_review, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/work-us-department-energy | https://energy.gov/work-us-department-energy | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | https://www.energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | OK | 200 | yes | 6992 | 1 | 0 | 20 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, heading_markup_misuse, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | https://www.energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | OK | 200 | yes | 7064 | 1 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/emergency-response-hub-0 | https://energy.gov/ceser/emergency-response-hub-0 | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/department-energy-information-quality-guidelines | https://www.energy.gov/cio/department-energy-information-quality-guidelines | OK | 200 | yes | 6952 | 0 | 0 | 23 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly |
| https://energy.gov/cio/privacy-program | https://energy.gov/cio/privacy-program | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/energysaver/energy-saver | https://energy.gov/energysaver/energy-saver | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/femp/federal-energy-management-program-funding-opportunities | https://www.energy.gov/cmei/femp/federal-energy-management-program-funding-opportunities | OK | 200 | yes | 8274 | 2 | 0 | 25 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, link-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/gc/freedom-information-act | https://energy.gov/gc/freedom-information-act | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ig/office-inspector-general | https://energy.gov/ig/office-inspector-general | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/lm/history | https://energy.gov/lm/history | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/mesc/funding | https://www.energy.gov/mesc/funding | OK | 200 | yes | 9204 | 2 | 0 | 49 | 0 | 174 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_related, text_block_heading, text_contrast_sufficient |
| https://energy.gov/nnsa/national-nuclear-security-administration | https://energy.gov/nnsa/national-nuclear-security-administration | FAIL | - | no | 265 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/department-energy-nobel-laureates | https://energy.gov/science/department-energy-nobel-laureates | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/office-science-funding-opportunities | https://energy.gov/science/office-science-funding-opportunities | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/2025-doe-403-orders | https://energy.gov/topics/2025-doe-403-orders | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/american-manufacturing | https://energy.gov/topics/american-manufacturing | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/artificial-intelligence | https://energy.gov/topics/artificial-intelligence | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/cybersecurity | https://energy.gov/topics/cybersecurity | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/earth-systems-modeling | https://www.energy.gov/topics/earth-systems-modeling | OK | 200 | yes | 8874 | 1 | 0 | 21 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/topics/energy-security | https://energy.gov/topics/energy-security | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/energy-workforce | https://energy.gov/topics/energy-workforce | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/environmental-and-legacy-management | https://www.energy.gov/topics/environmental-and-legacy-management | OK | 200 | yes | 7710 | 0 | 0 | 18 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://energy.gov/about-us/web-policies/privacy | https://energy.gov/about-us/web-policies/privacy | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/articles/vulnerability-disclosure-policy | https://energy.gov/cio/articles/vulnerability-disclosure-policy | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/eere/funding/eere-funding-opportunities | https://energy.gov/eere/funding/eere-funding-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/scep/wap/weatherization-assistance-program | https://energy.gov/scep/wap/weatherization-assistance-program | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/national-science-bowl | https://energy.gov/topics/national-science-bowl | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/grid-deployment-and-transmission | https://www.energy.gov/topics/grid-deployment-and-transmission | OK | 200 | yes | 11264 | 3 | 0 | 23 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, frame_src_valid, input_label_visible, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/tribal-energy-access | https://energy.gov/topics/tribal-energy-access | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/research-technology-and-economic-security | https://energy.gov/topics/research-technology-and-economic-security | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/extreme-weather-resiliency | https://energy.gov/topics/extreme-weather-resiliency | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/nuclear-security | https://www.energy.gov/topics/nuclear-security | OK | 200 | yes | 7680 | 0 | 0 | 19 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_unobscured, input_label_visible, list_markup_review, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://energy.gov/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="field__item splide__slide is-active is-visible" id="main-carousel-slide01" role="group" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%);">`
- XPath: `#main-carousel-slide01`

**Failure 2:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-active is-visible" id="thumbnail-carousel-slide01" role="button" aria-label="Go to slide 1" aria-current="true" tabindex="0" aria-controls="main-carousel-slide01">`
- XPath: `#thumbnail-carousel-slide01`

**Failure 3:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible is-next" id="thumbnail-carousel-slide02" role="button" aria-label="Go to slide 2" tabindex="0" aria-controls="main-carousel-slide02">`
- XPath: `#thumbnail-carousel-slide02`

**Failure 4:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide03" role="button" aria-label="Go to slide 3" tabindex="0" aria-controls="main-carousel-slide03">`
- XPath: `#thumbnail-carousel-slide03`

**Failure 5:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide04" role="button" aria-label="Go to slide 4" tabindex="0" aria-controls="main-carousel-slide04">`
- XPath: `#thumbnail-carousel-slide04`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\31 81137152`

### https://energy.gov/contact-us

#### Rule: [presentation-role-conflict](https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements marked as presentational should be consistently ignored
- HTML: `<iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-qjl439nlnynz" frameborder="0" scrolling="no" sandbox="allow-forms allow-po..." src="https://www.google.c..." aria-label="Contact Us iframe 1">`
- XPath: `iframe[title="reCAPTCHA"]`

### https://energy.gov/state-american-energy-promises-made-promises-kept

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/4746b641/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\39 83392642`

### https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3><em><strong>The Trump Administration’s Investments Will Help Save Americans in Georgia and Alabama Over $7 Billion in Electricity Costs</strong></em></h3>`
- XPath: `center > h3`

### https://energy.gov/femp/federal-energy-management-program-funding-opportunities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h5>`
- XPath: `.layout--50-50.blade-section--white.blade-section--boxed:nth-child(2) > .grid-container > .blade-color > .grid-row > .tablet-lg\:grid-col-6:nth-child(1) > .block-inline-blockbasic.block-layout-builder.block > .field--body.field--name-body.field--type-text-with-summary > h5`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="/cmei/femp/federal-energy-management-program-legacy" data-entity-type="node" data-entity-uuid="d5b7971e-461c-4dd6-a523-f44e158d469a" data-entity-substitution="canonical" data-once="links"> </a>`
- XPath: `.field--field_text > p:nth-child(1) > a[data-entity-type="node"][data-entity-substitution="canonical"][data-once="links"]:nth-child(1)`

### https://energy.gov/mesc/funding

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h4>Funding Opportunities</h4>`
- XPath: `h4`

**Failure 2:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h5><strong>LOOKING FOR MORE?</strong> Visit the <a href="https://infrastructure-exchange.energy.gov/Default.aspx" data-once="links">Infrastructure Exchange</a> to see all clean energy infrastructure funding opportunity announcements.</h5>`
- XPath: `h5`

### https://energy.gov/topics/earth-systems-modeling

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\32 38453804`

### https://energy.gov/topics/grid-deployment-and-transmission

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\39 14691045`

**Failure 2:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\38 01162379`

**Failure 3:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\31 75051610`

