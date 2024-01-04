import styled from "styled-components"

export const StyledFilterTargetOptions = styled.div`
  overflow-y: auto;
  background-color: #fff;
`

export const Title = styled.h3`
  color: #5a5a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

export const BackButton = styled.button`
  padding: 0;
  height: 24px;
  border: none;
  background-color: transparent;
`

export const InputContainer = styled.div<{
  checked: boolean
}>`
  height: 44px;
  background-color: ${(props) =>
    props.checked ? "rgba(223, 224, 235, 0.41)" : ""};

  input {
    display: none;
  }

  label {
    height: 100%;
    color: #5a5a89;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.25px;

    cursor: pointer;

    display: flex;
    align-items: center;
  }
`
