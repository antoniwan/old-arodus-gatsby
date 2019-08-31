import React from "react"
import styled from "styled-components"

import Container from "./container"
import Navigation from "./navigation"

const StyledHeader = styled.header`
  background: linear-gradient(
    68.9deg,
    rgba(144, 60, 240, 1) 46.3%,
    rgba(235, 88, 84, 1) 94.8%
  );
  background-size: 500% 500%;
  animation: AnimateBGGradient 10s ease infinite;
  border-bottom: 1px solid var(--color-black);
`

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Navigation />
      </Container>
    </StyledHeader>
  )
}

export default Header
