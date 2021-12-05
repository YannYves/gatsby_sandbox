import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      {
        //unique content that's gonna be render via props.children
      }
      <h1>Hello</h1>
      <h2> Something Else</h2>
      <p>Need a dev ? </p>
      <Link to="/contact"> Contact me</Link>
    </Layout>
  )
}

export default IndexPage
