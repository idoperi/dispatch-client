import styled from "styled-components"
import { clr1 } from "../../../assets/style/setup/variables"

export const GraphContainer = styled.div`
  background-color: ${clr1};
  border: 1px solid #d9dbe9;
  border-radius: 20px;

  min-height: 300px;
`

export const TopContainer = styled.div`
  padding: 25px 25px 0 25px;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #14142b;
  margin: 0 0 11px 0;
`

export const SeparateLine = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 2em;
  background-color: #5a5a89;
`
