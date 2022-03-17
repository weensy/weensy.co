import React, { Component } from "react";
import { Link } from "gatsby"

class Layout extends Component {
  render() {
    const { title, mode, children} = this.props

    return (
      <div className="site-container">
        {mode !== "footer-only" && 
          <div className="header-container">
            <Link
              className="header-title"
              to={`/`}
            >
              {title}
            </Link>
            <div className="nav-container">
              <ul className="header-nav">
                {/* <li><Link to={`/about`}>About</Link></li> */}
                {/* <li><Link to={`/works`}>Works</Link></li> */}
              </ul>
              <ul className="header-nav">

                <li><Link to={`/about`}>About</Link></li>
                <li><Link to={`/works`}>Works</Link></li>
                <li><Link to={`/posts`}>Blog</Link></li>

                {/* <li><Link to={`/posts`}>Posts</Link></li>
                <li><Link to={`/tags`}>Tags</Link></li>
                <li><Link to={`/series`}>Series</Link></li> */}
              </ul>
            </div>
          </div>
        }
        <main>{children}</main>
        <footer className="footer-copyright">
          {/* © {new Date().getFullYear()} {title} */}
          © 2019 - {new Date().getFullYear()} {title}
        </footer>
      </div>
    )
  }
}

export default Layout