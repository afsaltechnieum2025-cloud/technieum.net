import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CUSTOMERS_MARQUEE, logoUrlCandidates, type CustomerMarqueeEntry } from '../../data/customers'

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
  const candidates = logoUrlCandidates(customer)
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
          <span className="max-w-full px-0.5 text-center text-[0.625rem] font-semibold uppercase leading-tight tracking-wide text-zinc-800 sm:text-[0.6875rem]">
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

function wrapOffset(x: number, w: number): number {
  if (w <= 0) return x
  let o = x
  while (o >= w) o -= w
  while (o < 0) o += w
  return o
}

/**
 * Auto-advances like a marquee when idle; click-drag or swipe moves the strip (infinite wrap on one duplicated loop).
 */
function InteractiveMarquee({ durationSec }: { durationSec: number }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const loopWRef = useRef(0)
  const offsetRef = useRef(0)
  const draggingRef = useRef(false)
  const hoverRef = useRef(false)
  const dragLastXRef = useRef(0)
  const lastTickRef = useRef<number | null>(null)
  const rafRef = useRef(0)
  const [grabbing, setGrabbing] = useState(false)

  const applyTransform = useCallback(() => {
    const t = trackRef.current
    const w = loopWRef.current
    if (!t) return
    offsetRef.current = wrapOffset(offsetRef.current, w)
    t.style.transform = `translate3d(${-offsetRef.current}px,0,0)`
  }, [])

  const measureLoop = useCallback(() => {
    const t = trackRef.current
    if (t && t.scrollWidth > 0) {
      loopWRef.current = t.scrollWidth / 2
      applyTransform()
    }
  }, [applyTransform])

  useLayoutEffect(() => {
    measureLoop()
    const el = trackRef.current
    if (!el) return
    const ro = new ResizeObserver(() => measureLoop())
    ro.observe(el)
    return () => ro.disconnect()
  }, [measureLoop])

  useEffect(() => {
    const tick = (ts: number) => {
      rafRef.current = requestAnimationFrame(tick)
      const w = loopWRef.current
      if (w <= 0) {
        lastTickRef.current = ts
        return
      }

      if (!draggingRef.current && !hoverRef.current) {
        if (lastTickRef.current != null) {
          const dt = Math.min(ts - lastTickRef.current, 80)
          const pxPerSec = w / durationSec
          offsetRef.current += (pxPerSec * dt) / 1000
          applyTransform()
        }
      }
      lastTickRef.current = ts
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [durationSec, applyTransform])

  const endDrag = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return
      draggingRef.current = false
      setGrabbing(false)
      try {
        e.currentTarget.releasePointerCapture(e.pointerId)
      } catch {
        /* already released */
      }
      lastTickRef.current = null
    },
    [],
  )

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    draggingRef.current = true
    setGrabbing(true)
    lastTickRef.current = null
    dragLastXRef.current = e.clientX
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    const dx = e.clientX - dragLastXRef.current
    dragLastXRef.current = e.clientX
    offsetRef.current -= dx
    applyTransform()
  }

  const loop = [...CUSTOMERS_MARQUEE, ...CUSTOMERS_MARQUEE]

  return (
    <div
      className="customers-marquee-fade customers-marquee-row-outer overflow-hidden py-5 md:py-6"
      role="presentation"
      onMouseEnter={() => {
        hoverRef.current = true
      }}
      onMouseLeave={() => {
        hoverRef.current = false
        lastTickRef.current = null
      }}
    >
      <div
        className={`select-none ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ touchAction: 'pan-y' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={() => {
          draggingRef.current = false
          setGrabbing(false)
          lastTickRef.current = null
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center gap-10 will-change-transform md:gap-14 lg:gap-16"
          aria-hidden
        >
          {loop.map((c, i) => (
            <CustomerLogoSlot key={`${c.id}-${i}`} customer={c} variant="marquee" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function CustomersBelievedSection() {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section
      id="customers-believed"
      className="section-zz-b section-zz-wash-tl py-16 md:py-24"
      aria-labelledby="customers-believed-heading"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="customers-believed-heading"
            className="mb-4 text-lg font-semibold tracking-tight text-heading sm:text-xl md:text-2xl md:leading-snug"
          >
            Customers Who Believed In Us
          </h2>
          <p className="mx-auto mb-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Aviation, financial services, critical infrastructure, and public-sector teams partner with Technieum for
            offensive security programs aligned to their risk profile.
          </p>
        </div>
      </div>

      <div className="customers-marquee-group relative mt-10 w-full md:mt-14">
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
                Partner logos scroll automatically; drag or swipe horizontally to move the strip. Motion pauses when the
                pointer rests over the strip.
              </p>
              <InteractiveMarquee durationSec={52} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
