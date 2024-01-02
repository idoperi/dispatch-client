import styled from "styled-components"
import { appHeaderHeight, clr7 } from "../../assets/style/setup/variables"
import { mq } from "../../assets/style/layout/mq.styled"

export const Logo = styled.img``

export const HeaderContainer = styled.header`
  background-color: ${clr7};
  height: ${appHeaderHeight};
  padding: 12px 0;

  display: flex;
  justify-content: space-between;

  ${Logo} {
    height: calc(${appHeaderHeight} - 24px);
  }

  @media ${mq.max.xxl} {
    padding: 12px 20px;
  }

  @media ${mq.min.xxl} {
    display: grid;
    grid-template-columns: 1fr 1440px 1fr;

    ${Logo} {
      /* grid-column: 1; */
      margin: 0 0 0 20px;
    }
  }
`
