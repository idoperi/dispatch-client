import { useEffect, useState } from "react"
import { articleService } from "../services/article.service"
import { ArticleList } from "./ArticleList"
import { useQuery, useQueryClient } from "react-query"

export function ArticleIndex() {
  const queryClient = useQueryClient()

  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery(["articles", filterBy], () => articleService.query(filterBy))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  return (
    <section className="article-index">
      <ArticleList articles={articles} />
    </section>
  )
}
