import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * SPA navigation keeps window scroll by default. After jumping from a long page (e.g. Services at a glance)
 * to /platform/..., users were landing mid-page. Reset scroll on route change; honor #hash on home anchors.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const run = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
      requestAnimationFrame(() => requestAnimationFrame(run))
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
