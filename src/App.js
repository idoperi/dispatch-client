import "./assets/scss/global.scss"

import { Route, HashRouter as Router, Routes } from "react-router-dom"
import { HomePage } from "./views/HomePage/HomePage"
import { AppHeader } from "./cmps//AppHeader/AppHeader"
import { useQueryClient } from "react-query"
import { articleService } from "./services/article.service"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js"
import { MainContainer } from "./styles"
import { MobileSearch } from "./views/MobileSearchPage/MobileSearchPage"
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
)

function App() {
  const queryClient = useQueryClient()
  queryClient.setQueryData("filterBy", articleService.getEmptyArticleFilterBy())
  queryClient.setQueryData("isDisplaySearchModal", false)
  queryClient.setQueryData("isDisplaySideFilter", false)

  return (
    <Router>
      <AppHeader />
      <MainContainer
        onClick={() => {
          queryClient.setQueryData("isDisplaySearchModal", false)
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<MobileSearch />} />
        </Routes>

        {/* <AppFooter/> */}
      </MainContainer>
    </Router>
  )
}

export default App
