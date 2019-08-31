import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMe from "../components/contactme"

const StyledWork = styled.div`
  padding-top: 2rem;
  height: 80vh;
`

const WorkPage = () => (
  <Layout>
    <SEO title="This work page is under construction" />
    <StyledWork>
      <h2>
        This page is <strong>under construction</strong>.
      </h2>
    </StyledWork>
  </Layout>
)

export default WorkPage
