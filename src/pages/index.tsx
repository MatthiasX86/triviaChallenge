import React, {FunctionComponent} from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import App from "../app"

const IndexPage: FunctionComponent = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <App />
    </Layout>
  </>
)

export default IndexPage
