'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const articles = [
    {
        id: 1,
        category: 'Research',
        date: 'Jan 15, 2026',
        title: 'The Future of AI in Fintech',
        excerpt: 'Exploring how artificial intelligence is reshaping the financial technology landscape.',
        image: '/images/news-1.jpg'
    },
    {
        id: 2,
        category: 'Innovation',
        date: 'Dec 10, 2025',
        title: 'Blockchain for Supply Chain',
        excerpt: 'A deep dive into how blockchain can bring transparency to supply chains globally.',
        image: '/images/news-2.jpg'
    },
    {
        id: 3,
        category: 'Whitepaper',
        date: 'Nov 05, 2025',
        title: '5G and IoT Connectivity',
        excerpt: 'Understanding the impact of ultra-fast networks on IoT device proliferation.',
        image: '/images/news-3.jpg'
    }
]

export default function Research() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide mb-6 uppercase"
                    >
                        R&D Lab
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-normal text-gray-900 mb-8"
                    >
                        Innovating for <br /> <span className="font-serif italic text-blue-600">Tomorrow</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our R&D division focuses on exploring emerging technologies to create the solutions of the future.
                    </p>
                </div>
            </section>

            {/* Featured Research (Large Card) */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden bg-gray-900 h-[500px] flex items-end p-8 md:p-16"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                        {/* Placeholder for featured image */}
                        <div className="absolute inset-0 bg-[url('/images/research-hero.jpg')] bg-cover bg-center opacity-70" />

                        <div className="relative z-20 max-w-2xl">
                            <span className="text-blue-400 font-bold tracking-wider uppercase mb-4 block">Featured Study</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Autonomous Systems in Urban Environments</h2>
                            <p className="text-gray-300 text-lg mb-8 line-clamp-3">
                                How our latest pilot program is aiming to reduce traffic congestion using decentralized AI agents interacting with smart city infrastructure.
                            </p>
                            <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                                Read Full Paper
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Recent Insights */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Insights</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500" />
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="text-blue-600 font-semibold">{article.category}</span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed line-clamp-2">{article.excerpt}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
