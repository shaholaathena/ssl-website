'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const certifications = [
    {
        id: 'pci-dss',
        title: 'PCI DSS v3.2.1',
        category: 'Information Security',
        description: 'SSL Wireless is the first and largest Merchant Solution Provider (MSP) in the country, maintaining the highest globally recognized rating for payment data security.',
        color: 'cyan'
    },
    {
        id: 'cmmi',
        title: 'CMMI-DEV v1.3 Level 3',
        category: 'Process Excellence',
        description: 'Appraised at Level 3 of the CMMI Institute’s Capability Maturity Model Integration for Development, ensuring excellence in software development and quality assurance.',
        color: 'blue'
    },
    {
        id: 'iso-27001',
        title: 'ISO/IEC 27001:2013',
        category: 'Security Management',
        description: 'Certified for international standards in information security, affirming our commitment to data protection and service quality through strict compliance.',
        color: 'indigo'
    },
    {
        id: 'tvas',
        title: 'TVAS Registration',
        category: 'Telecommunication',
        description: 'Recipient of the Registration Certificate for Telecommunication Value Added Services (TVAS) from the Bangladesh Telecommunication Regulatory Commission (BTRC).',
        color: 'emerald'
    },
    {
        id: 'pso-license',
        title: 'PSO License',
        category: 'Fintech Authorization',
        description: 'Authorized and licensed by Bangladesh Bank with a Payment Systems Operator (PSO) license for implementing secure controls and regulatory compliance.',
        color: 'blue'
    }
]

export default function OurCertifications() {
    useSmoothScroll()

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
                                Technical Compliance
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Our Authoritative <br />
                            <span className="text-blue-900">Certifications.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-6">
                            Maintaining the highest globally recognized ratings for data security and process maturity. We are architected for institutional trust and regulatory excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg className="w-24 h-24 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-bold tracking-[0.2em] text-[#2D499A] uppercase mb-6">{cert.category}</div>
                                <h3 className="text-3xl font-normal text-gray-900 mb-6 font-serif italic">{cert.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">{cert.description}</p>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
