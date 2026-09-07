import { trustedBy } from '../data/content.js'

export default function TrustedBy() {
  const doubled = [...trustedBy.logos, ...trustedBy.logos]
  return (
    <section aria-label="Trusted by" className="border-y border-ink/10 dark:border-white/10 py-8">
      <div className="max-w-content mx-auto section-px">
        <p className="text-xs uppercase tracking-wide text-ink-soft/70 dark:text-white/40 mb-5">
          {trustedBy.label}
        </p>
      </div>
      <div className="relative overflow-hidden no-scrollbar">
        <div className="flex w-max gap-14 animate-marquee">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl text-ink-soft/50 dark:text-white/30 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
