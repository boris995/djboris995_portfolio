import { useMemo, useState } from "react"
import { useLanguage } from "../../hooks/useLanguage"

const projectTypes = [
  { label: "Landing page", value: "landing", base: 299 },
  { label: "Business website", value: "business", base: 799 },
  { label: "Fullstack app", value: "fullstack", base: 1499 },
]

export default function PricingEstimator() {
  const { t } = useLanguage()
  const [projectType, setProjectType] = useState(projectTypes[1].value)
  const [pages, setPages] = useState(5)
  const [backend, setBackend] = useState(true)
  const [adminPanel, setAdminPanel] = useState(false)

  const estimate = useMemo(() => {
    const selectedType =
      projectTypes.find((type) => type.value === projectType) || projectTypes[0]

    const pageCost = Math.max(pages - 3, 0) * 90
    const backendCost = backend ? 350 : 0
    const adminCost = adminPanel ? 450 : 0

    return selectedType.base + pageCost + backendCost + adminCost
  }, [adminPanel, backend, pages, projectType])

  return (
    <section className="pb-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t.estimator.eyebrow}
            </p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.estimator.title}
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              {t.estimator.description}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {projectTypes.map((type, index) => (
                <button
                  key={type.value}
                  onClick={() => setProjectType(type.value)}
                  className={`rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                    projectType === type.value
                      ? "bg-blue-500 text-white"
                      : "border border-white/10 bg-black/25 text-white/60 hover:text-white"
                  }`}
                >
                  {t.estimator.projectTypes[index] || type.label}
                </button>
              ))}
            </div>

            <label className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-white">
                  {t.estimator.pages}
                </span>
                <span className="text-blue-300">{pages}</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={pages}
                onChange={(event) => setPages(Number(event.target.value))}
                className="mt-5 w-full accent-blue-500"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-5 font-semibold text-white/75">
                <input
                  type="checkbox"
                  checked={backend}
                  onChange={(event) => setBackend(event.target.checked)}
                  className="h-5 w-5 accent-blue-500"
                />
                {t.estimator.backend}
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-5 font-semibold text-white/75">
                <input
                  type="checkbox"
                  checked={adminPanel}
                  onChange={(event) => setAdminPanel(event.target.checked)}
                  className="h-5 w-5 accent-blue-500"
                />
                {t.estimator.admin}
              </label>
            </div>

            <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                {t.estimator.range}
              </p>
              <div className="mt-4 text-5xl font-black text-white">
                EUR {estimate}+
              </div>
              <p className="mt-4 text-white/60">
                {t.estimator.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
