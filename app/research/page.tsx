'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Icon from '@/components/Icon'

const researchAreas = [
    {
        icon: 'iot',
        title: 'Internet of Things',
        description: 'Enabling things around you to send/receive information over the internet.'
    },
    {
        icon: 'ai',
        title: 'Artificial Intelligence',
        description: 'Absorb, interpret, make complex decisions, and perform human-like tasks.'
    },
    {
        icon: 'ml',
        title: 'Machine Learning',
        description: 'Enabling machines to analyze, recognize, & learn, then apply to predict & improve.'
    },
    {
        icon: 'data_science',
        title: 'Data Science',
        description: 'Helping businesses to make decisions based on facts, statistical numbers, and trends.'
    }
]

const projectSteps = [
    {
        title: 'Innovative Research and Development',
        description: 'Our research consists of technical development activities undertaken in developing new services or products constituting the first stage of development of a potential new product/service. We first build a Proof of Concept (POC) to demonstrate the feasibility of a concept/idea and verify that it has practical potential.',
        image: '/images/research-hero.jpg',
        badge: 'Step 1: POC'
    },
    {
        title: 'Building and Refining for Success',
        description: 'Then in the second stage, we go for the Minimum Viable Product (MVP), where we build a version of the product/service with just enough features to satisfy early customers and collect feedback for future product development. Based on MVP’s success, we release commercial versions.',
        image: '/images/event-2.jpg',
        badge: 'Step 2: MVP'
    }
]

const productHighlights = [
    {
        title: 'Voice Bot',
        description: 'A Bangla speech recognition bot where users can give commands in Bangla and the computer can recognize the commands and execute the actions.',
        image: '/images/news-2.jpg',
        icon: 'voice'
    },
    {
        title: 'i-Receptionist',
        description: 'A smart and secure way to manage your visitors. It has system-integrated facial recognition, a visitor approval system, historical data for records, and compliance.',
        image: '/images/news-1.jpg',
        icon: 'user_scan'
    }
]

export default function Research() {
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
                                Future Intelligence
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Building <br />
                            <span className="text-blue-900">Tomorrow's Core.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance">
                            We are investing in the research and development of the technologies that will define the next decade. From artificial intelligence to national-scale technical systems, we build the foundations of a future-ready nation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Research Section */}
            <section className="relative py-32 text-gray-900 overflow-hidden">
                {/* Background graphic for consistency with Our Company */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/mission-vision-bg-v2.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mb-20">
                        <h2 className="text-4xl md:text-6xl font-normal font-serif italic text-gray-900 mb-8">Research Focus</h2>
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            Research, by its essence, embodies the overall process leading to innovation. We are investing in technology and future capabilities, which can transform into new products, processes, and services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {researchAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] hover:bg-white/20 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="mb-8 p-5 bg-white/20 backdrop-blur-md rounded-2xl inline-block group-hover:scale-110 group-hover:bg-white/40 transition-all duration-500 text-[#2D499A] border border-white/30 shadow-sm">
                                    <Icon name={area.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-normal text-gray-900 mb-4 relative z-10 font-serif italic">{area.title}</h3>
                                <p className="text-gray-600 leading-relaxed relative z-10 font-medium">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prototyping Steps */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-normal font-serif italic text-gray-900 mb-4">Prototyping & Projects</h2>
                        <div className="w-24 h-1 bg-[#2D499A] mx-auto opacity-20" />
                    </div>

                    <div className="space-y-32">
                        {projectSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl group">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-[#2D499A]/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <span className="text-[#2D499A] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">{step.badge}</span>
                                    <h3 className="text-3xl md:text-5xl font-normal text-gray-900 mb-8 leading-tight font-serif italic">{step.title}</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="space-y-40">
                        {productHighlights.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col lg:flex-row gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2 relative">
                                    <div className="absolute -inset-8 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-[4rem] -z-10 blur-2xl" />
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white group">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center gap-6 border border-white/50 relative z-20 group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="p-4 bg-blue-50 rounded-2xl text-[#2D499A] shadow-sm group-hover:bg-[#2D499A] group-hover:text-white transition-colors duration-500">
                                            <Icon name={product.icon} className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-[#2D499A] uppercase tracking-widest mb-1">R&D Project</div>
                                            <span className="text-2xl font-serif italic text-gray-900">{product.title}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <h3 className="text-4xl md:text-6xl font-serif italic text-gray-900 mb-8 leading-tight">{product.title}</h3>
                                    <p className="text-2xl text-gray-600 leading-relaxed font-light">{product.description}</p>
                                    <div className="mt-12 flex items-center gap-4 text-[#2D499A] font-bold group cursor-pointer">
                                        <span className="border-b-2 border-transparent group-hover:border-current transition-all">Explore Innovation</span>
                                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
