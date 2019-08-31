import React, { useState } from "react"
import styled from "styled-components"

import tools from "../data/tools"

const StyledToolbox = styled.section`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  button {
    border: none;
    background: pink;
    padding: 5px 10px;
    cursor: pointer;

    &.is-active {
      background: black;
      color: white;
    }
  }

  @media (min-width: 1024px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

const StyledTool = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cccccc;
  padding: 15px;

  h4 {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.4rem;
    font-weight: 100;
    opacity: 0.6;
  }
`

const Tool = ({ title, desc, url }) => {
  return (
    <StyledTool key={`${title}-${Math.random()}`}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </StyledTool>
  )
}

const tagLines = {
  favorites: `These greatly affect my daily work.`,
  learning: `I'm also focused on learning and mastering these.`,
  pro: `I currently use these in production work.`,
  hobby: `I use these for personal/fun projects and prototypes.`,
  legacy: `"Remember that the most valuable antiques are dear old friends."`,
  all: `These tools have helped become the professional I am today.`,
}

const toolbox = () => {
  const [filter, setFilter] = useState("favorites")

  const filteredTools = tools
    .filter(tool => {
      const { prod, learning, hobby, favorite, legacy, hidden } = tool.flags
      if (filter === "all") return !hidden
      switch (filter) {
        case "pro":
          return prod && !hidden
        case "learning":
          return learning && !hidden
        case "favorites":
          return favorite && !hidden
        case "hobby":
          return hobby && !hidden
        case "legacy":
          return legacy && !hidden
      }
    })
    .sort((a, b) => {
      return a.title > b.title ? 1 : -1
    })

  return (
    <StyledToolbox>
      <h2>Tools of the trade</h2>
      <p>{tagLines[filter]}</p>

      <div>
        <button
          className={`${filter === `favorites` ? "is-active" : ""}`}
          onClick={() => {
            setFilter("favorites")
          }}
        >
          Favorites
        </button>
        <button
          className={`${filter === `pro` ? "is-active" : ""}`}
          onClick={() => {
            setFilter("pro")
          }}
        >
          In production
        </button>
        <button
          className={`${filter === `learning` ? "is-active" : ""}`}
          onClick={() => {
            setFilter("learning")
          }}
        >
          Actively learning
        </button>
        <button
          className={`${filter === `hobby` ? "is-active" : ""}`}
          onClick={() => {
            setFilter("hobby")
          }}
        >
          Hobbyist
        </button>
        <button
          className={`${filter === `legacy` ? "is-active" : ""}`}
          onClick={() => {
            setFilter("legacy")
          }}
        >
          Legacy
        </button>
        <button
          className={`${filter === `all` ? "is-active" : ""}`}
          onClick={() => {
            setFilter("all")
          }}
        >
          All
        </button>
      </div>

      <ul>
        {filteredTools.map(tool => (
          <Tool {...tool} />
        ))}
      </ul>
    </StyledToolbox>
  )
}

export default toolbox
