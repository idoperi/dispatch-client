import styled from "styled-components"

export const StyledOptionBox = styled.div`
  position: relative;
`

export const Button = styled.button`
  border: none;
  width: 175px;
  padding: 15px;
  border-radius: 10px;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: #5a5a89;
    text-transform: capitalize;
  }
`

export const ModalForm = styled.form`
  position: absolute;
  bottom: -6px;
  z-index: 1;
  transform: translate(0, 100%);
  background-color: #ffffff;
  width: 175px;
  border-radius: 10px;
  padding: 10px 0;
  max-height: 190px;
  overflow-y: auto;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: #5a5a89;
  }
`

export const RadioInputContainer = styled.div`
  input {
    display: none;
  }

  label {
    div {
      height: 28px;
      color: #5a5a89;
      text-transform: capitalize;
      font-family: Mulish;
      font-size: 12px;
      letter-spacing: 0.1px;
      padding: 0 24px;

      background-color: ${(props) =>
        props.checked ? "rgba(223, 224, 235, 0.41)" : ""};
      cursor: pointer;

      display: flex;
      align-items: center;
    }
  }
`
