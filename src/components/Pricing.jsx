import { useState } from 'react'
import { pricing } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="max-w-content mx-auto section-px py-20 sm:py-28">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
          {pricing.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">{pricing.title}</h2>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <span className={`flex-shrink-0 text-sm ${!annual ? 'text-ink dark:text-white' : 'text-ink-soft dark:text-white/50'}`}>
          {pricing.toggle.monthly}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual pricing"
          onClick={() => setAnnual((v) => !v)}
          className="flex-shrink-0 inline-flex items-center h-7 w-12 rounded-full bg-indigo-600 transition-colors p-1"
        >
          <span
            className={`h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
              annual ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`flex-shrink-0 text-sm ${annual ? 'text-ink dark:text-white' : 'text-ink-soft dark:text-white/50'}`}>
          {pricing.toggle.annual}
        </span>
        <span className="text-xs font-medium text-sage-600 dark:text-sage-400 bg-sage-100 dark:bg-sage-500/10 rounded-full px-2.5 py-1">
          {pricing.toggle.discount}
        </span>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
        {pricing.plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly
          return (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/25 md:-translate-y-2'
                  : 'bg-white dark:bg-white/[0.03] border border-ink/10 dark:border-white/10'
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block text-xs font-medium text-gold-300 bg-white/10 rounded-full px-3 py-1 mb-4">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-medium ${plan.highlighted ? 'text-white' : ''}`}>{plan.name}</h3>
              <p className={`mt-1.5 text-sm ${plan.highlighted ? 'text-indigo-100/80' : 'text-ink-soft dark:text-white/60'}`}>
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl">${price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-indigo-100/70' : 'text-ink-soft dark:text-white/50'}`}>
                  /mo per member
                </span>
              </p>
              <a
                href="#faq"
                className={`mt-6 block text-center rounded-full font-medium px-5 py-3 transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {plan.cta}
              </a>
              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="check"
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-gold-300' : 'text-sage-500'}`}
                      strokeWidth={2.2}
                    />
                    <span className={plan.highlighted ? 'text-indigo-50/90' : 'text-ink-soft dark:text-white/70'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
