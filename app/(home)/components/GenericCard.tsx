type CardProps = {
  title: string
  titleDesc: string
  subheading: string
  description: string
  image: string
}

export default function GenericCard({
  title,
  titleDesc,
  subheading,
  description,
  image,
}: CardProps) {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-[#eceff4] shadow transition-all hover:scale-105 hover:border-t-4 hover:border-[#5e81ac]">
      <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-[#eceff4] bg-transparent shadow-none bg-clip-border">
        <img
          src={`${image}`}
          alt=""
          className="relative inline-block h-[96px] w-[96px] object-center object-contain"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            {titleDesc}
          </p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            {subheading}
          </p>
        </div>
      </div>
      <div className="p-0 mb-6">
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
    </div>
  )
}
