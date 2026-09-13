export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-ink">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      <div className="mt-4">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
              >
                <img src={item.icon} alt="" className="h-7 w-7 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${item.name} from your stack`}
                  onClick={() => onRemove(item.id)}
                  className="rounded-full p-1 text-slate-300 transition hover:bg-slate-50 hover:text-slate-500"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-red-100 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}
