import { useQuery, useQueryClient } from "react-query"
import { OptionBox } from "../../ArticleFilter/OptionBox/OptionBox"
import {
  SearchBarContainer,
  SearchBtn,
  SearchForm,
  SearchInput,
  SeparateLine,
} from "./styles"
import { ArticleTypeBox } from "../ArticleTypeBox/ArticleTypeBox"
import { useState } from "react"
import { RecentSearchesModal } from "../RecentSearchesModal/RecentSearchesModal"

export const SearchBar = () => {
  const queryClient = useQueryClient()
  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )
  const { data: isDisplaySearchModal } = useQuery("isDisplaySearchModal", () =>
    queryClient.getQueryData("isDisplaySearchModal")
  )
  const { data: recentSearches } = useQuery("recentSearches", () =>
    queryClient.getQueryData("recentSearches")
  )

  const [searchValue, setSearchValue] = useState("")

  const handleChange = (target, val) => {
    queryClient.setQueryData("filterBy", { ...filterBy, [target]: val })
  }

  const filterOption = {
    target: "type",
    options: ["top headlines", "everything"],
  }

  const onSearch = (ev) => {
    ev.preventDefault()
    queryClient.setQueryData("isDisplaySearchModal", false)
    queryClient.setQueryData("filterBy", { ...filterBy, q: searchValue })

    if (!searchValue) return
    if (recentSearches.includes(searchValue)) return
    queryClient.setQueryData("recentSearches", [searchValue, ...recentSearches])
  }

  const onRecentSearchClicked = (recentSearch) => {
    setSearchValue(recentSearch)
    queryClient.setQueryData("isDisplaySearchModal", false)
    queryClient.setQueryData("filterBy", { ...filterBy, q: searchValue })
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
    <SearchBarContainer onClick={(ev) => ev.stopPropagation()}>
      <SearchForm onSubmit={onSearch}>
        <SearchBtn />
        <SearchInput
          placeholder="Search"
          value={searchValue}
          onInput={(ev) => setSearchValue(ev.target.value)}
          onFocus={() => queryClient.setQueryData("isDisplaySearchModal", true)}
        />
      </SearchForm>

      {isDisplaySearchModal && (
        <RecentSearchesModal
          recentSearches={recentSearches}
          onRecentSearchClicked={onRecentSearchClicked}
          onRemoveRecentSearch={onRemoveRecentSearch}
          onClearRecentSearches={onClearRecentSearches}
        />
      )}

      <SeparateLine />

      <ArticleTypeBox
        target={filterOption.target}
        options={filterOption.options}
        filterBy={filterBy}
        handleChange={handleChange}
      />
    </SearchBarContainer>
  )
}
