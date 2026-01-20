'use client'

import { motion } from 'framer-motion'

export default function BeyondPayments() {
    const features = [
        {
            title: 'Digital Communication & Engagement',
            copy: 'Enterprise A2P messaging, promotional campaigns, and customer support bots integrated directly into your workflow.',
            icon: (
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.626-2.322l-4.045 4.045c-.217.218-.54.269-.769.117-.291-.191-.322-.616-.068-.87l4.045-4.045A8.001 8.001 0 0113 4c4.418 0 8 3.582 8 8z" />
                </svg>
            )
        },
        {
            title: 'Utility & Service Enablement',
            copy: 'Seamless connections to utility providers and essential service aggregators for one-stop digital access.',
            icon: (
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: 'Operational Tools for MSMEs',
            copy: 'Inventory management, digital bookkeeping, and supply chain tools designed for real-world reliability.',
            icon: (
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        }
    ]

    return (
        <section className="bg-white py-24 border-b border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
                    <div className="flex-1 max-w-xl">
                        <div className="inline-block px-3 py-1 mb-6 border border-blue-900/20 bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-widest rounded-sm">
                            Value-Added Services
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                            Beyond Payments: Digital Services for MSMEs
                        </h2>
                        <div className="h-1 w-20 bg-blue-900"></div>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Payments are only one part of running a business. SSL provides value-added digital services that help MSMEs operate, communicate, and grow — even beyond financial transactions.
                        </p>
                    </div>
                </div>

                {/* Features List - Editorial Style */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-12 h-12 bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-blue-900/30 group-hover:bg-blue-50 transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4 pr-4 border-l-2 border-transparent group-hover:border-blue-900 group-hover:pl-3 transition-all duration-300">
                                {feature.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                {feature.copy}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Embedded By Design Statement - Architectural Block */}
                <div className="bg-slate-900 text-white p-10 md:p-16 relative overflow-hidden flex flex-col items-center justify-center text-center">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="relative z-10 max-w-2xl">
                        <span className="block text-[#635bff] font-bold tracking-widest uppercase text-xs mb-4">
                            Design Philosophy
                        </span>
                        <p className="text-2xl md:text-3xl font-bold leading-tight">
                            "Embedded by Design"
                        </p>
                        <div className="w-12 h-0.5 bg-[#635bff] mx-auto my-6"></div>
                        <p className="text-lg text-slate-300 font-medium">
                            All services are platform-integrated, affordable, and built for real-world operating conditions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
