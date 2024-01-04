import styled from "styled-components"

export const StylesFilterDates = styled.div`
  background-color: #fff;

  & > :not(:first-child) {
    padding-bottom: 10px;
  }
`

export const Title = styled.h3`
  color: #5a5a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

export const BackButton = styled.button`
  padding: 0;
  height: 24px;
  border: none;
  background-color: transparent;
`

export const Label = styled.p`
  height: 44px;
  color: #5a5a89;
  font-size: 14px;
  line-height: 22px; /* 157.143% */
  letter-spacing: 0.25px;
  display: flex;
  align-items: center;
`
