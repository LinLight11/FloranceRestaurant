import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const { orderSent } = useCart()

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-logo">FLORANCE</div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/article" className="navbar-link">Article</Link>
        <Link to="/menu">
          <button className="navbar-button">Menu</button>
        </Link>
      </div>

      {orderSent && <div className="order-toast">Sent to Kitchen</div>}
    </nav>
  )
}

export default Navbar