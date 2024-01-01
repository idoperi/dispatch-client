import "./assets/scss/global.scss"

import { Route, HashRouter as Router, Routes } from "react-router-dom"
import { HomePage } from "./views/HomePage/HomePage"
import { AppHeader } from "./cmps//AppHeader/AppHeader"
import { useQueryClient } from "react-query"
import { articleService } from "./services/article.service"
import { MainLayout } from "./assets/style/basics/layout.styled"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
ChartJS.register(ArcElement, Tooltip, Legend)

function App() {
  const queryClient = useQueryClient()
  queryClient.setQueryData("filterBy", articleService.getEmptyArticleFilterBy())
  queryClient.setQueryData("isDisplaySearchModal", false)

  return (
    <Router>
      <AppHeader />
      <MainLayout
        onClick={() => {
          queryClient.setQueryData("isDisplaySearchModal", false)
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* <AppFooter/> */}
      </MainLayout>
    </Router>
  )
}

export default App
