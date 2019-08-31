import React, { useState } from "react"
import styled from "styled-components"

import Logo from "../components/logo"
import BurgerMenuIcon from "../components/burgermenuicon"
import Links from "../components/Links"

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 60px;

  nav {
    display: none;
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }

    nav {
      display: block;
      position: initial;

      &.is-open {
        top: initial;
        left: initial;
        width: initial;
      }
    }
  }
`

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <StyledNavigation>
      <Logo />

      <BurgerMenuIcon
        isOpen={isOpen}
        handleClick={() => {
          console.log("->", isOpen)
          setIsOpen(!isOpen)
        }}
      />

      <nav className={isOpen ? "is-open" : ""}>
        <Links />
      </nav>
    </StyledNavigation>
  )
}

export default Navigation
