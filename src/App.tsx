import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Audience } from './components/Audience'
import { Capabilities } from './components/Capabilities'
import { CaseStudy } from './components/CaseStudy'
import { Contact } from './components/Contact'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { ProofStrip } from './components/ProofStrip'
import { CaseDetailPage } from './pages/CaseDetailPage'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Audience />
        <Capabilities />
        <Process />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case" element={<CaseDetailPage />} />
    </Routes>
  )
}
