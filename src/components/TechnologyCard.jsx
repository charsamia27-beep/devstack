import { badgeChipClass, categoryChipClass } from './categoryStyles'

export default function TechnologyCard({ technology, isInStack, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = technology

  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <img src={icon} alt="" className="h-9 w-9" loading="lazy" />
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeChipClass(category)}`}>
          {badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-ink">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className={`rounded-full px-3 py-1 font-medium ${categoryChipClass(category)}`}>
          {category}
        </span>
        <span className="text-slate-400">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-ink">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#F5A623">
            <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-.8L10 1.5z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isInStack}
        onClick={() => onAdd(technology)}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
          isInStack
            ? 'cursor-not-allowed bg-slate-100 text-slate-400'
            : 'bg-ink text-white hover:opacity-90'
        }`}
      >
        {isInStack ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
