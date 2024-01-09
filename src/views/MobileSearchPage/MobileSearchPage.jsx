import { useQuery, useQueryClient } from "react-query"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { MobileRecentSearches } from "./MobileRecentSearches/MobileRecentSearches"
import { MobileSearchHeader } from "./MobileSearchHeader/MobileSearchHeader"
import { FeedContainer, StyledMobileSearch } from "./styles"
import { useState } from "react"
import { FilterHeader } from "../../cmps/FilterHeader/FilterHeader"
import { SideBar } from "../../cmps/SideBar/SideBar"
import { useNavigate } from "react-router-dom"

export const MobileSearch = () => {
  const queryClient = useQueryClient()
  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )
  const { data: recentSearches } = useQuery("recentSearches", () =>
    queryClient.getQueryData("recentSearches")
  )

  const [searchValue, setSearchValue] = useState("")
  const [isDisplayFeed, setIsDisplayFeed] = useState(false)

  const navigate = useNavigate()

  const onSearch = () => {
    queryClient.setQueryData("filterBy", { ...filterBy, q: searchValue })
    setIsDisplayFeed(true)

    if (!searchValue) return
    if (recentSearches.includes(searchValue)) return
    queryClient.setQueryData("recentSearches", [searchValue, ...recentSearches])
  }

  const onBack = () => {
    queryClient.setQueryData("filterBy", { ...filterBy, q: "" })
    navigate("/")
  }

  const onFocus = () => {
    setIsDisplayFeed(false)
  }

  const onExitSearch = () => {
    setIsDisplayFeed(true)
    setSearchValue(filterBy.q)
  }

  const onRecentSearchClicked = (recentSearch) => {
    setSearchValue(recentSearch)
    setIsDisplayFeed(true)
    queryClient.setQueryData("filterBy", { ...filterBy, q: recentSearch })
  }

  const onRemoveRecentSearch = (idx) => {
    const updatedSearches = [...recentSearches]
    updatedSearches.splice(idx, 1)
    queryClient.setQueryData("recentSearches", [...updatedSearches])
  }

  const onClearRecentSearches = () => {
    queryClient.setQueryData("recentSearches", [])
  }

  return (
    <StyledMobileSearch>
      <MobileSearchHeader
        onSearch={onSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onFocus={onFocus}
        onBack={onBack}
        isDisplayFeed={isDisplayFeed}
        onExitSearch={onExitSearch}
      />

      {isDisplayFeed ? (
        <FeedContainer>
          <FilterHeader />

          <SideBar />

          <ArticleIndex isMobile={true} />
        </FeedContainer>
      ) : (
        <MobileRecentSearches
          recentSearches={recentSearches}
          onRecentSearchClicked={onRecentSearchClicked}
          onRemoveRecentSearch={onRemoveRecentSearch}
          onClearRecentSearches={onClearRecentSearches}
        />
      )}
    </StyledMobileSearch>
  )
}