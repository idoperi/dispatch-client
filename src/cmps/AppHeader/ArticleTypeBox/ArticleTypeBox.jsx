import { useState } from "react"
import { Button, ModalForm, RadioInputContainer, TypeBox } from "./styles"
import dropdown from "../../../assets/icons/dropdown.svg"

export const ArticleTypeBox = ({ target, options, filterBy, handleChange }) => {
  const [isDisplay, setIsDisplay] = useState(false)

  return (
    <TypeBox>
      <Button
        onClick={() => {
          setIsDisplay((prevIsDisplay) => !prevIsDisplay)
        }}
      >
        <span>{filterBy[target]}</span>
        <img src={dropdown} alt="" />
      </Button>
      {isDisplay && (
        <ModalForm>
          {options.map((option) => (
            <RadioInputContainer
              key={option}
              checked={filterBy[target] === option}
            >
              <input
                type="radio"
                id={option}
                target={target}
                value={option}
                onChange={(ev) => {
                  setIsDisplay((prevIsDisplay) => !prevIsDisplay)
                  handleChange(target, ev.currentTarget.value)
                }}
                checked={filterBy[target] === option}
              />
              <label htmlFor={option}>
                <div>{option}</div>
              </label>
            </RadioInputContainer>
          ))}
        </ModalForm>
      )}
    </TypeBox>
  )
}
