import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Styled404 = styled.section`
  h1,
  h2,
  p {
    margin-bottom: 1.5rem;
  }
  img {
    border-radius: 6px;
    margin-bottom: 1.5rem;
    border: 2px solid black;
  }
`

const NotFoundPage = () => {
  const [loading, setLoading] = useState(false)
  const [giphy, setGiphy] = useState(null)

  useEffect(() => {
    const getRandomGiphy = async (tag = "fail") => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GATSBY_GIPHY_API_KEY}&tag=${tag}&rating=R`
      )
      if (response.ok) {
        setLoading(true)
        const { data } = await response.json()
        setGiphy(data.image_url)
        setLoading(false)
      } else {
        throw new Error(`Failed to retrieve Giphy gif with the tag: ${tag}`)
      }
    }
    getRandomGiphy()
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Styled404>
        <h1>You have big 404 energy.</h1>
        <p>Here's a random gif.</p>

        {loading && <h3>Loading...</h3>}

        {giphy && !loading && <img src={giphy} alt="Animated funny moment" />}
      </Styled404>
    </Layout>
  )
}

export default NotFoundPage
