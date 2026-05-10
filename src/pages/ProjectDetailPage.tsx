import { Link, useParams } from "react-router-dom"
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi"

import PageContainer from "../components/layout/PageContainer"
import PageMeta from "../components/seo/PageMeta"
import { projects } from "../data/projects"
import { useLanguage } from "../hooks/useLanguage"

export default function ProjectDetailPage() {
  const { t } = useLanguage()
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const content = project ? t.projectContent[project.slug] : null

  if (!project || !content) {
    return (
      <PageContainer>
        <PageMeta
          title={t.projectsPage.notFoundMetaTitle}
          description={t.projectsPage.notFoundMetaDescription}
        />

        <section className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            {t.projectsPage.notFoundEyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            {t.projectsPage.notFoundTitle}
          </h1>
          <p className="mt-5 max-w-xl text-white/60">
            {t.projectsPage.notFoundDescription}
          </p>
          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400"
          >
            <FiArrowLeft />
            {t.common.backToProjects}
          </Link>
        </section>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageMeta
        title={content.title}
        description={content.description}
      />

      <section className="py-24">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 transition hover:text-blue-200"
        >
          <FiArrowLeft />
          {t.common.projects}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              {t.categories[project.category]}
            </span>

            <h1 className="mt-7 text-5xl font-black tracking-tight text-white md:text-7xl">
              {content.title}
            </h1>

            <p className="mt-7 text-xl leading-9 text-white/65">
              {content.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <FiGithub />
                {t.common.viewCode}
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400"
              >
                <FiExternalLink />
                {t.common.livePreview}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-white/[0.03] p-8">
            <div className="flex min-h-[340px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/30 text-8xl font-black text-white/10">
              {content.title.slice(0, 2).toUpperCase()}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t.projectsPage.results}
            </p>

            <div className="mt-7 grid gap-4">
              {content.results.map((result) => (
                <div
                  key={result}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5 text-white/70"
                >
                  {result}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              {t.projectsPage.nextSteps}
            </p>

            <div className="mt-7 grid gap-4">
              {content.nextSteps.map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
