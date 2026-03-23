'use client'

import Link from 'next/link'
import type { Project } from '@/data/projects'
import { useLocaleContext } from '@/lib/i18n/LocaleProvider'
import zhMessages from '@/lib/i18n/zh.json'

interface ProjectNavProps {
  prev: Project | null
  next: Project | null
}

type ZhProject = { title: string; category: string }

function useProjectLabel(project: Project | null, key: keyof ZhProject, fallback: string) {
  const { locale } = useLocaleContext()
  if (!project) return fallback
  const zh = (zhMessages.projectsData as Record<string, ZhProject>)[project.slug]
  return locale === 'zh' ? (zh?.[key] ?? fallback) : fallback
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  const { locale } = useLocaleContext()

  const prevTitle    = prev ? (locale === 'zh' ? ((zhMessages.projectsData as Record<string, ZhProject>)[prev.slug]?.title    ?? prev.title)    : prev.title)    : ''
  const prevCategory = prev ? (locale === 'zh' ? ((zhMessages.projectsData as Record<string, ZhProject>)[prev.slug]?.category ?? prev.category) : prev.category) : ''
  const nextTitle    = next ? (locale === 'zh' ? ((zhMessages.projectsData as Record<string, ZhProject>)[next.slug]?.title    ?? next.title)    : next.title)    : ''
  const nextCategory = next ? (locale === 'zh' ? ((zhMessages.projectsData as Record<string, ZhProject>)[next.slug]?.category ?? next.category) : next.category) : ''

  return (
    <nav
      className="grid grid-cols-2"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Prev */}
      <div style={{ borderRight: '1px solid var(--border)' }}>
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="flex flex-col gap-2 px-5 sm:px-10 py-8 sm:py-10 transition-colors duration-200"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-secondary)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              ← Previous
            </span>
            <span
              className="leading-tight truncate"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(16px, 2.5vw, 30px)',
                color: 'var(--text-primary)',
                fontWeight: 300,
              }}
            >
              {prevTitle}
            </span>
            <span
              className="text-[10px] tracking-[0.1em] uppercase truncate"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {prevCategory}
            </span>
          </Link>
        ) : (
          <div className="px-5 sm:px-10 py-8 sm:py-10" />
        )}
      </div>

      {/* Next */}
      <div>
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="flex flex-col gap-2 px-5 sm:px-10 py-8 sm:py-10 items-end text-right transition-colors duration-200"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-secondary)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Next →
            </span>
            <span
              className="leading-tight truncate max-w-full"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(16px, 2.5vw, 30px)',
                color: 'var(--text-primary)',
                fontWeight: 300,
              }}
            >
              {nextTitle}
            </span>
            <span
              className="text-[10px] tracking-[0.1em] uppercase truncate max-w-full"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {nextCategory}
            </span>
          </Link>
        ) : (
          <div className="px-5 sm:px-10 py-8 sm:py-10" />
        )}
      </div>
    </nav>
  )
}
