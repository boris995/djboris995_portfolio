import { Link } from "react-router-dom"

import PageContainer from "../components/layout/PageContainer"
import PageMeta from "../components/seo/PageMeta"
import { useLanguage } from "../hooks/useLanguage"

export default function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <PageContainer>
      <PageMeta
        title={t.notFound.metaTitle}
        description={t.notFound.metaDescription}
      />

      <section className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-8xl font-black text-blue-400">404</p>

        <h1 className="mt-6 text-4xl font-black text-white md:text-6xl">
          {t.notFound.title}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/60">
          {t.notFound.description}
        </p>

        <Link
          to="/"
          className="mt-10 rounded-2xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400"
        >
          {t.notFound.back}
        </Link>
      </section>
    </PageContainer>
  )
}
