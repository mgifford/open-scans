# Scan Report: France.fr

- Issue: https://github.com/mgifford/open-scans/issues/64
- Submitted by: mgifford
- Scanned at: 2026-03-27T01:24:13.930Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 26.6 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 15 of 100 URLs (15%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 15 of 100 URLs (15%) support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 111466 passed, 508 failed, 5578 cantTell, 4024 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 5929 passed, 2535 failed (2534 unique, 1 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 26

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.france.fr/fr/itineraire/pays-basque-en-van-entre-amis/) | 40 | 70 | **110** | Road trip en van entre amis au Pays basque |
| [View Page](https://www.france.fr/ar/article/cote-dazur-plus-beaux-villages-arriere-pays-nicois/) | 50 | 47 | **97** | مغامرات في أعالي قرى كوت دازور  - Explore France |
| [View Page](https://www.france.fr/de/karte/) | 27 | 66 | **93** | Karte - Explore France |
| [View Page](https://www.france.fr/fr/carte/) | 27 | 66 | **93** | Carte - Explore France |
| [View Page](https://www.france.fr/es/mapa/) | 26 | 65 | **91** | Mapa - Explore France |
| [View Page](https://www.france.fr/cs/mapa/) | 25 | 61 | **86** | Mapa - Explore France |
| [View Page](https://www.france.fr/it/cartina/) | 23 | 62 | **85** | Mappa - Explore France |
| [View Page](https://www.france.fr/pt/artigo/fazer-ver-pays-loire/) | 27 | 47 | **74** | Quais atividades fazer no Pays de la Loire? |
| [View Page](https://www.france.fr/cs/clanek/co-delat-v-pays-de-la-loire/) | 18 | 35 | **53** | Navštivte oblast Pays de la Loire, mezi údolím Loiry a pobřežím Atlantiku |
| [View Page](https://www.france.fr/da/artikel/Bordd%c3%a6kning-service-Lorraine-krystalglas/) | 15 | 37 | **52** | Dæk et smukt bord med det bedste service fra Lorraine - France.fr |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| image-alt | **31** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| color-contrast | **30** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| list | **16** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| link-in-text-block | **13** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-in-text-block) |
| heading-order | **12** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| empty-heading | **7** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| button-name | **5** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| html-has-lang | **3** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| frame-title | **3** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |
| scrollable-region-focusable | **2** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/scrollable-region-focusable) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 25 page(s) - 25 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">
```

**XPath** (use in browser DevTools):
```
img[sizes="150px"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('img[sizes="150px"]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/ar/article/palace-6-things-you-can-only-find-at-the-plaza-athenee
- https://france.fr/da/artikel/Find-ro-naturen-hvorfor-ikke-%C3%A5bne-dine-chakraer-Alperne-Frankrig
- https://france.fr/da/artikel/genfind-roen-8-oplevelser-i-den-franske-natur
- https://france.fr/da/artikel/Leonardo-da-Vinci-sk%C3%B8re-opfindelser-Clos-Luc%C3%A9-Loiredalen
- https://france.fr/de/artikel/6-gestalter-erfinden-die-provence-neu
- *...and 20 more page(s)*

---

#### Pattern 2: Affects 16 page(s) - 16 occurrence(s)

**Scanner**: axe
**Rule**: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**Issue**: <ul> and <ol> must only directly contain <li>, <script> or <template> elements

**HTML Pattern**:
```html
<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">
```

**XPath** (use in browser DevTools):
```
.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/
- https://france.fr/ar
- https://france.fr/cs
- https://france.fr/da
- https://france.fr/de
- *...and 11 more page(s)*

---

#### Pattern 3: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button data-v-6458d367="" data-v-aa0444f3="" class="AfButton AfButton--primary AfButton--small AfButton--blueNight AfButton--iconAlone label-s">
```

**XPath** (use in browser DevTools):
```
.AfButton--blueNight
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.AfButton--blueNight')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 4: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor
**Issue**: Headings should not be empty

**HTML Pattern**:
```html
<h1 class="sr-only" data-v-899edca7=""></h1>
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
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 5: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Aile_Francois_Ier_I_Chateau_royal_de_Blois_F_Christophe_3_0b327563f8.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 6: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_727751393_ec2b5df38f.png" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 7: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_92577217_0b6272e973.jpeg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 8: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_343465694_d4dae32e39.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 9: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/xlarge_BRETAGNE_SENTIERS_DU_GOUFFRE_DE_PLOUGRESCANT_PRINTEMPS_ISTOCK_UNALHULZPHOTOGRAPHY_91f2c0759d_28cbcace31.webp" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(6) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(6) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 10: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/BORDEAUX_PORTE_CAILHAUT_PRINTEMPS_ISTOCK_MARLOGUTL_94086bda5b.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(7) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(7) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 11: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/COTE_D_AZUR_EZE_PRINTEMPS_UNSPLASH_ANASTASIIA_CHEPINSKA_90736866f3.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(14) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(14) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 12: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/i_Stock_1150446932_a724a564df.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(16) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(16) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 13: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_175256740_c05fdc77dc.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(17) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(17) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 14: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/ALSACE_PRINTEMPS_ISTOCK_OKSANAPHOTO_68374d8d03.jpg" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(19) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(19) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte
- https://france.fr/it/cartina

---

#### Pattern 15: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/ca1724_D_Frobert_Col_d_Aulac_S_165_jpg_3000px_BD_7177f3a64a.JPG" srcset="" sizes="150px" fetchpriority="auto">
```

**XPath** (use in browser DevTools):
```
.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://france.fr/cs/mapa
- https://france.fr/de/karte
- https://france.fr/es/mapa
- https://france.fr/fr/carte

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://france.fr/ | https://www.france.fr/fr/ | OK | 200 | yes | 16649 | 1 | 0 | 0 | 35 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ar/search | https://www.france.fr/ar/search | FAIL | 404 | yes | 7932 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://france.fr/en/search | https://www.france.fr/en/search/ | OK | 200 | yes | 18692 | 2 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, html-has-lang |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria |
| https://france.fr/ja/search | https://www.france.fr/ja/search/ | OK | 200 | yes | 14860 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ko/search | https://www.france.fr/ko/search/ | OK | 200 | yes | 13190 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ru/search | https://www.france.fr/ru/search/ | OK | 200 | yes | 13159 | 0 | 0 | 0 | 16 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/zh-Hans/search | https://www.france.fr/zh-Hans/search/ | OK | 200 | yes | 12274 | 0 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ar/article/palace-6-things-you-can-only-find-at-the-plaza-athenee | https://www.france.fr/ar/article/palace-6-things-you-can-only-find-at-the-plaza-athenee/ | OK | 200 | yes | 19090 | 7 | 0 | 0 | 26 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/da/artikel/de-parisiske-konditorer-der-genopfinder-kagen | https://www.france.fr/da/artikel/de-parisiske-konditorer-der-genopfinder-kagen/ | FAIL | 500 | yes | 26301 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/da/artikel/Find-ro-naturen-hvorfor-ikke-%C3%A5bne-dine-chakraer-Alperne-Frankrig | https://www.france.fr/da/artikel/Find-ro-naturen-hvorfor-ikke-%c3%a5bne-dine-chakraer-Alperne-Frankrig/ | OK | 200 | yes | 26059 | 8 | 0 | 0 | 27 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, landmarks/region, text-alternatives/img-alt |
| https://france.fr/da/artikel/genfind-roen-8-oplevelser-i-den-franske-natur | https://www.france.fr/da/artikel/genfind-roen-8-oplevelser-i-den-franske-natur/ | OK | 200 | yes | 15928 | 13 | 0 | 0 | 35 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/da/artikel/Leonardo-da-Vinci-sk%C3%B8re-opfindelser-Clos-Luc%C3%A9-Loiredalen | https://www.france.fr/da/artikel/Leonardo-da-Vinci-sk%c3%b8re-opfindelser-Clos-Luc%c3%a9-Loiredalen/ | OK | 200 | yes | 16966 | 9 | 0 | 0 | 31 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/de/artikel/6-gestalter-erfinden-die-provence-neu | https://www.france.fr/de/artikel/6-gestalter-erfinden-die-provence-neu/ | OK | 200 | yes | 14894 | 8 | 0 | 0 | 28 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/de/artikel/das-beruhmteste-herz-der-welt-befindet-sich-in-neukaledonien | https://www.france.fr/de/artikel/das-beruhmteste-herz-der-welt-befindet-sich-in-neukaledonien/ | OK | 200 | yes | 24767 | 8 | 0 | 0 | 26 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, landmarks/region, text-alternatives/img-alt |
| https://france.fr/de/artikel/die-genialen-erfindungen-leonardo-da-vincis-im-clos-luce | https://www.france.fr/de/artikel/die-genialen-erfindungen-leonardo-da-vincis-im-clos-luce/ | OK | 200 | yes | 15860 | 14 | 0 | 0 | 34 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/de/artikel/die-olympischen-spiele-2024-werden-paris-stattfinden | https://www.france.fr/de/artikel/die-olympischen-spiele-2024-werden-paris-stattfinden/ | OK | 200 | yes | 11107 | 7 | 0 | 0 | 27 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/en/article/5-minutes-to-find-out-everything-you-ever-wanted-to-know-about-burgundy | https://www.france.fr/en/article/5-minutes-to-find-out-everything-you-ever-wanted-to-know-about-burgundy/ | OK | 200 | yes | 14609 | 14 | 0 | 0 | 33 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, text-alternatives/img-alt |
| https://france.fr/en/article/palace-6-things-you-can-only-find-at-the-plaza-athenee | https://www.france.fr/en/article/palace-6-things-you-can-only-find-at-the-plaza-athenee/ | OK | 200 | yes | 11386 | 7 | 0 | 0 | 26 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, text-alternatives/img-alt |
| https://france.fr/en/article/shopping-nice-four-leads-finding-everything-your-heart-desires | https://www.france.fr/en/article/shopping-nice-four-leads-finding-everything-your-heart-desires/ | OK | 200 | yes | 11277 | 7 | 0 | 0 | 28 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, navigable/heading-order, text-alternatives/img-alt |
| https://france.fr/ar/article/balade-de-chateau-en-chateau-au-pays-basque | https://www.france.fr/ar/article/balade-de-chateau-en-chateau-au-pays-basque/ | OK | 200 | yes | 12882 | 14 | 0 | 0 | 33 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/ar/article/cote-dazur-plus-beaux-villages-arriere-pays-nicois | https://www.france.fr/ar/article/cote-dazur-plus-beaux-villages-arriere-pays-nicois/ | OK | 200 | yes | 34047 | 50 | 0 | 0 | 47 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, frame-title, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, landmarks/region, text-alternatives/img-alt |
| https://france.fr/ar/article/maisons-reinventent-gout-pays-basque | https://www.france.fr/ar/article/maisons-reinventent-gout-pays-basque/ | OK | 200 | yes | 13649 | 4 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/ar/article/service-d%C3%A9taxe-GL | https://www.france.fr/ar/article/service-d%c3%a9taxe-GL/ | OK | 200 | yes | 14436 | 7 | 0 | 0 | 27 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/ar/campaign/services-galeries-lafayette | https://www.france.fr/ar/campaign/services-galeries-lafayette/ | OK | 200 | yes | 14061 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ar/destination/biarritz-pays-basque | https://www.france.fr/ar/destination/biarritz-pays-basque/ | OK | 200 | yes | 12501 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ar/destination/pays-de-la-loire | https://france.fr/ar/destination/pays-de-la-loire | FAIL | - | no | 30000 | 0 | 0 | 0 | 0 | 0 | This operation was aborted |
| https://france.fr/cs/clanek/co-delat-v-pays-de-la-loire | https://www.france.fr/cs/clanek/co-delat-v-pays-de-la-loire/ | OK | 200 | yes | 11505 | 18 | 0 | 0 | 35 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/cs/destinace/pays-de-la-loire | https://www.france.fr/cs/destinace/pays-de-la-loire/ | OK | 200 | yes | 14717 | 0 | 0 | 0 | 16 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/da/artikel/4-udflugter-i-naturen-i-regionen-pays-de-la-loire | https://www.france.fr/da/artikel/4-udflugter-i-naturen-i-regionen-pays-de-la-loire/ | OK | 200 | yes | 21635 | 7 | 0 | 0 | 27 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/da/artikel/Bordd%C3%A6kning-service-Lorraine-krystalglas | https://www.france.fr/da/artikel/Bordd%c3%a6kning-service-Lorraine-krystalglas/ | OK | 200 | yes | 15719 | 15 | 0 | 0 | 37 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/da/destination/biarritz-pays-basque | https://www.france.fr/da/destination/biarritz-pays-basque/ | OK | 200 | yes | 25250 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/da/destination/pays-de-la-loire | https://www.france.fr/da/destination/pays-de-la-loire/ | OK | 200 | yes | 39294 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/en/article/biarritz-pays-basque | https://www.france.fr/en/article/biarritz-pays-basque/ | OK | 200 | yes | 17344 | 2 | 0 | 0 | 21 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, text-alternatives/img-alt |
| https://france.fr/en/article/charming-villages-pays-basque | https://www.france.fr/en/article/charming-villages-pays-basque/ | OK | 200 | yes | 25184 | 5 | 0 | 0 | 24 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, text-alternatives/img-alt |
| https://france.fr/fr/destination/biarritz-pays-basque | https://www.france.fr/fr/destination/biarritz-pays-basque/ | OK | 200 | yes | 19571 | 2 | 0 | 0 | 41 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/fr/destination/pays-de-la-loire | https://www.france.fr/fr/destination/pays-de-la-loire/ | OK | 200 | yes | 17391 | 3 | 0 | 0 | 35 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading |
| https://france.fr/fr/itineraire/parcours-gourmand-pays-basque | https://www.france.fr/fr/itineraire/parcours-gourmand-pays-basque/ | OK | 200 | yes | 46936 | 2 | 0 | 0 | 44 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, html-has-lang |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/td-has-header, aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order, navigable/link-name, text-alternatives/img-alt |
| https://france.fr/fr/itineraire/pays-basque-en-van-entre-amis | https://www.france.fr/fr/itineraire/pays-basque-en-van-entre-amis/ | OK | 200 | yes | 16546 | 40 | 0 | 0 | 70 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/td-has-header, aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order, text-alternatives/img-alt |
| https://france.fr/it/articolo/5-esempi-di-patrimonio-eclettico-nei-pays-de-la-loire | https://www.france.fr/it/articolo/5-esempi-di-patrimonio-eclettico-nei-pays-de-la-loire/ | OK | 200 | yes | 15112 | 7 | 0 | 0 | 27 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/it/articolo/pays-oc-i-vigneti | https://www.france.fr/it/articolo/pays-oc-i-vigneti/ | OK | 200 | yes | 11612 | 4 | 0 | 0 | 24 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order, text-alternatives/img-alt |
| https://france.fr/it/articolo/sui-passi-di-moliere-pezenas-nel-pays-oc | https://www.france.fr/it/articolo/sui-passi-di-moliere-pezenas-nel-pays-oc/ | OK | 200 | yes | 13622 | 4 | 0 | 0 | 24 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/ja/destination/biarritz-pays-basque | https://www.france.fr/ja/destination/biarritz-pays-basque/ | OK | 200 | yes | 17151 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ja/destination/pays-de-la-loire | https://www.france.fr/ja/destination/pays-de-la-loire/ | OK | 200 | yes | 11199 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ko/destination/pay-de-la-loire | https://www.france.fr/ko/destination/pay-de-la-loire/ | OK | 200 | yes | 15401 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/nb/artikkel/biarritz-pays-basque-hva-du-kan-se-gjore | https://www.france.fr/nb/artikkel/biarritz-pays-basque-hva-du-kan-se-gjore/ | FAIL | 500 | yes | 1576 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/pt/artigo/dois-reporteres-brasileiros-farao-a-cobertura-dos-gay-games-em-paris-fique | https://www.france.fr/pt/artigo/dois-reporteres-brasileiros-farao-a-cobertura-dos-gay-games-em-paris-fique/ | OK | 200 | yes | 10646 | 5 | 0 | 0 | 25 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading, text-alternatives/img-alt |
| https://france.fr/pt/artigo/fazer-ver-pays-loire | https://www.france.fr/pt/artigo/fazer-ver-pays-loire/ | OK | 200 | yes | 15513 | 27 | 0 | 0 | 47 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-in-text-block |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, distinguishable/color-contrast, distinguishable/link-in-text-block, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, text-alternatives/img-alt |
| https://france.fr/sv/destination/biarritz-pays-basque | https://www.france.fr/sv/destination/biarritz-pays-basque/ | OK | 200 | yes | 17781 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ar | https://www.france.fr/ar/ | OK | 200 | yes | 17837 | 3 | 0 | 0 | 26 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list, presentation-role-conflict |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/cs | https://www.france.fr/cs/ | OK | 200 | yes | 18608 | 1 | 0 | 0 | 29 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/da | https://www.france.fr/da/ | OK | 200 | yes | 20942 | 1 | 0 | 0 | 41 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/de | https://www.france.fr/de/ | OK | 200 | yes | 12121 | 1 | 0 | 0 | 29 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/en | https://www.france.fr/en/ | OK | 200 | yes | 11626 | 1 | 0 | 0 | 30 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria |
| https://france.fr/es | https://www.france.fr/es/ | OK | 200 | yes | 11720 | 1 | 0 | 0 | 29 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/fr | https://www.france.fr/fr/ | OK | 200 | yes | 11860 | 1 | 0 | 0 | 35 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/it | https://www.france.fr/it/ | OK | 200 | yes | 11567 | 1 | 0 | 0 | 31 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ja | https://www.france.fr/ja/ | OK | 200 | yes | 11891 | 1 | 0 | 0 | 33 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ko | https://www.france.fr/ko/ | OK | 200 | yes | 11872 | 1 | 0 | 0 | 29 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/nb | https://www.france.fr/nb/ | FAIL | 404 | yes | 1029 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/nl | https://www.france.fr/nl/ | OK | 200 | yes | 11759 | 1 | 0 | 0 | 31 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/pt | https://www.france.fr/pt/ | OK | 200 | yes | 23217 | 1 | 0 | 0 | 31 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/ru | https://www.france.fr/ru/ | OK | 200 | yes | 36211 | 1 | 0 | 0 | 25 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/sv | https://www.france.fr/sv/ | OK | 200 | yes | 12286 | 1 | 0 | 0 | 45 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/zh-Hans | https://www.france.fr/zh-Hans/ | OK | 200 | yes | 11336 | 1 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-hidden-focus, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/cs/akce | https://www.france.fr/cs/akce/ | FAIL | 404 | yes | 1666 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/cs/aktivity | https://www.france.fr/cs/aktivity/ | OK | 200 | yes | 16775 | 0 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/cs/archivy | https://www.france.fr/cs/archivy/ | OK | 200 | yes | 19469 | 1 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/cs/destinace | https://www.france.fr/cs/destinace/ | OK | 200 | yes | 19890 | 0 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/cs/mapa | https://www.france.fr/cs/mapa/ | OK | 200 | yes | 27758 | 25 | 0 | 0 | 61 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-heading, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/button-name, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://france.fr/cs/nove-clanky | https://www.france.fr/cs/nove-clanky/ | FAIL | 404 | yes | 1555 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/cs/okruh | https://www.france.fr/cs/okruh/ | OK | 200 | yes | 19525 | 0 | 0 | 0 | 16 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/da/aktiviteter | https://www.france.fr/da/aktiviteter/ | OK | 200 | yes | 21548 | 0 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/de/aktivitaeten | https://www.france.fr/de/aktivitaeten/ | OK | 200 | yes | 12896 | 0 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/de/archiv | https://www.france.fr/de/archiv/ | OK | 200 | yes | 15995 | 1 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/de/karte | https://www.france.fr/de/karte/ | OK | 200 | yes | 41241 | 27 | 0 | 0 | 66 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-heading, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/button-name, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://france.fr/de/nachhaltiges-reisen | https://www.france.fr/de/nachhaltiges-reisen/ | OK | 200 | yes | 17504 | 2 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, scrollable-region-focusable |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, keyboard-accessible/scrollable-region, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/de/neue-artikel | https://www.france.fr/de/neue-artikel/ | FAIL | 404 | yes | 1249 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/en/activities | https://www.france.fr/en/activities/ | OK | 200 | yes | 11078 | 0 | 0 | 0 | 21 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria |
| https://france.fr/en/archives | https://www.france.fr/en/archives/ | OK | 200 | yes | 11017 | 1 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, navigable/heading-order |
| https://france.fr/en/durable-travel | https://www.france.fr/en/durable-travel/ | OK | 200 | yes | 11159 | 2 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, scrollable-region-focusable |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, keyboard-accessible/scrollable-region, labels-and-names/duplicate-id-aria |
| https://france.fr/es/actividades | https://www.france.fr/es/actividades/ | OK | 200 | yes | 11185 | 0 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/es/archivos | https://www.france.fr/es/archivos/ | OK | 200 | yes | 14149 | 1 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/es/buscar | https://www.france.fr/es/buscar/ | OK | 200 | yes | 12332 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/es/destino | https://www.france.fr/es/destino/ | OK | 200 | yes | 11354 | 0 | 0 | 0 | 25 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/es/evento | https://www.france.fr/es/evento/ | OK | 200 | yes | 16322 | 0 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/es/info-practica | https://www.france.fr/es/info-practica/ | OK | 200 | yes | 16516 | 1 | 0 | 0 | 24 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/es/itinerario | https://www.france.fr/es/itinerario/ | OK | 200 | yes | 16116 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/es/mapa | https://www.france.fr/es/mapa/ | OK | 200 | yes | 17381 | 26 | 0 | 0 | 65 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-heading, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/button-name, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://france.fr/es/nuevos-articulos | https://www.france.fr/es/nuevos-articulos/ | FAIL | 404 | yes | 1073 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://france.fr/fr/activites | https://www.france.fr/fr/activites/ | OK | 200 | yes | 16994 | 0 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/fr/archives | https://www.france.fr/fr/archives/ | OK | 200 | yes | 11317 | 1 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/fr/articles-recents | https://www.france.fr/fr/articles-recents/ | OK | 200 | yes | 14788 | 1 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/fr/carte | https://www.france.fr/fr/carte/ | OK | 200 | yes | 16668 | 27 | 0 | 0 | 66 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-heading, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/button-name, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://france.fr/fr/evenement | https://www.france.fr/fr/evenement/ | OK | 200 | yes | 13061 | 0 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/it/archivi | https://www.france.fr/it/archivi/ | OK | 200 | yes | 13344 | 1 | 0 | 0 | 19 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |
| https://france.fr/it/attivita | https://www.france.fr/it/attivita/ | OK | 200 | yes | 16079 | 0 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/it/cartina | https://www.france.fr/it/cartina/ | OK | 200 | yes | 17504 | 23 | 0 | 0 | 62 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-heading, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/button-name, labels-and-names/duplicate-id-aria, landmarks/region, navigable/empty-heading, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://france.fr/it/destinazione | https://www.france.fr/it/destinazione/ | OK | 200 | yes | 11422 | 0 | 0 | 0 | 25 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/it/evento | https://www.france.fr/it/evento/ | OK | 200 | yes | 11193 | 0 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region |
| https://france.fr/it/info-pratiche | https://www.france.fr/it/info-pratiche/ | OK | 200 | yes | 11059 | 1 | 0 | 0 | 24 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, landmarks/region, navigable/heading-order |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://france.fr/

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/ar/search

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<center><h1>404 Not Found</h1></center>`
- XPath: `center:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-27
- Message: All page content should be contained by landmarks
- HTML: `<center>nginx/1.25.0</center>`
- XPath: `center:nth-child(3)`

### https://france.fr/en/search

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="AfErrorPage__type color-gold" data-v-f6df63e3="">500</p>`
- XPath: `.AfErrorPage__type`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <html> element must have a lang attribute
- HTML: `<html data-capo="">`
- XPath: `html`

### https://france.fr/ar/article/palace-6-things-you-can-only-find-at-the-plaza-athenee

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#6--1" aria-current="false">6) الأجواء الريفيّة للحديقة الداخليّة</a>`
- XPath: `a[href$="#6--1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#2--2" aria-current="false">2) منظر مدهش على برج إيفل من بعض الأجنحة</a>`
- XPath: `a[href$="#2--2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#1--3" aria-current="false">1) الديكور المدهش لمطعم "ألان دوكاس"</a>`
- XPath: `a[href$="#1--3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#3--4" aria-current="false">3) ديكور المقصف الحالم</a>`
- XPath: `a[href$="#3--4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#5--5" aria-current="false">5) ثريّات وسجّاد أحمر في صالونات الاستقبال</a>`
- XPath: `a[href$="#5--5"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/da/artikel/Find-ro-naturen-hvorfor-ikke-%C3%A5bne-dine-chakraer-Alperne-Frankrig

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#meditation-i-bevgelse-1" aria-current="false">Meditation i bevægelse</a>`
- XPath: `a[href$="#meditation-i-bevgelse-1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#at-gre-sig-letter-og-renere-2" aria-current="false">At gøre sig letter og renere</a>`
- XPath: `a[href="#at-gre-sig-letter-og-renere-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#gaturen-der-stter-fdderne-fri-3" aria-current="false">Gåturen der sætter fødderne fri</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="ViewProfileButton" href="https://www.instagra..." data-ios-link="user?username=chalet..." data-log-event="profileButtonClick" target="_blank">`
- XPath: `#instagram-embed-0`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Af Caroline de Surany</p>`
- XPath: `.mb-2`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-0" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="746" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-0`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-0`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/da/artikel/genfind-roen-8-oplevelser-i-den-franske-natur

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#tag-en-forfriskende-dukkert-under-vandfaldene-i-lozere-1" aria-current="false">Tag en forfriskende dukkert under vandfaldene i Lozère</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#mediter-ved-oetre-klippen-i-normandiet-2" aria-current="false">Mediter ved Oëtre-klippen i Normandiet</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#1000-arige-vulkaner-i-auvergne-3" aria-current="false">1000-årige vulkaner i Auvergne</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#klippeformationer-i-alverdens-smukke-nuancer-4" aria-current="false">Klippeformationer i alverdens smukke nuancer</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#hjt-at-flyve-pa-pic-du-midi-5" aria-current="false">Højt at flyve på Pic du Midi</a>`
- XPath: `a[href="#hjt-at-flyve-pa-pic-du-midi-5"]`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://sca.france.fr/da/auvergne" target="_blank" rel="noopener noreferrer">Auvergne</a>`
- XPath: `#blocks\.topito-2 > .AfBlockRichText[data-v-5c8e2e39=""] > p:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://sca.france.fr/da/vogeserne" target="_blank" rel="noopener noreferrer">Vogeserne</a>`
- XPath: `#blocks\.topito-5 > .AfBlockRichText[data-v-5c8e2e39=""] > p:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://sca.france.fr/da/jurabjergene" target="_blank" rel="noopener noreferrer">Jura plateauet</a>`
- XPath: `#blocks\.topito-6 > .AfBlockRichText[data-v-5c8e2e39=""] > p:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]`

### https://france.fr/da/artikel/Leonardo-da-Vinci-sk%C3%B8re-opfindelser-Clos-Luc%C3%A9-Loiredalen

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#luftskruen-1" aria-current="false">Luftskruen</a>`
- XPath: `a[href$="#luftskruen-1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#ornitopteren-2" aria-current="false">Ornitopteren</a>`
- XPath: `a[href$="#ornitopteren-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#kampvognen-3" aria-current="false">Kampvognen</a>`
- XPath: `a[href$="#kampvognen-3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#katapulten-4" aria-current="false">Katapulten</a>`
- XPath: `a[href$="#katapulten-4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#odometeret-5" aria-current="false">Odometeret</a>`
- XPath: `a[href$="#odometeret-5"]`

*... and 3 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/de/artikel/6-gestalter-erfinden-die-provence-neu

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#jacquemus-erfindet-die-santons-neu-1" aria-current="false">Jacquemus erfindet die Santons neu.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#rudy-ricciotti-lasst-sich-von-der-sonne-leiten-2" aria-current="false">Rudy Ricciotti lässt sich von der Sonne leiten.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#gerald-passedat-denkt-das-calisson-neu-3" aria-current="false">Gérald Passédat denkt das Calisson neu.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#vik-muniz-folgt-den-spuren-von-cezanne-und-van-gogh-4" aria-current="false">Vik Muniz folgt den Spuren von Cézanne und Van Gogh.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#loccitane-en-provence-verkorpert-die-arlesienne-5" aria-current="false">L’Occitane en Provence verkörpert die Arlésienne.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(5) > .AfSummary__link.bg-goldLight[aria-current="false"]`

*... and 2 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/de/artikel/das-beruhmteste-herz-der-welt-befindet-sich-in-neukaledonien

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#eine-einzigartige-landschaft-1" aria-current="false">Eine einzigartige Landschaft</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#fruchtbares-land-2" aria-current="false">Fruchtbares Land</a>`
- XPath: `a[href$="#fruchtbares-land-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="ViewProfileButton" href="https://www.instagra..." data-ios-link="user?username=nouvel..." data-log-event="profileButtonClick" target="_blank">`
- XPath: `#instagram-embed-0`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="AfCard__text" data-v-08de3870="">`
- XPath: `.AfCard__text`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Von Anne-Claire Delorme</p>`
- XPath: `.mb-2`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-0" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="881" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-0`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-0`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/de/artikel/die-genialen-erfindungen-leonardo-da-vincis-im-clos-luce

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#universalgenie-leonardo-da-vinci-was-hat-er-erfunden-1" aria-current="false">Universalgenie Leonardo da Vinci - was hat er erfunden?</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#da-vincis-traum-vom-fliegen-die-luftschraube-als-vorlaufer-des-hubschraubers-2" aria-current="false">Da Vincis Traum vom Fliegen: Die Luftschraube als Vorläufer des Hubschraubers</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#segelflugtraume-leonardos-studien-zu-fluggeraten-3" aria-current="false">Segelflugträume: Leonardos Studien zu Fluggeräten</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#der-gepanzerte-krieger-leonardos-beruhmter-aber-fehlerhafter-panzer-4" aria-current="false">Der gepanzerte Krieger: Leonardos berühmter, aber fehlerhafter Panzer</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#katapulte-und-kriegsmaschinen-leonardo-als-militarischer-ingenieur-5" aria-current="false">Katapulte und Kriegsmaschinen: Leonardo als militärischer Ingenieur</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(5) > .AfSummary__link.bg-goldLight[aria-current="false"]`

*... and 8 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/de/artikel/die-olympischen-spiele-2024-werden-paris-stattfinden

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#nr-1-olympische-ereignisse-am-fue-der-sehenswurdigkeiten-1" aria-current="false">Nr. 1 - Olympische Ereignisse am Fuße der Sehenswürdigkeiten</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#nr-2-innovative-nachhaltige-und-kreative-olympische-spiele-2" aria-current="false">Nr. 2 - Innovative, nachhaltige und kreative Olympische Spiele</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#nr-3-veranstaltungen-in-ganz-frankreich-3" aria-current="false">Nr. 3 - Veranstaltungen in ganz Frankreich</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#nr-4-olympische-spiele-zum-mitmachen-4" aria-current="false">Nr. 4 - Olympische Spiele zum Mitmachen</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#5-eine-einzigartige-gelegenheit-paris-in-einem-neuen-licht-zu-entdecken-5" aria-current="false">5 - Eine einzigartige Gelegenheit, Paris in einem neuen Licht zu entdecken</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(5) > .AfSummary__link.bg-goldLight[aria-current="false"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/en/article/5-minutes-to-find-out-everything-you-ever-wanted-to-know-about-burgundy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#burgundy-cest-chic-1" aria-current="false">Burgundy, c’est chic!</a>`
- XPath: `a[href$="#burgundy-cest-chic-1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#burgundy-is-out-in-front-in-the-number-of-appellations-2" aria-current="false">Burgundy is out in front in the number of appellations.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#the-burgundy-climats-are-included-on-the-unesco-world-heritage-list-3" aria-current="false">The Burgundy 'climats' are included on the UNESCO World Heritage list.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#the-vines-are-protected-by-enclosures-4" aria-current="false">The vines are protected by enclosures.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#the-worlds-most-expensive-wine-comes-from-burgundy-5" aria-current="false">The world's most expensive wine comes from Burgundy.</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(5) > .AfSummary__link.bg-goldLight[aria-current="false"]`

*... and 5 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.climats-bourgogne.com/fr/maison-des-climats-ouverture-4-juillet_630.html" target="_blank" rel="noopener noreferrer">La Maison des Climats</a>`
- XPath: `.AfBlockRichText[data-v-5c8e2e39=""] > ul > li:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://hospices-de-beaune.com" target="_blank" rel="noopener noreferrer">visit the Hospices de Beaune.</a>`
- XPath: `a[href$="hospices-de-beaune.com"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://twitter.com/lactuduvin" target="_blank" rel="noopener noreferrer">@lactuduvin</a>`
- XPath: `a[href$="lactuduvin"]`

### https://france.fr/en/article/palace-6-things-you-can-only-find-at-the-plaza-athenee

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#6-the-rural-scenery-of-the-garden-courtyard-1" aria-current="false">6) The rural scenery of the Garden Courtyard</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#2-the-unbeatable-view-of-the-eiffel-tower-that-comes-with-some-suites-2" aria-current="false">2) The unbeatable view of the Eiffel Tower that comes with some suites</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#1-the-surprising-decor-of-the-alain-ducasse-restaurant-3" aria-current="false">1) The surprising decor of the Alain Ducasse restaurant</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#3-the-bars-dreamy-decor-4" aria-current="false">3) The bar’s dreamy decor</a>`
- XPath: `a[href="#3-the-bars-dreamy-decor-4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#5-chandeliers-and-red-carpets-in-the-reception-rooms-5" aria-current="false">5) Chandeliers and red carpets in the reception rooms</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(5) > .AfSummary__link.bg-goldLight[aria-current="false"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/en/article/shopping-nice-four-leads-finding-everything-your-heart-desires

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#shopping-boheme-chic-1" aria-current="false">Shopping Bohème chic</a>`
- XPath: `a[href$="#shopping-boheme-chic-1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#shopping-arty-2" aria-current="false">Shopping Arty</a>`
- XPath: `a[href$="#shopping-arty-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#shopping-insolite-3" aria-current="false">Shopping Insolite</a>`
- XPath: `a[href$="#shopping-insolite-3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#shopping-avec-vue-4" aria-current="false">Shopping avec vue</a>`
- XPath: `a[href$="#shopping-avec-vue-4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">By The editor</p>`
- XPath: `.mb-2`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3>1. Fashion.</h3>`
- XPath: `h3:nth-child(2)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/ar/article/balade-de-chateau-en-chateau-au-pays-basque

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--1" aria-current="false">أكثرهم فخراً: قصر إلباريتز بمنطقة بيدار</a>`
- XPath: `a[href$="#--1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--2" aria-current="false">أكثرهم سحرا: قصر أباديا ، أُنْداي</a>`
- XPath: `a[href$="#--2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--3" aria-current="false">أكثرهم انتماء للقرون الوسطى: قصر موليون</a>`
- XPath: `a[href$="#--3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--4" aria-current="false">أكثرهم دفاعية: حصن سوكووا</a>`
- XPath: `a[href$="#--4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--5" aria-current="false">أكثرهم روعة: قصر غرامونت ، في بيداش</a>`
- XPath: `a[href$="#--5"]`

*... and 3 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.chateau-abbadia.fr/" target="_blank" rel="noopener noreferrer">مرصد قصر أباديا</a>`
- XPath: `#blocks\.topito-1 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://www.soule-paysbasque.com/A-voir-a-faire/Patrimoine-et-artisanat/Patrimoine-culturel/chateau-fort-mauleon/860" target="_blank" rel="noopener noreferrer">قصر موليون</a>`
- XPath: `#blocks\.topito-2 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://www.ciboure.fr/patrimoine/monuments.php" target="_blank" rel="noopener noreferrer">حصن سوكووا</a>`
- XPath: `#blocks\.topito-3 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://www.tourisme-pays-de-bidache.com/chateaux-et-autres-monuments-historiques/" target="_blank" rel="noopener noreferrer">قصر غرامونت في بيداش</a>`
- XPath: `#blocks\.topito-4 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://chateaudurtubie.fr/fr/" target="_blank" rel="noopener noreferrer">قصر أورتوبي</a>`
- XPath: `#blocks\.topito-5 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[href$="fr/"]`

### https://france.fr/ar/article/cote-dazur-plus-beaux-villages-arriere-pays-nicois

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--1" aria-current="false">أولاً، قرية لو فيو-كاني، فاصل زمني خارج الزمن.</a>`
- XPath: `a[href$="#--1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--2" aria-current="false">فايونس وتوريت، قريتان خلابتان متجاورتان</a>`
- XPath: `a[href$="#--2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--3" aria-current="false">قرية سايلان، واحدة من أجمل القرى في فرنسا</a>`
- XPath: `a[href$="#--3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--4" aria-current="false">قريتا بانيول وسان -بول، وقفة في غابة فارواز</a>`
- XPath: `a[href$="#--4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--5" aria-current="false">قرية مونس، حارسة بلاد فايانس</a>`
- XPath: `a[href$="#--5"]`

*... and 12 more failures for this rule*

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-0" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="665" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-0`

**Failure 2:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-1" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="817" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-1`

**Failure 3:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-2" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="1293" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-2`

**Failure 4:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-3" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="1121" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-3`

**Failure 5:**
- First identified: 2026-03-27
- Message: Frames must have an accessible name
- HTML: `<iframe class="instagram-media inst..." id="instagram-embed-4" src="https://www.instagra..." allowtransparency="true" allowfullscreen="true" frameborder="0" height="791" data-instgrm-payload...="instagram-media-payl..." scrolling="no" style="background: white; m...">`
- XPath: `#instagram-embed-4`

*... and 3 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-1`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-2`

**Failure 3:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-3`

**Failure 4:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-4`

**Failure 5:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img src="https://scontent-ord..." srcset="https://scontent-ord...">`
- XPath: `#instagram-embed-5`

*... and 3 more failures for this rule*

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://www.cagnes-tourisme.com/fr/decouvrir/haut-de-cagnes/presentation.html" target="_blank" rel="noopener noreferrer">أوت&nbsp;دو كاني</a>`
- XPath: `#blocks\.topito-0 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.paysdefayence.com/" target="_blank" rel="noopener noreferrer">فايانس</a>`
- XPath: `a[href$="paysdefayence.com/"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.paysdefayence.com/visites-des-9-villages-perches-pays-de-fayence-visites-guidees-de-nos-villages/" target="_blank" rel="noopener noreferrer">توريت</a>`
- XPath: `#blocks\.topito-2 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]:nth-child(2)`

**Failure 4:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/explore/tags/paysdefayence/?utm_source=ig_embed">#paysdefayence</a>`
- XPath: `#instagram-embed-1`

**Failure 5:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/seillans/" target="_blank" rel="noopener noreferrer">سايلان</a>`
- XPath: `#blocks\.topito-4 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

*... and 12 more failures for this rule*

### https://france.fr/ar/article/maisons-reinventent-gout-pays-basque

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--1" aria-current="false">ميزون بارثويل: عودة السلمون البري من أدور</a>`
- XPath: `a[href$="#--1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--2" aria-current="false">ميزون بارييس: تراث الذواقة</a>`
- XPath: `a[href$="#--2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">بقلم آن كلير ديليوم</p>`
- XPath: `.mb-2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/ar/article/service-d%C3%A9taxe-GL

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--1" aria-current="false">من هم المستفيدون من هذه الخدمة؟</a>`
- XPath: `a[href$="#--1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--2" aria-current="false">ما هي المشتريات المؤهلة لاسترداد الضريبة؟</a>`
- XPath: `a[href$="#--2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#--3" aria-current="false">متى تقومون بعملية استرداد الضريبة؟</a>`
- XPath: `a[href$="#--3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">بقلم  FRANCE.FR</p>`
- XPath: `.mb-2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" alt=" " loading="eager" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="(max-width: 640px) 8..." fetchpriority="high" data-v-5486172a="">`
- XPath: `img[alt=" "]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://www.douane.gouv.fr" target="_blank" rel="noopener noreferrer">www.douane.gouv.fr</a>`
- XPath: `a[href$="www.douane.gouv.fr"]`

### https://france.fr/cs/clanek/co-delat-v-pays-de-la-loire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#co-nesmite-v-oblasti-pays-de-la-loire-minout-1" aria-current="false">Co nesmíte v oblasti Pays de la Loire minout</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#na-pobrezi-atlantiku-2" aria-current="false">Na pobřeží Atlantiku</a>`
- XPath: `a[href$="#na-pobrezi-atlantiku-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#v-udoli-loiry-3" aria-current="false">V údolí Loiry</a>`
- XPath: `a[href$="#v-udoli-loiry-3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#ve-meste-4" aria-current="false">Ve městě</a>`
- XPath: `a[href$="#ve-meste-4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#neco-navic-5" aria-current="false">Něco navíc...</a>`
- XPath: `a[href$="#neco-navic-5"]`

*... and 7 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/pays-de-la-loire/liste/aventure-famille-loire-velo">La Loire à Vélo</a>`
- XPath: `ul:nth-child(13) > li:nth-child(3) > a`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.loireavelo.fr/" target="_blank" rel="noopener noreferrer">La Loire à Vélo</a>`
- XPath: `a[href$="loireavelo.fr/"][rel="noopener noreferrer"][target="_blank"]:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.lavelodyssee.com/" target="_blank" rel="noopener noreferrer">La Vélodyssée</a>`
- XPath: `a[href$="lavelodyssee.com/"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.lavelofrancette.com/" target="_blank" rel="noopener noreferrer">La Vélo Francette</a>`
- XPath: `li:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]:nth-child(4)`

**Failure 5:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.loireavelo.fr/" target="_blank" rel="noopener noreferrer">Loire à Vélo</a>`
- XPath: `a[href$="loireavelo.fr/"][rel="noopener noreferrer"][target="_blank"]:nth-child(5)`

### https://france.fr/da/artikel/4-udflugter-i-naturen-i-regionen-pays-de-la-loire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#1-pointe-du-payre-i-jard-sur-mer-1" aria-current="false">1. Pointe du Payré i Jard-sur-Mer</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#2-den-regionale-naturpark-i-briere-2" aria-current="false">2. Den regionale naturpark i Brière</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#3-marais-poitevin-3" aria-current="false">3. Marais Poitevin</a>`
- XPath: `a[href$="#3-marais-poitevin-3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#4-coteaux-du-pont-barre-i-anjou-4" aria-current="false">4. Coteaux du Pont-Barré i Anjou</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Af Redaktionen France.fr Skandinavien</p>`
- XPath: `.mb-2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://sca.france.fr/da/tema-havet" target="_blank" rel="noopener noreferrer">havet</a>`
- XPath: `a[rel="noopener noreferrer"]`

### https://france.fr/da/artikel/Bordd%C3%A6kning-service-Lorraine-krystalglas

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#baccarat-krystal-1" aria-current="false">Baccarat-krystal</a>`
- XPath: `a[href$="#baccarat-krystal-1"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#intense-farver-hos-daum-2" aria-current="false">Intense farver hos Daum</a>`
- XPath: `a[href="#intense-farver-hos-daum-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#luneville-saint-clement-forseglet-af-kongen-3" aria-current="false">Lunéville Saint-Clément: Forseglet af kongen</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#emaljer-i-relief-i-longwy-4" aria-current="false">Emaljer i relief i Longwy</a>`
- XPath: `a[href="#emaljer-i-relief-i-longwy-4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#darney-forfinede-kundskaber-5" aria-current="false">Darney: Forfinede kundskaber</a>`
- XPath: `a[href="#darney-forfinede-kundskaber-5"]`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.baccarat.fr/en/home/" target="_blank" rel="noopener noreferrer">Baccarat</a>`
- XPath: `#blocks\.topito-0 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="http://www.terresdest.fr/en/" target="_blank" rel="noopener noreferrer">Manufactures Royales (link på fransk)</a>`
- XPath: `#blocks\.topito-2 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[href$="en/"][rel="noopener noreferrer"][target="_blank"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.emauxdelongwy.com/" target="_blank" rel="noopener noreferrer">Manufacture des Emaux de Longwy (link på fransk)</a>`
- XPath: `a[href$="emauxdelongwy.com/"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.saint-louis.com/en/?___from_store=fr" target="_blank" rel="noopener noreferrer">Cristallerie Saint-Louis</a>`
- XPath: `#blocks\.topito-5 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.garnier-thiebaut.fr/" target="_blank" rel="noopener noreferrer">Garnier-Thiébaut (link på fransk)</a>`
- XPath: `#blocks\.topito-6 > .AfBlockRichText[data-v-5c8e2e39=""] > p > a[rel="noopener noreferrer"][target="_blank"]`

### https://france.fr/en/article/biarritz-pays-basque

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">By France.fr </p>`
- XPath: `.color-gold`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/en/article/charming-villages-pays-basque

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#espelette-world-capital-of-peppers-1" aria-current="false">Espelette, world capital of peppers</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#guethary-a-coastal-gem-2" aria-current="false">Guéthary, a coastal gem</a>`
- XPath: `a[href$="#guethary-a-coastal-gem-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#ainhoa-an-authentically-basque-village-3" aria-current="false">Ainhoa, an authentically Basque village</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(3) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">By France.fr </p>`
- XPath: `.mb-2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/fr/destination/biarritz-pays-basque

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.france.fr/fr/destination/biarritz-pays-basque/">Pays basque</a>`
- XPath: `.AfCard__text > p > a`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/article/biarritz-pays-basque-que-faire-que-voir/">Biarritz et le Pays basque</a>`
- XPath: `#content_detail > .AfBlockRichText > p:nth-child(1) > a`

### https://france.fr/fr/destination/pays-de-la-loire

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h3>&nbsp;</h3>`
- XPath: `h3:nth-child(38)`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/article/que-voir-que-faire-pays-de-la-loire/">Pays de la Loire</a>`
- XPath: `.AfBlockRichText > p:nth-child(1) > a:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/article/aventure-famille-loire-velo/">Val de Loire</a>`
- XPath: `p:nth-child(1) > a:nth-child(2)`

### https://france.fr/fr/itineraire/parcours-gourmand-pays-basque

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="AfErrorPage__type color-gold" data-v-f6df63e3="">500</p>`
- XPath: `.AfErrorPage__type`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <html> element must have a lang attribute
- HTML: `<html data-capo="">`
- XPath: `html`

### https://france.fr/fr/itineraire/pays-basque-en-van-entre-amis

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="heading-5 mb-4" data-v-03e0c27b="">Étapes de l'itinéraire</h3>`
- XPath: `.mb-4`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.guide-du-paysbasque.com/fr/tourisme/se-restaurer/restaurants/bayonne-52/taloka-7171.html" target="_blank" rel="noopener noreferrer">Taloka</a>`
- XPath: `#undefined-1 > p > a[rel="noopener noreferrer"][target="_blank"]:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.sebastienzozaya.fr/%2523/" target="_blank" rel="noopener noreferrer">bar à charcuterie de Sébastien Zozaya</a>`
- XPath: `#undefined-1 > p > a[rel="noopener noreferrer"][target="_blank"]:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.labastideclairence.com/" target="_blank" rel="noopener noreferrer">Bastide-Clairence</a>`
- XPath: `#undefined-1 > p > a[rel="noopener noreferrer"][target="_blank"]:nth-child(3)`

**Failure 4:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.aireparkreservation.com/aires-camping-cars/nouvelle-aquitaine/pyrenees-atlantique/anglet-les-corsaires" target="_blank" rel="noopener noreferrer">des Corsaires</a>`
- XPath: `#undefined-1 > p > a[rel="noopener noreferrer"][target="_blank"]:nth-child(4)`

**Failure 5:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://generationvoyage.fr/spot-van-biarritz/%2523plage-de-la-barre-prs-danglet" target="_blank" rel="noopener noreferrer">la Barre d’Anglet</a>`
- XPath: `#undefined-1 > p > a[rel="noopener noreferrer"][target="_blank"]:nth-child(5)`

*... and 33 more failures for this rule*

### https://france.fr/it/articolo/5-esempi-di-patrimonio-eclettico-nei-pays-de-la-loire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#1-labbazia-reale-di-fontevraud-1" aria-current="false">1/ L'abbazia Reale di Fontevraud</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#2-les-machines-de-lile-nantes-2" aria-current="false">2/ Les Machines de L’Ile, Nantes</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(2) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#3-il-puy-du-fou-vendee-3" aria-current="false">3/ Il Puy du Fou, Vendée</a>`
- XPath: `a[href$="#3-il-puy-du-fou-vendee-3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#4-angers-capitale-danjou-4" aria-current="false">4/ Angers, capitale d'Anjou</a>`
- XPath: `a[href="#4-angers-capitale-danjou-4"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#5-la-cite-plantagenet-au-mans-5" aria-current="false">5/ La Cité Plantagenêt au Mans</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(5) > .AfSummary__link.bg-goldLight[aria-current="false"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/it/articolo/pays-oc-i-vigneti

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#3-buone-ragioni-per-venire-1" aria-current="false">3 Buone ragioni per venire</a>`
- XPath: `.AfSummary__link`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Per France.fr   </p>`
- XPath: `.mb-2`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3>La vigna è onnipresente in Occitania, dove rappresenta un terzo delle superfici coltivate. Dal Rodano ai Pirenei, il vitigno del Pays d’Oc è cresciuto con l’obiettivo di un’alleanza perfetta tra i vitigni e il territorio.</h3>`
- XPath: `#undefined-0 > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/it/articolo/sui-passi-di-moliere-pezenas-nel-pays-oc

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#a-pezenas-citta-darte-e-storia-cara-a-moliere-nel-cuore-del-pays-doc-gustate-il-famoso-petit-pate-accompagnato-dai-migliori-rose-della-regione-1" aria-current="false">`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#per-saperne-di-piu-2" aria-current="false">Per saperne di più</a>`
- XPath: `a[href$="#per-saperne-di-piu-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Per France.fr   </p>`
- XPath: `.mb-2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

### https://france.fr/pt/artigo/dois-reporteres-brasileiros-farao-a-cobertura-dos-gay-games-em-paris-fique

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Por France.fr </p>`
- XPath: `.color-gold`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h2 class="heading-3" data-v-5c8e2e39=""> </h2>`
- XPath: `.heading-3[data-v-5c8e2e39=""]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" alt=" " loading="eager" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="(max-width: 640px) 8..." fetchpriority="high" data-v-5486172a="">`
- XPath: `img[alt=" "]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://presse@paris2018.com" target="_blank" rel="noopener noreferrer">presse@paris2018.com</a>`
- XPath: `a[href$="presse@paris2018.com"]`

### https://france.fr/pt/artigo/fazer-ver-pays-loire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#quais-sao-as-atividades-imperdiveis-para-fazer-no-pays-de-la-loire-1" aria-current="false">Quais são as atividades imperdíveis para fazer no Pays de la Loire?</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(1) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#a-beira-do-loire-2" aria-current="false">À beira do Loire</a>`
- XPath: `a[href$="#a-beira-do-loire-2"]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#na-costa-atlantica-3" aria-current="false">Na Costa Atlântica</a>`
- XPath: `a[href$="#na-costa-atlantica-3"]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-v-e5ebd53e="" class="AfSummary__link pa-4 bg-goldLight color-gold" href="#entre-bosques-pantanos-e-cidades-medievais-4" aria-current="false">Entre bosques, pântanos e cidades medievais</a>`
- XPath: `.AfSummary__list-item[data-v-e5ebd53e=""]:nth-child(4) > .AfSummary__link.bg-goldLight[aria-current="false"]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="label-m color-gold mb-2" data-v-44bc0b70="">Por Pascale Filliâtre</p>`
- XPath: `.mb-2`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/pascale_filliare_8bdb787a92.jpg" srcset="https://asset-prod.france.fr/pascale_filliare_8bdb787a92.jpg 150w, " sizes="150px" fetchpriority="auto" data-v-5486172a="">`
- XPath: `img[sizes="150px"]`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/pays-de-la-loire/liste/visiter-abbaye-royale-de-fontevraud">Fontevraud</a>`
- XPath: `#blocks\.topito-1 > .AfBlockRichText[data-v-5c8e2e39=""] > p:nth-child(3) > a`

**Failure 2:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/pays-de-la-loire/liste/48-heures-troglodyte-saumur">« troglos »</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/article/le-vignoble-du-val-de-loire/">Pays de la Loire</a>`
- XPath: `#blocks\.topito-1 > .AfBlockRichText[data-v-5c8e2e39=""] > p:nth-child(9) > a`

**Failure 4:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/article/loire-panoramas/">royal</a>`
- XPath: `#blocks\.topito-1 > .AfBlockRichText[data-v-5c8e2e39=""] > p:nth-child(11) > a`

**Failure 5:**
- First identified: 2026-03-27
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.france.fr/fr/article/angers-chateaux-gastronomie/">René</a>`
- XPath: `p:nth-child(13) > a`

*... and 16 more failures for this rule*

### https://france.fr/ar

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

#### Rule: [presentation-role-conflict](https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements marked as presentational should be consistently ignored
- HTML: `<img class="AfImage__img" alt="" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="800px" fetchpriority="auto" data-v-5486172a="" tabindex="-1">`
- XPath: `.AfCarousel-slide--next[aria-label="2 of 3"][aria-hidden="false"] > .AfCard--medium.AfCard--enlarge-link.AfCard > .AfCard__cover--vertical.AfCard__cover[data-v-08de3870=""] > .AfImage.AfImage--cover[__typename="RichImage"] > img[sizes="800px"][alt=""][loading="lazy"]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Elements marked as presentational should be consistently ignored
- HTML: `<img class="AfImage__img" alt="" loading="lazy" src="https://asset-prod.f..." srcset="https://asset-prod.f..." sizes="800px" fetchpriority="auto" data-v-5486172a="" tabindex="-1">`
- XPath: `.AfCarousel-slide[aria-label="0 of 3"][aria-hidden="false"] > .AfCard--medium.AfCard--enlarge-link.AfCard > .AfCard__cover--vertical.AfCard__cover[data-v-08de3870=""] > .AfImage.AfImage--cover[__typename="RichImage"] > img[sizes="800px"][alt=""][loading="lazy"]`

### https://france.fr/cs

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/da

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/de

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-e5bacb9e=""][data-v-a53486d1=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/en

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-e5bacb9e=""][data-v-a53486d1=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/es

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap__destinations`

### https://france.fr/fr

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/it

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/ja

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-e5bacb9e=""][data-v-a53486d1=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/ko

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-e5bacb9e=""][data-v-a53486d1=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/nl

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/pt

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-e5bacb9e=""][data-v-a53486d1=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/ru

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/sv

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap[data-v-a53486d1=""][data-v-e5bacb9e=""] > .AfFranceMap__container[data-v-e5bacb9e=""] > .AfFranceMap__destinations`

### https://france.fr/zh-Hans

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="AfFranceMap__destinations" data-v-e5bacb9e="">`
- XPath: `.AfFranceMap__destinations`

### https://france.fr/cs/archivy

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 data-v-08de3870="" class="AfCard__title heading-5"><a data-v-08de3870="" class="AfCard__link" href="/cs/clanek/netradicni-ubytovani-na-horach/" target="">Top netradiční ubytování na horách</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard.AfCard--medium.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/cs/mapa

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Buttons must have discernible text
- HTML: `<button data-v-6458d367="" data-v-aa0444f3="" class="AfButton AfButton--primary AfButton--small AfButton--blueNight AfButton--iconAlone label-s">`
- XPath: `.AfButton--blueNight`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h1 class="sr-only" data-v-899edca7=""></h1>`
- XPath: `h1`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Aile_Francois_Ier_I_Chateau_royal_de_Blois_F_Christophe_3_0b327563f8.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_727751393_ec2b5df38f.png" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/ca1724_D_Frobert_Col_d_Aulac_S_165_jpg_3000px_BD_7177f3a64a.JPG" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_92577217_0b6272e973.jpeg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_343465694_d4dae32e39.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

*... and 18 more failures for this rule*

### https://france.fr/de/archiv

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="AfCard__title heading-5" data-v-08de3870=""><a class="AfCard__link" href="/de/artikel/cite-du-chocolat-kinder-valrhona-tain-lhermitage/" target="" data-v-08de3870="">Warum sich ein Besuch in der Cité du Chocolat mit Kindern lohnt</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard--medium.AfCard.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/de/karte

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Buttons must have discernible text
- HTML: `<button data-v-6458d367="" data-v-aa0444f3="" class="AfButton AfButton--primary AfButton--small AfButton--blueNight AfButton--iconAlone label-s">`
- XPath: `.AfButton--blueNight`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h1 class="sr-only" data-v-899edca7=""></h1>`
- XPath: `h1`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/LOZERE_Lezbroz_CRTL_Occitanie_0022413_MD_441b322c3b.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--medium.AfButton--image.AfMapPointer__label > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Aile_Francois_Ier_I_Chateau_royal_de_Blois_F_Christophe_3_0b327563f8.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--medium.AfButton--image.AfMapPointer__label > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_727751393_ec2b5df38f.png" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--medium.AfButton--image.AfMapPointer__label > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Image_6_5e373fa52e.jfif" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--medium.AfButton--image.AfMapPointer__label > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/ca1724_D_Frobert_Col_d_Aulac_S_165_jpg_3000px_BD_7177f3a64a.JPG" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--medium.AfButton--image.AfMapPointer__label > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

*... and 20 more failures for this rule*

### https://france.fr/de/nachhaltiges-reisen

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="color-blue AfSectionCards__watermark text-watermark" data-v-a822b09b="">Besuchen</p>`
- XPath: `.AfSectionCards__watermark`

#### Rule: [scrollable-region-focusable](https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [SC 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Scrollable region must have keyboard access
- HTML: `<div class="AfKeyFigures__scrolling--isDurable AfKeyFigures__scrolling custom-scrollbar-h" data-v-afa8ea60="">`
- XPath: `.AfKeyFigures__scrolling--isDurable`

### https://france.fr/en/archives

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="AfCard__title heading-5" data-v-08de3870=""><a class="AfCard__link" href="/en/article/chic-recreation-around-luxembourg-gardens/" target="" data-v-08de3870="">Chic recreation around the Luxembourg Gardens</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard--medium.AfCard.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/en/durable-travel

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="color-blue AfSectionCards__watermark text-watermark" data-v-a822b09b="">Visit</p>`
- XPath: `.AfSectionCards__watermark`

#### Rule: [scrollable-region-focusable](https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [SC 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Scrollable region must have keyboard access
- HTML: `<div class="AfKeyFigures__scrolling--isDurable AfKeyFigures__scrolling custom-scrollbar-h" data-v-afa8ea60="">`
- XPath: `.AfKeyFigures__scrolling--isDurable`

### https://france.fr/es/archivos

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="AfCard__title heading-5" data-v-08de3870=""><a class="AfCard__link" href="/es/articulo/evasion-en-la-tranquilidad-de-altos-de-francia/" target="" data-v-08de3870="">Evasión en la tranquilidad de Altos de Francia</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard--medium.AfCard.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/es/info-practica

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="heading-4 text-align-center mb-5" data-v-7947d067="">Informaciones prácticas</h3>`
- XPath: `.heading-4`

### https://france.fr/es/mapa

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Buttons must have discernible text
- HTML: `<button data-v-6458d367="" data-v-aa0444f3="" class="AfButton AfButton--primary AfButton--small AfButton--blueNight AfButton--iconAlone label-s">`
- XPath: `.AfButton--blueNight`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h1 class="sr-only" data-v-899edca7=""></h1>`
- XPath: `h1`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/LOZERE_Lezbroz_CRTL_Occitanie_0022413_MD_441b322c3b.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Aile_Francois_Ier_I_Chateau_royal_de_Blois_F_Christophe_3_0b327563f8.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_727751393_ec2b5df38f.png" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Image_6_5e373fa52e.jfif" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/ca1724_D_Frobert_Col_d_Aulac_S_165_jpg_3000px_BD_7177f3a64a.JPG" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

*... and 19 more failures for this rule*

### https://france.fr/fr/archives

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="AfCard__title heading-5" data-v-08de3870=""><a class="AfCard__link" href="/fr/evenement/chartres-lumieres/" target="" data-v-08de3870="">Chartres en lumières</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard--medium.AfCard.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/fr/articles-recents

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="AfCard__title heading-5" data-v-08de3870=""><a class="AfCard__link" href="/fr/article/expositions-france/" target="" data-v-08de3870="">Les plus belles expositions à découvrir en France en 2026</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard--medium.AfCard.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/fr/carte

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Buttons must have discernible text
- HTML: `<button data-v-6458d367="" data-v-aa0444f3="" class="AfButton AfButton--primary AfButton--small AfButton--blueNight AfButton--iconAlone label-s">`
- XPath: `.AfButton--blueNight`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h1 class="sr-only" data-v-899edca7=""></h1>`
- XPath: `h1`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/LOZERE_Lezbroz_CRTL_Occitanie_0022413_MD_441b322c3b.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Aile_Francois_Ier_I_Chateau_royal_de_Blois_F_Christophe_3_0b327563f8.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_727751393_ec2b5df38f.png" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Image_6_5e373fa52e.jfif" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/ca1724_D_Frobert_Col_d_Aulac_S_165_jpg_3000px_BD_7177f3a64a.JPG" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

*... and 20 more failures for this rule*

### https://france.fr/it/archivi

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="AfCard__title heading-5" data-v-08de3870=""><a class="AfCard__link" href="/it/articolo/chef-donne-francesi/" target="" data-v-08de3870="">Donne di gusto: 5 chef donne che hanno saputo reinventare l'esperienza della cucina francese</a></h3>`
- XPath: `.gridS-12.gridM-4[data-v-2766cc70=""]:nth-child(1) > .AfCard--medium.AfCard.AfCard--enlarge-link > .AfCard__content[data-v-08de3870=""] > .AfCard__top[data-v-08de3870=""] > h3`

### https://france.fr/it/cartina

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Buttons must have discernible text
- HTML: `<button data-v-6458d367="" data-v-aa0444f3="" class="AfButton AfButton--primary AfButton--small AfButton--blueNight AfButton--iconAlone label-s">`
- XPath: `.AfButton--blueNight`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-27
- Message: Headings should not be empty
- HTML: `<h1 class="sr-only" data-v-899edca7=""></h1>`
- XPath: `h1`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/LOZERE_Lezbroz_CRTL_Occitanie_0022413_MD_441b322c3b.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(1) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 2:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Aile_Francois_Ier_I_Chateau_royal_de_Blois_F_Christophe_3_0b327563f8.jpg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(2) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 3:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_727751393_ec2b5df38f.png" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(3) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 4:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Image_6_5e373fa52e.jfif" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(4) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

**Failure 5:**
- First identified: 2026-03-27
- Message: Images must have alternative text
- HTML: `<img data-v-5486172a="" class="AfImage__img" loading="lazy" src="https://asset-prod.france.fr/Adobe_Stock_92577217_0b6272e973.jpeg" srcset="" sizes="150px" fetchpriority="auto">`
- XPath: `.leaflet-marker-icon.AfLeafletMap__marker.leaflet-interactive:nth-child(5) > .AfLeafletMap__marker-content[data-v-aa0444f3=""] > .AfMapPointer.AfMapPointer--white[data-v-baca025a=""] > .AfButton--image.AfMapPointer__label.AfButton--medium > .radius-circle.AfImage.radius-s > .AfImage__img[sizes="150px"][srcset=""]`

*... and 16 more failures for this rule*

### https://france.fr/it/info-pratiche

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="heading-4 text-align-center mb-5" data-v-7947d067="">Info pratiche</h3>`
- XPath: `.heading-4`

