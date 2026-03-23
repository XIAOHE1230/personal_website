'use client'

import { useLocaleContext } from '@/lib/i18n/LocaleProvider'
import zhMessages from '@/lib/i18n/zh.json'

interface ProjectMetaBarProps {
  slug: string
  year: string
  category: string
  tags: string[]
}

type ZhProject = { category: string }

export default function ProjectMetaBar({ slug, year, category, tags }: ProjectMetaBarProps) {
  const { locale } = useLocaleContext()
  const zhProject = (zhMessages.projectsData as Record<string, ZhProject>)[slug]
  const categoryLabel = locale === 'zh' ? (zhProject?.category ?? category) : category

  return (
    <div
      className="px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-3"
      style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <span
        className="text-[10px] tracking-[0.15em] uppercase"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {year}
      </span>
      <div style={{ width: 1, height: 12, background: 'var(--border)' }} />
      <span
        className="text-[10px] tracking-[0.15em] uppercase"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {categoryLabel}
      </span>
      <div style={{ width: 1, height: 12, background: 'var(--border)' }} />
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="text-[9px] tracking-[0.12em] uppercase px-2 py-1"
            style={{ color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
