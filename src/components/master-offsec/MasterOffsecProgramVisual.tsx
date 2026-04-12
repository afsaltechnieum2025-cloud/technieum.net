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

const CX = 220
const CY = 130
const R = 118

const STREAMS = [
  { label: 'Business logic', sub: 'SAST intel', angle: -90 },
  { label: 'SAST validation', sub: 'ToIP playbooks', angle: -18 },
  { label: 'Attack surface', sub: 'ASM', angle: 54 },
  { label: 'Tech stack', sub: 'Scan', angle: 126 },
  { label: 'AI / LLM', sub: 'Attack suite', angle: 198 },
] as const

function polar(angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) }
}

/**
 * Animated program diagram: intel hub, five parallel streams, portal bar (GIF-like motion when allowed).
 */
export function MasterOffsecProgramVisual() {
  const reduceMotion = useReducedMotion()
  const motion = !reduceMotion

  return (
    <div
      className="master-offsec-visual-wrap relative mx-auto w-full max-w-[min(100%,480px)]"
      role="img"
      aria-label="Animated diagram: ToIP intelligence hub connects five parallel testing streams into the OffSec Management Portal."
    >

      <svg
        viewBox="0 -36 440 342"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-[1] block h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="moff-portal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="rgb(232 93 4)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {STREAMS.map((s, i) => {
          const p = polar(s.angle)
          return (
            <line
              key={s.label}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              className={motion ? 'master-offsec-dash' : ''}
              stroke="rgb(232 93 4)"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeDasharray="5 9"
              strokeOpacity={motion ? 0.35 : 0.22}
              style={motion ? { animationDelay: `${i * 0.28}s` } : undefined}
            />
          )
        })}

        {STREAMS.map((s, i) => {
          const p = polar(s.angle)
          const bw = 86
          const bh = 34
          const x = p.x - bw / 2
          const y = p.y - bh / 2
          return (
            <g key={`box-${s.label}`}>
              <rect
                x={x}
                y={y}
                width={bw}
                height={bh}
                rx="7"
                fill="#0a0a0a"
                stroke="rgb(63 63 70)"
                strokeWidth="1"
                className={motion ? 'master-offsec-node' : ''}
                style={motion ? { animationDelay: `${i * 0.35}s` } : undefined}
              />
              <text x={p.x} y={p.y - 3} textAnchor="middle" fill="#fafafa" style={{ fontSize: 8.5, fontWeight: 700 }}>
                {s.label}
              </text>
              <text x={p.x} y={p.y + 9} textAnchor="middle" fill="#a1a1aa" style={{ fontSize: 7.5, fontWeight: 600 }}>
                {s.sub}
              </text>
            </g>
          )
        })}

        <rect
          x={CX - 52}
          y={CY - 24}
          width={104}
          height={48}
          rx="10"
          fill="rgb(232 93 4 / 0.14)"
          stroke="rgb(232 93 4)"
          strokeWidth="1.2"
          className={motion ? 'master-offsec-hub' : ''}
        />
        <text x={CX} y={CY - 2} textAnchor="middle" fill="#fafafa" style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.06em' }}>
          ToIP
        </text>
        <text x={CX} y={CY + 12} textAnchor="middle" fill="#a1a1aa" style={{ fontSize: 7.5, fontWeight: 600 }}>
          Intel hub
        </text>

        <rect x="20" y="248" width="400" height="44" rx="9" fill="url(#moff-portal-grad)" stroke="rgb(232 93 4 / 0.4)" strokeWidth="1.1" />
        <text
          x={220}
          y="268"
          textAnchor="middle"
          fill="rgb(232 93 4)"
          style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.18em' }}
        >
          OFFSEC MANAGEMENT PORTAL
        </text>
        <text x={220} y="284" textAnchor="middle" fill="#a1a1aa" style={{ fontSize: 8, fontWeight: 600 }}>
          Dashboards, findings, retest, reporting
        </text>

        {STREAMS.map((s, i) => {
          const p = polar(s.angle)
          return (
            <line
              key={`down-${s.label}`}
              x1={p.x}
              y1={p.y + 17}
              x2={220}
              y2="248"
              stroke="rgb(82 82 91)"
              strokeWidth="0.85"
              strokeDasharray="3 5"
              strokeOpacity="0.35"
              className={motion ? 'master-offsec-dash-slow' : ''}
              style={motion ? { animationDelay: `${0.4 + i * 0.2}s` } : undefined}
            />
          )
        })}

        <line x1={CX} y1={CY + 24} x2={220} y2="248" stroke="rgb(232 93 4)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 6" />
      </svg>

      <p className="sr-only">
        Five parallel streams connect into a central ToIP intelligence hub, then consolidate into the OffSec Management
        Portal for tracking and reporting. Animation illustrates continuous data flow when motion is enabled.
      </p>
    </div>
  )
}
