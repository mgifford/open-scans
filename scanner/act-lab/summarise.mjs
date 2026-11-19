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
import { getMappingsForActRule } from '../act-registry.mjs'
import {
  classifyFailureOnTarget,
  compareExpectation,
  resolveCaseTarget
} from './target-outcomes.mjs'

const ENGINES = ['axe', 'alfa', 'equalAccess', 'accesslint']

function mappingExists (ruleId, engine) {
  // Use the registry, not only the legacy mapping file: Equal Access and
  // AccessLint rules are recorded there as candidate mappings, and calling
  // them "unmapped" when a candidate exists would misdescribe the evidence.
  if (getMappingsForActRule(ruleId, engine).length > 0) return true
  return Boolean(loadActMapping()?.byActRuleId?.[ruleId]?.[engine]?.length)
}

function findResult (meta, url) {
  const results = meta?.results || []
  return results.find((result) => result.submittedUrl === url || result.finalUrl === url) ||
    results.find((result) => String(result.submittedUrl || '').startsWith(url))
}

function emptyOutcome (engine, status, evidence, extra = {}) {
  return {
    engine,
    execution: status === 'unsupported' || status === 'notRun' || status === 'error' ? status : 'executed',
    outcome: null,
    status,
    mapping: 'none',
    engineRuleIds: [],
    engineSpecificRules: [],
    otherActRules: [],
    onTargetFailures: 0,
    pageLevelFailures: 0,
    evidence,
    ...extra
  }
}

function outcomeFor (caseEntry, result, engine, caseResolution) {
  if (caseResolution.status === 'unsupported') {
    return emptyOutcome(engine, 'unsupported', caseResolution.reason)
  }

  if (!result) {
    return emptyOutcome(engine, 'notRun', 'No result for this URL.')
  }

  const scanner = result[engine]

  if (!scanner) {
    return emptyOutcome(engine, 'notRun', 'Engine did not run for this URL.')
  }

  if (scanner.error || scanner.status === 'error') {
    return emptyOutcome(engine, 'error', String(scanner.error || 'Engine error').slice(0, 300))
  }

  if (caseResolution.status !== 'resolved') {
    return emptyOutcome(
      engine,
      caseResolution.status === 'ambiguous' ? 'target-ambiguous' : 'target-unresolved',
      caseResolution.reason || 'The fixture target could not be resolved; findings are not attributed.'
    )
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

  const onTarget = []
  const offTarget = []
  for (const failure of mappedFailures) {
    const placement = classifyFailureOnTarget(result, failure, caseResolution)
    if (placement === 'on-target') onTarget.push(failure)
    else if (placement === 'off-target') offTarget.push(failure)
  }

  const shared = {
    engineRuleIds,
    engineSpecificRules,
    otherActRules,
    onTargetFailures: onTarget.length,
    pageLevelFailures: offTarget.length
  }

  if (onTarget.length > 0) {
    return {
      engine,
      execution: 'executed',
      outcome: 'failed',
      status: 'failed',
      mapping: 'act-target',
      ...shared,
      evidence: onTarget.map((failure) => failure.rule || failure.ruleId).join(', ')
    }
  }

  if (offTarget.length > 0) {
    return {
      engine,
      execution: 'executed',
      outcome: null,
      status: 'page-level-only',
      mapping: 'act-other-target',
      ...shared,
      evidence: `${offTarget.length} finding(s) for this ACT rule were reported elsewhere on the page and are not attributed to the fixture target.`
    }
  }

  if (mappedPasses.length > 0) {
    // Pass lists carry no target locator, so a page-level pass cannot be
    // attributed to the fixture target.
    return {
      engine,
      execution: 'executed',
      outcome: null,
      status: 'pass-not-attributed',
      mapping: 'act-target',
      ...shared,
      evidence: 'The engine reported a pass for this rule without a target locator; a page-level pass cannot be attributed to the fixture target.'
    }
  }

  if (!mappingExists(caseEntry.ruleId, engine)) {
    return {
      engine,
      execution: 'executed',
      outcome: null,
      status: 'unmapped',
      mapping: otherActRules.length > 0 ? 'act-other' : 'none',
      ...shared,
      evidence: 'No engine rule is mapped to this ACT rule in scanner/data/act-registry.json.'
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
    ...shared,
    evidence: 'Engine reported no explicit ACT outcome for the target rule; silence is not a pass.'
  }
}

export function summarise (prepared, meta, viewport = null) {
  const results = []
  const comparisons = []
  const targetStatuses = { resolved: 0, unresolved: 0, ambiguous: 0, unsupported: 0 }

  for (const caseEntry of prepared.cases) {
    const result = findResult(meta, caseEntry.url)
    const caseResolution = resolveCaseTarget(caseEntry, result)
    targetStatuses[caseResolution.status] = (targetStatuses[caseResolution.status] || 0) + 1

    const caseResults = []
    for (const engine of ENGINES) {
      const outcome = outcomeFor(caseEntry, result, engine, caseResolution)
      const entry = {
        fixtureId: caseEntry.id,
        url: caseEntry.url,
        ruleId: caseEntry.ruleId,
        expected: caseEntry.expected,
        review: caseEntry.review,
        scope: caseEntry.target?.scope ?? null,
        viewport,
        target: {
          status: caseResolution.status,
          targetId: caseResolution.targetId,
          method: caseResolution.method,
          matchedElements: caseResolution.matchedElements,
          documentHash: caseResolution.documentHash,
          reason: caseResolution.reason || null
        },
        ...outcome
      }
      results.push(entry)
      caseResults.push(entry)
    }

    const failedEngines = caseResults
      .filter((entry) => entry.status === 'failed')
      .map((entry) => entry.engine)
    comparisons.push({
      fixtureId: caseEntry.id,
      url: caseEntry.url,
      ruleId: caseEntry.ruleId,
      expected: caseEntry.expected,
      review: caseEntry.review,
      viewport,
      targetStatus: caseResolution.status,
      ...compareExpectation({
        expected: caseEntry.expected,
        review: caseEntry.review,
        failedEngines,
        engineCount: ENGINES.length
      })
    })
  }

  const counts = {}

  for (const entry of results) {
    counts[entry.status] = (counts[entry.status] || 0) + 1
  }

  const comparisonCounts = {}
  for (const comparison of comparisons) {
    comparisonCounts[comparison.status] = (comparisonCounts[comparison.status] || 0) + 1
  }

  const engineSpecificFindings = results.reduce(
    (total, entry) => total + (entry.engineSpecificRules?.length || 0),
    0
  )
  const otherActFindings = results.reduce(
    (total, entry) => total + (entry.otherActRules?.length || 0),
    0
  )
  const pageLevelFindings = results.reduce(
    (total, entry) => total + (entry.pageLevelFailures || 0),
    0
  )

  const byEngine = {}

  for (const engine of ENGINES) {
    byEngine[engine] = {}
    for (const entry of results.filter((result) => result.engine === engine)) {
      byEngine[engine][entry.status] = (byEngine[engine][entry.status] || 0) + 1
    }
  }

  const missingFixtures = [...new Set(
    results
      .filter((entry) => entry.status === 'notRun')
      .map((entry) => entry.fixtureId)
  )].sort()
  const failedEngines = [...new Set(
    results
      .filter((entry) => entry.status === 'error')
      .map((entry) => entry.engine)
  )].sort()

  return {
    schemaVersion: 'act-lab-observations/2',
    generatedAt: new Date().toISOString(),
    status: missingFixtures.length > 0 || failedEngines.length > 0 ? 'partial' : 'complete',
    missingFixtures,
    failedEngines,
    siteRoot: prepared.siteRoot,
    manifestUrl: prepared.manifestUrl,
    cohort: prepared.cohort,
    trigger: prepared.reasons || [],
    engines: ENGINES,
    algorithm: {
      targetOutcome: 'act-lab-target-outcome/1'
    },
    counts,
    comparisonCounts,
    targetStatuses,
    engineSpecificFindings,
    otherActFindings,
    pageLevelFindings,
    byEngine,
    comparisons,
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
    throw new Error(
      'The scan artifact produced no results; refusing to record observations or update state. ' +
      'Pass report.json (it has a results array with per-engine failures and rendered HTML), ' +
      'not run-scan stdout, which is only a summary.'
    )
  }

  const summary = summarise(prepared, meta, viewport)

  // Partial runs still publish their evidence, labelled as partial, but they
  // never become the baseline: state.json is only written for a complete run,
  // so the next scheduled run retries the missing fixtures.
  mkdirSync(dirname(resolve(outPath)), { recursive: true })
  writeFileSync(resolve(outPath), JSON.stringify(summary, null, 2) + '\n')

  if (summary.status !== 'complete') {
    const detail = summary.results
      .filter((entry) => entry.status === 'error' || entry.status === 'notRun')
      .slice(0, 5)
      .map((entry) => `${entry.fixtureId}/${entry.engine}: ${entry.status} (${entry.evidence})`)
      .join('; ')
    process.stderr.write(
      `ACT observations recorded as PARTIAL (${summary.missingFixtures.length} fixture(s) not scanned). ` +
      `Cohort state not updated. ${detail}\n`
    )
    process.stderr.write(
      `ACT observations: ${Object.entries(summary.counts).map(([key, value]) => `${key}=${value}`).join(', ')}\n`
    )
    return
  }

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
