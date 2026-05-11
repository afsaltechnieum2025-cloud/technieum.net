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
      <section className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid w-full min-w-0 items-start gap-10 lg:grid-cols-[1fr_min(100%,380px)] lg:items-center lg:gap-12 xl:gap-16">
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
              className="why-tn-snapshot-float relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none lg:justify-self-stretch"
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

      <ScrollRevealSection className="section-zz-b section-zz-wash-br relative w-full overflow-hidden pt-8 pb-14 md:pt-10 md:pb-20" ariaLabelledBy="why-points-heading">
        <div className="container relative z-10 min-w-0">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 id="why-points-heading" className="heading-scale-hero mb-3 text-pretty">
              What sets Technieum apart
            </h2>
            <p className="m-0 text-pretty text-sm leading-relaxed text-muted md:text-base">
              Depth across applications, cloud, identity, and AI—backed by platforms we operate ourselves, not a patchwork
              of outsourced scans.
            </p>
          </div>

          <ul className="m-0 grid w-full min-w-0 list-none grid-cols-1 justify-items-stretch gap-4 p-0 md:grid-cols-2 md:gap-5 lg:gap-6">
            {WHY_TECHNIEUM.map((item, index) => {
              const isFeatured = index === WHY_TECHNIEUM.length - 1
              const watermark = String(index + 1).padStart(2, '0')
              return (
                <li
                  key={item.title}
                  style={{ '--why-i': index } as CSSProperties}
                  className={`why-tn-card-wrap group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111111] shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-[#131313] hover:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.9)] ${
                    isFeatured ? 'md:col-span-2' : ''
                  }`}
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
                    className="pointer-events-none absolute right-1 top-0 select-none font-mono text-[3.25rem] font-bold leading-none tracking-tight text-heading/[0.035] sm:right-2 sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.5rem]"
                    aria-hidden
                  >
                    {watermark}
                  </span>
                  <div
                    className="pointer-events-none absolute left-0 top-1/2 h-[min(68%,11rem)] min-h-[3.25rem] max-h-[70%] w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand via-[rgb(245_158_11)] to-brand-strong shadow-[0_0_14px_rgb(232_93_4/0.4)]"
                    aria-hidden
                  />
                  <div
                    className={`relative z-[1] min-w-0 py-5 pl-6 pr-5 md:py-6 md:pl-7 md:pr-7 ${isFeatured ? 'md:mx-auto md:max-w-3xl' : ''}`}
                  >
                    <h3 className="m-0 mb-2 text-base font-bold leading-snug text-heading md:text-lg">
                      {item.title}
                    </h3>
                    <p className="m-0 text-sm leading-relaxed text-muted md:text-[0.9375rem] md:leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection
        className="section-zz-a section-zz-wash-tl border-y border-white/[0.06] bg-bg-inset py-14 md:py-20"
        ariaLabelledBy="why-operating-heading"
      >
        <div className="container relative z-10 min-w-0">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <p className="text-shimmer-brand mb-2 text-xs font-semibold tracking-wide md:text-sm">Operating model</p>
            <h2 id="why-operating-heading" className="heading-scale-hero mb-3 text-pretty">
              Portal, cadence, and traceability
            </h2>
            <p className="m-0 text-pretty text-sm leading-relaxed text-muted md:text-base">
              The same themes we reinforce across the home page—now in one place for procurement and technical sponsors.
            </p>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-4 p-0 md:grid-cols-2 md:gap-5 lg:gap-6">
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
        className="relative w-full overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20"
        ariaLabelledBy="why-trust-heading"
      >
        <div className="container relative z-10 min-w-0">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 id="why-trust-heading" className="heading-scale-hero mb-3 text-pretty">
              {STANDARDS_SHOWCASE.title}
            </h2>
            <p className="why-tn-band m-0 text-pretty text-sm leading-relaxed text-muted md:text-base" style={{ '--why-band': 0 } as CSSProperties}>
              {STANDARDS_SHOWCASE.lead}
            </p>
          </div>

          <div
            className="why-tn-band mx-auto w-full min-w-0"
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
            className="why-tn-band mx-auto mt-10 flex w-full min-w-0 max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:mt-12"
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
