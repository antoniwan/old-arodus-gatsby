import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLogo = styled.h1`
  color: white;
  text-shadow: 1px 2px 0px rgba(0, 0, 0, 1);
  line-height: 1;

  a {
    line-height: 1;
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--color-white);
  }

  @media (min-width: 1024px) {
    font-size: 3rem;

    a {
      font-size: 3rem;
    }
  }
`
const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">Antonio Rodriguez</Link>
    </StyledLogo>
  )
}

export default Logo
