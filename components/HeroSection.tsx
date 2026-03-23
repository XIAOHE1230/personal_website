'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const EASE = [0.25, 0.1, 0.25, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.38, delay, ease: EASE },
  }
}

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section
      className="relative w-full flex flex-col justify-end"
      style={{ minHeight: '100svh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Robotics fabrication lab"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
        {/* Layer 1 — bottom darkening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 100%)',
          }}
        />
        {/* Layer 2 — left darkening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.0) 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 pb-14 sm:pb-16 max-w-[1600px] mx-auto w-full">
        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-5 sm:mb-6"
          style={{ color: 'var(--accent)' }}
        >
          {t('label')}
        </motion.p>

        {/* Title — two lines staggered */}
        <h1
          className="leading-none tracking-[-0.02em] mb-5 sm:mb-6"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(52px, 10vw, 120px)',
            fontWeight: 300,
          }}
        >
          <motion.span {...fadeUp(0.1)} className="block" style={{ color: 'var(--text-primary)' }}>
            XIAO HE
          </motion.span>
          <motion.span {...fadeUp(0.18)} className="block" style={{ color: 'var(--text-secondary)' }}>
            何骁
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.div {...fadeUp(0.26)} className="flex items-center gap-4 mb-10 sm:mb-12">
          <div style={{ width: 32, height: 1, background: 'var(--accent)' }} />
          <p
            className="text-[11px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.18em] uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('tagline')}
          </p>
        </motion.div>

        {/* Explore link */}
        <motion.div {...fadeUp(0.34)}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <span
              className="inline-flex items-center justify-center rounded-full border"
              style={{ width: 32, height: 32, borderColor: 'var(--text-tertiary)', fontSize: 14 }}
            >
              ↓
            </span>
            {t('explore')}
          </Link>
        </motion.div>
      </div>

      {/* Period — fades in last */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.38, delay: 0.4, ease: EASE }}
        className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 text-[10px] sm:text-[11px] tracking-[0.1em]"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {t('period')}
      </motion.div>
    </section>
  )
}
