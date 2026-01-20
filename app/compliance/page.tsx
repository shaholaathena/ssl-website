'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const certifications = [
    {
        name: "PCI DSS Level 1",
        version: "v4.0 Certified",
        description: "The highest level of security standard for organizations that handle branded credit cards from major card schemes.",
        issuer: "PCI Security Standards Council"
    },
    {
        name: "ISO 27001:2013",
        version: "ISMS Certified",
        description: "International standard for information security management systems, ensuring robust data protection controls.",
        issuer: "International Organization for Standardization"
    },
    {
        name: "ISO 9001:2015",
        version: "QMS Certified",
        description: "Standard for quality management systems ensuring consistent delivery of services that meet regulatory requirements.",
        issuer: "International Organization for Standardization"
    }
]

const compliancePillars = [
    {
        title: "Regulatory Alignment",
        detail: "Licensed and regulated by Bangladesh Bank as a Payment System Operator (PSO) and Payment Service Provider (PSP). We maintain strict adherence to Central Bank guidelines and national financial policies.",
        points: ["PSO Licensed", "PSP Licensed", "RTGS/BEFTN Enabled"]
    },
    {
        title: "Security & Data Protection",
        detail: "Our security stack utilizes military-grade AES-256 encryption for data-at-rest and TLS 1.3 for data-in-transit. We operate a dedicated 24/7 Security Operations Center (SOC).",
        points: ["Zero Trust Architecture", "End-to-End Encryption", "Biometric Authentication"]
    },
    {
        title: "Risk & Controls",
        detail: "Rigorous KYC/AML monitoring and automated fraud detection engines. Our risk management framework is designed to identify and mitigate threats in real-time.",
        points: ["AML Monitoring", "Fraud Prevention", "Continuous Auditing"]
    }
]

export default function CompliancePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* 1. Immersive Hero - Institutional Focus */}
            <section className="relative pt-56 pb-32 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
                {/* Advanced Background Decoration */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-900/[0.04] to-transparent blur-[120px]"></div>

                {/* Floating Parallax Nodes (Decorative) */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-900/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-900/40 rounded-full animate-pulse [animation-delay:1s]"></div>
                <div className="absolute bottom-1/4 right-10 w-3 h-3 border border-blue-900/10 rounded-full animate-bounce [animation-duration:5s]"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <span className="text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm">
                                Control Workspace
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Sovereign <br />
                            <span className="text-blue-900">Compliance.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed font-light text-balance">
                            Hardened financial infrastructure architected for global institutional scrutiny. We deploy a multi-layered governance framework that simplifies sovereign regulation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Foundational Standards - Premium Certification Strip */}
            <div className="relative z-20 -mt-16">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-6 bg-white/80 backdrop-blur-xl p-3 rounded-2xl shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] border border-white">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative bg-[#0F172A] p-8 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-1"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + (idx * 0.1) }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest mb-3 opacity-80">{cert.version}</div>
                                    <h4 className="text-white font-bold text-lg mb-2">{cert.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">System Validated</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 text-white/5 group-hover:text-blue-500/10 transition-colors">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3.5 6.44v5.56c0 5.24 3.62 10.14 8.5 11.5 4.88-1.36 8.5-6.26 8.5-11.5V6.44L12 2z" /></svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. The Digital Governance Protocols - Luxury Content Hub */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="flex flex-col gap-48">
                        {compliancePillars.map((pillar, idx) => (
                            <div key={idx} className="grid lg:grid-cols-12 gap-24 items-start">
                                {/* Left Content */}
                                <div className="lg:col-span-5 lg:sticky lg:top-40">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em]">Protocol {idx + 1}</span>
                                        <div className="h-[2px] w-8 bg-blue-900/20"></div>
                                    </div>
                                    <h2 className="text-5xl font-bold text-slate-900 mb-10 leading-[1.1] tracking-tight">{pillar.title}</h2>
                                    <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light">
                                        {pillar.detail}
                                    </p>
                                    <div className="grid grid-cols-1 gap-4">
                                        {pillar.points.map((pt, i) => (
                                            <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 group hover:border-blue-900/20 transition-all">
                                                <div className="w-8 h-8 rounded-full bg-blue-900/5 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <span className="text-sm font-bold text-slate-800">{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Visual - High Fidelity Workspace */}
                                <div className="lg:col-span-7">
                                    <motion.div
                                        className="relative rounded-3xl overflow-hidden bg-[#0F172A] shadow-[0_48px_96px_-24px_rgba(15,23,42,0.25)] border border-slate-800"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        {/* Dashboard Header */}
                                        <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-6 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2 ha-2 rounded-full bg-slate-700"></div>
                                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                                </div>
                                                <div className="h-4 w-px bg-slate-800 mx-2"></div>
                                                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Live Monitoring: {pillar.title}</div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                                    <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Sys_OK</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-16 aspect-[16/10] flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                                            {/* Technical Glass Panel */}
                                            <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center">
                                                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full"></div>

                                                {/* Main Core Graphic */}
                                                <div className="relative w-48 h-48">
                                                    <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                                                    <div className="absolute inset-4 border border-blue-400/40 border-t-transparent rounded-full animate-spin-reverse-slow"></div>
                                                    <div className="absolute inset-8 bg-blue-900/30 backdrop-blur-2xl rounded-2xl border border-blue-500/50 flex items-center justify-center shadow-2xl">
                                                        <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Floatings Data Panels */}
                                                <div className="absolute top-0 right-0 p-4 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl scale-75 lg:scale-100">
                                                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Enc_Status</div>
                                                    <div className="text-xl font-mono text-white">TLS 1.3</div>
                                                </div>
                                                <div className="absolute bottom-0 left-0 p-4 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl scale-75 lg:scale-100">
                                                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Latency</div>
                                                    <div className="text-xl font-mono text-emerald-400">12ms</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activity Stream */}
                                        <div className="bg-slate-900 px-8 py-6 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                                            <div className="flex items-center gap-6">
                                                <div className="flex gap-2">
                                                    <span className="text-blue-500">SCAN:</span> COMPLETED
                                                </div>
                                                <div className="h-3 w-px bg-slate-700"></div>
                                                <div className="flex gap-2">
                                                    <span className="text-blue-500">TRUST:</span> VERIFIED
                                                </div>
                                            </div>
                                            <div>HASH_0X295A...</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Integrity Grid - Security Depth */}
            <section className="py-40 bg-[#0F172A] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-[12px] font-bold text-blue-500 uppercase tracking-[0.5em] mb-6">Security Depth</h2>
                        <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Audited. Hardened. Infinite.</h3>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">Independent validation is a continuous process, not a periodic event. Our systems are scanned daily and audited quarterly.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Internal Audits", val: "Monthly", color: "blue" },
                            { label: "External Audits", val: "Quarterly", color: "emerald" },
                            { label: "Pen-Testing", val: "Continuous", color: "purple" },
                            { label: "Vuln. Scans", val: "Daily", color: "sky" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="p-10 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform origin-left">{stat.val}</div>
                                <div className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Institutional CTA - Luxury Design */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="relative group overflow-hidden rounded-[3rem] bg-slate-900 aspect-[21/9] flex items-center shadow-3xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="absolute -right-40 -top-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] group-hover:bg-blue-600/30 transition-all duration-1000"></div>

                        <div className="relative z-10 px-12 lg:px-24 w-full flex flex-col md:flex-row items-center justify-between gap-16">
                            <div className="max-w-2xl">
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">Banking-Grade Access <br /><span className="text-blue-400">for Regulators & Partners</span></h4>
                                <p className="text-slate-400 text-xl leading-relaxed font-light">
                                    Requiring deep-tech SOC reports or audit packages? Access our secure compliance ecosystem.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <motion.a
                                    href="/contact?dept=compliance"
                                    className="px-12 py-6 bg-white text-slate-900 text-lg font-bold rounded-2xl shadow-2xl hover:bg-blue-50 transition-all whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Access Compliance Vault
                                </motion.a>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Credentials Required</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
