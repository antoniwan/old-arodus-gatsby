import React from "react"
import styled from "styled-components"
import format from "date-fns/format"
import {
  TiThumbsUp,
  TiThumbsDown,
  TiMessage,
  TiArrowForwardOutline,
} from "react-icons/ti"

const StyledPostActions = styled.div`
  border-top: 1px solid var(--color-light-gray);

  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 12px;
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
    margin: 0 0 12px 0;
    font-size: 1.4rem;
    line-height: 1.2;
  }

  .coverPicture {
    position: relative;
    margin-left: -13px;
    margin-right: -13px;
    height: 200px;
    border-top: 1px solid #dddfe2;
    border-bottom: 1px solid #dddfe2;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`

const Post = ({ title, content, coverImage, date }) => {
  return (
    <StyledPost>
      <div className="post-wrapper">
        {title && (
          <div className="title">
            <h3>{title}</h3>
            <h4>{format(date, "MM/dd/yyyy")}</h4>
          </div>
        )}

        <div className="content">{content}</div>

        {coverImage && (
          <figure className="coverPicture">
            <img src={coverImage} alt="" />
          </figure>
        )}

        <PostActions />
      </div>
    </StyledPost>
  )
}

export default Post
