import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../../styles/style.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout title={siteTitle} description={siteDescription}>
      <SEO title="London After Midnight"/>
      <h1 style={{textAlign:"center", fontSize:"3em"}}>London After Midnight</h1>
      <p style={{textAlign:"center"}}>A custom, image-centric theme for Gatsby. </p>
      <div className="button-box">
        <a href="https://gatsby-lam.weensy.dev" target="_blank" rel="noreferrer">
          <div className="button-demo">Demo site</div>  
        </a>
        <a href="https://github.com/weensy/gatsby-london-after-midnight" target="_blank" rel="noreferrer">
          <div className="button-repo">Repository</div>  
        </a>
      </div>
      <h3 style={{marginTop:'2em'}}>Purpose</h3>
      <hr/>
      <p>
        It is based on <a href="https://github.com/ImedAdel/gatsby-london" target="_blank" rel="noreferrer">London</a> for Gatsby.<br/>
        London is a white theme, so the purpose is to make a dark version of it. Also add some features.
      </p>
      <h3 style={{marginTop:'2em'}}>Changes</h3>
      <hr/>
      <h5 style={{marginTop:'0.5em'}}>Darken</h5>
      <p>Full recolor every elements. </p>
      <p>
        <Img fluid={data.darkening.childImageSharp.fluid}/>
        <div style={{textAlign:'center',fontStyle:'italic'}}>London After Midnight | London</div>
      </p>
      <h5>Redesign imageless postcard</h5>
      <p>Add date and excerpt. A little lighter to distinguish it from the background color of pages.</p>
      <p>
        <Img fluid={data.postcard.childImageSharp.fluid}/>
        <div style={{textAlign:'center',fontStyle:'italic'}}>London | London After Midnight</div>
      </p>
      <h5>Hashtag</h5>
      <p>Add tag function for posts</p>
      <p>
        <Img style={{maxWidth:'564px',margin:'0 auto'}} fluid={data.taggedpostcard.childImageSharp.fluid}/>
        <div style={{textAlign:'center',fontStyle:'italic'}}>Tagged postcard</div>
      </p>
      <p style={{marginTop:'2em'}}>
        <Img fluid={data.tagarchive.childImageSharp.fluid}/>
        <div style={{textAlign:'center',fontStyle:'italic'}}>Tag archive</div>
      </p>
      <p style={{marginTop:'2em'}}>
        <Img fluid={data.tagpage.childImageSharp.fluid}/>
        <div style={{textAlign:'center',fontStyle:'italic'}}>Tagged posts page</div>
      </p>
      <h5>Highlight Syntax</h5>
      <p>Implement by using Prism.js.</p>
      <p>
        <Img fluid={data.highlighter.childImageSharp.fluid}/>
        <div style={{textAlign:'center',fontStyle:'italic'}}>London | London After Midnight</div>
      </p>
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
    darkening: file(relativePath: {eq: "works/gatsby-lam/darkening.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    postcard: file(relativePath: {eq: "works/gatsby-lam/postcard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tagarchive: file(relativePath: {eq: "works/gatsby-lam/tagarchive.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    taggedpostcard: file(relativePath: {eq: "works/gatsby-lam/taggedpostcard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tagpage: file(relativePath: {eq: "works/gatsby-lam/tagpage.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    highlighter: file(relativePath: {eq: "works/gatsby-lam/highlighter.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 70) {
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
      <AboutPage props data={data} />
    )}
  />
)