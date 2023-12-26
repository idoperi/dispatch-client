import "./assets/scss/global.scss"
import { Route, HashRouter as Router, Routes } from "react-router-dom"
import { HomePage } from "./views/HomePage/HomePage"
import { AppHeader } from "./cmps//AppHeader/AppHeader"
import { useQueryClient } from "react-query"
import { articleService } from "./services/article.service"
import { MainLayout } from "./assets/style/basics/layout.styled"

function App() {
  const queryClient = useQueryClient()
  queryClient.setQueryData("filterBy", articleService.getEmptyArticleFilterBy())
  queryClient.setQueryData("isDisplaySearchModal", false)

  return (
    <Router>
      <MainLayout
        onClick={() => {
          queryClient.setQueryData("isDisplaySearchModal", false)
        }}
      >
        <AppHeader />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* <AppFooter/> */}
      </MainLayout>
    </Router>
  )
}

export default App
