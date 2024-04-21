import React from 'react'
import GenericCard from './GenericCard'

export default function EducationSection() {
  const schools = [
    {
      title: 'University of California, Irvine',
      titleDesc: "Bachelor's Degree, Computer Science",
      subheading: 'Fall 2023 - Present',
      description: 'Expected graduation in fall 2025. GPA: 3.45',
      image: 'ucirvinelogo.png',
    },
    {
      title: 'Antelope Valley College',
      titleDesc: "Associate's Degree, Computer Science",
      subheading: 'Summer 2021 - Spring 2023',
      description: 'GPA: 4.0',
      image: 'avclogo.png',
    },
  ]

  return (
    <section id="education" className="text-[#eceff4]">
      <div className="px-6 lg:px-0 gap-8 items-center py-8 xl:gap-16 sm:py-16 ">
        {schools.map((school, index: number) => (
          <GenericCard
            key={index}
            title={school.title}
            titleDesc={school.titleDesc}
            subheading={school.subheading}
            description={school.description}
            image={school.image}
          />
        ))}
      </div>
    </section>
  )
}
