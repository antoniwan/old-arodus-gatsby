import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import brands from "../data/Brands"

const StyledBrandItem = styled.div`
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 920px) {
    img {
      max-height: 55px;
      max-width: 100px;
    }
  }
`

const BrandItem = ({ alt, logo }) => {
  const imageSource = require(`../images/brands/${logo}`)
  return (
    <StyledBrandItem>
      <img src={imageSource} title={alt} alt={alt} />
    </StyledBrandItem>
  )
}

const StyledBrandList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 920px) {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
  }
`

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

const StyledWork = styled.div`
  p {
    /* the first paragraph has inline styles */
  }
`

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="This work page is under construction" />
      <StyledWork>
        <h2>Work, work, work, work, work, work!</h2>
        <p style={{ marginBottom: "4rem" }}>
          Besides building my own companies, I've built stuff for many brands.
          IMHO, the best part about being a software developer for a marketing
          agency is the wild variability of projects (scope, lifespan,
          technologies, stakeholders, timelines).
        </p>

        <BrandList />

        <p>Let's work together!</p>
      </StyledWork>
    </Layout>
  )
}

export default WorkPage
