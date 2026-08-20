import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">FLORANCE</div>
          <p className="footer-tagline-small">Created by Merakii Co.</p>
          <p className="footer-email">hello@florance.com</p>
        </div>

        <div className="footer-tagline">
          Where tradition meets elegance.
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
  <a href="#" className="footer-social-link" aria-label="Facebook">
    <img src="./img/facebook.png" alt="Facebook" />
  </a>
  <a href="https://www.instagram.com/merakii__co" className="footer-social-link" aria-label="Instagram">
    <img src="./img/instagram.png" alt="Instagram" />
  </a>
  <a href="https://www.linkedin.com/company/merakiico" className="footer-social-link" aria-label="Linkedin">
    <img src="./img/linkedin.png" alt="Linkedin" />
  </a>
</div>
      </div>
    </footer>
  )
}

export default Footer