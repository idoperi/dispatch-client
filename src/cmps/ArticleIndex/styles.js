import styled from "styled-components"

export const StyledArticleIndex = styled.section`
  /* height: 100%; */
  height: calc(100% - 93px);

  display: grid;
  grid-template-columns: 1014px 412px;
  grid-template-rows: auto 1fr;
  column-gap: 16px;
`

export const LandingTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: 262146;
  grid-column: 1 / -1;
  padding: 20px 0;
`

export const ResultsLabel = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #5a5a89;
  opacity: 0.5;
  grid-column: 1 / -1;
  padding: 8px 0 15px 0;
`
