import React, { useEffect, useState, useRef } from "react"
import { articleService } from "../../services/article.service"
import { ArticleList } from "./ArticleList"
import { useInfiniteQuery, useQuery, useQueryClient } from "react-query"
import { GraphsContainer } from "../GraphsContainer/GraphsContainer"
import { LandingTitle, ResultsLabel, StyledArticleIndex } from "./styles"
import { useEffectUpdate } from "../../customHooks/useEffectUpdate"
import { ArticleSkeleton } from "./Skeletons/ArticleSkeleton"

export const ArticleIndex = ({ isMobile = false }) => {
  const queryClient = useQueryClient()

  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const {
    data: articlesData,
    fetchNextPage,
    isLoading,
    isError,
    hasNextPage,
  } = useInfiniteQuery(
    ["articles", filterBy],
    ({ pageParam = 1 }) => {
      return articleService.query({ ...filterBy, pageNumber: pageParam })
    },
    {
      getNextPageParam: (lasePage, pages) => {
        return pages.length + 1
      },
    }
  )

  const isFirstRender = useRef(true)

  useEffectUpdate(() => {
    isFirstRender.current = false
  }, [filterBy])

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1
    if (bottom && hasNextPage) {
      fetchNextPage()
    }
  }

  if (isLoading) {
    return <ArticleSkeleton />
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  const articles = articlesData.pages.flatMap((page) => page.articles)
  const totalResults = articlesData.pages[0]?.totalResults || 0

  return (
    <StyledArticleIndex>
      {!isMobile && isFirstRender.current ? (
        <LandingTitle>Top Headlines in Israel</LandingTitle>
      ) : (
        <ResultsLabel>{totalResults} Total results</ResultsLabel>
      )}
      <ArticleList articles={articles} onScroll={handleScroll} />
      <GraphsContainer articles={articles} />
    </StyledArticleIndex>
  )
}
