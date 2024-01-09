import styled from "styled-components"
import { clr1 } from "../../../assets/style/setup/variables"

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
  padding: 0 15px;
  margin: 15px 0;
  /* padding: 15px; */
  display: grid;
  gap: 11px;

  max-height: 113px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
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
