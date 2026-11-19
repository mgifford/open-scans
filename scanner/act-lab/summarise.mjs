#!/usr/bin/env node
/**
 * Summarises a normal Open Scans result set into ACT laboratory observations.
 *
 * Each fixture isolates one target, so the scanner's page-level findings for
 * the fixture's rule can be attributed to that target. The output keeps
 * execution status separate from the ACT outcome and never turns a missing
 * finding into a pass.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { getActRuleIds, loadActMapping } from '../act-mapping.mjs'

const ENGINES = ['axe', 'alfa', 'equalAccess', 'accesslint']

function mappingExists (ruleId, engine) {
  return Boolean(loadActMapping()?.byActRuleId?.[ruleId]?.[engine]?.length)
}

function findResult (meta, url) {
  const results = meta?.results || []
  return results.find((result) => result.submittedUrl === url || result.finalUrl === url) ||
    results.find((result) => String(result.submittedUrl || '').startsWith(url))
}

function outcomeFor (caseEntry, result, engine) {
  if (caseEntry.target?.scope === 'closed-shadow') {
    return {
      engine,
      execution: 'unsupported',
      outcome: null,
      status: 'unsupported',
      mapping: 'none',
      engineRuleIds: [],
      engineSpecificRules: [], otherActRules: [],
      evidence: 'Closed shadow root is not inspectable through engine public APIs.'
    }
  }

  if (!result) {
    return { engine, execution: 'notRun', outcome: null, status: 'notRun', mapping: 'none', engineRuleIds: [], engineSpecificRules: [], otherActRules: [], evidence: 'No result for this URL.' }
  }

  const scanner = result[engine]

  if (!scanner) {
    return {
      engine,
      execution: 'notRun',
      outcome: null,
      status: 'notRun',
      mapping: 'none',
      engineRuleIds: [],
      engineSpecificRules: [], otherActRules: [],
      evidence: 'Engine did not run for this URL.'
    }
  }

  if (scanner.error || scanner.status === 'error') {
    return {
      engine,
      execution: 'error',
      outcome: null,
      status: 'error',
      mapping: 'none',
      engineRuleIds: [],
      engineSpecificRules: [], otherActRules: [],
      evidence: String(scanner.error || 'Engine error').slice(0, 300)
    }
  }

  const failures = Array.isArray(scanner.failures) ? scanner.failures : []
  const passes = Array.isArray(scanner.passes) ? scanner.passes : []
  const engineRuleIds = [...new Set(failures.map((failure) => failure.rule || failure.ruleId).filter(Boolean))]
  const mappedFailures = failures.filter((failure) =>
    getActRuleIds(engine, failure.rule || failure.ruleId).includes(caseEntry.ruleId)
  )
  const engineSpecificRules = [...new Set(
    failures
      .filter((failure) => getActRuleIds(engine, failure.rule || failure.ruleId).length === 0)
      .map((failure) => failure.rule || failure.ruleId)
      .filter(Boolean)
  )]
  const otherActRules = [...new Set(
    failures
      .flatMap((failure) => getActRuleIds(engine, failure.rule || failure.ruleId))
      .filter((ruleId) => ruleId !== caseEntry.ruleId)
  )]
  const mappedPasses = passes.filter((pass) =>
    getActRuleIds(engine, pass.rule || pass.ruleId).includes(caseEntry.ruleId)
  )

  if (mappedFailures.length > 0) {
    return {
      engine,
      execution: 'executed',
      outcome: 'failed',
      status: 'failed',
      mapping: 'act-target',
      engineRuleIds,
      engineSpecificRules,
      otherActRules,
      evidence: mappedFailures.map((failure) => failure.rule || failure.ruleId).join(', ')
    }
  }

  if (mappedPasses.length > 0) {
    return {
      engine,
      execution: 'executed',
      outcome: 'passed',
      status: 'passed',
      mapping: 'act-target',
      engineRuleIds,
      engineSpecificRules,
      otherActRules,
      evidence: mappedPasses.map((pass) => pass.rule || pass.ruleId).join(', ')
    }
  }

  if (!mappingExists(caseEntry.ruleId, engine)) {
    return {
      engine,
      execution: 'executed',
      outcome: null,
      status: 'unmapped',
      mapping: otherActRules.length > 0 ? 'act-other' : 'none',
      engineRuleIds,
      engineSpecificRules,
      otherActRules,
      evidence: 'No engine rule is mapped to this ACT rule in scanner/data/act-mapping.json.'
    }
  }

  return {
    engine,
    execution: 'executed',
    outcome: null,
    status: 'notReported',
    mapping: otherActRules.length > 0
      ? 'act-other'
      : engineSpecificRules.length > 0 ? 'engine-specific' : 'none',
    engineRuleIds,
    engineSpecificRules,
    otherActRules,
    evidence: 'Engine reported no explicit ACT outcome for the target rule; silence is not a pass.'
  }
}

export function summarise (prepared, meta, viewport = null) {
  const results = []

  for (const caseEntry of prepared.cases) {
    const result = findResult(meta, caseEntry.url)

    for (const engine of ENGINES) {
      results.push({
        fixtureId: caseEntry.id,
        url: caseEntry.url,
        ruleId: caseEntry.ruleId,
        expected: caseEntry.expected,
        review: caseEntry.review,
        scope: caseEntry.target?.scope ?? null,
        viewport,
        ...outcomeFor(caseEntry, result, engine)
      })
    }
  }

  const counts = {}

  for (const entry of results) {
    counts[entry.status] = (counts[entry.status] || 0) + 1
  }

  const engineSpecificFindings = results.reduce(
    (total, entry) => total + (entry.engineSpecificRules?.length || 0),
    0
  )
  const otherActFindings = results.reduce(
    (total, entry) => total + (entry.otherActRules?.length || 0),
    0
  )

  const byEngine = {}

  for (const engine of ENGINES) {
    byEngine[engine] = {}
    for (const entry of results.filter((result) => result.engine === engine)) {
      byEngine[engine][entry.status] = (byEngine[engine][entry.status] || 0) + 1
    }
  }

  return {
    schemaVersion: 'act-lab-observations/1',
    generatedAt: new Date().toISOString(),
    siteRoot: prepared.siteRoot,
    manifestUrl: prepared.manifestUrl,
    cohort: prepared.cohort,
    trigger: prepared.reasons || [],
    engines: ENGINES,
    counts,
    engineSpecificFindings,
    otherActFindings,
    byEngine,
    results
  }
}

function main () {
  const preparedPath = process.argv[2] || '.tmp/act-lab/prepared.json'
  const metaPath = process.argv[3] || '.scan-output/meta.json'
  const outPath = process.argv[4] || 'act-lab/latest.json'
  const statePath = process.argv[5] || 'act-lab/state.json'
  const viewport = process.argv[6] || null

  const prepared = JSON.parse(readFileSync(resolve(preparedPath), 'utf8'))
  const meta = JSON.parse(readFileSync(resolve(metaPath), 'utf8'))

  if (meta.skipped) {
    throw new Error('The scan was skipped; refusing to record observations or update state.')
  }

  if (!Array.isArray(meta.results) || meta.results.length === 0) {
    throw new Error('The scan produced no results; refusing to record observations or update state.')
  }

  const summary = summarise(prepared, meta, viewport)

  mkdirSync(dirname(resolve(outPath)), { recursive: true })
  writeFileSync(resolve(outPath), JSON.stringify(summary, null, 2) + '\n')

  const state = {
    schemaVersion: 'act-lab-state/1',
    updatedAt: summary.generatedAt,
    cohort: prepared.cohort,
    trigger: prepared.reasons || [],
    lastRun: {
      generatedAt: summary.generatedAt,
      counts: summary.counts,
      report: outPath
    }
  }
  writeFileSync(resolve(statePath), JSON.stringify(state, null, 2) + '\n')

  process.stderr.write(
    `ACT observations: ${Object.entries(summary.counts).map(([key, value]) => `${key}=${value}`).join(', ')}\n`
  )
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main()
  } catch (error) {
    process.stderr.write(`ACT summarisation failed: ${error.message}\n`)
    process.exitCode = 1
  }
}
