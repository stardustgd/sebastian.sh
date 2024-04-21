import Link from 'next/link'

type Project = {
  project: {
    title: string
    description: string
    link: string
    image: string
    tags: string[]
  }
}

export default function Project({ project }: Project) {
  const { title, description, link, image, tags } = project
  return (
    <div className="max-w rounded overflow-hidden shadow-lg mb-10 hover:border-t-4 hover:border-[#5e81ac] transition-all hover:scale-105">
      <Link href={`${link}`} target="_blank">
        <img
          className="w-full max-h-40 object-cover"
          src={`${image}`}
          alt={`${title}`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-[#eceff4] text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="inline-block bg-[#5e81ac] hover:bg-[#81a1c1] rounded-full px-3 py-1 text-sm font-semibold text-[#e5e9f0] mr-2 mb-2 hover:transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}
