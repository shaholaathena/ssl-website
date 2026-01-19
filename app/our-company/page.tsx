'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

import Icon from '@/components/Icon'

const values = [
    {
        title: 'Our Vision',
        description: 'To be the leader in helping organizations improve their competitiveness by providing the best-in-class solutions.',
        icon: 'lightbulb'
    },
    {
        title: 'Our Mission',
        description: 'To be the provider of best-in-class value added services and digital marketing services to the citizens and organizations in Bangladesh.',
        icon: 'rocket'
    },
    {
        title: 'Our Values',
        description: 'Focus on customer needs, commit to excellence, and create a positive environment for all.',
        icon: 'trophy'
    }
]

const milestones = [
    {
        title: 'Pioneer in providing Value-Added Services to Mobile Operators and Banks',
        description: 'SSL Wireless started its journey in 1999 as a software developer with a focus on Value Added Services. Today, SSL Wireless is a leading Service Provider in the country, with its products and services making a difference to millions of customers every day.',
        image: '/images/office-hero.jpg',
        icon: 'message'
    },
    {
        title: 'First and the largest Merchant Solution Provider (MSP) in Bangladesh',
        description: 'SSL Wireless is the first and largest payment gateway in Bangladesh - SSLCOMMERZ which is licensed as a Payment Service Operator (PSO) by Bangladesh Bank. It provides a secure platform for over 10000+ merchants to accept online digital payments from their customers.',
        image: '/images/sslcommerz.png',
        icon: 'bank'
    },
    {
        title: 'Pioneer in Online Top-Up & Digital Marketing services',
        description: "SSL Wireless is the first and largest online mobile top-up service provider to all the mobile operators in the country. To provide more digital services to its clients, SSL has established a Digital Marketing Agency called 'DigitAl' to provide all kinds of digital marketing services to its corporate customers.",
        image: '/images/news-1.jpg',
        icon: 'rocket'
    },
    {
        title: 'Partnering with International companies and going beyond the borders',
        description: 'SSL Wireless is working with leading international companies on various projects such as TATA, Google, WhatsApp, BTB etc. Recently SSL Wireless has developed and deployed a Digital Wallet platform called "Tachyon" for the international software company which is being used in multiple countries around the world.',
        image: '/images/event-1.jpg',
        icon: 'global'
    },
    {
        title: 'Content Management for Media & Activation Campaigns for Enterprises',
        description: 'SSL Wireless provides complete content management services for all the national news and media organizations in the country. SSL is also conducting engaging activation campaigns for SMEs and large corporations through integrated plans, helping them reach their target audience and creating meaningful interactions through its innovative media and technology solutions.',
        image: '/images/news-3.jpg',
        icon: 'support'
    }
]

const workflow = [
    {
        title: 'Strategy',
        description: 'We formulate unique strategies that ensure success by working with industry leaders and experts.',
        icon: 'innovation'
    },
    {
        title: 'Analysis',
        description: 'Thoroughly evaluate every dimension to ensure we build robust and scalable solutions.',
        icon: 'shield'
    },
    {
        title: 'Success',
        description: 'We deliver result-oriented success through our innovative media and technology platform.',
        icon: 'trophy'
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
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/company-hero-new.jpg"
                        alt="SSL Wireless Office"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D499A] via-[#2D499A]/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-bold tracking-widest uppercase mb-6">
                            Since 1999
                        </div>
                        <h1 className="text-3xl md:text-6xl font-normal text-white mb-8 leading-tight">
                            SSL Wireless is recognized for its <span className="font-serif italic text-blue-200">rapid development</span> and efficient project execution.
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                            By working with industry-standard technologies, we empower organizations through innovation and excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-gray-100 bg-white/30 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Enterprise Services', value: '90+' },
                            { label: 'Banks and Institutions', value: '52+' },
                            { label: 'Corporate Clients', value: '3500+' },
                            { label: 'Ecommerce Clients', value: '10000+' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-5xl font-bold text-[#2D499A] mb-2 font-serif">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-tight px-4">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="relative py-24 text-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/images/mission-vision-bg-v2.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] hover:bg-white/20 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="mb-8 p-5 bg-white/20 backdrop-blur-md rounded-2xl inline-block group-hover:scale-110 group-hover:bg-white/40 transition-all duration-500 text-[#2D499A] border border-white/30 shadow-sm">
                                    <Icon name={item.icon} className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-normal mb-4 font-serif italic text-gray-900 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg relative z-10 font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones Sections */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="mb-32 last:mb-0">
                            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                                >
                                    <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent z-10" />
                                        <Image
                                            src={milestone.image}
                                            alt={milestone.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} bg-white p-6 rounded-2xl shadow-xl z-20`}>
                                        <div className="text-[#2D499A]">
                                            <Icon name={milestone.icon} className="w-10 h-10" />
                                        </div>
                                    </div> */}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                                >
                                    <h2 className="text-2xl md:text-4xl font-normal text-gray-900 mb-8 leading-tight">
                                        {milestone.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How We Work Section */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-6">
                            How we <span className="font-serif italic text-blue-900">work</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="mb-8 text-[#2D499A]">
                                    <Icon name={step.icon} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
