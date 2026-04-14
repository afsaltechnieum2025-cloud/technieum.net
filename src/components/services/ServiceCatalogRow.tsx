import { Link } from 'react-router-dom'
import type { ServiceTopic } from '../../data/serviceDocuments'
import { serviceTopicPdfHref } from '../../data/serviceDocuments'
import type { ServiceCatalogRowMeta } from '../../data/servicesCatalogRowContent'
import { ServiceCatalogRowVisual } from './ServiceCatalogRowVisual'

type Props = {
  topic: ServiceTopic
  meta: ServiceCatalogRowMeta
  index: number
}

export function ServiceCatalogRow({ topic, meta, index }: Props) {
  const visualOnLeft = index % 2 === 0
  const pdfHref = serviceTopicPdfHref(topic)

  const ctaInner = (
    <>
      Learn more
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
        <path
          d="M3 7h7M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )

  const ctaClass =
    'btn-brand-lively inline-flex items-center justify-center gap-2 rounded-full border border-brand-strong bg-brand-strong px-7 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-8 md:py-3 md:text-sm'

  return (
    <article
      id={topic.slug}
      className="services-catalog-row scroll-mt-28 border-b border-border/45 py-8 md:py-10 lg:py-12 last:border-b-0"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div
          className={`flex min-w-0 w-full justify-center overflow-visible ${visualOnLeft ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="w-full max-w-[min(100%,480px)] lg:max-w-[min(100%,520px)]">
            <ServiceCatalogRowVisual slug={topic.slug} />
          </div>
        </div>

        <div className={`min-w-0 ${visualOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand md:text-xs">{meta.eyebrow}</p>
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-heading md:text-2xl">{topic.title}</h3>
          <p className="mb-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">{topic.summary}</p>

          <ul className="m-0 mb-6 flex list-none flex-wrap gap-2 p-0" aria-label={`${topic.title} focus areas`}>
            {meta.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-lg border border-border/70 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 md:text-[0.8125rem]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          {topic.detailPath ? (
            <Link to={topic.detailPath} className={ctaClass}>
              {ctaInner}
            </Link>
          ) : (
            <a href={pdfHref} className={ctaClass} target="_blank" rel="noopener noreferrer">
              {ctaInner}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
