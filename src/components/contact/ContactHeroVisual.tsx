/**
 * Decorative hero: concentric brand rings and soft pulse (honors prefers-reduced-motion in CSS).
 */
export function ContactHeroVisual() {
  return (
    <div
      className="contact-hero-visual relative mx-auto flex aspect-square w-full max-w-[min(100%,300px)] items-center justify-center md:max-w-[340px]"
      aria-hidden
    >
      <div className="contact-hero-visual__glow pointer-events-none absolute inset-[8%] rounded-full bg-brand/[0.12] blur-3xl" />
      <div className="contact-hero-visual__ring contact-hero-visual__ring--outer absolute inset-0 rounded-full border border-brand/20" />
      <div className="contact-hero-visual__ring contact-hero-visual__ring--mid absolute inset-[14%] rounded-full border border-dashed border-brand/28" />
      <div className="contact-hero-visual__ring contact-hero-visual__ring--inner absolute inset-[28%] rounded-full border border-brand/40 shadow-[0_0_40px_rgb(232_93_4/0.18)]" />
      <div className="contact-hero-visual__core relative flex h-[22%] min-h-[52px] w-[22%] min-w-[52px] items-center justify-center rounded-full border border-brand/50 bg-brand/[0.14]">
        <svg
          className="h-[46%] w-[46%] min-h-[20px] min-w-[20px] max-h-[28px] max-w-[24px] text-brand drop-shadow-[0_0_10px_rgb(232_93_4/0.35)]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="contact-hero-visual__spark contact-hero-visual__spark--a pointer-events-none absolute right-[10%] top-[18%] h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_rgb(232_93_4/0.9)]" />
      <div className="contact-hero-visual__spark contact-hero-visual__spark--b pointer-events-none absolute bottom-[22%] left-[12%] h-1.5 w-1.5 rounded-full bg-brand/80 shadow-[0_0_10px_rgb(232_93_4/0.65)]" />
    </div>
  )
}
