'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const SKILLS = [
  { group: 'Design',      items: ['Rhino', 'Grasshopper', 'Revit', 'AutoCAD', 'SketchUp', 'Adobe Suite'] },
  { group: 'Fabrication', items: ['ABB Robot Arm', 'Machina', 'Clay 3D Printing', 'CNC', 'Laser Cutting'] },
  { group: 'Code',        items: ['Python', 'TypeScript', 'Arduino', 'Grasshopper Scripts', 'RAG Pipelines'] },
  { group: 'Research',    items: ['FEA Analysis', 'Parametric Modeling', 'LLM / AI Workflows', 'Documentation Systems'] },
]

const EDUCATION_PERIODS = ['2025–2026', '2020–2025']

export default function AboutPageContent() {
  const t = useTranslations('aboutPage')

  return (
    <main>
      {/* PAGE HEADER */}
      <div className="px-5 sm:px-10 pt-36 sm:pt-40 pb-12 sm:pb-14">
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
          {t('heading')}
        </h1>
        <p className="mt-4 text-[13px] tracking-[0.1em]" style={{ color: 'var(--text-secondary)' }}>
          何骁
        </p>
      </div>

      {/* TWO-COLUMN EDITORIAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — portrait */}
        <div
          className="relative min-h-[560px] lg:min-h-0"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <Image
            src="/images/about-portrait.jpg"
            alt="Xiao He"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
          />
        </div>

        {/* Right — bio */}
        <div
          className="flex flex-col justify-between px-5 sm:px-10 py-10 sm:py-16 gap-10 sm:gap-12"
          style={{}}
        >
          <div className="flex flex-col gap-6">
            <h2
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(24px, 3vw, 40px)',
                color: 'var(--text-primary)',
                fontWeight: 300,
              }}
            >
              {t('tagline')}
            </h2>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('p1')}
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('p2')}
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('p3')}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-[11px] tracking-[0.15em] uppercase px-5 py-3"
              style={{ backgroundColor: '#ffffff', color: 'var(--bg-primary)' }}
            >
              {t('viewWork')}
            </Link>
            <Link
              href="/contact"
              className="text-[11px] tracking-[0.15em] uppercase px-5 py-3"
              style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              {t('getInTouch')}
            </Link>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="px-5 sm:px-10 py-12 sm:py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {t('education')}
            </span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          <div className="flex flex-col">
            {EDUCATION_PERIODS.map((period, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 py-10"
                style={{ borderBottom: i < EDUCATION_PERIODS.length - 1 ? '1px solid var(--border)' : undefined }}
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="leading-tight"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(20px, 2.5vw, 32px)',
                      color: 'var(--text-primary)',
                      fontWeight: 300,
                    }}
                  >
                    {t(`edu${i + 1}Degree`)}
                  </h3>
                  <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                    {t(`edu${i + 1}School`)}
                  </p>
                  <p className="text-[11px] tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {t(`edu${i + 1}Note`)}
                  </p>
                </div>
                <span
                  className="text-[11px] tracking-[0.1em] sm:text-right self-start pt-1"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="px-5 sm:px-10 py-12 sm:py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {t('skills')}
            </span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'var(--border)' }}
          >
            {SKILLS.map((group) => (
              <div
                key={group.group}
                className="flex flex-col gap-5 px-5 sm:px-6 py-8"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <span
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {group.group}
                </span>
                <ul className="flex flex-col gap-2">
                  {group.items.map(item => (
                    <li key={item} className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESUME CTA */}
      <div
        className="px-5 sm:px-10 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex flex-col gap-2">
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(20px, 2.5vw, 32px)',
              color: 'var(--text-primary)',
              fontWeight: 300,
            }}
          >
            {t('resumeCta')}
          </h3>
          <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            {t('resumeSubtitle')}
          </p>
        </div>
        <Link
          href="/resume"
          className="text-[11px] tracking-[0.15em] uppercase px-6 py-3 shrink-0"
          style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
        >
          {t('viewResume')}
        </Link>
      </div>
    </main>
  )
}
