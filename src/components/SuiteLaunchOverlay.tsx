import { AsmPortalLaunchUI } from './home/AsmPortalLaunchUI'

export { ACCENT_TEXT } from './home/AsmPortalLaunchUI'

type Props = {
  variant: 'fullscreen-redirect'
  targetUrl: string
}

/** Full-screen suite handoff; redirects after the launch sequence completes. */
export default function SuiteLaunchOverlay({ variant, targetUrl }: Props) {
  if (variant !== 'fullscreen-redirect') {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#060606]/96 px-4 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-busy="true"
      aria-label="Suite launch"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative z-10 w-full max-w-lg">
        <AsmPortalLaunchUI
          loop={false}
          onComplete={() => {
            window.location.assign(targetUrl)
          }}
        />
      </div>
    </div>
  )
}
