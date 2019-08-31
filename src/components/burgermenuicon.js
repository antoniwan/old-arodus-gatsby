import React from "react"
import styled from "styled-components"

const StyledBurgerMenuIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 6px;

  .burger-icon {
    z-index: 1;
    user-select: none;

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: var(--color-white);
      border-radius: 3px;
      z-index: 1;
      transform-origin: center center;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
  }

  &.is-open {
    span {
      background: black;
      opacity: 1;
      transform: rotate(45deg);
      background: #232323;
    }
    span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg);
    }
    span:nth-last-child(2) {
      transform: rotate(-45deg);
    }
    span:nth-last-child(1) {
      transform: rotate(45deg) translate(-7px, -6px);
    }
  }
`

const BurgerMenuIcon = ({ isOpen, handleClick }) => {
  return (
    <StyledBurgerMenuIcon
      className={isOpen ? "is-open" : ""}
      onClick={handleClick}
    >
      <div className="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledBurgerMenuIcon>
  )
}

export default BurgerMenuIcon
