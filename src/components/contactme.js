import React from "react"
import styled from "styled-components"
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLastfm,
  FaCodepen,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa"
import { GoMail } from "react-icons/go"

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

  .social-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .social-list li {
    font-size: 2rem;
    padding: 1rem;
    padding-bottom: 0;
  }

  @media (min-width: 1024px) {
    .social-list {
      width: 100%;
      justify-content: flex-start;
    }
    .social-list li {
      padding-bottom: 0;
    }
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

      <ul className="social-list">
        <li>
          <a
            href="https://twitter.com/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="http://instagram.com/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/antoniwan/#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="http://www.last.fm/user/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLastfm />
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/antoniwan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaSpotify />
          </a>
        </li>
        <li>
          <a href="mailto:hello@antoniorodriguez.us">
            <GoMail />
          </a>
        </li>
      </ul>
    </StyledContactMe>
  )
}
