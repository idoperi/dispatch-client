import styled from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"

export const StyledFilterHeader = styled.div`
  height: 44px;
  background-color: #fff;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${mq.min.xl} {
    display: none;
  }
`

export const ButtonToggleFilter = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 8px;

  display: flex;
  align-items: center;
`
