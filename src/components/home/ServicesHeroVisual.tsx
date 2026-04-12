import { useEffect, useState } from 'react'

function useReducedMotion() {
  const [reduce, setReduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduce
}

/** Abbreviated practice lanes for visual storytelling (not a 1:1 map to PDF overviews). */
const LANES: { short: string; y: number; side: 'L' | 'R' }[] = [
  { short: 'Infra', y: 56, side: 'L' },
  { short: 'App', y: 118, side: 'R' },
  { short: 'AI', y: 180, side: 'L' },
  { short: 'Social', y: 242, side: 'R' },
  { short: 'Cloud', y: 304, side: 'L' },
  { short: 'Program', y: 366, side: 'R' },
]

const CX = 200

/**
 * Services hero left rail: catalog / delivery lanes (brand orange, SOC-style grid, motion-safe).
 */
export function ServicesHeroVisual() {
  const motion = !useReducedMotion()

  return (
    <div
      className="relative flex min-h-[220px] w-full max-w-[min(100%,440px)] items-center justify-center overflow-hidden rounded-2xl border border-border-strong/50 bg-[linear-gradient(165deg,color-mix(in_oklab,var(--color-panel)_92%,black)_0%,#050505_48%,color-mix(in_oklab,var(--color-panel)_88%,black)_100%)] shadow-[0_24px_64px_-28px_rgb(0,0,0,0.85)] lg:min-h-[18rem] xl:min-h-[22rem]"
      role="img"
      aria-label="Abstract diagram: offensive service lanes from infrastructure and applications through AI, social engineering, cloud, and program-level work, tied to a central delivery spine."
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-[0.06] ${motion ? 'hero-cyber-scan' : ''}`}
        aria-hidden
      />

      <svg
        viewBox="0 0 400 420"
        className="relative z-[1] h-auto w-full px-3 py-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="services-hero-spine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="rgb(232 93 4)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="rgb(232 93 4)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <g stroke="rgb(63 63 70)" strokeOpacity="0.4" strokeWidth="0.5">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`g-${i}`} x1={28 + i * 38} y1="28" x2={28 + i * 38} y2="392" />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`gh-${i}`} x1="20" y1={36 + i * 40} x2="380" y2={36 + i * 40} />
          ))}
        </g>

        <rect
          x="118"
          y="32"
          width="164"
          height="356"
          rx="10"
          stroke="rgb(232 93 4)"
          strokeOpacity="0.2"
          strokeWidth="1"
          fill="rgb(0 0 0 / 0.25)"
        />

        <line
          x1={CX}
          y1="48"
          x2={CX}
          y2="372"
          stroke="url(#services-hero-spine)"
          strokeWidth="2.5"
          className={motion ? 'services-hero-spine-flow' : ''}
        />

        {LANES.map((lane, i) => {
          const pathD =
            lane.side === 'L'
              ? `M 120 ${lane.y} L ${CX - 6} ${lane.y}`
              : `M ${CX + 6} ${lane.y} L 258 ${lane.y}`

          return (
            <g key={lane.short}>
              <path
                d={pathD}
                stroke="rgb(232 93 4)"
                strokeOpacity="0.28"
                strokeWidth="1.25"
                className={motion ? 'services-hero-path-flow' : ''}
                style={motion ? { animationDelay: `${i * 0.22}s` } : undefined}
              />
              <rect
                x={lane.side === 'L' ? 36 : 258}
                y={lane.y - 22}
                width="84"
                height="44"
                rx="8"
                fill="rgb(10 10 10 / 0.9)"
                stroke="rgb(232 93 4)"
                strokeWidth="1"
                strokeOpacity="0.4"
                className={motion ? 'services-hero-pill' : ''}
                style={motion ? { animationDelay: `${i * 0.55}s` } : undefined}
              />
              <text
                x={lane.side === 'L' ? 78 : 300}
                y={lane.y + 5}
                textAnchor="middle"
                fill="rgb(250 250 250)"
                style={{ fontSize: 12, fontWeight: 700 }}
              >
                {lane.short}
              </text>
            </g>
          )
        })}

        <circle cx={CX} cy="210" r="26" fill="rgb(10 10 10)" stroke="rgb(232 93 4)" strokeWidth="1.5" strokeOpacity="0.55" />
        <text
          x={CX}
          y="214"
          textAnchor="middle"
          fill="rgb(250 250 250)"
          style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.12em' }}
        >
          PT
        </text>

        <path
          d="M28 28h28v3H31v22h-3V28zm344 0h-28v3h25v22h3V28zM28 392h3v22h25v3H28v-25zm344 0v25h-28v-3h25v-22h3z"
          fill="rgb(232 93 4)"
          fillOpacity="0.18"
        />
      </svg>

      <p className="sr-only">
        Decorative animation only. Illustrates breadth of offensive services aligned to your engagement model.
      </p>
    </div>
  )
}
