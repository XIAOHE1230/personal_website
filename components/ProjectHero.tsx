'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLocaleContext } from '@/lib/i18n/LocaleProvider'
import zhMessages from '@/lib/i18n/zh.json'

interface ProjectHeroProps {
  slug: string
  title: string
  subtitle: string
  category: string
  coverImage: string
  heroImage?: string
}

const EASE = [0.25, 0.1, 0.25, 1] as const

type ZhProject = { title: string; subtitle: string; category: string }

export default function ProjectHero({ slug, title, subtitle, category, coverImage, heroImage }: ProjectHeroProps) {
  const { locale } = useLocaleContext()
  const zhProject = (zhMessages.projectsData as Record<string, ZhProject>)[slug]

  const titleLabel    = locale === 'zh' ? (zhProject?.title    ?? title)    : title
  const subtitleLabel = locale === 'zh' ? (zhProject?.subtitle ?? subtitle) : subtitle
  const categoryLabel = locale === 'zh' ? (zhProject?.category ?? category) : category

  return (
    <section
      className="relative w-full flex flex-col justify-end"
      style={{ height: '80vh', minHeight: 400 }}
    >
      {coverImage ? (
        <>
          <Image
            src={heroImage ?? coverImage}
            alt={title}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #1c1c1c 0%, #0e0e0e 60%, #111 100%)' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        </>
      )}

      <div className="relative z-10 px-5 sm:px-10 pb-10 sm:pb-14 max-w-[1600px] mx-auto w-full">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: EASE }}
          className="block text-[10px] tracking-[0.22em] uppercase mb-4 sm:mb-5"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {categoryLabel}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.12, ease: EASE }}
          className="leading-none tracking-[-0.02em]"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(36px, 7vw, 96px)',
            color: 'var(--text-primary)',
            fontWeight: 300,
            maxWidth: '14ch',
          }}
        >
          {titleLabel}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.24, ease: EASE }}
          className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] tracking-[0.06em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitleLabel}
        </motion.p>
      </div>
    </section>
  )
}
