import { FiMoon, FiSun } from "react-icons/fi"
import { motion } from "framer-motion"

import { useTheme } from "../../hooks/useTheme"
import { useLanguage } from "../../hooks/useLanguage"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const label =
    theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur transition hover:bg-white/10"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </motion.button>
  )
}
