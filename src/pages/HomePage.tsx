import { Link } from 'react-router-dom'
import { CapabilityLogo } from '../components/home/CapabilityLogo'
import { CustomersBelievedSection } from '../components/home/CustomersBelievedSection'
import { OffsecPortalSlideshow } from '../components/home/OffsecPortalSlideshow'
import { OffensiveWorkflowVisual } from '../components/home/OffensiveWorkflowVisual'
import { HeroCyberVisual } from '../components/home/HeroCyberVisual'
import { ProjectCycleSection } from '../components/home/ProjectCycleSection'
import { getOffsecPortalSlides } from '../data/offsecPortalSlides'
import { PRODUCT_DOCUMENTS, productPath } from '../data/productDocuments'
import {
  CONTACT_SALES,
  HOME_HERO,
  OFFENSIVE_WORKFLOW,
  OFFSEC_PORTAL,
  SALES_PITCH_PDF,
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

      {/* Why Technieum — same max width as .container but no horizontal padding (section-only) */}
      <section className="section-zz-b w-full py-16 md:py-20" aria-labelledby="why-heading">
        <div className="mx-auto box-border w-full min-w-0 max-w-site px-0">
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
                    <h3 className="min-w-0 text-base font-medium leading-snug text-heading md:text-lg">
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
              <h2 id="portal-heading" className="mb-3 text-2xl font-medium text-heading md:text-3xl">
                {OFFSEC_PORTAL.title}
              </h2>
              <p className="mb-6 text-lg text-brand">{OFFSEC_PORTAL.subtitle}</p>
              <p className="mb-8 text-sm leading-relaxed text-muted lg:mb-0">
                The OffSec Management Portal is the coordination layer across testers, tooling, and reporting. It is
                how Technieum sustains daily transparency without burying teams in email threads.
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
          <div className="mb-5 max-w-2xl md:mb-6">
            <h2 id="workflow-heading" className="mb-2 text-xl font-medium text-heading md:text-2xl">
              {OFFENSIVE_WORKFLOW.title}
            </h2>
            <p className="mb-2 text-sm font-medium text-brand md:text-base">{OFFENSIVE_WORKFLOW.subtitle}</p>
            <p className="m-0 text-xs leading-relaxed text-muted md:text-sm">{OFFENSIVE_WORKFLOW.intro}</p>
          </div>

          <div className="overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
            <div className="min-w-[640px] md:min-w-0">
              <OffensiveWorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      <ProjectCycleSection />

      {/* Capability snapshot */}
      <section className="section-zz-b py-16 md:py-20" aria-labelledby="services-glance-heading">
        <div className="container">
          <h2 id="services-glance-heading" className="mb-4 text-2xl font-medium text-heading md:text-3xl">
            Services at a glance
          </h2>
          <p className="mb-8 max-w-3xl text-sm text-muted md:mb-10 md:text-base">
            {PRODUCT_DOCUMENTS.length} capability areas with technical PDFs on request. Hover a card for emphasis,
            then open it for the full narrative, metrics, and deeper explanation. AI-SAST covers static analysis and
            dependency risk (SCA) as one delivery backlog.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_DOCUMENTS.map((p) => (
              <Link
                key={p.id}
                to={productPath(p.id)}
                className="group flex h-full flex-col rounded-xl border border-border bg-panel/20 p-4 no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-panel/40 hover:shadow-[0_18px_48px_-18px_rgba(232,93,4,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page md:p-5"
              >
                <div className="flex gap-3.5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/[0.09] transition-colors group-hover:border-brand/55 group-hover:bg-brand/[0.14]">
                    <CapabilityLogo id={p.id} className="h-10 w-10" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-brand md:text-xs">{p.name}</p>
                    <p className="mt-0.5 text-sm font-medium leading-snug text-heading">{p.subtitle}</p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.glanceDescription}</p>
                <p className="mt-2 border-l-2 border-brand/40 pl-2.5 text-xs leading-snug text-muted/90">{p.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform duration-200 group-hover:translate-x-0.5">
                  View full overview
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-px shrink-0">
                    <path
                      d="M3 7h8M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-zz-b bg-bg-inset py-14 md:py-16">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="mb-3 text-xl font-medium text-heading md:text-2xl">
              Ready for milestone-driven offensive security?
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Contact {CONTACT_SALES.offensive.name} for technical programs or {CONTACT_SALES.commercial.name} for
              commercial discussions. Download the latest sales pitch for stakeholder circulation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-brand-lively inline-flex shrink-0 items-center justify-center rounded-full border border-brand bg-brand px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-90"
            >
              Contact us
            </Link>
            <a
              href={SALES_PITCH_PDF}
              download
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-border-strong px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand"
            >
              Download sales pitch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
