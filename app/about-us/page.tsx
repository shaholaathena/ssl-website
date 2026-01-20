'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'

export default function AboutUsPage() {
    useSmoothScroll()

    const pillars = [
        {
            title: "Scale",
            description: "Built to handle national-level transaction volumes and peak concurrency with sub-second latency.",
            icon: "rocket"
        },
        {
            title: "Trust",
            description: "Licensed and audited by regulators to ensure the highest standards of financial security and transparency.",
            icon: "shield"
        },
        {
            title: "Impact",
            description: "Empowering millions of citizens and thousands of businesses through inclusive digital connectivity.",
            icon: "global"
        }
    ]

    const values = [
        {
            title: 'Our Vision',
            description: 'To be the leader in helping organizations improve their competitiveness by providing the best-in-class solutions.',
            icon: 'lightbulb'
        },
        {
            title: 'Our Mission',
            description: 'To be the provider of best-in-class value added services and digital marketing services to the citizens and organizations in Bangladesh.',
            icon: 'rocket'
        },
        {
            title: 'Our Values',
            description: 'Focus on customer needs, commit to excellence, and create a positive environment for all.',
            icon: 'trophy'
        }
    ]

    const workflow = [
        {
            title: 'Strategy',
            description: 'We formulate unique strategies that ensure success by working with industry leaders and experts.',
            icon: 'innovation'
        },
        {
            title: 'Analysis',
            description: 'Thoroughly evaluate every dimension to ensure we build robust and scalable solutions.',
            icon: 'shield'
        },
        {
            title: 'Success',
            description: 'We deliver result-oriented success through our innovative media and technology platform.',
            icon: 'trophy'
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
                                Institutional Profile
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            About <br />
                            <span className="text-blue-900">SSL Wireless.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-12">
                            Founded in Bangladesh, SSL Wireless has spent over two decades building and operating mission-critical digital platforms in regulated environments. Our focus is long-term infrastructure — designed for scale, trust, and national impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Scale & Magnitude - Stats Section */}
            <section className="py-24 border-b border-slate-100 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: 'Enterprise Services', value: '90+' },
                            { label: 'Banking Partners', value: '52+' },
                            { label: 'Corporate Clients', value: '3,500+' },
                            { label: 'Ecommerce Merchants', value: '10,000+' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter group-hover:text-blue-900 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Core Philosophy - The Institutional Pillars */}
            <section className="py-40 bg-slate-50/50">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center mb-24">
                    <span className="inline-block text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Foundation</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Our Operational Identity.</h2>
                </div>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-[0_48px_96px_-24px_rgba(15,23,42,0.12)] transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 text-blue-900">
                                    <Icon name={pillar.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{pillar.title}</h3>
                                <p className="text-lg text-slate-500 leading-relaxed font-light">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Strategic Governance - Mission/Vision/Values */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.02),transparent)]"></div>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-10 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl inline-block group-hover:bg-blue-400 group-hover:text-blue-900 transition-all duration-500">
                                        <Icon name={item.icon} className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 font-light leading-relaxed group-hover:text-white transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Narrative Section - Regulated Innovation */}
            <section className="py-40 bg-[#0F172A] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-[120px]"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-10">
                                <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] bg-white/5 border border-white/10 px-5 py-2 rounded-full shadow-sm">
                                    Strategic Focus
                                </span>
                            </div>
                            <h2 className="text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
                                Delivering Certainty in <br />
                                <span className="text-blue-400">Complex Landscapes.</span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
                                We operate at the intersection of regulatory compliance and technological agility. For 20+ years, we have been the trusted partner for the nation's largest institutions, ensuring that digital revolution is built on a foundation of absolute stability.
                            </p>
                            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">20+</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">100M+</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Annual Transactions</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-white/10 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                                {/* Abstract Visual Indicator */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 border border-white/5 rounded-full animate-spin-slow"></div>
                                    <div className="absolute w-48 h-48 border border-blue-900/20 rounded-full animate-spin-reverse-slow"></div>
                                    <div className="absolute w-32 h-32 bg-blue-900/10 rounded-full blur-xl animate-pulse"></div>
                                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Infrastructure Hub</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Execution Model - Workflow */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center mb-24">
                    <span className="inline-block text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Methodology</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">How we Architect Success.</h2>
                </div>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="mb-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all">
                                    <Icon name={step.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-light">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Final Grouping CTA */}
            <section className="py-40 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-none">
                                Deepen Your Understanding <br />
                                of Our Organization.
                            </h2>
                            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed group-hover:text-white/80 transition-colors">
                                Explore our full corporate structure, management philosophy, and detailed historical milestones.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="/our-company" className="px-12 py-5 bg-white text-slate-900 font-bold rounded-xl shadow-xl hover:scale-105 transition-all">
                                    Governance & Leadership
                                </a>
                                <a href="/our-milestones" className="px-12 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                                    Operational History
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
