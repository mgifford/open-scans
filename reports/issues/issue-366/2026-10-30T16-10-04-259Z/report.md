# Scan Report: First Accessibility Scan

- Issue: https://github.com/mgifford/open-scans/issues/366
- Submitted by: bryanwieczorek-wentzville
- Scanned at: 2026-10-30T16:09:19.499Z
- Engines used: AXE, QUALWEB
- Scan duration: 0.3 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 1 of 1 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 416 passed, 4 failed, 6 cantTell, 46 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 187 passed, 2 failed, 40 cantTell, 1 inapplicable
- Reflow risk outcomes (WCAG 1.4.10, indicator only — not a conformance verdict): 0 failed, 0 potential, 1 passed, 0 cantTell, 0 not executed
- Semantica11y outcomes (semantic HTML/ARIA suggestions, kept separate from WCAG violation counts): 2 errors, 24 warnings, 0 suggestions, 0 not executed
- Duplicate findings caught by later scanners: 1

## 🔄 Changes Since Last Scan

- 🆕 **28 new unique issue(s)** detected for the first time in this scan

### 🆕 New Issues

- **A11Y-2daa4182** `rule:landmark-contentinfo-is-top-level|light` (axe) — https://wentzvilleparksprojects.com/
- **A11Y-20a7a074** `rule:landmark-no-duplicate-contentinfo|light` (axe) — https://wentzvilleparksprojects.com/
- **A11Y-670ef836** `rule:landmark-unique|light` (axe) — https://wentzvilleparksprojects.com/
- **A11Y-877cb5cf** `rule:page-has-heading-one|light` (axe) — https://wentzvilleparksprojects.com/
- **A11Y-92690898** `rule:qw-act-r76|light` (qualweb) — https://wentzvilleparksprojects.com/
- **A11Y-0ac3d234** `rule:aria-landmarks|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-fe7064dc** `rule:aria-actions|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-a0b8b22b** `rule:aria-actions|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-e12800f2** `rule:aria-actions|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-b91bc951** `rule:aria-actions|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-4fb65bce** `rule:aria-actions|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-ec7122c0** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-4e300372** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-004198de** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-ec82d7d1** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-39e50581** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-b6a017bc** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-da256c88** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-22c5f700** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-10f348d7** `rule:aria-expanded|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-99539972** `rule:aria-structure|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-9b1417be** `rule:aria-structure|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-a429cd6d** `rule:aria-structure|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-b87933f5** `rule:aria-structure|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-05d1571a** `rule:aria-structure|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-5392f3fe** `rule:missing-role-action|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-8ed58bc7** `rule:native-label|light` (semantica11y) — https://wentzvilleparksprojects.com/
- **A11Y-47ba92d9** `rule:native-label|light` (semantica11y) — https://wentzvilleparksprojects.com/

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact. Scanner columns show raw failures; the Total column remains unique across the active scanners.

| Page | axe Errors | QualWeb Errors | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://wentzvilleparksprojects.com/) | 4 | 2 | **6** | Home \| Wentzville Parks Projects |

## 🧭 Reflow Risk (WCAG 1.4.10)

Page-level indicator: resizes to 320 CSS pixels wide and checks for horizontal overflow. This is a risk indicator, not a conformance verdict — see [Behavioral Accessibility Automation](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/BEHAVIORAL_ACCESSIBILITY_AUTOMATION.md) for what it can and cannot detect.

✅ No horizontal overflow detected at 320px width on any scanned page!

## 🏷️ Semantic HTML & ARIA (Semantica11y)

Checks for non-semantic HTML and ARIA usage with suggestions for semantic improvements. These are suggestions, not WCAG conformance failures — see [semantica11y](https://npm.im/semantica11y) for the rule set.

| Page | Errors | Warnings | Suggestions | Corroborated | Page Title |
|---|---|---|---|---|---|
| [View Page](https://wentzvilleparksprojects.com/) | 2 | 24 | 0 | - | Home \| Wentzville Parks Projects |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-contentinfo-is-top-level | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/landmark-contentinfo-is-top-level) |
| landmark-no-duplicate-contentinfo | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/landmark-no-duplicate-contentinfo) |
| landmark-unique | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/landmark-unique) |
| page-has-heading-one | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/page-has-heading-one) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Errors | ALFA Errors | Equal Access Errors | AccessLint Errors | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://wentzvilleparksprojects.com/ | https://wentzvilleparksprojects.com/ | OK | 200 | no | 15342 | 4 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-contentinfo-is-top-level, landmark-no-duplicate-contentinfo, landmark-unique, page-has-heading-one |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://wentzvilleparksprojects.com/

#### Rule: [landmark-contentinfo-is-top-level](https://dequeuniversity.com/rules/axe/4.12/landmark-contentinfo-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-30
- Message: Contentinfo landmark should not be contained in another landmark
- HTML: `<footer class="elementor-element elementor-element-5fbd199b e-flex e-con-boxed e-con e-parent" data-id="5fbd199b" data-element_type="container" data-e-type="container" data-settings="{"background_background":"classic"}">`
- XPath: `.elementor-element-5fbd199b`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-30
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer data-elementor-type="footer" data-elementor-id="376" class="elementor elementor-376 elementor-location-footer" data-elementor-post-type="elementor_library">`
- XPath: `.elementor-376`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer data-elementor-type="footer" data-elementor-id="376" class="elementor elementor-376 elementor-location-footer" data-elementor-post-type="elementor_library">`
- XPath: `.elementor-376`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-US">`
- XPath: `html`

