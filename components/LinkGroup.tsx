'use client'

import type { ProjectLinks } from '@/data/projects'

interface LinkGroupProps {
  links: ProjectLinks
}

const LINK_DEFS: { key: keyof ProjectLinks; label: string }[] = [
  { key: 'github', label: 'GITHUB' },
  { key: 'pdf',    label: 'PDF'    },
  { key: 'video',  label: 'VIDEO'  },
  { key: 'docs',   label: 'DOCS'   },
]

export default function LinkGroup({ links }: LinkGroupProps) {
  const available = LINK_DEFS.filter(({ key }) => links[key] !== undefined && links[key] !== '')

  if (available.length === 0) return null

  return (
    <section
      className="py-14 px-10"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
        {available.map(({ key, label }) => (
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
            style={{
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            [ {label} ]
          </a>
        ))}
      </div>
    </section>
  )
}
