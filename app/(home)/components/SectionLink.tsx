type SectionProps = {
  active: boolean
  selectTab: () => void
  children: React.ReactNode
}

export default function SectionLink({
  active,
  selectTab,
  children,
}: SectionProps) {
  const buttonStyle = active
    ? 'text-white border-b border-[#81a1c1]'
    : 'text-[#81a1c1] hover:text-white hover:transition-colors duration-500'
  return (
    <button onClick={selectTab}>
      <p className={`${buttonStyle}`}>{children}</p>
    </button>
  )
}
