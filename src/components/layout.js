import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "./container"
import Header from "./header"
import Footer from "./footer"

const StyledLayout = styled.div`
  img {
    max-height: 300px;
    width: 100%;
    object-fit: cover;
  }

  .full-width {
    margin-left: calc(-100vw / 2 + calc(var(--max-container-width)) / 2);
    margin-right: calc(-100vw / 2 + calc(var(--max-container-width)) / 2);
  }

  @keyframes AnimateBGGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
