import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "./container"
import Pillar from "./pillar"

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;

  p {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .main-body-content {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;

    .main-body-content {
      margin-top: 4rem;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Pillar />

      <main className="main-body-content">
        <Container>{children}</Container>
      </main>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
