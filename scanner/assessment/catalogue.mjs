/**
 * Accessibility assessment catalogue.
 *
 * Open Scans uses the WCAG Spine catalogue as its shared reference for what a
 * WCAG success criterion is, which ACT rules and engine rules may relate to it,
 * which ARRM tasks and Trusted Tester steps describe manual work, and what the
 * catalogue itself does not know.
 *
 * The catalogue is vendored, versioned and content-addressed. Report generation
 * never fetches it: a scan can be rendered offline with the snapshot that was
 * validated on disk. A snapshot is never swapped underneath a historical report,
 * because the content hash and version travel in the report itself.
 *
 * @module assessment/catalogue
 */
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

export const CATALOGUE_SCHEMA = "a11y-assessment-catalogue/1";
export const SNAPSHOT_SCHEMA = "wcag-spine-snapshot/1";

const DEFAULT_SNAPSHOT_URL = new URL("../data/wcag-spine/master_spine.json", import.meta.url);
const DEFAULT_PROVENANCE_URL = new URL("../data/wcag-spine/PROVENANCE.json", import.meta.url);

const WCAG_LEVELS = new Set(["A", "AA", "AAA"]);
const SC_ID_RE = /^\d\.\d\.\d+$/;

let cachedCatalogue = null;

function fail(message, details) {
  const error = new Error(message);
  error.code = "ASSESSMENT_CATALOGUE_INVALID";
  if (details) error.details = details;
  return error;
}

/**
 * Validate a WCAG Spine snapshot and its provenance record.
 *
 * Validation is intentionally strict and cheap: a malformed or truncated
 * snapshot must fail at build/scan time rather than produce a report that
 * quietly claims less (or more) automation than exists.
 *
 * @param {object} spine parsed master_spine.json
 * @param {object} provenance parsed PROVENANCE.json
 * @param {{contentSha256?: string}} [options] hash of the bytes that were read
 * @returns {{spine: object, provenance: object}}
 */
export function validateCatalogue(spine, provenance, options = {}) {
  if (!spine || typeof spine !== "object") throw fail("WCAG Spine snapshot is not an object");
  if (!spine.success_criteria || typeof spine.success_criteria !== "object") {
    throw fail("WCAG Spine snapshot has no success_criteria map");
  }
  if (!provenance || typeof provenance !== "object") throw fail("WCAG Spine provenance record is missing");
  if (provenance.schema !== SNAPSHOT_SCHEMA) {
    throw fail(`Unsupported catalogue provenance schema: ${provenance.schema ?? "(none)"}`);
  }
  const criteria = Object.entries(spine.success_criteria);
  if (criteria.length === 0) throw fail("WCAG Spine snapshot contains no success criteria");

  for (const [id, criterion] of criteria) {
    if (!SC_ID_RE.test(id)) throw fail(`Invalid success criterion id: ${id}`);
    if (!criterion || typeof criterion !== "object") throw fail(`Success criterion ${id} is not an object`);
    if (!criterion.title) throw fail(`Success criterion ${id} has no title`);
    if (!WCAG_LEVELS.has(criterion.level)) {
      throw fail(`Success criterion ${id} has an unsupported level: ${criterion.level}`);
    }
    if (!criterion.url) throw fail(`Success criterion ${id} has no guidance URL`);
  }

  if (typeof provenance.contentSha256 !== "string" || !/^[a-f0-9]{64}$/.test(provenance.contentSha256)) {
    throw fail("Catalogue provenance has no usable content hash");
  }
  if (options.contentSha256 && options.contentSha256 !== provenance.contentSha256) {
    throw fail(
      "WCAG Spine snapshot content hash does not match its provenance record; " +
        "re-run the catalogue update instead of editing the snapshot by hand",
      { expected: provenance.contentSha256, actual: options.contentSha256 }
    );
  }
  if (typeof provenance.successCriteriaCount === "number" && provenance.successCriteriaCount !== criteria.length) {
    throw fail(
      `Catalogue provenance claims ${provenance.successCriteriaCount} success criteria but the snapshot has ${criteria.length}`
    );
  }

  return { spine, provenance };
}

/**
 * Load and cache the vendored catalogue.
 *
 * @param {{snapshotUrl?: URL|string, provenanceUrl?: URL|string, verifyHash?: boolean}} [options]
 * @returns {ReturnType<typeof buildCatalogue>}
 */
export function loadCatalogue(options = {}) {
  if (!options.snapshotUrl && !options.provenanceUrl && cachedCatalogue) return cachedCatalogue;

  const snapshotUrl = options.snapshotUrl ?? DEFAULT_SNAPSHOT_URL;
  const provenanceUrl = options.provenanceUrl ?? DEFAULT_PROVENANCE_URL;
  const verifyHash = options.verifyHash !== false;

  const bytes = readFileSync(snapshotUrl);
  const contentSha256 = createHash("sha256").update(bytes).digest("hex");
  let spine;
  let provenance;
  try {
    spine = JSON.parse(bytes.toString("utf8"));
  } catch (error) {
    throw fail(`WCAG Spine snapshot is not valid JSON: ${error.message}`);
  }
  try {
    provenance = JSON.parse(readFileSync(provenanceUrl, "utf8"));
  } catch (error) {
    throw fail(`WCAG Spine provenance record is not valid JSON: ${error.message}`);
  }

  const validated = validateCatalogue(spine, provenance, verifyHash ? { contentSha256 } : {});
  const catalogue = buildCatalogue(validated.spine, validated.provenance, { contentSha256, bytes: bytes.length });
  if (!options.snapshotUrl && !options.provenanceUrl) cachedCatalogue = catalogue;
  return catalogue;
}

/**
 * Build the in-memory catalogue: success criteria indexed by id plus identity.
 *
 * Values are frozen so a renderer cannot accidentally mutate the shared
 * catalogue between reports.
 */
export function buildCatalogue(spine, provenance, { contentSha256, bytes } = {}) {
  const criteria = new Map();
  for (const [id, criterion] of Object.entries(spine.success_criteria)) {
    criteria.set(
      id,
      Object.freeze({
        id,
        title: criterion.title,
        level: criterion.level,
        principle: criterion.principle ?? null,
        url: criterion.url,
        automation: Object.freeze({
          act: Object.freeze([...(criterion.automation?.act ?? [])]),
          axe: Object.freeze([...(criterion.automation?.axe ?? [])]),
          alfa: Object.freeze([...(criterion.automation?.alfa ?? [])])
        }),
        manual: Object.freeze({
          roles: Object.freeze([...(criterion.manual?.roles ?? [])]),
          ttSteps: Object.freeze([...(criterion.manual?.tt_steps ?? [])]),
          arrmTasks: Object.freeze(
            (criterion.manual?.arrm_tasks ?? []).map((task) =>
              Object.freeze({
                id: task.id ?? null,
                task: task.task ?? "",
                primaryOwnership: task.primary_ownership ?? null,
                secondaryOwnership: task.secondary_ownership ?? null,
                categoryUrl: task.category_url ?? null,
                roleUrl: task.role_url ?? null
              })
            )
          )
        }),
        functionalPerformance: Object.freeze([...(criterion.fpc ?? [])])
      })
    );
  }

  // ACT rule id -> { axe: [...], alfa: [...], qualweb: [...] } as published by
  // the catalogue. Used only to relate an observed engine rule to an ACT rule;
  // an absent entry means no relationship is claimed.
  const implementationIndex = Object.freeze(
    Object.fromEntries(
      Object.entries(spine.meta?.act_implementations ?? {}).map(([actRuleId, value]) => [
        actRuleId,
        Object.freeze({
          axe: Object.freeze([...(value?.axe ?? [])]),
          alfa: Object.freeze([...(value?.alfa ?? [])]),
          qualweb: Object.freeze([...(value?.qualweb ?? [])])
        })
      ])
    )
  );

  const identity = Object.freeze({
    schema: CATALOGUE_SCHEMA,
    catalogueVersion: provenance.catalogueVersion ?? "unknown",
    generated: provenance.generated ?? null,
    wcagVersion: provenance.wcagVersion ?? spine.meta?.wcag_version ?? null,
    axeVersion: provenance.axeVersion ?? spine.meta?.axe_version ?? null,
    sourceUrl: provenance.sourceUrl ?? null,
    sourceRepository: provenance.sourceRepository ?? null,
    contentSha256: contentSha256 ?? provenance.contentSha256 ?? null,
    bytes: bytes ?? provenance.bytes ?? null,
    vendoredAt: provenance.vendoredAt ?? null,
    transitional: provenance.transitional !== false
  });

  return Object.freeze({ schema: CATALOGUE_SCHEMA, identity, criteria, implementationIndex });
}

/**
 * Project the catalogue into the compact shape embedded in a report.
 *
 * The report embeds what a reviewer needs to understand coverage and to start a
 * manual assessment. AAA criteria keep their identity and link but drop rule and
 * ARRM detail, which keeps the payload bounded without hiding the document
 * structure.
 *
 * @param {ReturnType<typeof buildCatalogue>} catalogue
 * @param {{includeAaaDetail?: boolean}} [options]
 */
export function projectCatalogue(catalogue, options = {}) {
  const includeAaaDetail = options.includeAaaDetail === true;
  const criteria = [];
  for (const criterion of catalogue.criteria.values()) {
    const base = {
      id: criterion.id,
      title: criterion.title,
      level: criterion.level,
      principle: criterion.principle,
      url: criterion.url
    };
    if (criterion.level === "AAA" && !includeAaaDetail) {
      criteria.push({ ...base, automation: { act: [], axe: [], alfa: [] }, roles: [], arrm: [], tt: [] });
      continue;
    }
    criteria.push({
      ...base,
      automation: {
        act: [...criterion.automation.act],
        axe: [...criterion.automation.axe],
        alfa: [...criterion.automation.alfa]
      },
      roles: [...criterion.manual.roles],
      arrm: criterion.manual.arrmTasks.map((task) => task.id).filter(Boolean),
      tt: [...criterion.manual.ttSteps]
    });
  }
  criteria.sort(compareCriterionIds);
  return { identity: { ...catalogue.identity }, criteria };
}

/** Compare `1.4.10`-style ids numerically rather than lexically. */
export function compareCriterionIds(a, b) {
  const left = String(a).split(".").map((part) => Number.parseInt(part, 10));
  const right = String(b).split(".").map((part) => Number.parseInt(part, 10));
  for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
    const l = Number.isFinite(left[i]) ? left[i] : 0;
    const r = Number.isFinite(right[i]) ? right[i] : 0;
    if (l !== r) return l - r;
  }
  return String(a).localeCompare(String(b));
}

/** Reset the module-level cache. Intended for tests and the update script. */
export function resetCatalogueCache() {
  cachedCatalogue = null;
}
