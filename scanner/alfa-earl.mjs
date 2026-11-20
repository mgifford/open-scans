/**
 * Parse Siteimprove ALFA's EARL output.
 *
 * The JSON formatter only serializes a target's subtree, with no ancestors, so
 * element targets lose their document position and text-node targets (most
 * contrast failures) serialize as `{type:"text"}` with no locator at all. The
 * EARL formatter emits a pointer with an absolute XPath for every target,
 * including text nodes (`/html[1]/body[1]/p[2]/node()[3]`), which is what
 * target resolution needs.
 *
 * EARL assertions also carry `earl:info`, the expectation failure message, so
 * we keep the engine's own wording instead of substituting rule titles.
 *
 * @module alfa-earl
 */

/** Recursively find the first XPath expression in a pointer structure. */
export function findPointerExpression(pointer) {
  if (!pointer || typeof pointer !== "object") return null;

  const direct = pointer["ptr:expression"];
  if (typeof direct === "string" && direct.trim() !== "") return direct;

  const group = pointer["ptr:groupPointer"];
  if (group && typeof group === "object") {
    const list = Array.isArray(group["@list"]) ? group["@list"] : [];
    for (const entry of list) {
      const found = findPointerExpression(entry);
      if (found) return found;
    }
  }

  for (const value of Object.values(pointer)) {
    if (value && typeof value === "object") {
      const found = findPointerExpression(value);
      if (found) return found;
    }
  }

  return null;
}

// JSON-LD compaction drops the `earl:` prefix on terms whose value is defined
// with `@vocab`, so the same document can contain `result` and `earl:result`.
// Read both rather than assuming one compaction shape.
function pick(object, prefixed, plain) {
  if (!object || typeof object !== "object") return undefined;
  return object[prefixed] ?? object[plain];
}

function resultOf(assertion) {
  return pick(assertion, "earl:result", "result");
}

function ruleIdOf(assertion) {
  const test = pick(assertion, "earl:test", "test");
  if (typeof test === "string") return test;
  if (test && typeof test === "object" && typeof test["@id"] === "string") return test["@id"];
  return null;
}

function outcomeOf(assertion) {
  const result = resultOf(assertion);
  const outcome = pick(result, "earl:outcome", "outcome");
  const id = typeof outcome === "string" ? outcome : outcome?.["@id"];
  if (typeof id !== "string") return null;
  return id.replace(/^earl:/, "").trim().toLowerCase();
}

function infoOf(assertion) {
  const info = pick(resultOf(assertion), "earl:info", "info");
  return typeof info === "string" && info.trim() !== "" ? info.trim() : null;
}

function pointerOf(assertion) {
  return pick(resultOf(assertion), "earl:pointer", "pointer");
}

/**
 * Parse an ALFA EARL document into the shape run-scan expects.
 *
 * @param {object} earl
 * @returns {{executed: boolean, counts: object, failedRules: string[], passedRules: string[], failures: object[], outcomeCount: number}}
 */
export function parseAlfaEarl(earl) {
  const graph = Array.isArray(earl?.["@graph"]) ? earl["@graph"] : [];
  const assertions = graph.filter((node) => node && typeof node === "object" && resultOf(node));

  const counts = { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 };
  const failedRules = new Set();
  const passedRules = new Set();
  const failures = [];

  for (const assertion of assertions) {
    const outcome = outcomeOf(assertion);
    const rule = ruleIdOf(assertion);

    if (outcome === "passed") {
      counts.passed += 1;
      if (rule) passedRules.add(rule);
      continue;
    }

    if (outcome === "failed") {
      counts.failed += 1;
      if (rule) failedRules.add(rule);
      failures.push({
        rule: rule ?? "unknown-rule",
        xpath: findPointerExpression(pointerOf(assertion)),
        html: null,
        message: infoOf(assertion)
      });
      continue;
    }

    if (outcome === "canttell" || outcome === "cantTell") {
      counts.cantTell += 1;
      continue;
    }

    if (outcome === "inapplicable") {
      counts.inapplicable += 1;
    }
  }

  return {
    executed: true,
    counts,
    failedRules: [...failedRules].sort(),
    passedRules: [...passedRules].sort(),
    failures,
    outcomeCount: counts.passed + counts.failed + counts.cantTell + counts.inapplicable
  };
}
