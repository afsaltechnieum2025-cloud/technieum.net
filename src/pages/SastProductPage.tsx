import { useEffect, useState, type CSSProperties } from 'react'
import { ProductPipelinePhases } from '../components/product/ProductPipelinePhases'
import { PortalPreviewFrame } from '../components/home/PortalPreviewFrame'
import { SastPortalLaunchUI } from '../components/home/SastPortalLaunchUI'
import type { ProductDocument } from '../data/productDocuments'
import { PRODUCT_PITCH_PAGES } from '../data/productPitchPages'
import { PRODUCT_SCREENSHOT_CHROME } from '../data/productScreenshots'
import {
  SAST_AI,
  SAST_DATA_MODEL,
  SAST_EXECUTIVE,
  SAST_HERO,
  SAST_INTERACTION,
  SAST_OUTPUTS,
  SAST_PIPELINE,
  SAST_SCALE,
  SAST_SCA,
  SAST_USE_CASES,
} from '../data/sastPageContent'
import { HOME_SAST } from '../data/salesPitchSite'

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

export function SastProductPage({ doc }: { doc: ProductDocument }) {
  const pitch = PRODUCT_PITCH_PAGES.sast
  const pdf = pdfHref(doc.pdfFile)
  const reduceMotion = useReducedMotion()
  const motion = !reduceMotion
  const chrome = PRODUCT_SCREENSHOT_CHROME.sast

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset pt-14 md:pt-20 pb-6 md:pb-8">
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:gap-x-6 md:gap-x-7 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-5 xl:gap-x-10">
            <div className="min-w-0">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{doc.subtitle}</p>
              <h1 className="heading-scale-hero mb-5 max-w-4xl text-pretty">{pitch.heroTitle}</h1>
              <p className="mb-2 max-w-4xl text-base font-semibold leading-snug text-heading md:text-lg">{HOME_SAST.title}</p>
              <p className="mb-6 max-w-3xl text-base leading-snug text-brand md:text-lg lg:mb-8">{HOME_SAST.subtitle}</p>

              <p className="m-0 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{SAST_HERO.lead}</p>
            </div>
            <div className="mx-auto w-full max-w-md min-w-0 sm:max-w-lg lg:mx-0 lg:w-full lg:max-w-none">
              <PortalPreviewFrame
                chromeTitle={chrome.chromeTitle}
                compact
                aria-label={chrome.regionAriaLabel}
              >
                <SastPortalLaunchUI loop compact />
              </PortalPreviewFrame>
            </div>

            <div className="grid gap-5 lg:col-span-2 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-4 xl:gap-x-10">
              <p className="m-0 min-w-0 text-base leading-relaxed text-muted md:text-lg">{pitch.heroLead}</p>
              <p className="m-0 min-w-0 text-sm leading-relaxed text-muted md:text-base">{pitch.elevator}</p>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
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

      <section className="section-zz-b section-zz-wash-br pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_EXECUTIVE.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{SAST_EXECUTIVE.body}</p>
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
            {SAST_EXECUTIVE.differentiators.map((item, i) => (
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

      <section className="section-zz-a section-zz-wash-tl bg-panel/15 pt-14 md:pt-20 pb-8 md:pb-10">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_INTERACTION.title}</h2>
          <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">{SAST_INTERACTION.intro}</p>
          <ol className="m-0 mb-10 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted marker:text-brand md:text-base lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-5 lg:space-y-0">
            {SAST_INTERACTION.steps.map((s, i) => (
              <li key={i} className="toip-reveal pl-1" style={revealStyle(i, !motion)}>
                {s}
              </li>
            ))}
          </ol>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-muted">Example workflows</p>
          <div className="flex flex-wrap gap-2">
            {SAST_INTERACTION.exampleWorkflows.map((q, i) => (
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

      <section className="section-zz-b section-zz-wash-br pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <h2 className="mb-2 text-xl font-medium text-heading md:text-2xl">{SAST_PIPELINE.title}</h2>
          <p className="mb-0 text-sm leading-relaxed text-muted md:text-base">{SAST_PIPELINE.subtitle}</p>
          <ProductPipelinePhases
            phases={SAST_PIPELINE.phases}
            ariaLabel="Unified SAST and SCA pipeline from ingest to developer-ready export"
          />
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_DATA_MODEL.title}</h2>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{SAST_DATA_MODEL.intro}</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SAST_DATA_MODEL.sources.map((s, i) => (
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

      <section className="section-zz-b section-zz-wash-br py-8 md:py-10">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_SCALE.title}</h2>
          <p className="mb-10 max-w-3xl text-sm text-muted md:text-base">{SAST_SCALE.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SAST_SCALE.metrics.map((m, i) => (
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

      <section className="section-zz-a section-zz-wash-tl bg-panel/15 pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_AI.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{SAST_AI.intro}</p>
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
            {SAST_AI.points.map((item, i) => (
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

      <section className="section-zz-b section-zz-wash-br pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_SCA.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{SAST_SCA.intro}</p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between lg:items-center">
            <h3 className="m-0 text-center text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-left md:text-sm">
              SCA focus
            </h3>
            <div
              className="h-px w-16 shrink-0 bg-gradient-to-r from-brand/60 to-transparent sm:mx-0 sm:flex-1 sm:translate-y-[-2px] lg:max-w-md"
              aria-hidden
            />
          </div>
          <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2 md:gap-6">
            {SAST_SCA.points.map((item, i) => (
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

      <section className="section-zz-a section-zz-wash-tl pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{SAST_OUTPUTS.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{SAST_OUTPUTS.intro}</p>
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
            {SAST_OUTPUTS.rows.map((row, i) => (
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

      <section className="section-zz-b section-zz-wash-br py-14 md:py-20">
        <div className="container">
          <h2 className="mb-10 text-xl font-medium text-heading md:text-2xl">{SAST_USE_CASES.title}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SAST_USE_CASES.cases.map((c, i) => (
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
