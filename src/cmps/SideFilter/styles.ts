import styled, { css } from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"

export const Cover = styled.div`
  transition: all 200ms;
  background-color: rgba(48, 48, 50, 0.7);
  height: 100%;
  width: 100%;
`

export const FilterContainer = styled.div`
  transition: all 400ms ease-out;
  width: 300px;
  background-color: #fff;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  & > * {
    padding: 0 16px;
    border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  }

  @media ${mq.min.md} {
    width: 368px;

    & > * {
      padding: 0 20px;
    }
  }
`

export const Title = styled.h2`
  color: #5a5a89;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.25px;
  height: 74px;

  display: flex;
  align-items: center;
`

export const StyledSideFilter = styled.div<{
  isOpen?: boolean
}>`
  width: 100%;
  height: 100%;

  @media ${mq.max.xl} {
    position: absolute;
    z-index: 1;
    top: 0;

    ${({ isOpen }) =>
      isOpen
        ? css`
            transition: transform;
            transform: translate(0);
          `
        : css`
            transition: transform;
            transition-delay: 400ms;
            transform: translate(100%);

            ${Cover} {
              opacity: 0;
            }

            ${FilterContainer} {
              transform: translate(150%);
            }
          `}
  }
  @media ${mq.min.xl} {
    display: none;
  }
`
