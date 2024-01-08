import { HeaderContainer, Logo } from "./styles"
import logo from "../../assets/icons/logo.svg"
import { SearchBar } from "./SearchBar/SearchBar"

export function AppHeader() {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      <SearchBar />
      <div></div>
    </HeaderContainer>
  )
}
