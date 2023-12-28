import { ArticleFilter } from "../../cmps/ArticleFilter/ArticleFilter"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { GraphsContainer } from "../../cmps/GraphsContainer/GraphsContainer"
import { HomePageSection, SeparateLine } from "./styles"

export function HomePage() {
  return (
    <HomePageSection>
      <ArticleFilter />

      <SeparateLine />

      <ArticleIndex />
    </HomePageSection>
  )
}
