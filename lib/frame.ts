/** Deterministic, plausible-looking slate timecode for frame number `n`. */
export function frameTimecode(n: number) {
  const pad = (x: number) => String(x).padStart(2, '0')
  return `00:${pad(n)}:${pad((n * 17 + 8) % 60)}:${pad((n * 7 + 3) % 24)}`
}
