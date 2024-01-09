import { DatesGraph } from "./DatesGraph/DatesGraph"
import { GraphContainer } from "./GraphContainer/GraphContainer"
import { SourcesGraph } from "./SourcesGraph/SourcesGraph"
import { ContainerLayout } from "./styles"

export const GraphsContainer = ({ articles }) => {
  return (
    <ContainerLayout>
      <GraphContainer title="Dates">
        <DatesGraph articles={articles} />
      </GraphContainer>
      <GraphContainer title="Sources">
        <SourcesGraph articles={articles} />
      </GraphContainer>
    </ContainerLayout>
  )
}
