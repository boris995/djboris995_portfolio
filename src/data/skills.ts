import type { Skill, SkillGroup } from "../types/skill"

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern UI, responsive layouts and React architecture.",
  },
  {
    title: "Backend",
    description: "REST APIs, authentication, business logic and integrations.",
  },
  {
    title: "Database",
    description: "Relational database design, Sequelize models and queries.",
  },
  {
    title: "Tools",
    description: "Developer workflow, deployment, debugging and Git.",
  },
]

export const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Vite", level: 80, category: "Frontend" },

  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 85, category: "Backend" },
  { name: "JWT Auth", level: 78, category: "Backend" },
  { name: "REST API", level: 88, category: "Backend" },

  { name: "MySQL", level: 84, category: "Database" },
  { name: "Sequelize", level: 82, category: "Database" },
  { name: "Database Design", level: 76, category: "Database" },

  { name: "Git", level: 82, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },
  { name: "DBeaver", level: 80, category: "Tools" },
  { name: "Render / Netlify", level: 75, category: "Tools" },
]

export const currentlyLearning = [
  "Advanced TypeScript",
  "System Design",
  "Testing",
  "CI/CD",
]