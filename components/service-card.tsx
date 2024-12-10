import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-quaternary/10 rounded-lg shadow-md overflow-hidden h-full transition-transform hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-tertiary">{description}</p>
      </div>
    </div>
  )
}

