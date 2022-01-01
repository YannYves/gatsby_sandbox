import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello there ! </h1>
      <h2> I am leraning some Jamstack skills </h2>
      <p>Need a dev ? </p>
      <Link to="/contact"> Contact me</Link>
    </Layout>
  )
}

export default IndexPage
