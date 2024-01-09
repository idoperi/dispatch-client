import React from "react"
import {
  SeparateLine,
  StyledGraphContainer,
  Title,
  TopContainer,
} from "./styles"

interface GraphContainerProps {
  title: string
  children: React.ReactNode
}

export const GraphContainer = ({ title, children }: GraphContainerProps) => {
  return (
    <StyledGraphContainer>
      <TopContainer>
        <Title>{title}</Title>
        <SeparateLine />
      </TopContainer>

      {children}
    </StyledGraphContainer>
  )
}
