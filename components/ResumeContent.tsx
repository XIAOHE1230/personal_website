'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ResumeContent() {
  const t = useTranslations('resume')

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="px-5 sm:px-10 pt-36 sm:pt-40 pb-12 sm:pb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div>
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            {t('label')}
          </p>
          <h1
            className="leading-none"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(48px, 8vw, 96px)',
              color: 'var(--text-primary)',
              fontWeight: 300,
            }}
          >
            {t('heading')}
          </h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className="text-[11px] tracking-[0.15em] uppercase px-6 py-3 shrink-0 self-start sm:self-end"
          style={{ backgroundColor: '#ffffff', color: 'var(--bg-primary)' }}
        >
          {t('download')}
        </a>
      </div>

      {/* PDF area */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-5 sm:px-10 py-16 sm:py-20 gap-8"
        style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <p
          className="text-[13px] leading-relaxed text-center max-w-sm"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {t('instruction')}
        </p>
        <a
          href="/resume.pdf"
          download
          className="text-[11px] tracking-[0.15em] uppercase px-6 py-3 transition-colors duration-200"
          style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          {t('downloadBtn')}
        </a>
        <Link
          href="/contact"
          className="text-[11px] tracking-[0.12em] uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {t('contactLink')}
        </Link>
      </div>
    </main>
  )
}
