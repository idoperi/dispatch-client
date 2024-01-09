import { useQuery, useQueryClient } from "react-query"
import { ArticleFilter } from "../../cmps/ArticleFilter/ArticleFilter"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { FilterHeader } from "../../cmps/FilterHeader/FilterHeader"
import { GraphsContainer } from "../../cmps/GraphsContainer/GraphsContainer"
import { HomePageSection, SeparateLine } from "./styles"
import { SideBar } from "../../cmps/SideBar/SideBar"
import { AppHeader } from "../../cmps/AppHeader/AppHeader"
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

export const HomePage = () => {
  // const navigate = useNavigate()
  // const { isLoading, isAuthenticated } = useAuth0()
  // console.log("isAuthenticated: ", isAuthenticated)
  // console.log("isLoading: ", isLoading)
  // console.log("-------------")

  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     navigate("/login")
  //   }
  // }, [isAuthenticated, isLoading])

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
