import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import misc from "../libs/misc"

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
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    li {
      margin-left: 15px;
    }
    a {
      padding: 0;
      font-size: 1.6rem;
      line-height: 1;
      text-decoration: none;
      text-shadow: none;
      &:hover {
        color: var(--color-black);
      }
    }
  }
`

const Links = ({ isOpen, handleClick }) => {
  return (
    <StyledLinks isOpen={isOpen}>
      <li>
        <Link to="/about" onClick={handleClick}>
          About
        </Link>
      </li>
      <li>
        <Link to="/work" onClick={handleClick}>
          Work
        </Link>
      </li>
      <li>
        <Link to="/blog" onClick={handleClick}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={handleClick}>
          Contact
        </Link>
      </li>
    </StyledLinks>
  )
}

export default Links
