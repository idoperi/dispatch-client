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

export function LoginPage() {
  const navigate = useNavigate()
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
        <Button onClick={() => navigate("/feed")}>
          <p>Continue</p>
          <img src={arrowSvg} alt="" />
        </Button>
      </WelcomeContainer>
    </StyledLoginPage>
  )
}
