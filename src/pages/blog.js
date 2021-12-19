import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

function BlogPage() {
  const raw = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {raw.allMarkdownRemark.edges.map(edge => (
          <React.Fragment>
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          </React.Fragment>
        ))}
      </ol>
      <p>Posts will show up here. </p>
    </Layout>
  )
}

export default BlogPage
