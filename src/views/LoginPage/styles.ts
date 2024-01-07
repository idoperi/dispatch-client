import styled from "styled-components"

export const StyledLoginPage = styled.section`
  grid-column: 1 / -1;

  height: 100vh;
  height: 100dvh;
  background-color: #f8f8ff;

  display: grid;
  grid-template-columns: 4fr 6fr;
`

export const HeroSection = styled.section`
  background-color: #262146;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 278px;
  }
`

export const WelcomeContainer = styled.div`
  width: 715px;
  margin: 0 0 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`
export const Title = styled.h1`
  color: #5a5a89;
  font-size: 48px;
  font-weight: 300;
  line-height: 22px; /* 45.833% */
  letter-spacing: 0.25px;
`
export const Text = styled.p`
  color: #5a5a89;
  font-size: 36px;
  font-weight: 100;
  line-height: 50px; /* 138.889% */
  letter-spacing: 0.25px;
  padding-bottom: 0cap;
`

export const SeparateLine = styled.div`
  height: 1px;
  opacity: 0.5;
  background-color: #d9dbe9;
`

export const Button = styled.button`
  border: none;
  background-color: #0058b9;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  padding: 5px 0;
  border-radius: 10px;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
