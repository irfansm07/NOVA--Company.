import { footer } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="max-w-content mx-auto section-px py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-semibold flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-gold-500" aria-hidden="true" />
              {footer.brand}
            </p>
            <p className="mt-2 text-sm text-ink-soft dark:text-white/50">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-ink-soft dark:text-white/55 hover:text-ink dark:hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-ink/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-soft/70 dark:text-white/40">{footer.legal}</p>
          <div className="flex gap-5">
            {footer.social.map((s) => (
              <a
                key={s}
                href="#top"
                className="text-xs text-ink-soft dark:text-white/50 hover:text-ink dark:hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
