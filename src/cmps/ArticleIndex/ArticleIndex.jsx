import { useEffect, useState, useRef } from "react"
import { articleService } from "../../services/article.service"
import { ArticleList } from "../ArticleList"
import { useQuery, useQueryClient } from "react-query"
import { GraphsContainer } from "../GraphsContainer/GraphsContainer"
import { LandingTitle, ResultsLabel, StyledArticleIndex } from "./styles"
import { useEffectUpdate } from "../../customHooks/useEffectUpdate"

export function ArticleIndex() {
  const queryClient = useQueryClient()

  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const {
    data: articlesData,
    isLoading,
    isError,
  } = useQuery(["articles", filterBy], () => articleService.query(filterBy))

  const isFirstRender = useRef(true)

  useEffectUpdate(() => {
    isFirstRender.current = false
  }, [filterBy])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  const { articles, totalResults } = articlesData

  return (
    <StyledArticleIndex>
      {isFirstRender.current ? (
        <LandingTitle>Top Headlines in Israel</LandingTitle>
      ) : (
        <ResultsLabel>{totalResults} Total results</ResultsLabel>
      )}
      <ArticleList articles={articles} />
      <GraphsContainer articles={articles} />
    </StyledArticleIndex>
  )
}
