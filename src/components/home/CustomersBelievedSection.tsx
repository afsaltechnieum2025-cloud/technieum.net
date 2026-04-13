import { useEffect, useState } from 'react'
import { CUSTOMERS_MARQUEE, type CustomerMarqueeEntry } from '../../data/customers'

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduce
}

function logoCandidates(id: string): string[] {
  return [
    `/images/customers/${id}.svg`,
    `/images/customers/${id}.png`,
    `/images/customers/${id}.jpg`,
    `/images/customers/${id}.webp`,
  ]
}

/** Light tile behind each logo so dark wordmarks read on the dark strip. */
function CustomerLogoSlot({
  customer,
  variant = 'static',
}: {
  customer: CustomerMarqueeEntry
  variant?: 'static' | 'marquee'
}) {
  const [candidateIndex, setCandidateIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const candidates = logoCandidates(customer.id)
  const src = candidates[candidateIndex]
  const isMarquee = variant === 'marquee'

  const slotClass =
    'group flex h-14 w-[7.25rem] shrink-0 items-center justify-center sm:h-16 sm:w-[8rem] md:w-[8.75rem]'

  const logoPadClass =
    'flex h-[2.65rem] w-full max-w-[6.5rem] items-center justify-center rounded-md bg-white px-2 py-1 shadow-sm ring-1 ring-zinc-900/8 sm:h-[3rem] sm:max-w-[7rem] md:h-[3.25rem]'

  if (showText || candidateIndex >= candidates.length) {
    return (
      <div className={slotClass} title={customer.name}>
        <div className={logoPadClass}>
          <span className="max-w-full px-0.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-zinc-800 sm:text-[11px]">
            {customer.label}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={slotClass} title={customer.name}>
      <div className={logoPadClass}>
        <img
          src={src}
          alt=""
          className="max-h-[1.85rem] w-auto max-w-full object-contain object-center opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:max-h-8 md:max-h-9"
          loading={isMarquee ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => {
            if (candidateIndex + 1 < candidates.length) {
              setCandidateIndex((i) => i + 1)
            } else {
              setShowText(true)
            }
          }}
        />
      </div>
    </div>
  )
}

function MarqueeTicker({ durationSec }: { durationSec: number }) {
  const loop = [...CUSTOMERS_MARQUEE, ...CUSTOMERS_MARQUEE]

  return (
    <div
      className="customers-marquee-fade customers-marquee-row-outer overflow-hidden py-5 md:py-6"
      role="presentation"
    >
      <div
        className="customers-marquee-track items-center gap-10 md:gap-14 lg:gap-16"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {loop.map((c, i) => (
          <CustomerLogoSlot key={`${c.id}-${i}`} customer={c} variant="marquee" />
        ))}
      </div>
    </div>
  )
}

export function CustomersBelievedSection() {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section
      id="customers-believed"
      className="section-zz-a px-4 sm:px-6 py-16 md:py-24"
      aria-labelledby="customers-believed-heading"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="customers-believed-heading"
            className="mb-4 text-xl font-semibold tracking-tight text-heading sm:text-2xl md:text-3xl md:leading-snug"
          >
            Customers Who Believed In Us
          </h2>
          <p className="mx-auto mb-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Aviation, financial services, critical infrastructure, and public-sector teams partner with Technieum for
            offensive security programs aligned to their risk profile.
          </p>
        </div>
      </div>

      <div className="customers-marquee-group relative left-1/2 mt-10 w-screen max-w-[100vw] -translate-x-1/2 md:mt-14">
        <div className="border-y border-white/[0.06] bg-gradient-to-b from-white/[0.03] via-zinc-950/50 to-zinc-950/80">
          {reduceMotion ? (
            <div className="container py-10 md:py-12">
              <ul className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-8 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {CUSTOMERS_MARQUEE.map((c) => (
                  <li key={c.id} className="flex justify-center">
                    <CustomerLogoSlot customer={c} variant="static" />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <p className="sr-only">
                Scrolling strip of partner and customer organization logos; pauses when hovered.
              </p>
              <MarqueeTicker durationSec={52} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
