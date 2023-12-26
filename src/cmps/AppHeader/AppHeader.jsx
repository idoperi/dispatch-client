import { HeaderContainer, Logo } from "./styles"
import logo from "../../assets/icons/logo.svg"
import { SearchBar } from "./SearchBar/SearchBar"

export function AppHeader() {
  return (
    <HeaderContainer className="full main-layout">
      <Logo src={logo} />
      <SearchBar />
    </HeaderContainer>
  )
}
