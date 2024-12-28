import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Projects />
      <Contact />
    </div>
  )
}
