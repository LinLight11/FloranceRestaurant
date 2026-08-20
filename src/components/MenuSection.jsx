import { useState, useRef, useEffect } from 'react'
import './MenuSection.css'

function MenuSection({ title, items, onSelectItem }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const cardWidth = container.firstChild.offsetWidth + 20
    const visibleCards = Math.floor(container.offsetWidth / cardWidth)
    const scrollableSteps = items.length - visibleCards

    setMaxIndex(Math.max(scrollableSteps, 0))
  }, [items])

  function handleScroll() {
    const container = scrollRef.current
    if (!container) return

    const cardWidth = container.firstChild.offsetWidth + 20
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, maxIndex))
  }

  function scrollToIndex(index) {
    const container = scrollRef.current
    const cardWidth = container.firstChild.offsetWidth + 20
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }

  const dotsArray = Array.from({ length: maxIndex + 1 })

  return (
    <section className="menu-section">
      <h2 className="menu-section-title">{title}</h2>

      <div className="menu-scroll-row" ref={scrollRef} onScroll={handleScroll}>
        {items.map((item) => (
          <div
            className="menu-item-card"
            key={item.id}
            onClick={() => onSelectItem(item)}
          >
            <div className="menu-item-image-wrapper">
              <img src={item.image} alt={item.name} className="menu-item-image" />
            </div>
            <div className="menu-item-info">
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">${item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {maxIndex > 0 && (
        <div className="menu-scroll-dots">
          {dotsArray.map((_, index) => (
            <span
              key={index}
              className={`menu-scroll-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSection