#!/usr/bin/env node

/**
 * generate-trends-html.mjs
 *
 * Reads trends.json files from all issue directories under reports/issues/ and
 * generates a static trends.html page with:
 *   - Cross-issue trend summary table
 *   - Systemic patterns leaderboard
 *   - Weekly aggregation bar chart (SVG, no dependencies)
 *
 * Called by generate-reports-html.mjs after generating reports.html.
 *
 * stdout: progress messages (stderr for JSON-safe callers)
 * Output: trends.html (same directory as reports.html, default repo root)
 */

import { readFileSync, readdirSync, existsSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";

const TIMESTAMP_DIR_RE = /^\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}-\d{3}Z$/;

/** Escape HTML special characters */
function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Load all trends.json files from reports/issues/ subdirectories.
 * @param {string} reportsDir - e.g. "reports"
 * @returns {Array<{issueNumber: number, scanTitle: string, analysis: object, reportPath: string}>}
 */
export function loadAllTrends(reportsDir) {
  const issuesDir = join(reportsDir, "issues");
  if (!existsSync(issuesDir)) return [];

  const results = [];
  let issueDirs;
  try {
    issueDirs = readdirSync(issuesDir);
  } catch {
    return [];
  }

  for (const dir of issueDirs) {
    const match = dir.match(/^issue-(\d+)$/);
    if (!match) continue;
    const issueNumber = Number(match[1]);
    const trendsPath = join(issuesDir, dir, "trends.json");
    if (!existsSync(trendsPath)) continue;
    try {
      const analysis = JSON.parse(readFileSync(trendsPath, "utf8"));
      // Find most recent scan title from the latest scan directory
      let scanTitle = "";
      let latestReportPath = "";
      try {
        const stamps = readdirSync(join(issuesDir, dir))
          .filter((n) => TIMESTAMP_DIR_RE.test(n))
          .sort();
        if (stamps.length > 0) {
          const last = stamps[stamps.length - 1];
          latestReportPath = `reports/issues/${dir}/${last}`;
          const rp = join(issuesDir, dir, last, "report.json");
          if (existsSync(rp)) {
            const rData = JSON.parse(readFileSync(rp, "utf8"));
            scanTitle = rData.scanTitle || "";
          }
        }
      } catch { /* skip */ }
      results.push({ issueNumber, scanTitle, analysis, reportPath: latestReportPath });
    } catch { /* skip malformed */ }
  }

  // Sort by issue number ascending
  return results.sort((a, b) => a.issueNumber - b.issueNumber);
}

/**
 * Aggregate systemic patterns across all issue trends.
 * Returns top rules by total page-count across issues.
 * @param {Array<{analysis: object}>} trendItems
 * @returns {Array<{ruleId: string, issueCount: number, totalPageCount: number}>}
 */
export function aggregateSystemicPatterns(trendItems) {
  /** @type {Map<string, {issueCount: number, totalPageCount: number}>} */
  const ruleMap = new Map();
  for (const { analysis } of trendItems) {
    for (const pat of analysis.latestSystemicPatterns || []) {
      const existing = ruleMap.get(pat.ruleId) || { issueCount: 0, totalPageCount: 0 };
      ruleMap.set(pat.ruleId, {
        issueCount: existing.issueCount + 1,
        totalPageCount: existing.totalPageCount + pat.pageCount,
      });
    }
  }
  return [...ruleMap.entries()]
    .map(([ruleId, stats]) => ({ ruleId, ...stats }))
    .sort((a, b) => b.totalPageCount - a.totalPageCount || b.issueCount - a.issueCount)
    .slice(0, 20);
}

/**
 * Render an inline SVG bar chart for combined violations over time from a single trend analysis.
 * @param {object} analysis
 * @param {number} [maxWidth=300]
 * @returns {string} SVG HTML string
 */
export function renderTrendSparkline(analysis, maxWidth = 300) {
  const points = [];
  if (analysis.baselineTotals) {
    points.push(analysis.baselineTotals.combined);
  }
  for (const d of analysis.diffs || []) {
    points.push(d.to.totals.combined);
  }
  if (points.length < 2) {
    return `<span style="color:#57606a;font-size:0.8rem">${points.length === 1 ? `${points[0]} violations (1 scan)` : "No data"}</span>`;
  }

  const W = maxWidth;
  const H = 36;
  const padL = 4, padR = 4, padT = 4, padB = 4;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxVal = Math.max(...points, 1);
  const barW = Math.max(4, Math.floor((chartW / points.length) * 0.65));
  const spacing = chartW / points.length;
  const bars = points.map((v, i) => {
    const bh = Math.max(1, Math.round((v / maxVal) * chartH));
    const x = padL + i * spacing + (spacing - barW) / 2;
    const y = padT + chartH - bh;
    const isLast = i === points.length - 1;
    const prev = i > 0 ? points[i - 1] : v;
    const fill = i === 0 ? "#0969da" : v < prev ? "#2da44e" : v > prev ? "#cf222e" : "#9a6700";
    return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${bh}" rx="1" fill="${fill}"${isLast ? ' stroke="#24292f" stroke-width="0.5"' : ""}/>`;
  }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block" focusable="false" aria-hidden="true">${bars}</svg>`;
}

/**
 * Generate the full trends.html page.
 * @param {Array<{issueNumber: number, scanTitle: string, analysis: object, reportPath: string}>} trendItems
 * @returns {string} Complete HTML document
 */
export function generateTrendsHtml(trendItems) {
  const totalIssues = trendItems.length;
  const improving = trendItems.filter((t) => t.analysis.overallTrend === "improving").length;
  const worsening = trendItems.filter((t) => t.analysis.overallTrend === "worsening").length;
  const stable = trendItems.filter((t) => t.analysis.overallTrend === "stable").length;
  const noHistory = trendItems.filter((t) => t.analysis.error).length;

  const systemicPatterns = aggregateSystemicPatterns(trendItems);

  const trendEmoji = { improving: "📈", worsening: "📉", stable: "➡️" };
  const trendClass = { improving: "improving", worsening: "worsening", stable: "stable" };

  const issueRows = trendItems.map(({ issueNumber, scanTitle, analysis, reportPath }) => {
    const latest = analysis.latestTotals;
    const baseline = analysis.baselineTotals;
    const scans = analysis.scansAnalysed ?? 1;
    const trend = analysis.overallTrend || "";
    const emoji = trendEmoji[trend] || "—";
    const tdClass = trendClass[trend] || "";
    const change = latest && baseline ? latest.combined - baseline.combined : null;
    const changeStr = change === null ? "—"
      : change === 0 ? "±0"
        : change > 0 ? `+${change}` : `${change}`;
    const changeCls = change === null ? "" : change < 0 ? "neg" : change > 0 ? "pos" : "";
    const sparkline = analysis.error ? `<em style="color:#57606a;font-size:0.8rem">Not enough data</em>` : renderTrendSparkline(analysis);
    const reportLink = reportPath ? `<a href="${escapeHtml(reportPath)}/report.html">Latest report</a>` : "";
    return `
      <tr>
        <td><a href="https://github.com/mgifford/open-scans/issues/${issueNumber}">#${issueNumber}</a></td>
        <td>${escapeHtml(scanTitle || `Issue #${issueNumber}`)}</td>
        <td class="trend-cell ${escapeHtml(tdClass)}">${emoji} ${escapeHtml(trend || "—")}</td>
        <td class="num">${latest ? latest.combined : "—"}</td>
        <td class="num ${escapeHtml(changeCls)}">${escapeHtml(changeStr)}</td>
        <td class="num">${scans}</td>
        <td class="sparkline-cell">${sparkline}</td>
        <td>${reportLink}</td>
      </tr>`;
  }).join("");

  const patternRows = systemicPatterns.map(({ ruleId, issueCount, totalPageCount }) => {
    const display = ruleId.replace(/^axe:/, "[axe] ").replace(/.*\/rules\//, "");
    return `
      <tr>
        <td class="rule-id"><code>${escapeHtml(display)}</code></td>
        <td class="num">${issueCount}</td>
        <td class="num">${totalPageCount}</td>
      </tr>`;
  }).join("");

  const generatedAt = new Date().toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Trends – Open Scans</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --primary: #0969da;
      --bg: #f6f8fa;
      --container-bg: #fff;
      --text: #24292f;
      --muted: #57606a;
      --border: #d0d7de;
      --success: #1a7f37;
      --danger: #cf222e;
      --warning: #9a6700;
      --surface: #f6f8fa;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --primary: #58a6ff;
        --bg: #0d1117;
        --container-bg: #161b22;
        --text: #e6edf3;
        --muted: #8b949e;
        --border: #30363d;
        --success: #3fb950;
        --danger: #ff7b72;
        --warning: #e3b341;
        --surface: #21262d;
      }
    }
    [data-theme="dark"] {
      --primary: #58a6ff; --bg: #0d1117; --container-bg: #161b22; --text: #e6edf3;
      --muted: #8b949e; --border: #30363d; --success: #3fb950; --danger: #ff7b72;
      --warning: #e3b341; --surface: #21262d;
    }
    [data-theme="light"] {
      --primary: #0969da; --bg: #f6f8fa; --container-bg: #fff; --text: #24292f;
      --muted: #57606a; --border: #d0d7de; --success: #1a7f37; --danger: #cf222e;
      --warning: #9a6700; --surface: #f6f8fa;
    }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; line-height: 1.6; color: var(--text); background: var(--bg); padding: 2rem; }
    .container { max-width: 1200px; margin: 0 auto; background: var(--container-bg); border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,.12); padding: 2rem; }
    .skip-link { position: absolute; top: -3rem; left: 0; background: var(--primary); color: #fff; padding: 0.5rem 1rem; text-decoration: none; font-weight: 600; z-index: 100; border-radius: 0 0 4px 4px; }
    .skip-link:focus { top: 0; }
    nav.site-nav { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
    nav.site-nav a { color: var(--primary); text-decoration: none; }
    nav.site-nav a:hover { text-decoration: underline; }
    nav.site-nav a[aria-current] { font-weight: 700; text-decoration: underline; }
    .theme-toggle { margin-left: auto; background: none; border: 1px solid var(--border); border-radius: 6px; color: var(--muted); cursor: pointer; padding: 0.3rem 0.5rem; font-size: 1rem; }
    .theme-toggle:focus-visible { outline: 2px solid var(--primary); }
    h1 { color: var(--primary); font-size: 1.75rem; margin-bottom: 0.5rem; }
    .subtitle { color: var(--muted); margin-bottom: 1.5rem; }
    .stats-bar { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem 1.25rem; min-width: 120px; text-align: center; }
    .stat-card .stat-value { font-size: 1.75rem; font-weight: 700; }
    .stat-card .stat-label { font-size: 0.8rem; color: var(--muted); }
    .improving .stat-value { color: var(--success); }
    .worsening .stat-value { color: var(--danger); }
    h2 { font-size: 1.2rem; margin: 2rem 0 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.4rem; color: var(--text); }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { padding: 0.5rem 0.75rem; text-align: left; border-bottom: 1px solid var(--border); }
    th { background: var(--surface); font-weight: 600; white-space: nowrap; }
    tr:hover { background: var(--surface); }
    td.num { text-align: right; font-variant-numeric: tabular-nums; }
    td.sparkline-cell { min-width: 160px; }
    td.rule-id { font-size: 0.8rem; word-break: break-all; }
    .trend-cell.improving { color: var(--success); font-weight: 600; }
    .trend-cell.worsening { color: var(--danger); font-weight: 600; }
    .trend-cell.stable { color: var(--warning); font-weight: 600; }
    td.neg { color: var(--success); font-weight: 600; }
    td.pos { color: var(--danger); font-weight: 600; }
    a { color: var(--primary); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    .no-data { color: var(--muted); padding: 2rem; text-align: center; }
    footer { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border); text-align: center; color: var(--muted); font-size: 0.875rem; }
    @media (max-width: 599px) { body { padding: 0.75rem; } .container { padding: 1rem; } }
  </style>
</head>
<body>
  <div class="container">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <nav class="site-nav" aria-label="Site navigation">
      <a href="index.html">Submit URLs</a>
      <a href="reports.html">All Reports</a>
      <a href="trends.html" aria-current="page">Trends</a>
      <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Switch to dark mode">🌙</button>
    </nav>

    <main id="main-content">
      <h1>Accessibility Trends</h1>
      <p class="subtitle">Cross-issue trend analysis based on historical scan data. Issues improve and worsen over time — this page helps track that.</p>

      <div class="stats-bar" aria-label="Summary statistics">
        <div class="stat-card"><div class="stat-value">${totalIssues}</div><div class="stat-label">Issues tracked</div></div>
        <div class="stat-card improving"><div class="stat-value">${improving}</div><div class="stat-label">📈 Improving</div></div>
        <div class="stat-card worsening"><div class="stat-value">${worsening}</div><div class="stat-label">📉 Worsening</div></div>
        <div class="stat-card"><div class="stat-value">${stable}</div><div class="stat-label">➡️ Stable</div></div>
        <div class="stat-card"><div class="stat-value">${noHistory}</div><div class="stat-label">⏳ Insufficient data</div></div>
      </div>

      <h2>📋 Issue Trend Summary</h2>
      ${trendItems.length === 0 ? '<p class="no-data">No trend data available yet. Trends are computed after recurring scans accumulate at least 2 runs.</p>' : `
      <div class="table-wrap">
        <table aria-label="Trend summary by issue">
          <thead>
            <tr>
              <th scope="col">Issue</th>
              <th scope="col">Title</th>
              <th scope="col">Trend</th>
              <th scope="col" style="text-align:right">Latest violations</th>
              <th scope="col" style="text-align:right">Change from baseline</th>
              <th scope="col" style="text-align:right">Scans</th>
              <th scope="col">History</th>
              <th scope="col">Report</th>
            </tr>
          </thead>
          <tbody>${issueRows}</tbody>
        </table>
      </div>`}

      <h2>🔵 Systemic Patterns Leaderboard</h2>
      <p style="font-size:0.875rem;color:var(--muted);margin-bottom:0.75rem">Rules failing across the most pages, aggregated across all tracked issues.</p>
      ${systemicPatterns.length === 0 ? '<p class="no-data">No systemic patterns found yet.</p>' : `
      <div class="table-wrap">
        <table aria-label="Systemic accessibility rule failures across issues">
          <thead>
            <tr>
              <th scope="col">Rule</th>
              <th scope="col" style="text-align:right">Issues affected</th>
              <th scope="col" style="text-align:right">Total pages affected</th>
            </tr>
          </thead>
          <tbody>${patternRows}</tbody>
        </table>
      </div>`}
    </main>

    <footer>
      <p>Generated by <a href="https://github.com/mgifford/open-scans">open-scans</a> · <time datetime="${escapeHtml(generatedAt)}">${new Date(generatedAt).toLocaleString()}</time></p>
    </footer>
  </div>

  <script>
  (function () {
    var stored = null;
    try { stored = localStorage.getItem('open-scans-theme'); } catch (e) {}
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      try { localStorage.setItem('open-scans-theme', next); } catch (e) {}
    });
  }());
  </script>
</body>
</html>`;
}

/** Main entry point */
export function main() {
  const reportsDir = process.argv[2] || "reports";
  const outputFile = process.argv[3] || "trends.html";

  console.error(`Scanning for trends in: ${reportsDir}`);
  const trendItems = loadAllTrends(reportsDir);
  console.error(`Found trends.json for ${trendItems.length} issue(s)`);

  const html = generateTrendsHtml(trendItems);
  writeFileSync(outputFile, html, "utf8");
  console.error(`Generated ${outputFile}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
