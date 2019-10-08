import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import brands from "../data/Brands"
import BrandItem from "../components/BrandItem"

const StyledBrandList = styled.div``

const BrandList = () => {
  return (
    <StyledBrandList>
      {brands.map((brand, index) => {
        return (
          <BrandItem key={index} logo={brand.logo_filename} alt={brand.name} />
        )
      })}
    </StyledBrandList>
  )
}

const StyledWork = styled.div``

const WorkPage = () => {
  console.log(brands)
  return (
    <Layout>
      <SEO title="This work page is under construction" />
      <StyledWork>
        <h2>Work work work work work!</h2>
        <p>
          Besides building my own companies, I've built stuff for many brands.
        </p>
        <BrandList />
        <p>
          Because of the nature of work that we do at agencies I'm not able to
          display most of my work. Sorry!{" "}
          <span role="img" aria-label="Nervous Smile Emoji">
            😅
          </span>
        </p>
      </StyledWork>
    </Layout>
  )
}

export default WorkPage
