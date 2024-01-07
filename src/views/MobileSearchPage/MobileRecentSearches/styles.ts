import styled from "styled-components"
import { clr1 } from "../../../assets/style/setup/variables"
import exitBtn from "../../../assets/icons/exit.svg"

export const StyledRecentSearches = styled.div``

export const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`

export const Title = styled.h3`
  color: #5a5a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

export const ButtonClear = styled.button`
  color: #5a5a89;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.25px;
  border: none;
  text-transform: uppercase;
  background-color: #d9dbe9;
  padding: 4px 6px;
`

export const LowerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const RecentSearchLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  margin: 0 5px;
  padding: 0 11px;
`

export const Text = styled.p`
  color: #5a5a89;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  flex-grow: 1;
  margin: 0 0 20px 0;
  cursor: pointer;
`

export const ButtonRemove = styled.button`
  width: 16px;
  background-color: transparent;
  background-image: url(${exitBtn});
  background-repeat: no-repeat;
  background-position: right;
  border: none;
`
