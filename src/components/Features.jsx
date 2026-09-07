import { features } from '../data/content.js'
import Icon from './Icon.jsx'
import useInView from '../hooks/useInView.js'

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="features" className="max-w-content mx-auto section-px py-20 sm:py-28">
      <div className="max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          Everything that slows a team down, automated
        </h2>
        <p className="mt-4 text-ink-soft dark:text-white/70 leading-relaxed">
          NOVA doesn&rsquo;t add another tool to check. It removes the coordination work your team
          currently does by hand.
        </p>
      </div>

      <div ref={ref} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`group rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/60 hover:shadow-card ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: inView ? `${i * 60}ms` : '0ms' }}
          >
            <div className="h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center transition-colors group-hover:bg-gold-100 group-hover:text-gold-600">
              <Icon name={f.icon} className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-white/65 leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
