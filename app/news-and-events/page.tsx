'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const newsItems = [
    {
        id: 1,
        type: 'News',
        date: 'Feb 01, 2026',
        title: 'SSL Wireless Wins Top Innovator Award',
        image: '/images/news-1.jpg'
    },
    {
        id: 2,
        type: 'Event',
        date: 'Mar 15, 2026',
        title: 'Join us at the Digital Summit 2026',
        image: '/images/event-1.jpg'
    },
    {
        id: 3,
        type: 'News',
        date: 'Jan 20, 2026',
        title: 'Partnering with Leading Banks for Secure Micro-payments',
        image: '/images/news-2.jpg'
    },
    {
        id: 4,
        type: 'News',
        date: 'Jan 05, 2026',
        title: 'Launching our new ESG Initiative',
        image: '/images/news-3.jpg'
    },
    {
        id: 5,
        type: 'Event',
        date: 'Apr 10, 2026',
        title: 'Hackathon 2026: Code for Future',
        image: '/images/event-2.jpg'
    }
]

export default function NewsAndEvents() {
    useSmoothScroll()
    const [filter, setFilter] = useState('All')

    const filteredItems = filter === 'All' ? newsItems : newsItems.filter(item => item.type === filter)

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-normal text-gray-900 mb-8"
                    >
                        News & <span className="font-serif italic text-blue-600">Events</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600">Stay updated with everything happening at SSL Wireless.</p>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="py-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex bg-white p-1 rounded-full shadow-sm border border-gray-100">
                            {['All', 'News', 'Event'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${filter === tab
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                            >
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white relative z-10 ${item.type === 'Event' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                                        {item.type}
                                    </span>
                                </div>
                                <div className="p-8">
                                    <div className="text-sm text-gray-400 mb-4 font-medium">{item.date}</div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
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
