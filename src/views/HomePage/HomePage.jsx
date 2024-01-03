import { useQuery, useQueryClient } from "react-query"
import { ArticleFilter } from "../../cmps/ArticleFilter/ArticleFilter"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { FilterHeader } from "../../cmps/FilterHeader/FilterHeader"
import { GraphsContainer } from "../../cmps/GraphsContainer/GraphsContainer"
import { SideFilter } from "../../cmps/SideFilter/SideFilter"
import { HomePageSection, SeparateLine } from "./styles"

export function HomePage() {
  return (
    <HomePageSection>
      <FilterHeader />

      <SideFilter />

      <ArticleFilter />

      <SeparateLine />

      <ArticleIndex />
    </HomePageSection>
  )
}
