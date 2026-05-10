import { motion } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"

export default function HomeStats() {
  const { t } = useLanguage()

  return (
    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {t.home.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.12 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
        >
          <div className="text-4xl font-black text-white">
            {stat.value}
          </div>
          <p className="mt-3 text-white/55">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
