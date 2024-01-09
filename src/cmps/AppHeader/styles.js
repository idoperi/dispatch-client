import styled from "styled-components"
import { appHeaderHeight, clr7 } from "../../assets/style/setup/variables"
import { mq } from "../../assets/style/layout/mq.styled"

export const Logo = styled.img``

export const HeaderContainer = styled.header`
  background-color: ${clr7};
  height: ${appHeaderHeight};
  padding: 12px 16px;

  ${Logo} {
    height: calc(${appHeaderHeight} - 24px);
  }

  @media ${mq.min.md} {
    padding: 12px 20px;
  }

  @media ${mq.max.xl} {
    display: flex;
    justify-content: space-between;
  }

  @media ${mq.min.xl} {
    display: grid;
    grid-template-columns: 1fr 1024px 1fr;
  }

  @media ${mq.min.xxl} {
    grid-template-columns: 1fr 1440px 1fr;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 12px;

  @media ${mq.min.md} {
    a {
      display: none;
    }
  }
`
