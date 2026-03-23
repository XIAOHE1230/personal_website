import Nav from '@/components/Nav'
import AboutPageContent from '@/components/AboutPageContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About — Xiao He',
  description:
    'Xiao He (何骁) — cross-disciplinary designer at the intersection of Architecture, Robotics, and AI. MSD-RAS candidate at University of Pennsylvania.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutPageContent />
      <Footer />
    </>
  )
}
