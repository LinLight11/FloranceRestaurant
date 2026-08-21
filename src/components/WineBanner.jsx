import { Link } from 'react-router-dom'
import './WineBanner.css'

function WineBanner() {
  return (
    <section className="wine-banner">
      <img
        src="./img/winebanner.png"
        alt="Wine cellar"
        className="wine-banner-image"
      />
      <div className="wine-banner-overlay">
        <div className="wine-banner-content">
          <h2 className="wine-banner-title">Finest Wine Selection</h2>
          <Link to="/menu" className="wine-banner-button">
            Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WineBanner