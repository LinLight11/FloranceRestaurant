import { useState, useRef } from 'react'
import articles from '../data/article'
import ArticleHero from '../components/ArticleHero'
import PullQuote from '../components/PullQuote'
import ArticleBody from '../components/ArticleBody'
import DiscoverCards from '../components/DiscoverCards'

function ArticlePage() {
  const [featuredId, setFeaturedId] = useState(articles[0].id)
  const quoteRef = useRef(null)

  const featuredArticle = articles.find((article) => article.id === featuredId)
  const otherArticles = articles.filter((article) => article.id !== featuredId)

  function handleSelect(id) {
    setFeaturedId(id)
    quoteRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page-container">
      <ArticleHero />
      <div ref={quoteRef}>
        <PullQuote quote={featuredArticle.quote} author={featuredArticle.author} />
      </div>
      <ArticleBody article={featuredArticle} />
      <DiscoverCards
        articles={otherArticles}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default ArticlePage