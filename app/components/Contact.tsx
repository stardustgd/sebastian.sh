import Link from 'next/link'
import { socials } from '@/constants/consts'

export default function Contact() {
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
                  className={`size-12 md:size-16 transition-all hover:scale-125 ${social.color}`}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
