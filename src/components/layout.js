import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "./container"
import Header from "./header"
import Footer from "./footer"

const StyledLayout = styled.div`
  p {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .main-body-content {
    min-height: calc(100vh - 61px - 51px - 2rem);
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>
        <main className="main-body-content">{children}</main>
      </Container>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
