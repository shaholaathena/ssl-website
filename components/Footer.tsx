'use client'

import Image from 'next/image'

export default function Footer() {
  const footerLinks = [
    { name: 'Platforms', href: '/platforms' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Governance', href: '/compliance' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            <Image
              src="/images/ssl-wireless-logo-official.png"
              alt="SSL Wireless"
              fill
              className="object-contain object-left"
            />
          </div>
        </a>
        <nav className="flex gap-6 flex-wrap justify-center">
          {footerLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="text-xs text-slate-400">© 2026 Software Shop Limited</div>
      </div>
    </footer>
  )
}
