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
      className={`min-w-0 flex-1 rounded-md border px-1.5 py-1.5 text-center ${tones[tone]} ${pulseCls}`}
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

function Lane({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="w-full min-w-0">
      <p className="mb-1 text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-brand md:text-[0.625rem]">{label}</p>
      <div className="flex items-stretch">{children}</div>
    </div>
  )
}

/** Animated workflow lanes (GIF-like motion, theme colors). */
export function OffensiveWorkflowVisual() {
  const motion = !useReducedMotion()

  return (
    <div
      className="rounded-xl border border-border-strong/60 bg-[color-mix(in_oklab,var(--color-panel)_88%,black)] p-3 shadow-md md:p-4"
      role="img"
      aria-label="Diagram: five offensive workstreams from intel and scanning through ToIP and tooling into validated findings, above the OffSec Management Portal."
    >
      <div className="space-y-2.5 md:space-y-3">
        <Lane label="Business logic">
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

        <Lane label="SAST validation">
          <Node title="SAST findings" sub="SQLi, XSS, etc." tone="default" motion={motion} />
          <Arrow variant="brand" motion={motion} />
          <Node title="ToIP" sub="Shared intel" tone="brand" pulse motion={motion} />
          <Arrow variant="brand" motion={motion} />
          <Node title="Playbooks" sub="Exploit-matched" tone="default" motion={motion} />
          <Arrow variant="success" motion={motion} />
          <Node title="Validated" sub="Manual + auto" tone="success" motion={motion} />
        </Lane>

        <Lane label="Attack surface intel">
          <Node title="ASM intel" sub="Subs / APIs" tone="default" motion={motion} />
          <Arrow variant="brand" motion={motion} />
          <Node title="ToIP" sub="Shared intel" tone="brand" pulse motion={motion} />
          <Arrow variant="brand" motion={motion} />
          <Node title="Playbooks" sub="Surface-specific" tone="default" motion={motion} />
          <Arrow variant="success" motion={motion} />
          <Node title="Validated" sub="Manual + auto" tone="success" motion={motion} />
        </Lane>

        <Lane label="Tech stack scan">
          <Node title="Tech stack" sub="ASM / SAST out" tone="default" motion={motion} />
          <Arrow variant="cyan" motion={motion} />
          <Node title="Nuclei" sub="Curated templates" tone="cyan" pulse motion={motion} />
          <Arrow variant="success" motion={motion} />
          <Node title="Findings" sub="Validated" tone="success" motion={motion} />
        </Lane>

        <Lane label="AI / LLM security">
          <Node title="Endpoints" sub="LLM APIs" tone="default" motion={motion} />
          <Arrow variant="brand" motion={motion} />
          <Node title="LLM Attack Suite" sub="1005+ prompts" tone="brand" pulse motion={motion} />
          <Arrow variant="muted" motion={motion} />
          <Node title="Prompt testing" sub="Exhaustive" tone="default" motion={motion} />
          <Arrow variant="success" motion={motion} />
          <Node title="Escalation" sub="Until bypass" tone="success" motion={motion} />
        </Lane>
      </div>

      <div className="mt-3 rounded-lg border border-brand/35 bg-[color-mix(in_oklab,var(--color-brand)_10%,black)] px-3 py-2.5 text-center md:mt-4">
        <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brand md:text-[0.6875rem]">
          OffSec Management Portal
        </p>
        <p className="mt-1 text-[0.5625rem] leading-snug text-muted md:text-[0.625rem]">
          Centralized tracking, live client dashboards, findings management, retest workflow
        </p>
      </div>
    </div>
  )
}
