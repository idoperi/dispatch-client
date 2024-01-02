import styled, { css } from "styled-components"
import { mq } from "./mq.styled"

export const Full = css`
  grid-column: 1 / -1;
`

export const MainLayout = css`
  display: grid;
  grid-template-columns: 1fr 1440px 1fr;

  & > * {
    grid-column: 2;
  }
`
