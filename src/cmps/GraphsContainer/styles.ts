import styled from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"

export const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${mq.max.xxl} {
    display: none;
  }
`
