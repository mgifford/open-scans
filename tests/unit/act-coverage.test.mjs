import test from "node:test";
import assert from "node:assert/strict";

import { buildActCoverage, renderActCoverageHtml, renderActCoverageMarkdown } from "../../scanner/act-coverage.mjs";

function observation({ engine, rule, actRuleIds = ["23a2a8"], target = "dom:v1:h:/img[1]" } = {}) {
  return {
    observationId: `${engine}-${rule}-${target}`,
    engine: { name: engine, ruleId: rule },
    actRuleIds,
    target: { resolvedTargetId: target },
    url: "https://example.org/page/"
  };
}

function artifact({ observations = [], executed = ["axe", "alfa", "equalAccess", "accesslint"] } = {}) {
  return {
    issueNumber: 1,
    scanTitle: "fixture",
    observations,
    scan: {
      engineExecution: Object.fromEntries(executed.map((engine) => [engine, { status: "executed" }]))
    }
  };
}

test("two engines on one ACT rule is reported as multiple-engine coverage", () => {
  const coverage = buildActCoverage(artifact({
    observations: [
      observation({ engine: "axe", rule: "image-alt" }),
      observation({ engine: "alfa", rule: "sia-r2" })
    ]
  }));

  assert.equal(coverage.rules.length, 1);
  const [rule] = coverage.rules;
  assert.equal(rule.actRuleId, "23a2a8");
  assert.equal(rule.title, "Image has non-empty accessible name");
  assert.equal(rule.url, "https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/");
  assert.deepEqual(rule.enginesReporting, ["axe", "alfa"]);
  assert.equal(rule.coverage, "multiple-engines-with-silence");
  assert.equal(rule.reviewSuggested, true);
  assert.deepEqual(rule.enginesSilentButExecuted, ["equalAccess", "accesslint"]);
});

test("a mapped engine that stays silent is listed, not treated as a pass", () => {
  const coverage = buildActCoverage(artifact({
    observations: [observation({ engine: "axe", rule: "image-alt" })]
  }));

  const [rule] = coverage.rules;
  assert.equal(rule.coverage, "single-engine");
  assert.equal(rule.reviewSuggested, true);
  assert.deepEqual(rule.enginesSilentButExecuted, ["alfa", "equalAccess", "accesslint"]);
  // Candidate mappings still count as mapped.
  assert.ok(rule.enginesMapped.includes("equalAccess"));
  assert.ok(rule.mappings.some((mapping) => mapping.engine === "equalAccess" && mapping.status === "candidate"));
});

test("silence from an engine that did not execute is not coverage evidence", () => {
  const coverage = buildActCoverage(artifact({
    observations: [observation({ engine: "axe", rule: "image-alt" })],
    executed: ["axe"]
  }));

  const [rule] = coverage.rules;
  assert.deepEqual(rule.enginesSilentButExecuted, []);
});

test("rules with no registry mapping are surfaced without invented engines", () => {
  const coverage = buildActCoverage(artifact({
    observations: [observation({ engine: "alfa", rule: "sia-r66", actRuleIds: ["09o5cg"] })]
  }));

  const [rule] = coverage.rules;
  assert.equal(rule.actRuleId, "09o5cg");
  assert.equal(rule.title, "Text has enhanced contrast");
  assert.equal(rule.enginesMapped.length >= 1, true);
  assert.equal(rule.enginesReporting.length, 1);
  assert.equal(rule.reviewSuggested, true);
});

test("a rule where every mapped engine reports is full coverage", () => {
  const coverage = buildActCoverage(artifact({
    observations: [
      observation({ engine: "axe", rule: "document-title", actRuleIds: ["2779a5"] }),
      observation({ engine: "alfa", rule: "sia-r1", actRuleIds: ["2779a5"] })
    ]
  }));

  const [rule] = coverage.rules;
  assert.deepEqual(rule.enginesMapped, ["axe", "alfa"]);
  assert.deepEqual(rule.enginesReporting, ["axe", "alfa"]);
  assert.equal(rule.coverage, "multiple-engines");
  assert.equal(rule.reviewSuggested, false);
});

test("summary counts reconcile with the rule list", () => {
  const coverage = buildActCoverage(artifact({
    observations: [
      observation({ engine: "axe", rule: "image-alt" }),
      observation({ engine: "alfa", rule: "sia-r2" }),
      observation({ engine: "axe", rule: "region", actRuleIds: ["0ssw9k"], target: "dom:v1:h:/main[1]" })
    ]
  }));

  assert.equal(coverage.summary.actRulesObserved, coverage.rules.length);
  assert.equal(
    coverage.summary.multipleEngines + coverage.summary.multipleEnginesWithSilence + coverage.summary.singleEngine,
    coverage.rules.length
  );
});

test("renderers link every rule to W3C and label the ACT provenance", () => {
  const coverage = buildActCoverage(artifact({
    observations: [
      observation({ engine: "axe", rule: "image-alt" }),
      observation({ engine: "alfa", rule: "sia-r2" })
    ]
  }));

  const markdown = renderActCoverageMarkdown(coverage);
  assert.match(markdown, /## 🧪 ACT rule coverage/);
  assert.match(markdown, /https:\/\/www\.w3\.org\/WAI\/standards-guidelines\/act\/rules\/23a2a8\//);
  assert.match(markdown, /silent, not passing/i);

  const html = renderActCoverageHtml(coverage);
  assert.match(html, /id="act-rule-coverage"/);
  assert.match(html, /href="https:\/\/www\.w3\.org\/WAI\/standards-guidelines\/act\/rules\/23a2a8\/"/);
  assert.match(html, /<caption>/);
  assert.match(html, /scope="col"/);
  assert.match(html, /scope="row"/);
  assert.match(html, /W3C ACT 23a2a8/);
  assert.match(html, /<strong>silent<\/strong>/);
});

test("empty evidence renders nothing rather than an empty section", () => {
  assert.equal(renderActCoverageMarkdown({ rules: [] }), "");
  assert.equal(renderActCoverageHtml({ rules: [] }), "");
});
