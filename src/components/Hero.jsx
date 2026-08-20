import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-heading">Where Tradition Meets Elegance</h1>
      <p className="hero-subtext">
        Rooted in tradition, guided by a modern perspective. Florance celebrates
        the craft behind every bottle, where patience, precision, and passion
        come together.
      </p>

      <div className="hero-image-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}img/image.png`}
          alt="Florance wine boxes"
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default Hero