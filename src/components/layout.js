import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "./container"
import Pillar from "./pillar"
import Footer from "./footer"

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;

  @media (min-width: 1024px) {
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
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
      <Pillar />
      <Container>
        <main className="main-body-content">{children}</main>
      </Container>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
