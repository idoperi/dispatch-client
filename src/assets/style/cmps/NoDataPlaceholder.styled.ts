import styled from "styled-components"

export const NoDataPlaceholder = styled.div<{ size: string }>`
  text-align: center;
  padding: 275px 0 0 0;

  padding: ${(props) =>
    props.size === "sm" ? "45px 0 38px 0" : "275px 0 0 0"};
`

export const Text = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: #5a5a89;
  margin: 16px 0 0 0;
`
