import { howItWorks } from '../data/content.js'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-content mx-auto section-px py-20 sm:py-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
          {howItWorks.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">{howItWorks.title}</h2>
      </div>

      <ol className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
        {howItWorks.steps.map((step, i) => (
          <li key={step.title} className="relative pl-0">
            <div className="flex items-center gap-4 md:block">
              <span className="font-display text-4xl text-indigo-600/25 dark:text-indigo-300/25">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="hidden md:block h-px flex-1 bg-ink/10 dark:bg-white/10 mt-3" />
            </div>
            <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-white/65 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
