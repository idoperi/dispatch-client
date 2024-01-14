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

export const SideBar = () => {
  const [filterTarget, setFilterTarget] = useState("")
  const [filterOptions, setFilterOptions] = useState([])
  const [renderType, setRenderType] = useState("targets")

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

  const handleLocalFilterChange = (target, val) => {
    setLocalFilterBy((prevLocalFilterBy) => ({
      ...prevLocalFilterBy,
      [target]: val,
    }))
  }

  const { data: isDisplaySideFilter } = useQuery("isDisplaySideFilter", () =>
    queryClient.getQueryData("isDisplaySideFilter")
  )

  const onCloseSideBar = () => {
    queryClient.setQueryData("isDisplaySideFilter", false)
  }

  const getTargetOptions = () => {
    return filterOptions.find(
      (filterOption) => filterOption.filterByKey === filterTarget
    )
  }

  const onSaveFilter = () => {
    queryClient.setQueryData("filterBy", { ...localFilterBy })
    onCloseSideBar()
  }

  const renderSidebarOption = {
    targets: (
      <FilterTargets
        filterOptions={filterOptions}
        filterBy={localFilterBy}
        setFilterTarget={setFilterTarget}
        setRenderType={setRenderType}
      />
    ),
    options: (
      <FilterTargetOptions
        filterBy={localFilterBy}
        targetOptions={getTargetOptions()}
        handleChange={handleLocalFilterChange}
        setRenderType={setRenderType}
      />
    ),
    dates: (
      <FilterDates
        filterBy={localFilterBy}
        handleChange={handleLocalFilterChange}
        setRenderType={setRenderType}
      />
    ),
  }

  return (
    <StyledSideBar open={isDisplaySideFilter} onClick={onCloseSideBar}>
      <Backdrop />
      <Container onClick={(ev) => ev.stopPropagation()}>
        {renderSidebarOption[renderType]}
        <ButtonBottom onClick={onSaveFilter}>View results</ButtonBottom>
      </Container>
    </StyledSideBar>
  )
}
