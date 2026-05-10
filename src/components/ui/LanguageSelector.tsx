import { useEffect, useRef, useState } from "react"
import { FiChevronDown } from "react-icons/fi"

import { languageOptions } from "../../data/translations"
import { useLanguage } from "../../hooks/useLanguage"

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const activeLanguage =
    languageOptions.find((option) => option.code === language) ||
    languageOptions[0]

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
        aria-label={t.common.language}
        aria-expanded={open}
      >
        <img
          src={activeLanguage.flag}
          alt=""
          className="h-5 w-7 rounded-sm object-cover shadow-sm"
        />
        <span>{activeLanguage.label}</span>
        <FiChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-[70] w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl shadow-black/30">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                setLanguage(option.code)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                option.code === language
                  ? "bg-blue-500 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <img
                src={option.flag}
                alt=""
                className="h-5 w-7 rounded-sm object-cover shadow-sm"
              />
              <span>{option.name}</span>
              <span className="ml-auto text-xs text-white/45">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
