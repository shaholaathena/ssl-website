'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export default function CountUp({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
}: CountUpProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const count = useMotionValue(0)
  const rounded = useSpring(count, {
    damping: 30,
    stiffness: 100,
  })

  useEffect(() => {
    if (inView) {
      count.set(end)
    }
  }, [inView, end, count])

  const displayValue = useRef(0)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      displayValue.current = latest
    })
    return () => unsubscribe()
  }, [rounded])

  return (
    <span ref={ref}>
      {prefix}
      {inView ? (
        <CountDisplay value={rounded} decimals={decimals} />
      ) : (
        '0'
      )}
      {suffix}
    </span>
  )
}

function CountDisplay({
  value,
  decimals,
}: {
  value: any
  decimals: number
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = value.on('change', (latest: number) => {
      setDisplay(decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest))
    })
    return () => unsubscribe()
  }, [value, decimals])

  return <>{display}</>
}
