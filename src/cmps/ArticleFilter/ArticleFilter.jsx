import { useEffect, useState } from "react"
import { articleService } from "../../services/article.service"
import { useQuery, useQueryClient } from "react-query"
import { OptionBox } from "./OptionBox/OptionBox"
import { FilterTargets } from "./styles"
import { DateFilter } from "./DateFilter/DateFilter"
import { StyledDateFilter } from "./DateFilter/styles"

export const ArticleFilter = () => {
  const queryClient = useQueryClient()
  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const [filterOptions, setFilterOptions] = useState([])

  useEffect(() => {
    switch (filterBy.type) {
      case "everything":
        setFilterOptions(articleService.getEverythingFilterOptions())
        break
      case "top headlines":
        setFilterOptions(articleService.getTopHeadlinesFilterOptions())
        break
      default:
        break
    }
  }, [filterBy.type])

  const handleChange = (target, val) => {
    queryClient.setQueryData("filterBy", { ...filterBy, [target]: val })
  }

  return (
    <FilterTargets>
      {filterBy.type === "everything" && (
        <DateFilter filterBy={filterBy} handleChange={handleChange} />
      )}

      {filterOptions.map(({ name, filterByKey, options }) => (
        <OptionBox
          key={name}
          name={name}
          filterByKey={filterByKey}
          options={options}
          filterBy={filterBy}
          handleChange={handleChange}
        />
      ))}
    </FilterTargets>
  )
}
