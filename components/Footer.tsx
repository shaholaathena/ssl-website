'use client'

import Image from 'next/image'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/SSLWireless',
    color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/user/sslvtube',
    color: '#FF0000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.437a2.506 2.506 0 0 0-1.762 1.766C2.001 8.768 2 12 2 12s.001 3.232.407 4.797a2.506 2.506 0 0 0 1.762 1.766C5.736 18.993 12 19 12 19s6.264.007 7.831-.437a2.506 2.506 0 0 0 1.762-1.766C21.999 15.232 22 12 22 12s-.001-3.232-.407-4.797zM9.999 15.004V8.996L15.992 12l-5.993 3.004z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ssl-wireless',
    color: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

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
        <div className="flex items-center gap-3">
          {socialLinks.map(social => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-white transition-opacity duration-200 hover:opacity-80"
              style={{ backgroundColor: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 mt-8">© 2026 Software Shop Limited</div>
    </footer>
  )
}
