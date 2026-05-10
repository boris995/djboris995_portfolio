import { motion } from "framer-motion"

import { useLanguage } from "../../hooks/useLanguage"

export default function WorkProcess() {
  const { t } = useLanguage()

  return (
    <section className="pb-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          {t.services.processEyebrow}
        </p>

        <h2 className="text-4xl font-black text-white md:text-5xl">
          {t.services.processTitle}
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {t.services.process.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <span className="text-4xl font-black text-blue-400">
              {item.step}
            </span>

            <h3 className="mt-8 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-white/60">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
