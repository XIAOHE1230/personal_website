import Nav from '@/components/Nav'
import ProjectsClient from '@/components/ProjectsClient'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Work — Xiao He',
  description: 'Selected projects across Architecture, Robotics, and AI.',
}

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main>
        <ProjectsClient />
      </main>
      <Footer />
    </>
  )
}
