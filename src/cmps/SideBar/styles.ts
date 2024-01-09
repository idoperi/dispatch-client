import styled, { css } from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"

export const Backdrop = styled.div`
  transition: all 200ms;
  background-color: rgba(48, 48, 50, 0.7);
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  transition: all 400ms ease-out;
  width: 300px;
  background-color: #f8f8ff;

  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  display: grid;
  grid-template-rows: 1fr auto;

  & > :first-child > * {
    border-bottom: 1px solid rgba(217, 219, 233, 0.5);
    padding: 0 16px;
  }

  @media ${mq.min.md} {
    width: 368px;

    & > :first-child > * {
      padding: 0 20px;
    }
  }
`

export const StyledSideBar = styled.div<{
  open?: boolean
}>`
  width: 100%;
  height: 100%;

  @media ${mq.max.xl} {
    position: fixed;
    z-index: 1;
    top: 0;

    ${({ open }) =>
      open
        ? css`
            transition: transform;
            transform: translate(0);
          `
        : css`
            transition: transform;
            transition-delay: 400ms;
            transform: translate(100%);

            ${Backdrop} {
              opacity: 0;
            }

            ${Container} {
              transform: translate(150%);
            }
          `}
  }
  @media ${mq.min.xl} {
    display: none;
  }
`

export const ButtonBottom = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #fff;

  background-color: #0058b9;
  padding: 10px 30px;
  width: max-content;
  border-radius: 20px;
  margin: 20px auto;
  border: none;
`

export const SideBarHeaderContainer = styled.div`
  height: 74px;

  display: flex;
  align-items: center;
  gap: 15px;
`
