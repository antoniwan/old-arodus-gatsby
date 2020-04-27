import React from "react"
import styled from "styled-components"
import SocialIcons from "./socialicons"

const StyledContactMe = styled.div`
  h2 {
    margin-bottom: 1.25rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

export default function ContactMe() {
  return (
    <StyledContactMe>
      <p>
        Contact me through any of the social platforms below to collaborate!
      </p>

      <SocialIcons />
    </StyledContactMe>
  )
}
