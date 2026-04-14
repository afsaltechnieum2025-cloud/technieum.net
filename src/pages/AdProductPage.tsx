import { Fragment, useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { OffsecPortalSlideshow } from '../components/home/OffsecPortalSlideshow'
import type { ProductDocument } from '../data/productDocuments'
import {
  AD_CLOSING,
  AD_DATA_MODEL,
  AD_EVIDENCE,
  AD_EXECUTIVE,
  AD_HERO,
  AD_INTERACTION,
  AD_OUTPUTS,
  AD_PAGE_META,
  AD_PIPELINE,
  AD_SCALE,
  AD_SCORING,
  AD_TECH_STACK,
  AD_USE_CASES,
} from '../data/adPageContent'
import { PRODUCT_PITCH_PAGES } from '../data/productPitchPages'
import {
  getProductScreenshotSlides,
  productHasScreenshotFolder,
  PRODUCT_SCREENSHOT_CHROME,
} from '../data/productScreenshots'
import { HOME_AD } from '../data/salesPitchSite'

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

function AdPipeline({ motion }: { motion: boolean }) {
  const phases = AD_PIPELINE.phases
  const dashH = motion ? 'toip-pipeline-dash' : 'h-0.5 w-full rounded-full bg-border-strong'
  const dashV = motion ? 'toip-pipeline-dash--vertical' : 'h-6 w-0.5 rounded-full bg-border-strong'

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-0 lg:hidden">
        {phases.map((p, i) => (
          <Fragment key={p.step}>
            <div
              className="toip-reveal rounded-xl border border-border-strong/70 bg-panel/45 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
              style={revealStyle(i, !motion)}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/15 text-sm font-bold text-brand">
                  {p.step}
                </span>
                <h3 className="m-0 text-base font-semibold text-heading">{p.name}</h3>
              </div>
              <p className="m-0 text-sm leading-relaxed text-muted">{p.detail}</p>
            </div>
            {i < phases.length - 1 ? (
              <div className="flex justify-center py-3" aria-hidden>
                <div className={dashV} />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="hidden lg:flex lg:items-stretch lg:gap-0">
        {phases.map((p, i) => (
          <Fragment key={p.step}>
            <div
              className="toip-reveal min-w-0 flex-1 rounded-xl border border-border-strong/70 bg-panel/45 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
              style={revealStyle(i, !motion)}
            >
              <div className="mb-3 flex flex-col items-center text-center">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-brand/40 bg-brand/15 text-sm font-bold text-brand">
                  {p.step}
                </span>
                <h3 className="m-0 text-sm font-semibold leading-snug text-heading">{p.name}</h3>
              </div>
              <p className="m-0 text-center text-xs leading-relaxed text-muted">{p.detail}</p>
            </div>
            {i < phases.length - 1 ? (
              <div className="flex w-10 shrink-0 items-center justify-center self-center px-1" aria-hidden>
                <div className={dashH} />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export function AdProductPage({ doc }: { doc: ProductDocument }) {
  const pitch = PRODUCT_PITCH_PAGES.ad
  const pdf = pdfHref(doc.pdfFile)
  const reduceMotion = useReducedMotion()
  const motion = !reduceMotion
  const slides = getProductScreenshotSlides(doc.id)
  const chrome = PRODUCT_SCREENSHOT_CHROME.ad

  const screenshotTour =
    productHasScreenshotFolder(doc.id) && slides.length > 0 ? (
      <section className="section-zz-b py-14 md:py-20" aria-labelledby="ad-screenshots-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 id="ad-screenshots-heading" className="mb-3 text-xl font-medium text-heading md:text-2xl">
                {HOME_AD.title}
              </h2>
              <p className="mb-6 text-base leading-snug text-brand">{HOME_AD.subtitle}</p>
              <p className="mb-8 text-sm leading-relaxed text-muted lg:mb-0">{HOME_AD.intro}</p>
              <ul className="m-0 mt-8 list-none space-y-4 p-0 lg:mt-10">
                {HOME_AD.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-28">
              <OffsecPortalSlideshow
                slides={slides}
                chromeTitle={chrome.chromeTitle}
                regionAriaLabel={chrome.regionAriaLabel}
              />
            </div>
          </div>
        </div>
      </section>
    ) : null

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset pt-14 md:pt-20 pb-6 md:pb-8">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{doc.subtitle}</p>
          <h1 className="heading-scale-hero mb-5 max-w-4xl text-pretty">{pitch.heroTitle}</h1>
          <p className="mb-2 max-w-4xl text-base font-semibold leading-snug text-heading md:text-lg">{HOME_AD.title}</p>
          <p className="mb-8 max-w-3xl text-base leading-snug text-brand md:text-lg">{HOME_AD.subtitle}</p>

          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{AD_HERO.lead}</p>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{pitch.heroLead}</p>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted">{pitch.elevator}</p>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
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
      </section>

      <section className="section-zz-b pt-8 md:pt-10 pb-14 md:pb-20">
        <div className="container">
          <div className="toip-reveal mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_EXECUTIVE.title}</h2>
            <p className="mb-10 text-sm leading-relaxed text-muted md:text-base">{AD_EXECUTIVE.body}</p>
          </div>
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-[0.16em] text-brand lg:text-left">
            Key differentiators
          </h3>
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
            {AD_EXECUTIVE.differentiators.map((item, i) => (
              <li
                key={i}
                className="toip-reveal card-hover-glow flex gap-4 rounded-xl border border-border bg-panel/35 p-5 md:p-6"
                style={revealStyle(i, !motion)}
              >
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand shadow-[0_0_12px_rgb(232_93_4/0.45)]"
                  aria-hidden
                />
                <p className="m-0 text-sm leading-relaxed text-muted">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-a bg-panel/15 py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_INTERACTION.title}</h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{AD_INTERACTION.intro}</p>
          <ol className="m-0 mb-10 max-w-3xl list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted marker:text-brand md:text-base">
            {AD_INTERACTION.steps.map((s, i) => (
              <li key={i} className="toip-reveal pl-1" style={revealStyle(i, !motion)}>
                {s}
              </li>
            ))}
          </ol>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-muted">Example engagements</p>
          <div className="flex flex-wrap gap-2">
            {AD_INTERACTION.exampleEngagements.map((q, i) => (
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

      <section className="section-zz-b py-14 md:py-20">
        <div className="container">
          <h2 className="mb-2 text-xl font-medium text-heading md:text-2xl">{AD_PIPELINE.title}</h2>
          <p className="mb-2 max-w-2xl text-sm text-muted md:text-base">{AD_PIPELINE.subtitle}</p>
          <AdPipeline motion={motion} />
        </div>
      </section>

      <section className="section-zz-a py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_DATA_MODEL.title}</h2>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{AD_DATA_MODEL.intro}</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AD_DATA_MODEL.sources.map((s, i) => (
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

      <section className="section-zz-b py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_SCALE.title}</h2>
          <p className="mb-10 max-w-3xl text-sm text-muted md:text-base">{AD_SCALE.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AD_SCALE.metrics.map((m, i) => (
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

      <section className="section-zz-a bg-panel/15 py-14 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_EVIDENCE.title}</h2>
          <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">{AD_EVIDENCE.intro}</p>
          <ul className="m-0 space-y-4 p-0">
            {AD_EVIDENCE.points.map((p, i) => (
              <li
                key={i}
                className="toip-reveal flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                style={revealStyle(i, !motion)}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-b py-14 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_SCORING.title}</h2>
          <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">{AD_SCORING.intro}</p>
          <ul className="m-0 space-y-4 p-0">
            {AD_SCORING.points.map((p, i) => (
              <li
                key={i}
                className="toip-reveal flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                style={revealStyle(i, !motion)}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-a py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6 text-xl font-medium text-heading md:text-2xl">{AD_OUTPUTS.title}</h2>
          <p className="mb-10 max-w-3xl text-sm text-muted md:text-base">{AD_OUTPUTS.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {AD_OUTPUTS.rows.map((row, i) => (
              <div
                key={row.section}
                className="toip-reveal rounded-xl border border-border-strong/60 bg-panel/30 p-5 md:p-6"
                style={revealStyle(i % 8, !motion)}
              >
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand">{row.section}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{row.contains}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-zz-b py-14 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-8 text-xl font-medium text-heading md:text-2xl">{AD_TECH_STACK.title}</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-panel/25">
            {AD_TECH_STACK.rows.map((row, i) => (
              <div
                key={row.layer}
                className={`toip-reveal grid grid-cols-1 gap-1 border-border px-4 py-4 sm:grid-cols-[minmax(8rem,12rem)_1fr] sm:gap-6 md:px-6 ${
                  i > 0 ? 'border-t' : ''
                }`}
                style={revealStyle(i, !motion)}
              >
                <div className="text-xs font-bold uppercase tracking-wide text-brand sm:pt-0.5">{row.layer}</div>
                <div className="text-sm text-muted">{row.technology}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-zz-a py-14 md:py-20">
        <div className="container">
          <h2 className="mb-10 text-xl font-medium text-heading md:text-2xl">{AD_USE_CASES.title}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AD_USE_CASES.cases.map((c, i) => (
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

      <section className="section-zz-b bg-panel/20 py-14 md:py-20">
        <div className="container">
          <p className="toip-reveal mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
            {AD_CLOSING.paragraph}
          </p>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-bg-inset p-8 md:p-10">
            <h2 className="mb-4 text-lg font-medium text-heading">OffSec Management Portal fit</h2>
            <p className="m-0 text-sm leading-relaxed text-muted">{pitch.portalFit}</p>
            <p className="mt-4 text-sm font-medium text-heading">{pitch.ctaLine}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft"
              >
                Talk to sales
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand"
              >
                View services portfolio
              </Link>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted/70">
            {AD_PAGE_META.confidentialNote}
          </p>
        </div>
      </section>

      {screenshotTour}
    </main>
  )
}
