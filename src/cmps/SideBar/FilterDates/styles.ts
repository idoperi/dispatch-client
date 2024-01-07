import styled from "styled-components"
import { clr6 } from "../../../assets/style/setup/variables"

export const StylesFilterDates = styled.div`
  background-color: #fff;

  & > :not(:first-child) {
    padding-bottom: 10px;
  }
`

export const Title = styled.h3`
  color: ${clr6};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

export const BackButton = styled.button`
  padding: 0;
  height: 24px;
  border: none;
  background-color: transparent;
`

export const Label = styled.p`
  height: 44px;
  color: ${clr6};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  display: flex;
  align-items: center;
`
