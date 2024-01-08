import styled from "styled-components"
import { mq } from "../../assets/style/layout/mq.styled"

export const StyledLoginPage = styled.section`
  grid-column: 1 / -1;

  height: 100vh;
  height: 100dvh;
  background-color: #f8f8ff;

  display: grid;
  grid-template-rows: 250px 1fr;

  @media ${mq.min.md} {
    grid-template-rows: 365px 1fr;
  }
  @media ${mq.min.xl} {
    grid-template-rows: unset;
    grid-template-columns: 4fr 6fr;
  }
`

export const HeroSection = styled.section`
  background-color: #262146;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 128px;
  }

  @media ${mq.min.md} {
    img {
      height: 178px;
    }
  }
  @media ${mq.min.xxl} {
    img {
      height: 278px;
    }
  }
`

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;
  gap: 24px;

  @media ${mq.min.xl} {
    justify-content: center;
    margin: 0 0 0 60px;
    width: 650px;
  }
  @media ${mq.min.xxl} {
    width: 715px;
  }
`

export const Title = styled.h1`
  color: #5a5a89;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.25px;
  font-size: 32px;

  @media ${mq.max.xl} {
    margin: 28px 0 0 0;
  }
  @media ${mq.min.md} {
    font-size: 42px;
  }
  @media ${mq.min.xxl} {
    font-size: 48px;
  }
`

export const Text = styled.p`
  color: #5a5a89;
  font-size: 22px;
  font-weight: 100;
  line-height: 50px; /* 138.889% */
  letter-spacing: 0.25px;
  padding-bottom: 0px;

  @media ${mq.max.xl} {
    flex-grow: 1;
  }
  @media ${mq.min.md} {
    font-size: 32px;
  }
  @media ${mq.min.xxl} {
    font-size: 36px;
  }
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
