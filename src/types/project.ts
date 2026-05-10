export type ProjectSlug =
  | "portfolio-platform"
  | "reservation-system"
  | "crypto-market-app"
  | "tournament-manager"

export type ProjectCategory = "Frontend" | "Backend" | "Fullstack"

export interface Project {
  id: number
  title: string
  slug: ProjectSlug
  description: string
  longDescription: string
  image: string
  category: ProjectCategory
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  results: string[]
  nextSteps: string[]
}
