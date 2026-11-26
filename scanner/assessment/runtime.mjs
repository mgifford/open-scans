/**
 * Browser runtime for the local assessment workspace.
 *
 * This file is never shipped to a browser as a module. The report generator
 * concatenates it with `records.mjs`, strips the `export ` keyword and inlines
 * the result, so the downloaded HTML works from `file://` with no network access
 * and no build tooling.
 *
 * The rules it enforces:
 * - local storage is feature-detected; a failure is reported, never hidden;
 * - saving to memory is labelled as memory, not as saved;
 * - imported files are parsed as data and validated before any state changes;
 * - user and website text is written with textContent, never innerHTML;
 * - a recorded outcome never moves focus and never claims conformance.
 *
 * @module assessment/runtime
 */

const RUNTIME_VERSION = "assessment-runtime/1";
const MAX_IMPORT_BYTES = 2 * 1024 * 1024;

function currentDocument(state) {
  return state.document;
}

/**
 * Feature-detect a storage backend for one report.
 *
 * @param {string} key storage key
 * @returns {object} adapter
 */
function createStorageAdapter(key) {
  const memory = { value: null };
  let available = false;
  let reason = "";

  try {
    const probeKey = `${key}:probe`;
    globalThis.localStorage.setItem(probeKey, "probe");
    const readBack = globalThis.localStorage.getItem(probeKey);
    globalThis.localStorage.removeItem(probeKey);
    available = readBack === "probe";
    if (!available) reason = "This browser did not retain a test value in local storage.";
  } catch (error) {
    available = false;
    reason = error && error.name === "SecurityError"
      ? "This browser blocks local storage for this report (common with file:// pages and private browsing)."
      : `Local storage is unavailable: ${(error && error.message) || "unknown error"}.`;
  }

  return {
    key,
    available,
    reason,
    read() {
      if (!available) return memory.value;
      try {
        return globalThis.localStorage.getItem(key);
      } catch (error) {
        return memory.value ?? null;
      }
    },
    write(value) {
      memory.value = value;
      if (!available) return { ok: true, persistent: false };
      try {
        globalThis.localStorage.setItem(key, value);
        return { ok: true, persistent: true };
      } catch (error) {
        const quota = error && (error.name === "QuotaExceededError" || error.code === 22);
        return {
          ok: false,
          persistent: false,
          reason: quota
            ? "Browser storage is full. Export the assessment to a JSON file to keep it."
            : `Could not save to local storage: ${(error && error.message) || "unknown error"}.`
        };
      }
    },
    remove() {
      memory.value = null;
      if (!available) return { ok: true, persistent: false };
      try {
        globalThis.localStorage.removeItem(key);
        return { ok: true, persistent: true };
      } catch (error) {
        return { ok: false, persistent: false, reason: `Could not clear local storage: ${(error && error.message) || "unknown error"}.` };
      }
    },
    onChange(handler) {
      if (typeof globalThis.addEventListener !== "function") return;
      globalThis.addEventListener("storage", (event) => {
        if (event.key === key) handler(event);
      });
    }
  };
}

/**
 * Parse a stored document. A corrupt or incompatible value is surfaced, not
 * silently discarded.
 *
 * @param {string|null} raw
 * @returns {{document: object|null, problem: string|null}}
 */
function parseStoredDocument(raw) {
  if (!raw) return { document: null, problem: null };
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return { document: null, problem: "Stored assessment data could not be read. It was left untouched; export before clearing." };
  }
  const result = validateAssessmentDocument(parsed);
  if (!result.ok) {
    return {
      document: null,
      problem: `Stored assessment data uses an unsupported format (${result.errors[0]}).`
    };
  }
  return { document: result.document, problem: null };
}

/** A short, useful browser label rather than a truncated user-agent string. */
function describeBrowser() {
  const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
  const brands = typeof navigator !== "undefined" ? navigator.userAgentData?.brands : null;
  if (Array.isArray(brands) && brands.length > 0) {
    const brand = brands.find((entry) => !/Not.?A.?Brand/i.test(entry.brand)) || brands[0];
    if (brand) return { browser: String(brand.brand || ""), browserVersion: String(brand.version || "") };
  }
  for (const [pattern, name] of [
    [/Firefox\/([\d.]+)/, "Firefox"],
    [/Edg\/([\d.]+)/, "Edge"],
    [/Chrome\/([\d.]+)/, "Chrome"],
    [/Version\/([\d.]+).*Safari/, "Safari"]
  ]) {
    const match = ua.match(pattern);
    if (match) return { browser: name, browserVersion: match[1] };
  }
  return { browser: ua.slice(0, 80), browserVersion: "" };
}

function formatDateTime(value) {
  if (!value) return "unknown";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString();
}

function formatDate(value) {
  if (!value) return "not recorded";
  return String(value);
}

function outcomeLabel(id) {
  const outcome = OUTCOMES.find((entry) => entry.id === id);
  return outcome ? outcome.label : String(id);
}

function methodLabel(id) {
  const method = METHODS.find((entry) => entry.id === id);
  return method ? method.label : String(id);
}

function verificationLabel(id) {
  const state = VERIFICATION_STATES.find((entry) => entry.id === id);
  return state ? state.label : String(id);
}

function recordTitle(record) {
  if (record.title) return record.title;
  if (record.assessmentDefinitionId) {
    const procedure = globalThis.__openScansProcedures?.get(record.assessmentDefinitionId);
    if (procedure) return procedure.title;
  }
  if (record.actualBehaviour) return record.actualBehaviour.slice(0, 120);
  return record.kind === "journey" ? "User journey observation" : "Assessment record";
}

/**
 * Group records by success criterion so the coverage table can show a review
 * state per criterion.
 */
function summariseReviewByCriterion(records) {
  const byCriterion = new Map();
  for (const record of records) {
    for (const criterion of record.wcag ?? []) {
      if (!byCriterion.has(criterion)) byCriterion.set(criterion, []);
      byCriterion.get(criterion).push(record);
    }
  }
  return byCriterion;
}

function criterionReviewState(records) {
  if (!records || records.length === 0) return "none";
  const outcomes = new Set(records.map((record) => record.outcome));
  if (outcomes.has("failed")) return "failed";
  if (outcomes.has("requires-professional-review")) return "requires-professional-review";
  if (outcomes.has("requires-experiential-evaluation")) return "requires-experiential-evaluation";
  return "recorded";
}

/* ────────────────────────────── DOM rendering ───────────────────────────── */

function el(tag, options = {}) {
  const node = document.createElement(tag);
  if (options.text !== undefined) node.textContent = options.text;
  if (options.className) node.className = options.className;
  if (options.id) node.id = options.id;
  if (options.type) node.setAttribute("type", options.type);
  if (options.attrs) {
    for (const [name, value] of Object.entries(options.attrs)) {
      if (value !== null && value !== undefined) node.setAttribute(name, String(value));
    }
  }
  for (const child of options.children ?? []) {
    if (child) node.appendChild(child);
  }
  return node;
}

function renderRecordsTable(container, state) {
  if (!container) return;
  container.textContent = "";
  const records = state.document?.records ?? [];
  if (records.length === 0) return;

  const table = el("table");
  const caption = el("caption", { text: `Recorded assessments (${records.length})` });
  table.appendChild(caption);
  const thead = el("thead");
  const headRow = el("tr");
  for (const label of ["Date tested", "Assessment", "Outcome", "Method", "Verification", "Actions"]) {
    headRow.appendChild(el("th", { text: label, attrs: { scope: "col" } }));
  }
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = el("tbody");
  for (const record of records) {
    const row = el("tr", { attrs: { "data-record-id": record.recordId } });
    if ((record.conflictsWith ?? []).length > 0) row.className = "assessment-conflict";
    row.appendChild(el("td", { text: formatDate(record.testingDate) }));

    const titleCell = el("td");
    titleCell.appendChild(el("strong", { text: recordTitle(record) }));
    if ((record.wcag ?? []).length > 0) {
      titleCell.appendChild(el("div", { className: "assessment-help", text: `WCAG ${record.wcag.join(", ")}` }));
    }
    if (record.requiresRevalidation) {
      titleCell.appendChild(el("div", { className: "assessment-help", text: "Imported from another scan — needs revalidation." }));
    }
    if ((record.conflictsWith ?? []).length > 0) {
      titleCell.appendChild(el("div", { className: "assessment-help", text: "Conflicting observations are kept separately." }));
    }
    row.appendChild(titleCell);

    row.appendChild(el("td", { text: outcomeLabel(record.outcome) }));
    row.appendChild(el("td", { text: methodLabel(record.method) }));
    row.appendChild(el("td", { text: verificationLabel(record.verification) }));

    const actions = el("td");
    const group = el("div", { className: "assessment-record-actions" });
    const issueButton = el("button", {
      className: "btn",
      type: "button",
      text: "Issue report",
      attrs: { "data-action": "issue", "data-record-id": record.recordId, "aria-label": `Build developer issue report for ${recordTitle(record)}` }
    });
    const deleteButton = el("button", {
      className: "btn",
      type: "button",
      text: "Delete",
      attrs: { "data-action": "delete", "data-record-id": record.recordId, "aria-label": `Delete assessment record for ${recordTitle(record)}` }
    });
    group.appendChild(issueButton);
    group.appendChild(deleteButton);
    actions.appendChild(group);
    row.appendChild(actions);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  container.appendChild(table);
}

function updateReviewCells(state) {
  const byCriterion = summariseReviewByCriterion(state.document?.records ?? []);
  const rows = document.querySelectorAll("[data-criterion-row]");
  for (const row of rows) {
    const criterion = row.getAttribute("data-criterion-id");
    const cell = row.querySelector("[data-review-cell]");
    const records = byCriterion.get(criterion) ?? [];
    const stateName = criterionReviewState(records);
    row.setAttribute("data-review-state", stateName);
    if (!cell) continue;
    cell.setAttribute("data-review-outcome", stateName);
    cell.textContent = "";
    if (records.length === 0) {
      cell.appendChild(el("span", { className: "assessment-empty", text: "No assessment recorded" }));
      continue;
    }
    const latest = [...records].sort((a, b) => String(b.recordedAt).localeCompare(String(a.recordedAt)))[0];
    cell.appendChild(el("span", { text: `${records.length} record${records.length === 1 ? "" : "s"}` }));
    cell.appendChild(el("div", { className: "assessment-help", text: outcomeLabel(latest.outcome) }));
  }
}

function updateHumanSummary(state) {
  const container = document.getElementById("assessment-human-summary");
  const notice = document.getElementById("assessment-human-notice");
  if (!container) return;
  container.textContent = "";
  const records = state.document?.records ?? [];
  if (records.length === 0) {
    container.appendChild(el("p", { className: "assessment-empty", text: "No assessment recorded in this report." }));
    if (notice) {
      const heading = notice.querySelector("h3");
      if (heading) heading.textContent = "No manual accessibility testing recorded";
    }
    return;
  }

  const summary = countRecords(records);
  const pages = [...new Set(records.map((record) => record.testedUrl).filter(Boolean))];
  const categories = [...new Set(records
    .map((record) => (record.assessmentDefinitionId ? state.procedures.get(record.assessmentDefinitionId)?.category : null))
    .filter(Boolean))];
  const list = el("dl", { className: "assessment-counts" });
  const add = (term, value, context) => {
    const item = el("div", { className: "assessment-count" });
    item.appendChild(el("dt", { text: term }));
    const dd = el("dd", { text: value });
    if (context) dd.appendChild(el("span", { className: "assessment-count-context", text: context }));
    item.appendChild(dd);
    list.appendChild(item);
  };
  add("Records", String(summary.total), `${summary.reviewedInstances} linked to a specific observed instance`);
  add("Most recent testing date", formatDate(summary.latestTestingDate), `Earliest recorded: ${formatDate(summary.earliestTestingDate)}`);
  add("Pages covered", String(pages.length), pages.length > 0 ? pages.slice(0, 3).join(", ") : "No page URL recorded");
  add(
    "Assessment categories",
    String(categories.length || "0"),
    categories.length > 0 ? categories.join(", ") : "Not recorded"
  );
  add("Methods used", String(Object.keys(summary.byMethod).length), Object.keys(summary.byMethod).map(methodLabel).join(", ") || "None");
  add(
    "Remaining gaps",
    String(countCriteriaWithoutRecord()),
    "Criteria in the coverage table with no recorded human review in this report"
  );
  container.appendChild(list);
  if (summary.revalidationRecords > 0) {
    container.appendChild(
      el("p", {
        className: "assessment-help",
        text: `${summary.revalidationRecords} record(s) came from a different scan and need revalidation against this one.`
      })
    );
  }
  container.appendChild(
    el("p", {
      className: "assessment-help",
      text: "Testing may also have been performed elsewhere and not recorded here. A record describes one reviewer's observation, not conformance."
    })
  );
  if (notice) {
    const heading = notice.querySelector("h3");
    if (heading) heading.textContent = "Human assessment recorded in this report";
  }
}

function countCriteriaWithoutRecord() {
  const rows = document.querySelectorAll("[data-criterion-row]");
  let count = 0;
  for (const row of rows) if (row.getAttribute("data-review-state") === "none") count += 1;
  return count;
}

function setStatus(state, message, { warn = false } = {}) {
  const element = document.getElementById("assessment-status");
  if (!element) return;
  element.classList.toggle("assessment-status--warn", warn);
  element.textContent = message;
}

function updateSaveTimes(state) {
  const element = document.getElementById("assessment-save-times");
  if (!element) return;
  const parts = [];
  parts.push(state.persistent ? "Saved in this browser" : "Not saved persistently");
  parts.push(`Last saved: ${formatDateTime(state.lastSavedAt)}`);
  if (state.lastExportedAt) parts.push(`Last exported: ${formatDateTime(state.lastExportedAt)}`);
  element.textContent = parts.join(" · ");
}

function announce(state, message, options) {
  setStatus(state, message, options);
  updateSaveTimes(state);
}

/* ─────────────────────────────── Persistence ────────────────────────────── */

function persist(state, { announceMessage = "Assessment saved locally." } = {}) {
  const serialized = JSON.stringify(state.document);
  const result = state.storage.write(serialized);
  state.persistent = result.ok && result.persistent;
  if (result.ok) {
    state.lastSavedAt = new Date().toISOString();
    announce(
      state,
      result.persistent
        ? announceMessage
        : `${announceMessage} Stored in memory only for this session — export a JSON file to keep it.`,
      { warn: !result.persistent }
    );
    return true;
  }
  state.lastSavedAt = null;
  announce(state, result.reason || "Could not save this assessment locally.", { warn: true });
  return false;
}

function loadInto(state) {
  const stored = parseStoredDocument(state.storage.read());
  if (stored.problem) {
    state.problem = stored.problem;
    announce(state, stored.problem, { warn: true });
  }
  if (stored.document) {
    state.document = stored.document;
    state.lastSavedAt = stored.document.updatedAt ?? null;
    state.persistent = state.storage.available;
    announce(
      state,
      `Assessment restored from this browser: ${countRecords(state.document.records).total} record(s).`,
      { warn: !state.persistent }
    );
  }
  if (!state.storage.available) {
    announce(
      state,
      `${state.storage.reason} Assessments will be kept in memory for this session only; export a JSON file to keep them.`,
      { warn: true }
    );
  }
}

/* ──────────────────────────────── Records ───────────────────────────────── */

function addRecord(state, record) {
  const validation = validateRecord(record);
  if (!validation.ok) {
    return { ok: false, errors: validation.errors };
  }
  state.document.records.push(record);
  state.document.updatedAt = new Date().toISOString();
  persist(state, { announceMessage: `Assessment record saved. ${countRecords(state.document.records).total} record(s) in this report.` });
  refreshAll(state);
  return { ok: true, errors: [] };
}

function deleteRecord(state, recordId) {
  const before = state.document.records.length;
  state.document.records = state.document.records.filter((record) => record.recordId !== recordId);
  if (state.document.records.length === before) return false;
  state.document.updatedAt = new Date().toISOString();
  persist(state, { announceMessage: "Assessment record deleted." });
  refreshAll(state);
  return true;
}

function refreshAll(state) {
  renderRecordsTable(document.getElementById("assessment-records"), state);
  updateReviewCells(state);
  updateHumanSummary(state);
  applyFilters(state);
  updateSaveTimes(state);
}

/* ────────────────────────────────── Forms ───────────────────────────────── */

function readFormValue(form, name) {
  const element = form.elements.namedItem(name);
  return element ? String(element.value ?? "").trim() : "";
}

function formErrors(container, errors, headingText = "This record was not saved. Check the following:") {
  if (!container) return;
  container.textContent = "";
  if (!errors || errors.length === 0) return;
  const heading = el("p", { text: headingText });
  container.appendChild(heading);
  const list = el("ul");
  for (const error of errors) list.appendChild(el("li", { text: error }));
  container.appendChild(list);
}

function buildRecordFromSharedProcedureForm(form, state) {
  const definitionId = readFormValue(form, "assessmentDefinitionId");
  const procedure = state.procedures.get(definitionId);
  return createRecord({
    kind: "procedure",
    assessmentDefinitionId: definitionId || null,
    assessmentCatalogueVersion: state.catalogue?.catalogueVersion ?? null,
    title: procedure ? procedure.title : definitionId,
    testedUrl: readFormValue(form, "testedUrl"),
    outcome: readFormValue(form, "outcome"),
    method: readFormValue(form, "method") || "guided-manual",
    testingDate: readFormValue(form, "testingDate"),
    reviewerNotes: readFormValue(form, "reviewerNotes"),
    verification: readFormValue(form, "verification") || "self-attested",
    wcag: procedure ? procedure.criteria : [],
    scope: "Single procedure recorded from a downloaded report.",
    environment: {
      ...describeBrowser(),
      colorScheme: matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      forcedColors: matchMedia("(forced-colors: active)").matches ? "active" : "none",
      reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduce" : "no-preference"
    },
    provenance: { source: "open-scans-report" }
  });
}

function buildRecordFromFindingForm(form) {
  const criteria = readFormValue(form, "wcag")
    .split(/[,\s]+/)
    .map((value) => value.trim())
    .filter((value) => /^\d\.\d\.\d+$/.test(value));
  return createRecord({
    kind: "finding",
    title: readFormValue(form, "title"),
    testedUrl: readFormValue(form, "testedUrl"),
    component: readFormValue(form, "component"),
    outcome: readFormValue(form, "outcome") || "failed",
    method: readFormValue(form, "method") || "guided-manual",
    testingDate: readFormValue(form, "testingDate"),
    actualBehaviour: readFormValue(form, "actualBehaviour"),
    expectedBehaviour: readFormValue(form, "expectedBehaviour"),
    userImpact: readFormValue(form, "userImpact"),
    reviewerNotes: readFormValue(form, "reviewerNotes"),
    verification: readFormValue(form, "verification") || "self-attested",
    wcag: criteria,
    environment: {
      browser: readFormValue(form, "browser") || describeBrowser().browser,
      assistiveTechnology: readFormValue(form, "assistiveTechnology")
    },
    relationToAutomated: "none",
    provenance: { source: "open-scans-report" }
  });
}

function buildRecordFromExperientialForm(form) {
  return createRecord({
    kind: "evaluation",
    title: readFormValue(form, "title"),
    testedUrl: readFormValue(form, "testedUrl"),
    outcome: readFormValue(form, "outcome") || "inconclusive",
    method: readFormValue(form, "method") || "professional-evaluation",
    testingDate: readFormValue(form, "testingDate"),
    scope: readFormValue(form, "scope"),
    reviewerNotes: readFormValue(form, "reviewerNotes"),
    verification: readFormValue(form, "verification") || "self-attested",
    environment: {
      browser: readFormValue(form, "browser") || describeBrowser().browser,
      assistiveTechnology: readFormValue(form, "assistiveTechnology"),
      os: readFormValue(form, "os"),
      colorScheme: matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      forcedColors: matchMedia("(forced-colors: active)").matches ? "active" : "none",
      reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduce" : "no-preference"
    },
    provenance: { source: "open-scans-report" }
  });
}

function wireForms(state) {
  for (const button of document.querySelectorAll("[data-record-procedure]")) {
    button.addEventListener("click", () => {
      const procedureId = button.getAttribute("data-record-procedure");
      const select = document.getElementById("procedure-select");
      const form = document.getElementById("procedure-record-form");
      if (!select || !form) return;
      select.value = procedureId;
      const heading = document.getElementById("procedure-record-heading");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
      select.focus();
      announce(state, "Procedure selected. Complete the outcome form to save a record.");
    });
  }

  const forms = document.querySelectorAll("[data-assessment-form]");
  for (const form of forms) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const errorsContainer = form.querySelector("[data-assessment-errors]");
      const kind = form.getAttribute("data-assessment-form");
      let record;
      try {
        if (kind === "procedure-shared") record = buildRecordFromSharedProcedureForm(form, state);
        else if (kind === "finding") record = buildRecordFromFindingForm(form);
        else record = buildRecordFromExperientialForm(form);
      } catch (error) {
        formErrors(errorsContainer, [`Unexpected error building the record: ${error.message}`]);
        return;
      }
      if (kind === "procedure-shared" && !record.assessmentDefinitionId) {
        formErrors(errorsContainer, ["Choose the procedure you performed."]);
        return;
      }
      const result = addRecord(state, record);
      if (!result.ok) {
        formErrors(errorsContainer, result.errors);
        return;
      }
      formErrors(errorsContainer, []);
      form.reset();
      const dateField = form.elements.namedItem("testingDate");
      if (dateField) dateField.value = new Date().toISOString().slice(0, 10);
      // Deliberately no focus move after recording an outcome. Some engines drop
      // focus to the document when a prevented submit replaces page content; in
      // that case put focus back on the button the user activated.
      if (!form.contains(document.activeElement)) {
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) submitButton.focus();
      }
      announce(
        state,
        `Assessment recorded: ${outcomeLabel(record.outcome)}. ${countRecords(state.document.records).total} record(s) stored.`,
        { warn: !state.persistent }
      );
    });
  }
}

/* ──────────────────────────────── Filtering ─────────────────────────────── */

function applyFilters(state) {
  const rows = [...document.querySelectorAll("[data-criterion-row]")];
  if (rows.length === 0) return;
  const filters = state.filters ?? {};
  let visible = 0;
  for (const row of rows) {
    const level = row.getAttribute("data-level") ?? "";
    const evidence = row.getAttribute("data-evidence-state") ?? "";
    const review = row.getAttribute("data-review-state") ?? "none";
    const categories = (row.getAttribute("data-categories") ?? "").split(/\s+/).filter(Boolean);
    const roles = (row.getAttribute("data-roles") ?? "").split(/\s+/).filter(Boolean);
    const text = row.textContent.toLowerCase();

    const matches =
      (!filters.level || filters.level === "all" || filters.level === level) &&
      (!filters.evidence || filters.evidence === "all" || filters.evidence === evidence) &&
      (!filters.review ||
        filters.review === "all" ||
        (filters.review === "none" && review === "none") ||
        (filters.review === "recorded" && review !== "none") ||
        filters.review === review) &&
      (!filters.category || filters.category === "all" || categories.includes(filters.category)) &&
      (!filters.role || filters.role === "all" || roles.includes(filters.role)) &&
      (!filters.text || text.includes(filters.text.toLowerCase()));

    row.hidden = !matches;
    if (matches) visible += 1;
  }
  const counter = document.getElementById("assessment-filter-count");
  if (counter) {
    counter.textContent = `${visible} of ${rows.length} criteria shown. Every criterion remains in the report and the downloadable JSON.`;
  }

  const procedures = [...document.querySelectorAll("[data-procedure-id]")];
  let visibleProcedures = 0;
  for (const procedure of procedures) {
    const categories = (procedure.getAttribute("data-categories") ?? "").split(/\s+/).filter(Boolean);
    const roles = (procedure.getAttribute("data-roles") ?? "").split(/\s+/).filter(Boolean);
    const criteria = (procedure.getAttribute("data-criteria") ?? "").split(/\s+/).filter(Boolean);
    const matches =
      (!state.procedureFilters.category ||
        state.procedureFilters.category === "all" ||
        categories.includes(state.procedureFilters.category)) &&
      (!state.procedureFilters.role ||
        state.procedureFilters.role === "all" ||
        roles.includes(state.procedureFilters.role)) &&
      (!state.procedureFilters.criterion ||
        state.procedureFilters.criterion === "all" ||
        criteria.includes(state.procedureFilters.criterion));
    procedure.hidden = !matches;
    if (matches) visibleProcedures += 1;
  }
  const procedureCounter = document.getElementById("procedure-filter-count");
  if (procedureCounter) {
    procedureCounter.textContent = `${visibleProcedures} of ${procedures.length} procedures shown.`;
  }
}

function wireFilters(state) {
  for (const select of document.querySelectorAll("[data-assessment-filter]")) {
    select.addEventListener("change", () => {
      state.filters[select.getAttribute("data-assessment-filter")] = select.value;
      applyFilters(state);
    });
  }
  const text = document.querySelector('[data-assessment-filter="text"]');
  if (text) {
    text.addEventListener("input", () => {
      state.filters.text = text.value.trim();
      applyFilters(state);
    });
  }
  const clear = document.getElementById("assessment-clear-filters");
  if (clear) {
    clear.addEventListener("click", () => {
      state.filters = {};
      for (const select of document.querySelectorAll("[data-assessment-filter]")) select.value = "all";
      if (text) text.value = "";
      applyFilters(state);
      announce(state, "Filters cleared.");
    });
  }
  for (const select of document.querySelectorAll("[data-procedure-filter]")) {
    select.addEventListener("change", () => {
      state.procedureFilters[select.getAttribute("data-procedure-filter")] = select.value;
      applyFilters(state);
    });
  }
}

/* ────────────────────────────── Export / import ─────────────────────────── */

function downloadFile(filename, contents, type) {
  const blob = new Blob([contents], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function exportFilename(state, suffix) {
  const reportId = String(state.report?.reportId ?? "report").replace(/[^a-zA-Z0-9]+/g, "-");
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `open-scans-assessment-${reportId}-${stamp}${suffix}`;
}

function exportDocument(state) {
  state.document.exportedAt = new Date().toISOString();
  state.document.updatedAt = state.document.exportedAt;
  const serialized = JSON.stringify(state.document, null, 2);
  downloadFile(exportFilename(state, ".json"), serialized, "application/json");
  state.lastExportedAt = state.document.exportedAt;
  persist(state, { announceMessage: "Assessment exported to a JSON file. Local records are unchanged." });
}

function readFileText(file) {
  if (typeof file.text === "function") return file.text();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("Could not read the file."));
    reader.readAsText(file);
  });
}

function renderImportPreview(state, document_, association) {
  const container = document.getElementById("assessment-import-preview");
  const details = document.getElementById("assessment-import-details");
  const status = document.getElementById("assessment-import-status");
  if (!container || !details) return;
  details.textContent = "";
  const summary = summariseDocument(document_);
  const rows = [
    ["Source report", summary.reportAssociation?.reportId ?? "unknown"],
    ["Source scan", summary.reportAssociation?.scannedAt ?? "unknown"],
    ["Records", String(summary.recordCount)],
    ["Pages", `${summary.urlCount}${summary.urls.length ? `: ${summary.urls.slice(0, 3).join(", ")}` : ""}`],
    ["Testing dates", `${formatDate(summary.earliestTestingDate)} to ${formatDate(summary.latestTestingDate)}`],
    ["Exported", summary.exportedAt ? formatDateTime(summary.exportedAt) : "not recorded"],
    ["Catalogue", summary.catalogueVersion ?? "not recorded"],
    ["Conflicts in file", String(summary.conflictCount)],
    ["Needs revalidation", String(summary.revalidationRequiredCount)],
    ["Compatibility", association.reason]
  ];
  for (const [term, value] of rows) {
    details.appendChild(el("dt", { text: term }));
    details.appendChild(el("dd", { text: value }));
  }
  container.hidden = false;
  if (status) status.textContent = "";
}

function wireExportImport(state) {
  const exportButton = document.getElementById("assessment-export");
  if (exportButton) exportButton.addEventListener("click", () => exportDocument(state));

  const fileInput = document.getElementById("assessment-import-file");
  if (fileInput) {
    fileInput.addEventListener("change", async () => {
      const errors = document.getElementById("assessment-import-errors");
      const preview = document.getElementById("assessment-import-preview");
      if (errors) errors.textContent = "";
      if (preview) preview.hidden = true;
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      if (file.size > MAX_IMPORT_BYTES) {
        formErrors(errors, [`The file is larger than ${Math.round(MAX_IMPORT_BYTES / 1024 / 1024)} MB and was not read.`], "Import stopped. Nothing was changed.");
        return;
      }
      let text;
      try {
        text = await readFileText(file);
      } catch (error) {
        formErrors(errors, [`The file could not be read: ${error.message}`], "Import stopped. Nothing was changed.");
        return;
      }
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        formErrors(errors, ["The file is not valid JSON."], "Import stopped. Nothing was changed.");
        return;
      }
      const validation = validateAssessmentDocument(parsed, { maxBytes: MAX_IMPORT_BYTES, byteLength: file.size });
      if (!validation.ok) {
        formErrors(errors, validation.errors, "Import stopped. Nothing was changed.");
        return;
      }
      const association = describeAssociation(state.report, validation.document);
      state.pendingImport = { document: validation.document, association };
      renderImportPreview(state, validation.document, association);
      announce(state, "Assessment file validated. Review the preview before merging.", { warn: !association.sameReport });
    });
  }

  const cancel = document.getElementById("assessment-import-cancel");
  if (cancel) {
    cancel.addEventListener("click", () => {
      state.pendingImport = null;
      const preview = document.getElementById("assessment-import-preview");
      if (preview) preview.hidden = true;
      if (fileInput) fileInput.value = "";
      announce(state, "Import cancelled. Local assessment is unchanged.");
    });
  }

  const merge = document.getElementById("assessment-import-merge");
  if (merge) {
    merge.addEventListener("click", () => {
      const status = document.getElementById("assessment-import-status");
      const pending = state.pendingImport;
      if (!pending) {
        if (status) status.textContent = "Choose a file and review it before importing.";
        return;
      }
      if (pending.association.foreignReport) {
        if (status) {
          status.textContent =
            "This file belongs to a different report. Merging would mix unrelated results; use Replace only if you are certain, or import it into its own report.";
        }
        return;
      }
      const result = mergeAssessmentDocuments(state.document, pending.document, {
        requiresRevalidation: pending.association.requiresRevalidation === true
      });
      state.document = result.document;
      state.document.updatedAt = new Date().toISOString();
      persist(state, {
        announceMessage:
          `Imported: ${result.summary.added} added, ${result.summary.skippedIdentical} already present, ` +
          `${result.summary.conflicts} conflict(s) preserved.`
      });
      refreshAll(state);
      state.pendingImport = null;
      const preview = document.getElementById("assessment-import-preview");
      if (preview) preview.hidden = true;
      if (fileInput) fileInput.value = "";
      announce(
        state,
        `Import complete: ${result.summary.added} added, ${result.summary.conflicts} conflicting record(s) kept alongside the originals.`
      );
    });
  }

  const replace = document.getElementById("assessment-import-replace");
  if (replace) {
    let armed = false;
    replace.addEventListener("click", () => {
      const status = document.getElementById("assessment-import-status");
      const pending = state.pendingImport;
      if (!pending) {
        if (status) status.textContent = "Choose a file and review it before replacing.";
        return;
      }
      if (pending.association.foreignReport) {
        if (status) {
          status.textContent =
            "This file belongs to a different report. Replacing would move unrelated results into this scan, so it is blocked. Open the report the assessment belongs to and import it there.";
        }
        return;
      }
      if (!armed) {
        armed = true;
        if (status) {
          status.textContent =
            "Press \u201cReplace local assessment\u201d again to discard the records currently stored here and use the imported file instead. Export a backup first if you need one.";
        }
        setTimeout(() => {
          armed = false;
        }, 15000);
        return;
      }
      armed = false;
      const importedAt = new Date().toISOString();
      state.document = {
        ...pending.document,
        importedAt,
        updatedAt: importedAt,
        records: pending.document.records.map((record) => ({
          ...record,
          importedAt,
          requiresRevalidation: pending.association.requiresRevalidation === true || record.requiresRevalidation
        }))
      };
      persist(state, { announceMessage: `Assessment replaced with ${state.document.records.length} imported record(s).` });
      refreshAll(state);
      state.pendingImport = null;
      const preview = document.getElementById("assessment-import-preview");
      if (preview) preview.hidden = true;
      const fileInput = document.getElementById("assessment-import-file");
      if (fileInput) fileInput.value = "";
      announce(state, `Local assessment replaced with ${state.document.records.length} imported record(s).`);
    });
  }
}

/* ────────────────────────────── Issue reporting ─────────────────────────── */

function showIssuePreview(state, recordId) {
  const record = (state.document?.records ?? []).find((entry) => entry.recordId === recordId);
  if (!record) return;
  const procedure = record.assessmentDefinitionId ? state.procedures.get(record.assessmentDefinitionId) : null;
  const issue = buildIssueReport(record, { report: state.report, procedure });
  state.currentIssue = issue;
  const container = document.getElementById("assessment-issue-output");
  const textarea = document.getElementById("assessment-issue-text");
  const errors = document.getElementById("assessment-issue-errors");
  const status = document.getElementById("assessment-copy-status");
  if (errors) errors.textContent = "";
  if (status) status.textContent = "";
  if (textarea) {
    textarea.value = issue.markdown;
    textarea.readOnly = false;
  }
  if (container) container.hidden = false;
  const heading = document.getElementById("assessment-issue-output-heading");
  if (heading) {
    heading.textContent = `Developer issue report: ${issue.title}`;
    heading.setAttribute("tabindex", "-1");
    heading.focus();
  }
}

async function copyIssueText(state) {
  const textarea = document.getElementById("assessment-issue-text");
  const status = document.getElementById("assessment-copy-status");
  if (!textarea) return;
  const text = textarea.value;
  let copied = false;
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch {
    copied = false;
  }
  if (!copied) {
    try {
      textarea.focus();
      textarea.select();
      copied = typeof document.execCommand === "function" && document.execCommand("copy");
    } catch {
      copied = false;
    }
  }
  if (status) {
    status.textContent = copied
      ? "Issue text copied to the clipboard."
      : "Copying was blocked in this context. Use “Select all issue text” and copy manually, or download the Markdown file.";
  }
}

function wireIssueActions(state) {
  document.addEventListener("click", (event) => {
    const button = event.target?.closest?.("[data-action]");
    if (!button) return;
    const action = button.getAttribute("data-action");
    const recordId = button.getAttribute("data-record-id");
    if (!recordId) return;
    if (action === "issue") showIssuePreview(state, recordId);
    if (action === "delete") {
      const confirmed = globalThis.confirm
        ? globalThis.confirm("Delete this assessment record? This cannot be undone. Export a backup first if you are unsure.")
        : false;
      if (!confirmed) return;
      deleteRecord(state, recordId);
      announce(state, "Assessment record deleted.");
    }
  });

  const copy = document.getElementById("assessment-copy-issue");
  if (copy) copy.addEventListener("click", () => copyIssueText(state));

  const selectAll = document.getElementById("assessment-select-issue");
  if (selectAll) {
    selectAll.addEventListener("click", () => {
      const textarea = document.getElementById("assessment-issue-text");
      if (!textarea) return;
      textarea.focus();
      textarea.select();
      const status = document.getElementById("assessment-copy-status");
      if (status) status.textContent = "Issue text selected. Press Control or Command plus C to copy.";
    });
  }

  const downloadIssue = document.getElementById("assessment-download-issue");
  if (downloadIssue) {
    downloadIssue.addEventListener("click", () => {
      const issue = state.currentIssue;
      if (!issue) return;
      const textarea = document.getElementById("assessment-issue-text");
      const markdown = textarea ? textarea.value : issue.markdown;
      downloadFile(exportFilename(state, "-issue.md"), markdown, "text/markdown");
      announce(state, "Issue report downloaded as Markdown.");
    });
  }

  const downloadEvidence = document.getElementById("assessment-download-evidence");
  if (downloadEvidence) {
    downloadEvidence.addEventListener("click", () => {
      const issue = state.currentIssue;
      if (!issue) return;
      downloadFile(exportFilename(state, "-issue.json"), JSON.stringify(issue.json, null, 2), "application/json");
      announce(state, "Issue evidence downloaded as JSON.");
    });
  }

  const close = document.getElementById("assessment-close-issue");
  if (close) {
    close.addEventListener("click", () => {
      const container = document.getElementById("assessment-issue-output");
      if (container) container.hidden = true;
      state.currentIssue = null;
      const trigger = document.querySelector("[data-action='issue']");
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    });
  }
}

/* ───────────────────────────────── Reset ────────────────────────────────── */

function wireReset(state) {
  const button = document.getElementById("assessment-reset");
  if (!button) return;
  let armed = false;
  button.addEventListener("click", () => {
    if (!armed) {
      armed = true;
      button.textContent = "Confirm: clear all local assessment records for this report";
      announce(state, "Press the button again to clear local assessment records. Export a JSON backup first.", { warn: true });
      setTimeout(() => {
        armed = false;
        button.textContent = "Clear local assessment for this report";
      }, 15000);
      return;
    }
    armed = false;
    button.textContent = "Clear local assessment for this report";
    const result = state.storage.remove();
    state.document = createAssessmentDocument({ report: state.report, catalogue: state.catalogue });
    state.lastSavedAt = null;
    state.lastExportedAt = null;
    refreshAll(state);
    announce(
      state,
      result.ok
        ? "Local assessment records cleared for this report. Automated evidence is unchanged."
        : result.reason || "Local assessment records could not be cleared.",
      { warn: !result.ok }
    );
  });
}

/* ────────────────────────────────── Init ────────────────────────────────── */

function readContext() {
  const element = document.getElementById("assessment-context");
  if (!element) return null;
  try {
    return JSON.parse(element.textContent ?? "{}");
  } catch {
    return null;
  }
}

function collectProcedures() {
  const map = new Map();
  for (const card of document.querySelectorAll("[data-procedure-id]")) {
    const id = card.getAttribute("data-procedure-id");
    const category = card.getAttribute("data-categories") || "";
    const criteria = (card.getAttribute("data-criteria") || "").split(/\s+/).filter(Boolean);
    const heading = card.querySelector("h4");
    const steps = [...card.querySelectorAll("ol > li")].map((item) => item.textContent ?? "");
    const expected = [...card.querySelectorAll("p")].find((paragraph) =>
      (paragraph.textContent ?? "").startsWith("What a pass looks like:")
    );
    map.set(id, {
      id,
      title: heading ? heading.textContent : id,
      category,
      criteria,
      steps,
      expected: expected ? (expected.textContent ?? "").replace(/^What a pass looks like:\s*/, "") : ""
    });
  }
  return map;
}

function init() {
  const context = readContext();
  if (!context || !context.report) return;
  const storageKey = buildStorageKey(context.report.reportId, context.schemaVersion);
  const state = {
    report: context.report,
    catalogue: context.catalogue ?? null,
    procedures: collectProcedures(),
    storage: createStorageAdapter(storageKey),
    document: createAssessmentDocument({ report: context.report, catalogue: context.catalogue }),
    persistent: false,
    lastSavedAt: null,
    lastExportedAt: null,
    filters: {},
    procedureFilters: {},
    pendingImport: null,
    currentIssue: null
  };

  globalThis.__openScansProcedures = state.procedures;
  document.documentElement.classList.add("js");

  loadInto(state);
  wireForms(state);
  wireFilters(state);
  wireExportImport(state);
  wireIssueActions(state);
  wireReset(state);
  refreshAll(state);

  state.storage.onChange(() => {
    loadInto(state);
    refreshAll(state);
    announce(state, "Assessment data changed in another tab and was reloaded.", { warn: !state.storage.available });
  });

  if (new URLSearchParams(globalThis.location?.search ?? "").get("assessment") === "1") {
    announce(state, "Assessment workspace ready.");
  }
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}

// Exposed for the report page and for unit tests that execute the bundle.
globalThis.OpenScansAssessment = {
  version: RUNTIME_VERSION,
  buildStorageKey,
  parseStoredDocument,
  summariseReviewByCriterion,
  criterionReviewState,
  createStorageAdapter,
  MAX_IMPORT_BYTES
};
