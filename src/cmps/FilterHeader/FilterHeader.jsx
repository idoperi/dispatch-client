import { ButtonToggleFilter, StyledFilterHeader } from "./styles"
import filterLogo from "../../assets/icons/filter.svg"
import { ArticleTypeBox } from "../AppHeader/ArticleTypeBox/ArticleTypeBox"
import { useQuery, useQueryClient } from "react-query"
import { useEffect, useState } from "react"
import { OptionBox } from "../ArticleFilter/OptionBox/OptionBox"
import { sortByOptions } from "../../services/article.service"

export const FilterHeader = () => {
  const queryClient = useQueryClient()

  const onOpenSideFilter = () => {
    queryClient.setQueryData("isDisplaySideFilter", true)
  }

  const { data: filterBy } = useQuery("filterBy", () =>
    queryClient.getQueryData("filterBy")
  )

  const handleChange = (target, val) => {
    queryClient.setQueryData("filterBy", { ...filterBy, [target]: val })
  }

  return (
    <StyledFilterHeader className="full">
      <ButtonToggleFilter onClick={onOpenSideFilter}>
        <img src={filterLogo} alt="" />
      </ButtonToggleFilter>
      {filterBy.type === "everything" && (
        <OptionBox
          name="sort by"
          filterByKey="sortBy"
          options={sortByOptions}
          filterBy={filterBy}
          handleChange={handleChange}
          isSmall={true}
        />
      )}
    </StyledFilterHeader>
  )
}
