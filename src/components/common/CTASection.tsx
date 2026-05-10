import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { useLanguage } from "../../hooks/useLanguage"

interface CTASectionProps {
  title?: string
  description?: string
}

export default function CTASection({
  title,
  description,
}: CTASectionProps) {
  const { t } = useLanguage()
  const sectionTitle = title || t.cta.title
  const sectionDescription = description || t.cta.description

  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-10 text-center md:p-16"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            {sectionTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            {sectionDescription}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400"
            >
              {t.common.startAProject}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
