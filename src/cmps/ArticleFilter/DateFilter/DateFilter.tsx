import { useState } from "react"
import {
  Button,
  ButtonClear,
  Label,
  ModalForm,
  StyledDateFilter,
} from "./styles"
import date from "../../../assets/icons/date.svg"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { useQueryClient } from "react-query"

interface DateFilterProps {
  filterBy: any
  handleChange: (target: string, val: string) => void
}

export const DateFilter = ({ filterBy, handleChange }: DateFilterProps) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const queryClient = useQueryClient()

  const onClearDates = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    queryClient.setQueryData("filterBy", { ...filterBy, from: "", to: "" })
  }

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
      {isDisplay && (
        <ModalForm>
          <Label>From</Label>
          <DatePicker
            value={dayjs(filterBy.from, "YYYY-MM-DD")}
            onChange={(newValue) => {
              if (newValue === null) handleChange("from", "")
              else handleChange("from", newValue.format("YYYY-MM-DD"))
            }}
          />
          <Label>To</Label>
          <DatePicker
            value={dayjs(filterBy.to, "YYYY-MM-DD")}
            onChange={(newValue) => {
              if (newValue === null) handleChange("to", "")
              else handleChange("to", newValue.format("YYYY-MM-DD"))
            }}
          />
          <ButtonClear onClick={(ev) => onClearDates(ev)}>Clear</ButtonClear>
        </ModalForm>
      )}
    </StyledDateFilter>
  )
}
