import styled from "styled-components"

export const StyledDateFilter = styled.div`
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
  padding: 10px 0;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
`
