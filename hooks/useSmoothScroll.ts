'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      // Cleanup if needed
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
}
