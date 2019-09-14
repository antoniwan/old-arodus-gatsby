import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMe from "../components/contactme"
import picture from "../images/photo-wgino.jpg"

const StyledAbout = styled.div`
  img {
    height: 300px;
    object-fit: cover;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    img {
      height: 400px;
      object-position: center -280px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledAbout>
      <p>
        I enjoy building things. Some years ago, a friend and I founded a
        company and sold it. I love being a dad and I wish I'd write more.
      </p>
      <ContactMe />
    </StyledAbout>
  </Layout>
)

export default IndexPage
