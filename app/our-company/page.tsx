'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'
import Image from 'next/image'

const leadershipTeam = [
    {
        name: "Sabrina Islam",
        title: "Chairman",
        image: "/images/team/sabrina-islam.png",
        tier: 1
    },
    {
        name: "Sayeeful Islam",
        title: "Managing Director",
        image: "/images/team/sayeeful-islam.png",
        tier: 1
    },
    {
        name: "Ahmed Kamal Chowdhury",
        title: "Group Advisor",
        image: "/images/team/ahmed-kamal.png",
        tier: 1
    },
    {
        name: "S. Nibras Islam",
        title: "Director, SSL Wireless",
        image: "/images/team/nibras-islam.png",
        tier: 2
    },
    {
        name: "Raiyan S. Islam",
        title: "Director & CEO, SSLCOMMERZ",
        image: "/images/team/raiyan-islam.png",
        tier: 2
    },
    {
        name: "Iftekhar Alam Ishaque",
        title: "CEO, SSL Wireless",
        image: "/images/team/iftekhar-alam.png",
        tier: 2
    },
    {
        name: "S M Raihan Rashid",
        title: "CEO, SSL Wireless",
        image: "/images/team/raihan-rashid.png",
        tier: 2
    },
    {
        name: "Abdullah Al Mahbub",
        title: "Advisor, Group Finance",
        image: "/images/team/abdullah-mahbub.png",
        tier: 2
    },
    {
        name: "Mohiuddin Tawfik",
        title: "General Manager, Head of Banking & Financial Services",
        image: "/images/team/mohiuddin-tawfik.png",
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
        image: "/images/team/ashekur-rahman.png",
        tier: 3
    },
    {
        name: "Mostaque Ahmed",
        title: "Deputy General Manager, Head of Core Infrastructure",
        image: "/images/team/mostaque-ahmed.png",
        tier: 3
    },
    {
        name: "Rahat Zaman Sajib",
        title: "Assist. General Manager, Innovation Center of Excellence",
        image: "/images/team/rahat-zaman.jpg",
        tier: 4
    },
    {
        name: "Md. Sagir Ahmed",
        title: "Deputy General Manager, Head of E-Commerce Services",
        image: "/images/team/sagir-ahmed.png",
        tier: 4
    },
    {
        name: "Md. Rahat Hossain",
        title: "Assist. General Manager, Banking and Financial Services",
        image: "/images/team/rahat-hossain.png",
        tier: 4
    },
    {
        name: "Mohammad Ashfaque Ali",
        title: "Head of Project Management Office",
        image: "/images/team/mohammad-ashfaque.png",
        tier: 5
    },
    {
        name: "Mohammad Saiful Islam",
        title: "Head of Human Resources",
        image: "/images/team/saiful-islam.png",
        tier: 5
    },
    {
        name: "Mohaimen-Al-Rashid",
        title: "Head of Legal Affairs",
        image: "/images/team/mohaimen-rashid.jpg",
        tier: 5
    },
    {
        name: "Md. Mahabub Hossain",
        title: "Manager, Risk & Compliance",
        image: "/images/team/mahabub-hossain.png",
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
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
            <Header />

            {/* 1. Immersive Hero */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-blue-900/5 to-transparent blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-blue-900 font-bold tracking-[0.3em] uppercase text-[10px] bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
                                Leadership Hub
                            </span>
                            <div className="h-px w-12 bg-blue-900/20"></div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                            Governance & <br />
                            <span className="text-blue-900">Leadership.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light text-balance mb-12">
                            Guided by veterans of the digital landscape, our leadership ensures strategic stability and innovative growth across all regulated sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Executive Leadership */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6"
                        >
                            The Executive <span className="text-blue-900">Board.</span>
                        </motion.h2>
                        <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full opacity-20"></div>
                    </div>

                    {/* Tier 1: The Visionaries */}
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-32 max-w-7xl mx-auto">
                        {leadershipTeam.filter(leader => leader.tier === 1).map((leader, i) => (
                            <LeaderCardLarge key={i} leader={leader} index={i} />
                        ))}
                    </div>

                    {/* Tier 2: The Strategists */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Directors & CEOs</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                            {leadershipTeam.filter(leader => leader.tier === 2).map((leader, i) => (
                                <LeaderCardMedium key={i} leader={leader} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Tier 3-5: Management & Leadership */}
                    <div className="space-y-24">
                        {/* Tier 3 */}
                        <div>
                            <div className="text-center mb-12">
                                <span className="text-slate-400 font-medium tracking-widest text-xs uppercase">Senior Management</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {leadershipTeam.filter(leader => leader.tier === 3).map((leader, i) => (
                                    <LeaderCardStandard key={i} leader={leader} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* Tier 4 */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                                {leadershipTeam.filter(leader => leader.tier === 4).map((leader, i) => (
                                    <LeaderCardStandard key={i} leader={leader} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* Tier 5 */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                                {leadershipTeam.filter(leader => leader.tier === 5).map((leader, i) => (
                                    <LeaderCardStandard key={i} leader={leader} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Governance Framework Section */}
            <section className="py-32 bg-slate-950 relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent)]"></div>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[11px] mb-8 block">Control Systems</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight text-white">
                                Our Governance <br />
                                <span className="text-blue-400">Framework.</span>
                            </h2>
                            <div className="space-y-10">
                                {governancePrinciples.map((principle, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                                            <Icon name={principle.icon} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{principle.title}</h4>
                                            <p className="text-slate-400 font-light leading-relaxed text-sm lg:text-base">{principle.description}</p>
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
                            <div className="aspect-[4/5] bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 relative group shadow-2xl hover:border-blue-500/30 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-slate-900/50 to-slate-900/20"></div>
                                {/* CSS Pattern BG */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                                {/* Center Decorative Graphic - Rich & Animated */}
                                <div className="absolute inset-0 flex items-center justify-center -translate-y-[10%]">
                                    <div className="relative w-full h-full max-w-[300px] max-h-[300px] flex items-center justify-center">
                                        {/* Outer Orbit */}
                                        <div className="absolute w-[120%] h-[120%] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]">
                                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full blur-[2px] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                        </div>

                                        {/* Inner Orbit (Dashed) */}
                                        <div className="absolute w-[80%] h-[80%] border border-blue-400/20 border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

                                        {/* Central Core Element */}
                                        <div className="relative z-10">
                                            <div className="absolute inset-0 bg-blue-600/30 blur-[60px] rounded-full animate-pulse"></div>
                                            <div className="relative w-32 h-32 bg-slate-900/40 backdrop-blur-md border border-blue-500/30 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-500">
                                                <Icon name="shield" className="w-16 h-16 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                                                {/* Corner Tech Accents */}
                                                <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-blue-400 rounded-tl-sm"></div>
                                                <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-blue-400 rounded-tr-sm"></div>
                                                <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-blue-400 rounded-bl-sm"></div>
                                                <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-blue-400 rounded-br-sm"></div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-white rounded-full animate-ping [animation-duration:3s]"></div>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Institutional Report</div>
                                    <h3 className="text-3xl font-bold text-white mb-8">Annual Governance & <br />Compliance Audit 2025</h3>
                                    <a href="/compliance" className="inline-flex items-center gap-3 text-white font-bold group/link relative overflow-hidden pl-0 hover:pl-2 transition-all">
                                        View Compliance Hub
                                        <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
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

function LeaderCardLarge({ leader, index }: { leader: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent rounded-[2rem] -rotate-3 scale-[0.98] group-hover:rotate-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
            <div className="relative bg-white border border-slate-100 rounded-[1.5rem] p-6 text-center shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500">
                <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-blue-900/5 rounded-full blur-3xl scale-90 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-lg group-hover:border-blue-50 transition-colors">
                        <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">{leader.title}</div>
            </div>
        </motion.div>
    )
}

function LeaderCardMedium({ leader, index }: { leader: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group text-center"
        >
            <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-slate-100 shadow-md group-hover:shadow-xl group-hover:border-blue-600/30 transition-all duration-300">
                    <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-500" />
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">{leader.name}</h3>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-tight">{leader.title}</div>
        </motion.div>
    )
}

function LeaderCardStandard({ leader, index }: { leader: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300"
        >
            <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Image src={leader.image} alt={leader.name} layout="fill" objectFit="cover" />
                </div>
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{leader.name}</h3>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-tight group-hover:text-slate-500">{leader.title}</div>
        </motion.div>
    )
}
