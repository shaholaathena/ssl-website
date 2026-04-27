'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const bankLogos = [
    { name: "City Bank", src: "/images/bank-logos/city-bank.jpg" },
    { name: "EBL", src: "/images/bank-logos/ebl.jpg" },
    { name: "Prime Bank", src: "/images/bank-logos/prime-bank.jpg" },
    { name: "Dutch-Bangla Bank", src: "/images/bank-logos/dbbl.jpg" },
    { name: "BRAC Bank", src: "/images/bank-logos/brac-bank.jpg" },
    { name: "Standard Chartered", src: "/images/bank-logos/scb.jpg" },
    { name: "Dhaka Bank", src: "/images/bank-logos/dhaka-bank.jpg" },
    { name: "Pubali Bank", src: "/images/bank-logos/pubali-bank.jpg" },
    { name: "SBAC Bank", src: "/images/bank-logos/sbac-bank-plc.jpg" },
    { name: "Trust Bank", src: "/images/bank-logos/trustbank.jpg" },
]

const schemeLogos = [
    { name: "Visa", src: "/images/schemes/visa.jpg" },
    { name: "Mastercard", src: "/images/schemes/mastercard.jpg" },
    { name: "UnionPay", src: "/images/schemes/unionpay.jpg" },
    { name: "NPSB", src: "/images/schemes/npsb.jpg" },
    { name: "bKash", src: "/images/schemes/bkash.jpg" },
    { name: "Nagad", src: "/images/schemes/nagad.jpg" },
]

const enterpriseLogos = [
    { name: "SAP", src: "/images/enterprise/sap.jpg" },
    { name: "AWS", src: "/images/enterprise/aws.jpg" },
]

export default function LogoWall() {
    return (
        <section className="bg-white py-24 border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em] mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Trusted By
                    </motion.span>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        The institutions that move Bangladesh trust SSL.
                    </motion.h2>
                </div>

                {/* Logo Tiers */}
                <div className="space-y-24">
                    {/* Bank Logos */}
                    <LogoSection title="Banks & Financial Institutions" logos={bankLogos} delay={0.1} />

                    {/* Scheme Logos */}
                    <LogoSection title="Schemes & Networks" logos={schemeLogos} delay={0.2} />

                    {/* Enterprise Logos */}
                    <LogoSection title="Enterprise & Technology" logos={enterpriseLogos} delay={0.3} />
                </div>

            </div>
        </section>
    )
}

function LogoSection({ title, logos, delay }: { title: string, logos: any[], delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="text-center"
        >
            <div className="flex items-center justify-center gap-6 mb-12">
                <div className="h-px flex-1 bg-slate-100 italic opacity-50 max-w-[120px] md:max-w-none"></div>
                <h3 className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">
                    {title}
                </h3>
                <div className="h-px flex-1 bg-slate-100 italic opacity-50 max-w-[120px] md:max-w-none"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-x-20 items-center">
                {logos.map((logo, logoIdx) => (
                    <div
                        key={logoIdx}
                        className="group relative h-16 flex items-center justify-center min-w-[160px] px-4 transition-all duration-500"
                    >
                        {logo.src ? (
                            <div className="relative h-full w-full max-w-[180px] transition-all duration-500">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <div className="text-sm font-extrabold text-slate-300 tracking-wider group-hover:text-blue-900/60 transition-colors uppercase italic whitespace-nowrap">
                                {logo.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
