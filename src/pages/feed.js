import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const StyledFeed = styled.div``

const FeedPage = () => (
  <>
    <SEO title="My blog is under construction" />
    <StyledFeed>
      <Post
        title={`This is a title text`}
        content={`California Gov. Gavin Newsom has signed a sweeping new labor law that extends wage and benefit protections to about a million workers — aimed primarily at drivers contracted by companies like Uber and Lyft.
        `}
        url={``}
        path={`/test-post`}
        coverImage={`https://images.unsplash.com/photo-1568839735394-bd203c82837e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`}
        authorID={`antoniwan`}
      />
      <Post
        title={`This is a title text`}
        content={`California Gov. Gavin Newsom has signed a sweeping new labor law that extends wage and benefit protections to about a million workers — aimed primarily at drivers contracted by companies like Uber and Lyft.
        `}
        url={``}
        path={`/test-post`}
        coverImage={`https://images.unsplash.com/photo-1568839735394-bd203c82837e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`}
        authorID={`antoniwan`}
      />
      <Post
        title={`This is a title text`}
        content={`California Gov. Gavin Newsom has signed a sweeping new labor law that extends wage and benefit protections to about a million workers — aimed primarily at drivers contracted by companies like Uber and Lyft.
        `}
        url={``}
        path={`/test-post`}
        coverImage={`https://images.unsplash.com/photo-1568839735394-bd203c82837e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`}
        authorID={`antoniwan`}
      />
    </StyledFeed>
  </>
)

export default FeedPage
