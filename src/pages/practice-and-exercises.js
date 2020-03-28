import React from "react"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import practiceExercises from "../data/practiceexercises"

const StyledPracticeExercises = styled.div`
  ul {
    font-size: 1.6rem;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 15px;
    border: 2px solid black;
    overflow: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;

    li {
      padding: 1rem 2rem;
    }
  }
`

const ProjectList = ({ projects }) => {
  const listItems = projects.map(project => {
    const { name, live_preview, source_code, tags, description } = project
    return (
      <li key={name}>
        <h3>{name}</h3>
        <span className="tags">{tags}</span>
        <span className="links">
          {live_preview && (
            <a href={live_preview} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          )}
          {source_code && (
            <a href={source_code} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </span>
        <span className="project-description">{description}</span>
      </li>
    )
  })
  return <ul> {listItems} </ul>
}

const PracticeExercisesPage = () => (
  <Layout>
    <SEO title="Practice and Exercises" />
    <StyledPracticeExercises>
      <h2>Practice & Exercises</h2>
      <p>
        Most of these "projects" are incomplete. However, they all served their
        purpose for me to learn a specific something or as proofs-of-concept.
      </p>
      <p>
        I'll be uploading many of these now that I'm on parental leave and have
        the time to do so!
      </p>

      <ProjectList projects={practiceExercises} />
    </StyledPracticeExercises>
  </Layout>
)

export default PracticeExercisesPage
