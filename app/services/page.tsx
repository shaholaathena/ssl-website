'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const services = [
    {
        title: 'SSLCOMMERZ',
        subtitle: 'Payment Gateway & Merchant Solutions',
        description: "Bangladesh's largest PSO-licensed payment gateway, enabling seamless, secure multi-channel digital payments for startups, SMEs, enterprises, and government.",
        features: ['Online Payment', 'PSO Licensed', 'PCI DSS Certified', 'Multi-channel'],
        icon: '💳',
        image: '/images/sslcommerz.png',
        gradient: 'from-blue-600 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
        title: 'Messaging & VAS Services',
        subtitle: 'High-Volume Communication Platform',
        description: 'High-volume SMS, alerts, and value-added services that help brands, banks, and enterprises reach and engage millions of customers in real time.',
        features: ['Bulk SMS', 'Real-time Alerts', 'API Integration', 'Analytics'],
        icon: '💬',
        image: '/images/milestone-2018.jpg',
        gradient: 'from-purple-600 to-pink-600',
        bgGradient: 'from-purple-50 to-pink-50'
    },
    {
        title: 'Voice & IVR Services',
        subtitle: 'Interactive Voice Response',
        description: 'Automated voice broadcast, IVR, and missed call services to engage customers, run campaigns, and capture leads at scale.',
        features: ['Voice Broadcast', 'IVR Systems', 'Call Analytics', 'Lead Capture'],
        icon: '📞',
        image: '/images/milestone-2023.jpg',
        gradient: 'from-green-600 to-emerald-600',
        bgGradient: 'from-green-50 to-emerald-50'
    },
    {
        title: 'A2P SMS & Enterprise Messaging',
        subtitle: 'Application-to-Person Messaging',
        description: 'A2P SMS service for secure transactional, promotional, and notification messaging – enabling banks, enterprises, and brands to reach customers instantly and reliably across Bangladesh.',
        features: ['Transactional SMS', 'Promotional', 'OTP Delivery', 'Secure'],
        icon: '📨',
        image: '/images/news-2.jpg',
        gradient: 'from-orange-600 to-red-600',
        bgGradient: 'from-orange-50 to-red-50'
    },
    {
        title: 'Hercules',
        subtitle: 'Distribution & Field Force Automation',
        description: 'A complete supply chain and field automation platform that connects producers, distributors, and retailers in one real-time digital flow – from order to delivery to payment reconciliation.',
        features: ['Supply Chain', 'Field Automation', 'Real-time Tracking', 'Analytics'],
        icon: '🚛',
        image: '/images/hercules.png',
        gradient: 'from-amber-600 to-yellow-600',
        bgGradient: 'from-amber-50 to-yellow-50'
    },
    {
        title: 'BFSI Digital',
        subtitle: 'Banking & Financial Solutions',
        description: 'Comprehensive digital banking and financial software solutions designed to modernize operations, ensure security, and enhance customer experience in the financial sector.',
        features: ['Digital Banking', 'Core Banking', 'Mobile Banking', 'Security'],
        icon: '🏦',
        image: '/images/office-hero.jpg',
        gradient: 'from-cyan-600 to-blue-600',
        bgGradient: 'from-cyan-50 to-blue-50'
    }
]

const industries = [
    { name: 'Banking & Finance', icon: '🏦', count: '50+' },
    { name: 'E-commerce', icon: '🛍️', count: '1000+' },
    { name: 'Telecommunications', icon: '📡', count: '20+' },
    { name: 'Government', icon: '🏛️', count: '30+' },
    { name: 'Healthcare', icon: '🏥', count: '100+' },
    { name: 'Education', icon: '🎓', count: '200+' }
]

export default function Services() {
    useSmoothScroll()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const heroRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    })

    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Parallax - Matching Homepage Colors */}
            <section
                ref={heroRef}
                className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-b from-pink-50/30 via-white to-white"
            >
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="container mx-auto px-6 relative z-10"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-[#2D499A]/10 rounded-full border border-[#2D499A]/20 mb-8"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D499A] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2D499A]"></span>
                            </span>
                            <span className="text-sm font-semibold text-[#2D499A]">Empowering Digital Transformation</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-800 mb-8 leading-tight"
                        >
                            Empowering Industries & Communities through
                            <br />
                            <span className="font-serif italic text-6xl md:text-7xl lg:text-8xl">
                                Digital Innovation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
                        >
                            Trusted by banks, enterprises, government, and startups for over two decades.
                            We build secure, scalable, and intelligent digital solutions that transform businesses.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <button className="group px-8 py-4 bg-[#2D499A] text-white rounded-full font-bold text-lg hover:bg-[#1e3270] transition-all hover:scale-105 shadow-xl flex items-center gap-2">
                                <span>Explore Services</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200">
                                Talk to Expert
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
                        >
                            {[
                                { value: '20+', label: 'Years Experience' },
                                { value: '300+', label: 'Team Members' },
                                { value: '10K+', label: 'Active Clients' },
                                { value: '99.9%', label: 'Uptime SLA' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-[#2D499A] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Services Grid - Normal Grid Layout */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D499A]/10 text-[#2D499A] rounded-full font-semibold text-sm mb-6">
                            <span>+</span> OUR SERVICES
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-800 mb-6 leading-tight">
                            Comprehensive <span className="font-serif italic">Digital Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From payments to automation, we deliver enterprise-grade platforms that power Bangladesh's digital economy
                        </p>
                    </motion.div>

                    {/* Normal Grid Layout - 3 columns */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden h-56">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D499A]/60 to-[#1a1f3a]/60 group-hover:opacity-40 transition-opacity duration-500"></div>

                                    {/* Icon Badge */}
                                    <div className="absolute top-6 left-6">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                        className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                                            <span>Learn More</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#2D499A] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-[#2D499A] mb-4">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Feature Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, fIndex) => (
                                            <span
                                                key={fIndex}
                                                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-full border border-gray-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-24 bg-gradient-to-b from-pink-50/30 to-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-6">
                            Industries We <span className="font-serif italic">Empower</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Serving diverse sectors with tailored digital solutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
                            >
                                <div className="text-5xl mb-4">{industry.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">{industry.name}</h3>
                                <div className="text-2xl font-bold text-[#2D499A]">
                                    {industry.count}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">Clients</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Dark Section Matching Homepage */}
            <section className="py-24 bg-[#1a1f3a] text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-normal mb-6">
                            Why Choose SSL Wireless?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Two decades of excellence in digital innovation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🏆',
                                title: 'Industry Leader',
                                description: "Bangladesh's pioneering technology company with proven track record"
                            },
                            {
                                icon: '🔒',
                                title: 'Enterprise Security',
                                description: 'PCI DSS certified with bank-grade security infrastructure'
                            },
                            {
                                icon: '⚡',
                                title: '24/7 Support',
                                description: 'Round-the-clock technical support and monitoring'
                            },
                            {
                                icon: '🚀',
                                title: 'Scalable Solutions',
                                description: 'Built to grow with your business needs'
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#2D499A] rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                                Join thousands of businesses already leveraging our services to drive growth and innovation
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-10 py-5 bg-white text-[#2D499A] rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
                                    Get Started Today
                                </button>
                                <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
