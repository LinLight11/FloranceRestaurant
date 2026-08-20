import './ArticleHero.css'

function ArticleHero() {
  return (
    <section className="article-hero">
      <h1 className="article-hero-title">A Guide to the Perfect Pairing</h1>
      <p className="article-hero-subtext">
        Discover how the right wine can transform a dish, balancing flavors and
        creating a more memorable dining experience.
      </p>

      <div className="article-hero-image-wrapper">
        <img
          src="/img/article-heroimg.png"
          alt="Florance article"
          className="article-hero-image article-hero-image-default"
        />
        <img
          src="/img/logoo.jpg"
          alt="Florance logo"
          className="article-hero-image article-hero-image-logo"
        />
      </div>
    </section>
  )
}

export default ArticleHero