import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function About() {
  return (
    <Layout>
      <h1>About</h1>
      <h3>Hi I'm Yann, a full stack developer based in Lyon, France</h3>
      <p>
        GO DM
        <Link to="/contact"> Let's get in touch </Link>
      </p>
    </Layout>
  )
}

export default About
