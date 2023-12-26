import { ArticleFilter } from "../../cmps/ArticleFilter/ArticleFilter"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { GraphsContainer } from "../../cmps/GraphsContainer/GraphsContainer"
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
