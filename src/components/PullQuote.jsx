import './PullQuote.css'

function PullQuote({ quote, author }) {
  return (
    <blockquote className="pull-quote">
      <p className="pull-quote-text">"{quote}"</p>
      <cite className="pull-quote-author">— {author}</cite>
    </blockquote>
  )
}

export default PullQuote