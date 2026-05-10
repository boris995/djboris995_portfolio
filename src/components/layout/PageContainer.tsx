import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      {children}
    </div>
  )
}