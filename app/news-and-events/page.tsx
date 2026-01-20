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
        type: 'Newsletter',
        date: 'Oct 25, 2025',
        title: 'October 25 Newsletter',
        image: '/images/news-1.jpg'
    },
    {
        id: 2,
        type: 'Newsletter',
        date: 'Sep 25, 2025',
        title: 'September 25 Newsletter',
        image: '/images/news-2.jpg'
    },
    {
        id: 3,
        type: 'Award',
        date: '2017',
        title: 'eTunes won Respected South Asian Manthan Award 2016-2017',
        image: '/images/event-1.jpg'
    },
    {
        id: 4,
        type: 'Certification',
        date: '2016',
        title: 'Achieved PCI DSS Certification for its payment gateway- SSLCOMMERZ',
        image: '/images/news-3.jpg'
    },
    {
        id: 5,
        type: 'Agreement',
        date: '2015',
        title: 'Agreement between BASIS and SSL Wireless for accepting online payments',
        image: '/images/event-2.jpg'
    },
    {
        id: 6,
        type: 'Certification',
        date: '2018',
        title: 'Awarded ISO 27001 Certification for Information Security Management',
        image: '/images/milestone-2018.jpg'
    },
    {
        id: 7,
        type: 'Award',
        date: '2019',
        title: "SSLCOMMERZ gets 'Excellence in MasterCard Online Acquiring Business' award",
        image: '/images/milestone-2020.jpg'
    },
    {
        id: 8,
        type: 'Innovation',
        date: '2020',
        title: 'SSLCOMMERZ stepped in to revolutionize and transform the digital payment ecosystem through Bangla QR',
        image: '/images/sslcommerz.png'
    },
    {
        id: 9,
        type: 'Award',
        date: '2020',
        title: 'SSL Wireless receives Excellence in Fintech Partnership 2019-2020 award from Visa',
        image: '/images/milestone-2015.jpg'
    },
    {
        id: 10,
        type: 'Award',
        date: '2020',
        title: 'SSL Wireless has received e-Commerce Movers Award (eCMA) 2020',
        image: '/images/milestone-2023.jpg'
    }
]

export default function NewsAndEvents() {
    useSmoothScroll()
    const [filter, setFilter] = useState('All')

    const filteredItems = filter === 'All' ? newsItems : newsItems.filter(item => item.type === filter || (filter === 'News' && item.type !== 'Event'))

    const categories = ['All', 'Newsletter', 'Award', 'Certification', 'Innovation']

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
                                Media Hub
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            News Updates & <br />
                            <span className="text-blue-900">Event Highlights.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-6">
                            Stay updated with the latest news, institutional updates, and event highlights from the heart of Bangladesh's digital ecosystem.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-gray-50 min-h-screen relative overflow-hidden">
                {/* Background graphic for consistency */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <Image
                        src="/images/mission-vision-bg-v2.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-20">
                        <div className="inline-flex bg-white p-2 rounded-3xl shadow-xl border border-white/50 backdrop-blur-md">
                            {categories.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`px-8 py-3 rounded-2xl text-sm font-bold tracking-wider transition-all duration-500 uppercase ${filter === tab
                                        ? 'bg-[#2D499A] text-white shadow-lg'
                                        : 'text-gray-400 hover:text-[#2D499A] hover:bg-blue-50'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/50 group cursor-pointer flex flex-col h-full"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D499A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D499A] shadow-lg border border-white/50">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-sm text-[#2D499A] mb-4 font-bold tracking-widest uppercase opacity-60">
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-normal text-gray-900 leading-tight group-hover:text-[#2D499A] transition-colors duration-300 font-serif italic mb-6">
                                        {item.title}
                                    </h3>
                                    <div className="mt-auto flex items-center gap-2 text-[#2D499A] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                                        <span>Read Story</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
