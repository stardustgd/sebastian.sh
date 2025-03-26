import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Smart Pet Feeder',
      description:
        'A device designed to support pets dealing with separation anxiety by enabling owners to care for their pets easily and remotely. Users can schedule feeding times, manually feed, and check in on their pets via live video stream. This is my UC Irvine senior capstone project!',
      imageSrc: '/smartpetfeeder.png',
      imageAlt: 'Smart Pet Feeder logo',
      repoLink: 'https://github.com/stardustgd/SmartPetFeeder',
      webLink: 'https://smart-pet-feeder.vercel.app/',
      tags: ['Next.js', 'Express.js', 'Node.js', 'MongoDB', 'Raspberry Pi'],
    },
    {
      title: 'Soñando Sin Miedo',
      description:
        'Responsive front-end web application for a non-profit organization aiming to empower scholars from underprivileged backgrounds. Users can view the various resources offered, and find contact information for the organization.',
      imageSrc: '/sonando_sin_miedo.png',
      imageAlt: 'Soñando Sin Miedo image',
      repoLink: null,
      webLink: 'https://sonandosinmiedo.org',
      tags: ['Next.js', 'TypeScript', 'Figma', 'Framer Motion'],
    },
    {
      title: 'Interactive Campus Map',
      description:
        'Mobile application for Antelope Valley College students to easily discover and access campus resources. Explore different campus buildings, learn about the resources available in each, and filter buildings by type.',
      imageSrc: '/avc_interactive_map.png',
      imageAlt: 'AVC Interactive Campus Map',
      repoLink: 'https://github.com/AVC-CS-Committee/InteractiveCampusMap',
      webLink: null,
      tags: ['Android Studio', 'Java', 'Flutter', 'Figma'],
    },
    {
      title: 'Peter Eater',
      description:
        'Web application for rating dishes served in UCI dining halls. Users can vote on individual dishes and share their favorite dining hall of the day.',
      imageSrc: '/peter_eater.png',
      imageAlt: 'Peter Eater image',
      repoLink: 'https://github.com/stardustgd/Peter-Eater',
      webLink: null,
      tags: ['React Native', 'Flask', 'Figma', 'Next.js'],
    },
    {
      title: 'x86 Bank',
      description:
        'Console-based banking application built in x86 Assembly, featuring a text file database with multi-account support. Users are able to create an account, deposit and withdraw money, or calculate accumulated interest.',
      imageSrc: '/x86Bank.png',
      imageAlt: 'x86 Bank',
      repoLink: 'https://github.com/stardustgd/x86-Bank',
      webLink: null,
      tags: ['x86 Assembly', 'Irvine32', 'MASM', 'PowerShell', 'Bash'],
    },
  ]
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
