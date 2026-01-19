'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const milestones = [
    {
        year: '2023',
        title: 'Global Expansion',
        description: 'Expanded operations to international markets, setting up offices in 3 new countries.',
        image: '/images/milestone-2023.jpg'
    },
    {
        year: '2020',
        title: 'Innovation Award',
        description: 'Received the National ICT Award for our breakthrough payment solution.',
        image: '/images/milestone-2020.jpg'
    },
    {
        year: '2018',
        title: 'Reaching 1 Million Users',
        description: 'Our flagship product crossed the 1 million active users mark.',
        image: '/images/milestone-2018.jpg'
    },
    {
        year: '2015',
        title: 'Company Inception',
        description: 'Started our journey with a small team of 5 visionaries in a small garage.',
        image: '/images/milestone-2015.jpg'
    }
]

export default function OurMilestones() {
    useSmoothScroll()
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-8">
                            Our Journey of <br />
                            <span className="font-serif italic text-blue-600">Growth & Impact</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Walking through the years that defined who we are today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 relative overflow-hidden" ref={containerRef}>
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2 hidden md:block" />

                <div className="container mx-auto px-6 relative">
                    {milestones.map((item, index) => {
                        const isEven = index % 2 === 0
                        return (
                            <TimelineItem key={index} item={item} isEven={isEven} index={index} />
                        )
                    })}
                </div>
            </section>

            <Footer />
        </main>
    )
}

function TimelineItem({ item, isEven, index }: { item: any, isEven: boolean, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center justify-between mb-24 relative ${isEven ? '' : 'md:flex-row-reverse'}`}
        >
            {/* Date Circle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden z-10">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} mb-8 md:mb-0 text-center md:text-left`}>
                <span className="text-6xl md:text-8xl font-bold text-gray-100 block mb-4 font-serif leading-none">
                    {item.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            {/* Image Side */}
            <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </motion.div>
    )
}
