import { useLanguage } from "../../hooks/useLanguage"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="text-center text-sm text-white/50">
        {t.footer}
      </div>
    </footer>
  )
}
