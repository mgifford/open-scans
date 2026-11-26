/**
 * Manual assessment procedures.
 *
 * These are independently authored guidance steps for human evaluation. They are
 * not a transcription of Accessibility Insights, Trusted Tester or ARRM. Where a
 * procedure relates to a published procedure, the relationship is recorded as a
 * reference (`ttSteps`, `arrmTaskIds`) rather than copied text, and the published
 * source remains authoritative.
 *
 * Each procedure describes what a reviewer can observe, what outcome vocabulary
 * applies, and what the procedure cannot establish. Recording a procedure as
 * "passed" means "passed within the documented scope" — never WCAG conformance.
 *
 * @module assessment/procedures
 */
import { readFileSync } from "node:fs";

import { OUTCOMES, METHODS, VERIFICATION_STATES } from "./records.mjs";

export const PROCEDURES_SCHEMA = "a11y-manual-procedures/1";

export { OUTCOMES, METHODS, VERIFICATION_STATES };

/** The three review pathways offered by the report interface. */
export const PATHWAYS = Object.freeze({
  essential: {
    id: "essential",
    title: "Essential manual checks",
    summary:
      "A manageable starting point for website maintainers and content authors. It does not cover every WCAG requirement."
  },
  comprehensive: {
    id: "comprehensive",
    title: "Comprehensive guided assessment",
    summary:
      "Structured review across the requirements automation cannot decide, organised by category, criterion and role."
  },
  experiential: {
    id: "experiential",
    title: "Professional and experiential evaluation",
    summary:
      "Record an evaluation by a professional evaluator, an assistive technology user or a research participant. One evaluator never represents every disability, technology or environment."
  }
});

export const EFFORT = Object.freeze(["low", "medium", "high"]);

/**
 * @typedef {object} ManualProcedure
 * @property {string} id stable identifier used by assessment records
 * @property {string} title
 * @property {string} category
 * @property {string[]} pathways
 * @property {string[]} criteria WCAG success criteria ids
 * @property {string} why plain-language reason the procedure matters
 * @property {string[]} steps
 * @property {string} expected what a pass looks like
 * @property {string[]} limitations what the procedure does not establish
 * @property {string[]} evidence what to capture
 * @property {string[]} methods suggested assessment methods
 * @property {string[]} roles ARRM-style responsibilities
 * @property {string[]} ttSteps Trusted Tester step labels used upstream (reference only)
 * @property {string[]} arrmTaskIds ARRM task ids used upstream (reference only)
 * @property {"low"|"medium"|"high"} effort
 * @property {boolean} [requiresAssistiveTechnology]
 */

/** @type {ManualProcedure[]} */
export const PROCEDURES = [
  {
    id: "manual-keyboard-access",
    title: "Operate every interactive control with the keyboard",
    category: "keyboard",
    pathways: ["essential", "comprehensive"],
    criteria: ["2.1.1", "2.1.3"],
    why: "People who cannot use a mouse or touchscreen must be able to reach and operate every control with a keyboard or keyboard-like device.",
    steps: [
      "Load the page and click once in the browser content area so keyboard events reach the page.",
      "Press Tab repeatedly from the top of the page and note each control that receives focus.",
      "For each newly focused control, try to operate it using the keys a keyboard user would: Enter or Space for buttons, arrow keys and Enter for menus and listboxes, Escape to close overlays.",
      "Record any control you can see on screen but cannot reach or cannot operate with the keyboard."
    ],
    expected: "Every visible interactive control receives focus and can be operated without a pointing device.",
    limitations: [
      "Success does not prove that a screen reader announces the control correctly.",
      "Custom widgets may need their documented key set; check the widget's own guidance before calling it a failure.",
      "Programmatic focus changes performed by page scripts are not keyboard navigation and do not count as a pass."
    ],
    evidence: ["Control name and role", "Page URL", "Key sequence attempted", "What happened instead"],
    methods: ["guided-manual", "assistive-technology"],
    roles: ["Front-End Development", "UX Design"],
    ttSteps: ["2.A - Keyboard Accessible"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-focus-visible",
    title: "Confirm the keyboard focus indicator is visible",
    category: "focus",
    pathways: ["essential", "comprehensive"],
    criteria: ["2.4.7", "2.4.11"],
    why: "A keyboard user needs to see where they are before they act. A missing or low-contrast focus indicator makes navigation guesswork.",
    steps: [
      "Press Tab through the page and watch each focused control.",
      "Check the indicator against the page background, in light mode, dark mode and forced-colours mode if those states are available.",
      "Check that the indicator is not hidden behind sticky headers, overlays or clipping containers.",
      "Record controls whose focus indicator is absent, too faint to locate, or partly obscured."
    ],
    expected: "A clearly visible indicator identifies the currently focused control on every step of the tab sequence.",
    limitations: [
      "Judging indicator contrast by eye is not a measurement. Record it as an observation unless you measured it.",
      "Browsers apply their own default indicator; a custom style that removes it is a design decision, not a browser limitation."
    ],
    evidence: ["Control name", "Colour mode", "Screenshot or description of the indicator"],
    methods: ["guided-manual"],
    roles: ["Front-End Development", "UX Design"],
    ttSteps: ["2.B - Visible Focus Indicator"],
    arrmTaskIds: [],
    effort: "low"
  },
  {
    id: "manual-zoom-reflow",
    title: "Check zoom, text resizing and reflow",
    category: "layout",
    pathways: ["essential", "comprehensive"],
    criteria: ["1.4.4", "1.4.10", "1.4.12"],
    why: "Low-vision users enlarge text and zoom. Content that disappears, overlaps or requires two-dimensional scrolling off-screen becomes unusable.",
    steps: [
      "Zoom the browser or operating-system view to 200% and check that text remains readable and no content is clipped.",
      "Set the viewport equivalent to 320 CSS pixels wide at 400% zoom and scroll through the page.",
      "Check that content reflows into one column and that horizontal scrolling is limited to content that genuinely needs two dimensions, such as a data table or map.",
      "Repeat with a user text-spacing override (line height 1.5, paragraph spacing 2em, letter spacing 0.12em, word spacing 0.16em) and check for clipping.",
      "Record content that is lost, overlapping, truncated or only reachable by scrolling in two directions."
    ],
    expected: "Content stays readable and operable at 200% zoom and at a 320 CSS pixel viewport, and text-spacing overrides do not hide content.",
    limitations: [
      "A responsive layout can still fail specific controls; zooming does not replace testing each control.",
      "This procedure does not measure whether content remains understandable, only whether it is present and operable."
    ],
    evidence: ["Viewport or zoom level", "Affected content", "Screenshot where useful"],
    methods: ["guided-manual"],
    roles: ["Front-End Development", "UX Design"],
    ttSteps: ["8.A - Reflow", "8.B - Text Spacing"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-heading-structure",
    title: "Review heading structure and heading text",
    category: "structure",
    pathways: ["essential", "comprehensive"],
    criteria: ["1.3.1", "2.4.6", "2.4.10"],
    why: "Screen reader and voice-control users navigate by headings. Headings that are missing, mislabelled or purely decorative make the page outline misleading.",
    steps: [
      "List the headings in document order and compare the outline with the visible structure of the page.",
      "Check that each heading describes the content beneath it rather than a visual style such as 'Big blue text'.",
      "Check that text that looks like a heading is marked up as one, and that text marked up as a heading is not merely bold or enlarged body copy.",
      "Look for skipped levels. A skip is a signal to review, not a failure by itself: confirm whether the outline still makes sense."
    ],
    expected: "The heading outline matches the page's information structure and each heading is meaningful out of context.",
    limitations: [
      "Short pages may legitimately have a single heading.",
      "Heading order is a judgement about meaning; an automated rule can flag a skip but cannot confirm that the outline is wrong.",
      "Decorative headings that are correctly hidden from assistive technology are not a failure."
    ],
    evidence: ["Heading list with levels", "The heading that is misleading or missing"],
    methods: ["guided-manual"],
    roles: ["Content Authoring", "Front-End Development", "UX Design"],
    ttSteps: ["1.A - Heading Structure"],
    arrmTaskIds: [],
    effort: "low"
  },
  {
    id: "manual-alt-text-quality",
    title: "Judge whether alternative text conveys the right meaning",
    category: "content",
    pathways: ["essential", "comprehensive"],
    criteria: ["1.1.1"],
    why: "An alt attribute can be present and still be wrong. 'IMG_2034.jpg', 'logo' repeated twelve times, or a chart described only as 'chart' tells a screen reader user nothing useful.",
    steps: [
      "For each image, decide whether it is informative, decorative, functional (the only content of a link or button) or complex.",
      "For informative images, ask whether the alternative conveys the same meaning as the image in this context — not whether it describes the file.",
      "For decorative images, confirm the alternative is empty and the image is not announced.",
      "For functional images, confirm the alternative describes the action, not the picture.",
      "For complex images such as charts or diagrams, look for an adjacent description, data table or long description that carries the same information.",
      "Record images whose alternative is missing, uninformative, inaccurate or duplicated for distinct meaning."
    ],
    expected: "Every informative image has an alternative that serves the same purpose as the image, and decorative images are silent.",
    limitations: [
      "Only a human who understands the page's purpose can judge whether the meaning is equivalent.",
      "The same alternative text on two images may be correct or wrong depending on whether the images mean the same thing. Repetition alone is not a failure.",
      "This procedure does not evaluate images of text or CAPTCHA alternatives in depth; use the separate procedures."
    ],
    evidence: ["Image locator or visible context", "Current alternative text", "Why it does not convey the meaning"],
    methods: ["guided-manual", "professional-evaluation"],
    roles: ["Content Authoring", "UX Design"],
    ttSteps: ["7.A - Meaningful Image Name", "7.B - Decorative Image"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-link-purpose",
    title: "Check that link purpose is clear in context",
    category: "content",
    pathways: ["essential", "comprehensive"],
    criteria: ["2.4.4", "2.4.9"],
    why: "Link lists and voice-control commands expose link text out of context. 'Read more' repeated six times is unusable when read as a list.",
    steps: [
      "List every link and its accessible name.",
      "For links whose name repeats, confirm whether the surrounding sentence, heading or list item makes each destination distinguishable.",
      "Check that the accessible name contains the visible label so voice-control users can say what they see.",
      "Record links whose purpose cannot be determined from their name and context, and links where the visible text and accessible name say different things."
    ],
    expected: "Each link's purpose can be determined from its name, or from its name plus the context a screen reader user would encounter.",
    limitations: [
      "Repeated names are not automatically a failure: the requirement is purpose in context.",
      "Decorative or duplicate links can be acceptable when they lead to the same destination and are presented coherently.",
      "This procedure does not test where the link goes; a correct name on a broken destination still fails the task."
    ],
    evidence: ["Link text", "Accessible name", "Destination", "Nearby heading or sentence"],
    methods: ["guided-manual"],
    roles: ["Content Authoring", "Front-End Development"],
    ttSteps: ["6.A - Link Purpose"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-form-labels",
    title: "Review form labels, instructions and required-field cues",
    category: "forms",
    pathways: ["essential", "comprehensive"],
    criteria: ["1.3.1", "3.3.2", "4.1.2"],
    why: "A field without a programmatic label is announced as an unlabelled edit field. Visual proximity is not a label.",
    steps: [
      "For each field, confirm there is a visible label that describes the expected input.",
      "Confirm the visible label is also the accessible name, so speech input can target it.",
      "Check that instructions and required-field information appear before the field, not only as a colour or an asterisk.",
      "Check grouping for radio buttons, checkboxes and related fields.",
      "Record fields that are unlabelled, labelled only by placeholder text, or whose label does not match the accessible name."
    ],
    expected: "Every field has a visible, programmatic label and its instructions are available before the user reaches the field.",
    limitations: [
      "Placeholder text is not a label; it disappears as soon as the user types and is not reliably announced.",
      "An aria-label that replaces a visible label can pass an automated name check while failing voice control."
    ],
    evidence: ["Field", "Visible label", "Accessible name", "Instruction location"],
    methods: ["guided-manual"],
    roles: ["Front-End Development", "Content Authoring"],
    ttSteps: ["5.A - Form Labels"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-error-recovery",
    title: "Trigger a validation error and review recovery",
    category: "forms",
    pathways: ["essential", "comprehensive"],
    criteria: ["3.3.1", "3.3.3", "3.3.4", "3.3.7"],
    why: "An error that is only indicated by a red border, that does not say how to fix the problem, or that clears the form, turns a small correction into a lost task.",
    steps: [
      "Submit the form with missing or invalid values.",
      "Check that the error is identified in text, associated with the field, and announced when it appears.",
      "Check that the message explains how to correct the problem, not only that the value is invalid.",
      "Check that the user's other entries are preserved and that correcting one field does not require re-entering everything.",
      "Check that the error summary or first invalid field receives focus, and that focus movement does not skip the message.",
      "Record each barrier with the exact message shown and the field it relates to."
    ],
    expected: "Errors are identified in text, associated with the field, announced, and describe how to recover without losing entered data.",
    limitations: [
      "Do not submit real personal data or trigger real transactions. Use test data and a staging environment.",
      "Timing and rate-limiting behaviour may differ between environments.",
      "Legal or financial confirmation steps may be out of scope for this procedure."
    ],
    evidence: ["Field", "Error message text", "Whether entered data was preserved", "Screenshot where useful"],
    methods: ["guided-manual", "professional-evaluation"],
    roles: ["Front-End Development", "Content Authoring", "UX Design"],
    ttSteps: ["5.B - Form Error Identification", "5.C - Form Error Suggestion"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-page-title",
    title: "Review page titles across the journey",
    category: "structure",
    pathways: ["essential", "comprehensive"],
    criteria: ["2.4.2"],
    why: "The page title is the first thing a screen reader announces and the label a browser tab or history entry shows. Identical titles across steps make it impossible to tell where you are.",
    steps: [
      "Read the page title for each page in the task.",
      "Check that the title identifies the page or step, and distinguishes it from other pages in the same site.",
      "Check that single-page-application route changes update the title.",
      "Record pages with missing, duplicated or uninformative titles."
    ],
    expected: "Each page has a title that describes its purpose and distinguishes it from the other pages in the task.",
    limitations: [
      "A short title can be adequate in context.",
      "Automated duplicate-title detection compares pages within one scan and cannot judge whether a title describes purpose."
    ],
    evidence: ["Page URL", "Page title", "Other page with the same title"],
    methods: ["guided-manual"],
    roles: ["Content Authoring", "Front-End Development"],
    ttSteps: ["1.B - Page Title"],
    arrmTaskIds: [],
    effort: "low"
  },
  {
    id: "manual-language",
    title: "Check the page language and changes of language",
    category: "structure",
    pathways: ["comprehensive"],
    criteria: ["3.1.1", "3.1.2"],
    why: "A declared language lets a screen reader choose a pronunciation. A wrong or missing declaration can make the page unintelligible.",
    steps: [
      "Check the document language declaration and confirm it matches the main content language.",
      "Find passages or inline terms in another language and check whether they are marked up.",
      "Record a wrong declaration or an unmarked language change."
    ],
    expected: "The document language is correct and passages in another language are marked.",
    limitations: [
      "Short borrowed words that are naturalised in the main language usually do not need marking.",
      "A correct attribute does not guarantee correct pronunciation; that needs assistive technology testing."
    ],
    evidence: ["Language declaration", "Passage in another language"],
    methods: ["guided-manual", "assistive-technology"],
    roles: ["Front-End Development", "Content Authoring"],
    ttSteps: ["4.A - Language"],
    arrmTaskIds: [],
    effort: "low"
  },
  {
    id: "manual-reading-order",
    title: "Check that reading order and visual order agree",
    category: "structure",
    pathways: ["comprehensive"],
    criteria: ["1.3.2"],
    why: "When CSS reorders content, the screen reader follows the document, not the screen. A sidebar announced in the middle of an article changes the meaning.",
    steps: [
      "Compare the document order with the visual order, using a reading-order view of the page.",
      "Check multi-column layouts, absolutely positioned callouts, and content reordered for mobile.",
      "Record places where the announced order changes the meaning or makes instructions unusable."
    ],
    expected: "The order in which content is announced preserves the meaning of the page.",
    limitations: [
      "A different but still meaningful order is not a failure.",
      "This is a semantic judgement that needs the content, not only the DOM."
    ],
    evidence: ["Element order observed", "Why the meaning changes"],
    methods: ["guided-manual", "professional-evaluation"],
    roles: ["Front-End Development", "UX Design"],
    ttSteps: ["1.C - Reading Order"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-colour-not-only",
    title: "Check that colour is not the only way information is conveyed",
    category: "perception",
    pathways: ["comprehensive"],
    criteria: ["1.4.1", "1.4.3", "1.4.11"],
    why: "Colour-blind and monochrome-display users lose information carried only by hue: required fields, error states, chart series, link styling.",
    steps: [
      "Identify places where colour distinguishes meaning: errors, required fields, statuses, links in body text, chart series.",
      "Check whether a second cue — text, icon, pattern, underline, label — carries the same information.",
      "Verify contrast for text and for non-text UI boundaries and states where the automated result is incomplete or absent.",
      "Record each colour-only distinction and what information is lost without colour."
    ],
    expected: "Every distinction conveyed by colour is also available without colour.",
    limitations: [
      "Measuring contrast precisely needs a colour picker or a review of computed styles; estimates are observations, not measurements.",
      "Decorative colour use is not a failure."
    ],
    evidence: ["Element", "Colour meaning", "Missing alternative cue", "Measured or observed contrast"],
    methods: ["guided-manual", "professional-evaluation"],
    roles: ["UX Design", "Front-End Development"],
    ttSteps: ["3.A - Colour Alone"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-data-tables",
    title: "Review data table headers and relationships",
    category: "tables",
    pathways: ["comprehensive"],
    criteria: ["1.3.1"],
    why: "A screen reader user needs row and column headers associated with each cell. A visually aligned grid without header semantics is announced as a stream of numbers.",
    steps: [
      "Confirm that tabular data is marked up as a table and layout is not.",
      "Check that header cells are programmatic headers and that scope or headers associations match the visible structure.",
      "Check captions and summaries for complex tables.",
      "Record tables whose data cells lose their header context when announced."
    ],
    expected: "Each data cell is announced with the header or headers that give it meaning.",
    limitations: [
      "Simple tables often work with default browser behaviour; verify rather than assume.",
      "Responsive table transformations can change semantics and need separate review."
    ],
    evidence: ["Table location", "Header markup", "Cell that loses context"],
    methods: ["guided-manual"],
    roles: ["Front-End Development", "Content Authoring"],
    ttSteps: ["1.D - Table Structure"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-custom-widget",
    title: "Review a custom widget's name, role, state and keys",
    category: "widgets",
    pathways: ["comprehensive"],
    criteria: ["4.1.2", "2.1.1"],
    why: "A div that looks like a tab set is not a tab set. Assistive technology needs a name, a role, a state, and the key behaviour the role promises.",
    steps: [
      "Identify each custom widget and the ARIA pattern it claims.",
      "Confirm the widget exposes a name, a role, and its current state.",
      "Exercise the keys the pattern defines and check that state changes are announced.",
      "Check that a visual change is matched by a programmatic state change, and vice versa.",
      "Record widgets whose role is wrong, whose state is missing, or whose keys do not follow the pattern they claim."
    ],
    expected: "Each widget exposes name, role and state, and responds to the keys its role implies.",
    limitations: [
      "A custom widget can be valid ARIA and still be unusable; keyboard and screen reader behaviour must both be observed.",
      "Pattern guidance describes conventions, not a WCAG requirement for any specific key.",
      "This procedure does not replace testing with the assistive technologies your users actually use."
    ],
    evidence: ["Widget locator", "Claimed role", "Keys tried", "Announced or observed state"],
    methods: ["guided-manual", "assistive-technology", "professional-evaluation"],
    roles: ["Front-End Development", "UX Design"],
    ttSteps: ["2.C - Custom Widget Keyboard Access"],
    arrmTaskIds: [],
    effort: "high"
  },
  {
    id: "manual-dialog-focus",
    title: "Check dialog focus containment and restoration",
    category: "focus",
    pathways: ["comprehensive"],
    criteria: ["2.1.2", "2.4.3", "2.4.7"],
    why: "A modal that lets Tab escape behind the overlay, or that drops focus to the top of the page when closed, leaves keyboard and screen reader users lost.",
    steps: [
      "Open the dialog with the keyboard and note where focus lands.",
      "Tab forward and backward through the dialog and check whether focus stays within it.",
      "Check whether there is a documented way to close the dialog with the keyboard, and whether Escape closes it.",
      "Close the dialog and check whether focus returns to the control that opened it.",
      "Record any focus escape, missing close path, or failure to restore focus."
    ],
    expected: "Focus moves into the dialog, stays within it while modal, and returns to the trigger when it closes.",
    limitations: [
      "Focus remaining inside a modal is intentional containment, not a keyboard trap, when a close path exists.",
      "Focus staying on an element after Tab is not by itself evidence of a trap; look for a working exit first.",
      "Non-modal overlays follow different expectations."
    ],
    evidence: ["Trigger control", "Dialog name", "Tab sequence", "Where focus went after closing"],
    methods: ["guided-manual", "assistive-technology"],
    roles: ["Front-End Development", "UX Design"],
    ttSteps: ["2.D - Modal Dialog Focus"],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-media-captions",
    title: "Review captions, transcripts and audio description",
    category: "media",
    pathways: ["comprehensive"],
    criteria: ["1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5"],
    why: "A caption track can exist and still be wrong: auto-generated captions that miss names, captions that do not identify speakers, or audio description that is absent for visual-only information.",
    steps: [
      "For each audio or video item, check whether captions exist and whether they are accurate and synced.",
      "Check whether non-speech sounds that carry meaning are described.",
      "Check whether visual information that is not in the audio is available in audio description or a described alternative.",
      "Check whether a transcript is available where required.",
      "Record the timestamp and the specific inaccuracy, not only 'captions are bad'."
    ],
    expected: "Caption and description tracks convey the same information as the media, accurately and in sync.",
    limitations: [
      "Judging caption accuracy needs a human who can hear the audio and read the language.",
      "Third-party players may not expose caption data to automated checks at all.",
      "Livestreams and auto-generated captions need a different evaluation approach."
    ],
    evidence: ["Media locator", "Timestamp", "What was missing or wrong"],
    methods: ["guided-manual", "professional-evaluation", "assistive-technology"],
    roles: ["Content Authoring", "UX Design"],
    ttSteps: ["9.A - Captions", "9.B - Audio Description", "9.C - Transcript"],
    arrmTaskIds: [],
    effort: "high"
  },
  {
    id: "manual-target-size",
    title: "Check pointer target size and spacing",
    category: "perception",
    pathways: ["comprehensive"],
    criteria: ["2.5.8"],
    why: "Small, tightly packed targets are hard to hit for people with tremor, limited dexterity or a touch device used one-handed.",
    steps: [
      "At the mobile viewport, identify small interactive targets, especially icon buttons and inline links in text.",
      "Check whether a 24 by 24 CSS pixel target or sufficient spacing is available, or whether the target is inline in a sentence (an exception).",
      "Record targets that are both small and closely spaced."
    ],
    expected: "Pointer targets are large enough, or spaced far enough apart, to be operated reliably.",
    limitations: [
      "Target size is a WCAG 2.2 AA requirement with defined exceptions; read the exceptions before recording a failure.",
      "A large target can still be hard to use if it is obscured or moves."
    ],
    evidence: ["Control", "Approximate size and spacing", "Viewport"],
    methods: ["guided-manual", "professional-evaluation"],
    roles: ["UX Design", "Front-End Development"],
    ttSteps: [],
    arrmTaskIds: [],
    effort: "low"
  },
  {
    id: "manual-motion-timing",
    title: "Check motion, animation and time limits",
    category: "perception",
    pathways: ["comprehensive"],
    criteria: ["2.2.2", "2.3.1"],
    why: "Unstoppable animation can trigger vestibular symptoms, and a session that expires without warning destroys completed work.",
    steps: [
      "Look for autoplaying animation, parallax, carousels and background video.",
      "Check whether motion can be paused, stopped or hidden, and whether the page respects a reduced-motion preference.",
      "Check any time limit: is it disclosed, can it be extended or turned off?",
      "Record motion that cannot be stopped and time limits that cannot be adjusted."
    ],
    expected: "Motion can be stopped or reduced, and time limits can be adjusted or are essential.",
    limitations: [
      "Brief, incidental or essential motion is not a failure.",
      "Respecting reduced motion is a strong practice but not by itself sufficient evidence for the criterion."
    ],
    evidence: ["Animation location", "Controls available", "Reduced-motion behaviour"],
    methods: ["guided-manual"],
    roles: ["UX Design", "Front-End Development"],
    ttSteps: [],
    arrmTaskIds: [],
    effort: "low"
  },
  {
    id: "manual-accessible-auth",
    title: "Review authentication and redundant entry",
    category: "forms",
    pathways: ["comprehensive"],
    criteria: ["3.3.7", "3.3.8", "3.3.9"],
    why: "Asking for the same information twice, or requiring a cognitive test with no alternative, blocks people with memory or cognitive disabilities.",
    steps: [
      "Walk the sign-in and checkout flow and list every piece of information requested.",
      "Check whether information already provided is requested again in the same process.",
      "Check whether a cognitive function test has an available alternative or assistance mechanism.",
      "Record repeated entry and tests without alternatives."
    ],
    expected: "Information already supplied is reused, and cognitive tests have an alternative or support.",
    limitations: [
      "Some repetition is necessary for security or to confirm a change; check the exceptions in the criterion.",
      "This procedure must not create real accounts or complete real purchases."
    ],
    evidence: ["Step in the flow", "Information requested twice", "Test encountered"],
    methods: ["guided-manual", "professional-evaluation"],
    roles: ["UX Design", "Front-End Development"],
    ttSteps: [],
    arrmTaskIds: [],
    effort: "medium"
  },
  {
    id: "manual-status-messages",
    title: "Check that status messages are announced",
    category: "widgets",
    pathways: ["comprehensive"],
    criteria: ["4.1.3"],
    why: "A message that appears silently — 'saved', '3 results', 'item added' — is invisible to a screen reader user who has not moved focus.",
    steps: [
      "Trigger actions that produce a status message without moving focus: save, search, add to cart, filter.",
      "Check whether the message is announced, and whether it is announced only once.",
      "Check that the announcement does not interrupt typing or steal focus.",
      "Record messages that are visual only."
    ],
    expected: "Status messages are announced by assistive technology without requiring focus to move.",
    limitations: [
      "Announcement behaviour depends on the screen reader and browser pair; record which pair you used.",
      "This procedure requires assistive technology to evaluate fully."
    ],
    evidence: ["Action", "Message text", "Screen reader and browser"],
    methods: ["assistive-technology", "guided-manual"],
    roles: ["Front-End Development"],
    ttSteps: ["2.E - Status Messages"],
    arrmTaskIds: [],
    effort: "medium",
    requiresAssistiveTechnology: true
  }
];

const PROCEDURE_INDEX = new Map(PROCEDURES.map((procedure) => [procedure.id, procedure]));

/** Look up a procedure by id. */
export function getProcedure(id) {
  return PROCEDURE_INDEX.get(id) ?? null;
}

/** Procedures for a pathway, optionally filtered by category or role. */
export function listProcedures({ pathway, category, role, criterion } = {}) {
  return PROCEDURES.filter((procedure) => {
    if (pathway && !procedure.pathways.includes(pathway)) return false;
    if (category && procedure.category !== category) return false;
    if (role && !procedure.roles.includes(role)) return false;
    if (criterion && !procedure.criteria.includes(criterion)) return false;
    return true;
  });
}

/** Procedures that reference a given WCAG criterion. */
export function proceduresForCriterion(criterion) {
  return PROCEDURES.filter((procedure) => procedure.criteria.includes(String(criterion)));
}

/** Distinct categories in first-appearance order. */
export function listCategories() {
  return [...new Set(PROCEDURES.map((procedure) => procedure.category))];
}

/** Distinct responsibilities referenced by procedures, in first-appearance order. */
export function listRoles() {
  return [...new Set(PROCEDURES.flatMap((procedure) => procedure.roles))].sort();
}

/**
 * Project the procedure catalogue into the compact shape embedded in a report.
 * All fields are plain data so the report never needs a runtime dependency.
 */
export function projectProcedures() {
  return PROCEDURES.map((procedure) => ({
    id: procedure.id,
    title: procedure.title,
    category: procedure.category,
    pathways: [...procedure.pathways],
    criteria: [...procedure.criteria],
    why: procedure.why,
    steps: [...procedure.steps],
    expected: procedure.expected,
    limitations: [...procedure.limitations],
    evidence: [...procedure.evidence],
    methods: [...procedure.methods],
    roles: [...procedure.roles],
    ttSteps: [...procedure.ttSteps],
    arrmTaskIds: [...procedure.arrmTaskIds],
    effort: procedure.effort,
    requiresAssistiveTechnology: procedure.requiresAssistiveTechnology === true
  }));
}

/** Load a reviewed procedures file from disk (used by the update script/tests). */
export function loadProceduresFile(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}
