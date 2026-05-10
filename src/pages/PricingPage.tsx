import { motion } from "framer-motion"

import PageContainer from "../components/layout/PageContainer"
import SectionHeader from "../components/sections/SectionHeader"
import PricingFAQ from "../components/pricing/PricingFAQ"
import PricingEstimator from "../components/pricing/PricingEstimator"
import CTASection from "../components/common/CTASection"
import PageMeta from "../components/seo/PageMeta"

import { useLanguage } from "../hooks/useLanguage"

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <PageContainer>
      <PageMeta
        title={t.pricing.metaTitle}
        description={t.pricing.metaDescription}
      />

      <section className="py-24">
        <SectionHeader
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
          center
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-blue-400 bg-blue-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
                  {t.common.popular}
                </span>
              )}

              <h2 className="text-2xl font-bold text-white">
                {plan.name}
              </h2>

              <p className="mt-4 text-white/60">
                {plan.description}
              </p>

              <div className="mt-8 text-5xl font-black text-white">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-sm text-blue-300">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400">
                {t.common.startProject}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <PricingEstimator />

      <PricingFAQ />

      <CTASection
        title={t.pricing.ctaTitle}
        description={t.pricing.ctaDescription}
      />
    </PageContainer>
  )
}
