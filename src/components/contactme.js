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
        Want assistance with a project? Contact me through the links below.
        Still here? Check out the sick{" "}
        <a
          target="_blank"
          href="https://open.spotify.com/user/antoniwan/playlist/18Fchy5u9YkOvUqtAKqMj1"
          rel="noopener noreferrer"
        >
          classical
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://open.spotify.com/user/antoniwan/playlist/7gqDk94DAF0O5ifBuKAlVH"
          rel="noopener noreferrer"
        >
          salsa
        </a>{" "}
        playlists I created for you, and thanks for visiting!
      </p>

      <SocialIcons />
    </StyledContactMe>
  )
}
