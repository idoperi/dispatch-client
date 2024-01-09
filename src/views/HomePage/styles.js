import styled from "styled-components"
import { Full, MainLayout } from "../../assets/style/layout/layout.styled"
import { mq } from "../../assets/style/layout/mq.styled"

export const HomePageSection = styled.section`
  ${MainLayout}
  height: calc(100vh - 74px);
  height: calc(100dvh - 74px);
`

export const SeparateLine = styled.div`
  height: 21px;
  opacity: 0.5;

  border-bottom: 1px solid #d9dbe9;

  @media ${mq.max.xl} {
    display: none;
  }
`
