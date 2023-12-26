import styled from "styled-components"

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1024px 1fr;

  & > * {
    grid-column: 2;
  }

  & > .full {
    grid-column: 1 / -1;
  }

  background-color: #f8f8ff;
`
