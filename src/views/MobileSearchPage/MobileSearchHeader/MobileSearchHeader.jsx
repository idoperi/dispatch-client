import { SearchInput, StyledHeader, TransparentButton } from "./styles"
import backSvg from "../../../assets/icons/back.svg"
import searchSvg from "../../../assets/icons/search.svg"
import { ReactComponent as SearchSvg } from "../../../assets/icons/search.svg"
import exitSvg from "../../../assets/icons/exit.svg"
import { useEffect, useRef } from "react"

export function MobileSearchHeader({
  onSearch,
  searchValue,
  setSearchValue,
  onFocus,
  onBack,
  isDisplayFeed,
  onExitSearch,
}) {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    return () => {}
  }, [])

  function handleSubmit(ev) {
    ev.preventDefault()
    inputRef.current.blur()
    onSearch()
  }

  function getDecoratedValue() {
    return isDisplayFeed ? `“${searchValue}”` : searchValue
  }

  return (
    <StyledHeader>
      <TransparentButton onClick={onBack}>
        <img src={backSvg} alt="" />
      </TransparentButton>

      <form onSubmit={handleSubmit} autoComplete="off">
        <SearchInput
          placeholder="Search"
          id="search"
          value={getDecoratedValue()}
          onInput={(ev) => setSearchValue(ev.target.value)}
          ref={inputRef}
          onFocus={onFocus}
          decorated={isDisplayFeed}
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
