/**
 * Report rendering for assessment coverage and the local assessment workspace.
 *
 * The rendered HTML is the source of truth: the browser runtime only enhances
 * what is already here. With JavaScript disabled a reader still gets the coverage
 * table, the missing-evidence notice, every procedure's steps and limitations,
 * and the import/export guidance. Interactive controls are marked `.js-only` and
 * stay hidden until the runtime confirms it is running.
 *
 * @module assessment/render
 */
import { OUTCOMES, METHODS, VERIFICATION_STATES, PATHWAYS } from "./procedures.mjs";
import { listProcedures } from "./procedures.mjs";

const HTML_ESCAPES = Object.freeze({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" });

/** Escape text for HTML content and attribute values. */
export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => HTML_ESCAPES[character]);
}

/** Only emit a link for absolute http(s) URLs. */
export function safeHref(value) {
  try {
    const url = new URL(String(value ?? ""));
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function slug(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function truncateSha(hash) {
  return typeof hash === "string" && hash.length >= 12 ? `${hash.slice(0, 12)}…` : String(hash ?? "unknown");
}

const EVIDENCE_STATE_LABELS = Object.freeze({
  observed: "Rule result observed",
  "not-observed": "Mapped rule, no result",
  "no-automated-rules": "No mapped rule"
});

function evidenceStateClass(state) {
  if (state === "observed") return "assessment-state--observed";
  if (state === "not-observed") return "assessment-state--unknown";
  return "assessment-state--none";
}

function outcomeOptions(selected) {
  return OUTCOMES.map(
    (outcome) =>
      `<option value="${escapeHtml(outcome.id)}"${outcome.id === selected ? " selected" : ""}>${escapeHtml(outcome.label)}</option>`
  ).join("");
}

function methodOptions(selected) {
  return METHODS.map(
    (method) =>
      `<option value="${escapeHtml(method.id)}"${method.id === selected ? " selected" : ""}>${escapeHtml(method.label)}</option>`
  ).join("");
}

function verificationOptions(selected = "unreviewed") {
  return VERIFICATION_STATES.map(
    (state) =>
      `<option value="${escapeHtml(state.id)}"${state.id === selected ? " selected" : ""}>${escapeHtml(state.label)}</option>`
  ).join("");
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * CSS for the assessment surfaces. Appended to the report's single `<style>`
 * block so the downloaded report has no external stylesheet.
 */
export const ASSESSMENT_CSS = `
    /* ── Assessment coverage and manual assessment ── */
    .assessment-intro { max-width: 72ch; }
    .assessment-meta { color: var(--muted); font-size: 0.9rem; margin: 0.25rem 0 1rem; }
    .assessment-meta code { background: var(--code-bg); padding: 0.1rem 0.3rem; border-radius: 4px; }
    .assessment-notice { border: 2px solid var(--moderate); background: var(--surface); border-radius: 8px; padding: 1rem 1.25rem; margin: 1rem 0 1.5rem; }
    .assessment-notice h3 { margin: 0 0 0.5rem; font-size: 1.15rem; }
    .assessment-notice p { margin: 0.35rem 0; max-width: 72ch; }
    .assessment-notice ul { margin: 0.5rem 0 0; padding-left: 1.25rem; }
    .assessment-notice li { margin: 0.25rem 0; }
    .assessment-counts { display: grid; gap: 0.5rem; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); margin: 1rem 0; }
    .assessment-count { border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.75rem; background: var(--container-bg); }
    .assessment-count dt { font-size: 0.85rem; color: var(--muted); }
    .assessment-count dd { margin: 0.15rem 0 0; font-weight: 600; font-variant-numeric: tabular-nums; }
    .assessment-count .assessment-count-context { display: block; font-weight: 400; font-size: 0.85rem; color: var(--muted); }
    .assessment-filters { border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem; margin: 1rem 0; background: var(--surface); display: flex; flex-wrap: wrap; gap: 0.75rem 1rem; align-items: flex-end; }
    .assessment-filter { display: flex; flex-direction: column; gap: 0.25rem; min-width: 11rem; }
    .assessment-filter label { font-size: 0.85rem; font-weight: 600; }
    .assessment-filter select, .assessment-filter input { font: inherit; padding: 0.3rem 0.4rem; border: 1px solid var(--border); border-radius: 4px; background: var(--container-bg); color: var(--text); max-width: 20rem; }
    .assessment-limitations { border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; margin: 0.75rem 0 1rem; background: var(--surface); }
    .assessment-limitations summary { cursor: pointer; font-weight: 600; }
    .assessment-limitations ul { margin: 0.5rem 0 0; padding-left: 1.25rem; max-width: 72ch; }
    .assessment-table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 6px; }
    .assessment-table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
    .assessment-table caption { text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; }
    .assessment-table th, .assessment-table td { border-bottom: 1px solid var(--border); padding: 0.5rem 0.6rem; text-align: left; vertical-align: top; }
    .assessment-table thead th { background: var(--surface); position: sticky; top: 0; font-size: 0.85rem; }
    .assessment-table tbody tr:last-child td, .assessment-table tbody tr:last-child th { border-bottom: none; }
    .assessment-table th[scope="row"] { font-weight: 400; min-width: 13rem; }
    .assessment-table .assessment-criterion-id { font-weight: 700; white-space: nowrap; }
    .assessment-table details { margin-top: 0.25rem; }
    .assessment-table details summary { cursor: pointer; font-size: 0.85rem; }
    .assessment-table details ul { margin: 0.35rem 0 0; padding-left: 1.1rem; }
    .assessment-table details li { margin: 0.2rem 0; max-width: 46ch; }
    .assessment-state { display: inline-block; padding: 0.05rem 0.45rem; border-radius: 999px; border: 1px solid currentColor; font-size: 0.8rem; font-weight: 600; white-space: nowrap; }
    .assessment-state--observed { color: var(--success); }
    .assessment-state--unknown { color: var(--moderate); }
    .assessment-state--none { color: var(--muted); }
    .assessment-procedure-links { margin: 0; padding-left: 1.1rem; }
    .assessment-procedure-links li { margin: 0.15rem 0; }
    .assessment-review-cell[data-review-outcome="failed"] { font-weight: 600; }
    .assessment-empty { color: var(--muted); }
    .assessment-toolbar { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin: 1rem 0; }
    .assessment-status { border-left: 4px solid var(--primary); background: var(--surface); padding: 0.5rem 0.75rem; margin: 0.75rem 0; border-radius: 0 4px 4px 0; }
    .assessment-status--warn { border-left-color: var(--serious); }
    .assessment-procedure { border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem 1rem; margin: 1rem 0; background: var(--container-bg); }
    .assessment-procedure h4 { margin: 0 0 0.35rem; font-size: 1.05rem; }
    .assessment-procedure .assessment-badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.5rem; }
    .assessment-procedure .assessment-badge { border: 1px solid var(--border); border-radius: 999px; padding: 0.05rem 0.5rem; font-size: 0.78rem; color: var(--muted); }
    .assessment-badge--signal { color: var(--moderate); border-color: currentColor; margin: 0.1rem 0; display: inline-block; }
    .assessment-visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
    .assessment-inventory-table { font-size: 0.85rem; }
    .assessment-inventory-table td { max-width: 32ch; overflow-wrap: anywhere; }
    .assessment-element-summary { border-left: 4px solid var(--primary); background: var(--surface); padding: 0.5rem 0.75rem; border-radius: 0 4px 4px 0; }
    .assessment-element-summary p { margin: 0; }
    .assessment-procedure ol, .assessment-procedure ul { margin: 0.35rem 0; padding-left: 1.25rem; max-width: 72ch; }
    .assessment-procedure li { margin: 0.2rem 0; }
    .assessment-procedure summary { cursor: pointer; }
    .assessment-procedure .assessment-refs { font-size: 0.85rem; color: var(--muted); }
    .assessment-form { border-top: 1px solid var(--border); margin-top: 0.75rem; padding-top: 0.75rem; display: grid; gap: 0.6rem; max-width: 46rem; }
    .assessment-form fieldset { border: 1px solid var(--border); border-radius: 4px; padding: 0.5rem 0.75rem; margin: 0; }
    .assessment-form legend { font-weight: 600; font-size: 0.9rem; padding: 0 0.25rem; }
    .assessment-field { display: flex; flex-direction: column; gap: 0.25rem; }
    .assessment-field label, .assessment-form legend { font-size: 0.9rem; }
    .assessment-field select, .assessment-field input, .assessment-field textarea { font: inherit; padding: 0.35rem 0.45rem; border: 1px solid var(--border); border-radius: 4px; background: var(--container-bg); color: var(--text); }
    .assessment-field textarea { min-height: 4rem; resize: vertical; }
    .assessment-field-row { display: grid; gap: 0.6rem; grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); }
    .assessment-help { font-size: 0.85rem; color: var(--muted); margin: 0; max-width: 60ch; }
    .assessment-errors { border: 2px solid var(--critical); border-radius: 4px; padding: 0.5rem 0.75rem; margin: 0.5rem 0; }
    .assessment-errors:empty { display: none; }
    .assessment-errors ul { margin: 0.35rem 0 0; padding-left: 1.25rem; }
    .assessment-records { overflow-x: auto; margin-top: 0.75rem; }
    .assessment-records table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
    .assessment-records th, .assessment-records td { border-bottom: 1px solid var(--border); padding: 0.45rem 0.55rem; text-align: left; vertical-align: top; }
    .assessment-records thead th { background: var(--surface); }
    .assessment-record-actions { display: flex; flex-wrap: wrap; gap: 0.35rem; }
    .assessment-record-actions .btn { font-size: 0.8rem; padding: 0.2rem 0.5rem; }
    .assessment-preview { border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem; margin: 0.75rem 0; background: var(--surface); }
    .assessment-preview dl { display: grid; grid-template-columns: max-content 1fr; gap: 0.25rem 0.75rem; margin: 0.5rem 0; }
    .assessment-preview dt { font-weight: 600; }
    .assessment-preview dd { margin: 0; }
    .assessment-issue-output { display: grid; gap: 0.4rem; margin-top: 0.75rem; }
    .assessment-issue-output textarea { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.82rem; min-height: 12rem; }
    .assessment-conflict { border-left: 4px solid var(--serious); padding-left: 0.6rem; }
    .assessment-hidden { display: none !important; }
    html:not(.js) .js-only { display: none !important; }
    .assessment-no-js { border: 1px dashed var(--border); border-radius: 6px; padding: 0.75rem; margin: 1rem 0; }
    html.js .assessment-no-js { display: none; }
    @media (forced-colors: active) {
      .assessment-notice, .assessment-procedure, .assessment-count, .assessment-preview { border: 2px solid CanvasText; }
      .assessment-state { border: 1px solid CanvasText; }
    }
    @media print {
      .assessment-filters, .assessment-toolbar, .assessment-form, .js-only { display: none !important; }
      .assessment-table-wrap, .assessment-records { overflow: visible; }
    }
`;

function renderCountCards(coverage) {
  const counts = coverage.counts;
  const totalAaa = counts.criteriaByLevel.AAA;
  const cards = [
    {
      term: "Success criteria in this catalogue",
      value: `${counts.criteriaTotal}`,
      context: `Level A: ${counts.criteriaByLevel.A} · Level AA: ${counts.criteriaByLevel.AA} · Level AAA: ${totalAaa}`
    },
    {
      term: "Criteria with a mapped automated rule",
      value: `${counts.withAutomatedRuleMapped} of ${counts.criteriaTotal}`,
      context: "Mapped is not evaluated: a rule tests specific conditions, not the whole criterion."
    },
    {
      term: "Criteria where an automated rule produced a result",
      value: `${counts.withAutomatedRuleObserved} of ${counts.criteriaTotal}`,
      context: `${counts.observedWithoutViolation} without a reported violation, ${counts.observedWithViolation} with at least one.`
    },
    {
      term: "Criteria with no mapped automated rule",
      value: `${counts.noAutomatedRuleMapped} of ${counts.criteriaTotal}`,
      context: "Automated scanning cannot exercise these criteria at all."
    },
    {
      term: "Criteria with a manual procedure",
      value: `${counts.withManualProcedure} of ${counts.criteriaTotal}`,
      context: "Procedures guide a human review. They are not automated tests."
    },
    {
      term: "Criteria with a recorded human assessment",
      value: "0 recorded",
      context: "This report contains no human assessment records yet. Testing may have been done elsewhere."
    }
  ];
  return `<dl class="assessment-counts">
      ${cards
        .map(
          (card) => `<div class="assessment-count"><dt>${escapeHtml(card.term)}</dt><dd>${escapeHtml(card.value)}<span class="assessment-count-context">${escapeHtml(card.context)}</span></dd></div>`
        )
        .join("\n      ")}
    </dl>`;
}

function renderCoverageRow(criterion, proceduresById) {
  const automated = criterion.automated;
  const potentialCount =
    automated.potential.axe.length + automated.potential.alfa.length + automated.potential.act.length;
  const observedCount =
    automated.observed.axe.length + automated.observed.alfa.length + automated.observed.act.length;
  const failedCount = automated.failed.length;

  const observedRules = [
    ...automated.observed.axe.map((rule) => `axe: ${rule}`),
    ...automated.observed.alfa.map((rule) => `ALFA: ${rule}`),
    ...automated.observed.act.map((rule) => `ACT: ${rule}`)
  ];

  const ruleList = observedRules.length
    ? `<p class="assessment-help">Rules with a result: ${escapeHtml(observedRules.join("; "))}</p>`
    : `<p class="assessment-help assessment-empty">No rule produced a result.</p>`;

  const procedureLinks = criterion.manual.procedures.length
    ? `<ul class="assessment-procedure-links">${criterion.manual.procedures
        .map((id) => {
          const procedure = proceduresById.get(id);
          if (!procedure) return "";
          return `<li><a href="#procedure-${escapeHtml(slug(id))}">${escapeHtml(procedure.title)}</a></li>`;
        })
        .join("")}</ul>`
    : `<span class="assessment-empty">No procedure in this catalogue addresses this criterion directly.</span>`;

  const arrm = criterion.manual.arrmTaskIds.length
    ? `<span class="assessment-refs">ARRM tasks: ${escapeHtml(criterion.manual.arrmTaskIds.slice(0, 6).join(", "))}${
        criterion.manual.arrmTaskIds.length > 6 ? ` (+${criterion.manual.arrmTaskIds.length - 6} more)` : ""
      }</span>`
    : "";

  const gaps = criterion.gaps
    .slice(0, 4)
    .map((gap) => `<li>${escapeHtml(gap)}</li>`)
    .join("");

  return `<tr data-criterion-row data-criterion-id="${escapeHtml(criterion.id)}" data-level="${escapeHtml(
    criterion.level
  )}" data-evidence-state="${escapeHtml(automated.state)}" data-review-state="none" data-categories="${escapeHtml(
    proceduresById.size
      ? [...new Set(criterion.manual.procedures.map((id) => proceduresById.get(id)?.category).filter(Boolean))].join(" ")
      : ""
  )}" data-roles="${escapeHtml(criterion.manual.roles.join(" "))}">
        <th scope="row">
          <span class="assessment-criterion-id">${escapeHtml(criterion.id)}</span>
          ${safeHref(criterion.url) ? `<a href="${escapeHtml(safeHref(criterion.url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(criterion.title)}</a>` : escapeHtml(criterion.title)}
          <details>
            <summary>What this does and does not establish</summary>
            <ul>${gaps}</ul>
          </details>
        </th>
        <td>${escapeHtml(criterion.level)}</td>
        <td>
          <span class="assessment-state ${evidenceStateClass(automated.state)}">${escapeHtml(
            EVIDENCE_STATE_LABELS[automated.state] ?? automated.state
          )}</span>
          <div class="assessment-meta">${observedCount} of ${potentialCount} mapped rule(s) produced a result${
            failedCount > 0 ? `, ${failedCount} with a reported violation` : ""
          }.</div>
          ${ruleList}
        </td>
        <td>${procedureLinks}${arrm}</td>
        <td class="assessment-review-cell" data-review-cell="${escapeHtml(
          criterion.id
        )}" data-review-outcome="none"><span class="assessment-empty">No assessment recorded</span></td>
      </tr>`;
}

/**
 * Render the coverage section. Available in automated-only reports.
 *
 * @param {object} coverage `a11y-assessment-coverage/1`
 * @param {{catalogue?: object}} [options]
 */
export function renderAssessmentCoverage(coverage) {
  if (!coverage?.criteria?.length) return "";
  const proceduresById = new Map(listProcedures().map((procedure) => [procedure.id, procedure]));
  const identity = coverage.catalogue ?? {};
  const target = coverage.conformanceTarget ?? {};

  // The report's conformance target frames which criteria are shown as rows.
  // Level AAA criteria stay in the catalogue count and are listed separately:
  // hiding them would hide the unknown, and rendering them as rows would imply
  // they are part of the stated target.
  const shownLevels = new Set(["A", "AA"]);
  if ((target.level ?? "AA") === "AAA") shownLevels.add("AAA");
  const shownCriteria = coverage.criteria.filter((criterion) => shownLevels.has(criterion.level));
  const notTargetCriteria = coverage.criteria.filter((criterion) => !shownLevels.has(criterion.level));
  const rows = shownCriteria.map((criterion) => renderCoverageRow(criterion, proceduresById)).join("\n        ");

  const levels = [...new Set(shownCriteria.map((criterion) => criterion.level))];
  const categories = [...new Set(listProcedures().map((procedure) => procedure.category))].sort();
  const roles = [...new Set(listProcedures().flatMap((procedure) => procedure.roles))].sort();
  return `<section id="assessment-coverage" aria-labelledby="assessment-coverage-heading">
      <h2 id="assessment-coverage-heading" class="section-heading" tabindex="-1">
        Accessibility assessment coverage
        <a href="#assessment-coverage" class="anchor-link" aria-label="Link to Accessibility assessment coverage section">
          <span aria-hidden="true">#</span>
        </a>
      </h2>
      <p class="assessment-intro">
        Automated rules evaluate defined conditions under specific circumstances. A rule mapped to a
        WCAG success criterion has not evaluated the whole criterion, and the absence of automated
        findings is not evidence of conformance. This section shows which criteria have automated
        evidence, which do not, and what a human still needs to review.
      </p>
      <p class="assessment-meta">
        Catalogue: <code>${escapeHtml(identity.catalogueVersion ?? "unknown")}</code>
        · WCAG ${escapeHtml(String(target.wcagVersion ?? identity.wcagVersion ?? "2.2"))}
        · Conformance target: Level ${escapeHtml(String(target.level ?? "AA"))}
        · Snapshot generated ${escapeHtml(identity.generated ?? "unknown")}
        · Content hash <code>${escapeHtml(truncateSha(identity.contentSha256))}</code>
      </p>
      ${renderCountCards(coverage)}

      <details class="assessment-limitations">
        <summary>Limitations of this scan's automation</summary>
        <ul>
          ${(coverage.automationLimitations ?? coverage.limitations ?? [])
            .map((limitation) => `<li>${escapeHtml(limitation)}</li>`)
            .join("")}
        </ul>
      </details>

      <div class="assessment-filters js-only" role="group" aria-labelledby="assessment-filter-heading">
        <h3 id="assessment-filter-heading" class="assessment-filter-heading">Filter criteria</h3>
        <div class="assessment-filter">
          <label for="assessment-filter-level">WCAG level</label>
          <select id="assessment-filter-level" data-assessment-filter="level">
            <option value="all">All levels</option>
            ${levels.map((level) => `<option value="${escapeHtml(level)}">Level ${escapeHtml(level)}</option>`).join("")}
          </select>
        </div>
        <div class="assessment-filter">
          <label for="assessment-filter-evidence">Automated evidence</label>
          <select id="assessment-filter-evidence" data-assessment-filter="evidence">
            <option value="all">Any automated evidence</option>
            <option value="observed">Rule result observed</option>
            <option value="not-observed">Mapped rule, no result</option>
            <option value="no-automated-rules">No mapped rule</option>
          </select>
        </div>
        <div class="assessment-filter">
          <label for="assessment-filter-review">Human review</label>
          <select id="assessment-filter-review" data-assessment-filter="review">
            <option value="all">Any review state</option>
            <option value="none">No assessment recorded</option>
            <option value="recorded">Assessment recorded</option>
            <option value="failed">Recorded as failed</option>
            <option value="requires-professional-review">Requires professional review</option>
            <option value="requires-experiential-evaluation">Requires experiential evaluation</option>
          </select>
        </div>
        <div class="assessment-filter">
          <label for="assessment-filter-category">Assessment category</label>
          <select id="assessment-filter-category" data-assessment-filter="category">
            <option value="all">All categories</option>
            ${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}
          </select>
        </div>
        <div class="assessment-filter">
          <label for="assessment-filter-role">Responsibility</label>
          <select id="assessment-filter-role" data-assessment-filter="role">
            <option value="all">All responsibilities</option>
            ${roles.map((role) => `<option value="${escapeHtml(role)}">${escapeHtml(role)}</option>`).join("")}
          </select>
        </div>
        <div class="assessment-filter">
          <label for="assessment-filter-text">Find a criterion</label>
          <input id="assessment-filter-text" type="search" data-assessment-filter="text" placeholder="e.g. 1.4.10 or contrast">
        </div>
        <button class="btn btn-clear" id="assessment-clear-filters" type="button">Clear filters</button>
        <p id="assessment-filter-count" class="assessment-help" role="status" aria-live="polite" aria-atomic="true"></p>
      </div>

      <div class="assessment-table-wrap" role="region" tabindex="0" aria-labelledby="assessment-table-caption">
        <table class="assessment-table">
          <caption id="assessment-table-caption">
            Coverage by WCAG success criterion for the declared target (Level ${escapeHtml(
              String(target.level ?? "AA")
            )}). ${shownCriteria.length} of ${coverage.criteria.length} criteria shown across
            ${coverage.report?.pageCount ?? 0} scanned page(s).
          </caption>
          <thead>
            <tr>
              <th scope="col">Criterion</th>
              <th scope="col">Level</th>
              <th scope="col">Automated evidence</th>
              <th scope="col">Manual procedures</th>
              <th scope="col">Recorded human review</th>
            </tr>
          </thead>
          <tbody id="assessment-coverage-body">
        ${rows}
          </tbody>
        </table>
      </div>
      ${notTargetCriteria.length
        ? `<details class="assessment-limitations">
        <summary>${notTargetCriteria.length} Level ${escapeHtml(
          [...new Set(notTargetCriteria.map((criterion) => criterion.level))].join("/")
        )} criteria outside the declared target</summary>
        <p class="assessment-help">
          These criteria are in the catalogue and may apply to your site, but they are outside the
          conformance target this report was framed against. They are not rendered as coverage rows.
        </p>
        <ul>
          ${notTargetCriteria
            .map(
              (criterion) =>
                `<li>${escapeHtml(criterion.id)} ${
                  safeHref(criterion.url)
                    ? `<a href="${escapeHtml(safeHref(criterion.url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(criterion.title)}</a>`
                    : escapeHtml(criterion.title)
                }</li>`
            )
            .join("")}
        </ul>
      </details>`
        : ""}
      <p class="assessment-help">
        Counts are shown against an explicit denominator. No value here is a percentage of accessibility,
        and no criterion is described as fully evaluated.
      </p>
    </section>`;
}

/**
 * The prominent notice shown when no human assessment records are available.
 *
 * It is not dismissible: a reader must not be able to hide the absence of
 * evidence permanently. When records exist the runtime rewrites the heading and
 * body in place.
 *
 * @param {{externalLinks?: boolean}} [options]
 */
export function renderMissingAssessmentNotice() {
  return `<div class="assessment-notice" id="assessment-human-notice" role="note" aria-labelledby="assessment-human-notice-heading">
        <h3 id="assessment-human-notice-heading">No manual accessibility testing recorded</h3>
        <p>
          This report contains automated accessibility evidence. Automated checks evaluate specific
          technical conditions and cannot establish whether people with disabilities can use the
          website successfully.
        </p>
        <p>
          Manual testing may have been performed elsewhere, but no manual assessment results have been
          recorded in this report.
        </p>
        <ul class="assessment-notice-actions">
          <li><a href="#manual-assessment">Start guided manual assessment</a></li>
          <li><a href="#assessment-coverage">Review what automated testing misses</a></li>
          <li><a href="https://www.w3.org/WAI/test-evaluate/preliminary/" target="_blank" rel="noopener noreferrer">Learn how to conduct manual testing (W3C Easy Checks)</a></li>
          <li><a href="#assessment-import">Import an existing accessibility assessment</a></li>
          <li><a href="#report-barrier">Report a barrier experienced while using the website</a></li>
        </ul>
      </div>`;
}

function renderProcedureCard(procedure, pages = []) {
  const id = slug(procedure.id);
  const criteria = procedure.criteria.join(" ");
  const category = procedure.category;
  return `<article class="assessment-procedure" id="procedure-${escapeHtml(id)}" data-procedure-id="${escapeHtml(
    procedure.id
  )}" data-criteria="${escapeHtml(criteria)}" data-categories="${escapeHtml(category)}" data-pathways="${escapeHtml(
    procedure.pathways.join(" ")
  )}" data-roles="${escapeHtml(procedure.roles.join(" "))}">
          <h4 id="procedure-${escapeHtml(id)}-heading">${escapeHtml(procedure.title)}</h4>
          <p class="assessment-badges">
            <span class="assessment-badge">Category: ${escapeHtml(category)}</span>
            <span class="assessment-badge">Effort: ${escapeHtml(procedure.effort)}</span>
            <span class="assessment-badge">WCAG ${escapeHtml(procedure.criteria.join(", "))}</span>
            ${procedure.requiresAssistiveTechnology ? '<span class="assessment-badge">Requires assistive technology</span>' : ""}
          </p>
          <p>${escapeHtml(procedure.why)}</p>
          <p><strong>Steps</strong></p>
          <ol>${procedure.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
          <p><strong>What a pass looks like:</strong> ${escapeHtml(procedure.expected)}</p>
          <details>
            <summary>Limitations of this procedure</summary>
            <ul>${procedure.limitations.map((limitation) => `<li>${escapeHtml(limitation)}</li>`).join("")}</ul>
          </details>
          <p class="assessment-refs">
            Evidence to capture: ${escapeHtml(procedure.evidence.join("; "))}.
            Responsibilities: ${escapeHtml(procedure.roles.join(", "))}.
          </p>
          <button class="btn js-only" type="button" data-record-procedure="${escapeHtml(procedure.id)}">
            Record an outcome for this procedure
          </button>
        </article>`;
}

function renderSharedProcedureForm(procedures, pages = []) {
  return `<form class="assessment-form js-only" id="procedure-record-form" data-assessment-form="procedure-shared" novalidate aria-labelledby="procedure-record-heading">
          <fieldset>
            <legend id="procedure-record-heading">Record a procedure outcome</legend>
            <p class="assessment-help">
              Choose a procedure, record the outcome and the scope you actually tested. Recording an
              outcome does not change the automated evidence in this report.
            </p>
            <div class="assessment-field">
              <label for="procedure-select">Procedure</label>
              <select id="procedure-select" name="assessmentDefinitionId" required>
                <option value="">Choose a procedure</option>
                ${procedures
                  .map(
                    (procedure) =>
                      `<option value="${escapeHtml(procedure.id)}">${escapeHtml(procedure.title)} (WCAG ${escapeHtml(
                        procedure.criteria.join(", ")
                      )})</option>`
                  )
                  .join("")}
              </select>
            </div>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="procedure-outcome">Outcome</label>
                <select id="procedure-outcome" name="outcome" required>${outcomeOptions("not-evaluated")}</select>
              </div>
              <div class="assessment-field">
                <label for="procedure-method">Assessment method</label>
                <select id="procedure-method" name="method">${methodOptions("guided-manual")}</select>
              </div>
              <div class="assessment-field">
                <label for="procedure-date">Date tested</label>
                <input id="procedure-date" name="testingDate" type="date" value="${escapeHtml(todayIso())}">
              </div>
            </div>
            <div class="assessment-field">
              <label for="procedure-page">Page reviewed (optional)</label>
              <select id="procedure-page" name="testedUrl">
                <option value="">Not page-specific</option>
                ${pages
                  .map((page) => `<option value="${escapeHtml(page)}">${escapeHtml(page)}</option>`)
                  .join("")}
              </select>
            </div>
            <div class="assessment-field">
              <label for="procedure-notes">Reviewer notes</label>
              <textarea id="procedure-notes" name="reviewerNotes" rows="3" aria-describedby="procedure-notes-help"></textarea>
              <p class="assessment-help" id="procedure-notes-help">What you observed and the scope you tested. Do not include personal or confidential information.</p>
            </div>
            <div class="assessment-field">
              <label for="procedure-verify">Verification</label>
              <select id="procedure-verify" name="verification">${verificationOptions("self-attested")}</select>
            </div>
          </fieldset>
          <div class="assessment-errors" data-assessment-errors role="alert"></div>
          <button class="btn btn-primary" type="submit">Save assessment record</button>
        </form>`;
}

function renderFindingForm() {
  return `<form class="assessment-form js-only" id="report-barrier" data-assessment-form="finding" novalidate aria-labelledby="report-barrier-heading">
          <fieldset>
            <legend id="report-barrier-heading">Report a barrier not found by automation</legend>
            <p class="assessment-help">
              Use this for a barrier you experienced or observed that no scanner reported. You do not
              need a scanner rule or finding id. Describing what happened and who was affected matters
              more than naming a success criterion.
            </p>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="finding-title">Short barrier title</label>
                <input id="finding-title" name="title" type="text" maxlength="200" required>
              </div>
              <div class="assessment-field">
                <label for="finding-url">Page URL</label>
                <input id="finding-url" name="testedUrl" type="url" inputmode="url" placeholder="https://example.com/page">
              </div>
            </div>
            <div class="assessment-field">
              <label for="finding-component">Component or region</label>
              <input id="finding-component" name="component" type="text" maxlength="200" aria-describedby="finding-component-help">
              <p class="assessment-help" id="finding-component-help">For example: main navigation, checkout form, event calendar.</p>
            </div>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="finding-outcome">Outcome</label>
                <select id="finding-outcome" name="outcome">
                  ${outcomeOptions("failed")}
                </select>
              </div>
              <div class="assessment-field">
                <label for="finding-method">Assessment method</label>
                <select id="finding-method" name="method">
                  ${methodOptions("guided-manual")}
                </select>
              </div>
              <div class="assessment-field">
                <label for="finding-date">Date tested</label>
                <input id="finding-date" name="testingDate" type="date" value="${escapeHtml(todayIso())}">
              </div>
            </div>
            <div class="assessment-field">
              <label for="finding-actual">What happened</label>
              <textarea id="finding-actual" name="actualBehaviour" rows="3" required></textarea>
            </div>
            <div class="assessment-field">
              <label for="finding-expected">What should have happened</label>
              <textarea id="finding-expected" name="expectedBehaviour" rows="2"></textarea>
            </div>
            <div class="assessment-field">
              <label for="finding-impact">Who was affected, and how</label>
              <textarea id="finding-impact" name="userImpact" rows="2" aria-describedby="finding-impact-help"></textarea>
              <p class="assessment-help" id="finding-impact-help">For example: "A screen reader user could not tell which field failed." Avoid guessing about people you did not observe.</p>
            </div>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="finding-criteria">WCAG criteria (optional, comma separated)</label>
                <input id="finding-criteria" name="wcag" type="text" placeholder="e.g. 2.4.7, 2.1.2" aria-describedby="finding-criteria-help">
                <p class="assessment-help" id="finding-criteria-help">Leave blank if you are unsure. An unmapped barrier is still worth reporting.</p>
              </div>
              <div class="assessment-field">
                <label for="finding-at">Assistive technology (optional)</label>
                <input id="finding-at" name="assistiveTechnology" type="text" placeholder="e.g. NVDA 2026.1">
              </div>
              <div class="assessment-field">
                <label for="finding-browser">Browser (optional)</label>
                <input id="finding-browser" name="browser" type="text" placeholder="e.g. Firefox 145">
              </div>
            </div>
            <div class="assessment-field">
              <label for="finding-procedure">Related procedure (optional)</label>
              <select id="finding-procedure" name="assessmentDefinitionId" aria-describedby="finding-procedure-help">
                <option value="">No specific procedure</option>
                ${listProcedures()
                  .map(
                    (procedure) =>
                      `<option value="${escapeHtml(procedure.id)}">${escapeHtml(procedure.title)} (WCAG ${escapeHtml(
                        procedure.criteria.join(", ")
                      )})</option>`
                  )
                  .join("")}
              </select>
              <p class="assessment-help" id="finding-procedure-help">Choosing a procedure links the barrier to the method you used. It does not change the outcome.</p>
            </div>
            <div class="assessment-field">
              <label for="finding-notes">Reproduction steps and notes</label>
              <textarea id="finding-notes" name="reviewerNotes" rows="3"></textarea>
            </div>
            <div class="assessment-element-summary" id="finding-element-summary" hidden>
              <p class="assessment-help" id="finding-element-summary-text"></p>
            </div>
            <input type="hidden" id="finding-element-locator" name="elementLocator">
            <input type="hidden" id="finding-element-locator-type" name="elementLocatorType" value="css">
            <input type="hidden" id="finding-element-name" name="elementAccessibleName">
            <input type="hidden" id="finding-element-snippet" name="elementHtmlSnippet">
            <input type="hidden" id="finding-collector-item" name="collectorItemId">
            <div class="assessment-field">
              <label for="finding-verification">Verification</label>
              <select id="finding-verification" name="verification">${verificationOptions("self-attested")}</select>
            </div>
          </fieldset>
          <div class="assessment-errors" data-assessment-errors role="alert"></div>
          <button class="btn btn-primary" type="submit">Save this barrier</button>
        </form>`;
}

function renderExperientialForm() {
  return `<form class="assessment-form js-only" id="experiential-evaluation" data-assessment-form="evaluation" novalidate aria-labelledby="experiential-heading">
          <fieldset>
            <legend id="experiential-heading">Record a professional or experiential evaluation</legend>
            <p class="assessment-help">
              Use this for an evaluation by an accessibility professional, an assistive technology
              user, or a research participant. Do not record anyone's medical information or
              disability status. One person's experience does not represent every disability,
              assistive technology or environment.
            </p>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="experiential-title">What was evaluated</label>
                <input id="experiential-title" name="title" type="text" maxlength="200" required>
              </div>
              <div class="assessment-field">
                <label for="experiential-url">Page URL</label>
                <input id="experiential-url" name="testedUrl" type="url" inputmode="url">
              </div>
            </div>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="experiential-method">Method</label>
                <select id="experiential-method" name="method">${methodOptions("professional-evaluation")}</select>
              </div>
              <div class="assessment-field">
                <label for="experiential-outcome">Outcome</label>
                <select id="experiential-outcome" name="outcome">${outcomeOptions("inconclusive")}</select>
              </div>
              <div class="assessment-field">
                <label for="experiential-date">Date tested</label>
                <input id="experiential-date" name="testingDate" type="date" value="${escapeHtml(todayIso())}">
              </div>
            </div>
            <div class="assessment-field">
              <label for="experiential-scope">Scope and method detail</label>
              <textarea id="experiential-scope" name="scope" rows="2" aria-describedby="experiential-scope-help"></textarea>
              <p class="assessment-help" id="experiential-scope-help">What was covered, how, and by whom in role terms (for example: "two participants who use screen readers").</p>
            </div>
            <div class="assessment-field-row">
              <div class="assessment-field">
                <label for="experiential-at">Assistive technology</label>
                <input id="experiential-at" name="assistiveTechnology" type="text">
              </div>
              <div class="assessment-field">
                <label for="experiential-browser">Browser</label>
                <input id="experiential-browser" name="browser" type="text">
              </div>
              <div class="assessment-field">
                <label for="experiential-os">Operating system</label>
                <input id="experiential-os" name="os" type="text">
              </div>
            </div>
            <div class="assessment-field">
              <label for="experiential-notes">Observations</label>
              <textarea id="experiential-notes" name="reviewerNotes" rows="3"></textarea>
            </div>
            <div class="assessment-field">
              <label for="experiential-verification">Verification</label>
              <select id="experiential-verification" name="verification">${verificationOptions("self-attested")}</select>
            </div>
          </fieldset>
          <div class="assessment-errors" data-assessment-errors role="alert"></div>
          <button class="btn btn-primary" type="submit">Save this evaluation</button>
        </form>
        <p class="assessment-help">
          Guidance on compensating disabled participants: budget for participants' time and expertise,
          agree compensation before the session, and do not require disclosure of a diagnosis. W3C's
          <a href="https://www.w3.org/WAI/test-evaluate/involving-users/" target="_blank" rel="noopener noreferrer">Involving Users in Evaluating Web Accessibility</a>
          is the reference.
        </p>`;
}

/**
 * Render the local assessment workspace: three pathways, procedure forms,
 * record management and import/export controls.
 *
 * @param {{coverage: object, report: object}} options
 */
export function renderAssessmentWorkspace({ coverage, report, pages = [], collectors = null }) {
  const essential = listProcedures({ pathway: "essential" });
  const comprehensive = listProcedures({ pathway: "comprehensive" });
  const comprehensiveOnly = comprehensive.filter((procedure) => !procedure.pathways.includes("essential"));
  const categories = [...new Set(listProcedures().map((procedure) => procedure.category))].sort();
  const roles = [...new Set(listProcedures().flatMap((procedure) => procedure.roles))].sort();
  const criteria = coverage?.criteria ?? [];

  return `<section id="manual-assessment" aria-labelledby="manual-assessment-heading">
      <h2 id="manual-assessment-heading" class="section-heading" tabindex="-1">
        Manual assessment
        <a href="#manual-assessment" class="anchor-link" aria-label="Link to Manual assessment section">
          <span aria-hidden="true">#</span>
        </a>
      </h2>
      <p class="assessment-intro">
        Manual assessment records are kept in this downloaded report, in your browser, or in a JSON
        file you export. Nothing is uploaded, and the automated evidence in this report is never
        modified by an assessment.
      </p>
      <div class="assessment-status" id="assessment-status" role="status" aria-live="polite" aria-atomic="true">
        No assessment recorded in this report.
      </div>
      <div class="assessment-toolbar js-only">
        <button class="btn" type="button" id="assessment-export">Export assessment JSON</button>
        <a class="btn" href="#assessment-import">Import an assessment</a>
        <button class="btn" type="button" id="assessment-reset">Clear local assessment for this report</button>
        <span class="assessment-help" id="assessment-save-times">Not saved locally yet.</span>
      </div>

      <section id="record-procedure" aria-labelledby="procedure-record-heading-wrapper">
        <h3 id="procedure-record-heading-wrapper">Record a procedure outcome</h3>
        ${renderSharedProcedureForm(listProcedures(), pages)}
      </section>

      <section id="essential" aria-labelledby="essential-heading">
        <h3 id="essential-heading">Essential manual checks</h3>
        <p class="assessment-intro">${escapeHtml(PATHWAYS.essential.summary)}</p>
        ${essential.map((procedure) => renderProcedureCard(procedure, pages)).join("\n        ")}
      </section>

      <section id="comprehensive" aria-labelledby="comprehensive-heading">
        <h3 id="comprehensive-heading">Comprehensive guided assessment</h3>
        <p class="assessment-intro">${escapeHtml(PATHWAYS.comprehensive.summary)}</p>
        <div class="assessment-filters js-only" role="group" aria-labelledby="procedure-filter-heading">
          <h4 id="procedure-filter-heading" class="assessment-filter-heading">Filter procedures</h4>
          <div class="assessment-filter">
            <label for="procedure-filter-category">Category</label>
            <select id="procedure-filter-category" data-procedure-filter="category">
              <option value="all">All categories</option>
              ${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}
            </select>
          </div>
          <div class="assessment-filter">
            <label for="procedure-filter-role">Responsibility</label>
            <select id="procedure-filter-role" data-procedure-filter="role">
              <option value="all">All responsibilities</option>
              ${roles.map((role) => `<option value="${escapeHtml(role)}">${escapeHtml(role)}</option>`).join("")}
            </select>
          </div>
          <div class="assessment-filter">
            <label for="procedure-filter-criterion">Success criterion</label>
            <select id="procedure-filter-criterion" data-procedure-filter="criterion">
              <option value="all">All criteria</option>
              ${criteria
                .filter((criterion) => criterion.manual.procedures.length > 0)
                .map(
                  (criterion) =>
                    `<option value="${escapeHtml(criterion.id)}">${escapeHtml(criterion.id)} ${escapeHtml(
                      criterion.title
                    )}</option>`
                )
                .join("")}
            </select>
          </div>
          <p id="procedure-filter-count" class="assessment-help" role="status" aria-live="polite" aria-atomic="true"></p>
        </div>
        ${comprehensiveOnly.map((procedure) => renderProcedureCard(procedure, pages)).join("\n        ")}
      </section>

      <section id="professional-experiential" aria-labelledby="professional-experiential-heading">
        <h3 id="professional-experiential-heading">Professional and experiential evaluation</h3>
        <p class="assessment-intro">${escapeHtml(PATHWAYS.experiential.summary)}</p>
        ${renderExperientialForm()}
      </section>

      <section id="report-a-barrier" aria-labelledby="report-a-barrier-heading">
        <h3 id="report-a-barrier-heading">Report a barrier you experienced</h3>
        <p class="assessment-intro">
          A barrier reported by a person who experienced it is evidence that no scanner can produce.
          This form is also linked from the missing-evidence notice at the top of the report.
        </p>
        ${renderFindingForm()}
      </section>

      ${renderCollectorInventory(collectors)}

      <section id="recorded-assessments" aria-labelledby="recorded-assessments-heading">
        <h3 id="recorded-assessments-heading">Recorded assessments</h3>
        <div id="assessment-human-summary">
          <p class="assessment-empty">No assessment recorded in this report.</p>
        </div>
        <div id="assessment-records" class="assessment-records"></div>
        <div class="assessment-issue-output" id="assessment-issue-output" hidden>
          <h4 id="assessment-issue-output-heading">Developer issue report</h4>
          <div class="assessment-errors" id="assessment-issue-errors" role="alert"></div>
          <div class="assessment-toolbar">
            <button class="btn" type="button" id="assessment-copy-issue">Copy issue text</button>
            <button class="btn" type="button" id="assessment-download-issue">Download Markdown</button>
            <button class="btn" type="button" id="assessment-download-evidence">Download JSON evidence</button>
            <button class="btn" type="button" id="assessment-select-issue">Select all issue text</button>
            <button class="btn" type="button" id="assessment-close-issue">Close issue preview</button>
          </div>
          <p class="assessment-help" id="assessment-copy-status" role="status" aria-live="polite" aria-atomic="true"></p>
          <label for="assessment-issue-text">Issue text (editable before copying)</label>
          <textarea id="assessment-issue-text" readonly rows="16"></textarea>
          <p class="assessment-help">
            Nothing is submitted anywhere. If the Clipboard API is blocked in this context, use
            "Select all issue text" and copy manually, or download the Markdown file.
          </p>
        </div>
      </section>

      <section id="assessment-import" aria-labelledby="assessment-import-heading">
        <h3 id="assessment-import-heading">Import an existing accessibility assessment</h3>
        <p id="assessment-import-help">
          Choose a JSON file exported by Open Scans, or an assessment exported from another tool that
          this report supports. The file is validated before anything in this report changes.
        </p>
        <div class="js-only">
          <div class="assessment-field">
            <label for="assessment-import-file">Assessment JSON file</label>
            <input id="assessment-import-file" type="file" accept="application/json,.json" aria-describedby="assessment-import-help">
          </div>
          <div class="assessment-errors" id="assessment-import-errors" role="alert"></div>
          <div id="assessment-import-preview" class="assessment-preview" hidden role="region" aria-labelledby="assessment-import-preview-heading">
            <h4 id="assessment-import-preview-heading">Import preview</h4>
            <dl id="assessment-import-details"></dl>
            <div class="assessment-toolbar">
              <button class="btn btn-primary" type="button" id="assessment-import-merge">Merge compatible records</button>
              <button class="btn" type="button" id="assessment-import-replace">Replace local assessment</button>
              <button class="btn" type="button" id="assessment-import-cancel">Cancel import</button>
            </div>
            <p class="assessment-help" id="assessment-import-status" role="status" aria-live="polite" aria-atomic="true"></p>
          </div>
        </div>
        <div class="assessment-no-js">
          <p>Importing needs JavaScript. The automated evidence and manual guidance remain available.</p>
        </div>
      </section>

      <p class="assessment-help">
        Source report identifier: <code>${escapeHtml(report?.reportId ?? "unknown")}</code>.
        Exported assessment files may contain website URLs and the notes you wrote. Local browser
        storage is not encrypted and is not a confidential store.
      </p>
    </section>`;
}

/** Fallback block for browsers without JavaScript, describing what is missing. */
export function renderAssessmentNoScript() {
  return `<noscript>
      <p class="assessment-no-js">
        JavaScript is disabled. The accessibility coverage table and manual testing guidance in this
        report are readable without it, but recording, saving, importing and exporting assessments
        need JavaScript. Automated results remain available.
      </p>
    </noscript>`;
}

/**
 * Embed the report identity and catalogue identity the runtime needs.
 *
 * Only identity is embedded. Criteria, procedures and their text already exist
 * in the document as semantic HTML, so the runtime reads them from the DOM
 * instead of duplicating the whole catalogue in JSON.
 *
 * @param {{report: object, catalogue: object, schemaVersion: number}} context
 */
export function renderAssessmentContextScript({ report, catalogue, schemaVersion }) {
  const payload = {
    schemaVersion,
    report: {
      reportId: report?.reportId ?? null,
      issueNumber: report?.issueNumber ?? null,
      issueUrl: report?.issueUrl ?? null,
      scanTitle: report?.scanTitle ?? null,
      scannedAt: report?.scannedAt ?? null,
      pages: (report?.pages ?? []).slice(0, 200)
    },
    catalogue: catalogue
      ? {
          catalogueVersion: catalogue.catalogueVersion ?? null,
          contentSha256: catalogue.contentSha256 ?? null,
          generated: catalogue.generated ?? null,
          wcagVersion: catalogue.wcagVersion ?? null
        }
      : null
  };
  // `<` is escaped so a page title containing "</script>" cannot end the block.
  const json = JSON.stringify(payload).replace(/</g, "\\u003c");
  return `<script type="application/json" id="assessment-context">${json}</script>`;
}

/**
 * Assisted element inventory.
 *
 * Facts only: what the collectors captured, with deterministic signals and a
 * plain statement of what each signal does not mean. No row is a finding, and
 * no signal is a pass or a failure.
 *
 * The per-item data needed to prefill a record lives in data attributes on the
 * row, so the inventory is not duplicated into a second JSON copy inside the
 * report. The sidecar `assessment-collectors.json` remains the machine-readable
 * artifact.
 *
 * @param {object|null} collectors `a11y-assisted-collectors/1` artifact
 * @returns {string}
 */
export function renderCollectorInventory(collectors) {
  const capture = collectors?.capture ?? null;
  const pages = Array.isArray(collectors?.pages) ? collectors.pages : [];
  const signalCatalogue = new Map(
    (collectors?.signalCatalogue ?? []).map((signal) => [signal.id, signal])
  );
  const signalTitles = new Map([...signalCatalogue].map(([id, signal]) => [id, signal.title ?? id]));

  const heading = `<h3 id="assisted-inventory-heading">Assisted element inventory</h3>`;

  if (!collectors || capture?.status === "not-run" || pages.length === 0) {
    const reason = capture?.reason ? ` ${escapeHtml(capture.reason)}` : "";
    return `<section id="assisted-inventory" aria-labelledby="assisted-inventory-heading">
        ${heading}
        <p class="assessment-intro">
          No assisted inventory was captured in this scan.${reason}
        </p>
        <p class="assessment-help">
          An inventory records headings, images and links so a reviewer can inspect them. It is
          not evidence that any element is accessible or inaccessible.
        </p>
      </section>`;
  }

  const captured = capture?.pagesCaptured ?? pages.filter((page) => page.status === "captured").length;
  const requested = capture?.pagesRequested ?? pages.length;
  const statusNote = capture?.status === "partial"
    ? `<p class="assessment-help assessment-state assessment-state--unknown">Capture was partial: ${captured} of ${requested} requested pages were captured.${capture?.reason ? ` ${escapeHtml(capture.reason)}` : ""}</p>`
    : "";

  const pageHtml = pages
    .map((page) => renderInventoryPage(page, signalTitles, signalCatalogue))
    .join("\n        ");

  return `<section id="assisted-inventory" aria-labelledby="assisted-inventory-heading">
        ${heading}
        <p class="assessment-intro">
          These are the headings, images and links the collectors observed in the captured pages.
          They are facts for a reviewer to inspect, not findings. A signal below means a condition
          was detected; it does not mean the element fails a WCAG success criterion.
        </p>
        <p class="assessment-meta">
          Captured ${captured} of ${requested} requested page(s), top document only, without
          interaction or scrolling. Browser: ${escapeHtml(capture?.browser ?? "unknown")}.
        </p>
        ${statusNote}
        <details class="assessment-limitations">
          <summary>Limitations of this inventory</summary>
          <ul>
            <li>Top document only: iframes and shadow roots are counted, not captured.</li>
            <li>No interaction, scrolling, typing or hovering; content that appears later is not captured.</li>
            <li>Accessible names come from a DOM subset of AccName 1.2, not from the browser's accessibility tree.</li>
            <li>Caps truncate the inventory; each page states when a table was cut.</li>
            <li>A captured element is not evidence that a criterion was evaluated.</li>
          </ul>
        </details>
        ${pageHtml}
      </section>`;
}

function renderInventoryPage(page, signalTitles, signalCatalogue) {
  const url = String(page?.finalUrl || page?.url || "");
  const label = url || "page not recorded";
  const counts = page?.counts ?? {};
  const truncated = page?.truncated ?? {};

  if (page?.status === "failed" || page?.status === "not-captured") {
    return `<details class="assessment-procedure">
          <summary>${escapeHtml(label)} — not captured</summary>
          <p class="assessment-help">This page has no inventory: ${escapeHtml(page?.error ?? page?.reason ?? "unknown reason")}.</p>
        </details>`;
  }

  const truncationNote = (kind) =>
    truncated[kind]
      ? `<p class="assessment-help assessment-state assessment-state--unknown">This table was truncated by the collector cap; later ${kind} are not shown. The sidecar artifact records the same truncation.</p>`
      : "";

  return `<details class="assessment-procedure" data-collector-page="${escapeHtml(url)}">
          <summary>${escapeHtml(label)} — ${counts.headings ?? 0} headings, ${counts.images ?? 0} images, ${counts.links ?? 0} links</summary>
          ${page?.iframesSkipped || page?.shadowRootsSkipped
            ? `<p class="assessment-help">Skipped: ${page.iframesSkipped ?? 0} iframe(s), ${page.shadowRootsSkipped ?? 0} shadow root(s). Their contents were not reviewed.</p>`
            : ""}
          <h4>Headings</h4>
          ${truncationNote("headings")}
          ${renderInventoryTable(page.headings, "heading", url, signalTitles, [
            { label: "Level", value: (item) => item.heading?.level ?? "—" },
            { label: "Text", value: (item) => item.text?.raw ?? "" },
            { label: "Accessible name", value: (item) => item.accessibleName?.value ?? "" }
          ])}
          <h4>Images</h4>
          ${truncationNote("images")}
          ${renderInventoryTable(page.images, "image", url, signalTitles, [
            {
              label: "Rendered size",
              value: (item) =>
                item.image?.renderedWidth != null && item.image?.renderedHeight != null
                  ? `${item.image.renderedWidth}×${item.image.renderedHeight}`
                  : "—"
            },
            {
              label: "Alternative and source",
              value: (item) =>
                `${item.accessibleName?.value || "(empty)"} (${item.accessibleName?.source ?? "none"})`
            }
          ])}
          <h4>Links</h4>
          ${truncationNote("links")}
          ${renderInventoryTable(page.links, "link", url, signalTitles, [
            { label: "Text", value: (item) => item.text?.raw ?? "" },
            { label: "Destination", value: (item) => item.link?.href ?? "" },
            { label: "Accessible name", value: (item) => item.accessibleName?.value ?? "" }
          ])}
          ${renderSignalExplanations(page, signalTitles, signalCatalogue)}
        </details>`;
}

function renderInventoryTable(items, kind, pageUrl, signalTitles, columns) {
  const rows = Array.isArray(items) ? items : [];
  if (rows.length === 0) {
    return `<p class="assessment-empty">No ${kind}s were captured on this page.</p>`;
  }
  const caption = `${rows.length} captured ${kind}${rows.length === 1 ? "" : "s"}. Signals are observations, not findings.`;
  return `<div class="assessment-table-wrap" role="region" tabindex="0" aria-label="${escapeHtml(caption)}">
          <table class="assessment-table assessment-inventory-table">
            <caption>${escapeHtml(caption)}</caption>
            <thead>
              <tr>
                ${columns.map((column) => `<th scope="col">${escapeHtml(column.label)}</th>`).join("")}
                <th scope="col">Signals</th>
                <th scope="col">Record</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map((item) => {
                  const signals = (item.signals ?? []).map((signal) => signal.id);
                  return `<tr data-collector-item="${escapeHtml(item.itemId)}" data-collector-kind="${escapeHtml(
                    kind
                  )}" data-collector-page="${escapeHtml(pageUrl)}" data-collector-locator="${escapeHtml(
                    item.locator ?? ""
                  )}" data-collector-name="${escapeHtml(item.accessibleName?.value ?? "")}" data-collector-snippet="${escapeHtml(
                    item.htmlSnippet ?? ""
                  )}" data-collector-signals="${escapeHtml(signals.join(" "))}">
                    ${columns.map((column) => `<td>${escapeHtml(String(column.value(item) ?? ""))}</td>`).join("")}
                    <td>${renderSignalBadges(signals, signalTitles)}</td>
                    <td><button class="btn js-only" type="button" data-collector-prefill="${escapeHtml(
                      item.itemId
                    )}">Record observation<span class="assessment-visually-hidden"> about this ${escapeHtml(kind)}</span></button></td>
                  </tr>`;
                })
                .join("\n              ")}
            </tbody>
          </table>
        </div>`;
}

function renderSignalBadges(signals, signalTitles) {
  if (!signals || signals.length === 0) {
    return `<span class="assessment-empty">No signal detected</span>`;
  }
  return signals
    .map((id) => `<span class="assessment-badge assessment-badge--signal">${escapeHtml(signalTitles.get(id) ?? id)}</span>`)
    .join(" ");
}

function renderSignalExplanations(page, signalTitles, signalCatalogue) {
  const ids = new Set();
  for (const kind of ["headings", "images", "links"]) {
    for (const item of page?.[kind] ?? []) {
      for (const signal of item.signals ?? []) ids.add(signal.id);
    }
  }
  if (ids.size === 0) return "";
  return `<details class="assessment-limitations">
            <summary>Signals on this page and what they do not mean</summary>
            <ul>
              ${[...ids]
                .map((id) => {
                  const entry = signalCatalogue.get(id);
                  return `<li><strong>${escapeHtml(signalTitles.get(id) ?? id)}</strong>${
                    entry?.doesNotMean ? ` — ${escapeHtml(entry.doesNotMean)}` : ""
                  }</li>`;
                })
                .join("")}
            </ul>
          </details>`;
}
