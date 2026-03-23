'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  /** Distance from viewport edge that triggers reveal (default '-60px') */
  margin?: string
}

const EASE = [0.25, 0.1, 0.25, 1] as const

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  style,
  margin = '-60px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
