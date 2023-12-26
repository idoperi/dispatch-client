import { SourcesGraph } from "./SourcesGraph/SourcesGraph"
import { StyledContainer } from "./styles"

export function GraphsContainer({ articles }) {
  console.log("articles: ", articles)
  return (
    <StyledContainer>
      <SourcesGraph />
    </StyledContainer>
  )
}
