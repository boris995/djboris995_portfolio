import { useMemo, useState } from "react"

import PageContainer from "../components/layout/PageContainer"
import SectionHeader from "../components/sections/SectionHeader"
import ProjectCard from "../components/projects/ProjectCard"
import ProjectFilters from "../components/projects/ProjectFilters"

import { projectCategories, projects } from "../data/projects"
import { useLanguage } from "../hooks/useLanguage"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [featuredOnly, setFeaturedOnly] = useState(false)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        t.projectContent[project.slug].title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        t.projectContent[project.slug].description
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        )

      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory

      const matchesFeatured = !featuredOnly || project.featured

      return matchesSearch && matchesCategory && matchesFeatured
    })
  }, [featuredOnly, search, selectedCategory, t.projectContent])

  return (
    <PageContainer>
      <section className="py-24">
        <SectionHeader
          eyebrow={t.projectsPage.eyebrow}
          title={t.projectsPage.title}
          description={t.projectsPage.description}
        />

        <ProjectFilters
          search={search}
          selectedCategory={selectedCategory}
          categories={projectCategories}
          featuredOnly={featuredOnly}
          resultCount={filteredProjects.length}
          onSearchChange={setSearch}
          onCategoryChange={setSelectedCategory}
          onFeaturedOnlyChange={setFeaturedOnly}
          labels={{
            searchPlaceholder: t.projectsPage.searchPlaceholder,
            featuredOnly: t.projectsPage.featuredOnly,
            showing: t.projectsPage.showing,
            projectSingular: t.projectsPage.projectSingular,
            projectPlural: t.projectsPage.projectPlural,
            categories: t.categories,
          }}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              {t.projectsPage.emptyTitle}
            </h2>
            <p className="mt-3 text-white/60">
              {t.projectsPage.emptyDescription}
            </p>
          </div>
        )}
      </section>
    </PageContainer>
  )
}
