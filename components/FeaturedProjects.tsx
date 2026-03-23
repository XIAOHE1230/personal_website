'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { featuredProjects } from '@/data/projects'
import { useLocaleContext } from '@/lib/i18n/LocaleProvider'

const EASE = [0.25, 0.1, 0.25, 1] as const

const CATEGORY_ZH: Record<string, string> = {
  'AI / ROBOTICS':                    '人工智能 / 机器人',
  'ARCHITECTURE / STRUCTURAL':        '建筑 / 结构设计',
  'ARCHITECTURE / ECOLOGICAL DESIGN': '建筑 / 生态设计',
  'ARCHITECTURE / URBAN DESIGN':      '建筑 / 城市设计',
}

const TITLE_ZH: Record<string, string> = {
  'RoboFab Guide':        'RoboFab 指南',
  'The Hand of Structure': '结构之手',
  'Iron Island':           '铁岛',
  'Multi Cyber City':      '多元赛博城市',
}

// Override coverImage for featured section without touching projects.ts
const FEATURED_IMAGE_OVERRIDE: Record<string, string> = {
  'robofab-guide': '/images/robofab/cover.jpg',
}

const CONCEPT_ZH: Record<string, string> = {
  'RoboFab Guide':
    '基于真实实验室痛点构建的对话式AI助手——解决资源分散与复杂机器人制造工作流程的问题。',
  'The Hand of Structure':
    '结合灵活性、可变形态与空间延展性的结构系统——突破传统静态结构设计的局限。',
  'Iron Island':
    '将亚得里亚海退役海上钻井平台改造为离岸贻贝养殖厂——兼顾经济效益与生态修复。',
  'Multi Cyber City':
    '深度融合：中国古代建筑+哥特尖塔+神庙柱廊+赛博技术=统一的未来城市语言。',
}

function ProjectRow({ project, index }: { project: (typeof featuredProjects)[number]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(rowRef, { once: true, margin: '-60px' })
  const isImageLeft = index % 2 === 0
  const t = useTranslations('featured')
  const { locale } = useLocaleContext()

  const categoryLabel = locale === 'zh' ? (CATEGORY_ZH[project.category] ?? project.category) : project.category
  const titleLabel    = locale === 'zh' ? (TITLE_ZH[project.title]    ?? project.title)    : project.title
  const conceptLabel  = locale === 'zh' ? (CONCEPT_ZH[project.title]  ?? project.concept)  : project.concept

  // Parallax
  const { scrollYProgress } = useScroll({ target: rowRef, offset: ['start end', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  // Row hover state
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      className="grid grid-cols-1 lg:grid-cols-5 relative overflow-hidden"
      style={{ borderRadius: 16, marginBottom: 24 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Image */}
      <div
        ref={imageRef}
        className={`relative overflow-hidden min-h-[260px] sm:min-h-[360px] lg:min-h-[480px] lg:col-span-3 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        {project.coverImage ? (
          <>
            {/* Zoom wrapper */}
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hovered ? 1.05 : 1.0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Parallax wrapper */}
              <motion.div
                className="absolute inset-[-10%]"
                style={{ y: parallaxY }}
              >
                <Image
                  src={FEATURED_IMAGE_OVERRIDE[project.slug] ?? project.coverImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: project.coverPosition ?? 'center top' }}
                />
              </motion.div>
            </motion.div>

            {/* Side fade */}
            <div
              className="absolute inset-y-0 pointer-events-none z-10"
              style={{
                width: '60%',
                ...(isImageLeft
                  ? {
                      right: 0,
                      background: 'linear-gradient(to right, rgba(14,14,14,0) 0%, rgba(14,14,14,0) 20%, rgba(14,14,14,0.4) 50%, rgba(14,14,14,0.85) 75%, rgba(14,14,14,1) 100%)',
                    }
                  : {
                      left: 0,
                      background: 'linear-gradient(to left, rgba(14,14,14,0) 0%, rgba(14,14,14,0) 20%, rgba(14,14,14,0.4) 50%, rgba(14,14,14,0.85) 75%, rgba(14,14,14,1) 100%)',
                    }),
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
              style={{
                height: '40%',
                background: 'linear-gradient(to bottom, rgba(14,14,14,0) 0%, rgba(14,14,14,0) 40%, rgba(14,14,14,0.5) 70%, rgba(14,14,14,0.9) 100%)',
              }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 flex items-end p-4 sm:p-6"
            style={{
              background: `linear-gradient(${135 + index * 30}deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)`,
            }}
          >
            <span
              className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
              style={{ color: 'var(--text-tertiary)' }}
            >
              [ {project.title} — cover image ]
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center px-5 sm:px-10 py-10 sm:py-14 gap-5 sm:gap-6 lg:col-span-2 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
        style={{ backgroundColor: '#0e0e0e' }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {categoryLabel}
        </span>
        <h3
          className="leading-tight"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(26px, 3vw, 48px)',
            color: 'var(--text-primary)',
            fontWeight: 300,
          }}
        >
          {titleLabel}
        </h3>
        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {conceptLabel}
        </p>
        <div className="flex items-center gap-6 mt-1">
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0.5,
              x: hovered ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              {t('viewProject')}
            </Link>
          </motion.div>
          <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--text-tertiary)' }}>
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const t = useTranslations('featured')

  return (
    <section style={{ padding: '0 40px' }}>
      {/* Section header */}
      <div
        className="py-10 sm:py-12 flex items-end justify-between"
      >
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(28px, 5vw, 64px)',
            color: 'var(--text-primary)',
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          {t('heading')}
        </h2>
        <Link
          href="/projects"
          className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase pb-1 transition-colors duration-200"
          style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.borderBottomColor = 'var(--border)'
          }}
        >
          {t('viewAll')}
        </Link>
      </div>

      <div className="py-8 sm:py-10">
        {featuredProjects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
