# Manual assessment

**Status:** Phase 1. Guided procedures and local recording are implemented. Assisted
collectors (headings, images, links), keyboard/focus interaction assessment and user
journey testing are not implemented — see the status table at the end.

This document explains what the report's manual assessment workspace does, how to use
it, and what it cannot establish.

---

## 1. What manual assessment is for

Automated engines test defined conditions. They cannot tell you whether:

- an image's alternative text conveys the same meaning as the image;
- a heading outline helps a screen reader user find the checkout;
- a "Read more" link is understandable in its sentence;
- an error message tells someone how to recover;
- a widget that looks like a tab set behaves like one with a keyboard;
- a caption track is accurate;
- a person with a disability can complete the task at all.

Manual assessment is the only way to find out. It is also not a single activity. Open
Scans separates four things that are often conflated:

| Activity | Who | What it establishes |
| :--- | :--- | :--- |
| Guided manual review | maintainer, content author | that a documented procedure succeeded or failed for the scope tested |
| Professional accessibility evaluation | accessibility specialist | expert judgement within a stated scope |
| Assistive technology testing | someone who regularly uses AT | how the page behaves with that technology |
| Lived-experience evidence / user research | people with disabilities | whether the task works for them, in their environment |

They can overlap. They are not interchangeable. No single person represents every
disability, assistive technology or environment, and the report says so.

---

## 2. Three pathways in the report

### Essential manual checks

Eight procedures aimed at maintainers and content authors:

1. Operate every interactive control with the keyboard.
2. Confirm the keyboard focus indicator is visible.
3. Check zoom, text resizing and reflow.
4. Review heading structure and heading text.
5. Judge whether alternative text conveys the right meaning.
6. Check that link purpose is clear in context.
7. Review form labels, instructions and required-field cues.
8. Trigger a validation error and review recovery.

These are a starting point, not a definition of accessibility. The report says so.

### Comprehensive guided assessment

Twenty procedures covering keyboard, focus, layout, structure, content, forms, media,
tables, widgets, perception and authentication. Filterable by category, responsibility
and success criterion. Each procedure states:

- a plain-language reason it matters;
- the steps to perform;
- what a pass looks like;
- its limitations — what it does not establish;
- the evidence to capture;
- the responsibilities it belongs to;
- the WCAG criteria it relates to.

Procedures are independently authored for Open Scans. Where a procedure relates to a
published Trusted Tester step or ARRM task, the relationship is stored as a reference
id in the WCAG Spine catalogue, not as copied text. The published sources remain
authoritative. Open Scans does not present ARRM or Trusted Tester procedures as its own
and does not present provisional mappings as official DHS procedures.

### Professional and experiential evaluation

A free-form record for an evaluator, AT user or research participant. The form asks
for a role and a method, not a name and not a diagnosis. It includes the W3C guidance
on involving users and a note about compensating participants.

### Reporting a barrier

The "Report a barrier you experienced" form does not require a scanner rule, a finding
id or a known WCAG criterion. An unmapped barrier is still worth reporting. The report
generates a usable developer issue from it.

---

## 3. Recording an outcome

1. Read the procedure and its limitations.
2. Perform the steps in a browser (and, where the procedure needs it, with assistive
   technology).
3. Choose the procedure in **Record a procedure outcome** — the button on each
   procedure card selects it for you.
4. Choose an outcome, the method, the date and (optionally) the page.
5. Write notes that describe what you observed and the scope.
6. Save.

Saving:

- writes only to this report's local storage namespace;
- never changes the automated evidence;
- never moves focus;
- announces the result through a polite live region;
- updates the coverage table's "Recorded human review" column and the missing-evidence
  notice.

### Outcome choice

| Outcome | Use when |
| :--- | :--- |
| Not evaluated | you have not started |
| In progress | you started and have not decided |
| Passed within evaluated scope | the procedure succeeded for the scope you record |
| Failed within evaluated scope | you observed a barrier |
| Not applicable | the requirement does not apply — explain why or provide evidence |
| Inconclusive | the evidence supports neither a pass nor a fail |
| Requires professional review | the observation needs accessibility expertise |
| Requires experiential evaluation | the observation needs testing by people with disabilities |

`Passed` is never a conformance claim. `Not applicable` without an explanation is
rejected at save time.

### Method choice

`Guided manual review`, `Professional accessibility evaluation`, `Assistive technology
testing`, `Lived-experience evidence`, `User research`, `Review of automated evidence`,
`AI-assisted interpretation`.

`Review of automated evidence` means a person looked at a scanner result. It is not new
human testing of the page. `AI-assisted interpretation` is unverified assistance and
must not be recorded as professional or experiential evidence.

---

## 4. Saving, exporting and importing

### Local save

- Key: `open-scans:assessment:v1:<reportId>`.
- If local storage is blocked (private browsing, `file://` in some browsers, storage
  disabled), the report says so and keeps records in memory for the session only.
- If a save fails (quota), the report says the save failed and recommends exporting.
- The report never says "saved" when the record is only in memory.

### Export

**Export assessment JSON** downloads the whole document, including report identity and
every record. This is the backup that survives clearing browser storage or moving the
file to another machine. The report shows when it was last saved and last exported.

### Import

1. Choose a JSON file (file input, keyboard accessible; no drag-and-drop required).
2. The file is size-capped and validated before anything changes.
3. A preview shows the source report, scan time, record count, pages, testing dates,
   catalogue version, conflicts in the file and compatibility.
4. **Merge** adds new records, skips identical ones, and preserves conflicts.
5. **Replace** discards current local records — two-step, blocked for foreign reports,
   and prompts for a backup first.

Importing from a different scan of the same issue marks every record
`requiresRevalidation` and shows a warning. Passing results are never inherited because
a URL looks unchanged.

### Reset

Clearing local assessment data is per report, requires a second press to confirm,
offers a 15-second window to reconsider, and does not touch unrelated browser storage.
Export first.

---

## 5. Developer issue reports

Every record can produce an issue:

- **Copy issue text** — clipboard with a fallback for blocked or insecure contexts.
- **Download Markdown** — the edited text, as a file.
- **Download JSON evidence** — the record plus report identity.
- **Select all issue text** — manual copy when the Clipboard API is unavailable.

The generated Markdown includes where available: title, affected page, component,
detection method, review status, outcome, WCAG/ACT references, automated finding
reference, user impact, reproduction steps, actual and expected behaviour, environment
(browser, OS, AT, viewport, zoom, colour scheme, forced colours, reduced motion), date
tested, element locator, HTML snippet, reviewer notes, source report, and known
limitations.

Missing information is written as an explicit placeholder, never invented. HTML
snippets are fenced, `<`/`>` escaped in inline text, and obvious credential patterns
redacted. The reporter can edit the text before copying or downloading.

Nothing is submitted anywhere. Preparing a GitHub issue in a repository is not
implemented; copying and downloading are.

---

## 6. What the workspace does not do

- It does not make manual testing mandatory. Automated results are always available
  first, and no interaction is required to read or download the report.
- It does not upload anything. There is no server, no account and no telemetry.
- It does not interpret a record as conformance.
- It does not merge automated findings into records, or records into findings.
- It does not hide the absence of records: the notice is not dismissible and reappears
  in every new report.
- It does not claim that untested criteria pass.

---

## 7. Practical guidance

- Test with test data. Never submit real purchases, financial transactions, account
  changes, deletions or real personal information.
- Record the scope you actually tested. "One page, keyboard only, Firefox 145" is more
  useful than "checked".
- If you are unsure whether something is a failure, record it as inconclusive or
  requires professional review. That is a legitimate outcome.
- Do not include personal or medical information in notes.
- Export regularly. Browser storage can be cleared by the browser, by the user or by
  policy.

---

## 8. Status

| Capability | Status |
| :--- | :--- |
| 20 procedures with steps, limitations and references | Implemented |
| Essential pathway | Implemented |
| Comprehensive pathway with filters | Implemented |
| Professional / experiential recording | Implemented |
| Manual barrier independent of automation | Implemented |
| Local persistence with honest failure states | Implemented |
| JSON export / import / merge / conflicts | Implemented |
| Per-record issue Markdown and JSON | Implemented |
| Clipboard fallback | Implemented in code; `file://` behaviour needs manual validation |
| Accessibility Insights JSON import | Not implemented (Phase 2) |
| Heading / image / link collectors | Capture merged (Phase 3a); no report surface yet (3b). See [ASSESSMENT-ARCHITECTURE.md](ASSESSMENT-ARCHITECTURE.md) §11 |
| Keyboard focus sequence recording | Not implemented (Phase 5) |
| User journey tasks | Not implemented (Phase 6) |
| Screenshots / recordings as evidence | Not implemented |
| Record redaction UI before export | Not implemented |
