import { ArticlePreview } from "./ArticlePreview"

export function ArticleList({ articles }) {
  return (
    <ul className={`article-list`}>
      {articles.map((article) => (
        <ArticlePreview key={article.title} article={article} />
      ))}
    </ul>
  )
}
