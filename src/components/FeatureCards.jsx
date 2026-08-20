import './FeatureCards.css'

const features = [
  {
    title: 'Wine',
    description: 'Handpicked wines selected with intention.',
    image: '/img/wine.jpg',
  },
  {
    title: 'Cuisine',
    description: 'Refined flavors inspired by Florentine culinary tradition.',
    image: '/img/fork.jpg',
  },
  {
    title: 'Experience',
    description: 'A space where every detail creates a moment together.',
    image: '/img/menu.jpg',
  },
]

function FeatureCards() {
  return (
    <section className="feature-cards">
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>
          <img
            src={feature.image}
            alt={feature.title}
            className="feature-card-image"
          />
          <h3 className="feature-card-title">{feature.title}</h3>
          <p className="feature-card-description">{feature.description}</p>
        </div>
      ))}
    </section>
  )
}

export default FeatureCards