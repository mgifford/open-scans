import { ROLES, SEVERITY, wcagScUrl, getDisabilitiesFromScs, getFpsData } from "./rule-metadata.mjs";
import { formatAlfaRule } from "./alfa-rule-metadata.mjs";
import { getEqualAccessRuleName } from "./equalaccess-rule-metadata.mjs";

/**
 * Format WCAG criteria for display in HTML reports.
 * @param {{ scs: string[], level: string|null }} wcag
 * @returns {string} HTML string
 */
function formatWcagHtml(wcag) {
  if (!wcag) return "";
  const { scs, level } = wcag;
  if (level === "best-practice") {
    return `<span class="badge badge-wcag badge-best-practice">Best Practice</span>`;
  }
  if (!scs || scs.length === 0) return "";
  const scLinks = scs.map(sc => {
    const url = wcagScUrl(sc);
    return `<a href="${url}" target="_blank" rel="noopener" class="wcag-sc-link">SC ${sc}</a>`;
  }).join(", ");
  const levelBadge = level ? `<span class="badge badge-wcag badge-level-${level.toLowerCase()}">${level}</span>` : "";
  return `${scLinks} ${levelBadge}`;
}

/** Convert a string to a URL-safe slug for use as an HTML id */
function slugify(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Format an ISO date string as YYYY-MM-DD for consistent display. */
function formatFirstSeenDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-CA");
}

/**
 * WCAG Success Criteria introduced in WCAG 2.1 (not in 2.0).
 * @type {Set<string>}
 */
const WCAG_21_SCS = new Set([
  "1.3.4", "1.3.5", "1.3.6",
  "1.4.10", "1.4.11", "1.4.12", "1.4.13",
  "2.1.4",
  "2.5.1", "2.5.2", "2.5.3", "2.5.4", "2.5.5", "2.5.6",
  "4.1.3"
]);

/**
 * WCAG Success Criteria introduced in WCAG 2.2 (not in 2.0 or 2.1).
 * @type {Set<string>}
 */
const WCAG_22_SCS = new Set([
  "2.4.11", "2.4.12", "2.4.13",
  "2.5.7", "2.5.8",
  "3.2.6",
  "3.3.7", "3.3.8", "3.3.9"
]);

/**
 * Given an array of WCAG SC strings, return the minimum WCAG version
 * required to cover all of them ("2.0", "2.1", or "2.2").
 * Returns "" when the array is empty or null.
 * @param {string[]} scs
 * @returns {string}
 */
function getWcagVersionFromScs(scs) {
  if (!scs || scs.length === 0) return "";
  let version = "2.0";
  for (const sc of scs) {
    if (WCAG_22_SCS.has(sc)) return "2.2";
    if (WCAG_21_SCS.has(sc)) version = "2.1";
  }
  return version;
}

/**
 * Extract the WCAG object for a consolidated failure, falling back to metadata fields.
 * @param {{ wcag?: {scs: string[], level: string|null}, metadata?: {wcagCriteria?: string[], conformanceLevel?: string} }} f
 * @returns {{ scs: string[], level: string|null }}
 */
function getRuleWcag(f) {
  return f.wcag || { scs: f.metadata?.wcagCriteria || [], level: f.metadata?.conformanceLevel || null };
}

/**
 * Disability category display metadata: label, description, colors, and inline SVG path.
 * SVG icons use a 20×20 viewBox and fill="currentColor".
 */
const DISABILITY_INFO = {
  visual: {
    label: "Visual",
    description: "Affects users with visual disabilities (blindness, low vision, color blindness)",
    /* Eye icon – two concentric shapes: outer eye outline + pupil dot */
    svgContent: `<path d="M10 4C6.3 4 3.1 6.1 1.3 9.3c-.2.4-.2.9 0 1.4C3.1 13.9 6.3 16 10 16s6.9-2.1 8.7-5.3c.2-.4.2-.9 0-1.4C16.9 6.1 13.7 4 10 4zm0 10c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/>`,
    color: "#1565c0",
    bgColor: "#e3f2fd",
    borderColor: "#90caf9",
  },
  hearing: {
    label: "Hearing",
    description: "Affects users with hearing disabilities (deafness, hard of hearing)",
    /* Ear icon – outer ear curve + inner canal curve */
    svgContent: `<path d="M10 2a6 6 0 00-6 6c0 1.6.6 3 1.7 4.1l.3.3V17h2v-5.1l-.7-.7A4 4 0 016 8a4 4 0 014-4 4 4 0 014 4 4 4 0 01-.8 2.4l-.5.7V14h-1a2 2 0 01-2-2H8a4 4 0 004 4h2v-5.3l.5-.7A6 6 0 0016 8a6 6 0 00-6-6z"/>`,
    color: "#6a1b9a",
    bgColor: "#f3e5f5",
    borderColor: "#ce93d8",
  },
  motor: {
    label: "Motor",
    description: "Affects users with motor/physical disabilities (limited hand dexterity, paralysis, tremors)",
    /* Hand icon – five fingers and palm */
    svgContent: `<path d="M14.5 7.5a1 1 0 00-1-1 1 1 0 00-1 1V10a1 1 0 01-1 0V4.5a1 1 0 00-2 0V10a1 1 0 01-1 0V5.5a1 1 0 00-2 0V11a1 1 0 01-1 0V7.5a1 1 0 00-2 0V12a5 5 0 005 5 5 5 0 005-5V8.5a1 1 0 00-1-1 1 1 0 00-1 1V10a1 1 0 01-1 0V7.5z"/>`,
    color: "#2e7d32",
    bgColor: "#e8f5e9",
    borderColor: "#a5d6a7",
  },
  cognitive: {
    label: "Cognitive",
    description: "Affects users with cognitive disabilities (learning disabilities, ADHD, memory impairments)",
    /* Head-with-brain icon – head outline + three thought circles */
    svgContent: `<path d="M10 2a7 7 0 00-7 7c0 2.3 1.1 4.3 2.8 5.6L5 18h10l-.8-3.4A7 7 0 0017 9a7 7 0 00-7-7zm0 2a5 5 0 015 5 5 5 0 01-1.9 3.9l-.6.5.6 2.6H6.9l.6-2.6-.6-.5A5 5 0 015 9a5 5 0 015-5zm-1.5 3a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zm-1.5 2.5a1 1 0 100 2 1 1 0 000-2z"/>`,
    color: "#bf360c",
    bgColor: "#fbe9e7",
    borderColor: "#ffab91",
  },
};

/**
 * Render accessible SVG disability icons for the given disability categories.
 * Returns an HTML string with an inline SVG icon + text label for each category.
 * @param {string[]} disabilities - Array of disability keys (e.g. ["visual", "motor"])
 * @returns {string} HTML string, or empty string if no disabilities
 */
function renderDisabilityIcons(disabilities) {
  if (!disabilities || disabilities.length === 0) return "";
  return disabilities.map(key => {
    const info = DISABILITY_INFO[key];
    if (!info) return "";
    return `<span class="disability-badge disability-${key}" title="${info.description}">
      <svg class="disability-icon" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true" focusable="false">
        ${info.svgContent}
      </svg>
      <span>${info.label}</span>
    </span>`;
  }).join("");
}

export function generateInteractiveHtml(summary, remediationResult = null, trendData = null) {
  const { enhanced, scanTitle, issueNumber, issueUrl, scannedAt, totalElapsedMs, totalSubmitted, acceptedCount, scannedCount, darkModeUrlCount, reducedMotionUrlCount, highContrastUrlCount, forcedColorsUrlCount, reducedTransparencyUrlCount, results } = summary;
  const { consolidatedFailures, roleStats, severityStats } = enhanced;

  const rolesList = Object.values(ROLES);
  const severitiesList = Object.values(SEVERITY);

  // Calculate total issues once
  const totalIssues = consolidatedFailures.reduce((acc, f) => acc + f.totalOccurrences, 0);

  // Calculate detailed issue breakdown statistics for the header summary
  const engineCount = new Set(consolidatedFailures.map(f => f.engine)).size;
  let levelA = 0, levelAA = 0, levelAAA = 0;
  let version20 = 0, version21 = 0, version22 = 0;
  let axeStrict = 0, bestPractice = 0, otherUnique = 0;
  for (const f of consolidatedFailures) {
    const wcag = getRuleWcag(f);
    const wcagLevel = wcag.level || "";
    const count = f.totalOccurrences;
    // By WCAG conformance level
    if (wcagLevel === "A") levelA += count;
    else if (wcagLevel === "AA") levelAA += count;
    else if (wcagLevel === "AAA") levelAAA += count;
    // By WCAG version (A & AA only -- AAA is advisory and version tracking is less relevant)
    if (wcagLevel === "A" || wcagLevel === "AA") {
      const ver = getWcagVersionFromScs(wcag.scs || []);
      if (ver === "2.0") version20 += count;
      else if (ver === "2.1") version21 += count;
      else if (ver === "2.2") version22 += count;
    }
    // By confidence/engine category
    if (wcagLevel === "best-practice") {
      bestPractice += count;
    } else if (f.engine === "axe") {
      // axe-strict: axe violations mapped to WCAG SCs (high-confidence, no false positives)
      axeStrict += count;
    } else {
      // Other unique errors: non-axe engine violations
      otherUnique += count;
    }
  }

  // Build filtered issue breakdown display strings (hide zero-value entries)
  const byLevelParts = [
    `A (${levelA})`,
    `AA (${levelAA})`,
    ...(levelAAA > 0 ? [`AAA (${levelAAA})`] : []),
  ];
  const byVersionParts = [
    `WCAG 2.0 (${version20})`,
    ...(version21 > 0 ? [`WCAG 2.1 (${version21})`] : []),
    ...(version22 > 0 ? [`WCAG 2.2 (${version22})`] : []),
  ];
  const byCategoryParts = [
    ...(axeStrict > 0 ? [`axe-strict (${axeStrict})`] : []),
    ...(bestPractice > 0 ? [`Best Practice (${bestPractice})`] : []),
    ...(otherUnique > 0 ? [`Others (${otherUnique})`] : []),
  ];

  // Build priority table data (top 10 pages by total unique errors)
  const ALL_SCANNERS = ['axe', 'alfa', 'equalAccess', 'accesslint', 'qualweb'];
  const SCANNER_LABELS = { axe: 'axe', alfa: 'ALFA', equalAccess: 'Equal Access', accesslint: 'AccessLint', qualweb: 'QualWeb' };
  // Mapping from lowercase engine key (as stored in summary.engines) to SCANNERS key
  const ENGINE_KEY_MAP = { axe: 'axe', alfa: 'alfa', equalaccess: 'equalAccess', accesslint: 'accesslint', qualweb: 'qualweb' };

  // Determine which scanners to show columns for based on which engines were run
  const enginesSpec = summary.engines || ["all"];
  const isAllEngines = enginesSpec.includes("all");
  const activeScannerKeys = isAllEngines
    ? ALL_SCANNERS
    : [...new Set([
        ...enginesSpec.map(e => ENGINE_KEY_MAP[e.toLowerCase()]).filter(Boolean),
        'axe' // axe always included
      ])];
  // Preserve original SCANNERS order
  const SCANNERS = ALL_SCANNERS.filter(s => activeScannerKeys.includes(s));

  function getUnique(result, engine) {
    if (engine === 'axe') return result.axe?.uniqueFailedCount ?? result.axe?.counts?.failed ?? 0;
    if (engine === 'alfa') return result.alfa?.uniqueFailedCount ?? result.alfa?.counts?.failed ?? 0;
    if (engine === 'equalAccess') return result.equalAccess?.uniqueFailedCount ?? result.equalAccess?.counts?.failed ?? 0;
    if (engine === 'accesslint') return result.accesslint?.uniqueFailedCount ?? result.accesslint?.counts?.failed ?? 0;
    if (engine === 'qualweb') return result.qualweb?.counts?.failed ?? 0;
    return 0;
  }

  function getOverlap(result, engine) {
    if (engine === 'axe') return 0; // axe is the baseline, no overlap shown
    if (engine === 'alfa') return result.alfa?.crossEngineOverlapCount ?? 0;
    if (engine === 'equalAccess') return result.equalAccess?.crossEngineOverlapCount ?? 0;
    if (engine === 'accesslint') return result.accesslint?.crossEngineOverlapCount ?? 0;
    if (engine === 'qualweb') return result.qualweb?.crossEngineOverlapCount ?? 0;
    return 0;
  }

  const PRIORITY_TABLE_DEFAULT_ROWS = 10;

  const pagesByErrorCount = [...(results || [])]
    .map(r => {
      const counts = {};
      let total = 0;
      for (const eng of SCANNERS) {
        counts[eng] = getUnique(r, eng);
        total += counts[eng];
      }
      return { result: r, counts, total };
    })
    .filter(p => p.total > 0)
    .sort((a, b) => (b.counts.axe || 0) - (a.counts.axe || 0) || b.total - a.total);

  const totalPageCount = pagesByErrorCount.length;
  const extraPageCount = Math.max(0, totalPageCount - PRIORITY_TABLE_DEFAULT_ROWS);

  const priorityTableHtml = pagesByErrorCount.length > 0 ? `
    <section class="priority-section" aria-labelledby="priority-heading">
      <h2 id="priority-heading">🎯 Pages with Most Errors</h2>
      <p>Focus your efforts on these pages to make the biggest impact. Click any error count to filter the rule list below.
         Numbers in parentheses (+N) indicate findings that cover WCAG criteria already reported by axe.</p>
      <div class="table-wrapper" role="region" aria-label="Pages with most errors" tabindex="0">
        <table class="priority-table" aria-label="Pages sorted by total unique accessibility errors">
          <thead>
            <tr>
              <th scope="col" aria-sort="none"><button class="priority-sort-btn" data-sort-col="page" aria-label="Sort by page">Page <span class="sort-icon" aria-hidden="true">↕</span></button></th>
              ${SCANNERS.map(eng => `<th scope="col" aria-sort="${eng === 'axe' ? 'descending' : 'none'}"><button class="priority-sort-btn" data-sort-col="${eng.toLowerCase()}" aria-label="Sort by ${SCANNER_LABELS[eng]} Unique">${SCANNER_LABELS[eng]} Unique <span class="sort-icon" aria-hidden="true">${eng === 'axe' ? '↓' : '↕'}</span></button></th>`).join('')}
              <th scope="col" aria-sort="none"><button class="priority-sort-btn" data-sort-col="total" aria-label="Sort by Total Unique">Total Unique <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            </tr>
          </thead>
          <tbody>
            ${pagesByErrorCount.map(({ result: r, counts, total }, index) => {
    const displayUrl = r.finalUrl || r.submittedUrl;
    const filterUrl = r.submittedUrl;  // Must match the URL stored in consolidatedFailures.pages
    const pageTitle = r.pageTitle || displayUrl;
    const isExtra = index >= PRIORITY_TABLE_DEFAULT_ROWS;
    const sortAttrs = `data-sort-page="${escapeHtml(pageTitle)}" data-sort-total="${total}" ${SCANNERS.map(eng => `data-sort-${eng.toLowerCase()}="${escapeHtml(counts[eng])}"`).join(' ')}`;
    return `
              <tr${isExtra ? ' class="priority-row-extra" hidden' : ''} ${sortAttrs}>
                <td>
                  <a href="${escapeHtml(displayUrl)}" target="_blank" rel="noopener" title="${escapeHtml(displayUrl)}" class="page-link">
                    ${escapeHtml(pageTitle)}
                  </a>
                </td>
                ${SCANNERS.map(eng => {
      const count = counts[eng];
      const overlap = getOverlap(r, eng);
      if (count === 0) return `<td class="count-cell count-zero">0</td>`;
      const overlapHtml = overlap > 0
        ? ` <span class="overlap-badge" title="${overlap} finding(s) cover WCAG criteria also reported by axe">(+${overlap})</span>`
        : '';
      return `<td class="count-cell">
                    <button class="count-btn" 
                            data-page-url="${escapeHtml(filterUrl)}"
                            data-engine="${eng}"
                            data-engine-label="${escapeHtml(SCANNER_LABELS[eng])}"
                            aria-label="Filter: ${count} ${SCANNER_LABELS[eng]} errors on ${escapeHtml(pageTitle)}"
                            title="Click to filter rules for this page and scanner">
                      ${count}
                    </button>${overlapHtml}
                  </td>`;
    }).join('')}
                <td class="count-total"><strong>${total}</strong></td>
              </tr>`;
  }).join('')}
          </tbody>
        </table>
      </div>
      ${extraPageCount > 0 ? `
      <div class="show-all-pages-wrapper">
        <button class="btn btn-show-all-pages" id="show-all-pages-btn"
                aria-expanded="false">
          Show all ${totalPageCount} pages
        </button>
      </div>` : ''}
    </section>
  ` : '';

  // Engine order and labels for accordion sections
  const ENGINE_ORDER = ['alfa', 'axe', 'equalAccess', 'accesslint', 'qualweb'];
  const ENGINE_ACCORDION_LABELS = {
    alfa: 'ALFA', axe: 'axe', equalAccess: 'Equal Access',
    accesslint: 'AccessLint', qualweb: 'QualWeb'
  };

  function makeRuleCard(f) {
    let ruleInfo;
    if (f.engine === 'alfa') {
      ruleInfo = formatAlfaRule(f.rule);
    } else if (f.engine === 'equalAccess') {
      const equalAccessName = getEqualAccessRuleName(f.rule);
      ruleInfo = { id: f.rule, description: equalAccessName || f.ruleTitle || f.metadata.description };
    } else {
      ruleInfo = { id: f.rule, description: f.ruleTitle || f.metadata.description };
    }
    const displayId = ruleInfo.id;
    const displayDesc = ruleInfo.description || "";
    const rolesData = JSON.stringify(f.metadata.roles);
    const pageUrlsData = JSON.stringify([...f.pages.keys()]);
    const ruleSlug = slugify(f.engine + "-" + displayId);
    // Use stored wcag info (set during buildEnhancedSummary), falling back to metadata
    const wcag = getRuleWcag(f);
    const wcagHtml = formatWcagHtml(wcag);
    const wcagLevel = wcag.level || "";
    const wcagVersion = wcagLevel === "best-practice"
      ? "best-practice"
      : getWcagVersionFromScs(wcag.scs);

    // Compute which disability categories this rule affects
    const disabilities = getDisabilitiesFromScs(wcag.scs || []);
    const disabilityIconsHtml = renderDisabilityIcons(disabilities);
    const disabilityData = JSON.stringify(disabilities);

    // Compute Functional Performance Specifications affected
    const fpsData = getFpsData(disabilities, wcag.scs || []);
    const fpsHtml = fpsData.length > 0
      ? `<section class="fps-section" aria-labelledby="fps-heading-${ruleSlug}">
          <h4 id="fps-heading-${ruleSlug}">Who Is Affected</h4>
          <ul class="fps-list" aria-label="Functional Performance Specifications affected by this issue">
            ${fpsData.map(fp => `
              <li class="fps-item">
                <span class="fps-item-label">${escapeHtml(fp.label)}</span>
                <span class="fps-item-pop">${escapeHtml(fp.population_pct)} &mdash; ${escapeHtml(fp.population_count)}</span>
              </li>`).join('')}
          </ul>
        </section>`
      : '';

    return `
      <details class="rule-card"
               id="rule-${ruleSlug}"
               data-roles='${rolesData}'
               data-severity="${f.metadata.severity}"
               data-engine="${f.engine}"
               data-page-urls='${pageUrlsData}'
               data-wcag-level="${escapeHtml(wcagLevel)}"
               data-wcag-version="${escapeHtml(wcagVersion)}"
               data-disabilities='${disabilityData}'
               data-search="${escapeHtml((displayId + " " + displayDesc).toLowerCase())}">
        <summary>
          <div class="rule-summary-info">
            <span class="badge badge-count">${f.totalOccurrences}</span>
            <span class="badge badge-severity severity-${f.metadata.severity}">${f.metadata.severity}</span>
            <span class="badge badge-engine">${f.engine}</span>
            ${wcagHtml ? `<span class="wcag-inline">${wcagHtml}</span>` : ''}
            ${disabilityIconsHtml ? `<span class="disability-icons" aria-label="Affects: ${disabilities.map(d => DISABILITY_INFO[d].label).join(', ')}">${disabilityIconsHtml}</span>` : ''}
            <span>
              <strong>${escapeHtml(displayId)}</strong>${displayDesc ? `: ${escapeHtml(displayDesc)}` : ''}
              <a href="#rule-${ruleSlug}" class="anchor-link anchor-link-inline" aria-label="Link to ${escapeHtml(displayId)} rule">
                <span aria-hidden="true">#</span>
              </a>
            </span>
          </div>
          <div class="pages-affected">
            ${f.pages.size} pages affected
          </div>
        </summary>
        <div class="rule-content">
          <div class="rule-details">
            <div>
              <h4>Rule Information</h4>
              <p><strong>Engine:</strong> ${f.engine}</p>
              <p><strong>Roles:</strong> ${f.metadata.roles.join(', ')}</p>
              <p><strong>Blocking:</strong> ${f.metadata.blocking ? '⚠️ Yes (Task-Blocking)' : 'No'}</p>
              ${wcagHtml ? `<p><strong>WCAG:</strong> ${wcagHtml}</p>` : ''}
              ${disabilities.length > 0 ? `<p><strong>Disabilities affected:</strong><br><span class="disability-icons-detail">${renderDisabilityIcons(disabilities)}</span></p>` : ''}
            </div>
            <div>
              <h4>Affected Pages</h4>
              <ul style="max-height: 150px; overflow-y: auto; font-size: 0.85rem;">
                ${Array.from(f.pages.entries()).map(([url, count]) => `
                  <li><a href="${url}" target="_blank">${url}</a> (${count} occurrences)</li>
                `).join('')}
              </ul>
            </div>
          </div>
          ${fpsHtml}
          <h4>Examples</h4>
          <div class="example-list">
            ${f.examples.map((ex, i) => `
              <div class="example-item"
                   data-copy-rule-id="${escapeHtml(displayId)}"
                   data-copy-rule-url="${escapeHtml(f.ruleUrl || '')}"
                   data-copy-desc="${escapeHtml(displayDesc)}"
                   data-copy-engine="${escapeHtml(f.engine)}"
                   data-copy-wcag-scs="${escapeHtml(JSON.stringify(wcag.scs || []))}"
                   data-copy-wcag-level="${escapeHtml(wcagLevel)}"
                   data-copy-page-url="${escapeHtml(ex.url || '')}"
                   data-copy-html="${escapeHtml(ex.html || '')}"
                   data-copy-xpath="${escapeHtml(ex.xpath || '')}"
                   data-copy-message="${escapeHtml(ex.message || '')}"
                   data-copy-color-scheme="${escapeHtml(ex.colorScheme || 'light')}"
                   data-copy-viewport="${escapeHtml(ex.viewport || 'desktop')}"
                   data-copy-severity="${escapeHtml(f.metadata.severity || '')}"
                   data-copy-fingerprint="${escapeHtml(ex.fingerprint || '')}"
                   data-copy-pages-count="${f.pages.size}"
                   data-copy-occurrences="${f.totalOccurrences}"
                   data-copy-disabilities="${escapeHtml(disabilities.join(', '))}">
                <div class="example-meta">
                  <span>Example ${i + 1}</span>
                  <a href="${ex.url}" target="_blank" style="font-size: 0.75rem;">View on Page</a>
                  <button class="btn btn-copy btn-copy-failure" type="button" aria-label="Copy failure details for example ${i + 1} to clipboard">
                    📋 Copy failure details
                  </button>
                </div>
                ${ex.message ? `<div style="margin-bottom: 0.5rem; font-weight: 600;">${escapeHtml(ex.message)}</div>` : ''}
                <div class="example-mode">
                  <strong>Mode:</strong> <span class="badge ${ex.colorScheme === 'dark' ? 'badge-dark' : 'badge-light'}">${ex.colorScheme || 'light'}</span>
                  ${ex.firstSeenAt ? `<span class="first-seen">🕑 First identified: ${escapeHtml(formatFirstSeenDate(ex.firstSeenAt))}</span>` : ''}
                   ${ex.fingerprint ? `<span class="bug-id-display" title="Stable unique identifier for this finding across scans">🔑 Bug ID: <code class="bug-id-code">${escapeHtml(ex.fingerprint)}</code></span>` : ''}
                </div>
                ${ex.html ? `<div class="example-code">${escapeHtml(ex.html)}</div>` : ''}
                ${ex.xpath ? `<div class="example-xpath">XPath: ${escapeHtml(ex.xpath)}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </details>
    `;
  }

  // Per-engine accordion sections (collapsed by default)
  const engineAccordionHtml = ENGINE_ORDER
    .filter(eng => consolidatedFailures.some(f => f.engine === eng))
    .map(eng => {
      const label = ENGINE_ACCORDION_LABELS[eng];
      const engFailures = consolidatedFailures.filter(f => f.engine === eng);
      const engCardsHtml = engFailures.map(makeRuleCard).join('');
      return `
      <details class="accordion-section" id="accordion-${eng}">
        <summary class="accordion-header">
          <h2>🔧 Most Common Issues (${label})</h2>
          <span class="accordion-count">${engFailures.length} rule${engFailures.length !== 1 ? 's' : ''}</span>
        </summary>
        <div class="accordion-content rule-list">
          ${engCardsHtml}
        </div>
      </details>
      `;
    })
    .join('');

  // Engine filter options for the filter bar
  const engineFilterOptions = [
    '<option value="all">All Engines</option>',
    ...SCANNERS.map(s => `<option value="${s}">${escapeHtml(SCANNER_LABELS[s])}</option>`)
  ].join('');

  const filterControlsHtml = `
    <div class="filters" id="rule-filters" role="search" aria-label="Filter accessibility rules">
      <div class="filter-group">
        <label for="filter-type" class="filter-label">Type:</label>
        <select id="filter-type" aria-label="Filter by requirement type">
          <option value="all">All</option>
          <option value="wcag">WCAG Requirements</option>
          <option value="best-practice">Best Practices</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-level" class="filter-label">WCAG Level:</label>
        <select id="filter-level" aria-label="Filter by WCAG conformance level">
          <option value="all">All Levels</option>
          <option value="A">Level A only</option>
          <option value="A+AA">A &amp; AA</option>
          <option value="A+AA+AAA">A, AA &amp; AAA</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-version" class="filter-label">WCAG Version:</label>
        <select id="filter-version" aria-label="Filter by WCAG version">
          <option value="all">All Versions</option>
          <option value="2.0">WCAG 2.0</option>
          <option value="2.1">WCAG 2.1</option>
          <option value="2.2">WCAG 2.2</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-engine" class="filter-label">Engine:</label>
        <select id="filter-engine" aria-label="Filter by accessibility engine">
          ${engineFilterOptions}
        </select>
      </div>
      <div class="filter-group">
        <label for="filter-disability" class="filter-label">Disability:</label>
        <select id="filter-disability" aria-label="Filter by disability category affected">
          <option value="all">All Disabilities</option>
          <option value="visual">Visual</option>
          <option value="hearing">Hearing</option>
          <option value="motor">Motor</option>
          <option value="cognitive">Cognitive</option>
        </select>
      </div>
      <button class="btn btn-clear" id="clear-rule-filters" type="button" hidden>Clear Filters</button>
      <span id="filter-rule-count" class="filter-count-text" aria-live="polite" aria-atomic="true"></span>
    </div>`;

  // ── AI Remediation section ────────────────────────────────────────────────
  const remediationHtml = remediationResult ? renderRemediationSection(remediationResult, escapeHtml) : "";

  // ── Trend section ─────────────────────────────────────────────────────────
  const trendSectionHtml = trendData ? renderTrendSection(trendData, escapeHtml) : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Report: ${scanTitle || `Issue #${issueNumber}`}</title>
  <style>
    /* ── Color tokens ── */
    :root {
      --primary: #0969da;
      --bg: #f6f8fa;
      --container-bg: #ffffff;
      --text: #24292f;
      --border: #d0d7de;
      --critical: #cf222e;
      --serious: #bc4c00;
      --moderate: #9a6700;
      --minor: #57606a;
      --success: #1a7f37;
      --muted: #57606a;
      --surface: #fafafa;
      --hover-bg: #f0f0f0;
      --code-bg: #f8f9fa;
      --bar-bg: #eeeeee;
      --code-color: #0550ae;
      --xpath-color: #663399;
      --anchor-icon: #57606a;
      --badge-count-text: #ffffff;
      --badge-dark-bg: #24292f;
      --badge-dark-text: #e6edf3;
      --filter-banner-bg: #dbeafe;
      --filter-banner-border: #b6d9fb;
    }

    /* ── Dark mode (system preference) ── */
    @media (prefers-color-scheme: dark) {
      :root {
        --primary: #58a6ff;
        --bg: #0d1117;
        --container-bg: #161b22;
        --text: #e6edf3;
        --border: #30363d;
        --critical: #ff7b72;
        --serious: #ffa657;
        --moderate: #e3b341;
        --minor: #8b949e;
        --success: #3fb950;
        --muted: #8b949e;
        --surface: #21262d;
        --hover-bg: #30363d;
        --code-bg: #1c2128;
        --bar-bg: #30363d;
        --code-color: #79c0ff;
        --xpath-color: #d2a8ff;
        --anchor-icon: #8b949e;
        --badge-count-text: #0d1117;
        --badge-dark-bg: #e6edf3;
        --badge-dark-text: #24292f;
        --filter-banner-bg: #0d2340;
        --filter-banner-border: #1e3a5f;
      }
    }

    /* ── Manual theme overrides via data-theme attribute ── */
    [data-theme="light"] {
      --primary: #0969da;
      --bg: #f6f8fa;
      --container-bg: #ffffff;
      --text: #24292f;
      --border: #d0d7de;
      --critical: #cf222e;
      --serious: #bc4c00;
      --moderate: #9a6700;
      --minor: #57606a;
      --success: #1a7f37;
      --muted: #57606a;
      --surface: #fafafa;
      --hover-bg: #f0f0f0;
      --code-bg: #f8f9fa;
      --bar-bg: #eeeeee;
      --code-color: #0550ae;
      --xpath-color: #663399;
      --anchor-icon: #57606a;
      --badge-count-text: #ffffff;
      --badge-dark-bg: #24292f;
      --badge-dark-text: #e6edf3;
      --filter-banner-bg: #dbeafe;
      --filter-banner-border: #b6d9fb;
    }

    [data-theme="dark"] {
      --primary: #58a6ff;
      --bg: #0d1117;
      --container-bg: #161b22;
      --text: #e6edf3;
      --border: #30363d;
      --critical: #ff7b72;
      --serious: #ffa657;
      --moderate: #e3b341;
      --minor: #8b949e;
      --success: #3fb950;
      --muted: #8b949e;
      --surface: #21262d;
      --hover-bg: #30363d;
      --code-bg: #1c2128;
      --bar-bg: #30363d;
      --code-color: #79c0ff;
      --xpath-color: #d2a8ff;
      --anchor-icon: #8b949e;
      --badge-count-text: #0d1117;
      --badge-dark-bg: #e6edf3;
      --badge-dark-text: #24292f;
      --filter-banner-bg: #0d2340;
      --filter-banner-border: #1e3a5f;
    }

    /* ── Forced-colors / high contrast ── */
    @media (forced-colors: active) {
      .card { border: 1px solid CanvasText; }
      .anchor-link:focus { outline: 2px solid Highlight; }
      #theme-toggle { color: ButtonText; background-color: ButtonFace; border: 1px solid ButtonText; }
      .skip-link { background: Canvas; color: CanvasText; border: 1px solid CanvasText; }
    }

    /* ── Smooth scroll (only when motion is acceptable) ── */
    @media (prefers-reduced-motion: no-preference) {
      html { scroll-behavior: smooth; }
    }

    /* ── Scroll offset for anchor targets ── */
    :target { scroll-margin-top: 1rem; }
    h1[tabindex="-1"]:focus,
    h2[tabindex="-1"]:focus,
    h3[tabindex="-1"]:focus { outline: none; }

    /* ── Skip link ── */
    .skip-link {
      position: absolute;
      top: -100%;
      left: 1rem;
      padding: 0.5rem 1rem;
      background: var(--container-bg);
      color: var(--primary);
      font-weight: bold;
      text-decoration: none;
      border: 2px solid var(--primary);
      border-radius: 4px;
      z-index: 9999;
    }
    .skip-link:focus { top: 1rem; }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: var(--text);
      background-color: var(--bg);
      padding: 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: var(--container-bg);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    }

    header {
      border-bottom: 1px solid var(--border);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }
    .header-content { flex: 1; min-width: 0; }
    h1 { color: var(--primary); font-size: 2rem; margin-bottom: 0.5rem; }
    .meta { color: var(--muted); font-size: 0.9rem; display: flex; gap: 1.5rem; flex-wrap: wrap; }

    /* ── Theme toggle button ── */
    #theme-toggle {
      flex-shrink: 0;
      padding: 0.5rem;
      border: 1px solid var(--border);
      background-color: var(--container-bg);
      color: var(--text);
      cursor: pointer;
      border-radius: 4px;
      line-height: 0;
    }
    #theme-toggle:hover { background-color: var(--hover-bg); }
    #theme-toggle:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .theme-icon { display: block; width: 20px; height: 20px; }
    /* Default: show moon (switch-to-dark affordance) */
    .sun-icon { display: none; }
    .moon-icon { display: block; }
    @media (prefers-color-scheme: dark) {
      .sun-icon { display: block; }
      .moon-icon { display: none; }
    }
    [data-theme="dark"] .sun-icon { display: block; }
    [data-theme="dark"] .moon-icon { display: none; }
    [data-theme="light"] .sun-icon { display: none; }
    [data-theme="light"] .moon-icon { display: block; }

    /* ── Section headings with anchor links ── */
    .section-heading {
      font-size: 1.25rem;
      color: var(--text);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* ── Anchor link icons ── */
    .anchor-link {
      opacity: 0;
      text-decoration: none;
      color: var(--anchor-icon);
      font-weight: normal;
      padding: 0 0.2rem;
      border-radius: 3px;
    }
    .anchor-link-inline {
      font-size: 0.8em;
      margin-right: 0.3rem;
    }
    .section-heading:hover .anchor-link,
    .section-heading:focus-within .anchor-link,
    .anchor-link:focus { opacity: 1; }
    .anchor-link:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    /* Show inline rule anchors when parent summary is hovered/focused */
    summary:hover .anchor-link,
    summary:focus-within .anchor-link { opacity: 1; }

    .nav { margin-bottom: 2rem; display: flex; gap: 1rem; border-bottom: 1px solid var(--border); }
    .nav-item { 
      padding: 0.5rem 1rem; 
      cursor: pointer; 
      border-bottom: 2px solid transparent;
      font-weight: 500;
      color: var(--text);
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      font-size: 1rem;
      font-family: inherit;
    }
    .nav-item:hover { background: var(--hover-bg); }
    .nav-item:focus { outline: 2px solid var(--primary); outline-offset: -2px; }
    .nav-item.active { border-bottom-color: var(--primary); color: var(--primary); }

    .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
    .card { border: 1px solid var(--border); padding: 1.5rem; border-radius: 6px; background: var(--container-bg); }
    .card h3 { font-size: 1rem; margin-bottom: 1rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .stat { font-size: 2.5rem; font-weight: 700; line-height: 1; margin-bottom: 0.5rem; }
    .card-issues-overview { grid-column: span 2; }
    .issues-breakdown { list-style: disc; padding-left: 1.4rem; margin: 0; font-size: 0.9rem; line-height: 2; }
    .issues-breakdown li { color: var(--text); }
    .stat-inline { font-size: 1.4rem; font-weight: 700; }

    .bar-chart { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
    .bar-item { display: flex; align-items: center; gap: 0.5rem; }
    .bar-label { width: 140px; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bar-container { flex-grow: 1; background: var(--bar-bg); height: 12px; border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: var(--primary); }

    .severity-Critical { color: var(--critical); }
    .severity-Serious { color: var(--serious); }
    .severity-Moderate { color: var(--moderate); }
    .severity-Minor { color: var(--minor); }

    .filters { margin-bottom: 1.5rem; display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; padding: 1rem; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; }
    .filter-group { display: flex; align-items: center; gap: 0.4rem; }
    .filter-label { font-size: 0.9rem; font-weight: 600; white-space: nowrap; color: var(--text); }
    .filter-count-text { font-size: 0.85rem; color: var(--muted); margin-left: auto; }
    select, input {
      padding: 0.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--container-bg);
      color: var(--text);
    }
    select:focus, input:focus { outline: 2px solid var(--primary); outline-offset: 2px; border-color: var(--primary); }

    .rule-list { display: flex; flex-direction: column; gap: 1rem; }
    details { border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
    summary { 
      padding: 1rem; 
      background: var(--surface); 
      cursor: pointer; 
      font-weight: 600; 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
    }
    summary:hover { background: var(--hover-bg); }
    summary:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    summary::-webkit-details-marker { display: none; }
    .rule-summary-info { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .pages-affected { color: var(--muted); font-size: 0.8rem; }
    .badge { padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
    .badge-severity { background: var(--bar-bg); color: var(--text); }
    .badge-count { background: var(--primary); color: var(--badge-count-text); }
    .badge-engine { background: #e8f4fd; color: #0969da; border: 1px solid #b6d9fb; }
    .badge-light { background: var(--container-bg); border: 1px solid var(--border); color: var(--text); }
    .badge-dark { background: var(--badge-dark-bg); color: var(--badge-dark-text); }
    .badge-wcag { font-size: 0.7rem; }
    .badge-level-a { background: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; }
    .badge-level-aa { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }
    .badge-level-aaa { background: #ede9fe; color: #5b21b6; border: 1px solid #c4b5fd; }
    .badge-best-practice { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
    .wcag-inline { display: inline-flex; align-items: center; gap: 0.25rem; }
    .wcag-sc-link { color: var(--link); font-size: 0.8rem; text-decoration: none; }
    .wcag-sc-link:hover { text-decoration: underline; }

    /* ── Disability category badges ── */
    .disability-icons { display: inline-flex; align-items: center; gap: 0.3rem; flex-wrap: wrap; }
    .disability-icons-detail { display: inline-flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.3rem; }
    .disability-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.15rem 0.45rem;
      border-radius: 10px;
      font-size: 0.7rem;
      font-weight: 600;
      border: 1px solid;
      white-space: nowrap;
    }
    .disability-icon { flex-shrink: 0; }
    .disability-visual  { background: #e3f2fd; color: #1565c0; border-color: #90caf9; }
    .disability-hearing { background: #f3e5f5; color: #6a1b9a; border-color: #ce93d8; }
    .disability-motor   { background: #e8f5e9; color: #2e7d32; border-color: #a5d6a7; }
    .disability-cognitive { background: #fbe9e7; color: #bf360c; border-color: #ffab91; }

    /* Dark mode overrides for disability badges */
    @media (prefers-color-scheme: dark) {
      .disability-visual  { background: #0d2340; color: #90caf9; border-color: #1e3a5f; }
      .disability-hearing { background: #1c0a2e; color: #ce93d8; border-color: #4a1a6e; }
      .disability-motor   { background: #0a2818; color: #a5d6a7; border-color: #1c5e38; }
      .disability-cognitive { background: #2d0e00; color: #ffab91; border-color: #6b2100; }
    }
    [data-theme="dark"] .disability-visual  { background: #0d2340; color: #90caf9; border-color: #1e3a5f; }
    [data-theme="dark"] .disability-hearing { background: #1c0a2e; color: #ce93d8; border-color: #4a1a6e; }
    [data-theme="dark"] .disability-motor   { background: #0a2818; color: #a5d6a7; border-color: #1c5e38; }
    [data-theme="dark"] .disability-cognitive { background: #2d0e00; color: #ffab91; border-color: #6b2100; }

    .rule-content { padding: 1.5rem; border-top: 1px solid var(--border); }
    .rule-details { margin-bottom: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

    /* Functional Performance Specifications section */
    .fps-section { margin-bottom: 1.5rem; }
    .fps-section h4 { margin-bottom: 0.75rem; }
    .fps-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
    .fps-item { display: flex; align-items: baseline; gap: 0.75rem; font-size: 0.85rem; padding: 0.4rem 0.6rem; border-radius: 4px; background: var(--surface); border: 1px solid var(--border); }
    .fps-item-label { font-weight: 600; flex: 1; min-width: 0; }
    .fps-item-pop { color: var(--muted); white-space: nowrap; font-size: 0.8rem; }
    .fps-item-desc { color: var(--muted); font-size: 0.8rem; flex-basis: 100%; }
    .example-list { margin-top: 1rem; }
    .example-item { 
      border-left: 4px solid var(--primary); 
      background: var(--code-bg); 
      padding: 1rem; 
      margin-bottom: 1rem; 
      font-size: 0.85rem;
      color: var(--text);
    }
    .example-detail { display: grid; grid-template-columns: max-content 1fr; gap: 0.4rem 1rem; margin: 0; font-family: monospace; }
    .example-detail dt { font-family: sans-serif; font-weight: 600; color: var(--muted); white-space: nowrap; }
    .example-detail dd { margin: 0; word-break: break-all; white-space: pre-wrap; }
    .example-detail .example-url { font-family: sans-serif; }
    .example-detail .example-fix { font-family: sans-serif; white-space: pre-wrap; }
    .example-detail ul { margin: 0; padding-left: 1.5rem; }
    .example-code { color: var(--code-color); }
    .example-mode { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem; }
    .first-seen { font-size: 0.8em; color: var(--muted); font-style: italic; }
    .bug-id-display { font-size: 0.8em; color: var(--muted); }
    .bug-id-code { font-family: monospace; background: var(--code-bg); color: var(--code-color); padding: 0.1em 0.3em; border-radius: 3px; letter-spacing: 0.05em; user-select: all; }

    /* Priority table */
    .priority-section { margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 6px; background: var(--surface); }
    .priority-section h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .priority-section > p { color: var(--muted); font-size: 0.9rem; margin-bottom: 1rem; }
    .table-wrapper { overflow-x: auto; }
    .priority-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    .priority-table th { background: var(--bar-bg); padding: 0.6rem 0.8rem; text-align: left; font-weight: 600; border-bottom: 2px solid var(--border); white-space: nowrap; }
    .show-all-pages-wrapper { margin-top: 0.75rem; text-align: center; }
    .btn-show-all-pages { background: var(--container-bg); color: var(--primary); border: 1px solid var(--primary); border-radius: 6px; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 600; cursor: pointer; }
    .btn-show-all-pages:hover { background: var(--hover-bg); }
    .btn-show-all-pages:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .priority-table td { padding: 0.5rem 0.8rem; border-bottom: 1px solid var(--border); vertical-align: middle; }
    .priority-table tr:last-child td { border-bottom: none; }
    .priority-table tr:hover td { background: var(--hover-bg); }
    .count-cell { text-align: right; }
    .count-zero { color: var(--muted); }
    .count-total { text-align: right; }
    .overlap-badge {
      font-size: 0.8em;
      color: var(--muted);
      font-weight: 500;
      white-space: nowrap;
      cursor: help;
    }
    .count-btn {
      background: none;
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 0.2rem 0.6rem;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--primary);
      min-width: 2.5rem;
      text-align: right;
      transition: background 0.15s, border-color 0.15s;
    }
    .count-btn:hover { background: var(--hover-bg); border-color: var(--primary); }
    .count-btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .count-btn.active-filter { background: var(--primary); color: var(--badge-count-text); border-color: var(--primary); }
    .page-link { font-weight: 500; max-width: 320px; display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: middle; }
    .priority-sort-btn { background: none; border: none; cursor: pointer; font-size: inherit; font-weight: 600; color: inherit; padding: 0; display: inline-flex; align-items: center; gap: 0.3em; }
    .priority-sort-btn:hover { color: var(--primary); }
    .priority-sort-btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .priority-sort-btn .sort-icon { font-size: 0.75em; opacity: 0.6; }
    .priority-table th[aria-sort] .sort-icon { opacity: 1; color: var(--primary); }

    /* Accordion sections for per-engine issue groups */
    .accordion-section {
      margin: 1.5rem 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }
    .accordion-header {
      padding: 1rem 1.25rem;
      background: var(--surface);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      list-style: none;
      font-weight: 600;
    }
    .accordion-header::-webkit-details-marker { display: none; }
    .accordion-header::marker { content: none; }
    .accordion-header::before {
      content: '▶';
      font-size: 0.7rem;
      color: var(--muted);
      flex-shrink: 0;
      transition: transform 0.15s ease;
      order: -1;
    }
    .accordion-section[open] > .accordion-header::before { transform: rotate(90deg); }
    .accordion-section[open] > .accordion-header {
      border-bottom: 1px solid var(--border);
      border-radius: 6px 6px 0 0;
    }
    .accordion-header:hover { background: var(--hover-bg); }
    .accordion-header:focus { outline: 2px solid var(--primary); outline-offset: -2px; }
    .accordion-header h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text);
      flex: 1;
    }
    .accordion-count {
      font-size: 0.8rem;
      color: var(--muted);
      font-weight: normal;
      white-space: nowrap;
    }
    .accordion-content {
      padding: 1rem 1.25rem;
    }

    /* Active filter banner */
    .filter-banner {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      background: var(--filter-banner-bg);
      border: 1px solid var(--filter-banner-border);
      border-radius: 6px;
      padding: 0.6rem 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    .filter-banner.hidden { display: none !important; }
    .filter-banner-text { flex: 1; }
    .filter-banner-actions { display: flex; gap: 0.5rem; }
    .btn { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 1px solid; }
    .btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }
    .btn-clear { background: var(--container-bg); color: var(--text); border-color: var(--border); }
    .btn-clear:hover { background: var(--hover-bg); }
    .btn-copy { background: var(--success); color: white; border-color: var(--success); }
    .btn-copy:hover { background: #156b31; }
    .btn-copy.copied { background: var(--muted); border-color: var(--muted); }

    .hidden { display: none !important; }
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--muted);
      font-size: 0.875rem;
    }

    footer a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }

    footer a:hover {
      text-decoration: underline;
    }

    /* ── AI Remediation section ── */
    .remediation-section {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 2px solid var(--border);
    }

    .remediation-section h2 {
      margin-bottom: 1rem;
    }

    .remediation-disclaimer {
      background: var(--badge-bg, #f6f8fa);
      border-left: 4px solid var(--primary);
      padding: 0.75rem 1rem;
      margin-bottom: 1.5rem;
      border-radius: 0 4px 4px 0;
      font-size: 0.875rem;
      color: var(--muted);
    }

    .remediation-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .remediation-item {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.25rem;
      margin-bottom: 1.25rem;
    }

    .remediation-item h3 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .engine-tag {
      font-size: 0.8rem;
      font-weight: normal;
      color: var(--muted);
    }

    .badge-wcag {
      display: inline-block;
      padding: 0.1rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      background: var(--badge-bg, #ddf4ff);
      color: #0969da;
      border: 1px solid #b6e3ff;
      margin-bottom: 0.5rem;
    }

    .occurrence-count {
      font-size: 0.875rem;
      color: var(--muted);
      margin-bottom: 0.75rem;
    }

    .code-block {
      margin-bottom: 0.75rem;
    }

    .code-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--muted);
      margin-bottom: 0.25rem;
    }

    .code-block pre {
      background: var(--code-bg, #f6f8fa);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.75rem;
      overflow-x: auto;
      font-size: 0.85rem;
    }

    .code-block--fixed pre {
      border-left: 3px solid #2da44e;
    }

    .remediation-explanation,
    .wcag-reference {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .suggestion-unavailable {
      color: var(--muted);
      font-size: 0.875rem;
    }

    /* ── Dark mode overrides for badge and button components with light-only colors ── */
    @media (prefers-color-scheme: dark) {
      .badge-engine { background: #0d2340; color: #79c0ff; border-color: #1e3a5f; }
      .badge-level-a { background: #0a2818; color: #3fb950; border-color: #1c5e38; }
      .badge-level-aa { background: #0d2340; color: #58a6ff; border-color: #1e3a5f; }
      .badge-level-aaa { background: #1c1040; color: #d2a8ff; border-color: #403070; }
      .badge-best-practice { background: #2d1e00; color: #e3b341; border-color: #5a3d00; }
      .btn-copy:hover { background: #319b40; }
    }
    [data-theme="dark"] .badge-engine { background: #0d2340; color: #79c0ff; border-color: #1e3a5f; }
    [data-theme="dark"] .badge-level-a { background: #0a2818; color: #3fb950; border-color: #1c5e38; }
    [data-theme="dark"] .badge-level-aa { background: #0d2340; color: #58a6ff; border-color: #1e3a5f; }
    [data-theme="dark"] .badge-level-aaa { background: #1c1040; color: #d2a8ff; border-color: #403070; }
    [data-theme="dark"] .badge-best-practice { background: #2d1e00; color: #e3b341; border-color: #5a3d00; }
    [data-theme="dark"] .btn-copy:hover { background: #319b40; }

    /* ── Trend / scan-history section ── */
    .trend-section {
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 2rem;
      background: var(--surface);
    }
    .trend-section h2 { font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--text); }
    .trend-overview { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; }
    .trend-delta {
      display: inline-flex; align-items: center; gap: 0.3rem;
      padding: 0.3rem 0.75rem; border-radius: 20px;
      font-weight: 700; font-size: 0.95rem;
    }
    .trend-delta--improving { background: #dafbe1; color: #1a7f37; }
    .trend-delta--worsening { background: #ffebe9; color: #cf222e; }
    .trend-delta--stable    { background: #fff8c5; color: #9a6700; }
    @media (prefers-color-scheme: dark) {
      .trend-delta--improving { background: rgba(63, 185, 80, 0.15); color: #3fb950; }
      .trend-delta--worsening { background: rgba(255, 123, 114, 0.15); color: #ff7b72; }
      .trend-delta--stable    { background: rgba(227, 179, 65, 0.15); color: #e3b341; }
    }
    [data-theme="dark"] .trend-delta--improving { background: rgba(63, 185, 80, 0.15); color: #3fb950; }
    [data-theme="dark"] .trend-delta--worsening { background: rgba(255, 123, 114, 0.15); color: #ff7b72; }
    [data-theme="dark"] .trend-delta--stable    { background: rgba(227, 179, 65, 0.15); color: #e3b341; }
    .trend-meta { font-size: 0.85rem; color: var(--muted); }
    .trend-chart-wrap {
      margin-bottom: 1rem;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .trend-chart-wrap svg { display: block; max-width: 100%; }
    .trend-bar-label { font-size: 10px; fill: var(--muted); }
    .trend-bar-value { font-size: 10px; fill: var(--text); font-weight: 600; }
    .trend-bar-rect--improving { fill: #2da44e; }
    .trend-bar-rect--worsening { fill: #cf222e; }
    .trend-bar-rect--stable    { fill: #9a6700; }
    .trend-bar-rect--baseline  { fill: var(--primary); }
    details.trend-history-details { margin-bottom: 0.75rem; }
    details.trend-history-details > summary {
      cursor: pointer; font-size: 0.9rem; font-weight: 600; color: var(--primary);
      padding: 0.25rem 0; list-style: none;
    }
    details.trend-history-details > summary::before { content: "▶ "; font-size: 0.7rem; }
    details.trend-history-details[open] > summary::before { content: "▼ "; }
    .trend-history-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-top: 0.5rem; }
    .trend-history-table th, .trend-history-table td {
      padding: 0.4rem 0.6rem; text-align: right; border-bottom: 1px solid var(--border);
    }
    .trend-history-table th:first-child, .trend-history-table td:first-child { text-align: left; }
    .trend-history-table thead th { background: var(--surface); font-weight: 600; }
    .trend-change--positive { color: var(--critical); }
    .trend-change--negative { color: var(--success); }
    .systemic-patterns { margin-top: 0.75rem; }
    .systemic-patterns h3 { font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text); }
    .systemic-patterns ul { list-style: none; padding: 0; margin: 0; font-size: 0.85rem; }
    .systemic-patterns li { padding: 0.25rem 0; border-bottom: 1px solid var(--border); display: flex; gap: 0.5rem; align-items: baseline; }
    .systemic-patterns li:last-child { border-bottom: none; }
    .systemic-rule-id { font-family: ui-monospace, monospace; color: var(--code-color); }
    .systemic-count { font-weight: 600; white-space: nowrap; }
    .site-nav { display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border); font-size: 0.9rem; flex-wrap: wrap; }
    .site-nav a { color: var(--primary); text-decoration: none; }
    .site-nav a:hover { text-decoration: underline; }
    .site-nav a:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; border-radius: 2px; }

    @media print {
      body::before {
        content: "Please do not print this report. Use the interactive digital version for full details.";
        display: block;
        background: #fff3cd;
        padding: 1rem;
        border: 1px solid #ffeeba;
        margin-bottom: 2rem;
        font-weight: bold;
        text-align: center;
      }
      .nav, .filters, .nav-item, .priority-section, .filter-banner, #theme-toggle, .skip-link, .anchor-link { display: none; }
      details { border: none; }
      summary { background: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
      .container { box-shadow: none; max-width: none; width: 100%; padding: 0; }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="container" id="main-content" tabindex="-1">
    <header>
      <div class="header-content">
        <h1>Accessibility Scan Report</h1>
        <div class="meta">
          <span><strong>Title:</strong> ${scanTitle || `Issue #${issueNumber}`}</span>
          <span><strong>Issue:</strong> <a href="${issueUrl}" target="_blank">#${issueNumber}</a></span>
          <span><strong>Date:</strong> ${new Date(scannedAt).toLocaleString()}</span>
          <span><strong>Duration:</strong> ${(totalElapsedMs / 60000).toFixed(1)}m</span>
          <span><strong>URLs:</strong> ${acceptedCount} / ${totalSubmitted}</span>
          ${scannedCount > 0 ? (() => {
            const items = [];
            if ((darkModeUrlCount ?? 0) > 0) items.push(`<span title="prefers-color-scheme: dark"><strong>🌙 Dark Mode:</strong> ${darkModeUrlCount} / ${scannedCount} URLs</span>`);
            if ((reducedMotionUrlCount ?? 0) > 0) items.push(`<span title="prefers-reduced-motion: reduce"><strong>⚡ Reduced Motion:</strong> ${reducedMotionUrlCount} / ${scannedCount} URLs</span>`);
            if ((highContrastUrlCount ?? 0) > 0) items.push(`<span title="prefers-contrast: more"><strong>🔍 High Contrast:</strong> ${highContrastUrlCount} / ${scannedCount} URLs</span>`);
            if ((forcedColorsUrlCount ?? 0) > 0) items.push(`<span title="forced-colors: active"><strong>🖥️ Forced Colors:</strong> ${forcedColorsUrlCount} / ${scannedCount} URLs</span>`);
            if ((reducedTransparencyUrlCount ?? 0) > 0) items.push(`<span title="prefers-reduced-transparency: reduce"><strong>🪟 Reduced Transparency:</strong> ${reducedTransparencyUrlCount} / ${scannedCount} URLs</span>`);
            return items.join('');
          })() : ''}
        </div>
      </div>
      <!-- Theme toggle: placed after header content for correct tab order -->
      <button id="theme-toggle" aria-label="Switch to dark mode">
        <svg aria-hidden="true" class="theme-icon sun-icon" viewBox="0 0 24 24" width="20" height="20">
          <circle cx="12" cy="12" r="5" fill="currentColor"/>
          <path fill="currentColor" d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg aria-hidden="true" class="theme-icon moon-icon" viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      </button>
    </header>

    <nav class="site-nav" aria-label="Site navigation">
      <a href="../../../index.html">Submit URLs</a>
      <a href="../../../reports.html">All Reports</a>
      <a href="../../../trends.html">Trends</a>
    </nav>

    ${trendSectionHtml}

    <section aria-labelledby="section-summary">
      <h2 id="section-summary" class="section-heading" tabindex="-1">
        Summary
        <a href="#section-summary" class="anchor-link" aria-label="Link to Summary section">
          <span aria-hidden="true">#</span>
        </a>
      </h2>
      <div class="dashboard">
        <div class="card card-issues-overview">
          <h3>Issues</h3>
          <ul class="issues-breakdown" aria-label="Issues breakdown by WCAG level, version, and category">
            <li>
              <strong>By Level:</strong>
              ${byLevelParts.join(', ')}
            </li>
            <li>
              <strong>By Version (A &amp; AA):</strong>
              ${byVersionParts.join(', ')}
            </li>
            <li>
              <strong>By Category:</strong>
              ${byCategoryParts.join(' &amp; ')}
            </li>
            <li>
              <strong>Total: <span class="stat-inline" aria-label="${totalIssues} total issues">${totalIssues}</span></strong>
              across ${consolidatedFailures.length} unique rules &amp; ${engineCount} accessibility engine${engineCount !== 1 ? 's' : ''}
            </li>
          </ul>
        </div>
        <div class="card">
          <h3>By Severity</h3>
          <div class="bar-chart" role="list" aria-label="Issues by severity">
            ${severitiesList.map(s => {
    const count = severityStats[s] || 0;
    const max = Math.max(...Object.values(severityStats), 1);
    const percent = (count / max) * 100;
    return `
                <div class="bar-item" role="listitem">
                  <span class="bar-label severity-${s}">${s}</span>
                  <div class="bar-container" role="img" aria-label="${s}: ${count} issues, ${percent.toFixed(0)}% of maximum"><div class="bar-fill" style="width: ${percent}%; background-color: var(--${s.toLowerCase()})"></div></div>
                  <span aria-hidden="true">${count}</span>
                </div>
              `;
  }).join('')}
          </div>
        </div>
        <div class="card">
          <h3>By Role</h3>
          <div class="bar-chart" role="list" aria-label="Issues by role">
            ${rolesList.map(r => {
    const count = roleStats[r] || 0;
    const max = Math.max(...Object.values(roleStats), 1);
    const percent = (count / max) * 100;
    return `
                <div class="bar-item" role="listitem">
                  <span class="bar-label">${r}</span>
                  <div class="bar-container" role="img" aria-label="${r}: ${count} issues, ${percent.toFixed(0)}% of maximum"><div class="bar-fill" style="width: ${percent}%"></div></div>
                  <span aria-hidden="true">${count}</span>
                </div>
              `;
  }).join('')}
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="section-issues">
      <h2 id="section-issues" class="section-heading" tabindex="-1">
        Issues
        <a href="#section-issues" class="anchor-link" aria-label="Link to Issues section">
          <span aria-hidden="true">#</span>
        </a>
      </h2>

      ${priorityTableHtml}

      ${filterControlsHtml}

      ${engineAccordionHtml}
    </section>

    ${remediationHtml}

    <footer>
      <p>Generated by <a href="https://github.com/mgifford/open-scans" target="_blank" rel="noopener noreferrer">open-scans</a> — an open-source accessibility scanning tool.</p>
    </footer>
  </div>

  <script>
    // ── Theme toggle ──
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('report-theme');
    let currentTheme;
    let userOverride = false;

    if (savedTheme) {
      currentTheme = savedTheme;
      userOverride = true;
    } else {
      currentTheme = prefersDark.matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    themeToggle.addEventListener('click', () => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      currentTheme = newTheme;
      userOverride = true;
      localStorage.setItem('report-theme', newTheme);
      applyTheme(newTheme);
    });

    prefersDark.addEventListener('change', (e) => {
      if (!userOverride) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
      }
    });

    applyTheme(currentTheme);

    // ── Filters / tabs ──

    // Priority table click handler: open and scroll to the relevant engine accordion
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.count-btn');
      if (!btn) return;
      const engine = btn.dataset.engine;
      if (!engine) return;

      // Toggle active state on the button
      const wasActive = btn.classList.contains('active-filter');
      document.querySelectorAll('.count-btn.active-filter').forEach(b => b.classList.remove('active-filter'));

      if (!wasActive) {
        btn.classList.add('active-filter');
        const accordion = document.getElementById('accordion-' + engine);
        if (accordion) {
          accordion.setAttribute('open', '');
          accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    // ── Show all / Show fewer pages toggle ──
    const showAllBtn = document.getElementById('show-all-pages-btn');
    if (showAllBtn) {
      showAllBtn.addEventListener('click', () => {
        const expanded = showAllBtn.getAttribute('aria-expanded') === 'true';
        const extraRows = document.querySelectorAll('.priority-row-extra');
        if (expanded) {
          extraRows.forEach(row => { row.hidden = true; });
          showAllBtn.setAttribute('aria-expanded', 'false');
          showAllBtn.textContent = 'Show all ' + (extraRows.length + ${PRIORITY_TABLE_DEFAULT_ROWS}) + ' pages';
        } else {
          extraRows.forEach(row => { row.hidden = false; });
          showAllBtn.setAttribute('aria-expanded', 'true');
          showAllBtn.textContent = 'Show fewer pages';
        }
      });
    }

    // ── Priority table column sorting ──
    const priorityTable = document.querySelector('.priority-table');
    if (priorityTable) {
      const ptTbody = priorityTable.querySelector('tbody');
      const PT_DEFAULT_ROWS = ${PRIORITY_TABLE_DEFAULT_ROWS};
      let ptSortCol = 'axe';
      let ptSortDir = 'desc';

      function getPtSortValue(row, col) {
        if (col === 'page') return (row.dataset.sortPage || '').toLowerCase();
        const dsKey = 'sort' + col.charAt(0).toUpperCase() + col.slice(1);
        return parseInt(row.dataset[dsKey], 10) || 0;
      }

      function updatePtSortIcons() {
        priorityTable.querySelectorAll('.priority-sort-btn').forEach(function(btn) {
          const icon = btn.querySelector('.sort-icon');
          const col = btn.dataset.sortCol;
          if (col === ptSortCol) {
            icon.textContent = ptSortDir === 'asc' ? '↑' : '↓';
            btn.closest('th').setAttribute('aria-sort', ptSortDir === 'asc' ? 'ascending' : 'descending');
          } else {
            icon.textContent = '↕';
            btn.closest('th').setAttribute('aria-sort', 'none');
          }
        });
      }

      function sortPriorityTable() {
        const showAllBtn = document.getElementById('show-all-pages-btn');
        const isExpanded = showAllBtn && showAllBtn.getAttribute('aria-expanded') === 'true';
        const rows = Array.from(ptTbody.querySelectorAll('tr'));
        rows.sort(function(a, b) {
          const valA = getPtSortValue(a, ptSortCol);
          const valB = getPtSortValue(b, ptSortCol);
          const cmp = valA < valB ? -1 : valA > valB ? 1 : 0;
          return ptSortDir === 'asc' ? cmp : -cmp;
        });
        rows.forEach(function(row, i) {
          ptTbody.appendChild(row);
          if (i < PT_DEFAULT_ROWS) {
            row.classList.remove('priority-row-extra');
            row.hidden = false;
          } else {
            row.classList.add('priority-row-extra');
            row.hidden = !isExpanded;
          }
        });
      }

      priorityTable.querySelectorAll('.priority-sort-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const col = btn.dataset.sortCol;
          if (col === ptSortCol) {
            ptSortDir = ptSortDir === 'asc' ? 'desc' : 'asc';
          } else {
            ptSortCol = col;
            ptSortDir = col === 'page' ? 'asc' : 'desc';
          }
          updatePtSortIcons();
          sortPriorityTable();
        });
      });
    }

    // ── Rule card filtering ──
    const filterTypeEl = document.getElementById('filter-type');
    const filterLevelEl = document.getElementById('filter-level');
    const filterVersionEl = document.getElementById('filter-version');
    const filterEngineEl = document.getElementById('filter-engine');
    const filterDisabilityEl = document.getElementById('filter-disability');
    const clearRuleFiltersBtn = document.getElementById('clear-rule-filters');
    const filterRuleCountEl = document.getElementById('filter-rule-count');

    function applyRuleFilters() {
      const type = filterTypeEl.value;
      const level = filterLevelEl.value;
      const version = filterVersionEl.value;
      const engine = filterEngineEl.value;
      const disability = filterDisabilityEl.value;

      const allCards = document.querySelectorAll('.rule-card');
      let visibleCount = 0;

      allCards.forEach(card => {
        const cardEngine = card.dataset.engine || '';
        const cardLevel = card.dataset.wcagLevel || '';
        const cardVersion = card.dataset.wcagVersion || '';
        const isBestPractice = cardLevel === 'best-practice';
        let cardDisabilities = [];
        try { cardDisabilities = JSON.parse(card.dataset.disabilities || '[]'); } catch (e) {}

        let visible = true;

        // Engine filter
        if (engine !== 'all' && cardEngine !== engine) visible = false;

        // Type filter
        if (visible && type === 'wcag' && isBestPractice) visible = false;
        if (visible && type === 'best-practice' && !isBestPractice) visible = false;

        // Level filter (only meaningful for WCAG requirements, not best practices)
        if (visible && level !== 'all' && !isBestPractice) {
          if (level === 'A' && cardLevel !== 'A') visible = false;
          if (level === 'A+AA' && cardLevel !== 'A' && cardLevel !== 'AA') visible = false;
          // 'A+AA+AAA' includes A, AA, and AAA — any known WCAG level passes
        }

        // Version filter (only for WCAG requirements with a known version)
        if (visible && version !== 'all' && !isBestPractice && cardVersion !== '') {
          if (version === '2.0' && cardVersion !== '2.0') visible = false;
          else if (version === '2.1' && cardVersion !== '2.0' && cardVersion !== '2.1') visible = false;
          // '2.2' shows all
        }

        // Disability filter
        if (visible && disability !== 'all' && !cardDisabilities.includes(disability)) visible = false;

        card.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });

      // Hide accordion sections that have no visible rule cards
      document.querySelectorAll('.accordion-section').forEach(section => {
        const sectionCards = section.querySelectorAll('.rule-card');
        const hasVisible = Array.from(sectionCards).some(c => c.style.display !== 'none');
        section.style.display = hasVisible ? '' : 'none';
      });

      // Update live count text
      const total = allCards.length;
      const hasActiveFilters = type !== 'all' || level !== 'all' || version !== 'all' || engine !== 'all' || disability !== 'all';
      filterRuleCountEl.textContent = hasActiveFilters
        ? \`Showing \${visibleCount} of \${total} rules\`
        : '';
      clearRuleFiltersBtn.hidden = !hasActiveFilters;
    }

    [filterTypeEl, filterLevelEl, filterVersionEl, filterEngineEl, filterDisabilityEl].forEach(el => {
      el.addEventListener('change', applyRuleFilters);
    });

    clearRuleFiltersBtn.addEventListener('click', () => {
      filterTypeEl.value = 'all';
      filterLevelEl.value = 'all';
      filterVersionEl.value = 'all';
      filterEngineEl.value = 'all';
      filterDisabilityEl.value = 'all';
      applyRuleFilters();
    });

    // ── Copy failure details ──
    const SCAN_TITLE = ${JSON.stringify(scanTitle || `Issue #${issueNumber}`)};
    const ENGINE_DISPLAY_LABELS = { axe: 'axe-core', alfa: 'ALFA', equalAccess: 'Equal Access', accesslint: 'AccessLint', qualweb: 'QualWeb' };

    function getEnvironment() {
      const ua = navigator.userAgent;
      const edgeMatch = ua.match(/Edg\\/([\d.]+)/);
      const chromeMatch = ua.match(/Chrome\\/([\d.]+)/);
      const firefoxMatch = ua.match(/Firefox\\/([\d.]+)/);
      const safariMatch = ua.match(/Version\\/([\d.]+).*Safari/);
      if (edgeMatch) return \`Microsoft Edge version \${edgeMatch[1]}\`;
      if (chromeMatch) return \`Chrome version \${chromeMatch[1]}\`;
      if (firefoxMatch) return \`Firefox version \${firefoxMatch[1]}\`;
      if (safariMatch) return \`Safari version \${safariMatch[1]}\`;
      return ua;
    }

    function buildFailureDetails(el) {
      const ruleId = el.dataset.copyRuleId || '';
      const ruleUrl = el.dataset.copyRuleUrl || '';
      const desc = el.dataset.copyDesc || '';
      const engine = el.dataset.copyEngine || '';
      let wcagScs = [];
      try { wcagScs = JSON.parse(el.dataset.copyWcagScs || '[]'); } catch (e) {}
      const wcagLevel = el.dataset.copyWcagLevel || '';
      const pageUrl = el.dataset.copyPageUrl || '';
      const html = el.dataset.copyHtml || '';
      const xpath = el.dataset.copyXpath || '';
      const message = el.dataset.copyMessage || '';
      const colorScheme = el.dataset.copyColorScheme || 'light';
      const viewport = el.dataset.copyViewport || 'desktop';
      const severity = el.dataset.copySeverity || '';
      const fingerprint = el.dataset.copyFingerprint || '';
      const pagesCount = el.dataset.copyPagesCount || '';
      const occurrences = el.dataset.copyOccurrences || '';
      const disabilities = el.dataset.copyDisabilities || '';

      const engineLabel = ENGINE_DISPLAY_LABELS[engine] || engine;

      // Build WCAG citation string
      const wcagCitation = wcagScs.length > 0
        ? wcagScs.map(sc => \`SC \${sc}\`).join(', ') + (wcagLevel ? \` (Level \${wcagLevel})\` : '')
        : '';

      // Severity display (capitalise first letter)
      const severityDisplay = severity ? severity.charAt(0).toUpperCase() + severity.slice(1) : 'Unknown';

      // Frequency line
      const frequencyDisplay = (() => {
        const parts = [];
        if (occurrences) parts.push(\`\${occurrences} total occurrence(s) across scan\`);
        if (pagesCount) parts.push(\`\${pagesCount} page(s) affected\`);
        return parts.length > 0 ? parts.join('; ') : 'See scan report';
      })();

      // Issue title: component/rule — description — WCAG SC
      const wcagPrefix = wcagScs.length > 0 ? \` (\${wcagScs[0]})\` : '';
      const title = \`\${desc || ruleId}\${wcagPrefix}\`;

      // Impact line from disability categories
      const impactLine = disabilities
        ? \`\${disabilities} users may be affected.\`
        : 'See scan report for affected disability groups.';

      const metaParts = [
        \`## Accessibility Issue: \${title}\`,
        '',
      ];
      if (fingerprint) metaParts.push(\`**Bug ID:** \\\`\${fingerprint}\\\`\`);
      metaParts.push(\`**URL:** \${pageUrl}\`);
      if (xpath) metaParts.push(\`**XPath:** \\\`\${xpath}\\\`\`);
      if (wcagCitation) metaParts.push(\`**WCAG SC:** \${wcagCitation}\`);
      metaParts.push(\`**Rule:** \${engineLabel} — \${ruleId}\${ruleUrl ? \` (\${ruleUrl})\` : ''}\`);
      metaParts.push(\`**Severity:** \${severityDisplay}\`);
      metaParts.push(\`**Frequency:** \${frequencyDisplay}\`);
      metaParts.push(\`**Screen type:** \${viewport} | **Colour mode:** \${colorScheme}\`);

      const metaBlock = metaParts.join('\\n') + '\\n';

      const htmlBlock = html ? [
        '',
        '### HTML Snippet',
        '',
        '\`\`\`html',
        html,
        '\`\`\`',
        '',
      ].join('\\n') : '';

      const descBlock = [
        '### Description',
        '',
        desc || ruleId,
        '',
      ].join('\\n');

      const expectedBlock = [
        '### Expected Behaviour',
        '',
        '[What the correct, accessible experience should be]',
        '',
      ].join('\\n');

      const actualBlock = [
        '### Actual Behaviour',
        '',
        message || \`\${desc} — see rule \${ruleId} for details.\`,
        '',
      ].join('\\n');

      const impactBlock = [
        '### Impact',
        '',
        impactLine,
        '',
      ].join('\\n');

      const envBlock = [
        '### Testing Environment',
        '',
        '| Item | Value |',
        '|------|-------|',
        \`| Browser | \${getEnvironment()} |\`,
        \`| Testing tool | \${engineLabel} |\`,
        '',
      ].join('\\n');

      const footerBlock = [
        '---',
        \`*Found by [open-scans](https://github.com/mgifford/open-scans) using \${engineLabel}.*\`,
        \`*Scan: \${SCAN_TITLE}*\`,
      ].join('\\n');

      return [
        metaBlock,
        htmlBlock,
        descBlock,
        expectedBlock,
        actualBlock,
        impactBlock,
        envBlock,
        footerBlock,
      ].join('\\n');
    }

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-copy-failure');
      if (!btn) return;
      const exampleItem = btn.closest('.example-item');
      if (!exampleItem) return;

      const text = buildFailureDetails(exampleItem);
      const originalLabel = btn.getAttribute('aria-label');

      function showCopied() {
        btn.textContent = '✅ Copied!';
        btn.classList.add('copied');
        btn.setAttribute('aria-label', 'Copied to clipboard');
        setTimeout(() => {
          btn.innerHTML = '📋 Copy failure details';
          btn.classList.remove('copied');
          btn.setAttribute('aria-label', originalLabel);
        }, 2000);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showCopied).catch(() => {
          fallbackCopy(text);
          showCopied();
        });
      } else {
        fallbackCopy(text);
        showCopied();
      }
    });

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }

    // ── Open details elements when navigating to an anchor ──
    function openDetailsByHash(hash) {
      if (!hash) return;
      const id = hash.replace(/^#/, '');
      const target = document.getElementById(id);
      if (!target) return;
      // Open the target itself if it is a <details> element
      if (target.tagName === 'DETAILS') {
        target.setAttribute('open', '');
      }
      // Open every ancestor <details> element (e.g. accordion sections)
      let el = target.parentElement;
      while (el) {
        if (el.tagName === 'DETAILS') {
          el.setAttribute('open', '');
        }
        el = el.parentElement;
      }
      // Scroll into view after a brief layout tick
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }

    // Handle the hash present when the page first loads
    openDetailsByHash(window.location.hash);

    // Handle hash changes after page load (e.g. clicking an anchor link)
    window.addEventListener('hashchange', () => {
      openDetailsByHash(window.location.hash);
    });

    // Handle page restoration from back/forward cache (bfcache):
    // when the browser restores a cached page, the inline script does not
    // re-run, so we re-apply hash navigation here.
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        openDetailsByHash(window.location.hash);
      }
    });
  </script>
</body>
</html>`;

  function escapeHtml(text) {
    return String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderTrendSection(trend, esc) {
    if (trend.error === "No scan history available") return "";

    // Build chronological data points from baseline + diffs
    const points = [];
    if (trend.baselineTotals) {
      points.push({ scannedAt: trend.baselineTotals.scannedAt, combined: trend.baselineTotals.combined, isBaseline: true });
    }
    for (const d of trend.diffs || []) {
      points.push({ scannedAt: d.to.scannedAt, combined: d.to.totals.combined, trend: d.trend });
    }

    // SVG bar chart
    const W = 480, H = 100, padL = 30, padR = 10, padT = 14, padB = 28;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;
    const maxVal = Math.max(...points.map(p => p.combined), 1);
    const barW = Math.max(8, Math.floor((chartW / points.length) * 0.6));
    const barSpacing = chartW / points.length;
    const bars = points.map((p, i) => {
      const barH = Math.max(1, Math.round((p.combined / maxVal) * chartH));
      const x = padL + i * barSpacing + (barSpacing - barW) / 2;
      const y = padT + chartH - barH;
      const cls = p.isBaseline ? "baseline" : (p.trend || "stable");
      const dateStr = p.scannedAt ? new Date(p.scannedAt).toLocaleDateString("en-CA") : "";
      return `<g role="listitem" aria-label="${dateStr}: ${p.combined} violation${p.combined !== 1 ? "s" : ""}">
        <rect class="trend-bar-rect--${esc(cls)}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${barH}" rx="2"/>
        <text class="trend-bar-value" x="${(x + barW / 2).toFixed(1)}" y="${(y - 2).toFixed(1)}" text-anchor="middle">${p.combined}</text>
        <text class="trend-bar-label" x="${(x + barW / 2).toFixed(1)}" y="${(padT + chartH + 14).toFixed(1)}" text-anchor="middle">${dateStr.slice(5)}</text>
      </g>`;
    }).join("");
    const svgChart = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="list" aria-label="Violations per scan"
         style="overflow: visible;" focusable="false">
      ${bars}
      <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + chartH}" stroke="var(--border)" stroke-width="1"/>
      <line x1="${padL}" y1="${padT + chartH}" x2="${W - padR}" y2="${padT + chartH}" stroke="var(--border)" stroke-width="1"/>
    </svg>`;

    // Delta badge from latest diff
    let deltaBadgeHtml = "";
    if (trend.latestDiff) {
      const ch = trend.latestDiff.change;
      const cls = ch < 0 ? "improving" : ch > 0 ? "worsening" : "stable";
      const icon = ch < 0 ? "▼" : ch > 0 ? "▲" : "=";
      const label = ch === 0 ? "No change" : `${icon} ${Math.abs(ch)} violation${Math.abs(ch) !== 1 ? "s" : ""} ${ch < 0 ? "fewer" : "more"} than last scan`;
      deltaBadgeHtml = `<span class="trend-delta trend-delta--${esc(cls)}" role="status" aria-live="polite">${esc(label)}</span>`;
    }

    // Scan history table
    const historyRows = points.map((p, i) => {
      const date = p.scannedAt ? new Date(p.scannedAt).toLocaleDateString("en-CA") : "Unknown";
      if (i === 0) {
        return `<tr><td>${esc(date)} <em>(baseline)</em></td><td>${p.combined}</td><td>—</td></tr>`;
      }
      const d = (trend.diffs || [])[i - 1];
      const change = d ? d.change : 0;
      const chStr = change === 0 ? "±0" : change > 0 ? `+${change}` : `${change}`;
      const chCls = change < 0 ? "trend-change--negative" : change > 0 ? "trend-change--positive" : "";
      return `<tr><td>${esc(date)}</td><td>${p.combined}</td><td class="${chCls}">${esc(chStr)}</td></tr>`;
    }).join("");

    // Systemic patterns
    let systematicHtml = "";
    if (trend.latestSystemicPatterns && trend.latestSystemicPatterns.length > 0) {
      const items = trend.latestSystemicPatterns.slice(0, 8).map(pat => {
        const display = pat.ruleId.replace(/^axe:/, "[axe] ").replace(/.*\/rules\//, "");
        return `<li><span class="systemic-rule-id">${esc(display)}</span><span class="systemic-count">${pat.pageCount} page${pat.pageCount !== 1 ? "s" : ""}</span></li>`;
      }).join("");
      systematicHtml = `
      <div class="systemic-patterns">
        <h3>🔵 Systemic Patterns</h3>
        <ul aria-label="Rules failing across many pages">${items}</ul>
      </div>`;
    }

    const scansLabel = `${trend.scansAnalysed ?? points.length} scan${(trend.scansAnalysed ?? points.length) !== 1 ? "s" : ""} analysed`;
    const trendLabel = trend.overallTrend === "improving"
      ? `${trend.improvingCount} improved, ${trend.worseningCount} worsened`
      : trend.overallTrend === "worsening"
        ? `${trend.worseningCount} worsened, ${trend.improvingCount} improved`
        : "stable overall";

    return `
    <section class="trend-section" aria-labelledby="trend-heading">
      <h2 id="trend-heading">📊 Scan Trend History</h2>
      <div class="trend-overview">
        ${deltaBadgeHtml}
        <span class="trend-meta">${esc(scansLabel)} · ${esc(trendLabel)}</span>
      </div>
      <div class="trend-chart-wrap" role="img" aria-label="Bar chart of combined violations across scans">
        ${svgChart}
      </div>
      <details class="trend-history-details">
        <summary>Scan history (${points.length} scans)</summary>
        <table class="trend-history-table">
          <thead><tr><th scope="col">Date</th><th scope="col">Combined violations</th><th scope="col">Change</th></tr></thead>
          <tbody>${historyRows}</tbody>
        </table>
      </details>
      ${systematicHtml}
    </section>`;
  }

  function renderRemediationSection(remediation, esc) {
    const { suggestions, disclaimer, model } = remediation;
    const parts = [];
    parts.push(`
    <section class="remediation-section" aria-labelledby="remediation-heading">
      <h2 id="remediation-heading">🤖 AI-Powered Remediation Suggestions</h2>
      <div class="remediation-disclaimer" role="note" aria-label="AI disclaimer">
        <p>${esc(disclaimer)}</p>
      </div>`);

    if (suggestions.length === 0) {
      parts.push(`
      <p>No suggestions could be generated. The GitHub Models API may be unavailable or no violations were detected.</p>
    </section>`);
      return parts.join("");
    }

    parts.push(`
      <p>Generated by <strong>${esc(model)}</strong> for the top ${suggestions.length} most common violation type${suggestions.length !== 1 ? "s" : ""}.</p>
      <ol class="remediation-list">`);

    for (const item of suggestions) {
      const title = esc(item.ruleTitle || item.rule);
      const engine = esc(item.engine.toUpperCase());
      const rule = item.ruleUrl
        ? `<a href="${esc(item.ruleUrl)}" target="_blank" rel="noopener noreferrer">${esc(item.rule)}</a>`
        : esc(item.rule);
      const wcagText = item.wcag?.scs?.length > 0
        ? `<span class="badge badge-wcag">WCAG ${esc(item.wcag.scs.join(", "))}${item.wcag.level ? ` Level ${esc(item.wcag.level)}` : ""}</span>`
        : "";
      const occurrences = `${item.totalOccurrences} occurrence${item.totalOccurrences !== 1 ? "s" : ""} across ${item.pageCount} page${item.pageCount !== 1 ? "s" : ""}`;

      parts.push(`
        <li class="remediation-item">
          <h3>${title} <span class="engine-tag">${engine}: ${rule}</span></h3>
          ${wcagText}
          <p class="occurrence-count">${esc(occurrences)}</p>`);

      if (!item.suggestion) {
        parts.push(`
          <p class="suggestion-unavailable"><em>Suggestion unavailable — API call failed for this rule.</em></p>
        </li>`);
        continue;
      }

      const { beforeCode, afterCode, explanation, wcagReference } = item.suggestion;

      if (beforeCode) {
        parts.push(`
          <div class="code-block">
            <p class="code-label">Before (failing):</p>
            <pre><code>${esc(beforeCode)}</code></pre>
          </div>`);
      }
      if (afterCode) {
        parts.push(`
          <div class="code-block code-block--fixed">
            <p class="code-label">After (fixed):</p>
            <pre><code>${esc(afterCode)}</code></pre>
          </div>`);
      }
      if (explanation) {
        parts.push(`
          <p class="remediation-explanation">💡 <strong>Why this matters:</strong> ${esc(explanation)}</p>`);
      }
      if (wcagReference) {
        parts.push(`
          <p class="wcag-reference">📖 <strong>WCAG Reference:</strong> ${esc(wcagReference)}</p>`);
      }
      parts.push(`
        </li>`);
    }

    parts.push(`
      </ol>
    </section>`);
    return parts.join("");
  }
}
