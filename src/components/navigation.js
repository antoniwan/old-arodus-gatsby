import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  ul {
    display: flex;
  }

  h1,
  h1 a {
    line-height: 1;
    font-size: 1.5rem;
    text-decoration: none;
  }

  ul {
    display: none;
  }

  li {
    margin-left: 12px;
    a {
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`
// hide the menu on mobile

const Navigation = () => {
  return (
    <StyledNavigation>
      <h1>
        <Link to="/">Antonio Rodriguez</Link>
      </h1>

      <ul>
        <li>
          <Link to="/skillset-tools">Skillset Tools</Link>
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
      </ul>
    </StyledNavigation>
  )
}

export default Navigation
