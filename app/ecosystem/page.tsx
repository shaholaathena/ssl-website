'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ecosystemLayers = [
    {
        title: "Regulated Infrastructure",
        description: "Direct licensed connectivity with the central bank through major financial institutions, ensuring every transaction moves through authorized rails.",
        partners: ["Bangladesh Bank (RTGS/BEFTN)", "NPSB", "Licensed Banks"],
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        title: "Communication Backbones",
        description: "Primary tier-1 connectivity with all Mobile Network Operators (MNOs) for high-availability messaging and USSD services.",
        partners: ["Grameenphone", "Robi", "Banglalink", "Teletalk"],
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        )
    },
    {
        title: "Digital Payment Schemes",
        description: "Full integration with international cards and domestic MFS providers to provide a borderless payment experience.",
        partners: ["Visa", "Mastercard", "bKash", "Nagad", "Rocket"],
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
        )
    }
]

export default function EcosystemPage() {
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
                                National Connectivity
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            The Hub of <br />
                            <span className="text-blue-900">Digital Bangladesh.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed font-light text-balance">
                            Acting as the critical middleware layer between regulated banking, telecommunications, and digital commerce. We manage the "pipes" that power an entire nation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Core Governance Role - Technical Visual */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em]">Our Neutral Role</span>
                                <div className="h-px w-8 bg-blue-900/20"></div>
                            </div>
                            <h2 className="text-5xl font-bold text-slate-900 mb-10 leading-[1.1] tracking-tight">Neutral Infrastructure. Multi-Sector Reach.</h2>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light">
                                We operate as a neutral technological partner, ensuring that platforms remain interoperable regardless of the underlying core banking system or mobile network provider.
                            </p>
                            <div className="grid gap-4">
                                {[
                                    { title: "Standardized Interfaces", detail: "Uniform APIs that hide the complexity of legacy backend systems." },
                                    { title: "Resilient Routing", detail: "Dynamic failover across multiple data centers and network paths." },
                                    { title: "Regulatory Alignment", detail: "Architected to meet the reporting and compliance standards of central regulators." }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-900/10 transition-all">
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-sm font-light">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative">
                            {/* High Fidelity Orbital Visualization */}
                            <div className="relative aspect-square rounded-[3rem] bg-[#0F172A] border border-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                                <div className="absolute inset-0 bg-blue-900/5 blur-[100px]"></div>

                                {/* Rotating Outer Ring */}
                                <div className="absolute w-[80%] h-[80%] border border-blue-500/10 rounded-full animate-spin-slow"></div>
                                <div className="absolute w-[60%] h-[60%] border border-blue-400/20 border-t-transparent rounded-full animate-spin-reverse-slow"></div>

                                <motion.div
                                    className="relative z-10 w-48 h-48 bg-blue-900 text-white rounded-3xl shadow-3xl flex items-center justify-center text-center p-8 border border-blue-500/30"
                                    animate={{ boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.2)", "0 0 0 40px rgba(59, 130, 246, 0)"] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <div className="text-xs font-bold leading-tight tracking-[0.2em]">SSL WIRELESS CORE INFRASTRUCTURE</div>
                                </motion.div>

                                {/* Orbiting Data Labels */}
                                {[
                                    { label: "MNOs", angle: 0 },
                                    { label: "Banks", angle: 90 },
                                    { label: "Merchants", angle: 180 },
                                    { label: "Regulators", angle: 270 }
                                ].map((node, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="absolute p-4 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl"
                                        initial={{
                                            rotate: node.angle,
                                            x: 0,
                                            y: 0
                                        }}
                                        animate={{ rotate: node.angle + 360 }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        style={{ transformOrigin: "center 220px", top: "calc(50% - 220px)" }}
                                    >
                                        <div
                                            className="text-[10px] font-mono font-bold text-white tracking-[0.2em] transform"
                                            style={{ transform: `rotate(-${node.angle}deg)` }}
                                        >
                                            {node.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Integration Layers - Refined Grid */}
            <section className="py-40 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center mb-20">
                        <span className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em] mb-4 block">Ecosystem Nodes</span>
                        <h3 className="text-5xl font-bold text-slate-900 tracking-tight">Seamless Connectivity Layers</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {ecosystemLayers.map((layer, idx) => (
                            <div key={idx} className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 hover:shadow-[0_48px_96px_-24px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500">
                                <div className="w-16 h-16 bg-blue-900/5 text-blue-900 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-900 group-hover:text-white transition-all">
                                    {layer.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-6">{layer.title}</h4>
                                <p className="text-slate-500 text-base leading-relaxed mb-10 font-light h-24">
                                    {layer.description}
                                </p>
                                <div className="pt-8 border-t border-slate-50">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Key Entities</div>
                                    <div className="flex flex-wrap gap-2">
                                        {layer.partners.map((p, pi) => (
                                            <span key={pi} className="text-[10px] font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Scale Section - Institutional Focus */}
            <section className="py-40 bg-[#0F172A] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px]"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="text-white">
                            <h2 className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.5em] mb-6">Scale & Resilience</h2>
                            <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-none">Architected for <br /><span className="text-blue-500">National Scale.</span></h3>
                            <p className="text-slate-400 text-xl leading-relaxed font-light mb-12">
                                When a platform connects to SSL Wireless, it connects to a comprehensive digital infrastructure managing millions of requests hourly with banking-grade 99.99% availability.
                            </p>

                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2">500k+</div>
                                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Daily API Calls</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Uptime Record</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
                            <div className="space-y-8">
                                {[
                                    { label: "Transaction Latency", value: "< 200ms", color: "text-emerald-400" },
                                    { label: "Network Failover", value: "Automatic Tier-3", color: "text-white" },
                                    { label: "Data Encryption", value: "AES-256 / RSA-4096", color: "text-white" },
                                    { label: "Regulatory Reporting", value: "Real-time Auditing", color: "text-blue-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 last:border-0">
                                        <span className="text-slate-400 text-sm font-light uppercase tracking-widest">{stat.label}</span>
                                        <span className={`font-mono text-sm font-bold ${stat.color}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA - Premium Strip */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <div className="bg-slate-50 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-900/[0.02] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight relative z-10">Start your integration journey <br />into the SSL Ecosystem.</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <a href="/contact" className="px-12 py-5 bg-blue-900 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all">
                                Partner Integration Inquiry
                            </a>
                            <a href="/solutions" className="px-12 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all">
                                Explore Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
