import Loader from './Loader'
import TechnologyCard from './TechnologyCard'

export default function TechnologyGrid({ technologies, isLoading, error, stackIds, onAdd }) {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

      <div className="mt-8">
        {isLoading && <Loader />}

        {!isLoading && error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isInStack={stackIds.has(technology.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
