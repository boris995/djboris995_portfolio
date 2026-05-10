import { motion } from "framer-motion"

import PageContainer from "../components/layout/PageContainer"
import HeroSwiper from "../components/home/HeroSwiper"
import HomeStats from "../components/home/HomeStats"
import SkillsSection from "../components/skills/SkillsSection"
import { projects } from "../data/projects"
import { useLanguage } from "../hooks/useLanguage"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <PageContainer>
      <section className="relative overflow-hidden py-24">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400"
          >
            {t.common.fullstackDeveloper}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black leading-tight text-white md:text-7xl"
          >
            {t.home.heroTitlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.home.heroTitleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65"
          >
            {t.home.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="/projects"
              className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400"
            >
              {t.common.viewProjects}
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              {t.common.contactMe}
            </a>
          </motion.div>
        </div>

        <div className="relative z-10">
          <HeroSwiper />
        </div>

        <HomeStats />
      </section>

      <section className="py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            {t.home.servicesEyebrow}
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            {t.home.servicesTitle}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-white/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t.home.featuredEyebrow}
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {t.home.featuredTitle}
            </h2>
          </div>

          <a
            href="/projects"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            {t.common.seeAllProjects}
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            t.projectContent[project.slug] &&
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8"
            >
              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                {t.categories[project.category]}
              </span>

              <h3 className="mt-7 text-2xl font-bold text-white">
                {t.projectContent[project.slug].title}
              </h3>

              <p className="mt-4 text-white/60">
                {t.projectContent[project.slug].description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/55"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SkillsSection />
    </PageContainer>
  )
}
