import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import "../styles/style.css"
import Layout from "../components/layout"

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} mode="footer-only">
      <SEO title={siteTitle}/>
      <Helmet>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Helmet>
      <style>{css}</style>
      <div className="index-container">
        <div className="bio-card">
          <div className="bio-card-top">
            <div>
              <h1 className="bio-name">Weensy</h1>
              <h6 className="bio-info">self-taught problem solver 💡</h6>
              <h6 className="bio-info">open-source developer 💻</h6>
              <h6 className="bio-info">keyboard lover 💜</h6>
            </div>
            <Link className="bio-link" to={`/about`}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" xmlSpace="preserve">
                <g>
                  <path d="M37.95,4.66C45.19,1.66,53.13,0,61.44,0c16.96,0,32.33,6.88,43.44,18c5.66,5.66,10.22,12.43,13.34,19.95 c3,7.24,4.66,15.18,4.66,23.49c0,16.96-6.88,32.33-18,43.44c-5.66,5.66-12.43,10.22-19.95,13.34c-7.24,3-15.18,4.66-23.49,4.66 c-8.31,0-16.25-1.66-23.49-4.66c-7.53-3.12-14.29-7.68-19.95-13.34C12.34,99.22,7.77,92.46,4.66,84.93C1.66,77.69,0,69.75,0,61.44 c0-8.31,1.66-16.25,4.66-23.49C7.77,30.42,12.34,23.66,18,18C23.65,12.34,30.42,7.77,37.95,4.66L37.95,4.66z M50,47.13 c-2.48-2.52-2.45-6.58,0.08-9.05c2.52-2.48,6.58-2.45,9.05,0.08L77.8,57.13c2.45,2.5,2.45,6.49,0,8.98L59.49,84.72 c-2.48,2.52-6.53,2.55-9.05,0.08c-2.52-2.48-2.55-6.53-0.08-9.05l13.9-14.13L50,47.13L50,47.13z M42.86,16.55 c-5.93,2.46-11.28,6.07-15.76,10.55c-4.48,4.48-8.09,9.83-10.55,15.76c-2.37,5.71-3.67,11.99-3.67,18.58 c0,6.59,1.31,12.86,3.67,18.58c2.46,5.93,6.07,11.28,10.55,15.76c4.48,4.48,9.83,8.09,15.76,10.55c5.72,2.37,11.99,3.67,18.58,3.67 c6.59,0,12.86-1.31,18.58-3.67c5.93-2.46,11.28-6.07,15.76-10.55c4.48-4.48,8.09-9.82,10.55-15.76c2.37-5.71,3.67-11.99,3.67-18.58 c0-6.59-1.31-12.86-3.67-18.58c-2.46-5.93-6.07-11.28-10.55-15.76c-4.48-4.48-9.83-8.09-15.76-10.55 c-5.71-2.37-11.99-3.67-18.58-3.67S48.58,14.19,42.86,16.55L42.86,16.55z"/>
                </g>
              </svg>
            </Link>
          </div>
          <div className="bio-card-bottom">
            <Link className="bio-link" to={`/works`}>
              <div className="bio-card-button">works</div>
            </Link>
            <Link className="bio-link" to={`/blog`}>
              <div className="bio-card-button">blog</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const css = `
  :root {
    overflow-y: auto;
  }
  .site-container {
    display: grid;
    place-items: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0em;
  }
  .index-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bio-card {
    border-radius: 1em;
    padding: 2.4em;
    width: 20em;
    background-color: var(--color-card);
    margin-bottom: 0.1875em;
    cursor: default;
  }
  .bio-card div::selection,h1::selection,h6::selection {
    background: transparent;
  }
  .bio-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .bio-link {
    text-decoration: none;
    color: inherit;
  }
  .bio-link svg{
    width: 2em;
    fill: var(--color-id-4);
  }
  .bio-link svg:hover {
    fill: var(--color-id-3);
  }
  .bio-name {
    margin-top: -0.375em;
    margin-bottom: 0.125em;
    font-size: 2.5em;
    font-weight: 500;
  }
  .bio-info {
    margin-top: 0em;
    font-size: 1em;
    font-weight: 100;
  }
  .bio-card-bottom {
    display: flex;
    gap: 0.3em;
    margin-top: 1em;
  }
  .bio-card-bottom a {
    width: 100%;
  }
  .bio-card-button {
    background: var(--color-id-4);
    padding: 0.25em 1em;
    border-radius: 0.375em;
    text-align: center;
    color: var(--color-id-2);
  }
  .bio-card-button:hover {
    background: var(--color-id-3);
    color: var(--color-id-1);
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