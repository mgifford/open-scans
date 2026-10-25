# Scan Report: test

- Issue: https://github.com/mgifford/open-scans/issues/365
- Submitted by: samuelbrasileiro
- Scanned at: 2026-10-25T01:28:25.307Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 0.2 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 41 passed, 5 failed, 3 cantTell, 72 inapplicable
- Equal Access outcomes: 154 passed, 6 failed (6 unique, 0 duplicate), 3 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Reflow risk outcomes (WCAG 1.4.10, indicator only — not a conformance verdict): 1 failed, 0 potential, 0 passed, 0 cantTell, 0 not executed
- Semantica11y outcomes (semantic HTML/ARIA suggestions, kept separate from WCAG violation counts): 0 errors, 1 warnings, 3 suggestions, 0 not executed
- Duplicate findings caught by later scanners: 0

## 🔄 Changes Since Last Scan

- 🆕 **14 new unique issue(s)** detected for the first time in this scan

### 🆕 New Issues

- **A11Y-30002347** `rule:landmark-one-main|light` (axe) — https://www.amazon.com.br/
- **A11Y-c5d27d18** `rule:page-has-heading-one|light` (axe) — https://www.amazon.com.br/
- **A11Y-ac3c4d6f** `rule:region|light` (axe) — https://www.amazon.com.br/
- **A11Y-4900c631** `rule:region|light` (axe) — https://www.amazon.com.br/
- **A11Y-5fb28f5e** `rule:region|light` (axe) — https://www.amazon.com.br/
- **A11Y-ace2a40c** `rule:html_skipnav_exists|light` (equalAccess) — https://www.amazon.com.br/
- **A11Y-b3655820** `rule:element_attribute_deprecated|light` (equalAccess) — https://www.amazon.com.br/
- **A11Y-6671618c** `rule:element_attribute_deprecated|light` (equalAccess) — https://www.amazon.com.br/
- **A11Y-aa08c267** `rule:style_highcontrast_visible|light` (equalAccess) — https://www.amazon.com.br/
- **A11Y-d468f1ff** `rule:aria_content_in_landmark|light` (equalAccess) — https://www.amazon.com.br/
- **A11Y-5ee0c052** `rule:aria_content_in_landmark|light` (equalAccess) — https://www.amazon.com.br/
- **A11Y-815c7850** `rule:heading-hierarchy|light` (semantica11y) — https://www.amazon.com.br/
- **A11Y-43f3fae9** `rule:missing-key-landmark|light` (semantica11y) — https://www.amazon.com.br/
- **A11Y-e0305ae7** `rule:reflow-risk|light` (reflowRisk) — https://www.amazon.com.br/

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact. Scanner columns show raw failures; the Total column remains unique across the active scanners.

| Page | axe Errors | Equal Access Errors | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.amazon.com.br/) | 5 | 6 | **11** | https://www.amazon.com.br/ |

## 🧭 Reflow Risk (WCAG 1.4.10)

Page-level indicator: resizes to 320 CSS pixels wide and checks for horizontal overflow. This is a risk indicator, not a conformance verdict — see [Behavioral Accessibility Automation](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/BEHAVIORAL_ACCESSIBILITY_AUTOMATION.md) for what it can and cannot detect.

| Page | Result | Details | Page Title |
|---|---|---|---|
| [View Page](https://www.amazon.com.br/) | failed | Horizontal overflow detected: 30px of content overflowed the viewport at 320px width | https://www.amazon.com.br/ |

## 🏷️ Semantic HTML & ARIA (Semantica11y)

Checks for non-semantic HTML and ARIA usage with suggestions for semantic improvements. These are suggestions, not WCAG conformance failures — see [semantica11y](https://npm.im/semantica11y) for the rule set.

| Page | Errors | Warnings | Suggestions | Corroborated | Page Title |
|---|---|---|---|---|---|
| [View Page](https://www.amazon.com.br/) | 0 | 1 | 3 | - | https://www.amazon.com.br/ |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-one-main | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/landmark-one-main) |
| page-has-heading-one | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/page-has-heading-one) |
| region | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Errors | ALFA Errors | Equal Access Errors | AccessLint Errors | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.amazon.com.br | https://www.amazon.com.br/ | OK | 200 | no | 9916 | 5 | 0 | 6 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, html_skipnav_exists, style_highcontrast_visible |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.amazon.com.br

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.12/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-25
- Message: Document should have one main landmark
- HTML: `<html class="a-no-js" lang="pt-br">`
- XPath: `html`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-25
- Message: Page should contain a level-one heading
- HTML: `<html class="a-no-js" lang="pt-br">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.12/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="a-box a-alert a-alert-info a-spacing-base">             <div class="a-box-inner">                 <i class="a-icon a-icon-alert" alt="Ícone de alerta"></i>                 <h4>Clique no botão abaixo para continuar comprando</h4>                 </div>             </div>`
- XPath: `.a-alert`

**Failure 2:**
- First identified: 2026-10-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="a-text-center a-spacing-small a-size-mini">`
- XPath: `.a-spacing-small`

**Failure 3:**
- First identified: 2026-10-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="a-text-center a-size-mini a-color-base">           © 1996<script>new Date().getFullYear()>2010&&document.write("-"+new Date().getFullYear());</script>-2026, Amazon.com, Inc. ou suas afiliadas         </div>`
- XPath: `.a-color-base`

