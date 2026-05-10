import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  LanguageContext,
  type Language,
} from "./languageContextValue"

const languages: Language[] = ["en", "de", "sr", "bs"]

interface Props {
  children: ReactNode
}

export default function LanguageProvider({ children }: Props) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null

    return savedLanguage && languages.includes(savedLanguage)
      ? savedLanguage
      : "en"
  })

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem("language", language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
