import React from "react";
import { Link } from "gatsby"

const Layout = props => {
  const { title, mode, children} = props
  const [ toggleNav, setToggleNav ] = React.useState(false)
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
            <div className={`header-burger ${toggleNav ? `header-burger-opened` : ``}`}>
              <div
                className="hamburger hamburger--collapse"
                aria-label="Menu"
                role="button"
                aria-controls="navigation"
                onClick={() => setToggleNav(!toggleNav)}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
      }
      <div className={`burger-menu ${toggleNav ? `burger-menu-opened` : ``}`}>
        <ul>
          <li><Link to={`/about`}>About</Link></li>
          <li><Link to={`/works`}>Works</Link></li>
          <li><Link to={`/posts`}>Blog</Link></li>
        </ul>
      </div>
      <main>{children}</main>
      <footer className="footer-copyright">
        {/* © {new Date().getFullYear()} {title} */}
        © 2019 - {new Date().getFullYear()} {title}
      </footer>
    </div>
  )
}

export default Layout