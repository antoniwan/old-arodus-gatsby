import React, { useState } from "react"
import styled from "styled-components"

import tools from "../data/tools"

const StyledToolbox = styled.section`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`

const StyledTool = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  h4 {
    text-align: center;
  }

  p {
    text-align: center;
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

const toolbox = () => {
  const [filter, setFilter] = useState("all")

  const filteredTools = tools
    .filter(tool => {
      const { prod, learning, hobby, favorite, hidden } = tool.flags
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
      }
    })
    .sort((a, b) => {
      return a.title > b.title ? 1 : -1
    })

  return (
    <StyledToolbox>
      <h2>Skillset Tools</h2>
      <p>
        Showing <strong>{filteredTools.length}</strong> tools
      </p>

      <div>
        <button
          onClick={() => {
            setFilter("favorites")
          }}
        >
          Favorites
        </button>
        <button
          onClick={() => {
            setFilter("pro")
          }}
        >
          In production
        </button>
        <button
          onClick={() => {
            setFilter("learning")
          }}
        >
          Actively learning
        </button>
        <button
          onClick={() => {
            setFilter("hobby")
          }}
        >
          Hobbyist
        </button>
        <button
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
