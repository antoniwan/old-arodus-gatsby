import React from "react"
import styled from "styled-components"
import {
  TiThumbsUp,
  TiThumbsDown,
  TiMessage,
  TiArrowForwardOutline,
} from "react-icons/ti"

const StyledPostActions = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    font-size: 1.2rem;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: color 1s ease;
    padding: 4px;

    &:hover {
      color: var(--color-pink);
      transition: color 0.2s ease;
    }
  }

  svg {
    padding: 2px;
    font-size: 2rem;
    margin-right: 4px;
  }
`

const PostActions = () => (
  <StyledPostActions>
    <ul>
      <li>
        <button>
          <TiThumbsUp />
          Like
        </button>
      </li>
      <li>
        <button>
          <TiThumbsDown />
          Dislike
        </button>
      </li>
      <li>
        <button>
          <TiMessage />
          Comment
        </button>
      </li>
      <li>
        <button>
          <TiArrowForwardOutline />
          Share
        </button>
      </li>
    </ul>
  </StyledPostActions>
)

const StyledPost = styled.section`
  border-radius: 3px;
  border: 1px solid #dddfe2;
  position: relative;
  background-color: #fff;
  margin-bottom: 10px;

  .post-wrapper {
    padding: 12px 12px;
  }

  .content {
    margin: 8px 0;
    font-size: 1.4rem;
    line-height: 1.2;
  }
`

const Post = ({ content }) => (
  <StyledPost>
    <div className="post-wrapper">
      <div className="content">{content}</div>
      <PostActions />
    </div>
  </StyledPost>
)

export default Post
