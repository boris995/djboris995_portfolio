interface ProjectFiltersProps {
  search: string
  selectedCategory: string
  categories: string[]
  featuredOnly: boolean
  resultCount: number
  onSearchChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onFeaturedOnlyChange: (value: boolean) => void
  labels: {
    searchPlaceholder: string
    featuredOnly: string
    showing: string
    projectSingular: string
    projectPlural: string
    categories: Record<string, string>
  }
}

export default function ProjectFilters({
  search,
  selectedCategory,
  categories,
  featuredOnly,
  resultCount,
  onSearchChange,
  onCategoryChange,
  onFeaturedOnlyChange,
  labels,
}: ProjectFiltersProps) {
  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={labels.searchPlaceholder}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-blue-400 md:max-w-sm"
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "border border-white/10 bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              {labels.categories[category] || category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-sm font-semibold text-white/70">
          <input
            type="checkbox"
            checked={featuredOnly}
            onChange={(event) => onFeaturedOnlyChange(event.target.checked)}
            className="h-5 w-5 accent-blue-500"
          />
          {labels.featuredOnly}
        </label>

        <p className="text-sm font-semibold text-white/45">
          {labels.showing} {resultCount}{" "}
          {resultCount === 1
            ? labels.projectSingular
            : labels.projectPlural}
        </p>
      </div>
    </div>
  )
}
