import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Toolbox from "../components/toolbox"
import Tools from "../components/tools"
import ContactMe from "../components/contactme"
import profilepicture from "../images/profile-picture.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />

    <figure className="full-width">
      <img
        src={profilepicture}
        alt="Profile picture of Antonio Rodriguez, smiling"
      />
    </figure>
    <p>
      I lead software engineering and innovation for a{" "}
      <a href="https://m8agency.com" target="_blank" rel="noopener noreferrer">
        marketing agency
      </a>{" "}
      in Miami, Florida. Away from screens, I love playing{" "}
      <a
        href="https://www.instagram.com/stories/highlights/17908582195073038/"
        target="_blank"
        rel="noopener noreferrer"
      >
        guitar
      </a>
      , eating and making tasty food, and spending time at home with my family.
    </p>
    <Toolbox />
    <Tools />
    <ContactMe />
  </Layout>
)

export default IndexPage
