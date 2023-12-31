import { DOMElement, ReactComponentElement, useState } from "react"
import { Button, ModalForm, StyledDateFilter } from "./styles"
import date from "../../../assets/icons/date.svg"

interface DateFilterProps {
  name: string
  filterByKey: string
  filterBy: object
  handleChange: () => void
}

export function DateFilter({
  name,
  filterByKey,
  filterBy,
  handleChange,
}: DateFilterProps) {
  const [isDisplay, setIsDisplay] = useState(false)

  return (
    <StyledDateFilter>
      <Button
        onClick={() => {
          setIsDisplay((prevIsDisplay) => !prevIsDisplay)
        }}
      >
        <span>Dates</span>
        <img src={date} alt="" />
      </Button>
      {isDisplay && <ModalForm></ModalForm>}
    </StyledDateFilter>
  )
}
