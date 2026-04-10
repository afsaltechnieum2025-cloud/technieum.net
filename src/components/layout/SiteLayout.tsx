import { Footer } from './SiteFooter'
import { Header } from './Header'
import { TopBar } from './TopBar'

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-page text-muted">
      <TopBar />
      <Header />
      <Footer />
    </div>
  )
}
