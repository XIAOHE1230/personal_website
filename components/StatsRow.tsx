'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

const STATS = [
  { key: 'projects', value: '8+'   },
  { key: 'internships', value: '2'    },
  { key: 'gpa',      value: '3.97' },
  { key: 'tools',    value: '20+'  },
] as const

const EASE = [0.25, 0.1, 0.25, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
}

export default function StatsRow() {
  const t = useTranslations('stats')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 sm:grid-cols-4"
      >
        {STATS.map(({ key, value }) => (
          <motion.div
            key={key}
            variants={item}
            className="flex flex-col items-center justify-center py-10 sm:py-12 gap-2"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            <span
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {t(key)}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 5vw, 72px)',
                color: 'var(--text-primary)',
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              {value}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
