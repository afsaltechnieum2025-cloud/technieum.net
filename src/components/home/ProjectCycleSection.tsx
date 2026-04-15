import { useCallback, useEffect, useState } from 'react'
import { PROJECT_CYCLE } from '../../data/salesPitchSite'

const STEP_COUNT = 8
const AUTO_MS = 2800

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

function nodePosition(index: number, cx: number, cy: number, r: number) {
  const deg = -90 + index * (360 / STEP_COUNT)
  const rad = (deg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

type DiagramProps = {
  activeIndex: number
  motion: boolean
  /** When a numbered node is hovered, align list + highlight with that step. */
  onNodeHoverEnter?: (index: number) => void
}

/** Circular eight-step diagram (sales pitch style): outer ring, numbered nodes, center hub. */
function ProjectCycleDiagram({ activeIndex, motion, onNodeHoverEnter }: DiagramProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const vb = 400
  const cx = vb / 2
  const cy = vb / 2
  const ringR = 158
  const nodeR = 138
  const hubR = 68

  const nodes = Array.from({ length: STEP_COUNT }, (_, i) => {
    const { x, y } = nodePosition(i, cx, cy, nodeR)
    return { x, y, n: i + 1, active: motion && i === activeIndex }
  })

  const connectorD =
    nodes.length > 0
      ? `M ${nodes[0].x.toFixed(2)} ${nodes[0].y.toFixed(2)}${nodes
          .slice(1)
          .map((node) => ` L ${node.x.toFixed(2)} ${node.y.toFixed(2)}`)
          .join('')} Z`
      : ''

  const hoverTitle =
    hoveredIndex !== null ? PROJECT_CYCLE.phases[hoveredIndex]?.title : null

  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,420px)] shrink-0 p-0"
      aria-hidden={false}
    >
      <p
        className="pointer-events-none mb-2 min-h-[2.75rem] px-2 text-center text-[0.8125rem] font-semibold leading-snug text-heading transition-opacity duration-200 md:min-h-[3rem] md:text-sm"
        style={{ opacity: hoverTitle ? 1 : 0 }}
        aria-live="polite"
      >
        {hoverTitle ?? '\u00a0'}
      </p>
      <svg
        viewBox={`0 0 ${vb} ${vb}`}
        className="aspect-square w-full overflow-visible"
        role="img"
        aria-label={
          motion
            ? `Project cycle diagram with eight steps; step ${activeIndex + 1} of ${STEP_COUNT} highlighted.`
            : 'Project cycle diagram with eight numbered steps around a central hub.'
        }
      >
        {/* Outer ring */}
        <circle
          cx={cx}
          cy={cy}
          r={ringR}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.25"
          strokeOpacity="0.55"
          className={motion ? 'project-cycle-outer-ring' : ''}
        />

        {/* Octagon through step centers — visually links numbered nodes */}
        <path
          d={connectorD}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.1"
          strokeOpacity="0.62"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center hub */}
        <circle
          cx={cx}
          cy={cy}
          r={hubR}
          fill="color-mix(in oklab, var(--color-panel) 88%, black)"
        />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          className="fill-[var(--color-heading)]"
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em' }}
        >
          PROJECT
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-[var(--color-heading)]"
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em' }}
        >
          CYCLE
        </text>

        {/* Step nodes */}
        {nodes.map((node, i) => {
          const r = node.active ? 22 : 17
          const fill = node.active ? 'var(--color-brand)' : 'color-mix(in oklab, var(--color-brand) 35%, transparent)'
          const strokeW = node.active ? 2.5 : 1.5
          return (
            <g
              key={node.n}
              className={
                node.active && motion
                  ? 'project-cycle-node-active transition-all duration-500'
                  : 'transition-all duration-500'
              }
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => {
                setHoveredIndex(i)
                onNodeHoverEnter?.(i)
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Large hit target so digits don’t block hover; keyboard shows same title as hover */}
              <circle
                cx={node.x}
                cy={node.y}
                r={32}
                fill="transparent"
                className="outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/70"
                tabIndex={0}
                aria-label={`Step ${node.n}: ${PROJECT_CYCLE.phases[i]?.title ?? ''}`}
                onFocus={() => {
                  setHoveredIndex(i)
                  onNodeHoverEnter?.(i)
                }}
                onBlur={() => setHoveredIndex(null)}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={r + (node.active ? 6 : 0)}
                fill="var(--color-brand)"
                fillOpacity={node.active ? 0.12 : 0}
                className="pointer-events-none transition-all duration-500"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={fill}
                stroke="var(--color-brand)"
                strokeWidth={strokeW}
                strokeOpacity={node.active ? 1 : 0.75}
                className="pointer-events-none transition-all duration-500"
              />
              <text
                x={node.x}
                y={node.y}
                dy="0.35em"
                textAnchor="middle"
                pointerEvents="none"
                style={{
                  fontSize: node.active ? 14 : 12,
                  fontWeight: 800,
                  fill: node.active ? '#fff' : 'var(--color-heading)',
                }}
                className="tabular-nums transition-all duration-500"
              >
                {node.n}
              </text>
            </g>
          )
        })}
      </svg>
      {motion ? (
        <p className="sr-only" aria-live="polite">
          Highlighted step {activeIndex + 1}: {PROJECT_CYCLE.phases[activeIndex]?.title}
        </p>
      ) : null}
    </div>
  )
}

export function ProjectCycleSection() {
  const reduceMotion = useReducedMotion()
  const motion = !reduceMotion
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % STEP_COUNT)
  }, [])

  useEffect(() => {
    if (!motion || paused) return
    const id = window.setInterval(advance, AUTO_MS)
    return () => window.clearInterval(id)
  }, [motion, paused, advance])

  return (
    <section className="section-zz-a section-zz-wash-br py-10 md:py-12" aria-labelledby="cycle-heading">
      <div className="container">
        <div
          className="grid grid-cols-1 items-center justify-items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex w-full max-w-[420px] flex-col items-center justify-center justify-self-center lg:max-w-[440px] lg:sticky lg:top-28"
            role="region"
            aria-label="Project cycle animation"
          >
            <p className="mb-3 text-center text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brand md:text-[0.6875rem]">
              {PROJECT_CYCLE.diagramEyebrow}
            </p>
            <ProjectCycleDiagram
              activeIndex={activeIndex}
              motion={motion}
              onNodeHoverEnter={setActiveIndex}
            />
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center lg:mx-0 lg:max-w-none lg:justify-self-center">
            <header className="mb-6 w-full text-center lg:mb-8">
              <h2
                id="cycle-heading"
                className="mb-1.5 text-base font-medium tracking-tight text-heading md:text-lg"
              >
                {PROJECT_CYCLE.title}
              </h2>
              <p className="mb-2 text-xs font-semibold text-brand md:text-sm">{PROJECT_CYCLE.subtitle}</p>
              <p className="m-0 text-xs leading-relaxed text-muted md:text-sm">{PROJECT_CYCLE.intro}</p>
            </header>

            <ul className="m-0 grid w-full max-w-xl list-none gap-2.5 p-0 sm:max-w-2xl sm:grid-cols-2 lg:max-w-none">
              {PROJECT_CYCLE.phases.map((ph, i) => {
                const active = i === activeIndex && motion
                return (
                  <li
                    key={ph.step}
                    className={`group rounded-lg border border-transparent bg-panel/15 px-3 py-2.5 transition-all duration-300 md:px-3.5 md:py-3 ${
                      active
                        ? 'border-brand/40 bg-brand/[0.06] shadow-[0_12px_36px_-18px_color-mix(in_oklab,var(--color-brand)_40%,transparent)]'
                        : 'hover:border-border/80 hover:bg-panel/30'
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                  >
                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2.5 gap-y-0.5">
                      <span
                        className={`row-span-2 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[0.5625rem] font-bold tabular-nums md:h-6 md:w-6 md:text-[0.625rem] ${
                          active
                            ? 'bg-brand text-white'
                            : 'bg-brand/15 text-brand group-hover:bg-brand/25'
                        }`}
                        aria-hidden
                      >
                        {ph.step}
                      </span>
                      <h3 className="min-w-0 text-left text-[0.8125rem] font-semibold leading-snug text-heading md:text-sm">
                        {ph.title}
                      </h3>
                      <p className="min-w-0 text-left text-[0.625rem] leading-relaxed text-muted md:text-[0.6875rem] md:leading-snug">
                        {ph.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
