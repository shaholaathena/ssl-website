'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ContactModal from './ContactModal'

interface GlobalCTAProps {
    title?: string
    subtitle?: string
    primaryLabel?: string
    secondaryLabel?: string
    type?: 'enterprise' | 'merchant' | 'partner' | 'compliance' | 'general'
}

export default function GlobalCTA({
    title = "Ready to scale your digital operations?",
    subtitle = "Our specialist teams are ready to architect the solution your institution needs.",
    primaryLabel = "Speak to our enterprise team",
    secondaryLabel = "View platforms",
    type = 'enterprise'
}: GlobalCTAProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section className="bg-[#0B0F19] py-32 relative overflow-hidden">
                {/* Institutional Grid & Glow */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl text-center lg:text-left">
                            <motion.span
                                className="inline-block text-[#635bff] font-bold tracking-[0.4em] uppercase text-[10px] mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Let's Build
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                                {title}
                            </h2>
                            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto items-stretch">
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full sm:w-auto px-5 py-5 bg-white text-slate-900 font-bold rounded-sm hover:bg-slate-50 transition-all text-center shadow-2xl shadow-black/10 text-[15px]"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {primaryLabel}
                            </motion.button>
                            <Link href="/platforms" className="w-full sm:w-auto">
                                <motion.button
                                    className="w-full px-5 py-5 bg-transparent text-white border border-slate-700 font-bold rounded-sm hover:bg-white/5 transition-all text-center text-[15px]"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {secondaryLabel}
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={primaryLabel}
                type={type}
            />
        </>
    )
}
