import React from "react"
import styled from "styled-components"

const StyledBrandItem = styled.div``

export default function BrandItem({ alt, logo }) {
  const imageSource = require(`../images/brands/${logo}`)
  return (
    <StyledBrandItem>
      <img src={imageSource} title={alt} alt={alt} />
    </StyledBrandItem>
  )
}
