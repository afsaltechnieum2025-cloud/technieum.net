import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PRODUCT_DOCUMENTS,
  productPath,
  type ProductDocId,
  type ProductDocument,
} from '../../data/productDocuments'

function pdfUrl(file: string) {
  return `/docs/${encodeURIComponent(file)}`
}

function DocCard({
  doc,
  active,
  onSelect,
}: {
  doc: ProductDocument
  active: boolean
  onSelect: () => void
}) {
  const href = pdfUrl(doc.pdfFile)

  return (
    <article
      className={`card-hover-glow flex flex-col rounded-xl border p-5 transition-colors md:p-6 ${
        active
          ? 'border-brand bg-panel/60 shadow-md'
          : 'border-border bg-panel/25 hover:border-border-strong hover:bg-panel/40'
      }`}
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {doc.stats.slice(0, 2).map((s) => (
          <span
            key={s.label}
            className="rounded-full bg-bg-inset px-2.5 py-0.5 text-xs font-medium text-heading"
          >
            {s.value} {s.label}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-heading">{doc.name}</h3>
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-brand">{doc.subtitle}</p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{doc.tagline}</p>
      <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <Link
          to={productPath(doc.id)}
          className={`inline-flex flex-1 items-center justify-center rounded-full border px-4 py-2.5 text-center text-sm font-semibold no-underline transition-colors sm:flex-none ${
            active
              ? 'border-brand-strong bg-brand-strong text-white'
              : 'border-border-strong text-heading hover:border-brand hover:text-brand'
          }`}
        >
          Full sales pitch
        </Link>
        <button
          type="button"
          onClick={onSelect}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-transparent px-4 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-brand hover:text-brand sm:flex-none"
        >
          Preview below
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-heading no-underline transition-colors hover:border-brand hover:text-brand sm:flex-none"
        >
          Open PDF
        </a>
        <a
          href={href}
          download={doc.downloadName}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-border-strong bg-page px-4 py-2.5 text-center text-sm font-semibold text-heading no-underline transition-colors hover:bg-panel sm:flex-none"
        >
          Download
        </a>
      </div>
    </article>
  )
}

type DocumentLibraryProps = {
  /** Zigzag color wash: matches home section rhythm when embedded */
  zigzag?: 'a' | 'b'
}

export function DocumentLibrary({ zigzag = 'a' }: DocumentLibraryProps) {
  const [activeId, setActiveId] = useState<ProductDocId>(PRODUCT_DOCUMENTS[0].id)
  const active = PRODUCT_DOCUMENTS.find((p) => p.id === activeId) ?? PRODUCT_DOCUMENTS[0]
  const href = pdfUrl(active.pdfFile)
  const zzClass = zigzag === 'b' ? 'section-zz-b' : 'section-zz-a'

  return (
    <section
      id="platform-documentation"
      className={`${zzClass} bg-panel/20 px-6 py-16 md:py-24`}
      aria-labelledby="doc-library-heading"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="text-shimmer-brand mb-3 text-sm font-semibold tracking-wide">Platform documentation</p>
          <h2 id="doc-library-heading" className="mb-4 text-3xl font-medium tracking-tight text-heading md:text-4xl">
            Technical overviews from our product portfolio
          </h2>
          <p className="text-muted md:text-lg">
            Each document is prepared for clients and stakeholders. Review the on-page summary, open the PDF in
            your browser, or download a copy for your records. Content reflects the same capabilities described in
            our confidential technical briefs.
          </p>
        </div>

        <div className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {PRODUCT_DOCUMENTS.map((doc) => (
            <DocCard
              key={doc.id}
              doc={doc}
              active={doc.id === activeId}
              onSelect={() => setActiveId(doc.id)}
            />
          ))}
        </div>

        <div
          role="tablist"
          aria-label="Product documentation detail"
          className="mb-6 flex flex-wrap gap-2 pb-4"
        >
          {PRODUCT_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              type="button"
              role="tab"
              aria-selected={doc.id === activeId}
              id={`tab-${doc.id}`}
              aria-controls={`panel-${doc.id}`}
              onClick={() => setActiveId(doc.id)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                doc.id === activeId
                  ? 'bg-brand-strong text-surface-popover'
                  : 'text-muted hover:bg-panel hover:text-heading'
              }`}
            >
              {doc.name}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="rounded-xl border border-border bg-page p-6 md:p-10"
        >
          <div className="mb-8 flex flex-col gap-4 pb-8 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-medium text-heading md:text-3xl">{active.name}</h3>
              <p className="text-sm font-medium text-brand">{active.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={productPath(active.id)}
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-2.5 text-sm font-bold text-heading no-underline transition-colors hover:border-brand"
              >
                Full sales page
              </Link>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand bg-brand px-6 py-2.5 text-sm font-bold text-white no-underline transition-opacity hover:opacity-90"
              >
                Open full PDF
              </a>
              <a
                href={href}
                download={active.downloadName}
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-2.5 text-sm font-bold text-heading no-underline transition-colors hover:border-brand"
              >
                Download PDF
              </a>
            </div>
          </div>

          <p className="mb-8 max-w-4xl text-base leading-relaxed text-muted md:text-lg">{active.summary}</p>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {active.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-panel/40 px-4 py-4 text-center"
              >
                <p className="text-2xl font-semibold text-heading">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-heading">
                Key capabilities
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                {active.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-heading">
                Architecture and flow
              </h4>
              <ol className="space-y-3">
                {active.architecture.map((row, i) => (
                  <li key={row.phase} className="flex gap-3 text-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-strong text-xs font-bold text-surface-popover">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-heading">{row.phase}</p>
                      <p className="text-muted">{row.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-heading">
              Frameworks and integrations
            </h4>
            <div className="flex flex-wrap gap-2">
              {active.frameworks.map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-border bg-panel/50 px-3 py-1.5 text-xs font-medium text-heading"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-heading">Example use cases</h4>
            <ul className="grid gap-3 md:grid-cols-2">
              {active.useCases.map((u) => (
                <li
                  key={u}
                  className="rounded-lg border border-border border-l-4 border-l-brand bg-panel/20 px-4 py-3 text-sm text-muted"
                >
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
