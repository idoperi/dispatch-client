import { useQuery, useQueryClient } from "react-query"
import { ArticleFilter } from "../../cmps/ArticleFilter/ArticleFilter"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { FilterHeader } from "../../cmps/FilterHeader/FilterHeader"
import { GraphsContainer } from "../../cmps/GraphsContainer/GraphsContainer"
import { HomePageSection, SeparateLine } from "./styles"
import { SideBar } from "../../cmps/SideBar/SideBar"
import { AppHeader } from "../../cmps/AppHeader/AppHeader"

export function HomePage() {
  return (
    <>
      <AppHeader />
      <HomePageSection>
        <FilterHeader />

        <SideBar />

        <ArticleFilter />

        <SeparateLine />

        <ArticleIndex />
      </HomePageSection>
    </>
  )
}
