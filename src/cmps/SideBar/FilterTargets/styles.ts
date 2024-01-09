import styled from "styled-components"
import { clr6, clr9 } from "../../../assets/style/setup/variables"

export const StyledFilterTargets = styled.div`
  background-color: #fff;
`

export const Title = styled.h2`
  color: ${clr6};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

export const OptionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  height: 44px;
`

export const Name = styled.p`
  color: ${clr6};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
`

export const Value = styled.p`
  color: ${clr9};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;
`
