'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const services = [
  {
    id: 1,
    number: '01',
    title: 'Payment Services',
  },
  {
    id: 2,
    number: '02',
    title: 'Enterprise Solutions',
  },
  {
    id: 3,
    number: '03',
    title: 'Banking & Financial Solutions',
  },
  {
    id: 4,
    number: '04',
    title: 'Application Development',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax effect - background moves slower
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* Subtle wavy background patterns with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="serviceWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(100, 150, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(150, 200, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(100, 150, 255, 0.3)" />
            </linearGradient>
            <linearGradient id="serviceWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(150, 200, 255, 0.25)" />
              <stop offset="50%" stopColor="rgba(100, 150, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(150, 200, 255, 0.25)" />
            </linearGradient>
          </defs>
          {/* Wavy lines from left */}
          <path
            d="M0,200 Q150,150 300,200 T600,200 T900,200 T1200,200"
            stroke="url(#serviceWave1)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M0,400 Q200,350 400,400 T800,400 T1200,400"
            stroke="url(#serviceWave2)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M0,600 Q150,550 300,600 T600,600 T900,600 T1200,600"
            stroke="url(#serviceWave1)"
            strokeWidth="2"
            fill="none"
            opacity="0.35"
          />
          {/* Wavy lines from right */}
          <path
            d="M1200,250 Q1050,200 900,250 T600,250 T300,250 T0,250"
            stroke="url(#serviceWave2)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M1200,450 Q1000,400 800,450 T400,450 T0,450"
            stroke="url(#serviceWave1)"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Rounded container */}
        <div className="rounded-3xl bg-[#1a1f3a]/95 backdrop-blur-sm border border-white/10 p-8 md:p-12 lg:p-16 our-services">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
            {/* Left Side: Label and Headline */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4"
              >
                <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">
                  + OUR SERVICES
                </span>
              </motion.div>
              <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl font-normal text-white leading-tight"
              >
                Empower your business with innovative{' '}
                <span className="font-serif italic text-4xl md:text-6xl lg:text-7xl">
                  digital services
                </span>
              </motion.h2>
            </div>

            {/* Right Side: View All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg transition-colors font-medium">
                <span>View All Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const isActive = activeService === service.id
              const isHovered = hoveredService === service.id
              const showImage = isActive || isHovered
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="relative"
                >
                  {/* Subtle glow for active service */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceGlow"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 via-transparent to-transparent"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Pulsing indicator for active service */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-red-500 rounded-full"
                      animate={{
                        scaleY: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}

                  <motion.div
                    className={`relative flex items-center gap-4 p-4 rounded-xl cursor-pointer ${isActive || isHovered ? 'bg-white/5' : 'hover:bg-white/5'
                      }`}
                    animate={{
                      paddingLeft: isActive ? '1.5rem' : '1rem',
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Service Image (for active or hovered item) with smooth accordion */}
                    <motion.div
                      initial={false}
                      animate={{
                        width: showImage ? 96 : 0,
                        opacity: showImage ? 1 : 0,
                        marginRight: showImage ? 16 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-24 rounded-lg overflow-hidden flex-shrink-0"
                    >
                      {showImage && (
                        <Image
                          src="/images/office-hero.png"
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      )}
                    </motion.div>

                    {/* Number and Title */}
                    <div className="flex items-center gap-4 flex-1">
                      <span
                        className="text-white font-serif italic text-3xl md:text-5xl font-normal leading-tight"
                      >
                        {service.number}.
                      </span>
                      <motion.h3
                        className="text-white font-sans text-3xl md:text-[54px] font-light leading-tight md:leading-[80px]"
                        animate={{
                          opacity: isActive ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    {/* Arrow Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive || isHovered
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      aria-label={`View ${service.title}`}
                    >
                      <svg
                        className={`w-5 h-5 ${isActive || isHovered ? 'text-white' : 'text-gray-700'
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
