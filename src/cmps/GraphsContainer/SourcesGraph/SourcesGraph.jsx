import { GraphContainer, SeparateLine, Title, TopContainer } from "./styles"
import { Doughnut } from "react-chartjs-2"

export function SourcesGraph() {
  return (
    <GraphContainer>
      <TopContainer>
        <Title>Sources</Title>
        <SeparateLine />
      </TopContainer>

      <Doughnut />
    </GraphContainer>
  )
}
