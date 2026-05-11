import { useEffect } from 'react'

/**
 * Injects `<link rel="preload" as="image">` once so the browser fetches a large PNG
 * earlier on routes where it is likely LCP (home hub graphic, services hero, etc.).
 */
export function useImgPreload(href: string, id: string) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (document.getElementById(id)) return
    const link = document.createElement('link')
    link.id = id
    link.rel = 'preload'
    link.as = 'image'
    link.href = href
    document.head.appendChild(link)
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [href, id])
}
