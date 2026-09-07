import { useEffect, useState } from 'react'
import { stats } from '../data/content.js'
import useInView from '../hooks/useInView.js'

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    let frame

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function StatItem({ stat, active }) {
  const value = useCountUp(stat.value, active)
  const display =
    stat.format === 'compact'
      ? Math.round(value).toLocaleString('en-US')
      : Number.isInteger(stat.value)
      ? Math.round(value)
      : value.toFixed(1)

  return (
    <div>
      <p className="font-display text-4xl sm:text-5xl text-white">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-indigo-100/70 max-w-[16ch]">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section className="bg-indigo-700">
      <div ref={ref} className="max-w-content mx-auto section-px py-16 sm:py-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} active={inView} />
        ))}
      </div>
    </section>
  )
}
