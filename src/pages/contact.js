import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Yann Dubois +33 7 68 35 17 48</p>
      <a
        href="https://twitter.com/DuboisYann15"
        target="_blank"
        rel="noreferrer"
      >
        My twitter
      </a>
    </Layout>
  )
}

export default Contact
