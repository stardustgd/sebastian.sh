import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'

export const socials = [
  {
    link: 'mailto:sdalator@uci.edu',
    label: 'Email',
    icon: SiGmail,
    color: 'hover:fill-[#bf616a]',
  },
  {
    link: 'https://www.linkedin.com/in/sebastian-at/',
    label: 'LinkedIn',
    icon: SiLinkedin,
    color: 'hover:fill-[#5e81ac]',
  },
  {
    link: 'https://www.github.com/stardustgd',
    label: 'GitHub',
    icon: SiGithub,
    color: 'hover:fill-[#4c566a]',
  },
]

export const projects = [
  {
    title: 'Smart Pet Feeder',
    description:
      'An automated smart pet feeder powered by a Raspberry Pi and is controlled through a web app. Users can schedule feeding times, set up activities, play calming sounds, and check in on their pets via video call. This project is currently under development, with exciting features on the way!',
    imageSrc: '/smartpetfeeder.png',
    imageAlt: 'Smart Pet Feeder logo',
    repoLink: 'https://github.com/stardustgd/SmartPetFeeder',
    webLink: 'https://smart-pet-feeder.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Raspberry Pi'],
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
