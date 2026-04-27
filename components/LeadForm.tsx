'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LeadFormProps {
    type?: 'enterprise' | 'merchant' | 'partner' | 'compliance' | 'general'
}

export default function LeadForm({ type = 'general' }: LeadFormProps) {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        industry: '',
        volume: '',
        message: '',
        leadType: type
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
        // In a real app, you'd send this to your backend/BD inbox
        console.log('Form submitted:', formData)
    }

    if (step === 2) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
                <p className="text-slate-500">Our specialist team will contact you shortly.</p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Work Email</label>
                    <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="john@company.com"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Company / Institution</label>
                <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Company Name"
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Industry</label>
                    <select
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    >
                        <option value="">Select Industry</option>
                        <option value="banking">Banking & Finance</option>
                        <option value="retail">Retail / E-commerce</option>
                        <option value="fintech">Fintech / Payments</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Transaction Vol (Monthly)</label>
                    <select
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    >
                        <option value="">Select Range</option>
                        <option value="startup">&lt; 1M BDT</option>
                        <option value="mid">1M - 10M BDT</option>
                        <option value="enterprise">10M - 100M BDT</option>
                        <option value="high">&gt; 100M BDT</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Primary Interest / Use Case</label>
                <textarea
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[120px]"
                    placeholder="How can we help you?"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10"
            >
                Submit Request
            </button>
        </form>
    )
}
