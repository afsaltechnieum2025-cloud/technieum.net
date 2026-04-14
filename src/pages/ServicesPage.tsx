import { CapabilitiesHubVisual } from '../components/home/CapabilitiesHubVisual'
import { ServiceCatalogRow } from '../components/services/ServiceCatalogRow'
import { SERVICE_TOPICS } from '../data/serviceDocuments'
import { SERVICES_CATALOG_INTRO, SERVICE_CATALOG_ROW_META } from '../data/servicesCatalogRowContent'
import { STANDARDS_SHOWCASE } from '../data/salesPitchSite'

export function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset py-12 md:py-16 lg:py-20">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div className="order-2 flex min-w-0 w-full justify-center overflow-visible lg:order-1 lg:justify-start">
              <div className="w-full max-w-[min(100%,520px)] overflow-visible">
                <CapabilitiesHubVisual variant="services" />
              </div>
            </div>

            <div className="order-1 text-left lg:order-2">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">Services</p>
              <h1 className="heading-scale-hero mb-4 max-w-2xl">
                Offensive security offerings
              </h1>
              <p className="m-0 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Every service opens a program hub: coverage pillars, delivery rhythm, portal workflow, and a datasheet PDF
                you can download. Infrastructure network uses a tailored visual; the rest share the pipeline
                layout. Use the briefs for internal sharing; formal scoping stays on a call with your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-zz-b services-catalog-section relative overflow-hidden py-8 md:py-10 lg:py-12"
        aria-labelledby="service-topics-heading"
      >
        <div className="container">
          <header className="mb-6 max-w-4xl md:mb-8">
            <h2
              id="service-topics-heading"
              className="heading-scale-hero mb-3 max-w-3xl text-pretty md:mb-4"
            >
              {SERVICES_CATALOG_INTRO.title}
            </h2>
            <p className="mb-2 max-w-3xl text-sm font-medium leading-relaxed text-zinc-200 md:text-base">
              {SERVICES_CATALOG_INTRO.lead}
            </p>
            <p className="m-0 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{SERVICES_CATALOG_INTRO.sub}</p>
          </header>

          <div className="flex flex-col">
            {SERVICE_TOPICS.map((topic, index) => {
              const meta = SERVICE_CATALOG_ROW_META[index]
              if (!meta || meta.slug !== topic.slug) {
                throw new Error(
                  `servicesCatalogRowContent out of sync with SERVICE_TOPICS at index ${index} (${topic.slug})`,
                )
              }
              return <ServiceCatalogRow key={topic.slug} topic={topic} meta={meta} index={index} />
            })}
          </div>
        </div>
      </section>

      <section className="section-zz-a relative overflow-hidden py-10 md:py-12 lg:py-14">
        <div className="container max-w-5xl">
          <h2 className="mb-3 max-w-3xl text-xl font-medium leading-snug tracking-tight text-heading md:mb-4 md:text-2xl">
            {STANDARDS_SHOWCASE.title}
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted md:mb-8 md:text-base">{STANDARDS_SHOWCASE.lead}</p>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="h-px w-8 bg-brand/70" aria-hidden />
                {STANDARDS_SHOWCASE.frameworksLabel}
              </p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {STANDARDS_SHOWCASE.frameworks.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-full border border-border/80 bg-panel/25 px-3.5 py-1.5 text-xs font-medium text-heading md:text-[0.8125rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="h-px w-8 bg-brand/70" aria-hidden />
                {STANDARDS_SHOWCASE.teamLabel}
              </p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {STANDARDS_SHOWCASE.teamCerts.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-full border border-border/80 bg-panel/25 px-3.5 py-1.5 text-xs font-medium text-heading md:text-[0.8125rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted md:mt-8 md:text-base">{STANDARDS_SHOWCASE.closing}</p>
        </div>
      </section>
    </main>
  )
}
