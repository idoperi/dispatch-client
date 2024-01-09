import styled from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"
import { clr6 } from "../../assets/style/setup/variables"
import { em } from "../../assets/style/setup/functions.styled"

export const StyledArticleIndex = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;

  overflow-y: hidden;

  @media ${mq.min.xxl} {
    grid-template-columns: 1014px 412px;
    /* column-gap: 14px; */
    column-gap: ${em(14)};
  }
`

export const LandingTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: 262146;
  grid-column: 1 / -1;
  padding: 12px 0;

  @media ${mq.min.xl} {
    padding: 20px 0;
  }
`

export const ResultsLabel = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: ${clr6};
  opacity: 0.5;
  grid-column: 1 / -1;
  padding: 8px 0 15px 0;
`
