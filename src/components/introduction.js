import React from "react"
import styled from "styled-components"

const StyledIntroduction = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

function Introduction() {
  return (
    <StyledIntroduction>
      <h1>Antonio Rodriguez</h1>
      <h2>Software Engineer. Accidental Cofounder. Manager. Mentor.</h2>
      <p>
        I lead software engineering and innovation for a{" "}
        <a
          href="https://m8agency.com"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        , eating and making tasty food, and spending time at home with my
        family.
      </p>
    </StyledIntroduction>
  )
}

export default Introduction
