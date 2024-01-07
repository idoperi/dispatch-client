import { SearchInput, StyledHeader } from "./styles"
import backSvg from "../../../assets/icons/back.svg"
import { FormEvent, useState } from "react"
import { useQuery, useQueryClient } from "react-query"

export function MobileSearchHeader({ onSearch, searchValue, setSearchValue }) {
  return (
    <StyledHeader>
      <img src={backSvg} alt="" />

      <form onSubmit={onSearch}>
        <SearchInput
          placeholder="Search"
          id="search"
          value={searchValue}
          onInput={(ev) => setSearchValue(ev.target.value)}
        />
      </form>
    </StyledHeader>
  )
}
