import { NavLink } from "react-router-dom"
import { navigationLinks } from "../../constants/navigation"
import { useLanguage } from "../../hooks/useLanguage"

interface Props {
  mobile?: boolean
}

export default function NavLinks({ mobile = false }: Props) {
  const { t } = useLanguage()

  return (
    <>
      {navigationLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `
            transition
            ${
              mobile
                ? "block rounded-xl px-4 py-3 text-lg"
                : "text-sm font-medium"
            }
            ${
              isActive
                ? "text-blue-400"
                : "text-white/70 hover:text-white"
            }
          `
          }
        >
          {t.nav[link.key]}
        </NavLink>
      ))}
    </>
  )
}
