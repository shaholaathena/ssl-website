'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HomeAbout() {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-[#F2F1F6]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column */}
                    <div className="relative z-10 pt-10">
                        {/* Abstract Background - Absolute */}
                        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[160%] h-[160%] -z-10 opacity-100 pointer-events-none mix-blend-multiply">
                            <Image
                                src="/images/home-about-shape-v2.png"
                                alt="Abstract background"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="text-blue-700 font-bold text-xl">+</span>
                            <span className="text-gray-600 font-bold tracking-widest text-xs md:text-sm uppercase">Who We Are</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl md:text-4xl lg:text-6xl leading-[1.1] text-gray-900 mb-16 font-medium"
                        >
                            We deliver innovative ideas to{' '}
                            <span className="font-serif italic block mt-2 mb-1 font-normal">elevate your digital footprint</span>
                            <span className="italic block font-normal">& sharpen your brand</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="flex items-start">
                                <span className="text-[100px] md:text-[140px] leading-[0.8] font-bold text-gray-900 tracking-tighter">25</span>
                                <span className="text-5xl md:text-6xl font-light text-gray-900 -mt-2">+</span>
                            </div>
                            <p className="text-sm font-bold tracking-[0.2em] text-gray-600 mt-4 uppercase ml-2">YEARS OF EXPERIENCE</p>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="relative z-10 flex flex-col gap-6 md:gap-8 pt-10 lg:pt-0">
                        {/* Top Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/home-about-bottom-v2.jpg"
                                alt="Team collaboration"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl"
                            >
                                <Image
                                    src="/images/home-about-top-v2.png"
                                    alt="Private meeting"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] text-justify md:text-left text-pretty font-medium">
                                    SSL Wireless is a 300-person technology powerhouse delivering enterprise-grade digital solutions, secure payment systems, and intelligent platforms to transform the way businesses operate. As the pioneer of mobile banking, VAS, and digital payments in Bangladesh, and home to SSLCOMMERZ, the nation’s largest PSO-licensed payment gateway, we empower industries and communities through digital innovation with accessible, efficient, and future-ready technology.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
