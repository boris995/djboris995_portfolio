interface SectionHeaderProps {
  eyebrow: string
  title: string
  description: string
  center?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>

      <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-white/65">
        {description}
      </p>
    </div>
  )
}