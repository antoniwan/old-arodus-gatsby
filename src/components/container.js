import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 0 auto;
  max-width: var(--max-container-width);
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: 960px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`

export default ({ children }) => (
  <Section className={`container`}>{children}</Section>
)
