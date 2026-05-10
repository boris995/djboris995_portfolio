import type { ReactNode } from "react"

interface ContactInfoCardProps {
  label: string
  value: string
  icon: ReactNode
}

export default function ContactInfoCard({
  label,
  value,
  icon,
}: ContactInfoCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-xl text-blue-300">
        {icon}
      </div>

      <p className="text-sm uppercase tracking-[0.25em] text-white/35">
        {label}
      </p>

      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </div>
  )
}