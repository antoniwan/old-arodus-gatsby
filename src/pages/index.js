import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tools from "../components/tools"
import ContactMe from "../components/contactme"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Tools />
    <ContactMe />
  </Layout>
)

export default IndexPage
