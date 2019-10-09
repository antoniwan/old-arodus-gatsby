import React from "react"
import styled from "styled-components"
import uuidv1 from "uuid/v1"
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
    date: new Date(2019, 9, 11),
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
    date: new Date(2019, 9, 11),
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
    date: new Date(2019, 9, 11),
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
    date: new Date(2019, 9, 11),
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
    date: new Date(2019, 9, 11),
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
    date: new Date(2019, 9, 11),
  },
]

const FeedPage = () => (
  <>
    <SEO title="My blog is under construction" />
    <StyledFeed>
      {posts.map(
        ({ title, content, url, path, coverImage, authorID, date }) => {
          return (
            <Post
              key={uuidv1()}
              title={title}
              content={content}
              url={url}
              path={path}
              coverImage={coverImage}
              authorID={authorID}
              date={date}
            />
          )
        }
      )}
    </StyledFeed>
  </>
)

export default FeedPage
