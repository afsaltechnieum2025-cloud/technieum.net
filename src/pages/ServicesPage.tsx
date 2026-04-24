import { ServicesPageHeroGraphic } from '../components/services/ServicesPageHeroGraphic'
import { ServiceCatalogRow } from '../components/services/ServiceCatalogRow'
import { SERVICE_TOPICS } from '../data/serviceDocuments'
import { SERVICES_CATALOG_INTRO, SERVICE_CATALOG_ROW_META } from '../data/servicesCatalogRowContent'

export function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset py-12 md:py-16 lg:py-20">
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div className="min-w-0 text-left">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">Services</p>
              <h1 className="heading-scale-hero mb-4 max-w-2xl">
                Offensive security offerings
              </h1>
              <p className="m-0 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Every service opens a program hub: coverage pillars, delivery rhythm, portal workflow, and a datasheet PDF
                you can download. Lanes with artwork use their service hero illustration in the hub and on the program page.
                Use the briefs for internal sharing; formal scoping stays on a call with your team.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Every service opens a program hub: coverage pillars, delivery rhythm, portal workflow, and a datasheet PDF
                you can download. Lanes with artwork use their service hero illustration in the hub and on the program page.
                Use the briefs for internal sharing; formal scoping stays on a call with your team.
              </p>
            </div>

            <div className="min-w-0 w-full overflow-visible">
              <div className="mx-auto w-full max-w-[min(100%,680px)] lg:ml-auto lg:mr-0">
                <ServicesPageHeroGraphic />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-zz-b section-zz-wash-br services-catalog-section relative overflow-hidden py-8 md:py-10 lg:py-12"
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
    </main>
  )
}
