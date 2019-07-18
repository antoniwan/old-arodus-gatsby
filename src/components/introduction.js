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
        I lead software engineering and technology for a{" "}
        <a
          href="https://m8agency.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          marketing agency
        </a>{" "}
        in Miami, Florida and absolutely enjoy learning and working with web
        technologies. We have the{" "}
        <a
          href="https://www.google.com/search?ei=UawsXYbDOOnO5gLykYbgDQ&q=best+job+in+the+world&oq=best+job+in+the+world"
          target="_blank"
          rel="noopener noreferrer"
        >
          best job
        </a>{" "}
        in the world!
      </p>

      <p>
        Away from the screen, I enjoy playing{" "}
        <a
          href="https://www.instagram.com/stories/highlights/17908582195073038/"
          target="_blank"
          rel="noopener noreferrer"
        >
          guitar
        </a>
        , basketball, eating (and making) tasty food and spending time with
        family and friends.
      </p>
    </StyledIntroduction>
  )
}

export default Introduction
