import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/style.css"

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout title={siteTitle} description={siteDescription}>
      <SEO title="Series"/>
      <div className="blog-nav">
        <Link to={`/posts`}>
          <div className="blog-nav-deactivated">Posts</div>
        </Link>
        <Link to={`/tags`}>
          <div className="blog-nav-deactivated">Tags</div>
        </Link>
        <div className="blog-nav-activated">Series</div>
      </div>
      <article>
        <section style={{textAlign: "center"}}>
        <h1>- Soon -</h1><br/><br/>
        </section>
      </article>
      <article>
        <section style={{textAlign: "center"}}>
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