import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMe from "../components/contactme"
import picture from "../images/profile-picture.jpg"

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
  }

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin-bottom: 3rem;
    border-radius: 5px;
    margin-top: 1rem;
    display: block;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 0;
      border-radius: 25px;
      height: 300px;
      width: 300px;
      margin-left: 0;
      margin-right: 0;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledAbout>
      <img
        src={picture}
        alt="Antonio Rodriguez, wearing a pink dress shirt and horn-rimmed glasses and a smile."
      />
      <p>
        Hello! My name is Antonio, and I enjoy building things for the web as a
        software engineer or as a team leader and mentor. Some years ago, a
        friend and I founded a software development company and later sold it.
        Aside from work, I love being a dad, and I wish I would{" "}
        <a
          href="https://abunchofideas.com/?utm_source=website&utm_medium=link&utm_campaign=arodus"
          target="_blank"
          rel="noopener noreferrer"
        >
          write more
        </a>
        . Cooking, playing basketball, shredding on my guitar and maintaining a
        healthy lifestyle are my favorite hobbies.
      </p>
      <ContactMe />
    </StyledAbout>
  </Layout>
)

export default IndexPage
