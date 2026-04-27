'use client'

import { motion } from 'framer-motion'

const innovations = [
    {
        title: "AI & Risk Intelligence",
        desc: "AI-driven fraud and risk intelligence building on two decades of proprietary transaction data.",
        tag: "In Production"
    },
    {
        title: "Embedded Finance",
        desc: "Unified APIs allowing any platform to integrate payments, lending, and identity verification seamlessly.",
        tag: "Beta"
    },
    {
        title: "Credit Scoring",
        desc: "Alternative scoring surfacing the creditworthiness of MSMEs beyond formal banking reach.",
        tag: "Research"
    },
    {
        title: "Cross-Border Rails",
        desc: "Next-gen payment rails connecting Bangladeshi merchants and remitters to global markets.",
        tag: "Coming Soon"
    }
]

export default function InnovationLab() {
    return (
        <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <motion.span
                        className="text-[11px] font-bold text-blue-900 uppercase tracking-[0.5em] mb-4 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        What's Next
                    </motion.span>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Building the next layer of Bangladesh’s digital economy.
                    </motion.h2>
                </div>

                {/* Innovation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {innovations.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="h-1 w-10 bg-blue-600 rounded-full group-hover:w-14 transition-all duration-500"></div>
                                <span className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest border border-slate-100 px-2 py-0.5 rounded">
                                    {item.tag}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-light">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Lab Callout */}
                {/* <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <button className="text-blue-900 text-xs uppercase tracking-[0.3em] font-bold hover:gap-4 transition-all flex items-center gap-2">
                        Explore the Innovation Lab Beta
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div> */}

            </div>
        </section>
    )
}
