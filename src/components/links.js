import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  transition: all 0.2s ease;

  li {
  }

  a {
    display: block;
    padding: 2rem;
    color: var(--color-white);
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 1);
    font-size: 2rem;
    text-decoration: none;
    font-weight: 100;

    &:hover {
      color: var(--color-purple);
    }

    &.active {
      font-weight: bold;
      border-left: 4px solid var(--color-pink);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    padding-bottom: 0;

    li {
      margin-top: 1rem;
    }
    a {
      padding: 0;
      padding-right: 1rem;

      font-size: 2rem;
      line-height: 1;
      text-decoration: none;
      text-shadow: none;
      text-align: center;
      &:hover {
        color: var(--color-black);
      }

      &.active {
        font-weight: normal;
        border-bottom: none;
        border: none;
        color: var(--color-pink);
        transition: all 0.2s;
      }
    }
  }
`

const Links = ({ isOpen, handleClick }) => {
  return (
    <StyledLinks isOpen={isOpen}>
      <li>
        <Link to="/" onClick={handleClick} activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link
          to="/skillset-and-tools"
          onClick={handleClick}
          activeClassName="active"
        >
          Skillsets & Tools
        </Link>
      </li>
      <li>
        <Link to="/work" onClick={handleClick} activeClassName="active">
          Work
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={handleClick} activeClassName="active">
          Blog
        </Link>
      </li>
    </StyledLinks>
  )
}

export default Links
