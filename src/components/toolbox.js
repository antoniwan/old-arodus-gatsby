import React, { useState, useEffect } from "react"

import tools from "../data/tools"

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

  const totalItems = filteredTools.length

  console.log(`All Tools`, { tools })
  console.log(`Filterd Tools`, { filteredTools })

  return (
    <div>
      <h2>toolbox</h2>
      <p>
        Showing <strong>{totalItems}</strong> tools
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
          <li key={`${tool.title}-${Math.random()}`}>
            <h4>{tool.title}</h4>
            <p>{tool.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default toolbox
