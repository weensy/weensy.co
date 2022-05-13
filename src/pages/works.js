import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/style.css"


const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  return (
    <Layout title={siteTitle} description={siteDescription}>
      <SEO title="Works"/>
        <div className="works-container">
          <article>
            <Link to={`/works/gatsby-lam`}>
              <Img fluid={data.gatsbyLam.childImageSharp.fluid}/>
              <section>
                <h3>London After Midnight</h3>
                <h5>Gatsby Starter</h5>
              </section>
            </Link>
          </article>
          <article>
            <Link to={`/works/gatsby-vapor`}>
              <Img fluid={data.gatsbyVapor.childImageSharp.fluid}/>
              <section>
                <h3>Vapor</h3>
                <h5>Gatsby Starter</h5>
              </section>
            </Link>
          </article>
          <article className="works-translations">
            <h1>✍️Translations</h1>
            <section>
              <img src="https://maccy.app/img/maccy/Logo.png" alt="logo"/>
              <div>
                <h3>Maccy</h3>
                <h6>Clipboard manager for macOS</h6>
                <h5>Translate to Ja🇯🇵 {'&'} Ko🇰🇷</h5>
              </div>
            </section>
          </article>
          {/* <article>
            <Img fluid={data.gatsbyLam.childImageSharp.fluid}/>
            <section>
              <h3>XLR8R</h3>
              <h5>Excel Add-in</h5>
            </section>
          </article>
          <article>
            <Img fluid={data.gatsbyLam.childImageSharp.fluid}/>
            <section>
              <h3>LXKB</h3>
              <h5>Mech Keyboard</h5>
            </section>
          </article> */}
        </div>
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
    gatsbyVapor: file(relativePath: {eq: "works/gatsby-vapor.png"}) {
      childImageSharp {
        fluid(cropFocus: NORTH, maxWidth: 1440, maxHeight: 888) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyLam: file(relativePath: {eq: "works/gatsby-lam.png"}) {
      childImageSharp {
        fluid(cropFocus: NORTH, maxWidth: 1440, maxHeight: 888) {
          ...GatsbyImageSharpFluid
        }
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