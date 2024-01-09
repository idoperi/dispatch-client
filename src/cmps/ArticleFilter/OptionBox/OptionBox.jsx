import { useState } from "react"
import {
  StyledOptionBox,
  Button,
  ModalForm,
  RadioInputContainer,
} from "./styles"
import dropdown from "../../../assets/icons/dropdown.svg"

export const OptionBox = ({
  name,
  filterByKey,
  options,
  filterBy,
  handleChange,
  isSmall = false,
}) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const handleInputChanged = (value) => {
    setIsDisplay((prevIsDisplay) => !prevIsDisplay)
    handleChange(filterByKey, value)
  }

  return (
    <StyledOptionBox>
      <Button
        $small={isSmall}
        onClick={() => {
          setIsDisplay((prevIsDisplay) => !prevIsDisplay)
        }}
      >
        <span>{name}</span>
        <img src={dropdown} alt="" />
      </Button>
      {isDisplay && (
        <ModalForm>
          <RadioInputContainer key="all" checked={filterBy[filterByKey] === ""}>
            <input
              type="radio"
              id="all"
              name="all"
              value="all"
              onChange={(ev) => handleInputChanged(ev.target.value)}
              checked={filterBy[filterByKey] === ""}
            />
            <label htmlFor="all">
              <div>all</div>
            </label>
          </RadioInputContainer>
          {options.map(({ id, name }) => (
            <RadioInputContainer
              key={id}
              checked={filterBy[filterByKey] === id}
            >
              <input
                type="radio"
                id={id}
                name={id}
                value={id}
                onChange={(ev) => handleInputChanged(ev.currentTarget.value)}
                checked={filterBy[filterByKey] === id}
              />
              <label htmlFor={id}>
                <div>{name}</div>
              </label>
            </RadioInputContainer>
          ))}
        </ModalForm>
      )}
    </StyledOptionBox>
  )
}
