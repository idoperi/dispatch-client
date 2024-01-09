import {
  Button,
  HeroSection,
  SeparateLine,
  StyledLoginPage,
  Text,
  Title,
  WelcomeContainer,
} from "./styles"
import logoSvg from "../../assets/icons/logo.svg"
import arrowSvg from "../../assets/icons/arrow.svg"
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export function LoginPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <StyledLoginPage>
      <HeroSection>
        <img src={logoSvg} alt="" />
      </HeroSection>

      <WelcomeContainer>
        <Title>Welcome to Dispatcher</Title>
        <Text>
          Locate articles and breaking news headlines from news sources and
          blogs across the web
        </Text>
        <SeparateLine></SeparateLine>
        <Button
          onClick={() =>
            loginWithRedirect({
              redirect_uri: `${window.location.origin}/#/feed`,
            })
          }
        >
          <p>Continue</p>
          <img src={arrowSvg} alt="" />
        </Button>
      </WelcomeContainer>
    </StyledLoginPage>
  )
}
