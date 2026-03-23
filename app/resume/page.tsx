import Nav from '@/components/Nav'
import ResumeContent from '@/components/ResumeContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Resume — Xiao He',
}

export default function ResumePage() {
  return (
    <>
      <Nav />
      <ResumeContent />
      <Footer />
    </>
  )
}
