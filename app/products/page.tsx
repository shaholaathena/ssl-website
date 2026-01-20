'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const products = [
    {
        id: 1,
        name: 'SSLCOMMERZ',
        tagline: 'Payment Gateway & Merchant Solutions',
        description: "Bangladesh's largest PSO-licensed payment gateway, enabling seamless, secure multi-channel digital payments for startups, SMEs, enterprises, and government.",
        longDescription: "SSLCOMMERZ is Bangladesh's first and largest online payment gateway and a Bangladesh Bank-licensed Payment Systems Operator (PSO). With 36+ integrated payment partners, enterprise-grade security (PCI DSS certified), and thousands of active merchants, SSLCOMMERZ is the trusted engine behind the country's rapidly growing digital economy.",
        features: [
            'PCI DSS Certified Security',
            '36+ Payment Partners',
            'Multi-channel Payments',
            'Real-time Settlement',
            'Fraud Detection',
            'Developer-friendly APIs'
        ],
        stats: [
            { label: 'Active Merchants', value: '10,000+' },
            { label: 'Daily Transactions', value: '500K+' },
            { label: 'Payment Partners', value: '36+' },
            { label: 'Uptime', value: '99.9%' }
        ],
        gradient: 'from-blue-600 to-indigo-600',
        bgGradient: 'from-blue-50 via-white to-indigo-50',
        image: '/images/sslcommerz.png',
        category: 'FinTech'
    },
    {
        id: 2,
        name: 'Cashbaba',
        tagline: 'Digital Financial Services Platform',
        description: 'A comprehensive financial management platform that simplifies transactions and empowers users with innovative banking solutions.',
        longDescription: 'Cashbaba revolutionizes digital finance by providing a seamless platform for money transfers, bill payments, mobile recharges, and more. Built with cutting-edge technology and user-centric design, it brings financial services to everyone\'s fingertips.',
        features: [
            'Instant Money Transfer',
            'Bill Payment',
            'Mobile Recharge',
            'Merchant Payments',
            'QR Code Payments',
            'Cashback Rewards'
        ],
        stats: [
            { label: 'Active Users', value: '250K+' },
            { label: 'Monthly Transactions', value: '2M+' },
            { label: 'Service Points', value: '5,000+' },
            { label: 'Customer Rating', value: '4.8/5' }
        ],
        gradient: 'from-cyan-600 to-teal-600',
        bgGradient: 'from-cyan-50 via-white to-teal-50',
        image: '/images/cashbaba.png',
        category: 'FinTech'
    },
    {
        id: 3,
        name: 'Hercules',
        tagline: 'Distribution & Field Force Automation',
        description: 'A complete supply chain and field automation platform that connects producers, distributors, and retailers in one real-time digital flow.',
        longDescription: 'Hercules is an enterprise-grade platform designed to accelerate digital transformation in distribution and sales. From order management to delivery tracking and payment reconciliation, Hercules streamlines the entire supply chain with real-time visibility and control.',
        features: [
            'Order Management',
            'Inventory Tracking',
            'Route Optimization',
            'Real-time Analytics',
            'Payment Integration',
            'Mobile Field App'
        ],
        stats: [
            { label: 'Active Distributors', value: '1,000+' },
            { label: 'Daily Orders', value: '50K+' },
            { label: 'Field Force', value: '10,000+' },
            { label: 'Efficiency Gain', value: '40%' }
        ],
        gradient: 'from-amber-600 to-orange-600',
        bgGradient: 'from-amber-50 via-white to-orange-50',
        image: '/images/hercules.png',
        category: 'Enterprise'
    }
]

const categories = ['All', 'FinTech', 'Enterprise', 'Telecom', 'IoT']

export default function ProductsPage() {
    useSmoothScroll()
    const [selectedCategory, setSelectedCategory] = useState('All')
    const heroRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    })

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory)

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* 1. Immersive Hero - Standardized Luxury Aesthetic */}
            <section className="relative pt-56 pb-24 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
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
                                Technical Portfolio
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Proprietary <br />
                            <span className="text-blue-900">Platforms & Products.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-12">
                            Discover our suite of enterprise-grade digital products designed to streamline operations, enhance customer experiences, and drive measurable business impact.
                        </p>

                        <motion.div className="flex flex-wrap gap-4">
                            <button className="px-12 py-5 bg-blue-900 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all">
                                Explore Products
                            </button>
                            <button className="px-12 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all">
                                Contact Sales
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 bg-gray-50 border-b border-gray-200 sticky top-20 z-40 backdrop-blur-lg bg-gray-50/95">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                    }`}
                            >
                                {/* Product Image */}
                                <motion.div
                                    className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${product.bgGradient} p-8 lg:p-12`}>
                                        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain drop-shadow-2xl"
                                            />
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl`}></div>
                                        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${product.gradient} opacity-10 rounded-full blur-3xl`}></div>
                                    </div>
                                </motion.div>

                                {/* Product Content */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="inline-flex items-center gap-2 mb-4"
                                        >
                                            <span className={`px-4 py-2 bg-gradient-to-r ${product.gradient} text-white text-sm font-bold rounded-full`}>
                                                {product.category}
                                            </span>
                                        </motion.div>

                                        <motion.h2
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
                                        >
                                            {product.name}
                                        </motion.h2>

                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                            className={`text-xl font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-6`}
                                        >
                                            {product.tagline}
                                        </motion.p>
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        className="text-lg text-gray-600 leading-relaxed"
                                    >
                                        {product.longDescription}
                                    </motion.p>

                                    {/* Features Grid */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="grid grid-cols-2 gap-3"
                                    >
                                        {product.features.map((feature, fIndex) => (
                                            <div
                                                key={fIndex}
                                                className="flex items-center gap-2 text-gray-700"
                                            >
                                                <svg className={`w-5 h-5 text-blue-600 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Stats */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-gray-200"
                                    >
                                        {product.stats.map((stat, sIndex) => (
                                            <div key={sIndex} className="text-center lg:text-left">
                                                <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                                                    {stat.value}
                                                </div>
                                                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* CTA Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9 }}
                                        className="flex flex-wrap gap-4 pt-4"
                                    >
                                        <button className={`px-8 py-4 bg-gradient-to-r ${product.gradient} text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2`}>
                                            <span>Learn More</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                        <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-all">
                                            Request Demo
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Products */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose Our Products?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built with cutting-edge technology and backed by decades of industry expertise
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🔒',
                                title: 'Enterprise Security',
                                description: 'Bank-grade security with PCI DSS certification and advanced fraud detection'
                            },
                            {
                                icon: '⚡',
                                title: 'High Performance',
                                description: '99.9% uptime with lightning-fast processing and real-time updates'
                            },
                            {
                                icon: '🔧',
                                title: 'Easy Integration',
                                description: 'Developer-friendly APIs with comprehensive documentation and support'
                            },
                            {
                                icon: '📊',
                                title: 'Advanced Analytics',
                                description: 'Real-time insights and detailed reporting for data-driven decisions'
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                            Join thousands of businesses already using our products to drive growth and innovation
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
                                Get Started Today
                            </button>
                            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
                                Schedule a Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
