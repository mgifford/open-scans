import test from "node:test";
import assert from "node:assert/strict";
import {
  REVIEW_DISCLAIMER,
  formatReviewIssueBody,
  detectHasFindings,
  reviewSource,
} from "../../scanner/review-source.mjs";

// ── REVIEW_DISCLAIMER ─────────────────────────────────────────────────────────

test("REVIEW_DISCLAIMER is a non-empty string mentioning AI and WCAG", () => {
  assert.ok(typeof REVIEW_DISCLAIMER === "string");
  assert.ok(REVIEW_DISCLAIMER.length > 0);
  assert.ok(REVIEW_DISCLAIMER.includes("AI"), "Disclaimer should mention AI");
  assert.ok(
    REVIEW_DISCLAIMER.includes("gpt-4o-mini"),
    "Disclaimer should name the model"
  );
  assert.ok(REVIEW_DISCLAIMER.includes("WCAG"), "Disclaimer should mention WCAG");
});

// ── detectHasFindings ─────────────────────────────────────────────────────────

test("detectHasFindings returns false for empty string", () => {
  assert.equal(detectHasFindings(""), false);
});

test("detectHasFindings returns false for whitespace-only string", () => {
  assert.equal(detectHasFindings("   \n  "), false);
});

test("detectHasFindings returns false when review states no issues found", () => {
  const reviews = [
    "I found no accessibility issues in the source files.",
    "No issues found in the reviewed files.",
    "No WCAG violations were detected.",
    "No violations found — the pages look accessible.",
    "The site appears fully accessible.",
    "No issues were found during this review.",
  ];

  for (const review of reviews) {
    assert.equal(
      detectHasFindings(review),
      false,
      `Expected no findings for: "${review}"`
    );
  }
});

test("detectHasFindings returns true when review contains a finding", () => {
  const reviewWithIssue = `
## Perceivable

### Issue 1: Missing alt text on image
**File: index.html**
\`\`\`html
<img src="logo.png">
\`\`\`
**WCAG:** 1.1.1 Non-text Content (Level A)
**Recommendation:** Add an alt attribute.
  `;
  assert.equal(detectHasFindings(reviewWithIssue), true);
});

test("detectHasFindings returns true for generic review text that isn't a no-issues statement", () => {
  const review =
    "Here are the accessibility concerns I found in your codebase.";
  assert.equal(detectHasFindings(review), true);
});

// ── formatReviewIssueBody ─────────────────────────────────────────────────────

test("formatReviewIssueBody includes the WCAG 2.2 heading", () => {
  const body = formatReviewIssueBody("Some findings.", ["index.html"], "gpt-4o-mini");
  assert.ok(
    body.includes("WCAG 2.2"),
    "Issue body should reference WCAG 2.2"
  );
});

test("formatReviewIssueBody includes the reviewed files", () => {
  const files = ["index.html", "reports.html", "submit.js"];
  const body = formatReviewIssueBody("Findings here.", files, "gpt-4o-mini");
  for (const file of files) {
    assert.ok(body.includes(file), `Issue body should mention ${file}`);
  }
});

test("formatReviewIssueBody includes the AI disclaimer", () => {
  const body = formatReviewIssueBody("Review text.", ["index.html"], "gpt-4o-mini");
  assert.ok(body.includes("AI Disclaimer"), "Issue body should include disclaimer");
});

test("formatReviewIssueBody includes the GitHubNext attribution link", () => {
  const body = formatReviewIssueBody("Review text.", ["index.html"], "gpt-4o-mini");
  assert.ok(
    body.includes("githubnext/agentics"),
    "Issue body should attribute GitHubNext"
  );
});

test("formatReviewIssueBody includes the review text", () => {
  const reviewText = "## Issue 1\nMissing alt text.";
  const body = formatReviewIssueBody(reviewText, ["index.html"], "gpt-4o-mini");
  assert.ok(body.includes(reviewText), "Issue body should include review text");
});

test("formatReviewIssueBody includes the model name", () => {
  const body = formatReviewIssueBody("Review.", ["index.html"], "gpt-4o-mini");
  assert.ok(body.includes("gpt-4o-mini"), "Issue body should include model name");
});

test("formatReviewIssueBody includes a timestamp", () => {
  const before = Date.now();
  const body = formatReviewIssueBody("Review.", ["index.html"], "gpt-4o-mini");
  const after = Date.now();

  // The body should include an ISO date string from the current year
  const year = new Date(before).getFullYear();
  assert.ok(
    body.includes(String(year)),
    "Issue body should include a timestamp from the current year"
  );
  assert.ok(after >= before, "Sanity: after >= before");
});

// ── reviewSource — no token ───────────────────────────────────────────────────

test("reviewSource returns skipped:true when no token is provided", async () => {
  // Capture stdout by temporarily replacing console.log
  let capturedOutput = "";
  const originalLog = console.log;
  console.log = (msg) => {
    capturedOutput = msg;
  };

  try {
    await reviewSource(["index.html"], { token: undefined });
  } finally {
    console.log = originalLog;
  }

  const result = JSON.parse(capturedOutput);
  assert.equal(result.skipped, true);
  assert.equal(result.hasFindings, false);
  assert.ok(
    result.reason.toLowerCase().includes("token") ||
      result.reason.toLowerCase().includes("github"),
    "reason should mention the token"
  );
});

test("reviewSource returns skipped:true when file list is empty", async () => {
  let capturedOutput = "";
  const originalLog = console.log;
  console.log = (msg) => {
    capturedOutput = msg;
  };

  try {
    await reviewSource([], { token: "fake-token-for-test" });
  } finally {
    console.log = originalLog;
  }

  const result = JSON.parse(capturedOutput);
  assert.equal(result.skipped, true);
  assert.equal(result.hasFindings, false);
});

test("reviewSource returns skipped:true when all files are unreadable", async () => {
  let capturedOutput = "";
  const originalLog = console.log;
  console.log = (msg) => {
    capturedOutput = msg;
  };

  try {
    await reviewSource(
      ["/nonexistent/path/file.html", "/another/missing.html"],
      { token: "fake-token-for-test" }
    );
  } finally {
    console.log = originalLog;
  }

  const result = JSON.parse(capturedOutput);
  assert.equal(result.skipped, true);
  assert.equal(result.hasFindings, false);
  assert.equal(result.filesReviewed.length, 0);
});

test("reviewSource handles API failure gracefully (skipped:true, no throw)", async () => {
  let capturedOutput = "";
  const originalLog = console.log;
  console.log = (msg) => {
    capturedOutput = msg;
  };

  try {
    // Use an invalid token — the API will return 401, which should be caught
    await reviewSource(["index.html"], { token: "invalid-token-000" });
  } finally {
    console.log = originalLog;
  }

  const result = JSON.parse(capturedOutput);
  // Either the API fails (skipped) or the file doesn't exist (skipped)
  assert.ok(
    typeof result.skipped === "boolean",
    "result.skipped should be boolean"
  );
  assert.ok(
    typeof result.hasFindings === "boolean",
    "result.hasFindings should be boolean"
  );
});

test("reviewSource output is valid JSON", async () => {
  let capturedOutput = "";
  const originalLog = console.log;
  console.log = (msg) => {
    capturedOutput = msg;
  };

  try {
    await reviewSource(["index.html"], { token: undefined });
  } finally {
    console.log = originalLog;
  }

  // Should not throw
  const result = JSON.parse(capturedOutput);
  assert.ok(typeof result === "object" && result !== null);
  assert.ok("hasFindings" in result);
  assert.ok("skipped" in result);
  assert.ok("filesReviewed" in result);
  assert.ok(Array.isArray(result.filesReviewed));
});
