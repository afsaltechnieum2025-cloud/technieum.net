import { Outlet } from 'react-router-dom'
import { Footer } from './SiteFooter'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'
import { TopBar } from './TopBar'

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-page text-muted">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        Skip to main content
      </a>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
