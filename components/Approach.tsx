'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const coreValues = [
  {
    number: '01',
    title: 'Innovation',
    description: 'We empower the future across industries by leveraging innovative digital solutions...',
  },
  {
    number: '02',
    title: 'Efficiency',
    description: 'Driving efficiency across industries, we empower financial services, healthcare...',
  },
  {
    number: '03',
    title: 'Digital Transformation',
    description: 'Leading the charge in digital transformation, we empower industries with innovative...',
  },
  {
    number: '04',
    title: 'Accessibility',
    description: 'We champion accessibility by delivering innovative digital solutions that make financial...',
  },
  {
    number: '05',
    title: 'Empowerment',
    description: 'We drive empowerment by equipping businesses, governments, and individuals...',
  },
]

export default function Approach() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden">
      {/* Subtle wavy background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="url(#waveGradient)"
            opacity="0.1"
          />
          <path
            d="M0,150 Q300,100 600,150 T1200,150 L1200,200 L0,200 Z"
            fill="url(#waveGradient)"
            opacity="0.08"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Card with Glass Effect */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-white backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden core-value"
        >
          {/* Content wrapper with relative z-index */}
          <div className="relative z-10">
          {/* Top Section: Label, Title, and Description */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Side: Label and Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4"
              >
                <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                  + CORE VALUES
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight"
              >
                Our Approach to{' '}
                <span className="font-serif italic text-5xl md:text-6xl lg:text-7xl">
                  Digital Innovation
                </span>
              </motion.h2>
            </div>

            {/* Right Side: Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center"
            >
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We combine innovation, intelligence, accessibility, efficiency, and people-centric design to create digital solutions that transform industries and empower communities at scale. We drive meaningful digital transformation by merging advanced technology, efficient systems, and inclusive design - creating solutions that empower businesses.
              </p>
            </motion.div>
          </div>

          {/* Core Values Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.number}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="bg-transparent rounded-[30px] p-6 border border-[#BECFFF] transition-all relative flex flex-col"
              >
                {/* Large Outlined Number */}
                <div 
                  className="text-6xl md:text-7xl font-bold mb-4"
                  style={{
                    WebkitTextStroke: '1.933px #2D499A',
                    WebkitTextFillColor: '#FFF',
                    color: '#FFF',
                    filter: 'drop-shadow(0 10px 1px rgba(26, 26, 26, 0.10))',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                  }}
                >
                  {value.number}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{value.description}</p>

                {/* Circular Arrow Button */}
                <div className="flex justify-end mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-colors shadow-md"
                    aria-label={`Learn more about ${value.title}`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
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
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
