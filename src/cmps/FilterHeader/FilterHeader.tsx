import { ButtonToggleFilter, StyledFilterHeader } from "./styles"
import filterLogo from "../../assets/icons/filter.svg"
import { ArticleTypeBox } from "../AppHeader/ArticleTypeBox/ArticleTypeBox"
import { useQuery, useQueryClient } from "react-query"

export function FilterHeader() {
  const queryClient = useQueryClient()

  function onOpenSideFilter() {
    queryClient.setQueryData("isDisplaySideFilter", true)
  }

  return (
    <StyledFilterHeader className="full">
      <div></div>
      <ButtonToggleFilter onClick={onOpenSideFilter}>
        <img src={filterLogo} alt="" />
      </ButtonToggleFilter>
    </StyledFilterHeader>
  )
}
