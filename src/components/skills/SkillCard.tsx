import { motion } from "framer-motion"
import type { Skill } from "../../types/skill"

interface SkillCardProps {
  skill: Skill
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="rounded-2xl border border-white/10 bg-black/25 p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-white">{skill.name}</h3>
        <span className="text-sm text-blue-300">{skill.level}%</span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.04 }}
          className="h-full rounded-full bg-blue-500"
        />
      </div>
    </motion.div>
  )
}