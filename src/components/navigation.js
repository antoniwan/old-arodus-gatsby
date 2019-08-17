import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import icon from "../images/arod-icon.png"
const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 60px;

  ul {
    display: flex;
  }

  h1,
  h1 a {
    line-height: 1;
    font-size: 1.8rem;
    text-decoration: none;
  }
  h1 img {
    height: 35px;
  }

  nav {
    display: none;
  }

  li {
    margin-left: 12px;
    a {
      font-size: 1.2rem;
      line-height: 1;
    }
  }

  @media (min-width: 1024px) {
    h1,
    h1 a {
      font-size: 3rem;
    }

    nav {
      display: block;
      ul {
        li, li a {
            text-decoration: none;
            font-size: 1.6rem;
            line-height: 1;
          }
        }
      }
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

      <nav>
        <ul>
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
        </ul>
      </nav>
    </StyledNavigation>
  )
}

export default Navigation
