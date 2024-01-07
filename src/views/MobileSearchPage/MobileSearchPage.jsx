import { useQuery, useQueryClient } from "react-query"
import { ArticleIndex } from "../../cmps/ArticleIndex/ArticleIndex"
import { MobileRecentSearches } from "./MobileRecentSearches/MobileRecentSearches"
import { MobileSearchHeader } from "./MobileSearchHeader/MobileSearchHeader"
import { StyledMobileSearch } from "./styles"
import { useState } from "react"

export function MobileSearch() {
  const queryClient = useQueryClient()
  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const [searchValue, setSearchValue] = useState("")
  const [recentSearches, setRecentSearches] = useState([])

  function onSearch(ev) {
    ev.preventDefault()
    queryClient.setQueryData("filterBy", { ...filterBy, q: searchValue })

    if (!searchValue) return
    setRecentSearches((prevRecentSearches) => [
      searchValue,
      ...prevRecentSearches,
    ])
  }

  function onRecentSearchClicked(recentSearch) {
    setSearchValue(recentSearch)
    queryClient.setQueryData("filterBy", { ...filterBy, q: searchValue })
  }

  function onRemoveRecentSearch(idx) {
    setRecentSearches((prevRecentSearches) => {
      const updatedSearches = [...prevRecentSearches]
      updatedSearches.splice(idx, 1)
      return updatedSearches
    })
  }

  function onClearRecentSearches() {
    setRecentSearches([])
  }

  return (
    <StyledMobileSearch>
      <MobileSearchHeader
        onSearch={onSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {true && (
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
