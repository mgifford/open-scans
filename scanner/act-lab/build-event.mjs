#!/usr/bin/env node
/**
 * Builds the scan-issue event consumed by scanner/run-scan.mjs for the ACT
 * laboratory fixtures. All engines run; the URL list is explicit, so the
 * scanner must not crawl or substitute a random engine subset.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

import { fixtureUrl } from './lib.mjs'

const preparedPath = process.argv[2] || '.tmp/act-lab/prepared.json'
const outPath = process.argv[3] || '.tmp/act-lab/issue-event.json'

function flag (name) {
  const index = process.argv.indexOf(name)
  return index === -1 ? null : process.argv[index + 1]
}

const viewport = flag('--viewport')
const colorScheme = flag('--color-scheme')

const prepared = JSON.parse(readFileSync(resolve(preparedPath), 'utf8'))
const urls = prepared.cases.map((entry) => fixtureUrl(prepared.siteRoot, entry.urlPath))

const event = {
  issue: {
    number: Number(process.env.GITHUB_RUN_NUMBER || Date.now()),
    html_url: process.env.GITHUB_RUN_ID
      ? `${process.env.GITHUB_SERVER_URL || 'https://github.com'}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
      : 'https://github.com/mgifford/open-scans/actions',
    title: 'SCAN: ACT laboratory weekly comparison',
    created_at: new Date().toISOString(),
    user: { login: 'github-actions[bot]' },
    body: [
      'Engine: all',
      ...(viewport ? [`Viewport: ${viewport}`] : []),
      ...(colorScheme ? [`Color scheme: ${colorScheme}`] : []),
      '',
      '### URLs',
      '',
      ...urls
    ].join('\n')
  }
}

mkdirSync(dirname(resolve(outPath)), { recursive: true })
writeFileSync(resolve(outPath), JSON.stringify(event, null, 2) + '\n')

process.stderr.write(`ACT scan event written for ${urls.length} fixture URLs\n`)
