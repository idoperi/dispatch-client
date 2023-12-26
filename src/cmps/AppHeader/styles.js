import styled from "styled-components"
import { appHeaderHeight, clr7 } from "../../assets/style/setup/variables"

export const HeaderContainer = styled.header`
  background-color: ${clr7};
  height: ${appHeaderHeight};
  padding: 12px 0;
`

export const Logo = styled.img`
  grid-column: 1;
  height: calc(${appHeaderHeight} - 24px);
  margin: 0 0 0 20px;
`
