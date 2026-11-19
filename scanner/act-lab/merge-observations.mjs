#!/usr/bin/env node
/**
 * Merges per-viewport ACT laboratory observations into one report.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ENGINES = ['axe', 'alfa', 'equalAccess', 'accesslint']

export function mergeReports (reports) {
  if (!reports.length) throw new Error('No reports to merge')

  const results = reports.flatMap((report) => report.results)
  const counts = {}
  const byEngine = {}

  for (const entry of results) {
    counts[entry.status] = (counts[entry.status] || 0) + 1
    byEngine[entry.engine] = byEngine[entry.engine] || {}
    byEngine[entry.engine][entry.status] = (byEngine[entry.engine][entry.status] || 0) + 1
  }

  for (const engine of ENGINES) byEngine[engine] = byEngine[engine] || {}

  const comparisons = reports.flatMap((report) => report.comparisons || [])
  const comparisonCounts = {}
  for (const comparison of comparisons) {
    comparisonCounts[comparison.status] = (comparisonCounts[comparison.status] || 0) + 1
  }
  const targetStatuses = { resolved: 0, unresolved: 0, ambiguous: 0, unsupported: 0 }
  for (const comparison of comparisons) {
    if (comparison.targetStatus in targetStatuses) targetStatuses[comparison.targetStatus] += 1
  }

  return {
    ...reports[0],
    generatedAt: new Date().toISOString(),
    viewports: [...new Set(results.map((entry) => entry.viewport).filter(Boolean))],
    counts,
    comparisonCounts,
    targetStatuses,
    comparisons,
    engineSpecificFindings: results.reduce(
      (total, entry) => total + (entry.engineSpecificRules?.length || 0),
      0
    ),
    otherActFindings: results.reduce(
      (total, entry) => total + (entry.otherActRules?.length || 0),
      0
    ),
    pageLevelFindings: results.reduce(
      (total, entry) => total + (entry.pageLevelFailures || 0),
      0
    ),
    byEngine,
    results
  }
}

function main () {
  const outPath = process.argv[2] || 'act-lab/latest.json'
  const inputPaths = process.argv.slice(3)

  if (inputPaths.length === 0) throw new Error('Usage: merge-observations.mjs <out> <input...>')

  const reports = inputPaths.map((file) => JSON.parse(readFileSync(resolve(file), 'utf8')))
  const merged = mergeReports(reports)

  mkdirSync(dirname(resolve(outPath)), { recursive: true })
  writeFileSync(resolve(outPath), JSON.stringify(merged, null, 2) + '\n')

  process.stderr.write(
    `Merged ${reports.length} viewport reports: ${merged.viewports.join(', ')}\n`
  )
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main()
  } catch (error) {
    process.stderr.write(`ACT merge failed: ${error.message}\n`)
    process.exitCode = 1
  }
}
