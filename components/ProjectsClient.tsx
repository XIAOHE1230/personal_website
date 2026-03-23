'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FilterTabs from '@/components/FilterTabs'
import ProjectIndexRow from '@/components/ProjectIndexRow'
import { projects } from '@/data/projects'

export type FilterCategory = 'all' | 'ai' | 'arch'

function matchesFilter(category: string, filter: FilterCategory): boolean {
  if (filter === 'all') return true
  if (filter === 'ai') {
    return (
      category.includes('AI') ||
      category.includes('ROBOTICS') ||
      category.includes('COMPUTATIONAL') ||
      category.includes('PHYSICAL COMPUTING')
    )
  }
  if (filter === 'arch') return category.includes('ARCHITECTURE')
  return true
}

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const t = useTranslations('projects')

  const filtered = projects.filter(p => matchesFilter(p.category, activeFilter))

  return (
    <div style={{ position: 'relative' }}>
      {/* Fixed background image with edge fading mask */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        maskComposite: 'intersect',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskComposite: 'source-in',
      }}>
        <Image
          src="/images/work-hero.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center', opacity: 0.4 }}
        />
      </div>
      {/* Dark overlay */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'rgba(0,0,0,0.65)' }} />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh' }}>

      {/* Page header */}
      <div
        className="px-10 pt-40 pb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
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
        <div className="pb-3">
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </div>
      </div>

      {/* Project count */}
      <div
        className="px-10 py-5 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <span
          className="text-[10px] tracking-[0.18em] uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {filtered.length}&nbsp;
          {filtered.length === 1 ? t('project') : t('projects')}
        </span>
        <span
          className="hidden sm:block text-[10px] tracking-[0.12em] uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {activeFilter !== 'all' ? t(activeFilter) : t('allDisciplines')}
        </span>
      </div>

      {/* Index list */}
      <ul>
        {filtered.map((project, i) => (
          <li key={project.slug}>
            <ProjectIndexRow project={project} index={i} />
          </li>
        ))}
      </ul>

      <div style={{ borderBottom: '1px solid var(--border)' }} />
      </div>{/* end page content */}
    </div>
  )
}
