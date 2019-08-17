import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
import Toolbox from "../components/toolbox"
import Tools from "../components/tools"
import ContactMe from "../components/contactme"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Introduction />
    <Toolbox />
    <Tools />
    <ContactMe />
  </Layout>
)

export default IndexPage
