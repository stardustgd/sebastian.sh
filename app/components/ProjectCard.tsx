'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ProjectCardHeaderProps,
  ProjectCardBodyProps,
  ProjectTagsProps,
  ProjectCardProps,
} from '@/types'
import styles from '@/styles/ProjectCard.module.css'

function ProjectCardHeader({
  title,
  repoLink,
  webLink,
}: ProjectCardHeaderProps) {
  return (
    <div className="flex flex-row justify-center md:justify-between items-center">
      <h1 className="text-[1.5rem] sm:text-[2.5rem] font-semibold">{title}</h1>
      <div className="hidden md:flex flex-row gap-4">
        {repoLink && (
          <Link href={repoLink} target="_blank">
            <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.95 }}>
              <FaGithub className="size-8 fill-[#ECEFF4]" />
            </motion.div>
          </Link>
        )}
        {webLink && (
          <Link href={webLink} target="_blank">
            <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.95 }}>
              <FaLink className="size-8 fill-[#ECEFF4]" />
            </motion.div>
          </Link>
        )}
      </div>
    </div>
  )
}

function ProjectCardBody({
  imageSrc,
  imageAlt,
  description,
  repoLink,
  webLink,
  tags,
}: ProjectCardBodyProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 pt-4">
      <div className="relative aspect-[500/300] md:w-[40%]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={80}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row gap-8 justify-center md:hidden">
        {repoLink && (
          <Link href={repoLink} target="_blank">
            <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.8 }}>
              <FaGithub className="size-8 fill-[#ECEFF4]" />
            </motion.div>
          </Link>
        )}
        {webLink && (
          <Link href={webLink} target="_blank">
            <motion.div whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.8 }}>
              <FaLink className="size-8 fill-[#ECEFF4]" />
            </motion.div>
          </Link>
        )}
      </div>
      <div className="flex flex-col md:w-1/2 justify-between gap-4">
        <p className="text-[1rem] sm:text-[1.25rem]">{description}</p>
        <ProjectTags tags={tags} />
      </div>
    </div>
  )
}

function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-2">
      {tags &&
        tags.map((tag, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1, background: '#81A1C1' }}
            className="bg-[#5D81AC] w-fit rounded-full px-4 py-1"
          >
            {tag}
          </motion.span>
        ))}
    </div>
  )
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  repoLink,
  webLink,
  tags,
}: ProjectCardProps) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: '-50% 0px -50% 0px',
  })

  return (
    <motion.div
      ref={ref}
      className={styles.container}
      animate={{
        scale: isInView ? 1.05 : 1,
        borderColor: isInView ? '#5e81ac' : '#4c566a',
      }}
      transition={{
        type: 'spring',
        bounce: '0.3',
      }}
    >
      <div className="flex flex-col gap-4">
        <ProjectCardHeader
          title={title}
          repoLink={repoLink}
          webLink={webLink}
        />
      </div>
      <ProjectCardBody
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        description={description}
        repoLink={repoLink}
        webLink={webLink}
        tags={tags}
      />
    </motion.div>
  )
}
