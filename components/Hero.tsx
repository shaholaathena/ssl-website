'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-pink-50/30 via-white to-white"
    >
      <div className="container mx-auto px-6 py-12">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-800 leading-tight">
            Empowering Industries & Communities through{' '}
            <span className="font-serif italic text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
              Digital Innovation
            </span>
          </h1>
        </motion.div>

        {/* Office Image Section */}
        <motion.div
          style={{ y: imageY, opacity }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-[600px] md:h-[700px] relative bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
              {!imageError ? (
                <Image
                  src="/images/office-hero.jpg"
                  alt="Modern office workspace with reception desk and open-plan office area"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Office image placeholder</p>
                    <p className="text-xs mt-2">Add office-hero.jpg to /public/images/</p>
                  </div>
                </div>
              )}
            </div>

            {/* Stat Card - Bottom Right */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#2D499A] mb-2">250k +</div>
              <div className="text-base md:text-lg font-medium text-gray-800 mb-1">Happy Businesses</div>
              <div className="text-sm text-gray-600 leading-tight max-w-[180px]">
                Customers we have nation-wide
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
