import { useState } from 'react'
import { testimonials } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const go = (dir) => setIndex((i) => (i + dir + count) % count)
  const current = testimonials[index]

  return (
    <section aria-label="Customer testimonials" className="max-w-content mx-auto section-px py-20 sm:py-28">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-md">
          Teams that ship, not just plan
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="h-10 w-10 rounded-full border border-ink/15 dark:border-white/20 flex items-center justify-center hover:border-ink/35 dark:hover:border-white/40 transition-colors"
            aria-label="Previous testimonial"
          >
            <Icon name="chevron" className="w-4 h-4 rotate-90" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="h-10 w-10 rounded-full border border-ink/15 dark:border-white/20 flex items-center justify-center hover:border-ink/35 dark:hover:border-white/40 transition-colors"
            aria-label="Next testimonial"
          >
            <Icon name="chevron" className="w-4 h-4 -rotate-90" />
          </button>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 sm:p-12">
        <Icon name="quote" className="w-8 h-8 text-gold-500" />
        <blockquote key={index} className="mt-5 animate-fadeUp">
          <p className="text-xl sm:text-2xl font-display leading-snug text-ink dark:text-white max-w-2xl">
            {current.quote}
          </p>
          <footer className="mt-6 text-sm text-ink-soft dark:text-white/60">
            <span className="font-medium text-ink dark:text-white">{current.name}</span> — {current.role}
          </footer>
        </blockquote>
      </div>

      <div className="mt-6 flex gap-2" role="tablist" aria-label="Choose testimonial">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-indigo-600' : 'w-4 bg-ink/15 dark:bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
