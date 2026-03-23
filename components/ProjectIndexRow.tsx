'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/data/projects'
import { useLocaleContext } from '@/lib/i18n/LocaleProvider'

const TITLE_ZH: Record<string, string> = {
  'RoboFab Guide':             'RoboFab 指南',
  'Image-to-Robot Drawing':    '图像转机器人绘图',
  'Robotic Digital Manufacturing': '机器人数字制造与传感交互系统',
  'The Hand of Structure':     '结构之手',
  'Iron Island':               '铁岛',
  'Floating Community':        '浮动社区',
  'Multi Cyber City':          '多元赛博城市',
  'Desert Boat':               '沙漠之舟',
}

const CATEGORY_ZH: Record<string, string> = {
  'AI / ROBOTICS':                    '人工智能 / 机器人',
  'COMPUTATIONAL DESIGN / ROBOTICS':  '计算设计 / 机器人',
  'PHYSICAL COMPUTING':               '物理计算',
  'ROBOTICS / DIGITAL FABRICATION':  '机器人 / 数字制造',
  'ARCHITECTURE / STRUCTURAL':        '建筑 / 结构设计',
  'ARCHITECTURE / ECOLOGICAL DESIGN': '建筑 / 生态设计',
  'ARCHITECTURE / SOCIAL DESIGN':     '建筑 / 社会设计',
  'ARCHITECTURE / URBAN DESIGN':      '建筑 / 城市设计',
  'ARCHITECTURE / MODULAR':           '建筑 / 模块化设计',
}

interface ProjectIndexRowProps {
  project: Project
  index: number
}

const EASE = [0.25, 0.1, 0.25, 1] as const

export default function ProjectIndexRow({ project, index }: ProjectIndexRowProps) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const { locale } = useLocaleContext()
  const categoryLabel = locale === 'zh' ? (CATEGORY_ZH[project.category] ?? project.category) : project.category
  const titleLabel = locale === 'zh' ? (TITLE_ZH[project.title] ?? project.title) : project.title

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24), ease: EASE }}
    >
      <Link
        ref={ref}
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden"
        style={{ borderTop: '1px solid var(--border)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover background wash */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 0.12 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{
            background: `linear-gradient(${90 + index * 25}deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)`,
          }}
        />

        {/* Accent left bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0"
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          style={{ width: 2, background: 'var(--accent)', transformOrigin: 'top' }}
        />

        {/* Row */}
        <div className="relative flex items-center gap-3 sm:gap-6 px-5 sm:px-10 py-5 sm:py-7">
          {/* Number */}
          <span
            className="text-[10px] sm:text-[11px] tracking-[0.1em] w-6 sm:w-8 shrink-0"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Category — hidden on mobile */}
          <motion.span
            className="hidden sm:block text-[10px] tracking-[0.18em] uppercase w-44 lg:w-52 shrink-0"
            animate={{ color: hovered ? 'rgba(255,255,255,0.55)' : 'var(--text-tertiary)' }}
            transition={{ duration: 0.2 }}
          >
            {categoryLabel}
          </motion.span>

          {/* Title */}
          <motion.span
            className="flex-1 min-w-0"
            animate={{ color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)' }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(18px, 2.5vw, 34px)',
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            {titleLabel}
            {/* Category shown on mobile below title */}
            <span
              className="sm:hidden block mt-1 text-[10px] tracking-[0.12em] uppercase"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: 'var(--text-tertiary)',
                fontWeight: 400,
              }}
            >
              {categoryLabel}
            </span>
          </motion.span>

          {/* Tags — lg+, hover only */}
          <motion.div
            className="hidden lg:flex items-center gap-2 shrink-0"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.12em] uppercase px-2 py-1"
                style={{ color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Year */}
          <span
            className="text-[10px] sm:text-[11px] tracking-[0.1em] shrink-0 ml-auto pl-3 sm:pl-6"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {project.year}
          </span>

          {/* Arrow */}
          <motion.span
            className="text-base sm:text-lg shrink-0 ml-2 sm:ml-4"
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : -4,
            }}
            transition={{ duration: 0.2, ease: EASE }}
            style={{ color: 'var(--accent)' }}
          >
            →
          </motion.span>
        </div>
      </Link>
    </motion.div>
  )
}
