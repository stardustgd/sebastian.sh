import React from 'react'
import Link from 'next/link'
import SectionLink from './SectionLink'

const sectionLinks = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Experience',
    href: '#experience',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
]

export default function MainSection() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 text-center md:text-left px-6 lg:px-0">
          <div className="grid grid-rows-2 lg:grid-rows-5">
            <div className="row-span-2">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#eceff4] mb-4">
                Sebastian Ala Torre
              </h1>
              <h2 className="text-[#d8dee9] text-lg lg:text-xl font-extralight">
                Computer Science & Engineering @ UC Irvine
              </h2>
            </div>
            <div className="row-span-4 mt-4">
              <ul className="flex items-center gap-5">
                {sectionLinks.map((section, index) => (
                  <li key={index}>
                    <SectionLink href={section.href} title={section.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5 mt-10 lg:mt-0 px-6 lg:px-0">
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            porttitor massa id neque. Ut lectus arcu bibendum at varius vel
            pharetra. Nec nam aliquam sem et tortor consequat. Aliquam eleifend
            mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a
            erat nam at lectus urna duis. At tellus at urna condimentum mattis
            pellentesque id nibh tortor. Volutpat diam ut venenatis tellus in
            metus vulputate eu. Nibh nisl condimentum id venenatis a condimentum
            vitae sapien. At risus viverra adipiscing at in tellus integer
            feugiat. Vivamus at augue eget arcu dictum varius duis at
            consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper
            velit.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            porttitor massa id neque. Ut lectus arcu bibendum at varius vel
            pharetra. Nec nam aliquam sem et tortor consequat. Aliquam eleifend
            mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a
            erat nam at lectus urna duis. At tellus at urna condimentum mattis
            pellentesque id nibh tortor. Volutpat diam ut venenatis tellus in
            metus vulputate eu. Nibh nisl condimentum id venenatis a condimentum
            vitae sapien. At risus viverra adipiscing at in tellus integer
            feugiat. Vivamus at augue eget arcu dictum varius duis at
            consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper
            velit.
          </p>
        </div>
      </div>
    </section>
  )
}
