'use client'

import { useTranslations } from 'next-intl'
import type { FilterCategory } from '@/components/ProjectsClient'

interface FilterTabsProps {
  active: FilterCategory
  onChange: (cat: FilterCategory) => void
}

const TABS: FilterCategory[] = ['all', 'ai', 'arch']

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  const t = useTranslations('projects')

  return (
    <div className="flex items-center gap-8">
      {TABS.map(tab => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className="relative text-[11px] tracking-[0.15em] uppercase pb-2 transition-colors duration-200"
            style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)' }}
          >
            {t(tab)}
            <span
              className="absolute bottom-0 left-0 right-0 transition-all duration-300"
              style={{ height: 1, background: isActive ? 'rgba(255,255,255,0.5)' : 'transparent' }}
            />
          </button>
        )
      })}
    </div>
  )
}
