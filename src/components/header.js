import React from "react"
import styled from "styled-components"

import Container from "./container"
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
  border-bottom: 2px solid black;

  h1 {
    margin-bottom: 0.25rem;
    color: white;
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 1);
  }
  h2 {
    font-size: 1.1rem;
    letter-spacing: 1px;
    color: white;
    margin-bottom: 1.25rem;
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.5);
  }
  p {
    color: white;
    margin-bottom: 1.25rem;
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
    h2 {
      font-size: 1.2rem;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Introduction />
      </Container>
    </StyledHeader>
  )
}

export default Header
