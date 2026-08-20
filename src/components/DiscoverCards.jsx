import './DiscoverCards.css'

function DiscoverCards({ articles, onSelect }) {
  return (
    <section className="discover-cards">
      <h2 className="discover-title">Discover Florance</h2>

      <div className="discover-grid">
        {articles.map((article) => (
          <div
            className="discover-card"
            key={article.id}
            onClick={() => onSelect(article.id)}
          >
            <div className="discover-card-image-wrapper">
              <img
                src={article.cardImage}
                alt={article.cardTitle}
                className="discover-card-image"
              />
            </div>
            <h3 className="discover-card-title">{article.cardTitle}</h3>
            <p className="discover-card-author">{article.cardAuthor}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DiscoverCards