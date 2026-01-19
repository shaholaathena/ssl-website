'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    id: 1,
    name: 'SSLCOMMERZ',
    description: "The country's largest PCI DSS certified payment gateway, providing secure and seamless payment solutions for businesses of all sizes. Trusted by thousands of merchants nationwide.",
    gradient: 'from-blue-50 via-white to-indigo-50',
    textColor: 'text-gray-900',
    accentColor: 'from-blue-600 to-indigo-600',
    image: '/images/sslcommerz.png',
  },
  {
    id: 2,
    name: 'Cashbaba',
    description: 'A comprehensive financial management platform that simplifies transactions and empowers users with innovative banking solutions. Experience the future of digital finance.',
    gradient: 'from-cyan-50 via-white to-teal-50',
    textColor: 'text-gray-900',
    accentColor: 'from-cyan-600 to-teal-600',
    image: '/images/cashbaba.png',
  },
  {
    id: 3,
    name: 'Hercules',
    description: 'Enterprise-grade application development platform designed to accelerate your digital transformation. Build, deploy, and scale with confidence.',
    gradient: 'from-amber-50 via-white to-orange-50',
    textColor: 'text-gray-900',
    accentColor: 'from-amber-600 to-orange-600',
    image: '/images/hercules.png',
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative"
      style={{ height: `${300}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24"
          >
            <div className="max-w-3xl text-left">
              <div className="flex items-center gap-2 text-blue-700 font-bold mb-6 tracking-wide uppercase text-sm">
                <span className="text-lg">+</span> Products
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Explore Our <br />
                <span className="font-serif italic font-light text-gray-800">
                  Products
                </span>
              </h2>
            </div>

            <div className="mt-10 md:mt-0 md:max-w-sm flex flex-col gap-8 items-start">
              <p className="text-gray-600 text-lg leading-relaxed">
                Explore innovative products built to streamline workflows,
                enhance engagement, and drive measurable digital impact.
              </p>
              <button className="bg-white border border-gray-200 text-gray-700 px-2 pl-6 py-2 rounded-full flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all group">
                <span className="font-medium text-sm">See all Products</span>
                <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Stacked Product Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {products.map((product, index) => {
              // Calculate scroll ranges for each product
              const totalProducts = products.length
              const productStart = index / totalProducts
              const productEnd = (index + 1) / totalProducts
              const nextStart = productEnd

              // Transform values for sliding up effect
              const y = useTransform(
                smoothProgress,
                [
                  Math.max(0, productStart - 0.15),
                  productStart,
                  productEnd,
                  Math.min(1, nextStart + 0.15),
                ],
                ['100%', '0%', '0%', '0%']
              )

              const opacity = useTransform(
                smoothProgress,
                [
                  Math.max(0, productStart - 0.15),
                  productStart,
                  productEnd,
                  Math.min(1, nextStart + 0.15),
                ],
                [0, 1, 1, 0.4]
              )

              const scale = useTransform(
                smoothProgress,
                [
                  Math.max(0, productStart - 0.15),
                  productStart,
                  productEnd,
                  Math.min(1, nextStart + 0.15),
                ],
                [0.95, 1, 1, 0.96]
              )

              // Calculate z-index: later products appear on top
              const zIndex = index + 1

              return (
                <motion.div
                  key={product.id}
                  style={{
                    y,
                    opacity,
                    scale,
                    zIndex,
                  }}
                  className="absolute inset-0 will-change-transform"
                >
                  <div
                    className={`h-full bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl border border-gray-200/50 backdrop-blur-sm overflow-hidden`}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full p-8 lg:p-12">
                      {/* Left: Content */}
                      <div className="flex flex-col justify-center space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="inline-block mb-4">
                            <span className={`text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${product.accentColor} text-white`}>
                              Product {index + 1}
                            </span>
                          </div>
                          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${product.textColor} mb-4`}>
                            {product.name}
                          </h3>
                          <p className={`text-lg lg:text-xl ${product.textColor} opacity-70 leading-relaxed`}>
                            {product.description}
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`bg-gradient-to-r ${product.accentColor} text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-shadow group`}
                          >
                            <span>Explore {product.name}</span>
                            <svg
                              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </motion.button>
                        </motion.div>
                      </div>

                      {/* Right: Visual Element */}
                      <div className="flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="relative w-full h-full max-h-96 lg:max-h-full flex items-center justify-center"
                        >
                          {product.image ? (
                            <div className="w-full h-full flex items-center justify-center relative z-10">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-2xl"
                              />
                            </div>
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${product.accentColor} opacity-10 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                              {/* Decorative circles */}
                              <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />

                              {/* Product icon */}
                              <div className="relative z-10 text-center">
                                <motion.div
                                  animate={{
                                    y: [0, -10, 0],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                  }}
                                >
                                  <svg
                                    className={`w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 bg-gradient-to-br ${product.accentColor} bg-clip-text`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ opacity: 0.3 }}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={1.5}
                                      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                  </svg>
                                </motion.div>
                                <p className={`text-sm font-medium ${product.textColor} opacity-40`}>
                                  {product.name}
                                </p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
