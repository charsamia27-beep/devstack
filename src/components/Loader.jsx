export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />
      <p className="text-sm font-medium">Loading technologies…</p>
    </div>
  )
}
