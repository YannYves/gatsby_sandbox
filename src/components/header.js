import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"
import * as headerStyles from "./header.module.scss"

function Header() {
  return (
    <header>
      <h1>my website</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/about">
              about
            </Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
