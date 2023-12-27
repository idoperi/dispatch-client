import styled from "styled-components"
import { clr1, clr5, clr5Hover } from "../setup/variables"

export const Button = styled.button<{
  $primary?: boolean
  $secondary?: boolean
}>`
  display: flex;
  gap: 8px;
  align-items: center;

  background-color: ${(props) => {
    if (props.$primary) return "#0058B9"
    else if (props.$secondary) return "#D9DBE9"
    else return "#ffffff"
  }};

  color: ${({ $primary }) => ($primary ? "#ffffff" : "#5A5A89")};

  height: 36px;
  padding: 0px 20px;
  border-radius: 2em;
  /* color: ${clr1}; */
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`
