import { motion } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"

export default function ExperienceTimeline() {
  const { t } = useLanguage()

  return (
    <section className="py-24">
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          {t.timeline.eyebrow}
        </p>

        <h2 className="text-4xl font-black text-white md:text-5xl">
          {t.timeline.title}
        </h2>
      </div>

      <div className="relative border-l border-white/10 pl-8">
        {t.timeline.items.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="relative mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <div className="absolute -left-[45px] top-8 h-5 w-5 rounded-full border-4 border-[#050505] bg-blue-500" />

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              {item.year}
            </span>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-white/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
