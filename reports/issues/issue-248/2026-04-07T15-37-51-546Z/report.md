# Scan Report: MD Veterans Accessbility Scan

- Issue: https://github.com/mgifford/open-scans/issues/248
- Submitted by: emilyan0810
- Scanned at: 2026-04-07T15:36:57.671Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 1.0 minutes
- Total URLs submitted: 10
- Accepted public URLs: 10
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 8150 passed, 2 failed, 384 cantTell, 419 inapplicable
- Equal Access outcomes: 18003 passed, 276 failed (155 unique, 121 duplicate), 209 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 121

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://veterans.maryland.gov/) | 1 | 18 | **19** | Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/) | 1 | 18 | **19** | Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/how-apply-benefits) | 0 | 18 | **18** | How to Apply for Benefits \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/benefits-service-connected-veterans) | 0 | 17 | **17** | Benefits for Service Connected Veterans \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/motor-vehicles) | 0 | 16 | **16** | Motor Vehicles \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/financial-support) | 0 | 16 | **16** | Financial Support \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/tax-exemptions/retirement-pay-and-pension-tax-deductions-and-exclusion) | 0 | 13 | **13** | Retirement Pay and Pension Tax Deductions and Exclusion \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/tax-exemptions) | 0 | 13 | **13** | Tax Exemptions \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/veterans) | 0 | 13 | **13** | Information for Veterans \| Department of Veterans and Military Families |
| [View Page](https://veterans.maryland.gov/benefits-services/tax-exemptions/retirement-pay-and-pension-tax-deductions-and-exclusion) | 0 | 13 | **13** | Retirement Pay and Pension Tax Deductions and Exclusion \| Department of Veterans and Military Families |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **2** of 10 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<section class="maryland-hero maryland-hero--landing-agency has-illustration has-image" aria-labelledby="hero-landing-agency">
```

**XPath** (use in browser DevTools):
```
.maryland-hero
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.maryland-hero')`
5. The element will be highlighted

**Affected Pages**:
- https://veterans.maryland.gov/
- https://veterans.maryland.gov/Pages/default.aspx

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://veterans.maryland.gov/ | https://veterans.maryland.gov/ | OK | 200 | no | 7740 | 1 | 0 | 18 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_region_label_unique, aria_role_redundant, element_id_unique, element_tabbable_visible, figure_label_exists, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://veterans.maryland.gov/Pages/default.aspx | https://veterans.maryland.gov/ | OK | 200 | yes | 6380 | 1 | 0 | 18 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_region_label_unique, aria_role_redundant, element_id_unique, element_tabbable_visible, figure_label_exists, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://veterans.maryland.gov/benefits-services/how-apply-benefits | https://veterans.maryland.gov/benefits-services/how-apply-benefits | OK | 200 | no | 6539 | 0 | 0 | 18 | 0 | 109 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://veterans.maryland.gov/benefits-services/tax-exemptions/retirement-pay-and-pension-tax-deductions-and-exclusion | https://veterans.maryland.gov/benefits-services/tax-exemptions/retirement-pay-and-pension-tax-deductions-and-exclusion | OK | 200 | no | 5827 | 0 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://veterans.maryland.gov/benefits-services/motor-vehicles | https://veterans.maryland.gov/benefits-services/motor-vehicles | OK | 200 | no | 5789 | 0 | 0 | 16 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://veterans.maryland.gov/benefits-services/benefits-service-connected-veterans | https://veterans.maryland.gov/benefits-services/benefits-service-connected-veterans | OK | 200 | no | 6110 | 0 | 0 | 17 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_role_valid, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://veterans.maryland.gov/benefits-services/tax-exemptions | https://veterans.maryland.gov/benefits-services/tax-exemptions | OK | 200 | no | 5813 | 0 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://veterans.maryland.gov/veterans | https://veterans.maryland.gov/veterans | OK | 200 | no | 5707 | 0 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://veterans.maryland.gov/benefits-services/financial-support | https://veterans.maryland.gov/benefits-services/financial-support | OK | 200 | no | 5601 | 0 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, blockquote_cite_exists, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://veterans.maryland.gov/Benefits/TaxExemptions/Pages/Retirement-Pay-and-Pension-Tax-Deductions-and-Exclusion.aspx | https://veterans.maryland.gov/benefits-services/tax-exemptions/retirement-pay-and-pension-tax-deductions-and-exclusion | OK | 200 | yes | 6210 | 0 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_role_redundant, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://veterans.maryland.gov/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="maryland-hero maryland-hero--landing-agency has-illustration has-image" aria-labelledby="hero-landing-agency">`
- XPath: `.maryland-hero`

### https://veterans.maryland.gov/Pages/default.aspx

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section class="maryland-hero maryland-hero--landing-agency has-illustration has-image" aria-labelledby="hero-landing-agency">`
- XPath: `.maryland-hero`

