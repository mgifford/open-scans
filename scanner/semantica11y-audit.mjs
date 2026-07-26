/**
 * Semantica11y (WCAG 4.1.2 / semantic-HTML & ARIA usage): runs against the
 * already-rendered HTML captured during the axe audit, so it needs no
 * browser of its own. It reports severity-tagged suggestions (error,
 * warning, suggestion), not pass/fail rule counts, so it gets its own
 * result shape rather than sharing axe/alfa's counts/failedRules shape —
 * same reasoning as scanner/reflow-risk.mjs.
 */

let semantica11yModule = null;

async function loadSemantica11y() {
  if (!semantica11yModule) {
    try {
      semantica11yModule = await import("semantica11y");
    } catch (error) {
      console.warn("semantica11y not available:", error.message);
    }
  }
  return semantica11yModule;
}

function createSemantica11yBaseError(errorMessage = null) {
  return {
    executed: false,
    summary: null,
    issues: [],
    error: errorMessage
  };
}

/**
 * @param {string|null} html - rendered HTML captured from the page (e.g. axe's page.content())
 * @param {string} url - page URL, passed through for Semantica11y's own reporting
 * @returns {Promise<object>} result in the createSemantica11yBaseError shape
 */
export async function runSemantica11yAudit(html, url) {
  const base = createSemantica11yBaseError(null);

  if (!html) {
    return { ...base, error: "No rendered HTML available for analysis" };
  }

  const mod = await loadSemantica11y();
  if (!mod?.Analyzer) {
    return { ...base, error: "semantica11y not available" };
  }

  try {
    const analyzer = new mod.Analyzer();
    const results = await analyzer.analyzeHTML(html, url);

    return {
      executed: true,
      summary: results.summary,
      issues: results.issues || [],
      error: null
    };
  } catch (error) {
    return { ...base, error: error instanceof Error ? error.message : String(error) };
  }
}

export { createSemantica11yBaseError };
