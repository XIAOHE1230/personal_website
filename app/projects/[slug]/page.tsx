import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import ProjectHero from '@/components/ProjectHero'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import ProjectDetailSections from '@/components/ProjectDetailSections'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const project = projects.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Xiao He`,
    description: project.concept,
  }
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const idx = projects.findIndex(p => p.slug === slug)
  if (idx === -1) notFound()

  const project = projects[idx]
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <>
      <Nav />
      <main>
        {/* Meta bar */}
        <ProjectHero
          slug={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          category={project.category}
          coverImage={project.coverImage}
          heroImage={project.heroImage}
        />

        {/* Year / category / tags strip */}
        <ProjectMetaBar
          slug={project.slug}
          year={project.year}
          category={project.category}
          tags={project.tags}
        />

        {/* Translated sections + gallery + links + prev/next */}
        <ProjectDetailSections project={project} prev={prev} next={next} />
      </main>
      <Footer />
    </>
  )
}
