import styled from "styled-components"
import { clr1, clr4 } from "../../../assets/style/setup/variables"
import search from "../../../assets/icons/search.svg"
import { mq } from "../../../assets/style/layout/mq.styled"

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  background-color: ${clr1};
  border-radius: 10px;
  width: max-content;
  padding: 5px 0;
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`

export const SearchBtn = styled.button`
  height: 30px;
  width: 30px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  margin: 0 10px 0 14px;
`

export const SearchInput = styled.input`
  color: rgba(90, 90, 137, 0.5);
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  border: none;
  width: 369px;

  &::placeholder {
    opacity: 50%;
  }

  &:focus-visible {
    outline: none;

    &::placeholder {
      color: transparent;
    }
  }

  @media ${mq.min.xl} {
    width: 206px;
  }
`

export const SeparateLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${clr4};
  opacity: 50%;

  @media ${mq.max.xl} {
    display: none;
  }
`
