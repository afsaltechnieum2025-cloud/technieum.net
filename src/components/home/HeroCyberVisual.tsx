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

const NODES: { label: string; sub: string; x: number; y: number }[] = [
  { label: 'Intel', sub: 'ToIP + RAG', x: 280, y: 52 },
  { label: 'Surface', sub: 'ASM', x: 468, y: 168 },
  { label: 'AI layer', sub: 'SAST + LLM', x: 412, y: 352 },
  { label: 'Validate', sub: 'Human-led', x: 148, y: 352 },
  { label: 'Portal', sub: 'OffSec', x: 92, y: 168 },
]

/**
 * Hero right-rail visual: abstract attack-surface / fusion diagram (brand palette, motion-safe).
 */
export function HeroCyberVisual() {
  const motion = !useReducedMotion()
  const cx = 280
  const cy = 220

  return (
    <div
      className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border-strong/50 bg-[linear-gradient(165deg,color-mix(in_oklab,var(--color-panel)_92%,black)_0%,#050505_45%,color-mix(in_oklab,var(--color-panel)_88%,black)_100%)] shadow-[0_24px_64px_-28px_rgb(0,0,0,0.85)] lg:min-h-[20rem] xl:min-h-[24rem]"
      role="img"
      aria-label="Abstract diagram: intelligence, attack surface, AI tooling, human validation, and OffSec portal connected to a central operations core."
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-[0.07] ${motion ? 'hero-cyber-scan' : ''}`}
        aria-hidden
      />

      <svg
        viewBox="0 0 560 420"
        className="relative z-[1] h-auto w-full max-w-[min(100%,520px)] px-2 py-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.35" />
            <stop offset="55%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(251 191 36)" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="hero-cyber-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.22" />
            <stop offset="70%" stopColor="rgb(232 93 4)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="rgb(0 0 0)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke="rgb(63 63 70)" strokeOpacity="0.35" strokeWidth="0.5">
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`v-${i}`} x1={48 + i * 42} y1="36" x2={48 + i * 42} y2="384" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`h-${i}`} x1="36" y1={48 + i * 42} x2="524" y2={48 + i * 42} />
          ))}
        </g>

        <circle
          cx={cx}
          cy={cy}
          r={138}
          stroke="url(#hero-cyber-grad)"
          strokeWidth="1"
          strokeOpacity="0.9"
          className={motion ? 'hero-cyber-orbit' : ''}
        />
        <circle cx={cx} cy={cy} r={118} stroke="rgb(232 93 4)" strokeOpacity="0.12" strokeWidth="0.75" />
        <circle cx={cx} cy={cy} r={98} stroke="rgb(39 39 42)" strokeWidth="0.5" />

        {NODES.map((n, i) => (
          <line
            key={`link-${n.label}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="rgb(232 93 4)"
            strokeOpacity="0.2"
            strokeWidth="1"
            className={motion ? 'hero-cyber-path-flow' : ''}
            style={motion ? { animationDelay: `${i * 0.35}s` } : undefined}
          />
        ))}

        <circle cx={cx} cy={cy} r={72} fill="url(#hero-cyber-core)" />
        <circle
          cx={cx}
          cy={cy}
          r={44}
          stroke="rgb(232 93 4)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          className={motion ? 'hero-cyber-hub-ring' : ''}
        />
        <circle cx={cx} cy={cy} r={28} fill="rgb(10 10 10)" stroke="rgb(232 93 4)" strokeOpacity="0.5" strokeWidth="1.25" />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fill="rgb(250 250 250)"
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em' }}
        >
          360
        </text>
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          fill="rgb(161 161 170)"
          style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.14em' }}
        >
          COVERAGE
        </text>

        {NODES.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r={34}
              fill="rgb(10 10 10 / 0.92)"
              stroke="rgb(232 93 4)"
              strokeOpacity={motion ? 0.45 : 0.3}
              strokeWidth="1"
              className={motion && i % 2 === 0 ? 'hero-cyber-node-glow' : ''}
              style={motion ? { animationDelay: `${i * 0.5}s` } : undefined}
            />
            <text
              x={n.x}
              y={n.y - 5}
              textAnchor="middle"
              fill="rgb(250 250 250)"
              style={{ fontSize: 11, fontWeight: 700 }}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 9}
              textAnchor="middle"
              fill="rgb(161 161 170)"
              style={{ fontSize: 8, fontWeight: 500 }}
            >
              {n.sub}
            </text>
          </g>
        ))}

        <path
          d="M44 44h32v4H48v28h-4V44zm468 0h-32v4h28v28h4V44zM44 376h4v28h28v4H44v-32zm468 0v32h-32v-4h28v-28h4z"
          fill="rgb(232 93 4)"
          fillOpacity="0.2"
        />
      </svg>

      <p className="sr-only">
        Stylized visualization only; not live data. Represents full-cycle offensive security with AI acceleration and
        expert validation.
      </p>
    </div>
  )
}
