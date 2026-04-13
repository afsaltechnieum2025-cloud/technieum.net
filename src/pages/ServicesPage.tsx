import { Link } from 'react-router-dom'
import { ServicesHeroVisual } from '../components/home/ServicesHeroVisual'
import { SERVICE_TOPICS, serviceTopicPdfHref } from '../data/serviceDocuments'
import { CONTACT_SALES, SALES_PITCH_PDF, STANDARDS_SHOWCASE } from '../data/salesPitchSite'

export function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset py-16 md:py-24 lg:py-28">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="order-2 flex w-full justify-center lg:order-1 lg:justify-start">
              <ServicesHeroVisual />
            </div>

            <div className="order-1 text-left lg:order-2">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">Services</p>
              <h1 className="mb-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight text-heading sm:text-3xl lg:text-4xl">
                Technieum offensive security offerings
              </h1>
              <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Every service opens a program hub: coverage pillars, delivery rhythm, portal workflow, and a datasheet PDF
                you can download. Master Offsec and Infrastructure network use tailored visuals; the rest share the pipeline
                layout. Use the briefs for internal sharing; formal scoping stays on a call with your team.
              </p>
              <div className="flex flex-wrap justify-start gap-3">
                <a
                  href={SALES_PITCH_PDF}
                  download
                  className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-7 md:text-sm"
                >
                  Download sales pitch (PDF)
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-7 md:text-sm"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-catalog-section py-12 md:py-16" aria-labelledby="service-topics-heading">
        <div className="container max-w-6xl">
          <div className="mb-6 md:mb-8">
            <h2
              id="service-topics-heading"
              className="mb-2 text-2xl font-semibold tracking-tight text-heading md:text-3xl"
            >
              Technieum services
            </h2>
            <p className="mb-3 max-w-3xl text-base font-medium leading-snug text-zinc-200 md:text-lg">
              Offensive coverage from master programs through cloud, AI, OT, simulations, consulting, and WFH: one catalog,
              one delivery standard, sheets you can hand to risk and procurement.
            </p>
            <p className="mb-6 max-w-3xl text-sm leading-snug text-muted md:text-base">
              Open a tile for the program hub, then grab the PDF from the page when you need the contract-grade datasheet.
              Skim the summary on the catalog; deep detail lives on each hub and in the PDF.
            </p>

            <div
              className="grid gap-4 border-y border-border/70 py-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border/60"
              aria-label="How we deliver"
            >
              {[
                { k: 'Operators', v: 'Senior testers on every stream, not scan-and-dash reports.' },
                { k: 'Signal', v: 'AI speeds work; humans validate what hits remediation and audit.' },
                { k: 'Rhythm', v: 'Shared scoring, portal visibility, and reporting leadership can defend.' },
              ].map((row, i) => (
                <div
                  key={row.k}
                  className={`min-w-0 sm:px-4 ${i === 0 ? 'sm:pl-0' : ''} ${i === 2 ? 'sm:pr-0' : ''}`}
                >
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand">{row.k}</p>
                  <p className="m-0 text-xs leading-snug text-zinc-400 md:text-[13px]">{row.v}</p>
                </div>
              ))}
            </div>
          </div>

          <ul className="m-0 grid list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {SERVICE_TOPICS.map((topic, index) => {
              const pdf = serviceTopicPdfHref(topic)
              const n = String(index + 1).padStart(2, '0')
              const cardClass =
                'services-category-card group relative flex h-full min-h-0 flex-col overflow-hidden no-underline outline-none transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_20px_48px_-22px_rgba(232,93,4,0.18)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page'
              const body = (
                <>
                  <span
                    className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-brand via-brand/70 to-brand/30 opacity-80 transition-[width,opacity] duration-200 group-hover:w-1 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="services-category-card-inner flex h-full min-h-[11.5rem] flex-col pl-3.5 pr-4 pb-4 pt-4 md:min-h-[12rem] md:pl-4 md:pr-5 md:pb-4 md:pt-4">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-semibold tabular-nums tracking-widest text-brand/85 md:text-[11px]">
                        {n}
                      </span>
                      <span className="rounded-full border border-border/80 bg-black/30 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted">
                        {topic.detailPath ? 'Program hub' : 'Datasheet'}
                      </span>
                    </div>
                    <h3 className="mb-1.5 text-[15px] font-bold leading-snug tracking-tight text-heading transition-colors group-hover:text-brand md:text-base">
                      {topic.title}
                    </h3>
                    <p className="mb-0 flex-1 text-[13px] leading-snug text-muted md:text-sm">{topic.summary}</p>
                    <div className="mt-3 flex items-center gap-1.5 border-t border-border/50 pt-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand/90 transition-transform duration-200 group-hover:translate-x-0.5 md:text-xs">
                      <span>{topic.detailPath ? 'Open hub' : 'Scope pack'}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
                        <path
                          d="M3 7h7M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              )
              return (
                <li key={topic.slug} id={topic.slug} className="scroll-mt-28">
                  {topic.detailPath ? (
                    <Link
                      to={topic.detailPath}
                      className={cardClass}
                      aria-label={`${topic.title}: open program overview`}
                    >
                      {body}
                    </Link>
                  ) : (
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                      aria-label={`${topic.title}: open datasheet PDF in new tab`}
                    >
                      {body}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section-zz-a py-14 md:py-16">
        <div className="container max-w-5xl">
          <h2 className="mb-4 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-heading md:text-3xl">
            {STANDARDS_SHOWCASE.title}
          </h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{STANDARDS_SHOWCASE.lead}</p>

          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="h-px w-8 bg-brand/70" aria-hidden />
                {STANDARDS_SHOWCASE.frameworksLabel}
              </p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {STANDARDS_SHOWCASE.frameworks.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-full border border-border/80 bg-panel/25 px-3.5 py-1.5 text-xs font-medium text-heading md:text-[13px]">
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
                    <span className="inline-flex items-center rounded-full border border-border/80 bg-panel/25 px-3.5 py-1.5 text-xs font-medium text-heading md:text-[13px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{STANDARDS_SHOWCASE.closing}</p>
        </div>
      </section>

      <section className="section-zz-b py-14 md:py-16">
        <div className="container flex flex-col items-start justify-between gap-8 rounded-2xl border border-border bg-panel/20 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="mb-2 text-xl font-medium text-heading">Scope your next program</h2>
            <p className="m-0 max-w-xl text-sm text-muted">
              Reach {CONTACT_SALES.offensive.name} for technical scoping or {CONTACT_SALES.commercial.name} for
              commercial and alliance questions.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-brand-lively inline-flex shrink-0 items-center justify-center rounded-full border border-brand bg-brand px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-90"
          >
            View contacts
          </Link>
        </div>
      </section>
    </main>
  )
}
