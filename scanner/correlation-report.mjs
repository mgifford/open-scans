/**
 * Report fragments for multi-engine evidence.
 *
 * These renderers are pure: they take the observation and correlation
 * artifacts and return Markdown or HTML. They never decide equivalence; they
 * only present what correlation already established, including what could not
 * be established.
 *
 * Accessibility notes for the HTML fragments:
 * - semantic headings, one section landmark per concern;
 * - tables with captions and scoped headers;
 * - native <details>/<summary> disclosure controls (keyboard operable);
 * - counts as definition lists, so no figure relies on colour or position;
 * - a filter is a fieldset of radio buttons plus an aria-live status message.
 *
 * @module correlation-report
 */

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Escape values interpolated into Markdown.
 *
 * GitHub sanitises raw HTML in Markdown, but other consumers may not, and a
 * report artifact is a published document. Escaping angle brackets and pipes
 * keeps engine-supplied text inert and tables intact.
 */
function escapeMarkdown(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("|", "\\|");
}

function labelForEngine(engine, observationsArtifact) {
  const labels = {
    axe: "axe",
    alfa: "ALFA",
    equalAccess: "Equal Access",
    accesslint: "AccessLint",
    sa11y: "Sa11y",
    qualweb: "QualWeb"
  };
  return labels[engine] ?? engine;
}

export function correlationCountRows(correlation) {
  const counts = correlation?.counts ?? {};
  return [
    ["Raw engine observations", counts.rawObservations ?? 0],
    ["Correlated issues (2+ engines, same resolved target)", counts.correlatedIssues ?? 0],
    ["Verified cross-engine equivalents", counts.verifiedEquivalentFindings ?? 0],
    ["Equivalent but version-mismatched mappings", counts.versionMismatchedFindings ?? 0],
    ["Inferred equivalents (no ACT mapping)", counts.inferredEquivalentFindings ?? 0],
    ["Single-engine findings", counts.singleEngineFindings ?? 0],
    ["Related but distinct findings", counts.relatedFindings ?? 0],
    ["Target disagreements", counts.targetDisagreements ?? 0],
    ["Not comparable (different test conditions)", counts.notComparableObservations ?? 0],
    ["Insufficient evidence (unresolved target or unmapped rule)", counts.insufficientEvidenceObservations ?? 0]
  ];
}

/** Page × engine observation counts. */
export function buildPageMatrix(observations, correlation) {
  const pages = new Map();
  for (const observation of observations?.observations ?? []) {
    const page = observation.url;
    if (!pages.has(page)) pages.set(page, new Map());
    const row = pages.get(page);
    row.set(observation.engine.name, (row.get(observation.engine.name) ?? 0) + 1);
  }

  const engines = [...new Set(
    (observations?.observations ?? []).map((observation) => observation.engine.name)
  )].sort();

  return [...pages.entries()]
    .map(([url, counts]) => ({ url, counts, total: [...counts.values()].reduce((a, b) => a + b, 0) }))
    .sort((a, b) => b.total - a.total || a.url.localeCompare(b.url))
    .slice(0, 25)
    .map((row) => ({ ...row, engines }));
}

function enginesOf(document) {
  return document?.engines ?? [];
}

/**
 * Markdown fragment for the multi-engine evidence section.
 *
 * @param {{correlation: object, observations: object}} input
 * @returns {string}
 */
export function renderCorrelationMarkdown({ correlation, observations }) {
  if (!correlation) return "";

  const lines = [];
  lines.push("## 🔗 Multi-engine evidence");
  lines.push("");
  lines.push("Raw observations are never merged by this section. A correlated issue needs the same resolved target and a compatible failure mechanism.");
  lines.push("");

  for (const [label, value] of correlationCountRows(correlation)) {
    lines.push(`- ${label}: ${value}`);
  }
  lines.push("");

  const matrix = buildPageMatrix(observations, correlation);
  if (matrix.length > 0) {
    lines.push("### Observations per page and engine");
    lines.push("");
    lines.push(`| Page | ${matrix[0].engines.join(" | ")} |`);
    lines.push(`|:---|---:${matrix[0].engines.map(() => "---:").join("|")}|`);
    for (const row of matrix) {
      const cells = row.engines.map((engine) => row.counts.get(engine) ?? 0);
      lines.push(`| ${escapeMarkdown(row.url)} | ${cells.join(" | ")} |`);
    }
    lines.push("");
  }

  if (correlation.issues.length > 0) {
    lines.push("### Correlated findings");
    lines.push("");
    for (const issue of correlation.issues) {
      lines.push(`#### ${escapeMarkdown(issue.familyLabel || issue.family)} — ${escapeMarkdown(issue.url)}`);
      lines.push("");
      lines.push(`- Target: \`${escapeMarkdown(issue.targetId)}\` (resolved)`);
      lines.push(`- Engines: ${issue.engines.map((engine) => escapeMarkdown(labelForEngine(engine))).join(", ")}`);
      lines.push(`- ACT rules: ${issue.actRuleIds.length > 0 ? issue.actRuleIds.map(escapeMarkdown).join(", ") : "none verified"}`);
      lines.push(`- Mapping status: ${escapeMarkdown(issue.mappingStatus)}`);
      lines.push(`- Correlation rationale: ${escapeMarkdown(issue.rationale)}`);
      lines.push("");
      lines.push("| Engine | Native rule | Locator | Resolution | Raw evidence |");
      lines.push("|---|---|---|---|---|");
      for (const observation of issue.observations) {
        lines.push(
          `| ${escapeMarkdown(labelForEngine(observation.engine))} | \`${escapeMarkdown(observation.ruleId)}\` | \`${escapeMarkdown(observation.nativeLocator ?? "(none)")}\` | ${escapeMarkdown(observation.resolutionMethod)} | \`${escapeMarkdown(observation.rawEvidenceRef)}\` |`
        );
      }
      lines.push("");
    }
  } else {
    lines.push("### Correlated findings");
    lines.push("");
    lines.push("No two engines reported the same failure mechanism on the same resolved target in this scan.");
    lines.push("");
  }

  lines.push("### Target disagreements");
  lines.push("");
  if (correlation.disagreements.length === 0) {
    lines.push("No engine reported the same failure mechanism on different targets.");
  } else {
    for (const disagreement of correlation.disagreements) {
      lines.push(`- ${escapeMarkdown(disagreement.family)} on ${escapeMarkdown(disagreement.url)}: ${disagreement.targets.length} distinct targets. ${escapeMarkdown(disagreement.note)}`);
    }
  }
  lines.push("");

  lines.push("### Related but distinct");
  lines.push("");
  if (correlation.related.length === 0) {
    lines.push("No target had two different failure mechanisms reported.");
  } else {
    for (const related of correlation.related) {
      lines.push(`- ${escapeMarkdown(related.url)} — ${related.families.map(escapeMarkdown).join(" + ")} (${escapeMarkdown(related.note)})`);
    }
  }
  lines.push("");

  return lines.join("\n");
}

/**
 * HTML fragment for the multi-engine evidence section.
 *
 * @param {{correlation: object, observations: object}} input
 * @returns {string}
 */
export function renderCorrelationHtml({ correlation, observations }) {
  if (!correlation) return "";

  const parts = [];
  const esc = escapeHtml;

  parts.push(`
    <section id="multi-engine-evidence" aria-labelledby="multi-engine-heading" class="corr-section">
      <h2 id="multi-engine-heading">Multi-engine evidence</h2>
      <p>Raw observations are never merged by this section. A correlated issue needs the same
      resolved target and a compatible failure mechanism; a shared WCAG criterion, ACT rule or
      locator string is not enough.</p>
      <h3 id="corr-counts-heading">What each engine contributed</h3>
      <dl class="corr-counts" aria-labelledby="corr-counts-heading">
        ${correlationCountRows(correlation)
          .map(([label, value]) => `<dt>${esc(label)}</dt><dd>${esc(value)}</dd>`)
          .join("\n        ")}
      </dl>`);

  const matrix = buildPageMatrix(observations, correlation);
  if (matrix.length > 0) {
    parts.push(`
      <h3 id="corr-matrix-heading">Observations per page and engine</h3>
      <div class="table-scroll">
        <table class="corr-table" aria-labelledby="corr-matrix-heading">
          <caption>Counts of retained failures per page for each engine that reported at least one.</caption>
          <thead>
            <tr>
              <th scope="col">Page</th>
              ${enginesOf(matrix[0]).map((engine) => `<th scope="col">${esc(labelForEngine(engine))}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${matrix
              .map(
                (row) => `<tr>
              <th scope="row">${esc(row.url)}</th>
              ${enginesOf(matrix[0])
                .map((engine) => `<td>${esc(row.counts.get(engine) ?? 0)}</td>`)
                .join("")}
            </tr>`
              )
              .join("\n            ")}
          </tbody>
        </table>
      </div>`);
  }

  parts.push(`
      <h3 id="corr-findings-heading">Correlated findings</h3>`);

  if (correlation.issues.length === 0) {
    parts.push(`
      <p>No two engines reported the same failure mechanism on the same resolved target in this scan.</p>`);
  } else {
    parts.push(`
      <fieldset class="corr-filter">
        <legend>Filter correlated findings</legend>
        <p class="corr-filter-hint">Filtering changes which findings are shown, never the counts above.</p>
        <div class="corr-filter-options">
          <label><input type="radio" name="corr-filter" value="all" checked> All correlated findings</label>
          <label><input type="radio" name="corr-filter" value="verified"> ACT-verified only</label>
          <label><input type="radio" name="corr-filter" value="inferred"> Inferred semantics only</label>
        </div>
      </fieldset>
      <p id="corr-filter-status" role="status" aria-live="polite">Showing all ${correlation.issues.length} correlated findings.</p>
      <ul class="corr-issues">
        ${correlation.issues
          .map((issue) => {
            const filterClass = issue.mappingStatus === "act-verified" ? "verified" : "inferred";
            return `<li data-mapping="${esc(filterClass)}">
          <details>
            <summary>${esc(issue.familyLabel || issue.family)} — ${esc(issue.url)} <span class="corr-tag">${esc(issue.mappingStatus)}</span></summary>
            <p><strong>Resolved target:</strong> <code>${esc(issue.targetId)}</code></p>
            <p><strong>Engines:</strong> ${esc(issue.engines.map((engine) => labelForEngine(engine)).join(", "))}</p>
            <p><strong>ACT rules:</strong> ${esc(issue.actRuleIds.length > 0 ? issue.actRuleIds.join(", ") : "none verified")}</p>
            <p>${esc(issue.rationale)}</p>
            <table class="corr-table">
              <caption>Evidence from each engine for this correlated finding</caption>
              <thead>
                <tr><th scope="col">Engine</th><th scope="col">Native rule</th><th scope="col">Locator</th><th scope="col">Resolution</th><th scope="col">Raw evidence</th></tr>
              </thead>
              <tbody>
                ${issue.observations
                  .map(
                    (observation) => `<tr>
                  <th scope="row">${esc(labelForEngine(observation.engine))}</th>
                  <td><code>${esc(observation.ruleId)}</code></td>
                  <td><code>${esc(observation.nativeLocator ?? "(none)")}</code></td>
                  <td>${esc(observation.resolutionMethod)}</td>
                  <td><code>${esc(observation.rawEvidenceRef)}</code></td>
                </tr>`
                  )
                  .join("\n                ")}
              </tbody>
            </table>
          </details>
        </li>`;
          })
          .join("\n        ")}
      </ul>`);
  }

  parts.push(`
      <h3 id="corr-disagreements-heading">Target disagreements</h3>`);

  if (correlation.disagreements.length === 0) {
    parts.push(`<p>No engine reported the same failure mechanism on different targets.</p>`);
  } else {
    parts.push(`
      <table class="corr-table" aria-labelledby="corr-disagreements-heading">
        <caption>Engines that reported the same failure mechanism on different elements. Equivalence is not claimed.</caption>
        <thead><tr><th scope="col">Page</th><th scope="col">Failure mechanism</th><th scope="col">Distinct targets</th></tr></thead>
        <tbody>
          ${correlation.disagreements
            .map(
              (disagreement) => `<tr>
            <th scope="row">${esc(disagreement.url)}</th>
            <td>${esc(disagreement.family)}</td>
            <td>${esc(disagreement.targets.length)}</td>
          </tr>`
            )
            .join("\n          ")}
        </tbody>
      </table>`);
  }

  parts.push(`
      <h3 id="corr-related-heading">Related but distinct</h3>`);

  if (correlation.related.length === 0) {
    parts.push(`<p>No target had two different failure mechanisms reported.</p>`);
  } else {
    parts.push(`
      <ul>
        ${correlation.related
          .map(
            (related) =>
              `<li>${esc(related.url)} — ${esc(related.families.join(" + "))} (${esc(related.note)})</li>`
          )
          .join("\n        ")}
      </ul>`);
  }

  parts.push(`
    </section>
    <script>
      (function () {
        const radios = document.querySelectorAll('input[name="corr-filter"]');
        const status = document.getElementById('corr-filter-status');
        const items = Array.from(document.querySelectorAll('.corr-issues li'));
        if (!radios.length || !status || !items.length) return;
        function apply(value) {
          let shown = 0;
          items.forEach(function (item) {
            const match = value === 'all' || item.getAttribute('data-mapping') === value;
            item.hidden = !match;
            if (match) shown += 1;
          });
          status.textContent = 'Showing ' + shown + ' of ' + items.length + ' correlated findings.';
        }
        radios.forEach(function (radio) {
          radio.addEventListener('change', function () {
            if (radio.checked) apply(radio.value);
          });
        });
      })();
    </script>`);

  return parts.join("\n");
}
