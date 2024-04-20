import Link from 'next/link'

interface Props {
  href: string
  title: string
}

const SectionLink: React.FC<Props> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-[#81a1c1] hover:text-white hover:transition-colors duration-500"
    >
      {title}
    </Link>
  )
}

export default SectionLink
