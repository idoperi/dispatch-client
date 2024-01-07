import { SideBarHeaderContainer } from "../styles"
import {
  BackButton,
  InputContainer,
  StyledFilterTargetOptions,
  Title,
} from "./styles"
import backIcon from "../../../assets/icons/back.svg"

export function FilterTargetOptions({
  targetOptions,
  setFilterTarget,
  filterBy,
  handleChange,
}) {
  const { name, filterByKey, options } = targetOptions

  return (
    <StyledFilterTargetOptions>
      <SideBarHeaderContainer>
        <BackButton onClick={() => setFilterTarget("")}>
          <img src={backIcon} alt="" />
        </BackButton>
        <Title>{name}</Title>
      </SideBarHeaderContainer>

      {filterByKey !== "type" && (
        <InputContainer checked={filterBy[filterByKey] === ""}>
          <input
            type="radio"
            id="all"
            name="all"
            value="all"
            onChange={(ev) => {
              handleChange(filterByKey, "")
              setFilterTarget("")
            }}
            checked={filterBy[filterByKey] === ""}
          />
          <label htmlFor="all">
            <div>All</div>
          </label>
        </InputContainer>
      )}
      {options.map(({ id, name }) => (
        <InputContainer key={id} checked={filterBy[filterByKey] === id}>
          <input
            type="radio"
            id={id}
            name={id}
            value={id}
            onChange={(ev) => {
              handleChange(filterByKey, ev.currentTarget.value)
              setFilterTarget("")
            }}
            checked={filterBy[filterByKey] === id}
          />
          <label htmlFor={id}>{name}</label>
        </InputContainer>
      ))}
    </StyledFilterTargetOptions>
  )
}
