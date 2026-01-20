'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Top-Level Navigation IA
  const navItems = [
    { name: 'Platforms', href: '/platforms' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Governance & Compliance', href: '/compliance' },
    {
      name: 'About',
      href: '/about-us',
      children: [
        { name: 'Company Overview', href: '/about-us' },
        { name: 'Leadership & Governance', href: '/our-company' },
        { name: 'History & Milestones', href: '/our-milestones' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm'
        : 'bg-white border-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-48">
            <Image
              src="/images/ssl-wireless-logo-official.png"
              alt="SSL Wireless"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-[15px] font-medium text-slate-600 hover:text-blue-900 transition-colors py-2"
              >
                {item.name}
                {item.children && (
                  <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Sub-menu Dropdown */}
              <AnimatePresence>
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 w-64 pt-2"
                  >
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden p-2 backdrop-blur-xl">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 transition-all rounded-xl"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <a
                    href={item.href}
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                    className="text-lg font-bold text-slate-900"
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <div className="pl-4 border-l-2 border-slate-100 flex flex-col gap-3 my-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[15px] font-medium text-slate-500 active:text-blue-900"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
