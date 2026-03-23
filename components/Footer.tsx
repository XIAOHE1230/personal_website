'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer
      className="px-5 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span
        className="text-[11px] tracking-[0.15em] uppercase"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {t('copy')}
      </span>
      <span
        className="text-[11px] tracking-[0.1em]"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {t('tagline')}
      </span>
    </footer>
  )
}
