import { useState } from 'react'
import { finalCta } from '../data/content.js'
import Icon from './Icon.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function FinalCTA({ onOpenDemo }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section className="relative overflow-hidden bg-ink dark:bg-black text-white">
      <div className="pointer-events-none absolute inset-0 dot-grid text-white/[0.05]" />
      <div className="relative max-w-content mx-auto section-px py-20 sm:py-28 text-center">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight max-w-2xl mx-auto leading-tight">
          {finalCta.title}
        </h2>
        <p className="mt-5 text-white/65 max-w-md mx-auto">{finalCta.sub}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 text-ink font-medium px-6 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
          >
            {finalCta.primaryCta}
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 font-medium px-6 py-3.5 transition-colors hover:border-white/50"
          >
            {finalCta.secondaryCta}
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-14 max-w-sm mx-auto text-left">
          <label htmlFor="newsletter-email" className="text-xs text-white/50">
            Or get product updates by email
          </label>
          <div className="mt-2 flex gap-2">
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="you@company.com"
              aria-invalid={status === 'error'}
              aria-describedby="newsletter-message"
              className={`flex-1 rounded-full bg-white/5 border px-4 py-2.5 text-sm placeholder:text-white/35 focus:bg-white/10 transition-colors ${
                status === 'error' ? 'border-red-400/60' : 'border-white/20'
              }`}
            />
            <button
              type="submit"
              className="rounded-full bg-white text-ink text-sm font-medium px-5 py-2.5 hover:bg-white/90 transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </div>
          <p id="newsletter-message" className="mt-2 text-xs min-h-[1rem]">
            {status === 'error' && <span className="text-red-300">Enter a valid email address.</span>}
            {status === 'success' && <span className="text-sage-400">You&rsquo;re subscribed — welcome aboard.</span>}
          </p>
        </form>
      </div>
    </section>
  )
}
