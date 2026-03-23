'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutSplit() {
  const t = useTranslations('aboutSplit')

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ borderBottom: 'none' }}
    >
      {/* Left: text */}
      <div
        className="px-5 sm:px-10 py-14 sm:py-20 flex flex-col justify-between gap-12 sm:gap-16"
        style={{ borderRight: '1px solid var(--border)' }}
      >
        <ScrollReveal>
          <h2
            className="leading-tight tracking-[-0.01em] whitespace-pre-line"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 5vw, 64px)',
              color: 'var(--text-primary)',
              fontWeight: 300,
            }}
          >
            {t('heading')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('p1')}
            </p>
            <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('p2')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="flex items-center gap-4">
            <div style={{ width: 40, height: 1, background: 'var(--border)' }} />
            <span
              className="text-[11px] tracking-[0.15em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {t('classOf')}
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Right: portrait */}
      <ScrollReveal className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-0" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <Image
          src="/images/portrait3.jpg"
          alt="Xiao He"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
        />
      </ScrollReveal>
    </section>
  )
}
