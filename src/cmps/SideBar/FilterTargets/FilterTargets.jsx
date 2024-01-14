import { SideBarHeaderContainer } from "../styles"
import { Name, OptionButton, StyledFilterTargets, Title, Value } from "./styles"

export const FilterTargets = ({
  filterOptions,
  filterBy,
  setFilterTarget,
  setRenderType,
}) => {
  const getFilterTargetValue = (options, id) => {
    if (!id) return "All"
    const { name } = options.find((option) => option.id === id)
    return name
  }

  return (
    <StyledFilterTargets>
      <SideBarHeaderContainer>
        <Title>Filter</Title>
      </SideBarHeaderContainer>
      {filterOptions.map((filterOption) => {
        if (filterOption.filterByKey === "sortBy") return null
        return (
          <OptionButton
            key={filterOption.filterByKey}
            onClick={() => {
              setFilterTarget(filterOption.filterByKey)
              setRenderType("options")
            }}
          >
            <Name>{filterOption.name}</Name>
            <Value>
              {getFilterTargetValue(
                filterOption.options,
                filterBy[filterOption.filterByKey]
              )}
            </Value>
          </OptionButton>
        )
      })}
      {filterBy.type === "everything" && (
        <OptionButton onClick={() => setRenderType("dates")}>
          <Name>Dates</Name>
          <Value></Value>
        </OptionButton>
      )}
    </StyledFilterTargets>
  )
}
