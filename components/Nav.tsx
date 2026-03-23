'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLocaleContext } from '@/lib/i18n/LocaleProvider'

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { locale, setLocale }     = useLocaleContext()
  const t = useTranslations('nav')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const NAV_LINKS = [
    { href: '/',         label: t('home')   },
    { href: '/projects', label: t('work')   },
    { href: '/about',    label: t('about')  },
    { href: '/resume',   label: t('resume') },
  ]

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: scrolled || menuOpen ? 'var(--bg-primary)' : 'transparent',
          borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 py-5 max-w-[1600px] mx-auto">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-base tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--text-primary)' }}
          >
            XH
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Locale toggle — desktop only */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
              className="hidden md:block text-[11px] tracking-[0.12em] uppercase transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {t('toggle')}
            </button>

            {/* CTA — desktop only */}
            <Link
              href="/contact"
              className="hidden md:block text-[11px] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.35)',
                color: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)')}
            >
              {t('contact')}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className="block h-px w-6 transition-all duration-300 origin-center"
                style={{
                  background: 'var(--text-primary)',
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-px w-6 transition-all duration-300"
                style={{
                  background: 'var(--text-primary)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-6 transition-all duration-300 origin-center"
                style={{
                  background: 'var(--text-primary)',
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-between px-5 pt-24 pb-10 transition-all duration-300"
        style={{
          backgroundColor: 'var(--bg-primary)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        {/* Links */}
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }, i) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(36px, 10vw, 56px)',
                  color: 'var(--text-primary)',
                  fontWeight: 300,
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid var(--border)' : undefined,
                  transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom cluster */}
        <div className="flex flex-col gap-5">
          <button
            onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
            className="text-left text-[11px] tracking-[0.15em] uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('toggle')}
          </button>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] tracking-[0.15em] uppercase px-5 py-3 self-start"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </>
  )
}
