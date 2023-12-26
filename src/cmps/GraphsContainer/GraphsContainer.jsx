import { SourcesGraph } from "./SourcesGraph/SourcesGraph"
import { ContainerLayout } from "./styles"

export function GraphsContainer({ articles }) {
  return (
    <ContainerLayout>
      <SourcesGraph articles={articles} />
    </ContainerLayout>
  )
}
