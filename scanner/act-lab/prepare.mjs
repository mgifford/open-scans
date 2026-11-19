#!/usr/bin/env node
/**
 * Prepares the weekly ACT laboratory run.
 *
 * Fetches the published fixture manifest and the upstream W3C ACT test-case
 * data, reads the installed engine versions and the ACT rule mapping, then
 * compares the resulting cohort with the last successful run.
 *
 * Exit code 0 always: an unchanged cohort is a successful no-op. The workflow
 * reads `changed` from GITHUB_OUTPUT and decides whether to scan.
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  ACT_TESTCASES_URL,
  computeCohort,
  compareCohorts,
  fetchJson,
  fetchText,
  fileHash,
  fixtureCohortHash,
  fixtureUrl,
  loadInstalledEngineVersions,
  normalizeSiteRoot,
  sha256,
  validateFixtureManifest
} from './lib.mjs'

const ROOT = fileURLToPath(new URL('../..', import.meta.url))

function argument (name, fallback = null) {
  const index = process.argv.indexOf(name)
  return index === -1 ? fallback : process.argv[index + 1]
}

async function main () {
  const siteRoot = normalizeSiteRoot(argument('--site-root', 'https://mgifford.github.io/record-a-goose-sighting/'))
  const statePath = argument('--state', 'act-lab/state.json')
  const outPath = argument('--out', '.tmp/act-lab/prepared.json')
  const force = process.argv.includes('--force')

  const manifestUrl = fixtureUrl(siteRoot, 'lab/fixtures.json')
  const manifest = await fetchJson(manifestUrl)
  const errors = validateFixtureManifest(manifest, siteRoot)

  if (errors.length > 0) {
    throw new Error(`Fixture manifest is not usable:\n${errors.join('\n')}`)
  }

  const actRulesText = await fetchText(ACT_TESTCASES_URL)
  const actRulesHash = sha256(actRulesText)

  const cohort = computeCohort({
    fixtureHash: fixtureCohortHash(manifest),
    engineVersions: loadInstalledEngineVersions(ROOT),
    actMappingHash: fileHash(ROOT, 'scanner/data/act-mapping.json'),
    actRulesHash
  })

  const previous = existsSync(statePath)
    ? JSON.parse(readFileSync(statePath, 'utf8')).cohort
    : null

  const reasons = force ? ['forced'] : compareCohorts(previous, cohort)
  const changed = reasons.length > 0

  const prepared = {
    schemaVersion: 'act-lab-prepared/1',
    evaluatedAt: new Date().toISOString(),
    siteRoot,
    manifestUrl,
    changed,
    reasons,
    cohort,
    cases: manifest.cases.map((entry) => ({
      id: entry.id,
      urlPath: entry.urlPath,
      url: fixtureUrl(siteRoot, entry.urlPath),
      ruleId: entry.act.ruleId,
      expected: entry.expected,
      review: entry.review,
      target: entry.target,
      readySelector: entry.readySelector
    }))
  }

  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, JSON.stringify(prepared, null, 2) + '\n')

  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(
      process.env.GITHUB_OUTPUT,
      `changed=${changed}\nkey=${cohort.key}\nreasons=${reasons.join(',') || 'unchanged'}\n`,
      'utf8'
    )
  }

  process.stderr.write(`ACT cohort ${changed ? 'changed' : 'unchanged'}: ${reasons.join(', ') || 'no changes'}\n`)
  process.stderr.write(`Fixtures: ${prepared.cases.length}; cohort key: ${cohort.key.slice(0, 16)}\n`)
}

main().catch((error) => {
  process.stderr.write(`ACT preparation failed: ${error.message}\n`)
  process.exitCode = 1
})
