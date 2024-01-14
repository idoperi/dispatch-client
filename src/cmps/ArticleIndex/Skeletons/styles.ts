import styled from "styled-components"
import { mq } from "../../../assets/style/layout/mq.styled"

export const SkeletonsContainer = styled.div`
  display: grid;
  gap: 20px;

  padding-top: 20px;
  height: 100%;
  overflow-y: hidden;
`

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mq.min.md} {
    flex-direction: row;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 250px;

  @media ${mq.max.md} {
    & .desktop {
      display: none;
    }
  }

  @media ${mq.min.md} {
    width: 244px;
    & .mobile {
      display: none;
    }
  }
`

export const RowsContainer = styled.div`
  padding: 0 20px;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  height: 250px;

  @media ${mq.min.md} {
    border-radius: 0 20px 20px 0;
  }
`
