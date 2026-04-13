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

function CustomerChip({ customer }: { customer: CustomerMarqueeEntry }) {
  const [candidateIndex, setCandidateIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const candidates = logoCandidates(customer.id)
  const src = candidates[candidateIndex]

  if (showText || candidateIndex >= candidates.length) {
    return (
      <div
        className="flex h-[4.5rem] min-w-[10.5rem] max-w-[14rem] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 shadow-sm shadow-black/20"
        title={customer.name}
      >
        <span className="text-center text-xs font-semibold leading-snug tracking-tight text-heading">{customer.label}</span>
      </div>
    )
  }

  const rasterLogo = /\.(png|jpe?g|webp)(\?|$)/i.test(src)

  return (
    <div
      className="flex h-[4.5rem] min-w-[10.5rem] max-w-[14rem] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 shadow-sm shadow-black/20"
      title={customer.name}
    >
      <img
        src={src}
        alt={customer.name}
        className={`max-h-10 w-auto max-w-full object-contain object-center ${rasterLogo ? 'mix-blend-multiply' : ''}`}
        loading="lazy"
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
  )
}

/**
 * Classic CSS marquee: two identical halves in one row, translate -50% for a seamless loop.
 */
function MarqueeTicker({
  reverse,
  durationSec,
}: {
  reverse?: boolean
  durationSec: number
}) {
  const loop = [...CUSTOMERS_MARQUEE, ...CUSTOMERS_MARQUEE]

  return (
    <div
      className="customers-marquee-fade customers-marquee-row-outer overflow-hidden py-3 md:py-4"
      role="presentation"
    >
      <div
        className={`customers-marquee-track items-center gap-5 md:gap-8 ${reverse ? 'customers-marquee-track--reverse' : ''}`}
        style={{ animationDuration: `${durationSec}s` }}
      >
        {loop.map((c, i) => (
          <CustomerChip key={`${c.id}-${i}`} customer={c} />
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
      className="section-zz-a px-6 py-16 md:py-20"
      aria-labelledby="customers-believed-heading"
    >
      <div className="container">
        <h2
          id="customers-believed-heading"
          className="mb-3 text-2xl font-semibold tracking-tight text-heading md:text-3xl"
        >
          Customers Who Believed In Us
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted md:mb-10 md:text-base">
          Aviation, financial services, critical infrastructure, and public-sector teams partner with Technieum for
          offensive security programs aligned to their risk profile.
        </p>
      </div>

      <div className="customers-marquee-group relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-y border-white/[0.07] bg-black/45 py-1 shadow-inner shadow-black/40 backdrop-blur-sm">
        {reduceMotion ? (
          <div className="container flex flex-wrap justify-center gap-4 py-8">
            {CUSTOMERS_MARQUEE.map((c) => (
              <CustomerChip key={c.id} customer={c} />
            ))}
          </div>
        ) : (
          <>
            <p className="sr-only">
              Logos and names of organizations that work with Technieum; two marquee rows scroll in opposite
              directions.
            </p>
            <MarqueeTicker durationSec={38} />
            <MarqueeTicker reverse durationSec={46} />
          </>
        )}
      </div>
    </section>
  )
}
