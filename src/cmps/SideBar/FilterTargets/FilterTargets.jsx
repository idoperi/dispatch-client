import { SideBarHeaderContainer } from "../styles"
import { Name, OptionButton, StyledFilterTargets, Title, Value } from "./styles"

export function FilterTargets({ filterOptions, filterBy, setFilterTarget }) {
  function getFilterTargetValue(options, id) {
    if (!id) return "All"
    const { name } = options.find((option) => option.id === id)
    return name
  }

  return (
    <StyledFilterTargets>
      <SideBarHeaderContainer>
        <Title>Filter</Title>
      </SideBarHeaderContainer>
      {filterOptions.map((filterOption) => (
        <OptionButton
          key={filterOption.filterByKey}
          onClick={() => setFilterTarget(filterOption.filterByKey)}
        >
          <Name>{filterOption.name}</Name>
          <Value>
            {getFilterTargetValue(
              filterOption.options,
              filterBy[filterOption.filterByKey]
            )}
          </Value>
        </OptionButton>
      ))}
      <OptionButton onClick={() => setFilterTarget("dates")}>
        <Name>Dates</Name>
        <Value></Value>
      </OptionButton>
    </StyledFilterTargets>
  )
}
