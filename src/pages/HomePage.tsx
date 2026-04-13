import { Link } from 'react-router-dom'
import { CapabilitiesHubVisual } from '../components/home/CapabilitiesHubVisual'
import { CustomersBelievedSection } from '../components/home/CustomersBelievedSection'
import { OffsecPortalIllustration } from '../components/home/OffsecPortalIllustration'
import { OffensiveWorkflowVisual } from '../components/home/OffensiveWorkflowVisual'
import { HeroCyberVisual } from '../components/home/HeroCyberVisual'
import { ProjectCycleSection } from '../components/home/ProjectCycleSection'
import {
  HOME_CAPABILITIES_HUB,
  HOME_HERO,
  OFFENSIVE_WORKFLOW,
  OFFSEC_PORTAL,
} from '../data/salesPitchSite'

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
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-brand hover:bg-brand/12 hover:text-brand hover:shadow-[0_0_28px_rgb(232_93_4/0.18)] md:px-7 md:text-sm"
                >
                  Services portfolio
                </Link>
              </div>
            </div>

            <HeroCyberVisual />
          </div>
        </div>
      </section>

      {/* OffSec portal — tight top: hero already has bottom padding; avoid double vertical gap */}
      <section className="section-zz-a pt-6 pb-16 md:pb-20" aria-labelledby="portal-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="min-w-0 lg:sticky lg:top-28">
              <OffsecPortalIllustration />
            </div>
            <div className="min-w-0">
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

      <CustomersBelievedSection />
    </main>
  )
}
