import { Link } from 'react-router-dom'
import { ServiceProgramHeroVisual } from '../components/program-hub/ServiceProgramHeroVisual'
import { GenericPipelineVisual } from '../components/program-hub/GenericPipelineVisual'
import { ProgramMethodologySection } from '../components/program-hub/ProgramMethodologySection'
import {
  ICS_OT_CHALLENGE,
  ICS_OT_CTA,
  ICS_OT_DELIVERABLE_REPORTS,
  ICS_OT_DELIVERABLES_PROGRAM_EXTRA,
  ICS_OT_EDGE,
  ICS_OT_HERO,
  ICS_OT_KEY_BENEFITS,
  ICS_OT_METHODOLOGY,
  ICS_OT_PARTNER,
  ICS_OT_SERVICE_CATALOG,
  ICS_OT_SOLUTION_INTRO,
} from '../data/icsOtSecurityPageContent'
import { icsOtSecurityHubConfig } from '../data/programHubRegistry'

export function IcsOtSecurityPage() {
  const { visualNodes, visualAriaLabel, pillars, deliverables } = icsOtSecurityHubConfig
  const programPortalLines = [...deliverables, ...ICS_OT_DELIVERABLES_PROGRAM_EXTRA]

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset py-10 md:py-14">
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <p className="text-shimmer-brand mb-2 text-xs font-semibold tracking-wide md:text-sm">{ICS_OT_HERO.eyebrow}</p>
              <h1 className="heading-scale-hero mb-3 max-w-xl text-pretty">{ICS_OT_HERO.title}</h1>
              <p className="mb-2 max-w-xl text-sm font-medium leading-relaxed text-zinc-200 md:text-base">{ICS_OT_HERO.lead}</p>
              <p className="mb-5 max-w-xl text-sm leading-relaxed text-muted">{ICS_OT_HERO.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-7 md:text-sm"
                >
                  Scope a program
                </Link>
              </div>
            </div>
            <ServiceProgramHeroVisual
              serviceSlug="technieum-ics-ot-security"
              ariaLabel={visualAriaLabel}
              pipelineFallback={<GenericPipelineVisual nodes={visualNodes} ariaLabel={visualAriaLabel} />}
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-6 md:py-8">
        <div className="container">
          <div className="container-inner-5xl">
            <h2 className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand sm:text-xs md:text-[0.8125rem]">
              {ICS_OT_KEY_BENEFITS.title}
            </h2>
            <p className="mb-4 text-sm font-medium text-zinc-500 sm:mb-5">{ICS_OT_KEY_BENEFITS.subtitle}</p>
            <ul className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4">
              {ICS_OT_KEY_BENEFITS.items.map((b, index) => {
                const watermark = String(index + 1).padStart(2, '0')
                return (
                  <li
                    key={b.title}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#111111] shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-[#131313] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.85)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                      style={{
                        background:
                          'radial-gradient(circle at 100% 0%, rgb(232 93 4 / 0.07), transparent 52%)',
                      }}
                    />
                    <span
                      className="pointer-events-none absolute right-2 top-0.5 select-none font-mono text-[2rem] font-bold leading-none tracking-tight text-heading/[0.04] sm:right-2.5 sm:text-[2.25rem] md:text-[2.5rem]"
                      aria-hidden
                    >
                      {watermark}
                    </span>
                    <div
                      className="pointer-events-none absolute left-0 top-1/2 h-[min(62%,9rem)] min-h-[2.5rem] max-h-[65%] w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand via-[rgb(245_158_11)] to-brand-strong shadow-[0_0_10px_rgb(232_93_4/0.35)]"
                      aria-hidden
                    />
                    <div className="relative z-[1] min-w-0 py-3.5 pl-5 pr-4 md:py-4 md:pl-6 md:pr-5">
                      <h3 className="m-0 mb-1.5 text-sm font-bold leading-snug text-heading md:text-base">{b.title}</h3>
                      <p className="m-0 text-[0.8125rem] leading-relaxed text-muted md:text-sm md:leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-8 md:py-12">
        <div className="container">
          <div className="container-inner-5xl">
            <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{ICS_OT_CHALLENGE.title}</h2>
            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted">{ICS_OT_CHALLENGE.intro}</p>
            <ul className="m-0 mb-6 max-w-3xl list-none space-y-2.5 p-0">
              {ICS_OT_CHALLENGE.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{ICS_OT_PARTNER.title}</h2>
            <p className="m-0 max-w-3xl text-sm leading-relaxed text-muted">{ICS_OT_PARTNER.body}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-6 md:py-8">
        <div className="container">
          <div className="container-inner-5xl">
            <h2 className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand sm:text-xs md:text-[0.8125rem]">
              {ICS_OT_SOLUTION_INTRO.title}
            </h2>
            <p className="mb-2 text-sm font-medium text-zinc-500">{ICS_OT_SOLUTION_INTRO.subtitle}</p>
            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted sm:mb-5">{ICS_OT_SOLUTION_INTRO.intro}</p>
            <ol className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4">
              {ICS_OT_SERVICE_CATALOG.map((s) => {
                const watermark = String(s.step).padStart(2, '0')
                return (
                  <li
                    key={s.step}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#111111] shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-[#131313] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.85)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                      style={{
                        background:
                          'radial-gradient(circle at 100% 0%, rgb(232 93 4 / 0.07), transparent 52%)',
                      }}
                    />
                    <span
                      className="pointer-events-none absolute right-2 top-0.5 select-none font-mono text-[2rem] font-bold leading-none tracking-tight text-heading/[0.04] sm:right-2.5 sm:text-[2.25rem] md:text-[2.5rem]"
                      aria-hidden
                    >
                      {watermark}
                    </span>
                    <div
                      className="pointer-events-none absolute left-0 top-1/2 h-[min(62%,9rem)] min-h-[2.5rem] max-h-[65%] w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand via-[rgb(245_158_11)] to-brand-strong shadow-[0_0_10px_rgb(232_93_4/0.35)]"
                      aria-hidden
                    />
                    <div className="relative z-[1] min-w-0 py-3.5 pl-5 pr-4 md:py-4 md:pl-6 md:pr-5">
                      <h3 className="m-0 mb-1.5 text-sm font-bold leading-snug text-heading md:text-base">{s.title}</h3>
                      <p className="m-0 text-[0.8125rem] leading-relaxed text-muted md:text-sm md:leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-8 md:py-12">
        <div className="container">
          <div className="container-inner-5xl">
            <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">Coverage pillars</h2>
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-muted">
              Mix and match pillars to your roadmap. Everything rolls into the same delivery standards, portal scoring, and
              retest discipline as the rest of the Technieum portfolio.
            </p>
            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
              {pillars.map((s) => (
                <li
                  key={s.id}
                  className="rounded-xl border border-border bg-panel/30 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
                >
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-heading">{s.title}</h3>
                    <span className="rounded-full border border-brand/35 bg-brand/10 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-brand">
                      {s.accent}
                    </span>
                  </div>
                  <p className="m-0 text-sm leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-6 md:py-8">
        <div className="container">
          <div className="container-inner-5xl">
            <h2 className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand sm:text-xs md:text-[0.8125rem]">
              {ICS_OT_EDGE.title}
            </h2>
            <p className="mb-2 text-sm font-medium text-zinc-500">{ICS_OT_EDGE.subtitle}</p>
            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted sm:mb-5">{ICS_OT_EDGE.methodologyLead}</p>
            <ul className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4">
              {ICS_OT_EDGE.pillars.map((p, index) => {
                const watermark = String(index + 1).padStart(2, '0')
                return (
                  <li
                    key={p.title}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#111111] shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-[#131313] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.85)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                      style={{
                        background:
                          'radial-gradient(circle at 100% 0%, rgb(232 93 4 / 0.07), transparent 52%)',
                      }}
                    />
                    <span
                      className="pointer-events-none absolute right-2 top-0.5 select-none font-mono text-[2rem] font-bold leading-none tracking-tight text-heading/[0.04] sm:right-2.5 sm:text-[2.25rem] md:text-[2.5rem]"
                      aria-hidden
                    >
                      {watermark}
                    </span>
                    <div
                      className="pointer-events-none absolute left-0 top-1/2 h-[min(62%,9rem)] min-h-[2.5rem] max-h-[65%] w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand via-[rgb(245_158_11)] to-brand-strong shadow-[0_0_10px_rgb(232_93_4/0.35)]"
                      aria-hidden
                    />
                    <div className="relative z-[1] min-w-0 py-3.5 pl-5 pr-4 md:py-4 md:pl-6 md:pr-5">
                      <h3 className="m-0 mb-1.5 text-sm font-bold leading-snug text-heading md:text-base">{p.title}</h3>
                      <p className="m-0 text-[0.8125rem] leading-relaxed text-muted md:text-sm md:leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <ProgramMethodologySection content={ICS_OT_METHODOLOGY} />

      <section className="relative overflow-hidden bg-black py-6 md:py-8">
        <div className="container min-w-0">
          <div className="container-inner-5xl min-w-0">
            <h2 className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand sm:text-xs md:text-[0.8125rem]">
              {ICS_OT_DELIVERABLE_REPORTS.subtitle}
            </h2>
            <p className="mb-2 text-sm font-medium text-zinc-500">{ICS_OT_DELIVERABLE_REPORTS.title}</p>
            <p className="mb-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted sm:mb-5">
              {ICS_OT_DELIVERABLE_REPORTS.intro}
            </p>
            <ul className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4">
              {ICS_OT_DELIVERABLE_REPORTS.pdfCore.map((d, index) => {
                const watermark = String(index + 1).padStart(2, '0')
                return (
                  <li
                    key={d.title}
                    className="group relative flex min-h-0 min-w-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#111111] shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-[#131313] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.85)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                      style={{
                        background:
                          'radial-gradient(circle at 100% 0%, rgb(232 93 4 / 0.07), transparent 52%)',
                      }}
                    />
                    <span
                      className="pointer-events-none absolute right-2 top-0.5 select-none font-mono text-[2rem] font-bold leading-none tracking-tight text-heading/[0.04] sm:right-2.5 sm:text-[2.25rem] md:text-[2.5rem]"
                      aria-hidden
                    >
                      {watermark}
                    </span>
                    <div
                      className="pointer-events-none absolute left-0 top-1/2 h-[min(62%,9rem)] min-h-[2.5rem] max-h-[65%] w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand via-[rgb(245_158_11)] to-brand-strong shadow-[0_0_10px_rgb(232_93_4/0.35)]"
                      aria-hidden
                    />
                    <div className="relative z-[1] flex min-h-0 min-w-0 flex-1 flex-col py-3.5 pl-5 pr-4 md:py-4 md:pl-6 md:pr-5">
                      <h3 className="m-0 mb-1.5 text-sm font-bold leading-snug text-heading md:text-base">{d.title}</h3>
                      <p className="m-0 min-h-0 flex-1 text-pretty text-[0.8125rem] leading-relaxed text-muted md:text-sm md:leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 border-t border-white/[0.06] pt-6 md:mt-7 md:pt-7">
              <h3 className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand sm:mb-5 sm:text-xs md:text-[0.8125rem]">
                Program and portal
              </h3>
              <ul className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4">
                {programPortalLines.map((line, index) => {
                  const watermark = String(index + 1).padStart(2, '0')
                  return (
                    <li
                      key={`ics-ot-deliverable-program-${index}`}
                      className="group relative flex min-h-0 min-w-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#111111] shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-[#131313] hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.85)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                        style={{
                          background:
                            'radial-gradient(circle at 100% 0%, rgb(232 93 4 / 0.07), transparent 52%)',
                        }}
                      />
                      <span
                        className="pointer-events-none absolute right-2 top-0.5 select-none font-mono text-[2rem] font-bold leading-none tracking-tight text-heading/[0.04] sm:right-2.5 sm:text-[2.25rem] md:text-[2.5rem]"
                        aria-hidden
                      >
                        {watermark}
                      </span>
                      <div
                        className="pointer-events-none absolute left-0 top-1/2 h-[min(62%,9rem)] min-h-[2.5rem] max-h-[65%] w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand via-[rgb(245_158_11)] to-brand-strong shadow-[0_0_10px_rgb(232_93_4/0.35)]"
                        aria-hidden
                      />
                      <div className="relative z-[1] min-w-0 py-3.5 pl-5 pr-4 md:py-4 md:pl-6 md:pr-5">
                        <p className="m-0 text-pretty text-[0.8125rem] leading-relaxed text-muted md:text-sm md:leading-relaxed">
                          {line}
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

      <section className="section-zz-b section-zz-wash-br py-8 md:py-12">
        <div className="container min-w-0">
          <div className="container-inner-5xl min-w-0 text-left">
            <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{ICS_OT_CTA.title}</h2>
            <p className="mb-5 max-w-3xl text-pretty text-sm leading-relaxed text-muted md:mb-6">{ICS_OT_CTA.body}</p>
            <div className="flex flex-wrap justify-start">
              <Link
                to="/contact"
                className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-7 md:text-sm"
              >
                Speak with an expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
