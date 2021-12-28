import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as blogStyles from "./blog.module.scss"

function BlogPage() {
  const raw = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
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
      <ol className={blogStyles.posts}>
        {raw.allMarkdownRemark.edges.map(edge => (
          <React.Fragment>
            <li className={blogStyles.post}>
              <Link to={`${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
      <p>Posts will show up here. </p>
    </Layout>
  )
}

export default BlogPage
