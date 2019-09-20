import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const StyledFeed = styled.div`
  padding: 25px;
  max-width: 700px;
  margin: 0 auto;
`

const posts = [
  {
    title: `This is a title text.`,
    content: (
      <p>
        California Gov. Gavin Newsom has signed a sweeping new labor law that
        extends wage and benefit protections to about a million workers — aimed
        primarily at drivers contracted by companies like Uber and Lyft.
      </p>
    ),
    url: ``,
    path: `/test-post`,
    coverImage: ``,
    authorID: `antoniwan`,
  },
  {
    content: (
      <p>
        California Gov. Gavin Newsom has signed a sweeping new labor law that
        extends wage.
      </p>
    ),
    url: ``,
    path: `/test-post`,
    authorID: `antoniwan`,
  },
  {
    title: `This is a title.`,
    content: (
      <p>
        California Gov. Gavin Newsom has signed a sweeping new labor law that
        extends wage and benefit protections to about a million workers — aimed
        primarily at drivers contracted by companies like Uber and Lyft.
      </p>
    ),
    url: ``,
    path: `/test-post`,
    coverImage: `https://images.unsplash.com/photo-1568839735394-bd203c82837e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`,
    authorID: `antoniwan`,
  },
  {
    title: `This is a title text.`,
    content: (
      <p>
        California Gov. Gavin Newsom has signed a sweeping new labor law that
        extends wage and benefit protections to about a million workers — aimed
        primarily at drivers contracted by companies like Uber and Lyft.
      </p>
    ),
    url: ``,
    path: `/test-post`,
    coverImage: `https://images.unsplash.com/photo-1568839735394-bd203c82837e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`,
    authorID: `antoniwan`,
  },
  {
    title: `This is a title text.`,
    content: (
      <p>
        California Gov. Gavin Newsom has signed a sweeping new labor law that
        extends wage and benefit protections to about a million workers — aimed
        primarily at drivers contracted by companies like Uber and Lyft.
      </p>
    ),
    url: ``,
    path: `/test-post`,
    authorID: `antoniwan`,
  },
  {
    content: (
      <>
        <p>
          California Gov. Gavin Newsom has signed a sweeping new labor law that
          extends wage and benefit protections to about a million workers —
          aimed primarily at drivers contracted by companies like Uber and Lyft.
        </p>
        <p>
          Lorem ipsum loret sum palescen ipsum beta kappa loret summa cum laude.
        </p>
      </>
    ),
    url: ``,
    path: `/test-post`,
    coverImage: `https://images.unsplash.com/photo-1568839735394-bd203c82837e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`,
    authorID: `antoniwan`,
  },
]

const FeedPage = () => (
  <>
    <SEO title="My blog is under construction" />
    <StyledFeed>
      {posts.map(({ title, content, url, path, coverImage, authorID }) => {
        return (
          <Post
            title={title}
            content={content}
            url={url}
            path={path}
            coverImage={coverImage}
            authorID={authorID}
          />
        )
      })}
    </StyledFeed>
  </>
)

export default FeedPage
