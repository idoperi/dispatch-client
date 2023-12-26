import styled from "styled-components"
import { clr1 } from "../../../assets/style/setup/variables"

export const GraphContainer = styled.div`
  background-color: ${clr1};
  border: 1px solid #d9dbe9;
  border-radius: 20px;
  padding: 25px;
`

export const TopContainer = styled.div``

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

export const DoughnutContainer = styled.div`
  width: 124px;
  height: 124px;
  margin: 8px auto;
  position: relative;
`

export const DoughnutTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Mulish;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.10000000149011612px;
  color: #030035;
`

export const LabelList = styled.ul`
  padding: 15px;
  display: grid;
  gap: 11px;
`

export const LabelPreview = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;

  .dot {
    height: 5px;
    width: 5px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  }

  .label-name {
    flex-grow: 1;
    font-family: Mulish;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    color: #030035;
  }

  .percentages {
    font-family: Mulish;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.30000001192092896px;
    color: #9fa2b4;
  }
`
