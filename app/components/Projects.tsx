import ProjectCard from './ProjectCard'
import { projects } from '@/constants/consts'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.background}>
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
  )
}
