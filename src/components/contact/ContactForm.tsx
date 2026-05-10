import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
} from "react"

import type {
  ContactFormData,
  ContactFormErrors,
} from "../../types/contact"
import { useLanguage } from "../../hooks/useLanguage"

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
}

const draftStorageKey = "djboris995-contact-draft"

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<ContactFormData>(() => {
    const savedDraft = localStorage.getItem(draftStorageKey)

    if (!savedDraft) return initialFormData

    try {
      return JSON.parse(savedDraft) as ContactFormData
    } catch {
      return initialFormData
    }
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const draftSaved = Object.values(formData).some((value) => value.trim())

  useEffect(() => {
    if (!draftSaved) {
      localStorage.removeItem(draftStorageKey)
      return
    }

    localStorage.setItem(draftStorageKey, JSON.stringify(formData))
  }, [draftSaved, formData])

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  }

  const validateForm = () => {
    const nextErrors: ContactFormErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = t.contact.errors.name
    }

    if (!formData.email.trim()) {
      nextErrors.email = t.contact.errors.email
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = t.contact.errors.validEmail
    }

    if (!formData.message.trim()) {
      nextErrors.message = t.contact.errors.message
    }

    setErrors(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSuccessMessage("")

    if (!validateForm()) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSuccessMessage(t.contact.success)
      setFormData(initialFormData)
      localStorage.removeItem(draftStorageKey)
    }, 700)
  }

  const clearDraft = () => {
    setFormData(initialFormData)
    setErrors({})
    setSuccessMessage("")
    localStorage.removeItem(draftStorageKey)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder={t.contact.placeholders.name}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-300">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder={t.contact.placeholders.email}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-300">{errors.email}</p>
          )}
        </div>

        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-blue-400"
        >
          <option value="">{t.contact.placeholders.projectType}</option>
          <option value="portfolio">{t.contact.projectTypes[0]}</option>
          <option value="business">{t.contact.projectTypes[1]}</option>
          <option value="fullstack">{t.contact.projectTypes[2]}</option>
          <option value="bugfix">{t.contact.projectTypes[3]}</option>
        </select>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-blue-400"
        >
          <option value="">{t.contact.placeholders.budget}</option>
          <option value="300-700">EUR 300 - EUR 700</option>
          <option value="700-1500">EUR 700 - EUR 1500</option>
          <option value="1500+">EUR 1500+</option>
        </select>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            placeholder={t.contact.placeholders.message}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-blue-400"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-300">{errors.message}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? t.contact.sending : t.contact.send}
        </button>

        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {draftSaved ? t.contact.draftSaved : t.contact.draftEmpty}
          </span>

          <button
            type="button"
            onClick={clearDraft}
            className="font-semibold text-blue-300 transition hover:text-blue-200"
          >
            {t.contact.clearDraft}
          </button>
        </div>

        {successMessage && (
          <p className="rounded-2xl border border-green-400/20 bg-green-500/10 px-5 py-4 text-green-300">
            {successMessage}
          </p>
        )}
      </div>
    </form>
  )
}
