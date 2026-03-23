'use client'

import ScrollReveal from '@/components/ScrollReveal'

interface SectionBlockProps {
  number: string
  label: string
  children: React.ReactNode
}

export default function SectionBlock({ number, label, children }: SectionBlockProps) {
  return (
    <div
      className="py-12 sm:py-16 px-5 sm:px-10"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 18,
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 400,
              }}
            >
              {number}
            </span>
            <div style={{ width: 1, height: 20, background: 'var(--border)' }} />
            <span
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{ color: 'var(--text-secondary)' }}
            >
              {label}
            </span>
          </div>

          {/* Body */}
          <div
            className="text-[14px] sm:text-[15px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {children}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
