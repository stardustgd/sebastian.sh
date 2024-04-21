import React from 'react'
import GenericCard from './GenericCard'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Peer Tutor',
      titleDesc: 'Antelope Valley College',
      subheading: 'September 2022 - May 2023',
      description:
        'Tutored students on the fundamental of Java, C/C++, x86 Assembly, and Data Structures. I also worked alongside professors to assist students in Java and Object Oriented Programming.',
      image: 'avclogo1.png',
    },
  ]

  return (
    <section id="experience" className="text-[#eceff4]">
      <div className="px-6 lg:px-0 gap-8 items-center py-8 xl:gap-16 sm:py-16">
        {experiences.map((experience, index) => (
          <GenericCard
            key={index}
            title={experience.title}
            titleDesc={experience.titleDesc}
            subheading={experience.subheading}
            description={experience.description}
            image={experience.image}
          />
        ))}
      </div>
    </section>
  )
}
