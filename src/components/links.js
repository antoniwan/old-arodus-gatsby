import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLinks = styled.ul`
  display: flex;

  ul {
    display: flex;
    flex-direction: column;
    background: black;
    height: auto;
    max-height: 100%;
  }

  a {
    color: var(--color-white);
    &:hover {
      color: var(--color-black);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    li {
      margin-left: 15px;
    }
    a {
      font-size: 1.6rem;
      line-height: 1;
      text-decoration: none;
    }
  }
`

const Links = () => {
  return (
    <StyledLinks>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </StyledLinks>
  )
}

export default Links
