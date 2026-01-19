'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, TechCorp',
    content: 'SSL Wireless has transformed our payment infrastructure. Their innovative solutions and exceptional support have been instrumental in our growth. Highly recommended!',
    avatar: '👤',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO, FinanceHub',
    content: 'Working with SSL Wireless has been a game-changer. Their expertise in digital solutions and commitment to excellence is unmatched. Truly a trusted partner.',
    avatar: '👤',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'The team at SSL Wireless understands our vision and delivers beyond expectations. Their products are robust, scalable, and perfectly aligned with our needs.',
    avatar: '👤',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (isPaused || !inView) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, inView])

  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Hear what others say about{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            partnering with us
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -50 : 50,
                  scale: index === currentIndex ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute inset-0 ${
                  index === currentIndex ? 'relative' : 'absolute pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-2xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto text-4xl text-blue-200">"</div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
