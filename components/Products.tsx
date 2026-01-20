'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

export default function Products() {
  const platforms = [
    {
      name: 'SSLCOMMERZ',
      desc: 'Payments & Switching Infrastructure',
      type: 'Payment System Operator (PSO)',
      logo: '/images/sslcommerz-logo-v2.png'
    },
    {
      name: 'CashBaba',
      desc: 'Digital Wallets & Agent Networks',
      type: 'Payment Service Provider (PSP)',
      logo: '/images/cashbaba-logo-v2.png'
    },
    {
      name: 'Hercules',
      desc: 'Enterprise Reconciliation & Distribution',
      type: 'Supply Chain Automation',
      logo: '/images/hercules-logo-v2.png'
    },
    {
      name: 'Messaging',
      desc: 'Critical notification & alert infrastructure',
      type: 'Enterprise Telecom',
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ]

  return (
    <section id="products" className="bg-white py-24 border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

        <div className="mb-16 border-b border-slate-200 pb-8">
          <h2 className="text-3xl font-bold text-slate-900">Core Financial Platforms</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white p-10 hover:bg-slate-50 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{platform.type}</div>
                {/* Logo Container */}
                <div className="h-8 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {platform.logo ? (
                    <div className="relative h-full w-24">
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        fill
                        className="object-contain object-right top-0"
                      />
                    </div>
                  ) : (
                    platform.icon
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{platform.name}</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-sm">{platform.desc}</p>
              <a href="#" className="text-blue-900 font-semibold text-sm border-b border-blue-900 pb-0.5 hover:text-blue-700 hover:border-blue-700 transition-colors">
                View Platform Interface
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
