import React, { useState, useEffect } from "react"
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

  button {
    border: 2px solid var(--color-pink);
    border-radius: 30px;
    background: var(--color-white);
    padding: 5px 10px;
    margin: 0;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;

    font-weight: 100;
    font-size: 1.2rem;
    letter-spacing: 0.2px;
    padding: 0.6rem 1.6rem;
    transition: all 0.2s;
  }

  label {
    font-style: italic;
  }

  .back-to-top {
    margin-top: 2rem;
  }

  .exercise-list {
    &.showing {
      opacity: 1;
      transition: all 0.5s;
    }
    &.hidden {
      opacity: 0;
    }
  }

  @media (min-width: 1024px) {
    .back-to-top {
      display: none;
    }
  }
`

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 2rem 1rem;
  transition: all 0.2s;

  &:hover {
    background: var(--color-black);
    color: var(--color-white);
  }

  h3 {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 5px;
    opacity: 0.9;
  }

  p {
    font-size: 1.4rem;
    font-weight: 100;
    opacity: 0.4;
    margin: 0;
  }

  .heading {
    display: grid;
    grid-template-columns: 1fr;
  }
  .links {
    a {
      font-size: 1.4rem;
      margin-right: 10px;
    }
    margin-bottom: 0.5rem;
  }
  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0.2rem;

    span {
      font-size: 1.1rem;
      background-color: var(--color-black);
      color: var(--color-white);
      border-radius: 5px;
      padding: 0.1rem 0.5rem;
      margin: 0.2rem;
      text-align: center;
      font-style: italic;
      opacity: 0.5;

      &:hover {
        opacity: 1;
        transition: all 0.5s;
      }

      &.incomplete {
        background-color: var(--color-red);
      }
      &.design {
        background-color: var(--color-blue);
      }
      &.react {
        background-color: #61dafb;
        color: var(--color-black);
      }
    }
  }

  @media (min-width: 1024px) {
    .heading {
      grid-template-columns: 1fr 200px;
    }
    .links {
      text-align: right;
      margin-left: 10px;
    }
  }
`

const ProjectList = ({ projects }) => {
  const listItems = projects.map(project => {
    const { name, live_preview, source_code, tags, description } = project
    return (
      <StyledItem key={name}>
        <div className="heading">
          <h3>{name}</h3>
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
        </div>
        <p className="project-description">{description}</p>
        <div className="tags">
          {tags.map(t => (
            <span key={t} className={t}>
              {t}
            </span>
          ))}
        </div>
      </StyledItem>
    )
  })
  return <ul> {listItems} </ul>
}

const PracticeExercisesPage = () => {
  const [Understood, setUnderstood] = useState(false)

  function handleCheckboxClick(e) {
    setUnderstood(true)
    localStorage.setItem("understood_practice_exercises", true)
  }

  useEffect(() => {
    setUnderstood(localStorage.getItem("understood_practice_exercises"))
  }, [])

  return (
    <Layout>
      <SEO title="Practice and Exercises" />
      <StyledPracticeExercises>
        <h2>Practice & Exercises</h2>
        <p>
          Most of these exercises are not feature complete and I never intended
          for them to be. They each served their purpose for me to learn a
          specific something or as proofs-of-concept.
        </p>
        <p>
          I'll be uploading many of these now that I'm on parental leave and
          have the time to do so!
        </p>

        <p className="checkbox">
          <label>
            {!Understood && (
              <input
                type="checkbox"
                onClick={handleCheckboxClick}
                defaultChecked={Understood}
                disabled={Understood ? true : false}
              />
            )}
            I understand Antonio
            {!Understood && (
              <React.Fragment>, show me the practice exercises</React.Fragment>
            )}
            .
          </label>
        </p>

        <div className={`exercise-list ${Understood ? "showing" : "hidden"}`}>
          <ProjectList projects={practiceExercises} />
          <button
            className="back-to-top"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            Back to top
          </button>
        </div>
      </StyledPracticeExercises>
    </Layout>
  )
}

export default PracticeExercisesPage
