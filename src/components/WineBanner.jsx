import './WineBanner.css'

function WineBanner() {
  return (
    <section className="wine-banner">
      <img
        src={`${import.meta.env.BASE_URL}img/winebanner.png`}
        alt="Wine cellar"
        className="wine-banner-image"
      />
      <div className="wine-banner-overlay">
        <div className="wine-banner-content">
          <h2 className="wine-banner-title">Finest Wine Selection</h2>
          <button className="wine-banner-button">Menu</button>
        </div>
      </div>
    </section>
  )
}

export default WineBanner