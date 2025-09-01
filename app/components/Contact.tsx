import Link from 'next/link'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'

export default function Contact() {
  const socials = [
    {
      link: 'mailto:sdalator@outlook.com',
      label: 'Email',
      icon: SiGmail,
      className: 'hover:fill-[#bf616a]',
    },
    {
      link: 'https://www.linkedin.com/in/sebastian-at/',
      label: 'LinkedIn',
      icon: SiLinkedin,
      className: 'hover:fill-[#5e81ac]',
    },
    {
      link: 'https://www.github.com/stardustgd',
      label: 'GitHub',
      icon: SiGithub,
      className: 'hover:fill-[#4c566a]',
    },
  ]

  return (
    <div className="min-h-[50vh] bg-[#21242B] px-4 sm:px-8 py-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold pb-8">
          contact
        </h1>
        <div className="flex flex-row gap-8 md:gap-16">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <Link
                href={social.link}
                target="_blank"
                key={index}
                aria-label={social.label}
                title={social.label}
              >
                <Icon
                  className={`size-12 md:size-16 transition-all hover:scale-125 ${social.className}`}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
