'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Approach from '@/components/Approach'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import HomeAbout from '@/components/HomeAbout'
import HomeTagline from '@/components/HomeTagline'

export default function Home() {
  useSmoothScroll()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HomeAbout />
      <Clients />
      <Approach />
      <Services />
      <Products />
      <Testimonials />
      <HomeTagline />
      <Footer />
    </main>
  )
}
