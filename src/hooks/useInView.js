import { useEffect, useRef, useState } from 'react'

// Fires once when the element first enters the viewport. Used sparingly
// (stats counter, feature grid) rather than on every section, per the
// "one deliberate moment" motion principle instead of scattering fades everywhere.
export default function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
