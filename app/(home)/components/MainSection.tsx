'use client'
import React, { useTransition, useState } from 'react'
import AboutSection from './AboutSection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection'
import SectionLink from './SectionLink'

const sectionLinks = [
  {
    title: 'About',
    href: '#about',
    content: <AboutSection />,
  },
  {
    title: 'Experience',
    href: '#experience',
    content: <ExperienceSection />,
  },
  {
    title: 'Education',
    href: '#education',
    content: <EducationSection />,
  },
  {
    title: 'Projects',
    href: '#projects',
    content: <ProjectSection />,
  },
]

export default function MainSection() {
  const [tab, setTab] = useState('About')
  const [, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 text-center md:text-left px-6 lg:px-0">
          <div className="grid grid-rows-2 lg:grid-rows-5 lg:fixed">
            <div className="row-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#eceff4] mb-4">
                Sebastian Ala Torre
              </h1>
              <h2 className="text-[#d8dee9] text-sm md:text-lg lg:text-xl font-extralight">
                Computer Science & Engineering @ UC Irvine
              </h2>
            </div>
            <div className="row-span-4 mt-4">
              <ul className="flex items-center gap-5 justify-center md:justify-normal">
                {sectionLinks.map((section, index) => (
                  <SectionLink
                    key={index}
                    selectTab={() => handleTabChange(section.title)}
                    active={tab === section.title}
                  >
                    {section.title}
                  </SectionLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5 mt-10 lg:mt-0 px-6 lg:px-0">
          {sectionLinks.find((t) => t.title === tab)?.content}
        </div>
      </div>
    </section>
  )
}
