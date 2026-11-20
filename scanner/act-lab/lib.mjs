/**
 * Shared helpers for the weekly ACT laboratory comparison.
 *
 * A cohort is the complete set of inputs that can change a result:
 * the fixtures, the installed engine versions, the ACT rule mapping and the
 * upstream W3C test-case data. If every component matches the last successful
 * run, the weekly job skips the scan instead of re-running unchanged work.
 */
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { CORRELATION_VERSION } from '../correlation.mjs'
import { RULE_SEMANTICS_VERSION } from '../rule-semantics.mjs'
import { TARGET_RESOLUTION_SCHEMA_VERSION } from '../target-resolution.mjs'

export const COHORT_VERSION = 'act-lab-cohort/1'
export const ACT_TESTCASES_URL = 'https://www.w3.org/WAI/content-assets/wcag-act-rules/testcases.json'
export const ENGINE_PACKAGES = [
  '@axe-core/playwright',
  '@siteimprove/alfa-cli',
  'accessibility-checker',
  '@accesslint/core',
  'sa11y'
]

export function canonicalize (value) {
  if (Array.isArray(value)) return value.map(canonicalize)

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value).sort().map((key) => [key, canonicalize(value[key])])
    )
  }

  return value
}

export function sha256 (value) {
  return createHash('sha256').update(value).digest('hex')
}

export function normalizeSiteRoot (value) {
  const url = new URL(value)

  if (url.protocol !== 'https:') throw new Error('siteRoot must use https')
  if (url.hostname === 'localhost' || url.hostname.endsWith('.local')) {
    throw new Error('siteRoot must be a public host')
  }
  if (/^(127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/.test(url.hostname)) {
    throw new Error('siteRoot must not resolve to a private address')
  }

  if (!url.pathname.endsWith('/')) url.pathname += '/'

  return url.href
}

export async function fetchText (url, { timeoutMs = 30_000 } = {}) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'open-scans ACT laboratory (https://github.com/mgifford/open-scans)' },
    signal: AbortSignal.timeout(timeoutMs)
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText} (${url})`)
  }

  return response.text()
}

export async function fetchJson (url, options) {
  return JSON.parse(await fetchText(url, options))
}

export function fixtureUrl (siteRoot, urlPath) {
  return new URL(urlPath, siteRoot).href
}

export function validateFixtureManifest (manifest, siteRoot) {
  const errors = []
  const site = new URL(siteRoot)

  if (manifest?.schemaVersion !== 'act-lab-fixture/2') {
    errors.push('schemaVersion must be act-lab-fixture/2')
  }

  if (!Array.isArray(manifest?.cases) || manifest.cases.length === 0) {
    errors.push('cases must be a non-empty array')
    return errors
  }

  const ids = new Set()

  for (const [index, entry] of manifest.cases.entries()) {
    const where = `cases[${index}]${entry?.id ? ` (${entry.id})` : ''}`

    if (!/^[a-z0-9-]+$/.test(entry?.id || '')) errors.push(`${where}: invalid id`)
    if (ids.has(entry.id)) errors.push(`${where}: duplicate id`)
    ids.add(entry.id)

    if (!/^[a-z0-9]{6}$/.test(entry?.act?.ruleId || '')) errors.push(`${where}: invalid ACT rule id`)
    if (!['passed', 'failed', 'inapplicable', null].includes(entry?.expected)) {
      errors.push(`${where}: invalid expected outcome`)
    }
    if (!['unreviewed', 'reviewed', 'disputed'].includes(entry?.review)) {
      errors.push(`${where}: invalid review status`)
    }
    if (!entry?.target?.scope) errors.push(`${where}: missing target scope`)
    if (!entry?.readySelector) errors.push(`${where}: missing ready selector`)

    if (typeof entry?.urlPath !== 'string' || entry.urlPath.startsWith('/') || entry.urlPath.includes('..')) {
      errors.push(`${where}: invalid relative urlPath`)
      continue
    }

    const url = new URL(entry.urlPath, siteRoot)

    if (url.origin !== site.origin || !url.pathname.startsWith(site.pathname)) {
      errors.push(`${where}: fixture is outside the configured site root`)
    }
  }

  return errors
}

export function fixtureCohortHash (manifest) {
  const cases = [...manifest.cases]
    .sort((first, second) => first.id.localeCompare(second.id))
    .map((entry) => ({
      id: entry.id,
      urlPath: entry.urlPath,
      ruleId: entry.act.ruleId,
      expected: entry.expected,
      review: entry.review,
      target: entry.target,
      readySelector: entry.readySelector
    }))

  return sha256(JSON.stringify(canonicalize(cases)))
}

export function loadInstalledEngineVersions (root) {
  const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'))
  const versions = {}

  for (const name of ENGINE_PACKAGES) {
    const entry = lock.packages?.[`node_modules/${name}`]
    versions[name] = entry?.version ?? null
  }

  return versions
}

export function fileHash (root, relativePath) {
  return sha256(readFileSync(join(root, relativePath)))
}

export function computeCohort ({
  fixtureHash,
  engineVersions,
  actMappingHash,
  actRegistryHash = '',
  actRulesHash,
  browser = 'chromium',
  siteRoot = '',
  targetResolutionVersion = TARGET_RESOLUTION_SCHEMA_VERSION,
  correlationVersion = CORRELATION_VERSION,
  semanticsVersion = RULE_SEMANTICS_VERSION
}) {
  const components = {
    cohortVersion: COHORT_VERSION,
    fixtures: fixtureHash,
    engines: engineVersions,
    actMapping: actMappingHash,
    actRegistry: actRegistryHash,
    actRules: actRulesHash,
    browser,
    siteRoot,
    // Analysis changes are cohort inputs too: a different correlation or
    // target-resolution algorithm can change a result without the page,
    // engine or mapping changing at all.
    targetResolution: targetResolutionVersion,
    correlation: correlationVersion,
    semantics: semanticsVersion
  }

  return {
    cohortVersion: COHORT_VERSION,
    key: sha256(JSON.stringify(canonicalize(components))),
    components
  }
}

export function compareCohorts (previous, current) {
  if (!previous?.key) return ['no-previous-state']
  if (previous.cohortVersion !== current.cohortVersion) return ['cohort-format-changed']

  const reasons = []
  const left = previous.components || {}
  const right = current.components || {}

  for (const key of Object.keys(right)) {
    if (JSON.stringify(canonicalize(left[key])) !== JSON.stringify(canonicalize(right[key]))) {
      reasons.push(
        {
          fixtures: 'fixtures-changed',
          engines: 'engine-versions-changed',
          actMapping: 'act-mapping-changed',
          actRegistry: 'act-registry-changed',
          actRules: 'act-rules-changed',
          browser: 'browser-changed',
          targetResolution: 'target-resolution-changed',
          correlation: 'correlation-algorithm-changed',
          semantics: 'rule-semantics-changed',
          cohortVersion: 'cohort-format-changed',
        }[key] || `${key}-changed`
      )
    }
  }

  return reasons.length > 0 ? reasons : []
}
