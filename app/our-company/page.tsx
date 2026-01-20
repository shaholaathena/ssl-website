'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'
import Image from 'next/image'

const leadershipTeam = [
    {
        name: "Sayeeful Islam",
        title: "Managing Director",
        image: "/images/team/sayeeful-islam.jpg",
        tier: 1
    },
    {
        name: "Ahmed Kamal Chowdhury",
        title: "Group Advisor",
        image: "/images/team/ahmed-kamal.jpg",
        tier: 1
    },
    {
        name: "S. Nibras Islam",
        title: "Director, SSL Wireless",
        image: "/images/team/nibras-islam.jpg",
        tier: 2
    },
    {
        name: "Raiyan S. Islam",
        title: "CEO, SSLCOMMERZ",
        image: "/images/team/raiyan-islam.jpg",
        tier: 2
    },
    {
        name: "Iftekhar Alam Ishaque",
        title: "CEO, SSL Wireless",
        image: "/images/team/iftekhar-alam.jpg",
        tier: 2
    },
    {
        name: "S M Raihan Rashid",
        title: "CEO, SSL Wireless",
        image: "/images/team/raihan-rashid.jpg",
        tier: 2
    },
    {
        name: "Abdullah Al Mahbub",
        title: "Advisor, Group Finance",
        image: "/images/team/abdullah-mahbub.jpg",
        tier: 2
    },
    {
        name: "Mohiuddin Tawfik",
        title: "General Manager, Head of Banking & Financial Services",
        image: "/images/team/mohiuddin-tawfik.jpg",
        tier: 3
    },
    {
        name: "Md. Mahmud Hassan Bhuiyan",
        title: "General Manager, Head of Service Assurance",
        image: "/images/team/mahmud-hassan.jpg",
        tier: 3
    },
    {
        name: "Ashekur Rahman Molla",
        title: "Deputy General Manager, Head of Engineering",
        image: "/images/team/ashekur-rahman.jpg",
        tier: 3
    },
    {
        name: "Mostaque Ahmed",
        title: "Deputy General Manager, Head of Core Infrastructure",
        image: "/images/team/mostaque-ahmed.jpg",
        tier: 3
    },
    {
        name: "Rahat Zaman Sajib",
        title: "Assist. General Manager, Innovation Center of Excellence",
        image: "/images/team/rahat-zaman.jpg",
        tier: 4
    },
    {
        name: "Md. Saqir Ahmed",
        title: "Deputy General Manager, Head of E-Commerce Services",
        image: "/images/team/saqir-ahmed.jpg",
        tier: 4
    },
    {
        name: "Md. Rahat Hossain",
        title: "Assist. General Manager, Banking and Financial Services",
        image: "/images/team/rahat-hossain.jpg",
        tier: 4
    },
    {
        name: "Mohammad Saiful Islam",
        title: "Manager, Human Resource",
        image: "/images/team/saiful-islam.jpg",
        tier: 5
    },
    {
        name: "Md. Mahabub Hossain",
        title: "Manager, Risk & Compliance",
        image: "/images/team/mahabub-hossain.jpg",
        tier: 5
    }
]

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

export default function GovernancePage() {
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

            {/* 2. Executive Leadership */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center mb-20">
                        <span className="inline-block text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Executive Board</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none mb-6">
                            Company Management & <br />
                            <span className="text-blue-900">Leadership Team.</span>
                        </h2>
                    </div>

                    {/* Top Leadership - Tier 1 */}
                    <div className="flex justify-center gap-12 mb-24">
                        {leadershipTeam.filter(leader => leader.tier === 1).map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="relative w-48 h-48 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-blue-900 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                        <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                                <div className="text-sm font-bold text-blue-900 uppercase tracking-widest">{leader.title}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Senior Leadership - Tier 2 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
                        {leadershipTeam.filter(leader => leader.tier === 2).map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-200 shadow-lg group-hover:border-blue-900 transition-colors">
                                        <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{leader.name}</h3>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-tight">{leader.title}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Management Team - Tier 3 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {leadershipTeam.filter(leader => leader.tier === 3).map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                            >
                                <div className="relative w-24 h-24 mx-auto mb-4">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                                        <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">{leader.name}</h3>
                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide leading-tight">{leader.title}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Deputy Management - Tier 4 */}
                    <div className="grid grid-cols-3 gap-6 mb-16">
                        {leadershipTeam.filter(leader => leader.tier === 4).map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-slate-100 rounded-xl p-5 text-center hover:border-blue-200 transition-all"
                            >
                                <div className="relative w-20 h-20 mx-auto mb-3">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200">
                                        <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 mb-1">{leader.name}</h3>
                                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wide leading-tight">{leader.title}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Managers - Tier 5 */}
                    <div className="flex justify-center gap-6">
                        {leadershipTeam.filter(leader => leader.tier === 5).map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-slate-100 rounded-xl p-5 text-center hover:border-blue-200 transition-all w-64"
                            >
                                <div className="relative w-20 h-20 mx-auto mb-3">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200">
                                        <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 mb-1">{leader.name}</h3>
                                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wide leading-tight">{leader.title}</div>
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
