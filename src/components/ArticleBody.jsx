import './ArticleBody.css'

function ArticleBody({ article }) {
  return (
    <div className="article-body">
      <div className="article-body-text">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="article-body-image-wrapper">
        <img
          src={article.bodyImage}
          alt=""
          className="article-body-image"
        />
      </div>
    </div>
  )
}

export default ArticleBody