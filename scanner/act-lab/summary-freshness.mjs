#!/usr/bin/env node
/**
 * Prints the engine-freshness section for the weekly workflow summary.
 * Reads the JSON produced by scanner/check-engine-versions.mjs.
 */
import { existsSync, readFileSync } from 'node:fs'

const path = process.argv[2] || '.tmp/engine-status.json'
const lines = ['### Engine freshness', '']

if (!existsSync(path)) {
  lines.push('Engine version check did not produce a result.')
} else {
  const status = JSON.parse(readFileSync(path, 'utf8'))

  if (status.outdated.length === 0) {
    lines.push('All installed engines match the latest npm release.')
  } else {
    lines.push(
      `${status.outdated.length} engine dependency(ies) are behind the latest npm release.`,
      'The weekly comparison does not change until the lockfile is updated deliberately.',
      '',
      '| Package | Installed | Latest |',
      '| :--- | :--- | :--- |'
    )

    for (const entry of status.outdated) {
      lines.push(`| \`${entry.name}\` | ${entry.installed} | ${entry.latest} |`)
    }
  }
}

console.log(lines.join('\n'))
