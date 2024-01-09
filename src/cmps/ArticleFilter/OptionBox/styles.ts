import styled, { css } from "styled-components"
import { clr6 } from "../../../assets/style/setup/variables"

interface Props {
  checked: boolean
}

export const StyledOptionBox = styled.div`
  position: relative;
`

export const Button = styled.button<{
  $small?: boolean
}>`
  border: none;
  border-radius: 10px;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: ${clr6};
    text-transform: capitalize;
  }

  ${({ $small }) =>
    $small
      ? css`
          padding: 16px;
          height: 100%;
          gap: 8px;
        `
      : css`
          padding: 15px;
          width: 175px;
        `}
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
    background-color: ${clr6};
  }
`

export const RadioInputContainer = styled.div<Props>`
  input {
    display: none;
  }

  label {
    div {
      height: 28px;
      color: ${clr6};
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
