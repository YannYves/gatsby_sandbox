import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Footer() {
  const currentYEar = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      <footer>
        Created by {data.site.siteMetadata.author}, © {currentYEar}{" "}
      </footer>
    </div>
  )
}

export default Footer
