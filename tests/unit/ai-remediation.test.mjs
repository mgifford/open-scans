import test from "node:test";
import assert from "node:assert/strict";
import {
  generateRemediationSuggestions,
  formatRemediationMarkdown,
  AI_DISCLAIMER
} from "../../scanner/ai-remediation.mjs";

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeFakeViolation(overrides = {}) {
  return {
    rule: "color-contrast",
    engine: "axe",
    ruleTitle: "Elements must have sufficient color contrast",
    ruleUrl: "https://dequeuniversity.com/rules/axe/4.11/color-contrast",
    wcag: { scs: ["1.4.3"], level: "AA" },
    totalOccurrences: 42,
    pages: new Map([["https://example.com/", 42]]),
    metadata: { description: "Elements must have sufficient color contrast", severity: "serious" },
    examples: [
      {
        url: "https://example.com/",
        html: '<button class="btn-secondary">Learn more</button>',
        message: "Element has insufficient color contrast of 2.8:1 (foreground color: #999999, background color: #ffffff, font size: 14.0pt, font weight: normal). Expected a contrast ratio of 4.5:1"
      }
    ],
    ...overrides
  };
}

// ── generateRemediationSuggestions ───────────────────────────────────────────

test("generateRemediationSuggestions returns empty suggestions when no token provided", async () => {
  const result = await generateRemediationSuggestions([makeFakeViolation()], {});
  assert.equal(result.suggestions.length, 0);
  assert.equal(result.disclaimer, AI_DISCLAIMER);
  assert.ok(typeof result.model === "string");
});

test("generateRemediationSuggestions returns empty suggestions for empty violations array", async () => {
  const result = await generateRemediationSuggestions([], { token: "gh_test" });
  assert.equal(result.suggestions.length, 0);
  assert.equal(result.disclaimer, AI_DISCLAIMER);
});

test("generateRemediationSuggestions handles API failure gracefully", async () => {
  // Use an obviously invalid token — the API will fail, but we expect
  // graceful degradation (no throw, suggestion is null for that rule).
  const violations = [makeFakeViolation()];
  const result = await generateRemediationSuggestions(violations, {
    token: "invalid-token-for-testing"
  });

  assert.equal(result.suggestions.length, 1);
  // The suggestion itself will be null because the API call failed
  assert.equal(result.suggestions[0].suggestion, null);
  assert.equal(result.suggestions[0].rule, "color-contrast");
  assert.equal(result.suggestions[0].engine, "axe");
  assert.equal(result.suggestions[0].totalOccurrences, 42);
  assert.equal(result.disclaimer, AI_DISCLAIMER);
});

test("generateRemediationSuggestions limits to top 10 violations", async () => {
  // Create 15 violations — only the first 10 should be processed
  const violations = Array.from({ length: 15 }, (_, i) =>
    makeFakeViolation({ rule: `rule-${i}`, totalOccurrences: 15 - i })
  );

  // Without a real token, each API call fails gracefully; we just verify count
  const result = await generateRemediationSuggestions(violations, {
    token: "invalid-token-for-testing"
  });

  assert.equal(result.suggestions.length, 10, "Should process exactly 10 violations");
});

test("generateRemediationSuggestions preserves ruleKey format", async () => {
  const violations = [makeFakeViolation()];
  const result = await generateRemediationSuggestions(violations, {
    token: "invalid-token-for-testing"
  });

  assert.equal(result.suggestions[0].ruleKey, "axe:color-contrast");
});

test("generateRemediationSuggestions handles pages as plain Map correctly", async () => {
  const violation = makeFakeViolation({
    pages: new Map([["https://a.com/", 5], ["https://b.com/", 3]])
  });
  const result = await generateRemediationSuggestions([violation], {
    token: "invalid-token-for-testing"
  });

  assert.equal(result.suggestions[0].pageCount, 2);
});

// ── formatRemediationMarkdown ─────────────────────────────────────────────────

test("formatRemediationMarkdown includes section heading", () => {
  const md = formatRemediationMarkdown({
    suggestions: [],
    disclaimer: AI_DISCLAIMER,
    model: "gpt-4o-mini"
  });

  assert.ok(md.includes("## 🤖 AI-Powered Remediation Suggestions"), "Should include heading");
  assert.ok(md.includes(AI_DISCLAIMER), "Should include disclaimer");
});

test("formatRemediationMarkdown shows fallback message when no suggestions", () => {
  const md = formatRemediationMarkdown({
    suggestions: [],
    disclaimer: AI_DISCLAIMER,
    model: "gpt-4o-mini"
  });

  assert.ok(md.includes("No suggestions could be generated"), "Should show fallback");
});

test("formatRemediationMarkdown renders a suggestion with before/after code", () => {
  const suggestion = {
    ruleKey: "axe:color-contrast",
    rule: "color-contrast",
    engine: "axe",
    ruleTitle: "Elements must have sufficient color contrast",
    ruleUrl: "https://dequeuniversity.com/rules/axe/4.11/color-contrast",
    wcag: { scs: ["1.4.3"], level: "AA" },
    totalOccurrences: 42,
    pageCount: 5,
    suggestion: {
      beforeCode: '<button style="color: #999">Click me</button>',
      afterCode: '<button style="color: #595959">Click me</button>',
      explanation: "The contrast ratio was 2.8:1, below the 4.5:1 required for normal text.",
      wcagReference: "1.4.3 Contrast (Minimum)"
    }
  };

  const md = formatRemediationMarkdown({
    suggestions: [suggestion],
    disclaimer: AI_DISCLAIMER,
    model: "gpt-4o-mini"
  });

  assert.ok(md.includes("color-contrast"), "Should reference rule id");
  assert.ok(md.includes("Before (failing)"), "Should include before code label");
  assert.ok(md.includes("After (fixed)"), "Should include after code label");
  assert.ok(md.includes("#999"), "Should include before code");
  assert.ok(md.includes("#595959"), "Should include after code");
  assert.ok(md.includes("Why this matters"), "Should include explanation label");
  assert.ok(md.includes("WCAG Reference"), "Should include WCAG reference label");
  assert.ok(md.includes("1.4.3"), "Should reference WCAG SC");
  assert.ok(md.includes("42"), "Should show occurrence count");
  assert.ok(md.includes("5 page"), "Should show page count");
});

test("formatRemediationMarkdown renders a rule with failed API call as unavailable", () => {
  const suggestion = {
    ruleKey: "axe:color-contrast",
    rule: "color-contrast",
    engine: "axe",
    ruleTitle: "Color contrast",
    ruleUrl: null,
    wcag: { scs: ["1.4.3"], level: "AA" },
    totalOccurrences: 10,
    pageCount: 2,
    suggestion: null
  };

  const md = formatRemediationMarkdown({
    suggestions: [suggestion],
    disclaimer: AI_DISCLAIMER,
    model: "gpt-4o-mini"
  });

  assert.ok(md.includes("Suggestion unavailable"), "Should note unavailable suggestion");
});

test("formatRemediationMarkdown uses rule as fallback title when ruleTitle is missing", () => {
  const suggestion = {
    ruleKey: "axe:unknown-rule",
    rule: "unknown-rule",
    engine: "axe",
    ruleTitle: null,
    ruleUrl: null,
    wcag: { scs: [], level: null },
    totalOccurrences: 1,
    pageCount: 1,
    suggestion: null
  };

  const md = formatRemediationMarkdown({
    suggestions: [suggestion],
    disclaimer: AI_DISCLAIMER,
    model: "gpt-4o-mini"
  });

  assert.ok(md.includes("unknown-rule"), "Should fall back to rule id as title");
});

// ── AI_DISCLAIMER ─────────────────────────────────────────────────────────────

test("AI_DISCLAIMER is a non-empty string", () => {
  assert.ok(typeof AI_DISCLAIMER === "string");
  assert.ok(AI_DISCLAIMER.length > 0);
  assert.ok(AI_DISCLAIMER.includes("AI"), "Disclaimer should mention AI");
  assert.ok(AI_DISCLAIMER.includes("gpt-4o-mini"), "Disclaimer should name the model");
});
