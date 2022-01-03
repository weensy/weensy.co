import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/style.css"

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout title={siteTitle} description={siteDescription}>
      <SEO title="₩€€₦$¥"/>
      <div className="bio-card">
        <h1 className="bio-name">Weensy Kim</h1>
        <h6 className="bio-info">self-taught problem solver 💡</h6>
        <h6 className="bio-info">open-source developer 💻</h6>
        <h6 className="bio-info">keyboard lover 💜</h6>
      </div>
      <article>
        {/* <section style={{textAlign: "center"}}> */}
        <section>
        
        </section>
        <section style={{margin: "7em 0em"}}>
          <h4>
            Works
          </h4>
          <p>
            works
          </p>
          <h4>
            Series
          </h4>
          <p>
            series
          </p>
        </section>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index props data={data} />
    )}
  />
)