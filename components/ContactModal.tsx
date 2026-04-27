'use client'

import { motion, AnimatePresence } from 'framer-motion'
import LeadForm from './LeadForm'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    type?: 'enterprise' | 'merchant' | 'partner' | 'compliance' | 'general'
}

export default function ContactModal({ isOpen, onClose, title = "Get in Touch", type = "general" }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
                                    <p className="text-slate-500 mt-1">Fill out the form and we'll reach out.</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <LeadForm type={type} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
