import { createPortal } from 'react-dom'
import { useCallback, useEffect, useRef, useState, type FocusEvent, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { getProductById, productPath, type ProductDocId } from '../../data/productDocuments'
import { OFFSEC_PORTAL } from '../../data/salesPitchSite'
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

/** Match icon ring radius in viewBox ~units (same coordinate system as SVG 0–100). */
const HUB_SPOKE_R = 36
const HUB_SPOKE_TRIM_IN = 7.25
const HUB_SPOKE_TRIM_OUT = 5.5
const HUB_ZIGZAG_AMP = 1.2

function spokeTrimmedEndpoints(index: number, total: number) {
  const theta = -Math.PI / 2 + (index * 2 * Math.PI) / total
  const c = Math.cos(theta)
  const s = Math.sin(theta)
  return {
    x1: 50 + HUB_SPOKE_TRIM_IN * c,
    y1: 50 + HUB_SPOKE_TRIM_IN * s,
    x2: 50 + (HUB_SPOKE_R - HUB_SPOKE_TRIM_OUT) * c,
    y2: 50 + (HUB_SPOKE_R - HUB_SPOKE_TRIM_OUT) * s,
  }
}

/** Slight zigzag polyline between hub and satellite (perpendicular wobble). */
function zigzagSpokeD(x1: number, y1: number, x2: number, y2: number, amp: number) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 1e-6) return `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`
  const ux = dx / len
  const uy = dy / len
  const px = -uy
  const py = ux
  const ts = [0.22, 0.44, 0.56, 0.78]
  const signs = [1, -1, -1, 1]
  const parts: string[] = [`M ${x1.toFixed(2)} ${y1.toFixed(2)}`]
  for (let i = 0; i < ts.length; i++) {
    const t = ts[i]
    const ox = x1 + dx * t + px * amp * signs[i]
    const oy = y1 + dy * t + py * amp * signs[i]
    parts.push(`L ${ox.toFixed(2)} ${oy.toFixed(2)}`)
  }
  parts.push(`L ${x2.toFixed(2)} ${y2.toFixed(2)}`)
  return parts.join(' ')
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

/** Full-line label for hover CTA (matches product subtitles / portal headline). */
function hubHoverDestination(icon: ProductDocId | 'portal'): string {
  if (icon === 'portal') return OFFSEC_PORTAL.headline
  return getProductById(icon)?.subtitle ?? ''
}

function hubKeyToIcon(key: string): ProductDocId | 'portal' | null {
  if (key === HUB_CENTER.label) return HUB_CENTER.icon
  const node = HUB_OUTER.find((n) => n.label === key)
  return node?.icon ?? null
}

export function CapabilitiesHubVisual() {
  const reduceMotion = usePrefersReducedMotion()
  const tipAnchorRef = useRef<HTMLElement | null>(null)
  const [hoverKey, setHoverKey] = useState<string | null>(null)
  const [tipPos, setTipPos] = useState({ top: 0, left: 0 })

  const updateTipPosition = useCallback(() => {
    const el = tipAnchorRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setTipPos({ top: rect.bottom + 6, left: rect.left + rect.width / 2 })
  }, [])

  useEffect(() => {
    if (!hoverKey) return
    updateTipPosition()
    window.addEventListener('scroll', updateTipPosition, true)
    window.addEventListener('resize', updateTipPosition)
    return () => {
      window.removeEventListener('scroll', updateTipPosition, true)
      window.removeEventListener('resize', updateTipPosition)
    }
  }, [hoverKey, updateTipPosition])

  const showTip = (key: string, el: HTMLElement) => {
    tipAnchorRef.current = el
    setHoverKey(key)
    const rect = el.getBoundingClientRect()
    setTipPos({ top: rect.bottom + 6, left: rect.left + rect.width / 2 })
  }

  const hideTip = () => {
    setHoverKey(null)
    tipAnchorRef.current = null
  }

  const hubPointerHandlers = (key: string) => ({
    onMouseEnter: (e: MouseEvent<HTMLElement>) => showTip(key, e.currentTarget),
    onMouseLeave: hideTip,
    onFocus: (e: FocusEvent<HTMLElement>) => showTip(key, e.currentTarget),
    onBlur: hideTip,
  })

  const n = HUB_OUTER.length

  const tipIcon = hoverKey ? hubKeyToIcon(hoverKey) : null
  const tipLine = tipIcon ? hubHoverDestination(tipIcon) : ''

  return (
    <div className="capabilities-hub-visual relative z-0 mx-auto w-full max-w-[min(100%,460px)] select-none overflow-visible">
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
          <pattern
            id="capabilities-hub-chip-grid"
            width="3.2"
            height="3.2"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 3.2 0 L 0 0 0 3.2"
              fill="none"
              stroke="rgb(148 163 184)"
              strokeOpacity="0.07"
              strokeWidth="0.12"
            />
          </pattern>
          <radialGradient id="capabilities-hub-vignette" cx="50%" cy="50%" r="58%">
            <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.055" />
            <stop offset="55%" stopColor="rgb(6 20 14)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="rgb(2 4 3)" stopOpacity="0.35" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#capabilities-hub-chip-grid)" opacity={0.85} />
        <rect width="100" height="100" fill="url(#capabilities-hub-vignette)" />

        {STARFIELD.map((s, i) => (
          <circle key={`star-${i}`} cx={s.cx} cy={s.cy} r={s.r} className="fill-teal-200/20" opacity={s.o * 0.55} />
        ))}

        {/* Glow under spokes so hub disc does not paint over connector lines (all five must read clearly). */}
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

      <div className="pointer-events-none absolute inset-0 z-[10] overflow-visible">
        <Link
          to={HUB_CENTER.to}
          {...hubPointerHandlers(HUB_CENTER.label)}
          className="capabilities-hub-node pointer-events-auto absolute left-1/2 top-1/2 z-[20] -translate-x-1/2 -translate-y-1/2 no-underline"
          aria-label={`${HUB_CENTER.label}: open overview`}
        >
          <span className="relative inline-flex flex-col items-center">
            <span className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border border-zinc-600/90 bg-zinc-950/90 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.5),0_0_24px_rgb(232_93_4/0.2)] backdrop-blur-sm transition-all duration-200 sm:h-[3.85rem] sm:w-[3.85rem]">
              <HubNodeIcon id={HUB_CENTER.icon} />
            </span>
            <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[0.625rem] font-semibold tracking-wide text-zinc-200 drop-shadow-sm sm:mt-2 sm:text-[0.6875rem]">
              {HUB_CENTER.label}
            </span>
          </span>
        </Link>
        {HUB_OUTER.map((node, i) => {
          const { x, y } = polarPct(i, n, HUB_SPOKE_R)
          return (
            <Link
              key={node.label}
              to={node.to}
              {...hubPointerHandlers(node.label)}
              className="capabilities-hub-node pointer-events-auto absolute z-[20] -translate-x-1/2 -translate-y-1/2 no-underline"
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={`${node.label}: open overview`}
            >
              <span className="relative inline-flex flex-col items-center">
                <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-zinc-600/90 bg-zinc-950/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.5)] backdrop-blur-sm transition-all duration-200 sm:h-[3.6rem] sm:w-[3.6rem]">
                  <HubNodeIcon id={node.icon} />
                </span>
                <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[0.625rem] font-semibold tracking-wide text-zinc-200 drop-shadow-sm sm:mt-2 sm:text-[0.6875rem]">
                  {node.label}
                </span>
              </span>
            </Link>
          )
        })}
      </div>

      {/* Spokes: paths run outer→hub so flow animation reads as capabilities feeding the Portal. */}
      <svg
        className="pointer-events-none absolute inset-0 z-[15] h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {HUB_OUTER.map((node, i) => {
          const { x1, y1, x2, y2 } = spokeTrimmedEndpoints(i, n)
          const d = zigzagSpokeD(x2, y2, x1, y1, HUB_ZIGZAG_AMP)
          const pathId = `hub-spoke-zz-${i}`
          return (
            <g key={`spoke-pack-${node.label}`} className="capabilities-hub-spokes">
              <path
                d={d}
                className="stroke-brand/35"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.48}
              />
              {!reduceMotion ? (
                <path
                  d={d}
                  pathLength={1}
                  className="capabilities-hub-spoke-travel stroke-brand"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.82}
                  style={{ animationDelay: `${i * 0.38}s` }}
                />
              ) : (
                <path
                  d={d}
                  className="stroke-brand"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity={0.92}
                  strokeWidth={0.78}
                />
              )}
              <path id={pathId} d={d} fill="none" stroke="none" strokeWidth={0} />
              {!reduceMotion ? (
                <g>
                  <circle r={0.28} fill="rgb(232 93 4)" opacity={0.95}>
                    <animateMotion
                      dur={`${2.35 + i * 0.15}s`}
                      repeatCount="indefinite"
                      rotate="0"
                      calcMode="linear"
                      begin={`${i * 0.28}s`}
                    >
                      <mpath href={`#${pathId}`} xlinkHref={`#${pathId}`} />
                    </animateMotion>
                    <animate
                      attributeName="r"
                      values="0.22;0.62;0.22"
                      dur={`${2.35 + i * 0.15}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.28}s`}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
                      keyTimes="0;0.5;1"
                    />
                  </circle>
                </g>
              ) : null}
            </g>
          )
        })}
      </svg>

      {typeof document !== 'undefined' &&
        hoverKey &&
        tipLine &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[99999] w-max max-w-[min(280px,92vw)] -translate-x-1/2 rounded-md border border-brand/45 bg-zinc-950/98 px-2.5 py-1.5 text-center text-[0.625rem] font-medium leading-snug text-zinc-100 shadow-[0_12px_40px_rgb(0_0_0/0.75)] sm:text-[0.6875rem]"
            style={{ top: tipPos.top, left: tipPos.left }}
            role="tooltip"
          >
            <span className="text-brand">Click here</span>
            <span className="text-zinc-400"> — </span>
            <span>{tipLine}</span>
          </div>,
          document.body,
        )}
    </div>
  )
}
