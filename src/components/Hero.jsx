import { hero } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Hero({ onOpenDemo }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 dot-grid text-ink/[0.06] dark:text-white/[0.06]" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-gold-300/25 blur-3xl" />

      <div className="max-w-content mx-auto section-px pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-2xl animate-fadeUp">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/40 rounded-full px-3 py-1">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-ink dark:text-white">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-ink-soft dark:text-white/70 leading-relaxed max-w-xl">
            {hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white font-medium px-6 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20"
            >
              {hero.primaryCta}
              <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-white/20 font-medium px-6 py-3.5 transition-colors hover:border-ink/30 dark:hover:border-white/40"
            >
              <Icon name="play" className="w-4 h-4 text-gold-600 dark:text-gold-300" />
              {hero.secondaryCta}
            </button>
          </div>
          <p className="mt-4 text-sm text-ink-soft/80 dark:text-white/50">{hero.note}</p>
        </div>

        <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-2xl border-t border-ink/10 dark:border-white/10 pt-8">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl text-ink dark:text-white">{s.value}</dd>
              <dd className="mt-1 text-sm text-ink-soft dark:text-white/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
