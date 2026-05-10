import { motion } from "framer-motion"

import SectionHeader from "../sections/SectionHeader"
import SkillCard from "./SkillCard"

import { skillGroups, skills } from "../../data/skills"
import { useLanguage } from "../../hooks/useLanguage"

export default function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24">
      <SectionHeader
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const groupSkills = skills.filter(
            (skill) => skill.category === group.title
          )

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {group.title}
                </h2>
                <p className="mt-3 text-white/55">
                  {t.skills.groups[group.title]}
                </p>
              </div>

              <div className="grid gap-4">
                {groupSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          {t.skills.currentlyImproving}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {t.skills.learning.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-5 py-3 text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
