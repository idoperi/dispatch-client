import styled from "styled-components"
import { clr6 } from "../setup/variables"
import { mq } from "../layout/mq.styled"

export const NoDataPlaceholder = styled.div<{ size: string }>`
  text-align: center;
  /* padding: 275px 0 0 0; */
  /* height: 100vh; */

  height: ${(props) => (props.size === "sm" ? "" : "100vh")};
  padding: ${(props) =>
    props.size === "sm" ? "45px 0 38px 0" : "135px 0 0 0"};

  @media ${mq.min.md} {
    padding: ${(props) =>
      props.size === "sm" ? "45px 0 38px 0" : "275px 0 0 0"};
  }
`

export const Text = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: ${clr6};
  margin: 16px 0 0 0;
`
