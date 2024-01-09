import styled from "styled-components"
import { clr1, clr6 } from "../../../assets/style/setup/variables"
import exitBtn from "../../../assets/icons/exit.svg"

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  top: 56px;
  z-index: 1;

  background-color: ${clr1};
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px #00000014;
  padding: 16px;
`

export const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${clr6};
  opacity: 0.8;
  text-transform: uppercase;
`

export const ButtonClear = styled.button`
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  color: ${clr6};
  opacity: 0.8;
  text-transform: uppercase;
  padding: 0;
  background-color: transparent;
  border: none;
`

export const LowerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const RecentSearchLine = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.p`
  font-size: 12px;
  letter-spacing: 0.10000000149011612px;
  color: ${clr6};
  opacity: 0.8;
  flex-grow: 1;
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
