import './WineBanner.css'
import { useNavigate } from "react-router-dom";

function WineBanner() {
  const navigate = useNavigate();
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
          <button className="wine-banner-button" onClick={() => {
    navigate("/menu");
    window.scrollTo(0, 0);
  }}>Menu

          </button>
        </div>
      </div>
    </section>
  )
}

export default WineBanner