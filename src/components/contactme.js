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
        I'm always available for mentoring and projects so write me to{" "}
        <a href="mailto:antoniwan+arodus@gmail.com?subject=Hey,%20Antonio!">
          antoniwan@gmail.com
        </a>{" "}
        or check out my social media links below. After you follow me, check out
        the sick{" "}
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
        playlists I created for you. Thank you for visiting!
      </p>

      <SocialIcons />
    </StyledContactMe>
  )
}
