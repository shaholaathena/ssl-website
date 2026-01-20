'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustScale from '@/components/TrustScale'
import Products from '@/components/Products'
import BeyondPayments from '@/components/BeyondPayments'
import EcosystemDiagram from '@/components/EcosystemDiagram'
import WhoWeServe from '@/components/WhoWeServe'
import HomeAbout from '@/components/HomeAbout'
import Footer from '@/components/Footer'

export default function Home() {
  useSmoothScroll()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustScale />
      <Products />
      <BeyondPayments />
      <EcosystemDiagram />
      <WhoWeServe />
      <HomeAbout />
      <Footer />
    </main>
  )
}
