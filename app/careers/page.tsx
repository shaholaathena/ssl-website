'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'

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

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1a1f3a] text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-cover bg-center" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-normal mb-8"
                    >
                        Shape the <span className="font-serif italic text-blue-400">Future</span> with Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
                    >
                        Join a team of passionate innovators solving the world's most complex digital challenges.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-500 transition-colors"
                    >
                        View Open Positions
                    </motion.button>
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
