import { useState } from 'react'
import { faq } from '../data/content.js'
import Icon from './Icon.jsx'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i))

  return (
    <section id="faq" className="max-w-content mx-auto section-px py-20 sm:py-28">
      <div className="max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Questions, answered</h2>
        <p className="mt-4 text-ink-soft dark:text-white/70">
          Can&rsquo;t find what you&rsquo;re looking for? Reach us at{' '}
          <a href="mailto:hello@nova.app" className="underline underline-offset-2 hover:text-indigo-600 dark:hover:text-indigo-300">
            hello@nova.app
          </a>
          .
        </p>
      </div>

      <div className="mt-10 max-w-3xl divide-y divide-ink/10 dark:divide-white/10 border-y border-ink/10 dark:border-white/10">
        {faq.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-header-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <Icon
                    name="chevron"
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-header-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm text-ink-soft dark:text-white/65 leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
