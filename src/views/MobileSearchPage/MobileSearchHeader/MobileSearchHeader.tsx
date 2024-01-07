import { SearchInput, StyledHeader } from "./styles"
import backSvg from "../../../assets/icons/back.svg"

export function MobileSearchHeader() {
  return (
    <StyledHeader>
      <img src={backSvg} alt="" />

      <SearchInput
        placeholder="Search"
        value={""}
        onInput={(ev) => {}}
        onFocus={() => {}}
      />
    </StyledHeader>
  )
}
