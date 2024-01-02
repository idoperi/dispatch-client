import styled, { css } from "styled-components"
import { mq } from "./mq.styled"

export const Full = css`
  grid-column: 1 / -1;
`

export const MainLayout = css`
  display: grid;
  grid-template-columns: 20px 1fr 20px;

  & > * {
    grid-column: 2;
  }

  @media ${mq.min.xl} {
    grid-template-columns: 1fr 1024px 1fr;
  }

  @media ${mq.min.xxl} {
    grid-template-columns: 1fr 1440px 1fr;
  }
`
