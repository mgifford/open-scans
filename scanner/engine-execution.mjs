/**
 * Summarises which engines actually executed for a scan.
 *
 * A requested engine can produce zero outcomes because it crashed, because its
 * browser was not installed, or because it was disabled. Those are execution
 * failures, not clean results.
 */
export const ENGINE_DISPLAY_NAMES = Object.freeze({
  axe: 'axe',
  alfa: 'ALFA',
  equalAccess: 'Equal Access',
  accesslint: 'AccessLint'
})

export function getEngineExecution (summary) {
  const results = Array.isArray(summary?.results) ? summary.results : []
  const requested = summary?.engines?.includes('all')
    ? Object.keys(ENGINE_DISPLAY_NAMES)
    : (summary?.engines || [])

  const execution = {}

  for (const engine of requested) {
    const runs = results
      .map((result) => result?.[engine])
      .filter((run) => run && typeof run === 'object')

    if (runs.length === 0) {
      execution[engine] = { status: 'notRun', error: null, executedRuns: 0, failedRuns: 0 }
      continue
    }

    const failures = runs.filter((run) => run.executed === false || run.error)
    const successes = runs.filter((run) => run.executed !== false && !run.error)
    const firstError = failures.find((run) => run.error)?.error

    execution[engine] = {
      status: successes.length === 0
        ? 'failed'
        : failures.length > 0 ? 'partial' : 'executed',
      error: firstError ? String(firstError).split('\n')[0].slice(0, 300) : null,
      executedRuns: successes.length,
      failedRuns: failures.length
    }
  }

  return execution
}

export function formatEngineExecution (summary) {
  const execution = getEngineExecution(summary)
  const lines = []

  const requested = summary?.engines?.includes('all')
    ? 'all supported engines'
    : (summary?.engines || []).map((engine) => ENGINE_DISPLAY_NAMES[engine] || engine).join(', ')

  const executed = Object.entries(execution)
    .filter(([, info]) => info.status === 'executed' || info.status === 'partial')
    .map(([engine]) => ENGINE_DISPLAY_NAMES[engine] || engine)

  lines.push(`- Engines requested: ${requested}`)
  lines.push(`- Engines executed: ${executed.length > 0 ? executed.join(', ') : 'none'}`)

  for (const [engine, info] of Object.entries(execution)) {
    const name = ENGINE_DISPLAY_NAMES[engine] || engine

    if (info.status === 'failed') {
      lines.push(`- ⚠️ ${name} did not run${info.error ? `: ${info.error}` : '.'}`)
    } else if (info.status === 'partial') {
      lines.push(`- ⚠️ ${name} failed on ${info.failedRuns} page(s)${info.error ? `: ${info.error}` : '.'}`)
    } else if (info.status === 'notRun' && summary?.engines?.includes('all')) {
      lines.push(`- ${name}: not run`)
    }
  }

  return lines
}
