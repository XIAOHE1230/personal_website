'use client'

import { useTranslations } from 'next-intl'
import SectionBlock from '@/components/SectionBlock'
import ImageGallery from '@/components/ImageGallery'
import LinkGroup from '@/components/LinkGroup'
import ProjectNav from '@/components/ProjectNav'
import type { Project } from '@/data/projects'
import { useLocaleContext } from '@/lib/i18n/LocaleProvider'
import zhMessages from '@/lib/i18n/zh.json'

interface ProjectDetailSectionsProps {
  project: Project
  prev: Project | null
  next: Project | null
}

type ZhProject = {
  concept: string
  systemLogic: string
  process: string
  outcome: string
}

export default function ProjectDetailSections({ project, prev, next }: ProjectDetailSectionsProps) {
  const t = useTranslations('detail')
  const { locale } = useLocaleContext()
  const zhProject = (zhMessages.projectsData as Record<string, ZhProject>)[project.slug]

  const tr = (en: string, key: keyof ZhProject) =>
    locale === 'zh' ? (zhProject?.[key] ?? en) : en

  return (
    <>
      <SectionBlock number="01" label={t('concept')}>
        {tr(project.concept, 'concept')}
      </SectionBlock>
      <SectionBlock number="02" label={t('systemLogic')}>
        {tr(project.systemLogic, 'systemLogic')}
      </SectionBlock>
      <SectionBlock number="03" label={t('process')}>
        {tr(project.process, 'process')}
      </SectionBlock>
      <SectionBlock number="04" label={t('outcome')}>
        {tr(project.outcome, 'outcome')}
      </SectionBlock>
      <ImageGallery slug={project.slug} images={project.gallery} layout={project.galleryLayout} />
      <LinkGroup links={project.links} />
      <ProjectNav prev={prev} next={next} />
    </>
  )
}
