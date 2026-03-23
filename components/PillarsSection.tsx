'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

const NUMBERS = ['01', '02', '03', '04'] as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
}

export default function PillarsSection() {
  const t = useTranslations('pillars')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {NUMBERS.map(num => (
          <motion.div
            key={num}
            variants={item}
            className="px-6 sm:px-8 py-10 flex flex-col gap-4 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-tertiary)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-secondary)'
            }}
          >
            <span
              className="text-[11px] tracking-[0.1em]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {num}
            </span>
            <h3
              className="text-[13px] tracking-[0.15em] uppercase"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {t(`${num}.label`)}
            </h3>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t(`${num}.desc`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
