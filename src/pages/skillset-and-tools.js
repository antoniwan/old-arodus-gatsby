import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Toolbox from "../components/toolbox"
import ContactMe from "../components/contactme"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />

    <Toolbox />
    <ContactMe />
  </Layout>
)

export default IndexPage
