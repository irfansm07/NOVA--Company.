import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { nav } from '../data/content.js'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Slightly raise the navbar's contrast once the page has scrolled, so it
  // reads clearly over whatever section content is currently underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/90 dark:bg-paper-dark/90 backdrop-blur border-b border-ink/10 dark:border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto section-px flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gold-500" aria-hidden="true" />
          {nav.brand}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-ink-soft dark:text-white/70">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-ink dark:hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-ink/10 dark:border-white/15 text-ink-soft dark:text-white/70 hover:text-ink dark:hover:text-white hover:border-ink/25 dark:hover:border-white/30 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="w-4 h-4" />
          </button>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 transition-transform hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            {nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-ink/10 dark:border-white/15 text-ink-soft dark:text-white/70"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md border border-ink/10 dark:border-white/15"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Icon name={open ? 'close' : 'menu'} className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-b border-ink/10 dark:border-white/10 bg-paper dark:bg-paper-dark ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="section-px py-4 flex flex-col gap-1">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-2.5 text-base text-ink-soft dark:text-white/80"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#pricing"
              onClick={handleLinkClick}
              className="block text-center rounded-full bg-indigo-600 text-white font-medium px-5 py-3"
            >
              {nav.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
