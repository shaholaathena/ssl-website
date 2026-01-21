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

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory)

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
            <Header />

            {/* 1. Immersive Hero - Matches Leadership Page */}
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
                                Technical Portfolio
                            </span>
                            <div className="h-px w-12 bg-blue-900/20"></div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                            Proprietary <br />
                            <span className="text-blue-900">Platforms.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light text-balance mb-12">
                            Discover our suite of enterprise-grade digital products designed to streamline operations, enhance customer experiences, and drive measurable business impact.
                        </p>

                        <motion.div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-blue-900 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all hover:scale-105">
                                Explore Products
                            </button>
                            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all hover:border-slate-300">
                                Contact Sales
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-40 py-6 backdrop-blur-md bg-white/80 border-b border-slate-100/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === category
                                    ? 'bg-slate-900 text-white shadow-md scale-105'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="space-y-40">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                            >
                                {/* Product Image - Minimalist Card Style */}
                                <motion.div
                                    className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 bg-white p-10 lg:p-14 group">
                                        {/* Subtle ambient background instead of heavy gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>

                                        <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center z-10">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain drop-shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Product Content */}
                                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="inline-flex items-center gap-2 mb-6"
                                        >
                                            <span className={`px-4 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-200`}>
                                                {product.category}
                                            </span>
                                        </motion.div>

                                        <motion.h2
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
                                        >
                                            {product.name}
                                        </motion.h2>

                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                            className="text-xl font-medium text-blue-600 mb-6"
                                        >
                                            {product.tagline}
                                        </motion.p>

                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="text-lg text-slate-600 leading-relaxed font-light"
                                        >
                                            {product.longDescription}
                                        </motion.p>
                                    </div>

                                    {/* Features Grid - Minimal */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="grid sm:grid-cols-2 gap-4"
                                    >
                                        {product.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                <span className="text-sm font-medium text-slate-700">{feature}</span>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Stats - Clean Divider */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100"
                                    >
                                        {product.stats.map((stat, sIndex) => (
                                            <div key={sIndex}>
                                                <div className="text-2xl font-bold text-slate-900">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Products */}
            <section className="py-32 bg-slate-50 relative border-t border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Why Choose Our <span className="text-blue-900">Stack?</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                            Built with cutting-edge technology and backed by decades of industry expertise
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🔒',
                                title: 'Bank-Grade Security',
                                description: 'PCI DSS certified infrastructure ensuring maximum data protection.'
                            },
                            {
                                icon: '⚡',
                                title: 'High Availability',
                                description: '99.9% uptime architecture built for mission-critical operations.'
                            },
                            {
                                icon: '�',
                                title: 'Seamless Integration',
                                description: 'Plug-and-play APIs designed for rapid developer implementation.'
                            },
                            {
                                icon: '�',
                                title: 'Data Intelligence',
                                description: 'Real-time analytics dashboard for actionable business insights.'
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">{benefit.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-slate-900 relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent)]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light">
                            Join thousands of businesses already using our products to drive growth and innovation
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
                                Get Started Today
                            </button>
                            <button className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
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
