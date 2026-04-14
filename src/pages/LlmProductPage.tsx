import { Fragment, useEffect, useState, type CSSProperties } from 'react'
import { PortalPreviewFrame } from '../components/home/PortalPreviewFrame'
import { LlmPortalLaunchUI } from '../components/home/LlmPortalLaunchUI'
import type { ProductDocument } from '../data/productDocuments'
import {
  LLM_AI,
  LLM_DATA_MODEL,
  LLM_EXECUTIVE,
  LLM_HERO,
  LLM_INTERACTION,
  LLM_OUTPUTS,
  LLM_PIPELINE,
  LLM_SCALE,
  LLM_USE_CASES,
} from '../data/llmPageContent'
import { PRODUCT_PITCH_PAGES } from '../data/productPitchPages'
import { PRODUCT_SCREENSHOT_CHROME } from '../data/productScreenshots'
import { HOME_LLM } from '../data/salesPitchSite'

function pdfHref(file: string) {
  return `/docs/${encodeURIComponent(file)}`
}

function useReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduce
}

function revealStyle(index: number, reduce: boolean): CSSProperties | undefined {
  if (reduce) return undefined
  return { animationDelay: `${index * 70}ms` }
}

function LlmPipeline({ motion }: { motion: boolean }) {
  const phases = LLM_PIPELINE.phases
  const connH = motion ? 'toip-pipeline-dash' : 'h-0.5 w-full min-w-[2.25rem] rounded-full bg-border-strong'
  const connV = motion ? 'toip-pipeline-dash--vertical' : 'h-10 w-0.5 shrink-0 rounded-full bg-border-strong'

  const cardSurface =
    'rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#0c0c0c] via-[color-mix(in_oklab,var(--color-panel)_88%,black)] to-[#050505] shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]'

  const stepBadge =
    'flex shrink-0 items-center justify-center rounded-full border border-brand/45 bg-gradient-to-br from-brand/28 to-brand/10 text-sm font-bold text-brand shadow-[0_0_22px_-5px_color-mix(in_oklab,var(--color-brand)_42%,transparent)]'

  const desktopCard = (p: (typeof phases)[number], i: number, textLtr?: boolean) => (
    <div
      className={`toip-reveal flex min-h-[220px] flex-col ${cardSurface} p-5 md:p-6`}
      dir={textLtr ? 'ltr' : undefined}
      style={revealStyle(i, !motion)}
    >
      <div className="mb-4 flex flex-col items-center text-center">
        <span className={`${stepBadge} mb-3 h-11 w-11 text-[0.8125rem]`} aria-hidden>
          {p.step}
        </span>
        <h3 className="m-0 text-sm font-semibold leading-snug text-heading">{p.name}</h3>
      </div>
      <p className="m-0 mt-auto text-center text-xs leading-relaxed text-muted">{p.detail}</p>
    </div>
  )

  const renderConnH = (ltr?: boolean) => (
    <div
      className={`flex w-10 items-center justify-center md:w-11 xl:w-12 ${ltr ? '[direction:ltr]' : ''}`}
      aria-hidden
    >
      <div className={connH} />
    </div>
  )

  return (
    <div
      className="mt-6 md:mt-7"
      role="region"
      aria-label="LLM Attack Suite pipeline from configuration to framework-mapped deliverables"
    >
      <div className="flex flex-col gap-0 md:hidden">
        {phases.map((p, i) => (
          <Fragment key={p.step}>
            <div className={`toip-reveal ${cardSurface} p-5`} style={revealStyle(i, !motion)}>
              <div className="mb-3 flex items-start gap-3">
                <span className={`${stepBadge} h-10 w-10`} aria-hidden>
                  {p.step}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="m-0 text-base font-semibold leading-snug text-heading">{p.name}</h3>
                </div>
              </div>
              <p className="m-0 text-sm leading-relaxed text-muted">{p.detail}</p>
            </div>
            {i < phases.length - 1 ? (
              <div className="flex justify-center py-2.5" aria-hidden>
                <div className={connV} />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="hidden md:mx-auto md:mt-0 md:block md:max-w-5xl">
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch">
          {desktopCard(phases[0], 0)}
          {renderConnH()}
          {desktopCard(phases[1], 1)}

          <div className="col-span-2 min-h-0" aria-hidden />
          <div className="flex justify-center py-2.5" aria-hidden>
            <div className={connV} />
          </div>

          <div className="col-span-3 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch" dir="rtl">
            {desktopCard(phases[2], 2, true)}
            {renderConnH(true)}
            {desktopCard(phases[3], 3, true)}
            {renderConnH(true)}
            {desktopCard(phases[4], 4, true)}
          </div>
        </div>
      </div>
    </div>
  )
}

export function LlmProductPage({ doc }: { doc: ProductDocument }) {
  const pitch = PRODUCT_PITCH_PAGES.llm
  const pdf = pdfHref(doc.pdfFile)
  const reduceMotion = useReducedMotion()
  const motion = !reduceMotion
  const chrome = PRODUCT_SCREENSHOT_CHROME.llm

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset pt-14 md:pt-20 pb-6 md:pb-8">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
            <div className="min-w-0">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{doc.subtitle}</p>
              <h1 className="heading-scale-hero mb-5 max-w-4xl text-pretty">{pitch.heroTitle}</h1>
              <p className="mb-2 max-w-4xl text-base font-semibold leading-snug text-heading md:text-lg">{HOME_LLM.title}</p>
              <p className="mb-6 max-w-3xl text-base leading-snug text-brand md:text-lg lg:mb-8">{HOME_LLM.subtitle}</p>

              <p className="m-0 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{LLM_HERO.lead}</p>
            </div>
            <div className="mx-auto w-full max-w-lg lg:mx-0 lg:mt-10 lg:justify-self-end xl:mt-12">
              <PortalPreviewFrame
                chromeTitle={chrome.chromeTitle}
                compact
                aria-label={chrome.regionAriaLabel}
              >
                <LlmPortalLaunchUI loop compact />
              </PortalPreviewFrame>
            </div>

            <div className="grid gap-6 lg:col-span-2 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
              <p className="m-0 min-w-0 text-base leading-relaxed text-muted md:text-lg">{pitch.heroLead}</p>
              <p className="m-0 min-w-0 text-sm leading-relaxed text-muted md:text-base">{pitch.elevator}</p>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-3">
                {pitch.pitchMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-page px-5 py-5 text-center"
                  >
                    <p className="text-xl font-semibold text-heading">{m.value}</p>
                    <p className="text-xs text-muted">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-7 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-8 md:text-sm"
                >
                  Open technical PDF
                </a>
                <a
                  href={pdf}
                  download={doc.downloadName}
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-7 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-8 md:text-sm"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-zz-b pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{LLM_EXECUTIVE.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{LLM_EXECUTIVE.body}</p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between lg:items-center">
            <h3 className="m-0 text-center text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-left md:text-sm">
              Key differentiators
            </h3>
            <div
              className="h-px w-16 shrink-0 bg-gradient-to-r from-brand/60 to-transparent sm:mx-0 sm:flex-1 sm:translate-y-[-2px] lg:max-w-md"
              aria-hidden
            />
          </div>
          <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2 md:gap-6">
            {LLM_EXECUTIVE.differentiators.map((item, i) => (
              <li
                key={i}
                className="toip-reveal group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0a0a0a] via-[color-mix(in_oklab,var(--color-panel)_92%,black)] to-[#030303] p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_20px_48px_-28px_rgb(0_0_0/0.75)] transition-[transform,box-shadow,border-color] duration-300 md:p-7 md:pl-8 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_24px_56px_-20px_color-mix(in_oklab,var(--color-brand)_18%,transparent)]"
                style={revealStyle(i, !motion)}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 0% 0%, color-mix(in oklab, var(--color-brand) 14%, transparent), transparent 55%)',
                  }}
                />
                <span
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-mono text-[4.25rem] font-bold leading-none tracking-tighter text-heading/[0.045] transition-colors duration-300 group-hover:text-brand/[0.12] md:-right-2 md:-top-4 md:text-[5.25rem]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-gradient-to-b from-brand via-[color-mix(in_oklab,var(--color-brand)_70%,var(--color-brand-strong))] to-brand-strong opacity-90 shadow-[0_0_20px_color-mix(in_oklab,var(--color-brand)_35%,transparent)]"
                  aria-hidden
                />
                <p className="relative z-[1] m-0 pl-5 text-[0.8125rem] leading-relaxed text-muted md:pl-6 md:text-sm md:leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-a bg-panel/15 pt-14 md:pt-20 pb-8 md:pb-10">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{LLM_INTERACTION.title}</h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{LLM_INTERACTION.intro}</p>
          <ol className="m-0 mb-10 max-w-3xl list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted marker:text-brand md:text-base">
            {LLM_INTERACTION.steps.map((s, i) => (
              <li key={i} className="toip-reveal pl-1" style={revealStyle(i, !motion)}>
                {s}
              </li>
            ))}
          </ol>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-muted">Example campaigns</p>
          <div className="flex flex-wrap gap-2">
            {LLM_INTERACTION.exampleCampaigns.map((q, i) => (
              <span
                key={q}
                className="toip-reveal rounded-full border border-brand/35 bg-[color-mix(in_oklab,var(--color-brand)_10%,transparent)] px-4 py-2 text-xs font-medium text-heading md:text-sm"
                style={revealStyle(i, !motion)}
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-zz-b pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-xl font-medium text-heading md:text-2xl">{LLM_PIPELINE.title}</h2>
            <p className="mb-0 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{LLM_PIPELINE.subtitle}</p>
            <LlmPipeline motion={motion} />
          </div>
        </div>
      </section>

      <section className="section-zz-a py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{LLM_DATA_MODEL.title}</h2>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{LLM_DATA_MODEL.intro}</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LLM_DATA_MODEL.sources.map((s, i) => (
              <article
                key={s.name}
                className="toip-reveal card-hover-glow flex flex-col rounded-xl border border-border bg-panel/40 p-6"
                style={revealStyle(i, !motion)}
              >
                <h3 className="mb-3 text-base font-semibold text-heading">{s.name}</h3>
                <p className="mb-4 text-sm text-muted">{s.description}</p>
                <p className="mt-auto border-t border-border-strong/50 pt-4 text-xs font-medium leading-relaxed text-brand/95">
                  {s.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-zz-b py-8 md:py-10">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{LLM_SCALE.title}</h2>
          <p className="mb-10 max-w-3xl text-sm text-muted md:text-base">{LLM_SCALE.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LLM_SCALE.metrics.map((m, i) => (
              <div
                key={m.label}
                className="toip-reveal rounded-xl border border-border bg-bg-inset px-5 py-6 text-center"
                style={revealStyle(i, !motion)}
              >
                <p className="mb-2 text-lg font-semibold text-brand md:text-xl">{m.value}</p>
                <p className="m-0 text-xs leading-snug text-muted md:text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-zz-a bg-panel/15 pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{LLM_AI.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{LLM_AI.intro}</p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between lg:items-center">
            <h3 className="m-0 text-center text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-left md:text-sm">
              How AI is used
            </h3>
            <div
              className="h-px w-16 shrink-0 bg-gradient-to-r from-brand/60 to-transparent sm:mx-0 sm:flex-1 sm:translate-y-[-2px] lg:max-w-md"
              aria-hidden
            />
          </div>
          <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2 md:gap-6">
            {LLM_AI.points.map((item, i) => (
              <li
                key={i}
                className="toip-reveal group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0a0a0a] via-[color-mix(in_oklab,var(--color-panel)_92%,black)] to-[#030303] p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_20px_48px_-28px_rgb(0_0_0/0.75)] transition-[transform,box-shadow,border-color] duration-300 md:p-7 md:pl-8 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_24px_56px_-20px_color-mix(in_oklab,var(--color-brand)_18%,transparent)]"
                style={revealStyle(i, !motion)}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 0% 0%, color-mix(in oklab, var(--color-brand) 14%, transparent), transparent 55%)',
                  }}
                />
                <span
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-mono text-[4.25rem] font-bold leading-none tracking-tighter text-heading/[0.045] transition-colors duration-300 group-hover:text-brand/[0.12] md:-right-2 md:-top-4 md:text-[5.25rem]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-gradient-to-b from-brand via-[color-mix(in_oklab,var(--color-brand)_70%,var(--color-brand-strong))] to-brand-strong opacity-90 shadow-[0_0_20px_color-mix(in_oklab,var(--color-brand)_35%,transparent)]"
                  aria-hidden
                />
                <p className="relative z-[1] m-0 pl-5 text-[0.8125rem] leading-relaxed text-muted md:pl-6 md:text-sm md:leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-b pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{LLM_OUTPUTS.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{LLM_OUTPUTS.intro}</p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between lg:items-center">
            <h3 className="m-0 text-center text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-left md:text-sm">
              Output sections
            </h3>
            <div
              className="h-px w-16 shrink-0 bg-gradient-to-r from-brand/60 to-transparent sm:mx-0 sm:flex-1 sm:translate-y-[-2px] lg:max-w-md"
              aria-hidden
            />
          </div>
          <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2 md:gap-6">
            {LLM_OUTPUTS.rows.map((row, i) => (
              <li
                key={row.section}
                className="toip-reveal group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0a0a0a] via-[color-mix(in_oklab,var(--color-panel)_92%,black)] to-[#030303] p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_20px_48px_-28px_rgb(0_0_0/0.75)] transition-[transform,box-shadow,border-color] duration-300 md:p-7 md:pl-8 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_24px_56px_-20px_color-mix(in_oklab,var(--color-brand)_18%,transparent)]"
                style={revealStyle(i, !motion)}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 0% 0%, color-mix(in oklab, var(--color-brand) 14%, transparent), transparent 55%)',
                  }}
                />
                <span
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-mono text-[4.25rem] font-bold leading-none tracking-tighter text-heading/[0.045] transition-colors duration-300 group-hover:text-brand/[0.12] md:-right-2 md:-top-4 md:text-[5.25rem]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-gradient-to-b from-brand via-[color-mix(in_oklab,var(--color-brand)_70%,var(--color-brand-strong))] to-brand-strong opacity-90 shadow-[0_0_20px_color-mix(in_oklab,var(--color-brand)_35%,transparent)]"
                  aria-hidden
                />
                <div className="relative z-[1] pl-5 md:pl-6">
                  <h4 className="m-0 mb-2 text-sm font-semibold text-heading">{row.section}</h4>
                  <p className="m-0 text-[0.8125rem] leading-relaxed text-muted md:text-sm md:leading-relaxed">
                    {row.contains}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-b py-14 md:py-20">
        <div className="container">
          <h2 className="mb-10 text-xl font-medium text-heading md:text-2xl">{LLM_USE_CASES.title}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LLM_USE_CASES.cases.map((c, i) => (
              <article
                key={c.query}
                className="toip-reveal group rounded-xl border border-border bg-bg-inset p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/35 hover:shadow-[0_0_32px_-12px_rgb(232_93_4/0.2)]"
                style={revealStyle(i, !motion)}
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">{c.query}</p>
                <p className="m-0 text-sm leading-relaxed text-muted">{c.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
