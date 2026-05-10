import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

import ThemeToggle from "../ui/ThemeToggle"
import LanguageSelector from "../ui/LanguageSelector"
import NavLinks from "../navigation/NavLinks"
import PageContainer from "./PageContainer"

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <PageContainer>
        <div className="flex h-20 items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              DJBoris995
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-2xl text-white md:hidden"
            >
              {mobileMenu ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </PageContainer>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-white/10 bg-[#0b0b0b] md:hidden"
          >
            <PageContainer>
              <div className="flex flex-col gap-2 py-6">
                <NavLinks mobile />
              </div>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
