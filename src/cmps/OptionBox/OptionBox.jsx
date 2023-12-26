import { useState } from "react"
import {
  StyledOptionBox,
  Button,
  ModalForm,
  RadioInputContainer,
} from "./styles"
import dropdown from "../../assets/icons/dropdown.svg"

export function OptionBox({
  name,
  filterByKey,
  options,
  filterBy,
  handleChange,
}) {
  const [isDisplay, setIsDisplay] = useState(false)

  return (
    <StyledOptionBox>
      <Button
        onClick={() => {
          setIsDisplay((prevIsDisplay) => !prevIsDisplay)
        }}
      >
        <span>{name}</span>
        <img src={dropdown} alt="" />
      </Button>
      {isDisplay && (
        <ModalForm>
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
                onChange={(ev) => {
                  setIsDisplay((prevIsDisplay) => !prevIsDisplay)
                  handleChange(filterByKey, ev.currentTarget.value)
                }}
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
