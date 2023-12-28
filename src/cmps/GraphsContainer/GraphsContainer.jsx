import { GraphContainer } from "./GraphContainer/GraphContainer"
import { SourcesGraph } from "./SourcesGraph/SourcesGraph"
import { ContainerLayout } from "./styles"

export function GraphsContainer({ articles }) {
  return (
    <ContainerLayout>
      <GraphContainer title="Sources">
        <SourcesGraph articles={articles} />
      </GraphContainer>
    </ContainerLayout>
  )
}
