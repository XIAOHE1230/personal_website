import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import PillarsSection from '@/components/PillarsSection'
import StatsRow from '@/components/StatsRow'
import AboutSplit from '@/components/AboutSplit'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <PillarsSection />
        <StatsRow />
        <AboutSplit />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  )
}
