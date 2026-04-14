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

const VIEW_W = 560
const PORTAL_TOP = 178
const PORTAL_Y = 198

/**
 * Services catalog visual: four domain tiles, dashed orange spine, converge into OffSec portal (reference layout, Technieum theme).
 */
export function ServiceHubConvergeVisual({ nodes, ariaLabel }: Props) {
  const motion = !useReducedMotion()
  const uid = useId().replace(/:/g, '')
  const gradPortal = `shv-portal-${uid}`
  const gradGlow = `shv-glow-${uid}`

  const layout = useMemo(() => {
    const count = 4
    const boxW = 102
    const boxH = 44
    const gap = 18
    const totalW = count * boxW + (count - 1) * gap
    const startX = (VIEW_W - totalW) / 2
    const y = 76
    return nodes.map((n, i) => ({
      ...n,
      x: startX + i * (boxW + gap),
      y,
      w: boxW,
      h: boxH,
    }))
  }, [nodes])

  const centerX = VIEW_W / 2
  const mergeY = PORTAL_TOP - 6

  return (
    <div
      className="service-hub-converge-wrap relative mx-auto w-full max-w-[min(100%,540px)] overflow-hidden rounded-2xl border border-zinc-700/50 bg-[linear-gradient(180deg,rgb(12_12_12)_0%,rgb(6_6_6)_55%,rgb(4_3_2)_100%)] shadow-[0_24px_56px_-28px_rgba(0,0,0,0.85),inset_0_1px_0_rgb(255_255_255/0.04)]"
      role="img"
      aria-label={ariaLabel}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(ellipse_90%_80%_at_50%_100%,rgb(232_93_4/0.14),transparent_65%)] ${motion ? 'service-hub-converge-ambient' : 'opacity-80'}`}
        aria-hidden
      />

      <svg
        viewBox={`0 0 ${VIEW_W} 288`}
        preserveAspectRatio="xMidYMid meet"
        className="relative z-[1] block h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradPortal} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.12" />
            <stop offset="50%" stopColor="rgb(232 93 4)" stopOpacity="0.28">
              {motion ? (
                <animate
                  attributeName="stop-opacity"
                  values="0.2;0.36;0.2"
                  dur="6.5s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
              ) : null}
            </stop>
            <stop offset="100%" stopColor="rgb(232 93 4)" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id={gradGlow} cx="50%" cy="100%" r="70%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(232 93 4)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse
          cx={centerX}
          cy={PORTAL_Y + 62}
          rx="210"
          ry="40"
          fill={`url(#${gradGlow})`}
          opacity="0.4"
          className={motion ? 'service-hub-ellipse-breathe' : undefined}
        />

        <g
          className={motion ? 'service-hub-lines-enter' : undefined}
          style={motion ? { animationDelay: '0.22s' } : undefined}
        >
          {layout.map((n, i) => {
            const cx = n.x + n.w / 2
            return (
              <line
                key={`drop-${i}`}
                x1={cx}
                y1={n.y + n.h + 2}
                x2={centerX}
                y2={mergeY}
                stroke="rgb(232 93 4)"
                strokeWidth="1"
                strokeDasharray="4 7"
                strokeOpacity={motion ? 0.24 : 0.14}
              />
            )
          })}
          {layout.map((n, i) => {
            const cy = n.y + n.h / 2
            const next = layout[i + 1]
            if (!next) return null
            const cy2 = next.y + next.h / 2
            return (
              <line
                key={`spine-${i}`}
                x1={n.x + n.w + 1}
                y1={cy}
                x2={next.x - 1}
                y2={cy2}
                stroke="rgb(232 93 4)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 10"
                strokeOpacity={motion ? 0.5 : 0.35}
              />
            )
          })}
        </g>

        {layout.map((n, i) => (
          <g
            key={`${n.t1}-${i}`}
            className={motion ? 'service-hub-tile-enter' : undefined}
            style={motion ? { animationDelay: `${i * 0.08}s` } : undefined}
          >
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="10"
              fill="rgb(14 14 14)"
              stroke="rgb(228 228 231 / 0.45)"
              strokeWidth="1.15"
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + 18}
              textAnchor="middle"
              fill="#fafafa"
              style={{ fontSize: 10, fontWeight: 800 }}
            >
              {n.t1}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + 34}
              textAnchor="middle"
              fill="#a1a1aa"
              style={{ fontSize: 8.5, fontWeight: 600 }}
            >
              {n.t2}
            </text>
          </g>
        ))}

        <g
          className={motion ? 'service-hub-portal-enter' : undefined}
          style={motion ? { animationDelay: '0.48s' } : undefined}
        >
          <rect
            x="48"
            y={PORTAL_Y}
            width="464"
            height="56"
            rx="12"
            fill={`url(#${gradPortal})`}
            stroke="rgb(232 93 4 / 0.65)"
            strokeWidth="1.35"
            className={motion ? 'service-hub-portal-edge-breathe' : undefined}
          />

          <text
            x={centerX}
            y={PORTAL_Y + 24}
            textAnchor="middle"
            fill="rgb(251 146 60)"
            style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '0.18em' }}
          >
            OFFSEC MANAGEMENT PORTAL
          </text>
          <text x={centerX} y={PORTAL_Y + 42} textAnchor="middle" fill="#a1a1aa" style={{ fontSize: 8.5, fontWeight: 600 }}>
            Findings, severity, retest, reporting
          </text>
        </g>
      </svg>
    </div>
  )
}
