import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledBlog = styled.div``

const BlogPage = () => (
  <Layout>
    <SEO title="My blog is under construction" />
    <StyledBlog>
      <h2>
        My blog is <strong>under construction</strong>.
      </h2>
    </StyledBlog>
  </Layout>
)

export default BlogPage
