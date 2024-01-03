import { useQuery, useQueryClient } from "react-query"
import { Cover, FilterContainer, StyledSideFilter, Title } from "./styles"

export function SideFilter() {
  const queryClient = useQueryClient()

  const { data: isDisplaySideFilter } = useQuery("isDisplaySideFilter", () =>
    queryClient.getQueryData("isDisplaySideFilter")
  )

  function onCloseSideFilter() {
    queryClient.setQueryData("isDisplaySideFilter", false)
  }

  const displaySideFilter = isDisplaySideFilter as boolean

  return (
    <StyledSideFilter isOpen={displaySideFilter} onClick={onCloseSideFilter}>
      <Cover />
      <FilterContainer onClick={(ev) => ev.stopPropagation()}>
        <Title>Filter</Title>
      </FilterContainer>
    </StyledSideFilter>
  )
}
