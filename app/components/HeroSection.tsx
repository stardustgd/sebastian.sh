import GridBackground from './GridBackground'

export default function HeroSection() {
  return (
    <div className="relative flex flex-col justify-center items-start px-8 md:px-12 xl:px-28 gap-2 xl:gap-4 min-h-screen">
      <GridBackground />
      <h1 className="text-[#8FBCBB] text-5xl md:text-6xl xl:text-8xl font-semibold">
        Sebastian Ala Torre
      </h1>
      <h2 className="text-3xl xl:text-5xl font-medium">CSE @ UCI</h2>
    </div>
  )
}
