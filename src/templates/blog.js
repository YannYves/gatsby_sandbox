import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

// TODO refacto this weird stuff below

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node, "node")
        return (
          <>
            <img src={node.data.target.src} alt={node.data.target.title} />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default Blog
