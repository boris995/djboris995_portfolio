import type { ReactNode } from "react"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}