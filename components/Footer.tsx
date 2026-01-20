'use client'

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
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-bold text-slate-900">SSL Wireless</div>
        <nav className="flex gap-6 flex-wrap justify-center">
          {footerLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="text-xs text-slate-400">© 2026 SSL Wireless</div>
      </div>
    </footer>
  )
}
