import React from "react"
import PropTypes from "prop-types"

import Container from "./container"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
