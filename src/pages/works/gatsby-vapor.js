import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../../styles/style.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout title={siteTitle} description={siteDescription}>
      <SEO title="Vapor"/>
      <h1 style={{textAlign:"center", fontSize:"3em"}}>VAPOR</h1>
      <p style={{textAlign:"center"}}>A custom, simple blog starter with Gatsby. Made for minimalist.</p>
      <div className="button-box">
        <a href="https://gatsby-vapor.weensy.co" target="_blank" rel="noreferrer">
          <div className="button-demo">Demo site</div>  
        </a>
        <a href="https://github.com/weensy/gatsby-vapor" target="_blank" rel="noreferrer">
          <div className="button-repo">Repository</div>  
        </a>
      </div>
      <h3>Purpose</h3>
      <p>
        To create a blog starter with the theme of black letters written on white paper. It's a Medium-like, Apple-like simplicity. And focused on:
        <ul>
          <li>Concise design centered on typography</li>
          <li>Tagging and tag archive</li>
          <li>Dark mode switchable</li>
          <li>Fast search using Elasticsearch</li>
        </ul>
      </p>
      <h3>Normalize</h3>
      <p>The result of normalization for each tag:</p>
      <style>{css}</style> 
      <section className="norm-box" style={{
        background:"rgba(255, 255, 255, 1)",
        color:"rgba(0, 0, 0, 0.8)",
        borderRadius:"1em",
        padding:"1em",
        margin:"0.5em 0em"
      }}>
        <h1>Title1</h1>
        <hr/>
        <h2>Title2</h2>
        <hr/>
        <h3>Title3</h3>
        <hr/>
        <h4>Title4</h4>
        <hr/>
        <h5>Title5</h5>
        <hr/>
        <h6>Title6</h6>
        <hr/>
        <p><em>This is Italic. Italic type is a cursive font based on a stylised form of calligraphic handwriting.</em></p>
        <p><strong>This is Bold. A bold font weight makes letters of a text thicker than the surrounding text.</strong></p>
        <p><del>This is Strike. Strikethrough is a typographical presentation of words with a horizontal line through their center.</del></p>
        <p><code className="language-text">This is Code. In information theory and computer science, a code is usually considered as an algorithm that uniquely represents symbols from some source alphabet, by encoded strings, which may be in some other target alphabet.</code></p>
        <h4 style={{textAlign:"center"}}>Table</h4>
        <table>
          <thead>
            <tr>
                <th>Header1</th>
                <th>Header2</th>
                <th>Header3</th>
                <th>Header4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Data1</td>
                <td>Data2</td>
                <td>Data3</td>
                <td>Data4</td>
            </tr>
            <tr>
                <td>Data5</td>
                <td>Data6</td>
                <td>Data7</td>
                <td>Data8</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>$999</td>
            </tr>
          </tfoot>
        </table>
        <h4 style={{textAlign:"center"}}>List</h4>
        <h6>Ordered</h6>
        <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        </ol>
        <h6>Unordered</h6>
        <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        </ul>
        <h4 style={{textAlign:"center"}}>Blockquote</h4>
        <blockquote>
        <p>Do not go gentle into that good night,<br/>
        Old age should burn and rave at close of day;<br/>
        Rage, rage against the dying of the light.</p>
        <p>Though wise men at their end know dark is right,<br/>
        Because their words had forked no lightning they<br/>
        Do not go gentle into that good night.</p>
        <p>Good men, the last wave by, crying how bright<br/>
        Their frail deeds might have danced in a green bay,<br/>
        Rage, rage against the dying of the light.</p>
        </blockquote>
        <h4 style={{textAlign:"center"}}>Code</h4>
        <div className="gatsby-highlight" data-language="shell">
          <pre className="language-shell">
            <code className="language-shell">
              git init<br/>
              npm install<br/>
              gatsby develop
            </code>
          </pre>
        </div>
      </section>
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


const css = `
  // @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
  .norm-box {
    font-family: 'Open Sans', sans-serif;
    background-color: rgba(255, 255, 255, 0.9);
    color: rgba(0, 0, 0, 0.8);
    caret-color: rgba(0, 0, 0, 0.8);
    letter-spacing: -0.0125em;
  }
  .norm-box p {
    line-height: 1.75em;
  }
  .norm-box hr {
    border: 0em;
    height: 0.0625rem;
    background-color: rgb(174, 174, 178);
  }
  .norm-box h1 {
    font-size: 2.5rem;
    margin-bottom: 0em;
  }
  .norm-box h2 {
    font-size: 2.25rem;
    margin-bottom: 0em;
  }
  .norm-box h3 {
    font-size: 2rem;
    margin-bottom: 0em;
  } 
  .norm-box h4 {
    font-size: 1.75rem;
    margin-bottom: 0em;
  }
  .norm-box h5 {
    font-size: 1.5rem;
    margin-bottom: 0em;
  }
  .norm-box h6 {
    font-size: 1.25rem;
    margin-bottom: 0em;
  }
  .norm-box table {
    width: 100%;
    max-width: 44rem;
    border-collapse: collapse;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .norm-box thead {
    border-bottom: 0.0625rem;
    border-bottom-style: solid;
    border-color: rgb(209, 209, 214);
  }
  .norm-box tfoot {
    border-top: 0.0625rem;
    border-top-style: solid;
    border-color: rgb(209, 209, 214);
  }
  .norm-box th, .norm-box td {
    padding: 0.875rem;
  }
  .norm-box ol {
    padding-inline-start: 2.25em;
    margin-block-start: 1.25em;
    margin-block-end: 1.25em;
  }
  .norm-box ul {
    padding-inline-start: 2.25em;
    margin-block-start: 1.25em;
    margin-block-end: 1.25em;
  }
  .norm-box li {
    line-height: 2em;
  }
  .norm-box blockquote {
    border-left: 0.25em solid rgb(199, 199, 204);
    padding: 0em 0.75em;
    font-style: italic;
    margin-left: 2.25em;
    margin-right: 2.25em;
  }
  .norm-box pre {
    background-color: black;
    border-radius: 0.75em;
    padding: 1.5em 2.5em;
    line-height: 2.5em;
    font-size: 0.875em;
    /* border-style: solid; */
    /* border-width: 0.0625em; */
    /* border-color: rgb(229, 229, 234); */
  }
  .norm-box code {
    font-family: 'IBM Plex Mono', monospace;
    background-color: black;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0.25em;
    padding: 0em 0.1875em;
    font-size: 1em !important;
  }
  .norm-box pre code {
    padding: 0em;
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