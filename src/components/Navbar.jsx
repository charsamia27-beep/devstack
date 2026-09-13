import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Brand: left on desktop, centered on mobile */}
        <a href="#home" className="flex items-center gap-2 md:mr-auto">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
            DS
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Dev <span className="text-brand-gradient">Stack</span>
          </span>
        </a>

        {/* Center nav links — desktop only */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? 'text-pink-600' : 'transition hover:text-ink'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth actions */}
        <div className="flex items-center gap-3 md:ml-auto">
          <button type="button" className="hidden text-sm font-medium text-slate-700 hover:text-ink sm:block">
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-5 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
