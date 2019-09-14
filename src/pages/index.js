import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMe from "../components/contactme"
import picture from "../images/profile-picture.jpg"

const StyledAbout = styled.div`
  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin-bottom: 3rem;
    margin-top: 4rem;
    border-radius: 25px;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 0;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledAbout>
      <img src={picture} alt="" />
      <p>
        Hello! My name is Antonio and I enjoy building things for the web. Some
        years ago, a friend and I founded a company and later sold it. I love
        being a dad and I wish I'd write more.
      </p>
      <ContactMe />
    </StyledAbout>
  </Layout>
)

export default IndexPage
