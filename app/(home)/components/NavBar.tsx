import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function NavBar() {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/sebastian-ala-torre-0654502a9/',
      label: 'LinkedIn',
      icon: SiLinkedin,
      color: '#5e81ac',
    },
    {
      link: 'https://www.github.com/stardustgd',
      label: 'GitHub',
      icon: SiGithub,
      color: '#eceff4',
    },
  ]

  return (
    <nav className="py-10 flex justify-end items-center pr-5 lg:pr-0">
      <div className="flex items-center gap-5">
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
                className={`size-5 transition-all hover:scale-150 hover:fill-[${social.color}]`}
              />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
