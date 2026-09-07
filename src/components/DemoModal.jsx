import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'

export default function DemoModal({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg rounded-2xl bg-paper dark:bg-paper-dark border border-ink/10 dark:border-white/10 p-7 sm:p-8 shadow-2xl animate-fadeUp">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close demo dialog"
          className="absolute top-4 right-4 p-2 rounded-full text-ink-soft hover:text-ink dark:text-white/60 dark:hover:text-white hover:bg-ink/5 dark:hover:bg-white/10 transition-colors"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>

        <div className="h-11 w-11 rounded-full bg-gold-100 dark:bg-gold-500/15 text-gold-600 dark:text-gold-300 flex items-center justify-center">
          <Icon name="play" className="w-4 h-4" />
        </div>
        <h2 id="demo-modal-title" className="mt-4 text-2xl font-medium font-display">
          See NOVA in two minutes
        </h2>
        <p className="mt-2 text-sm text-ink-soft dark:text-white/65 leading-relaxed">
          This is a placeholder for a product walkthrough video or an embedded scheduling widget (e.g.
          Calendly). Wire this panel up to your real demo asset before launch.
        </p>

        <div className="mt-5 aspect-video w-full rounded-xl bg-ink/5 dark:bg-white/5 border border-ink/10 dark:border-white/10 flex items-center justify-center">
          <Icon name="play" className="w-10 h-10 text-ink-soft/40 dark:text-white/25" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-indigo-600 text-white font-medium py-3 hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}
