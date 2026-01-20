'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const solutions = [
    {
        id: 'banks',
        title: 'Banks & Financial Institutions',
        subtitle: 'Modernizing Core Banking connectivity without the legacy overhaul.',
        enablement: 'We provide the middleware and channel banking layers that sit on top of your CBS. From SMS alerts (A2P) to App-based banking and payment switching, we act as the agile innovation layer.',
        stats: [
            { label: 'Problem', value: 'Legacy Silos' },
            { label: 'Impact', value: 'Agile Innovation' },
            { label: 'Trust', value: '60+ Banks Connected' }
        ],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M3 10h18" />
                <path d="M5 6l7-3 7 3" />
                <path d="M4 10v11" />
                <path d="M20 10v11" />
                <path d="M8 14v3" />
                <path d="M12 14v3" />
                <path d="M16 14v3" />
            </svg>
        )
    },
    {
        id: 'enterprises',
        title: 'Enterprises & FMCGs',
        subtitle: 'Closing the visibility gap in deep-tier supply chains.',
        enablement: 'Our Hercules platform digitizes the entire secondary distribution chain. Field forces capture orders digitally, and retailers pay via digital rails, ensuring real-time stock visibility and automated reconciliation.',
        stats: [
            { label: 'Problem', value: 'Cash Risks' },
            { label: 'Impact', value: 'Real-time Visibility' },
            { label: 'Trust', value: 'Top National FMCGs' }
        ],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                <path d="M12 22.08V12" />
            </svg>
        )
    },
    {
        id: 'msmes',
        title: 'MSMEs & Merchants',
        subtitle: 'Democratizing access to digital payments and tools.',
        enablement: 'SSLCOMMERZ offers plug-and-play payment links, invoicing tools, and simple inventory management, allowing any merchant to start accepting digital payments in minutes.',
        stats: [
            { label: 'Problem', value: 'High Barrier to Entry' },
            { label: 'Impact', value: 'Instant Access' },
            { label: 'Trust', value: '50,000+ Merchants' }
        ],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path d="M9 22V12h6v10" />
                <path d="M2 9h20" />
            </svg>
        )
    },
    {
        id: 'agents',
        title: 'Agent Networks',
        subtitle: 'Bridging the last mile for financial services.',
        enablement: 'Our Agent Banking stack empowers local retailers to act as human ATMs and service points. They manage liquidity and assist customers with bills, deposits, and transfers.',
        stats: [
            { label: 'Problem', value: 'Rural Exclusion' },
            { label: 'Impact', value: 'Human ATMs' },
            { label: 'Trust', value: 'Regulated Networks' }
        ],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="4" />
                <path d="M10 15H6a4 4 0 00-4 4v2" />
                <path d="M16 3.13a4 4 0 010 7.75" />
                <path d="M21 21v-2a4 4 0 00-3-3.85" />
            </svg>
        )
    },
    {
        id: 'public',
        title: 'Public Institutions',
        subtitle: 'Digitizing citizen services for transparency and speed.',
        enablement: 'We integrate government utilities and services with the national payment grid, enabling 24/7 digital bill payment and instant service activation.',
        stats: [
            { label: 'Problem', value: 'Manual Queues' },
            { label: 'Impact', value: '24/7 Availability' },
            { label: 'Trust', value: 'National Utilities' }
        ],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    }
]

export default function SolutionsPage() {
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
                                Outcome Logic
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Solving for <br />
                            <span className="text-blue-900">Outcomes.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed font-light text-balance">
                            We understand the specific regulatory, operational, and scale challenges of your sector. Our mission is to provide the outcome-focused technology that enables your digital future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Sector Hub Grid - Refined Luxury Styling */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={solution.id}
                                className={`group relative rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white transition-all duration-700 hover:shadow-[0_48px_96px_-24px_rgba(15,23,42,0.12)] hover:-translate-y-3 ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="p-12 lg:p-14 flex flex-col h-full relative z-10">
                                    {/* Sector Label / Protocol Style */}
                                    <div className="flex items-center gap-4 mb-16">
                                        <div className="w-16 h-16 bg-blue-900 text-white flex items-center justify-center rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-700">
                                            {solution.icon}
                                        </div>
                                        <div className="h-px flex-1 bg-slate-100"></div>
                                        <span className="text-[10px] font-bold text-blue-900/40 uppercase tracking-[0.3em]">Sector 0{idx + 1}</span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-xl text-blue-900/60 font-medium mb-8 leading-snug">
                                        {solution.subtitle}
                                    </p>

                                    <p className="text-slate-500 text-lg leading-relaxed mb-12 font-light line-clamp-3">
                                        {solution.enablement}
                                    </p>

                                    {/* Dashboard Stat Snippets */}
                                    <div className="mt-auto grid grid-cols-2 gap-8 pt-10 border-t border-slate-50">
                                        {solution.stats.slice(0, 2).map((stat, sIdx) => (
                                            <div key={sIdx}>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                                                <div className="text-base font-bold text-slate-900">{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                        <a href={`/contact?sector=${solution.id}`} className="flex items-center gap-3 text-blue-900 font-bold text-sm">
                                            Sector Specialist <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Luxury Decorative Accents */}
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-900/[0.02] rounded-full group-hover:scale-150 transition-transform duration-1000 -z-0"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* 3. Integrated Core - High Impact Banner */}
                    <div className="mt-32 relative group overflow-hidden rounded-[3.5rem] bg-[#0F172A] p-20 shadow-3xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] group-hover:bg-blue-600/20 transition-all duration-1000"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                            <div className="max-w-xl">
                                <h4 className="text-white text-4xl font-bold mb-6 tracking-tight">Unified Digital Hub</h4>
                                <p className="text-slate-400 text-xl font-light leading-relaxed">
                                    Every sector-specific solution is powered by our central "Unified Core"—ensuring that national-scale stability is inherited across every integration.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center max-w-md">
                                {['ISO 27001', 'PCI DSS', 'SOC 2', 'Central Bank Regulated', 'TLS 1.3 Encryption'].map((tag) => (
                                    <div key={tag} className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA Section - Direct Access */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
                    <h2 className="text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">Ready to solve your sector's <br />toughest challenges?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact"
                            className="px-12 py-5 bg-blue-900 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            Talk to an Industry Expert
                        </motion.a>
                        <motion.a
                            href="/platforms"
                            className="px-12 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            Explore Infrastructure
                        </motion.a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
