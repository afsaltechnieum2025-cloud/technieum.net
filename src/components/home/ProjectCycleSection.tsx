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
}

/** Circular eight-step diagram (sales pitch style): outer ring, numbered nodes, center hub. */
function ProjectCycleDiagram({ activeIndex, motion }: DiagramProps) {
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

  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,420px)] shrink-0 p-0"
      aria-hidden={false}
    >
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
        {nodes.map((node) => {
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
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={r + (node.active ? 6 : 0)}
                fill="var(--color-brand)"
                fillOpacity={node.active ? 0.12 : 0}
                className="transition-all duration-500"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={fill}
                stroke="var(--color-brand)"
                strokeWidth={strokeW}
                strokeOpacity={node.active ? 1 : 0.75}
                className="transition-all duration-500"
              />
              <text
                x={node.x}
                y={node.y}
                dy="0.35em"
                textAnchor="middle"
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
    <section className="section-zz-a px-6 py-10 md:py-12" aria-labelledby="cycle-heading">
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
            <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-brand md:text-[11px]">
              {PROJECT_CYCLE.diagramEyebrow}
            </p>
            <ProjectCycleDiagram activeIndex={activeIndex} motion={motion} />
            <p className="mx-auto mt-4 max-w-sm text-center text-[11px] leading-relaxed text-muted md:max-w-xs md:text-xs md:leading-relaxed">
              {PROJECT_CYCLE.diagramCaption}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center lg:mx-0 lg:max-w-none lg:justify-self-center">
            <header className="mb-6 w-full text-center lg:mb-8">
              <h2
                id="cycle-heading"
                className="mb-1.5 text-lg font-medium tracking-tight text-heading md:text-xl"
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
                        className={`row-span-2 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold tabular-nums md:h-6 md:w-6 md:text-[10px] ${
                          active
                            ? 'bg-brand text-white'
                            : 'bg-brand/15 text-brand group-hover:bg-brand/25'
                        }`}
                        aria-hidden
                      >
                        {ph.step}
                      </span>
                      <h3 className="min-w-0 text-left text-[13px] font-semibold leading-snug text-heading md:text-sm">
                        {ph.title}
                      </h3>
                      <p className="min-w-0 text-left text-[10px] leading-relaxed text-muted md:text-[11px] md:leading-snug">
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
