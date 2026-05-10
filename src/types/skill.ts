export interface Skill {
  name: string
  level: number
  category: "Frontend" | "Backend" | "Database" | "Tools"
}

export interface SkillGroup {
  title: Skill["category"]
  description: string
}