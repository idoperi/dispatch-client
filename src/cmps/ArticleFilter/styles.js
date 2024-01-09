import styled from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"

export const FilterTargets = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  padding: 20px 0 0 0;
  grid-auto-columns: min-content;

  @media ${mq.max.xl} {
    display: none;
  }
`
