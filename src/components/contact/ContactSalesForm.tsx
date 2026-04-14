import { type FormEvent, useState } from 'react'
import { CONTACT_PAGE, CONTACT_SALES } from '../../data/salesPitchSite'

export function ContactSalesForm() {
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    const agreed = fd.get('agree') === 'on'
    if (!agreed) {
      setError('Please confirm you agree to the Privacy Policy.')
      return
    }
    const first = String(fd.get('firstName') ?? '').trim()
    const last = String(fd.get('lastName') ?? '').trim()
    const businessEmail = String(fd.get('businessEmail') ?? '').trim()
    if (!first || !last || !businessEmail) {
      setError('Please fill in all required fields.')
      return
    }
    const subject = encodeURIComponent('Sales inquiry via technieum.com')
    const body = encodeURIComponent(
      `First name: ${first}\nLast name: ${last}\nBusiness email: ${businessEmail}\n\n---\nSubmitted via technieum.com/contact`,
    )
    window.location.href = `mailto:${CONTACT_SALES.offensive.email}?subject=${subject}&body=${body}`
  }

  const fieldLabel = 'mb-1.5 block text-sm font-medium text-muted'
  const inputClass =
    'w-full rounded-md border border-border-strong bg-bg-subtle px-3 py-2.5 text-sm text-heading placeholder:text-muted/60 shadow-inner outline-none transition-[border-color,box-shadow] focus:border-brand/50 focus:ring-2 focus:ring-brand/20'

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className={fieldLabel}>
            First name<span className="text-red-500">*</span>
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={inputClass}
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className={fieldLabel}>
            Last name<span className="text-red-500">*</span>
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={inputClass}
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-business-email" className={fieldLabel}>
          Business email<span className="text-red-500">*</span>
        </label>
        <input
          id="contact-business-email"
          name="businessEmail"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>

      <div className="rounded-md border border-border bg-bg-subtle/80 px-3 py-3">
        <label className="flex cursor-pointer gap-3 text-left">
          <input
            name="agree"
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-strong bg-bg-subtle text-red-600 focus:ring-2 focus:ring-red-600/35"
          />
          <span className="text-sm leading-snug text-muted">
            {CONTACT_PAGE.formAgreementBeforePrivacy}{' '}
            <a
              href={CONTACT_PAGE.formPrivacyHref}
              className="font-semibold text-red-500 no-underline hover:text-red-400 hover:underline"
            >
              {CONTACT_PAGE.formPrivacyLinkLabel}
            </a>
            .
          </span>
        </label>
      </div>

      {error ? (
        <p className="m-0 text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-brand-lively w-full rounded-md border border-brand-strong bg-brand-strong py-2.5 text-xs font-bold tracking-wide text-white transition-colors hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-panel md:py-3 md:text-sm"
      >
        {CONTACT_PAGE.formSubmitLabel}
      </button>
    </form>
  )
}
