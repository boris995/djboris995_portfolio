import { useContext } from "react"

import { translations } from "../data/translations"
import { LanguageContext } from "../context/languageContextValue"

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return {
    ...context,
    t: translations[context.language],
  }
}
