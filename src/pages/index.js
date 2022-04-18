import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import picture from "../images/profile-picture.jpg"
import picture2x from "../images/profile-picture-2x.jpg"
import SocialIcons from "../components/socialicons"

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
    border-radius: 300px;
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 0;
      border-radius: 300px;
      height: 300px;
      width: 300px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledAbout>
      <img
        srcSet={`${picture} 1x, ${picture2x} 2x`}
        alt="Antonio Rodriguez, wearing a pink dress shirt and horn-rimmed glasses and a smile."
      />
      <p>
        Hello! My name is Antonio, and I enjoy building software and web
        applications. Some years ago, a friend and I founded a web development
        company and later sold it. The experience was more educational than
        lucrative.
      </p>
      <p>
        Aside from work, I love being a dad, and I wish I would write more.
        Cooking for my family, playing basketball, recording guitar songs, and
        maintaining a healthy lifestyle through exercise, mental health therapy,
        and nutritive food are currently my favorite hobbies.
      </p>

      <p>Thanks for visiting!</p>
      <SocialIcons />
    </StyledAbout>
  </Layout>
)

export default IndexPage
