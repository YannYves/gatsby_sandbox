import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
`

// TODO refacto this weird stuff below

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
            <img
              src={node.data.target.file.url}
              alt={node.data.target.file.fileName}
            />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {data.contentfulBlogPost.body &&
        renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog
