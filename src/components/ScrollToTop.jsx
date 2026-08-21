import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return null
}

export default ScrollToTop