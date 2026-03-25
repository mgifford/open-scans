# Scan Report: LGE

- Issue: https://github.com/mgifford/open-scans/issues/214
- Submitted by: lgewst
- Scanned at: 2026-03-25T14:35:04.105Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 0.4 minutes
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
- axe outcomes: 4066 passed, 47 failed, 43 cantTell, 44 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 2 passed, 90 failed (77 unique, 13 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 13

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.lge.co.kr/home) | 47 | 77 | **124** | LGE.COM \| LG전자 |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-required-parent | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-required-parent) |
| color-contrast | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| image-redundant-alt | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-redundant-alt) |
| region | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.lge.co.kr/home | https://www.lge.co.kr/home | OK | 200 | no | 22905 | 47 | 0 | 0 | 77 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-required-parent, color-contrast, image-redundant-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-parent, aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, keyboard-accessible/focus-visible, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/image-redundant-alt |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.lge.co.kr/home

#### Rule: [aria-required-parent](https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button aria-controls="tab-content1-0" aria-selected="true" class="HomePcListTabstypeBestranking_list_tab_bestranking_title__cf3it" data-category-id="ALL" id="tab-menu1-0" role="tab" type="button">`
- XPath: `button[data-category-id="ALL"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button aria-controls="tab-content1-1" aria-selected="false" class="HomePcListTabstypeBestranking_list_tab_bestranking_title__cf3it" data-category-id="CT50000046" id="tab-menu1-1" role="tab" type="button">`
- XPath: `button[data-category-id="CT50000046"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button aria-controls="tab-content1-2" aria-selected="false" class="HomePcListTabstypeBestranking_list_tab_bestranking_title__cf3it" data-category-id="CT50000111" id="tab-menu1-2" role="tab" type="button">`
- XPath: `button[data-category-id="CT50000111"]`

**Failure 4:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button aria-controls="tab-content1-3" aria-selected="false" class="HomePcListTabstypeBestranking_list_tab_bestranking_title__cf3it" data-category-id="CT50000101" id="tab-menu1-3" role="tab" type="button">`
- XPath: `button[data-category-id="CT50000101"]`

**Failure 5:**
- First identified: 2026-03-25
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button aria-controls="tab-content1-4" aria-selected="false" class="HomePcListTabstypeBestranking_list_tab_bestranking_title__cf3it" data-category-id="CT50000110" id="tab-menu1-4" role="tab" type="button">`
- XPath: `button[data-category-id="CT50000110"]`

*... and 33 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="title-home_title-home_sub_tit__ivkxK" style="color: rgb(114, 119, 128);">LGE.COM 인기 제품 추천</span>`
- XPath: `.HomePcListTabstypeBestranking_list_tab_bestranking_headline__UZQk_ > .title-home_title-home__Jw_7z > .title-home_title-home_sub_tit__ivkxK`

**Failure 2:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="HomePcListSquaretype_sub_title__vVZVQ">가전인사이트</span>`
- XPath: `.HomePcListSquaretype_list_squaretype_item__WxX_I.swiper-slide:nth-child(1) > a > .HomePcListSquaretype_list_squaretype_text__UXN47 > .HomePcListSquaretype_sub_title__vVZVQ`

**Failure 3:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="HomePcListSquaretype_sub_title__vVZVQ">사용가이드</span>`
- XPath: `.HomePcListSquaretype_list_squaretype_item__WxX_I.swiper-slide:nth-child(2) > a > .HomePcListSquaretype_list_squaretype_text__UXN47 > .HomePcListSquaretype_sub_title__vVZVQ`

**Failure 4:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="HomePcListSquaretype_sub_title__vVZVQ">Living Story</span>`
- XPath: `.HomePcListSquaretype_list_squaretype_item__WxX_I.swiper-slide:nth-child(3) > a > .HomePcListSquaretype_list_squaretype_text__UXN47 > .HomePcListSquaretype_sub_title__vVZVQ`

**Failure 5:**
- First identified: 2026-03-25
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="HomePcListSquaretype_sub_title__vVZVQ">리뷰</span>`
- XPath: `.HomePcListSquaretype_list_squaretype_item__WxX_I.swiper-slide:nth-child(4) > a > .HomePcListSquaretype_list_squaretype_text__UXN47 > .HomePcListSquaretype_sub_title__vVZVQ`

*... and 1 more failures for this rule*

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Alternative text of images should not be repeated as text
- HTML: `<img alt="소모품" loading="lazy" src="https://www.lge.co.kr/kr/upload/admin/display/displayObject/소모품_20250826_165621.png">`
- XPath: `img[alt="소모품"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="skip_nav"><a href="#container">본문 바로가기</a></div>`
- XPath: `.skip_nav`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="CommonPcButtonFloating_button-floating__81evl" data-area="플로팅 영역">`
- XPath: `.CommonPcButtonFloating_button-floating__81evl`

