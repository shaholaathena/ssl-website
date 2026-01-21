'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'
import Image from 'next/image'

const careerBenefits = [
    { title: 'Innovation First', icon: 'innovation', desc: 'Work on cutting-edge proprietary technologies.' },
    { title: 'Growth & Learning', icon: 'growth', desc: 'Continuous learning opportunities and workshops.' },
    { title: 'Health & Wellness', icon: 'health', desc: 'Comprehensive health coverage for you and family.' },
    { title: 'Global Exposure', icon: 'global', desc: 'Collaborate with international clients and teams.' }
]

const jobs = [
    {
        title: 'Senior Frontend Engineer',
        department: 'Engineering',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time'
    },
    {
        title: 'Product Manager',
        department: 'Product',
        location: 'Remote',
        type: 'Full-time'
    },
    {
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time'
    }
]

export default function Careers() {
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
                                Human Capital
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Shape the <br />
                            <span className="text-blue-900">Future with Us.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-12">
                            Join a team of passionate innovators, engineers, and visionaries solving the world's most complex digital challenges at national-scale.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-blue-900 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all"
                        >
                            View Open Positions
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-normal text-gray-900">Why SSL Wireless?</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {careerBenefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center text-blue-600 mb-6">
                                    <Icon name={benefit.icon} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Environment Section */}
            <section className="py-40 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,58,138,0.2),transparent)]"></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Our Workspace</span>
                            <h2 className="text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
                                Where Innovation <br />
                                <span className="text-blue-400">Meets Collaboration.</span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
                                Our state-of-the-art offices are designed to foster creativity, collaboration, and excellence. From modern workspaces to dedicated innovation labs, we provide an environment where great ideas flourish.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">300+</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Team Members</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Office Locations</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-10"></div>
                                <Image
                                    src="/images/office-hero.jpg"
                                    alt="SSL Wireless Office"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Dhaka HQ</div>
                                        <div className="text-xs text-slate-500">Karwan Bazar</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-normal text-gray-900 mb-4">Open Roles</h2>
                            <p className="text-gray-600">Find the perfect role for you.</p>
                        </div>
                        <a href="#" className="hidden md:block text-blue-600 font-medium hover:underline">View all jobs →</a>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                    <div className="flex space-x-4 text-sm text-gray-500">
                                        <span>{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm font-medium">Apply Now</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <a href="#" className="text-blue-600 font-medium hover:underline">View all jobs →</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
