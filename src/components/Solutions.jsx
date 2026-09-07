import { solutions } from '../data/content.js'

export default function Solutions() {
  return (
    <section id="solutions" className="max-w-content mx-auto section-px py-20 sm:py-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
          {solutions.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">{solutions.title}</h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ink/10 dark:bg-white/10 rounded-2xl overflow-hidden border border-ink/10 dark:border-white/10">
        {solutions.items.map((item) => (
          <div
            key={item.title}
            className="bg-paper dark:bg-paper-dark p-8 transition-colors hover:bg-sage-100/40 dark:hover:bg-white/[0.03]"
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-white/65 leading-relaxed max-w-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
