'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const values = [
    {
        title: 'Innovation',
        description: 'We constantly push boundaries to create solutions that define the future.',
        icon: (
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: 'Integrity',
        description: 'We uphold the highest standards of honesty and transparency in all we do.',
        icon: (
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: 'Excellence',
        description: 'We hold ourselves to world-class standards in every product we deliver.',
        icon: (
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )
    }
]

export default function OurCompany() {
    useSmoothScroll()
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
                    <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-8 leading-tight">
                            Pioneering the Future of <br />
                            <span className="font-serif italic text-blue-900">Digital Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            We are a team of visionaries, engineers, and creators dedicated to transforming
                            how businesses operate in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Years of Experience', value: '15+' },
                            { label: 'Team Members', value: '250+' },
                            { label: 'Presense', value: 'National' },
                            { label: 'Happy Clients', value: '2500+' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image & Story Section */}
            <section ref={sectionRef} className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div style={{ y }} className="relative">
                            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent z-10" />
                                <Image
                                    src="/images/office-hero.jpg"
                                    alt="Our collaborative workspace"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
                                <p className="font-serif italic text-2xl text-gray-900 mb-4">"Innovation is not just what we do, it's who we are."</p>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">CEO & Founder</p>
                            </div>
                        </motion.div>

                        <div className="lg:pl-10">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl font-normal text-gray-900 mb-6">Our Story</h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-6">
                                        Founded with a vision to bridge the gap between technology and business needs,
                                        Our Company has grown from a small startup into a leading digital solutions provider.
                                    </p>
                                    <p className="mb-6">
                                        We believe in the power of technology to transform lives. Our journey has been
                                        defined by a relentless pursuit of excellence and a deep commitment to our clients' success.
                                    </p>
                                    <p>
                                        Today, we stand at the forefront of the digital revolution, helping businesses
                                        navigate the complexities of the modern world with confidence and agility.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="py-24 bg-[#1a1f3a] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-normal mb-6">Our Core Values</h2>
                        <p className="text-xl text-gray-300">
                            These principles guide every decision we make and every solution we build.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-serif italic mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
