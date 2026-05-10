import { useLanguage } from "../../hooks/useLanguage"

export default function PricingFAQ() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          {t.faq.eyebrow}
        </p>

        <h2 className="text-4xl font-black text-white md:text-5xl">
          {t.faq.title}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {t.faq.items.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >
            <h3 className="text-xl font-bold text-white">{faq.question}</h3>
            <p className="mt-4 text-white/60">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
