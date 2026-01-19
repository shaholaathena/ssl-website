'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  'CHASE G',
  'Factual',
  'Matrixian',
  'Logitech',
  'Google',
]

export default function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex items-center justify-center space-x-12 md:space-x-16 overflow-x-auto"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="flex-shrink-0"
            >
              <div className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {client}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
