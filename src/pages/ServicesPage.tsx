import { motion } from "framer-motion"
import PageContainer from "../components/layout/PageContainer"
import SectionHeader from "../components/sections/SectionHeader"
import WorkProcess from "../components/services/WorkProcess"
import { useLanguage } from "../hooks/useLanguage"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <PageContainer>
      <section className="py-24">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black">
                {index + 1}
              </div>

              <h2 className="text-2xl font-bold text-white">
                {service.title}
              </h2>

              <p className="mt-4 text-white/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <WorkProcess />
    </PageContainer>
  )
}
