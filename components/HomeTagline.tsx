'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HomeTagline() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <section className="relative py-12 md:py-12 bg-white overflow-hidden" ref={ref}>
            {/* Subtle Ambient Gradients to blend with neighboring sections */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#F2F1F6]/50 to-transparent" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-pink-50/50 rounded-full blur-[80px]" />
            </div> */}

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: '40px' } : {}}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="h-px bg-blue-600/30 mb-10"
                        />

                        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-[1.7] tracking-tight text-balance">
                            Whether you are{' '}
                            <span className="text-gray-950 font-medium border-b border-gray-100 pb-1">transforming banking</span>,{' '}
                            <span className="text-gray-950 font-medium border-b border-gray-100 pb-1">digitizing operations</span>,{' '}
                            <span className="text-gray-950 font-medium border-b border-gray-100 pb-1">scaling e-commerce</span>, or{' '}
                            <span className="text-gray-950 font-medium border-b border-gray-100 pb-1">reimagining customer experience</span>{' '}
                            — SSL Wireless is your trusted partner in{' '}
                            <span className="text-[#EC3336] font-semibold italic">digital innovation</span>.
                        </h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-14 text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-bold"
                        >
                            Since 1999 • Excellence in Technology
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
