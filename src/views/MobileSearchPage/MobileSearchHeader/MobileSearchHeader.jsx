import { SearchInput, StyledHeader, TransparentButton } from "./styles"
import backSvg from "../../../assets/icons/back.svg"
import searchSvg from "../../../assets/icons/search.svg"
import { ReactComponent as SearchSvg } from "../../../assets/icons/search.svg"
import exitSvg from "../../../assets/icons/exit.svg"
import { useEffect, useRef } from "react"

export const MobileSearchHeader = ({
  onSearch,
  searchValue,
  setSearchValue,
  onFocus,
  onBack,
  isDisplayFeed,
  onExitSearch,
}) => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    return () => {}
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    inputRef.current.blur()
    onSearch()
  }

  const getDecoratedValue = () => {
    return isDisplayFeed ? `“${searchValue}”` : searchValue
  }

  const getDecoratedClass = () => {
    return isDisplayFeed ? `decorated` : ""
  }

  return (
    <StyledHeader>
      <TransparentButton onClick={onBack}>
        <img src={backSvg} alt="" />
      </TransparentButton>

      <form onSubmit={handleSubmit} autoComplete="off">
        <SearchInput
          className={getDecoratedClass()}
          placeholder="Search"
          id="search"
          value={getDecoratedValue()}
          onInput={(ev) => setSearchValue(ev.target.value)}
          ref={inputRef}
          onFocus={onFocus}
        />
      </form>

      {isDisplayFeed ? (
        <TransparentButton onClick={() => inputRef.current.focus()}>
          <SearchSvg />
        </TransparentButton>
      ) : (
        <TransparentButton onClick={onExitSearch}>
          <img className="exit-svg" src={exitSvg} alt="" />
        </TransparentButton>
      )}
    </StyledHeader>
  )
}
