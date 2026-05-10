import { FiExternalLink, FiGithub } from "react-icons/fi"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import type { Project } from "../../types/project"
import { useLanguage } from "../../hooks/useLanguage"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage()
  const content = t.projectContent[project.slug]

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-2 hover:bg-white/[0.06]"
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white/10">
          {project.title.slice(0, 2).toUpperCase()}
        </div>

        {project.featured && (
          <span className="absolute left-5 top-5 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
            {t.common.featured}
          </span>
        )}
      </div>

      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          {t.categories[project.category]}
        </p>

        <h2 className="mt-4 text-2xl font-bold text-white">
          {content.title}
        </h2>

        <p className="mt-4 text-white/60">{content.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-blue-100"
          >
            {t.common.caseStudy}
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <FiGithub />
            {t.common.code}
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            <FiExternalLink />
            {t.common.live}
          </a>
        </div>
      </div>
    </motion.article>
  )
}
