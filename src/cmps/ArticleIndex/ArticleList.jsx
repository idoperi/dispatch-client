import { ArticlePreview } from "./ArticlePreview"
import notFound from "../../assets/icons/not-found.svg"
import {
  NoDataPlaceholder,
  Text,
} from "../../assets/style/cmps/NoDataPlaceholder.styled"

export function ArticleList({ articles, onScroll }) {
  if (articles.length === 0) {
    return (
      <NoDataPlaceholder>
        <img src={notFound} alt="" />
        <Text>No data to display</Text>
      </NoDataPlaceholder>
    )
  }

  return (
    <ul className={`article-list`} onScroll={onScroll}>
      {articles.map((article, idx) => (
        <ArticlePreview key={idx} article={article} />
      ))}
    </ul>
  )
}
