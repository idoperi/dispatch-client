import { useQuery, useQueryClient } from "react-query"
import { Backdrop, ButtonBottom, Container, StyledSideBar } from "./styles"
import { FilterTargets } from "./FilterTargets/FilterTargets"
import { useEffect, useState } from "react"
import { articleService } from "../../services/article.service"
import { FilterTargetOptions } from "./FilterTargetOptions/FilterTargetOptions"
import { useEffectUpdate } from "../../customHooks/useEffectUpdate"
import { FilterDates } from "./FilterDates/FilterDates"

const typeOptions = {
  name: "Search In",
  filterByKey: "type",
  options: [
    { id: "top headlines", name: "top headlines" },
    { id: "everything", name: "everything" },
  ],
}

export function SideBar() {
  const [filterTarget, setFilterTarget] = useState("")
  const [filterOptions, setFilterOptions] = useState([])

  const queryClient = useQueryClient()

  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const [localFilterBy, setLocalFilterBy] = useState({ ...filterBy })

  useEffectUpdate(() => {
    setLocalFilterBy({ ...filterBy })
  }, [filterBy])

  useEffect(() => {
    switch (localFilterBy.type) {
      case "everything":
        setFilterOptions([
          typeOptions,
          ...articleService.getEverythingFilterOptions(),
        ])
        break
      case "top headlines":
        setFilterOptions([
          typeOptions,
          ...articleService.getTopHeadlinesFilterOptions(),
        ])
        break
      default:
        break
    }
  }, [localFilterBy.type])

  function handleLocalFilterChange(target, val) {
    setLocalFilterBy((prevLocalFilterBy) => ({
      ...prevLocalFilterBy,
      [target]: val,
    }))
  }

  const { data: isDisplaySideFilter } = useQuery("isDisplaySideFilter", () =>
    queryClient.getQueryData("isDisplaySideFilter")
  )

  function onCloseSideBar() {
    queryClient.setQueryData("isDisplaySideFilter", false)
  }

  function getTargetOptions() {
    return filterOptions.find(
      (filterOption) => filterOption.filterByKey === filterTarget
    )
  }

  function onSaveFilter() {
    queryClient.setQueryData("filterBy", { ...localFilterBy })
    onCloseSideBar()
  }

  return (
    <StyledSideBar open={isDisplaySideFilter} onClick={onCloseSideBar}>
      <Backdrop />
      <Container onClick={(ev) => ev.stopPropagation()}>
        {filterTarget ? (
          filterTarget === "dates" ? (
            <FilterDates
              filterBy={localFilterBy}
              setFilterTarget={setFilterTarget}
              handleChange={handleLocalFilterChange}
            />
          ) : (
            <FilterTargetOptions
              filterBy={localFilterBy}
              targetOptions={getTargetOptions()}
              setFilterTarget={setFilterTarget}
              handleChange={handleLocalFilterChange}
            />
          )
        ) : (
          <FilterTargets
            filterOptions={filterOptions}
            filterBy={localFilterBy}
            setFilterTarget={setFilterTarget}
          />
        )}

        <ButtonBottom onClick={onSaveFilter}>View results</ButtonBottom>
      </Container>
    </StyledSideBar>
  )
}
