import './MenuHero.css'

function MenuHero() {
  return (
    <section className="menu-hero">
      <img src="./img/Wine Cellar Break.jpg" alt="Wine cellar" className="menu-hero-image" />
      <div className="menu-hero-overlay">
        <h1 className="menu-hero-title">A Taste of Tuscany</h1>
        <p className="menu-hero-subtext">
          Experience the warmth of Florence in every culinary detail. Handcrafted
          pasta, organic estate wines, and old-world hospitality in a refined
          bistro setting.
        </p>
      </div>
    </section>
  )
}

export default MenuHero