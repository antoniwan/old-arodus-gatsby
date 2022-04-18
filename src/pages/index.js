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
        Hi, my name is Antonio, and I enjoy leading teams and building products
      </p>
      <p>
        About a decade ago, a friend and I founded a web development company and
        later sold it to a marketing firm. This entrepreneurship experience was
        more educational than lucrative, quickly orienting me on how essential
        ethics, morals, and empathy are if I aspire to be a just leader and
        promote a healthy environment at work.
      </p>

      <p>
        Since then, I've worked as a Chief Technology Officer, an Engineering
        Manager, a Director, and an Individual Contributor to many teams,
        projects and products with various levels of effort and impact.
        Currently, I'm exploring different disciplines and have taken on a
        Technical Product Owner role at a Global tools company. Which is my
        favorite role? I honestly do not know, they all have pros and cons, and
        I absolutely enjoy them.
      </p>

      <p>
        Aside from work, I put most of my efforts into being a loving,
        conscious, and involved parent, a better husband, and a healthier
        person, mentally and physically.
      </p>

      <p>Thanks for visiting!</p>
      <SocialIcons />
    </StyledAbout>
  </Layout>
)

export default IndexPage
