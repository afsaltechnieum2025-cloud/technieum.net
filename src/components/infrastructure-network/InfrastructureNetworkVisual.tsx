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

const NODES = [
  { x: 52, y: 88, w: 92, h: 38, t1: 'External', t2: 'ASM / edge' },
  { x: 172, y: 88, w: 92, h: 38, t1: 'Perimeter', t2: 'Net test' },
  { x: 292, y: 88, w: 92, h: 38, t1: 'Internal', t2: 'Lateral' },
  { x: 412, y: 88, w: 92, h: 38, t1: 'Identity', t2: 'AD / hybrid' },
] as const

/**
 * Pipeline-style animated diagram: external to identity, into portal (reuses master-offsec dash CSS).
 */
export function InfrastructureNetworkVisual() {
  const motion = !useReducedMotion()

  return (
    <div
      className="master-offsec-visual-wrap relative mx-auto w-full max-w-[min(100%,520px)] rounded-2xl border border-border-strong/60 bg-[#070707] shadow-[0_24px_64px_-28px_rgb(0,0,0,0.85)]"
      role="img"
      aria-label="Diagram: external attack surface through perimeter and internal testing into identity, consolidating in the OffSec Management Portal."
    >
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-[0.07] ${motion ? 'hero-cyber-scan' : ''}`}
        aria-hidden
      />

      <svg
        viewBox="0 -20 520 268"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-[1] block h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="infra-portal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="rgb(232 93 4)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {NODES.map((n, i) => {
          const cy = n.y + n.h / 2
          const next = NODES[i + 1]
          if (!next) return null
          const cy2 = next.y + next.h / 2
          return (
            <line
              key={`link-${i}`}
              x1={n.x + n.w + 2}
              y1={cy}
              x2={next.x - 2}
              y2={cy2}
              stroke="rgb(232 93 4)"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeDasharray="5 9"
              strokeOpacity={motion ? 0.38 : 0.22}
              className={motion ? 'master-offsec-dash' : ''}
              style={motion ? { animationDelay: `${i * 0.22}s` } : undefined}
            />
          )
        })}

        {NODES.map((n, i) => (
          <g key={n.t1}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="8"
              fill="#0a0a0a"
              stroke="rgb(63 63 70)"
              strokeWidth="1"
              className={motion ? 'master-offsec-node' : ''}
              style={motion ? { animationDelay: `${i * 0.3}s` } : undefined}
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + 15}
              textAnchor="middle"
              fill="#fafafa"
              style={{ fontSize: 9, fontWeight: 700 }}
            >
              {n.t1}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + 28}
              textAnchor="middle"
              fill="#a1a1aa"
              style={{ fontSize: 7.5, fontWeight: 600 }}
            >
              {n.t2}
            </text>
          </g>
        ))}

        {NODES.map((n, i) => {
          const cx = n.x + n.w / 2
          const bottomY = 200
          return (
            <line
              key={`drop-${i}`}
              x1={cx}
              y1={n.y + n.h}
              x2={260}
              y2={bottomY}
              stroke="rgb(82 82 91)"
              strokeWidth="0.9"
              strokeDasharray="3 5"
              strokeOpacity="0.32"
              className={motion ? 'master-offsec-dash-slow' : ''}
              style={motion ? { animationDelay: `${0.35 + i * 0.15}s` } : undefined}
            />
          )
        })}

        <rect
          x="40"
          y="200"
          width="440"
          height="44"
          rx="9"
          fill="url(#infra-portal-grad)"
          stroke="rgb(232 93 4 / 0.4)"
          strokeWidth="1.1"
        />
        <text
          x="260"
          y="220"
          textAnchor="middle"
          fill="rgb(232 93 4)"
          style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.16em' }}
        >
          OFFSEC MANAGEMENT PORTAL
        </text>
        <text x="260" y="236" textAnchor="middle" fill="#a1a1aa" style={{ fontSize: 8, fontWeight: 600 }}>
          Findings, severity, retest, reporting
        </text>
      </svg>
    </div>
  )
}
