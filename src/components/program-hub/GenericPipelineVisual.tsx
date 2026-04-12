import { useEffect, useId, useMemo, useState } from 'react'
import type { ProgramHubVisualNode } from '../../data/programHubRegistry'

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

type Props = {
  nodes: readonly [ProgramHubVisualNode, ProgramHubVisualNode, ProgramHubVisualNode, ProgramHubVisualNode]
  ariaLabel: string
}

const BOX_W = 92
const BOX_H = 38
const START_X = 52
const STEP_X = 120
const ROW_Y = 88
const PORTAL_TOP = 200

/**
 * Four-stage pipeline into OffSec Management Portal (shared motion CSS).
 */
export function GenericPipelineVisual({ nodes, ariaLabel }: Props) {
  const motion = !useReducedMotion()
  const uid = useId().replace(/:/g, '')
  const gradId = `ph-portal-grad-${uid}`

  const layout = useMemo(
    () =>
      nodes.map((n, i) => ({
        ...n,
        x: START_X + i * STEP_X,
        y: ROW_Y,
        w: BOX_W,
        h: BOX_H,
      })),
    [nodes],
  )

  const centerX = useMemo(() => {
    const first = layout[0].x + layout[0].w / 2
    const last = layout[3].x + layout[3].w / 2
    return (first + last) / 2
  }, [layout])

  return (
    <div
      className="master-offsec-visual-wrap relative mx-auto w-full max-w-[min(100%,520px)]"
      role="img"
      aria-label={ariaLabel}
    >
      <svg
        viewBox="0 -20 520 268"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-[1] block h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="rgb(232 93 4)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(232 93 4)" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {layout.map((n, i) => {
          const cy = n.y + n.h / 2
          const next = layout[i + 1]
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

        {layout.map((n, i) => (
          <g key={`${n.t1}-${i}`}>
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

        {layout.map((n, i) => {
          const cx = n.x + n.w / 2
          return (
            <line
              key={`drop-${i}`}
              x1={cx}
              y1={n.y + n.h}
              x2={centerX}
              y2={PORTAL_TOP}
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
          fill={`url(#${gradId})`}
          stroke="rgb(232 93 4 / 0.4)"
          strokeWidth="1.1"
        />
        <text
          x={centerX}
          y="220"
          textAnchor="middle"
          fill="rgb(232 93 4)"
          style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.16em' }}
        >
          OFFSEC MANAGEMENT PORTAL
        </text>
        <text x={centerX} y="236" textAnchor="middle" fill="#a1a1aa" style={{ fontSize: 8, fontWeight: 600 }}>
          Findings, severity, retest, reporting
        </text>
      </svg>
    </div>
  )
}
