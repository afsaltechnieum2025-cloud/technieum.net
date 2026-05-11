import { Link } from 'react-router-dom'
import { CapabilitiesHubInPortalFrame } from '../components/home/CapabilitiesHubInPortalFrame'
import { HomeCapabilitiesCoverageVisual } from '../components/home/HomeCapabilitiesCoverageVisual'
import { CustomersBelievedSection } from '../components/home/CustomersBelievedSection'
import { OffensiveWorkflowVisual } from '../components/home/OffensiveWorkflowVisual'
import { ProjectCycleSection } from '../components/home/ProjectCycleSection'
import {
  HOME_CAPABILITIES_HUB,
  OFFENSIVE_WORKFLOW,
  OFFSEC_PORTAL,
} from '../data/salesPitchSite'

export function HomePage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      {/* Coverage hub — primary headline */}
      <section
        className="section-zz-b section-zz-allow-overflow section-zz-wash-tl pt-16 pb-10 md:pt-20 md:pb-12"
        aria-labelledby="capabilities-hub-heading"
      >
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
                {HOME_CAPABILITIES_HUB.eyebrow}
              </p>
              <h1
                id="capabilities-hub-heading"
                className="heading-scale-hero mb-5 max-w-xl text-pretty"
              >
                {HOME_CAPABILITIES_HUB.headline}
              </h1>
              <p className="mb-3 max-w-xl text-pretty text-sm leading-relaxed text-muted md:text-base">
                {HOME_CAPABILITIES_HUB.body}
              </p>
              <p className="mb-8 max-w-xl text-pretty text-xs leading-relaxed text-muted md:text-sm">
                {HOME_CAPABILITIES_HUB.sublead}
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
              <div className="w-full max-w-xl min-w-0">
                <HomeCapabilitiesCoverageVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OffSec portal */}
      <section className="section-zz-a section-zz-wash-br py-10 md:py-12" aria-labelledby="portal-heading">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="min-w-0 lg:sticky lg:top-28">
              <CapabilitiesHubInPortalFrame variant="products" />
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
              <ul className="m-0 mt-6 space-y-4 p-0 list-none lg:mt-8">
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
        className="section-zz-b section-zz-wash-tl bg-bg-inset py-10 md:py-12"
        aria-labelledby="workflow-heading"
      >
        <div className="container">
          <div className="mb-6 w-full min-w-0 md:mb-8">
            <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
              {OFFENSIVE_WORKFLOW.eyebrow}
            </p>
            <h2 id="workflow-heading" className="heading-scale-hero mb-5 w-full min-w-0 text-pretty">
              {OFFENSIVE_WORKFLOW.meetHeadline}
            </h2>
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
              <p className="m-0 text-pretty text-sm leading-relaxed text-muted md:text-base lg:col-span-7 lg:min-w-0 xl:col-span-6">
                {OFFENSIVE_WORKFLOW.intro}
              </p>
              <ul
                className="m-0 flex list-none flex-wrap gap-2 p-0 lg:col-span-5 lg:flex-col lg:flex-nowrap lg:items-stretch lg:gap-2.5 lg:self-start xl:col-span-6"
                aria-label="Engine highlights"
              >
                {OFFENSIVE_WORKFLOW.highlights.map((text) => (
                  <li
                    key={text}
                    className="min-w-0 max-w-full rounded-full border border-brand/45 bg-[color-mix(in_oklab,var(--color-brand)_14%,var(--color-panel))] px-3 py-1.5 text-center text-xs font-semibold tracking-tight text-heading shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] md:px-3.5 md:text-[0.8125rem] lg:w-full transition-[border-color,background-color] duration-200 hover:border-brand/70 hover:bg-[color-mix(in_oklab,var(--color-brand)_20%,var(--color-panel))]"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full min-w-0 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
            <div className="w-full min-w-[640px] md:min-w-0">
              <OffensiveWorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      <ProjectCycleSection />

      <CustomersBelievedSection />
    </main>
  )
}
