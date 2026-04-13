import { Link } from 'react-router-dom'
import { CapabilitiesHubVisual } from '../components/home/CapabilitiesHubVisual'
import { CustomersBelievedSection } from '../components/home/CustomersBelievedSection'
import { OffsecPortalSlideshow } from '../components/home/OffsecPortalSlideshow'
import { OffensiveWorkflowVisual } from '../components/home/OffensiveWorkflowVisual'
import { HeroCyberVisual } from '../components/home/HeroCyberVisual'
import { ProjectCycleSection } from '../components/home/ProjectCycleSection'
import { getOffsecPortalSlides } from '../data/offsecPortalSlides'
import {
  HOME_CAPABILITIES_HUB,
  HOME_HERO,
  OFFENSIVE_WORKFLOW,
  OFFSEC_PORTAL,
  WHY_TECHNIEUM,
} from '../data/salesPitchSite'

const OFFSEC_PORTAL_SLIDES = getOffsecPortalSlides()

export function HomePage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      {/* Hero */}
      <section className="section-zz-a relative overflow-hidden bg-bg-inset py-16 md:py-24 lg:py-28">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="text-left">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{HOME_HERO.eyebrow}</p>
              <h1 className="heading-scale-hero mb-4 max-w-2xl">
                {HOME_HERO.title}
              </h1>
              <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{HOME_HERO.lead}</p>
              <p className="mb-8 max-w-2xl text-xs leading-relaxed text-muted md:text-sm">{HOME_HERO.sublead}</p>
              <div className="flex flex-wrap justify-start gap-3">
                <a
                  href={HOME_HERO.secondaryCta.href}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-7 md:text-sm"
                >
                  {HOME_HERO.secondaryCta.label}
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-border-strong md:px-7 md:text-sm"
                >
                  Services portfolio
                </Link>
              </div>
            </div>

            <HeroCyberVisual />
          </div>
        </div>
      </section>

      {/* Why Technieum — use .container like hero/portal so padding + max-width match everywhere (local vs live) */}
      <section className="section-zz-b w-full py-16 md:py-20" aria-labelledby="why-heading">
        <div className="container min-w-0">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 id="why-heading" className="heading-scale-hero mb-4">
              Why Technieum
            </h2>
            <p className="m-0 text-sm leading-relaxed text-muted md:text-base">
              Same scanners elsewhere. Here: in-house AI tooling, human validation, and 360-degree coverage per engagement.
            </p>
          </div>
          <ul className="grid min-w-0 w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {WHY_TECHNIEUM.map((item, index) => {
              const isLast = index === WHY_TECHNIEUM.length - 1
              return (
                <li
                  key={item.title}
                  className={`group rounded-lg border border-border/70 bg-panel/20 px-4 py-4 transition-colors hover:border-border-strong hover:bg-panel/35 md:px-5 md:py-5 ${isLast ? 'lg:col-span-3' : ''}`}
                >
                  <div
                    className={`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 ${isLast ? 'lg:mx-auto lg:max-w-4xl' : ''}`}
                  >
                    <span
                      className="row-span-2 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/15 text-xs font-bold tabular-nums text-brand md:h-8 md:w-8 md:text-sm"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <h3 className="min-w-0 text-sm font-medium leading-snug text-heading md:text-base">
                      {item.title}
                    </h3>
                    <p className="min-w-0 text-sm leading-relaxed text-muted md:text-base md:leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CustomersBelievedSection />

      {/* OffSec portal */}
      <section className="section-zz-a py-16 md:py-20" aria-labelledby="portal-heading">
        <div className="container">
          <div
            className={`grid gap-10 lg:items-start ${OFFSEC_PORTAL_SLIDES.length > 0 ? 'lg:grid-cols-2' : ''}`}
          >
            <div>
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
                {OFFSEC_PORTAL.eyebrow}
              </p>
              <h2
                id="portal-heading"
                className="heading-scale-hero mb-5 max-w-3xl text-pretty text-left"
              >
                {OFFSEC_PORTAL.headline}
              </h2>
              <p className="mb-8 max-w-3xl text-pretty text-sm leading-relaxed text-muted md:text-base lg:mb-0">
                {OFFSEC_PORTAL.body}
              </p>
              <ul className="m-0 mt-8 space-y-4 p-0 list-none lg:mt-10">
                {OFFSEC_PORTAL.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {OFFSEC_PORTAL_SLIDES.length > 0 ? (
              <div className="lg:sticky lg:top-28">
                <OffsecPortalSlideshow slides={OFFSEC_PORTAL_SLIDES} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="offensive-workflow"
        className="section-zz-b bg-bg-inset py-10 md:py-14"
        aria-labelledby="workflow-heading"
      >
        <div className="container">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
              {OFFENSIVE_WORKFLOW.eyebrow}
            </p>
            <h2 id="workflow-heading" className="heading-scale-hero mb-5 text-pretty">
              {OFFENSIVE_WORKFLOW.meetHeadline}
            </h2>
            <p className="m-0 text-pretty text-sm leading-relaxed text-muted md:text-base">
              {OFFENSIVE_WORKFLOW.intro}
            </p>
          </div>

          <div className="overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
            <div className="min-w-[640px] md:min-w-0">
              <OffensiveWorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      <ProjectCycleSection />

      {/* Coverage hub: copy + interactive capability diagram (TOIP, ASM, LLM, SAST, AD, Portal) */}
      <section
        className="section-zz-b section-zz-allow-overflow py-16 md:py-20"
        aria-labelledby="capabilities-hub-heading"
      >
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
                {HOME_CAPABILITIES_HUB.eyebrow}
              </p>
              <h2
                id="capabilities-hub-heading"
                className="heading-scale-hero mb-5 max-w-xl text-pretty"
              >
                {HOME_CAPABILITIES_HUB.headline}
              </h2>
              <p className="mb-8 max-w-xl text-pretty text-sm leading-relaxed text-muted md:text-base">
                {HOME_CAPABILITIES_HUB.body}
              </p>
              <Link
                to={HOME_CAPABILITIES_HUB.primaryCta.to}
                className="btn-brand-lively inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft sm:gap-2 sm:px-7 sm:py-3 sm:text-sm"
              >
                {HOME_CAPABILITIES_HUB.primaryCta.label}
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
            </div>
            <div className="flex min-w-0 w-full justify-center overflow-visible">
              <div className="w-full max-w-[min(100%,460px)] overflow-visible">
                <CapabilitiesHubVisual />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
