import { Link } from 'react-router-dom'
import { ContactSalesForm } from '../components/contact/ContactSalesForm'
import { CONTACT_PAGE } from '../data/salesPitchSite'

export function ContactPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page text-muted">
      <section
        className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset pt-14 pb-7 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12"
        aria-labelledby="contact-hero-heading"
      >
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <div className="max-w-xl lg:max-w-none">
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
                {CONTACT_PAGE.eyebrow}
              </p>
              <h1 id="contact-hero-heading" className="heading-scale-hero mb-5 max-w-2xl text-pretty">
                {CONTACT_PAGE.headline}
              </h1>
              <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{CONTACT_PAGE.lead}</p>
              <p className="mb-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{CONTACT_PAGE.subLead}</p>
              <p className="mb-10 text-xs font-medium text-brand/90 md:text-sm">{CONTACT_PAGE.responseLine}</p>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-7 md:text-sm"
              >
                {CONTACT_PAGE.ctaSecondary}
              </Link>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-xl border border-border-strong bg-panel/90 p-6 shadow-md backdrop-blur-sm md:p-8">
                <h2 className="m-0 text-lg font-semibold text-heading md:text-xl">{CONTACT_PAGE.formTitle}</h2>
                <p className="mt-2 text-sm text-muted md:text-base">{CONTACT_PAGE.formSubtitle}</p>
                <ContactSalesForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
