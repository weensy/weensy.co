import React, { Component } from "react";
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Layout extends Component {
  render() {
    const { title, description, children} = this.props
    const toggler = (
      <div className="toggler">
        <ThemeToggler>{({ theme, toggleTheme }) => (
          <label className="tog">
            <input
              type="checkbox"
              onChange={e =>
                toggleTheme(e.target.checked ? "dark" : "light")
              }
              checked={theme === "dark"}
              className="tog-checkbox"
            />
            {theme === "dark" ? (
              <div className="tog-text">
                Light
              </div>
            ) : (
              <div className="tog-text">
                Dark
              </div>
            )}
          </label>
        )}</ThemeToggler>
      </div>
    )

    return (
      <div className="site-container">
        <div className="header-container">
          <div className="nav-container">
                <Link
                  className="header-title"
                  to={`/`}
                >
                  {title}
                </Link>
            <ul className="header-nav">
              {/* <li style={{marginLeft: "0em"}}> */}
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li><Link to={`/tags`}>Tags</Link></li>
              <li>{toggler}</li>
              {/* <li><a href="https://aesthetic.codes" target="_blank" rel="noopener noreferrer">Devlog</a></li> */}
            </ul>
          </div>
        </div>
        <main>{children}</main>
        <footer className="footer-copyright">
          © {new Date().getFullYear()} {title}, {description}
        </footer>
      </div>
    )
  }
}

export default Layout
