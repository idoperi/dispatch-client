import { BackButton, Label, StylesFilterDates, Title } from "./styles"
import backIcon from "../../../assets/icons/back.svg"
import { SideBarHeaderContainer } from "../styles"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

export const FilterDates = ({ filterBy, handleChange, setRenderType }) => {
  return (
    <StylesFilterDates>
      <SideBarHeaderContainer>
        <BackButton onClick={() => setRenderType("targets")}>
          <img src={backIcon} alt="" />
        </BackButton>
        <Title>Dates</Title>
      </SideBarHeaderContainer>

      <div>
        <Label>From</Label>
        <DatePicker
          value={dayjs(filterBy.from, "YYYY-MM-DD")}
          onChange={(newValue) => {
            if (newValue === null) handleChange("from", "")
            else handleChange("from", newValue.format("YYYY-MM-DD"))
          }}
        />
      </div>
      <div>
        <Label>To</Label>
        <DatePicker
          value={dayjs(filterBy.to, "YYYY-MM-DD")}
          onChange={(newValue) => {
            if (newValue === null) handleChange("to", "")
            else handleChange("to", newValue.format("YYYY-MM-DD"))
          }}
        />
      </div>
    </StylesFilterDates>
  )
}
