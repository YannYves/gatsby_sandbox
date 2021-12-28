import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as footerStyles from "./footer.module.scss"
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
      <footer className={footerStyles.footer}>
        Created by {data.site.siteMetadata.author}, © {currentYEar}{" "}
      </footer>
    </div>
  )
}

export default Footer
