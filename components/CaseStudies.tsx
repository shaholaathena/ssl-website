'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
    {
        id: "01",
        title: "Bangla QR",
        subtitle: "Building Bangladesh’s national QR rails.",
        body: "SSLCOMMERZ launched Bangla QR — the national QR for digital payments authorised by Bangladesh Bank. By enabling interoperable QR acceptance across merchants, it helps extend secure digital payments from small roadside shops to large retail chains through a common national payment experience.",
        tag: "Infrastucture"
    },
    {
        id: "02",
        title: "Banking infrastructure",
        subtitle: "Two decades of bank-side infrastructure.",
        body: "SSL launched Bangladesh’s first SMS banking platform in 2008 and has carried mission-critical banking traffic — alerts, OTPs, bill payments, transfer notifications — for the country’s major banks ever since.",
        tag: "Digital Banking"
    },
    {
        id: "03",
        title: "FastPay Kurdistan",
        subtitle: "A Bangladeshi platform, deployed abroad.",
        body: "FastPay — a digital wallet built and operated by SSL Wireless — was deployed in Kurdistan. It remains a milestone in the international story of Bangladeshi-built financial infrastructure.",
        tag: "International Export"
    }
]

export default function CaseStudies() {
    return (
        <section className="bg-slate-50 py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em] mb-4 block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Proof of Work
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Institutions trust us with the work that matters.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/case-studies"
                            className="group flex items-center gap-3 text-blue-900 font-bold tracking-tight hover:gap-5 transition-all duration-300"
                        >
                            View all stories
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                {/* Case Study Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            className="group relative bg-white p-10 lg:p-12 border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 rounded-2xl flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-[64px] font-black text-slate-50 absolute top-6 right-10 group-hover:text-blue-50 transition-colors duration-500">
                                {study.id}
                            </div>

                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    {study.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-900 transition-colors">
                                {study.subtitle}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light flex-grow">
                                {study.body}
                            </p>

                            <div className="pt-6 border-t border-slate-50">
                                <Link
                                    href={`/case-studies/${study.id}`}
                                    className="text-[11px] font-bold text-slate-400 group-hover:text-blue-900 uppercase tracking-widest flex items-center gap-2 transition-all"
                                >
                                    Read details
                                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
