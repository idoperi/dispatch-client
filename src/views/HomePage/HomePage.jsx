import { ArticleFilter } from "../../cmps/ArticleFilter/ArticleFilter"
import { ArticleIndex } from "../../cmps/ArticleIndex"
import { SeparateLine } from "./styles"

export function HomePage() {
  return (
    <div className="home-page">
      <ArticleFilter />

      <SeparateLine />

      <ArticleIndex />
    </div>
  )
}
