#!/usr/bin/env node
/**
 * Prints the comparison section for the weekly workflow summary.
 */
import { readFileSync } from 'node:fs'

const path = process.argv[2] || 'act-lab/latest.json'
const report = JSON.parse(readFileSync(path, 'utf8'))

const counts = Object.entries(report.counts)
  .map(([key, value]) => `| ${key} | ${value} |`)
  .join('\n')

const fixtures = new Set(report.results.map((entry) => entry.fixtureId)).size
const trigger = (report.trigger || []).join(', ') || 'none'

console.log([
  '## ACT laboratory: weekly comparison',
  '',
  `Cohort: \`${report.cohort.key}\``,
  `Trigger: \`${trigger}\``,
  `Fixtures: ${fixtures}`,
  `Engines: ${report.engines.join(', ')}`,
  '',
  '| Outcome status | Count |',
  '| :--- | ---: |',
  counts,
  '',
  '`notReported` means the engine stayed silent, `unmapped` means there is no',
  'engine rule mapping, and `unsupported` covers closed shadow roots.',
  'A missing finding is never recorded as `passed`.'
].join('\n'))
