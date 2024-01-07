import { ActionsContainer, HeaderContainer, Logo } from "./styles"
import logo from "../../assets/icons/logo.svg"
import searchSvg from "../../assets/icons/search.svg"
import { SearchBar } from "./SearchBar/SearchBar"
import { NavLink } from "react-router-dom"

export function AppHeader() {
  return (
    <HeaderContainer>
      <Logo src={logo} />

      <SearchBar />

      <ActionsContainer>
        <NavLink to="/search">
          <img src={searchSvg} alt="" />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
