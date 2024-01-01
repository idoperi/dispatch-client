import styled from "styled-components"
import { clr2, clr3, clr4, clr5 } from "../../../assets/style/setup/variables"

export const StyledDateFilter = styled.div`
  position: relative;
  grid-column: 2;
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

  img {
    height: 22px;
  }
`

export const ModalForm = styled.form`
  position: absolute;
  bottom: -20px;
  z-index: 1;
  transform: translate(0, 100%);
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 5px 5px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  width: 100%;

  display: grid;
  gap: 10px;
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #5a5a89;
  text-transform: capitalize;
  margin: 0 5px;
`

export const ButtonClear = styled.button`
  border: 1px solid #d9dbe9;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #5a5a89;
`
