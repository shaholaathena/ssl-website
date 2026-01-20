'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-32 pb-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Authority Copy */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Live Status Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-blue-900 font-bold tracking-widest uppercase text-[10px]">System-Critical Infrastructure</span>
                </div>
              </div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Powering Bangladesh’s <br />
                <span className="text-blue-900 relative inline-block">
                  Digital Financial Infrastructure
                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                    className="absolute bottom-1 left-0 h-[6px] bg-blue-100 -z-10"
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Secure, regulated platforms enabling payments, digital services, and enterprise operations at national scale. <br/>
               We are empowering Industries & Communities through Digital Innovation. 
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <a
                  href="/platforms"
                  className="bg-blue-900 text-white px-8 py-4 font-semibold text-[15px] hover:bg-blue-800 transition-colors inline-flex items-center justify-center rounded-sm"
                >
                  Explore our platforms
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 font-semibold text-[15px] text-slate-900 border border-slate-300 hover:border-blue-900 hover:bg-slate-50 transition-all inline-flex items-center justify-center rounded-sm"
                >
                  Speak to our enterprise team
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Network Flow Visual */}
          <div className="flex-1 w-full lg:h-[500px] relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">

              {/* Base Map Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] rounded-full border border-slate-100/50 mask-radial-fade"></div>

              {/* Connecting Lines (Circuit/Rail Style) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Static Rails */}
                <path d="M50 200 H350" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M200 50 V350" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M100 100 L300 300" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M300 100 L100 300" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="200" cy="200" r="100" stroke="#e2e8f0" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              </svg>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-[0_0_40px_rgba(30,58,138,0.1)] flex items-center justify-center border border-slate-100 z-20">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Orbiting Satellite Nodes */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border-2 border-slate-300 rounded-full z-10 shadow-sm"
                  style={{ marginLeft: -8, marginTop: -8 }}
                  animate={{
                    rotate: [deg, deg + 360],
                    translateX: [120, 120] // Keep distance from center
                  }}
                  transition={{
                    rotate: { duration: 20 + i * 5, ease: "linear", repeat: Infinity },
                    translateX: { duration: 0 } // Static offset, rotated by parent
                  }}
                />
              ))}

              {/* Traveling Data Packets (Rails) */}
              {/* Horizontal Flow */}
              <motion.div
                className="absolute top-1/2 left-0 w-8 h-1 bg-blue-500/50 rounded-full blur-[1px]"
                style={{ marginTop: -0.5 }}
                animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-0 w-8 h-1 bg-emerald-500/50 rounded-full blur-[1px]"
                style={{ marginTop: -0.5 }}
                animate={{ left: ['100%', '0%'], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
              />

              {/* Vertical Flow */}
              <motion.div
                className="absolute left-1/2 top-0 w-1 h-8 bg-indigo-500/50 rounded-full blur-[1px]"
                style={{ marginLeft: -0.5 }}
                animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />

              {/* Orbital Flow */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-900 rounded-full"
                style={{ marginLeft: -4, marginTop: -4 }}
                animate={{ rotate: [0, 360], translateX: 100 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
