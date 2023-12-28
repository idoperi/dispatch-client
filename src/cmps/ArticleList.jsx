import { ArticlePreview } from "./ArticlePreview"
import notFound from "../assets/icons/not-found.svg"

export function ArticleList({ articles, onScroll }) {
  if (articles.length === 0)
    return (
      <section className="empty-data-container">
        <img src={notFound} alt="" />
        <p className="text">We couldn’t find any matches for your query</p>
      </section>
    )

  return (
    <ul className={`article-list`} onScroll={onScroll}>
      {articles.map((article) => (
        <ArticlePreview key={article.title} article={article} />
      ))}
    </ul>
  )
}
