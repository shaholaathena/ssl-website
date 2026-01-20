'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function PlatformsPage() {
    const platforms = [
        {
            id: 'sslcommerz',
            name: 'SSLCOMMERZ',
            header: 'The National Payment Rails',
            tagline: 'Payments & Switching Infrastructure',
            overview: 'The engine powering digital commerce in Bangladesh. SSLCOMMERZ provides the secure gateway, switching logic, and compliance framework required for national-scale payments.',
            logo: '/images/sslcommerz-logo-v2.png',
            image: '/images/sslcommerz-v2.png',
            features: [
                { title: 'Payments & Gateway', desc: ' Unified payment acceptance across cards, MFS, and internet banking.' },
                { title: 'Switching & Routing', desc: 'Intelligent transaction routing for maximum success rates and redundancy.' },
                { title: 'Merchant Enablement', desc: 'Tools for onboarding, reporting, and dispute management.' },
                { title: 'Security & Compliance', desc: 'PCI DSS Level 1 certified infrastructure with advanced fraud detection.' }
            ]
        },
        {
            id: 'cashbaba',
            name: 'CashBaba',
            header: 'Financial Access for Everyone',
            tagline: 'Digital Wallets & Agent Networks',
            overview: 'A complete digital wallet and agent banking stack designed to extend financial access to the last mile.',
            logo: '/images/cashbaba-logo-v2.png',
            image: '/images/cashbaba-v2.png',
            features: [
                { title: 'Wallet Infrastructure', desc: 'White-label wallet cores for licensed PSPs and banks.' },
                { title: 'Agent Networks', desc: 'Tools for agent management, liquidity, and OTC transactions.' },
                { title: 'Financial Access', desc: 'Features enabling low-literacy user adoption and rural reach.' }
            ]
        },
        {
            id: 'hercules',
            name: 'Hercules',
            header: 'Supply Chain Intelligence',
            tagline: 'Enterprise Reconciliation & Distribution',
            overview: 'Solving the complex backend challenges of large-scale supply chains. Hercules digitizes distribution visibility and automates financial reconciliation.',
            logo: '/images/hercules-logo-v2.png',
            image: '/images/hercules-v2.png',
            features: [
                { title: 'Distribution Digitisation', desc: 'Real-time tracking of goods, orders, and field force activities.' },
                { title: 'Payment Reconciliation', desc: 'Automated matching of invoices against digital and cash collections.' },
                { title: 'Enterprise Operations', desc: 'ERP integrations and operational dashboards for decision support.' }
            ]
        },
        {
            id: 'messaging',
            name: 'Messaging & VAS',
            header: 'Mission-Critical Comms',
            tagline: 'Notification & Utility Infrastructure',
            overview: 'The communication backbone for mission-critical alerts, OTPs, and utility services integration.',
            icon: (
                <svg className="w-12 h-12 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            features: [
                { title: 'Transactional Messaging', desc: 'High-throughput SMS A2P gateways for bank alerts and OTPs.' },
                { title: 'Utility Integrations', desc: 'API connectivity to national utility providers (Gas, Water, Electricity).' },
                { title: 'MSME Tools', desc: 'Lightweight digital tools for small business inventory and communication.' }
            ]
        }
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* 1. Immersive Hero - Standardized Luxury Aesthetic */}
            <section className="relative pt-56 pb-32 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-900/[0.04] to-transparent blur-[120px]"></div>

                {/* Ambient Nodes */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-900/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-900/40 rounded-full animate-pulse [animation-delay:1s]"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <span className="text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm">
                                Core Infrastructure
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Product-Led <br />
                            <span className="text-blue-900">Platforms.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed font-light text-balance">
                            We build dedicated technical ecosystems for specific national infrastructure needs. Each platform is engineered for banking-grade scale, absolute compliance, and deep sector integration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Platforms Hub - Refined Listings */}
            <div className="flex flex-col">
                {platforms.map((platform, idx) => (
                    <section key={platform.id} className={`py-32 border-b border-slate-100 overflow-hidden ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}`}>
                        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                            <div className={`flex flex-col lg:flex-row gap-20 lg:gap-32 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Content Column */}
                                <div className="flex-1 lg:max-w-xl">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em]">Platform 0{idx + 1}</span>
                                        <div className="h-px w-8 bg-blue-900/20"></div>
                                    </div>

                                    <div className="mb-10 h-10 relative flex items-center justify-start group">
                                        {platform.logo ? (
                                            <div className="relative h-12 w-48 group-hover:scale-105 transition-transform duration-500 origin-left">
                                                <Image
                                                    src={platform.logo}
                                                    alt={platform.name}
                                                    fill
                                                    className="object-contain object-left"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-xl">
                                                    {platform.icon}
                                                </div>
                                                <span className="text-2xl font-bold text-slate-900">{platform.name}</span>
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                        {platform.header || platform.name}
                                    </h2>

                                    <p className="text-xl text-slate-500 leading-relaxed mb-12 font-light">
                                        {platform.overview}
                                    </p>

                                    {/* Feature Grid - Polished */}
                                    <div className="grid grid-cols-1 gap-6 mb-12">
                                        {platform.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex gap-4 p-5 rounded-2xl border border-transparent hover:border-blue-900/10 hover:bg-white hover:shadow-sm transition-all group">
                                                <div className="w-8 h-8 rounded-full bg-blue-900/5 flex items-center justify-center text-blue-900 flex-shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-all">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-slate-900">{feature.title}</h4>
                                                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-blue-900 transition-all shadow-xl shadow-slate-900/10">
                                        Technical Specifications
                                        <svg className="w-4 h-4 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </a>
                                </div>

                                {/* Visual Column - Premium Technical Container */}
                                <div className="flex-1 w-full relative">
                                    <div className="absolute inset-0 bg-blue-900/5 blur-[80px] rounded-full scale-110"></div>

                                    {platform.image ? (
                                        <motion.div
                                            className="relative rounded-2xl overflow-hidden shadow-[0_64px_128px_-32px_rgba(15,23,42,0.2)] border border-slate-200 bg-white group"
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="aspect-[4/3] relative">
                                                <Image
                                                    src={platform.image}
                                                    alt={`${platform.name} Interface`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                                            </div>

                                            {/* Browser-style Header Overlay */}
                                            <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between border-b border-white/10 bg-black/5 backdrop-blur-sm">
                                                <div className="flex gap-2">
                                                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/20"></div>)}
                                                </div>
                                                <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{platform.name} _SYSTEM_PREVIEW</div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* High Fidelity Fallback Dashboard */
                                        <div className="aspect-[4/3] bg-[#0F172A] rounded-2xl relative overflow-hidden flex items-center justify-center p-12 shadow-2xl border border-slate-800">
                                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                            <div className="relative z-10 w-full max-w-md space-y-6">
                                                <div className="h-32 bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center">
                                                        <div className="absolute w-20 h-20 border-t-2 border-blue-500 rounded-full animate-spin"></div>
                                                        {platform.icon}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="h-20 bg-slate-800/30 rounded-xl border border-slate-700/30 animate-pulse"></div>
                                                    <div className="h-20 bg-slate-800/30 rounded-xl border border-slate-700/30 animate-pulse delay-75"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Final CTA Strip */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
                    <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Looking for a specific platform integration?</h3>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a href="/contact" className="px-10 py-5 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
                            Speak to Technical Team
                        </a>
                        <a href="/solutions" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all">
                            Explore Industry Solutions
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
