import styled from "styled-components"
import { appHeaderHeight, clr6, clr7 } from "../../assets/style/setup/variables"
import { mq } from "../../assets/style/layout/mq.styled"
import { em } from "../../assets/style/setup/functions.styled"

export const Logo = styled.img``

export const HeaderContainer = styled.header`
  background-color: ${clr7};
  height: ${appHeaderHeight};
  padding: 12px 16px;

  position: relative;

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
  justify-self: end;

  @media ${mq.min.md} {
    a {
      display: none;
    }
  }
  @media ${mq.min.xl} {
    position: absolute;
    padding: ${em(12)} ${em(20)};
  }
`

export const UserContainer = styled.div`
  min-width: 50px;
  height: 100%;
  cursor: pointer;

  position: relative;

  img {
    border-radius: 50%;
    height: 100%;
    max-width: unset;
  }
`

export const SignOutButton = styled.button`
  width: ${em(95, 12)};
  height: ${em(32, 12)};
  border-radius: 10px;
  color: ${clr6};
  font-family: Mulish;
  font-size: ${em(12, 16)};
  line-height: ${em(12, 12)};
  letter-spacing: 0.1px;
  padding: 0 ${em(8)};
  text-align: start;
  border: none;
  background-color: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

  position: absolute;
  bottom: -7px;
  right: 0;
  transform: translate(0, 100%);
`
