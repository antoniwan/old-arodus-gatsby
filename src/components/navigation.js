import React, { useState } from "react"
import styled from "styled-components"

import misc from "../libs/misc"
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

  .mobile-menu {
    position: absolute;
    top: 61px;
    left: 0;
    width: 100%;
  }

  .desktop-menu {
    display: none;
  }

  .links-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    background: var(--color-black);
    ${misc.black_food_background_css_string}

    &.is-open {
      max-height: 600px;
    }
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }

    .mobile-menu {
      display: none;
    }
    .desktop-menu {
      display: block;
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

      <nav className={`mobile-menu  ${isOpen ? "is-open" : ""}`}>
        <div className={`${isOpen ? "is-open" : ""} links-wrapper`}>
          <Links isOpen={isOpen} handleClick={handleClick} />
        </div>
      </nav>

      <nav className={`desktop-menu  ${isOpen ? "is-open" : ""}`}>
        <Links isOpen={isOpen} handleClick={handleClick} />
      </nav>
    </StyledNavigation>
  )
}

export default Navigation
