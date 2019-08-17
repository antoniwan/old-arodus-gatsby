import React from "react"
import styled from "styled-components"

import Container from "./container"
import Navigation from "./navigation"
import Introduction from "./introduction"

const StyledHeader = styled.header`
  background: linear-gradient(
    68.9deg,
    rgba(144, 60, 240, 1) 46.3%,
    rgba(235, 88, 84, 1) 94.8%
  );
  background-size: 500% 500%;
  animation: AnimateBGGradient 10s ease infinite;
  margin-bottom: 3rem;
  border-bottom: 4px solid black;

  h1 {
    color: white;
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 1);
  }
  h2 {
    letter-spacing: 1px;
    color: white;
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.5);
  }
  p {
    color: white;
  }
  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: white;
  }

  @keyframes AnimateBGGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (min-width: 1024px) {
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Navigation />
        <Introduction />
      </Container>
    </StyledHeader>
  )
}

export default Header
