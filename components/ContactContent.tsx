'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const EMAIL = 'shawn-he@outlook.com'

export default function ContactContent() {
  const [copied, setCopied] = useState(false)
  const t = useTranslations('contact')

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-5 sm:px-10 pt-36 sm:pt-40 pb-12 sm:pb-14" style={{ borderBottom: '1px solid var(--border)' }}>
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
            fontSize: 'clamp(56px, 10vw, 120px)',
            color: 'var(--text-primary)',
            fontWeight: 300,
          }}
        >
          {t('line1')}
          <br />
          {t('line2')}
        </h1>
      </div>

      {/* Content */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 flex-1"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {/* Left */}
        <div
          className="flex flex-col justify-between px-5 sm:px-10 py-12 sm:py-16 gap-10 sm:gap-16"
          style={{ borderRight: '1px solid var(--border)' }}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {t('emailLabel')}
              </span>
              <button
                onClick={copyEmail}
                className="text-left transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(18px, 2.5vw, 32px)',
                  color: copied ? 'var(--accent)' : 'var(--text-primary)',
                  fontWeight: 300,
                }}
              >
                {copied ? t('copied') : EMAIL}
              </button>
              <span
                className="text-[10px] tracking-[0.12em] uppercase"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {t('copyHint')}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {t('locationLabel')}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  color: 'var(--text-primary)',
                  fontWeight: 300,
                }}
              >
                {t('locationCity')}
              </p>
              <p className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>
                {t('locationInst')}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {t('phoneLabel')}
            </span>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(18px, 2vw, 28px)',
                color: 'var(--text-primary)',
                fontWeight: 300,
              }}
            >
              {t('phone1')}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(18px, 2vw, 28px)',
                color: 'var(--text-primary)',
                fontWeight: 300,
              }}
            >
              {t('phone2')}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center px-5 sm:px-10 py-12 sm:py-16 gap-8">
          <p
            className="leading-relaxed"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(22px, 3vw, 42px)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
            }}
          >
            {t('quote')}
          </p>
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.35)' }} />
          <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            {t('subtext')}
          </p>
        </div>
      </div>
    </main>
  )
}
