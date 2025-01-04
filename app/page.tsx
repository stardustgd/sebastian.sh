import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'

export default function Home() {
  return (
    <>
      <div className="w-full h-screen sticky top-0">
        <HeroSection />
      </div>
      <div className="relative">
        <Projects />
        <Contact />
      </div>
    </>
  )
}
