import { product } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Product() {
  return (
    <section id="product" className="bg-indigo-900 text-white">
      <div className="max-w-content mx-auto section-px py-20 sm:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-medium text-gold-300 uppercase tracking-wide">{product.eyebrow}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
            {product.title}
          </h2>
          <p className="mt-5 text-indigo-100/80 leading-relaxed max-w-lg">{product.description}</p>
          <ul className="mt-7 space-y-3.5">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-indigo-50/90">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center">
                  <Icon name="check" className="w-3 h-3" strokeWidth={2.4} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Abstract product mock: a workspace panel built purely in CSS/SVG,
            avoiding stock imagery while still showing the product in context. */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-gold-500/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 sm:p-6 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-xs text-white/40">Q3 Launch — Board</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['To do', 'In progress', 'Review'].map((col, ci) => (
                <div key={col} className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
                  <p className="text-[11px] text-white/45 mb-2">{col}</p>
                  <div className="space-y-2">
                    {Array.from({ length: ci === 1 ? 3 : 2 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-2 py-1.5"
                      >
                        <div className="h-1.5 w-3/4 rounded-full bg-gold-300/50 mb-1.5" />
                        <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-gold-500/10 border border-gold-500/20 px-3 py-2.5">
              <span className="text-xs text-gold-200">NOVA rebalanced 4 tasks based on workload</span>
              <Icon name="sparkles" className="w-4 h-4 text-gold-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
