import { createPortal } from 'react-dom'
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from 'react'
import { Link } from 'react-router-dom'
import { getProductById, productPath, type ProductDocId } from '../../data/productDocuments'
import { OFFSEC_PORTAL } from '../../data/salesPitchSite'
import { SERVICE_TOPICS, serviceTopicNavHref } from '../../data/serviceDocuments'
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

export type CapabilitiesHubVariant = 'services' | 'products'

type HubCenterConfig = { label: string; to: string; tip: string }

function getHubCenter(variant: CapabilitiesHubVariant): HubCenterConfig {
  if (variant === 'services') {
    return {
      label: 'Technieum services',
      to: '/services',
      tip: 'Open the services catalog: offensive programs, briefs, and how each delivery stream fits your estate.',
    }
  }
  return {
    label: 'Portal',
    to: '/#portal-heading',
    tip: OFFSEC_PORTAL.headline,
  }
}

type HubServiceNode = { label: string; to: string; tip: string }
type HubProductNode = { label: string; to: string; icon: ProductDocId }

const HUB_SERVICE_SLUGS = [
  'technieum-infrastructure-network',
  'technieum-application-security',
  'technieum-cloud-security',
  'technieum-ai-security',
  'technieum-threat-simulations',
  'technieum-ics-ot-security',
  'technieum-security-consulting',
  'technieum-wfh-security',
] as const

const HUB_OUTER_SERVICES: HubServiceNode[] = HUB_SERVICE_SLUGS.map((slug) => {
  const t = SERVICE_TOPICS.find((x) => x.slug === slug)
  if (!t) throw new Error(`Missing service topic: ${slug}`)
  return { label: t.title, to: serviceTopicNavHref(t), tip: t.summary }
})

/** Clockwise from top — product capability hub (OffSec portal section). */
const HUB_OUTER_PRODUCTS: HubProductNode[] = [
  /** Diagram-only label; rest of site uses full portal name. */
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

function spokeTrimmedEndpoints(
  index: number,
  total: number,
  spokeR: number,
  trimIn: number,
  trimOut: number,
) {
  const theta = -Math.PI / 2 + (index * 2 * Math.PI) / total
  const c = Math.cos(theta)
  const s = Math.sin(theta)
  return {
    x1: 50 + trimIn * c,
    y1: 50 + trimIn * s,
    x2: 50 + (spokeR - trimOut) * c,
    y2: 50 + (spokeR - trimOut) * s,
  }
}

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

function ServiceLaneGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 2 4 5.2v5.1c0 4.35 2.95 8.45 8 10.7 5.05-2.25 8-6.35 8-10.7V5.2L12 2Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M9.2 12.3 11 14.1l3.9-3.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Center hub for services variant — reads as catalog / program list, not the OffSec portal tile. */
function ServicesHubGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M5 7h14M5 12h14M5 17h9"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HubNodeIcon({ id }: { id: ProductDocId | 'portal' }) {
  const cn =
    'h-[1.65rem] w-[1.65rem] shrink-0 text-brand sm:h-[1.85rem] sm:w-[1.85rem] [filter:drop-shadow(0_0_5px_rgb(232_93_4/0.45))]'
  if (id === 'portal') return <PortalGlyph className={cn} />
  return <CapabilityLogo id={id} className={cn} />
}

function hubTipForKey(variant: CapabilitiesHubVariant, key: string, center: HubCenterConfig): string {
  if (key === center.label) return center.tip
  if (variant === 'services') {
    return HUB_OUTER_SERVICES.find((n) => n.label === key)?.tip ?? ''
  }
  const node = HUB_OUTER_PRODUCTS.find((n) => n.label === key)
  return node ? getProductById(node.icon)?.subtitle ?? '' : ''
}

export function CapabilitiesHubVisual({ variant = 'services' }: { variant?: CapabilitiesHubVariant }) {
  const reduceMotion = usePrefersReducedMotion()
  const uid = useId().replace(/:/g, '')
  const tipAnchorRef = useRef<HTMLElement | null>(null)
  const [hoverKey, setHoverKey] = useState<string | null>(null)
  const [tipPos, setTipPos] = useState({ top: 0, left: 0 })

  const isProducts = variant === 'products'
  const center = getHubCenter(variant)
  const n = isProducts ? HUB_OUTER_PRODUCTS.length : HUB_OUTER_SERVICES.length
  const spokeR = isProducts ? 36 : 37.5
  const trimIn = 7.25
  const trimOut = isProducts ? 5.5 : 5.25
  const zigzagAmp = isProducts ? 1.2 : 1.05
  const travelDelayStep = isProducts ? 0.38 : 0.22
  const motionDelayStep = isProducts ? 0.28 : 0.18
  const motionDurBase = 2.35
  const motionDurStep = isProducts ? 0.15 : 0.12
  const dotR = isProducts ? 0.28 : 0.26
  const dotPulse = isProducts ? '0.22;0.62;0.22' : '0.18;0.52;0.18'

  const gid = `chub-${uid}`
  const filterGlow = `${gid}-glow`
  const patternGrid = `${gid}-chip-grid`
  const gradVignette = `${gid}-vignette`

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

  const tipLine = hoverKey ? hubTipForKey(variant, hoverKey, center) : ''

  const iconCnServices =
    'h-[1.45rem] w-[1.45rem] shrink-0 text-brand sm:h-[1.6rem] sm:w-[1.6rem] [filter:drop-shadow(0_0_5px_rgb(232_93_4/0.45))]'
  const iconCnProducts =
    'h-[1.65rem] w-[1.65rem] shrink-0 text-brand sm:h-[1.85rem] sm:w-[1.85rem] [filter:drop-shadow(0_0_5px_rgb(232_93_4/0.45))]'

  return (
    <div
      className={`capabilities-hub-visual relative z-0 mx-auto w-full select-none overflow-visible ${isProducts ? 'max-w-[min(100%,460px)]' : 'max-w-[min(100%,520px)]'}`}
    >
        <div className="pointer-events-none aspect-square w-full" aria-hidden />
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <filter id={filterGlow} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="0.9" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id={patternGrid} width="3.2" height="3.2" patternUnits="userSpaceOnUse">
              <path
                d="M 3.2 0 L 0 0 0 3.2"
                fill="none"
                stroke="rgb(148 163 184)"
                strokeOpacity="0.07"
                strokeWidth="0.12"
              />
            </pattern>
            <radialGradient id={gradVignette} cx="50%" cy="50%" r="58%">
              <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.055" />
              <stop offset="55%" stopColor="rgb(6 20 14)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="rgb(2 4 3)" stopOpacity="0.35" />
            </radialGradient>
          </defs>

          <rect width="100" height="100" fill={`url(#${patternGrid})`} opacity={0.85} />
          <rect width="100" height="100" fill={`url(#${gradVignette})`} />

          {STARFIELD.map((s, i) => (
            <circle key={`star-${i}`} cx={s.cx} cy={s.cy} r={s.r} className="fill-teal-200/20" opacity={s.o * 0.55} />
          ))}

          <g filter={`url(#${filterGlow})`}>
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
            to={center.to}
            {...hubPointerHandlers(center.label)}
            className="capabilities-hub-node pointer-events-auto absolute left-1/2 top-1/2 z-[20] -translate-x-1/2 -translate-y-1/2 no-underline"
            aria-label={
              isProducts ? `${center.label}: open overview` : `${center.label}: open services page`
            }
          >
            <span className="relative inline-flex flex-col items-center">
              <span
                className={`flex items-center justify-center rounded-full border border-zinc-600/90 bg-zinc-950/90 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.5),0_0_24px_rgb(232_93_4/0.2)] backdrop-blur-sm transition-all duration-200 ${isProducts ? 'h-[3.5rem] w-[3.5rem] sm:h-[3.85rem] sm:w-[3.85rem]' : 'h-[3.35rem] w-[3.35rem] sm:h-[3.7rem] sm:w-[3.7rem]'}`}
              >
                {isProducts ? <HubNodeIcon id="portal" /> : <ServicesHubGlyph className={iconCnServices} />}
              </span>
              <span
                className={`absolute left-1/2 top-full z-[21] -translate-x-1/2 text-center font-semibold tracking-wide text-zinc-200 drop-shadow-sm ${
                  isProducts
                    ? 'mt-2.5 whitespace-nowrap text-[0.625rem] sm:mt-3.5 sm:text-[0.6875rem]'
                    : 'mt-1.5 max-w-[6.5rem] text-[0.5rem] leading-[1.2] sm:mt-2 sm:max-w-[7.25rem] sm:text-[0.5625rem]'
                }`}
              >
                {center.label}
              </span>
            </span>
          </Link>

          {isProducts
            ? HUB_OUTER_PRODUCTS.map((node, i) => {
                const { x, y } = polarPct(i, n, spokeR)
                const isToip = node.icon === 'toip'
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
                        <CapabilityLogo id={node.icon} className={iconCnProducts} />
                      </span>
                      {isToip ? (
                        <span
                          className={`chub-toip-label-rise absolute whitespace-nowrap text-[0.6875rem] font-semibold tracking-wide text-zinc-200 drop-shadow-sm sm:text-[0.6875rem] ${reduceMotion ? 'chub-toip-label-rise--static' : ''}`}
                        >
                          {node.label}
                        </span>
                      ) : (
                        <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[0.625rem] font-semibold tracking-wide text-zinc-200 drop-shadow-sm sm:mt-2 sm:text-[0.6875rem]">
                          {node.label}
                        </span>
                      )}
                    </span>
                  </Link>
                )
              })
            : HUB_OUTER_SERVICES.map((node, i) => {
                const { x, y } = polarPct(i, n, spokeR)
                return (
                  <Link
                    key={node.label}
                    to={node.to}
                    {...hubPointerHandlers(node.label)}
                    className="capabilities-hub-node pointer-events-auto absolute z-[20] -translate-x-1/2 -translate-y-1/2 no-underline"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    aria-label={`${node.label}: open service overview`}
                  >
                    <span className="relative inline-flex flex-col items-center">
                      <span className="flex h-[2.85rem] w-[2.85rem] items-center justify-center rounded-full border border-zinc-600/90 bg-zinc-950/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.5)] backdrop-blur-sm transition-all duration-200 sm:h-[3.15rem] sm:w-[3.15rem]">
                        <ServiceLaneGlyph className={iconCnServices} />
                      </span>
                      <span className="absolute left-1/2 top-full z-[21] mt-1 max-w-[5.25rem] -translate-x-1/2 text-center text-[0.5rem] font-semibold leading-[1.15] tracking-wide text-zinc-200 drop-shadow-sm sm:mt-1.5 sm:max-w-[6rem] sm:text-[0.5625rem]">
                        {node.label}
                      </span>
                    </span>
                  </Link>
                )
              })}
        </div>

        <svg
          className="pointer-events-none absolute inset-0 z-[15] h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {(isProducts ? HUB_OUTER_PRODUCTS : HUB_OUTER_SERVICES).map((node, i) => {
            const { x1, y1, x2, y2 } = spokeTrimmedEndpoints(i, n, spokeR, trimIn, trimOut)
            /* Services: flow center → lanes. Products: flow outer capabilities → Portal. */
            const d = isProducts
              ? zigzagSpokeD(x2, y2, x1, y1, zigzagAmp)
              : zigzagSpokeD(x1, y1, x2, y2, zigzagAmp)
            const pathId = `${gid}-spoke-${i}`
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
                    style={{ animationDelay: `${i * travelDelayStep}s` }}
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
                    <circle r={dotR} fill="rgb(232 93 4)" opacity={0.95}>
                      <animateMotion
                        dur={`${motionDurBase + i * motionDurStep}s`}
                        repeatCount="indefinite"
                        rotate="0"
                        calcMode="linear"
                        begin={`${i * motionDelayStep}s`}
                      >
                        <mpath href={`#${pathId}`} xlinkHref={`#${pathId}`} />
                      </animateMotion>
                      <animate
                        attributeName="r"
                        values={dotPulse}
                        dur={`${motionDurBase + i * motionDurStep}s`}
                        repeatCount="indefinite"
                        begin={`${i * motionDelayStep}s`}
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
              className="pointer-events-none fixed z-[99999] w-max max-w-[min(300px,92vw)] -translate-x-1/2 rounded-md border border-brand/45 bg-zinc-950/98 px-2.5 py-1.5 text-center text-[0.625rem] font-medium leading-snug text-zinc-100 shadow-[0_12px_40px_rgb(0_0_0/0.75)] sm:text-[0.6875rem]"
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
