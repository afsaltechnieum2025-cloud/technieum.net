import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productPath, type ProductDocId } from '../../data/productDocuments'
import { CapabilityLogo } from './CapabilityLogo'

function usePrefersReducedMotion() {
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

type HubNode = { label: string; to: string; icon: ProductDocId | 'portal' }

const HUB_CENTER: HubNode = { label: 'Portal', to: '/#portal-heading', icon: 'portal' }

/** Clockwise from top; Portal sits in the center hub. */
const HUB_OUTER: HubNode[] = [
  { label: 'TOIP', to: productPath('toip'), icon: 'toip' },
  { label: 'ASM', to: productPath('asm'), icon: 'asm' },
  { label: 'LLM', to: productPath('llm'), icon: 'llm' },
  { label: 'SAST', to: productPath('sast'), icon: 'sast' },
  { label: 'AD', to: productPath('ad'), icon: 'ad' },
]

function polarPct(index: number, total: number, radiusPct: number) {
  const theta = -Math.PI / 2 + (index * 2 * Math.PI) / total
  return {
    x: 50 + radiusPct * Math.cos(theta),
    y: 50 + radiusPct * Math.sin(theta),
  }
}

/** Deterministic star field inside viewBox 0–100 */
const STARFIELD = Array.from({ length: 28 }, (_, i) => {
  const a = i * 17.3
  return {
    cx: 6 + ((a * 7) % 88),
    cy: 5 + ((a * 11) % 90),
    r: 0.12 + (i % 4) * 0.07,
    o: 0.08 + (i % 6) * 0.035,
  }
})

function PortalGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="10" y="10" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="23" y="10" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="23" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="23" y="23" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function HubNodeIcon({ id }: { id: ProductDocId | 'portal' }) {
  const cn = 'h-[1.65rem] w-[1.65rem] shrink-0 text-brand sm:h-[1.85rem] sm:w-[1.85rem] [filter:drop-shadow(0_0_5px_rgb(232_93_4/0.45))]'
  if (id === 'portal') return <PortalGlyph className={cn} />
  return <CapabilityLogo id={id} className={cn} />
}

export function CapabilitiesHubVisual() {
  const reduceMotion = usePrefersReducedMotion()
  const r = 36
  const n = HUB_OUTER.length
  const outer = HUB_OUTER.map((_, i) => polarPct(i, n, r))
  const ringPts = outer.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ')

  const ringEdges = outer.map((p, i) => {
    const q = outer[(i + 1) % outer.length]
    return { d: `M ${p.x.toFixed(2)} ${p.y.toFixed(2)} L ${q.x.toFixed(2)} ${q.y.toFixed(2)}`, i }
  })

  return (
    <div className="capabilities-hub-visual relative mx-auto w-full max-w-[min(100%,460px)] select-none">
      {/* In-flow square establishes height; absolute layers do not contribute to intrinsic size. */}
      <div className="pointer-events-none aspect-square w-full" aria-hidden />
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <filter id="capabilities-hub-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="0.9" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="capabilities-hub-vignette" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.06" />
            <stop offset="70%" stopColor="rgb(0 0 0)" stopOpacity="0" />
            <stop offset="100%" stopColor="rgb(0 0 0)" stopOpacity="0.25" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#capabilities-hub-vignette)" />

        {STARFIELD.map((s, i) => (
          <circle key={`star-${i}`} cx={s.cx} cy={s.cy} r={s.r} className="fill-zinc-500" opacity={s.o} />
        ))}

        <circle
          cx={50}
          cy={50}
          r={41}
          className="stroke-border/25 [vector-effect:non-scaling-stroke]"
          strokeWidth={0.28}
          fill="none"
        />

        <polygon
          points={ringPts}
          className="stroke-border/50 [vector-effect:non-scaling-stroke]"
          strokeWidth={0.38}
          fill="none"
        />

        {outer.map((p, i) => (
          <line
            key={`spoke-line-${HUB_OUTER[i].label}`}
            x1={50}
            y1={50}
            x2={p.x}
            y2={p.y}
            className="stroke-border/45 [vector-effect:non-scaling-stroke]"
            strokeWidth={0.32}
          />
        ))}

        {!reduceMotion &&
          outer.map((p, i) => {
            const id = `hub-spoke-path-${i}`
            return (
              <g key={`spoke-anim-${i}`}>
                <path id={id} d={`M 50 50 L ${p.x} ${p.y}`} fill="none" />
                <circle r={0.55} fill="rgb(232 93 4)" opacity={0.85}>
                  <animateMotion
                    dur={`${2.8 + i * 0.2}s`}
                    repeatCount="indefinite"
                    rotate="0"
                    calcMode="linear"
                  >
                    <mpath href={`#${id}`} xlinkHref={`#${id}`} />
                  </animateMotion>
                </circle>
                <circle r={0.4} fill="rgb(161 161 170)" opacity={0.55}>
                  <animateMotion
                    dur={`${3.6 + i * 0.25}s`}
                    repeatCount="indefinite"
                    rotate="0"
                    begin={`${i * 0.4}s`}
                    calcMode="linear"
                  >
                    <mpath href={`#${id}`} xlinkHref={`#${id}`} />
                  </animateMotion>
                </circle>
              </g>
            )
          })}

        {!reduceMotion &&
          ringEdges.map(({ d, i }) => {
            const id = `hub-ring-path-${i}`
            return (
              <g key={`ring-anim-${i}`}>
                <path id={id} d={d} fill="none" />
                <circle r={0.42} fill="rgb(232 93 4 / 0.75)">
                  <animateMotion dur={`${4.2 + i * 0.3}s`} repeatCount="indefinite" rotate="0" calcMode="linear">
                    <mpath href={`#${id}`} xlinkHref={`#${id}`} />
                  </animateMotion>
                </circle>
              </g>
            )
          })}

        {/* Soft glow behind center Portal (interactive node is in overlay). */}
        <g filter="url(#capabilities-hub-glow)">
          <circle
            cx={50}
            cy={50}
            r={12.5}
            className="stroke-brand/55 [vector-effect:non-scaling-stroke]"
            strokeWidth={0.45}
            strokeDasharray="1.4 1.15"
            fill="none"
          />
          <circle
            cx={50}
            cy={50}
            r={9.2}
            className="fill-brand/12 stroke-brand/35 [vector-effect:non-scaling-stroke]"
            strokeWidth={0.35}
          />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-[8%] z-[2] sm:inset-[9%]">
        <Link
          to={HUB_CENTER.to}
          className="capabilities-hub-node pointer-events-auto absolute left-1/2 top-[calc(50%-1.75rem)] z-[3] flex -translate-x-1/2 flex-col items-center gap-1.5 no-underline sm:top-[calc(50%-1.925rem)]"
          aria-label={`${HUB_CENTER.label}: open overview`}
        >
          <span className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border border-zinc-600/90 bg-zinc-950/90 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.5),0_0_24px_rgb(232_93_4/0.2)] backdrop-blur-sm transition-all duration-200 sm:h-[3.85rem] sm:w-[3.85rem]">
            <HubNodeIcon id={HUB_CENTER.icon} />
          </span>
          <span className="text-[10px] font-semibold tracking-wide text-zinc-200 drop-shadow-sm sm:text-[11px]">
            {HUB_CENTER.label}
          </span>
        </Link>
        {HUB_OUTER.map((node, i) => {
          const { x, y } = polarPct(i, n, r)
          return (
            <Link
              key={node.label}
              to={node.to}
              className="capabilities-hub-node pointer-events-auto absolute flex -translate-x-1/2 -translate-y-[58%] flex-col items-center gap-1.5 no-underline sm:-translate-y-[56%]"
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={`${node.label}: open overview`}
            >
              <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-zinc-600/90 bg-zinc-950/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.5)] backdrop-blur-sm transition-all duration-200 sm:h-[3.6rem] sm:w-[3.6rem]">
                <HubNodeIcon id={node.icon} />
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-zinc-200 drop-shadow-sm sm:text-[11px]">
                {node.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
