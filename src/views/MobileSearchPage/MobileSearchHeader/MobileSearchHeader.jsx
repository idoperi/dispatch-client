import { SearchInput, StyledHeader } from "./styles"
import backSvg from "../../../assets/icons/back.svg"
import { useEffect, useRef } from "react"
import { useQuery, useQueryClient } from "react-query"
import { NavLink } from "react-router-dom"

export function MobileSearchHeader({ onSearch, searchValue, setSearchValue }) {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    return () => {}
  }, [])

  return (
    <StyledHeader>
      <NavLink to="/">
        <img src={backSvg} alt="" />
      </NavLink>

      <form onSubmit={onSearch} autoComplete="off">
        <SearchInput
          placeholder="Search"
          id="search"
          value={searchValue}
          onInput={(ev) => setSearchValue(ev.target.value)}
          ref={inputRef}
        />
      </form>
    </StyledHeader>
  )
}
