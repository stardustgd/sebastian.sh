// ProjectCard props
export type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  repoLink?: string | null
  webLink?: string | null
  tags: string[]
}

export type ProjectCardHeaderProps = {
  title: string
  repoLink?: string | null
  webLink?: string | null
}

export type ProjectCardBodyProps = {
  imageSrc: string
  imageAlt: string
  description: string
  repoLink?: string | null
  webLink?: string | null
  tags: string[]
}

export type ProjectTagsProps = {
  tags: string[]
}
