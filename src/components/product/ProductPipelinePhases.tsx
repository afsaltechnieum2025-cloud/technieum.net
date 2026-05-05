export type ProductPipelinePhase = {
  step: string
  name: string
  detail: string
}

type ProductPipelinePhasesProps = {
  phases: readonly ProductPipelinePhase[]
  ariaLabel: string
}

export function ProductPipelinePhases({ phases, ariaLabel }: ProductPipelinePhasesProps) {
  const lastSpansTwoCols = phases.length % 2 === 1

  return (
    <div className="mt-6 w-full min-w-0 md:mt-8" role="region" aria-label={ariaLabel}>
      <div className="h-1 w-full rounded-full bg-brand" aria-hidden />
      <ol className="m-0 mt-8 list-none space-y-6 p-0 md:mt-10 md:space-y-7 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8 lg:space-y-0">
        {phases.map((p, i) => (
          <li
            key={p.step}
            className={`flex gap-4 border-b border-border/50 pb-6 last:border-b-0 last:pb-0 md:gap-6 md:pb-7 ${
              lastSpansTwoCols && i === phases.length - 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-[color-mix(in_oklab,var(--color-brand)_12%,transparent)] text-sm font-bold text-brand"
              aria-hidden
            >
              {p.step}
            </span>
            <div className="min-w-0">
              <h3 className="m-0 text-base font-semibold leading-snug text-heading">{p.name}</h3>
              <p className="m-0 mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
