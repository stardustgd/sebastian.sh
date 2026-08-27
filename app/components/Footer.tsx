import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { SiGithub } from 'react-icons/si'

export default function Footer() {
  const socials = [
    {
      link: 'mailto:sdalator@outlook.com',
      label: 'Email',
      icon: GoMail,
      className: 'hover:fill-[#bf616a]',
    },
    {
      link: 'https://www.linkedin.com/in/sebastian-at/',
      label: 'LinkedIn',
      icon: FaLinkedinIn,
      className: 'hover:fill-[#5e81ac]',
    },
    {
      link: 'https://www.github.com/stardustgd',
      label: 'GitHub',
      icon: SiGithub,
      className: 'hover:fill-[#4c566a]',
    },
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="px-48 py-8 border-t border-[rgba(236, 239, 244, 0.06)]">
      <div className="flex flex-col md:flex-row  justify-between max-w-screen-lg gap-12">
        <div>
          <Link href="/">
            <h1 className="text-[--accent]">Sebastian Ala Torre</h1>
          </Link>
          <p>Software Engineer</p>
        </div>
        <div>
          <h1>Connect</h1>
          <div className="flex flex-row gap-2">
            {socials.map((social, index) => {
              const Icon = social.icon

              return (
                <Link
                  key={index}
                  href={social.link}
                  className="inline-flex items-center justify-center size-11 border border-[#eceff414] rounded-full"
                >
                  <Icon fill="#d8dee9" className="size-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl">
        <p className="text-[--secondary-white] opacity-75 text-sm">
          © {year} Sebastian Ala Torre. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
