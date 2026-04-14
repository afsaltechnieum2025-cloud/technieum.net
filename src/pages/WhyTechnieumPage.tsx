import type { CSSProperties, ReactNode } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HOME_HERO,
  OFFSEC_PORTAL,
  PROJECT_CYCLE,
  STANDARDS_SHOWCASE,
  WHY_TECHNIEUM,
  WHY_TECHNIEUM_PAGE,
  WHY_TECHNIEUM_PORTAL_FOCUS,
  WHY_TECHNIEUM_SNAPSHOT,
} from '../data/salesPitchSite'

function ScrollRevealSection({
  className,
  children,
  ariaLabelledBy,
}: {
  className: string
  children: ReactNode
  ariaLabelledBy?: string
}) {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  const setSectionRef = useCallback((node: HTMLElement | null) => {
    setRootEl(node)
  }, [])

  useEffect(() => {
    if (active) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      queueMicrotask(() => setActive(true))
      return
    }
    if (!rootEl) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -7% 0px' },
    )
    obs.observe(rootEl)
    return () => obs.disconnect()
  }, [active, rootEl])

  return (
    <section
      ref={setSectionRef}
      className={`${className}${active ? ' why-tn-section--active' : ''}`}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  )
}

function CheckMini({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'mt-0.5 h-4 w-4 shrink-0 text-brand'}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhyTechnieumPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="mx-auto grid max-w-site items-start gap-12 lg:grid-cols-[1fr_min(100%,380px)] lg:gap-16 xl:gap-20">
            <div className="min-w-0 text-left">
              <p
                className="text-shimmer-brand why-tn-hero-item mb-3 text-xs font-semibold tracking-wide md:text-sm"
                style={{ animationDelay: '0ms' }}
              >
                {WHY_TECHNIEUM_PAGE.eyebrow}
              </p>
              <h1
                className="heading-scale-hero why-tn-hero-item mb-5 max-w-2xl text-pretty"
                style={{ animationDelay: '70ms' }}
              >
                {WHY_TECHNIEUM_PAGE.headline}
              </h1>
              <p
                className="why-tn-hero-item mb-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base"
                style={{ animationDelay: '120ms' }}
              >
                {WHY_TECHNIEUM_PAGE.lead}
              </p>
              <p
                className="why-tn-hero-item mb-8 max-w-2xl text-pretty text-xs leading-relaxed text-muted md:text-sm"
                style={{ animationDelay: '165ms' }}
              >
                {WHY_TECHNIEUM_PAGE.subLead}
              </p>
              <div
                className="why-tn-hero-item flex flex-wrap items-center gap-3"
                style={{ animationDelay: '210ms' }}
              >
                <Link
                  to={HOME_HERO.primaryCta.to}
                  className="btn-brand-lively inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft sm:gap-2 sm:px-7 sm:py-3 sm:text-sm"
                >
                  {HOME_HERO.primaryCta.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
                    <path
                      d="M3 7h8M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  to={HOME_HERO.tertiaryCta.to}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-border-strong/80 bg-panel/30 px-5 py-2.5 text-xs font-semibold tracking-wide text-heading no-underline transition-colors hover:border-border-strong hover:bg-panel/50 sm:px-6 sm:text-sm"
                >
                  {HOME_HERO.tertiaryCta.label}
                </Link>
              </div>
            </div>

            <aside
              className="why-tn-snapshot-float relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
              aria-label={WHY_TECHNIEUM_SNAPSHOT.title}
            >
              <div className="rounded-2xl border border-border/80 bg-[linear-gradient(165deg,rgb(14_14_14)_0%,rgb(8_8_8)_50%,rgb(5_5_5)_100%)] p-6 shadow-[0_28px_64px_-32px_rgba(0,0,0,0.9),inset_0_1px_0_rgb(255_255_255/0.05)] md:p-7">
                <p className="m-0 mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-zinc-500">
                  {WHY_TECHNIEUM_SNAPSHOT.title}
                </p>
                <p className="m-0 mb-5 text-sm font-medium leading-snug text-heading">
                  Proof you can repeat in every steering committee.
                </p>
                <ul className="m-0 flex list-none flex-col gap-4 p-0">
                  {WHY_TECHNIEUM_SNAPSHOT.points.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <CheckMini />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="m-0 text-xs leading-relaxed text-zinc-500">
                    Explore the{' '}
                    <Link to="/#portal-heading" className="font-semibold text-brand no-underline hover:text-brand-strong">
                      OffSec Management Portal
                    </Link>{' '}
                    and{' '}
                    <Link to="/#workflow-heading" className="font-semibold text-brand no-underline hover:text-brand-strong">
                      offensive engine
                    </Link>{' '}
                    on the home page.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ScrollRevealSection className="section-zz-b w-full pt-8 pb-14 md:pt-10 md:pb-20" ariaLabelledBy="why-points-heading">
        <div className="container min-w-0">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 id="why-points-heading" className="heading-scale-hero mb-3 text-pretty">
              What sets Technieum apart
            </h2>
            <p className="m-0 text-pretty text-sm leading-relaxed text-muted md:text-base">
              Depth across applications, cloud, identity, and AI—backed by platforms we operate ourselves, not a patchwork
              of outsourced scans.
            </p>
          </div>

          <ul className="m-0 grid min-w-0 list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {WHY_TECHNIEUM.map((item, index) => {
              const isFeatured = index === WHY_TECHNIEUM.length - 1
              return (
                <li
                  key={item.title}
                  style={{ '--why-i': index } as CSSProperties}
                  className={`why-tn-card-wrap group rounded-xl border bg-panel/20 px-5 py-5 md:px-6 md:py-6 ${
                    isFeatured
                      ? 'border-brand/35 bg-[linear-gradient(180deg,rgb(232_93_4/0.07)_0%,transparent_42%)] shadow-[0_0_0_1px_rgb(232_93_4/0.12)] sm:col-span-2 lg:col-span-3'
                      : 'border-border/70 hover:border-border-strong hover:bg-panel/35 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`flex gap-4 ${isFeatured ? 'mx-auto max-w-3xl lg:flex-row lg:items-start lg:gap-6' : ''}`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold tabular-nums ${
                        isFeatured
                          ? 'bg-brand/25 text-brand'
                          : 'bg-brand/15 text-brand group-hover:bg-brand/20'
                      }`}
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="m-0 mb-2 text-base font-semibold leading-snug text-heading md:text-lg">
                        {item.title}
                      </h3>
                      <p className="m-0 text-sm leading-relaxed text-muted md:text-[0.9375rem] md:leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection
        className="section-zz-a border-y border-white/[0.06] bg-bg-inset py-14 md:py-20"
        ariaLabelledBy="why-operating-heading"
      >
        <div className="container min-w-0">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <p className="text-shimmer-brand mb-2 text-xs font-semibold tracking-wide md:text-sm">Operating model</p>
            <h2 id="why-operating-heading" className="heading-scale-hero mb-3 text-pretty">
              Portal, cadence, and traceability
            </h2>
            <p className="m-0 text-pretty text-sm text-muted md:text-base">
              The same themes we reinforce across the home page—now in one place for procurement and technical sponsors.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
            <div
              className="why-tn-band rounded-xl border border-border/75 bg-panel/25 p-6 md:p-7"
              style={{ '--why-band': 0 } as CSSProperties}
            >
              <h3 className="m-0 mb-2 text-sm font-bold uppercase tracking-wider text-zinc-500">
                {OFFSEC_PORTAL.title}
              </h3>
              <p className="m-0 mb-5 text-sm leading-relaxed text-muted">{OFFSEC_PORTAL.body}</p>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {WHY_TECHNIEUM_PORTAL_FOCUS.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="why-tn-band rounded-xl border border-border/75 bg-panel/25 p-6 md:p-7"
              style={{ '--why-band': 1 } as CSSProperties}
            >
              <h3 className="m-0 mb-2 text-sm font-bold uppercase tracking-wider text-zinc-500">Project cadence</h3>
              <p className="m-0 mb-5 text-sm leading-relaxed text-muted">{PROJECT_CYCLE.intro}</p>
              <p className="m-0 text-xs leading-relaxed text-zinc-500">
                See the full{' '}
                <Link to="/#cycle-heading" className="font-semibold text-brand no-underline hover:text-brand-strong">
                  eight-step lifecycle
                </Link>{' '}
                on the home page—from scoping through AI-assisted remediation and retest.
              </p>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection
        className="section-zz-b w-full pb-16 pt-14 md:pb-24 md:pt-20"
        ariaLabelledBy="why-trust-heading"
      >
        <div className="container min-w-0">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="why-trust-heading" className="heading-scale-hero mb-3 text-pretty">
              {STANDARDS_SHOWCASE.title}
            </h2>
            <p className="why-tn-band m-0 text-pretty text-sm leading-relaxed text-muted md:text-base" style={{ '--why-band': 0 } as CSSProperties}>
              {STANDARDS_SHOWCASE.lead}
            </p>
          </div>

          <div
            className="why-tn-band mx-auto mt-8 max-w-4xl md:mt-10"
            style={{ '--why-band': 1 } as CSSProperties}
          >
            <p className="m-0 mb-2 text-center text-[0.6875rem] font-bold uppercase tracking-wider text-zinc-500">
              {STANDARDS_SHOWCASE.frameworksLabel}
            </p>
            <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
              {STANDARDS_SHOWCASE.frameworks.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-border-strong/50 bg-[color-mix(in_oklab,var(--color-panel)_82%,transparent)] px-3 py-1.5 text-xs font-semibold text-heading"
                >
                  {label}
                </li>
              ))}
            </ul>
            <p className="m-0 mb-2 mt-8 text-center text-[0.6875rem] font-bold uppercase tracking-wider text-zinc-500">
              {STANDARDS_SHOWCASE.teamLabel}
            </p>
            <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
              {STANDARDS_SHOWCASE.teamCerts.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-border/60 bg-panel/30 px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {label}
                </li>
              ))}
            </ul>
            <p className="why-tn-band m-0 mt-8 text-center text-sm text-muted" style={{ '--why-band': 2 } as CSSProperties}>
              {STANDARDS_SHOWCASE.closing}
            </p>
          </div>

          <div
            className="why-tn-band mx-auto mt-12 flex max-w-lg flex-col items-stretch justify-center gap-3 sm:mt-14 sm:flex-row sm:gap-4"
            style={{ '--why-band': 3 } as CSSProperties}
          >
            <Link
              to={HOME_HERO.primaryCta.to}
              className="btn-brand-lively inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-center text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft sm:text-sm"
            >
              {HOME_HERO.primaryCta.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
                <path
                  d="M3 7h8M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-border-strong/80 bg-panel/30 px-6 py-2.5 text-center text-xs font-semibold tracking-wide text-heading no-underline transition-colors hover:border-border-strong hover:bg-panel/50 sm:text-sm"
            >
              View services catalog
            </Link>
          </div>
        </div>
      </ScrollRevealSection>
    </main>
  )
}
