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
    position: absolute;
    transition: all 0.2s;

    &.is-open {
      display: block;
      opacity: 1;
      top: 61px;
      left: 0;
      width: 100%;
      background: var(--color-black);
    }
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }

    nav {
      display: block;
      position: initial;
      background: transparent;
      opacity: 1;
      visibility: initial;

      &.is-open {
        opacity: 1;
        display: block;
        top: initial;
        left: initial;
        width: initial;
        position: inherit;
        background: transparent;
      }
    }
  }
`

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledNavigation>
      <Logo handleClick={handleClick} />

      <BurgerMenuIcon isOpen={isOpen} handleClick={toggleMenu} />

      <nav className={isOpen ? "is-open" : ""}>
        <Links isOpen={isOpen} handleClick={handleClick} />
      </nav>
    </StyledNavigation>
  )
}

export default Navigation
