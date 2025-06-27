import { useLocation } from 'react-router'
import { Header } from './public-header'
import Footer from './public-footer'

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()

  const hideFooterRoutes = ['/tos','/privacy','/appointment']

  return (
    <main>
      <Header />
      {children}
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </main>
  )
}
