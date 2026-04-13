import { Link } from 'react-router-dom'
import { ContactHeroVisual } from '../components/contact/ContactHeroVisual'
import { CONTACT_PAGE, CONTACT_SALES, SALES_PITCH_PDF } from '../data/salesPitchSite'

export function ContactPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset py-16 md:py-24">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_min(36%,320px)] lg:gap-16 xl:grid-cols-[1.05fr_340px]">
            <div className="max-w-2xl">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{CONTACT_PAGE.eyebrow}</p>
              <h1 className="heading-scale-hero mb-4 max-w-2xl">
                {CONTACT_PAGE.headline}
              </h1>
              <p className="mb-3 text-sm font-medium leading-relaxed text-zinc-200 md:text-base">{CONTACT_PAGE.lead}</p>
              <p className="mb-2 text-sm leading-relaxed text-muted md:text-base">{CONTACT_PAGE.subLead}</p>
              <p className="mb-8 text-xs font-medium text-brand/90 md:text-sm">{CONTACT_PAGE.responseLine}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SALES_PITCH_PDF}
                  download
                  className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-7 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-8 md:text-sm"
                >
                  Download sales pitch (PDF)
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-7 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-8 md:text-sm"
                >
                  {CONTACT_PAGE.ctaSecondary}
                </Link>
              </div>
            </div>
            <ContactHeroVisual />
          </div>
        </div>
      </section>

      <section className="section-zz-b py-14 md:py-20" aria-labelledby="contact-why-heading">
        <div className="container max-w-5xl">
          <h2 id="contact-why-heading" className="mb-2 text-lg font-medium text-heading md:text-xl">
            What you can expect
          </h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Same standards we use on live programs: clear ownership, no vague handoffs, and documentation your security and
            procurement teams can reuse.
          </p>
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3 md:gap-5">
            {CONTACT_PAGE.pillars.map((p, i) => (
              <li
                key={p.title}
                className="card-hover-glow rounded-xl border border-border bg-panel/25 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] md:p-7"
              >
                <span
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="mb-2 text-sm font-semibold text-heading">{p.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-a bg-bg-inset py-14 md:py-20" aria-labelledby="contact-direct-heading">
        <div className="container max-w-5xl">
          <h2 id="contact-direct-heading" className="mb-2 text-lg font-medium text-heading md:text-xl">
            Reach the right desk
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-muted md:text-base">
            Prefer email or phone. Include your company, time zone, and whether you need an NDA before sharing scope.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-hover-glow rounded-xl border border-border bg-panel/30 p-8 md:p-9">
              <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand">{CONTACT_SALES.offensive.role}</p>
              <p className="mb-5 text-base font-semibold text-heading">{CONTACT_SALES.offensive.name}</p>
              <p className="mb-2 text-sm">
                <a
                  href={`mailto:${CONTACT_SALES.offensive.email}`}
                  className="text-heading no-underline transition-colors hover:text-brand hover:underline"
                >
                  {CONTACT_SALES.offensive.email}
                </a>
              </p>
              <p className="m-0 text-sm">
                <a
                  href={`tel:${CONTACT_SALES.offensive.phone.replace(/\s/g, '')}`}
                  className="text-heading no-underline transition-colors hover:text-brand hover:underline"
                >
                  {CONTACT_SALES.offensive.phone}
                </a>
              </p>
            </div>
            <div className="card-hover-glow rounded-xl border border-border bg-panel/30 p-8 md:p-9">
              <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand">{CONTACT_SALES.commercial.role}</p>
              <p className="mb-5 text-base font-semibold text-heading">{CONTACT_SALES.commercial.name}</p>
              <p className="mb-2 text-sm">
                <a
                  href={`mailto:${CONTACT_SALES.commercial.email}`}
                  className="text-heading no-underline transition-colors hover:text-brand hover:underline"
                >
                  {CONTACT_SALES.commercial.email}
                </a>
              </p>
              <p className="m-0 text-sm">
                <a
                  href={`tel:${CONTACT_SALES.commercial.phone.replace(/\s/g, '')}`}
                  className="text-heading no-underline transition-colors hover:text-brand hover:underline"
                >
                  {CONTACT_SALES.commercial.phone}
                </a>
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl border-l-2 border-brand/35 pl-4 text-xs leading-relaxed text-muted md:text-sm">
            {CONTACT_SALES.companyLine}
          </p>
        </div>
      </section>
    </main>
  )
}
