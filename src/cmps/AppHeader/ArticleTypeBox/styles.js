import styled from "styled-components"

export const TypeBox = styled.div`
  position: relative;
`

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: #5a5a89;
    text-transform: capitalize;
    margin: 0 16px;
  }

  img {
    margin: 0 19px 0 0;
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
