import {
  ActionsContainer,
  HeaderContainer,
  Logo,
  SignOutButton,
  UserContainer,
} from "./styles"
import logo from "../../assets/icons/logo.svg"
import searchSvg from "../../assets/icons/search.svg"
import { SearchBar } from "./SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import ContentLoader, { rect } from "react-content-loader"
import { useState } from "react"

export const AppHeader = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0()

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
  }

  const [isDisplayLogout, setIsDisplayLogout] = useState(false)

  const handleToggle = () => {
    setIsDisplayLogout((prevIsDisplayLogout) => !prevIsDisplayLogout)
  }

  return (
    <HeaderContainer>
      <Logo src={logo} />

      <SearchBar />

      <ActionsContainer>
        <NavLink to="/search">
          <img src={searchSvg} alt="" />
        </NavLink>

        <UserContainer onClick={handleToggle}>
          {isAuthenticated && user && (
            <img src={user.picture} alt={user.name} />
          )}
          {(!user || isLoading) && <Loader />}
          {isDisplayLogout && (
            <SignOutButton onClick={handleLogout}>Sign Out</SignOutButton>
          )}
        </UserContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}

const Loader = () => {
  return (
    <ContentLoader
      height={"100%"}
      speed={2}
      backgroundColor={"#ffffff"}
      foregroundColor={"#5a5a89"}
      viewBox="0 0 100 100"
    >
      <rect x="0" y="0" rx="50" ry="50" width="100" height="100" />
    </ContentLoader>
  )
}
