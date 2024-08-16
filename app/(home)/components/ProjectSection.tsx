import React from 'react'
import Project from './Project'

export default function ProjectSection() {
  const projects = [
    {
      title: 'AVC Interactive Campus Map',
      description:
        'Interactive campus mobile app for Antelope Valley College using the Google Maps SDK. View the buildings on campus, learn about them, and even find where a class is located!',
      link: 'https://github.com/AVC-CS-Committee/InteractiveCampus',
      image:
        'https://github.com/AVC-CS-Committee/InteractiveCampusMap/raw/assets/demo0.jpg?raw=true',
      tags: ['Android Studio', 'Java', 'Flutter', 'Dart', 'Figma', 'GitHub'],
    },
    {
      title: 'Soñando Sin Miedo',
      description:
        'Next.js website for a non-profit organization aiming to empower scholars from underprivileged backgrounds.',
      link: 'https://sonando-sin-miedo-userisanapples-projects.vercel.app/',
      image: 'sonando_sin_miedo.png',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer', 'Figma'],
    },
    {
      title: 'x86 Bank',
      description:
        'Console based banking application made in x86 Assembly. Features a text file database with multi-account capabilities.',
      link: 'https://github.com/stardustgd/x86-Bank',
      image: 'x86Bank.png',
      tags: ['Assembly', 'PowerShell', 'Bash'],
    },
    {
      title: 'Portfolio Website',
      description:
        'The website you are currently on! Built with Next.js, TypeScript, and Tailwind CSS.',
      link: 'https://github.com/stardustgd/stardustgd.github.io',
      image: 'portfolio_sh.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
    },
  ]
  return (
    <section id="projects" className="text-[#eceff4]">
      <div className="px-6 lg:px-0 gap-8 items-center py-8 xl:gap-16 sm:py-16 ">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
