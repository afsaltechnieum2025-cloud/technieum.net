import { useImgPreload } from '../hooks/useImgPreload'
import { ServicesPageHeroGraphic } from '../components/services/ServicesPageHeroGraphic'
import { ServiceCatalogRow } from '../components/services/ServiceCatalogRow'
import { SERVICE_TOPICS } from '../data/serviceDocuments'
import { SERVICES_CATALOG_INTRO, SERVICE_CATALOG_ROW_META } from '../data/servicesCatalogRowContent'

export function ServicesPage() {
  useImgPreload('/png/Servicemain.png', 'preload-services-catalog-hero')

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset py-10 md:py-14 lg:py-16">
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="min-w-0 lg:max-w-xl lg:pr-4">
              <p className="text-shimmer-brand mb-2 text-xs font-semibold tracking-wide md:text-sm">Services</p>
              <h1 className="heading-scale-hero mb-3 max-w-2xl text-pretty md:mb-4">Offensive security offerings</h1>
              <p className="m-0 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Every service opens a program hub: coverage pillars, delivery rhythm, portal workflow, and a datasheet PDF
                you can download. Lanes with artwork use their service hero illustration in the hub and on the program page.
                Use the briefs for internal sharing; formal scoping stays on a call with your team.
              </p>
            </div>

            <div className="flex min-w-0 w-full justify-center">
              <div className="w-full max-w-[min(100%,480px)]">
                <ServicesPageHeroGraphic />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-zz-b section-zz-wash-br services-catalog-section relative overflow-hidden py-6 md:py-8 lg:py-10"
        aria-labelledby="service-topics-heading"
      >
        <div className="container">
          <header className="mb-8 max-w-3xl md:mb-10" aria-describedby="service-topics-intro">
            <h2
              id="service-topics-heading"
              className="heading-scale-hero mb-2 text-pretty md:mb-3"
            >
              {SERVICES_CATALOG_INTRO.title}
            </h2>
            <div id="service-topics-intro" className="space-y-2">
              <p className="m-0 text-sm font-medium leading-relaxed text-zinc-200 md:text-base">
                {SERVICES_CATALOG_INTRO.lead}
              </p>
              <p className="m-0 text-sm leading-relaxed text-muted md:text-base">{SERVICES_CATALOG_INTRO.sub}</p>
            </div>
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
