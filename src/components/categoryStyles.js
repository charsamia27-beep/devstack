// One place to map a category name to a chip color, so the grid stays
// visually consistent no matter what's in the JSON data.
const CATEGORY_STYLES = {
  Frontend: 'bg-sky-50 text-sky-700',
  Backend: 'bg-emerald-50 text-emerald-700',
  Database: 'bg-indigo-50 text-indigo-700',
  Language: 'bg-amber-50 text-amber-700',
  Styling: 'bg-cyan-50 text-cyan-700',
  DevOps: 'bg-rose-50 text-rose-700',
  Tools: 'bg-violet-50 text-violet-700',
}

export function categoryChipClass(category) {
  return CATEGORY_STYLES[category] || 'bg-slate-100 text-slate-700'
}

const BADGE_STYLES = {
  Frontend: 'bg-sky-50 text-sky-600',
  Backend: 'bg-emerald-50 text-emerald-600',
  Database: 'bg-indigo-50 text-indigo-600',
  Language: 'bg-amber-50 text-amber-600',
  Styling: 'bg-cyan-50 text-cyan-600',
  DevOps: 'bg-rose-50 text-rose-600',
  Tools: 'bg-violet-50 text-violet-600',
}

export function badgeChipClass(category) {
  return BADGE_STYLES[category] || 'bg-slate-100 text-slate-600'
}
