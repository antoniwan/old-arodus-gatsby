import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import picture from "../images/profile-picture.jpg"
import SocialIcons from "../components/socialicons"

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    text-align: left;
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
        Hello! My name is Antonio, and I enjoy building software and web
        applications. Some years ago, a friend and I founded a software
        development company and later sold it. The experience was more
        educational than lucrative.
      </p>
      <p>
        Aside from work, I love being a dad, and I wish I would{" "}
        <a
          href="https://abunchofideas.com/?utm_source=website&utm_medium=link&utm_campaign=arodus"
          target="_blank"
          rel="noopener noreferrer"
        >
          write
        </a>{" "}
        more. Cooking for my family, playing basketball, shredding on my
        guitars, and maintaining a healthy lifestyle through exercise and
        nutritive food are currently my favorite hobbies.
      </p>

      <p>Thanks for visiting!</p>
      <SocialIcons />
    </StyledAbout>
  </Layout>
)

export default IndexPage
