'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

import Icon from '@/components/Icon'

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

const milestones = [
    {
        title: 'Pioneer in providing Value-Added Services to Mobile Operators and Banks',
        description: 'SSL Wireless started its journey in 1999 as a software developer with a focus on Value Added Services. Today, SSL Wireless is a leading Service Provider in the country, with its products and services making a difference to millions of customers every day.',
        image: '/images/office-hero.jpg',
        icon: 'message'
    },
    {
        title: 'First and the largest Merchant Solution Provider (MSP) in Bangladesh',
        description: 'SSL Wireless is the first and largest payment gateway in Bangladesh - SSLCOMMERZ which is licensed as a Payment Service Operator (PSO) by Bangladesh Bank. It provides a secure platform for over 10000+ merchants to accept online digital payments from their customers.',
        image: '/images/sslcommerz.png',
        icon: 'bank'
    },
    {
        title: 'Pioneer in Online Top-Up & Digital Marketing services',
        description: "SSL Wireless is the first and largest online mobile top-up service provider to all the mobile operators in the country. To provide more digital services to its clients, SSL has established a Digital Marketing Agency called 'DigitAl' to provide all kinds of digital marketing services to its corporate customers.",
        image: '/images/news-1.jpg',
        icon: 'rocket'
    },
    {
        title: 'Partnering with International companies and going beyond the borders',
        description: 'SSL Wireless is working with leading international companies on various projects such as TATA, Google, WhatsApp, BTB etc. Recently SSL Wireless has developed and deployed a Digital Wallet platform called "Tachyon" for the international software company which is being used in multiple countries around the world.',
        image: '/images/event-1.jpg',
        icon: 'global'
    },
    {
        title: 'Content Management for Media & Activation Campaigns for Enterprises',
        description: 'SSL Wireless provides complete content management services for all the national news and media organizations in the country. SSL is also conducting engaging activation campaigns for SMEs and large corporations through integrated plans, helping them reach their target audience and creating meaningful interactions through its innovative media and technology solutions.',
        image: '/images/news-3.jpg',
        icon: 'support'
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

export default function GovernancePage() {
    useSmoothScroll()

    const governancePrinciples = [
        {
            title: "Transparency",
            description: "Maintaining clear, open communication with stakeholders and regulators regarding operational health and strategic direction.",
            icon: "shield"
        },
        {
            title: "Accountability",
            description: "Rigorous internal auditing and performance metrics to ensure adherence to institutional standards and national regulations.",
            icon: "trophy"
        },
        {
            title: "Strategic Stability",
            description: "Long-term planning that prioritizes infrastructure resilience over short-term market fluctuations.",
            icon: "innovation"
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
                                Leadership Hub
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Governance & <br />
                            <span className="text-blue-900">Leadership.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-12">
                            Guided by veterans of the digital landscape, our leadership ensures strategic stability and innovative growth across all regulated sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Institutional Leadership Grid */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                        <div className="max-w-2xl">
                            <span className="inline-block text-blue-900 font-bold tracking-[x0.4em] uppercase text-[10px] mb-6">Executive Board</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none">
                                Strategic <br />
                                <span className="text-blue-900">Management.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { role: "Executive Management", area: "Strategic Planning" },
                            { role: "Technical Operations", area: "Infrastructure Scale" },
                            { role: "Regulatory Affairs", area: "Compliance Hub" },
                            { role: "Product Strategy", area: "Innovation Framework" },
                            { role: "Corporate Development", area: "Long-term Impact" },
                            { role: "Global Solutions", area: "Ecosystem Growth" },
                        ].map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-slate-50 border border-slate-100 rounded-[2rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/5 blur-3xl group-hover:bg-blue-900/10 transition-all"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-1 bg-blue-900 mb-8"></div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.role}</h3>
                                    <div className="text-[10px] font-bold text-blue-900 uppercase tracking-widest mb-6">
                                        {leader.area}
                                    </div>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                                        Overseeing the critical intersection of high-scale engineering and regulatory alignment to deliver national-level impact.
                                    </p>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        Verified Role
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Governance Framework Section */}
            <section className="py-40 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(30,58,138,0.2),transparent)]"></div>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Control Systems</span>
                            <h2 className="text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
                                Our Governance <br />
                                <span className="text-blue-400">Framework.</span>
                            </h2>
                            <div className="space-y-12">
                                {governancePrinciples.map((principle, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-blue-900 transition-all">
                                            <Icon name={principle.icon} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{principle.title}</h4>
                                            <p className="text-slate-400 font-light leading-relaxed">{principle.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 relative group shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Institutional Report</div>
                                    <h3 className="text-3xl font-bold text-white mb-6">Annual Governance & <br />Compliance Audit 2025</h3>
                                    <a href="/compliance" className="inline-flex items-center gap-3 text-white font-bold group">
                                        View Compliance Hub
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
