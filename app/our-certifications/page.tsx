'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const certifications = [
    {
        id: 'iso-9001',
        title: 'ISO 9001:2015',
        category: 'Quality Management',
        description: 'Certified for Quality Management Systems, ensuring consistent quality in our products and services.',
        color: 'blue'
    },
    {
        id: 'iso-27001',
        title: 'ISO 27001:2013',
        category: 'Information Security',
        description: 'Certified for Information Security Management, guaranteeing the safety of client data.',
        color: 'green'
    },
    {
        id: 'pci-dss',
        title: 'PCI DSS',
        category: 'Security',
        description: 'Payment Card Industry Data Security Standard compliant for secure financial transactions.',
        color: 'purple'
    },
    {
        id: 'cmmi',
        title: 'CMMI Level 3',
        category: 'Process Improvement',
        description: 'Appraised at CMMI Level 3, demonstrating defined and effective organizational processes.',
        color: 'orange'
    },
    {
        id: 'basis',
        title: 'BASIS Member',
        category: 'Membership',
        description: 'Proud member of the Bangladesh Association of Software and Information Services.',
        color: 'red'
    }
]

export default function OurCertifications() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-8"
                    >
                        Recognized <span className="font-serif italic text-blue-900">Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Our commitment to quality, security, and industry standards is validated by global certifications.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-${cert.color}-50 group-hover:bg-${cert.color}-100 transition-colors`}>
                                    <svg className={`w-8 h-8 text-${cert.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">{cert.category}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
