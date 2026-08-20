import './Reviews.css'

const reviews = [
  {
    quote: 'The Brunello pairing was flawless. Service was warm, knowledgeable, and never rushed. Florance feels like a quiet, elegant home.',
    name: 'Elena Rossi',
    role: 'Wine Collector',
  },
  {
    quote: 'The pasta is handmade perfection. Ambiance is understated yet sophisticated, perfect for a special evening in Florance.',
    name: 'Marco Bianchi',
    role: 'Sommelier',
  },
  {
    quote: 'The seasonal tasting menu was a highlight. Every bite was intentional, and the wine list is curated with real care.',
    name: 'Sofia Conti',
    role: 'Food Critic',
  },
]

function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews-title">Reviews</h2>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.name}>
            <p className="review-quote">"{review.quote}"</p>
            <div className="review-author">
              <span className="review-name">{review.name}</span>
              <span className="review-role">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews