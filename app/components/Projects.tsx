import ProjectCard from './ProjectCard'
import { projects } from '@/constants/consts'

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#21242B] px-4 sm:px-8 py-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold pb-8">
          projects
        </h1>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            repoLink={project.repoLink}
            webLink={project.webLink}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}
