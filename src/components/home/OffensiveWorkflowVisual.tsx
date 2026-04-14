import { useEffect, useState, type ReactNode } from 'react'

type DashVariant = 'brand' | 'muted' | 'cyan' | 'success'

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

function Arrow({ variant, motion }: { variant: DashVariant; motion: boolean }) {
  const animated = {
    brand: 'offensive-workflow-dash',
    muted: 'offensive-workflow-dash--muted',
    cyan: 'offensive-workflow-dash--cyan',
    success: 'offensive-workflow-dash--success',
  }[variant]
  return (
    <div className="flex h-9 w-3 shrink-0 flex-col justify-center md:w-4" aria-hidden>
      <div
        className={
          motion
            ? animated
            : 'h-0.5 w-full rounded-full bg-[color-mix(in_oklab,var(--color-border-strong)_70%,transparent)]'
        }
      />
    </div>
  )
}

type NodeTone = 'default' | 'brand' | 'cyan' | 'success'

const nodeHoverByTone: Record<NodeTone, string> = {
  default:
    'hover:border-border-strong hover:bg-panel/55 hover:shadow-[0_0_18px_-8px_rgb(255_255_255/0.08)]',
  brand:
    'hover:border-brand/90 hover:shadow-[0_0_22px_-6px_rgb(232_93_4/0.4)] hover:bg-[color-mix(in_oklab,var(--color-brand)_18%,transparent)]',
  cyan:
    'hover:border-cyan-400/65 hover:shadow-[0_0_24px_-6px_rgb(34_211_238/0.38)] hover:bg-cyan-500/[0.1]',
  success:
    'hover:border-emerald-400/55 hover:shadow-[0_0_22px_-6px_rgb(74_222_128/0.28)] hover:bg-emerald-500/[0.1]',
}

function Node({
  title,
  sub,
  tone,
  pulse,
  motion,
}: {
  title: string
  sub?: string
  tone: NodeTone
  pulse?: boolean
  motion: boolean
}) {
  const tones: Record<NodeTone, string> = {
    default: 'border-border-strong/70 bg-panel/40',
    brand: 'border-brand/75 bg-[color-mix(in_oklab,var(--color-brand)_12%,transparent)]',
    cyan: 'border-cyan-400/45 bg-cyan-500/[0.06]',
    success: 'border-emerald-500/40 bg-emerald-500/[0.06]',
  }
  const pulseCls =
    motion && pulse
      ? tone === 'cyan'
        ? 'offensive-workflow-node-pulse-cyan'
        : 'offensive-workflow-node-pulse'
      : ''
  return (
    <div
      className={`min-w-0 flex-1 rounded-md border px-1.5 py-1.5 text-center transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out will-change-transform hover:z-[1] hover:scale-[1.04] motion-reduce:hover:scale-100 ${tones[tone]} ${nodeHoverByTone[tone]} ${pulseCls}`}
    >
      <p className="text-[0.625rem] font-semibold leading-[1.2] text-heading">{title}</p>
      {sub ? (
        <p
          className={`mt-0.5 text-[0.5625rem] leading-[1.25] ${tone === 'success' ? 'text-emerald-200/75' : 'text-muted'}`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  )
}

function Lane({
  label,
  laneNum,
  children,
}: {
  label: string
  laneNum: string
  children: ReactNode
}) {
  return (
    <div className="w-full min-w-0">
      <p className="mb-1 flex items-baseline gap-1.5 text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-brand md:text-[0.625rem]">
        <span className="font-mono text-[0.5625rem] font-bold tabular-nums text-brand/55 md:text-[0.625rem]">
          {laneNum}
        </span>
        <span>{label}</span>
      </p>
      <div className="flex items-stretch">{children}</div>
    </div>
  )
}

function LaneRow({
  index,
  motion,
  focusedLane,
  onFocus,
  children,
}: {
  index: number
  motion: boolean
  focusedLane: number | null
  onFocus: (i: number) => void
  children: ReactNode
}) {
  const dimmed = focusedLane !== null && focusedLane !== index
  return (
    <div
      className={`offensive-workflow-lane-row transition-opacity duration-300 ease-out ${dimmed ? 'opacity-[0.38]' : 'opacity-100'}`}
      onPointerEnter={() => onFocus(index)}
    >
      <div
        className={motion ? 'offensive-workflow-lane-enter' : undefined}
        style={motion ? { animationDelay: `${index * 85}ms` } : undefined}
      >
        {children}
      </div>
    </div>
  )
}

/** Animated workflow lanes (GIF-like motion, theme colors). */
export function OffensiveWorkflowVisual() {
  const motion = !useReducedMotion()
  const [focusedLane, setFocusedLane] = useState<number | null>(null)

  return (
    <div className="offensive-workflow-stage rounded-2xl p-px shadow-[0_0_48px_-16px_rgb(232_93_4/0.35)] md:shadow-[0_0_64px_-18px_rgb(232_93_4/0.38)]">
      <div
        className={`offensive-workflow-stage__inner relative overflow-hidden rounded-[calc(1rem-1px)] border border-border-strong/50 bg-[color-mix(in_oklab,var(--color-panel)_88%,black)] p-3 shadow-inner md:p-4 ${motion ? 'offensive-workflow-stage__inner--ambient' : ''}`}
        role="img"
        aria-label="Diagram: five offensive workstreams from intel and scanning through ToIP and tooling into validated findings, above the OffSec Management Portal."
        onPointerLeave={() => setFocusedLane(null)}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] offensive-workflow-stage__grid"
          aria-hidden
        />

        <div className="relative space-y-2.5 md:space-y-3">
          <LaneRow
            index={0}
            motion={motion}
            focusedLane={focusedLane}
            onFocus={setFocusedLane}
          >
            <Lane label="Business logic" laneNum="01">
                <Node title="Source code" sub="SAST intel" tone="default" motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="Logic extraction" sub="Auth / txn" tone="default" motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="ToIP" sub="15k+ reports, RAG search" tone="brand" pulse motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="Playbooks" sub="Target-specific" tone="default" motion={motion} />
                <Arrow variant="success" motion={motion} />
                <Node title="Validated" sub="Manual + auto" tone="success" motion={motion} />
              </Lane>
          </LaneRow>

          <LaneRow
            index={1}
            motion={motion}
            focusedLane={focusedLane}
            onFocus={setFocusedLane}
          >
            <Lane label="SAST validation" laneNum="02">
                <Node title="SAST findings" sub="SQLi, XSS, etc." tone="default" motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="ToIP" sub="Shared intel" tone="brand" pulse motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="Playbooks" sub="Exploit-matched" tone="default" motion={motion} />
                <Arrow variant="success" motion={motion} />
                <Node title="Validated" sub="Manual + auto" tone="success" motion={motion} />
              </Lane>
          </LaneRow>

          <LaneRow
            index={2}
            motion={motion}
            focusedLane={focusedLane}
            onFocus={setFocusedLane}
          >
            <Lane label="Attack surface intel" laneNum="03">
                <Node title="ASM intel" sub="Subs / APIs" tone="default" motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="ToIP" sub="Shared intel" tone="brand" pulse motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="Playbooks" sub="Surface-specific" tone="default" motion={motion} />
                <Arrow variant="success" motion={motion} />
                <Node title="Validated" sub="Manual + auto" tone="success" motion={motion} />
              </Lane>
          </LaneRow>

          <LaneRow
            index={3}
            motion={motion}
            focusedLane={focusedLane}
            onFocus={setFocusedLane}
          >
            <Lane label="Tech stack scan" laneNum="04">
                <Node title="Tech stack" sub="ASM / SAST out" tone="default" motion={motion} />
                <Arrow variant="cyan" motion={motion} />
                <Node title="Nuclei" sub="Curated templates" tone="cyan" pulse motion={motion} />
                <Arrow variant="success" motion={motion} />
                <Node title="Findings" sub="Validated" tone="success" motion={motion} />
              </Lane>
          </LaneRow>

          <LaneRow
            index={4}
            motion={motion}
            focusedLane={focusedLane}
            onFocus={setFocusedLane}
          >
            <Lane label="AI / LLM security" laneNum="05">
                <Node title="Endpoints" sub="LLM APIs" tone="default" motion={motion} />
                <Arrow variant="brand" motion={motion} />
                <Node title="LLM Attack Suite" sub="1005+ prompts" tone="brand" pulse motion={motion} />
                <Arrow variant="muted" motion={motion} />
                <Node title="Prompt testing" sub="Exhaustive" tone="default" motion={motion} />
                <Arrow variant="success" motion={motion} />
                <Node title="Escalation" sub="Until bypass" tone="success" motion={motion} />
              </Lane>
          </LaneRow>
        </div>

        <div className="offensive-workflow-portal relative mt-3 rounded-lg border border-brand/40 bg-[color-mix(in_oklab,var(--color-brand)_12%,black)] px-3 py-2.5 text-center md:mt-4">
          <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brand md:text-[0.6875rem]">
            OffSec Management Portal
          </p>
          <p className="mt-1 text-[0.5625rem] leading-snug text-muted md:text-[0.625rem]">
            Centralized tracking, live client dashboards, findings management, retest workflow
          </p>
        </div>
      </div>
    </div>
  )
}
