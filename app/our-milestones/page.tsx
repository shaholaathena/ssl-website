'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const milestones = [
    {
        year: '2021',
        title: 'SSLCOMMERZ launches Bangla QR',
        description: 'SSLCOMMERZ has successfully launched Bangla QR, a unified national QR code for payments, enabling merchants across the country to accept digital payments more easily and securely.'
    },
    {
        year: '2020',
        title: 'Appraised at CMMI Level 3',
        description: 'We have achieved level 3 of the CMMI Institute’s Capability Maturity Model Integration for Development (CMMI-DEV v1.3) for software development, maintenance, and quality assurance. This certifies SSL Wireless follows detailed process areas in product and service development, Decision Analysis and Resolution (DAR), Integrated Project Management (IPM), Organizational Process Definition (OPD), Organizational Process Focus (OPF), Organizational Training (OT), Product Integration (PI), Requirements Development (RD), Risk Management (RSKM), Technical Solution (TS), Validation (VAL), and Verification (VER).'
    },
    {
        year: '2019',
        title: 'Global Approval: ISO 27001',
        description: 'We achieved ISO 27001 certification for international standard for information security.'
    },
    {
        year: '2018',
        title: 'Getting Future Ready: IOT',
        description: 'SSL Wireless has started building an Internet of Things (IoT) lab and growing capabilities in IoT, Artificial Intelligence, and Machine Learning. We have rebranded the existing card-on-file platform as Easy Checkout and started a promotion campaign called Save & Save by partnering with Visa. This has resulted in us winning awards from Mastercard and the BASIS National ICT Award.'
    },
    {
        year: '2017',
        title: 'Introduction of Digital Marketing Solutions & working with international organizations',
        description: 'We launched a 360-degree digital marketing wing. Launched an own developed Digital Wallet/Mobile Wallet platform named ‘FastPay’ in Kurdistan, Iraq, exporting a digital wallet app to a foreign country for the first time in Bangladesh. Developed an Indian Visa Processing Fee Payment System (web & mobile app) for the Indian Visa Application Centre (IVAC). Developed bill collection apps and setup KIOSK for complaint management for a Utility Biller along with a Smart Meter Top-Up app for DESCO. In 2017, SSL also received PCI DSS Version 3.2 ‘Level 1’ Service Provider compliance certification. We also started and launched our Card-on-File services along with QR Payments, another first in the country. Won the Champion Award for DESCO Mobile App and SSLCOMMERZ.'
    },
    {
        year: '2016',
        title: 'PSO license from the central bank',
        description: 'Received the Payment Systems Operator (PSO) license from the central bank of Bangladesh. Started to provide cybersecurity tools to clients in the banking and financial industry. The same year, the DESCO mobile app went live, which is the first-ever online bill collection and complaint management app for any utility biller in Bangladesh.'
    },
    {
        year: '2015',
        title: 'Signed with VISA',
        description: 'Added many more large enterprises to SSLCOMMERZ. Besides, SSL got connected to a few more Utility billers to provide Utility Bill Payment Solutions to banks. Signed a partnership with VISA, the world’s number one payment technology provider, for www.easy.com.bd to promote e-commerce in Bangladesh, offering a 5% bonus for any Visa card.'
    },
    {
        year: '2013',
        title: 'Helping businesses grow online',
        description: 'Became the largest acquirer of merchants and payment channels through SSLCOMMERZ and launched first-time MT (subscription) services with one of the largest operators and TV channels, along with embedded VAS apps for handset companies.'
    },
    {
        year: '2012',
        title: 'E-Ticketing',
        description: 'Launched BPL E-Ticketing at www.easy.com.bd and signed a partnership with FieldEz for a field force tracking solution, providing Sales Tracking Service for mobile handset companies. Started connecting banks to its ‘Virtual Recharge (VR)’ platform with a set of easy-to-integrate APIs.'
    },
    {
        year: '2011',
        title: 'Virtual Recharge',
        description: 'Brought a virtual recharge platform for banks and launched the first online recharge platform, www.easy.com.bd in Bangladesh, and also started to provide field force automation solutions.'
    },
    {
        year: '2010',
        title: 'Changing the landscape of technology integration',
        description: 'Launched the first online payment gateway platform called “SSLCOMMERZ” and mobile airtime recharge service with a bank for two mobile network operators, another first in Bangladesh.'
    },
    {
        year: '2009',
        title: 'Voyage towards disruptive innovation',
        description: 'Launched the first news-on-demand portal, SMS Insurance, the first mobile banking application in Bangladesh, masking SMS, and brought the world’s leader in digital security, VeriSign Inc., to Bangladesh.'
    },
    {
        year: '2008',
        title: 'Realization of the dream into reality',
        description: 'Launched the first shortcode-based SMS banking platform, which became a popular choice of banks in reaching out to customers. We also became a media and content aggregator by launching IVR News services, also a first in the country.'
    },
    {
        year: '2007',
        title: 'The beginning of a budding dream',
        description: 'In the year 2007, Software Shop Limited revamped as SSL Wireless and started focusing on the domestic software development and telecommunication VAS business. Within a few years, SSL started focusing on the development of fintech services.'
    },
    {
        year: '1999',
        title: 'A dream becomes Software Shop Limited',
        description: 'Software Shop Limited started its journey in 1999 as an associated company of Concorde Garments, starting as a franchisee of Aptech, the leading Indian IT education company.'
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
            <section className="py-40 bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center mb-32">
                        <span className="inline-block text-blue-900 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Corporate Evolution</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                            History & <span className="text-blue-900">Milestones.</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                            A legacy of institutional trust and digital innovation, spanning over two decades of Bangladesh's technological landscape.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central Vertical Line - Desktop */}
                        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>

                        <div className="space-y-16 md:space-y-32 relative">
                            {milestones.map((milestone, index) => {
                                const isEven = index % 2 === 0
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: index * 0.05 }}
                                        className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Content Side */}
                                        <div className="w-full md:w-5/12 pl-20 md:pl-0">
                                            <div className={`p-8 md:p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group ${isEven ? 'md:text-right' : 'md:text-left text-left'}`}>
                                                <div className={`w-12 h-1 bg-blue-900/10 mb-6 group-hover:bg-blue-900 transition-colors ${isEven ? 'md:ml-auto' : ''}`}></div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors tracking-tight">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-lg text-slate-500 leading-relaxed font-light group-hover:text-slate-600 transition-colors">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Year Marker Side */}
                                        <div className="absolute left-0 md:relative md:left-auto flex items-center justify-center w-16 md:w-2/12">
                                            <div className="z-10 w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-xl group-hover:border-blue-900 group-hover:bg-blue-900 transition-all duration-500">
                                                <span className="text-blue-900 group-hover:text-white font-bold text-lg md:text-xl transition-colors">{milestone.year}</span>
                                            </div>
                                        </div>

                                        {/* Spacer */}
                                        <div className="hidden md:block md:w-5/12"></div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
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
