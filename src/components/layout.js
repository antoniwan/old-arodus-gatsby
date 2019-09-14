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

  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }
  p {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .main-body-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    height: 100%;
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
