import styled from "styled-components"

export const StyledHeader = styled.header`
  height: 74px;
  background-color: #fff;
  border-bottom: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px 0px rgba(0, 0, 0, 0.05);
  padding: 0 16px;

  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
  }

  form {
    flex-grow: 1;
  }
`

export const SearchInput = styled.input`
  color: rgba(90, 90, 137, 0.5);
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  border: none;
  padding: 8px;
  width: 100%;

  &::placeholder {
    opacity: 50%;
  }

  &:focus-visible {
    outline: none;
    /* width: 475px; */

    &::placeholder {
      color: transparent;
    }
  }
`
