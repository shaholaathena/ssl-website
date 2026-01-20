'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const milestones = [
    {
        year: '2022',
        title: 'Appraised at CMMI Level 3',
        description: 'Achieved Level 3 of the CMMI Institute’s Capability Maturity Model Integration for Development (CMMI-DEV v1.3). This certifies SSL Wireless follows detailed process areas in product and service development, quality assurance, and project management.',
        image: '/images/milestone-2023.jpg'
    },
    {
        year: '2018',
        title: 'Global Approval: ISO 27001',
        description: 'Achieved ISO 27001 certification, the international standard for information security, ensuring the highest level of data protection and privacy for our clients.',
        image: '/images/office-hero.jpg'
    },
    {
        year: '2018',
        title: 'Getting Future Ready: IoT',
        description: 'Started building an Internet of Things (IoT) lab, growing capabilities in AI and Machine Learning. Rebranded the card-on-file platform as Easy Checkout and received awards from Mastercard.',
        image: '/images/milestone-2020.jpg'
    },
    {
        year: '2017',
        title: 'Digital Marketing & Global Expansion',
        description: 'Launched a 360-degree digital marketing wing and deployed the "FastPay" mobile wallet in Kurdistan, Iraq, marking our first international fintech export.',
        image: '/images/news-1.jpg'
    },
    {
        year: '2016',
        title: 'PSO License from Central Bank',
        description: 'Received the Payment Systems Operator (PSO) license from Bangladesh Bank and launched the first-ever online bill collection app for utility billers.',
        image: '/images/sslcommerz.png'
    },
    {
        year: '2015',
        title: 'Strategic Partnership with VISA',
        description: 'Signed a partnership with VISA to promote e-commerce in Bangladesh, offering innovative payment solutions and growing the SSLCOMMERZ ecosystem.',
        image: '/images/milestone-2018.jpg'
    },
    {
        year: '2014',
        title: 'Helping Businesses Grow Online',
        description: 'Became the largest acquirer of merchants and payment channels through SSLCOMMERZ, launching specialized subscription services and embedded VAS apps.',
        image: '/images/event-2.jpg'
    },
    {
        year: '2013',
        title: 'E-Ticketing & Field Automation',
        description: 'Launched BPL E-Ticketing and partnered with FieldEz for field force tracking. Started connecting banks to our Virtual Recharge platform via APIs.',
        image: '/images/news-2.jpg'
    },
    {
        year: '2011',
        title: 'Virtual Recharge Evolution',
        description: 'Brought the first virtual recharge platform for banks and launched easy.com.bd, the premier online recharge platform in Bangladesh.',
        image: '/images/milestone-2015.jpg'
    },
    {
        year: '2010',
        title: 'Revolutionizing Payment Gateways',
        description: 'Launched SSLCOMMERZ, the first online payment gateway in Bangladesh, along with airtime recharge services for mobile operators.',
        image: '/images/event-1.jpg'
    },
    {
        year: '2008',
        title: 'Pioneering Mobile Banking',
        description: 'Launched the first news-on-demand portal, SMS Insurance, and the very first mobile banking application in Bangladesh.',
        image: '/images/news-3.jpg'
    },
    {
        year: '2007',
        title: 'The Revamp to SSL Wireless',
        description: 'Software Shop Limited revamped as SSL Wireless, shifting focus to domestic software development, telecommunication VAS, and fintech services.',
        image: '/images/office-hero.png'
    },
    {
        year: '1999',
        title: 'A Dream Becomes Reality',
        description: 'Software Shop Limited started its journey as an associated company of Concorde Garments, beginning as a franchisee of Aptech IT education.',
        image: '/images/company-hero-new.jpg'
    }
]

export default function OurMilestones() {
    useSmoothScroll()
    const containerRef = useRef<HTMLDivElement>(null)

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
                                Operational History
                            </span>
                            <div className="h-px w-20 bg-blue-900/10"></div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                            Chronicle of <br />
                            <span className="text-blue-900">Excellence.</span>
                        </h1>
                        <p className="text-2xl text-slate-500 max-w-4xl leading-relaxed font-light text-balance mb-6">
                            An innovative collective of like-minded experts making useful and enduring technology products since 1999.
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
