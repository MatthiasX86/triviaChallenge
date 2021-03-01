import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import {Intro} from "../views/intro"



const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Intro />
    </Layout>
  </>
)

export default IndexPage
