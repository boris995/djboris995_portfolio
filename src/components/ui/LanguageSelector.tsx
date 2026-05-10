import { languageOptions } from "../../data/translations"
import { useLanguage } from "../../hooks/useLanguage"

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <label className="flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
      <span className="sr-only">{t.common.language}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as typeof language)}
        className="bg-transparent text-white outline-none"
        aria-label={t.common.language}
      >
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
