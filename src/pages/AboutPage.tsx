import { motion } from "framer-motion"

import PageContainer from "../components/layout/PageContainer"
import SectionHeader from "../components/sections/SectionHeader"
import SkillsSection from "../components/skills/SkillsSection"
import ExperienceTimeline from "../components/about/ExperienceTimeline"
import CTASection from "../components/common/CTASection"
import PageMeta from "../components/seo/PageMeta"
import { useLanguage } from "../hooks/useLanguage"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <PageContainer>
      <PageMeta
        title={t.about.metaTitle}
        description={t.about.metaDescription}
      />

      <section className="py-24">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {t.about.cards.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h2 className="text-2xl font-bold text-white">{item}</h2>
              <p className="mt-4 text-white/60">
                {t.about.cardDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <ExperienceTimeline />
      <SkillsSection />
      <CTASection />
    </PageContainer>
  )
}
