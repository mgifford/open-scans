/**
 * ACT rule coverage: which engines are mapped to each ACT rule, which of them
 * reported anything, and where one engine is alone.
 *
 * This is the engine-comparison view of a scan, organised by W3C ACT rule
 * rather than by engine. It links every rule to its authoritative W3C page so
 * a reader can check the rule text before deciding whether a single-engine
 * finding is a false positive or a genuine detection the others missed.
 *
 * A silent engine is never counted as a pass. Silence can mean "not
 * applicable", "not implemented", "no target found" or a missed detection;
 * only a human can tell those apart.
 *
 * @module act-coverage
 */
import { loadActRegistry } from "./act-registry.mjs";

export const ACT_COVERAGE_VERSION = "act-coverage/1";

const ENGINE_ORDER = ["axe", "alfa", "equalAccess", "accesslint", "qualweb"];

function actRuleUrl(actRuleId) {
  return `https://www.w3.org/WAI/standards-guidelines/act/rules/${actRuleId}/`;
}

/**
 * Build ACT rule coverage from a normalized observation artifact.
 *
 * @param {object} observationsArtifact - a11y-observation/1
 * @returns {object} act-coverage/1
 */
export function buildActCoverage(observationsArtifact) {
  const registry = loadActRegistry();
  const observations = observationsArtifact?.observations ?? [];
  const execution = observationsArtifact?.scan?.engineExecution ?? {};

  // actRuleId -> engine -> { count, targets:Set }
  const byRule = new Map();

  for (const observation of observations) {
    for (const actRuleId of observation.actRuleIds ?? []) {
      if (!byRule.has(actRuleId)) byRule.set(actRuleId, new Map());
      const perEngine = byRule.get(actRuleId);
      if (!perEngine.has(observation.engine.name)) {
        perEngine.set(observation.engine.name, { count: 0, targets: new Set() });
      }
      const entry = perEngine.get(observation.engine.name);
      entry.count += 1;
      if (observation.target?.resolvedTargetId) entry.targets.add(observation.target.resolvedTargetId);
    }
  }

  const rules = [];

  for (const [actRuleId, perEngine] of byRule.entries()) {
    const registryRule = registry.rules?.[actRuleId] ?? null;
    const mappings = (registryRule?.mappings ?? [])
      .map((mapping) => ({ engine: mapping.engine, ruleId: mapping.ruleId, status: mapping.status }))
      .sort((a, b) => ENGINE_ORDER.indexOf(a.engine) - ENGINE_ORDER.indexOf(b.engine) || a.ruleId.localeCompare(b.ruleId));

    const enginesMapped = [...new Set(mappings.map((mapping) => mapping.engine))];
    const enginesReporting = [...perEngine.keys()].sort(
      (a, b) => ENGINE_ORDER.indexOf(a) - ENGINE_ORDER.indexOf(b)
    );
    const enginesSilentButExecuted = enginesMapped
      .filter((engine) => !enginesReporting.includes(engine))
      .filter((engine) => execution?.[engine]?.status === "executed");

    const findings = [...perEngine.values()].reduce((total, entry) => total + entry.count, 0);
    const distinctTargets = new Set(
      [...perEngine.values()].flatMap((entry) => [...entry.targets])
    ).size;

    let coverage = "single-engine";
    if (enginesReporting.length >= 2) {
      coverage = enginesSilentButExecuted.length > 0 ? "multiple-engines-with-silence" : "multiple-engines";
    }

    rules.push({
      actRuleId,
      url: actRuleUrl(actRuleId),
      title: registryRule?.title ?? null,
      ruleType: registryRule?.ruleType ?? null,
      ruleStatus: registryRule?.status ?? null,
      wcag: registryRule?.wcag ?? [],
      mappings,
      enginesMapped,
      enginesReporting,
      enginesSilentButExecuted,
      observations: Object.fromEntries(
        [...perEngine.entries()]
          .sort(([a], [b]) => ENGINE_ORDER.indexOf(a) - ENGINE_ORDER.indexOf(b))
          .map(([engine, entry]) => [engine, entry.count])
      ),
      findings,
      distinctTargets,
      coverage,
      // A single-engine finding on a rule other engines are mapped to is a
      // candidate false positive *or* a missed detection elsewhere. Only a
      // human can decide, using the W3C rule text.
      reviewSuggested: coverage !== "multiple-engines"
    });
  }

  rules.sort((a, b) => b.findings - a.findings || a.actRuleId.localeCompare(b.actRuleId));

  const summary = {
    actRulesObserved: rules.length,
    multipleEngines: rules.filter((rule) => rule.coverage === "multiple-engines").length,
    multipleEnginesWithSilence: rules.filter((rule) => rule.coverage === "multiple-engines-with-silence").length,
    singleEngine: rules.filter((rule) => rule.coverage === "single-engine").length,
    reviewSuggested: rules.filter((rule) => rule.reviewSuggested).length
  };

  return {
    schemaVersion: ACT_COVERAGE_VERSION,
    generatedAt: new Date().toISOString(),
    issueNumber: observationsArtifact?.issueNumber ?? null,
    scanTitle: observationsArtifact?.scanTitle ?? null,
    engineExecution: execution,
    summary,
    rules
  };
}

/** Markdown fragment for the ACT coverage section. */
export function renderActCoverageMarkdown(coverage) {
  if (!coverage || coverage.rules.length === 0) return "";

  const lines = [];
  lines.push("## 🧪 ACT rule coverage");
  lines.push("");
  lines.push(
    "Grouped by W3C ACT rule, so engines can be compared on the same test. " +
    "An engine that reports nothing is silent, not passing; single-engine findings " +
    "are candidates for either a false positive or a missed detection and need review."
  );
  lines.push("");

  for (const rule of coverage.rules) {
    const title = rule.title ? `${rule.actRuleId} — ${rule.title}` : rule.actRuleId;
    lines.push(`### [${title}](${rule.url})`);
    lines.push("");
    lines.push(`- W3C ACT rule: [${rule.actRuleId}](${rule.url})${rule.ruleStatus ? ` (${rule.ruleStatus})` : ""}`);
    if (rule.wcag.length > 0) lines.push(`- WCAG: ${rule.wcag.join(", ")}`);
    lines.push(`- Engines mapped: ${rule.enginesMapped.length > 0 ? rule.enginesMapped.join(", ") : "none in the registry"}`);
    lines.push(`- Engines reporting: ${rule.enginesReporting.join(", ")}`);
    if (rule.enginesSilentButExecuted.length > 0) {
      lines.push(`- Silent but executed: ${rule.enginesSilentButExecuted.join(", ")} (not a pass)`);
    }
    lines.push(`- Findings: ${rule.findings} across ${rule.distinctTargets} resolved target(s)`);
    lines.push(`- Coverage: ${rule.coverage}${rule.reviewSuggested ? " — manual review suggested" : ""}`);
    lines.push("");
    lines.push("| Engine | Mapping | Findings |");
    lines.push("|---|---|---:|");
    for (const engine of rule.enginesMapped.length > 0 ? rule.enginesMapped : rule.enginesReporting) {
      const mapping = rule.mappings.filter((entry) => entry.engine === engine).map((entry) => `\`${entry.ruleId}\` (${entry.status})`).join(", ");
      lines.push(`| ${engine} | ${mapping || "—"} | ${rule.observations[engine] ?? 0} |`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

/** HTML fragment for the ACT coverage section. */
export function renderActCoverageHtml(coverage) {
  if (!coverage || coverage.rules.length === 0) return "";

  const esc = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const rows = coverage.rules
    .map((rule) => {
      const title = rule.title ? `${rule.actRuleId} — ${rule.title}` : rule.actRuleId;
      const mappingCells = rule.enginesMapped.length > 0
        ? rule.enginesMapped
            .map((engine) => {
              const mapped = rule.mappings
                .filter((entry) => entry.engine === engine)
                .map((entry) => `${entry.ruleId} (${entry.status})`)
                .join(", ");
              return `<li><strong>${esc(engine)}</strong>: ${esc(mapped)} — ${esc(rule.observations[engine] ?? 0)} finding(s)</li>`;
            })
            .join("")
        : "<li>No engine rule in the registry maps to this ACT rule.</li>";
      return `<tr>
        <th scope="row"><a href="${esc(rule.url)}">${esc(title)}</a><br><span class="act-tag">W3C ACT ${esc(rule.actRuleId)}</span></th>
        <td>${esc(rule.wcag.join(", ") || "—")}</td>
        <td><ul class="act-engine-list">${mappingCells}</ul></td>
        <td>${esc(rule.findings)}</td>
        <td>${esc(rule.coverage)}${rule.reviewSuggested ? "<br><span class=\"act-review\">review suggested</span>" : ""}</td>
      </tr>`;
    })
    .join("\n");

  return `
    <section id="act-rule-coverage" aria-labelledby="act-coverage-heading" class="corr-section">
      <h2 id="act-coverage-heading">ACT rule coverage</h2>
      <p>Grouped by <a href="https://www.w3.org/WAI/standards-guidelines/act/rules/">W3C ACT rule</a>,
      so engines are compared on the same test. Every rule links to its authoritative W3C page —
      check the rule text before treating a single-engine finding as a false positive or a missed detection.</p>
      <p>An engine that reports nothing is <strong>silent</strong>, not passing. Silence can mean not applicable,
      not implemented, no target found, or a missed detection; only a human can tell them apart.</p>
      <div class="table-scroll">
        <table class="corr-table" aria-labelledby="act-coverage-heading">
          <caption>ACT rules observed in this scan, with engine mappings and findings.</caption>
          <thead>
            <tr>
              <th scope="col">ACT rule</th>
              <th scope="col">WCAG</th>
              <th scope="col">Engine mappings and findings</th>
              <th scope="col">Findings</th>
              <th scope="col">Coverage</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
      <p><a href="https://github.com/mgifford/open-scans/blob/main/reviews/README.md">Record a manual review decision</a>
      for any single-engine finding you verify.</p>
    </section>`;
}
