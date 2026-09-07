// Small hand-picked icon set as inline SVG paths. Keeping this dependency-free
// avoids pulling in an icon library for ~15 glyphs and keeps bundle size down.
const paths = {
  route: 'M4 4a3 3 0 100 6 3 3 0 000-6zM4 10v4a3 3 0 003 3h6M20 20a3 3 0 100-6 3 3 0 000 6zM13 17h4a3 3 0 003-3v-4',
  sparkles: 'M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z',
  mic: 'M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3zM19 11a7 7 0 01-14 0M12 18v3',
  scale: 'M12 3v18M7 7l-4 8a4 4 0 008 0l-4-8zM17 7l-4 8a4 4 0 008 0l-4-8zM5 7h14',
  link: 'M9 15l6-6M8 12l-3 3a3.5 3.5 0 005 5l3-3M16 12l3-3a3.5 3.5 0 00-5-5l-3 3',
  chart: 'M4 20V10M12 20V4M20 20v-7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  sun: 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z',
  moon: 'M20 14.5A8.5 8.5 0 119.5 4a7 7 0 1010.5 10.5z',
  chevron: 'M6 9l6 6 6-6',
  quote: 'M7 8a3 3 0 00-3 3v2a3 3 0 003 3h1v3l4-3-1-5H7a1 1 0 01-1-1v-2a1 1 0 011-1h4V8H7zm10 0a3 3 0 00-3 3v2a3 3 0 003 3h1v3l4-3-1-5h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4V8h-4z',
  check: 'M5 13l4 4L19 7',
  arrowUp: 'M12 19V5M6 11l6-6 6 6',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  play: 'M8 5v14l11-7-11-7z',
}

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.8 }) {
  const d = paths[name]
  if (!d) return null
  const isFilled = name === 'play' || name === 'quote'
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
